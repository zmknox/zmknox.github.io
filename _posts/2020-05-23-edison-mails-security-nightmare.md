---
layout: post
title: "Edison Mail's Security Nightmare"
subtitle: "How full access to my email was exposed to another user"
date: 2020-05-23 13:00 -0400
---

Last Saturday, I woke up, updated some apps on my phone, and opened my email app, Edison Mail. I was greeted by a splash page telling me about a new account sync feature[^1], and to choose which email address was my primary account of the two I had in the app. I selected my Gmail address and tapped continue.

After I got into my inbox and my email reloaded, something was off. I noticed a notification email from Twitch that a streamer that I don't watch had gone live. Tapping into the email, I noticed both the username and the email address it was directed to weren't mine. Going back into my inbox, I noticed a lot of emails that weren't for me. I opened the sidebar, and there it was. In addition to my two email accounts was a Gmail account that wasn't mine. Something had gone horribly wrong.

At first I thought it was a fluke bug—a very very bad fluke bug, but a fluke nonetheless. I emailed Edison support and promptly revoked access to my accounts to the app. It soon became clear that this was not just a fluke, but an _incredibly bad_ security issue. 

<!-- more -->

## How Edison Responded

About 2 hours after [I tweeted about the issue](https://twitter.com/zmknox/status/1261645534445604865), Edison support woke up on Twitter and started [replying to concerns from myself and others](https://twitter.com/edison_apps/status/1261681576456237056) that they were looking into the issue. They later explained that the update had gone out late the night prior[^2], and would be being pulled.

After they had time to shut down the bug and analyze the issue, Edison [wrote a blog post](https://medium.com/changing-communications/edison-mail-resolved-software-issue-that-potentially-exposed-ios-user-accounts-6-480-potentially-39116d7ae261) (and sent an email to users affected) explaining 6,480 users[^3] of their iOS app were affected by this issue. They further explained that users of this version would be locked out and to sign into Edison mail again using the newly released bug fix.

Edison also briefly explained the nature of the bug. It effectively linked you and another user together into one Edison sync account. You could access their email, and they could access yours. Do note that this is _full access_, not simply reading, but writing, deleting, forwarding, etc. Everything you would need to impersonate your new pen pal.

Finally, Edison's blog post explains that "No passwords or credentials were exposed or compromised". While this may be _technically_ true, it doesn't mean much when the thing another user _did_ gain access to was my email inbox. Everything goes through email! Receipts, notifications, account recovery, correspondence. It's probably the number one thing I don't want to be compromised.

## What Edison Hasn't Told Us

In addition to their's blog post, Edison's founder, Hetal Pandya, found her way into [my Twitter mentions](https://twitter.com/spicycarot/status/1262880427640938496), trying to defend Edison mail from criticism about their past behavior about neglecting user privacy[^4]. Seeing as she reached out to me, I [sent her a tweet](https://twitter.com/zmknox/status/1262882238561234950) with questions I had previously sent to Edison support[^5] (who still has yet to reply to my support requests). In our exchange, she replied multiple times, but didn't really answer my questions. This seems to be a trend with all of their responses: to give the minimum possible answer, and dodge the hard questions. As a result:

- We don't know what specifically in their architecture made this bug possible.
- We don't know how they missed this in testing, despite stating that they have a staging environment.
- We don't know what specific measures they're putting in place to make sure this can never happen again.

Edison publishes a [privacy commitment](https://www.edison.tech/privacy-commitments) which reads like a joke now. They claim that "Security is paramount" and "We keep mail private", which simply weren't true here. They also claim GDPR and CCPA compliance, which also went straight out the window. Nobody should be trusting Edison with their email until and unless they explain their email security architecture and design. I believe they are capable of explaining this, and they've gone in depth before about their data collection design and practices. I look forward to reading your technical deep-dive, Edison team.

But while we wait for them, let's instead analyze what could have been done to stop this bug from happening.

## How Could This Have Been Avoided?

I'm a software developer. I know bugs happen. I also know that bugs this big are capable of being caught before they hit production. Let's look at ways this bug could have been avoided.

### Finding The Bug In Testing

First, lets assume you're a new engineer at Edison, and are tasked with working on this WIP feature. You aren't an architect, and you didn't choose how your databases are structured. What can you do to avoid bugs like this? Testing!

I primarily work on building systems which make it easier for developers to do testing, so I'm certainly a little biased, but I truly think testing can be a valuable tool when dealing with complicated systems like this.

You can test from the smallest scale to the largest. Unit tests will check an individual function's abilities. Integration tests test how those functions work together. Acceptance tests will run those functions against live (usually development or staging) infrastructure to make sure it all still works together. Automated testing tools are all over the place these days, and continuous integration pipelines make it easy to run them on every commit or pull request. 

For this bug in particular, I would test with some dummy Edison Mail users in a staging environment, setting them up with the new sync service to verify that it is working correctly. This could be automated to be done before any pull request is merged or app update is released.

Additionally, I would [dogfood](https://en.wikipedia.org/wiki/Eating_your_own_dog_food) the sync feature on my own team for some time to make sure we weren't experiencing any bugs like this. This process is more manual, but could potentially find edge cases an automated test cannot.

### Making The Bug Impossible

If you're building this infrastructure from scratch, however, the best approach fixing this bug is to make this kind of bug impossible to create in the first place, keeping each user's data effectively sandboxed from each other.

Ideally, you would let a bigger fish handle your credential storage. iOS allows for this with [iCloud Keychain](https://support.apple.com/en-gb/HT204085), which will handle syncing for you.

But if your app, like Edison's, is cross platform, you may want to keep these credentials on a server independent of a platform vendor. To do this, the app could store encrypted credentials on the server created using a key on a local device. When a user wants to log in on a new device, they could send a notification to an active device to approve the login, else require them to re-login to their email accounts. This system makes sure that Edison never has your credentials to share[^6], and that your account can only be activated on a new device with your consent.

## Thoughts on Edison

In case it wasn't clear: I'm furious with Edison Mail over this bug. Nobody should ever be given access to thee wrong email account by mistake. No apology can wash this away from their reputation. They will forever be the email app that strayed user trust. I'm certainly not trusting them with my email anymore, and neither should you.

Why, then, am I so persistent at trying to get answers on what happened from Edison Mail? Because users deserve to know how their data was mis-handled. Users should know what went wrong, and how its being fixed. This isn't a "sweep it under the rug" moment for Edison, and they need to know that.

Now if you'll excuse me, I'll be over here looking for a new email app to call home[^7].

-------------------------

[^1]: I was familiar with a similar sync feature from [Spark](https://apps.apple.com/us/app/spark-email-app-by-readdle/id997102246), so I didn't immediately have concerns about this. 
[^2]: Specifically "10:50 PM PST", which is not currently a valid time zone due to [Daylight Saving Time](https://en.wikipedia.org/wiki/Pacific_Time_Zone#Daylight_time).
[^3]: Edison has not made it clear whether this means "users" or "email accounts". I had two accounts loaded into Edison, and both of them have gotten the breach email.
[^4]: In February, Edison had [a bit of a privacy scandal](https://www.vice.com/en_us/article/pkekmb/free-email-apps-spying-on-you-edison-slice-cleanfox) regarding how they use user data (specifically around their purchases) to help drive their other business: selling analytics. In my opinion, while these concerns are valid, I was willing to, at the time, trust that the toggles in Edison Mail's settings to turn off this tracking behavior would do just that.
[^5]: In case anyone involved deletes these tweets in the future, [here are some screenshots](/resources/edison/conversation1.jpg) of [these conversations](/resources/edison/conversation2.jpg).
[^6]: They would have access to an _encrypted_ version of your credentials, but, so long as they are done with a secure enough encryption algorithm, this is a non-issue unless you're being pursued by state-sponsored actors.
[^7]: I'm still crying over Mailbox's shutdown.
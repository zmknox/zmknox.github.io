---
layout: post
title: "What If Developer ID Came To iOS?"
subtitle: "This time, the solution is actually sweet"
date: 2020-08-17 19:00 -0400
---

I have an iPhone. I prefer to use it, and its operating system, over other smartphones, but that means I am limited in how I can install apps onto it. Lately, with [all](https://twitter.com/dhh/status/1272604267933655045) of the [news](https://www.businessinsider.com/apple-explains-why-xbox-game-pass-is-not-on-iphone-2020-8) surrounding [issues](https://www.youtube.com/watch?v=euiSHuaw6Q4) in the App Store, I started to wonder: What would the iPhone and iPad look like if they allowed me to install apps from outside the App Store?

Let's imagine it...

<!-- more -->

![Steve Jobs at WWDC 2007, promoting web apps as a "sweet solution"](/resources/developer-id/sweet-solution.png){: .img-thumbnail .mx-auto .d-block }

<br />
## Current Distribution Methods

Today, Apple [offers multiple ways to distribute apps](https://help.apple.com/xcode/mac/current/#/dev31de635e5) for the iPhone, but most of these are fairly specialized:

- **App Store**: By far the most common distribution method. You sign in with your Apple ID, tap Get or Buy, pay Apple, and install your app. This has the fewest restrictions to a user, but requires developers pass App Review, and adhere to [their guidelines](https://developer.apple.com/app-store/review/guidelines/).
- **TestFlight**: Apple's official solution for beta testing. Apps in TestFlight _generally_ must follow the same guidelines as in the App Store, and must pass Beta App Review (which, while looser with some things, still adheres to the App Store guidelines). Test apps are limited to 10,000 testers, and have a 90 day expiration for every build.
- **Enterprise**: Large companies can pay Apple (and be vetted) for an [Enterprise Distribution Certificate](https://developer.apple.com/programs/enterprise/) to distribute their internal apps. These apps can be distributed in any manner (Safari, a directory app, etc), but may only do so to those internal to the company.
- **Ad-Hoc**: Members of the Developer Program can create an app binary that they can distribute however they want, but they can only be installed on devices registered in their developer account (of which you are extremely limited[^1]). This can be useful if you need to deploy an app to many test devices.
- **Development**: This allows for a quick build-and-run cycle for developing apps using Xcode. Builds expire in 7 days for free accounts, and in 1 year for members of the Developer Program. Of note: [AltStore](https://altstore.io/) uses this to distribute its apps.

From looking at these options, their message is clear: If you're broadly distributing an app, you need to use the App Store.

The Mac, notably, has an additional option. Developers can use "Developer ID" to sign and notorize[^2] their apps to distribute however they want. Apple then allows users the choice of if they want to allow these apps (defaulting to yes)[^3].

![Security preferences in macOS Catalina, showing options to allow apps only from the App Store, or also from Identified Developers](/resources/developer-id/macos-developer-id-preferences.png){: .img-fluid .mx-auto .d-block }

This seems to have worked out pretty well for the Mac. Let's try bringing that concept to the iPhone.

<br />
## New, But Familiar

Let's imagine I'm tasked with adding support for Developer ID to iOS. What decisions would I make? What restrictions should I put in place? How will this all work?

Here's what I'd do:

#### 1. Developer ID and Notorization Required

To broadly distribute an app outside the App Store, developers must still sign it and have it notarized by Apple. This is an automated vetting process which gives Apple the ability check for malicious apps, disabling them if necessary.

Unsigned apps would not be allowed, in the name of security.

#### 2. Limited Entitlements and Features

Developers would be limited in what entitlements they can use. This includes CarPlay, which even today developers must apply specially for, but may also include other limitations such as for HealthKit, HomeKit, or Sign In with Apple. These limitations will likely start somewhat restrictive, loosening over time.

Apps would still be able to use iCloud and Apple's Push Notification service, much like Mac apps can today.

#### 3. User Opt-In

Before a user can install one of these apps, they must opt-in via Settings. This would look very similar to the Mac (though with a more "secure" default):

![Concept images showing the flow to enable installation of apps by Identified Developers in App Store settings](/resources/developer-id/developer-id-settings-concept.png){: .img-fluid .mx-auto .d-block }
###### Concepts for Developer ID Settings

As an extra percaution, the user must enter their passcode before changing this setting, ensuring that they are the ones who want to make this change.

#### 4. Install via Safari

Developer ID-signed Apps can be installed via a special kind of link in Safari. This is actually [possible today for Enterprise, Ad-Hoc, and Development apps](https://support.apple.com/guide/deployment-reference-ios/intro-to-distributing-in-house-apps-apda0e3426d7/web). Developers provide a `itms-services://` link to their app manifest, and the system parses it, offering to install the app:

![Installing my app AnotherLens via the web](/resources/developer-id/ad-hoc-install.png){: .iphone-image .mx-auto .d-block }
###### How installing Ad-Hoc apps works today. I tried it!

If we're opening this up more broadly, however, we should expand on this functionality. Turn that simple pop up into a modal sheet including some more detailled text and possibly even some developer information to show who is distributing it.

![Concept image showing my proposed new modal for installing an app from Safari](/resources/developer-id/developer-id-install-concept.png){: .iphone-image .mx-auto .d-block }
###### Concept for app installation with Safari

I would also force any call to open an install link to first bring Safari to the foreground. This makes sure that if you press "Cancel", you're in a known trusted app[^4]. Apps providing third-party stores or options to update would still be able to link to install manifests, but you would need to go through Safari first.

#### 5. No App Store Nicities

Developers must provide their own payment systems, their own validation checks, and their own update check mechanisms. They would not be able to use Apple's In-App Purchase system, the App Store's automatic updates, or StoreKit's receipt validation.

There would likely be a market for third parties to build replacements for these, like how the [Sparkle](https://sparkle-project.org/) framework can automatically check for Mac app updates on launch.

#### 6. No Outside Promotion

Apps in the App Store would not be allowed to promote apps outside the App Store. This includes links in your UI, advertising, and in webpages you link to directly[^5]. This rule is in a similar vein to Apple's rejection of apps linking out to websites for in-app purchase. Once using an App Store app, any digital purchases made within it are using the App Store.

#### 7. XProtect

Apple's XProtect anti-malware system, used on the Mac, will be put into place on iOS. Any app which Apple flags as malicious may be disabled remotely. In the past, this has almost always been used for intentionally malicious software[^6].

<br />

## What are the Benefits?

With Developer ID support, software distribution would become far closer to how it is on the Mac, where Apple only enforces its review guidelines within its App Store. This will allow for lots of new opportunities:

- Microsoft could release a version of their [Xbox Game Pass app](https://www.theverge.com/2020/8/6/21358074/microsoft-xcloud-cloud-gaming-condems-apple-app-store-rules-iphone-ios) with support for their new xCloud streaming service.
- Epic Games could sell V-Bucks using [their own payment system in Fortnite](https://www.epicgames.com/fortnite/en-US/news/the-fortnite-mega-drop-permanent-discounts-up-to-20-percent)[^7].
- Apple wouldn't have to worry about losing iPhone sales over the US government forcing [foreign corporations like Tencent off of their platform](https://www.theverge.com/2020/8/8/21358941/wechat-ban-apple-china-business-trump-tariffs-trade-manufacturing-impact). Tencent could simply release WeChat themselves.
- Riley Testut could distribute his [Delta emulator](https://deltaemulator.com/) without needing to use AltStore.

Additionally, this will provide at least some level of competitive pressure on the App Store to innovate. Developers could still choose to use the App Store for all of its convenience, built-in support for features like In-App Purchase, and trust from users, but it would no longer be the _only_ choice, which may cause Apple to update their rules and rates to compete.

<br />
## What are the Consequences?

The biggest consequence: malware will probably exist. Will it be common? I don't know. But it will probably exist, and that's something Apple has done an admirable job at keeping out of the App Store up to now. I believe that most of the warnings and opt-in requirements in my concept will mitigate a lot of user negligence, but it definitely won't stop it all.

From Apple's perspective, the biggest consequence is losing control. Since the launch of the App Store, Apple has had final say on what can and what can't be mass distributed to iPhone users, and this changes that. That's a huge change that they would have to come to terms with.

<br />
## Would this actually happen?

The rising pressure against the App Store might cause them to implement a solution like this, but the Apple of right now seems unwilling to budge on their App Store policies. We'll just have to wait and see what the future holds...

<br />

--------------------

[^1]: Specifically, 100 per device type, which you can revoke when you renew your membership to reclaim slots. Interestingly, it counts iPods separately from iPhones, so if you need a new test device, consider an iPod touch?
[^2]: Notorization isn't strictly necessary, but it is now required for new builds of Developer ID-signed apps as of macOS Catalina.
[^3]: Developers can also choose not to sign their app at all. This requires users use the "open" command on their app before first launch, and is generally discouraged.
[^4]: Currently, install links will show a simple alert controller, which is useful for enterprise app directory apps, but could lead to popup loops by a malicious app.
[^5]: User-generated content (tweets in a Twitter app, for example) would be fine.
[^6]: One incident where Apple shut a legitimate app down was when [Zoom installed a local web server](https://techcrunch.com/2019/07/10/apple-silent-update-zoom-app/) to make it easier to join meetings, which ended up being a big security risk.
[^7]: And yes, create their own store on iOS. Competition is a good thing! (I can't imagine they'd like the scary looking ⚠️ I put on the install screen though)
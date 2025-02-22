---
layout: post
title: "Stadium Browser 1.2"
subtitle: Back in business
date: 2020-11-06T12:00:00-05:00
extlink: https://apps.apple.com/us/app/stadium-full-screen-browser/id1533596615
---

The past month has been quite a ride. My app blew up on [Reddit](https://www.reddit.com/r/Stadia/comments/j1ar15/use_stadia_on_ios_with_controller_support_easily/), was reported on by [big tech blogs](https://www.theverge.com/2020/9/29/21493098/stadia-ios-browser-hack-reddit-stadium-app-store-apple-ipad-iphone-ipados), and then was [removed by Apple](https://www.vice.com/en/article/m7aqwx/apple-will-remove-fan-app-that-allowed-stadia-streaming-on-ios).

I'm now happy to report that Stadium is officially back in the App Store! Introducing [Stadium 1.2](https://apps.apple.com/us/app/stadium-full-screen-browser/id1533596615).

<!-- excerpt --><!-- more -->

## What's Different?

I had to remove my hooks between the GameController framework and WebKit. Apple said that I was "Using public APIs in a manner not prescribed by Apple". This is unfortunate, but not a complete loss because...

I also added a new "Override Custom User Agent" field, which will update the reported user agent _after page load_, which allows page JavaScript to read a different User Agent string from what you sent in your HTTP request.

Finally, I (think I) fixed the tip jar.

## How do I use Stadia with Stadium 1.2?

Set your Primary URL field to
```
https://stadia.google.com/home
```

Set your Custom User Agent String to
```
Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36
```

Set your Override Custom User Agent String to
```
Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15
```

Disable "Require Full Screen Video" if you want to see Stadia's menu overlays. I kept this as an option because forcing the video full screen may be better for smaller devices (hello there, iPhone 12 mini users).

Before you can properly use Stadia, you'll need to authenticate to Google. In the "..." menu, select "Authenticate Without Custom User Agent", and when prompted, visit
```
https://accounts.google.com/
```

Once you've logged in and are at your account page, tap "Done". You should be good to go!

## What Controllers Work?

The Stadia controller will almost assuredly work, presuming that your device is on the same WiFi network as your controller.

Bluetooth controllers _might_ work. Using the "Override User Agent" I mentioned, Stadia should properly support the [Gamepad API](https://developer.mozilla.org/en-US/docs/Web/API/Gamepad_API), but iOS doesn't always seem to pass that through. **Please send me your feedback on how this works for you!** I have gotten it to work more than once, but definitely not every time I tried.

Keyboards might also work, but I don't expect it to be a great experience.

## Thank You!

Thank you to everyone who has been supportive of this project. I've received many kind words on Reddit, Discord, and from many in the press. This was a fun little project I built in a weekend on a whim, and I'm glad you all liked it.

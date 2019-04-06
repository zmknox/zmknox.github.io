---
layout: post
title: "Building an Effective Swift Playground"
subtitle: "Making the most out of the many quirks and features of playgrounds"
date: 2019-04-06 16:00 -0400
---

[Swift Playgrounds for iPad](https://www.apple.com/swift/playgrounds/) is a really cool tool. It allows us to build experiences using real iOS APIs directly on iOS, and more importantly allows us to combine interactive experiences, code, and prose into a single composition. It's primarily used to teach kids to write code, but I could see it easily become a nice way to familliarize more experienced developers with a new API or framework in bite sized chunks.

But there are a lot of pieces to the playgrounds format, and a lot you need to keep in mind. I've built multiple playgrounds as [WWDC scholarshop applications](https://zachknox.com/2019/03/25/WWDC19-scholarship-application.html), and have watched or played with many more. With this, I think I've gained some insight into how you can make your playground a really great experience. Here are some of my tips to building an effective playground.

<!-- more -->

_Before I begin, note that this post was written with Swift Playgrouns 2.2 in mind. Version 3.0 is in beta as of this writing, and looks to have some interesting changes regarding [modules](https://developer.apple.com/documentation/swift_playgrounds/structuring_content_for_swift_playgrounds/using_modules_to_share_code_in_a_playground_book)._

---------------------------

## Develop in Xcode on a Mac. Run in Playgrounds on iPad.

This first tip seems trivial, but I think it's important. Can you run a playground on your Mac? Absolutely. You can even make macOS specific playgrounds. Unless you're prototyping, don't intend for your playground to run on a Mac. The experience of interacting and modifying a playground on an iPad is so much more fun and inviting, and makes for a better experience.

<br />
## Use Playground Pages

Look at a screenshot of Playgrounds for iPad. What do you see?

![Swift Playground with text on left and live view on right](/resources/playgrounds-sidebyside.png){: .mx-auto .d-block }

Half of the screen is taken up by this big text and code section! You can shift the live view into full screen, sure, but that's taking away half of the functionality of a playground.

A playground page can contain a wealth of information. You can add in [all sorts of markup](https://developer.apple.com/library/archive/documentation/Xcode/Reference/xcode_markup_formatting_ref/index.html) to them, letting you add instructions, background info, tutorials, or whatever else you might need to explain to a user. In addition, this is where you can add code to your playground which will run when you tap the "Run My Code" button. This is really great for allowing users a chance to modify a live view's properties.

Additionally, you can have _multiple_ pages in your playground, represented in the file structure as folders with a name like `MyPageName.playgroundpage/`, with a `Contents.swift` file inside to hold the page text (You can also have a `LiveView.swift` file in your page if you want to instantiate your live view outside of the visible page text). Having additional pages gives you the opportunity to advance through an idea or concept without revealing it all at once. It also allows you the chance to show a difference live view depending on the context of the page at hand.

Here's an example from my experience: in [my 2018 WWDC scholarship submission](https://zachknox.com/2018/04/02/WWDC-scholarship-application.html), I had three pages. The first provided the main premise for the game, the second showed the problem, and the third provided solutions and some code the user could modify. Pages provide a sense of progression, while also only showing a user what they need to see at that moment.

#### On Markup

Try using a variety of markup options when writing your pages. One of my favorites is the "Experiment" markup, allowing you to add a callout of something that a user can try. Another useful piece is links, as you can link to other pages in your playground! If you want to link to simply the next page, that's even easier, by simply linking to `@next`.

<br />
## Use the Sources Folder

You don't need to put all of your code in your playground's pages, and you probably shouldn't! If you're building out complex views, data structures, algorithms, or whatever else, you should probably put the bulk of that code into the `Sources/` folder. You can put pretty much any Swift file in there and access it from your pages, so long as classes, variables, and functions are all marked as `public`. You can build out all sorts of complex code, then provide a simple API to call inside your pages. This can be great when teaching a code concept, as it allows your users to understand the concept without having any extra baggage surrounding it.

The `Sources/` folder is only for your code, however. There's another folder for everything else...

<br />
## Use the Resources Folder

Have any images, video, sound effects, or music? Have any plist or JSON files you need to read? Have any other static resource you want to use? The `Resources/` folder is where all of that goes! You can access any of the resources in this folder as you would a file in the target of an iPhone app. This provides an easy, no-fuss place to put anything you need to use in your playground that isn't code.

### Storyboards, Asset Catalogs, and more

Want to use a storyboard to build your user interface? Or an Asset Catalog to keep all your image assets? I've got good news and bad news. You _can_ use them, but they first need to be compiled into `.storyboardc` and `.car` files respectively. The former can be done with `ibtool` in your terminal. The latter is a bit more involved. Luckily, there's a better way.

<br />
## Use a Playground Book

Playgrounds on iPad actually have two formats. A `.playground` bundle is quite simple, simply containing your pages, sources, and resources. A `.playgroundbook`, however, provides a lot more customization into how all of that content is presented.

The core of a playground book is its `Manifest.plist` file, containing configuration information describing how to structure your playground. For example: you can give your playground book an image that is shown in the Playgrounds app's selection view. Check out [Apple's documentation on playground books](https://developer.apple.com/documentation/swift_playgrounds/structuring_content_for_swift_playgrounds) to see what all is available.

Additionally, you can specify chapters within your playground book. This might be useful if you want to build a longer form playground that can be revisited across multiple sessions. Each chapter and page also contains its own `Manifest.plist` to provide more options.

Important note: Playground Books are only supported on iPad, you cannot simply run them inside Xcode. There is, however, a great way to build them in Xcode provided by Apple.

### Apple's Playground Book Template

Apple provides [a truly great template](https://developer.apple.com/download/more/?=Swift%20Playgrounds%20Author%20Template) for building a playground book. It provides an area for you to write your code (which is placed into sources), a place for your resources, and a starter chapter with a page for future expansion. This template takes care of compiling all of these files into one `.playgroundbook` bundle, while also bringing a lot of convienence to the developer.

This template also includes a `LiveViewTestApp` target, allowing you to iterate on your live view rapidly in app form, without having to constantly copy your playground book to your iPad.

But my favorite part about this template is that it will **compile your storyboards and asset catalogs for you**! You can work with them almost exactly as you would when building a normal app, and it all just works. The only thing to take note of is that you _must_ clean your build folder (Product menu > Clean Build Folder) whenever you modify those resource files.

<br />
## Use Cutscenes for Showing without Interactivity

If you want to show something to a user without having interactive code and a live view, such as for introducing or defining a concept, you can use cutscenes. Cutscenes are treated like special pages within a chapter of a Playground Book, and are stored in a `.cutscenepage` folder. You can create a cutscene using any HTML, CSS, JavaScript, or SVGs you'd like, and can even include video! [Check out Apple's cutscene documentation](https://developer.apple.com/documentation/swift_playgrounds/structuring_content_for_swift_playgrounds/adding_a_cutscene_to_a_playground_book) if you want to learn more.

<br />
## Focus your Live Views on One Task

Your live view is supposed to be a contained experience directly relevant to a playground page (we'll discuss pages later). **Your live view is not an app**. You don't need to have a title screen in there, or a credits screen, or a big about box. Or even a bunch of instructions. When your live view starts, it should be immediately ready to be played with. The one exception I can think of is a game where enemies start appearing immediately, in which case you may just need a  "tap to begin"—or you may just want to disable the live view from auto-starting. Any of that explanation text can be in a page's markup.

Ideally, your live view will be just that—one view. Keeping each live view small and bite sized really helps to guide the experience, and keep the pace moving. If you have any pushed or presented views, try to keep them small or quick, as to not distract from the overall experience. Want to show more? Add more pages with different or modified live views!

<br />
## Conform to `PlaygroundLiveViewSafeAreaContainer`

You should conform your view to the [`PlaygroundLiveViewSafeAreaContainer` protocol](https://developer.apple.com/documentation/playgroundsupport/playgroundliveviewsafeareacontainer). Doing this gives you a layout guide which keeps the buttons shows by Playgrounds in mind. You can use this to make sure your interface isn't hidden underneath those buttons (like the "Run My Code" button).

Of note: I've found that in practice this doesn't provide me with a useful layout guide in views I push on top of my primary view controller, but your mileage may vary.

<br />
## Detecting Device Orientation Isn't Fun

Does your playground rely on knowing the orientation of the iPad to work right, such as if you're showing a camera view that needs to be right-side up? I've got bad news for you. when you try getting the device orientation from [`UIDevice.current.orientation`](https://developer.apple.com/documentation/uikit/uidevice/1620053-orientation), you'll always get a `.unknown` value. This is not helpful. In fact, this almost killed my WWDC19 scholarship submission. But all hope is not lost.

iOS does actually provide a second way to get the orientation, sort of. [The `interfaceOrientation` property ot UIViewController](https://developer.apple.com/documentation/uikit/uiviewcontroller/1621373-interfaceorientation) will actually give us a useful value—but the API was deprecated in iOS 8. This is not ideal, but it does give you a way to, at least as of now (and probably not for long), get an orientation value. It is important to note, however, that left and right are opposite of what you might expect here, as it is returning the orientation of the interface, and not of the device.

<br />
## Remember: You're Not Making an App

There is so much more to playgrounds than just a weird way to show some view controller. Make the most of it! Putting all of these pieces together can make for a much richer experience, and provide a user with greater enjoyment when using your playground. Use pages to describe your live view, and to let your users change what it shows. Use cutscenes to help set the tone, without distracting the user. And of course, use the live view to add a cool interactive experience to tie it all together.

I hope you found some of these tips helpful, and can use them to better your playgrounds in the future!
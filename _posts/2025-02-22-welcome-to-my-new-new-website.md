---
layout: post
title: "Welcome to my new new website!"
description: "I moved from Jekyll to Eleventy!"
date: 2025-02-22T12:00:00-05:00
categories: meta
---

Hello and welcome to my _NEW_ new website. If everything goes well, it should look almost exactly the same[^1].

Around nine years ago, I set this website up with [Jekyll]() and [GitHub Pages](). Since then, it's gone to a new host (I'm currently hosting it using [Cloudflare Pages]()), switched primary domain names (though most old links should still redirect), and now is undergoing a brain transplant. From Jekyll to [Eleventy]()!

<!-- excerpt --><!-- more -->

So here's the deal: Jekyll is a great tool, but I could basically use it at the surface level. I did some cool stuff, like making my [projects](/projects) & (secret) [TV](/tv) pages data driven and adding "link post" support to this blog, but those were all playing within the sandbox of Jekyll and Liquid as provided. So when the sandbox broke, I panicked.

Last month, I thought to add that nice new little footer text you see down there after my copyright and privacy link. I tried to run a build locally, and my Ruby configuration complained that I had something messed up. I threw out the lockfile (as I would do in a Node.js project) and started over, and things seemed OK... until I went to publish those changes. Cloudflare complained about my configuration and wouldn't build it.

And look, it's probably a silly little issue that anyone who knows Ruby could fix in like 15 minutes or less. But I know nothing about Ruby. I write JavaScript and TypeScript for my day job, and some Swift here and there—but I've never even touched Ruby (as much as some of my Rails convert friends may have wanted me to in college).

### Eleventy?

I ultimately went with using Eleventy as my Jekyll replacement for two reasons. First, it's JavaScript based, which means I, a professional JavaScript developer, am much more likely to be able to debug anything that may go wrong. Second, my internet pal [Robb Knight](https://rknight.me) has been singing Eleventy's praises for a while now. Robb seems pretty smart, so I took his recommendation.

My experience with configuring my site has been _mostly_ smooth[^2], but I had to change a bit about how I think about the site. Eleventy is a more minimal in its base package. It expects you to extend it with separate npm packages if you need extra functionality, like special markdown parsing. But extending base Eleventy is actually quite easy.

For example: On my old site, my RSS and JSON feeds were made using files with liquid templates. It kind of felt like a hack, but it worked. Thankfully, with Eleventy, there's a better way. I can use Eleventy's [RSS plugin](https://www.11ty.dev/docs/plugins/rss/) to have it generate a proper feed for me with a few settings in my configuration file.

My site doesn't yet do much particularly complicated with these abilities yet, since my initial priority was just "make my website work again". But I'm excited to have the opportunity to have more capability looking forward.

I haven't really used Eleventy enough to truly be able to give it a rating or recommend others move their sites over to it, but it seems pretty solid so far. If you're looking for a new static-site generator for your site, and you feel comfortable with JavaScript, it's definitely worth a look.

### Onward

I'm sure I'll have at least one more blog post here this year. But in the meantime, thanks for checking out my _new_ website!

[^1]: I did make a couple of design tweaks. I tweaked the navbar to use the previously mobile-only layout everywhere, and made my current projects show one entry per row. But it's like 95% the same.
[^2]: The worst issue I ran into was an issue where all the dates rendered on my website were off by one. This was because it assumed a date without atime was midnight UTC. Since I live in the US, that meant that the value it rendered was the date prior, as it wanted to render a local date. Eleventy [lists this as a "common pitfall"](https://www.11ty.dev/docs/dates/#dates-off-by-one-day), but I tend to think it's a bad default. I have no idea what the time zone is of the Cloudflare server that will render my site. The render behavior of my local build should not be different from my server based on the time zone of my local machine.

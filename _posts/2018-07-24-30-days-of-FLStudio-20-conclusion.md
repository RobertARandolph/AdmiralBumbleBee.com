---
layout: post
title: "30 days with FLStudio 20 - Part 12: Conclusion"
comments: true
date:   2018-07-24_08:57:37 
categories: music
tags: ['FLStudio', 'DAW']
image:
description: The last post in the FLStudio series.
series: FLStudio
---

{::nomarkdown}
<img src="/assets//" alt="">
<div class="image-caption"></div>
{:/nomarkdown}

{::nomarkdown}
<img src="/assets/FLStudio/40k.png" alt="40 thousand words">
<div class="image-caption">40,000+ words</div>
{:/nomarkdown}

It's been 42 days since I started doing "30 days" with FLStudio. I haven't covered everything. This review is over 40,000 words (not including my notes, but including metadata inside the posts), which is the cutoff for classification as a 'novel'. I've written a novel on FLStudio. Great... hmm...

I spent 133 hours writing and working on this post. According to [time sink](https://manytricks.com/timesink/) I spent 230 hours using FLStudio in 42 days. That worked out to almost exactly 8 hours a day for 42 days. (I do schedule this, so I'm not too surprised)

As with all of these sorts of reviews, I feel like I could keep writing for a couple more months, but it's time to end it so I can move on... for now.

I'm going to discuss some things that I didn't cover in the other posts, plus give my overall thoughts on the product.

Lots of typing, few images.

**Other posts in this series**:

{% assign fls = site.posts | where: "series", "FLStudio" | sort: 'date' %}
<ul>
{% for my_page in fls %} 
    {% if page.url != my_page.url  %}
        <li><a class="page-link" href="{{ my_page.url | prepend: site.baseurl }}">{{ my_page.title | split: '-' | last }}</a></li>
    {% endif %}
{% endfor %}
</ul>

<!--more-->



# Contents
{:.no_toc}
* TOC
{:toc}

# Introduction, again.

FLStudio is a DAW. It's a _modern_ DAW. A lot of people seem to have this warped view that it's a toy or just a 'beat machine' of sorts. I can understand that. Not too long ago FLStudio was basically just a simple product that you'd make some bleeps and bloops in.

It's 2018 now, and FLStudio has progressed lighting fast to being a DAW that's _more_ than capable of working with the types of music that are topping the pop charts.

Does that mean it's the best at it though? Allow me some time here to address that.

# Mac?

FLStudio 20 marks the release of the [macOS](https://en.wikipedia.org/wiki/MacOS) version of FLStudio. A question I've been asked many times is 'is it ready'?

I did this _entire_ review on macOS. Every single bit of it. I didn't reboot to windows a single time. Not one time.

It's not all candy and unicorns though. During this review I've not been able [to use keyboard shortcuts](https://forum.image-line.com/viewtopic.php?f=1965&t=187934). Not even with the latest update that supposedly fixes it. It's probable that your shortcuts will work, but mine do not.

FLStudio doesn't respond to window management tools like [moom](https://manytricks.com/moom/). So you're stuck mousing your window around. Hotkeys like cmd-` don't cycle between internal windows. It doesn't behave nicely with [mission control](https://en.wikipedia.org/wiki/Mission_Control_(macOS)) if you use that.

All of the 64-bit purchasable plugins work inside FLStudio. There's some that don't work as AU or VST on mac. I won't make a list since these will likely change.

[Retina](https://en.wikipedia.org/wiki/Retina_Display) support is good. The main GUI is vectorized and sized properly. Many of the plugins look fantastic. In the effects/instruments review I mentioned most of the ones that are not vectorized, or you can probably notice by how blurry the screenshot looks (even on non HiDPI/Retina screens).

"CPU" usage is surprisingly good. I expected it to perform relatively poorly, but I ran some unscientific benchmarks (how many of X or Y plugin can it run) and FLStudio beat out some of its competitors on my [iMac Pro](https://en.wikipedia.org/wiki/IMac_Pro).

Sometimes when cmd-tabbing back to FLStudio it would not accept input, but that required a mouse click to fix. Some file dialogs were similar.

The overall experience has been fantastic, especially for a version one.

# Windows?

This isn't about [Microsoft Windows](https://en.wikipedia.org/wiki/Microsoft_Windows). This is about the windows inside of FLStudio and how _incredibly annoying_ they are.

You have a number of windows inside FLStudio on its own caged desktop. There's basically no support for managing those windows. Trying to manage these windows is a lot of mousing around, uncovering windows, finding windows, and awful clobberings of multiple overlaid windows.

You can 'detach' windows (at least in the macOS version) to let them float outside FLStudio, but this is even worse! They now randomly appear on top of other applications. Trying to figure out what/when you can interact with a window without another window coming to the front is a crapshoot. This could just be a macOS thing, but they're selling it and I'm using it.

FLStudio _really_ needs some sort of internal window management. All of the other major DAWs have their major interactable elements nicely arranged or has a way to arrange them. FLStudio just expects you to treat your windows like [Jackson Pollock](https://en.wikipedia.org/wiki/Jackson_Pollock) treats paint.

# A coat of paint

Speaking of paint, FLStudio has been updating its GUI with a new [vectorized GUI](https://en.wikipedia.org/wiki/Vector_graphics).

I think it looks great. I've seen people that have used FLStudio for years that won't move past V11 because they don't like the changes, but I think the changes are fantastic. It looks clean. It looks modern (if not a bit 'too modern'). It works on HiDPI/Retina displays perfectly.

I hope that they update some of the plugins that don't have vectorized GUIs. I'd love to see [Morphine]({% post_url 2018-07-20-30-days-with-FLStudio-20-Instruments %}#morphine) with a vector interface for instance. It's a great plugin that's letdown by a poor GUI.

## But not your own paint

It's vectorized, so surely you can colour it yourself or change certain elements right?!

HAHAHHAHAHAHAHAHAHHHHHHHHHHHAAAAAAAAAAAAAAAAAAAAAA. **NO**.

There's no official theme support in FLStudio. You can change the background of the internal desktop and that's it. Hopefully they will add support for at least adjusting the colours in the future.

For now you just have to live with that classic look.

## Accoutrements

There's quite a few neat animations in FL. You can turn these on or off, along with adjusting how reactive the GUI is as a whole.

Initially I thought these animations were silly and had no place in a professional experience, but as part of the review I decided I needed to try with them maxed for a while.

The animations make the entire experience feel more fluid. It also adds a bit of fun to the music making experience. My bitterness slowly melted away as I watched deleted notes fade in to the void.

## Hotkeys

At least you can adjust the hotkeys though...

...

**NOPE**

You are at the mercy of the hotkeys that the Image-Line overlords have deemed to be correct. It doesn't matter if they make no sense to you, or if you need to switch between DAWs frequently or if the key just doesn't appear on your keyboard in a sensible place.

None of it matters. You use what you get. You _can_ hack it to work if you're [clever, kinda like me](http://www.controllermate.com) (I have it setup so controllermate changes what keys are sent to the app, depending on what app is at the forefront, and what my last pressed key was). It's a huge workaround, and one that I think probably 90% of FLStudio users never think of.

Unfortunately, the people that _drive_ the FL ecosystem: the tutorial makers, the power users, the forum-lackeys and the people that should get a job are the ones that need this sort of feature. These are the people that make the FL world go around. Treat them to something special IL, please?

# No VCAs

You know I can't go without saying it.

[I explained why VCAs can be useful before]({% post_url 2016-12-16-Things-I-hate-about-Digital-Performer %}#vcas). [Then I explained them yet again]({% post_url 2017-09-18-Mixbus-32c-The-Mixer %}#VCAs).

VCAs are awesome. FLStudio can emulate VCAs with a good bit of work, but they aren't there.

They _really_ can speed up workflows though, and with a DAW that has such an emphasis on automation it would be even better still.

Till then you'll have to create an ungodly setup of controllers to emulate them fully, and you still don't get everything (like automation coalescing)

# Undo

I haven't complained about Undo, but I need to.

Not everything can be undone. It's a bit of a crapshoot to learn what can and can't be undone. The first thing you learn though, is that deleting things cant be undone. The _ONE_ thing that you'd want to undo the most, you can't.

Effects changes don't undo, except the ones that do. Most things will undo, including VSTs, but I've encountered some scenarios where things don't undo that will undo in other hosts.

Then there's the crashes. The only time I've had FLStudio crash is while trying to undo something. Of all the times when I don't want it to crash, when I'm trying to recover something, is when it crashes. I'm sure this will be fixed if/when people can nail down a reproducible scenario, but I've been unable to do so.

FL also has that style of undo where cmd-z and ctrl-z will undo the last undo. If you want to undo multiple in a row, you need to press ctrl-z then ctrl-alt-z. I rather dislike this method of working. Especially on macOS where it's not standard behaviour.

Undo history is _not_ saved with your project. If you close FLStudio then you lose your potential to undo things. If you even re-open the project you will lose your entire undo history.

It's not all doom and gloom though. There is a project history where you can view your entire undo history in a nicely formatted manner. You'll just lose it all once you close the project.

# Current Channel

FLStudio's mixer has this channel called the 'Current Channel'. It's a channel that whatever your currently selected channel is routed through.

This is a **spectacular** feature. You can put analysis tools on the 'Current Channel' to always have a way to visually check a channel with only a single click.

You can use it to audition effects in your mix if you want, or just use it as a larger meter.

The Current Channel may be my single favorite feature in FLStudio. It not only saves time, but it allows you to do things that you'd often not do because it takes too much time to add/remove a plugin. Sorry Image Line, but I hope every DAW developer on this planet copies this feature.

It's super ultra mega awesome.

# Support

Image-Line has the best DAW support.

There it is. I said it.

It's basically the only major DAW product where you can go on their _official_ forums and get a humorous response from an official support agent or engage in discussion with one of the developers. They will acknowledge your troubles, they will help you, they will be awesome.

It's not just the people though. You really don't need to go to the forum for help...

## Manual

Because FLStudio has **THE BEST MANUAL.** It explains nearly every aspect of the software _and_ it explains the basic digital audio premises behind that topic.

You'll learn how digital audio works, you'll learn about analog synthesis history, you'll learn about additive synthesis, you'll learn what FM synthesis is and how it works, you'll learn about japanese culture, you'll learn about filters, you'll learn about mastering, you'll learn a lot of things.

The manual is fully hyperlinked and if there's a video tutorial (there's many) it will be referenced as well. There's screenshots of complex parts of the GUIs with visual explanations.

_Every_ effect and _every_ instrument is covered.

You'll laugh at the jokes and obscure movie references. You'll cry when you realize you want [to change shortcuts](#hotkeys). You'll come back for more.

## Debug Panel

{::nomarkdown}
<img src="/assets/FLStudio/DebugLog.png" alt="Debugging Panel">
<div class="image-caption">Debugging Panel</div>
{:/nomarkdown}

The only picture in this post, but a good one.

FLStudio has a debugging log (`Options->Debugging Log`) that shows you a lot of information about what's happening in the project. This also shows you all MIDI I/O. It's an educational experience too as well as a troubleshooting tool.

It's fantastic for troubleshooting issues. I recently had an issue where I found that [MIDI Active Sense](http://midi.teragonaudio.com/tech/midispec/sense.htm) breaks MIDI controller mapping in FL. Were it not for the debugging log I would have never figured it out.

Now they just have to fix it.

It's a great feature that other DAWs really need to have. 

# Updates

Free updates. For. Life.

Once you buy FLStudio you are now an eternal prisoner of their development juggernaut. You don't need to pay [129 euros a year](https://www.bitwig.com/en/shop/webshop.html) just to keep up to date. You won't get [wupped](https://www.waves.com/support/waves-update-plan) and have to pay big $$ when a new plugin is added.

You pay once, and you are treated like a brand new customer every day.

I really dislike how new customers of other products are given 'everything', but loyal long time customers have to pay for the privilege.

I know that this isn't a business model that every company can afford to do, but Image Line does it. It's awesome.

# Website

[Image Line's website](https://www.image-line.com/flstudio/) is fantastic. I can find the information that I want quickly, and it looks nice.

They don't try to trick people in to buying things that they don't need, but instead help inform the users of exactly what they will get and what it is.

They make their forums easily accessible.

The product pages aren't full of ridiculous claims of superiority or fluff about 'groundbreaking technology'. The product pages tell you what the product does, how it can help you and throws in a few clichés like, "Reap the sonic rewards!"

Links for download are always visible along with what platforms are supported. You don't need to go digging for a product page or download some massive universal installer (even though the FLStudio download is basically that).

The FAQ covers decent questions and is organized well.

There's **LOTS** of tutorials in video format.

The 'my account' page is easy to navigate and isn't filled with a bunch of garbage. They make it simple to unlock your products, and their webpage as a whole constantly offers information on how to register and unlock your software.

It's not "the best" DAW website, but it's tied for #1. They've done a great job of making an attractive _and_ functional web presence.

# Conclusion

I'm sure it seems like I've been largely positive about FLStudio. I think I probably have, but the few things that bother me, just happen to be the things that I'm _most_ interested in.

Without better [Audio support]({% post_url 2018-06-20-30-days-with-FLStudio-20-Audio %}), I personally simply can not use it. You _can_ record just fine in FLStudio. It works great for simple workflows, but if your main method of getting music in to a DAW is recorded audio then it's not your solution.

However I've absolutely fallen in love with FLStudio's [modulation capabilities]({% post_url 2018-07-07-30-days-with-FLStudio-20-Modulation %}). If there was a DAW for the experimental folks, then this is it. If you like to create automatic dynamic expression or if you're never satisfied with what other products offer then FLStudio is powerful enough to satiate you.

I think the most important takeaway from this entire review isn't really about the _specifics_ about FLStudio. There's people that will love it, and people that will hate it. It's a unique design, so the opinions on it will vary greatly.

The takeaway is that FLStudio is a **REAL** DAW. It's one of the top products. When you see FLStudio topping those 'what DAW do you use?' charts, it's because it's a highly capable product. It's lightyears ahead of some DAWs in many areas.

I've often heard the sentiment that 'FLStudio is great for modern electronic music'. I don't think that's true. I think modern electronic music exists in part to FLStudio existence. I can't imagine that it's a coincidence that the things that most chart-topping styles rely on are easy in FLStudio (and [Ableton Live](https://www.ableton.com/en/)). It's been decades of development for FL. There's no way they just magically are predicting production styles 5 years ahead of time.

I think it's more likely that FLStudio itself has helped define modern music.

You may take this as a good thing, or a bad thing, but as you use the software it's inescapable. If you hear something in a pop/electronic chart topper, it's very likely something that's easy in FL.

That doesn't mean that you need to create that type of music with FL though. History is littered with examples of people figuring out new uses for a hammer. I know of a number of fairly large (100k's subscribers on youtube) artists that use FLStudio for orchestral work. I know of a few films scored in FLStudio. One of my favorite noise artists uses FLStudio. I know of a handful of rockers that sketch out their tracks in FL.

I don't think FLStudio is for me, yet(?), but after nearly a month and a half my view of it has changed drastically. It's more than good software. It's a defining application of this music generation.

# Support Me!

This post took 5 hours to research, screenshot, write and edit. If you appreciate the information presented then <a href="/DonateNow/">please consider joining patreon or donating!</a>







---
layout: ['post', 'reader']
title: "Are you having Retina FPS issues? Check out this One Quick Fix that Apple doesn't want you to know about!"
comments: true
date:   2018-10-09_12:01:01 
categories: general
tags: ['Production Tips', 'Reaper Tips', 'Studio Tips']
image:
description: Fix Retina FPS issues with a simple setting change.
---

{::nomarkdown}
  <img src="/assets/General/Retina.png" alt="Retina Display Speed ups!">
  <div class="image-caption">Retina Display Speed ups! (the video thumbnail is even cringier... you're welcome)</div>
{:/nomarkdown}


Do you have a [Retina Display](https://en.wikipedia.org/wiki/Retina_display) and are constantly frustrated about low FPS desktop applications?

This is a big issue if you're a [Reaper](https://www.reaper.fm) or [Waveform](https://www.tracktion.com/products/waveform) user (as of the writing of this post).

Let me show you how to get 10-15 extra FPS with little lost.

(Rorry for the clickbait title, I think it's funny.)

<!--more-->



# Contents
{:.no_toc}
* TOC
{:toc}

# The Fix

This only works on newer _native_ Retina displays like what's in the 2017 or newer Macbook Pro or iMac Pro. This does _not_ apply to the 5k imacs (as of the writing of this post). It does not apply to most third-party displays.

Usually I start with an explanation of why you should fix this, but we'll jump to the fix then explain it, _and_ we'll prove that it works.

* Go to System Preferences
* Click "Displays"
* Go to the "Color" tab
* Select `sRGB IEC61955-2.1` or `Generic RGB Profile`. On my iMac Pro the sRGB profile retains the same visual look, so that's what I'll refer to the rest of this post (since that's what I did the video on).

The colour of your display will change very slightly.

# Where

I got the idea for this from [this post by the author of Reaper](https://forum.cockos.com/showpost.php?p=1796064&postcount=40) and subsequently [this post on Justin's website](https://user.cockos.com/~deadbeef/index.php?article=697).

I did a good bit of testing beyond this to confirm when and that it works.

# Why?

The 2017+ mbp and iMac Pro displays are 10-bit per-channel displays. The native colour profiles are 10-bit. Using the 10-bit colour profile causes drawing slowdowns that are inexplicably still present in macOS Mojave.

It's highly unlikely that you need 10-bit colour space if you're reading this post. It can be mildly important when working with certain high end video cameras, and important when doing high-end camera RAW processing. I suggest that if you do these things that you compare using the native color profile against the `sRGB IEC61955-2.1` profile.

# Does it work?

<iframe width="800" height="450" src="https://www.youtube.com/embed/RZtfpfRYu4g" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

This is important. There's plenty of advice out there claiming to fix retina issues, but I don't aim on giving advice without discussing the cons and showing that it works. [The post I linked offers some benchmarks](https://user.cockos.com/~deadbeef/index.php?article=697), but since we're talking visual performance I think some video evidence is in order.

Check the video above for an A/B comparison of framerates when using the native profile compared to `sRGB IEC61955-2.1`.

The screencapture did not have an affect on the FPS, so what you see is what I see. So... what _are_ you seeing?

* My Reaper setup with HiDPI theme and iMac default color profile - Adjusting track height drops to 29fps.
* My Reaper setup with HiDPI theme and `sRGB IEC61955-2.1` color profile - Adjusting track heigh drops to 48fps.
* Waveform 9.3.2 and iMac default color profile - Adjusting track height drops to 24fps.
* Waveform 9.3.2 and `sRGB IEC61955-2.1` color profile - Adjusting track heigh drops to 39fps.
* Logic 10.4.2 and iMac default color profile - Adjusting track height drops to 36fps.
* Logic 10.4.2 and `sRGB IEC61955-2.1` color profile - Adjusting track heigh drops to 45fps.
* Cubase 9.5.30 and iMac default color profile - Adjusting track height drops to 37fps.
* Cubase 9.5.30 and `sRGB IEC61955-2.1` color profile - Adjusting track heigh drops to 55fps.

# Support Me!

This post took 5 hours to research, photograph, write and edit. If you appreciate the information presented then <a href="/DonateNow/">please consider joining patreon or paying me for my time spent bringing you quality content!</a>






**WRITTEN IN** [TextMate](https://macromates.com). [See this post for more information]({% post_url 2018-10-06-Editor-Musings %}).


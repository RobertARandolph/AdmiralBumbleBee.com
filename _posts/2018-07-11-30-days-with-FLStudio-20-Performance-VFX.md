---
layout: ['post', 'reader']
title: "30 days with FLStudio 20 - Part 8: Performance mode and Video FX"
comments: true
date:   2018-07-11_09:01:01 
categories: music
tags: ['FLStudio', 'DAW']
image: /assets/FLStudio/FLLive.png
description: A look at some live-performance features of FLStudio
series: FLStudio
pdf: true
---

{::nomarkdown}
<img src="/assets/FLStudio/FLLive.png" alt="FL Studio... Live">
<div class="image-caption">FL Studio... Live</div>
{:/nomarkdown}

Fans of [Ableton Live](https://ableton.com) or [Bitwig](/tags/#Bitwig) are going to like this one, as well as anyone that does live performance.

I'll be covering FLStudio's "Performance Mode", which is similar to Live/Bitwig's [session mode](https://www.ableton.com/en/manual/session-view/), and I'll be discussing the Video FX in FL.


**Other posts in this series**:

{% assign fls = site.posts | where: "series", "FLStudio" | sort: 'date' %}
<ul>
{% for my_page in fls %} 
    {% if page.url != my_page.url and my_page.layout != "reader" %}
        <li><a class="page-link" href="{{ my_page.url | prepend: site.baseurl }}">{{ my_page.title | split: '-' | last }}</a></li>
    {% endif %}
{% endfor %}
</ul>

<!--more-->



# Contents
{:.no_toc}
* TOC
{:toc}

# Performance Mode

## What is Performance Mode

{::nomarkdown}
<video autoplay loop muted class="gifvid">
<source src="/assets/FLStudio/Performance.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
<div class="video-caption">Performance Mode (mini demo)</div>
{:/nomarkdown}

In programs like Ableton Live you have what's called "Session Mode". You are given a grid instead of multiple rows of tracks. In Session MOde a _column_ represents a track, and a row represents a "Scene". Each cell contains an audio or MIDI clip. You can play these cells on their own or you can trigger a whole row (scene) to play multiple clips together.

FLStudio rotates this by 90°. Your tracks are still horizontal, but your columns are your "scenes" so to say. You still get cells with clips to trigger.

FL also treats scenes a bit differently. What a "scene" is slightly different. A scene is the first clip in the area that defines that scene. That is usually defined by time markers. If you have multiple clips between markers then everything after the first clip is a 'sub-clip', and subsequent presses of that track/scene will cycle to the next 'sub-clip' in the scene.

There's multiple ways to control what happens when a clip finishes. It can be one-shot, loop, march modes (goes to the next column on that track) or randomized.

_When_ clips are triggered is configurable, so you can set up the trigger sync to quantize your triggering to the next bar, beat divisions, clip length, or a neat 'tolerant' mode. Tolerant mode lets you miss triggering a clip on time and will trigger it anyway in sync rather than waiting for the next quantized time.

If you are used to Live or Bitwig there's some things that you may find particularly interesting:

* Each cell can have multiple clips (sub-clips), and you can cycle through these.
* There's more "time freedom", so you can visually setup your clips in a manner that makes the most sense to you. Since your tracks are defined horizontally, and scene starts can be flexibly positioned, you can do some neat things with organization.
* You can group clips to make them play together, even across scenes.
* There is a default computer-keyboard launching method. This gives you 5 scenes and 8 tracks of easy clip launching without messing with a controller.
* FL's routing flexibility still applies. Since a playlist track _does not determine routing_ you can have multiple clips on a single playlist track that go to separate mixer tracks. [Read more about this here]({% post_url 2018-06-16-30-days-with-FLStudio-20-Introduction %}#signal-flow)
  * **REALLY** this is a big deal. It greatly improves the flexibility of what you can do. This means you can have different clips/synths/effects on a single trigger scene that are sent to different mixer tracks. You could have all of your basses on a single playlist track, but each clip going to a different mixer track to help you seamlessly blend them and add clip-specific FX to them to add flair to your performance.
  
  
## How is Performance Mode?

It's great.

I toured playing drums and percussion with a band, and using an [APC 40](http://www.akaipro.com/products/pad-controllers/apc-40) with Ableton Live I triggered clips and handled lighting. I have spent 100s of hours with Live and a pad controller on stage.

Let me tell you right now: I wish I had FLStudio back then. The flexibility of routing is a joy. The sub-clips (clips that trigger on next press of the cell) functionality is useful.

The main downsides are:

* The limited number of tracks/scenes. You just get 12x10 by default via MIDI, and setting up more is a hacky experience unless you have a supported controller. I was unable to find any 'banks' or ways to move around a grid larger than 16x16 unless using a specific controller, and this appears to be hit-or-miss.
  * The upside here is that some controllers have fantastic mapping. [check out the launchpad mapping](https://forum.image-line.com/viewtopic.php?t=87521), it's really fantastic. Faders, XY control, multiple plugin controllers, tempo control, project commands and more. Unfortunately not everything has this, and setting this up yourself... well, good luck.
* Launch settings are per track, not per clip. If you want clips to have different launch modes or their 'play next' type behaviour to change, too bad. It's per playlist track.
* No [follow actions](https://www.ableton.com/en/manual/launching-clips/#13-6-follow-actions), which are a powerful part of a well-designed live set.
* `Tools->Macros->Prepare for performance mode` is not undoable. If you want to try something out or test some ideas, it's not _nearly_ as simple as Live or Bitwig for clip launching. However, if you _start_ your project in a 'performance mode' setup then this is no longer an issue. It requires some forethought.
* FLStudio needs to be playing for performance mode to work. This can cause some issues with [any modulation you have]({% post_url 2018-07-07-30-days-with-FLStudio-20-Modulation %}) or automation you want to keep on a per-clip basis.

The counterpoint to that last point is that automation clips are clips. You can trigger automation like it's any other clip, so you can create effects breaks or transitions or turn on/off effects or anything you can think of! It's surprising how awesome this can be.

The clip grouping feature is fantastic too. No matter where two clips are on a track or scene, you can group them together and they will play when any of them is triggered. This lets you create more thematic elements in your performance that can be reused elsewhere.

# VFX

{::nomarkdown}
<video autoplay loop muted class="gifvid">
<source src="/assets/FLStudio/ZGame.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
<div class="video-caption">ZGameEditor Visualizer</div>
{:/nomarkdown}

Live Video Generation brought to you courtesy of the [ZGameEditor](http://www.zgameeditor.org).

You can do some amazing stuff with ZGameEditor, and subsequently import that in to FLStudio to use in the ZGE Visualizer. Obviously I don't have much use for this, but having experimented with it I'm quite impressed with its existence.

ZGameEditor Visualizer allows you to create video output that interacts with your project. Most of the controls are automatable (and thusly can be modulated). By utilizing things like [envelope controller]({% post_url 2018-07-07-30-days-with-FLStudio-20-Modulation %}#envelope-controller) you could _easily_ create a video that reacts to notes, velocity, peaks etc...

There's up to 70 cue points available that can be triggered via MIDI externally or from inside your project (which means it works with [performance mode](#what-is-performance-mode) too)

You can add up to 50 layers, all of which have a wide variety of presets (with automatable/modulatable controls!) that output video in some specific manner. ZGE also happily interfaces with [DMX](https://en.wikipedia.org/wiki/DMX512) based hardware, which makes outputting or receiving data for an existing lighting setup easy.

You can add text to your videos, which can be done via HTML to give you more control over formatting.

Of course, if you don't like what's already available for you in FL, you can go and create your own things in [ZGameEditor](http://www.zgameeditor.org), and do some really complex stuff, afterall it's basically a game engine.

This isn't just for live performances either! You've probably seen those music videos on Youtube with video moving to the music, just a simple ball or some visualization. ZGEV can export your video and project together to create your Youtube video. Work with some [modulation]({% post_url 2018-07-07-30-days-with-FLStudio-20-Modulation %}), some automation and layer things as you need to create a high quality video for your project.

Even if you don't use FLStudio for music creation at all, ZGameEditor Visualizer can be a powerful tool for creating algorithmic and responsive video for your music.

# Conclusion

If you're a live musician, then you _really_ should investigate FLStudio. If you just enjoy tinkering with things, then it's even more fun.

While FLStudio doesn't have something like [max for live](https://www.ableton.com/en/live/max-for-live/), there's a good deal of functionality here, especially combined with the controller linking.


# Support Me!

This post took 6 hours to research, screenshot, write and edit. If you appreciate the information presented then <a href="/DonateNow/">please consider joining patreon or donating!</a>







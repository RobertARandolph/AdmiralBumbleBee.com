---
layout: post
title: Daw V Daw progress
comments: true
date:   2020-08-02_12:11:20 
categories: music
tags: ['DAW']
image:
description:
header: /assets/General/Latency.png
header-caption: 48khz, 64 sample buffer, Studio One 5 reports 3.42ms
---

Quick update! I'm working hard on the next DAW v DAW article (Part 7.2), but it's been labour intensive.

What I've done so far for the next DAW v DAW:

* VST/AU Event Logging and Timing Plugin - provided by the author of the fun and unique [Cadmium](https://lhiaudio.com)
* Latency Measurement Hardware - Hardware MIDI->Hardware Audio true latency measurements. This has taken a while to make sure that the hardware is putting out accurate results.
    * Hardware generates a MIDI message and measures time till audio impulse.
        * After _a lot_ of testing and fiddling with assembly, I believe I have this accurate within about .2µs. Total overkill, but why not?
    * (Image above is screencap from oscilloscope while I was testing.)
* Article scaffolding - Outline and concept
* DAW Installation - Not sure if you're aware, but installing and setting up 10 DAWs in Windows and making sure they behave properly **IS A PAIN** and a time sink.
* Discussion - I took time to discuss the topic with a number of "advanced" users of the DAWs to get some ideas of what they experience and what they'd like tested.

Site Updates:

* [A user](https://instagr.am/kyumiiu) took the time to suggest some enhancements to the layout of the site. He supplied the suggestions directly as a _commented_ css file, which was **wonderful**. I implemented a number of these, and some modifications of them.
* The [DAW Chart](/DAW-Chart.html) should look better on Mobile.
* The [DAW Chart](/DAW-Chart.html#key) has a key now.

<!--more-->

# Meta

This post took:

* 2 hours to write.
* 5 hours to implement the css changes.
* ~45 hours of fiddling with hardware and software stuff for the next DAW v DAW post.









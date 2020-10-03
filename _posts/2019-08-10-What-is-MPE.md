---
layout: ['post', 'reader']
title: What is MPE
comments: true
date:   2019-08-10_17:12:37 
categories: music
tags: ['Cubase', 'Tracktion Waveform', 'Bitwig', 'Tutorial']
image: /assets/Cubase/MPE/WhatIs.png
description: What is MPE?
---

{::nomarkdown}
<img src="/assets/Cubase/MPE/WhatIs.png" alt="What is MPE?">
<div class="image-caption">What is MPE?</div>
{:/nomarkdown}

In the next Article I will be covering MPE in Cubase 10 (article 2/4 in the ongoing Cubase 10 series). Naturally, I need to first explain what MPE is and why you should care.

I will be avoiding discussing MPE capable instruments or synthesizers. This is _just_ about MPE.

<!--more-->



# Contents
{:.no_toc}
* TOC
{:toc}

# Video

<iframe width="800" height="600" src="https://www.youtube.com/embed/YEEE-Hjmpdw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

# What is the problem?

MPE is a solution to a problem. To fully understand why MPE exists, it's necessary to know the problem that it's _supposedly_ solving.

MIDI is generally used to stream data across a channel. Channels are used to separate data streams, and you get 16 channels per port.

The majority of MIDI usage is to have a single instrument per channel. All of the notes for that instrument go on the channel. That also means that parameter control data (CC, RPN, NRPN, Pitch Bend, Pressure etc...) are also flowing through **and applied to that channel**.

Imagine an instance where a chord of 4 notes is played. All 4 notes on a single channel. If you have a pitch bend message on that channel then _all four notes_ will be pitch bent.

What if you want to pitch bend only _one_ note? You could put that on a channel by itself, or on the same channel on another port, or another track in your DAW...

No matter which of those things you do, you would now be forced to deal with editing multiple MIDI data streams separately, even though the data belongs to the same concept. The machine that you're feeding with the data (a synth? sampler?) now needs to be configured to respond properly to these multiple sources of data. Ugh.

# What is MPE

**ENTER MPE**

MPE standardizes the concept of "put each note on their own channel" in a way that [doesn't sacrifice polyphony](#mode-4-and-more). Each note is assigned a zone or channel (a zone spans one or more channels) and Pitch/Pressure/CC-74 is applied only to the data in that zone.

Most MPE usage is "Note Level" usage. Notes are spread across the channels, so that each note as 5 dimensions of expression available that are exclusive to that note. There's 5 messages used with MPE:

* Pitch
* Channel Pressure
* CC 74 - whatever.

Then the two usual note messages:

* Note on
* Note off - particularly interesting, since how fast the fingers leave the key is rarely considered in non-MPE contexts.

This totals 5 dimensions of expression.

Why not every single CC/RPN? Well, some of those are used for controlling the MPE setup. The rest simply are not defined in the specification, and certainly could be used by a reckless developer. Future revisions of MPE would break those implementations though!

Regardless of the seemingly ridiculous limitations, MPE does give you 16 voices of MIDI with 3 independent parameters (plus note on/note off) per voice as part of the data specification.

## Mode 4 and more

There's long been things near MPE: "Mode 4" and various extensions. The problem with this mode is that there is a hard limit for polyphony to the number of available channels (16 per port).

MPE expands by allowing each channel to contain multiple notes, i.e. polyphonic channels. If you exceed the available channels then it can wrap around and new notes appear on currently utilized channels instead of lost to the dark void. Any notes that wrap around will end up on a channel with existing notes, and all notes on a given channel will have expression message applied to them.

MPE also allows "Zones". The available channels can be split into sections of channels. 3 zones with 5 channels each for instance. Now you can have multitimbrality ("multiple sounds") _and_ per-note expression. Program change messages work at the zone level to allow multitimbrality in usage.

Mode 4 streams (Omni Off/Monophonic - one note per channel) will work with MPE capable devices _usually_. The MPE zone master must be excluded or weird things will happen.

# Why do I care?

Expression. Music is boring when there's no subtleties or variation.

Musicians playing physical instruments invariably are inaccurate in their execution to varying levels. They also purposefully attempt to vary pitch, loudness and instrument-specific expression to embellish their performance.

MIDI without MPE (or similar) lacks this. Chords become atomic elements, rather than the notes comprising the chord. Gross. Notes are notes!

MPE and similar technologies allow you to create true performances at the note level, rather than having your data implicitly boxed into 'whatever is playing at this time'.

MPE is not the _best_, but it is standardized. Plenty of [things support it](http://www.rogerlinndesign.com/ls-recommended-sounds.html), and there are [a selection of familiar and unique instruments](http://www.rogerlinndesign.com/other-mpe-controllers.html) that utilize it.

It's not the silver bullet for digital musical expression, but it is the best we have that people are actually using.

# Meta

This post took 7 hours to research, write and edit. The video took 12 hours to animate, narrate and eviscerate the proletariat.







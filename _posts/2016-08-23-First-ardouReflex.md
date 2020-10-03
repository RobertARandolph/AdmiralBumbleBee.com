---
layout: ['post', 'reader']
title: Ardour first impressions
comments: true
date:   2016-08-23_08:04:08 
categories: music
tags: ['DAW', 'Ardour']
---

![Audio Connections Manager](/assets/Ardour/ACM.png)

Just opening up Ardour and starting a basic session, I've noticed quite a few things. So here's my first impressions, both positive and negative.

Note that I am using the nightly OS X version, built locally.

<!--more-->

# Contents
{:.no_toc}
* TOC
{:toc}

# Project creation

* Project creation is quite good to start.

* Audio Connections Manager is great for setting up routing. Much faster than other DAW's methods.

# Performance

Performance appears to be _extremely_ poor compared to any other DAW on this system. Running at 64 sample buffer at 44.1khz sample rate with 6 tracks yields frequent x-runs. I can run at 64sample buffer at 96khz in DP/Cubase/Logic with dozens of tracks and plug-ins running without any issue.

This may require more investigating, but if this is actually correct then I may stop this review early.

# UI/UX

* Many windows don't abide by the cmd-w shortcut to close windows. _Very annoying_. (edit: This is getting fixed. Yay IRC!)

* Some windows don't close when clicking the red X in the title bar! What?! (edit: This is getting fixed. Yay IRC!)

* Windows don't respond to Cmd-`. Ugh, again. (edit: This is getting fixed. Yay IRC!)

* Overall look of the UI seems rather unpleasant. Spacing around fonts is inconsistent, buttons are varying sizes, rounded buttons corner widgets are weird looking, button spacing is inconsistent

* Tooltips are inconsistent: Some have bindings listed, some don't. Many are written in different styles with different spacing/sizing.
    
   Bindings (shortcuts) should _always_ be listed on tooltips.

* Some missing bindings that IMO should be standard: grid snap, deselect, change track height, and a few others.

* Browsing bindings requires expanding various categories to see everything. Rather annoying.

* _SO MANY_ always on top windows that don't respond correctly to common methods of closing windows.

   Always on top windows are on top of __*EVERYTHING*__. Including other apps. (edit: this is a bug apparently)

* Meters are very responsive and have good default ballistics.

* Overall the UI is very responsive and fast.

# Audio editing

Audio editing _appears_ to be very good, at least concerning what I am used to.

# Plug-in support

Ardour is the _first_ DAW that I've used which successfully scans __ALL__ of my plug-ins without error. Impressive.

# Manual

The manual is incomplete, very poorly formatted and uses an awful font for technical writing. Of course this can be fixed... but the current state is poor.

# Support

Being able to speak directly with the developers on freenode.net is _amazing_. They are very helpful, thorough and communicate clearly.

Likewise being able to browse the sourcecode is extremely valuable. I can't overstate how useful this is. Despite any other shortcomings, this point makes up for _a lot_.

# Routing

* Ardour has some very cool routing abilities. Anything to anywhere, even if it's stupid.

* Using the Audio Connection Manager for assigning track inputs is very nice. Way better than clicking input/output buttons for each track. _Way better_

# Mixer

I already love the mixer in Ardour!

* Inline effects are AWESOME.

* Easy selection of metering point.

* Many metering options, selectable by track.

* Meters are very responsive and quick.

* Non-skeuomorphic fader. Very easy to see the fader levels and manipulate it.

* Mousewheel on the fader works very cleanly.

* Edit plugin with generic controls is actually rather useful. I like having that option.

* Pan/balance for stereo channels is very well implemented.

* No mixer Undo :(

* Easily scriptable with Lua. Easy. If you are using a DAW, you can probably figure this stuff out.

# Lua bindings

I usually _hate_ having to make macros and scripts. The [Lua bindings](http://manual.ardour.org/lua-scripting/brain_dump/) in Ardour are very cool. I've managed to make some very useful things with it so far, and easily "fix" some missing functions.

# Support me!

If you appreciate the information presented then <a href="/DonateNow/">please consider joining patreon or donating!</a>





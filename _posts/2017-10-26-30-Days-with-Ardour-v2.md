---
layout: ['post', 'reader']
title: 30 Days with Ardour, again. Version 5.12
comments: true
date:   2017-10-26_11:38:08 
categories: music
tags: ['DAW', 'Ardour', 'Open Source']
image: /assets/Ardour/ArdourV2.png
description: A review of Ardour again.
---

{::nomarkdown}
  <img src="/assets/Ardour/ArdourV2.png" alt="Ardour v2">
  <div class="image-caption">Ardour, using the 'Cubasish' colour theme</div>
{:/nomarkdown}

If you follow this blog then you'd know that I've been reviewing mixbus for "30 days" (more like 2.5 months).

You may also know that Mixbus is based upon [Ardour](https://ardour.org), an open source DAW. I previously [started a review with Ardour]({% post_url 2016-08-21-1-more-month-of-DAW-Puns,-Ardour %}), and [stopped]({% post_url 2016-09-11-ardouRenounce-The-final %}) due to some issues that made it not possible for me to work efficiently.

Clearly, as I've been using Mixbus 4.1/4.2, Ardour is up to the task of being used and **I have been using it**. According to my [time sink logs](https://manytricks.com/timesink/) I've spent about 60 hours in Ardour working on a project, and looking at the differences between the [current version 5.12](https://ardour.org/whatsnew.html).

So I'm going to take a moment and give a very short review of Ardour and explain some differences from the Mixbus review I did. I won't be covering _all_ of the differences between Mixbus and Ardour, but I will cover what I feel is fairly important.

First check over the other posts I've written about Mixbus and Ardour.

* [Cool things Part 1]({% post_url 2017-08-16-Cool-things-in-Mixbus-Part-1 %})
* [Cool things Part 2]({% post_url 2017-08-26-Cool-things-in-Mixbus-Part-2 %})
* [Cool things Part 3]({% post_url 2017-09-01-Cool-things-in-Mixbus-Part-3 %})
* [Cool things Part 4]({% post_url 2017-09-05-Cool-things-in-Mixbus-Part-4 %})
* [Mixbus: The mixer]({% post_url 2017-09-18-Mixbus-32c-The-Mixer %})
* [Mixbus EQ Revisited]({% post_url 2017-09-25-Harrison-Mixbus-EQ-Revisited %})
* [Review of Mixbus effects]({% post_url 2017-09-30-Review-of-Mixbus-effect-plugins %})
* [Review of Mixbus instruments and MIDI plugins]({% post_url 2017-10-05-Review-of-Mixbus-instrument-and-MIDI-plugins %})
* [Mixbus MIDI]({% post_url 2017-10-15-Mixbus-Midi-Editing %})
* [Mixbus Audio editing]({% post_url 2017-10-18-Mixbus-Audio-Editing %})
* [Ardour first impressions]({% post_url 2016-08-23-First-ardouReflex %})
* [Cool Features in Ardour Part 1]({% post_url 2016-09-01-ArdouRiveting-Features %})
* [Giving up on Ardour]({% post_url 2016-09-11-ardouRenounce-The-final %})
<!--more-->

# Contents
{:.no_toc}
* TOC
{:toc}

# Improvements since the last review

{::nomarkdown}
  <img src="/assets/Ardour/x-run.png" alt="Not anymore!">
  <div class="image-caption">This no longer happens!</div>
{:/nomarkdown}

[Since I did the last review]({% post_url 2016-09-11-ardouRenounce-The-final %}), the performance issue was fixed. I'd like to think this was due to my discussions with the Mixbus crew about it, but clearly I was not the person that fixed it.

The window management issues still exist to a point. You can't use cmd-` on macOS to switch application windows. Some windows forget their position with dual-monitors. Some windows always want to be on top of everything. However it's more manageable than it was nearly a year ago.

The undo has improved as well in some cases. I have still encountered times where I do something, undo a few times, redo the same number of times and my project is no longer the same where I started. LIkewise there's a number of commands I expect to undo

# VCAs

{::nomarkdown}
  <img src="/assets/Ardour/VCAassign.png" alt="VCA assign">
  <div class="image-caption">VCAs to VCAs!</div>
{:/nomarkdown}

_LOOK!_ **LOOK!!** I'm assigning a VCA to a VCA.

It's become somewhat of a joke during this review (in my discussions with other folks) that I really prefer the ability to assign a VCA to another VCA. This workflow is fantastic when you're working with instruments that contain multiple tracks of single instruments. Here's 2 examples

* A drumkit is a single instrument that has many single instruments that may be recorded with multiple microphones. I will often want to automate the drums as a whole kit, but need to control multiple snare tracks (2-3 mics on a snare) as well. 
* A choir is another single 'instrument' with multiple multi-miced "instruments". _Sometimes_ I'll have the whole choir, a soloist section, and each solist individually miced. VCA automation is a must here.

There's other examples that I've encountered, but I think that is sufficient to get my point across.

Ardour also allows having a track being controlled by multiple VCAs like Mixbus. Overall the setup is much better in Ardour I feel.

# Nightlies

{::nomarkdown}
  <img src="/assets/Ardour/Nightlies.png" alt="Nightlies">
  <div class="image-caption">Nightlies</div>
{:/nomarkdown}

Yes, Harrison's support is great. Some of us just like to be on the bleeding edge or receive fixes super fast, and the Ardour nightlies are the key.

They are also sometimes the key to instability and frustrating breaks in the creative flow.

The nightlies are great for those on Windows and MacOS that have difficulty building Ardour from source, but would like to help test new features, take advantage of bug fixes early or just be generally daring and awesome.

# Ardour extras

{::nomarkdown}
  <img src="/assets/Ardour/TracksAndBusses.png" alt="Tracks and Busses">
  <div class="image-caption">Tracks and Busses window</div>
{:/nomarkdown}

Ardour has some things not available in Mixbus such as:

* The tracks and busses window - a quick way to access routing, plugin and latency data for every track/buss in the project.
* Bundle Manager - Ardour allows you to define 'bundles' which is a single point, as a destination or source, that can route multiple I/O through that pathway.
* Ardour can stem export busses, but Ardour doesn't have the 'Mixbus-style Busses'. However, Ardour's stem exports through busses are not fully latency compensated yet.
* Ardour busses are slightly more flexible in their initial routing since there's no necessity to always route to the Master. Busses can route directly to physical outputs by default if desired.
* Ardour can have colour gradients on waveforms, which is pretty fancy looking.
* Ardour has colour theme support (and I really like Clear Gray!)

# Missing Features

{::nomarkdown}
  <img src="/assets/Mixbus/Good/Polarity/Polarity.png" alt="Polarity">
  <div class="image-caption">No polarity optimizer in Ardour</div>
{:/nomarkdown}

Ardour is missing some cool features that Mixbus has.

* [Optimize Polarity]({% post_url 2017-08-16-Cool-things-in-Mixbus-Part-1 %}#optimize-polarity)
* Automatic plugin update - Mixbus can help you keep your Harrison plugins up to date with minimal fuss.
* The mixer channel strips and Mixbusses, obviously.

# Mixer

{::nomarkdown}
  <video autoplay loop muted class="gifvid">
    <source src="/assets/Ardour/MixerCompare.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <div class="video-caption">Mixer comparisons</div>
{:/nomarkdown}

A big difference between Ardour and Mixbus is the mixer. Obviously mixbus comes with its own setup [as I described before]({% post_url 2017-09-18-Mixbus-32c-The-Mixer %}).

Ardour in my view has some benefits though.

* I/O, Monitoring and polarity inversion is always visible.
* Channels can be made narrow on a per-track basis.
* Pan is movement is editable - You can bias the pan to one direction or the other if necesseary.
* Metering point is more flexible - A meter point can be setup and put pre/post fader or at any point in the plugin signal flow as desired. (_edit_ Halloween. This is available in Mixbus as well.)
* Meter ballistics are configurable per-channel.
* Stereo controls on master - The master channel has equal power stereo controls (for collapsing to mono or anything between), or to adjust the balance of the stereo spread. That is to say that Ardour provides stereo balance and true stereo panning.
* Ardour does not require a master channel in the project.
* The master channel has an additional trim, channel polarity inversion and 
* [Extra settings for routing](http://manual.ardour.org/signal-routing/signal-flow/), Mixbus always uses the "strict I/O" setting.
* Ardour supports n-channel (2+) tracks and master channels. Mixbus is stereo only.

# Editor

{::nomarkdown}
  <img src="/assets/Ardour/AudioMidi.png" alt="Audio and Midi">
  <div class="image-caption">Audio and Midi tracks in Ardour</div>
{:/nomarkdown}

The editor and surrounding functionality differs in Ardour as well.

* Audio + Midi tracks - very useful feature when using plugins that accept audio+midi explicitly.
* Extended zoom controls as GUI elements.
* Zoom center - Ardour allows setting the zoom center to mouse, playhead, left/right/center of edit view, or the edit point.
* Ardour's default time read-outs are an "ugly green" (thanks to a member of the Mixbus team for pointing this out, though the colour is easily changed)

# Conclusion

Ardour is pretty awesome for your average recordist. I don't think I could definitively say that I prefer Ardour over Mixbus or Mixbus over Ardour, but they both offer clear advantages.

Ardour has most of the advantages I covered with Mixbus, including the amazing team of people working on it, but minus the Harrison DSP additions.

It also has many of the disadvantages, such as the relatively basic MIDI support. Ardour also does not come with a plethora of demos for you to ponder spending your money on. You're on your own in the wild world of LV2, VST and possibly AU to find products to supplement your software use.

That said though, for a very reasonable price, Ardour is an excellent option in today's world of a million DAWs. Once they deal with the MIDI and arrangement deficits, it will easy compare with other big-name DAWs costing $600. Until then, for most users, it's a fantastic option especially if you work primarily with audio.


# Support Me!

This post took 5 hours to research, photograph, write and edit. If you appreciate the information presented then <a href="/DonateNow/">please consider joining patreon or donating!</a>








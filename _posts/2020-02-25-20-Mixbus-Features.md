---
layout: post
title: 20 features from Ardour/Mixbus 6 that I wish every DAW had.
comments: true
date:   2020-02-25_10:44:35 
categories: music
tags: ['Mixbus', 'DAW']
image: /assets/Mixbus/20Wish/Mixbus20.png
description: 20 features from Ardour and/or Mixbus that I wish EVERY DAW had.
header: /assets/Mixbus/20Wish/Mixbus20.png
header-caption: The banner thing, these are fun to make
---

With Mixbus 6 arriving on the scene, I decided I wanted to highlight some features that [Mixbus](https://harrisonconsoles.com/site/mixbus.html) has that I wish every DAW had.

This is in stark contrast [to my previous article about Ableton Live]({% post_url 2020-02-01-20-things-I-hate-about %}). I originally wrote a "10 things about Mixbus" article in late December, but I decided to "wait until after [NAMM](https://www.namm.org)". The Live article was an extension of thought of _this original_ article.

Hop on through for the fluff.

<!--more-->

**If you have any questions or comments, please comment below! I read every comment and respond to most.** No registration is necessary to comment, so don't be shy.

# Contents
{:.no_toc}
* TOC
{:toc}

# Disclaimers

Let's start with the disclaimers:

* I beta test for Harrison.
* I acquired my copies of Mixbus 5 and 6 without cost.
* I speak to multiple employees of Harrison in both a professional and friendly context with frequency.
* I have a big soft spot for [Ardour](https://ardour.org) both because of its goals and its functionality. Mixbus is built upon Ardour.

I've attempted to provide an objective list of features that you can evaluate. I won't act like I'm unbiased. I am biased. I hope that this is made clear enough that you can filter it out if you want.

I don't like to replicate previous content, but some of the items here [have been discussed previously](/tags/#Mixbus). More than half of these items are not discussed previously.

# Introduction

Here we go with another list! This article...

* is about _any_ features in Mixbus, not just Mixbus 6.
  * unless I note that it's new in Mixbus 6.
* will mark features available in Ardour. -> **Available in [Ardour](https://ardour.org)**
* is **NOT** claiming that these features are not available elsewhere.
  * unless I note otherwise.
* is **NOT** going to mention flaws of Mixbus, similar to how [the live article]({% post_url 2020-02-01-20-things-I-hate-about %}) didn't mention some of the awesome things about Live.

I've been using Mixbus _almost_ exclusively for the last 70 days or so and I'm enjoying it quite a bit (as long as I don't expect to touch MIDI...), so I've built up quite the enthusiasm.

I use Logic for a major project every week, and I use Digital Performer for another project. Switching back to them has left me longing for some of these Mixbus features more than I would have thought otherwise.



# The List
##  1 Monitor Channel

{::nomarkdown}
<img src="/assets/Mixbus/20Wish/MonitorChannel.png" alt="Monitor Channel">
<div class="image-caption">Monitor Channel</div>
{:/nomarkdown}

**Available in [Ardour](https://ardour.org)**

The graphic above is fairly self-explanatory. You have a variety of buttons and knobs to change your output, and I think most of these are self-explanatory, and [I've covered them before]({% post_url 2017-09-18-Mixbus-32c-The-Mixer %}#monitor-section).

The important part here is that these are not part of your render chain.

In the image above I'm using [Sonarworks](https://www.sonarworks.com), which is a acoustics-compensation software, to change the output before my monitoring system. Rendering with that product affecting the signal would be quite counter-productive, since I don't want my listeners hearing music compensated for _my_ environment.

The monitor section gives you the flexibility to tailor your mixing environment to your needs. Maybe you want to mix into a compressor lightly, but render masters with nothing. Maybe you like a tiny bit of reverb because you're in a dead studio. Maybe... whatever.


##  2 Plugin Analysis

{::nomarkdown}
<img src="/assets/Mixbus/20Wish/PluginAnalysis.png" alt="Plugin Analysis">
<div class="image-caption">Plugin Analysis</div>
{:/nomarkdown}

**Available in [Ardour](https://ardour.org)**

Plugin analysis is a mixed bag, but the concept is fantastic.

The downs:

* It's not [Plugindoctor](https://ddmf.eu/plugindoctor/) - the integrated plugin analysis only has frequency and phase measurements, which is a good start, but it's not a complete analysis suite.
* It is only available on generic windows - If the plugin draws its own GUI then you can only access the analysis by right clicking the plugin's icon in the channel strip, selecting "Edit with generic controls" at the bottom, and re-opening the GUI

The ups:

* It exists.

The upsides are few, but they are enormous compared to the competition. As of this writing I don't know of any other product with this sort of functionality.

##  3 DSP Load

{::nomarkdown}
<img src="/assets/Mixbus/20Wish/DSPLoad.png" alt="DSP Load">
<div class="image-caption">DSP Load</div>
{:/nomarkdown}

**Available in [Ardour](https://ardour.org)**

Most DAWs have some functionality to measure load. Many of them improperly label them "CPU" (they don't measure CPU!), which leads to quite a bit of user confusion. Mixbus/Ardour does it right.

The facts of life:

* The DAW processes the audio in a buffer corresponding to a number of samples.
* The buffer has a length.
* The audio stream has a sample rate - Time is divided into a number of discrete samples. The distance between two samples corresponds to a real time measurement of (Sample Rate / 1000) milliseconds. At 48,000 sample rate there are 48 samples per millisecond.
* It takes the system _time_ to process audio.
* DAWs process audio in chunks. These chunks are usually proportional to your buffer setting.
* No matter how fast the system _can_ process audio, it's irrelevant if the system is _not processing audio_. This might sound obvious, but bear with me...

Let's imagine that we have an ultra-fast quasi-quantum-super-intel-i25-pro processor. It can process a ray-tracing reverb in half of a millisecond if that is the sole task. Our sample rate is 48,000hz. Our buffer size is 64 samples, and we'll assume that our DAW is processing in chunks of 64 samples.

During realtime playback, that 0.5ms of processing time corresponds to 24 samples. Our DAW has 64 samples worth of time (1.36ms) before it needs to have that buffer processed and ready for output.

The processing above was done in 48 samples, of the 64 samples of time available. The processing took 37.5% of the available time.

What happens if we throw a wrench into the works though? [The all-knowing all-wise Origin](https://www.origin.com/usa/en-us/store) decided to update in the background and keeps taking 100% of our processing time occasionally.

Even though our processor _can_ process that mythical reverb in 24 samples (0.5ms), right when our DAW asked for the processing to happen, something else took over and we have to _wait_.

The other application took up 1ms before it relinquished control back to the processing of the Reverb. Now our reverb took 1.5ms to process! We didn't get the buffer out in time, so the DAW makes a pop or click by sending a partial or empty buffer to the audio device. No buffer completed, no buffer to output.

From this we can see that what really matters here is _time_. Did the DAW get the chunk processed in time to output it? That's all we care about!

That's what most DAWs report as "CPU usage". They report the percentage of time taken to process a buffer divided by the time available. (Note: this is why your DAW's "CPU" meter almost never matches up with your Task Manager/Activity Monitor/top)

Ardour/Mixbus shows you that information in a pretty graph with some statistical information, and it allows you to sort by load.

It is _the best_ load indicator of any major DAW on the market. It's the most accurate, most precise and presents the information in a technically correct (the best kind of correct) way.


##  4 Latency Compensation

{::nomarkdown}
<video autoplay loop muted class="gifvid">
<source src="/assets/Mixbus/20Wish/Latency.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
<div class="video-caption">Latency Compensation</div>
{:/nomarkdown}

**Available in [Ardour](https://ardour.org) Soon?**

Barring a few bugs (which I hope will be fixed soon), the best latency compensation on the market alongside [Pro Tools](https://www.avid.com/pro-tools). (Arguably Cubase/Nuendo, but I can make a case that Ardour/Mixbus/PT are better since it's _very_ easy to end up with desynced audio in Cubase.)

Don't believe me? [Look at how one of the most popular DAWs on the market manages it]({% post_url 2020-02-01-20-things-I-hate-about %}#6-meters-off-when-latent-plugins-exist).

Compare that to the graphic above with A total of 4.2 seconds (1.4s per track) of latency spread across: the track, a buss and the master. Playhead, audio, meters... everything in sync.

##  5 Calibrate Audio

{::nomarkdown}
<img src="/assets/Mixbus/20Wish/Calibrate.png" alt="Calibrate Audio">
<div class="image-caption">Calibrate Audio</div>
{:/nomarkdown}

**Available in [Ardour](https://ardour.org)**


Available in `Window->Audio/Midi Setup/Calibrate`, this physically measures the round-trip latency of your audio device.

Why does it matter though? Your audio device _probably_ doesn't report the true input or output latency. There's many confounding factors that make the total latency _always_ greater than the sum of Input buffer + Output buffer. The _only way to be certain_ is to measure.

If you record audio to generated sounds (MIDI->Synth) or record to someone else's recording then this capability is potentially important. If not calibrated correctly, your audio will be _late_ when recorded by the difference between the buffer (or reported latency) and the _actual_ latency.

Nearly every DAW tries to compensate for this latency automatically by using either the buffer size and/or the latency reported by the audio driver. Those values are rarely correct, and Ardour/Mixbus allow you to correct it.

##  6 Region Position Overlay

{::nomarkdown}
<video autoplay loop muted class="gifvid">
<source src="/assets/Mixbus/20Wish/Overlay.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
<div class="video-caption">Overlay</div>
{:/nomarkdown}

**Available in [Ardour](https://ardour.org)**

A little overlay showing the current position of the region while you move it. It's a small thing that can make a big difference when you're zoomed in.

##  7 Analyze Exported Audio

{::nomarkdown}
<a href="/assets/Mixbus/20Wish/Analysis.png">
<img src="/assets/Mixbus/20Wish/Thumbnails/Analysis.png" alt="Post-Export Analysis">
</a>
<div class="image-caption">Post-Export Analysis (Click for larger image)</div>
{:/nomarkdown}

**Available in [Ardour](https://ardour.org)**

True peak values, LUFS short-term with a time graph, integrated loudness, loudness range, spectrograph... it's all there.

`Preferences->Metering->Save loudness analysis as image after export` gives you analysis information in image format for your logs or downstream consumers.

Valuable information that you should check for every render to ensure that you're putting out what you thought you were. This should be standard in every DAW in 2020, but it's not.

##  8 Multiple Export Formats

{::nomarkdown}
<a href="/assets/Mixbus/20Wish/ExportFormats.png">
<img src="/assets/Mixbus/20Wish/Thumbnails/ExportFormats.png" alt="Export Formats">
</a>
<div class="image-caption">Export Formats (Click for larger image)</div>
{:/nomarkdown}

**Available in [Ardour](https://ardour.org)**

Online Streaming is huge. Most of us have to render a few audio formats, with different file names, possibly to different folders and different parts of the track...

You can set this all up for one render process.

That's not to mention the ridiculous number of options you have for export [that I've discussed before]({% post_url 2017-08-26-Cool-things-in-Mixbus-Part-2 %}#multi-format-export).

##  9 Meter Bridge

{::nomarkdown}
  <img src="/assets/Mixbus/Good/MeterBridge.png" alt="Meter Bridge">
  <div class="image-caption">Meter Bridge</div>
{:/nomarkdown}

**Available in [Ardour](https://ardour.org)**

[As I've covered before]({% post_url 2017-09-05-Cool-things-in-Mixbus-Part-4 %}#meter-bridge), the Meter Bridge in Ardour/Mixbus is a fantastic way to get a visual overview of the levels in your project. There are a variety of metering types available for each track, and you can quickly record enable a track.

**Tip** - Change a track to a metering standard, then right click again to utilize the "Change All in Group/All/Same track type to..." for the current metering type of that track. If you want all VU or all K12 or DIN... go for it.

There are one thing that seems to be missing though: the ability to switch to monitoring hardware inputs (and arm all tracks that input is assigned to!).

Regardless, Few DAWs have a metering window, and only Mixbus/Ardour gives you this many metering options in place.

## 10 Channel Strip

{::nomarkdown}
<a href="/assets/Mixbus/20Wish/Strip.png">
<img src="/assets/Mixbus/20Wish/Thumbnails/Strip.png" alt="Channel Strip">
</a>
<div class="image-caption">Channel Strip</div>
{:/nomarkdown}

Let me start this off on the wrong foot: I don't particularly like Mixbus's channel strip. [I've covered this in the past]({% post_url 2017-09-18-Mixbus-32c-The-Mixer %}#eq), so it shouldn't be a surprise.

That said, I wish every product out there had a high quality built in channel strip with an opinionated:

* EQ - at least 2 bells, 2 shelves/passes.
* Compressor
* Gate
* Long-throw fader.
* **ADJSUSTABLE ROUTING** - You can switch the routing order of the EQ/Comp/Fader.

## 11 Routing Management

{::nomarkdown}
<img src="/assets/Mixbus/20Wish/ACM.png" alt="Audio Connections Manager">
<div class="image-caption">Audio Connections Manager</div>
{:/nomarkdown}

**Available in [Ardour](https://ardour.org)**

[Discussed previously]({% post_url 2017-08-16-Cool-things-in-Mixbus-Part-1 %}#audio-connection-manager), the audio connection manager is something I _desperately_ want in other DAWs.

It makes routing clean, quick, easy. No more drop down menus, no more I/O setups, no jumping around your mixer to find tracks to set their I/O.

## 12 Routing Drawing

{::nomarkdown}
<video autoplay loop muted class="gifvid">
<source src="/assets/Mixbus/20Wish/RoutingDrawing.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
<div class="video-caption">Routing Drawing</div>
{:/nomarkdown}

**Available in [Ardour](https://ardour.org)**

Ok, some DAWs have routing grids. None of them have a quick tool for assigning _and unassigning_ sequential or related I/O.

If you've ever had to set more than 8 I/Os at once in a DAW (even for MIDI and inter-track routing!), this is probably going to make you smile.

## 13 Saved Ranges

{::nomarkdown}
<img src="/assets/Mixbus/20Wish/Locations.png" alt="Saved Ranges">
<div class="image-caption">Saved Ranges</div>
{:/nomarkdown}

**Available in [Ardour](https://ardour.org)**

Somehow I'm writing this in 2020 and more than half the DAWs on the market don't have a way to save selections of time. They're great for editing, zooming, quick section renders, recording/overdubs and general project organization.

Remember: not _markers_, but selection ranges.

## 14 Zoom Focus

{::nomarkdown}
<img src="/assets/Mixbus/20Wish/ZoomFocus.png" alt="Zoom Focus">
<div class="image-caption">Zoom Focus</div>
{:/nomarkdown}

**Available in [Ardour](https://ardour.org)**

Zoom in your DAW. What does it center on? The mouse? Playhead? Selection?

Ardour/Mixbus allow you to select which part of your editor is the center for the zoom operation. The majority of users will select one (playhead or mouse) and leave it, and that alone is worth the price of entry, but you might be like me and prefer "Zoom Focus Mouse" when editing, "Zoom Focus Playhead" when recording, and "Zoom Focus Center" when Mixing.

The zoom focus commands also are a nice quality of life improvement for those switching from another product which has a specific behaviour that they wish to replicate.

Found in `View->Zoom Focus`.

## 15 Trim Keyboard Shortcuts

{::nomarkdown}
<img src="/assets/Mixbus/20Wish/Trim.png" alt="Trim">
<div class="image-caption">Trim</div>
{:/nomarkdown}

**Available in [Ardour](https://ardour.org)**

**I LOVE THESE SHORTCUTS**.

I can't handle watching people struggle to click a region boundary, try to drag it and possibly miss or have spent way too much time in the process. The process becomes more problematic when you're trying to edit a region relative to another region/time/selection.

Select Region(s), place mouse where you want, press J or K to trim left/right respectively. Quick, accurate, effective. Trimming regions to butt against each other requires no snapping.

That's not all! The "Edit Point" can be an edit _mark_, the mouse, or the playhead.

Combine Playhead mode with the next section and you have an editing powerhouse.

## 16 Playhead Keyboard Shortcuts

{::nomarkdown}
<img src="/assets/Mixbus/20Wish/Playhead.png" alt="Playhead Shortcuts">
<div class="image-caption">Playhead Shortcuts</div>
{:/nomarkdown}

**Available in [Ardour](https://ardour.org)**

Playhead movement is probably the single function of any DAW that **all** users have in common, even if nothing simpler than playing back.

Ardour/Mixbus has a selection of keyboard based playhead movements that make moving around your project a breeze. The commands are self-evident in the screenshot, and notably combine with the [trim shortcuts](#15-trim-keyboard-shortcuts) to allow for a blazing fast keyboard-based workflow.

Even if you're not an efficiency nerd, a handful of these options might make jumping around your project more pleasant than you're used to from whatever DAW you're using now.

## 17 Mouse Modifier Preferences

{::nomarkdown}
<img src="/assets/Mixbus/20Wish/MouseModifiers.png" alt="Mouse Modifiers">
<div class="image-caption">Mouse Modifiers</div>
{:/nomarkdown}

**Available in [Ardour](https://ardour.org)**

I know of [one product](https://www.reaper.fm) that has this capability, and it is superior to what is offered here, but it's a unique and useful function.

You can change which modifiers do what action when you use your mouse. Not a complex concept, but one that aids in comfort.

Available in `Preferences->Snap->Modifier`.

## 18 Snap Threshold

{::nomarkdown}
<img src="/assets/mixbus/20Wish/SnapThreshold.png" alt="Snap Threshold">
<div class="image-caption">Snap Threshold</div>
{:/nomarkdown}

**Available in [Ardour](https://ardour.org)**

If you're reading this, then you know the struggle. Drag something and... **SNAP**. "That's not what I want!" you exclaim. You want it _close_ to that point, but you _got snapped_.

Ardour/Mixbus allows you to change how many on-screen pixels are sensitive to the snap action. If you like snapping, then set it large. If you rarely use snapping but still want the convenience then set it narrow.

In `Preferences->Snap`.

## 19 Store Mixer Settings

{::nomarkdown}
<img src="/assets/Mixbus/20Wish/MixerStore.png" alt="Store Mixer Settings">
<div class="image-caption">Store Mixer Settings</div>
{:/nomarkdown}

Hidden in `Edit->Lua Scripts->Add/Set->Mixer Store` so that nobody will find it, this [script]({% post_url 2017-09-05-Cool-things-in-Mixbus-Part-4 %}#scripting) will save _nearly_ all of your mixer settings so that you can try out new ideas or prepare alternative mixes.

It's not difficult to save an alternate project, but there are some scenarios (complex edits that correspond to some other media?) where altering _just_ the mixer is preferrable.

## 20 Spill

{::nomarkdown}
<img src="/assets/Mixbus/20Wish/Spill.png" alt="Spill">
<div class="image-caption">Spill</div>
{:/nomarkdown}

Spill hides tracks that are not routed to (busses) or controlled by (VCAs) the track that you click spill on.

Want to see all of the tracks sent to your guitar bus? Spill!

Want to see all children of a VCA? Spill!

Just don't spill your dr... Sorry. I'll stop.

# Conclusion

Ardour and Mixbus aren't perfect. Even some of these features have some annoyances or minor issues (all of which I've reported and are being taken care of!), but Ardour/Mixbus has a set of unusually unique capabilities that can speed up _some_ workflows.

I [wrote about this article last week]({% post_url 2020-02-16-Fluff-and-Failure %}#it-all-feels-like-fluff), and having published this article I still feel the same about it. Being positive about a product is difficult when I view other similar articles online as highly suspect.

Hopefully this article has provided you with some information though :)


# Meta

This post took 58 hours to research, write and edit. A combination of bug-hunting, testing features, and deciding on what I wanted to include ate up a lot of my time. An unusual amount of time was spent because of the receptive support team that worked with me to find and fix 2 (possibly 3?) bugs that I found while writing this. The article might not be amazing, but Ardour and Mixbus will be better for it, and for the work of the people behind the scenes.

If you appreciate the information presented then <a href="/DonateNow/">please consider joining patreon or paying us for the time spent bringing you quality content!</a>

<a href="https://www.patreon.com/bePatron?u=7465992"> <img class="patreon-button" src="/assets/Patreon.png" alt="Be a Patreon!"></a>

<form style="text-align: center;" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick">
<input type="hidden" name="hosted_button_id" value="BR247JAZBTUJJ">
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
</form>

**If you have any questions or comments, please comment below! I read every comment and respond to most.** No registration is necessary to comment, so don't be shy.


---
layout: post
title: Cool things in Mixbus Part 1
comments: true
date:   2017-08-16_15:54:18 
categories: music
tags: ['Mixbus', 'DAW']
image: /assets/Mixbus/Good/Part1.png
description: Three awesome features in Mixbus 4
---

{::nomarkdown}
  <img src="/assets/Mixbus/Good/Part1.png" alt="Some things">
  <div class="image-caption">3 goodies to check out in Mixbus</div>
{:/nomarkdown}

Mixbus has a number of awesome features that don't have anything to do with its much lauded 'Mixbusses'. This begins a multi-part series covering some of these aspects, and eventually the mixbusses themselves.

* Optimize Polarity
* Audio Connection Manager
* Grouping

Let's dive in!

Don't forget [Part 2]({% post_url 2017-08-26-Cool-things-in-Mixbus-Part-2 %}), [Part 3]({% post_url 2017-09-01-Cool-things-in-Mixbus-Part-3 %}) and [Part 4]({% post_url 2017-09-05-Cool-things-in-Mixbus-Part-4 %}).

<!--more-->

# Contents
{:.no_toc}
* TOC
{:toc}

# Optimize Polarity

 <div style="position:relative;height:0;padding-bottom:75.0%"><iframe src="https://www.youtube.com/embed/f_f8G5tnkfk?ecver=2" width="480" height="360" frameborder="0" style="position:absolute;width:100%;height:100%;left:0"></iframe></div>

If you do only electronic music then you can skip this. If you do any recording with more than 3 mics on a single instrument, then this is a **killer feature**.

The 'Optimize Polarity' feature figures out the optimal polarity settings given a selection of tracks so that there is minimal phase cancellation between mics.-

In my testing the polarity optimizer results in around 3.5db louder transients and around ~2db overall RMS. The sound difference is pretty fantastic as well, especially for something that does basically no processing to your tracks and is essentially fool-proof.

## Optimize Polarity Example

{::nomarkdown}
  <img src="/assets/Mixbus/Good/Polarity/Polarity.png" alt="Polarity">
  <div class="image-caption">The results of the optimizer</div>
{:/nomarkdown}

Let's check out an example. Here I have a drum track with 7 mono mics and 1 spaced stereo pair. I recorded it with no processing and applied the 'Leveler' and 'Drive' in one of the Mixbusses in Mixbus. The difference between these 2 files is nothing more than the results of the Polarity Optimizer.

If you've not used [my Comparator]({% post_url 2017-01-30-Comparator %}) before then make sure [to look at the documentation]({% post_url 2017-01-30-Comparator %}).

<admc path="/assets/Mixbus/Good/Polarity" title="Polarity Optimizer example">
	<file name="UnOptimized.mp3" />
	<file name="Optimized.mp3" />
</admc>

Listen carefully to the low-end and low-mids. The optimized version is **much** thicker sounding. The [Comparater's visulization]({% post_url 2017-01-30-Comparator %}) shows the low-end in black. Not only can you hear the difference, but the low end is also _visually_ much more distinct when visualized.

Also pay attention to the fullness and stereo width of the cymbals, the low-end of the floor toms and the attack of the kick. _Remember_ my comparator normalizes files for LUFS, so 'louder is better' is not specifically applicable here. _It just sounds that much better._

All of this is basically free in 5 seconds of work with zero destructive processing. No EQ. No Compression. **No plug-ins of any sort. Just polarity optimization.**

**AWESOME**

The results can be even more noticeable on multi-miked guitar parts or stage recordings. The sky is the limit. This truly is a a unique and exceptionally useful feature for many of us.

# Audio Connection Manager

{::nomarkdown}
  <video autoplay loop muted class="gifvid">
    <source src="/assets/Mixbus/Good/ACM.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <div class="video-caption">Audio Connection Manager setting inputs</div>
{:/nomarkdown}

Routing inputs to tracks, tracks to busses, busses to other busses, etc... in other DAWs is often a menu-fest. Mixbus makes it simple with the Audio Connection Manager.

I'm setting up the I/O for the [optimize polarity](#optimize-polarity) test above. You can see how quick it is to add and remove input assignments. Assigning tracks to busses is equally as easy, or tracks to tracks, or your click to different outputs, or ... Assigning anything is easy basically. **Mixbus makes navigating complex I/O easy.** Setting up a mix or a recording session is rarely this easy.

A big part of it is the line-drawing tool. You can click and drag to create a path of I/O to easily map sequential sources to sequential destinations. The line-drag tool works just as well for erasing assignments.

# Grouping

{::nomarkdown}
  <video autoplay loop muted class="gifvid">
    <source src="/assets/Mixbus/Good/Grouping.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <div class="video-caption">Easy grouping</div>
{:/nomarkdown}

Grouping in this context is making a selection of tracks respond together to things like gain changes, solo, mute, edits, color etc... This grouping function _does not route audio_. It only links functions of the tracks in the group when the group is active.

Mixbus makes it very simple to add groups, visualize groups, edit and toggle groups. Groups can be drawn in the group tab or created from various selections or attributes. They are colour coded and toggled simply by clicking the tab.

Editing groups is as simple as resizing the tags to encompass tracks, or making a new tag and assigning that track to the group you want.

If you have tracks scattered around your project in the same group, you can 'collect group' to bring them all together. Very useful.

The downside is that groups in Mixbus can not currently be nested. Given the immediacy and ease of access of the current grouping system, this is an understandable omission, but I hope that nested groups are added in the future.

# Support Me!

This post took 4 hours to research, photograph, write and edit. If you appreciate the information presented then <a href="/DonateNow/">please consider joining patreon or donating!</a>








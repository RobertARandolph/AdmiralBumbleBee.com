---
layout: post
title: DAW Chart v6 and Studio One 3.5
comments: true
date:   2017-07-19_12:59:22 
categories: music
tags: ['DAW', 'DAW Chart', 'Studio One', 'Mixbus']
---

{::nomarkdown}
  <img src="/assets/Random/DawChart6.png" alt="Preview">
  <div class="image-caption">Just another chart</div>
{:/nomarkdown}

**UPDATE**: Please see the new [**DAW Feature Chart**](/DAW-Chart.html) for more up-to-date information and a way cooler chart.

So I've updated the DAW chart after my [30 days of bitwig]({% post_url 2017-06-04-30-days-of-wigging-out %}). I'm also updating it due to some changes in Reaper and Studio One as well.

Speaking of Studio One, let's go over some of the great **free** changes in 3.5!

<!--more-->

# Contents
{:.no_toc}
* TOC
{:toc}

# DAW Chart v6

<iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vShiOAR7EbSsh6Ik0rsTqqe_3ZW1qCu-LLiDwYy7ov23Fcbp3Ew7apYoUiU4oNsZN0JCJ2pFDB1TKKb/pubhtml?widget=true&amp;headers=false" height="1450" width="850"></iframe>

# Studio One 3.5

{::nomarkdown}
  <img src="/assets/Studio One/S135.png" alt="Studio One 3.5">
  <div class="image-caption">Studio One 3.5.1 is here!</div>
{:/nomarkdown}

Studio One 3.5 is a free update that brought a number of awesome features. I'm going to cover a few of these and explain what they mean to you.

## Mixer Undo!

{::nomarkdown}
  <video autoplay loop muted class="gifvid">
    <source src="/assets/Studio One/MixerUndo.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <div class="video-caption">Mixer Undo!</div>
{:/nomarkdown}

Previous to 3.5 you could only undo changes to your project that were _not_ related to the mixer or plug-ins. This made it possible to basically destroy your project by interpolating edits/composition with making mixer movements. If you tried to undo back to where you were 2 minutes ago, your edit changes were changed but your mixer changes were not!

Imagine if you were editing automation! Those changes were undoable, but the rest of the mixer was not. It was really not great.

3.5 lets you undo _nearly_ everything, including changes to VST and AU plug-ins. When you hit 'undo', then the last thing you did is undid. It doesn't matter where it was, you can follow a linear path to getting your project to a state it was in previously.

A great change.

## New Fatchannel XT

{::nomarkdown}
  <img src="/assets/Studio One/FatChannelXT.png" alt="Fat Channel">
  <div class="image-caption">New Fat Channel!</div>
{:/nomarkdown}

Fat Channel comes with a great new GUI and multiple new Compressor and EQ modes. The new GUI is pleasant but a bit spaced out too much for my liking.

The new compressor modes:

* Tube - [LA2A](http://www.uaudio.com/hardware/compressors/la-2a.html) - It appears to be an attempt at an LA2A emulation of sorts. As an emulation it's not particularly awesome. As a compressor it _is awesome_. It sounds fantastic, particularly on deeper and slower vocal parts.
* FET - [1176](http://www.uaudio.com/hardware/compressors/1176ln.html) - Yet another 1176-like compressor. This is an even _worse_ emulation, but it is still a great compressor. The labelling on the controls is probably a very good idea, even if it's untraditional. I don't think I'd grab this if I really wanted a specific 1176 sound, but I would certainly grab it if I need a FET type compressor sound.

The neq EQ modes:

* Passive - [Pultec EQ](https://www.sweetwater.com/store/detail/EQP1A) - The most classic passive equalizer since the UAD-1 brought it to the attention of the audio world. This is a surprisingly good emulation regarding the filter curves, however there's a bit of saturation missing that the original device offers with hot signals. Still, I reach for this often.
* Vintage - [Neve 1081-ish kinda](https://vintageking.com/neve-1081-cv) - This seems like it's supposed to be a Neve 1081 or Neve 1084 or... something Neve-ish. Does it sound Neve-ish? Once again it seems to be missing the saturation that you can get with really driving the EQ with a hot signal, but the general feel of the curve response is close. Is it a good emulation? no. Is it a good EQ, very much yes. Quick, simple and easy to use with sane defaults and value scaling. Without any fancy name on it, it's still a good EQ.

## Lower latency monitoring?

{::nomarkdown}
  <img src="/assets/Studio One/Latency.png" alt="Latency fix?">
  <div class="image-caption">Latency fixes kinda</div>
{:/nomarkdown}

[Remember when I tested DP 9.1s extraordinary latency claims?]({% post_url 2016-07-31-Digital-Performer-9.1-Latency-Test %}) Same thing here... almost.

When 3.5 original came out, the overall latency for a given buffer size was _higher_ than other DAWs. I don't recall the exact value, but I believe that it was 1 buffer more latency no matter the setting.

3.5.1 fixed the _total_ latency issue, and now it's on par with every other DAW for a given buffer size.

**Here's the cool part though**: Studio One now differentiates record monitored channels and playback channels. Your overall load in your project does not as greatly affect your ability to record monitor with low-buffers. So in 3.3 if you wanted to record monitor, then you may have had to change the buffer size for your entire project just because there was so much going on. In 3.5 you most likely can continue to use that low buffer size.

## Cpu Fixes?

{::nomarkdown}
  <img src="/assets/Studio One/CPU.png" alt="CPU">
  <div class="image-caption">CPU changes are good</div>
{:/nomarkdown}

A big complaint about Studio One 1->3 has been that it does not manage CPU processing load well. My experience bears this out, and 3.5 has fixed this for me.

Studio One 3.5 performs much better at higher CPU meter loads, and reaches those loads slightly slower. It's still not on par with [Reaper](http://www.reaper.fm) or [Digital Performer](http://motu.com/products/software/dp), but it's close enough.

With the "Protection" at maximum, you can get to some outrageous cpu levels without any major crackling, and without harming record monitoring performance!

## “Remove Track Automation”

{::nomarkdown}
  <img src="/assets/Studio One/RemoveAutomation.png" alt="Remove Track Automation">
  <div class="image-caption">Yes, just remove automation</div>
{:/nomarkdown}

It seems simple, but there was no way to quickly remove ALL automation on a track in S1. I really like this. Thanks guys!

## Project Page Enhancements

{::nomarkdown}
  <img src="/assets/Studio One/ProjectPage.png" alt="Project Page">
  <div class="image-caption">New Project Page</div>
{:/nomarkdown}

The project page is already an awesome place you can go and put together an album, or even just master a single track.

It's been update with new loudness statistics, new meters, a pool (browser sort of), better track search, and a number of other enhancements.

The project page is a unique feature, which manages to not be a total gimmick, that Studio One offers over the competition. Mastering your tracks is just a breeze and a pleasure in the Project Page (for the average musician!). Unless you're doing some serious Mastering work which requires some more import/export options, logs, editing capabilties etc... then the Project Page will satisfy and delight you.

It's great that they are continuing to improve it.

# Support Me!

This post took 2 hours to research, photograph, write and edit. If you appreciate the information presented then <a href="/DonateNow/">please consider joining patreon or donating!</a>








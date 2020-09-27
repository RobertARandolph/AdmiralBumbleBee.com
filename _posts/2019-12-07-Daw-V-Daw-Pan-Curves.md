---
layout: post
title: "DAW v DAW - Part 6: Pan Laws and Pan Curves"
comments: true
date:   2019-12-08_07:19:32 
categories: music
tags: ['Rant', 'DAW', 'Testing']
image: /assets/Differ/Pan/SexyCurves.png
description: Pan Laws, Pan Curves and Bitwig irritating me.
series: DAWDiffer
---

{::nomarkdown}
<a href="/assets/Differ/Pan/SexyCurves.png">
<img src="/assets/Differ/Pan/Thumbnails/SexyCurves.png" alt="Reaper has some... weird panning options">
</a>
<div class="image-caption">Sexy Curves baby.(Click for larger image)</div>
{:/nomarkdown}

Today I'm taking a break from the automation sub-series (which still has life in it) to explore one of the more well-known parts of "DAWs sound different".

**GOTCHA**, I'm not.

This article is about a close cousin of the ubiquitously discussed "Pan Law". Hop on through to see some explanations and hard data.

<!--more-->



# Contents
{:.no_toc}
* TOC
{:toc}

# Video

<iframe width="800" height="400" src="https://www.youtube.com/embed/a3on4Q2Wg_o" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Text article has more information, but the video is faster and probably more fun.

**FUNNY** - I actually got bit by the difference between Logic Pro X default pan law and Final Cut Pro pan law. My first upload of this video was 3dB clipped. My first time using the two softwares together, and what an appropriate problem to have.

**FUNNY 2** - It's not clipping in FCPX at all, but it does clip in a few places on youtube despite meeting their level requirements. Ugh.

# Pan Law: Why?

{::nomarkdown}
    <video autoplay loop muted class="gifvid">
        <source src="/assets/Differ/Pan/Combine.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <div class="video-caption">Combine (Video)</div>
{:/nomarkdown}

[Pan Law](https://en.wikipedia.org/wiki/Pan_law) is one of the first things that you see discussed when the topic of variance in DAW output is tortured to death on a forum.

Pan Law is an attempt to compensate for the combined energy that two (or more) sources create in order to convey a phantom center channel. This only happens when the signal is correlated between channels, i.e. a mono signal in a stereo space. (More accurately, when the signal's number of channels is less than the output's number of channels.)

It's important to realize that pan law does not apply (unless the DAW allows it) to signals where the input stream matches the output stream. Stereo channels are not normally affected by pan law for stereo outputs.

Let's break it down further, in stereo.

A stereo signal is two independent sources. A stereo signal doesn't have a "center" channel. What we hear as "the center" is a creation of our mind when the information received from the right and left sources are (near-)identical.

This presents a problem. Each independent source has a maximum level. Let's assume that level is some arbitrary measurement of 10dB. The left channel can not exceed that, nor can the right. Assuming we have a signal that's identical in both sources, they will combine to create a signal that's >10dB. Energy + Energy = More Energy. Duh, right?

What's seems simple is rarely so. Combining signals inside a machine is easy to do perfectly, and that would result in a "Center" channel of 16dB (arbitrary ultra-phantom units). Combining signals in the atmosphere isn't as simple, and the atmosphere is where the sound coming from your speakers is combined. The left and right signals don't combine perfectly for a variety of reasons:

* Room variance
* Transducer variance (speakers? headphones?)
* Transducer position
* Physiological asymmetry
* Position between transducers
* Axial positioning between transducers (head turned in one of 3 (or four??) dimensions)
* Time delay in original source
* Room asymmetry
* Neurological variance
* Psychological variance
* Probably a few things I'm forgetting... :)

So if they don't combine perfectly for that 6dB boost, then what happens? Is it 1db total? 3dB? 4.5dB?

The answer is yes. Different parts of the spectrum (different frequencies) are susceptible more or less to each of the variances. Depending on your space low frequencies might combine for 4dB, and higher frequencies for 3.5dB. Generally correlation favours lower frequencies, but it is not a linear relationship in your average scenario.

Then we make a compromise that might sound OK for the widest variety of audiences. Best of luck my friend.

## Pan Law Part 2: Types and Curve

{::nomarkdown}
<a href="/assets/Differ/Pan/SexyCurves.png">
<img src="/assets/Differ/Pan/Thumbnails/SexyCurves.png" alt="Reaper has some... weird panning options">
</a>
<div class="image-caption">Reaper has some... weird panning options (Click for larger image)</div>
{:/nomarkdown}

Now we, as audio system architects, are presented with a choice. We want a sound being panned from sound to side to have a consistent level.

There are two obvious solutions:

* Lower the L/R channels when the signal is correlated (mono) and positioned in the center.
* _Increase_ the L/R channels when the signal is correlated (mono), but positioned hard to one side.

We already have to decide _how much_ to compensate, and now we also have to consider how to execute the compensation (OFF WITH ITS HEAD!).

Unfortunately for us, the world isn't Center, Left or Right ([despite what some idiotic ideas might try to imply](https://www.recordingrevolution.com/why-lcr-panning-is-a-hack-to-better-recordings-and-mixes-of-course/)). We can have 25% right, 37% right, 87.11111111111111111111111 right, or 63 right.

How do we scale between "Center" and right or left? That's up to choice. It can be scaled linearly, log, S-shaped or whatever you want.

There's yet another level of complexity with your (Mr/s. DAW Designer) decision. Your choice of pan law style (decreasing, or increase) need not be a singular choice. You could decrease the center a bit, but also increase the sides as the signal begins to lean that way.

Yet another concern is that if you don't have a reduction 'at center', then boosted pan laws can make the signal exceed 0dBFS by using the pan control. Clipping because you panned? Surely nobody would do this...

Yikes. Lots of decisions to make, and some of them yield a similar sound, but at different output levels at different positions.

# Knobs

{::nomarkdown}
<img src="/assets/Differ/Pan/3oclock.png" alt="3 o'clock">
<div class="image-caption">3 o'clock</div>
{:/nomarkdown}

There's more!

Controls matter. No matter how hard we try as musicians, producers and engineers, we mix with our eyes to some extent. You decide that you would like to pan a source "a little bit to the right" so you move the control to 2 o-clock.

Unfortunately, that means something different in every DAW. When you get to [the results](#results) below, look at the 48,000 samples location and note what the level is relative to the starting level. "50%" is a different value in nearly every product!

We use interfaces, and even if absolute values may produce identical results, varying interactions will yield varied results. The interface matters!

# Test!

{::nomarkdown}
<a href="/assets/Differ/Pan/Explain.png">
<img src="/assets/Differ/Pan/Thumbnails/Explain.png" alt="How to read this">
</a>
<div class="image-caption">How to read this (Click for larger image)</div>
{:/nomarkdown}

We're the end user now. Time to figure out what these products are doing, and to do that we test.

* Test - The input signal is a 1khz -3dbFS Sine. I set the DAW's tempo to 120bpm and automate the main pan from center to full right using linear automation over 1 bar. I then graph what happens to the left channel and right channel.

Let me explain how to read these tests.

* Start -  The starting point tells you what the output reduction would be for a mono signal panned center. In the signal above there's a 6dB compensation since we start at -9dB
* Channels - The right channel is orange and the left channel is blue.
    * Increases in the right channel show that there's a boost that occurs in a channel as it's "panned to".
* Time - The signal should ideally fade to -Infinity at exactly 96,000 samples. If it does not, then that indicates inaccuracy of the DAW's automation system.

**IMPORTANT** - I'm not absolutely certain I did these tests correctly. Almost no DAWs seem to do what they imply that they should do. I am not certain that my tests are correct, or if the DAWs are simply bugged/poorly documented.

Due to Ardour's open-sourceness, I am _fairly_ certain that my tests are correct. My tests correlate directly with [the code that's publicly available](https://github.com/Ardour/ardour/blob/master/libs/panners/1in2out/panner_1in2out.cc).

## Technical Details

Here's how the code works to generate these charts:

* Test DAW with 1khz sine wave, starting at -Inf. Sample rate of 48,000hz.
* Read a directory of files named DAWRight, DAWLeft.
* Convert int values to float (for personal analytics)
* Convert int values to dBFS (for graphing) 
* Starting at the 14th sample, take every 48 samples.
* Interpolate values.
* Graph time/value for the interpolated values.

Clean, fast, simple, easy.

**NOTE** Some DAWs (bad!) filter DC, otherwise using a DC signal would be a good solution.

# Results

All of these tests are using the **DEFAULT** settings.

Some DAWs have a variety of pan law settings, and I'd go nuts trying to show all the variations available.

If you wish to inspect the results yourself, then [download the data](/assets/Differ/Pan/data.zip), open one of the json files in the zip and paste its contents [in the live Vega Editor](https://vega.github.io/editor/#/). That will allow you to inspect absolute values and massage the data a bit if you wish.

## Ardour 5.12

{::nomarkdown}
 <a href="/assets/Differ/Pan/Ardour.png">
 <img src="/assets/Differ/Pan/Thumbnails/Ardour.png" alt="Ardour">
 </a>
 <div class="image-caption">Ardour (Click for larger image)</div>
{:/nomarkdown}

-3dB Pan law. Opposing side is compensated. [Code is available here](https://github.com/Ardour/ardour/blob/master/libs/panners/1in2out/panner_1in2out.cc).

~~Automation smoothing at play here. Fade does not end at 96,000 samples.~~

**EDIT**: I previous made an error. There's a bug in Ardour 5.12 where automation plays buffered in touch mode. All other DAWs were tested in play/read mode. I have updated the image above with files ArdourLeft2 and ArdourRight2.

[data.zip](/assets/Differ/Pan/data.zip) has been updated as well.

## Bitwig 3.03

{::nomarkdown}
 <a href="/assets/Differ/Pan/Bitwig.png">
 <img src="/assets/Differ/Pan/Thumbnails/Bitwig.png" alt="Bitwig">
 </a>
 <div class="image-caption">Bitwig (Click for larger image)</div>
{:/nomarkdown}

(see [conclusion](#conclusion) for more about this section)

Bitwig is... broken. Arguably conceptually broken, at least.

The opposing side is over compensated. In the graph you can see that it clips early. Try it with a -3dB mono sine wave yourself, if you hard pan to a side then the opposing side begins to clip quickly.

Bitwig compensates the sides by 4.2dB. Your signal can be boosted by 4.2dB by panning.

The automation is incorrect. I placed the point at exactly 96,000 samples (bar 2 at 120bpm at 48khz), however the fade did not complete till after.

This is the worst of the behaviours I saw.
 
## Cubase 10.5 build 668

{::nomarkdown}
 <a href="/assets/Differ/Pan/Cubase.png">
 <img src="/assets/Differ/Pan/Thumbnails/Cubase.png" alt="Cubase">
 </a>
 <div class="image-caption">Cubase (Click for larger image)</div>
{:/nomarkdown}

**Pan Law options available.**

* 0dB
* -3dB
* -4.5dB
* -6dB
* Equal Power **DEFAULT**

-3dB center. Opposing side rises to 0dB total change.
 
## Digital Performer 10.0 build 79351

{::nomarkdown}
 <a href="/assets/Differ/Pan/DP.png">
 <img src="/assets/Differ/Pan/Thumbnails/DP.png" alt="DP">
 </a>
 <div class="image-caption">DP (Click for larger image)</div>
{:/nomarkdown}

-2.5dB center. Opposing side rises to 0dB total change.
 
## FL Studio 20.5.1.522

{::nomarkdown}
 <a href="/assets/Differ/Pan/FL.png">
 <img src="/assets/Differ/Pan/Thumbnails/FL.png" alt="FL">
 </a>
 <div class="image-caption">FL (Click for larger image)</div>
{:/nomarkdown}

(see [conclusion](#conclusion) for more about this section)

0dB center, but opposing side rises +3dB.

This means that panning can cause digital clipping.

## Live 10.1.5

{::nomarkdown}
 <a href="/assets/Differ/Pan/Live.png">
 <img src="/assets/Differ/Pan/Thumbnails/Live.png" alt="Live">
 </a>
 <div class="image-caption">Live (Click for larger image)</div>
{:/nomarkdown}

(see [conclusion](#conclusion) for more about this section)

0dB center, but opposing side rises +3dB.

This means that panning can cause digital clipping.

## Logic 10.4.7

{::nomarkdown}
 <a href="/assets/Differ/Pan/Logic.png">
 <img src="/assets/Differ/Pan/Thumbnails/Logic.png" alt="Logic">
 </a>
 <div class="image-caption">Logic (Click for larger image)</div>
{:/nomarkdown}

**Pan Law options available.**

* 0dB
* -3dB
* -3dB Compensated **DEFAULT**

0dB center, but opposing side rises +3dB.

This means that panning can cause digital clipping.

Logic's Automation also rears its ugly head again with poor interpolation and late modulation. I had all "Sample Accurate" settings turned on for this test.

## Pro Tools 2019.10.0

{::nomarkdown}
<a href="/assets/Differ/Pan/PT.png">
<img src="/assets/Differ/Pan/Thumbnails/PT.png" alt="Pro Tools">
</a>
<div class="image-caption">Pro Tools (Click for larger image)</div>
{:/nomarkdown}

**Pan Law options available.**

* -2.5dB
* -3.0dB **DEFAULT**
* -4.5dB
* -6.0dB

-3dB center. Opposing side rises to 0dB total change.

That sharp drop appears to be an artifact of Pro Tool's automation. The scale of the area where you draw the automation is not linear, so a 'straight line' ends up with this curve.

## Reaper 6.01

{::nomarkdown}
 <a href="/assets/Differ/Pan/Reaper.png">
 <img src="/assets/Differ/Pan/Thumbnails/Reaper.png" alt="Reaper">
 </a>
 <div class="image-caption">Reaper (Click for larger image)</div>
{:/nomarkdown}

**Pan Law options available.**

* Variable - You can enter your own center value
    * Optional "Gain Compensation (boost pans)
* 0.0dB, no gain compensation **DEFAULT**

Reaper's default curve is unique. 0db change at center, but it rises about +2dB partially through the sweep then back down to 0dB change at the end.

Quite oddly this means that you could (assuming a >2dbFS peaking signal) potentially cause digital clipping at ~50% pan, but not at 100% pan.

## Studio One 4.5.5 build 54904

{::nomarkdown}
 <a href="/assets/Differ/Pan/S1.png">
 <img src="/assets/Differ/Pan/Thumbnails/S1.png" alt="S1">
 </a>
 <div class="image-caption">S1 (Click for larger image)</div>
{:/nomarkdown}

0dB change at center. No compensation on opposing channel. This is "console-like", but it's generally considered to be the least consistent sounding of common methods.

Studio One's terrible automation system demonstrates itself yet again with late modulation and poor interpolation.

# Conclusion

The data I have is there. **Don't trust it**. Try it yourself!

When designing these systems there is sometimes a decision between the idealistic solution that assumes an omniscient user, and a practical solution that assumes humanity.

Ideally the default state of the system, "mono" signals panned to the center, would be untouched. This state would mean that pan law would need to _boost_ as the sides are approached. I call this 'ideal' because untouched signals are untouched, and the signal is only changed when the user inputs a change (panning).

Unfortunately, we users are often in a rush, unaware or just plain stupid. If the peak of the signal is within the boost margin, we can cause clipping by panning. Practically, _not_ boosting allows the user to operate the pan control without suffering potential negative consequences.

I believe that the design decision should favour common use in scenarios where the idealistic solution is only _slightly_ better. I consider boosted pans to be a poor design.

It's your choice though. As long as you are informed, you can make good decisions.

# Meta

This post took 28 hours to research, write and edit.







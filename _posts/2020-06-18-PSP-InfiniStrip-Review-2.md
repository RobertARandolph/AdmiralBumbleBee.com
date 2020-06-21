---
layout: post
title: PSP InfiniStrip Review 2
comments: true
date:   2020-06-18_08:05:12 
categories: music
tags: ['Review']
image:
description:
header:
header-caption:
---

This article marks part 2, and the conclusion of, this review of [PSP's InfiniStrip](http://www.pspaudioware.com/plugins/dynamic_processors/psp_infinistrip/).

I decided to try something new with this review, which I'll explain after the break.


Version 1.0.4 was released during this review, and the review applies up to that version.  Any further enhancements to the product _are not covered in this review_. Please consult the [PSP website](http://www.pspaudioware.com/plugins/dynamic_processors/psp_infinistrip/) to see if any of my complaints (if any), are resolved and if there are any cool new features that I wasn't able to cover.

**DISCLOSURE** - PSP kindly provided this product to me for free as an NFR for review. If you believe this has biased this article, then I encourage you to call it out in the comments.

**Other posts in this series**

* [InfiniStrip Part 2 - Aliasing and Cramping]({% post_url 2020-06-03-PSP-InfiniStrip-Review %})

<!--more-->

**If you have any questions or comments, please comment below! I read every comment and respond to most.** No registration is necessary to comment, so don't be shy.

# Contents
{:.no_toc}
* TOC
{:toc}

# Introduction

In this review I'll be _showing_ technical information that I believe is sufficient for informed readers to get a decent overview of each module.

The text portion will be my touchy/feely personal assessment of the product, possibly not correlated to the measurements. I wrote my notes during use and before any sort of testing, so they may not be completely in line with objective reality.

I'll be attempting to avoid technical terms in the text portion as I believe that the imagery gives a decent technical _overview_ of each module.

# Main UI

## View Modes

{::nomarkdown}
<a href="/assets/InfiniStrip/Modules/ViewModes.png">
<img src="/assets/InfiniStrip/Modules/Thumbnails/ViewModes.png" alt="View Modes">
</a>
<div class="image-caption">View Modes (Click for larger image)</div>
{:/nomarkdown}

There are 3 view modes available for the channel strip, the above image shows all 3 with the same module setup.

* Full - All module slots are shown regardless if they are filled.
* Resizeable - Only filled slots are show (oddly, this isn't resizable, it's automatically resized).
* Mini - Available slots are shown on the left, and a single module is shown on the right. You select the slot on the left to view the module in the right pane.

## A/B and Compare System

{::nomarkdown}
<img src="/assets/InfiniStrip/Modules/ABComp.png" alt="A/B and Compare System">
<div class="image-caption">A/B and Compare System</div>
{:/nomarkdown}

InfiniStrip comes with an A/B system that allows you to quickly jump between 2 channel strip settings for comparison. This isn't a novel feature, and it's fairly common on modern plugins.

The arrow pointing at A or B (the right pointing arrow to the left of each letter) will save the current setup to that slot. The right pointing arrow to the right of the arrow will recall it.

The unusual and functionally fantastic bit here is that this is saved to persistent storage. If you open up another instance of InfiniStrip and want to pull up A or B, you can do so without messing with presets or other manual "Save to Disk" options.

The downside is that using the A/B system will overwrite any other A/B setups from another instance.

I found that the global and persistent A/B system was a benefit. I found myself using it frequently to quickly grab settings and compare settings for similar instruments or parts. I rarely use A/B systems in other products, but InfiniStrip's A/B system has found its way into my heart.

The compare allows you to switch between the most recently loaded preset, and any changes you've made to it. I almost never use presets other than creating a default, so this wasn't a feature that I spent much time with.

## Preset System

{::nomarkdown}
<img src="/assets/InfiniStrip/Modules/Preset.png" alt="Preset System">
<div class="image-caption">Preset System</div>
{:/nomarkdown}

I don't actively use presets on effects, especially on effects where input level is key to attaining the sound you want. Yes, InfiniStrip's [auto gain](#auto-gain) feature would help, but I'm not convinced.

The second layer of my distate for presets is _how difficult_ they are to manage and how every plugin has its own convoluted preset management and browsing system.

InfiniStrip does basically nothing to alleviate these complaints. Saving/Loading presets and banks is file save/load process, gross. Browsing presets is a menu.

It does not appear to suppert VST3 Preset features, so even in VST3 hosts you are stuck with the file-browser and menu management.

Luckily, none of these things bothered me. I don't see any value in using presets in a channel strip unless you have a motown workflow.

### Module Presets

{::nomarkdown}
<img src="/assets/InfiniStrip/Modules/ModulePresets.png" alt="Module Presets">
<div class="image-caption">Module Presets</div>
{:/nomarkdown}

Each module has a selection of built-in presets. They do not appear to be changeable (without a bit of hackery).

I did find myself using them on the compressors in the later stages of my using the product. Once you have a feel for the module presets then you can grab something _close_ to what you're looking for without doing the knob wobble dance.

I don't mind having limited slots, but I do wish they were editable.

## Adding Modules

{::nomarkdown}
<img src="/assets/InfiniStrip/Modules/Modules.png" alt="Module Addition">
<div class="image-caption">Module Addition</div>
{:/nomarkdown}

Modules can be changed/added by clicking either the text at the top of a strip, or the infinity symbol on the far right.

The arrow switches allow you to cycle between valid selections for that strip. There are strips for EQ, Filters, Comp, Gate, Limiter, Control and 2 general purpose slots.

If you try to use the arrows on a general purpose slot, it will only cycle between modules of the current type.

The current system works well for the modules that are available. If they add many more modules, I would sincerely hope for a search system rather than menu navigation.

## Reordering Modules

{::nomarkdown}
	<video autoplay loop muted class="gifvid">
		<source src="/assets/InfiniStrip/Modules/Reorder.mp4" type="video/mp4">
		Your browser does not support the video tag.
	</video>
	<div class="video-caption">Reordering (Video)</div>
{:/nomarkdown}

Reordering is done with drag and drop.

I _HATE_ it.

* The animation is choppy on my system (and all of my macs in fact, even after updating to a version that's supposed to improve this issue).
* Click/drag sometimes doesn't work.
* Dragging too high or too low _will delete the module_ (and there is no undo!).

I have a signal flow I prefer, so I rarely re-order modules. I suspect most users will rarely re-order them. The overall impact of the re-ordering is minimal, but everytime I use it I become frustrated by it.

A system with a currently selected module that you can move left/right with a button and/or arrow key would be preferred by me.

# Mute/Solo/Bypass

{::nomarkdown}
<a href="/assets/InfiniStrip/Modules/Charts/Bypasses.png">
<img src="/assets/InfiniStrip/Modules/Charts/Thumbnails/Bypasses.png" alt="Mute, Solo, Bypass">
</a>
<div class="image-caption">Mute, Solo, Bypass (Click for larger image)</div>
{:/nomarkdown}

Each module has a mute function to remove the module from the signal flow and a solo function to make it the exclusive processor.

The entire plugin is bypassable internally. 

[I've covered this before]({% post_url 2017-11-21-What-do-I-want-in-an-EQ %}#bypassing). The goal here is to be able to bypass, mute and solo without a "click" or "pop". If this happened then it would be visible in the spectrogram above as a bright vertical line when the control is engaged.

Infinistrip does all 3 of these functions nicely.


## Sidechain

{::nomarkdown}
<img src="/assets/InfiniStrip/Modules/SideChain.png" alt="Sidechain system">
<div class="image-caption">Sidechain system</div>
{:/nomarkdown}

The sidechain system confused me at first.

The plugin sidechaining world is a mess. AU and VST3 have their own methods, which are presented differently based on the host. VST2 plugins use a variety of methods, where the most common is sending your side chain signal to inputs 3/4 of the dynamics plugin.

InfiniStrip appears to maintain a single sidechain signal for all dynamics processors, but what signal goes where requires some detective work.

The sidechain signal is passed from left to right. If you use an [S.C. Filter](#sc-filters), then that filtered signal is passed in its filtered state to the next processor.

The confusing part (at first!) is on the compressors that have their own sidechain filter. So if you use the HPF on a FET Pressor, that high passed sidechain is _not_ sent in its high-passed state to the next processor.

The sidechain signal routing behaviour makes sense. It allows you to manage each dynamics processor with its own high pass filter, but use S.C. Filters to make serial changes to the sidechain signal (useful when you are using some sort of Comp->EQ->Comp flow).

Omitting any sort of explicit routing reduces UI clutter. I initially wished I could route things into the sidechain signal path, but while using the plugin in projects I never once stumbled across a scenario where that was necessary.

## Auto Gain

{::nomarkdown}
<img src="/assets/InfiniStrip/Modules/GainStage.png" alt="Gain Staging Toosl">
<div class="image-caption">Gain Staging Toosl</div>
{:/nomarkdown}

If you don't know what gain staging is, [first drop by here]({% post_url 2017-11-01-Gainstaging-for-the-modern-musician %}).

The [Preamp models](#preamp) all have a set of tools to automatically set the gain for that module. Generally the preamp strips will be placed at the beginning of the signal chain and supply signal to other modules, but _they can **and should** be used at any point in the chain_.

Controls:

* Auto - Automatically changes the input gain to match the reference level based upon other parameters. Clicking Auto sets the gain based on the signal present when the button is pressed.
* UP/DWN, DWN - UP/DWN allows the gain to move bi-directionally while adjusting the reference knob when Auto is on. DWN only allows the gain to be reduced when changing the reference level.
* Reference - The value matched by the auto-gain section. The input gain of the module is setup so the signal is close to the level set by the reference knob.
* RMS/PK - Select between RMS or Peak measurement when automatically setting reference level.

The concept is great, but there are a few workflow worms.

* Gain is initially set by the current level, but gain is only _automatically_ reduced. This results in a few unfortunate circumstances:
    * Hitting auto during a quiet part will **MAX** the gain (+30dB). It's easy to uncheck "Auto", but forget to reset the gain. 
    * Hitting auto during a loud part will bias your gain setting low. Generally if you're looking to get some Mojo™ out of a module, you'll want to set it for the average level of the signal so that the louder parts get smashed a bit. Auto does not easily facilitate this. (You have to locate to another part of the track to use auto)
* UP/DWN, DWN is confusing - This is a control that I don't know of on any other device, and naturally you would think that it changes how the auto-gain algorithm works.... but it does not. It changes how the reference knob works relative to the gain knob in the context of the auto-gain algorithm. It's a good idea, but even after using the plugin a few dozen hours I forgot what the switch did.
* RMS? - I find it strange that RMS is a selection, when ANSI or IEC VU spec is used for _so many other products_, software and hardware alike.

These complaints are relatively minor. I can count on one hand the number of times that I reached for the auto circuit in the last 2 months. It's a great feature for learning how the modules react to input levels, but manually setting gain becomes second nature quickly.

 Modules

# Chart Explanations

These are not a definitive collection of measurements. I've left out some classes of measurements that aren't generally applicable to digital plugins or that demonstrate minimal audible effects.

I've selected 4 types of measurements to give keen readers a quick overview of what each module is doing.

* 48khz Sample Rate
* All measurements taken with "analog" on.
* Noise off.
* Gain at 0 in module.

## Hammerstein

{::nomarkdown}
	<video autoplay loop muted class="gifvid">
		<source src="/assets/InfiniStrip/Modules/Hammerstein.mp4" type="video/mp4">
		Your browser does not support the video tag.
	</video>
	<div class="video-caption">Hammerstein (Video)</div>
{:/nomarkdown}

Generated with REW + Custom Software.

This plot shows the amplitude of each harmonic relative to frequency.

It presents an excellent method of determining the sonic 'flavour' of a saturation processor. Most non-trivial processors will saturate slightly differently depending on the frequency (and level) of the source material.

Translating the graph into mildly meaningful words to describe how the device may sound is a long article in its own right. So I will leave this as an exercise for the reader. (my favorite "screw you, that's too much work" term to put in papers.)

Since some processors have saturation that reacts in a dynamic manner, I plotted the first 5 harmonics at with a test signal from -6dBFS peak to -18dbFS peak. None of these processors demonstrated meaningful information in this manner so I presented only the -12dBFS plot. (Or the information was so minimal that it was not communicated easily through the charts I created).

All measurements were taken with the "analog" button on.

**NOTE** - Straight lines aren't "good". This is essentially a profile of the processor's saturation. "Colour" so to say. There isn't an objective value here.

## Bode

{::nomarkdown}
<img src="/assets/InfiniStrip/Modules/Bode.png" alt="Bode Plot">
<div class="image-caption">Bode Plot</div>
{:/nomarkdown}

Generated with REW + Custom Software.

In graphs with 2 non-correlated looking lines, the plot shows frequency **and** phase response of the device for the given setting. Frequency is the darker line, phase is the lighter line.

In graphs with multiple correlated looking lines, the plot shows multiple _frequency_ measurements using varying parameters of the plugin.

All measurements are taken at 0 gain and "analog" mode turned on in the plugin, with a -12dBFS peak test signal.

## Ramp

{::nomarkdown}
<a href="/assets/InfiniStrip/Modules/Charts/OptoRamp.png">
<img src="/assets/InfiniStrip/Modules/Charts/Thumbnails/OptoRamp.png" alt="Ramp">
</a>
<div class="image-caption">Ramp (Click for larger image)</div>
{:/nomarkdown}

[Generated with PluginDoctor](https://ddmf.eu/plugindoctor/).

This plot shows the response of a dynamics device relative to input amplitude.

X-axis is input level, Y-axis is output level.

A "curve" near where the line begins to break indicates a knee. A knee changes the transition between the "compressed" and "uncompressed" state (along with the envelope).

## Attack/Release

{::nomarkdown}
<a href="/assets/InfiniStrip/Modules/Charts/FETAR.png">
<img src="/assets/InfiniStrip/Modules/Charts/Thumbnails/FETAR.png" alt="Attack/Release">
</a>
<div class="image-caption">Attack/Release (Click for larger image)</div>
{:/nomarkdown}

[Generated with PluginDoctor](https://ddmf.eu/plugindoctor/).

This plot shows the envelope characteristics of a processor.

A 2 stage block of audio is sent through the processor. 

* The first 'spike' shows the shape of the attack.
* The following block shows the action of the ratio (and related characteristics) relative to other parameters.
* _After_ the previous chunk, the dip and ramp upward shows the release shape.

Envelope characteristics tend to be the most audible and most varying behaviours of compressors, but regardless must be taken into account with the rest of the processor.

# PREAMP
 
All of the preamp modules have [the auto gain circuit](#auto-gain), and individual left and right channel polarity inversion.

## Gain

{::nomarkdown}
	<a href="/assets/InfiniStrip/Modules/Gain.png">
	<img src="/assets/InfiniStrip/Modules/Thumbnails/Gain.png" alt="Gain">
	</a>
	<div class="image-caption">Gain (Click for larger image)</div>
{:/nomarkdown}

Simple digital gain module. Similar to using a fader in your DAW.

## Pre 60s

{::nomarkdown}
	<a href="/assets/InfiniStrip/Modules/Pre60s.png">
	<img src="/assets/InfiniStrip/Modules/Thumbnails/Pre60s.png" alt="Pre 60s">
	</a>
	<div class="image-caption">Pre 60s (Click for larger image)</div>
{:/nomarkdown}

I'm not sure what I expected from the 60's preamp. I've not liked _any_ of the 60s era preamp models _or_ hardware that I've tried in the past. They tend to have what I would describe as a "dragging a table on a rough floor" type sound. Farty, if you will.

Higher quality products don't have this character in a manner which is offputting by default, but it is a sound that I do not enjoy.

The 60s preamp has that character. 

Throwing it on the channel gives the audio a slightly beefier sound. Driving it leads to a wooly character. Lots of low end, not much sizzle.

I ended up using this model the least. I can see value in it for those that want a "classic" vibe, or seeking to "warm" up a sound, however I did not experience much of a 'warm'ing effect. It makes things sound bigger and heftier at the expense of low-end clarity. That's a popular sound, but it's not a sound I gravitated towards.

### Charts

{::nomarkdown}
<a href="/assets/Infinistrip/Modules/Charts/60sBode.png">
<img src="/assets/Infinistrip/Modules/Charts/Thumbnails/60sBode.png" alt="Bode Plot">
</a>
<div class="image-caption">60s Preamp Bode Plot (Click for larger image)</div>
{:/nomarkdown}

{::nomarkdown}
<a href="/assets/InfiniStrip/Modules/Charts/60sHammer.png">
<img src="/assets/InfiniStrip/Modules/Charts/Thumbnails/60sHammer.png" alt="Hammerstein">
</a>
<div class="image-caption">60s Preamp Hammerstein (Click for larger image)</div>
{:/nomarkdown}

## Pre 70s

{::nomarkdown}
	<a href="/assets/InfiniStrip/Modules/Pre70s.png">
	<img src="/assets/InfiniStrip/Modules/Thumbnails/Pre70s.png" alt="Pre 70s">
	</a>
	<div class="image-caption">Pre 70s (Click for larger image)</div>
{:/nomarkdown}

Low end king.

The 70s preamp lends heft to anything you throw it on, and it's not kind to any rumble or mud in the source. About half the time I felt I needed a highpass while using the 70s preamp.

The saturation is wonderful. This is the preamp I enjoyed cranking the most, but it's also the preamp that I experienced the most audible aliasing with. I would normally use a processor like this on full drum busses or to increase the harmonic complexity of some guitars, but over time I began to not press it much on anything with meaningful content above the mid range (500-800hz).

I usually work at 48khz, but I started a project at 96khz specifically to work with this module and _not_ be annoyed by the aliasing on drums. If there's any argument to be made for adding oversampling to InfiniStrip, then this is it. The rich sound of driving the 70s preamp is sometimes overwhelmed by the processing artifacts unless you work at a higher sample rate.

I can't convince myself to consistently work at 96khz (yet?). The extra processing power is a hurdle, and why pay that price when only a few processors _potentially_ benefit from it?

If I set the drawback aside then I would happily claim this module and the [retroQ](#retroq) module are worth the price of the whole product alone.

The aliasing in InfiniStrip with high-drive 70s preamp detracted from my excitement in using the product. I could nearly say that if the 70s preamp _wasn't_ here, and I didn't know what I was missing sometimes, then I would value InfiniStrip more. That's an irrational view of course, but knowing what your missing is bittersweet knowledge.

### Charts

{::nomarkdown}
<a href="/assets/Infinistrip/Modules/Charts/70sBode.png">
<img src="/assets/Infinistrip/Modules/Charts/Thumbnails/70sBode.png" alt="Bode Plot">
</a>
<div class="image-caption">70s Preamp Bode Plot (Click for larger image)</div>
{:/nomarkdown}

{::nomarkdown}
<a href="/assets/InfiniStrip/Modules/Charts/70sHammer.png">
<img src="/assets/InfiniStrip/Modules/Charts/Thumbnails/70sHammer.png" alt="Hammerstein">
</a>
<div class="image-caption">70s Preamp Hammerstein (Click for larger image)</div>
{:/nomarkdown}

## Pre 80s

{::nomarkdown}
	<a href="/assets/InfiniStrip/Modules/Pre80s.png">
	<img src="/assets/InfiniStrip/Modules/Thumbnails/Pre80s.png" alt="Pre 80s">
	</a>
	<div class="image-caption">Pre 80s (Click for larger image)</div>
{:/nomarkdown}

My love affair with the SSL 4k (which I learned a good deal of my AE knowledge on) gave me the expectation that this would be _my_ preamp.

The SSL 4k was the defining console of the 80s. I use the emulations from [UA](https://www.uaudio.com/uad-plugins/channel-strips/ssl-4000-e-series-channel-strip-collection.html) and [PA](https://www.plugin-alliance.com/en/products/bx_console_ssl_4000_e.html) hundreds of times a week. It's plugin crack to me.

The 80s preamp in InfiniStrip did not give me the fix I was looking for.

The 80s preamp is much brighter than I'd expect from a transformerless 4k. It's not particularly bright, but it is brighter. It saturates slower than any of the consoles that I'd imagine it's emulating (_which is good!_) and adds a distinctive low-end sound that's not present in any popular 80s console that I'm aware of.

It took me about a month of constant use before I warmed up to (sorry) the 80s preamp. When I stopped expecting it to sound like the 80s style preamps I use(d) then I "got it". I found the 80s preamp to be useful on things where I wanted _just a bit_ of something. Eventually it became the default preamp in my channel strip.

The 80s pre is the most friendly to modern electronic and rock styles. Less density, fewer harmonics, less low-end. The results are _subtle_ at sane levels, but if you threw this on every channel then A/B'd your mix with and without then you will hear a clear difference. One track? Two tracks? I wouldn't even claim to hear the difference in a level-matched A/B (I tried!).

I wish InfiniStrip had a "global off" that allowed you to turn off all instance of a module that are currently active. I'm rarely reminded of how important small changes can be, but a few project-wide setups with _just_ the 80s preamp gave me a good reminder.

### Charts

{::nomarkdown}
<a href="/assets/Infinistrip/Modules/Charts/80sBode.png">
<img src="/assets/Infinistrip/Modules/Charts/Thumbnails/80sBode.png" alt="Bode Plot">
</a>
<div class="image-caption">80s Preamp Bode Plot (Click for larger image)</div>
{:/nomarkdown}

{::nomarkdown}
<a href="/assets/InfiniStrip/Modules/Charts/80sHammer.png">
<img src="/assets/InfiniStrip/Modules/Charts/Thumbnails/80sHammer.png" alt="Hammerstein">
</a>
<div class="image-caption">80s Preamp Hammerstein (Click for larger image)</div>
{:/nomarkdown}

## ADC 90s

{::nomarkdown}
	<a href="/assets/InfiniStrip/Modules/ADC90s.png">
	<img src="/assets/InfiniStrip/Modules/Thumbnails/ADC90s.png" alt="ADC 90s">
	</a>
	<div class="image-caption">ADC 90s (Click for larger image)</div>
{:/nomarkdown}

Uh.

hmm.

Hiphop and derived genres? That's all I see here. That "straight off the mpc/sp" sound.

I tried to find some generalized niche for the ADC 90s, but there was none. It _definitely_ gives that harsh-but-not-shrill 90s sampler vibe, which I know is popular in certain genres, but even in those contexts this would be overkill much of the time.

It's noisy. The noise doesn't sound nice. The saturation is inharmonic. The fidelity is minimal.

Do you want that? Perfect. I don't know of many other products that get this vibe right.

Did I want it? A few times, and I'm not sure if the mix benefited. I find it difficult to convince myself to sacrifice musicality (harmonicity at least) for a throwback. The 90s crunch can be achieved with a naive waveshaper and a low-pass filter in a way that falls in line with modern musical tastes. If you want authenticity then the ADC 90s is an excellent path, but I don't agree with its existence as a matter of principle.

### Charts

{::nomarkdown}
<a href="/assets/Infinistrip/Modules/Charts/90sBode.png">
<img src="/assets/Infinistrip/Modules/Charts/Thumbnails/90sBode.png" alt="Bode Plot">
</a>
<div class="image-caption">90s Preamp Bode Plot (Click for larger image)</div>
{:/nomarkdown}

{::nomarkdown}
<a href="/assets/InfiniStrip/Modules/Charts/90sHammer.png">
<img src="/assets/InfiniStrip/Modules/Charts/Thumbnails/90sHammer.png" alt="Hammerstein">
</a>
<div class="image-caption">90s Preamp Hammerstein (Click for larger image)</div>
{:/nomarkdown}

 
# FILTERS
 
## Basic Filters

{::nomarkdown}
	<a href="/assets/InfiniStrip/Modules/BasicFilters.png">
	<img src="/assets/InfiniStrip/Modules/Thumbnails/BasicFilters.png" alt="Basic Filters">
	</a>
	<div class="image-caption">Basic Filters (Click for larger image)</div>
{:/nomarkdown}

* Low pass - 6, 12 and 18 dB-per-octave slopes.
* High pass - 12, 18 and 24 dB-per-octave slopes.

I found myself mildly disappointed with the Basic Filters because I often wanted a shallower slope. I needed a steeper slope sometimes and that broke my "channel strip workflow". I had to use a different product any time I needed a gentler or more aggressive filter between stages, and that meant putting the secondary product between two instances of InfiniStrip or not using InfiniStrip at all.

I like to use high-pass filters with some resonance. Take away some of the low end, but add a bump just at the cutoff to compensate for the reduction in lower frequencies. I use a similar "trick" on guitars, bass and saw synths with low-passes. Basic Filters (and [Pro Filters](#pro-filters)) do not have a bump or resonance.

Initially I tried to work with the filters as is. A few of the preamp models already add some low-end meat, so maybe my resonant filter habit was unnecessary? Perhaps an infusion of saturation would compensate for any low-passes?

No. I sorely missed having resonant filters or some sort of compensation.

I don't think that I have used the Basic Filters in the last month. I prefer to almost always use [Pro Filters](#pro-filters) and manipulate the mid-band to do my dirty compensatory needs.

If the basic filters were resonant, I'd be in heaven.

### Charts

See the HP/LP charts for Pro Filters below.

## Pro Filters

{::nomarkdown}
	<a href="/assets/InfiniStrip/Modules/ProFilters.png">
	<img src="/assets/InfiniStrip/Modules/Thumbnails/ProFilters.png" alt="Pro Filters">
	</a>
	<div class="image-caption">Pro Filters (Click for larger image)</div>
{:/nomarkdown}

Take the [Basic Filters](#basic-filters), add an extra band and this is what you get.

For no added fee, we'll throw in:

* A low shelf
* A bandpass
* A bell filter
* A notch filter
* A high shelf

Versatility that you can write home about.

I'll spoil the review a bit for you and tell you that I love [retroQ](#retroq), but I reviewed my projects that I used InfiniStrip in and I use Pro Filters more than any other filter in InfiniStrip.

The sheer versatility of it makes it a smart grab when you're not 100% certain of what you need to do to a signal. There isn't much "vibe" to it, but it's a problem solver.

If I were to have a gripe with it, and I do, it's that it can't be used in parallel with other processors. If I wanted to nitpick more, and I do, it'd be that I can't use _at least_ 3 of these. Yes, you can use two (filter slot, X or Y slot), then use an EQ for something else.

The charts below bare the versatility of this seemingly simple processor.

Some notes on the various filters:

* Notch - Somehow makes almost everything sound better. I'm curious to see measurements. Just throwing a notch in an unimportant area of the signal improves most things. (Note: nope, not _that_ special. The low/high pass effect is notable though.)
* Bell - Wish it was easier to sweep. 20hz-20khz range on a single knob is too much even with fine-tuning modifiers. I would prefer a low/mid/high switch that limited the range of the knob so that I had more immediate control.
* Bandpass - Found myself using this as a combo high/low pass on percussion and electric bass. First time in my entire audio or music career that I found a practical and common use of a bandpass.
* Shelves - Sound weird? I can't qualify them as bad sounding, but they act unpredictable to my ears. I avoided using them because of this. (Note: Perhaps the slight resonance? Combine with me constantly forgetting the HPF/LPF were ON?)
* Filters - Notable that they default to ON, which caught me offguard a number of times. They should default to OFF.
	* Inherits limited slopes from [Basic Filters](#basic-filters)

## Charts

{::nomarkdown}
<a href="/assets/InfiniStrip/Modules/Charts/ProFiltersHPLP.png">
<img src="/assets/InfiniStrip/Modules/Charts/Thumbnails/ProFiltersHPLP.png" alt="High and Low Passes at 100hz and 15khz (18dB/oct)">
</a>
<div class="image-caption">High and Low Passes at 100hz and 15khz (18dB/oct) (Click for larger image)</div>
{:/nomarkdown}

Annoyingly I did ALL of these charts incorrectly originally because of the HPF/LFP defaulting to ON.

* LPF - 10,000hz, 18dB/oct
* LPF - 100hz, 12dB/oct

{::nomarkdown}
<a href="/assets/InfiniStrip/Modules/Charts/ProFilter1k.png">
<img src="/assets/InfiniStrip/Modules/Charts/Thumbnails/ProFilter1k.png" alt="Pro Filter 1khz Band Modulation">
</a>
<div class="image-caption">Pro Filter 1khz Band Modulation (Click for larger image)</div>
{:/nomarkdown}

{::nomarkdown}
<a href="/assets/InfiniStrip/Modules/Charts/ProShelves.png">
<img src="/assets/InfiniStrip/Modules/Charts/Thumbnails/ProShelves.png" alt="Shelving Filters">
</a>
<div class="image-caption">Shelving Filters (Click for larger image)</div>
{:/nomarkdown}

* 100 hz low shelf, 1q
* 10,000 hz hig shelf, 1q


{::nomarkdown}
<a href="/assets/InfiniStrip/Modules/Charts/ProBandpass.png">
<img src="/assets/InfiniStrip/Modules/Charts/Thumbnails/ProBandpass.png" alt="Bandpass">
</a>
<div class="image-caption">Bandpass (Click for larger image)</div>
{:/nomarkdown}

* 0.25q, 0.5, 1q, 2q, 4q, 8q
* 1khz

{::nomarkdown}
<a href="/assets/InfiniStrip/Modules/Charts/ProNotch.png">
<img src="/assets/InfiniStrip/Modules/Charts/Thumbnails/ProNotch.png" alt="Notch">
</a>
<div class="image-caption">Notch (Click for larger image)</div>
{:/nomarkdown}

* 0.25q, 0.5, 1q, 2q, 4q, 8q
* 1khz

## S.C. Filters

{::nomarkdown}
	<a href="/assets/InfiniStrip/Modules/SCFilters.png">
	<img src="/assets/InfiniStrip/Modules/Thumbnails/SCFilters.png" alt="S.C">
	</a>
	<div class="image-caption">S.C. Filters (Click for larger image)</div>
{:/nomarkdown}

Appears to be identical to [Pro Filters](#pro-filters), but only affects the sidechain signal.

See the [sidechain](#sidechain) section for more information on the sidechain signal flow in InfiniStrip.
 
# GATE
 
## Expander

{::nomarkdown}
	<a href="/assets/InfiniStrip/Modules/Expander.png">
	<img src="/assets/InfiniStrip/Modules/Thumbnails/Expander.png" alt="Expander">
	</a>
	<div class="image-caption">Expander (Click for larger image)</div>
{:/nomarkdown}

My beloved expander!

I am a firm believer that expansion should be liberally used when mixing _any_ genre of music. If you're not familiar with _why_, then let me take a moment of your time.

Downward expansion (as this processor is), lowers the amplitude of the signal by a ratio, according to the envelope, when it's below a threshold. It makes quiet things more quiet. There is an envelope though, so it doesn't simply map values via a ratio! When the threshold is violated, it _takes time_ to make the adjustment. When working in the opposite direction, it takes time to return to no adjustment.

Well-designed expanders are functionally "density" EQs. They allow you to remove low-level signal that will likely be masked by other loud sources in your mix, but remove them in a manner respective to the envelope of the signal. Imagine if you could intelligently make things in your mix not exist when they don't need to, but without an abrupt change and relative to the signal's envelope... that's expansion. 

Many mixers focus on spectral components of a mix to "clean up" the mix. It was practice for decades to have expansion and gates on nearly every channel in the mix even if by function of a tape machine or other processing. Common sense would indicate that this was purely done for noise concerns, but the definition of noise extends beyond hiss. Noise is anything that doesn't positively contribute to the end product, and that often is a natural part of the instrument(!)

### Charts

{::nomarkdown}
	<video autoplay loop muted class="gifvid">
		<source src="/assets/InfiniStrip/Modules/Shape.mp4" type="video/mp4">
		Your browser does not support the video tag.
	</video>
	<div class="video-caption">Shape (Video)</div>
{:/nomarkdown}

The expander is a fairly basic expander, except for the interesting shape knob. It adjusts the release shape to allow for a sharper or more gentle relaxation of the expansion.

I'm generally used to having hysteresis controls (expander opens/closes at different levels), but the shape control is a pleasant surprise and works well.

## Gate

{::nomarkdown}
	<a href="/assets/InfiniStrip/Modules/Gate.png">
	<img src="/assets/InfiniStrip/Modules/Thumbnails/Gate.png" alt="Gate">
	</a>
	<div class="image-caption">Gate (Click for larger image)</div>
{:/nomarkdown}

### Charts

{::nomarkdown}
	<video autoplay loop muted class="gifvid">
		<source src="/assets/InfiniStrip/Modules/Hold.mp4" type="video/mp4">
		Your browser does not support the video tag.
	</video>
	<div class="video-caption">Hold (Video)</div>
{:/nomarkdown}

## Ducker

{::nomarkdown}
	<a href="/assets/InfiniStrip/Modules/Ducker.png">
	<img src="/assets/InfiniStrip/Modules/Thumbnails/Ducker.png" alt="Ducker">
	</a>
	<div class="image-caption">Ducker (Click for larger image)</div>
{:/nomarkdown}

 
# COMPRESSOR

Charts are done with the following settings:

* Attack 50
* Release 200
* Threshold -25
* Ratio 10:1
* Makeup 0

I felt these settings most accurately demonstrated the differences between the products in a single static image.
 
## Opto Pressor

{::nomarkdown}
	<a href="/assets/InfiniStrip/Modules/OptoPressor.png">
	<img src="/assets/InfiniStrip/Modules/Thumbnails/OptoPressor.png" alt="Opto Pressor">
	</a>
	<div class="image-caption">Opto Pressor (Click for larger image)</div>
{:/nomarkdown}

### Charts

{::nomarkdown}
<a href="/assets/InfiniStrip/Modules/Charts/OptoRamp.png">
<img src="/assets/InfiniStrip/Modules/Charts/Thumbnails/OptoRamp.png" alt="Opto Pressor Ramp">
</a>
<div class="image-caption">Opto Pressor Ramp (Click for larger image)</div>
{:/nomarkdown}

{::nomarkdown}
<a href="/assets/InfiniStrip/Modules/Charts/OptoAR.png">
<img src="/assets/InfiniStrip/Modules/Charts/Thumbnails/OptoAR.png" alt="Opto Pressor Attack/Release">
</a>
<div class="image-caption">Opto Pressor Attack/Release (Click for larger image)</div>
{:/nomarkdown}

## FET Pressor

{::nomarkdown}
	<a href="/assets/InfiniStrip/Modules/FETPressor.png">
	<img src="/assets/InfiniStrip/Modules/Thumbnails/FETPressor.png" alt="FET Pressor">
	</a>
	<div class="image-caption">FET Pressor (Click for larger image)</div>
{:/nomarkdown}

### Charts

{::nomarkdown}
<a href="/assets/InfiniStrip/Modules/Charts/FETRamp.png">
<img src="/assets/InfiniStrip/Modules/Charts/Thumbnails/FETRamp.png" alt="FET Pressor Ramp">
</a>
<div class="image-caption">FET Pressor Ramp (Click for larger image)</div>
{:/nomarkdown}

{::nomarkdown}
<a href="/assets/InfiniStrip/Modules/Charts/FETAR.png">
<img src="/assets/InfiniStrip/Modules/Charts/Thumbnails/FETAR.png" alt="FET Pressor Attack/Release">
</a>
<div class="image-caption">FET Pressor Attack/Release (Click for larger image)</div>
{:/nomarkdown}

## VCA Pressor

{::nomarkdown}
	<a href="/assets/InfiniStrip/Modules/VCAPressor.png">
	<img src="/assets/InfiniStrip/Modules/Thumbnails/VCAPressor.png" alt="VCA Pressor">
	</a>
	<div class="image-caption">VCA Pressor (Click for larger image)</div>
{:/nomarkdown}

### Charts

{::nomarkdown}
<a href="/assets/InfiniStrip/Modules/Charts/VCARamp.png">
<img src="/assets/InfiniStrip/Modules/Charts/Thumbnails/VCARamp.png" alt="VCA Pressor Ramp">
</a>
<div class="image-caption">VCA Pressor Ramp (Click for larger image)</div>
{:/nomarkdown}

{::nomarkdown}
<a href="/assets/InfiniStrip/Modules/Charts/VCAAR.png">
<img src="/assets/InfiniStrip/Modules/Charts/Thumbnails/VCAAR.png" alt="VCA Pressor Attack/Release">
</a>
<div class="image-caption">VCA Pressor Attack/Release (Click for larger image)</div>
{:/nomarkdown}

## Comparison

{::nomarkdown}
	<video autoplay loop muted class="gifvid">
		<source src="/assets/InfiniStrip/Modules/ARPressorCompare.mp4" type="video/mp4">
		Your browser does not support the video tag.
	</video>
	<div class="video-caption">Attack/Release (Video)</div>
{:/nomarkdown}

{::nomarkdown}
	<video autoplay loop muted class="gifvid">
		<source src="/assets/InfiniStrip/Modules/RampPressorCompare.mp4" type="video/mp4">
		Your browser does not support the video tag.
	</video>
	<div class="video-caption">Ramps (Video)</div>
{:/nomarkdown}
 
# EQ

* Filter tests:
	* 100hz Low Shelf - +12, +6, -6, -12
	* 10,000hz High Shelf - +12, +6, -6, -12
	* 1khz at wide, medium, narrow switches - +12dB, +9, +6, +3, -3, -6, -9, -12
* Saturation Tests
	* -12dbFS Peak test signal


Shelving filter tests were done with 4 fewer settings so I didn't drive myself crazy. The point comes across fine.

All tests are done with the "Analog" button in.

-85.16
 
## ChannelQ

{::nomarkdown}
	<a href="/assets/InfiniStrip/Modules/ChannelQ.png">
	<img src="/assets/InfiniStrip/Modules/Thumbnails/ChannelQ.png" alt="ChannelQ">
	</a>
	<div class="image-caption">ChannelQ (Click for larger image)</div>
{:/nomarkdown}

### Charts

{::nomarkdown}
<a href="/assets/InfiniStrip/Modules/Charts/ChannelQNarrow.png">
<img src="/assets/InfiniStrip/Modules/Charts/Thumbnails/ChannelQNarrow.png" alt="ChannelQ Narrow">
</a>
<div class="image-caption">ChannelQ Narrow (Click for larger image)</div>
{:/nomarkdown}

{::nomarkdown}
<a href="/assets/InfiniStrip/Modules/Charts/ChannelQWide.png">
<img src="/assets/InfiniStrip/Modules/Charts/Thumbnails/ChannelQWide.png" alt="ChannelQ Wide">
</a>
<div class="image-caption">ChannelQ Wide (Click for larger image)</div>
{:/nomarkdown}

{::nomarkdown}
<a href="/assets/InfiniStrip/Modules/Charts/ChannelQMid.png">
<img src="/assets/InfiniStrip/Modules/Charts/Thumbnails/ChannelQMid.png" alt="ChannelQ Medium">
</a>
<div class="image-caption">ChannelQ Medium (Click for larger image)</div>
{:/nomarkdown}

{::nomarkdown}
<a href="/assets/InfiniStrip/Modules/Charts/ChannelQShelfNarrow.png">
<img src="/assets/InfiniStrip/Modules/Charts/Thumbnails/ChannelQShelfNarrow.png" alt="ChannelQ Shelf Narrow">
</a>
<div class="image-caption">ChannelQ Shelf Narrow (Click for larger image)</div>
{:/nomarkdown}

{::nomarkdown}
<a href="/assets/InfiniStrip/Modules/Charts/ChannelQShelfWide.png">
<img src="/assets/InfiniStrip/Modules/Charts/Thumbnails/ChannelQShelfWide.png" alt="ChannelQ Shelf Wide">
</a>
<div class="image-caption">ChannelQ Shelf Wide (Click for larger image)</div>
{:/nomarkdown}

{::nomarkdown}
<a href="/assets/InfiniStrip/Modules/Charts/ChannelQHammer.png">
<img src="/assets/InfiniStrip/Modules/Charts/Thumbnails/ChannelQHammer.png" alt="ChannelQ Hammerstein">
</a>
<div class="image-caption">ChannelQ Hammerstein (Click for larger image)</div>
{:/nomarkdown}

## PreQursor

{::nomarkdown}
	<a href="/assets/InfiniStrip/Modules/PreQursor.png">
	<img src="/assets/InfiniStrip/Modules/Thumbnails/PreQursor.png" alt="PreQursor">
	</a>
	<div class="image-caption">PreQursor (Click for larger image)</div>
{:/nomarkdown}

### Charts

{::nomarkdown}
<a href="/assets/InfiniStrip/Modules/Charts/PreQursorNarrow.png">
<img src="/assets/InfiniStrip/Modules/Charts/Thumbnails/PreQursorNarrow.png" alt="PreQursor Narrow">
</a>
<div class="image-caption">PreQursor Narrow (Click for larger image)</div>
{:/nomarkdown}

{::nomarkdown}
<a href="/assets/InfiniStrip/Modules/Charts/PreQursorWide.png">
<img src="/assets/InfiniStrip/Modules/Charts/Thumbnails/PreQursorWide.png" alt="PreQursor Wide">
</a>
<div class="image-caption">PreQursor Wide (Click for larger image)</div>
{:/nomarkdown}

{::nomarkdown}
<a href="/assets/InfiniStrip/Modules/Charts/PreQursorMid.png">
<img src="/assets/InfiniStrip/Modules/Charts/Thumbnails/PreQursorMid.png" alt="PreQursor Medium">
</a>
<div class="image-caption">PreQursor Medium (Click for larger image)</div>
{:/nomarkdown}

{::nomarkdown}
<a href="/assets/InfiniStrip/Modules/Charts/PreQursorHammer.png">
<img src="/assets/InfiniStrip/Modules/Charts/Thumbnails/PreQursorHammer.png" alt="PreQursor Hammerstein">
</a>
<div class="image-caption">PreQursor Hammerstein (Click for larger image)</div>
{:/nomarkdown}

## RetroQ

{::nomarkdown}
	<a href="/assets/InfiniStrip/Modules/RetroQ.png">
	<img src="/assets/InfiniStrip/Modules/Thumbnails/RetroQ.png" alt="RetroQ">
	</a>
	<div class="image-caption">RetroQ (Click for larger image)</div>
{:/nomarkdown}

Smooth sounding

### Charts

{::nomarkdown}
<a href="/assets/InfiniStrip/Modules/Charts/RetroQNarrow.png">
<img src="/assets/InfiniStrip/Modules/Charts/Thumbnails/RetroQNarrow.png" alt="RetroQ Narrow">
</a>
<div class="image-caption">RetroQ Narrow (Click for larger image)</div>
{:/nomarkdown}

{::nomarkdown}
<a href="/assets/InfiniStrip/Modules/Charts/RetroQWide.png">
<img src="/assets/InfiniStrip/Modules/Charts/Thumbnails/RetroQWide.png" alt="RetroQ Wide">
</a>
<div class="image-caption">RetroQ Wide (Click for larger image)</div>
{:/nomarkdown}

{::nomarkdown}
<a href="/assets/InfiniStrip/Modules/Charts/RetroQMid.png">
<img src="/assets/InfiniStrip/Modules/Charts/Thumbnails/RetroQMid.png" alt="RetroQ Medium">
</a>
<div class="image-caption">RetroQ Medium (Click for larger image)</div>
{:/nomarkdown}

{::nomarkdown}
<a href="/assets/InfiniStrip/Modules/Charts/RetroQShelfNarrow.png">
<img src="/assets/InfiniStrip/Modules/Charts/Thumbnails/RetroQShelfNarrow.png" alt="RetroQ Shelf Narrow">
</a>
<div class="image-caption">RetroQ Shelf Narrow (Click for larger image)</div>
{:/nomarkdown}

{::nomarkdown}
<a href="/assets/InfiniStrip/Modules/Charts/RetroQShelfMid.png">
<img src="/assets/InfiniStrip/Modules/Charts/Thumbnails/RetroQShelfMid.png" alt="RetroQ Shelf Narrow">
</a>
<div class="image-caption">RetroQ Shelf Narrow (Click for larger image)</div>
{:/nomarkdown}

{::nomarkdown}
<a href="/assets/InfiniStrip/Modules/Charts/RetroQShelfWide.png">
<img src="/assets/InfiniStrip/Modules/Charts/Thumbnails/RetroQShelfWide.png" alt="RetroQ Shelf Wide">
</a>
<div class="image-caption">RetroQ Shelf Wide (Click for larger image)</div>
{:/nomarkdown}

{::nomarkdown}
<a href="/assets/InfiniStrip/Modules/Charts/RetroQHammer.png">
<img src="/assets/InfiniStrip/Modules/Charts/Thumbnails/RetroQHammer.png" alt="RetroQ Hammerstein">
</a>
<div class="image-caption">RetroQ Hammerstein (Click for larger image)</div>
{:/nomarkdown}
 
# LIMITER
Charts are done with the following settings:

* Attack 25
* Release 200
* Ceiling -25
* Output 0
* SC HPF Off

I felt these settings most accurately demonstrated the differences between the products in a single static image.
 
## Opto Lim

{::nomarkdown}
	<a href="/assets/InfiniStrip/Modules/OptoLim.png">
	<img src="/assets/InfiniStrip/Modules/Thumbnails/OptoLim.png" alt="Opto Lim">
	</a>
	<div class="image-caption">Opto Lim (Click for larger image)</div>
{:/nomarkdown}

## VCA Lim

{::nomarkdown}
	<a href="/assets/InfiniStrip/Modules/VCALim.png">
	<img src="/assets/InfiniStrip/Modules/Thumbnails/VCALim.png" alt="VCA Lim">
	</a>
	<div class="image-caption">VCA Lim (Click for larger image)</div>
{:/nomarkdown}

## Comparison

{::nomarkdown}
	<video autoplay loop muted class="gifvid">
		<source src="/assets/InfiniStrip/Modules/ARLimCompare.mp4" type="video/mp4">
		Your browser does not support the video tag.
	</video>
	<div class="video-caption">Attack/Release (Video)</div>
{:/nomarkdown}

{::nomarkdown}
	<video autoplay loop muted class="gifvid">
		<source src="/assets/InfiniStrip/Modules/RampLimCompare.mp4" type="video/mp4">
		Your browser does not support the video tag.
	</video>
	<div class="video-caption">Ramps (Video)</div>
{:/nomarkdown}
 
# CONTROL
 
## Master Control

{::nomarkdown}
	<a href="/assets/InfiniStrip/Modules/MasterControl.png">
	<img src="/assets/InfiniStrip/Modules/Thumbnails/MasterControl.png" alt="Master Control">
	</a>
	<div class="image-caption">Master Control (Click for larger image)</div>
{:/nomarkdown}

 
# SPECIAL
 
## De-Esser

{::nomarkdown}
	<a href="/assets/InfiniStrip/Modules/DeEsser.png">
	<img src="/assets/InfiniStrip/Modules/Thumbnails/DeEsser.png" alt="De-Esser">
	</a>
	<div class="image-caption">De-Esser (Click for larger image)</div>
{:/nomarkdown}

### Charts

{::nomarkdown}
<a href="/assets/InfiniStrip/Modules/Charts/DeEsserFlat.png">
<img src="/assets/InfiniStrip/Modules/Charts/Thumbnails/DeEsserFlat.png" alt="De-Esser Full Band Mode">
</a>
<div class="image-caption">De-Esser Full Band Mode (Click for larger image)</div>
{:/nomarkdown}

{::nomarkdown}
<a href="/assets/InfiniStrip/Modules/Charts/DeEsserSplit.png">
<img src="/assets/InfiniStrip/Modules/Charts/Thumbnails/DeEsserSplit.png" alt="De-Esser Split Band Mode">
</a>
<div class="image-caption">De-Esser Split Band Mode (Click for larger image)</div>
{:/nomarkdown}

## De-Hummer

{::nomarkdown}
	<a href="/assets/InfiniStrip/Modules/DeHummer.png">
	<img src="/assets/InfiniStrip/Modules/Thumbnails/DeHummer.png" alt="De-Hummer">
	</a>
	<div class="image-caption">De-Hummer (Click for larger image)</div>
{:/nomarkdown}

### Charts

{::nomarkdown}
	<video autoplay loop muted class="gifvid">
		<source src="/assets/InfiniStrip/Modules/Charts/DeHummer.mp4" type="video/mp4">
		Your browser does not support the video tag.
	</video>
	<div class="video-caption">DeHummer (Video)</div>
{:/nomarkdown}

Profile Changes depending on setting

 
# Meta

This post took:

* 94 hours of using the product.
* 17 hours of running measurements (and 6 more re-running when I realized I made a boneheaded mistake)
* 4 hours to capture images and setup the outline.
* 3 hours to organize notes.
* 7 hours to translate notes into text on a computer
* 2 hours double checking the manual and other product content.
* 12 hours generating videos.
* 17 hours of testing.

 If you appreciate the information presented then <a href="/DonateNow/">please consider joining patreon or paying us for the time spent bringing you quality content!</a>

<a href="https://www.patreon.com/bePatron?u=7465992"> <img class="patreon-button" src="/assets/Patreon.png" alt="Be a Patreon!"></a>

<form style="text-align: center;" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick">
<input type="hidden" name="hosted_button_id" value="BR247JAZBTUJJ">
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
</form>

**If you have any questions or comments, please comment below! I read every comment and respond to most.** No registration is necessary to comment, so don't be shy.


---
layout: post
title: Review of Mixbus Effect Plugins
comments: true
date:   2017-09-30_10:04:32 
categories: music
tags: ['Mixbus', 'DAW']
image: /assets/Mixbus/Plugins/Plugins.png
description: Mixbus plugins review
---


  <script type="text/javascript" src="/admrb/admrb.js?v={{ site.time | date:'%s' }}"> </script>
  <link rel="stylesheet" type="text/css" href="/admrb/admrb.css">
{::nomarkdown}
  <img src="/assets/Mixbus/Plugins/Plugins.png" alt="Plugins">
  <div class="image-caption">A small selection of plugins</div>
{:/nomarkdown}

Here's the part where I go a ridiculous amount of work trying and testing plugins. What follows is a short review of every effect plug-in included with Mixbus and the commercially available [plug-ins from Harrison](http://harrisonconsoles.com/site/mixbus-plugins.html) and the included [x42 plugins](http://x42-plugins.com/x42/) that are installed with Mixbus.

**THIS REVIEW DOES NOT CONSIDER THE MIXBUS MIXER** [I covered that elsewhere]({% post_url 2017-09-18-Mixbus-32c-The-Mixer %}). Mixbus comes with quite a few things outside of the plugins, so be aware of that.

Spoiler - Overall rating **Included Free**: <admrb rating="28"> </admrb>

Spoiler - Overall rating **Paid Harrison**: <admrb rating="69"> </admrb>

Spoiler - Overall rating **Paid x42**: <admrb rating="92"> </admrb>

<!--more-->

# Contents
{:.no_toc}
* TOC
{:toc}

# Rating

1-100? Great. There's going to be arbitrary ratings of '78' or '33' instead of '30' or '80'.

Nope. 

Well, yes. These are my subjective evaluations of these products, but the ratings are not random. First I start out with my rough rating on a piece of paper on a scale of 0-10. The scale roughly looks like this:

* 0-1: Garbage Tier plug-in that almost always does more harm than good. I may give a full point of '1' if it seems like they put in some semblance of thought in to the concept. I also give this rating to things that should be part of the mixer.
* 2-3: There might be a redeeming quality that is rarely useful, but mostly garbage tier or relatively useless.
* 4-6: Mostly usable. Whether it's a 4, 5 or 6 depends largely on the GUI. 
* 7-8: Good with some unique feature, great GUI or other area of excellence.
* 9: I often would select this over a paid plug-in of decent repute, OR a 7/8 with a _really_ good GUI or some other very unique feature.
* 10: I would pay for this at competitive market price.

So why don't I just leave it at a scale of 0-10? Why good man, thank you for asking!

I already have a good idea of what I think about these plug-ins from hours of use already, but while writing this up I am constantly checking the manual, videos and using them. Often I'll learn something about them that I missed in my initial experience with the plug-in. Sometimes it's something small that may make me want to knock down the rating a bit, or something fairly major that makes me wanna knock it up... but not a full point. So... I use a scale of 0-100, and I modify my base rating as I'm going.

You may see me rate something that few people would use often as a 90, and another plug-in that's very useful as a 48. This means that the '90 plug-in' is fantastic _when you need it_, and the '48 plug-in' is just good enough even if you use it constantly.

The overall rating is based how well the full package of Mixbus fulfills the needs of a musician, producer or recordist. A 0 means that you're on your own and need to buy entirely third-party products to complete a production, and a 100 means that you'd be a moron if you replaced any of these plug-ins without trying them out really well first.

# Introduction

{::nomarkdown}
  <img src="/assets/Mixbus/Plugins/Bode.png" alt="Bode">
  <div class="image-caption">Phase/Frequency plot</div>
{:/nomarkdown}

Mixbus comes with a fairly limited set of plugins, and offers some unique plugins as a paid add-on.

Before we jump in though, I'd like to point out that some of the LV2 plugins (which is the native format that Mixbus/Ardour support) have a plugin analysis drop-down that shows you the frequency and phase response as a [bode plot](https://en.wiki
pedia.org/wiki/Bode_plot). Very useful and cool.

**EDIT** - All LV2 plugins have this drop-down, but in order to access it for GUI-based plugins you need to access the generic GUI, then use the plugin analysis window.

# Ardour Team

## a-Amplifier

{::nomarkdown}
  <img src="/assets/Mixbus/Plugins/a-Amplifier.png" alt="a-Amplifier">
  <div class="image-caption">a-Amplifier</div>
{:/nomarkdown}

<admrb rating="10"></admrb>

A very simple gain plugin. Nothing more.

I wouldn't rate this low except I think that every DAW should already have an input and output trim. That said, it _is_ nice to have a trim plugin available.

## a-Compressor

{::nomarkdown}
  <img src="/assets/Mixbus/Plugins/a-Compressor.png" alt="a-Compressor">
  <div class="image-caption">a-Compressor</div>
{:/nomarkdown}

<admrb rating="55"></admrb>

a-Compressor is a good-enough compressor. It supports [Inline Scopes]({% post_url 2017-09-01-Cool-things-in-Mixbus-Part-3 %}#inline-scopes) in the mixer with input and gain reduction displays.

There is a transfer curve graph that isn't directly editable, however it does respond nicely and show the data correctly.

The overall sound is like your basic VCA style compressor. 

The release slider's values are biased towards very large values, which makes editing the release time somewhat annoying. Values from 0-300ms, which are probably the most commonly used values, are a very small portion of the control. The other controls are fine.

## a-Delay

{::nomarkdown}
  <img src="/assets/Mixbus/Plugins/a-Delay.png" alt="a-Delay">
  <div class="image-caption">a-Delay</div>
{:/nomarkdown}

<admrb rating="20"></admrb>

a-Delay is a very simple delay. It can sync to tempo and it has a simple low-pass filter. Absolutely nothing exciting about this.

## a-High/Low Pass Filter

{::nomarkdown}
  <img src="/assets/Mixbus/Plugins/a-Pass.png" alt="a-High/Low Pass Filter">
  <div class="image-caption">a-High/Low Pass Filter</div>
{:/nomarkdown}

<admrb rating="67"></admrb>

This optionally resonant high and low pass filter supports [Inline Scopes]({% post_url 2017-09-01-Cool-things-in-Mixbus-Part-3 %}#inline-scopes). You have from 2 to 8 pole filter options with adjustable resonance.

Strangely there is no 1 pole (6db/octave) option for either filter.

The filters sound decent enough and the inline scope makes it rather nice to use over third-party solutions.

## a-Inline Scope

{::nomarkdown}
  <img src="/assets/Mixbus/Plugins/a-InlineScope.png" alt="a-Inline Scope">
  <div class="image-caption">a-Inline Scope</div>
{:/nomarkdown}

<admrb rating="83"></admrb>

Inline scope shows the waveform of the signal at that point in the processing chain as a vertically scrolling drawing. Absolutely fantastic plugin that makes working in the mixer fullscreen easier.

Recognizing what's on a track is much faster with the Inline Scope.

## a-Inline Spectrogram

{::nomarkdown}
  <img src="/assets/Mixbus/Plugins/a-InlineSpectrogram.png" alt="a-Inline Spectrogram">
  <div class="image-caption">a-Inline Spectrogram</div>
{:/nomarkdown}

<admrb rating="72"></admrb>

Inline Spectrogram is like [Inline Scope](#a-inline-scope) except it shows a spectrogram. Time is represented as a scrolling Y-axis. Frequency is on the X axis, and amplitude at a given frequency is shown as a colour spectrum from green to red.

a-Inline Spectrogram would be far more useful if the plugin GUI also had a spectrogram to quickly pull up, but as an [inline scope]({% post_url 2017-09-01-Cool-things-in-Mixbus-Part-3 %}#inline-scopes), it's still a fantastic addition to any workflow.

## a-Midi Monitor

{::nomarkdown}
  <img src="/assets/Mixbus/Plugins/a-MidiMonitor.png" alt="a-Midi Monitor">
  <div class="image-caption">a-Midi Monitor</div>
{:/nomarkdown}

<admrb rating="80"></admrb>

a-Midi Monitor shows the current incoming data as a [Inline Scope]({% post_url 2017-09-01-Cool-things-in-Mixbus-Part-3 %}#inline-scopes). There's options for how to display the note data as shown in the GUI.

In my testing only 8 lines could be shown at a time, and there is no way to scroll to previous data.

Like the [a-Inline Spectrogram](#a-inline-spectrogram) I wish there was data shown in the plugin's setup panel as well, particularly a scrolling textbox to show all previous data if necessary.

This is still a very useful plugin in dense projects. It makes finding and identifying data much easier.

## a-Reverb

{::nomarkdown}
  <img src="/assets/Mixbus/Plugins/a-Reverb.png" alt="a-Reverb">
  <div class="image-caption">a-Reverb</div>
{:/nomarkdown}

<admrb rating="18"></admrb>

a-Reverb is a very simple reverb. It sounds pretty awful most of the time. Metallic and 'poingy' on drums. Lifeless on Vocals. Unnatural on guitars.

I think that there is a selection of musicians that will actually enjoy this style of reverb, since it's a classic early digital reverberation algorithm. A lot of records were made with very similar reverbs, but due to the very minimal set of adjustable parameters and very narrow range of sounds, I don't think this is a particularly valuable addition to the DAW.

## Voice/Level Activate

{::nomarkdown}
  <img src="/assets/Mixbus/Plugins/LevelActivate.png" alt="Voice/Level Activate">
  <div class="image-caption">Voice/Level Activate</div>
{:/nomarkdown}

<admrb rating="95"></admrb>

This plugin runs the transport when the threshold is passed. **AWESOME**.

This means you can do something like turn on record, walk down the hall to your instrument and clap your hands to start recording.

I love this plugin. It's so incredibly useful, even in a normal studio environment with multiple musicians and a handful of engineers. I wish _every_ DAW had this.

# Harrison

## Plug-in Essentials

The [Plugin Essentials Bundle](http://harrisonconsoles.com/site/pluginessentials.html) is a bundle of plugins that Harrison offers for Mixbus. This is a paid collection of plugins.

<iframe width="560" height="315" src="https://www.youtube.com/embed/-LsTU6oCJLM" frameborder="0" allowfullscreen></iframe>

## GVerb

{::nomarkdown}
  <img src="/assets/Mixbus/Plugins/GVerb.png" alt="GVerb_">
  <div class="image-caption">GVerb</div>
{:/nomarkdown}

<admrb rating="46"></admrb>

GVerb Plus is part of the [Plugin Essentials Bundle](http://harrisonconsoles.com/site/pluginessentials.html) which is a paid bundle of plugins specifically for Mixbus.

GVerb is basically a multi-band reverb with a separate processor for the 'high' and 'low' end. There's a number of presets displayed for quick access to specific classic reverb sounds.

I spent a lot of time with GVerb, and I must say that it was an overall frustrating experience. Compared to other commercial reverb plugins, GVerb seems very 'samey' in its range of sounds. It has a bit of a grainy sound to all settings, especially the early portion of the signal. There's not much in the way of modulation for the tail that you can control. 

For the 'sameyness' of the sounds, there is a decent amount of control though, and I found GVerb quite useful on polyphonic sounds without too much attack. Pianos, guitars, choral parts and synthesizers it worked quite nicely on. With things like drums it was a bit disappointing and required me to turn down the high-mix along and apply more LPF than I'd normally want to get rid of a grainy ringing sound that seemed somewhat pervasive.

I do not think that I'd purchase GVerb on its own, but it is a welcome addition for some things. These days we're spoiled by a glut of amazing reverb plugins, and I do not think that GVerb lives up to the value of other offerings out there.

## Micro-Glide

{::nomarkdown}
  <img src="/assets/Mixbus/Plugins/MicroGlide.png" alt="Micro-Glide">
  <div class="image-caption">Micro-Glide</div>
{:/nomarkdown}

<admrb rating="50"></admrb>

Micro-Glide is part of the [Plugin Essentials Bundle](http://harrisonconsoles.com/site/pluginessentials.html) which is a paid bundle of plugins specifically for Mixbus.

Micro-Glide just adds a detuned and optionally delayed duplicate of the input signal to itself. The idea is to 'thicken' things like leads or vocals.

I have to say that I was skeptical at first, because with even moderate settings it sounds pretty awful soloed. I've been aware of this technique done manually for a long time, but it's never something I've explored too much because it just sounds bad on its own...

But in a mix?! It's magic. Tiny amounts of Micro-Glide can be the difference between a thin out of place vocal and a well-set vocal with some beef to it. Micro-glide is deceptively simple and deceptively valuable when you need it.

That said, I didn't need it very often. I also would be wary of using it too frequently. It is a very useful plugin, but it's fairly rare that it's useful. For this I put it at a 50. I would never buy this since it's so easy to do manually, but it's undoubtedly useful.

## Dyno-Mite

{::nomarkdown}
  <img src="/assets/Mixbus/Plugins/DynoMite.png" alt="Dyno-Mite">
  <div class="image-caption">Dyno-Mite</div>
{:/nomarkdown}

<admrb rating="35"></admrb>

Dyno-Mite is part of the [Plugin Essentials Bundle](http://harrisonconsoles.com/site/pluginessentials.html) which is a paid bundle of plugins specifically for Mixbus.

Dyno-mite is basically a very simple transient processor. It either compresses the attack of the signal or expands it. The rest of the signal is _mostly_ left alone.

There's paid transient processors out there that do much more. There's [other free transient processors](https://fluxhome.com/project/bittersweet-v3/) that sound better and are equally simple to operate.

Dyno-Mite _does_ do wonders for a flabby or boomy kick. It's also interesting on brass stabs and funk guitar parts among other things. As it's sold, it's a decent product. As a valuable purchase in the current market though? Not so much.

##  3d Triple Delay

{::nomarkdown}
  <img src="/assets/Mixbus/Plugins/3dTripleDelay.png" alt="3d Triple Delay">
  <div class="image-caption">3d Triple Delay</div>
{:/nomarkdown}

<admrb rating="76"></admrb>

3d Triple Delay is part of the [Plugin Essentials Bundle](http://harrisonconsoles.com/site/pluginessentials.html) which is a paid bundle of plugins specifically for Mixbus.

The '3d' part of the plugin is that there is a separate delay tap for the left, center (l+r) and right channels. The taps are freely placeable in time and in the stereo spectrum on a central graph with optional 16th note snapping or free movement. The input level of that specific tap is shown as an animated bubble that grows around each tap's placement dot, which really helps visualize cross-feedback routes.

There's multiple feedback path controls, modulation and oversampling(!). Oversampling seems to greatly increase the quality of sound when warping delay times live, to get that analog delay like delay pitch shifting.

Like [Gverb+](#gverb) there's a set of quick presets to speed up workflow.

I think that 3d Triple Feedback is probably the most unique and useful plugin in its class in this plugin bundle. It isn't the most amazing delay, not even close, but what it lacks in features it makes up for in ease-of-use and how easy it is to use the GUI to get quick and good results.

## Character Plug-in Bundle

<iframe width="560" height="315" src="https://www.youtube.com/embed/XXmAuRsrghs" frameborder="0" allowfullscreen></iframe>

## XT-BC Bass Character

{::nomarkdown}
  <img src="/assets/Mixbus/Plugins/XT-BC.png" alt="XT-BC Bass Character">
  <div class="image-caption">XT-BC Bass Character</div>
{:/nomarkdown}

[Character Bundle](http://harrisonconsoles.com/site/xtbc.html) is a paid bundle of plugins specifically for Mixbus.

<admrb rating="90"></admrb>

XT-BC Bass Character is part of the [Character Bundle](http://harrisonconsoles.com/site/xtbc.html) which is a paid bundle of plugins specifically for Mixbus.

At first it looks like XT-BC is just some super-simple EQ, why even bother? But it's not! Let's first think about timbre.

The timbre of a sound is both the static spectral components of the sound, and the relationship of harmonics to the fundamental frequency. To truly change the timbre of a sound you must affect the harmonics relative to the fundamental. Traditionally EQs do not care what the input signal is, they simply cut/boost the frequency range that you tell them to. This static equalization can result in some notes 'booming' and some others sounding very thin, while the overall timbre of the sound doesn't change too much.

XT-BC actually tracks the fundamental frequency of the input signal, and tunes filters in near-realtime relative to that fundamental. The result is a true change in timbre of the instrument.

XT-BC has one switchable shelf/bell band that affects the fundamental, and one switchable shelf/bell that tracks the harmonic that you select on the graphical display. It's a fantastically useful plugin, quite similar to [SurferEQ](https://www.soundradix.com/products/surfer-eq/), but much cheaper and tuned specifically for Bass sounds.

The tracking is quite good and the results are generally fantastic.

XT-BC offers you something very unique in the world of First-Party plugins and it can be a lifesaver. 

## XT-DC Drum Character

{::nomarkdown}
  <img src="/assets/Mixbus/Plugins/XT-DC.png" alt="XT-DC Drum Character">
  <div class="image-caption">XT-DC Drum Character</div>
{:/nomarkdown}

<admrb rating="95"></admrb>

XT-DC is part of the [Character Bundle](http://harrisonconsoles.com/site/xtbc.html) which is a paid bundle of plugins specifically for Mixbus.

XT-DC allows you to split your drum signal in to 2 stages: attack and tail. These 2 stages can be independently processed with a 2 band EQ.

The GUI has a wonderful graphic that lets you easily visualize the incoming signal, triggered by the threshold setting, so that you can fine tune what constitutes the 'attack phase' and what is the 'tail phase'. From there you can use an EQ on that specific section of the sound that has 2 bands of switchable shelf/bell filters at any frequency you want.

XT-DC is awesome. I have found myself using it all the time. Once again this is a very unique plugin that you won't find in another DAW, and you may find yourself using it on almost every single drum recording at least once. The potential for extreme shaping and subtle shaping is there, with everything in between. XT-DC is what a transient shaper should be. 

## XT-VC Vocal Character

{::nomarkdown}
  <img src="/assets/Mixbus/Plugins/XT-VC.png" alt="XT-VC Vocal Character">
  <div class="image-caption">XT-VC Vocal Character</div>
{:/nomarkdown}

<admrb rating="90"></admrb>

XT-VC is part of the [Character Bundle](http://harrisonconsoles.com/site/xtbc.html) which is a paid bundle of plugins specifically for Mixbus.

XT-VC is basically [XT-BC](#xt-bc-bass-character) tuned for vocals. I will spare you any further explanation since they are otherwise identical.

XT-VC is equally as valuable for vocals. Truly a wonderful plugin.

# à La Carte

## XT-DS De-Esser

{::nomarkdown}
  <img src="/assets/Mixbus/Plugins/XT-DS.png" alt="XT-DS De-Esser">
  <div class="image-caption">XT-DS De-Esser</div>
{:/nomarkdown}

<admrb rating="88"></admrb>

[XT-DS](http://harrisonconsoles.com/site/xtds.html) is a paid plug-in available for Mixbus.

Many classical de-essers compress the entire signal based on a sidechain signal that primarily contains the 'ess' sounds. This is a rather destructive sound. Instead it's much more useful to react to those sibilant sounds by only filtering that specific range of sound, like an EQ that only cuts when it needs to. That's how XT-DS works.

XT-DS offers an excellent GUI with a frequency graph that allows you to easily setup the responding EQ curve to the sibilance. The auto solo mode lets you hear the detection range while moving the filter boundaries, which is a great workflow enhancement.

XT-DS sounds fantastic and is remarkably easy to setup in response to almost any sibilant source. It's not _just_ for vocals either. It works amazing for taming splashy cymbals, cutting hi-hat splash from a snare mic, taming reverb sends, reducing string noise on acoustic guitars and more.

## XT-EG Expander/Gate

{::nomarkdown}
  <img src="/assets/Mixbus/Plugins/XT-EG.png" alt="XT-EG Expander/Gate">
  <div class="image-caption">XT-EG Expander/Gate</div>
{:/nomarkdown}

<admrb rating="72"></admrb>

[XT-EG](http://harrisonconsoles.com/site/xteg.html) is a paid plug-in available for Mixbus.

XT-EG is an expander and a gate with a decent GUI. The main graph shows the input signal as a green line, with the red line showing the gain changes. While the threshold knob does correspond to the input meter next to it, it would be nice if the main graph also showed the threshold.

The processor has everything that you would expect from an expander/gate. Depth, hold, attack, release, hysteresis, ratio/knob for expansion and 0/5/20ms lookahead. There is an optional sidechain filter as well for quick filtering of the signal being used for detection.

XT-EG isn't as unique of a plugin as some of the other offerings, but it is a competent Expander and Gate. Notably it works rather well on percussive material when using the lookahead settings and proper hysteresis adjustment. This is something that some vanilla gate plugins somehow managet to get wrong, as they still touch your transient despite a very fast attack and lookahead.

Overall XT-EG is a good plug-in for what it does.

## XT-EQ Equalizer

{::nomarkdown}
  <img src="/assets/Mixbus/Plugins/XT-EQ.png" alt="XT-EQ Equalizer">
  <div class="image-caption">XT-EQ Equalizer</div>
{:/nomarkdown}

<admrb rating="11"></admrb>

[XT-EQ](http://harrisonconsoles.com/site/xteq.html) is a paid plug-in available for Mixbus.

XT-EQ is basically a 10-band non-parametric graphic equalizer. The benefit here is supposedly that the top if each band is 'flat'.

Quite honestly, I see no benefit of this plug-in over dozens of other parametric equalizers that offer similar EQ curves. There's many other competing products in the same price range with **far** more features.

I strongly suggest looking around the market before purchasing XT-EQ

## XT-ME Mastering Equalizer

{::nomarkdown}
  <img src="/assets/Mixbus/Plugins/XT-ME.png" alt="XT-ME Mastering Equalizer">
  <div class="image-caption">XT-ME Mastering Equalizer</div>
{:/nomarkdown}

<admrb rating="15"></admrb>

[XT-ME](http://harrisonconsoles.com/site/xtme.html) is a paid plug-in available for Mixbus.

XT-ME appears to be a 31-band version of [XT-EQ](#XT-ME). Once again, I see very little value for this plugin on the current market.

I spent a lot of time trying to convince myself that XT-ME was somehow worth $109, however I could not. There's plenty of EQs on the market that do much more and sound quite good.

I appreciate the time put in to developing this and the desire to model a Harrison product with similar capability, but the practical usefulness of this particular plugin does not impress me. Try it for yourself though!

## XT-MC Multiband Compressor

{::nomarkdown}
  <img src="/assets/Mixbus/Plugins/XT-MC.png" alt="XT-MC Multiband Compressor">
  <div class="image-caption">XT-MC Multiband Compressor</div>
{:/nomarkdown}

<admrb rating="35"></admrb>

[XT-MC](http://harrisonconsoles.com/site/xtmc.html) is a paid plug-in available for Mixbus.

XT-MC offers a similarly awesome graphical interface to [XT-DS](#xt-ds-desser). There's 4 bands with adjustable depth (total compression), threshold, and crossovers.

There is only a master attack/release and knee. This is very unfortunate since the attack and release times for various bands often need to vary, particularly to skew towards faster for higher frequency bands. Despite the lack of per-band attack/release controls the resulting sound was still decent.

XT-MC is a competent multi-band compressor, however once again at the price point it's being offered at there is _a lot_ of competition that offers more functionality and arguably better sound. XT-MC is rather easy to work with and does offer good results though.

**IMPORTANT** I've [reviewed the successor the XT-MC]({% post_url 2019-01-26-Harrison-AVA-MC-Review %}) and I'm a good bit more kind to it after doing a deeper dive and spending more time with it. Based on that, I would likely rate this as a 60. If XT-MC was at the price of AVA MC's intro, I'd give it a 90.

## XT-LC Lookahead Compressor

{::nomarkdown}
  <img src="/assets/Mixbus/Plugins/XT-LC.png" alt="XT-LC Lookahead Compressor">
  <div class="image-caption">XT-LC Lookahead Compressor</div>
{:/nomarkdown}

<admrb rating="81"></admrb>

[XT-LC](http://harrisonconsoles.com/site/xtlc.html) is a paid plug-in available for Mixbus.

XT-LC doesn't look like much. A threshold, ratio, knee and make-up gain. That's it. Deceptively simple and yet very useful.

Many compressor designs have an issue where, unfortunately, physics disallow us from knowing what is going to happen in the future. XT-LC has lookahead capability which is compensated by Mixbus, that allows it to react instantly to the input signal without that characteristic snap/pop of many other compressors.

XT-LC also offers what Harrison calls "Zero-History(tm)". I don't know what it is honestly, nor do I know how it affects the output, but the result _sounds good_. I couldn't find a single source that I wouldn't use XT-LC on at sometime to gain a bit extra headroom or perhaps lessen the response of another dynamics processing device down the chain. It's almost universally useful.

There are other compressor plug-ins that offer similar lookahead capability on the market, but I've not found one that offers such simple and excellent sounding results.

## XT-TG Tom Gate

{::nomarkdown}
  <img src="/assets/Mixbus/Plugins/XT-TG.png" alt="XT-TG Tom Gate">
  <div class="image-caption">XT-TG Tom Gate</div>
{:/nomarkdown}

<admrb rating="100"></admrb>

[XT-TG](http://harrisonconsoles.com/site/xttg.html) is a paid plug-in available for Mixbus.

XT-TG is magic. It's **MAGIC**. This is _the best_ tom gate I've ever used. Buy it if you work with live drums. Don't think. Buy it.

Operating it is fairly simple, you loop a section of a tom hit and 'Learn Toms'. This creates a spectral map of the sound of a tom. Then you loop a section on the same mic with no toms happening and 'Learn Spill'. This creates a spectral map of what, well... not a tom sounds like.

The gate has a trigger threshold, hold and release values along with a depth control that controls how much the non-tom sound is attenuated when the gate is closed.

The results are simply fantastic. I've never used a gate that is this accurate on toms. It works great on kicks too. On snare drums it a bit less accurate (sometimes triggering on a rack tom hit, wood block, bell, and ignoring cross-sticks).

Really. If you are thinking about using Mixbus and you record live drums. XT-TG is amazing.

## XT-SC Spectral Compressor

{::nomarkdown}
  <img src="/assets/Mixbus/Plugins/XT-SC.png" alt="XT-SC Spectral Compressor">
  <div class="image-caption">XT-SC Spectral Compressor</div>
{:/nomarkdown}

<admrb rating="40"></admrb>

[XT-SC](http://harrisonconsoles.com/site/xtsc.html) is a paid plug-in available for Mixbus.

XT-SC is basically a multiband compressor with 18 bands. You get a master threshold control, controls that change the range of your 6 controllable range sliders, settings for how strong the compression is and an output trim.

In theory I would expect this to be a fantastic shaping device. The result in my experience is that I never found a use for it. Yeah there's times where I could force myself to use it and get some good results. There was never a time where I thought it was an indispensable plugin.

Perhaps there's some creative sound shaping capabilities that were beyond my scope of use. It is easy to use and straightforward, and it doesn't do anything to outright ruin what you put it on, so I've given it the benefit of the doubt with a rating of 40.

# Nik

## SinGen

{::nomarkdown}
  <img src="/assets/Mixbus/Plugins/SinGen.png" alt="SinGen">
  <div class="image-caption">SinGen</div>
{:/nomarkdown}

<admrb rating="50"></admrb>

A simple sine generator. The result is clean. Not sure you can ask for much more. I wouldn't buy it, but I'm glad it's there.

It does have a nice [Inline Scopes]({% post_url 2017-09-01-Cool-things-in-Mixbus-Part-3 %}#inline-scopes) that scales with the frequency output.

## NoiseGen

{::nomarkdown}
  <img src="/assets/Mixbus/Plugins/NoiseGen.png" alt="NoiseGen">
  <div class="image-caption">NoiseGen</div>
{:/nomarkdown}

<admrb rating="50"></admrb>

A simple white or pink noise generator. Not sure you can ask for much more. I wouldn't buy it, but I'm glad it's there.

# Robin Gareus

Robin is a developer with the Ardour and Mixbus teams. These are the plugins listed under his authorship.

## Stereo Routing

{::nomarkdown}
  <img src="/assets/Mixbus/Plugins/StereoRouting.png" alt="Stereo Routing">
  <div class="image-caption">Stereo Routing</div>
{:/nomarkdown}

<admrb rating="50"></admrb>

Stereo Routing is a very simple plugin that allows you to downmix or crossmix stereo information. It's a nice utility, but nothing special.

# x42 Plugins

[x42 Plugins](http://x42-plugins.com/x42/) are plugins by Robin Gareus that are included with Mixbus, but require a separate license purchase to unlock. The plugin's source code is readily available for inspection at [the x42 github](https://github.com/x42), however a license is still required to run them.

All of these plugins (as far as I remember) are resizable, which is a fantastic addition, especially for the metering plugins. 

## x42 EQ

{::nomarkdown}
  <img src="/assets/Mixbus/Plugins/x42.png" alt="X42 Equalizer">
  <div class="image-caption">x42 EQ</div>
{:/nomarkdown}

<admrb rating="80"></admrb>

x42 is a decent EQ plugin included with Mixbus that can be [purchased separately](http://x42-plugins.com/x42/x42-eq).

It has 4 bell bands, high/low pass and 2 shelf bands. There is a spectral analyzer with 2 modes, including a vertical spectrogram.

The x42 EQ _does_ sound quite good, especially when sweeping bands around or automating. The GUI is easy to operate and clear. However functionally it is rather lacking compared to other products in its price-class. Things like modulation, mid/side, variable filter types, more bands, varying filter curves, analyzer compensation, phase tuning, etc...

x42 Equalizer is a good product, but compared to a lot of similarly priced competition it leaves me wondering.

**UPDATE** Even though it's mentioned on the [x42 eq site]((http://x42-plugins.com/x42/x42-eq)), I have been rightfully prodded to make note of the excellent frequency and phase response of this EQ. Robin sent me [this image](/assets/Mixbus/Plugins/x42-eq-phase.png) to show the phase response of x42 near the nyquist.

Hopefully you've read [my previous article about this topic]({% post_url 2017-09-25-Harrison-Mixbus-EQ-Revisited %}), but if you haven't then please do.

Here are phase and frequency response graphs of x42:

* [x42 high bell boost](/assets/Mixbus/Plugins/BoostSPx.png) - [phase and frequency response](/assets/Mixbus/Plugins/BoostSP.png)
* [x42 high shelf cut](/assets/Mixbus/Plugins/CutShelfx.png) - [phase and frequency response](/assets/Mixbus/Plugins/CutShelf.png)
* [x42 low pass](/assets/Mixbus/Plugins/HPx.png) - [phase and frequency response](/assets/Mixbus/Plugins/HP.png)

You can see quite clearly the graph/labelling accuracy and excellent phase response near the nyquist frequency.

**UPDATE #2** Another thing that I glossed over in my original writing is the uniqueness of the "Spec" mode of the EQ.

The "Spec" mode in x42 is not your normal FFT, such as what's in the nearly ubiquitous [Voxengo Span](http://www.voxengo.com/product/span/). The "Spec" mode in x42 uses a perceptual frequency warping to allow better visual resolution in the critical frequency bands. This is most notable in low-frequencies.

The x42 "Spec" mode is based on [JAPA](http://kokkinizita.linuxaudio.org/linuxaudio/) which based on my cursory reading of the source appears to use a bilinear frequency warping similar to what is explained [here](https://www.dsprelated.com/freebooks/sasp/Bilinear_Frequency_Warping_Audio_Spectrum.html)

**UPDATE 3** October 4th, I have upgraded the rating of this plugin to 8.0. I was not fully familiar with the "Spec" mode since I immediately gravitated to using the Histogram mode.

A convincing case was also made to me that x42 offers a very quick, clean workflow without many distractions. I did some research on other EQ plugins with similar goals and the price range is similar or higher than the x42 EQ. Even though there are EQs with more features, there does appear to be a market premium for intentional simplicity.

I do not necessarily agree with enforced simplicity in a product, but when considering the market and the intended goals of the developer: the x42 EQ deserves a better rating than the original 6.5.

## Meter Collection - Level Meters

{::nomarkdown}
  <img src="/assets/Mixbus/Plugins/LevelMeters.png" alt="Level Meters">
  <div class="image-caption">Level Meters</div>
{:/nomarkdown}

<admrb rating="100"></admrb>

The [x42 Meter Collection](http://x42-plugins.com/x42/x42-meters) is a huge set of meters. Awesome meters. Particularly in this set I'm going to discuss the level meters.

The Level Meters cover a wide range of metering standards:

* [K-System](https://en.wikipedia.org/wiki/K-system)
* True Peak
* [VU](https://en.wikipedia.org/wiki/VU_meter)
* [EBU-R128](http://www.r128audio.com) - An excellent meter with various options, history and a circular level graph. I strongly suggest looking in to this on your own if you work with film or television targets. For the sake of brevity, I've lumped it in with the level meters, but it is a very valuable meter for certain users.
* [IEC 60268-10 Type I / DIN, IEC 60268-10 Type I / Nordic, IEC 60268-10 Type IIa / BBC, IEC 60268-10 Type IIb / EBU](https://en.wikipedia.org/wiki/Peak_programme_meter)
* Dynamic Range Meter

These meters all appear to be accurate via my testing, and can be the difference between getting a job or not in some lines of work. Acquiring a set of meters like these can be a quite expensive proposition in the VST/AU world.

## Meter Collection - Stereo Meters

{::nomarkdown}
  <img src="/assets/Mixbus/Plugins/StereoMeters.png" alt="Stero Meters">
  <div class="image-caption">Stereo Meters</div>
{:/nomarkdown}

<admrb rating="93"></admrb>

The meter collection comes with a number of plugins for visualizing the differences between the left and right channel.

* Stereo Correlation - Simple plugin that shows the phase correlation between the right and left channel, which indicates how centered something sounds essentially. It also has a nice [Inline Scopes]({% post_url 2017-09-01-Cool-things-in-Mixbus-Part-3 %}#inline-scopes) that shows the current stereo correlation.
* Stereo Phase Meter - A [Goniometer](https://en.wikipedia.org/wiki/Goniometer_(audio))
* Stereo/Frequency Scope - This is similar to the Stereo Correlation meter, except it shows the channel phase correlation per FFT bin ("per frequency"), with an adjustable FFT size. This allows you to see the phase correlation across the spectrum easily.
* Phase/Frequency Wheel - This shows the current phase of a given frequency group at the given time. The Stereo/Frequency meter is easier to read for music, but the phase/frequency wheel is much more valuable for signal measurement and calibration.

This is a full suite of stereo visualization tools. Excellent for adhering to certain standards, development, machine calibration, checking mixes and mastering work. Highly recommended.

## Meter Collection - 1/3 Spectrum Meter

{::nomarkdown}
  <img src="/assets/Mixbus/Plugins/13Spectrum.png" alt="1/3 Spectrum Meter">
  <div class="image-caption">1/3 Spectrum Meter</div>
{:/nomarkdown}

<admrb rating="82"></admrb>

The classic 1/3 octave filter bank meter. Near-Realtime response, decent resolution and it's _resizable_. The resizable aspect makes it particularly valuable to throw up on another monitor.

**UPDATE** Though I say that it has 'decent resolution', that is not an error of the plugin. Its filters conform *exactly* to the IEC 61260 Class 1 specification. However, this is still 'decent resolution' from a use perspective in my viewpoint, but in no way is it something that would ideally be improved.

## Signal Distribution Histogram

{::nomarkdown}
  <img src="/assets/Mixbus/Plugins/Histogram.png" alt="Signal Distribution Histogram">
  <div class="image-caption">Signal Distribution Histogram</div>
{:/nomarkdown}

<admrb rating="50"></admrb>

The signal distribution histogram shows the distribution of sample values over a given time. It's rather interesting, but I did not find a value in it. I have rated it as a 50 since it is somewhat unique.

If someone wishes to clue me in on the _particular_ usefulness of this measurement, I am more than willing to re-evaluate it.

**UPDATE** - The author of this product has commented with the following information:


> A quick note on the Signal Distribution Histogram: Like the bit-meter this is more of a tool for DSP engineers than music-producers. One use-case of it is to qualify noise-types (see attached screenshot) or check for DC-offsets. The Phase/Frequecy Wheel is likewise not usually useful for music-production, but can be very valuable for e.g. calibrating tape-heads (another example screenshot below), or it can also help with mic'ing Leslies...

Thank you Robin!

## Bit Meter

{::nomarkdown}
  <img src="/assets/Mixbus/Plugins/BitMeter.png" alt="Bit Meter">
  <div class="image-caption">Bit Meter</div>
{:/nomarkdown}

<admrb rating="85"></admrb>

Bit meter is exactly what it says. It displays the bit values of the samples that are input to it. This plugin is obviously useful to developers in certain cases, but it also has a use for checking masters.

Bit meter lets you figure out the _actual_ resolution of a given signal despite the container. If you suspect someone sent you a file that was converted to 16 bit then back to 24-bit, it's very simple to find out. If you want to test/check the dither section on your Master Limiter, then you can do so.

Of course bit meter is exceptionally useful for development, but if you're in that situation then I suspect you do not need much of an explanation.

Bit Meter _is_ unusual, but when you need it there's nothing else that can reliably do the job.

# Conclusion

**THIS REVIEW DOES NOT CONSIDER THE MIXBUS MIXER** [I covered that elsewhere]({% post_url 2017-09-18-Mixbus-32c-The-Mixer %}). Mixbus comes with quite a few things outside of the plugins, so be aware of that.

Overall rating **Included Free**: <admrb rating="28"> </admrb>

Mixbus's included set of plugins is very limited. Not only is there a great deal of types of effects missing, but what is there is not that exciting.

Yes, there are [places that you can get free lv2 plugins](http://www.audiopluginsforfree.com/linux/lv2/), but this review is only considering what comes 'in the box'. Many of the free LV2, AU and VST plugins are platform locked, outdated, buggy or just outright awful.

When you look at what some other DAWs come with [like cubase]({% post_url 2017-02-08-Cubase-9-Audio-Effects-Review %}) or [Digital Performer]({% post_url 2016-12-10-Cool-Features-in-Digital-Performer...-Part-1 %}), Mixbus's selection of built-in effects is unfortunate. Not to mention those other DAWs also can take advantage of the third-party VST/AU offerings as well.

There are some cool plugins there, but the short of it is that if you expect to be working primarily with Mixbus as your DAW, then you will be expected to lay out some extra cash or time to acquire a selection of plugins needed for daily use.

**You could argue that it's a bonus that Mixbus allows you to choose what you need form first, second and third party sources, but that is not the point of this review.**

It could also be argued that since Mixbus supports Lua DSP plugins (just like [SinGen](#singen) is), that there's an infinite amount of plugins possible. When your plugin is included in the default Mixbus installed, let me know and I will update this and the rating.

Overall rating **Paid Harrison**: <admrb rating="69"> </admrb>

The plugins that [Harrison sells](http://harrisonconsoles.com/site/mixbus-plugins.html) for Mixbus are largely worth it. Some of them in particular are exceptional and unique.

However when you look at the market to see what other DAWs come with _for free_ and look at the $1,160.00 retail price of the Harrison Mixbus plugins... the overall value is very low. For that price you can purchase any DAW of your choice and a suite of very high quality plugins of your choice.

Of course, you can simply purchase Mixbus at 1/10th the price of another DAW, or mixbus 32c at 1/3rd the price of another DAW and have _even more_ money to spend on third-party products, so perhaps it evens out. This is a review of the plugins though so... the value is not particularly enticing.

There are some real gems though, so make sure you evaluate your workflow and pay special attention to what's available. I'm quite certain there's one or two plugins in the Mixbus plugin offering that will absolutely rock your world.

Overall rating **Paid x42**: <admrb rating="92"> </admrb>

The x42 plugins offer a lot of value. While I am not particularly enamoured with the x42 EQ, it is a competent EQ with a nice workflow and worth the money. The Meter collection is an amazing value.

# Support Me!

This post took 16 hours to research, screenshot, write and edit. If you appreciate the information presented then <a href="/DonateNow/">please consider joining patreon or donating!</a>

<a href="https://www.patreon.com/bePatron?u=7465992"> <img class="patreon-button" src="/assets/Patreon.png" alt="Be a Patreon!"></a>

<form style="text-align: center;" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick">
<input type="hidden" name="hosted_button_id" value="BR247JAZBTUJJ">
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
</form>

If you have any questions or comments, please comment below! I read every comment and respond to most.




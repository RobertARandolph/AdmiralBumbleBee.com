---
layout: post
title: 30 Days without Fabfilter products - The Conclusion
comments: true
date:   2017-12-05_11:06:36 
categories: music
tags: ['Monthly']
image: /assets/Monthly/Fabfilter/Fabfilter2.png
description: A month without any Fabfilter products has ended, what were my experiences?
---

{::nomarkdown}
  <img src="/assets/Monthly/Fabfilter/Fabfilter2.png" alt="Fabfilter">
  <div class="image-caption">Some choices I've made</div>
{:/nomarkdown}

So a little over a month ago, [I decided to not use any Fabfilter products for 30 days]({% post_url 2017-11-03-30-Days-without-Fabfilter-products %}). I felt like I rely on them perhaps too heavily.

This post is to help wrap this up and show my conclusions. I'll discuss if there's any products I felt were superior _for my uses_, if there's any products I found a new respect for, and if I feel that the fabfilter option is simply the best in its class.

I won't be talking about the sound quality of these products unless there's some exceptional aspect of them worth mentioning. I think it goes without saying that I wouldn't choose a product that I feel is sonically inferior.

Let's do this.

_note_: Pro-L 2 came out the day I released this, so it's not considered.

_p.s._: Next 30 days is coming soon... 🍎

<!--more-->

# Contents
{:.no_toc}
* TOC
{:toc}

# EQ

[I suggest reading this post about what I want in an EQ]({% post_url 2017-11-21-What-do-I-want-in-an-EQ %}).

## I'm sticking with - Pro Q2

{::nomarkdown}
  <img src="/assets/EQWant/Simple.png" alt="Pro-Q 2">
  <div class="image-caption">Pro-Q 2</div>
{:/nomarkdown}

[Pro-q 2](https://www.fabfilter.com/products/pro-q-2-equalizer-plug-in) just has way too many useful features _for me_. I use the [Spectrum Grab]({% post_url 2017-11-21-What-do-I-want-in-an-EQ %}#spectrum-grab) and [Spectrum Matching]({% post_url 2017-11-21-What-do-I-want-in-an-EQ %}#spectrum-matching) features more than I realized.

I'm not choosing Pro-Q 2 because it's the product I will likely be using the most, or the product that I think does 'basic equalization' the best. I'm choosing it because it has functionality that is not replaceable.

There's nothing like it in a single product.

## Mostly using - apQualizr 2

{::nomarkdown}
  <img src="/assets/Monthly/Fabfilter/apQualizr2.png" alt="apQualizr 2">
  <div class="image-caption">apQualizr 2</div>
{:/nomarkdown}

I know I was biased towards [apQualizr 2](http://apulsoft.ch/apqualizr2/) going in to this. I already used it a lot, and during this test I used it the most of any plugin (according to [Timesink](https://manytricks.com/timesink)).

It has some functionality that I find superior to Pro-Q 2 for most general use work, and after forcing myself to use it as my 'first try', I've grown to love it even more.

* [Easy bandwidth adjustment]({% post_url 2017-11-21-What-do-I-want-in-an-EQ %}#visual-bandwidth-adjustment)
* [Compensated analyzer]({% post_url 2017-11-21-What-do-I-want-in-an-EQ %}#compensated-fft-analyzer) (I **LOVE** this feature!)
* [Modulation]({% post_url 2017-11-21-What-do-I-want-in-an-EQ %}#modulation)

The modulation system is unequaled in Pro-Q 2. In the image above I'm cleverly and cleanly solving a common issue: hi-hat leakage in to the snare mic.

I have a midrange band that feeds a compression module. The Compression module controls the gain of a high band.

The result is that for most of the playback, there is a deep high end cut that reduces the leakage of the hi-hat. That cut alone makes the snare sound very dull and lifeless. The apQualizr settings make it so that when the snare hits, the high band rises in gain to 0. No high-cut during the snare, but high-cut during the rest of the part. _We end up with less hi-hat and a snare that's still bright and awesome_.

That's just one example of the many problem solving things you can do with apQualizer that you can't do with Pro-Q 2. 90% of the time I grab apQualizr 2, but I can't live without Pro-Q..

## Also using - Tone control and Tiltshift

I recently purchased [Goodhertz Tone Control](https://goodhertz.co/tone-ctrl) [and Tiltshift](https://goodhertz.co/tiltshift). I've owned them for approximately 9 days, and I've used them in total for about 27 hours. That is *A LOT* of time spent in a VST in 9 days.

For making broad adjustments, which the majority of EQ changes I make are, nothing beats these 2 plugins.

### Tiltshift

{::nomarkdown}
  <img src="/assets/Monthly/Fabfilter/Tiltshift.png" alt="Tiltshift">
  <div class="image-caption">Tiltshift</div>
{:/nomarkdown}

[Tiltshift](https://goodhertz.co/tiltshift) is a very simple plugin that implements a 'tilt' tone control. This can be seen as 2 complementary shelves: a high shelf and a low shelf. When the high-shelf is increased in gain, then the low shelf is reduced in gain, and vice versa.

The beauty of tilt-type tone controls is that it affects the whole spectral balance of the signal. So small changes end up sounding more drastic. A 2db tilt actually changes the spectral balance by ~4db over the whole signal (lowend moves 2db in gain, and the high end moves 2db in the opposite gain direction). So with smaller less destructive changes, you can create more audible changes.

_Yes, Pro-Q 2 does have a tiltshift band_. I am aware of it, and I've used it quite a bit. Tiltshift 3 has an easy to use built in high and low pass along with a range control that easy adjusts how much influence the respective shelving filters have. Pro-Q 2 requires the setup of numerous bands and controlling of those bands to replicate this functionality. Tiltshift is much simpler and faster to use.

### Tone Control

{::nomarkdown}
  <img src="/assets/Monthly/Fabfilter/ToneControl.png" alt="Tone Control">
  <div class="image-caption">Tone Control</div>
{:/nomarkdown}

[Tone Control](https://goodhertz.co/tone-ctrl) is a realization of the legendary [Baxandall ton stack](http://sound.whsites.net/dwopa2.htm#s7). There really is nothing _particularly_ magical about this in modern terms. It's a gentle set of high and low shelves.

The beauty of this comes from how familiar the sound is. Baxandall tone stacks have been used in millions (billions?) of audio devices for 65 years! It's extremely likely that you are familiar with the sound and feeling of using this type of filter, and likely remember it fondly.

I have enjoyed using Tone Control far more than I expected. The "Air" control is fantastic, and using the 100% Linear Phase mode (with HQ on!) when using the low shelf is great on kicks and basses that need some oomph.

# Compression

## I'm switching to - TrackComp

{::nomarkdown}
  <img src="/assets/Monthly/Fabfilter/TrackComp.png" alt="TrackComp">
  <div class="image-caption">DMG TrackComp</div>
{:/nomarkdown}

[DMG Audio TrackComp](https://dmgaudio.com/products_trackcomp.php) has thoroughly been the most exciting product I've used in years. It uses [SPICE](https://en.wikipedia.org/wiki/SPICE) simulation to recreate, component by component, the sound of:

* [1176 rev D](https://www.uaudio.com/hardware/compressors/1176ln.html) (The new 1176s are based on this)
* [LA2A](https://www.uaudio.com/hardware/compressors/la-2a.html)
* [G-series Bus Compressor](http://www.solidstatelogic.com/studio/gseries-compressor)
* [SSL 4k channel compressor](https://en.wikipedia.org/wiki/Solid_State_Logic#4000_series)
* [Simple version of Compassion](https://dmgaudio.com/products_compassion.php)

Outside of how incredibly good these modes sounds, they come with a feature that no other excellent emulation (there's many!) I know of has: the ability to exceed the hardware parameters.

TrackComp's modes have little red notches that show you the ranges the hardware offers, and you can exceed these values while still using a component simulation of the real hardware. (note: the LA2A's attack/release characteristics allow you to select the 'era' of the LA2a in a way, as various versions had drastically different response characteristics).

The models also come with some extra parameters for each that allow you to further tweak how the hardware simulation responds. Remember having a brighter LA2A? No problem, just adjust the brightness. Are you used to the sound of a poorly calibrated 1176d? Easy, change the q-bias.

The output stage of each model is excellent as well. Using the make-up gain slider you can simply drive the output stage of the processor. It's possible to use each model as a unique 'dirtbox' or 'saturation processor' without applying any explicit dynamics processing.

On top of all of this, TrackComp has _the best auto gain_ I have ever used. When you adjust a parameter it monitors the [short term LUFS](https://en.wikipedia.org/wiki/LKFS) of the input and output and adjust the gain appropriately. The result is a perceptually well-matched gain for A/Bing the settings against unprocessed. There are some other plug-ins that use a similar method, but TrackComp's is the most well-executed that I've experienced.

Of all of the things on this list, TrackComp is the product that I'm happiest with. It's the superlative option to [Pro-C 2](https://www.fabfilter.com/products/pro-c-2-compressor-plug-in)

# Filter

## I'm switching to - The Drop

{::nomarkdown}
  <img src="/assets/Monthly/Fabfilter/TheDrop.png" alt="The Drop">
  <div class="image-caption">The Drop</div>
{:/nomarkdown}

I love [Fabfilter Volcano 2](https://www.fabfilter.com/products/volcano-2-powerful-filter-plug-in). The filter organization and modulation options are super useful. I frequently use it just for high/low passes when mixing even.

[Cytomic's The Drop](https://cytomic.com/#drop) is another [SPICE](https://en.wikipedia.org/wiki/SPICE) simulation-style product that just blows the fabfilter alternative out of the water. The Drop offers 7 filter models

* [Sallen-Key filters](https://en.wikipedia.org/wiki/Sallen–Key_topology) of [later Korg fame](http://www.timstinchcombe.co.uk/synth/MS20_study.pdf)
* Sallen-Key and SVF hybrid
* Pure SVF [like the OSCar](https://en.wikipedia.org/wiki/OSC_OSCar)
* [Cascade filter](http://electronicmusic.wikia.com/wiki/IR3109) of [expensive Roland fame](https://en.wikipedia.org/wiki/Roland_Jupiter-8)
* [Cascade filter](http://electronicmusic.wikia.com/wiki/IR3109) of [cheap Roland fame](https://en.wikipedia.org/wiki/Roland_SH-101)
* [Cascade filter of lesser-known Moog fame](https://en.wikipedia.org/wiki/Moog_Prodigy)

All of these filter modes exhibit unique overdrive characteristics, filter shapes and movement characteristics (behaviour when the corner frequency is moved). They all sound awesome. I've grown particularly fond of using the `PRD HD` model high-pass on bass guitars with a bit of overdrive. It cleans up the mix a lot while giving your bass even _more_ low end feel. All of the filters work great for this. If you want to just use The Drop as a tool to clean up your mix, without making it anemic, then it's worth the purchase price.

The Drop is an excellent creative tool as well. The filter can be stereo spread, modulated by 2 LFOs, 2 envelopes and has an FM mode along with MIDI key-following.

Another trick I've really enjoyed is putting taking an envelope follower modulation on a low-pass, with some drive and a bit of resonance, and putting it on a reverb send. The reverb causes the filter to move very gently in response to changes in the amplitude and the result is a verb sound that sounds more interesting. You can turn down this reverb send lower than you're used to, but still retain a clear reverberant background to the sound.

A tip for electronic producers is to use the drop as a bass/kick sidechain. Setup The drop on your bass with a high pass active. Turn on the Env 1. Turn up Env 1. Set Env 1 to In SC. Route your kick to The Drop (on your bass track). Now when the kick hits, your bass is high-passed. _You can still hear the harmonics of the bass, but the low end jumps out of the way for the kick._ This is more powerful sounding than simply volume ducking the bass when the kick hits. Turn up the HP drive a bit and now your bass growls a little when the kick hits and makes both of them sound more powerful, but without muddying up your mix!


## Ancillary selection - Lohi

{::nomarkdown}
  <img src="/assets/Monthly/Fabfilter/Lohi.png" alt="Lohi">
  <div class="image-caption">Lohi</div>
{:/nomarkdown}

[Goodhertz Lohi](https://goodhertz.co/lohi) is another simple Goodhertz plugin that I've grown very fond of using. It's a simple resonant high/low pass with saturation. It has no fancy modulation features, but it does [respond very nicely](https://tonal.goodhertz.co/why-automatability-matters/) to automation from your host.

I've been grabbing Lohi anytime I simply need to unclog my mix a bit. Clean up some low end, tame some high end, maybe add a light filter modulation to a guitar in a chorus or a synth.

[The Drop](#im-switching-to-the-drop) is a feature-packed product, but that comes with complexity. When I just want a quick solution I've been happily using Lohi.

I know this is almost turning in to a Goodhertz fetishism post, but I've used Lohi a good deal more than I would have ever expected.

# Reverb

## I'm sticking with - Pro-R

{::nomarkdown}
  <img src="/assets/Monthly/Fabfilter/ProR.png" alt="Pro-R">
  <div class="image-caption">Pro-R</div>
{:/nomarkdown}

I don't like [Pro-R](https://www.fabfilter.com/products/pro-r-reverb-plug-in). I promise you. I don't think it sounds amazing. It's never wowed me. It's never been the sound I have in my head. It's never something I recommend to people.

But damnit. _I miss it_. **I really miss it**.

Despite Pro-R never being what I want, it's never the wrong thing either. _It just works_. It always sounds fine. Sometimes I just want some ambience or to lush-up a synth, and Pro-R does that without complaint.

I hate that I miss Pro-R so much. I'd like to think I'm more sophisticated than that, but I'm not.

## Ancillary selection - EAReverb 2

{::nomarkdown}
  <img src="/assets/Monthly/Fabfilter/EaReverb.png" alt="EAReverb 2">
  <div class="image-caption">EAReverb 2</div>
{:/nomarkdown}

If you know me, it will be no surprise that [EAReverb 2](https://www.eareckon.com/en/products/eareverb2-reverb-plug-in.html) is my favorite reverb.

EAReverb 2 is better, sonically, in every respect than Pro-R. EAReverb does metallic verbs, lush verbs, complex small room simulations, mix-defining plate reverbs on percussion, subtle tale modulation and more. It has a multiband processor to help tame resonances and unwanted booming, you can even control the stereo spread via multi-band.

EAReverb even has a super simple POS mode where you can move a dot around in an image of a space. That places your sound in the virtual room as you want it. Easy.

When I really need to get the reverb sound right, or when I just want to explore a variety of sonic palettes then I grab EAReverb 2.

Unfortunately, 75% of the time I'm lazy and grab Pro-R. I couldn't break that habit in 1 month :(

# Delay

## I'm switching to - Late Replies

{::nomarkdown}
  <img src="/assets/Monthly/Fabfilter/LateReplies2.png" alt="Late Replies">
  <div class="image-caption">Late Replies, only 5% cpu usage somehow!</div>
{:/nomarkdown}

[Blue Cat Late Replies](https://www.bluecataudio.com/Products/Product_LateReplies/) is a complete delay/echo machine. You could even consider Late Replies as a DAW in its own right.

Despite my favouritism for simplicity in many of the other categories, I _love tweaking delays_. It's one of the few effects that I don't mind diving-in and wasting an hour... or eight.

Late replies gives you 8 'replies', which are delay taps. You can think of each of these as a mini-sequencer for your audio. Each 'reply' can be moved in time on a grid, including creation of complex patterns. _Each reply can have up to 4 plugins_ on it. Late replies includes 25 built-in effects, but **you can also use VSTs on your delay taps**. Yes. You can even use another instance of Late Replies on each of your taps, up to four times. **IT IS INSANE**. You can sequence an entire track from you uttering the word 'Weiterentwicklung' in to your mic a single time.

But wait, there's more! There's 2 feedback loops. The feedback is _also sequenceable_. You can select when the feedback kicks in, and the delay time. The 2 feedback loops can interact with each other via cross-talk and cross-feed. The signal in the feedback loops can be _variably frozen_, allowing you to hear both the feedback and the frozen sound when activated. Of course, the feedback loops also allow you to use the 25 built-in effects _and VSTs_.

The feedback section also has a visualizer to show you how the feedback will progress over time, which is very handy.

On top of all that you have a pre-fx and post-fx section that once again let you use the 25 built-in effects _and VSTs_.

There are potentially 48 effects slots in Late Replies. All of them can use your entire VST collection. All of them can contain sub-instances of Late replies.

Late Replies is a true delay workstation. Nothing else comes close to incorporating this much power with a fairly ease to use UX.

P.S. It's an awesome reverb plugin too!

## Ancillary selection- Timeless

{::nomarkdown}
  <img src="/assets/Monthly/Fabfilter/Timeless.png" alt="Timeless 2">
  <div class="image-caption">Timeless 2</div>
{:/nomarkdown}

There's not much to say here. Sometimes you just want a quick delay. Nothing fancy. I really like Timeless 2 for that.

Sometimes though, I need some crazy modulated warping monster. Timeless is also great for that. The modulation section (shown at the bottom) allows you to modulate any control by a number of modulation sources. This is something that Late Replies lacks.

Timeless 2 is timeless. It's simple to operate and simple to create crazy weird effects.

# Limiting

## I'm switching to - Limitless

{::nomarkdown}
  <img src="/assets/Monthly/Fabfilter/Limitless.png" alt="Limitless">
  <div class="image-caption">Limitless</div>
{:/nomarkdown}

[Nothing beats DMG Audio Limitless](https://dmgaudio.com/products_limitless.php). Nothing.

I wrote a big long section about this and I deleted it. There's not really much I can say that properly communicates how amazing Limitless is. I've never used a product that is _this clean_ at ridiculous levels of gain reduction.

Limitless _does take some tweaking_. The instant gratification of Pro-L is not here if that's what you're looking for. The extreme cleanliness in the face of soul-crushing gain reduction is worth the extra time.

It's also a fantastic _nearly_ all-in-one mastering solution.

**Stop reading and go buy it.** Then take the time to learn it. It's worth your money and your time. Really. It is.

## Ancillary selection - Limiter 6 GE

{::nomarkdown}
  <img src="/assets/Monthly/Fabfilter/Limiter6.png" alt="Limiter 6 GE">
  <div class="image-caption">Limiter 6 GE</div>
{:/nomarkdown}

[TDR Limiter 6 GE](http://www.tokyodawn.net/tdr-limiter6-ge/) is the great budget alternative. I would be happy using Limiter 6 GE over [Fabfilter Pro-L](https://www.fabfilter.com/products/pro-l-2-limiter-plug-in) at any point.

Limiter 6 offers 6 modules that are key to high-quality master limiting

* Compressor - A compressor with 3 modes
    * Alpha - a clean compressor great for pre-limit compression
    * Sigma - a characterful compressor that's great for 'glue' compression, and even track compression.
    * Leveler - a gentle compressor that doesn't impart much dynamic movement like 'Alpha' does. Most transparent than alpha when used lightly, but more characterful than Sigma when used heavily.
* HF Lim - A high-frequency only compressor. Transients are normally comprised of high-frequency events, and HF Lim (along with the clipper) allow you to deal with these in a transparent manner, so that the subsequent processes do not need to react as heavily to transients. HF Lim is a big part in how clean Limiter 6 GE can sound.
* Clipper - Clipping isn't necessarily bad! The clipper has 3 modes focused on low frequency, wideband and high frequency content. By using a clipper to reduce the level of transients and peaky events, the subsequent processors don't need to react to these events as severely. The net result is that you hear fewer limiting or compression artifacts.
* Peak Limiter - The wideband lookahead brickwall limiter.
* Meter - a meter with LUFS momentary value, a neat graph and [true peak](https://www.pro-tools-expert.com/home-page/2016/9/7/video-true-peak-metering) metering.
* Output - a simple output stage.

All of the sections have a configurable gain reduction meter that shows the true gain reduction, so that it responds correctly to dry/wet changes. All of the sections have the controls that you would expect from their corresponding functions.

Limiter 6 GE tends to be more useful than Limitless in general since the Compressor and HF Lim are very useful when mixing. I'm particularly fond of the Sigma Compressor for aggressive vocals, and the leveler on bass guitar or electronic growls.

Out of everything on this list, at 50€, Limiter 6 GE is easily the best value. However with Limitless in my arsenal I can't say that I use it as a master limiter much, but it is a very competent solution for that purpose.

# Multiband Compression?

## I'm switching to - Nova GE

{::nomarkdown}
  <img src="/assets/Monthly/Fabfilter/Nova2.png" alt="Nova GE">
  <div class="image-caption">Nova GE</div>
{:/nomarkdown}

If you read the [previous section]({% post_url 2017-11-03-30-Days-without-Fabfilter-products %}#multiband-compression) you'd know that I'm not too fond of multiband compression. So it may not come as a surprise that my selection to replace [Pro-MB](https://www.fabfilter.com/products/pro-mb-multiband-compressor-plug-in) is a Dnyamic EQ.

[TDR Nova GE](http://www.tokyodawn.net/tdr-nova-ge/) is a dynamic EQ. This means that it's like a normal EQ, except each EQ band is (optionally) controlled by a dynamics processor. You can have an EQ band that only acts when that frequency range is particularly problematic.

Nova Ge is very simple to use. The #1 defining feature for me that's made me prefer it over Pro-MB is the fact that the attack/release values are in absolute values. Pro-MB defines these in percentages, and they seem to be limited in ways that don't allow me to get the response that I want.

Nova GE has a cool wideband adjustment that allows you to adjust the gain values of all the band simultaneously, as well as a wideband compression mode.

Along with the wideband gain adjustment, Nova has a basic wideband compressor. The wideband compressor along with the fact that the EQ bands don't need to be dynamic, means that this offers you a complete channel strip solution. One plugin that you can use for most all of your basic mixing tasks

GR DELTA is a neat feature that allows you to hear the changes you're making via the dynamics process on a band. A unique feature that helps you tune in to the changes that you are making.

And let's not forget the best part about Nova for most of you reading: [there is a free version](http://www.tokyodawn.net/tdr-nova/).

## I'm also switching to - ReaXComp

{::nomarkdown}
  <img src="/assets/Monthly/Fabfilter/ReaXcomp.png" alt="ReaXcomp">
  <div class="image-caption">ReaXcomp</div>
{:/nomarkdown}

Damnit again. I got tricked in to using true multiband compression. [ReaXcomp](https://www.reaper.fm/reaplugs/) is free with Reaper, and free if you are on Windows.

This won't be helpful to anything but Reaper users, but ReaXcomp really shines when using Reaper's internal parameter linking. I can link attack/release values, with scaling across all of the bands. I can link the thresholds and ratios and RMS size as well, scaled if I wish.

ReaXcomp allows me to create very simple to use processors where I only need to adjust 1-2 controls for complex results.

I've been using ReaXcomp preset setups on dialog, vocals and SFX very happily. Pro-MB can't even touch it.

[Check out this video](https://www.youtube.com/watch?v=9BTVW4hG0-E) for a simple example of what I'm talking about. It is amazing.

## Ancillary selection - Drumformer

{::nomarkdown}
  <img src="/assets/Monthly/Fabfilter/Drumformer.png" alt="Drumformer">
  <div class="image-caption">Drumformer</div>
{:/nomarkdown}

I was yet again tricked by [Voxengo Drumformer](http://www.voxengo.com/product/drumformer/). A multiband compressor with other bonuses.

I _love love love_ drumformer on drums. It has an EQ, a gate, 3 bands of compression, 3 bands of saturation and a clipper.

There's really no fancy features. It's what it shows, but the workflow is excellent. The parameter ranges are set so that they make sense for drum processing. I've never been a _huge_ fan of multiband processing, but I do like it on drums. Now that I've forced myself to use drumformer more, I think it ends up 2-3 times on my drum recordings. It's so easy to add some punch, fix thin sounding snares, tame abusive cymbals and make your toms sound like bombs going off.

It's just a simple plugin that's designed for a specific purpose and does it right.

# Distortion

## I'm sticking with - Saturn

{::nomarkdown}
  <img src="/assets/Monthly/Fabfilter/Saturn.png" alt="Saturn">
  <div class="image-caption">Saturn</div>
{:/nomarkdown}

[Fabfilter Saturn](https://www.fabfilter.com/products/saturn-multiband-distortion-saturation-plug-in) once again isn't my favorite saturation plugin.

But... Saturn is so fast. Multiband saturation with a fantastic modulation system. While Saturn doesn't provide the most authentic saturation of any of its models, it does offer you a toolbox full of quick fixes and easy distortion.

In my laziness, once again Fabfilter has snared me, but this time I have to say that there's problems I solve with Saturn's multi-band capabilities that simply aren't possible with other plugins.

## Ancillary selection - SDRR

{::nomarkdown}
  <img src="/assets/Monthly/Fabfilter/SDRR.png" alt="SDRR">
  <div class="image-caption">SDRR</div>
{:/nomarkdown}

[Klanghelm SDRR](https://klanghelm.com/contents/products/SDRR/SDRR.php) is my go to when I need to emulate some sort of specific hardware device. I'm particularly fond of the DIGI which allows control over the harmonic type and spread easily.

Using SDRR, at least in my use cases, isn't as quick as Saturn but it is a workhorse saturation box. There's 4 modes that range from silky tube-like saturation to crunchy fuzz.

One of my favorite uses of it is using 2 instances of the DIGI mode with one set to ODD and one set to EVEN. Then I adjust the wet balance of each (in Reaper) to create a nice interaction of odd/even harmonics. You can easily great your own tape-like sounds without the dynamic interactions. Excellent on drums.

I suspect there's a very strong chance that if I invest in something like [Blue Cat MB-7](https://www.bluecataudio.com/Products/Product_MB7Mixer/), then I would use SDRR 2 with MB-7 and never touch Saturn again. I did not have time to explore this route in the 30 days, and hopefully I can explore this option soon. SDRR is far more capable than Saturn, but Saturn's multi-band capability keeps me coming back.

Bonus points for SDRR's excellent oversampling (HQ) mode, which does a fantastic job of helping you avoid that nasty digital aliasing when driving some of the modes hard. Saturn doesn't do this nearly as well with its HQ mode.

## Ancillary selection - Lossy

{::nomarkdown}
  <img src="/assets/Monthly/Fabfilter/Lossy.png" alt="Lossy">
  <div class="image-caption">Lossy</div>
{:/nomarkdown}

[Goodhertz Lossy](https://goodhertz.co/lossy) is a weird box of mess. This isn't the plugin you want to use to add some nice saturated shimmer to your mix or beef up your wimpy instruments. This is a plugin you use when you want things to sound bad, but in a good way.

Lossy is great fun to stack multiple instances of itself with different modes. You can conjure up some significantly messed up sounds that are paradoxically wonderful.

I suggest reading [this post](https://tonal.goodhertz.co/uncharted-waters/) about Lossy, and trying the demo yourself. It's truly a unique plugin that is not replaceable.

## Ancillary selection - Magnetite

{::nomarkdown}
  <img src="/assets/Monthly/Fabfilter/Magnetite.png" alt="Magnetite">
  <div class="image-caption">Magnetite</div>
{:/nomarkdown}

[Black Rooster Audio Magnetite](https://blackroosteraudio.com/pluginstore/plugin/magnetite.html) doesn't sound like my experience of using a great 24-track tape machine. [U-he Satin](http://www.u-he.com/cms/satin) does a much better job of sounding like high-quality tape, and allowing you to adjust the same parameters that you can adjust on tape.

You know what though? I don't always want the sound of high-quality tape, because it sounds too damn good. Magnetite captures the essence of what most people's experience with tape is. Those complex dynamic interactions, harmonics and spectral shaping that just make everything sound better.

Magnetite is a fast path to that 'tape sound' that everyone seems to want again. I've been using it much more frequently than Satin lately simply because I like how easy it is to use. It also sounds much thicker than Saturn's tape modes, mostly from more pronounced lower (1/2/3) harmonics and more drastic dynamic response.

# Bonus Content

{::nomarkdown}
  <img src="/assets/Monthly/Fabfilter/Steven.png" alt="STeven">
  <div class="image-caption">Brotherly love</div>
{:/nomarkdown}

[My brother](http://www.thelostvertex.com) says, "fabfilter are my favorite filters"

# Conclusion

There's not a single [Fabfilter](https://www.fabfilter.com) product that is a poor purchase. Not one.

Having gone 30 days without using their products I can safely say that it was a hit to my workflow in general, because I've come to rely on them so much. Despite that, having forced myself to use a variety of products more than I normally would has helped me come to terms with how lazy I can be sometimes.

There were some surprises. Lots of plugins I thought I'd use, that I didn't use much. Some plugins that I fell in love with all over again. Some plugins that I fell in love with and subsequently forgot about days later. The things listed in this post are the products that really caught me and dominated my time and attention.

Hopefully some of my experiences are useful for you, but in the end... you can't go wrong with Fabfilter.

# Support Me!

This post took 9 hours to research, screenshot, write and edit. If you appreciate the information presented then <a href="/DonateNow/">please consider joining patreon or donating!</a>

<a href="https://www.patreon.com/bePatron?u=7465992"> <img class="patreon-button" src="/assets/Patreon.png" alt="Be a Patreon!"></a>

<form style="text-align: center;" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick">
<input type="hidden" name="hosted_button_id" value="BR247JAZBTUJJ">
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
</form>

If you have any questions or comments, please comment below! I read every comment and respond to most.



---
layout: post
title: Kilohearts Phase Plant Review
comments: true
date:   2019-07-13_13:55:42 
categories: music
tags: ['Review']
image: /assets/Khs/PhasePlant/WavetableEditor.png
description: Phase Plant Review!
---

{::nomarkdown}
<video autoplay loop muted class="gifvid">
<source src="/assets/Khs/PhasePlant/Aliasing.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
<div class="video-caption">Clean</div>
{:/nomarkdown}

Kilohearts [Phase Plant](https://kilohearts.com/products/phase_plant) has been out a little while now, and I've spent a good bit of time with it.

I rarely do reviews when I believe something has been covered thoroughly, and I think Phase Plant has been. Hopefully I can provide some level of thoroughness and maybe a bit of insight beyond what else is out there.

This review is of the [Professional version](https://kilohearts.com/products/kilohearts_toolbox#professional).


<!--more-->

**If you have any questions or comments, please comment below! I read every comment and respond to most.** No registration is necessary to comment, so don't be shy.

# Contents
{:.no_toc}
* TOC
{:toc}

# What is it?

Phase Plant is a modular synth with a carefully designed interface and a link to the [Snapins](https://kilohearts.com/products/kilohearts_toolbox) ecosystem.

# Themes

## Visualization

{::nomarkdown}
<video autoplay loop muted class="gifvid">
<source src="/assets/Khs/Phaseplant/Visualize.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
<div class="video-caption">Visualize, man</div>
{:/nomarkdown}

I feel that the most significant benefit to Phase Plant is how visual it is. Nearly everything that can be communicated with some sort of movement is animated when necessary.

The animations are high frame rate, glitchless (mostly) and there's nice bits of eye-candy sparsely scattered around.

Per-voice modulations are only active when the voice is active, and some controls even show 'clone' animations for each voice. The LFO is an example of per-voice animation clones.

Let's not forget the tooltips (in the bottom info bar) for every single control. Top notch.

If there's any single feature that separates Phase Plant from the competition: it's how visual it is, and _how well it's done_.

# Sound Quality

{::nomarkdown}
<video autoplay loop muted class="gifvid">
<source src="/assets/Khs/PhasePlant/Aliasing.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
<div class="video-caption">Clean</div>
{:/nomarkdown}

Phase Plant is technically competent. The oscillators are clean. [Sampler](#sample) puts out clean content. Audio-rate modulation is (mostly) aliasing free.

The effects all sound decent. The modulators output clean signals.

What more could you want?

## Modulation

{::nomarkdown}
<video autoplay loop muted class="gifvid">
<source src="/assets/Khs/PhasePlant/Modulation.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
<div class="video-caption">Modulation</div>
{:/nomarkdown}

Basically anything that outputs a signal can modify _nearly_ any control, **and** do it cleanly at audio-rate.

It's almost always [animationd too](#visualiation). Good stuff.

## Automation

{::nomarkdown}
<img src="/assets/Khs/PhasePlant/Automate.png" alt="Automatable Parameters">
<div class="image-caption">Automatable Parameters</div>
{:/nomarkdown}

Macros and then some.

The VST 2, VST 3, AU and AAX plugin formats are not equally well-specced for handling a large number of changing automation parameters. It's a fact of life.

Phase Plant gives you the main synth parameters: pitch wheel, mod wheel, master pitch, polyphony etc... plus effect lane gain/mix.

Modular elements must be assigned to one of 8 macro knobs to be automated. Macro assignment is a simple process that mimics any other modulation assignment in Phase Plant.

I've seen a number of people complain about this sort of workflow, but unfortunately it's not going away until everyone starts supporting VST3 or AAX (hah) uniformly. At least Phase Plant makes macro assignment easy and utilizes a consisted interface for it.

## Parallelism

{::nomarkdown}
<img src="/assets/Khs/PhasePlant/Parallel.png" alt="Parallelism">
<div class="image-caption">Parallelism</div>
{:/nomarkdown}

Phase Plant allows you to store generators in groups, which means that everything in the group gets sent to the next thing when that routing logically makes sense. What does 'logically makes sense' mean? If a generator has no potential path to output from the group, then it is not routed. If there is a path to an out device, then it is routed.

There are 3 parallel effects lanes which provides you 3 layers of _potentially polyphonic_ (one instance of each lane per voice) effects. The effects lanes each have their own mix control and individual routing. This is incredibly powerful for making complex sounds.

(Note: I am slightly bothered that there's no encapsulation inside the effects lanes. It would be nice to throw in a [multipass](https://kilohearts.com/products/multipass) in the effects lane.)

There is _relatively_ less functionality here than [some of the competition](https://www.meldaproduction.com/MSoundFactory), however the interface's ease of use and ease of understanding what is happening in a patch are an acceptable tradeoff for absolute functionality.

# What's in it?

## Browser

{::nomarkdown}
<img src="/assets/Khs/PhasePlant/Browser.png" alt="Browser">
<div class="image-caption">Browser</div>
{:/nomarkdown}

The browser is a bit of a letdown in 2019. There's no search, no rating and no tagging. It's purely folder based.

You can organize things on disk a bit, but who wants to do that?

At the very least, search would be helpful.

## Generators

### Analog

{::nomarkdown}
<img src="/assets/Khs/PhasePlant/Analog.png" alt="Analog">
<div class="image-caption">Analog</div>
{:/nomarkdown}

Before we start, let's be clear that this is a "clean" generator. Almost no aliasing is present, and the waveforms appear to be theoretically ideal. I'm not entirely sure what's "Analog" about it, but I also don't care.

Analog is a single oscillator with a good bit to offer. You get one of 4 shapes, sync, pulse width, 8 unison voices, fine(semi cent)/coarse(harmonic) tuning, phase shift and an interesting shift parameter that frequency shifts the signal by a fixed value.

There is almost nothing exciting about Analog except [what you can do with it](#modulation), and the fact that it's technically competent. I think that can be pretty exciting in itself though.

#### Visualization

{::nomarkdown}
<video autoplay loop muted class="gifvid">
<source src="/assets/Khs/PhasePlant/Scope.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
<div class="video-caption">Scoped</div>
{:/nomarkdown}

It's pretty cool that the [visualization](#visualization) is accurate though. That's something that's missing in a lot of synths.

### Wavetable

{::nomarkdown}
<img src="/assets/Khs/PhasePlant/Wavetable.png" alt="Wavetable">
<div class="image-caption">Wavetable</div>
{:/nomarkdown}

Wavetables are the hot thing right now. Audio file that's split into periods called "Frames" in Phase Plant, then those are used to generate the sound based on your position in the current table. Take the current audio in the current frame, and repeat that until another frame is selected.

On the surface, Wavetable is even less complex than [Analog](#analog), though it comes with a number of preset wavetables for use.

The hot stuff happens when you modulate the Frame parameter and...

#### Wavetable Editor

{::nomarkdown}
<img src="/assets/Khs/PhasePlant/WavetableEditor.png" alt="Wavetable Editor">
<div class="image-caption">Wavetable Editor</div>
{:/nomarkdown}

Create your own Wavetables!

Phase Plant has quite the wavetable editor. 

Along the top you have a view of the frames that you can use for navigation. At the bottom is the waveform of the current frame. Then you can use the following modes/tools:


* Selection Mode - Select a sequence of frames, harmonics, or the waveform. Frame selection allows for application of effects and fixes.
* Morph Tool - This allows you to set a range of frames and morph between them. "Keyframes" can be set which are points that delineate the automatic transitions.
* Pen Tool - Allows you to draw waveforms using lines/curves for a single frame, or a selection of frames.
* Pencil (Brush) Tool - Click and drag drawing of waveforms.
* Wave Tool - Sine, Saw, Triangle, Square. Each has controls for Repeats, Starting Phase, Origin (which appears to be the same as phase?), Pulse Width (where applicable) and mix.
  * The wave tool generates a shape in the middle of the current frame selection. You can change the range of where the generated signal lies in the frame, and you can transition it to/from the existing signal in the current frame.
* Direct Harmonic Tool - A pencil tool, but for editing harmonics of the current frame selection.
* Analog Harmonic Tool - A filter applied to the signal's harmonic structure. Low/High pass, Low/High Shelf, Notch, Bandpass and bell filters are available with adjustable Q and slope.

You can import your own samples, but this is understandably a more involved process than just click and go. The wavetable system needs a selection of periodic signals to work, and not all samples provide that.

You're given a few tools to deal with the issues presented by trying to make an arbitrary sequence of bytes to a wavetable:

* Keyframe mapping - Parts of the sample can be mapped to a specific range of wavetable frames. One of the more interesting things is that this does not need to be sequential. Keyframes can take signal from anywhere in the source, thereby overlapping other keyframes. The arbitrary mapping allows you to use the signal as a "source of frames" rather than just as a sample that's been wavetablized.
* Root Pitch - Given that pitch is generally defined by the frequency of a periodic signal, this is a great place to start for a wavetable mapper. Phase Plant has an automatic pitch detection that works quite well in my experience. Getting this parameter set correctly makes life much easier as you can then use the 'lock to fundamental' phase correction going nicely.
* Phase correction - Phase Correlation, lock to fundamental (specified by root pitch), lock all. I don't actually understand how correlate works, since it always yielded poor results in my testing, and it's not described in the manual.
* Pitch - You can pitch shift a the range between the current keyframe and the adjacent keyframes. You can get some really cool sounds with this! Judicious use of the pitch shift across the table makes for some expressive 'nature-like' sounds, and often some vocal-like sounds.
* Mix - The current keyframe mapping can be mixed with the existing wavetable.


The net result is that making wavetables is a positive experience.

### Sample

{::nomarkdown}
<video autoplay loop muted class="gifvid">
<source src="/assets/Khs/PhasePlant/Sample.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
<div class="video-caption">Sample</div>
{:/nomarkdown}

There's 2 things that are awesome right off the bat with Sample: the waveform drawing and the built-in selection of samples. ([and that you can use it as a modulation source](#modulation))

From there you get a basic sampler that ties pitch and speed together. The frequency shifter is right there just like in [Analog](#analog), and thankfully you're offered the ability to change the root pitch of the sample.

When you change the loop points or offset, there's a cool 'pop-in' zoom visualization that shows you the waveform up close. I like that feature quite a bit. I do wish that there was some more context for the drawing, and that the zero crossing points (or near to them) were made more obvious. It's still a useful idea regardless.

Then again the whole idea falls apart when you realize:

* You can't change the zoom level
* The amount of resolution available for adjusting offset/start/length is insufficient for anything but the tamest samples.

For playing samples that you don't need to fuss with much, it's _ok_. If you are someone that likes a sample-based workflow inside your monster synth... Phase Plant might disappoint you.

But... audio-rate modulation :)

### Noise

{::nomarkdown}
<img src="/assets/Khs/PhasePlant/Noise.png" alt="Noise">
<div class="image-caption">Noise</div>
{:/nomarkdown}

Noise is cool, and not because of the slope-adjustable wide-band noise, but because of the key-tracked noise.

There's "stepped" (highly harmonic) and "smooth" (single band) noise sources which are essentially bandpassed noise centered around the note input into the synth. Useful and cool.

A step further in utility is the ability to use a constant or random seed for the noise, which allows you to guarantee the same sound output every note is played (or not). Having deterministic output is _extremely_ important when using it as a modulation source and it's a nice convenience as a sound generator as well.

Kudos kHs. One of the better noise sources you can find on a digital synth.

### Distortion

{::nomarkdown}
<img src="/assets/Khs/PhasePlant/Distort.png" alt="Distortion">
<div class="image-caption">Distortion</div>
{:/nomarkdown}

Distortion... as a generator? Nah.

Distortion takes input from the modules above, [distorts](#distortion-1) it, then outputs it to the next section.

It's available in the generator section to let you distort the signal between generators.

### Filter

{::nomarkdown}
<img src="/assets/Khs/PhasePlant/FilterGen.png" alt="Filter">
<div class="image-caption">Filter</div>
{:/nomarkdown}

Same as [Distortion](#distortion) but with the [wimpy filter effect](#filter-1). Meh.

### Group

{::nomarkdown}
<img src="/assets/Khs/PhasePlant/Group.png" alt="Group">
<div class="image-caption">Group</div>
{:/nomarkdown}

Group is the gate that disallows routing to flow between devices. Audio moves in a top-down manner and is absolutely stopped by a group.

Groups also allow you to visually collapse the interned generators.

### Aux

{::nomarkdown}
<img src="/assets/Khs/PhasePlant/Aux.png" alt="Aux">
<div class="image-caption">Aux</div>
{:/nomarkdown}

Aux has 2 types of input and 2 types of output.

**INPUT**

* Module above
* Modulate the central control

**OUTPUT**

* Output to next module
* Audio Rate modulation signal

At first glance it would appear that there is no use for this module because you could have routed signals direct (and multiple mod signals mix at the destination), and modules naturally route themselves.

Aux allows you to route signals 'backwards', and route signals across groups. It's essentially a link between the modulation system and the audio routing system. It took me a while to understand why I'd want to use the Aux module, but when I realized the power of using generators as modulation sources it was **GAME ON**.

### Mix

{::nomarkdown}
<img src="/assets/Khs/PhasePlant/Mix.png" alt="Mix">
<div class="image-caption">Mix</div>
{:/nomarkdown}

It takes multiple signals from generators (in the group) above it, and mixes them. Unnecessary for output, but great if you want to use multiple mixed sources for single-sources audio-rate modulation.

### Output

{::nomarkdown}
<img src="/assets/Khs/PhasePlant/Output.png" alt="Output">
<div class="image-caption">Output</div>
{:/nomarkdown}

Sends the signal of the preceding modules to the effects lanes. I personally find this to be one of the most annoying aspects of Phase Plant: the use of out/[mix](#mix) devices to route.

I can understand that having a fixed or deterministic routing scheme allows for more flexibility in other places, but the difficulty for the end-user comes when you want to _disconnect_ devices from the signal flow. That requires moving them to another group or using an aux devices (or using an out that's set to no output).

I can't count how many times I became frustrated trying to get a generator to route where I wanted it. The out device's existence is what I feel is the core of the difficulty.

## Modulators

### Envelope

{::nomarkdown}
	<img src="/assets/Khs/PhasePlant/Envelope.png" alt="Envelope">
	<div class="image-caption">Envelope</div>
{:/nomarkdown}

Envelope is yet another simple device. Unipolar (0% to 100%), bipolar (-100% to 100%) and inversion with a simple DAHDSR envelope.

The attack, delay and release parameters have adjustable curve amount, but no editor. In fact, there is no envelope editor... and that's ok. If you want an edited envelope then use a one-shot [LFO](#lfo)... which isn't always an acceptable option.

One of my complaints about the envelope is that the grid is not labeled even though the knobs and editable nodes show values. It seems that the grids are drawn at about 410ms?

The envelope module is one of the few places where a seemingly minor complaint ruins the device for me. Phase Plant has no built-in envelopes for generators, so it's entirely possible that you may have a number of envelopes in your patch, and figuring out which one is what you want can be daunting. Some extra graphics to communicate the shape/timing of the envelopes beyond a light grid would be appreciated.

It really is a minor thing... but I found that it annoyed me fairly often.

The next issue is that using an LFO as an editable envelope is painful to get timings correct. The LFO editor divides the editor into equal divisions rather than showing you precise times. That is great for periodic LFO usage, but when attempting to use it as a time-dependent envelope... ack.

And of course... LFOs don't react to note on/off, so you lose your sustain and release capabilities.

Bleh. Better envelope facilities please kHs!

### LFO

{::nomarkdown}
	<img src="/assets/Khs/PhasePlant/LFO.png" alt="LFO">
	<div class="image-caption">LFO</div>
{:/nomarkdown}

0.10hz to 50hz. Low frequency oscillator indeed. Syncable to tempo of course.

It has most of the things that you'd expect for a simple LFO, but the [coolest thing](#visualization) is that you get to see the position of each LFO triggered per voice. It's a small thing but it really helps to understand how the LFOs are affecting the current patch. It would be nice if they were colour coded to correspond to the 'voice number' (with some definition of how voice stealing/stacking works).

There's 4 default waveforms: Saw, Sine, Square, Triangle. Most importantly there's an editor as shown. The editor is simple, but powerful. You add nodes and remove nodes. There's two types of interpolation: sharp and smooth. You can define a grid to snap to, and the grid is a division of one cycle for X, and 0-100% for Y. It's not the most powerful LFO editor, but it's quick and easy to use. I tried to find fault with some of the missing features, but given the ability to use audio generators... you can do most anything you want.

If you want an audio rate LFO, then you need to use an [Analog](#analog) generator with the harmonic parameter set to 0, and not have it in your signal path.

### MIDI Note

{::nomarkdown}
	<img src="/assets/Khs/PhasePlant/MIDINote.png" alt="MIDI Note">
	<div class="image-caption">MIDI Note</div>
{:/nomarkdown}

MIDI Notes come in values from 0-127. This is normalized to unipolar values between 0% to 100% or bipolar values between -100% to 100%.

This modulator could be _a lot better_. MIDI Note values often require some sort of scaling to be useful, either linear or log (since that's how we hear notes). Often something in between is desirable. Phase Plant doesn't have any simple way to rescale modulation, which makes MIDI Note a good bit less useful.

**HOWEVER**, using MIDI Note to modulate other modulators makes things a bit nicer. This could be an entire article/video in itself, but all is not lost.

### MIDI Pressure

{::nomarkdown}
	<img src="/assets/Khs/PhasePlant/MIDIPressure.png" alt="MIDI Pressure">
	<div class="image-caption">MIDI Pressure</div>
{:/nomarkdown}

MIDI Pressure mapping, still needs scaling.

### MIDI Velocity

{::nomarkdown}
	<img src="/assets/Khs/PhasePlant/MIDIVelocity.png" alt="MIDI Velocity">
	<div class="image-caption">MIDI Velocity</div>
{:/nomarkdown}

Velocity to modulation. It suffers from the lack of easy scaling just like [MIDI Note](#midi-note).

### Max and Max

{::nomarkdown}
	<img src="/assets/Khs/PhasePlant/Max.png" alt="Max">
	<div class="image-caption">Max</div>
{:/nomarkdown}

{::nomarkdown}
	<img src="/assets/Khs/PhasePlant/Min.png" alt="Min">
	<div class="image-caption">Min</div>
{:/nomarkdown}

Two Modulation inputs and at a given instant either the smallest (Min) or largest (Max) value is selected.

Useful for anything that requires limiting a signal's bounds.

### Multiply

{::nomarkdown}
	<img src="/assets/Khs/PhasePlant/Multiply.png" alt="Multiply">
	<div class="image-caption">Multiply</div>
{:/nomarkdown}

Multiply takes two inputs, multiplies their values at a given instant.

Multiply is largely useful for scaling values. Unfortunately there's no graph scalar (time, value). It's a fixed value or A*B.

## Effects

## 3-Band EQ

{::nomarkdown}
	<img src="/assets/Khs/PhasePlant/3-BandEQ.png" alt="3-Band EQ">
	<div class="image-caption">3-Band EQ</div>
{:/nomarkdown}

3 EQ bands. If you need something more precise or involved then try [Slice](#slice-eq) or [Carve](#Carve-eq).

## Bitcrush

{::nomarkdown}
	<img src="/assets/Khs/PhasePlant/Bitcrush.png" alt="Bitcrush">
	<div class="image-caption">Bitcrush</div>
{:/nomarkdown}

Quantizer (reduce bit-depth) and decimator (reduce sample rate).

The "Quantize" knob lets you control how much quantization occurs. The ability to dither is quite cool and is missing in many other quantizers.

The ADC/DAC Quality settings appear to be the steepness of filters going into and out of the decimator. Higher Q values seem to have a steeper value.

## Carve EQ

{::nomarkdown}
	<img src="/assets/Khs/PhasePlant/CarveEQ.png" alt="Carve EQ">
	<div class="image-caption">Carve EQ</div>
{:/nomarkdown}

[Large review is over here]({% post_url 2019-03-27-Kilohearts-Carve-and-Slice %})

## Chorus

{::nomarkdown}
	<img src="/assets/Khs/PhasePlant/Chorus.png" alt="Chorus">
	<div class="image-caption">Chorus</div>
{:/nomarkdown}

Simple chorus that combines 2 or 3 versions of a signal, delayed, with the original version. The delay time can be modulated in a 'tape-like' fashion.

If a more complex chorus is needed then [Ensemble](#ensemble) has your back.

## Comb Filter

{::nomarkdown}
	<img src="/assets/Khs/PhasePlant/CombFilter.png" alt="Comb Filter">
	<div class="image-caption">Comb Filter</div>
{:/nomarkdown}

A comb filter is essentially a chorus that isn't modulated. The original signal and a delayed version of the signal are combined.

I appreciate that the delay is expressed in terms of hz between peaks rather than how much the cloned signal is delayed. Using hz between peaks makes it much easier to reason about when utilizing modulators.

The stereo switch is super neat. The polarity (of the delayed signal) is switched on the right side. The end result is a wide sound that still collapses elegantly to mono. I'm surprised I haven't seen or noticed this in another product before.

## Compressor

{::nomarkdown}
	<img src="/assets/Khs/PhasePlant/Compressor.png" alt="Compressor">
	<div class="image-caption">Compressor</div>
{:/nomarkdown}

It's your typical compressor with RMS and Peak modes.

I would prefer if the threshold+meter control was not linear. Having equal distance between -10, -20, -30 and -40 is not homologous with typical production needs. I appreciate that -20 is centered, but this would be more useful if there was an auxiliary VU or RMS meter.

The sidechain facility is easy to use.

## Delay

{::nomarkdown}
	<img src="/assets/Khs/PhasePlant/Delay.png" alt="Delay">
	<div class="image-caption">Delay</div>
{:/nomarkdown}

It's a delay. You should know what this does.

The bonus here is the duck parameter, which is a dynamic mix control that applies the envelope of the input signal to the delay mix.

## Disperser

{::nomarkdown}
	<img src="/assets/Khs/PhasePlant/Disperser.png" alt="Disperser">
	<div class="image-caption">Disperser</div>
{:/nomarkdown}

An allpass filter with an interesting extra GUI. 

All frequencies pass at the same gain, but you can adjust a/the delay of a given range of frequencies. The interesting "Pinch" parameter lets you adjust the shape of the affected spectral range.

Disperser is invaluable when used in the parallel effects lanes, and of course it's your portal to impressive modulated phaser type effects.

Alone though, Disperser just makes for some really neat sounds. Allpass filters are fun in a way that's difficult to quantify... just try it.

## Distortion

{::nomarkdown}
	<img src="/assets/Khs/PhasePlant/Distortion.png" alt="Distortion">
	<div class="image-caption">Distortion</div>
{:/nomarkdown}

Essentially a waveshaper with 5 preset shapes. The spread control is a neat control to add per-channel bias (DC offset).

I'm not entirely sure what the dynamics control is doing. It seems like it's taking the envelope of the input signal, and applying it to the output signal. Something like an upwards expander on the output that's sidechained to the input.

## Ensemble

{::nomarkdown}
<video autoplay loop muted class="gifvid">
<source src="/assets/Khs/PhasePlant/Ensemble.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
<div class="video-caption">Ensemble</div>
{:/nomarkdown}

**SO FUN**.

Up to 16 voices twirling and twirling in the sonic space. 3 motions, per-voice detune (appears to be delay time, like in a chorus?) and controllable spread.

Incredible simplicity for how big of a sound it can create for you.

Ensemble on every patch.

It's really fun to look at too.

## Faturator

{::nomarkdown}
	<img src="/assets/Khs/PhasePlant/Faturator.png" alt="Faturator">
	<div class="image-caption">Faturator</div>
{:/nomarkdown}

Faturator seems to be similar to the distortion effect with the i/o sidechained dynamics, except I personally just never could make it sound good.

The "stereo turbo" knob appears to be a simple haas effect, and the colour knob a pre-emphasis filter.

I'm just not a fan of this one when [Distortion](#distortion) offers more colours and more parameters for modulation.

## Filter

{::nomarkdown}
	<img src="/assets/Khs/PhasePlant/Filter.png" alt="Filter">
	<div class="image-caption">Filter</div>
{:/nomarkdown}

Here lies one of the most disappointing corners of Phase Plant. It's a simple filter/single-band-EQ without any fun filter emulations, drive, oscillation or... anything cool.

There are [two other](#formant-filter) types of [filters](#ladder-filter) available, but compared to other synths on the market the selection is quite disappointing.

Then again, this isn't a subtractive synth that depends heavily on filters to sound good. It could be argued that such a selection of filters isn't necessary, but filters are _fun_ and especially so when there's an easily accessible modulation system available.

You can, of course, abuse other effects and modulation to get a filter sound close to some analog emulation if you wanted. It's just a bit more work.

## Flanger

{::nomarkdown}
<video autoplay loop muted class="gifvid">
<source src="/assets/Khs/PhasePlant/Flanger.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
<div class="video-caption">Flanger</div>
{:/nomarkdown}

Flangers aren't "cool", but Phase Plant's is.

Take a signal, clone it, delay the clone and change the delay time. Here you get even more with modulations of the modulation of the delay time of the clone. Offset and Motion controls adjust the modulation (and offset) of the delay modulation signal, and you get the typical delay/depth/rate controls.

Spread appears to change the phase of the modulation per channel and you can feedback into the delay.

Using Flanger and the simplest of generators you can create some really cool morphing sounds. I'm glad kHs gave some love to the undervalued flanger.

(note: you can modulate the modulators that modulate the modulated delay! Try an LFO on the motion control and sit back to enjoy the variation in your sound that will keep you interested for an entire song. That offset control is made for modulation!)

## Formant Filter

{::nomarkdown}
	<img src="/assets/Khs/PhasePlant/FormantFilter.png" alt="Formant Filter">
	<div class="image-caption">Formant Filter</div>
{:/nomarkdown}

Vowel sounds! Woo.

Basically two filters setup to boost and resonate at a given frequency that mimics the sound of a spoken human vowel.

The interface is pleasantly easy to use and recognize what's occurring, and modulation is assignable for X/Y without hassle.

A more interesting feature is that you can click 'Lows' or 'Highs' to chop up the spectrum below or above the filters. Stacking these in lanes with the low/highs turned off can make for some interesting results.

Utilized with an [Envelope](#envelope), potentially tied to an LFO or two, Formant Filter opens itself up to creating some fun voice-like sounds and deep growling basses. A lot of modern music is based around formant-filtered basses, and Phase Plant makes it surprisingly easy to get started.

## Frequency Shifter

{::nomarkdown}
	<img src="/assets/Khs/PhasePlant/FrequencyShifter.png" alt="Frequency Shifter">
	<div class="image-caption">Frequency Shifter</div>
{:/nomarkdown}

Pitch shifters maintain harmonic relationships, Frequency Shifters do not.

Frequency Shifter is about as simple as it gets, and thankfully it shows the actual shifted distance. I personally rarely use frequency shifters, but they've become a major part of the sound design world recently. For those that want it, I suspect the simplicity will be appreciated.

## Gain

{::nomarkdown}
	<img src="/assets/Khs/PhasePlant/Gain.png" alt="Gain">
	<div class="image-caption">Gain</div>
{:/nomarkdown}

Gain, duh.

Glad it's here, and that it's easy to use.

## Gate

{::nomarkdown}
	<img src="/assets/Khs/PhasePlant/Gate.png" alt="Gate">
	<div class="image-caption">Gate</div>
{:/nomarkdown}

Gates are usually not very complex, but Phase Plant's gate is curiously useful.

You get the normal controls: threshold, attack, release, hold, range, hysteresis (tolerance knob) and look-ahead. Cool. Notably the attack sounds very good for a gate.

There's an invert control that makes the gate keep low level signals and kill higher amplitude signals. _Extremely_ useful for adding subtle effects to a patch that don't stand out too much. Combine it with an identical gate in another lane, but not inverted. Now you can have effects that are amplitude dependent without relying on modulation. I love using gate for these sort of 'levels of sound'

Once again the sidechain is super easy to use.

It's surprising to me that an abnormally specced gate is in a synthesizer, and even more surprising how much fun I have using it.

Though... that unscaled threshold still annoys me.

## Haas

{::nomarkdown}
	<img src="/assets/Khs/PhasePlant/Haas.png" alt="Haas">
	<div class="image-caption">Haas</div>
{:/nomarkdown}

Delay one channel. Makes things sound wider. Turns your signal into a comb filter in mono.

## Ladder Filter

{::nomarkdown}
	<img src="/assets/Khs/PhasePlant/LadderFilter.png" alt="Ladder Filter">
	<div class="image-caption">Ladder Filter</div>
{:/nomarkdown}

The venerable [Moog Ladder Filter](http://www.uaudio.com/blog/moog-ladder-filter/). The DSP for this is described all over the internet, and I can't say that this sounds particularly unique.

I'm not saying that it isn't a unique implementation, it very well may be, but it doesn't sound particularly unique to me.

It's nice that they have at least one emulated filter though. (The Diode mode does sound pretty cool though)

## Limiter

{::nomarkdown}
	<img src="/assets/Khs/PhasePlant/Limiter.png" alt="Limiter">
	<div class="image-caption">Limiter</div>
{:/nomarkdown}

4 controls, and once again a threshold/input level control that isn't scaled.

It's alright for low gain reduction limiting, but...

It does an incredible job when you really push it. I was quite surprised when I decided to just abuse it with 20dB+ of gain reduction on simple patches and there was nastiness. More complex patches started to show its limitations (hah). Not many synths come with limiters and I can say that I'm not only not disappointed with Phase Plant's limiter, but I'm surprisingly impressed by it.

I'll have to spend some time with it in [Multipass](https://www.kilohearts.com/products/multipass).

## Phase Distortion

{::nomarkdown}
	<img src="/assets/Khs/PhasePlant/PhaseDistortion.png" alt="Phase Distortion">
	<div class="image-caption">Phase Distortion</div>
{:/nomarkdown}

Phase distortion as an effect is a unique addition. The idea is essentially like an all-pass filter that works relative to harmonics rather than to a fixed filter corner. I would guess that it's some sort of modulation of the signal by a saturated version of itself? Maybe?

As interesting as it is, I rarely found use for it. You're basically forced to limit the bandwidth of your signal post-phase distortion with the tone knob, and most of the parameters sound strange when modulated.

I did experiment with the sidechain to see if that helped any, and it still didn't yield particularly musical results.

I would suspect that phase distortion would be a key to getting more 'analog-like signals' with offset harmonics, but I just wasn't able to utilize this effect for that purpose successfully.

## Phaser

{::nomarkdown}
	<img src="/assets/Khs/PhasePlant/Phaser.png" alt="Phaser">
	<div class="image-caption">Phaser</div>
{:/nomarkdown}

Allpass filters, but modulated. There's no cool bonuses here, and it's a bit sad that there's no control for the number of filters.

## Pitch Shifter

{::nomarkdown}
	<img src="/assets/Khs/PhasePlant/PitchShifter.png" alt="Pitch Shifter">
	<div class="image-caption">Pitch Shifter</div>
{:/nomarkdown}

Oh hey, a pretty decent sounding pitch shifter.

The jitter effect is really neat. It's a modulation on the pitch shifting that gives you a flanger-like/unison-like sound.

Controlling grain size is fun, especially with modulation. A neat trick I've enjoyed using is an envelope on the grain size (pitch shifter set to an octave), so that you get this gentle peak of a vibrato-like effect. It almost feels like a singer's voice straining a bit when they really push their range. Toss on a [Formant Filter](#formant-filter) and have something pretty neat.

## Resonator

{::nomarkdown}
	<img src="/assets/Khs/PhasePlant/Resonator.png" alt="Resonator">
	<div class="image-caption">Resonator</div>
{:/nomarkdown}

Resonators are cool. Phase Plant's resonator is cool. Two types of resonance (harmonic sequences/shapes) combined with the modulation system is fun.

I do wish that the timber was a continuously variable parameter. That would add another dimension to the versatility of the resonator.

I also feel somewhat limited with only 3 parallel effects lanes for the resonator. Some impressive physical modeling can be done with parallel resonator banks, but that's not easily achievable in Phase Plant.

## Reverb

{::nomarkdown}
	<img src="/assets/Khs/PhasePlant/Reverb.png" alt="Reverb">
	<div class="image-caption">Reverb</div>
{:/nomarkdown}

I can't stand the reverb. It has that metallic, non-diffuse character that sounds amateurish. It might be OK for some very dense sounds, but anything percussive or simple... the reverb just sounds nasty.

Maybe you like that grainy 'filtered delays' sound, then you'll be happy. If you're expected a dense, diffuse and modulated reverb then... sorry.

## Reverser

{::nomarkdown}
	<img src="/assets/Khs/PhasePlant/Reverser.png" alt="Reverser">
	<div class="image-caption">Reverser</div>
{:/nomarkdown}

Buffer-based delay reversing. Signal is split into buffers of a given size, delayed by that buffer sized, then reversed.

The crossfade parameter is useful, particularly when used with modulation. Try it with an envelope or MIDI Note to give your reversed delay a more smooth character as the sound develops or as you move around the keyboard.

## Ring Mod

{::nomarkdown}
	<img src="/assets/Khs/PhasePlant/RingMod.png" alt="Ring Mod">
	<div class="image-caption">Ring Mod</div>
{:/nomarkdown}

Signal * Carrier.

It's really cool how much control that you are given over the carrier, and the 4 carriers your get (Low-passed Noise, Bandpassed Noise, Self and Sine).

It does appear that the display doesn't work correctly for the sideband or self modulators though? Maybe it's intentional, but if so then it's confusing.

## Slice EQ

{::nomarkdown}
	<img src="/assets/Khs/PhasePlant/SliceEQ.png" alt="Slice EQ">
	<div class="image-caption">Slice EQ</div>
{:/nomarkdown}

[Large review is over here]({% post_url 2019-03-27-Kilohearts-Carve-and-Slice %})

## Stereo

{::nomarkdown}
	<img src="/assets/Khs/PhasePlant/Stereo.png" alt="Stereo">
	<div class="image-caption">Stereo</div>
{:/nomarkdown}

Mid/side control and a _balance_ control that's improperly named "pan".

There's a neat meter that shows you both the width and the "center" of the stereo spread as well.

## Tape Stop

{::nomarkdown}
<video autoplay loop muted class="gifvid">
<source src="/assets/Khs/PhasePlant/TapeStop.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
<div class="video-caption">Tape Stop</div>
{:/nomarkdown}

Pitch and time changing over time. Hit play/pause to enable the effect.

There's only a single control for the start/stop curve, which I thought would bother me, but it didn't. The effect is used so rarely in something like Phase Plan that the fact that it works makes it sufficient enough.

## Trance Gate

{::nomarkdown}
<video autoplay loop muted class="gifvid">
<source src="/assets/Khs/PhasePlant/TranceGate.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
<div class="video-caption">Trance Gate</div>
{:/nomarkdown}

A sequenced gate with ADSR. There's a circle where you can turn on/off parts of the sequence, and the number of parts in the sequence.

It would be a good bit cooler if you could control an arpeggiator from it as well, but since it's an effect on the output, not the input, you're stuck with just a gate. A cool gate, but just a gate.

There are 8 different gate patches available, but you can't modulate patch selection (or sequence point on/off status). Meh.

## Transient Shaper

{::nomarkdown}
<video autoplay loop muted class="gifvid">
<source src="/assets/Khs/PhasePlant/TransientShaper.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
<div class="video-caption">Transient Shaper</div>
{:/nomarkdown}

It's a transient shaper with an ultra neato animation.

The "Pump" parameter is an interesting addition that creates a bit of a lull in the signal that further emphasizes the attack _and_ release.

The sidechain parameter is even cooler still. You can craft your own sound to adjust the envelope of another. _Extremely_ useful for creating a drum sound, creating an extreme envelope and then applying that through the transient shaper. Much easier than messing with envelopes and offers you some extra control.

# Complaints

* Navigating the interface means interacting with small scroll bars. After 4+ devices anywhere, you'll be interacting with those awful little scrollbars constantly.
* Selection of effects and generators and modulators is rather small compared to competing products. [See the conclusion however](#conclusion)!
* Adding generators before existing generators is a pain. You have to add it at the bottom, then drag it up. Very annoying.
* Lots of scrolling to deal with even a modest number of modules.
* I dislike the generators automatically routing. I can appreciate that this makes things quicker to use, but removing a module from the signal path is 2 extra steps, and I find myself doing that more often than being happy with the implicit routing.
* In the convert sample editor, it does not appear to be possible to change the 'source position' of a keyframe. From what I can tell, you need to delete the current keyframe and make a new one, which creates a mess of ghost keyframes. The UI gets cluttered really quick.
  * There's no easy way to transition/fade the edges of frames so that you can remove discontinuities without greatly affecting the current signal. Essentially I'd like a windowing function for the frames.
  * You can preview the resulting wavetable via MIDI input, however most converted samples will yield low amplitude wavetables. There really needs to be an 'auto-normalize' function in the wavetable editor so that you can preview the current sound.
    * Likewise a simple gain control would be nice if you wish to keep the inter-frame dynamics intact.
  * You can't move an existing keyframe while keeping your view on an existing frame. If I have two keyframes at position 1 and 50, and I want to watch what happens to frame 25 as I move the last keyframe around... too bad. Since the frame selection is automatic between keyframes, I found that I frequently wanted to see what happened to a given frame while I moved around a keyframe.

# Conclusion

I've mentioned competition a few times here. Any sort of modular system with audio-rate modulation or ultra-modular system fits the bill. I know of plenty of things that surpass Phase Plant in functionality. [Melda Sound Factory](https://www.meldaproduction.com/MSoundFactory) is a superlative example of surpassing Phase Plant's functionality in a large number of facets. [Softube Modular](https://www.softube.com/modular) is also an incredible system that forces you into the analog workflows.

So why even use Phase Plant? What's the point? Surely you can get better, right?

There's a difficult concept to encapsulate in writing. I think maybe "homogeneity" is a good word for it? I'm talking about the ease of movement through a UI because simple paradigms are used and **reused** throughout. Building complexity from a small set of uniform building blocks.

Phase Plant offers that. You get one style of modulation assignment that's attached to the source and destination. You get one style of adding things. The GUI widgets are all very similar. There's a single 3 pane interface and no menu-diving or layer diving.

I'm no designer, but I can't come up with a less complicated way of creating software that allows such complexity results.

There's a great deal of value in a product that allows you to reach your goals with the least friction possible, and even better so if there's a bit of opinion thrown in. That's what Phase Plant is.

You get _a bunch_ of stuff in Phase Plant, but more importantly you get someone's idea of how to build complexity from a uniform set of building blocks. It's like buying a LEGO _kit_ where you build something really cool from the core block set, rather than having someone throw every weird type of curvy LEGO brick at you and expecting you to make it yourself.

If you're the type of person that likes to get things done without friction, then Phase Plant is absolutely for you. If you enjoy piecing things together from bare bits and don't mind a variety of interfaces, menus, windows and other context switches... Then Phase Plant may change your mind.

There's a lot of power here, particularly relative to how simple it is. If you don't believe me, then [check this out](https://twitter.com/kiloHearts/status/1135647615209627648).

I reviewed the KiloHearts Toolbox Professional version here, which is $349 or $9/month usually. I was given this copy for review and did not pay for it.

# Support Me!

This post took 39 hours to research, photograph, write and edit. If you appreciate the information presented then <a href="/DonateNow/">please consider joining patreon or paying me for my time spent bringing you quality content!</a>

<a href="https://www.patreon.com/bePatron?u=7465992"> <img class="patreon-button" src="/assets/Patreon.png" alt="Be a Patreon!"></a>

<form style="text-align: center;" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick">
<input type="hidden" name="hosted_button_id" value="BR247JAZBTUJJ">
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
</form>

**If you have any questions or comments, please comment below! I read every comment and respond to most.** No registration is necessary to comment, so don't be shy.


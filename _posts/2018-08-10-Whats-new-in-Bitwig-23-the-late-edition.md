---
layout: ['post', 'reader']
title: "Whats new in Bitwig 2.2 and 2.3 - The late edition"
comments: true
date:   2018-08-10_08:45:57 
categories: music
tags: ['Bitwig', 'DAW']
image: /assets/Bitwig/Update223.png
description: Updates on the cool stuff in Bitwig 2.2 and 2.3
---

{::nomarkdown}
<img src="/assets/Bitwig/Update223.png" alt="Bitwig 2.2 to 2.3 update!">
<div class="image-caption">Bitwig 2.2 to 2.3 update!</div>
{:/nomarkdown}

Yeah yeah... Bitwig 2.2 came out in [September 2017](https://www.bitwig.com/en/17/bitwig-studio-2_2.html) and Bitwig 2.3 came out nearly [7 months ago](https://www.bitwig.com/en/18/bitwig-studio-2_3), but better late than never!

I'm going to cover all of the new stuff in Bitwig 2.2 and 2.3, what I think about it and update all of my previous Bitwig posts with the new information so folks that end up here don't get an outdated impression of the software.

On we go!

**Other posts in this series**:

{% assign bits = site.posts | where: "series", "Bitwig" | sort: 'date' %}
<ul>
{% for my_page in bits %} 
    {% if page.url != my_page.url and my_page.layout != "reader" %}
        <li><a class="page-link" href="{{ my_page.url | prepend: site.baseurl }}">{{ my_page.title}}</a></li>
    {% endif %}
{% endfor %}
</ul>

<!--more-->



# Contents
{:.no_toc}
* TOC
{:toc}

# Updates

All of the relevant pages in the [previous Bitwig review](/tags/#Bitwig) will be updated with this new information.

# The small touches

There's a number of small things that I really like that aren't worthy of a picture, but deserve a mention:

* Oscilloscope trigger-on-pitch works better. This makes the scope much more useful.
* Names expand browser properly now
* Audio Engine is _far_ more robust it seems. I had issues with strange crashes and incorrect sample rates which is listed as fixed, and it appears to be fixed.
* Audio Device configuration doesn't suck as bad now. Thank goodness.
* Plugin window position is saved! WOOOOOOO!

# Complaints Resolved

[I whined about some issues with Bitwig before]({% post_url 2017-07-02--Things-that-Bitwig-could-improve %}), so here's what's improved so far:

* Manual - The manual is getting better. It's still not super great, but it's improving slowly.
* VST Loading improved - VST scanning is faster and it asks you if you want to continue if a plugin takes a long time.
* Device management is vastly improved.
* Record doesn't turn off when changing inputs.

That's it :(

# The big features

## On-Screen Keyboard

{::nomarkdown}
<img src="/assets/Bitwig/Keyboard.png" alt="On-screen Keyboard">
<div class="image-caption">On-screen Keyboard</div>
{:/nomarkdown}

For those of you with a touch-screen device this is super cool. You get an on-screen keyboard with multiple layouts that supports directionality. You can slide up or to the side to add expression to your playing.

I do not have an appropriate touch screen device (yet?) to test this with, but even just using it with the mouse it's pretty cool.

I would like for them to add a [Jankó](https://en.wikipedia.org/wiki/Jankó_keyboard) layout or a [Jammer Layout](https://en.wikipedia.org/wiki/Jammer_keyboard) as I find that they are both easier to play than what's offered.

## Expanded Device View

{::nomarkdown}
<video autoplay loop muted class="gifvid">
<source src="/assets/Bitwig/Expanded.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
<div class="video-caption">Expanded Device View</div>
{:/nomarkdown}

Some of the built in devices have an 'Expanded Device View', which gives you some extra visual information or easier to edit parameters.

Not all of the devices have an expanded device view. It's a bit unfortunate that the compressor doesn't have one, but EQ-5 does so that's nice.

The device views on [FM-4]({% post_url 2017-06-29-Bitwig-Instruments-Review %}#fm-4) and [Phase-4](#phase-4) are particularly helpful.

I hope that they expand this feature to more of the effects and synths over time.

## Dual Display support

I don't know how to screenshot this, but Bitwig now has excellent multi-display support. I have 3 screens to test this with and it works fantastic.

It also allows you to use one screen as a touch panel. It would be neat if they added tablet support with this in some manner, besides using a [Surface](https://www.microsoft.com/en-us/surface).

## Time Signature Changes

{::nomarkdown}
<img src="/assets/Bitwig/TimeSig.png" alt="Time Signature Changes">
<div class="image-caption">Time Signature Changes</div>
{:/nomarkdown}

Small image, but a big feature for some folks.

You can now insert time signature changes. Have a section that ends a bit sort or have a pickup in to the track? You can now make sure everything doesn't go out of sync or deal with crazy workarounds.

Their tagline for this feature was, "It's about time..." They're right, but it's here now.

Nice.

## Time Stretching that doesn't suck?

{::nomarkdown}
<img src="/assets/Bitwig/Stretch.png" alt="Pitch and Time messing about">
<div class="image-caption">Pitch and Time messing about</div>
{:/nomarkdown}

Is it for real?! Bitwig with time stretching and pitch editing that isn't completely awful?! **YES!**

Not only that, it's better than most other DAWs. [They are using elastique](https://licensing.zplane.de/technology#elastique) which other products use, but they give you more settings to fine tune the results.

There's also a 'slice' mode that works _fantastic_ on drums, a granular mode for some interesting effects and the "Cyclic" mode that offers a vintage resampling sound.

I enjoy messing with the cyclic mode and the granular modes harken back to the days of Bitwig's original time stretching.

A+++ would stretch again.

However, there's still no multitrack stretching that I can find. Stretching occurs in the clip editing area and not the arrange view (layered view doesn't make up for this), and the automatic detection is not _particularly_ accurate.

It's also very easy to end up 'deselecting' your item so that you can't change the stretch controls anymore. Everytime you drop a stretch marker it happens! How was this not caught? It's _extremely_ annoying to try and edit a file and the inspector tells you that nothing is selected. Maddening. It's one of the things that makes you wonder if anyone at Bitwig actually uses their software (even though I know they do).

## Instrument and Effect Selectors

{::nomarkdown}
<img src="/assets/Bitwig/Selectors.png" alt="Instrument and FX Selector">
<div class="image-caption">Instrument and FX Selector</div>
{:/nomarkdown}

It's a container that lets you select between devices. Only one Effect or Instrument is working at a time. There's an FX container for each one.

Not _particularly_ exciting, but it could be nice for live performance.

## Ableton Link

{::nomarkdown}
<img src="/assets/Bitwig/Link.png" alt="Ableton Link">
<div class="image-caption">Ableton Link</div>
{:/nomarkdown}

[Ableton Link](https://www.ableton.com/en/link/) is an interesting technology that lets you sync devices, such as computers, across a network. There's quite a few [Link Enabled Products](https://www.ableton.com/en/link/products/), and this now means that Bitwig can sync wirelessly (or wired) with these products.

It works nearly seamlessly and I found it quite fun to sync my iPad to Bitwig and jam out.

This is only a _sync_ solution though. It doesn't solve audio routing issues for you. If you want to hear those multiple synced devices out of the same speakers then you will need to solve that on your own.

# Instruments

## Phase-4

{::nomarkdown}
<img src="/assets/Bitwig/Phase-4.png" alt="Phase-4">
<div class="image-caption">Phase-4</div>
{:/nomarkdown}

This bad boy right here... Yeah. Bitwig is upping their game.

This is a [Phase Distortion](https://en.wikipedia.org/wiki/Phase_distortion_synthesis) and [Phase Modulation](https://en.wikipedia.org/wiki/Phase_modulation) synthesizer. You can jump ahead to the [next section](#phase-distortion) to learn about phase distortion synthesis or [the section after that](#phase-modulation) to learn about phase modulation synthesis.

Phase-4 offers you 4 oscillators. You can control the amount of phase distortion applied with the shape knob, the order of PM or PD with the arrow and the 'Mod' controls the amount of phase modulation. There's a detune above the mix knob and those 4 knobs in the middle control the amount of phase modulation applied to the oscillators including itself for some really neat feedback PM sounds.

The algorithm used for the [phase distortion](#phase-distortion) is selectable above the shape, and above that still is the phase offset.

There's a filter section with your normal filters and _each oscillator can modulation the filter frequency_. That's right... 4 way audio rate modulation of the filter cutoff. Cool stuff. Really cool and really fun stuff. There's filter feedback too! Filter feedback is awesome for those deep growling basses or expressive leads.

Each oscillator has _optional_ key tracking. This allows you to adjust whether that oscillator responds to the MIDI note input, or outputs a fixed frequency. The oscillator's pitch can be set to a ratio of the input MIDI pitch like your standard 'octave' control.

Your typical filter and amp envelopes are present and they allow you to control how much the input velocity affects their function.

There's global pitch, glide, global shape and global modulation parameters. The global shape/mod parameters let you 'pull it back' when you've created a sound that's maybe a bit too aggressive or crazy. Likewise you can go nutballs with your patch by increasing these if you want (assuming there's room for that to happen).

The sounds produced are on the extremes between ultra-clean and frighteningly aggressive. Some of the bass sounds I've coaxed out of this thing are among my favorite I've heard in _any_ synthesizer.

### Phase Distortion

{::nomarkdown}
<img src="/assets/Bitwig/PhaseDistortion.png" alt="Phase Distortion Synthesis">
<div class="image-caption">Phase Distortion Synthesis</div>
{:/nomarkdown}

Phase Distortion Synthesis is not complex. You take a signal (carrier) and another signal (modulator) then use the modulator to change the phase of the carrier.

"Phase" is the current position of the waveform. Imagine drawing a sinewave with your finger. Your position in that sine wave is the 'phase'. It's the location in the current point in time in a signal expressed as a portion of a circle. So if you're at the center line then it's 0° phase since you are at the 'start' of the circle. At the top you're at 90° phase. Halfway down to the center again you're at 135° and so on. Phase is normally expressed in radians, but I'm using degrees for non-mathy folks.

The carrier and modulator are the same frequency, so that they occupy the same amount of time (or you can think of it as: they fit in the same box). The modulator takes the current phase and applies some algorithm to it that adjusts the current phase of the carrier. The modulator doesn't need to be a continuous signal, nor does the algorithm need to be linear.

The result is that you can have a variety of ways to 'phase distort' your carrier. You can also mess with the modulator in various ways such as modulating its position in time, changing the modulator each cycle, modulating the amplitude, etc...

Understanding how to use PD to create a specific sound though... best of luck. It takes a lot of experimentation and familiarity with the specific algorithms used for phase distortion in the synthesizer. There's some other tricks that different PD synths use and you will have to become accustomed to those as well.

### Phase Modulation

{::nomarkdown}
<img src="/assets/Bitwig/FMPM.png" alt="Phase Modulation Synthesis">
<div class="image-caption">Phase Modulation Synthesis vs Frequency Modulation Synthesis</div>
{:/nomarkdown}

With Phase Modulation Synthesis the synthesizer is taking the current phase and modulating the carrier. It's _nearly_ identical to FM Synthesis where the _frequency_ of the carrier is modulated. The difference is that the result is inverted in polarity.

**BUT JUST FOR SINE WAVES**

There's a myth out there that phase modulation and frequency modulation are identical. They are (besides the polarity inversion, or 180° phase rotation), but only for sine waves.

What if our modulator is a square wave instead?

{::nomarkdown}
<img src="/assets/Bitwig/FMPMSquare.png" alt="Square wave - FM vs PM">
<div class="image-caption">Square wave - FM vs PM</div>
{:/nomarkdown}

The Frequency modulation should be somewhat obvious. When the modulator is 'high' in its position, the frequency of the carrier is increased. When the modulator is 'low', the frequency of the carrier is decreased.

Phase Modulation Synthesis is where we see a difference. When the square wave modulator is 'high' the carrier does its normal thing. When the square modulator goes 'low' then it just _flips the phase_. We end up with a very strange looking waveform that in this case is asymmetrical and full of even harmonics.

The black arrows in the PM side show where these switches are occurring.

Perhaps you can imagine how things would differ with various waveforms. Anything besides a sine wave causes some major differences between PM and FM Synthesis.

## Voice Stacking and Device Panel

{::nomarkdown}
<img src="/assets/Bitwig/DevicePanel.png" alt="Voice Stacking and Device Panel">
<div class="image-caption">Voice Stacking and Device Panel</div>
{:/nomarkdown}

Firstly, every synth has a device panel now. Bitwig synths have the information shown, and for VSTs you just get to turn on/off [MPE]({% post_url 2017-06-16-Bitwig-feature-review-Note-Expression %}).

**EVERY** Bitwig synth now supports voice stacking. You can have up to 5 stacked voices per input MIDI. Each voice has a modulator so that each specific voice can change any modulatable parameter for that specific voice. That's right... you can customize _each stacked voice_ exactly how you want it. It makes every single synth in Bitwig even more powerful.

# Effects

## Time Shift

{::nomarkdown}
<img src="/assets/Bitwig/TimeShift.png" alt="Time Shift">
<div class="image-caption">Time Shift</div>
{:/nomarkdown}

It moves the audio forward _or backwards_ in time. You can set the value in milliseconds or samples. 

Excellent tool for dealing with live recordings or making your own effects. Unfortunately it can not be modulated :(

# Modulators

## Voice Stack

{::nomarkdown}
<img src="/assets/Bitwig/VoiceStack.png" alt="Voice Stack Modulation">
<div class="image-caption">Voice Stack Modulation</div>
{:/nomarkdown}

Each bitwig synth, all 4 of them, now has unison/voice stack modes.

It's not your average voice stacking though. _Each voice can modulate any parameter on onset_. So you're not limited to pan/volume, you can basically re-program the entire patch for each voice if you want!

Each voice has a modulator that sets a parameter to the value you set. That's it. Really. You can use other modulators to do other fun things like "trigger" an LFO when a voice is active or be as clever as you want.

This is really a killer feature, but Bitwig really needs more synths.

## Audio Rate

{::nomarkdown}
<img src="/assets/Bitwig/AudioRate.png" alt="Audio Rate">
<div class="image-caption">Audio Rate</div>
{:/nomarkdown}

Audio Rate modulation. Take any audio from any track in Bitwig and use that as modulation for anything you can modulate.

It pretty intense. If you like making noise or extreme sounds then this is for you.

There's a low-pass filter that serves to slow down the speed of what's coming in (less high frequencies = slower modulation) and a rectifier which makes it unidirectional.

Best used with Bitwig devices, since many VSTs low-pass their parameter input anyway.

I love it.

## Polynom

{::nomarkdown}
<img src="/assets/Bitwig/Polynom.png" alt="Polynom">
<div class="image-caption">Polynom</div>
{:/nomarkdown}

This allows you to reshape a modulation signal using a polynomial equation. It's basically **a waveshaper for modulation**. Cool concept.

You modulate the X knob and then that signal is run through the polynomial equation. Here's what the 4 parameters do in layman's terms

* X = Offsets the curve
* X1 = Scales the size of the curve
* X2 = Biases the curve in one direction, pulling it all up or down
* X3 = The 'curviness' of the curve.

It's a cool modulator to have, especially when dealing with extreme modulation or to make tame modulation more extreme.

## Quantize

{::nomarkdown}
<img src="/assets/Bitwig/Quantize.png" alt="Quantize">
<div class="image-caption">Quantize</div>
{:/nomarkdown}

Quantize lets you modulate the input knob and then outputs a 'stepped' signal. It's like bit-depth reduction or 'bitcrushing' for your modulation signal. There's 4 shapes that determine how the quantization occurs.

Another neat 'meta-modulator'.

## Sample and Hold

{::nomarkdown}
<img src="/assets/Bitwig/SnH.png" alt="Sample and Hold">
<div class="image-caption">Sample and Hold</div>
{:/nomarkdown}

With Sample and Hold you modulate the input knob, then it freeze the signal at specific intervals.

The signal can be smoothed out so you don't get a completely destroyed signal.

S&H is great for robotic style effects or the sound of broken equipment. It can also be used to just add some slight grit to something or a 'vintage digital' sound to parameter modulation.

Yet another new modulator that I love.

# Conclusion

That's a lot of stuff in only a few months. I don't really agree with Bitwig's subscription-like plan ($169 per year for updates), but so far they've proved that it is worth it.

Thusfar all of these features have been free updates for Bitwig 2 owners, and that's more than [Ableton Live 10](https://www.ableton.com/en/shop/live/) users got in **FIVE YEARS** of updates, except this was in less than five months.

Now we have Bitwig 2.4 on the horizon, and I'll be covering that next along with my thoughts in general on Bitwig, which may surprise you.

# Support Me!

This post took 14 hours to research, screenshot, write and edit. If you appreciate the information presented then <a href="/DonateNow/">please consider joining patreon or donating!</a>







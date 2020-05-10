---
layout: post
title: MFreeFXBundle Tricks
comments: true
date:   2020-04-03_12:13:50 
categories: music
tags: ['Melda', 'Studio Tips', 'Tutorial']
image: /assets/Melda/Five/MFreeFX.png
description: Five cool things about Melda's Free FX Bundle.
header: /assets/Melda/Five/MFreeFX.png
header-caption: MFreeFX Bundle Madness
---

I've spent some time working on music projects lately and I've found some interesting capabilities of the [MFreeFX Bundle](https://www.meldaproduction.com/MFreeFXBundle) by Melda Production.

Most all of this works with the free version except for some of the analyzer features in MEqualizer.

<!--more-->

**If you have any questions or comments, please comment below! I read every comment and respond to most.** No registration is necessary to comment, so don't be shy.

# Contents
{:.no_toc}
* TOC
{:toc}

# MMetronome

Metronome features?

{::nomarkdown}
<img src="/assets/Melda/Five/MMetronome.png" alt="MMetronome">
<div class="image-caption">MMetronome</div>
{:/nomarkdown}

[MMetronome](https://www.meldaproduction.com/MMetronome) is probably better than whatever click or metronome that you're using in your DAW already, and even if it's _not_, there's still a decent chance that it provides features that your Metronome does not. (The only exception I can think of is [Digital Performer](https://motu.com/en-us/products/software/dp/).)

Don't be fooled by their simple image on the product page. It is better, but why is it better?

* Processable - MMetronome can be placed on any track. This means it can be effected to compress, EQ or throw on a delay for rhythmic variations. The ability to compress or transient shape the signal makes it possible to turn a barely audible click into an ear drum cutting implement to shine through the densest mixes.
* Automatable - It's an effect plugin, so you can automate (and modulate if your host supports) it. Got a chorus with fast 16ths and a laid back verse you want with a strong downbeat? Automate MMetronome to help you(r performer) along the way. Different sound during the bridge? Got it. 
    * MIDI - Also accepts program change and CC to change presets.
* Bussable - If you record multiple musicians, or like to have specific settings for recording certain parts, then you can bus/aux MMetronome instances out to where you need it. Since it's an effect, it can be directly _on_ the bus/aux as well.
* Visual (full screen) - Blinking visual metronomes on 60-120hz monitors are not great. The temporal resolution is not sufficient to show the blinking effect at precise intervals. MMetronome does _optionally_ blink, but it has a pendulum style display that implies a vector rather than a point in time. The precise timing of the blink or reversal of direction 
    * Blinking, movement and opacity of the visual indicator are adjustable.
* Width/Mid-Side - I'm harping on it, but contriving a click sound that is _properly_ audible to the performer can be the difference between a good and great recording. (or just turning the metronome _off_ [at the right time?]). MMetronome gives you stereo control of the output. M/S, L/R and the grey areas between. Having a "Stereo" metronome sound for a bassist works incredible well, as they can easily focus on their instrument but get a feel for the timing. Off to the side a bit? Wider? It's more useful than you may realize until you try it.

It has most of the features you'd expect from a digital metronome.

* Different Sounds
    * Variable Length
    * Pitch for first note (not necessarily downbeat)
    * Different sound for first beat
    * Volume
* Base frequency for sound
* First Accent - Specify which beat should get the accent.

It does lack some of the features in more advanced mentromes (like in Cubase or Digital Performer) such as providing specific patterns and multiple accents, however it is likely that if you need these features then you already have a solution.

There are a basic few omissions in the version I'm writing about:

* No multi-accent volume control - The "first" gain can be adjusted, but more complex accents aren't available.
* No dry/wet for when placed in an effects chain
* No variation on the visual indication theme (a [knight rider](https://en.wikipedia.org/wiki/Knight_Rider)-type display would be useful)

The value provided is impressive. If you work with a click/metronome to record, or even if you want to setup a template/project for practice then I think it's a must have.

# MNoiseGenerator

<iframe width="800" height="450" src="https://www.youtube.com/embed/vjXhX1O9uxQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


Show setup for drum reinforcement

Most of the Melda plugins provide modulators. The modulators are:

* Normal - repeating signal to modulate a parameter.
* Follower - envelope of the signal is utilized as a modulation signal.
* Envelope - signal triggers a one-shot shape, like an ultra-flexible gate that modulates anything you want rather than volume.
* Random - random. Surprise!
* Pitch - a pitch detector turns pitch data into a modulation signal. Monophonic only.

MNoiseGenerator has a bevy of notable features and uses (I could write a couple articles on it), however I'd like to point out a specific use: Sound reinforcement of percussive sounds.

Drums sounds are mostly inharmonic pitches and noise-like sources. MNoiseGenerator's envelope modulator can be tuned to trigger noise when something hits.

Watch the video above to see how to set this up. The essential idea is to setup an envelope that controls the noise level in a manner resembling a snare, then filtering the noise to match the snare's spectral profile (or needed reinforcement profile).

From that point you have a number of options:

* Select the appropriate noise type.
* Apply an equalizer to the noise output.
* Modulate EQ bands to create a dynamic noise output.
* Control the dry/wet balance over type with a modulator to dynamically adjust the balance between 'real' and 'noise' sources over time.

I spent around an hour making mouth noises and having MNoiseGenerator output a convincing snare sound for me.

As a bonus, if you increase the frequency of the low-pass and increase the release, you can make a wide-band "reverb-like" sound that can create a sense of space that doesn't overwhelm your mix like a reverb _might_.


# MOscillator Audio Synth

<iframe width="800" height="450" src="https://www.youtube.com/embed/Xra_IjlEfw4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Show Setup for synthy

Test signals, exciting! Right?

Actually exciting when you combine them with the modulators. Track the pitch of an instrument, apply and envelope and **BOOM** you have an audio-following synthesizer.

Check out the video above for basic setup, but it's easy:

* Modulate the pitch of the oscillator.
* Modulate the amplitude of the oscillator via an envelope follower.
* Be creative!

## Signal Generator

{::nomarkdown}
<a href="/assets/Melda/Five/MOsc.png">
<img src="/assets/Melda/Five/Thumbnails/MOsc.png" alt="Pretty good generator">
</a>
<div class="image-caption">Pretty good generator (Click for larger image)</div>
{:/nomarkdown}

It's quite a featureful signal generator. Clean output, lots of generation options, trigger capability, mod capability and more.

One of my most used plugins for a variety of utilitarian uses around the studio.

# MEqualizer Harmonics

{::nomarkdown}
    <video autoplay loop muted class="gifvid">
        <source src="/assets/Melda/Five/Harmonics.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <div class="video-caption">Harmonic filter bank (Video)</div>
{:/nomarkdown}

Show Harmonic Filters

Musical instruments produce a series of multiples of their fundamental frequency. EQs generally focus on a specific area.

What if you had an EQ with filters that followed the harmonic series? _MEqualizer gives that to you_.

The harmonics feature creates a series of filters with a similar Q that follow the main filter with descending (+) or amplitudes alternating around 0dB.

I find it strange how few EQs offer a harmonic series capability for their filters. Any time you're dealing with resonances in a musical instrument (or electronic noise, such as a ground loop) it's likely to be _the tool_ to save the day.

## MEqualizer Bonuses

{::nomarkdown}
<a href="/assets/Melda/Five/MEqBonus.png">
<img src="/assets/Melda/Five/Thumbnails/MEqBonus.png" alt="That's not even everything...">
</a>
<div class="image-caption">That's not even everything... (Click for larger image)</div>
{:/nomarkdown}

MEqualizer (and many other Melda products) have some other features that I believe provide excellent workflow improvements:

* Sonogram Display **PAID** - Rather than the current FFT snapshot being display in place, the sonogram encodes amplitude as color and time as a scrolling display. The display over time allows you to form a better mental picture of how sounds are shaped and their envelopes. The sonogram matches the equalizer's graph to provide quick access to 'fixing that thing you see'.
* Analyzer Pause - You can pause the analyzers. **YOU CAN PAUSE THEM**. I don't always use Melda products, but anytime I use another product I sorely miss this feature. Regardless of how you work, if you're trying to find that troublesome sound that you need to adjust, you will appreciate the ability to pause the analyzer so you can study a specific section more closely.
    * Zoom - When 'live' or when paused, you can zoom the analyzer. Zoom is a common analyzer feature, but combined with pause it jumps to the next tier of functionality.
* Settings - Melda has some of the most advanced analyzer settings on the market. I won't go over everything, but look at the image above. You can tailor the visualization to fit your needs with precision and _relative_ ease.
* Auto-Listen - when dragging a filter, a corresponding band/low/high-pass is applied to the signal so you can hear the signal being affected by the filter.
* Inversion - **I LOVE FILTER INVERSION**. I generally prefer to make subtractive changes to sounds when using an equalizer (for workflow, not technical reasons. The "use subtractive EQ" urban legend is just that. It has basis in reality from old console designs, but... that's about it.). To find the "problems", I use the classic sweep and boost technique. Boost a band, sweep it around until it sounds _very_ wrong, then pull that band down. The invert feature allows me to put forth my best attempt to make the signal sound as grotesque as possible, then flip it. The results are generally close to what I'm after.
* Band Options - There are 10 types of filters, with harmonic settings, L+R/M+S/Surround band selection and per-band inversion. Even some of the $150+ digital-style EQs on the market don't offer these capabilities to you.
* AGC - Auto gain. Fairly accurate adjustment of gain so that your input gain matches your output gain. Important for A/B-ing and adjustments made to the EQ that will be further processed by dynamics-sensitive processors. (Available on most Melda products!)
* 4 Macro Controls - One knob to control many parameters. That's not all though! The capabilities are well-beyond what most DAWs offer, let alone singular VST products. An entire article could be written on _just_ the macro capabilities. Check out the window in the image above to see _some_ of what's offered. I have a few presets with macros setup to emulate specific analog EQs I like, and the macros are automatable like anything else.

I don't know about you, but that's better than products on the market that cost 4x as much as the _entire_ MFreeFX bundle.

That's not even everything. You'll have to click the large image above to see more, and I'm still missing at least 2 major features (that are common to all Melda plugins).

The filters don't suck™ either.

# Conclusion

This article took me longer than expected because there's so much fun you can have with the [MFreeFXBundle](https://www.meldaproduction.com/MFreeFXBundle). If it was paid only, I would value it as the best purchase in the entire plugin market.

It's not paid only though. The free offering is... free (as in beer). Everyone should give it a try, and I strongly recommend purchasing it if you find it useful. The amount of functionality provided is incredible and worth supporting.

That's enough shilling for today... maybe I'll talk about a DAW next instead :)

# Meta

This post took 19 hours to research, write and edit. That ~3 minutes of video took 36 hours (!?). If you appreciate the information presented then <a href="/DonateNow/">please consider joining patreon or paying us for the time spent bringing you quality content!</a>

<a href="https://www.patreon.com/bePatron?u=7465992"> <img class="patreon-button" src="/assets/Patreon.png" alt="Be a Patreon!"></a>

<form style="text-align: center;" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick">
<input type="hidden" name="hosted_button_id" value="BR247JAZBTUJJ">
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
</form>

**If you have any questions or comments, please comment below! I read every comment and respond to most.** No registration is necessary to comment, so don't be shy.


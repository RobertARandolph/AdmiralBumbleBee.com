---
layout: post
title: "Bitwig Effects review"
comments: true
date:   2017-06-27_08:11:00 
categories: music
tags: ['DAW', 'Bitwig']
series: Bitwig
---

{::nomarkdown}
  <img src="/assets/Bitwig/Effects/Effects.png" alt="Effects!">
  <div class="image-caption">Bitwig's effects...</div>
{:/nomarkdown}

Bitwig comes with a number of stock effects. Not only are these effects largely competent in their own right, Bitwig also has some very clever routing and a comprehensive modulation system that _greatly_ enhances what you can do with the devices.

I'm going to cover every single audio effect included in Bitwig with a basic rundown of what it does, some cool bonus features and my ADRB rating.

Spoiler - Overall rating: <admrb rating="55"> </admrb>

**Other posts in this series**:

{% assign bits = site.posts | where: "series", "Bitwig" | sort: 'date' %}
<ul>
{% for my_page in bits %} 
    {% if page.url != my_page.url  %}
        <li><a class="page-link" href="{{ my_page.url | prepend: site.baseurl }}">{{ my_page.title}}</a></li>
    {% endif %}
{% endfor %}
</ul>
<!--more-->

# Contents
{:.no_toc}
* TOC
{:toc}

# Bonus Sections

Bitwig's built-in devices almost universally have a mix control (even if through a [Chain](#chain)), device containers for various audio paths and are fully modulatable. Make sure you read [the post on Bitwig's modulation system first!]({% post_url 2017-06-23-Bitwig-Modulators %}). The modulation system is _key_ to appreciating Bitwig's effect offerings.

This fact makes _all_ of these plug-ins more valuable than otherwise stated.

For some devices I've added a 'Modulation/Container Bonus!' section. When you see this section, this means that there's great potential for that plugin to be expanded by the modulation system.

# Audio Effects

## Amp
{::nomarkdown}
  <img src="/assets/Bitwig/Effects/Amp.png" alt="Amp">
  <div class="image-caption">Amp</div>
{:/nomarkdown}

Amp isn't necessarily a _guitar_ amp plug-in, but it is an amplifier simulation. It has a pre-emphasis stage (modify the signal going in to Amp), the drive stage, a post-filter (modifying the post-amplified signal) and a cabinet simulator.

The cabinet simulation mode has parameters for changing the size of the cabinet, 8 modes, colour and mix. The Amp plug-in also has 2 containers for more devices to be loaded on specific parts of the signal. You can put other devices in the 'Pre' path or the 'Post' path.

Amp surprisingly has very little aliasing with even some extreme settings.

As a guitar amplifier Amp is pretty poor. After around 4 hours, I was unable to get any sounds that I would consider useable. As a general distortion plug-in, Amp is a total blast to use. When used for general distortion and destruction duties it's rather fun!

Since this is the only thing in the program that would take the place of a 'guitar amp simulator', I am rating it poorly. It takes a lot of work to get good guitar sounds out of it. Don't let that deter you though! It's still a really cool plug-in.

## Audio Receiver
{::nomarkdown}
  <img src="/assets/Bitwig/Effects/AudioReceiver.png" alt="Audio Receiver">
  <div class="image-caption">Audio Receiver</div>
{:/nomarkdown}

Audio Receiver is a very simple device that allows you to insert audio from a device input into your device chain.

Audio Receiver has a container so you can put other devices on the incoming signal before it is passed on to the next device in the chain.

_Extremely_ useful.

## Bit-8
{::nomarkdown}
  <img src="/assets/Bitwig/Effects/Bit8.png" alt="Bit-8">
  <div class="image-caption">Bit-8</div>
{:/nomarkdown}

Bit-8 is not a traditional bitcrusher. It's more of a degredation device. It adds noise, resonance, jitter and has a gate.

The wet signal path has a container to place devices on before it's passed on to the next device in the chain.

Bit-8 is capable of some cool noises and convincing bit-crushing effects, however the non-classical presentation of the parameters might confuse some people. I have not taken off any points for the presentation, since I think it's easy to get great sounds of it.

## Blur
{::nomarkdown}
  <img src="/assets/Bitwig/Effects/Blur.png" alt="Blur">
  <div class="image-caption">Blur</div>
{:/nomarkdown}

Blur is a bank of stereo comb filters. 2 per stereo channel.

Blur can be judiciously used for some cool sounds on synthesizers, but it really shines in adding subtle stereo effects. Rarely used, but unique and fun to use with the modulation system.

### Modulation/Container Bonus!

Combining this with _any_ of the modulators can make for some really cool effects. Possibly one of my favorite creative effects combinations in Bitwig.

## Chorus
{::nomarkdown}
  <img src="/assets/Bitwig/Effects/Chorus.png" alt="Chorus">
  <div class="image-caption">Chorus</div>
{:/nomarkdown}

A simple chorus effect. As far as choruses go, it's competent but most other DAWs have way more useful choruses.

## Comb
{::nomarkdown}
  <img src="/assets/Bitwig/Effects/Comb.png" alt="Comb">
  <div class="image-caption">Comb</div>
{:/nomarkdown}

Comb is a comb filter (duh) with feedback. On its own it's not particularly useful, but I suspect this is included for modulation/container abuse.

Without modulation, it's a bit lackluster...

### Modulation/Container Bonus!

Comb comes in to its own when used inside a container or when modulated as part of a multi-device patch. While its inclusion is a bit redundant, since creating a comb filter using Bitwig's device system is easy, Comb does simplify the process when necessary.

## Compressor
{::nomarkdown}
  <img src="/assets/Bitwig/Effects/Compressor.png" alt="Compressor">
  <div class="image-caption">Compressor</div>
{:/nomarkdown}

The common compressor. Compressor has the usual controls that you'd expect.

I found that Compressor was particularly good on percussive sounds, but faired rather poorly on vocals, softer bass guitar, bass synths, pads, etc...

A big gripe I have with Compressor is that 50% of the attack knob is values from 0.204ms-4ms. While that is a fairly critical range it's rather unintuitive to use at times. The remaining 50% of the control is from 4ms-70.795ms.

The release knob has a similar issue. 50% of the knob is 38.905ms-240ms. For most applications that is an entire workable range, but it's only 50% of the knob! It's also bothersome to me that the release bottoms out at 38.905ms. I find it really useful to run compressors 'dirty' at low release times, and that's simply not possible with Compressor.

Another major oversight is that for some weird reason, unlike many other Bitwig plug-ins, Compressor doesn't have a mix knob! How'd they manage that?

Also... no side-chain input? Maybe I'm missing something here, but I don't see it?

As a general duty compressor, I find Compressor to be disappointing and inflexible. If this was my only compressor plug-in, I would be sad.

## DC Offset
{::nomarkdown}
  <img src="/assets/Bitwig/Effects/DCOffset.png" alt="DC Offset">
  <div class="image-caption">DC Offset</div>
{:/nomarkdown}

DC Offset simply adds a DC Offset to your signal. You almost never want this, unless...

### Modulation/Container Bonus!

Unless you're modulating! The DC Offset plug-in is the key to what allows the Bitwig modulation system to become a _modular synthesis system_. Modulate the DC Offset by an LFO and **BOOM**, you now have an oscillator.

There's many more uses for the DC Offset device in the context of the modular system as well, but I'll leave that for you to discover.

This is a vital plugin and it expands Bitwig's capabilities in marvelous ways.

## De-Esser
{::nomarkdown}
  <img src="/assets/Bitwig/Effects/De-Esser.png" alt="De-Esser">
  <div class="image-caption">De-Esser</div>
{:/nomarkdown}

De-esser is a nearly competent De-esser with a high-pass filter option. A de-esser is a compressor that acts on your signal, but bases its processing on a filtered signal. With a de-esser the signal the detector works on is either high-passed or has a high-frequency boost.

I have used much better De-Essers. If you do much vocal work, replace it. If you use de-essers for taming cymbals, reverbs, delays, synth squeels etc... _definitely_ replace it.

I tend to find that using [EQ 2/5](#eq-25) as a de-esser with the appropriate modulation setup is a better de-esser.

## Delay 1-2-4
{::nomarkdown}
  <img src="/assets/Bitwig/Effects/Delay124.png" alt="Delay 1-2-4">
  <div class="image-caption">Delay 1-2-4</div>
{:/nomarkdown}

Delay 1 is a simple mono delay. Delay 2 is a stereo delay. Delay 4 is a multi-tap delay (multiple delay lines work in parallel).

The interfaces are straight forward, they sound good, and the containers make them really fun.

### Modulation/Container Bonus!

Delay 1 and Delay 2 allow you to easily apply FX to the feedback path. It's possible to make some really cool sounds using this FX container. 

Delay 4 has containers pre-delay, feedback and an overall container pre-mix.

## Distortion
{::nomarkdown}
  <img src="/assets/Bitwig/Effects/Distortion.png" alt="Distortion">
  <div class="image-caption">Distortion</div>
{:/nomarkdown}

Distortion is another device to smash your audio with. It has a pre-emphasis filter before its drive stage. There's a container for putting devices on the wet signal before its mixed and passed on to the next device.

Distortion is great for smashing stuff, but for more subtle usage it's pretty harsh. It's still a pretty good effect.

## Dual Pan
{::nomarkdown}
  <img src="/assets/Bitwig/Effects/DualPan.png" alt="Dual Pan">
  <div class="image-caption">Dual Pan</div>
{:/nomarkdown}

This is getting the 'it should be included in the mixer' treatment. Dual pan allows you to individually control the left and right signals of a stereo signal. The default panner in the Bitwig mixer simply lowers the left or right signal to create the illusion of panning, but this is more accurate a balance control.

Dual pan should not be a device, it should be an integrated part of the mixer.

## Dynamics
{::nomarkdown}
  <img src="/assets/Bitwig/Effects/Dynamics.png" alt="Dynamics">
  <div class="image-caption">Dynamics</div>
{:/nomarkdown}

Dynamics isn't your normal dynamics effect. It has 2 stages of dynamic control: one for the lower volume parts of the signal and one for the louder parts. The ratio control allows for gating, up/downwards expansion and up/downwards compression. It has peak and rms envelope detection modes, which is always good.

Dynamics also has a side-chain input and a side-chain FX container for applying effects to the signal before it enters the detector. The first few times I used the side-chain FX I thought it was a bit of a gimmick, but it is in fact exceptionally useful. Creative use of delays, transient processors, another dynamics device etc... can yield both some unique and useful results.

Dynamics is [_also_ missing a mix control](#compressor). Why?! What is wrong with them! The comb filter has a mix control, but the dynamics plug-ins don't.

Despite the lack of a mix knob, Dynamics is still an awesome device and I would probably buy it if it was available as a VST.

## EQ 2/5
{::nomarkdown}
  <img src="/assets/Bitwig/Effects/EQ25.png" alt="EQ 2/5">
  <div class="image-caption">EQ 2/5</div>
{:/nomarkdown}

Bitwig has the standard EQs with a visualizer like basically any DAW. As an EQ they are passable with none of the issues some cheap/old EQs tend to have.

EQ 2/5 have 2 unique features: Global and Shift. Global adjusts the gain of all the filter bands, and Shift adjust the frequency of all filter bands. I found these to be useful, especially when modulated, but I wish that the filter bands visually responded to these controls.

## EQ DJ
{::nomarkdown}
  <img src="/assets/Bitwig/Effects/EQDJ.png" alt="EQ DJ">
  <div class="image-caption">EQ DJ</div>
{:/nomarkdown}

EQ DJ is a 'kill filter'. You have 3 bands that can be freely muted. Great for (cheesy, generic) drops.

It works I guess.

## Filter
{::nomarkdown}
  <img src="/assets/Bitwig/Effects/Filter.png" alt="Filter">
  <div class="image-caption">Filter</div>
{:/nomarkdown}

Filter is a basic resonant filter. It doesn't really sound particularly good if you are looking for any sort of classic filter sweep sounds.

## Flanger
{::nomarkdown}
  <img src="/assets/Bitwig/Effects/Flanger.png" alt="Flanger">
  <div class="image-caption">Flanger</div>
{:/nomarkdown}

Another basic device, the Flanger. Nothing special except the device container for the wet signal. Passable, but not particularly fun or exciting.

## Freq Shifter
{::nomarkdown}
  <img src="/assets/Bitwig/Effects/FreqShifter.png" alt="Freq Shifter">
  <div class="image-caption">Freq Shifter</div>
{:/nomarkdown}

Frequency shifter is a rather fun device. It won't come in handy very often, but when you do find a use for it then you're happy it's there.

Frequency shifter does _not_ shift pitch. It offsets each of the constituent frequencies of a signal by the same amount. So if you have a signal of 100hz, 200hz, 400hz, 800hz and shift them by 10hz you end up with: 110hz, 210hz, 410hz, 810hz. The harmonic relationship between the frequencies is _not_ maintained.

I would probably pay a small fee for this device.

## Gate
{::nomarkdown}
  <img src="/assets/Bitwig/Effects/Gate.png" alt="Gate">
  <div class="image-caption">Gate</div>
{:/nomarkdown}

Every DAW needs a gate, and bitwig has Gate. Unfortunately it's not a very good gate.

Gate suffers from the same attack/release issues [that compressor has](#compressor). The first 50% of attack is 0.1ms to 3ms, then 3ms to 100ms for the remaining 50%. First 50% of the release knob is 1ms-30ms, and the second 50% is 30ms to 1,000ms!

Much time spent with Gate is fighting with the attack/relase knobs to get a passable setting, since the most common values are buried in a single pixel's worth of knob movement.

Overall, the finnicky nature of the attack/release knob scaling makes this damn near worthless most of the time.

### Modulation/Container Bonus!

The Gate does have a side-chain with side-chain FX container though, and that's somewhat of a redeeming factor. Your trancy gated leads are just a side-chain away. Feed it a rhythmic drum part and listen to your newly chopped up lead.

The sidechain doesn't really redeem this terrible gate though.

## HW Clock/CV out
{::nomarkdown}
  <img src="/assets/Bitwig/Effects/HWClockCV.png" alt="HW Clock/CV out">
  <div class="image-caption">HW Clock/CV out</div>
{:/nomarkdown}

HW Clock is an _exceptionally_ good plug-in if you work with any external CV-based gear. I suggest trying the Bitwig trial if you want to learn more about it, but it has all the basics: clock pulse, reset, play/stop, pulse on note, manual trigger, clock shift, pulse length, pulse speed and gate on change.

HW CV allows you to use Bitwigs modulation system to generate CV output in both DC and AC. Really cool to be able to do straight from your DAW.

Amazing devices if you use CV-based equipment, kinda useless otherwise. I'd buy it though!

## HW FX
{::nomarkdown}
  <img src="/assets/Bitwig/Effects/HWFX.png" alt="HW FX">
  <div class="image-caption">HW FX</div>
{:/nomarkdown}

HW FX allows you to send your audio signal out of your interface, through some hardware device then back in to Bitwig to participate in the rest of the signal chain.

HW FX has a working Ping control to automatically set the latency compensation (the roundtrip cycle in/out of your interface will cause latency, and this compensates for that.)

It works, and I'm very happy that it's there.

## Ladder
{::nomarkdown}
  <img src="/assets/Bitwig/Effects/Ladder.png" alt="Ladder">
  <div class="image-caption">Ladder</div>
{:/nomarkdown}

The [Moog ladder filter](https://www.moogmusic.com/sight-and-sound/product_demo/moog-ladder-filter) has legendary status, and its digital emulation is found everywhere as well. Bitwig of course has its own version of it.

Ladder has its own envelope follower to modulate the frequency based upon the input signal, an LFO to modulate frequency and a side-chained ADSR to modulate the frequency.

Ladder sounds like a common ladder filter emulation and with the modulation options it's quite useful. If you are using the [DC Offset](#dc-offset) device as the center of your own personal Bitwig modular synth, Ladder likely will find a home in that setup.

### Modulation/Container Bonus!

It's a ladder filter. Of course it's way better with modulations!

## Peak Limiter
{::nomarkdown}
  <img src="/assets/Bitwig/Effects/PeakLimiter.png" alt="Peak Limiter">
  <div class="image-caption">Peak Limiter</div>
{:/nomarkdown}

Just buy another peak/brickwall limiter. It's worth the money. The capabilities of most respected 3rd party limiters allow you more transparent results and higher gain reduction without much fuss.

Peak Limiter also has that weird issue where the most commonly used values for release are constricted to 50% of the knob's throw.

## Phaser
{::nomarkdown}
  <img src="/assets/Bitwig/Effects/Phaser.png" alt="Phaser">
  <div class="image-caption">Phaser</div>
{:/nomarkdown}

Phaser is a 2 to 32 pole [allpass filter](https://en.wikipedia.org/wiki/All-pass_filter) on the left and right channel with feedback. You're expected to provide your own modulation through the modulation system. A [Classic LFO]({% post_url 2017-06-23-Bitwig-Modulators %}#classic-lfo) is provided by default.

A "low-skip" setting allows you to have the filter's effect eliminated as it comes closer to the low-skip value. By avoiding lower-frequencies you can maintain the fundamental value of the sound and not have notes totally drop out when a many-pole filter hits that note's frequency.

Phaser is a fun device. The individual L/R processing allows you to make some subtle or wild stereo effects.

## Pitch Shifter
{::nomarkdown}
  <img src="/assets/Bitwig/Effects/PitchShifter.png" alt="Pitch Shifter">
  <div class="image-caption">Pitch Shifter</div>
{:/nomarkdown}

Pitch Shifter is the harmonically conscious version of the [Frequency Shifter](#frequency-shifter). If we take the previous example of a signal of 100hz, 200hz, 400hz, 800hz and pitch shift them by 10hz you end up with: 110hz, 220hz, 440hz, 880hz. The harmonic relationships are maintained.

Pitch shifter has a grain control which adjusts the size of the 'grains' used when pitch shifting. Lower values will induce some latency, and the size you want to use depends on the signal.

Pitch Shifter is basic, but it works

## Resonator Bank
{::nomarkdown}
  <img src="/assets/Bitwig/Effects/ResonatorBank.png" alt="Resonator Bank">
  <div class="image-caption">Resonator Bank</div>
{:/nomarkdown}

Resonator bank is a bank of 6 resonant filters with key-tracking and glide. Resonant bank is rather fun to use on reverb tails, to create vocoded-sounding parts and much more.

Resonant filter banks are fairly rare in DAWs. I've only found a handful of uses for Resonator bank, but it was always something I'd have struggled to execute in another DAW.

## Reverb
{::nomarkdown}
  <img src="/assets/Bitwig/Effects/Reverb.png" alt="Reverb">
  <div class="image-caption">Reverb</div>
{:/nomarkdown}

I love reverbs, and I'm always ready to badmouth a reverb plug-in. Unfortunately Bitwig's reverb device is surprisingly good.

It has early/late multipliers with adjustable crossover, 'buildup', a wide-range diffusion control and Room/Hall modes. There is a device container for effecting only the wet signal, and uniquely there is also a 'tank fx' container.

The 'tank fx' container allows you to use devices that only affect the 'late' signal. This allows you to add common reverb tricks like tail pitch modulation, delay, extra tank filters, distortion, resonators and more.

On its own it's a good algorithmic reverb.

### Modulation/Container Bonus!

The tank and wet FX benefit greatly from the modulation system. Being able to use signal followers, multi-stage adsr, lfos and X/Y on simple effects like [Ladder](#ladder), [Rotary](#Rotary), [Pitch Shifter](#pitch-shifter) etc... make for some lush and convincing reverbs.

Reverb is probably the best effect in Bitwig when used with the tank/wet containers and intelligent use of the modulation system.

If there was a Reverb plug-in with this much capability in the VST-world, it would be hugely popular.

## Ring Mod
{::nomarkdown}
  <img src="/assets/Bitwig/Effects/RingMod.png" alt="Ring Mod">
  <div class="image-caption">Ring Mod</div>
{:/nomarkdown}

Bitwig's ring modulator ring modulates either an oscillator or a source track against the incoming signal. It has FX containers for both the incoming signal (pre) and the source signal if routed. There's also a post-ring-mod FX container.

Probably one of the best ring modulators I've seen in a DAW, even if they are not often used.

## Rotary
{::nomarkdown}
  <img src="/assets/Bitwig/Effects/Rotary.png" alt="Rotary">
  <div class="image-caption">Rotary</div>
{:/nomarkdown}

A rotary speaker simulator. It 'spins' your signal around the stereo field.

It's not a Leslie emulation, and it's pretty limited. If this is the sort of effect that you use often, then it's something you should likely replace. For occasional use it's sufficient.

## Test Tone
{::nomarkdown}
  <img src="/assets/Bitwig/Effects/TestTone.png" alt="Test Tone">
  <div class="image-caption">Test Tone</div>
{:/nomarkdown}

A signal generator. Every DAW needs one, but this one kinda sucks. It's simply a sine-wave with adjustable frequency, gain and mix with the incoming signal. Setting the frequency precisely is difficult.

**UPDATE** Precise frequency vales can be entered. On macOS you command-click a knob to enter a value. Windows is ctrl-click.

## Tool
{::nomarkdown}
  <img src="/assets/Bitwig/Effects/Tool.png" alt="Tool">
  <div class="image-caption">Tool</div>
{:/nomarkdown}

Oh, yay! More functions that should be _built in to the mixer_!

Left/Right polarity inversion, amplitude scaling, pan and stereo width.

## Transient Control
{::nomarkdown}
  <img src="/assets/Bitwig/Effects/TransientControl.png" alt="Transient Control">
  <div class="image-caption">Transient Control</div>
{:/nomarkdown}

Transient control is a decent transient processor. It allows you to change the relative attack and sustain portions of a signal. It works well enough and the GUI makes it easy to use. As a standalone device it's easy to replace it with something cheap and more functional.

### Modulation/Container Bonus!

An unusual addition for a transient processor is that is has a sidechain input with an FX container for processing the side-chain input. You can feed some interesting things in and get some wild results. I have used this device _a lot_ with percussion and bass parts, often side-chaining the bass to a percussion part to make it sound tighter and punchier.

Another trick that works wonders is to feed a kick and snare buss to a Transient Control on your hi-hats. Set it so that when the kick/snare hit, the hi-hats attack is modified. If your hats are always crushing your kick/snare then you can tame it, if your hats are disappearing them give them more attack.

There's so many ways to use this. Experiment and be happy.

With the consideratin of the side-chain FX container, I'd buy this if it were available 3rd-party.

## Treemonster
{::nomarkdown}
  <img src="/assets/Bitwig/Effects/TreeMonster.png" alt="Treemonster">
  <div class="image-caption">Treemonster</div>
{:/nomarkdown}

Treemonster is weird. I suspect someone just got a bit tipsy on the weekend, coded this up, pitched it to the lead dev and was successful. (Alternatively it was coded by the lead dev, and he's always drunk.)

Good for them. It's pretty fun.

For an explanation of what it is, I'm just going to rip it straight from the manual:

A ring modulator that utilizes the incoming audio signal and a sine wave whose tuning is based on that incoming signal. Pitch detection
is sampled only above a set Threshold amplitude, can be limited with low-pass and high-pass filters, can be offset (Pitch) for shifting the sine tone's frequency, and can be slewed (Speed) to respond more quickly or ponderously. For processing, the amount of Ring modulation goes anywhere between a simple sine wave (at 0%) to more harmonically complex results.

Yeah, it basically just makes things sound weird and scary. It sounds like an evil vocoder with doom-sauce on top. Anything you put Treemonster on will haunt your grandchildren's grandchildren.

Fun though.

## Tremolo
{::nomarkdown}
  <img src="/assets/Bitwig/Effects/Tremolo.png" alt="Tremolo">
  <div class="image-caption">Tremolo</div>
{:/nomarkdown}

Tremolo is a multi-shape tremolo that can be re-triggered on note-events. Tremolo is just amplitude modulation, so nothing particularly special here.

The modulation values go from 0.010hz to 31.623hz.

It's nice that it's here, but with the modulation system I don't think it's really necessary.

# Visualization

## Oscilloscope
{::nomarkdown}
  <img src="/assets/Bitwig/Effects/Oscilloscope.png" alt="Oscilloscope">
  <div class="image-caption">Oscilloscope</div>
{:/nomarkdown}

Bitwig's oscilloscope is fairly decent. It has 2 inputs that can be overlayed, one of which also has an external input that you can take audio from another track pre/post fader or at any point in the device chain. The capture can trigger on up/down slope, with variable gain and hold (smoothing basically). Not only can you view L/R signals, but mid and side as well.

One of the neater features of the Oscilloscope is that when "Key Follow" is on, the window size changes based on the input note. That means that the scope will try to adjust the window size based on a ratio of the note to window. This allows you to play around 2 octaves of notes and capture only 1 cycle if desired, rather than each note filling up more of the scope display due to the higher frequency.

A pretty good scope for investigating synthesis, which is what should be there in a DAW. Other DAWs with scopes try to replicate a simple desk-scope which isn't particularly useful for music at all.

Bitwig got this one right.

**Note** I was able to cause the Oscilloscope to stop display waveforms fairly frequently, or display the _wrong_ signal. There's clearly some bugs with it, but when it's functional it's great.

## Spectrum Analyzer
{::nomarkdown}
  <img src="/assets/Bitwig/Effects/SpectrumAnalyzer.png" alt="Spectrum Analyzer">
  <div class="image-caption">Spectrum Analyzer</div>
{:/nomarkdown}

Spectrum Analyzer is a simple specturm analyzer. It takes 2 signals of L/R mid, side or an external input from another track (pre/post or from any point in the device chain).

There is only a variable fall-off rate, which freezes your meter at 1.00. There's no variable window size, window size, averaging or peak, overlap settings, ranges, offset... or anything.

[Voxengo Span](http://www.voxengo.com/product/span/) is a free spectrum analyzer that's significantly better than what Bitwig offers. Without a doubt you need to replace it with Span at least.

# FX Containers

## Chain
{::nomarkdown}
  <img src="/assets/Bitwig/Effects/Chain.png" alt="Chain">
  <div class="image-caption">Chain</div>
{:/nomarkdown}

Chain is a container for a serial chain of effects. A goes in to B which goes in to C that goes in to D etc... (A->B->C->B->output)

Chain primarily allows you to do 5 things:

* Save a group of devices working together in serial as a preset.
* Move a group of devices around together easily.
* Apply a single modulator to multiple devices.
* Add a mix control to devices that don't have it.
* Quickly collapse a bunch of devices down to a single block. This lets you treat a bunch of FX as their own single device in the context of your device chain. Now it's easier to browse the devices that you have on a track.

Chains can be really useful when you do things like make a complex [Reverb](#reverb) chain for instance

A major issue with Chain is that I can't figure out how to quickly add multiple devices to a chain. You can select multiple devices and add them to an [FX Layer](#fx-layer), but not to a chain it seems. You need to drag in the chain, possibly on top of 1 device to quickly add it, then drag the rest of your devices over. This is a pretty big oversight I think.

Considering how often you need to use chains if you use modulation, it's frustrating to have to deal with Chain.

## FX Layer
{::nomarkdown}
  <img src="/assets/Bitwig/Effects/FXLayer.png" alt="FX Layer">
  <div class="image-caption">FX Layer</div>
{:/nomarkdown}

FX Layer allows you to run FX in parallel. That means that if you have devices A B C and D, the signal passes through each of them individually, then the resulting signal is combined and sent to the next device.

So if our signal is n, we'd have (n->A + n->B + n->C + n->D)->output. This differs from chain which is simply A->B->C->B->output.

You can select multiple devices then right click and select group (ctrl-g/cmd-g) and all of those devices are put in to an FX Layer chain. This means that those devices become just 1 chain (A), and not all of the devices are processed parallel. To add new parallel processes, you have to click the + and add a new parallel layer.

FX Layer is rather useful in many cases, and is often the key to many of the complex sounds found in modern music.

## Mid-Side Split
{::nomarkdown}
  <img src="/assets/Bitwig/Effects/MidSide.png" alt="Mid-Side Split">
  <div class="image-caption">Mid-Side Split</div>
{:/nomarkdown}

Mid-Side Split offers you two containers: one for the mid channel and one for the sides.

What is mid and what is side? 

* Mid - any signal that is identical in the left and right channels. This is calculated by adding the left and right channels: L + R
* Side - any signal that differs between the left and right channels. This is calculated by subtracting the left and right channels: L - R

Why would you want to do this? Mid-side processing gives you a great amount of control over the stereo spread and overall stereophonic imaging of your track. Maybe you want a synth to have some really deep bass, but only in the center. Maybe you want your vox to have some delay, but only on the stereo tail of the reverb on it.

Mid-side processing in other DAWs is not fun to setup usually. Bitwig makes it easy.

## Multiband FX-2/3
{::nomarkdown}
  <img src="/assets/Bitwig/Effects/Multiband23.png" alt="Multiband FX-2">
  <div class="image-caption">Multiband FX-2/3</div>
{:/nomarkdown}

Multiband FX-2 and 3 are very cool. They split up your audio in to 2 or 3 bands using 4-pole overlapping filters. Each band has adjustable gain and width. Each band has its own effects container.

Do you want a multi-band compressor? Done. Throw some compressors in there.
Do you want a multi-band distortion device? Done. Throw some FSU plug-ins in there.
Do you want to squash your low-end to mono? Easy. Toss a [Mid-Side Split](#mid-side-split) on there and mute or lower the side band.
Do you want a complex multi-band delay with collapsed compressed low end and a heavily modulated mid-range pitch-shifted vocoder? Well.. you get the idea.

Multi-band processing is a popular thing these days, and for good reason. There's a lot of cool things you can do, and it affords you creative options without potentially overwhelming your mix with full-spectrum effects.

Multi-band FX-2 and Multi-band FX-3 are awesome containers. Every DAW should have something like this, and few do.

## Replacer
{::nomarkdown}
  <img src="/assets/Bitwig/Effects/Replacer.png" alt="Replacer">
  <div class="image-caption">Replacer</div>
{:/nomarkdown}

Replacer lets you generate new sounds based on the incoming amplitude of sounds. First set a threshold with variable hold and hysteresis (smoothing basically). Optionally you can setup a filter for the incoming audio so that you can more precisely target a specific sound.

Replacer then takes this trigger signal and sends a fixed note and velocity to an instrument. The instrument sound and the incoming sound can be mixed together from 0-100%.

The obvious use for Replacer is to replace drum sounds. Target a snare in a break and trigger a new snare. Maybe mix the new snare in a bit just to give the sample some more power. Target any sound by its amplitude and trigger something new.

If you want to get really creative then throw 3 replacers in the Low/Mid/High bands of a [Multiband FX-3](#multiband-fx-2/3). Trigger a kick on the low band, trigger a snare on the mid, and trigger a hi-hat on the high band. You may need to tune the Replacers filters a bit, but when you're ready... You now have a device that converts your vocal-beatboxing directly to drum samples!

Replacer does have 2 fairly major limitations that limit its usefulness.

* It does not track pitch. Replacer could do so many more things if it was possible for it to also have, even if limited, a pitch tracking option.
* It does not change velocity. Most good trigger plug-ins track the velocity of the trigger relative to how much it's violated the threshold. You can work around this by using an envelope follower to modulate the velocity value on the Replacer, but in my experience that takes a lot of time to get working right. It _does work_ though, but other 3rd party plug-ins do it much better and with less fuss.

### Modulation/Container Bonus!

Replacer is made cool only because of the [Modulators]({% post_url 2017-06-23-Bitwig-Modulators %}) and [other containers](#containers), but that's enough to make it really cool.

With some clever use of [Envelope Follower]({% post_url 2017-06-23-Bitwig-Modulators %}#envelope-follower) or [Steps]({% post_url 2017-06-23-Bitwig-Modulators %}#steps) you can make Replacer a more valuable container.

The aforementioned use of [Multiband FX-3](#multiband-fx-2/3) also enhances Replacer quite a bit, and putting Replacer in the appropriate [the Mid-Side container](#mid-side-split) allows you to target specific parts of the stereo imagine (great for replacing a kick or snare in a loop).

## Step Mod
{::nomarkdown}
  <img src="/assets/Bitwig/Effects/StepMod.png" alt="Step Mod">
  <div class="image-caption">Step Mod</div>
{:/nomarkdown}

Step Mod is... Well, it's the [Steps modulator]({% post_url 2017-06-23-Bitwig-Modulators %}#steps).

It doesn't have reverse mode, note trigger, note/random trigger, phase modulation, depth, randomize, global clear, one-shot mode and it tops out at 16 steps.

It does let you put effects inside it and modulate them. The 'Speed' knob changes how fast the transitions are between steps, which is nice.

Not really useful. I'm not familiar with Bitwig 1, but I suspect this may be a legacy device. It's not very good compared to your other options.

## X/Y Effect
{::nomarkdown}
  <img src="/assets/Bitwig/Effects/XYEffect.png" alt="X/Y Effect">
  <div class="image-caption">X/Y Effect</div>
{:/nomarkdown}

At first look it seems like you could use this as X/Y routing to your choice of device in each of the four corners, which would be _really cool_.

Nope. It's an X/Y modulator with 4 effects containers and a post-FX container. Basically its a 4-slot FX-layer with an XY modulator on it. <strike>The XY fader isn't even modulatable!</strike>

<strike>If this was an automatic 4-way routing container it'd be really cool and useful. It's not though. I suspect that this is another legacy device, because it's surpassed by other more flexible and capable devices in Bitwig.</strike>

**UPDATE** X/Y **IS** modulateable. You have to click the gear in the lower left to expose the X and Y knobs. I totally missed this. The previous score was 0, it is now 9.

# Conclusion

Overall rating <admrb rating="55" align="left"> </admrb>

Bitwig's included FX are not actually that great. The [modulators]({% post_url 2017-06-23-Bitwig-Modulators %}) and [containers](#fx-containers) add a lot of value to what is an otherwise limited presentation. Without these additions I'd probably rate Bitwig's effects very low, probably a 20-30. Sonically they are not particularly interesting on their own, the GUIs have some usability issues and there's some strange limitations that are overcome with modulators/containers.

Bitwig is for the electronic music producer, and I'm rating it based on that target audience. If you're working with more traditional music then I think the selection is very disappointing. There's very little colour, the saturation options suck, the dynamic selection is limited and there's not much for guitar/bass.

The electronic producer will be _well served_ by the selection offered by Bitwig though. The effects are clean (low imd in dynamics, low/zero aliasing, no rumble in the EQ, filters are very clean etc..). The creative potential is exceptional.

There are some issues though:

* Proper signal generator - Noise and various shapes are really needed. It's fairly common to trigger a signal generator to create certain percussion sounds. It's also useful for testing/setting up certain effects.

* Better saturation - [Amp](#amp) is alright. [bit-8](#bit-8) is woefully untraditional, but good anyway. [Distortion](#distortion) is ok if you wanna destroy things. Where's the subtle options though? All of those effects are capable of subtle options if you struggle with the controls, but they rarely sound good and the GUI makes it tiresome. Some de-facto transformer and tube emulations would go a long way, even if you can get close with a lot of tinkering already.

* A good guitar amp - [Amp](#amp) sucks for guitars. I doubt many Bitwig users are playing guitar, but c'mon guys. Go try some popular amp sims like [Scuffham](http://www.scuffhamamps.com), [plugin-alliance](https://www.plugin-alliance.com/en/products.html) or [Kazrog](#http://kazrog.com/products/kazrog-complete-collection-1/).

* [Peak Limiter](#peak-limiter) sucks - Yeah it sorta works, but the results you can get by spending $50 on a 3rd-party plug-in make it worth it to replace it on the spot. [Toneboosters Barricade](http://www.toneboosters.com/tb-barricade-v4/) is great and cheap, and [AOM Invisible Limiter](http://aom-factory.jp/products/invisible-limiter/) is cheaper still and awesome. Of course you can spend a bit more for product like [Izotope Ozone](https://www.izotope.com/en/products/master-and-deliver/ozone.html), [Flux Pure Limiter](http://www.fluxhome.com/products/plug_ins/purelimiter-v3), [Voxengo Elephant](http://www.voxengo.com/product/elephant/), [Fabfilter Pro-L](https://www.fabfilter.com/products/pro-l-brickwall-limiter-plug-in) and the ultra-awesome [DMG Limitless](https://dmgaudio.com/products_limitless.php)

* No convolution plugin - Convolution is awesome for space simulation. It's surprising that Bitwig is missing it! It would also help tidy up the guitar situation by letting you use your own cabinet samples.

* No tuner - No tuner?! In 2017 in a DAW? How? A tuner is a must-have, even in an electronic-music focused program.

* No looper - Ableton has a looper. Digital Performer [has a great looper]({% post_url 2016-12-10-Cool-Features-in-Digital-Performer...-Part-1 %}#polar). Loopers aren't just for guitarists. They are essential tools for many workflows, and if you've not used one yet, then you need to. It's an excellent way to hammer out ideas and quickly develop a mental flow.

* No good emulations - Yeah there's [Ladder](#ladder) for a moog filter emulation, but for classic devices there's nothing. There's just some sounds that rely on certain classical sounds (1176 and SSL 4k buss compression in particular). Bitwig sets you back some $$ to reach out and get those types of sounds if you need them. Most other DAWs come with decent classical device emulations of some sort.

* Lack of diversity - Most DAWs have a handful of different reverbs, delays, compressors etc... Bitwig's [Reverb](#reverb) is rather flexible, but there are still some ranges of sound you can't reach with it. Same goes for [Delay](#delay-1-2-4), [Dynamics](#dynamics) etc...

* Managing effects is atrocious - The left-right display of FX blocks is cumbersome to navigate even if you're using [Chains](#chain) as often as possible. Lots of clicking to keep things open/closed/open GUIs/move things to containers etc... Add to this how confusing it is to figure out yesterday's complex modulation spree. Bitwig makes it fun to add effects to things, but editing or understanding what you did a week later is a path to a migraine.

* The browser sucks - Browsing for FX is painful. I'll cover this more later.

* Reading sideways hurts - Device labels are sideways. I know that's the cool thing to do when you're essentially an [Ableton Live ripoff](https://www.ableton.com), but surely there must be an improvement. It's a minor thing sometimes, but when you're knee deep in levels of complexity it's just one more stack added to the cognitive pile.

* Manual **really sucks** - I will also cover this later, but I was really on my own to figure out exactly how some of these things worked and what the parameters do. There were many times where I got 'kicked out of the zone' because I couldn't figure out what a device was doing, and I had no quick reference.

    I'm fairly certain that this post is a better manual for the included effects than the supplied manual (after you remove the opinion layer), and I don't even think this is 10% of what a manual should be.

* No direct value input - If the parameter has a knob, there does not appear to be a way to click and type in values. Considering how bad some of the knob scaling can be, that's an omission that needs remedy.</strike>

    Edit: I'm wrong here. On macOS you command-click a knob to enter a value. Windows is ctrl-click.

* Moving effects to another track - To move effects to another track, you have to switch to the mixer. Context switching is not good for maintaining a thread-of-thought, and this needs to be changed. **UPDATE** You can drag a plug-in over a track in the arrange-view and that changes the device panel so that you can drag the plugin where you need it. [However you may already know how much I hate drag and drop]({% post_url 2016-06-15-Studio-PoisOne %}), especially extended operations like that.


Overall the selection of effects is enough to get you by if you know what you're doing, what you want and tediously learn the modulation system. If you're new to producing then there's a lot of learning and experimenting to do before you will get much out of what's included here.

I personally would not feel comfortable sitting in front of Bitwig and being tasked to make a track only using the included effects. Is it possible? _absolutely_. Would it be fun? Not for me. Would I be longing for a number of 3rd party replacements? Constantly. I can always use the modulation system with 3rd-party VSTs anyway.

For the asking price and compared to their main competitors [Ableton Live](https://www.ableton.com/en/) and [FLStudio](https://www.image-line.com), the effects selection is even more disappointing. [FLStudio](https://www.image-line.com) offers a more complete set of effects for $100 less. [Renoise](http://www.renoise.com) offers a comparable set of effects and a nice modulation system for 1/5th the price of Bitwig. Even [Waveform](https://www.tracktion.com/products/waveform) offers a comparable set of effects with fantastic routing and a basic modulation system, but for 1/4 of the price.

Of course, Bitwig also offers some instruments.... (coming soon)...

# Support Me!

This post took 40 hours to research, photograph, write and edit. If you appreciate the information presented then <a href="/DonateNow/">please consider joining patreon or donating!</a>

<a href="https://www.patreon.com/bePatron?u=7465992"> <img class="patreon-button" src="/assets/Patreon.png" alt="Be a Patreon!"></a>

<form style="text-align: center;" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick">
<input type="hidden" name="hosted_button_id" value="BR247JAZBTUJJ">
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
</form>

If you have any questions or comments, please comment below! I read every comment and respond to most.

---
layout: post
title: "30 days with FLStudio 20 - Part 11: Instruments Review"
comments: true
date:   2018-07-22_10:24:26 
categories: music
tags: ['FLStudio', 'DAW']
image: /assets/FLStudio/Instruments/FLInstruments.png
description: Reviews of every single instrument in FLStudio
series: FLStudio
---


  <script type="text/javascript" src="/admrb/admrb.js?v={{ site.time | date:'%s' }}"> </script>
  <link rel="stylesheet" type="text/css" href="/admrb/admrb.css">
{::nomarkdown}
<img src="/assets/FLStudio/Instruments/FLInstruments.png" alt="FLStudio Instruments">
<div class="image-caption">FLStudio Instruments</div>
{:/nomarkdown}

Finally! The penultimate post. All that's left is the conclusion post, but now for a review of every synth available plugin for FLStudio.

I've organized these by category (as listed in FL) and by availability in version of FL.

Unlike the [effects post]({% post_url 2018-07-18-30-days-with-FLStudio-20-Effects %}), I'll be giving multiple ratings for different versions.

I will be considering the plugin itself. The envelopes/filters/etc... available on the native wrapper channel I won't consider since these are available to many plugins.

**Other posts in this series**:

{% assign fls = site.posts | where: "series", "FLStudio" | sort: 'date' %}
<ul>
{% for my_page in fls %} 
    {% if page.url != my_page.url  %}
        <li><a class="page-link" href="{{ my_page.url | prepend: site.baseurl }}">{{ my_page.title | split: '-' | last }}</a></li>
    {% endif %}
{% endfor %}
</ul>

<!--more-->

**If you have any questions or comments, please comment below! I read every comment and respond to most.** No registration is necessary to comment, so don't be shy.

# Contents
{:.no_toc}
* TOC
{:toc}


# All versions

## Drums

### BassDrum

{::nomarkdown}
	<img src="/assets/FLStudio/Instruments/BassDrum.png" alt="BassDrum">
	<div class="image-caption">BassDrum</div>
{:/nomarkdown}

Now this is a kick drum synth. You get one oscillator with a following oscillator. There's a click section to add attack. There's also a _sample player_. This lets you layer a sample with your synthesized kick sound, exactly what it needs.

Without the sample layering it's not much better than [Fruit Kick](#fruit-kick) except with extra parameters. With the sample layer it's a more contained kick solution.

If you have BassDrum then I see no reason to ever load your kick sample in to a sampler track. Load it in here and then you have a built-in weapon for making deepier, clickier and more sonically complex kicks that will drive your track with more power.

It's a simple idea for a plugin, but executed well.

### Drumpad

{::nomarkdown}
	<img src="/assets/FLStudio/Instruments/Drumpad.png" alt="Drumpad">
	<div class="image-caption">Drumpad</div>
{:/nomarkdown}

Drumpad is less a synthesizer, and more of a 'drum builder'. Rather than thinking in terms of sound waves and filters, you are given a set of controls that allow you to create a synthetic membrane that is synthesized.

You're _not_ going to get realistic drums out of this guy, but what you can get is realistic _performances_ out of it. There's parts of it that can either be modulated or modulate the sound naturally (specifically noise phase with retrig off helps a lot) that allow you to create rolls that don't have that machine gun sound.

There's 4 slots that allow you to modulate parameters by velocity naturally. So you can use light velocity changes on the incoming notes to add a more dynamic and natural sound. These slight responsive modulations are important to making the drum feel like it's a living instrument.

I know it seems like I'm being enthusiastic about Drumpad, but I really don't like using it. Trying to get a _specific_ sound out of it is difficult. Due to its ability to model cymbals, it often feels like you're getting some weird cross between a cymbal and a drum and a pan. Starting from presets doesn't even help this much. Turn the wrong knob _just a bit_ and the sound goes sour.

If you spend some time with it and make sure to save a lot of presets, I think you can stumble upon some usable sounds. _If_ you can manage that, then it's a cool product. The time investment doesn't seem to reflect the reward value though.

### Fruity DrumSynth Live

{::nomarkdown}
	<img src="/assets/FLStudio/Instruments/FruityDrumSynthLive.png" alt="Fruity DrumSynth Live">
	<div class="image-caption">Fruity DrumSynth Live</div>
{:/nomarkdown}

128 sampler channels with 2 oscillators each. Multiple triggers modes so you can have trigger groups and mono/poly modes.

The 2 things that set this apart are the morph mode and the multi-channel support.

Since pitch bending percussion samples often doesn't make much sense, this synth allows you morph between samples by using the pitch wheel. The morphing works well, and you can morph from any sample to any other with the pitch wheel controlling the movement.

Sending samples to other channels is done from inside the plugin using FLStudio's "send" paradigm. You create sends in the mixer, then from Drumsynth Live you assign keys out to mixer channels. It's a bit nicer than the way of doing it in other DAWs, where you assign (poorly named) plugin outputs to mixer tracks.

DrumSynth Live is not the most powerful plugin, but for just pure music making, or live performance it's a useful tool.

### FPC

{::nomarkdown}
	<img src="/assets/FLStudio/Instruments/FPC.png" alt="FPC">
	<div class="image-caption">FPC</div>
{:/nomarkdown}

FPC is a fantastic tool if you like to play in drums manually on a pad controller, or even just as a drum sampler.

You get 2 banks of 16 pads. Each pad has multiple velocity-assigned layers of samples with a global amplitude envelope and pan. Overlapping layers can play round-robin or random (with a cool 'random avoid previous' mode).

The envelope/pan graph editors are the same cool ones that appear all over FLStudio.

The pad to note assignments can be changed easily. The onscreen pads have velocity control that changes depending on where you press the pad on screen. I really enjoy this feature as it works pretty nicely on touchscreens.

Once again this is a tool with little complexity, but a great deal of capability musically. Buy a cheap pad controller and now you have a multi-sample instrument at your fingertips. Cool.

### Fruit Kick

{::nomarkdown}
	<img src="/assets/FLStudio/Instruments/FruitKick.png" alt="Fruit Kick">
	<div class="image-caption">Fruit Kick</div>
{:/nomarkdown}

Electronic kick drum synthesis. You control the min/max frequencies, the slide between them, the amp envelope, some kick and some distortion.

Ultra simple, but effective.

As a standalone kick synthesizer its not particularly useful. Using it to layer with other sampled kicks? Brilliant. You can think of this like the 'sub synth' type plugins, but in FLStyle you trigger it with MIDI along with your kick.

Surprisingly useful.

### Fruity Slicer

{::nomarkdown}
	<img src="/assets/FLStudio/Instruments/FruitySlicer.png" alt="Fruity Slicer">
	<div class="image-caption">Fruity Slicer</div>
{:/nomarkdown}

Drop in a drum loop and it's sliced on the beats. Now you can play the slices via MIDI. There's minimum control over the slicing with only 3 'modes' and slicing in evenly divided beats.

You can't edit the samples individually, and the pitch/time shifting happens across the whole sample. You can't change the sample mapping. You can drag and drop samples to another track to use just that sample, which is nice.

The only redeeming factor really is the `Dump beat to piano roll` function that draws a MIDI clip that plays the sample back mostly properly. There's multiple methods of having the MIDI dumped including some cool stereo modes and automatically creating neat amplitude based grooves.

For a quick slice it's nice, but eh.

## MIDI

### MIDI Out

{::nomarkdown}
	<img src="/assets/FLStudio/Instruments/MIDIOut.png" alt="MIDI Out">
	<div class="image-caption">MIDI Out</div>
{:/nomarkdown}

FLStudio sucks at handling normal MIDI. This is the [Bondo](https://www.3m.com/3M/en_US/bondo-us/) that Image Line applied to try and fix it.

You assign MIDI CC/RPN/NRPN/AFT to knobs, and now you can automate these knobs. The MIDI can go to an internal MIDI port so it can go to a VST, or you can output to external MIDI.

This is the type of thing I hate. It's a plugin that exists to fix a design oversight. Yes, yes, yes... you can use it to physically have knobs to turn and control things (like NRPN on external synths). The most powerful use is to avoid using the [Event Editor]({% post_url 2018-06-27-30-days-with-FLStudio-20-Piano-Roll-Advanced %}#event-editor).

On its own this is a cool idea. It gives you a way to control external synths, or use knobs to control MIDI only parameters in VSTs.

It's just giving me flashbacks of how awful the event editor is.

## Misc

### Patcher

{::nomarkdown}
	<img src="/assets/FLStudio/Instruments/Patcher.png" alt="Patcher">
	<div class="image-caption">Patcher</div>
{:/nomarkdown}

[Patcher was covered here]({% post_url 2018-07-18-30-days-with-FLStudio-20-Effects %}#patcher). Everything there applies for instruments.

## Sampler

### Fruity Granulizer

{::nomarkdown}
	<img src="/assets/FLStudio/Instruments/FruityGranulizer.png" alt="Fruity Granulizer">
	<div class="image-caption">Fruity Granulizer</div>
{:/nomarkdown}

Granulizer could be _sooooooo_ much cooler. It takes a sample and splits it in to tiny little chunks then plays those back.

Currently it's totally trial and error to get something. With some visualization, better knob throws (grain spacing feels weird to use) and controls over sample crossfade/layering/etc... it could be awesome.

As it is, it's just kind of an experimental toy. It _can_ be fun for making a quick pad, or doing some crazy (but fun!) drum loop mangling. As a serious granular tool it's a let down.

## Synth Classic

### 3x Osc

{::nomarkdown}
	<img src="/assets/FLStudio/Instruments/3xOsc.png" alt="3x Osc">
	<div class="image-caption">3x Osc</div>
{:/nomarkdown}

The classic FLStudio synthesizer. It does what it says on the tin. You get 3 oscillators. Multiple shapes including sample playback (you can use things [like these awesome single cycle waveforms](https://www.adventurekid.se/akrt/waveforms/adventure-kid-waveforms/) in it).

Does it alias? Yep. Is there zipper noise? nope. There is amplitude modulation via Osc 3, but no FM. There's no built in envelope ([but you can fix that](#fruity-envelope-controller)), or use the channel envelopes. No filters built-in other than the channel filters.

The wrapper does have envelopes, a filter, envelopes, arpeggiator etc... but that's inherent to many FLStudio plugins and I'm not considering it here. It's also a rather disconnected workflow that I would consider detrimental to the overall product. The wrapper channel envelopes don't have the fancy graph editor that makes many of the other plugins so nice either. (I'm not sure if 'wrapper channel' is the right term here, but it looks like the sampler channel applied to the synth)

If there was a high-quality option for this I'd love it.

It's been around a while, and many FL projects use it, but I can't really get behind it. The GUI is rather busy for how little it offers, and what little it offers it doesn't do particularly well.

**EDIT**: `To reduce CPU load the oscillators are anti-aliased during rendering only. This means the rendered tracks may sound better, but rendering will be slower.`

That's dumb. Bleh.

### Fruity DX10

{::nomarkdown}
	<img src="/assets/FLStudio/Instruments/FruityDX10.png" alt="Fruity DX10">
	<div class="image-caption">Fruity DX10</div>
{:/nomarkdown}

[FM Synthesis](https://en.wikipedia.org/wiki/Frequency_modulation_synthesis) is often considered a black art. DX10 is a simple synth that lets you do your voodoo.

The parameters on the panel are a bit confusing for FM synthesis. I assume that 'Modulation 1' and 'Modulation 2' operate on a carrier in 'Misc'?

You can get some basic FM-like bell and electric piano sounds out of it without much hassle. If you want those modern dynamic FM growls... best of luck. You can do it with a lot of effort, but why bother. Just use [Sytrus](#sytrus).

The manual claims that this should be a high quality, low aliasing synth, but in my testing it doesn't really seem to be at all... but I don't think that's bad. A lot of the classic FM sounds had quite a bit of aliasing and [IMD](https://en.wikipedia.org/wiki/Intermodulation). I think that's part of the character, and were this a pristine clean FM synth I don't think there'd be any use for it.

You can milk out a lot more use from this guy by using [Fruity Envelope Controller](#fruity-envelope-controller) and a [Layer](#layer) (or [Patcher](#patcher)). Modulate those knobs! Get some life in to it. It's more work than you may want to deal with, but it's worth it.

I feel that this is another fine example of a rather mediocre synth that's brought to 'good' status through its integration with FLStudio.

### GMS

{::nomarkdown}
	<img src="/assets/FLStudio/Instruments/GMS.png" alt="GMS">
	<div class="image-caption">GMS</div>
{:/nomarkdown}

This synth comes out of [Groove Machine](#groove-machine) (which I'm not reviewing).

You get 3 oscillators with a number of shapes, or you can use a sample. There's Osc 1 sync, FM, Ring Mod and 16 voice unison. There's a kinda wimpy filter with few options, 2 envelopes with adjustable destination and 2 LFOs. 10 effects with limited parameters.

The effects have an XY pad and an LFO. The effects are generally intended to be setup as momentary switches, but they can be turned on 'permanently'. There's a hidden EQ in there as well with simple low/low-mid/mid/mid-high/high controls.

It's not a powerhouse by any means. Most of the presets have that '90s digital' sound. I spent some time trying to figure out my own sounds (as I have for everything) and everything ended up with that '90s' sound. Kinda thin, some high end sheen, aliasing and an anemic low end.

It's also a bit unfortunate that it has such a non-integrated GUI. It just doesn't feel 'Fruity-Like'. Right clicking parameters doesn't even give you the menu for parameter modulation.

Meh. Pass.

### MiniSynth

{::nomarkdown}
	<img src="/assets/FLStudio/Instruments/MiniSynth.png" alt="MiniSynth">
	<div class="image-caption">MiniSynth</div>
{:/nomarkdown}

It's a mini synth! You get one oscillator (that aliases), A kinda weak filter with an X/Y pad, a filter envelope, an LFO with 3 targets and a few effects: delay, chorus, phaser and distortion.

Is it a great synth? Nope.

Is it a mediocre synth that's kinda fun? Kinda.

It's mostly there to allow you to move projects from [FLStudio Mobile](https://www.image-line.com/flstudiomobile/) to desktop. I really see no reason to use this except for that purpose.

### SimSynth

{::nomarkdown}
	<img src="/assets/FLStudio/Instruments/SimSynth.png" alt="SimSynth">
	<div class="image-caption">SimSynth</div>
{:/nomarkdown}

Similar to [3xOsc](#3xosc) in visual design, but more capable. You once again get 3 oscillators, but with filter envelope and LFO. There's an ADSR envelop with overall level and a filter envelope.

The filter has keytracking and an LFO along with its envelope. There's a bandpass and high pass in there to help tame things, along with giving you something fun to modulate.

SimSynth is _the_ simple synth in FL I think. It can get some warm sounds, some deep bass sounds, some plain pads and it has parameters that can be sensibly modulated.

It has quite the lineage too.

I dig it.

## Synth classic

### BooBass

{::nomarkdown}
	<img src="/assets/FLStudio/Instruments/BooBass.png" alt="BooBass">
	<div class="image-caption">BooBass</div>
{:/nomarkdown}

It's supposed to sound like an electric bass. It doesn't. It sounds like a brown 80's synth's version of one.

The mediocre sound is complemented by a 3 band EQ.

It's there, I guess. At least you don't _have_ to use it, unless you want to.

### FL Keys

{::nomarkdown}
	<img src="/assets/FLStudio/Instruments/FLKeys.png" alt="FL Keys">
	<div class="image-caption">FL Keys</div>
{:/nomarkdown}

The manual calls this guy a "realistic piano simulator". C'mon guys. Realistic? Really?

It's not realistic.

It isn't bad though (but not realistic).

There's only a handful of self-explanatory parameters, and I particularly like the 'Stretch' knob. If you aren't familiar with [stretch tuning](https://en.wikipedia.org/wiki/Stretched_tuning) then I will spare you now, just read that link. It's rather important for getting a proper bright sound out of various piano types.

There's a surprise organ in there too, which doesn't sound particularly awesome. The overdrive applied to the organ sounds terrible. That's the sort of sound that I'd expect them to get right with the overdrive at the very least, but no. It's bad. bad. bad.

I can imagine FL Keys being using for some electronic tracks to get that bright artificial piano sound that works well in dance mixes. You _might_ get away using the rhodes sound in a dense funky track.

If you're a keyboardist or pianist, I think you'd want better though.

### Layer

{::nomarkdown}
<img src="/assets/FLStudio/Instruments/Layer.png" alt="Layer">
<div class="image-caption">Layer</div>
{:/nomarkdown}

This isn't really an _instrument_ per se, but it's instead a way to send MIDI to multiple instruments at once. You select some instruments in your channel list then 'Set Children'. Now any MIDI going to the layer will be sent out to the children instruments.

This is not only useful for layering sounds, but also for using controllers like [Fruity Envelope Controller](#fruity-envelope-controller), since it requires MIDI input. You can layer that with the instrument that it's controlling so they both respond to the same MIDI. No need for 2 clips.

Then again... you _can_ just use it for layering.

It's a great thing. I wish more DAWs made layering this simple.

## Synth Special

### Autogun

{::nomarkdown}
	<img src="/assets/FLStudio/Instruments/Autogun.png" alt="Autogun">
	<div class="image-caption">Autogun</div>
{:/nomarkdown}

[Ogun](#ogun) and [Soundgoodizer]({% post_url 2018-07-18-30-days-with-FLStudio-20-Effects %}#soundgooderizer) in one. A ton of randomized presets.

It uses a ton of CPU, you can't "program" it, and sometimes you'll never find a decent preset no matter what you do.

Meh.

### BeepMap

{::nomarkdown}
	<img src="/assets/FLStudio/Instruments/BeepMap.png" alt="BeepMap">
	<div class="image-caption">BeepMap</div>
{:/nomarkdown}

Load an image in to it, and watch it go.... Boom.

From reading the manual, it seems like this would be a cool plugin, but it consistently crashes FLStudio for me.

[Read the manual](https://www.image-line.com/support/flstudio_online_manual/html/plugins/BeepMap.htm) to see what it does, since I can't really give my opinion or overview of it.

### Plucked!

{::nomarkdown}
	<img src="/assets/FLStudio/Instruments/Plucked.png" alt="Plucked!">
	<div class="image-caption">Plucked!</div>
{:/nomarkdown}

I bet you'll never guess what this guy does.

It's a simple plucked string synthesizer that uses [karplus synthesis (called karplus-b)](https://en.wikipedia.org/wiki/Karplus–Strong_string_synthesis). It's a fairly classic plucked string sound, especially for early 00s VST synths.

It's a useful sound, especially in electronic music. The normalization feature is nice to have as it gives the entire range the same decay if you wish.

For such a simple plugin it's unusually useful.

## Visual

### Fruity Dance

{::nomarkdown}
<video poster="/assets/FLStudio/Instruments/FruityDance.jpg" controls muted preload="none">
<source src="/assets/FLStudio/Instruments/FruityDance.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
<div class="video-caption">Fruity Dance!</div>
{:/nomarkdown}

FUN!

Little animated dancing person. You can change the dance, speed, position etc...

It's not exactly _useful_, but it is fun. A neat little distraction for when you are annoyed with your project and need to cheer up.

### Fruity Video Player

{::nomarkdown}
	<img src="/assets/FLStudio/Instruments/FruityVideoPlayer.png" alt="Fruity Video Player">
	<div class="image-caption">Fruity Video Player</div>
{:/nomarkdown}

FLStudio isn't a video editor by any means, but often musicians need to work to a film.

Fruity Video Player is a _very_ rudimentary video player. It supports A LOT of formats, but the support for syncing video is basic. You can sync playback and transport to playlist playback, but that's it.

Dealing with offsets, resyncing (you can set the play range, that's it), audio export, cues etc... just not there.

It's the bare minimum necessary.

## Other

### FL Studio Mobile

{::nomarkdown}
	<img src="/assets/FLStudio/Instruments/FLStudioMobile.png" alt="FL Studio Mobile">
	<div class="image-caption">FL Studio Mobile</div>
{:/nomarkdown}

It's a DAW inside of a DAW! [FLStudio Mobile](https://www.image-line.com/flstudiomobile/), the software that can run on your Android or iOS device, is also inside FLStudio as a plugin.

This would be an entirely separate review to cover its capabilities, however it is worth saying that this is really neat. You can get your mobile projects in to your DAW exactly as it was on your mobile device and vice-versa.

FLStudio is uncomplicated in its functionality and interface, largely streamlined for a mobile experience so I don't think it's worth attempting to even review as a desktop plugin. I do not have the mobile software to review, so I will leave it here.

## Controllers

### Fruity Envelope Controller

{::nomarkdown}
<video poster="/assets/FLStudio/EnvelopeController.jpg" controls muted preload="none">
<source src="/assets/FLStudio/EnvelopeController.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
<div class="video-caption">Envelope Controller</div>
{:/nomarkdown}

[Reviewed Here]({% post_url 2018-07-07-30-days-with-FLStudio-20-Modulation %}#envelope-controller)

Awesome.

### Fruity Keyboard Controller

{::nomarkdown}
<video autoplay loop muted class="gifvid">
<source src="/assets/FLStudio/KeyboardController.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
<div class="video-caption">Keyboard Controller</div>
{:/nomarkdown}

[Reviewed Here]({% post_url 2018-07-07-30-days-with-FLStudio-20-Modulation %}#keyboard-controller)

Super awesome.

# Producer Only

## Drum

### Slicex

{::nomarkdown}
	<img src="/assets/FLStudio/Instruments/Slicex.png" alt="Slicex">
	<div class="image-caption">Slicex</div>
{:/nomarkdown}

Slicex is **A LOT** of fun. The basic concept is similar to [Fruity Slicer](#fruity-slicer): you input a sample and it's sliced. You can then use the individual slices as their own entities.

Slicex takes it quite a bit further though:

* You have an [Edison-Like]({% post_url 2018-06-20-30-days-with-FLStudio-20-Audio %}#edison-editing) available for editing the full sample.
* Slice 'perfecting' (as the manual calls it) - declicking, stretching, automatic decay setting.
* Layering - Samples can be layered in a variety of ways (modulation mapped layering being the coolest, you can crossfade between layers by using the mod x/y parameters)
* 2 'decks' - You can have 2 sets of slices prepared to switch between
* Articulators - 8 envelope groups each with a filter section
  * Envelopes for: Pan, Volume, Cut, Res, Speed, Start
    * These values can be further influenced by: LFO, Velocity, Mod X/Y, or randomness.
  * Each sample can be assigned up to 4 articulators to affect the sample at a varying level of intensity
  * That awesome graph editor that's seen all over FLStudio is here too!
* Sample assignment - Samples can be mapped easily to only white keys/black keys, decks can be mapped in various ways (including auto layer)
* Reverse playback - MIDI Channels 15 and 16 will trigger samples played back in reverse, which means no messing with automation or permanently reversing slices.
* Mod X/Y - Remember when [discussing MIDI editing]({% post_url 2018-06-27-30-days-with-FLStudio-20-Piano-Roll-Advanced %}#slide-portamento-and-mod-xy), each note can have mod X/Y drawn as you wish. Mod X/Y figure in to the modulation of articulator parameters, so you can each access this functionality from the piano roll

If you're not a sample slicer, this may not sound super exciting, but it is. You can take a loop of any sort and mangle it into something unique that better represents your ideas.

Slicex lets you setup a lot of effects that can be dynamically controlled, so once your sample is sliced, edited, articulated and setup to your liking, you can treat it like its own instrument. There's more powerful slicing instruments out there in the wild, but many of them require that you spend your time using and adjusting to the interface. Slicex allows you to set it, and forget it. Create something, then use it.

This ongoing theme in a lot of plugins in FLStudio. They maybe aren't the most powerful or feature-packed, but they let you use a unified interface to create something and _use it_. Slicex is another great example of this.

## Synth classic

### Sytrus

{::nomarkdown}
	<img src="/assets/FLStudio/Instruments/Sytrus.png" alt="Sytrus">
	<div class="image-caption">Sytrus</div>
{:/nomarkdown}

Sytrus has had a lot of hype. The GUI looks simple. Just a main page, six oscillators, three filters, a bunch of FX, an FM and ring mod table and...

Wait. That's a lot of stuff. Jeez, that's a lot of stuff on a tiny GUI. Holy moly.

Let's start with the main page. You get the standard amp and filter envelopes. There's a unison section with control over a variety of parameters, which is extremely necessary given how complex the sounds you make will be. An X/Y pad makes an appearance alongside an EQ and quality sections.

The oscillators though... six of them. They don't offer you the standard waveform shapes. You get a harmonics editor, which makes this a form of additive synthesis. This means that you control each sine wave that [makes up the entire waveform](https://en.wikipedia.org/wiki/Fourier_transform). If you wanted a square wave you'd add a decreasing series of odd harmonics. A sawtooth would be a decreasing series of all harmonics. Etc...

The harmonics editor is awesome. You can analyze a single-cycle waveform ([lots available here](https://www.adventurekid.se/akrt/waveforms/adventure-kid-waveforms/) and [remove gibbs](https://en.wikipedia.org/wiki/Gibbs_phenomenon) which is a really cool feature. Harmonics can be locked to odd or even and you can draw lines as well as draw with click-drag.

Once you define the harmonic content, you then have meta-parameters that allow you to adjust which part of the generated waveform is used. Then you can adjust the 'shape' with a variety of parameters (shape, tension, skew, etc...). There's a plucked mode which slowly dampens the harmonics as the oscillator plays, a unique feature. There's also the ever important 'declick', which declicks the sound. Using the gibbs tools and declicking can help you utilize waveforms that otherwise may be too discontinuous to utilize. The bandlimit function helps make sure you don't get some crazy aliasing, or lets you keep it if you want a dirty sound.

Now you have an envelope and modulation sources of LFO, Mod X/Y, Velocity, random and unison mapping. These control volume, pan, modulation influence, pitch, phase offset and damping.

Then we dive in to the 3 filters. 13 filter types with up to 6-pole slopes. There's even a phaser hidden in there.

The usual filter envelope and cutoff/resonance controls are present, but there's a surprise here. You can feed the output of filters to the subsequent filter to create a monstrous devil of a sound. The filters have a bi/unipolar shaper for adding some distortion flavour.

The filters have envelopes and modulation sources similar to the oscillators, with the addition of the waveshaper controls.

There's a basic FX section with chorus, 3 delays and some reverb. The reverb sounds pretty awful, but the delays can make up for it.

Now you take all of this, which already sounds pretty awesome and you throw in a modulation matrix. Each oscillator can frequency modulate _and/or_ ring modulate any other one with a variable amount. This is also where you adjust the filter, pan, fx sends and mix the oscillators outputs.

FM you say? What about the [classic Yamaha DX7](https://en.wikipedia.org/wiki/Yamaha_DX7)? Sytrus can take patches from it and emulate them. I tried it with some DX7 sysex, and it's not perfect but it seems to work OK. Sytrus sounds _far_ cleaner than the original DX7.

The [Sytrus Manual](https://www.image-line.com/support/flstudio_online_manual/html/plugins/Sytrus.htm) is a work of art. Not only does it explain the product, it explains the concepts behind FM synthesis well, along with give some simple examples to get you started.

Sytrus is a work of art. I've never seen this much power accessible in such a small package. It sounds great, it's powerful, yet it can be simple. Let's not forget of course that many of these parameters are further capable [to be modulated inside FLStudio]({% post_url 2018-07-07-30-days-with-FLStudio-20-Modulation %}).

Amazing product.

# Signature Only

## Synth classic

### Harmless

{::nomarkdown}
	<img src="/assets/FLStudio/Instruments/Harmless.png" alt="Harmless">
	<div class="image-caption">Harmless</div>
{:/nomarkdown}

Harmless is a mini version of [Harmor](#harmor).

Harmless gives you a harmonic synthesis engine, similar to [Sytrus's oscillators](#sytrus), then throws a filter on them. You have most of the basic controls that you'd expect for things but...

The oscillator has a variable 'pluck' filter that dampens the harmonics as the sound progresses. There's a light tremolo available on the amplifier envelope to liven up the sound a bit. There's a vibrato and this 'grit' function that detunes some harmonics to make your sound a bit more sour.

The filter stands out with a variety of resonance types _and_ it can self-oscillate to itself become an oscillator. The self-oscillation is controllable with key tracking (filter cutoff follows the key played) and offset controls. There's this cool 'motion.t' feature that makes the self-oscillation happen only when you're tweaking the cutoff. The motion.t feature can turn a partially dynamic sound in to a screeching organic lead.

A phaser once again appears and there's up to 9 unison voices.

'Harmonizer' is a cool and unique effect. Rather than harmonizing using each note played, it harmonizes using the harmonics of the additive oscillator. This creates a thicker and often brighter sound. The amount can be mapped to velocity so that your parts respond in a natural manner. The harder you play, the more complex the sound becomes.

There's a 4 part effects section with reverb, delay, compression and chorus. The controls are really limited on the effects, and neither the chorus or reverb are particularly inspiring. With the additive engine, I think that Harmless would benefit from a more capable chorus and a denser reverb. It begs for those types of effects that help glue the sound together.

Harmless is fun, but I've found it difficult to program. Sytrus is even _more_ difficult to program but with Sytrus I always felt like I was making something usable somewhere. Harmless seems to thin sounding patches with ease, but I struggled to make thicker sounds. There are some great thick and big sounds in the presets, so it is certainly capable of it, but I was not.

Harmless is a gateway drug to [Harmor](#harmor) though. Once you experience the additive engine and how cool the filter can be, you'll yearn for more power... [and you can get it](#harmor)

## Sampler

### DirectWave

{::nomarkdown}
	<img src="/assets/FLStudio/Instruments/DirectWave.png" alt="DirectWave">
	<div class="image-caption">DirectWave</div>
{:/nomarkdown}

Directwave is FLStudio's super sampler. Multiple sample layers, velocity layers, and support for a variety of sample library formats (giga, kontakt 2, akai, exs24, soundfounds, sfz among others).

Going through everything that DirectWave is capable of would take me way too long. I'm going to just address some of the features that I liked and disliked.

The sample editor is fairly simple and it's "per sample". Trying to apply transformations to multiple samples at once doesn't appear to be easily possible. There are some interesting functions like spectral paste. It's mostly like a simple Edison.

Each 'zone' has 3 envelopes, 2 LFOs, 2 filters, some interesting effects (like a decimator and ringmod) along with a modulation matrix. You can think of a 'zone' as a samples influence area. Samples are mapped in 2d along the pitch x velocity axis, and that rectange makes up a zone. So you have a variety of things you can do to a zone (or sample).

There is no scripting that I can see, which means that dynamic transformations and articulations aren't easily possible. 

You know what... let's be real here.

If you have the capability to create a large multi-sampled library you very likely won't be using directwave. You'll use [Kontakt](https://www.native-instruments.com/en/products/komplete/samplers/kontakt-5/) or _maybe_ [Halion](https://www.steinberg.net/en/products/vst/halion_und_halion_sonic/halion.html) or [Falcon](https://www.uvi.net/falcon.html) or [Hise](http://www.hise.audio) or..

You get the idea.

DirectWave is an accomplishment, but it's still fighting an uphill battle. I looked for DirectWave libraries and I found nothing notable. There's some neat EXS24 and old Kontakt libraries that it can load, which is nice. That's about all it's good for.

I'm pretty sure most folks will just want Kontakt.

**HOWEVER** There is a big redeeming feature. The channel sampler.

Directwave can automatically sample an instrument. You can sample native and VST instruments automatically and then utilize the features of DirectWave to further modify it. You can even use this to sample hardware, but you are in for a joy by having to adjust the start offsets yourself to adjust for the I/O delay.

For sampling software instruments it's a really cool feature. 

# All Plugins Bundle Only

## Drum

### Drumaxx

{::nomarkdown}
	<img src="/assets/FLStudio/Instruments/Drumaxx.png" alt="Drumaxx">
	<div class="image-caption">Drumaxx</div>
{:/nomarkdown}

16 drums. Physically modeled. It's very similar to [Drumpad](#drumpad), but you get 16 of them with pads ready for you.

You get a sequencer with Drumaxx that lets you step sequence each pad as you want similar to the tr-x0x type workflow, but with velocity sliders next to each button. The sequencer has multiple patterns and the ability to add a moderate swing. Not much more to it.

It does have multiple outputs to allow output for each pad.

If you read the [DrumPad](#drumpad) review, then you understand this guy.

### Ogun

{::nomarkdown}
	<img src="/assets/FLStudio/Instruments/Ogun.png" alt="Ogun">
	<div class="image-caption">Ogun</div>
{:/nomarkdown}

Ogun is a weirdo. It's an additive synth engine that gives you controls over the timbre rather than the harmonics. You select the mapping, the number of harmonics and the 'fullness' then work from there with envelopes, LFO, mod X/Y, key tracking and velocity mapping.

There's up to 9 unison voices that can be spread via volume, pan, pitch and phase.

Chorus, Delay and (yet another anemic) Reverb are in the effects section.

It sounds simple. It _is_ simple. But it can sound crazy. It does metallic type sounds best, but I've been able to coax out some lush pads. Cymbals and bells are easy to synthesize and sound pretty cool. With the envelope control you can make them sound dynamic and organic when performed.

I wouldn't buy Ogun outright, because the types of sounds that it makes are too specialized, but as an included product it'd be cool.

## Synth Classic

### PoiZone

{::nomarkdown}
	<img src="/assets/FLStudio/Instruments/Poizone.png" alt="PoiZone">
	<div class="image-caption">PoiZone</div>
{:/nomarkdown}

Ok, I'm not going through PoiZone much. It's your basic subtractive synthesizer. 2 oscillators, a filter, an arpeggiator, assignable envelope, amp envelope.

It doesn't have nice integration with FL. It doesn't look like an FL plugin. It's not retina/HiDPI capable. It doesn't sound that great.

It's really not that much better than any one of a plethora of free VST synths out there on the market.

### Sawer

{::nomarkdown}
	<img src="/assets/FLStudio/Instruments/Sawer.png" alt="Sawer">
	<div class="image-caption">Sawer</div>
{:/nomarkdown}

I want to talk down about Sawer, like I did about [PoiZone](#poizone), but I can't. Sawer has endeared itself to me.

It once again doesn't have nice FL integration. The GUI is ugly on retina/HiDPI screens. It's a very simple subtractive design.

But out of _all_ of the FLStudio native products, I ended up using Sawer more than anything else. I just found it to be the most straightforward and vanilla product. It sounds good and doesn't get grainy/aliasy in the high end. The unison sounds clean. There's 4 hidden effects beyond the keyboard along with a modulation matrix.

It's a plain synthesizer with no big bells and whistles. It sounds alright and it has a classic vibe that I think will make most musicians feel at home.

It made me feel at home.

### Toxic Biohazard

{::nomarkdown}
	<img src="/assets/FLStudio/Instruments/ToxicBiohazard.png" alt="Toxic Biohazard">
	<div class="image-caption">Toxic Biohazard</div>
{:/nomarkdown}

Toxic Biohazard is the embodiment of early 00s VST synthesizers. The layout, the architecture, the tiny GUI with knobs arranged in curved patterns.

You get 6 oscillators with a variety of clean waveforms, their own envelope and phase offset.

The 6 oscillators can frequency modulate each other along with being modulated by 2 LFOs. (Is this [sounding familiar?](#sytrus)). There's a selection of 6 effects that can go in to one of 2 effects slotes.

That's actually about it. It's like a sort of [Sytrus Jr.](#sytrus), except without the cool filters, additive oscillators, advanced envelopes and much more.

It's 2018, not 2001. Toxic Biohazard has been surpassed.

### Transistor Bass

{::nomarkdown}
	<img src="/assets/FLStudio/Instruments/TransistorBass.png" alt="Transistor Bass">
	<div class="image-caption">Transistor Bass</div>
{:/nomarkdown}

[Roland TB303](https://en.wikipedia.org/wiki/Roland_TB-303). It's legendary, and it's an absolute necessity for certain types of electronic music.

Transistor Bass offers you a nice tb-303 sound with a familiar interface and some 'mods'. There's an additional distortion circuit that sounds pretty cool, a delay and a Reverb that's not totally terrible.

It can be sequenced via MIDI or using the internal sequencer. The internal sequencer supports most of the functions that you'd expect from a tb-303 like sequencer. Slides, gates and accents are there, and the slides sound 'right'.

I somewhat expected there to be scale support in the sequencer, but there isn't. There is a main bank of 128 patterns you can switch between though, which helps live sequencing of patterns work more smoothly.

I can't comment on the authenticity of the tb-303 sound since I'm not an [acid](https://en.wikipedia.org/wiki/Acid_house) lover. The squelch and slide sounds good to me though. It's also easy to operate without any added complexity.

## Synth special

### Harmor

{::nomarkdown}
	<img src="/assets/FLStudio/Instruments/Harmor.png" alt="Harmor">
	<div class="image-caption">Harmor</div>
{:/nomarkdown}

Gosh. Goodness Gracious. Bless your soul.

Harmor is a **MONSTER** of a synth. It's an additive synth that takes a somewhat unique approach to how you control it. 

Like [Harmless](#harmless) you don't control the harmonics directly, but instead choose a timbre and make modifications to that. There's 2 'timbres' (oscillator engines) that can use basic shapes or load your own waveform. Their _harmonics_ can be blended in interesting ways, or blended using a standard amplitude mix.

The tremolo and harmonizer sections from [Harmless](#harmless) return, but with more parameters. The harmonizer in particular allows you to control the offset and multiplier of the harmonization. That extra control allows for more subtle _and_ more extreme sounds. The phaser and pluck sections are there as well.

There's a 'prism' control that makes the harmonics shifted from the fundamental and general makes your sound disgusting and obnoxious. Very slight prism use can be pleasant, and sometimes you want that incredible dirty and obnoxious inharmonicity... Harmor can provide it.

There's the 9 voice unison with extra controls and amplitude envelopes that you probably expect.

A pitch section exists that allows you to add vibrato, legato and portamento along with global pitch shifting.

There's 2 awesome filters that are similar to [Harmless's filter](#harmless). The filters can be run in parallel, serial and parallel serial modes for some outrageous filter sounds.

There's a huge variety of 'articulators'. That awesome graph editor is available to create modulations of a wide variety of parameters, plus there's LFO, unison, keyboard tracking, velocity, mod x/y, random and 'mod X speed'

In the advanced section you can change the order of operations on your additive module. The number of partials and quality is controllable here as well

**TAKE ALL OF THIS AND DOUBLE IT**. There's 2 of these engines available that can be mixed as desired.

There's a global FX section with distortion, compression, reverb, delay and chorus. The distortion sounds pretty cool and has multiple modes.

Ok now all of _that_. You can reorder. The FX order is fully adjustable in the ADV section too.

Now... It's time. The image re/synthesis engine.

This is the part of Harmor that everyone loves. You can import images and it will use the image data to control the additive engine. The image is read from left to right and you can loop/crossfade the playback which gives you a dynamic and evolving sound source.

The parameters of how the image is read are there. You can change the smoothness, speed, sharpness, level, scale etc.. There's formant shifting which lets you scale musical-like sounds without making them sound unnatural (especially vocals).

Images can by copy/pasted and edited in your favorite image editor as you wish. Audio files can be analyzed and then treated like images and worked the same way.

Images can be loaded in stereo mode to give you mid and side synthesis. Massive evolving textures can be created in seconds with this feature. You can quickly envelope your entire soundscape with the right images.

The manual is complete, so go read it. Harmor is just awesome. It's a monsterous beast of a synthesizer that lets you work with audio in new ways. Harmor is clearly FLStudio's 'killer app'.

### Morphine

{::nomarkdown}
	<img src="/assets/FLStudio/Instruments/Morphine.png" alt="Morphine">
	<div class="image-caption">Morphine</div>
{:/nomarkdown}

Another additive synthesizer. You get 4 additive engines that have full harmonic control including panning per harmonic, velocity sensitivity and detuning.

The generated sound from the harmonic engine is controlled by 'breakpoints'. That is a graph that controls the temporal expression of the sound.

There's a full modulation page that lets you map the 4 internal envelopes to parameters, or any MIDI CC. It's a bit unfortunate given [how poorly FLStudio handles MIDI CC]({% post_url 2018-06-27-30-days-with-FLStudio-20-Piano-Roll-Advanced %}#event-editor).

There's a resynthesis engine and a synthesis engine, so you can take audio samples and have those extracted out to the harmonic synthesis engine and mess with them as you wish.

There's a 4 point X/Y pad that lets you morph between the 4 generators manually, or using a set of envelopes to automatically morph between the generators over time.

3 basic effects and a graphic equalizer make an appearance. The EQ strangely only goes up to 8khz, which I dislike. A lot of patches need some high end surgery to become less harsh since there's a lack of a powerful low-pass in Morphine.

Overall Morphine is a _technically_ more powerful (or more user controllable) engine than [Harmor](#harmor), but its integration with FLStudio is almost non-existent. It's also more difficult to use to get a specific sound that you want. I think that most of the time you need to spend your effort based on resynthesizing an existing sound to get something palletable.

The breakpoint editors are vastly inferior to FLStudio's graph editors. In fact, all of Morphine's GUI feels inferior. The overall experience seems clunky.

I can appreciate the _capability_ of Morphine, and it's one of my favorite synths from Image Line (surprised?), but I also have to accept that it doesn't present the most usable interface, nor does it offer the ease of use necessary for most musicians. As a tinkerer, I find it a lot of fun. As a musician, I think it could benefit from taking a page or two from other FLStudio products in their layout and GUI widgets.

### Sakura

{::nomarkdown}
	<img src="/assets/FLStudio/Instruments/Sakura.png" alt="Sakura">
	<div class="image-caption">Sakura</div>
{:/nomarkdown}

Sakura is cool sounding.

You basically get two strings and you control how it is activated, where it is activated, how they interact and what they're attached to.

The labeling of the parameters on the GUI match what you'd expect them to do. There's not much hidden here.

Now, I'm going to complain about the GUI. Once again it lacks that FLStudio-like integration. The sliders take over your cursor and sensitivity, which I hate. It looks terrible on retina/HiDPI screens. The positioning of some elements seems strange with asymmetrical spacing or clutter next to wide open space.

Soundwise it seems nice. The plucked sounds in particular are nice, and it can do some cool explosion sounds. I think that as a product this is largely interesting to a developer rather than a user though. A user can get better results quicker with a sample library, which can be very cheap these days. The method of synthesis is technically interesting, but as a matter of creating realistic sounds it's not remarkable. For creating unique sounds it's not particularly spectacular either.

# Oompa Loompas

## Groove Machine

32-bit only. Will not be reviewed.

Pity, because it's pretty cool.

## Fruity Soundfont Player

32-bit only. Will not be reviewed.

## Wave Traveller

32-bit only. Will not be reviewed.

## FL Slayer

32-bit only. Will not be reviewed.

## Dashboard

32-bit only. Will not be reviewed.

## Wasp

32-bit only. Will not be reviewed.

## Wasp XT

32-bit only. Will not be reviewed.

# Conclusion

Spoiler - Fruity rating: <admrb rating="38"> </admrb>

Spoiler - Producer rating: <admrb rating="60"> </admrb>

Spoiler - Signature rating: <admrb rating="65"> </admrb>

Spoiler - All plugins rating: <admrb rating="83"> </admrb>

I'm going to apologize to Maxx Claster to start. I went back through this and realized that I was consistently critical of products that he created. This was not intentional. Perhaps there's a design philosophy that I don't agree with that he subscribes to, or some incompatibility in musical tastes.

Many of the synths that I criticized for not being 'FLStudio-like' seem to have been created for sale as VST/AU products, however I do expect that FLStudio integration when used natively. Just that right-click menu alone is incredibly valuable for workflow.

The base selection of synths isn't that fantastic. It's about as basic as you can expect, and I think that most DAWs out there offer better. The [Native Modulation system]({% post_url 2018-07-07-30-days-with-FLStudio-20-Modulation %}) does bump this up a lot, so I think a rating of 38 is a bit unfair. With modulation included it's more like a ~55.

Sytrus and Slicex are worth the price jump to Producer alone (along with the other features you get). Sytrus is a powerful little beast. Slicex is a lot of fun, even if you're not a beat slicer.

Harmless and Directwave are a bit disappointing for their inclusion in Signature. They aren't _bad_ products, but give what you get for the jump from Fruit->Producer, the jump from Producer->Signature seems disappointing. DirectWave _could_ be an awesome inclusion except that there's relatively few high quality libraries available for it these days. You're left to your own devices to create a sampled instrument yourself (which you can do!) or to use older libraries for third-party samplers.

The all plugins bundle is fantastic. It provides basically everything you need to make synthesis-based music.

Then again, All Plugins is $700 which is _a lot_ of money. You can get quite a few third-party synths for that price and have exactly what you want, and nothing more. If Image-Line updated some of the plugins like [Sawer](#sawer), [Morphine](#morphine) and [Toxic Biohazard](#toxic-biohazard) then it'd be a contender. Their current dated look and feel do make the value seem less awesome though.

Just considering capability though, I think that it's a great offering. 

# Support Me!

This post took 32 hours to research, screenshot, write and edit. If you appreciate the information presented then <a href="/DonateNow/">please consider joining patreon or donating!</a>

<a href="https://www.patreon.com/bePatron?u=7465992"> <img class="patreon-button" src="/assets/Patreon.png" alt="Be a Patreon!"></a>

<form style="text-align: center;" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick">
<input type="hidden" name="hosted_button_id" value="BR247JAZBTUJJ">
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
</form>

**If you have any questions or comments, please comment below! I read every comment and respond to most.** No registration is necessary to comment, so don't be shy.


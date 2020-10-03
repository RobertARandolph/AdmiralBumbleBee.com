---
layout: ['post', 'reader']
title: Blue Cat Axiom Plugin Review
comments: true
date:   2018-04-15_12:03:37 
categories: music
tags: ['Review', 'Guitar']
image: /assets/BlueCat/Axiom/Axiom.png
description: A review of Blue Cat's Axiom multi-effects and Guitar amp system.
---

{::nomarkdown}
<img src="/assets/BlueCat/Axiom/Axiom.png" alt="Axiom">
<div class="image-caption">Axiom</div>
{:/nomarkdown}

Blue Cat is delivering their new product 'Axiom' soon and I'm here having a blast with it. This will be the first solo plugin review I'm doing, despite having reviewed 100s of plugins already (in DAW reviews).

Axiom is mainly targeted as a guitar system, however it's also an great multi-effects solution for any sort of sound.

I was provided an early NFR (not for resale) review copy.

As of this writing... this is the first review I know of about Axiom. It's currently not released yet (and I do have permission to release this).

Let's get on with the review!

**UPDATED** Updated for Axiom 1.1.

<!--more-->



# Contents
{:.no_toc}
* TOC
{:toc}

# Axiom in General

{::nomarkdown}
<img src="/assets/BlueCat/Axiom/AxiomGeneral.png" alt="Axiom In General">
<div class="image-caption">Axiom...</div>
{:/nomarkdown}

So _what is Axiom_? It's a 2 channel multi-effects plugin. [Late Replies](https://www.bluecataudio.com/Products/Product_LateReplies/) is included and [Destructor](https://www.bluecataudio.com/Products/Product_Destructor/) is included.

The primary marketing focus appears to be guitar/bass amp simulation, which is understandable given that [Destructor](https://www.bluecataudio.com/Products/Product_Destructor/) is smack dab in the center of the signal path. It can be bypassed though.

Axiom comes with 38 effects builtin besides Late Replies and Destructor. There's 23 effects slots available, however it's practically unlimited since _each effect slot can host Axiom_. So each of the effects slots can host an Axiom with 23 more effects slots which can host [Late Replies](#late-replies) with another 48 potential effects slots... and down the rabbit hole we go!

**Even cooler still**: Axiom can host VST, AU and VST3 plugins. So your entire plugin collection can be used in the signal path. Once you start loading up things like [Patchwork](https://www.bluecataudio.com/Products/Product_PatchWork/), [Metaplugin](https://ddmf.eu/metaplugin-chainer-vst-au-rtas-aax-wrapper/) or [Mux](http://www.mutools.com/mux-product.html) your brain will melt. You'll also probably use up all of your CPU and ram... like I have multiple times now. (Axiom isn't CPU hungry or a ram hog, but it's easy to load up dozens of effects in it and quite frankly it's fun to make your computer cry.)

The main window is resizable from 70% to 200%, and it can be made transparent. The transparency is surprisingly useful, and it's the only plugin that I've encountered where I wanted to use such a feature. When you have so many open effects windows it's nice to know what's potentially behind Axiom.

## MIDI Mapping

{::nomarkdown}
<img src="/assets/BlueCat/Axiom/MIDIMapping.png" alt="MIDI Mapping">
<div class="image-caption">MIDI Mapping</div>
{:/nomarkdown}

Axiom has excellent MIDI CC mapping support. Nearly every single control can be mapped to MIDI CC values on any incoming MIDI channel.

There's multiple scaling values available for each control as well. This allows you to setup how the control responds to incoming messages. Perhaps you want a lot of control at the bottom of the range or you want to quickly sweep up to max value. You can do that easily.

The image above shows the global panel, but you can access per-control mappings by clicking the gear icon in the upper left and then clicking the down arrow near the controller and selecting "Control Settings...".

Controls can be inverted by switching the 'Control Min' and 'Control Max' values.

There's 44 slots available for mapping to loaded plugins. The manual explains the procedure, but basically click on the plugin name, select the control from 'Params Map' and then a new control appears at the bottom of your screen. (You must have "Show Assigned Controls" on. It's the 3 knobs icon at the top left). You can then assign MIDI directly to the controls at the bottom.

Axiom has 16 internal busses. Each bus has 16 channels. When routing MIDI gets complex with multiple depths of plugins or complex rigs, then you can access these internal busses to aid you in your routing endeavors.

I am a bit disappointed that there does not seem to be support for assigning MIDI Notes, NRPN or 14-bit CC. Depending on your DAW you may be able to manipulate incoming data to CC. I can do this easily in Reaper so I'm not bothered by it too much.

It would be nice if Axiom supported 14-bit MIDI messages or NRPN. These allow more control resolution than the typical 7-bit CC. The concern is minimized by the fact that all of Axiom's controls are de-zippered properly and you won't hear any obvious stairstepping when modulating controls.

## Routing

{::nomarkdown}
<img src="/assets/BlueCat/Axiom/AxiomRoute.png" alt="Axiom Routing">
<div class="image-caption">Axiom Routing</div>
{:/nomarkdown}

First I want you to marvel at my _amazing_ vector graphics skills. Take a moment and bask in the glory of my hand drawn garbage. BASK I TELL YOU! Let yourself be slathered in the torrent of skill that I am unleashing on you.

I screwed up that routing graph at least 3 times. I hope it's right now. This is Axiom's routing I'm pretty sure. It's not shown in the manual at all so I'm just putting this here for you. I hope that this is self-explanatory.

Amazingly, Axiom supports sidechaining. Internal plugin's inputs and outputs are exposed externally, so if you want to put a compressor plugin somewhere and accept an external sidechain signal... you can do that!

There's also the Tools section 

## Tuner

Axiom has a builtin tuner. It's pretty accurate but it's very simple. There's no display for how many cents you're off directly. No support for microtuning or the like.

Each vertical slot appears to be about 0.5cents. 2 vertical notches seems to be 1 cent.

It works though, and as long as everyone in the band is tuning to that tuner you'll be fine.

That said, it doesn't particularly agree with a [Peterson 490](https://www.petersontuners.com/products/autostrobe490/), [Polytune](https://www.tcelectronic.com/Categories/Tcelectronic/Guitar/Tuners/POLYTUNE-2/p/P0CZ4) or [Boss Tu-2](https://www.boss.info/us/products/tu-2/).

Axiom seems to settle on the pitch very slightly flatter. The initial pick onset matches up, but as the plucked note settles then Axiom favours showing the pitch ~half a cent flatter and the pitch decays faster than other tuners I tried. Perhaps Axiom is more accurate than these other products? Maybe it's simply the averaging. It's something to be aware of though.

When recording in the studio, **all instruments should be tuned to the same tuner** anyways. This is a very simple rule to follow and it makes for audibly cleaner and tighter recordings. Variances in tuning averaging, dying batteries, tuning displays etc... can add up to everyone being 'in-tune', but slightly off from each other.

## Section locking and loading

{::nomarkdown}
<img src="/assets/BlueCat/Axiom/SectionLoad.png" alt="Section Loading">
<div class="image-caption">Loading various sections</div>
{:/nomarkdown}

Each section of Axiom can have presets loaded and saved. If you have a specific input set you like, you can save that and load only that. The same goes for each FX section, your Destructor instances, each A/B channel as a whole and the output section.

Each section can be locked as well. Do you have a fantastic input chain you love, and you want to browse presets with that intact? Just click the lock icon in the upper left of that section and browse. It's a great feature.

These 2 features make for a more pleasant experience than simple preset browsing.

Don't forget as well that each FX slot's plugins have their own Presets.

# Destructor

{::nomarkdown}
<img src="/assets/BlueCat/Axiom/Destructor.png" alt="Destructor">
<div class="image-caption">Destructor</div>
{:/nomarkdown}

[Destructor](https://www.bluecataudio.com/Products/Product_Destructor/) is a monster distortion/saturation/guitar amp sim. By itself it could take up an entire review space the size of this review. In fact... I have a draft of a review that I began writing for Destructor months ago and I gave up because I wrote so much about it. I doubt I'll ever finish it.

Destructor has 4 stages: Gate/Comp, Preamp, Destruction, Post-Filter. All except gate/comp are [lock and loadable](#section-locking-and-loading) like Axiom. The Gate/Comp is lockable but not loadable.

I'll cover 4 of these independently, however the depth that I'll cover will be limited. There's a lot here, and Destructor alone is a fantastic product on its own.

## Gate/Comp

{::nomarkdown}
<img src="/assets/BlueCat/Axiom/GateComp.png" alt="Gate/Comp">
<div class="image-caption">Gate/Comp</div>
{:/nomarkdown}

On the way in the signal reaches a gate. Gates are important on guitar sims since many guitars are a tad bit noisy. (some guitars, looking at you vintage single-coil strat, are extremely noisy).

The gate has the normal controls you'd expect, except with a fairly unusual ratio control. The ratio controls how much the signal is reduced when the signal is below the threshold. Careful use of the ratio and release time is the key to natural sounding gating. 

I'm not a big fan of Destructor's gate. It lacks a hold control, the capability for a tiny-lookahead (to preserve transients) and the use of a ratio instead of a range control is unnatural to use for me. I've been using Destructor for months and I've put effort in to getting the gate to work for me, but it simply doesn't. Nearly every other amp sim on the market has a more natural sounding gate. Even [ReaGate](https://www.reaper.fm/reaplugs/) gets better results for me.

The compressor is a standard affair. I like the control scaling in particular. I've harped on this before, but having a control where only 25% of it is normal usable values drives me insane. Destructor's compressor is easier to use than most due to the excellent value scaling.

I've found that gentle use of the compressor is essential for thick/heavy sounds. Lopping off the tops a bit and bringing up a bit of the tail of the sound allows the amp section to dig in to the _whole_ sound.

## Preamp

{::nomarkdown}
<img src="/assets/BlueCat/Axiom/DPreamp.png" alt="Preamp">
<div class="image-caption">Preamp Filter</div>
{:/nomarkdown}

The preamp stage is an 8 band filter. You get low/high pass, high/low shelf, 3 peaking bands and a _comb filter_. There's 3 analysis modes including the fantastic spectrogram (I love spectrograms).

Use of the pre-amp filter allows you to adjust the signal going in to [the destruction](#destruction) stage. So you can emphasize some frequencies and de-emphasize others.

One of the neater functions is [the ability to load reference curves](https://www.bluecataudio.com/Tutorials/Tutorial_EQ_Matching_Reaper/) that you've measured with [FreqAnalyst](https://www.bluecataudio.com/Products/Product_FreqAnalystMulti/). So you can measure software _or hardware_ (using a hardware insert plugin). Then you load that curve in to the preamp stage, and you can match it by hand.

The comb filter is an awesome addition. Once you begin measuring other products, or if you have any experience repairing amplifiers you'll know how often there's a comb filter like response in various stages of the design.

## Destruction

{::nomarkdown}
<img src="/assets/BlueCat/Axiom/Destruction.png" alt="Destruction">
<div class="image-caption">Destruction, the core</div>
{:/nomarkdown}

The core of Destructor. A variable dynamic wave shaper. I'm not going to go in to depth about this, as last time I attempted that I spent 4 days _just writing about it_.

A waveshaper is a device that maps samples via a graph. So a 45° positive slope indicates a 1:1 mapping. Nothing happens. The X axis is the incoming signal and the Y axis is what it's mapped to on output. As you can imagine, certain settings will allow for distorting/clipping of the signal.

The waveshaper can affect both negative and positive values the same, or each 'side' of the signal can be acted on separately. Affecting positive and negative differently is what the asymmetric mode does. Generally tube amps tend to have slight asymmetric distortion, but there's a fair number of solid-state devices used in guitar rigs that have asymmetric response as well.

The real beauty in this device is that the waveshaping is dynamic. Imagine that you have a compressor, but instead of controlling the volume of a signal, it's controlling the waveshaper. This allows the waveshaper to respond to input dynamics and vary the distortion accordingly. There's a variety of controls available for the dynamic portion of the waveshaper. It acts very similarly to a compressor.

There's functions for smoothing the waveshaper, adding additional asymmetric processing (asymmetric rectification) and bitcrushing.

Since saturation always causes harmonic creation (frequencies that are multiples of the input frequencies), it's possible to introduce aliasing. The Destruction device has oversampling up to 4x that does a decent job of eliminating aliasing.

One of my absolute favorite features of the destruction mode is the phase shift controls. [Read about phase in a post I wrote before]({% post_url 2018-02-16-Fixing-Phase-what-why-and-how %}). As phase rotation can change the peaks and troughs in the signal, it can affect the response of the waveshaper and the dynamic portion of the waveshaper. It is a subtle effect sometimes, but in a mix it can help the guitar stand out more or sit further back in the mix. It can also be useful when mixing the effected and original signal. If you don't understand why... just assume it's magic (and read that post!)

When you really crank the phase shift, you'll get some smearing and potentially fun auto-filter type sounds.

## Post-Filter

{::nomarkdown}
<img src="/assets/BlueCat/Axiom/DPostFilter.png" alt="Post Filter">
<div class="image-caption">Post filter</div>
{:/nomarkdown}

The Post-Filter is basically the same as the [Preamp](#preamp). There's 2 considerations here.

* Post-emphasis filtering - After using the preamp to control how the [Destruction](#destruction) stage responds to the spectrum, it's often useful to de-emphasize that output. Perhaps you wanted to really distort around 500hz so you boosted it to the sky. After the destruction stage you probably want to cut 500hz equally so that the sound is relatively balanced.

* Cabinet simulation - Using Destructor as a guitar amp sim implies that you generally want some sort of speaker and cabinet simulation. Destructor does not load impulse responses of cabinets like other amp sims do. It relies instead on the post-filter EQ to simulate these responses. The net result can be very similar. (**UPDATE**: [This has been improved greatly!]({% post_url 2018-10-24-Blue-Cat-Axiom-Destructor-Update %}))

	Destructor comes with a number of post-filter presets that help you model various common cabinets.
	
The downfall here is that I don't know what the spectral response of my favorite cabinets and speakers is. I do know how to load an impulse of them though.

~~If you have an idea of what you want, then you are either forced to spend a lot of time figuring out how to emulate it in the post-filter, or you will have to load your own IR loader inside Axiom.~~ (**UPDATE**: [This has been improved greatly!]({% post_url 2018-10-24-Blue-Cat-Axiom-Destructor-Update %})) ~~Luckily Axiom lets you do this without much issue.~~
	
## Destructor Presets

{::nomarkdown}
<img src="/assets/BlueCat/Axiom/DestructorPresets.png" alt="Presets">
<div class="image-caption">Presets</div>
{:/nomarkdown}

Destructor comes with a lot of presets. I'm not about to count them... There's 100s.

And you know what? I dislike damn near every single one. I have 3 reasons for this:

* Descriptive names - The presets all have descriptive names rather than referential names. You have to find 'Black Twang Crunch' instead of 'Blackface' or 'Hi Gain' instead of... uh, no clue.
  
  I usually know what type of amp I want. Having to browse through descriptive namings of someone's idea of some amp doesn't sit well with me. Then again, many amp sims don't exactly nail the sound of the amp they are simulating so it's never a sure thing. I rather work with referential names.
  
* They are very forward sounding - Nearly all of the sounds are very forward and present. They sound like shoving your face in front of a guitar amp at stage volume (yes, I unfortunately know what this sounds like... many times). That feeling of a microphone in front of an amp in a room isn't there in most of the presets. _You can tune that in yourself_, but most of the presets don't have that feel. I find it difficult to fit any of the presets in to a mix without sounding unnatural.

* I don't like them. I just don't like the sound of most of the presets. Nearly all of them require some tuning, which is generally expected. With other amp sims I can often get away with grabbing a '60s Plexi' preset and just get on with the session. I have never experienced that with Destructor.

That doesn't reflect on what's possible with Destructor, but if you're the type of person that wants to grab a preset and go, then please try the demo first. Maybe you disagree with me and maybe you don't.

## Destructor Easy Mode

{::nomarkdown}
<img src="/assets/BlueCat/Axiom/DestructorEasyMode.png" alt="Easy Mode">
<div class="image-caption">Easy Mode</div>
{:/nomarkdown}

Do all of those controls seem overwhelming? Then you can drop in to 'easy mode' for any of the sections. Just click the `e` button in the upper right of the section.

The easy-mode sections have dozens of available skins to help you create a look that mimics the sound you're getting.

## Destructor MIDI

Destructor has MIDI Mapping just like [Axiom does](#midi-mapping). You can take advantage of this through Axiom's system as needed.

# Late Replies

{::nomarkdown}
<img src="/assets/BlueCat/Axiom/LateReplies.png" alt="Late Replies">
<div class="image-caption">Late Replies</div>
{:/nomarkdown}

[Late Replies](https://www.bluecataudio.com/Products/Product_LateReplies/) is a monster delay plugin. I could write a tome about the capabilities of it, but I'm just going to go over the basics here. Axiom includes Late Replies as a builtin effect.

Late replies is a fully sequencable 8-tap delay with per-tap effects inserts, 2 feedback loops with effects inserts, pre-fx inserts, post-fx inserts and ducking.

There are 24 included effects that can be used on the inserts, and each insert slot can host VST/VST3/AU effects. Of course you can have Late Replies inside of Late Replies inside of Late Replies inside of... **Hooray! Rabbit Holes!** My favorite.

So let's break down what's here.

## Late Replies Routing

{::nomarkdown}
<img src="/assets/BlueCat/Axiom/LateRepliesRoute.png" alt="Routing in Late Replies">
<div class="image-caption">Late Replies Routing... mostly</div>
{:/nomarkdown}

Once again, another beautiful drawing. This is most of Late Replies routing scheme.

You go through your 8 taps, then in to 2 feedback loops with crossfeed _and_ crosstalk, out to more FX, spread, ducker, gain and a limiter.

I left out the 'In Mix' path, which controls how much of the first input to the feedback loop is processed. Why did I leave this out? Because I have no clue how to represent that. Sorry.

## Late Replies Input

{::nomarkdown}
<img src="/assets/BlueCat/Axiom/LateRepliesInput.png" alt="Late Replies Input">
<div class="image-caption">Input</div>
{:/nomarkdown}

The input stage is 4 effects. This is also where the Base delay parameter is. The Base delay is what the scale of the pattern sequencer is based off.

## Multitaps

{::nomarkdown}
<img src="/assets/BlueCat/Axiom/Taps.png" alt="Multi Taps">
<div class="image-caption">So many taps!</div>
{:/nomarkdown}

Here is where the fun happens. A 'tap' is a single delay. The signal is delayed by the desired amount and that's it. It doesn't sound exciting until you start using multiple taps.

There's a pattern sequencer that allows you to see how each delay tap is placed in time relative to other taps. You can manually adjust these on a grid, and off the grid. The volume of each tap is indicated by the opacity of the tap's node in the pattern graph. Each tap can be panned as desired, but this is not indicated in the pattern grab.

The pattern sequencer allows the use of presets for that specific portion. If you end up with a pattern that you really like, you can save it and recall it later without affecting the rest of the plugin.

Each delay tap allows you to insert up to 4 effects, from the included 24 effects or VST/VST3/AU effects.

The sequence and/or volume can be randomized. You can choose to select one or both, and you can specify which taps are randomized by using the locks on the right. If you hit a creative roadblock this is a cheap way out. I like cheap ways out.

There's real sonic power in this section. Applying effects to each tap allows for a variety of effects from extreme to subtle. The fact that you can load Late Replies itself in these patch points expands the options as far as your CPU will allow you.

## Feedback paths

{::nomarkdown}
<img src="/assets/BlueCat/Axiom/Feedback.png" alt="Feedback paths">
<div class="image-caption">2 feedback paths</div>
{:/nomarkdown}

Once your amazing effected multitap pattern is created, it is fed in to one or both feedback paths. Each feedback path has 4 effects slots where you can once again use the 24 builtin effects or VST/VST3/AU effects.

There is an innovated loops graph that lets you add pre-delay to each path, and specify the length of the loop (This is how big of a block of audio happens before it's fedback). Naturally the normal feedback and pan controls are available. There's a great polarity inversion option that causes each successive loop to be polarity inverted, this can make for some neat modulated delay tails.

The feedback loops can be crossfed, and the output can be crossed as well.

The impulse response graph shows you exactly how your taps and feedback are going to play out. Height shows the pan, x-axis is time and opacity is volume. If you are having trouble hearing exactly what is happening in a complex multitap patch you can visualize it rather easily. All bets are off once you add effects though. Late Replies doesn't take in to account effects.

Once you start using filters and delays in your feedback loop, then you enter a world of **ultra lush** reverbs. Late Replies is an amazing reverb plugin once you start to dig in. This is owed largely to the feedback architecture.

Each feedback path has an optional brickwall limiter for when you go nuts and create an ever-increasing feedback loop of ultimate glory. Limiters aren't really the solution to this problem though, since the RMS level can still rise and blast your ears. Ideally I'd prefer that it had an auto-mute or a volume leveler instead.

Lastly I want to mention the freeze control. Many delays have freeze. Other products let you freeze the feedback buffer and have it loop. Late Replies is way cooler.

## Late Replies Output

{::nomarkdown}
<img src="/assets/BlueCat/Axiom/LateRepliesOutput.png" alt="Otupt">
<div class="image-caption">Output path and ducker</div>
{:/nomarkdown}

The output path has 4 more effects slots. Surprise!

The cool bit here is the ducker. Often when you have a thick delay/reverb/whatever it can obscure your input signal. The ducker allows the input signal, or an external signal, to temporarily lower the volume of the delay signal.

The ducker has typical compressor controls (since that's what it is), except the amount control instead of a ratio.

After all of that there's a brickwall limiter. 

## Presets

{::nomarkdown}
<img src="/assets/BlueCat/Axiom/LateRepliesPresets.png" alt="Presets">
<div class="image-caption">Presets</div>
{:/nomarkdown}

Late Replies also comes with a bunch of presets. From crazy stereo effects to sci-fi modulations to reverbs to vanilla delays.

I quite enjoy browsing the Late Replies presets because there's so much variation there. Of the dozens of times that I've gone through the presets, I learn something new each time. Some sort of new concept or idea to try.

# Builtin Effects

{::nomarkdown}
<img src="/assets/BlueCat/Axiom/Effects.png" alt="Effects">
<div class="image-caption">Effects!</div>
{:/nomarkdown}

Ok guys. Here we go. I'm going to screenshot and label every single builtin effect so you can see them all.

I am **not** going to review all of them. If there is an effect that I find particularly notable or useful then I will write something about it. There's just too much stuff for me here to properly evaluate and review every single one.

Nearly every builtin effect has its own set of presets.

If nothing tells you how much I love you, dear readers, this should. It's a lot of work, [even if I have some tricks up my sleeve]({% post_url 2018-01-19-Creating-lists-of-plugins-with-Tesseract %}). It took me about 60 minutes just to set this up nicely.

### Delay & Reverb

#### Echo

{::nomarkdown}
<img src="/assets/BlueCat/Axiom/Effects/Delay/Echo.png" alt="Echo">
<div class="image-caption">Echo</div>
{:/nomarkdown}

#### Late Replies

{::nomarkdown}
<img src="/assets/BlueCat/Axiom/LateReplies.png" alt="Late Replies">
<div class="image-caption">Late Replies</div>
{:/nomarkdown}

[I already discussed this](#late-replies)

#### Multi Tap Delay

{::nomarkdown}
<img src="/assets/BlueCat/Axiom/Effects/Delay/MultiTapDelay.png" alt="Multi Tap Delay">
<div class="image-caption">Multi Tap Delay</div>
{:/nomarkdown}

#### Reverb

{::nomarkdown}
<img src="/assets/BlueCat/Axiom/Effects/Delay/Reverb.png" alt="Reverb">
<div class="image-caption">Reverb</div>
{:/nomarkdown}

Reverb isn't special, but it doesn't suck either. I generally expect every reverb to be an awful metallic mess, but it's not. I'd even be tempted to use this alone as a mix reverb if I didn't already own far too many reverb plugins.

That's it. I'm just here to say that it isn't awful. That's a bold statement for an included reverb effect.

### Distortion

#### Army Drive

{::nomarkdown}
<img src="/assets/BlueCat/Axiom/Effects/Distortion/ArmyDrive.png" alt="Army Drive">
<div class="image-caption">ArmyDrive</div>
{:/nomarkdown}

#### Blue Drive

{::nomarkdown}
<img src="/assets/BlueCat/Axiom/Effects/Distortion/BlueDrive.png" alt="Blue Drive">
<div class="image-caption">BlueDrive</div>
{:/nomarkdown}

#### Crunch Booster

{::nomarkdown}
<img src="/assets/BlueCat/Axiom/Effects/Distortion/CrunchBooster.png" alt="Crunch Booster">
<div class="image-caption">CrunchBooster</div>
{:/nomarkdown}

#### Destructor

{::nomarkdown}
<img src="/assets/BlueCat/Axiom/Destructor.png" alt="Destructor">
<div class="image-caption">Destructor</div>
{:/nomarkdown}

[Already covered.](#destructor)

#### Fuzzy Tone

{::nomarkdown}
<img src="/assets/BlueCat/Axiom/Effects/Distortion/FuzzyTone.png" alt="Fuzzy Tone">
<div class="image-caption">FuzzyTone</div>
{:/nomarkdown}

#### Green Dist

{::nomarkdown}
<img src="/assets/BlueCat/Axiom/Effects/Distortion/GreenDist.png" alt="Green Dist">
<div class="image-caption">GreenDist</div>
{:/nomarkdown}

I am a [Tube Screamer](https://en.wikipedia.org/wiki/Ibanez_Tube_Screamer) lover. This is disappointing. It's kinda tube screamery, like a modern TS-9 in a way. I can't really nail down what it reminds me of... but it's none of my tube screamers.

Luckily you can use VST/VST3/AU plugins and purchase [the best tubescreamer emulation on the market](https://cytomic.com/scream). The Scream is amazing, and you can mod the pedal _in realtime_ across the whole schematic. Currently a new GUI is in the works that is just amazing.

Do yourself a favour and buy The Scream.

#### Methal Drive

{::nomarkdown}
<img src="/assets/BlueCat/Axiom/Effects/Distortion/MethalDrive.png" alt="Methal Drive">
<div class="image-caption">MethalDrive</div>
{:/nomarkdown}

#### Orange Dist

{::nomarkdown}
<img src="/assets/BlueCat/Axiom/Effects/Distortion/OrangeDist.png" alt="Orange Dist">
<div class="image-caption">OrangeDist</div>
{:/nomarkdown}

The [Boss DS-1](https://www.boss.info/us/products/ds-1/) is arguably the most iconic pedal of 90s. I have a handful of them, with various mods, and I used them heavily for about a decade and a half.

'Orange Dist' comes surprisingly close to a stock DS-1. The tone control sounds a bit off, but it's not a big deal.

Cool.

#### Waveshaper

{::nomarkdown}
<img src="/assets/BlueCat/Axiom/Effects/Distortion/WaveShaper.png" alt="Waveshaper">
<div class="image-caption">WaveShaper</div>
{:/nomarkdown}

### Dynamics

#### Compressor

{::nomarkdown}
<img src="/assets/BlueCat/Axiom/Effects/Dynamics/Compressor.png" alt="Compressor">
<div class="image-caption">Compressor</div>
{:/nomarkdown}

I haven't dived in deep with this thing, but it's surprisingly nice. I've tried it solo on bass guitar and on drums, and it's quite good for soft compression.

It does an excellent job in effects chains of doing light, barely audible compression. The type of compression that's often necessary to keep certain bits under control.

#### Destructor

{::nomarkdown}
<img src="/assets/BlueCat/Axiom/Destructor.png" alt="Destructor">
<div class="image-caption">Destructor</div>
{:/nomarkdown}

[Already covered.](#destructor)

#### Ducker

{::nomarkdown}
<img src="/assets/BlueCat/Axiom/Effects/Dynamics/Ducker.png" alt="Ducker">
<div class="image-caption">Ducker</div>
{:/nomarkdown}

#### Gate

{::nomarkdown}
<img src="/assets/BlueCat/Axiom/Effects/Dynamics/Gate.png" alt="Gate">
<div class="image-caption">Gate</div>
{:/nomarkdown}

This gate is damn near useless. It has no hysteresis at all, which is a feature that allows the gate to close at a different level than it opens. There is also no hold, and the release shape seems aggressive.

The result is that you get a chattery, sensitive gate that is difficult to use for anything musical.

It is possible to use it on sources that are clearly 'on' or 'off', like metal guitars, but even then I rather use another product since this is still finicky to tune.

### EQ and Filters

#### Comb Filter

{::nomarkdown}
<img src="/assets/BlueCat/Axiom/Effects/Filters/CombFilter.png" alt="CombFilter">
<div class="image-caption">CombFilter</div>
{:/nomarkdown}

#### Comb Filter IIR

{::nomarkdown}
<img src="/assets/BlueCat/Axiom/Effects/Filters/CombFilterIIR.png" alt="CombFilterIIR">
<div class="image-caption">CombFilterIIR</div>
{:/nomarkdown}

Rather than implementing a combfilter as a simple delay + mix, this implements it as an [IIR filter](https://en.wikipedia.org/wiki/Infinite_impulse_response). Sometimes this is a more appropriate selection compared to [Comb Filter](#comb-filter) due to the phase rotation that occurs. Often more appropriate in delay lines, but the sky is the limit.

#### EQ

{::nomarkdown}
<img src="/assets/BlueCat/Axiom/Effects/Filters/EQ.png" alt="EQ">
<div class="image-caption">EQ</div>
{:/nomarkdown}

This EQ is similar to the [Preamp EQ in Destructor](#preamp). It has the same spectrogram capabilities, same [reference curve functionality](https://www.bluecataudio.com/Tutorials/Tutorial_EQ_Matching_Reaper/). It's missing the comb filter, and that's it.

It's a better EQ than some DAWs come with. (I'm looking at you [Waveform](/tags/#Tracktion+Waveform)!)

#### Filter

{::nomarkdown}
<img src="/assets/BlueCat/Axiom/Effects/Filters/Filter.png" alt="Filter">
<div class="image-caption">Filter</div>
{:/nomarkdown}

What a wimpy filter. BLERGH.

It's lucky that you can use 3rd party VST/VST3/AU plugins or I'd be throwing a tantrum that'd put any 2-year old to shame. I like my filter plugins, and this is a wussy filter.

#### Wah

{::nomarkdown}
<img src="/assets/BlueCat/Axiom/Effects/Filters/Wah.png" alt="Wah">
<div class="image-caption">Wah</div>
{:/nomarkdown}

This is one of the standout effects. It's an _excellent_ wah pedal. It's MIDI assignable to an expression pedal of course, and there's an auto-wah section that allows the wah to respond automatically to input dynamics.

The wah allows you to select the low and high positions for the wah movement. The bandwidth and gain are also selectable. You can get rather creative with it and make some mindwarping sounds in conjunction with other effects.

### FX

#### Bit Crusher

{::nomarkdown}
<img src="/assets/BlueCat/Axiom/Effects/FX/BitCrusher.png" alt="BitCrusher">
<div class="image-caption">BitCrusher</div>
{:/nomarkdown}

Thank you Blue Cat for having a bit crusher/decimator that has _variable antialiasing_. Sometimes you want only a bit of grit and darkes, not a nails on the chalkboard sound.

Old hardware designers weren't stupid, and when you want to try to emulate old devices it's sometimes necessary to have mild anti-aliasing. Bit Crusher provides it.

#### Freq Shifter

{::nomarkdown}
<img src="/assets/BlueCat/Axiom/Effects/FX/FreqShifter.png" alt="FreqShifter">
<div class="image-caption">FreqShifter</div>
{:/nomarkdown}

If you don't know how a frequency shifter differs from a pitch shifter: [I explained it here]({% post_url 2017-06-27-Bitwig-Effects-review %}#freq-shifter)

#### Harmonizer

{::nomarkdown}
<img src="/assets/BlueCat/Axiom/Effects/FX/Harmonizer.png" alt="Harmonizer">
<div class="image-caption">Harmonizer</div>
{:/nomarkdown}

I have one thing to say about Harmonizer: no PDC.

To get a decent sound, Harmonizer requires a lookahead. The larger the lookahead, the cleaner the sound. Obviously we can't have realtime lookahead, since time travel doesn't exist yet. So when playing live you get this echoed pitch shifted signal happening. It is what it is.

The issue comes up when you want to use Axiom on a recording. I would like that delay compensated, ideally variably compensated. This effect would be far more useful with this capability.

Strangely enough, Axiom does report latency for VST/AUs properly. It's a bit weird that it's unable to let you offset detection latency on Harmonizer.

#### Phase Shifter

{::nomarkdown}
<img src="/assets/BlueCat/Axiom/Effects/FX/PhaseShifter.png" alt="PhaseShifter">
<div class="image-caption">PhaseShifter</div>
{:/nomarkdown}

Phase shifter may seem somewhat useless, but herein lies the utility of kings. When working with dense modulation/delay/reverb effects or parallel effect chains, there's often times where you get nasty frequency cancellations.

Phase shifter lets you target an area and rotate the phase. Problem solved

Of course this can be used prophylactically when creating reverb like effects.

#### Pitch Bender

{::nomarkdown}
<img src="/assets/BlueCat/Axiom/Effects/FX/PitchBender.png" alt="PitchBender">
<div class="image-caption">PitchBender</div>
{:/nomarkdown}

[See Harmonizer](#harmonizer) for why I dislike this effect.

#### Pitch Shifter

{::nomarkdown}
<img src="/assets/BlueCat/Axiom/Effects/FX/PitchShifter.png" alt="PitchShifter">
<div class="image-caption">PitchShifter</div>
{:/nomarkdown}

#### Waveshaper

{::nomarkdown}
<img src="/assets/BlueCat/Axiom/Effects/Distortion/WaveShaper.png" alt="Waveshaper">
<div class="image-caption">WaveShaper</div>
{:/nomarkdown}

### Modulation

#### Chorus

{::nomarkdown}
<img src="/assets/BlueCat/Axiom/Effects/Modulation/Chorus.png" alt="Chorus">
<div class="image-caption">Chorus</div>
{:/nomarkdown}

#### Flanger

{::nomarkdown}
<img src="/assets/BlueCat/Axiom/Effects/Modulation/Flanger.png" alt="Flanger">
<div class="image-caption">Flanger</div>
{:/nomarkdown}

#### Phaser

{::nomarkdown}
<img src="/assets/BlueCat/Axiom/Effects/Modulation/Phaser.png" alt="Phaser">
<div class="image-caption">Phaser</div>
{:/nomarkdown}

#### Sweep Filter

{::nomarkdown}
<img src="/assets/BlueCat/Axiom/Effects/Modulation/SweepFilter.png" alt="SweepFilter">
<div class="image-caption">SweepFilter</div>
{:/nomarkdown}

Another weak filter. Ugh.

#### Tremolo

{::nomarkdown}
<img src="/assets/BlueCat/Axiom/Effects/Modulation/Tremolo.png" alt="Tremolo">
<div class="image-caption">Tremolo</div>
{:/nomarkdown}

### Utilities

#### Gain

{::nomarkdown}
<img src="/assets/BlueCat/Axiom/Effects/Utilities/Gain.png" alt="Gain">
<div class="image-caption">Gain</div>
{:/nomarkdown}

[Gain Staging matters!]({% post_url 2017-11-01-Gainstaging-for-the-modern-musician %})! Gain is what you need to make sure the gain from processor to processor is appropriate.

I love that they include these utility plugins. For advanced users they are arguably more exciting than the fancier looking bits. Some other products leave these out, and it can drive a working musician/engineer crazy.

#### MS Decoder

{::nomarkdown}
<img src="/assets/BlueCat/Axiom/Effects/Utilities/MSDecoder.png" alt="MSDecoder">
<div class="image-caption">MSDecoder</div>
{:/nomarkdown}

#### MS Encoder

{::nomarkdown}
<img src="/assets/BlueCat/Axiom/Effects/Utilities/MSEncoder.png" alt="MSEncoder">
<div class="image-caption">MSEncoder</div>
{:/nomarkdown}

When working with stereo effects it's often desirable to only affect the phantom center image, or only the side images. 

The combination of the MS Encoder and [MS Decoder](#ms-decoder) allows you to do this. MS Encoder puts the mid signal on the left, and the side signal on the right. All further processing affects M/S where L/R would be processed. If you want to get back to a normal stereo signal, then you put the [MS Decoder](#ms-decoder) in place to do that job.

#### Mute

{::nomarkdown}
<img src="/assets/BlueCat/Axiom/Effects/Utilities/Mute.png" alt="Mute">
<div class="image-caption">Mute</div>
{:/nomarkdown}

Thank goodness! If you are using Axiom live then you will appreciate this. You can assign MIDI to Mute so that you can tune in silence or browse banks.

It seems like a silly plugin, but for a performing musician it's awesome.

#### Pan

{::nomarkdown}
<img src="/assets/BlueCat/Axiom/Effects/Utilities/Pan.png" alt="Pan">
<div class="image-caption">Pan</div>
{:/nomarkdown}

#### StereoStrip

{::nomarkdown}
<img src="/assets/BlueCat/Axiom/Effects/Utilities/StereoStrip.png" alt="StereoStrip">
<div class="image-caption">StereoStrip</div>
{:/nomarkdown}

Stereo strip does the normal spread/level/pan type things, but it also has crosstalk. The crosstalk parameter lets you feed a bit of your Left channel to the right and vice versa. A great use for this is when you have an extreme ping pong delay that you don't want so wide. You can feed in some crosstalk to narrow it back down a bit without affecting the total width.

# Presets

{::nomarkdown}
<img src="/assets/BlueCat/Axiom/AxiomPresets.png" alt="Presets">
<div class="image-caption">Presets</div>
{:/nomarkdown}

Axiom comes with a ton of presets. Each section has presets. Each [Destructor](#destructor) has presets. Each [Late Replies](#late-replies) has presets. Each [Builtin Effect](#builtin-effects) has presets.

The included factory presets do a great injustice to Axiom. The have the same issue as [the Destructor presets](#destructor-presets), where the presets all sound too forward.

The second layer of problem is that there's only guitar presets. If you haven't figured it out by now: Axiom is a multi-effects monster. There's not a single preset that demonstrates this. I suspect that many people will totally gloss over Axiom because they don't play guitar, and they will be missing out on an amazing product. Even if they buy the product they'll be presented with no presets tailored to their non-guitar production tasks.

[Blue Cat does a great job of posting presets](https://www.bluecataudio.com/Presets/Download/) for their plugins. I hope that they address the lack of non-guitar presets in future releases though.

# Sounds

A plugin review wouldn't be complete without some sound examples.

The sound examples I'm providing are all 24-bit, 44.1khz in my [Comparator browser app]({% post_url 2017-01-30-Comparator %}).

Since this requires a lot of data preloading, I'm putting it on a second page. That way you can choose to load this at your leisure.

**This page loads 187mb of audio!** If you are on a limited data plan, please be careful.

[Click here for sound examples]({% post_url 2018-04-15-Axiom-Sound-Samples %})

# Conclusion

So what do I think about all of this? Let's start with some criticisms:

* The presets suck IMO
* ~~Moving effects requires multiple clicks with a copy/paste method. I don't see any way to drag things around.~~ Axiom 1.1 fixes this, you can now drag and drop!
* There's no clear references to known gear.
* You often end up with dozens of windows littering your screen.
* MIDI Mapping inside effects can be confusing at times
  * Keeping track of internal effect MIDI mapping can be very difficult at times.
* ~~The post-filter section of Destructor requires a lot of experience and tuning.~~ (**UPDATE**: [This has been improved greatly!]({% post_url 2018-10-24-Blue-Cat-Axiom-Destructor-Update %})) 
* For a complete guitar solution, you will want to rely on a variety of 3rd party FX.
* Destructor knobs look awful at 200%.
* ~~No randomization features?~~ From the developer: "Global randomization at the Axiom level is tricky given the amount of variables, especially when taking into account external plug-ins, so we are not there yet (if it ever makes sense).". 
* Destructor can't be replaced without sacrificing pre/post slots.
* ~~It hosts instruments, and I have no clue why. If they were inserted before the input stage, it'd make sense, but they are not.~~ Instrument hosting makes sense for standalone mode, such as using a drum machine or similar.
* In macOS, plugin windows are always on top no matter what? The settings checkbox does nothing. The plugin windows stay on top of _all_ windows on the system.
* That **AWFUL** www.bluecataudio.com link at the bottom of the GUI. While doing this review I must have accidentally clicked it 50 times. It's on Destructor and Late Replies too, and I often click it there. Guys at Blue Cat, I know what your website is... I'm using your software. Please disable the link, even if you leave the text.

And some notable positive things

* Complete undo system in case your DAW doesn't have it.
* VST/VST3/AU hosting. This is really awesome.
* Spread control is convenient and useful.
* Destructor sounds awesome most of the time.
  * And it can be used solo without issues.
* Late Replies is maybe the best delay plugin out there.
  * And it can be used alone without much effort.
* _Amazing value_
* Excellent selection of effects.
* Channel strip/Effects Chain solution
* Pleasant GUI
* Quick Support
* Tons of presets (even if I don't like them... there's plenty)
* Dual channel support is implemented seamlessly.
* MIDI mapping support is excellent despite some omissions.

Overall I think this is a _must have_ plugin for anyone. Guitarists and non-Guitarists alike.

For guitarists/bassists that enjoy experimenting, there's nothing comparable that's targeted to you. If you're a guitarist that knows _exactly_ what amp setup you want, then you may want to look in to other products, since Axiom won't make that easy for you.

The capability to create effects chains and multi-effects setups that can be easily recalled makes Axiom a potential workflow boost.

Just go and scroll back. Look how much you get, look at what you can do. Even if you totally ignore the built-in effects, it's still a plugin that I'm sure almost anyone can find value in.

# Support Me!

This post took 19 hours to research, screenshot, record, write and edit. If you appreciate the information presented then <a href="/DonateNow/">please consider joining patreon or donating!</a>






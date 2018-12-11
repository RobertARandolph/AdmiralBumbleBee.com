---
layout: post
title: What do I want in an EQ (and some tricks!)
comments: true
date:   2017-11-21_11:01:58 
categories: music
tags: ['Monthly', 'Studio Tips']
image: /assets/EQWant/EQWant.png
description: Some things that I look for in an EQ, with some tips and tricks.
---

{::nomarkdown}
  <img src="/assets/EQWant/EQWant.png" alt="EQs">
  <div class="image-caption">Small Selection of products</div>
{:/nomarkdown}

While doing my [30 days without Fabfilter]({% post_url 2017-11-03-30-Days-without-Fabfilter-products %}) I've realized just how great of an EQ that [Fabfilter Pro-Q 2](https://www.fabfilter.com/products/pro-q-2-equalizer-plug-in) really is.

I haven't yet found anything that does _everything_ that it does, and does it as well. [Apqualizr 2](http://apulsoft.ch/apqualizr2/) is an excellent alternative with its own unique strengths, but for every feature it has that Pro-Q 2 does... Pro-Q 2 has an equally valuable feature that Apqualizr is missing.

There's many alternatives. Rather than go through the products themselves, I thought I'd take some time to explain exactly what I am looking for in an EQ at a high-level. I'm ignoring some more esoteric things and sticking largely to things that impact my workflow directly.


<!--more-->

# Contents
{:.no_toc}
* TOC
{:toc}

# What I want

## Automation stability

There's 2 basic types of automation that EQs tend to be poor at: sweeping and bypassing.

### Sweeping

{::nomarkdown}
  <video poster="/assets/EQWant/EQsweep.jpg" controls muted preload="none">
    <source src="/assets/EQWant/EQsweep.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <div class="video-caption">Sweeping Low-pass filter (press play)</div>
{:/nomarkdown}

Filter stability and noise are big deals. When you want a band's center frequency (or corner) to move, you want it to sound nice and smooth. There are types of filters that are more stable and less noisy, but come with other tradeoffs such as ripple and steepness. I personally prefer smooth automation over most other costs.

The examples above show a low-pass filter simply sweeping across the spectrum back and forth across a 1khz sine wave using a triangular shaped automation.

* [Waves H-EQ](https://www.waves.com/plugins/h-eq-hybrid-equalizer) - Lots of noise. _I measured up to -45dbFS of noise_. That's horrendous and clearly audible.
* [X-42 EQ](http://x42-plugins.com/x42/x42-eq) - Very low noise. Average noise is around -140dbFS. 

Both of these EQs exhibit similar characteristics with bell bands as well.

[Goodhertz](https://goodhertz.co) products handle this scenario _extremely well_, as well as the [bypassing](#bypassing) shown below.

### Bypassing

{::nomarkdown}
  <video poster="/assets/EQWant/EQBypass.jpg" controls muted preload="none">
    <source src="/assets/EQWant/EQBypass.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <div class="video-caption">EQ Bypassing (press play)</div>
{:/nomarkdown}

(Sorry about the choppy video, I couldn't get a smooth video of this no matter what I tried).

Hard-bypassing an EQ is a recipe for snaps, crackles, pops and other [cereal products](https://en.wikipedia.org/wiki/Snap,_Crackle_and_Pop). If you have the option, you should always use the EQ's soft-bypass function.

But what if your EQ doesn't have a soft-bypass? Let's see what happens with a 1khz sine wave.

* [Waves H-EQ](https://www.waves.com/plugins/h-eq-hybrid-equalizer) - **POP**. _Hiss_. Gross. Those bright spikes are noisy pops when the EQ is turned on _or_ off.
* [Goodhertz LoHi](https://goodhertz.co/lohi) - Nice. Low noise, no audible pop. You can see that when I hardbypass, the artifacts come back though!
* [Fabfilter Pro-Q 2](https://www.fabfilter.com/products/pro-q-2-equalizer-plug-in) - Also nice, but not _as_ nice as [Goodhertz LoHi](https://goodhertz.co/lohi). Bypassing individual bands in Pro-Q 2 gives better results than the master bypass usually. Same issues if we hard bypass though!

EQ bypass is something that I do frequently, and you have to be careful to use the correct products in the correct manner or you'll be making [breakfast](https://en.wikipedia.org/wiki/Snap,_Crackle_and_Pop) instead of music.

## Band types

{::nomarkdown}
  <img src="/assets/EQWant/BandTypes.png" alt="Band Types">
  <div class="image-caption">Band Types</div>
{:/nomarkdown}

I'm not talking about _filter_ types (like [Chebyshev](https://en.wikipedia.org/wiki/Chebyshev_filter), [Butterworth](https://en.wikipedia.org/wiki/Butterworth_filter) etc... ). I'm talking about band types like: bandpass, notch, comb, shelves, harmonic series etc...

In the image above is [GlissEQ](http://www.voxengo.com/product/glisseq/) notch filter with a series of harmonically aligned sister filters. Extremely useful when trying to deal with resonances or periodic sources of noise.

Most EQs will have high/low pass, high/low shelves, Bell/Peak. That's enough for most things, but it's rather frequent that bandpass, bandstop filters are useful. Comb filters and harmonic filters are great to have. 

## Modulation

{::nomarkdown}
  <video poster="/assets/EQWant/Modulation.jpg" controls muted preload="none">
    <source src="/assets/EQWant/Modulation.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <div class="video-caption">Modulation (press play)</div>
{:/nomarkdown}

Modulation is extremely useful in EQs. Obviously it's fun for effect-based things like sweeping LFO controlled filters, but even more so it's useful to create dynamic bands in realtime.

Having a high-pass open up only when the snare hits, but filter the highs the rest of the time, is a great way to reduce the high-hats in your snare mic without making your snare dull.

Or what about dynamically filtering noise, except when the guitarist is playing loudly?

You could sidechain the high frequencies to duck the lows on your piano track to bring out the melody during really dense parts.

There's endless uses for having freely routable modulation. [Apqualizr 2](http://apulsoft.ch/apqualizr2/) is shown above.

## Simple controls

{::nomarkdown}
  <img src="/assets/EQWant/Simple.png" alt="Simple">
  <div class="image-caption">Simplicity</div>
{:/nomarkdown}

No matter how complex my EQ settings are, I want to interact with it in the simplest manner possible. [Pro-Q 2](https://www.fabfilter.com/products/pro-q-2-equalizer-plug-in) is fantastic with this.

There's only 1 band's settings displayed at any given time. If you select multiple bands then there's a single control to control all of them together as a group.

I don't need to see 5+ band's controls at once if I only have 1 mouse cursor. The graph shows me what the EQ is doing. With complex curves you need to usually interact with the graph to figure out which band is affecting the curve in the way you expect, which makes the knob-based controls basically worthless anyway.

I find that the "one control page at a time" method also reduces errors, as I'm much less likely to change settings on the wrong band. YOu must first explicitly select the band that you want to work with, which is a workflow that reduces mistakes.

## Typing in values

{::nomarkdown}
  <img src="/assets/EQWant/TypeValues.png" alt="Type in Values">
  <div class="image-caption">Typing in Values</div>
{:/nomarkdown}

I need to be able to type in values for Frequency and Q/Bandwidth. It's especially nice if the EQ accepts both Q and octave values for bandwidth.

For frequency I like to have:

* Cycles
    * With abbreviations like 2k for 2,000 cycles per second.
* Length (ft or m)
* Note
* Division of the sampling interface, 1/4fs for instance. (I have not seen this)
* Angular frequency rad/sec. (I have not seen this)
* Math using any of the above values such as A2# + 10hz.

[DMGAudio Equilibrium](https://dmgaudio.com/equilibrium) is shown above.

## Compensated FFT analyzer

{::nomarkdown}
  <video poster="/assets/EQWant/Latency.jpg" controls muted preload="none">
    <source src="/assets/EQWant/Latency.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <div class="video-caption">0.5s latent analyzer display (press play)</div>
{:/nomarkdown}

When everything you see is 500ms later than what you hear, then you don't know what your seeing. That kick drum you just heard? You may be seeing the frequency response of the snare drum that was played 500ms earlier!

FFT based analyzers often have a latency before they can display information. This latency is relative to the window size, with a larger window size being more latent. However, a larger window size also yields more accurate frequency domain information.

An alternative to this is to use a different analyzer type, like a filter bank or spectrogram. A filter bank's latency is basically zero, however they are less accurate overall. A [spectrogram](#spectrogram) _displays the time persistently_  as a function of the X or Y axis, so you can mentally map things you hear to what you see.

A feature that I really like is having an FFT analyzer in an EQ that publishes its current latency to the Host so that it can be compensated. This will reduce the responsiveness of the controls, and make the EQ unusable for live usage, **but** it also makes it much easier to correlate what you hear to what you see.

Having optional analyzer latency compensation is fantastic.

[Apqualizr 2](http://apulsoft.ch/apqualizr2/) is the only modern EQ I know of that does this well.

## Spectrogram

{::nomarkdown}
  <img src="/assets/EQWant/Spectrogram.png" alt="Spectrogram">
  <div class="image-caption">Spectrogram in action</div>
{:/nomarkdown}

In the section about [analyzer compensation](compensated-fft-analyzer) I mentioned how a spectrogram is an excellent option for correlating what you hear to a visual representation.

With what most people recognize as a '[spectrum analyzer](https://en.wikipedia.org/wiki/Bode_plot)', the representation of time is fleeting. If you don't see, _and understand_, the graph's state at the exact point where you need to, then you are out of luck.

A spectrogram solves this issue by showing you a persistent display of frequency, amplitude _and_ time. In the graph above frequency is represented on the X axis, amplitude of that frequency is show as intensity of the colour, and the Y axis is time.

The beauty of this method is that you can easily see the progression of the information as it occurred. The signal in the graph above is a bass guitar. The _exact_ same signal is almost indistinguishable on a normal [spectrum analyzer](https://en.wikipedia.org/wiki/Bode_plot) from a tom fill. With a spectrogram I can tell you very easily that it's a bass guitar, and not a tom fill or even an electric guitar! (that low F gives it away!)

[DMGAudio Equilibrium](https://dmgaudio.com/equilibrium) is shown above.

## Spectrum matching

{::nomarkdown}
  <img src="/assets/EQWant/EQMatch.png" alt="Spectrum Matching">
  <div class="image-caption">Spectrum Matching</div>
{:/nomarkdown}

In the image above I'm using [CurveEQ](http://www.voxengo.com/product/curveeq/) to copy the spectrum of [Arnold](https://en.wikipedia.org/wiki/Arnold_Schwarzenegger) to my voice. Does it make me sound awesome like that? No. It does make my voice a bit smoother though.

Spectrum matching isn't a cure-all for mix issues, or some sort of amazing easy mastering method. It _is_ a valuable addition to any EQ though. If you have a known mix or instrument sound that you're _close_ to, but need just a little bump in the right direction then spectrum mapping can be invaluable.

Even more so, it's amazing with the technique below...

## Curve scaling or inversion

{::nomarkdown}
  <video poster="/assets/EQWant/Invert.jpg" controls muted preload="none">
    <source src="/assets/EQWant/Invert.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <div class="video-caption">Curve Inversion (press play)</div>
{:/nomarkdown}

This is a feature that I use very often. The ability to grab a band a number of bands and 'invert' them. Simply multiply every band's gain value by a positive or negative value.

Specifically I use it often to _invert_ the current curve so the boosts become cuts, and the cuts become boosts. I have 2 primary uses for this in my workflow

* I like to use the 'search and destroy' EQ method. The idea is that when you have an errant area of the spectrum that you want to reduce, you create a boost and sweep it until you hear the problem become significantly worse. Cut there. It's much quicker than trying to search with a cut. Boosting makes the problem more apparent and easier to hear!

* Match and kill. This is where the [Spectrum Matching](#spectrum-matching) really comes in to play. Imagine you have a bass guitar and a guitar that really clash. No matter what you do they won't balance.

    The solution is to run the spectrum matching feature to 'match' the bass to the guitar. This will make the bass guitar sound thin, plucky and clash even _more_ with the guitar, but fear not! Now you _invert_ the generated curve and the _differences_ between the 2 instruments will be applied to the bass. The bass will become bassier, thicker, and emphasize the part of the spectrum that it doesn't have in common with the guitar.

    Bass guitar and electric guitar are a suboptimal example due to the similar harmonic structures, but you may be surprised how well this works when you try it. It works great on any instruments that are causing [masking issues](https://en.wikipedia.org/wiki/Auditory_masking).

[Pro-Q 2](https://www.fabfilter.com/products/pro-q-2-equalizer-plug-in) is what I demonstrated this with.

## Dynamic bands

{::nomarkdown}
  <video poster="/assets/EQWant/Dynamic.jpg" controls muted preload="none">
    <source src="/assets/EQWant/Dynamic.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <div class="video-caption">Dynamic Bands (press play)</div>
{:/nomarkdown}

I love dynamic EQ bands. I'm using [Eekjuliza](https://audio.d3ck.net/products/Eekjuliza) in the video above.

A dynamic EQ band listens to audio in a specific frequency range, usually (but not always!) in the band that is being controlled, and dynamically adjust the gain of that band in response to the incoming audio.

This means that your EQ only works as hard as it needs to. Have a strange resonance on your growl bass at 150hz, but if you pull down 150hz then it sounds awful? Dynamic EQ to the rescue! The dynamic EQ can be set to only reduce 150hz when that resonance is loud enough to trigger the action.

Basically it's a compressor that adjusts an EQ band's gain, instead of the amplitude of the whole signal.

Dynamic bands become even more useful when the signal that triggers the EQ band's gain change can be anything. Sidechain your kick to your bass, but instead of ducking the entire bass signal... just reduce 100hz only when the kick hits. Hi-hats leaking in to your snare mic, but you don't want to low-pass your snare and make it muddy? Setup a dynamic band that engages a high-shelf cut that gets louder when the snare hits. Now your snare is bright and snappy, but the hi-hats are cut out most of the time.

## Spectrum grab

{::nomarkdown}
  <video poster="/assets/EQWant/Grab.jpg" controls muted preload="none">
    <source src="/assets/EQWant/Grab.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <div class="video-caption">Spectrum Grab</div>
{:/nomarkdown}

[Pro-Q 2](https://www.fabfilter.com/products/pro-q-2-equalizer-plug-in) has a fantastic feature that lets you 'grab' the spectrum analyzer and create an EQ band from it.

This is an amazing way to quickly deal with resonances, errant loud notes, and other problems. I use [Spectrum Grab](https://www.fabfilter.com/help/pro-q/using/spectrumgrab) frequently and it's an amazing shortcut.

## Visual bandwidth adjustment

{::nomarkdown}
  <video poster="/assets/EQWant/Bandwidth.jpg" controls muted preload="none">
    <source src="/assets/EQWant/Bandwidth.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <div class="video-caption">Simple EQ Bandwidth adjustment</div>
{:/nomarkdown}

I don't like messing with Q or bandwidth controls. I just want a simple handle to grab and adjust the bandwidth of the filter, just like in the video above.

Simple. [Apqualizr 2](http://apulsoft.ch/apqualizr2/) does this nicely.

## Auto gain

{::nomarkdown}
  <img src="/assets/EQWant/Autogain.png" alt="Autogain">
  <div class="image-caption">Automatic gain adjustment</div>
{:/nomarkdown}

The ear is a tricky monster. Louder things sound better.

When making EQing decisions that is an issue. Cuts tend to make things sound wimpier, and boosts make things sound bigger or brighter. Automatic gain adjustment helps you hear the changes in a better context.

It's not always possible to make perfect predictions about how a filter will affect a signal unless the processor knows exactly what the signal is in advance. Some EQs try to guess, and some EQs try to normalize to some perceived loudness standard. The latter works much better.

It's quite amazing how much difference autogain functions make to the functionality of an EQ, especially in the context of a mix.

[DMGAudio Equilibrium](https://dmgaudio.com/equilibrium) is shown above

# What I do not want

There's a few things that I really **DO NOT WANT** in an EQ. These are deal breakers most of the time.

## Skeuomorphism

{::nomarkdown}
  <img src="/assets/EQWant/Skeuo.png" alt="Skeuomorphism">
  <div class="image-caption">Real hardware on not real hardware!</div>
{:/nomarkdown}

[Skeuomorphism](https://en.wikipedia.org/wiki/Skeuomorph) is the spawn of thousands of years of Satan's own scheming. When I work on a computer monitor, I can not reach out and touch things. I can't eyeball things from multiple angles. I can't deal with things that mimic older designs for no good reason.

The [Waves API-550b](https://www.waves.com/plugins/api-550) is an excellent example. Controlling this EQ is a pain in the ass. On the actual hardware it's very simple to use tactility to grab the concentric gain or frequency knobs, but on a computer screen it's difficult.

Why is it like this? To sell more, certainly not to be easier to use. They could have implemented the exact same DSP with a better screen-focused GUI, but then nobody would buy it because it doesn't look authentic enough.

I want something that is easy to control _on the device that I'm controlling!_

## Models and Emulations

{::nomarkdown}
  <img src="/assets/EQWant/Model.png" alt="Model">
  <div class="image-caption">A near perfect model, that I don't want</div>
{:/nomarkdown}

I don't want models of old EQs. I appreciate having access to filter responses from old equipment, like how [DMGAudio Equilibrium](https://dmgaudio.com/equilibrium) operates, but I do not want to be limited to the design and technology contraints of 1956 on my 2017 computer.

I understand that often constraints are a boon to creativity and workflow, but I'm not interested in paying someone money to limit me. I can limit myself just fine, thank you very much.

[Although if you claim to be an emulation]({% post_url 2017-09-18-Mixbus-32c-The-Mixer %}#saturation), then I'd like that you at least really are, especially if you're [just a model]({% post_url 2017-09-25-Harrison-Mixbus-EQ-Revisited %}#modelingsimulation-vs-emulation). I'm annoyed by poor marketing.

## Saturation

{::nomarkdown}
  <img src="/assets/EQWant/THD.png" alt="Saturation">
  <div class="image-caption">Saturation and more</div>
{:/nomarkdown}

I don't want saturation. I don't want distortion. I don't want noise added. _GET OFF MY LAWN_.

I can add those things later if I want, and probably in a more appropriate way than the EQ thinks. I don't care if it's authentic or not. I want clean.

## Cramping

{::nomarkdown}
  <video poster="/assets/Mixbus/Mixer/Cramp.jpg" controls muted preload="none">
    <source src="/assets/Mixbus/Mixer/Cramp.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <div class="video-caption">Cramping in the EQ (press play)</div>
{:/nomarkdown}

[I've discussed this before]({% post_url 2017-09-18-Mixbus-32c-The-Mixer %}#cramping), but I'm just going to re-iterate that I dislike this behaviour.

I don't mind the phase shift that comes from using a corrected bell filter at the nyquist. (many EQs correct this with a high-shelf, sorta). I prefer to have the correct frequency response. It is rarely noticeable on its own, but with some types of post-processing, like compression, it can make a big difference to how that processor operates.

# Conclusion

That's not everything, but it is a selection of things that I want when I'm out shopping for an EQ.

Overall, the largest 2 things to me are: Workflow and Automation. If the EQ can't offer that then it's basically worthless.

# Support Me!

This post took 11 hours to research, screenshot, write and edit. If you appreciate the information presented then <a href="/DonateNow/">please consider joining patreon or donating!</a>

<a href="https://www.patreon.com/bePatron?u=7465992"> <img class="patreon-button" src="/assets/Patreon.png" alt="Be a Patreon!"></a>

<form style="text-align: center;" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick">
<input type="hidden" name="hosted_button_id" value="BR247JAZBTUJJ">
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
</form>

If you have any questions or comments, please comment below! I read every comment and respond to most.



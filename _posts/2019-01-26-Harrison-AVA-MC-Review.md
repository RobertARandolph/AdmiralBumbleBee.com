---
layout: ['post', 'reader']
title: Harrison AVA Multiband Compressor review
comments: true
date:   2019-01-26_13:19:23 
categories: music
tags: ['Review']
image: /assets/AVA/MC/Compare.png
description: A review and deep-dive into Harrison's new AVA MC
---

{::nomarkdown}
<img src="/assets/AVA/MC/Compare.png" alt="Comparison to Market Leaders">
<div class="image-caption">Comparison to Market Leaders</div>
{:/nomarkdown}

[Harrison AVA Multiband Compressor](https://harrisonconsoles.com/site/ava-plugins.html) is out, and I spent some time looking over it and using it in some projects.

What follows are the results of my investigation and general thoughts.

**I DID NOT PAY FOR THIS PRODUCT** I am both a beta tester and received an NFR review copy. If you feel that this has possibly coloured my review, please let me know.

**IMPORTANT! IMPORTANT!** After reading this article, please [read the followup article]({% post_url 2019-01-31-Harrison-AVA-MC-Part-2 %}).

<!--more-->



# Contents
{:.no_toc}
* TOC
{:toc}

# Video

<iframe width="800" height="450" src="https://www.youtube.com/embed/fk1K1JXyLKw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

A video this week! Hooray!

Share with your friends!

(New camera and lighting too!)

# Technical

There are a few things we need to check first:

* Phase response - does the plugin impart a "sound" due to the crossovers when it's doing nothing?
* Amplitude response - What is the plugin doing in general?

A quick play with the controls shows no zipper noise and no major GUI glitches (besides tooltips sticking). The quick bypass works ok-ish.

## Amplitude response - all bands - Failed attempt

{::nomarkdown}
<img src="/assets/AVA/MC/Amplitude1.png" alt="Amplitude response, all bands, INVALID TEST">
<div class="image-caption">Amplitude response, all bands, INVALID TEST</div>
{:/nomarkdown}

{::nomarkdown}
<img src="/assets/AVA/MC/Amplitude1Setup.png" alt="AVA Setup for the above test">
<div class="image-caption">AVA Setup for the above test</div>
{:/nomarkdown}

This is testing AVA MC with all bands set equally so that they act equally. A sine sweep is sent through the product and the amplitude response is recorded. If there is some variation in how the bands react, such as some bands being 'more sensitive', then this will show it.

AVA MC was set to 0dB threshold on each band, with crossovers at 100hz, 750hz and 5.5khz. Note the band crossovers.

While doing this, I noticed something interesting... AVA seems to not split the signal into bands for detection, or if it does, then the envelope generators are all linked. The total input signal is what affects each band, so a 15khz signal will make ALL of the bands operate.

**THIS TEST IS INVALID!**

It's invalid and doesn't actually measure anything useful. It does offer some information that can be used though.

## Amplitude response - all bands - Second attempt

{::nomarkdown}
<img src="/assets/AVA/MC/Amplitude2.png" alt="Amplitude response, all bands">
<div class="image-caption">Amplitude response, all bands</div>
{:/nomarkdown}

{::nomarkdown}
<img src="/assets/AVA/MC/Amplitude2Setup.png" alt="AVA Setup for the above test">
<div class="image-caption">AVA Setup for the above test</div>
{:/nomarkdown}

This time I'm running the same settings, but feeding pink noise and recording the max level of each frequency bin in an FFT analyzer.

This time we can see some clear information. The bands in AVA do not respond equally. The high and low bands are more aggressive, and the low band appears to have a more aggressive slope.

The result is strange to me. The captured results don't match what's shown in the GUI. The GUI shows that the high and low bands are more aggressive, but the results nearly the opposite.

### Amplitude response - all bands - Second attempt - Second attempt

{::nomarkdown}
<img src="/assets/AVA/MC/AmplitudeResults22.png" alt="Amplitude response, all bands, again... again.">
<div class="image-caption">Amplitude response, all bands, again... again.</div>
{:/nomarkdown}

Let's try the second attempt again.

I'm using a different measurement system here that utilizes an impulse for measurement. Since this is a dynamic processor, it may not be a valid way of measuring things. (Spoiler alert: it is. I added this test after discovering more about this product).

The test here is using the same settings as previously.

What have we learned from the test? Not much really. All of these tests are relatively unreliable other than looking at them relative to each other (does the testing method change the result?). It is clear here that the GUI's display once again does not match what is measured.

You may get the idea that it's not using 'dynamic filters', but instead mixing in band-limited 'bands' of the original signal. That's _exactly_ what filters boil down to though, so you can dismiss that notion. (I've had someone ask this about another product)

I did see something else interesting here though... Those two colours are left and right response. Is it processing the left/right differently or is that some sort of bug?

### Amplitude response - all bands - Second attempt - Second attempt - Second attempt

{::nomarkdown}
<img src="/assets/AVA/MC/Stereo.png" alt="Stereo test">
<div class="image-caption">Stereo test</div>
{:/nomarkdown}

This is my second attempt at the second attempt's second attempt. This time I'm curious if there's a bug with the previous testing, or if AVA MC is actually processing L/R differently.

This is what I'm doing:

1. Send noise with the signal the same on both sides (mono noise)
2. Invert the left channel
3. Process with AVA MC
4. Invert the left channel (again)
5. Measure with stereoscope

If AVA MC was processing the 2 channels differently in response to the same information, then the red line in the stereoscope would be anything but vertical. It _is vertical_, which tells us that the signal was not processed differently in response to a similar signal.

So it doesn't appear that there's any tricks here, just a bug in PluginDoctor or AVA MC. Likely PluginDoctor?


## Amplitude response - all bands - Third attempt

{::nomarkdown}
<img src="/assets/AVA/MC/Amplitude3.png" alt="Amplitude response, all bands">
<div class="image-caption">Amplitude response, all bands</div>
{:/nomarkdown}

{::nomarkdown}
<img src="/assets/AVA/MC/Amplitude3Setup.png" alt="AVA Setup for the above test">
<div class="image-caption">AVA Setup for the above test</div>
{:/nomarkdown}

This time I'm trying with guassian distributed white noise. The analyzer's slope is compensated to appear "flat".

Once again the response does not look like what the GUI implies it will be. The low and high bands are shown in AVA MC to be compressed _more_, but in the measurement they clearly are not.

Given that AVA MC responds different to white and pink noise, it appears that there's some sort of pre-filter or potentially something in the design of the envelope generator causing a frequency dependent response to input level.

It's likely that this is a result of the envelope follower/generator used in AVA MC, and not anything of concern. White and Pink noise have different spectral profiles (and thusly densitities) so this result is expected with even a naive envelope section. It _does_ appear that AVA MC's results are different than what I'd expect. That could be a good thing.

## Phase response

{::nomarkdown}
<a href="/assets/AVA/MC/PhaseResults1.png">
<img src="/assets/AVA/MC/Thumbnails/PhaseResults1.jpg" alt="Phase Results (Click for larger image)">
</a>
<div class="image-caption">Phase Results (Click for larger image)</div>
{:/nomarkdown}

{::nomarkdown}
<a href="/assets/AVA/MC/PhaseComp1.png">
<img src="/assets/AVA/MC/Thumbnails/PhaseComp1.jpg" alt="Competitor (click for larger image)">
</a>
<div class="image-caption">Competitor (click for larger image)</div>
{:/nomarkdown}

The first thing here is a somewhat naive test. A sine wave is swept and the input and output are compared. Given what was seen in the amplitude tests, this won't say much other than the existence of crossovers in the signal path.

AVA MC is setup so that it has maximum range on each band, a threshold decreasing by 3dB for each subsequent band, a quick attack, quick release and no threshold.

A competing multi-band compressor was setup with identical settings for band, range, attack, release and threshold. The results are _very_ different.

Even with some fairly extreme processing, the phase response of the product is consistently clean. In fact, it looks an _awful lot_ like a minimum phase equalizer...

### Is it an EQ?

{::nomarkdown}
<a href="/assets/AVA/MC/EQMatchAmp.png">
<img src="/assets/AVA/MC/Thumbnails/EQMatchAmp.jpg" alt="EQ Match Amplitude (click for larger image)">
</a>
<div class="image-caption">EQ Match Amplitude (click for larger image)</div>
{:/nomarkdown}

{::nomarkdown}
<a href="/assets/AVA/MC/EQMatchPhase.png">
<img src="/assets/AVA/MC/Thumbnails/EQMatchPhase.jpg" alt="EQ Phase Match (click for larger image)">
</a>
<div class="image-caption">EQ Phase Match (click for larger image)</div>
{:/nomarkdown}

I took some time with a very well known Equalizer in minimum-phase mode to do a rough attempt at matching the response curve of AVA MC.

With a _similar_ curve, we get a similar phase response. When looking at the phase response of the competing multiband compressor, which clearly has crossovers in the signal path, it appears that AVA MC has no crossovers in the signal path.

It seems from this cursory look that AVA MC feeds the signal to an envelope detector/generator, then manipulates the gain of filters in the signal path using that envelope. This method is generally called a dynamic equalizer (not a multiband compressor!).

### Looking deeper

{::nomarkdown}
<img src="/assets/AVA/MC/SingleBandFreq.png" alt="Single Band Frequency Response">
<div class="image-caption">Single Band Frequency Response</div>
{:/nomarkdown}

{::nomarkdown}
<img src="/assets/AVA/MC/SingleBandPhase.png" alt="Single Band Phase Response">
<div class="image-caption">Single Band Phase Response</div>
{:/nomarkdown}

Firstly, I purchased [the above product](https://ddmf.eu/plugindoctor) specifically for this test. $19 for one section in an article. 

This time I used a different testing software which uses an impulse instead of a sweep to test AVA MC.

I activated a single band in AVA MC, stored the results, then attempted to match the frequency response with a [well known equalizer](https://www.fabfilter.com/products/pro-q-3-equalizer-plug-in). When the frequency response was matched, the phase response matched.

There are very clearly no crossovers in the processing signal path. That would mean that any dynamic action is adjusting the amplitude (and potentially bandwidth/shape) of a filter.

I'm fairly certain that AVA Multiband Compressor is a dynamic equalizer of some sort and _not_ a multiband compressor.

## Just a sine wave

{::nomarkdown}
<img src="/assets/AVA/MC/IMD.png" alt="IMD likely">
<div class="image-caption">IMD likely</div>
{:/nomarkdown}

Passing a sinewave through AVA (while it's active) shows what appears to be some [intermodulation distortion](https://en.wikipedia.org/wiki/Intermodulation). This is common in dynamic processors, but it is avoidable!

Just how bad is it?

{::nomarkdown}
<img src="/assets/AVA/MC/IMD2.png" alt="IDM part deux">
<div class="image-caption">IDM part deux</div>
{:/nomarkdown}

Eh. It's not that bad. -104dB down with attack at 1.5ms. I'm not going to sweat that. It could be improved, or nearly eliminated, but with sensible attack values (5ms+) it's nearly gone anyway.

## Bypass

{::nomarkdown}
<img src="/assets/AVA/MC/Bypass.png" alt="Bypassing">
<div class="image-caption">Bypassing</div>
{:/nomarkdown}

You knew it was coming. What about bypass??

The bypass still isn't sufficiently crossfaded, but it's better than a lot of plugins. If you want to see really awful results then [look no further than Waves' plugins]({% post_url 2017-11-21-What-do-I-want-in-an-EQ %}#bypass).

AVA MC's bypass only has a very faint audible click, which is more than fine for auditioning things. AVA MC's bypass is about on par with [Fabfilter's](https://www.fabfilter.com) implementation.

I'll give this one a 'pass'.

# Multiband vs Dynamic EQ

{::nomarkdown}
<a href="/assets/AVA/MC/MBvDyn.png">
<img src="/assets/AVA/MC/Thumbnails/MBvDyn.png" alt="Multiband Compressor vs Dynamic Equalizer">
</a>
<div class="image-caption">Multiband Compressor vs Dynamic Equalizer (Click for larger image)</div>
{:/nomarkdown}

The above investigation is not an indicated of poor quality processing. It's the opposite in fact. Let's explore the difference between what's generally called "Multiband compression" and "Dynamic Equalization".

Here are the main differences:

* Multiband Compressor - Signal that passes through the crossovers is the same signal that passes through the output.
* Dynamic Equalizer - Signal that passes through the crossovers does **not pass** to the output.

* Multiband Compressor - The dynamic processors changes the amplitude of the signal that passes through.
* Dynamic Equalizer - The dynamic processors adjust the amplitude of filters in the main signal path.

* Multiband Compressor - Crossover filters always are in effect on the signal, even when the processor is 'at rest'.
* Dynamic Equalizer - Crossover filters never touch the signal. When the processor is at rest, the passing signal is untouched.

* Multiband Compressor - Only one layer of interaction.
* Dynamic Equalizer - Filters and bands in detection signal could be altered separately, if designed to allow that access.

* Multiband Compressor - Steep crossovers impart a consistent, and audible, phase rotation at all times.
* Dynamic Equalizer - Steep crossovers do not impart any 'sound'. It is possible to have a precise 

"True" multiband compressors have their place. The 'always active' crossovers impart a sound that is desirable sometimes, but in the pursuit of 'transparency' this is clearly not an ideal signal path.

Dynamic Equalizers instead pull the crossovers out of the signal path and only use them to determine signal level for a given band, then that level drives an envelope generator that adjusts the level of a filter. The result is cleaner, and potentially more flexible..

Based upon my research, AVA MC is of the Dynamic Equalizer variety, but a unique variant. I personally feel that in the pursuit of relatively transparent processing, this is the better choice.

## AVA MC vs everything else

{::nomarkdown}
<a href="/assets/AVA/MC/AVADiag.png">
<img src="/assets/AVA/MC/Thumbnails/AVADiag.png" alt="AVA signal flow guess">
</a>
<div class="image-caption">AVA signal flow guess</div>
{:/nomarkdown}
I'm not _certain_ this is how AVA MC operates, but based on the above testing this is my guess.

AVA MC does not appear to have any crossovers or 'bands' in the detection path. It seems like the input signal is filtered and fed to 4 different envelope generators. Those envelope generators control the amplitude of 4 filters that are acting on the signal.

This is in contrast to how either multiband compressors or dynamic equalizers work, making this a somewhat unique processor if I'm correct.

**IMPORTANT! IMPORTANT!** After reading this article, please [read the followup article]({% post_url 2019-01-31-Harrison-AVA-MC-Part-2 %}).

# Technical conclusion

No conclusion here. I just prodded and poked.

It's most certainly not a 'multiband compressor' as nearly every other company defines it, but that's a naming/marketing issue.

# USER Experience

## GUI

{::nomarkdown}
<video autoplay loop muted class="gifvid">
<source src="/assets/AVA/MC/GUI.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
<div class="video-caption">GUI themes</div>
{:/nomarkdown}

The GUI is ok. It's not remarkable by any standard, but it's a step up from the original [XT-MC]({% post_url 2017-09-30-Review-of-Mixbus-effect-plugins %}#xt-mc-multiband-compressor) that was rather ugly.

AVA MC has an alternate yellow skin that draws on the style of the original XT-MC.

I don't personally find the GUI exciting, but it's difficult to find fault with it. Elements are proportionally spaced, I don't notice any glaring misalignment.

There is quite a bit of unnecessary empty space on the GUI, but I can't think of how I would improve that without making it look cluttered. I'm certainly not a GUI designer, so perhaps someone else could improve on it.

Thankfully it's not skeuomorphic either.

I found the interface easy to use, easy to identify what was going on and not fatiguing. It almost pains me to say it too, because at first glance I didn't think it looked good at all.

First glances aside, I still don't think it looks that great, but it's an improvement over XT-MC.

## Interaction

{::nomarkdown}
<video autoplay loop muted class="gifvid">
<source src="/assets/AVA/MC/Interact.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
<div class="video-caption">Interaction</div>
{:/nomarkdown}

AVA MC is one of the easiest to use "Multiband Compressors" (**AHEM** unique dynamic equalizers) out there.

* Left Slider - This seems to increase the input gain, and simultaneously reduce the output gain.
* Band controls - Threshold for each control, solo, in (mute), and frequency. The frequency control sets the left-most boundary of the filter
* Global envelope - These controls change the envelope of the dynamic movement of the filter bands.
* Sidechain - The entire process can be _controlled_ by one signal (the sidechain signal), yet act on another. There is an internal filtered path for sidechaining, or you can use completely different audio.
* Expand - Rather than _reducing_ the filter bands, AVA MC can increase them.

The global envelope controls are a bit of a disappointment. It's generally desirable to have different envelope characteristics per band. High frequency sounds happen quicker than low-frequency sounds _generally_, and appropriate attack/release for that is desirable in many cases. **HOWEVER** AVA MC appears to work on the full input signal, so global controls almost make sense... but I still dislike it.

Despite my dislike of the global envelope controls, I didn't find many times where it was a major issue when considering how this thing works.

## Analyzer

{::nomarkdown}
<video autoplay loop muted class="gifvid">
<source src="/assets/AVA/MC/Analyzer.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
<div class="video-caption">Analyzer</div>
{:/nomarkdown}

AVA MC has 2 analyzer modes, the first of which is rather unique.

* Lightning - Lighting mode is a line-based FFT style analyzer with trim (increase/decrease level) and decay controls. The display is rather small though. It displays a very small range of audio. I tested and it appears to only show about 18dB of audio. The result of this is that you only see the peaks of the signal's frequency spectrum. Since AVA MC maxes out at a 12dB range, I would consider this a smart design decision, even if it is annoying at first.
* Scroll - This is a vertically scrolling spectrograph. Frequency is shown on the X axis, time on the Y axis (scrolling). The amplitude of a given frequency is communicated with an increasing intensity of the colour from black to red to yellow.

This analyzer is in [some other AVA products]({% post_url 2018-05-01-Harrison-AVA-Mastering-EQ-investigation %}), and I'm not a fan of it in that context at all.

AVA MC using this style of analyzer works quite nicely. I'd say that it's more effective than most of the competition, and once you learn to use the "Scroll" mode it's easy to get what you want done quickly.

I _really_ like this analyzer style. The only company I know of with similarly capable analyzers in their products is [Melda Production](https://www.meldaproduction.com).

# Market Comparison

{::nomarkdown}
<img src="/assets/AVA/MC/Compare.png" alt="Comparison to Market Leaders">
<div class="image-caption">Comparison to Market Leaders</div>
{:/nomarkdown}

The primary competitor to AVA MC is likely the ubiquitous [Pro-MB](https://www.fabfilter.com/products/pro-mb-multiband-compressor-plug-in) or [O8N2 Bundle](https://www.fabfilter.com/products/pro-mb-multiband-compressor-plug-in).

AVA MC is much cheaper than these options. Surprisingly, [Pro-MB defaults to a dynamic EQ setup!](https://www.fabfilter.com/help/pro-mb/). This makes a direct comparison with AVA MC make more sense, even though AVA MC is somewhat different.

Pro-MB has per-band envelope, knee, ratio and makeup controls and sidechain. The GUI is clearly fancier as well. Pro-MB lets you disconnect the "control band" (sound that's used for a band's detection) so that you can act on one frequency range, but the detection follows another.

Pro-MB can also work like a traditional multi-band compressor with minimum-phase and linear-phase modes. It has compress and expand modes as well. It also has per-band look ahead, which is a fantastic feature.

AVA MC stands up pretty well to the feature set. The most significant "missing" feature would be the ability to unlike the processing and detection bands and the inability to act like a traditional multiband compressor, or that it doesn't appear to have internal crossovers per band.

Another option would be [TDR Nova GE](https://www.tokyodawn.net/tdr-nova-ge/). Similar price and featureset given that it's a Dynamic EQ. It has per-band envelope controls and ratio, unlike AVA MC. Nova also has a 'match' feature where Nova will listen to 2 signals and attempt to create a setup that matches the frequency response of signal 2 to signal 1.

TDR Nova GE is a bit more difficult to use, given the number of parameters. It may seem like a ridiculous complaint, but I have seen a number of people confused as to how to utilize Nova GE. AVA MC is much, much simpler to operate.

Yet another option is [apQualizr 2](http://www.apulsoft.ch/apqualizr2/). I was able to replicate AVA MC's behaviour closely in apQualizr with some effort. The amount of effort that was necessary was somewhat prohibitive to be considered for general use (though you could save a preset). AVA MC loses out in sheer functionality, but is much easier to use _for this specific task_.

AVA MC also scores some points due to it's uniqueness in not having internal crossovers controlling each filter band (though this can be replicated in apQualizr).

## Sidechain

{::nomarkdown}
<img src="/assets/AVA/MC/Sidechain.png" alt="Multiband Sidechaining">
<div class="image-caption">Multiband Sidechaining</div>
{:/nomarkdown}

AVA MC has the ability to accept an external sidechain, which is a feature missing from a number of Multiband Compressors and Dynamic Equalizers. 

I [wrote about the uses for this in a previous post]({% post_url 2018-08-09-Sidechain-Better-with-dynamic-EQ-sidechaining %}), along with how to create your own.

The gist of this is that you can utilize something like a kick drum to trigger compression on a bass guitar, **except** you would setup AVA MC so that only the low-end of the bass guitar is affect. Normal sidechaining would affect the _entire_ signal. Sidechaining with AVA MC (or any other similar product) yeilds a cleaner signal and doesn't create that temporary void.

You could just as well use the expand mode to do the opposite. Put AVA MC on an ambient mic, feed it the signal from a lavalier, set AVA MC to expand mode and now you can tune in a more natural sounding dialog on a dry lavalier (but without the boominess! Just don't expand the low end!).

As seen in the image above, you can clean up a mix quite quick with this feature. X is time, Y is frequency and amplitude of each frequency band is colours. Green is low, yellow is mid, red is high.

### Bugs and Annoyances

As of this review there was a few issues with the Sidechain.

* If you use VST3 in a host that doesn't support 'VST3 Sidechaining', then you're going to end up in a world of hurt. You can still send audio to the 3/4 input, but it will be mixed with the main input. Solo won't work correctly, the EQ won't work correctly. Nothing really works right.

    That means that if you want some of the [benefits that VST3 offers](https://www.steinberg.net/en/company/technologies/vst3.html), then you're out of luck unless your host _specifically_ supports VST3 sidechaining.

* The other problem is that some hosts don't solo all dependent tracks. This can effectively make the key solo button useless. It also can make the sidechain totally useless itself. Many DAWs will mute ALL tracks, even your sidechain key track, when you solo something. So you need to hunt that down and solo it as well. This isn't Harrison's fault by any means, but it is annoying nonetheless.

* The sidechain filter does not work alone. You can't filter the detection signal itself like in most compressors. This isn't _particularly_ important since this is a multiband processor, as you can just _not effect that frequency area_. The GUI does seem to indicate that this behaviour would be possible, and it would effectively add you sort of a 'half band' of extra control.

* Sometimes I would get some clicky behaviour when using the sidechain with kickdrums. Even when this happened, it sounded relatively pleasant.

* As of this version, the RTA does not show the sidechain signal when it is present. That means that if you have a sidechain signal controlling your compressor, then you can not see the signal that is 'doing the work'. I believe that the "pre" mode should show the sidechain, and the post mode should show the affected signal when sidechain is active.

# Conclusion

The point of AVA MC isn't to provide a giant of functionality and set ablaze with a canvas of controls. It's a simple setup that's made to help solve problems. If you have a part of your spectrum that peaks out sometimes, not always, then you can transparently tame it with AVA MC.

I tried it on quite a few recordings and even with extreme settings it was easy to forget it was there at times.

I [reviewed the direct ancestor of AVA MC before]({% post_url 2017-09-30-Review-of-Mixbus-effect-plugins %}#xt-mc-multiband-compressor), and I was not kind to it. I found it exceedingly confusing to utilize it like I expected a Multiband Compressor to act, and thusly I wrote it off as inferior to other options.

After spending significantly more time with AVA MC, I've realized that it's not much like other multiband compressors, because [it's not one at all!](#technical). With that knowledge in mind, I've found that it's a surprisingly easy to use alternative to other more complex dynamic equalizers on the market.

For the purpose of "Mastering" (as most people call it, the final processing of a track), AVA MC is a far better choice than multiband compressors as the crossovers are not in the signal path. Simply for this task alone it's valuable.

It is a unique enough product that I suspect it'd be valuable for even people with large plug-in collections. You _can_ replicate AVA MC fairly closely with any modular-like environment, but then you lose a lot of the ease-of-use.

There seem to be a few bugs (I was a beta tester too... blame this on me!), especially that the GUI's gain reduction controls appear to be incorrect? Hopefully this will be fixed, or someone from Harrison will tell me I'm wrong and explain why.

Buy or not? I'd say buy.

# Support Me!

This post took 15 hours to research, screenshot, write and edit. If you appreciate the information presented then <a href="/DonateNow/">please consider joining patreon or paying me for my time spent bringing you quality content!</a>







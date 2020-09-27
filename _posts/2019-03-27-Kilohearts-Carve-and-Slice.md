---
layout: post
title: Kilohearts Carve and Slice
comments: true
date:   2019-03-27_11:28:47 
categories: music
tags: ['Review']
image: /assets/Khs/SnapHeap.png
description: Kilohearts Carve and Slice EQs
---

{::nomarkdown}
<img src="/assets/Khs/SnapHeap.png" alt="SnapHeap integration">
<div class="image-caption">SnapHeap integration</div>
{:/nomarkdown}

[Kilohearts](https://kilohearts.com) is known for their [Snap Heap](https://kilohearts.com/products/snap_heap) product, which is quite is perhaps another review in itself, though it will feature here.

They released two Equalizer products a time back: [Carve](https://kilohearts.com/products/carve_eq) and [Slice](https://kilohearts.com/products/slice_eq).

There will only be cursory testing of the DSP itself to make sure it's operating as presented in the GUI... unless I find something interesting.

I will be mostly focusing on the workflow in Carve and Slice, along with the Snap Heap integration.

<!--more-->



# Contents
{:.no_toc}
* TOC
{:toc}

# Introduction

# Testing

The goal here is nothing more than to make sure that the displayed EQ curve matches the input/output, and that the phase response is somewhat reasonable. As long as those factors are reasonable, then I'll consider the rest 'to taste'.

## Carve

{::nomarkdown}
<img src="/assets/Khs/CarveTest.png" alt="Carve Settings">
<div class="image-caption">Carve Settings</div>
{:/nomarkdown}

{::nomarkdown}
<img src="/assets/Khs/CarveResultFreq.png" alt="Carve Frequency Results">
<div class="image-caption">Carve Frequency Results</div>
{:/nomarkdown}

{::nomarkdown}
<img src="/assets/Khs/CarveResultPhase.png" alt="Carve Phase Result">
<div class="image-caption">Carve Phase Result</div>
{:/nomarkdown}

{::nomarkdown}
<img src="/assets/Khs/CarveOverlay.png" alt="Carve Overlay">
<div class="image-caption">Carve Overlay</div>
{:/nomarkdown}

Everything is in order. What you see is what you get, and we have minimum phase response. Everything looks like what you'd want.

Nothing special here on a technical level, at least as far as input->output goes with a very simple test.

## Slice

{::nomarkdown}
<img src="/assets/Khs/SliceTest.png" alt="Slice Settings">
<div class="image-caption">Slice Settings</div>
{:/nomarkdown}

{::nomarkdown}
<img src="/assets/Khs/SliceResultFreq.png" alt="Slice Frequency Results">
<div class="image-caption">Slice Frequency Results</div>
{:/nomarkdown}

{::nomarkdown}
<img src="/assets/Khs/SliceResultPhase.png" alt="Slice Phase Result">
<div class="image-caption">Slice Phase Result</div>
{:/nomarkdown}

{::nomarkdown}
<img src="/assets/Khs/SliceOverlay.png" alt="Slice Overlay">
<div class="image-caption">Slice Overlay</div>
{:/nomarkdown}

Yep. We're all good.

# Common Features

### GUI Size

{::nomarkdown}
<video autoplay loop muted class="gifvid">
<source src="/assets/Khs/Size.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
<div class="video-caption">GUI Scaling</div>
{:/nomarkdown}

Adjusting the UI scale is so much nicer than other products. UI Scale is a 'knob' rather than an annoying drop-down menu that requires multiple clicks to find the size you need. You click it and drag, and the GUI changes size.

It's so fast.

I hated drop down boxes before, but this makes me hate them more.

**BUT WAIT**, there's more. If you scale up, then down, it doesn't make the entire window smaller. It keeps the main curve view the same size. Some people may find this annoying, and it's possible this was a workaround on their part to deal with hosts that resize windows poorly, but I think it's great. This behaviour means that you can use the UI Size knob as a window size adjuster combined with a UI Scaler.

### Mix

{::nomarkdown}
<img src="/assets/Khs/Mix.png" alt="Mix knob">
<div class="image-caption">Mix knob</div>
{:/nomarkdown}

A mix knob on an EQ may seem out of place to you. It's a wonderful feature. If you have a curve that sounds just about right, but you've gone too far in in general then you can just lower the mix. This effectively scales down the result.

I love using wet/dry or mix controls on EQ. I find it easier to work in an exaggerated way so I can easily hear what I want to happen, then I can tone it down until it feels right in the mix.

That little mix knob is not to be overlooked in any product. Carve and Slice have it.

### Mid/Side Left/Right

{::nomarkdown}
<video autoplay loop muted class="gifvid">
<source src="/assets/Khs/MS.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
<div class="video-caption">Mid Side EQ</div>
{:/nomarkdown}

The "mid" channel is what's common between the left and right channels, and the "sides" are what is uncommon between them. So if you add L+R, the center channel is magnified by 6dB, and the "sides" are cancelled (add +1 and -1, what do you get?). You can reconstitute the signal by Mid - Side and Mid + Side to get your left and right channels back.

This simple concept has remarkable implications for EQing. If you have a complex stereo signal, then you can target stereo information. Kick drum too loud? You'll want to work on the low-end on the mid channel. Wide pad synths are too bright? Just a high shelf on the side channels.

Both Carve and Slice allow you to specify if a particular filter is acting on the left or right side, _or_ the mid or side channels.

This is a fairly common thing for modern EQs, but somehow many products still don't have it. Carve and Slice both have it.

### Undo

{::nomarkdown}
<video autoplay loop muted class="gifvid">
<source src="/assets/Khs/Undo.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
<div class="video-caption">Undo</div>
{:/nomarkdown}

Some DAWs still don't have undo for plugins or their mixer. If you don't have that capability then you need to rely on the plugin to let you undo and redo. Carve and Slice both have their own undo stack.

### A and B

{::nomarkdown}
<video autoplay loop muted class="gifvid">
<source src="/assets/Khs/AB.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
<div class="video-caption">ABing</div>
{:/nomarkdown}

You can save settings to A or B so that you can quickly audition variances between curves.

Common feature, but a great one.

# Solo Workflow

## Carve

Carve is a [graphical equalizer](https://en.wikipedia.org/wiki/Equalization_(audio)#Graphic_equalizer), meaning that it's a bank of filters at preset frequencies. You create equalization curves by using the summation of each of these filters.

Carve doesn't present this like a classic graphical EQ with just a bunch of sliders. It presents it as the resulting equalization curve that you are directly controlling.

So there's a few features here that I found particularly cool about Carve.

### Sculpt

{::nomarkdown}
<video autoplay loop muted class="gifvid">
<source src="/assets/Khs/Sculpt.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
<div class="video-caption">Sculpt</div>
{:/nomarkdown}

Sculpt allows you to grab an area of the curve within the dotted lines and move it up or down. The "width" is adjustable by the size knob or the mousewheel.

That is nothing revolutionary.

There is this small feature that is easy to look over, that I find brilliant. The curve is not changed until you let go of the mouse. Now you can drag your mouse around to audition changes without actually adjusting the curve.

### Select

{::nomarkdown}
<video autoplay loop muted class="gifvid">
<source src="/assets/Khs/Select.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
<div class="video-caption">Select</div>
{:/nomarkdown}

Select presents each of the filter bands as a node that you can drag. If you need more precision then this is your mode.

Not exciting.

### Pencil

{::nomarkdown}
<video autoplay loop muted class="gifvid">
<source src="/assets/Khs/Pencil.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
<div class="video-caption">Pencil Mode</div>
{:/nomarkdown}

Pencil mode allows you to just draw. Click, drag and EQ curve appears.

This feature might seem neat, but I can't think of any uses in actual production where it would be superior over [Sculpt](#sculpt) mode.

Most of the time in production you are searching for a specific thing, _or_ you know exactly what you need to do. Neither of these two scenarios are benefited by the pencil tool.

[Harrison's AVA Mastering EQ]({% post_url 2018-05-01-Harrison-AVA-Mastering-EQ-investigation %}) has a similar mode, but it _is_ useful because it allows you to smooth out an existing curve. Carve does not have this.

There is a weird "bug" where the filter that you initially click does not respond to further movements as well. I can't imagine this is intentional.

### Match

{::nomarkdown}
<video autoplay loop muted class="gifvid">
<source src="/assets/Khs/Match.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
<div class="video-caption">Matching</div>
{:/nomarkdown}

Carve can capture the spectrum of the sidechain, capture the spectrum of the main input, then apply the difference between those spectrums.

This isn't a groundbreaking feature by any means, and Carve doesn't do it in a technically superlative way either. That doesn't mean that it's useless though. Here's some benefits it offers for this workflow:

* Factory presets - A number of preset spectrums to use instead of measuring your main or sidechain signal. This lets you quickly match/invert the spectrum from a known source and do so quickly.
* Quick - Carve's workflow is the quickest I've used for this feature. You can be done in 4 clicks, and the resulting curve is easy to adjust due to the graphical equalizer base.
* Save/Load - Saving and loading spectral profiles is a common feature, but it's simple and quick in Carve.

There are limits to how detailed the match can be, which is generally a good thing since I think many people tend to use match settings that are far too extreme. Extreme settings generally lead to poor sounding results.

My only concern is that the analysis does not have a tilt feature. You can't rotate the resulting match and my experience is that the lack of rotation leads to rather bright sounding matches. It feels like it's 1.5dB or so tilted.

There's another **BIG** issue: as you can see in the video, it's possible to have a match that blasts your ears with something crazy. Look at that initial filter curve after the match, it's a _huge_ boost at 550hz! That should NOT be allowed.

## Slice

### Auto Oversampling

{::nomarkdown}
<img src="/assets/Khs/Oversampling.png" alt="Oversampling">
<div class="image-caption">Oversampling</div>
{:/nomarkdown}

[Cramping is a thing that happens]({% post_url 2017-09-25-Harrison-Mixbus-EQ-Revisited %}#harrison-comparison) in EQs where a filter's response changes the closer it gets to half the sample rate of the audio.

Slice can oversample to avoid that issue and provide a frequency and phase response that is closer to what you'd see in an analog EQ.

The neat thing that I like is auto mode. Oversampling is a destructive process, and it's only needed when you have certain high-frequency filters. Slice can intelligently decide when oversampling is necessary. I wish all EQ's had this option!

Filter cramping isn't necessarily bad unless you're claiming to provide an analog equivalent response. It is annoying at times though, and Slice handles the issue elegantly.

### Peaking filters with slope

{::nomarkdown}
<video autoplay loop muted class="gifvid">
<source src="/assets/Khs/Slope.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
<div class="video-caption">Peaking Slope</div>
{:/nomarkdown}

It's somewhat uncommon to have Q/bandwidth and slope on peak/bell bands, and Slice has it.

People get really excited about this feature, but I've never found a practical use for it. It lets you make a more precise filter response curve with fewer bands, but rarely with fewer clicks.

# Things I don't like

## Both

### Pan and Zoom

{::nomarkdown}
<video autoplay loop muted class="gifvid">
<source src="/assets/Khs/PanZoom.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
<div class="video-caption">Pan and Zoom</div>
{:/nomarkdown}

I don't mean pan like you think of in audio. Panning in this context is like the film or graphic design sense: moving an existing frame to reveal new information.

I don't think that I've ever desired pan or zoom in an EQ. After using Pan and Zoom in Carve and Slice... I still don't care.

This indifference is compounded by the fact that the manual says you can pan&zoom along both frequency and amplitude axes in Carve, but I can't figure out how to zoom along the frequency axis. If you can't zoom, then panning is meaningless.

Zooming in amplitude works, but do you really need to tweak a filter band with your screen at +/- 0.1dB? Not normally, **but** Carve does not have a 'fine tune' for filter bands (in a graphic EQ? REALLY??) Slice does have fine tune with the shift modifier. I find zoom to be useless in slice, and to be a useless workaround in Carve.

Slice allows you to zoom via frequency, but why does it even matter? You can just hold shift and do the same thing.

The spectrum doesn't zoom or pan either. If you're working on something exceptionally precise then that's one of the few times I would rely on a spectrum analyzer for EQing. Lamentably the analyzer isn't affected by zoom or pan.

Zoom and Pan are always available by clicking the dB scale on the right, but not the frequency scale.

They could fix this by making frequency zoom work, having a quick way to unzoom, having zoom&pan for the analyzer and making pan a middle click (like in many graphics softwares).

### Spectrum Analyzer

{::nomarkdown}
<video autoplay loop muted class="gifvid">
<source src="/assets/Khs/Spectrum.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
<div class="video-caption">Spectrum Analyzer</div>
{:/nomarkdown}

Carve and Slice have spectrum analyzers, but they are basic. You have 1/3rd octave and 'exact' (just FFT bins) modes. There's a semitone mode that _appears_ to split up the spectrum into semitone divisions, but it's a mapping of semitone bins to FFT bins. You don't get precise semitone divisions (this IS possible! They don't do it). There's also the rarely useful octave mode.

You can't change the FFT bin size, the window, the averaging, overlap etc... You can change the falloff and display type.

It's a complete shame. A modern style EQ gains one of its primary workflow benefits from a flexible analyzer. "Working by eye" isn't the workflow that I prefer when EQing, and I'll happily just use a set of knobs usually. When I grab something like Carve or Slice then I expect to be doing precise, accurate and _informed_ work.

Neither Carve nor Splice offer an exceptional amount of information beyond a very simple analyzer and what you can hear. Sometimes it even presents misleading information due to the normalization.

### Snap Heap and Multipass

{::nomarkdown}
<img src="/assets/Khs/SnapHeap.png" alt="SnapHeap integration">
<div class="image-caption">SnapHeap integration</div>
{:/nomarkdown}

Snap Heap and Multipass are hosts for Kilohearts plugins called "snapins". Carve and Slice are both snapins.

The benefit of the Snap Heap system is that you have a unified modulation system with macros, envelopes, LFOs, pitch tracking and MIDI mapping. You can then save these multi-effects setups and recall them later. You also have 4 channels of parallel processing.

I know some people that absolutely love this system, and I can understand why.

~~So you load Carve or Slice in and you want to use these awesome features and then... you can control the mix parameter???

That's all?

The manual doesn't explain how you can use anything else, and I was unable to determine how to do this myself.

I don't see any reason why you would want to use this over another more complete system like [mux](http://www.mutools.com/mux-product.html) or [metaplugin](https://ddmf.eu/metaplugin-chainer-vst-au-rtas-aax-wrapper/) (which doesn't have modulation, but it does have other benefits).

Multipass is a multiband system, but once again there's products that offer you way more like [MB-7](https://www.bluecataudio.com/Products/Product_MB7Mixer/).

I suppose if you're already using the snapin system then it's maybe worth it, and the Snap Heap system is pretty cool. There are other systems out there that give you similar benefits, but with any VST/AU you want.

Hopefully they address this soon!~~

These things were addressed, and you can now modulate Carve and Slice as you may want to!

### Preset Browser

{::nomarkdown}
<video autoplay loop muted class="gifvid">
<source src="/assets/Khs/Preset.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
<div class="video-caption">Preset Browser</div>
{:/nomarkdown}

The preset browser squishes your view of what's happening!?!?

No search, no tagging, no ... anything. That's pretty normal. Not a big deal.

### Factory presets

There's 3 factory presets in Carve and 6 in Slice.

EQ presets are not useful for a 'grab and go', but they could at least provide something more than 3 cheesy things.

A year ago I was not a preset user in _any_ way, however I've been forcing myself to use presets in every product I can. I've quickly learned that they're incredibly useful for getting a decent _starting point_. Good presets offer insight into how the product works as well.

I love presets now! I can work so much more quickly by grabbing something that's close to the concept I need/want, then adjusting it as I need. I can learn about products by using presets and seeing how they work. Sometimes I can even get lucky and nail what I want with 2-3 clicks instead of messing with a bunch of parameters and risking falling down the rabbit hole.

Carve is just 3 lousy presets. Slice is 6 presets that are more useful, but limited.

meh.

## Carve

### Automation

{::nomarkdown}
<img src="/assets/Khs/NoAuto.png" alt="No filter automation??">
<div class="image-caption">No filter automation??</div>
{:/nomarkdown}

Carve has a fixed number of bands. Yet you can't automate them?

Slice has a variable number of bands, but they are automatable (they are pre-published).

Smooth automation of the frequency parameter of filters can be difficult from a DSP perspective, but Carve doesn't even have that to worry about.

What's the rub here?

## Slice

### Filters drawing

Slice has the normal set of filters. High/Low pass, peaking, high/low shelves and bandpass. You can select to only draw a specific type of filter (by mouse click on a menu bar) or use an 'auto' mode that selects the filter depending on where you click on the line.

There's some problems here from a workflow perspective though.

* You can only click on the baseline to create a node!! Clicking off the line will create a 'box select' so you can select multiple filters. You can not click on the summed response curve or a filter's response curve.
  * Being locked to the baseline is a notable pain point when utilizing [pan and zoom](#pan-and-zoom). The more you zoom, the further the baseline is from where you may want to create a node.
* No hotkeys for quickly selecting a certain filter when in auto mode. Either you struggle with auto mode, or play the clicking game.
* Filter specifics are hidden by default and in a scrolling list. Finding what you want is painful despite the fact that clicking a node will auto-scroll you.

Combined with the [poor analyzer](#spectrum-analyzer) I've found almost zero benefit to using this method of EQing over a standard knob based EQ. It's arguably more difficult even!

It's admirable that they tried something new instead of [copying](https://www.sonnox.com/plugin/oxford-dynamic-eq) [Pro-Q 3](https://www.fabfilter.com/products/pro-q-3-equalizer-plug-in), but Pro-Q's design is brilliant. It works. It makes life easier.

Slice seems to have taken a modern design, and made it more difficult to use.

A few small changes could greatly improve this though:

* Allow clicking on the response curve to add a band.
* Display the bands in a horizontal list, as this would show more bands at once and make it easier to find bands..
* Use modifiers for adding bands when in auto mode.
* Improve auto mode's detection for high/low pass.

# Conclusion

I don't understand Slice. I can think of at least 6 other products on the market, in the same price range, that offer more and offer it a package that's at least as easy to utilize: [PrimeEQ](https://www.voxengo.com/product/primeeq/), [apQualizr 2](http://www.apulsoft.ch/apqualizr2/), [TB Equalizer 4](https://www.toneboosters.com/tb_equalizer_v4.html), [SlickEQ GE](https://www.tokyodawn.net/tdr-vos-slickeq-ge/), [Crave EQ](https://cravedsp.com/crave-eq), [Toned Max](http://lvcaudio.com/plugins/toned-max/). I'm sure there's even more! Nearly _every DAW_ comes with an EQ that offers a superior workflow and/or feature profile to Slice.

Slice has the benefit of [being a snapin](#snap-heap), but what does that really offer you? It's currently a closed system that only necessitates a product like this because it's closed. Snap Heap itself is cool, and a good value when it's on sale. Slice... :\

Carve on the other hand, I like. It offers nothing unique, but it does offer a set of tools that don't necessarily overlap with most DAW's stock products. It has a useful [matching](#match) feature and the filters are totally fine.

I'm really looking forward to Kiloheart's Phase Plant synthesizer. I am also hoping that they take some time to survey the market and see if they can improve Slice.

# Support Me!

This post took 17 hours to research, screenshot, write and edit. If you appreciate the information presented then <a href="/DonateNow/">please consider joining patreon or paying me for my time spent bringing you quality content!</a>







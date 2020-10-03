---
layout: ['post', 'reader']
title: "Harrison AVA Multiband Compressor Review: Part 2"
comments: true
date:   2019-01-31_08:43:50 
categories: Music
tags: ['Review']
image: /assets/AVA/MC/New/AmplitudeNew1Setup.png
description: AVA MC - Part 2 Electric Broke-alo
---

{::nomarkdown}
<img src="/assets/AVA/MC/New/NewClickBait.png" alt="This surely isn't clickbait.">
<div class="image-caption">It seems there was an accident Mrs. Smith, I'm sorry but your husband...</div>
{:/nomarkdown}

Uh oh. AVA Multiband Compressor was serendipitously broken. [I reviewed it broken]({% post_url 2019-01-26-Harrison-AVA-MC-Review %}), and I _liked_ it broken. Harrison Consoles has issued an update that fixes this, but what's happened? Why? How? What's new? What happened to the old behaviour?

And more importantly, should you be mad?

<!--more-->



# Contents
{:.no_toc}
* TOC
{:toc}

# Video!

<iframe width="800" height="450" src="https://www.youtube.com/embed/e56tR6is_Do" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Audio, Video and drawings! Yay! Same info that's here.

# Why do this again?

If you recall from the [previous installment]({% post_url 2019-01-26-Harrison-AVA-MC-Review %}), I found that AVA Multiband Compressor worked a good bit differently than other products worked, or than I expected.

Turns out... that wasn't intended.

It would also explain why I was so pleasantly surprised that I liked AVA MC, which was supposed to be a new generation of [XT-MC](https://harrisonconsoles.com/site/mixbus-plugins.html).

The desired behaviour was that the sidechain did not split the input signal into bands. That allowed you to do some fun things with a pre-filtered signal making changes to other areas of the spectrum.

**EXCEPT** That's what happened in the main signal path.

Harrison has since "fixed" this, but in a clever non-destructive way. Please follow me as I explore what's happening with AVA MC now.

# New Release - Technical - Unchanged

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

The fact that AVA MC does not split the signal into bands inside the main signal path is true.

[The entire phase section from the previous post is true]({% post_url 2019-01-26-Harrison-AVA-MC-Review %}#phase-response).

That leaves us with the fact that AVA MC is _not_ a multiband compressor, but is instead a dynamic equalizer. **THIS IS A GOOD THING** if you are looking for transparent multi-band processing.

## IMD

{::nomarkdown}
<img src="/assets/AVA/MC/IMD.png" alt="IMD likely">
<div class="image-caption">IMD likely</div>
{:/nomarkdown}

The result here is nearly identical.

## Bypassing

{::nomarkdown}
<img src="/assets/AVA/MC/Bypass.png" alt="Bypassing">
<div class="image-caption">Bypassing</div>
{:/nomarkdown}

No change here.

# New Release - Technical - NEW BEHAVIOUR

## Amplitude Response

{::nomarkdown}
<img src="/assets/AVA/MC/New/AmplitudeNew1.png" alt="Amplitude Response">
<div class="image-caption">Amplitude Response</div>
{:/nomarkdown}

{::nomarkdown}
<img src="/assets/AVA/MC/New/AmplitudeNew1Setup.png" alt="Amplitude Response Setup">
<div class="image-caption">Amplitude Response Setup</div>
{:/nomarkdown}

The first thing to notice is that the gain reduction meters are wrong... still. Luckily, they are "less wrong", which is nice.

What appeared to be a pre-filter isn't as obvious if it's still there, or is it?

### Pre-filter or Sensitivity?

{::nomarkdown}
<video autoplay loop muted class="gifvid">
<source src="/assets/AVA/MC/New/Sweep.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
<div class="video-caption">Sweeping</div>
{:/nomarkdown}

Running a sine sweep slowly through the plugin to see how the gain reduction meters respond. We can clearly see that the bands do not react equally. Low and high are more aggressive. Low mid is second tier of aggressiveness, and high mids are fairly relaxed.

This is very similar to an inverted [fletcher munson curve](https://en.wikipedia.org/wiki/Fletcher–Munson_curves). That would mean that using this on dialogue would increase intelligibility, reduce rumble and lessen room noise/echo/reverb.

Fairly clever design, assuming I've analyzed this correctly.

## AVA MC Signal flow

{::nomarkdown}
<img src="/assets/AVA/MC/New/AVADiagOld.png" alt="This ain't it (I also diagrammed this poorly)">
<div class="image-caption">This ain't it (I also diagrammed this poorly)</div>
{:/nomarkdown}

{::nomarkdown}
<img src="/assets/AVA/MC/New/AVADiagNew.png" alt="This is the correct signal flow now">
<div class="image-caption">This is the correct signal flow now</div>
{:/nomarkdown}

I'm [using some new graphing software](https://www.omnigroup.com/omnigraffle), which is why the style of graphic looks different.

Previously the default mode of AVA MC was to send the full signal to the dynamic processors (envelope follower/generator) before using that signal on the filter amplitudes.

AVA MC is a normal dynamic equalizer by default then! That's less interesting... or is it?

### AVA MC Signal Flow - Old mode

{::nomarkdown}
<img src="/assets/AVA/MC/New/AVADiagNewOld.png" alt="The old mode in the new release.">
<div class="image-caption">The old mode in the new release.</div>
{:/nomarkdown}

The initial release mode is still available! 

* Turn on the EQ in the sidechain, but _not_ the `EXT` mode.

This causes the input signal to not go to a series of filters before entering the dynamics processor. All bands are controlled by the same signal. This is the same as the sidechain mode.

# New (old) mode subjective

Let's just be clear here: **I don't like XT-MC**. AVA Multiband Compressor's _correct_ main mode is the same as XT-MC. It's a dynamic equalizer with somewhat misleading gain reduction meters, but with easy to use controls.

Luckily, Harrison kept the 'mistake' that I really liked. The 'eq-only' mode basically engages the sidechain setup utilizing the main input. I found this to be a subtle and useful tool.

The sidechain mode, while utilizing another signal, is incredibly useful compared to other dynamic EQs. Utilize a filter on the incoming signal with a third-party filter, and then you can use AVA MC's compress or expand modes to solve all sorts of common issues in a mix. It's an excellent tool.

# Bonus content

{::nomarkdown}
<img src="/assets/AVA/MC/New/Compare.png" alt="Comparing Competitors">
<div class="image-caption">Comparing Competitors</div>
{:/nomarkdown}

Just for fun, I made the simplest possible change to AVA MC that I thought sounded good on some vocals. I took some pink noise, played it through that setting and captured the average over time.

AVA Multiband Compressor is a dynamic device, and this does not measure the dynamic nature of it. This is just the spectral response over time.

So I took 3 other products and measured how long it took me to get a similar result, by ear.

* AVA Multiband Compressor - 25 seconds - Satisfactory result
* [TDR Nova GE](https://www.tokyodawn.net/tdr-nova-ge/) - 20 seconds - I was unable to target the area that I needed. After recognizing that, I gave up.
* [Fabfilter Pro-MB (dynamic mode)](https://www.fabfilter.com/products/pro-mb-multiband-compressor-plug-in) - 2 minutes, 41 seconds - Unable to get the dynamic response correct, it was consistently too slow or too jarring (with lookahead). Rather frustrating honestly. I fully expected to get a better result quicker with Pro-MB.
* [Fabfilter Pro-Q 3](https://www.fabfilter.com/products/pro-q-3-equalizer-plug-in) - 16 seconds - No attack/release controls. Matched the frequency response and gave up.

What does this tell us? Not much. This section is almost worthless, but it was fun for me.

# Conclusion

Harrison made an oopsie.

They fixed it and kept the 'broken' (but fortuitous) functionality. Now AVA Multiband Compressor is a better product overall.

While I am not a fan of the default mode, I have to give kudos to Harrison for fixing this issue in a clever and functional fashion.

# Support Me!

This post took 8 hours to research, screenshot, write and edit. If you appreciate the information presented then <a href="/DonateNow/">please consider joining patreon or paying me for my time spent bringing you quality content!</a>







---
layout: ['post', 'reader']
title: "DAW v DAW - Part 2: Automation"
comments: true
date:   2019-03-10_08:55:20 
categories: music
tags: ['Rant', 'DAW', 'Testing']
image: 
description: DAW Automation differences, and how to test for yourself.
series: DAWDiffer
---

{::nomarkdown}
<img src="/assets/Differ/Automate1Header.png" alt="Which is it">
<div class="image-caption">This is a simple automation fade of a test signal in a DAW... which is it?</div>
{:/nomarkdown}

[Last time I set out to show that DAWs are different in common use]({% post_url  2019-02-24-Daw-V-Daw-Differ %}), and folks were curious about the automation part.

So let's dive deeper and let me show you how to replicate (or refute!) my tests.

**Other posts in this series**:

{% assign differ = site.posts | where: "series", "DAWDiffer" | sort: 'date' %}
<ul>
{% for my_page in differ %} 
    {% if page.url != my_page.url  %}
        <li><a class="page-link" href="{{ my_page.url | prepend: site.baseurl }}">{{ my_page.title | split: '-' | last }}</a></li>
    {% endif %}
{% endfor %}
</ul>
<!--more-->



# Contents
{:.no_toc}
* TOC
{:toc}

# Video

<iframe width="800" height="450" src="https://www.youtube.com/embed/tXBRLdgzZ4s" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

This time I did the video first because I thought the text article would be boring. I think I made the right choice.

# Test it yourself

Head over to grab [Sonic Visualizer](https://sonicvisualiser.org).

* Drop your file in it
* Right click -> Layers -> Add Spectrogram
* Scale dBV
* Window 8192 or 4096 (Frequency resolution)
* Overlap doesn't matter (93.75% is important for some other tests though! This gives temporal resolution relative to the FFT size)
* Log bins

That's it.

# The File

[Here is the test file that I used](https://www.admiralbumblebee.com/assets/Differ/TestSine.wav).

# The Test

{::nomarkdown}
<img src="/assets/Differ/Setup.png" alt="120bpm, 1 bar fade">
<div class="image-caption">120bpm, 1 bar fade</div>
{:/nomarkdown}

For my testing here I set the tempo to 120bpm and created a fade from the start of the project to bar 2. Then I rendered 2 full bars.

That's it.

# Results

I've ordered my results from best to worst with commentary.

## Test Signal

{::nomarkdown}
<a href="/assets/Differ/Automate/Test.png">
<img src="/assets/Differ/Automate/Thumbnails/Test.png" alt="Test Signal">
</a>
<div class="image-caption">Test Signal (click for larger image)</div>
{:/nomarkdown}

Reference for you.

## Digital Performer 10.0

{::nomarkdown}
<a href="/assets/Differ/Automate/DP.png">
<img src="/assets/Differ/Automate/Thumbnails/DP.png" alt="DP">
</a>
<div class="image-caption">Digital Performer (click for larger image)</div>
{:/nomarkdown}

Cleanest and fades to infinity nicely.

This isn't _necessarily_ a better fade to zero than something like [Reaper](#reaper). It fades to zero in a less-than-linear fashion which results in the FFT showing a prettier result.

Audibly, it does appear to be a nicer sounding fade to me.

## FLStudio 20.1

{::nomarkdown}
<a href="/assets/Differ/Automate/FL.png">
<img src="/assets/Differ/Automate/Thumbnails/FL.png" alt="FL">
</a>
<div class="image-caption">FLStudio 20.1 (click for larger image)</div>
{:/nomarkdown}

Excellent result. That "poof" at the end is a result of the fade not completing within the FFT window.

## Ardour 5.12

{::nomarkdown}
<a href="/assets/Differ/Automate/Ardour.png">
<img src="/assets/Differ/Automate/Thumbnails/Ardour.png" alt="Ardour">
</a>
<div class="image-caption">Ardour (click for larger image)</div>
{:/nomarkdown}

Excellent result. Slightly more noise than the previous results.

Note that there's a fade at the beginning. That's my fault.

## Reaper 5.972

{::nomarkdown}
<a href="/assets/Differ/Automate/Reaper.png">
<img src="/assets/Differ/Automate/Thumbnails/Reaper.png" alt="Reaper">
</a>
<div class="image-caption">Reaper 5.972 (click for larger image)</div>
{:/nomarkdown}

Excellent result. The fade seems to drop to infinity rather abruptly.

## Cakewalk 2018.11

{::nomarkdown}
<a href="/assets/Differ/Automate/Cakewalk.png">
<img src="/assets/Differ/Automate/Thumbnails/Cakewalk.png" alt="Cakewalk">
</a>
<div class="image-caption">Cakewalk 2018.11 (click for larger image)</div>
{:/nomarkdown}

Excellent result. Nearly identical to [Reaper](#reaper)

## Cubase 10.0.15

{::nomarkdown}
<a href="/assets/Differ/Automate/Cubase.png">
<img src="/assets/Differ/Automate/Thumbnails/Cubase.png" alt="Cubase">
</a>
<div class="image-caption">Cubase 10.0.15(click for larger image)</div>
{:/nomarkdown}

Excellent result, except for barely audible noise during the fade.

## Pro Tools 2018.12

{::nomarkdown}
<a href="/assets/Differ/Automate/PT.png">
<img src="/assets/Differ/Automate/Thumbnails/PT.png" alt="PT">
</a>
<div class="image-caption">Pro Tools 2018.12 (click for larger image)</div>
{:/nomarkdown}

Would be a great result, but I consistently get these light bursts of noise during automation. It's around -50dBFS cumulatively.

## Ableton Live 10.0.6

{::nomarkdown}
<a href="/assets/Differ/Automate/Ableton.png">
<img src="/assets/Differ/Automate/Thumbnails/Ableton.png" alt="Ableton">
</a>
<div class="image-caption">Ableton Live 10.0.6 (click for larger image)</div>
{:/nomarkdown}

OK modulation, as it is a bit noisy, but Live applies fades by default to all audio samples. **GROSS**.

{::nomarkdown}
<img src="/assets/Differ/LiveFades.png" alt="Live Fades">
<div class="image-caption">Live Fades</div>
{:/nomarkdown}

You can turn it off here.

## Bitwig 2.5 Beta

{::nomarkdown}
<a href="/assets/Differ/Automate/Bitwig.png">
<img src="/assets/Differ/Automate/Thumbnails/Bitwig.png" alt="Bitwig">
</a>
<div class="image-caption">Bitwig 2.5 Beta(click for larger image)</div>
{:/nomarkdown}

Some light distortion.

## Reason 10.2.2d1

{::nomarkdown}
<a href="/assets/Differ/Automate/Reason.png">
<img src="/assets/Differ/Automate/Thumbnails/Reason.png" alt="Reason">
</a>
<div class="image-caption">Reason 10.2.2d1 (click for larger image)</div>
{:/nomarkdown}

[IMD](https://en.wikipedia.org/wiki/Intermodulation). Clearly audible.

## Logic 10.4.4

{::nomarkdown}
<a href="/assets/Differ/Automate/Logic.png">
<img src="/assets/Differ/Automate/Thumbnails/Logic.png" alt="Logic">
</a>
<div class="image-caption">Logic 10.4.4 (click for larger image)</div>
{:/nomarkdown}

Disgusting. This has been around since Logic 9.

## Studio One 4.1.2

{::nomarkdown}
<a href="/assets/Differ/Automate/StudioOne.png">
<img src="/assets/Differ/Automate/Thumbnails/StudioOne.png" alt="StudioOne">
</a>
<div class="image-caption">Studio One 4.1.2 (click for larger image)</div>
{:/nomarkdown}

~~If you thought Logic was bad, just you wait! The folks at Presonus have some work to do.~~

**EDIT**: And work they did. This is fixed in 4.5.

## Waveform 10.0.26

{::nomarkdown}
<a href="/assets/Differ/Automate/Waveform.png">
<img src="/assets/Differ/Automate/Thumbnails/Waveform.png" alt="Waveform">
</a>
<div class="image-caption">Waveform 10.0.26 (click for larger image)</div>
{:/nomarkdown}

As awesome as Waveform is, this was by far the worst DAW that I tested.

# Conclusion

**DO NOT TRUST ME**. Try this yourself. [The tools are free](https://sonicvisualiser.org).

Should you care? Probably not. Is it interesting? I hope so.

Should you drop your favorite software over this? Very unlikely.

Some companies have some real issues though.


# Support Me!

This post took 13 hours to research, test, write and post. The video took 8 hours. If you appreciate the information presented then <a href="/DonateNow/">please consider joining patreon or paying me for my time spent bringing you quality content!</a>







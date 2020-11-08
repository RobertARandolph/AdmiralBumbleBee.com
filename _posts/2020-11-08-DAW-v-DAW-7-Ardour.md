---
layout: ['post', 'reader']
title: DAW v DAW 7.2 - Ardour
comments: true
date:   2020-11-08_16:40:01 
categories: music
tags: ['Testing', 'DAW', 'Ardour']
image:
description:
header:
header-caption:
series: latency
---

Next up in the latency/jitter testing is Ardour!

If you don't understand what this is, please [read the introduction post]({% post_url 2020-10-25-daw-v-daw-721 %}) (This article is being updated if/when changes are made!).

**Other parts in this series:**

{% assign latency = site.posts | where: "series", "latency" | sort: 'date' %}
<ul>
{% for my_page in latency %} 
    {% if page.url != my_page.url and my_page.layout != "reader" %}
        <li><a class="page-link" href="{{ my_page.url | prepend: site.baseurl }}">{{ my_page.title | split: '-' | last }}</a></li>
    {% endif %}
{% endfor %}
</ul>

<!--more-->


# Contents
{:.no_toc}
* TOC
{:toc}

# Introduction

[Read the introduction post]({% post_url 2020-10-25-daw-v-daw-721 %}). I have updated this post since it was originally published.

For Ardour I used [Kontakt](https://www.native-instruments.com/en/products/komplete/samplers/kontakt-6/). VST version.

The `Preferences->Audio->Buffering` options did not affect the results, nor did any other setting that I found. The developers tend to read these articles, so if I made an error in this regard then I hope one of you very fine people let me know. :)

Ardour reports latencies for the device of:

* Input - 156 samples
* Output - 145 samples

When using the `Window->Audio/Midi Setup->Calibrate Audio" function, here are the results:

* 64 sample buffer
    * Roundtrip - 429 samples (8.938ms)
    * Systemic Latency - 301 samples (6.271ms)
* 256 sample buffer
    * Roundtrip - 812 samples (16.917ms)
    * Systemic Latency - 300 samples (6.250ms)
* 1024 sample buffer
    * Roundtrip - 2342 samples (48.812ms)
    * Systemic Latency - 295 samples (6.146)

I suspect the difference between the test results and Audio->Audio result is the MIDI subsystem and/or the device MIDI latency.

(Same results as [Mixbus]({% post_url 2020-11-08-DAW-v-DAW-7-Mixbus %})).

Unrelated to this test, but Ardour/Mixbus's Audio Calibration system is the best in any DAW. This is an important setting that nearly every other DAW: doesn't let you set, doesn't automatically set correctly, or has a test function that gives incorrect results.

I thoroughly enjoyed using Ardour in every aspect of setting up this test.

Reminder, don't trust dweebs on the internet. Do the tests yourself, or at least double check my [data](#data).

# 64 sample buffer

Reported Latency

* N/A

## 64 sample buffer

{::nomarkdown}
    <video autoplay loop muted class="gifvid">
        <source src="/assets/DVD72/Ardour/Ardour64.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <div class="video-caption">Ardour - 64 Sample Buffer (Video)</div>
{:/nomarkdown}

# 256 sample buffer

Reported Latency

* N/A

## 256 sample buffer

{::nomarkdown}
    <video autoplay loop muted class="gifvid">
        <source src="/assets/DVD72/Ardour/Ardour256.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <div class="video-caption">Ardour - 256 Sample Buffer (Video)</div>
{:/nomarkdown}


# 1024 sample buffer

Reported Latency

* N/A

## 1024 sample buffer

{::nomarkdown}
    <video autoplay loop muted class="gifvid">
        <source src="/assets/DVD72/Ardour/Ardour1024.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <div class="video-caption">Ardour - 1024 Sample Buffer (Video)</div>
{:/nomarkdown}

# Data

Here is a csv of all the data, including the config files used to plot it using [deltafinder](https://github.com/admiralbumblebee/deltafinder).

[Ardour data](/assets/DVD72/Ardour/data.zip)

# Conclusion

* Ardour has near-zero MIDI input jitter.
    * [Like Ableton Live]({% post_url 2020-11-01-DAW-v-DAW-7-Live %}) - Ardour has about 4 samples of constant jitter at all settings (including what's not displayed here)
        * A reader pointed out that this is possibly a round/floor issue after some division when determining which sample a MIDI event aligns with. Seems reasonable?
* Ardour's total latency is good at lower buffer sizes, but becomes exponentially worse with larger buffer sizes.
    * Compare Ardour with [Live]({% post_url 2020-11-01-DAW-v-DAW-7-Live %}) or [Bitwig]({% post_url 2020-11-07-DAW-v-DAW-7-Bitwig %}). 64 samples performs excellent, slightly more at 256, significantly more at 1024.
    * This puts Ardour firmly in the "Excellent result" camp at buffers lower than 128 samples.

# Meta

This post took:

* Testing Ardour was pleasant and took approximately 16 minutes.
* Processing the results and writing the article took around 30 minutes.
* Checking various settings to see if they influenced results took around 1 hour.
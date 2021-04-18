---
layout: ['post', 'reader']
title: DAW v DAW 7.2 - Mixbus
comments: true
date:   2020-11-08_06:12:25 
categories: music
tags: ['Testing', 'DAW', 'Mixbus']
image:
description:
header:
header-caption:
series: latency
---

Next up in the latency/jitter testing is Mixbus!

If you don't understand what this is, please [read the introduction post]({% post_url 2020-10-25-daw-v-daw-721 %}) (This article is being updated if/when changes are made!).

**IMPORTANT** - [Read an updated post]({% post_url 2021-03-27-4-posts-with-Mixbus-7 %}), with Mixbus 7 and repeated tests for Mixbus 6

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

**IMPORTANT** - [Read an updated post]({% post_url 2021-03-27-4-posts-with-Mixbus-7 %}), with Mixbus 7 and repeated tests for Mixbus 6

[Read the introduction post]({% post_url 2020-10-25-daw-v-daw-721 %}). I have updated this post since it was originally published.

For Mixbus I used [Kontakt](https://www.native-instruments.com/en/products/komplete/samplers/kontakt-6/). VST version.

The `Preferences->Audio->Buffering` options did not affect the results, nor did any other setting that I found. The developers tend to read these articles, so if I made an error in this regard then I hope one of you very fine people let me know. :)

Mixbus reports latencies for the device of:

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

(Same results as [Ardour]({% post_url 2020-11-08-DAW-v-DAW-7-Ardour %})).

Unrelated to this test, but Ardour/Mixbus's Audio Calibration system is the best in any DAW. This is an important setting that nearly every other DAW: doesn't let you set, doesn't automatically set correctly, or has a test function that gives incorrect results.

Reminder, don't trust dweebs on the internet. Do the tests yourself, or at least double check my [data](#data).

# 64 sample buffer

Reported Latency

* Unlabeled path - 1.33ms

## 64 sample buffer

{::nomarkdown}
    <video autoplay loop muted class="gifvid">
        <source src="/assets/DVD72/Mixbus/Mixbus64.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <div class="video-caption">Mixbus - 64 Sample Buffer (Video)</div>
{:/nomarkdown}

# 256 sample buffer

Reported Latency

* Unlabeled path - 5.33ms

## 256 sample buffer

{::nomarkdown}
    <video autoplay loop muted class="gifvid">
        <source src="/assets/DVD72/Mixbus/Mixbus256.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <div class="video-caption">Mixbus - 256 Sample Buffer (Video)</div>
{:/nomarkdown}


# 1024 sample buffer

Reported Latency

* Unlabeled path - 21.33

## 1024 sample buffer

{::nomarkdown}
    <video autoplay loop muted class="gifvid">
        <source src="/assets/DVD72/Mixbus/Mixbus1024.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <div class="video-caption">Mixbus - 1024 Sample Buffer (Video)</div>
{:/nomarkdown}

# Data

Here is a csv of all the data, including the config files used to plot it using [deltafinder](https://github.com/admiralbumblebee/deltafinder).

[Mixbus data](/assets/DVD72/Mixbus/data.zip)

# Conclusion

* Mixbus has near-zero MIDI input jitter.
    * Mixbus showed up to 6 samples of jitter.
        * I suspect this is the same as Ardour's 4 samples of jitter, but with unlucky situations where the measurement system identified a threshold 1 sample earlier/later.
* Mixbus's total latency is fairly large relative to other DAWs.
    * Double Bitwig's
    * As an aside - Bitwig's performance also tends to be much better than Mixbus's. This is based on separate testing that I have not published.
* Mixbus's Latency is approximately 256 samples longer than Ardour's at all settings. (Note: I did ensure the sample rate was 48,000hz like all other tests!)
    * This is particularly impactful at lower buffer sizes.
    * Processing latency for channel strips? Extra buffer to help reduce 'realtime load' ("CPU usage")? Something else?

Excellent result as long as you're aware of the increase in latency relative to what you may expect from a naive interpretation of the numbers.

# Meta

This post took:

* 4 hours to setup Mixbus for the test in a manner that didn't result in a crash.
* 3 hours to run the tests thinking that I had avoided the crashes, only to have crashes.
* 1 hour to run the tests without crashing.
* 1 hour to write up the article.

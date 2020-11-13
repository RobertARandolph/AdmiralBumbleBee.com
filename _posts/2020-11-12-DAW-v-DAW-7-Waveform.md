---
layout: ['post', 'reader']
title: DAW v DAW 7.2 - Waveform
comments: true
date:   2020-11-12_03:52:19 
categories: music
tags: ['Testing', 'DAW', 'Waveform']
image:
description:
header:
header-caption:
series: latency
---

Next up in the latency/jitter testing is Waveform!

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

For Waveform I used [Multisampler](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiS9qv_rP7sAhVkx1kKHUxTCuwQwqsBMAB6BAgPEAM&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DTmpULqx7ZK4&usg=AOvVaw2pfOyPib1oKjQGJUEHIpIv).

Reminder, don't trust dweebs on the internet. Do the tests yourself, or at least double check my [data](#data).

# 64 sample buffer

Reported Latency

* Total - N/A

## 64 sample buffer

{::nomarkdown}
    <video autoplay loop muted class="gifvid">
        <source src="/assets/DVD72/Waveform/Waveform64.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <div class="video-caption">Waveform - 64 Sample Buffer (Video)</div>
{:/nomarkdown}

# 256 sample buffer

Reported Latency

* Total - N/A

## 256 sample buffer

{::nomarkdown}
    <video autoplay loop muted class="gifvid">
        <source src="/assets/DVD72/Waveform/Waveform256.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <div class="video-caption">Waveform - 256 Sample Buffer (Video)</div>
{:/nomarkdown}

# 1024 sample buffer

Reported Latency

* Total - N/A

## 1024 sample buffer

{::nomarkdown}
    <video autoplay loop muted class="gifvid">
        <source src="/assets/DVD72/Waveform/Waveform1024.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <div class="video-caption">Waveform - 1024 Sample Buffer (Video)</div>
{:/nomarkdown}

# Data

Here is a csv of all the data, including the config files used to plot it using [deltafinder](https://github.com/admiralbumblebee/deltafinder).

[Waveform data](/assets/DVD72/Waveform/data.zip)

# Conclusion

* Waveform has 1 buffer's worth of jitter.
* Waveform has the lowest latency of any DAW. None of my tests went above 5ms.
    * Lowest I saw was around 3.5ms, but this was not captured in my 3 random tests.
* This seems to indicate that my previous thoughts of certain other DAWs having minimum latency are incorrect!
    * I will be covering this in the conclusion post.
    * I re-ran tests on [Bitwig]({% post_url 2020-11-07-DAW-v-DAW-7-Bitwig %}) to make sure I have consistent results (i.e. a reboot or device reset didn't change anything), and it is consistent.
    * It appears that the low-latency "jitter-free" DAWs are using an extra buffer of ~64 samples to buffer for MIDI timing offsets.

Of the DAWs with Jitter, Waveform has performed the best thusfar.

# Meta

This post took:

* 1 hour to mess with Waveforms settings.
* 20 minutes to test.
* 25 minutes to write the article.
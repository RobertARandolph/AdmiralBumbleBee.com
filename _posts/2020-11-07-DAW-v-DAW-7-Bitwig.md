---
layout: ['post', 'reader']
title: DAW v DAW 7.2 - Bitwig
comments: true
date:   2020-11-07_05:55:25 
categories: music
tags: ['Testing', 'DAW', 'Bitwig']
image:
description:
header:
header-caption:
series: latency
---

Next up in the latency/jitter testing is Bitwig!

If you don't understand what this is, please [read the introduction post]({% post_url 2020-10-25-daw-v-daw-721 %}) (This article is being updated if/when changes are made!).

**This article cost me $143** to update my Bitwig license for another year.

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

For Bitwig I used [Sampler](https://www.bitwig.com/sampler/).

Bitwig's sampler has been the easiest to setup and work with in these tests. That may not translate to musical use, but it's nice. I also love Bitwig's audio settings panel. The way it communicates buffer sizes is wonderful.

Not everything about Bitwig is great, but the parts necessary to do this test are wonderful.

Reminder, don't trust dweebs on the internet. Do the tests yourself, or at least double check my [data](#data).

# 64 sample buffer

Reported Latency

* Unlabeled path - 1.33ms

## 64 sample buffer

{::nomarkdown}
    <video autoplay loop muted class="gifvid">
        <source src="/assets/DVD72/Bitwig/Bitwig64.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <div class="video-caption">Bitwig - 64 Sample Buffer (Video)</div>
{:/nomarkdown}

# 256 sample buffer

Reported Latency

* Unlabeled path - 5.33ms

## 256 sample buffer

{::nomarkdown}
    <video autoplay loop muted class="gifvid">
        <source src="/assets/DVD72/Bitwig/Bitwig256.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <div class="video-caption">Bitwig - 256 Sample Buffer (Video)</div>
{:/nomarkdown}


# 1024 sample buffer

Reported Latency

* Unlabeled path - 21.33

## 1024 sample buffer

{::nomarkdown}
    <video autoplay loop muted class="gifvid">
        <source src="/assets/DVD72/Bitwig/Bitwig1024.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <div class="video-caption">Bitwig - 1024 Sample Buffer (Video)</div>
{:/nomarkdown}

# Data

Here is a csv of all the data, including the config files used to plot it using [deltafinder](https://github.com/admiralbumblebee/deltafinder).

[Bitwig data](/assets/DVD72/Bitwig/data.zip)

# Conclusion

* Bitwig has zero jitter, which makes [results from live]({% post_url 2020-11-01-DAW-v-DAW-7-Live %}) where there was 2-4 samples of jitter, seem suspicious.
    * The 1-2 sample changes in frames is a measurement variation. Slight difference in where the software picked up the peak.
        * This is in contrast to Live's results where the absolute peak was itself up to 4 samples offset.
* Bitwig has _less_ latency than Live by about 1-1.5ms.
* Bitwig has _less_ latency than the DAWs tested so far.
    * Bitwig has less latency _and_ stable output.
* Based on my knowledge of the device being used, Bitwig has near optimal MIDI->Audio latency for the device **and no jitter**.
    * This may indicate that there isn't a tradeoff between latency/jitter (chunking of MIDI events).

I also tested other VSTi's for my own amusement, in case Sampler was a special circumstance. All VSTi's that I tried had similar behaviour. Bitwig's MIDI->Midi behaviour was also similar.

Good Job Bitwig team!

# Meta

This post took:

* 47 minutes to do everything. Bitwig was simply really nice to use for the purposes of this test. 

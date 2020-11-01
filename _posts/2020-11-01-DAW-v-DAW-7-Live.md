---
layout: ['post', 'reader']
title: DAW v DAW 7.2 - Live
comments: true
date:   2020-11-01_08:08:25 
categories: music
tags: ['Testing', 'DAW', 'Live']
image:
description:
header:
header-caption:
series: latency
---

First up in the latency/jitter testing is Live!

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

For Live I used [Sampler](https://www.ableton.com/en/packs/sampler/).

I did not locate any settings that changed the behaviour, so there are only 3 tests. 

Reminder, don't trust dweebs on the internet. Do the tests yourself, or at least double check my [data](#data).

# 64 sample buffer

Reported Latency
* In - 4.58ms
* Out - 4.35ms
* Total - 8.94ms (sic)

## 64 sample buffer

{::nomarkdown}
    <video autoplay loop muted class="gifvid">
        <source src="/assets/DVD72/Live/Live64.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <div class="video-caption">Live - 64 Sample Buffer (Video)</div>
{:/nomarkdown}

# 256 sample buffer

Reported Latency

* In - 8.58ms
* Out - 8.35ms
* Total - 16.9ms (sic)

## 256 sample buffer

{::nomarkdown}
    <video autoplay loop muted class="gifvid">
        <source src="/assets/DVD72/Live/Live256.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <div class="video-caption">Live - 256 Sample Buffer (Video)</div>
{:/nomarkdown}


# 1024 sample buffer

Reported Latency

* In - 24.6ms
* Out - 24.4ms
* Total - 48.9ms (sic)

## 1024 sample buffer

{::nomarkdown}
    <video autoplay loop muted class="gifvid">
        <source src="/assets/DVD72/Live/Live1024.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <div class="video-caption">Live - 20489 Sample Buffer (Video)</div>
{:/nomarkdown}

# Data

Here is a csv of all the data, including the config files used to plot it using [deltafinder](https://github.com/admiralbumblebee/deltafinder).

[Live data](/assets/DVD72/Live/data.zip)

# Conclusion

* Live exhibits **very** minimal (likely none) MIDI->Audio playback Jitter.
    * I thought that _perhaps_ the ~4 sample variance was an artifact of measuring, but even when measuring at 1ghz scope sample rate and manually checking results, the results were the same.
    * It could be a byproduct of sampling, Sampler, or the audio device, or Operating system or Live itself. I would need to do different tests to narrow down the source.
    * I suspect it's a byproduct of the sampling processes, and I feel comfortable saying that Live has no Jitter.
* Live exhibits Moderate Latency. It appears that the reported latency in the context of MIDI->Audio is 50% greater than reported.

# Meta

This post took:

* 1 hour to capture signals and graph them.
* 1 hours to verify results.
* 1 hour to write the article.

---
layout: ['post', 'reader']
title: DAW v DAW 7.2 - Pro Tools
comments: true
date:   2020-10-28_21:08:25 
categories: music
tags: ['Testing', 'DAW', 'Pro Tools']
image:
description:
header:
header-caption:
series: latency
---

First up in the latency/jitter testing is Pro Tools!

If you don't understand what this is, please [read the introduction post]({% post_url 2020-10-25-daw-v-daw-721 %}) (This article is being updated if/when changes are made!).

{% assign lives = site.posts | where: "series", "latency" | sort: 'date' %}
<ul>
{% for my_page in lives %} 
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

# Introduction

[Read the introduction post]({% post_url 2020-10-25-daw-v-daw-721 %}). I have updated this post since it was originally published.

For Pro Tools I used [Kontakt 6](https://www.native-instruments.com/en/products/komplete/samplers/kontakt-6/) since there is not a native Pro Tools sampler.

The only setting I found that changed results was `Settings->Playback Engine->Minimize I/O Latency`.

Reminder, don't trust dweebs on the internet. Do the tests yourself, or at least double check my [data](#data).

# 63 sample buffer - NO Minimize Additional I/O Latency

{::nomarkdown}
    <video autoplay loop muted class="gifvid">
        <source src="/assets/DVD72/ProTools/ProTools64NoMinimum.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <div class="video-caption">Pro Tools - 64 Sample Buffer - No Minimize I/O Latency (Video)</div>
{:/nomarkdown}

# 256 sample buffer - NO Minimize Additional I/O Latency

{::nomarkdown}
    <video autoplay loop muted class="gifvid">
        <source src="/assets/DVD72/ProTools/ProTools256NoMinimum.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <div class="video-caption">Pro Tools - 256 Sample Buffer - No Minimize I/O Latency (Video)</div>
{:/nomarkdown}

# 1024 sample buffer - NO Minimize Additional I/O Latency

{::nomarkdown}
    <video autoplay loop muted class="gifvid">
        <source src="/assets/DVD72/ProTools/ProTools1024NoMinimum.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <div class="video-caption">Pro Tools - 20489 Sample Buffer - No Minimize I/O Latency (Video)</div>
{:/nomarkdown}

# 64 sample buffer - Minimize Additional I/O Latency

{::nomarkdown}
    <video autoplay loop muted class="gifvid">
        <source src="/assets/DVD72/ProTools/ProTools64Minimum.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <div class="video-caption">Pro Tools - 64 Sample Buffer - Minimize I/O Latency (Video)</div>
{:/nomarkdown}

# 256 sample buffer - Minimize Additional I/O Latency

{::nomarkdown}
    <video autoplay loop muted class="gifvid">
        <source src="/assets/DVD72/ProTools/ProTools256Minimum.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <div class="video-caption">Pro Tools - 256 Sample Buffer - Minimize I/O Latency (Video)</div>
{:/nomarkdown}

# 1024 sample buffer - Minimize Additional I/O Latency

{::nomarkdown}
    <video autoplay loop muted class="gifvid">
        <source src="/assets/DVD72/ProTools/ProTools1024Minimum.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <div class="video-caption">Pro Tools - 1024 Sample Buffer - Minimize I/O Latency (Video)</div>
{:/nomarkdown}

# Data

Here is a csv of all the data, including the config files used to plot it using [deltafinder](https://github.com/admiralbumblebee/deltafinder).

[Pro Tools data](/assets/DVD72/ProTools/data.zip)

# Conclusion

* Pro Tools exhibits MIDI->Audio playback Jitter. It appears to be approximately 1 buffer's worth of jitter.
* "Minimize Additional I/O Latency" appears to reduce latency by 1 buffer. More tests would be required to find the extents of the jitter to confirm the total latency reduction.
    * I can't automate these tests and do 100s of them with the equipment that I have (yet?). 3-5 tests is my max.

# Meta

This post took:

* 5 hours to change various settings, do 3 tests, graph, and see if the setting affected the output.
* 1 hours to capture signals and graph them.
* 2 hours to write the article.
* 1 hour to track down an error with a measurement.

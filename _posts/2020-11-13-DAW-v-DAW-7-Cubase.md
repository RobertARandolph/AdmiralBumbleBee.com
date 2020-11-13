---
layout: ['post', 'reader']
title: DAW v DAW 7.2 - Cubase
comments: true
date:   2020-11-13_01:16:44 
categories: music
tags: ['Testing', 'DAW', 'Cubase']
image:
description:
header:
header-caption:
series: latency
---

Next up in the latency/jitter testing is Cubase!

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

For Cubase I used [a Sampler track](https://steinberg.help/cubase_pro_artist/v9/en/cubase_nuendo/topics/sampler_track/sampler_track_creating_sampler_tracks_c.html).

No settings affected these results. (ASIO-Guard had no influence, among other settings).

Reminder, don't trust dweebs on the internet. Do the tests yourself, or at least double check my [data](#data).

# 64 sample buffer

Reported Latency

* Input - 4.583ms
* Output - 4.354ms

## 64 sample buffer

{::nomarkdown}
    <video autoplay loop muted class="gifvid">
        <source src="/assets/DVD72/Cubase/Cubase64.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <div class="video-caption">Cubase - 64 Sample Buffer (Video)</div>
{:/nomarkdown}

# 256 sample buffer

Reported Latency

* Input - 8.583ms
* Output - 8.354ms

## 256 sample buffer

{::nomarkdown}
    <video autoplay loop muted class="gifvid">
        <source src="/assets/DVD72/Cubase/Cubase256.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <div class="video-caption">Cubase - 256 Sample Buffer (Video)</div>
{:/nomarkdown}

# 1024 sample buffer

Reported Latency

* Input - 24.583ms
* Output - 24.533ms

## 1024 sample buffer

{::nomarkdown}
    <video autoplay loop muted class="gifvid">
        <source src="/assets/DVD72/Cubase/Cubase1024.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <div class="video-caption">Cubase - 1024 Sample Buffer (Video)</div>
{:/nomarkdown}

# Data

Here is a csv of all the data, including the config files used to plot it using [deltafinder](https://github.com/admiralbumblebee/deltafinder).

[Cubase data](/assets/DVD72/Cubase/data.zip)

# Conclusion

* Cubase experiences the "MIDI Jitter" problem being investigated.
* Cubase's is the lowest, along with [Waveform]({% post_url 2020-11-12-DAW-v-DAW-7-Waveform %})

# Meta

This post took:

* 1 hour to mess with Cubase's settings.
* 22 minutes to test.
* 30 minutes to write the article.
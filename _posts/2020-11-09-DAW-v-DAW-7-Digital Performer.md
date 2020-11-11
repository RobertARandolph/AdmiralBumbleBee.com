---
layout: ['post', 'reader']
title: DAW v DAW 7.2 - DP
comments: true
date:   2020-11-09_05:12:25 
categories: music
tags: ['Testing', 'DAW', 'DP']
image:
description:
header:
header-caption:
series: latency
---

Next up in the latency/jitter testing is Digital Performer!

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

For DP I used [MSoundFactory](https://www.meldaproduction.com/MSoundFactory)'s Drum Sampler. VST version.

Nanosampler was unable to playback the pulse correctly, but appeared to give the same results as Kontakt.

Kontakt crashed **CONSTANTLY** in DP. I hate using different non-native samplers in these tests, but it was not possible for me to use Kontakt for this test on my system. I verified that MSoundFactory and Kontakt produced identical results (when Kontakt was working).

I was unable to find any settings that affected the behaviours of the test.

Reminder, don't trust dweebs on the internet. Do the tests yourself, or at least double check my [data](#data).

# 64 sample buffer

Reported Latency

* N/A

## 64 sample buffer

{::nomarkdown}
    <video autoplay loop muted class="gifvid">
        <source src="/assets/DVD72/DP/DP64.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <div class="video-caption">DP - 64 Sample Buffer (Video)</div>
{:/nomarkdown}

# 256 sample buffer

Reported Latency

* N/A

## 256 sample buffer

{::nomarkdown}
    <video autoplay loop muted class="gifvid">
        <source src="/assets/DVD72/DP/DP256.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <div class="video-caption">DP - 256 Sample Buffer (Video)</div>
{:/nomarkdown}


# 1024 sample buffer

Reported Latency

* N/A

## 1024 sample buffer

{::nomarkdown}
    <video autoplay loop muted class="gifvid">
        <source src="/assets/DVD72/DP/DP1024.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <div class="video-caption">DP - 1024 Sample Buffer (Video)</div>
{:/nomarkdown}

# Data

Here is a csv of all the data, including the config files used to plot it using [deltafinder](https://github.com/admiralbumblebee/deltafinder).

[DP data](/assets/DVD72/DP/data.zip)

# Conclusion

* Digital Performer had 1 buffer's worth of jitter.
* DP's Latency varied from excellent to fair.

It is notable that DP exhibited the lowest latency times within the jitter window. As with all of these results, it's best correlated with the Audio->Audio latency.

It's possible that other DAWs exhibited similarly low latency, but it was not captured in the test.

# Meta

This post took:

* 2 hours to setup DP because Kontakt crashed non-stop.
* 1 hour to run the tests without crashing.
* 1 hour to write up the article.
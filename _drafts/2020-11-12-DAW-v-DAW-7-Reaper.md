---
layout: ['post', 'reader']
title: DAW v DAW 7.2 - Reaper
comments: true
date:   2020-11-12_12:11:16 
categories: music
tags: ['Testing', 'DAW', 'Reaper']
image:
description:
header:
header-caption:
series: latency
---

Next up in the latency/jitter testing is Reaper!

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

For Reaper I used [MSoundFactory](https://www.meldaproduction.com/MSoundFactory)'s Drum Sampler. VST version.

Kontakt crashed constantly. RS5k wouldn't play a 3 sample wave file correctly.

(VERY) Surprisingly, none of the 40 or-so settings I tried in Reaper had an effect on latency or jittery behaviour.

Reminder, don't trust dweebs on the internet. Do the tests yourself, or at least double check my [data](#data).

# 64 sample buffer

Reported Latency

* Total - N/A

## 64 sample buffer

{::nomarkdown}
    <video autoplay loop muted class="gifvid">
        <source src="/assets/DVD72/Reaper/Reaper64.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <div class="video-caption">Reaper - 64 Sample Buffer (Video)</div>
{:/nomarkdown}

# 256 sample buffer

Reported Latency

* Total - N/A

## 256 sample buffer

{::nomarkdown}
    <video autoplay loop muted class="gifvid">
        <source src="/assets/DVD72/Reaper/Reaper256.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <div class="video-caption">Reaper - 256 Sample Buffer (Video)</div>
{:/nomarkdown}

# 1024 sample buffer

Reported Latency

* Total - N/A

## 1024 sample buffer

{::nomarkdown}
    <video autoplay loop muted class="gifvid">
        <source src="/assets/DVD72/Reaper/Reaper1024.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <div class="video-caption">Reaper - 1024 Sample Buffer (Video)</div>
{:/nomarkdown}

# Data

Here is a csv of all the data, including the config files used to plot it using [deltafinder](https://github.com/admiralbumblebee/deltafinder).

[Reaper data](/assets/DVD72/Reaper/data.zip)

# Conclusion

* Reaper has zero Jitter.
* Reaper's latency is among the best.
* Reapers ~1 sample variance in results further shows (to me) that the 4 sample variance in some other tests is not an artifact of the testing apparatus or graphing.
    * I double checked this by doing a dozen or so extra tests (not shown). They were all within 1 sample  (+/- 0.5samples of audio clock time) as graphed.

# Meta

This post took:

* 7 hours to mess with Reapers settings and hunch over my scope. Ouch, my back!
* 1 hour to test.
* 20 minutes to write the article.
---
layout: ['post', 'reader']
title: DAW v DAW 7.2 - Logic
comments: true
date:   2020-11-10_04:41:59 
categories: music
tags: ['Testing', 'DAW', 'Logic']
image:
description:
header:
header-caption:
series: latency
---

Next up in the latency/jitter testing is Logic!

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

For Logic I used [Sampler](https://support.apple.com/en-us/HT211115).

Surprisingly, I was unable to find any settings that affected the behaviours of the test. Logic has a number of settings that affect playback/render [certain circumstances]({% post_url 2019-02-24-Daw-V-Daw-Differ %}#logic-pro)

Reminder, don't trust dweebs on the internet. Do the tests yourself, or at least double check my [data](#data).

# 64 sample buffer

Reported Latency

* Total - 8.9ms 

## 64 sample buffer

{::nomarkdown}
    <video autoplay loop muted class="gifvid">
        <source src="/assets/DVD72/Logic/Logic64.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <div class="video-caption">Logic - 64 Sample Buffer (Video)</div>
{:/nomarkdown}

# 256 sample buffer

Reported Latency

* Total - 16.9ms

## 256 sample buffer

{::nomarkdown}
    <video autoplay loop muted class="gifvid">
        <source src="/assets/DVD72/Logic/Logic256.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <div class="video-caption">Logic - 256 Sample Buffer (Video)</div>
{:/nomarkdown}


# 1024 sample buffer

Reported Latency

* Total -48.9ms

## 1024 sample buffer

{::nomarkdown}
    <video autoplay loop muted class="gifvid">
        <source src="/assets/DVD72/Logic/Logic1024.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <div class="video-caption">Logic - 1024 Sample Buffer (Video)</div>
{:/nomarkdown}

# Data

Here is a csv of all the data, including the config files used to plot it using [deltafinder](https://github.com/admiralbumblebee/deltafinder).

[Logic data](/assets/DVD72/Logic/data.zip)

# Conclusion

* Logic had near-zero jitter.
    * That 4 sample jitter rears its ugly head again, but only at 64 sample buffer.
        * Because I've seen this so many times now, I retested [Bitwig because it didn't exhibit this]({% post_url 2020-11-07-DAW-v-DAW-7-Bitwig %}), and it still doesn't. This doesn't seem to be an artifact of the measurement or graphing, as one product does not show this behaviour in the results.
        * Future DAWs also have 0.5 sample variance, so this 4 sample jitter is likely not a testing artifact.
* Logic had near identical latencies to Bitwig.

Note that there is a fairly common +/- 1 sample variance due to rounding in the measurement and detection of the threshold. The +/- 2 sample variation appears to be DAW specific.

I'm still intrigued by this, and I'd be ready to pass this off as an anomaly of the measurement/testing system, but when one product does not have that variance then... It's much less likely to be my fault :)

# Meta

This post took:

* 6 hours to run through Logic's dozens of settings to see if any affected the result.
* 50 minutes to run the tests and write the article.
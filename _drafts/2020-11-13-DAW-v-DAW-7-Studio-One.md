---
layout: ['post', 'reader']
title: DAW v DAW 7.2 - Studio One
comments: true
date:   2020-11-13_18:36:10 
categories: music
tags: ['Testing', 'DAW', 'Studio One']
image:
description:
header:
header-caption:
series: latency
---

Next up in the latency/jitter testing is Studio One!

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

For Studio One I used [Impact](https://s1manual.presonus.com/Content/Built-In_Instruments_Topics/Impact%20XT.htm) with all processing turned off.

The "dropout protection" settings are known to change the results, so I did all tests with 3 of 5 settings.

Reminder, don't trust dweebs on the internet. Do the tests yourself, or at least double check my [data](#data).

# 64 sample buffer

Reported Latency in Audio Device settings

* Input - 4.58ms (220 samples)
* Output - 4.35ms (209 samples)

## 64 sample buffer - Dropout Protection: Minimum

{::nomarkdown}
    <video autoplay loop muted class="gifvid">
        <source src="/assets/DVD72/StudioOne/StudioOneMinimum64.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <div class="video-caption">Studio One - 64 Sample Buffer - Dropout Protection: Minimum (Video)</div>
{:/nomarkdown}

"Monitoring Latency" in Processing settings

* Standard
    * Input - 10.3ms (493 samples)
    * Output - 5.69ms (273 samples)

## 64 sample buffer - Dropout Protection: Medium - Standard

{::nomarkdown}
    <video autoplay loop muted class="gifvid">
        <source src="/assets/DVD72/StudioOne/StudioOneMediumStandard64.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <div class="video-caption">Studio One - 64 Sample Buffer- Dropout Protection: Medium Standard (Video)</div>
{:/nomarkdown}

* Standard
    * Input - 41ms (1965 samples)
    * Output - 41ms (1954 samples)

## 64 sample buffer - Dropout Protection: Medium - Low Latency

{::nomarkdown}
    <video autoplay loop muted class="gifvid">
        <source src="/assets/DVD72/StudioOne/StudioOneMediumLowLatency64.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <div class="video-caption">Studio One - 64 Sample Buffer- Dropout Protection: Medium Low Latency (Video)</div>
{:/nomarkdown}

* Standard
    * Input - 10.3ms (493 samples)
    * Output - 5.69ms (273 samples)

## 64 sample buffer - Dropout Protection: Maximum - Standard

{::nomarkdown}
    <video autoplay loop muted class="gifvid">
        <source src="/assets/DVD72/StudioOne/StudioOneMaximumStandard64.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <div class="video-caption">Studio One - 64 Sample Buffer- Dropout Protection: Maximum Standard (Video)</div>
{:/nomarkdown}

* Standard
    * Input - 137ms (6573 samples)
    * Output - 137ms (6562 samples)

## 64 sample buffer - Dropout Protection: Maximum - Low Latency

{::nomarkdown}
    <video autoplay loop muted class="gifvid">
        <source src="/assets/DVD72/StudioOne/StudioOneMaximumLowLatency64.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <div class="video-caption">Studio One - 64 Sample Buffer- Dropout Protection: Maximum Low Latency (Video)</div>
{:/nomarkdown}

* Standard
    * Input - 10.3ms (493 samples)
    * Output - 5.69ms (273 samples)

# 256 sample buffer

Reported Latency in Audio Device settings

* Input - 8.58ms (412samples)
* Output - 8.35ms (401 samples)

## 256 sample buffer - Dropout Protection: Minimum

{::nomarkdown}
    <video autoplay loop muted class="gifvid">
        <source src="/assets/DVD72/StudioOne/StudioOneMinimum256.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <div class="video-caption">Studio One - 256 Sample Buffer - Dropout Protection: Minimum (Video)</div>
{:/nomarkdown}

"Monitoring Latency" in Processing settings

* Standard
    * Input - 22.3ms (1069 samples)
    * Output - 22.0ms (1058 samples)

## 256 sample buffer - Dropout Protection: Medium - Standard

{::nomarkdown}
    <video autoplay loop muted class="gifvid">
        <source src="/assets/DVD72/StudioOne/StudioOneMediumStandard256.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <div class="video-caption">Studio One - 256 Sample Buffer- Dropout Protection: Medium Standard (Video)</div>
{:/nomarkdown}

* Standard
    * Input - 49ms (2349 samples)
    * Output - 49ms (2333 samples)

## 256 sample buffer - Dropout Protection: Medium - Low Latency

{::nomarkdown}
    <video autoplay loop muted class="gifvid">
        <source src="/assets/DVD72/StudioOne/StudioOneMediumLowLatency256.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <div class="video-caption">Studio One - 256 Sample Buffer- Dropout Protection: Medium Low Latency (Video)</div>
{:/nomarkdown}

* Low Latency
    * Input - 22.3ms (1069 samples)
    * Output - 22.0ms (1058 samples)

## 256 sample buffer - Dropout Protection: Maximum - Standard

{::nomarkdown}
    <video autoplay loop muted class="gifvid">
        <source src="/assets/DVD72/StudioOne/StudioOneMaximumStandard256.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <div class="video-caption">Studio One - 256 Sample Buffer- Dropout Protection: Maximum Standard (Video)</div>
{:/nomarkdown}

* Standard
    * Input - 145ms (6957 samples)
    * Output - 145ms (6946 samples)

## 256 sample buffer - Dropout Protection: Maximum - Low Latency

{::nomarkdown}
    <video autoplay loop muted class="gifvid">
        <source src="/assets/DVD72/StudioOne/StudioOneMaximumLowLatency256.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <div class="video-caption">Studio One - 256 Sample Buffer- Dropout Protection: Maximum Low Latency (Video)</div>
{:/nomarkdown}

* Low Latency
    * Input - 22.3ms (1069 samples)
    * Output - 22.0ms (1058 samples)


# 1024 sample buffer

Reported Latency

* Input - 24.6ms (1180 samples)
* Output - 24.4ms (1169 samples)

## 1024 sample buffer - Dropout Protection: Minimum

{::nomarkdown}
    <video autoplay loop muted class="gifvid">
        <source src="/assets/DVD72/StudioOne/StudioOneMinimum1024.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <div class="video-caption">Studio One - 1024 Sample Buffer - Dropout Protection: Minimum (Video)</div>
{:/nomarkdown}

* Standard
    * Input - 70ms (3373 samples)
    * Output - 70ms (3362 samples)

## 1024 sample buffer - Dropout Protection: Medium - Standard

{::nomarkdown}
    <video autoplay loop muted class="gifvid">
        <source src="/assets/DVD72/StudioOne/StudioOneMedium1024.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <div class="video-caption">Studio One - 1024 Sample Buffer - Dropout Protection: Medium (Video)</div>
{:/nomarkdown}

* Standard
    * Input - 70ms (3373 samples)
    * Output - 70ms (3362 samples)

## 1024 sample buffer - Dropout Protection: Medium - Low Latency

Low Latency is not available for 1024 buffer on Medium Dropout Protection.

## 1024 sample buffer - Dropout Protection: Maximum - Standard

{::nomarkdown}
    <video autoplay loop muted class="gifvid">
        <source src="/assets/DVD72/StudioOne/StudioOneMaximumStandard1024.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <div class="video-caption">Studio One - 1024 Sample Buffer - Dropout Protection: Maximum - Standard (Video)</div>
{:/nomarkdown}

* Standard
    * Input - 177ms (8393 samples)
    * Output - 177ms (8482 samples)

## 1024 sample buffer - Dropout Protection: Maximum - Low Latency

{::nomarkdown}
    <video autoplay loop muted class="gifvid">
        <source src="/assets/DVD72/StudioOne/StudioOneMaximumLowLatency1024.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <div class="video-caption">Studio One - 1024 Sample Buffer - Dropout Protection: Maximum - Low Latency (Video)</div>
{:/nomarkdown}

* Low Latency
    * Input - 70ms (3373 samples)
    * Output - 70ms (3373 samples)

# Data

Here is a csv of all the data, including the config files used to plot it using [deltafinder](https://github.com/admiralbumblebee/deltafinder).

[Studio One data](/assets/DVD72/StudioOne/data.zip)

# Conclusion

* Studio One 5.1 has near-zero jitter.
    * Must be a coincidence that they changed how it works after [my article]({% post_url 2020-07-11-daw-v-daw-s1-fail %}) :)
* Studio One's lowest latency is higher than some other DAWs.
* Studio One has the most extensive control over latency and performance.
* Minimum and Medium Dropout Protection on a 1024 buffer were identical.
* Studio One had the most detailed and informative latency information.
    * It was also the most accurate on average.

Excellent result all-around. Thank you to the people at Presonus that listened.

# Meta

This post took:

* 7 hours to mess with Studio Ones settings and hunch over my scope. Ouch, my back!
* 1 hour to test.
* 20 minutes to write the article.
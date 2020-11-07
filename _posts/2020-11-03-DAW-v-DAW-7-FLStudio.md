---
layout: ['post', 'reader']
title: DAW v DAW 7.2 - FLStudio
comments: true
date:   2020-11-01_08:08:25 
categories: music
tags: ['Testing', 'DAW', 'FLStudio']
image:
description:
header:
header-caption:
series: latency
---

Next up in the latency/jitter testing is FLStudio!

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

For FLStudio I used [Sampler Channel](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/chansettings_sampler.htm).

Interestingly, I was not able to get Sampler Channel to output a single sample pulse cleanly no matter what settings I tried, and nobody (of dozens of people) that I asked was able to offer ideas. [Slicer](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruity%20Slicer.htm) and [SliceX](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Slicex.htm) were able to do this, but I decided to use Sampler Channel as it's the primary sampler for most FLStudio users.

Somewhat notably, FLStudio also dropped notes during my testing. I am skeptical of the cause, but around 1% of MIDI notes did not trigger playback for some reason. The higher the buffer, the fewer notes were dropped. It's possible that my test setup is triggering an issue, as I'd expect to see complaints of this by users, but with my test setup the number of non-triggers was proportionally correlated to buffer size.

I did not locate any settings that changed the behaviour, so there are only 3 tests. 

Reminder, don't trust dweebs on the internet. Do the tests yourself, or at least double check my [data](#data).

# 64 sample buffer

Reported Latency

* Unlabeled path - 2ms

## 64 sample buffer

{::nomarkdown}
    <video autoplay loop muted class="gifvid">
        <source src="/assets/DVD72/FLStudio/FLStudio64.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <div class="video-caption">FLStudio - 64 Sample Buffer (Video)</div>
{:/nomarkdown}

# 256 sample buffer

Reported Latency

* Unlabeled path - 6ms

## 256 sample buffer

{::nomarkdown}
    <video autoplay loop muted class="gifvid">
        <source src="/assets/DVD72/FLStudio/FLStudio256.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <div class="video-caption">FLStudio - 256 Sample Buffer (Video)</div>
{:/nomarkdown}


# 1024 sample buffer

Reported Latency

* Unlabeled path - 21ms

## 1024 sample buffer

{::nomarkdown}
    <video autoplay loop muted class="gifvid">
        <source src="/assets/DVD72/FLStudio/FLStudio1024.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <div class="video-caption">FLStudio - 1024 Sample Buffer (Video)</div>
{:/nomarkdown}

# Data

Here is a csv of all the data, including the config files used to plot it using [deltafinder](https://github.com/admiralbumblebee/deltafinder).

[FLStudio data](/assets/DVD72/FLStudio/data.zip)

# Conclusion

* FLStudio has about **2 buffers** worth of jitter.
    * With the Komplete 6, that's over **5x** as much maximum latency as FLStudio reports! (At least 3x for other devices.)
* FlStudio seems to drop MIDI triggers in some circumstances.
* FLStudio's Sampler Channel **HATES** missed note-offs or velocity 0's. I had a lot of trouble with that.
* Sampler Channel seems incapable of playing back samples untouched, or I'm missing some setting.

Based on my preliminary testing, this was the worst result of all products. I've changed my methodology and measuring since then, so please check other articles for more up to date comparisons.

# Meta

This post took:

* 1 hour to capture signals and graph them.
* 1 hour to fiddle with Sampler Channel.
* 2 hours to debug dropped MIDI triggers, channels "dying" (missed note-offs), and then just give up and assume FLStudio expects MIDI in a way that no other DAW does.
* 1 hour to write the article.

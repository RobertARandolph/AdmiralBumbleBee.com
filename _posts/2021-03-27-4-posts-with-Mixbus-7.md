---
layout: ['post', 'reader']
title: 4 posts with Mixbus 7 - Latency
comments: true
date:   2021-04-18_11:16:39 
categories: music
tags: ['Mixbus', 'DAW', 'Testing']
image:
description: Exploring Mixbus 7's Latency.
header:
header-caption:
---

[Mixbus 7 is out](https://www.gearslutz.com/board/new-product-alert/1347220-harrison-introduces-mixbus32c-version-7-tapex-quot-tracking-performing-experience-quot.html) and I'll be exploring the new feature(s) in the next 4 posts.

I've heard that Mixbus 7 might have better latency, so let's start it off with [the elephant in the room]({% post_url 2020-11-08-DAW-v-DAW-7-Mixbus %}): Mixbus latency.

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

[Read the introduction post]({% post_url 2020-10-25-daw-v-daw-721 %}). Hardware is unchanged.

[Read the original testing of Mixbus 6]({% post_url 2020-11-08-DAW-v-DAW-7-Mixbus %}).

For this round I used [MSoundFactory](https://www.meldaproduction.com/MSoundFactory)'s Drum Sampler. VST version. Kontakt will no longer run on my machine and I have no interest in debugging it.

Previous tests were done with **Limiter On**, because that is the default state of Mixbus when you open a project. I have added additional testing without the limiter this round.

Reminder, don't trust dweebs on the internet. Do the tests yourself, or at least double check my [data](#data).

# Results

All tests run at 48,000hz sample rate.

Let's start with the results so you can get back to what you were doing.

* 64 Samples _without_ Limiter engaged (reports 1.3ms latency)
  * Mixbus 6.1.22  - **5.37ms** (257, 261, 258 samples)
  * Mixbus 7.0  - **2.77ms** (131, 132, 131 samples)
* 256 Samples _without_ Limiter engaged (reports 5.3ms latency)
  * Mixbus 6.1.22  - **18.45ms** (886, 885, 885 samples)
  * Mixbus 7.0  - **18.77ms** (902, 903, 900 samples)
* 1024 Samples _without_ Limiter engaged (reports 21.3ms latency)
  * Mixbus 6.1.22  - **~66.4ms** (3185, 3185, 3187 samples)
  * Mixbus 7.0  - **66.74ms** (3203, 3204, 3204 samples)

* 64 Samples _with_ Limiter engaged (reports 1.3ms latency)
  * Mixbus 6.1.22  - **~8.15ms** (391, 391, 391 samples)
  * Mixbus 7.0  - **8.34ms** (400, 399, 399 samples)
* 256 Samples _with_ Limiter engaged (reports 5.3ms latency)
  * Mixbus 6.1.22  - **24.30ms** (1166, 1167, 1167 samples)
  * Mixbus 7.0  - **24.60ms** (1183, 1180, 1182 samples)
* 1024 Samples _with_ Limiter engaged (reports 21.3ms latency)
  * Mixbus 6.1.22  - **~72.18ms** (3468, 3464, 3468 samples)
  * Mixbus 7.0  - **72.54ms** (3483, 3481, 3483 samples)
  
**NOTE** - Mixbus 6 seems to have a strange issue with latency. It often drifts when changing buffers (if it doesn't crash!). This meant that I often needed to restart mixbus and re-run measurements multiple times to confirm. Because of this behaviour, there's a chance that the measurements may not match [previous results]({% post_url 2020-11-08-DAW-v-DAW-7-Mixbus %}).

# Mixbus 6

## Mixbus 6, 64 Sample Buffer

{::nomarkdown}
<video autoplay loop muted class="gifvid">
	<source src="/assets/Mixbus7/Mixbus6-64.mp4" type="video/mp4">
	Your browser does not support the video tag.
</video>
<div class="video-caption">Mixbus 6, 64 Sample Buffer</div>
{:/nomarkdown}

## Mixbus 6, 256 Sample Buffer

{::nomarkdown}
<video autoplay loop muted class="gifvid">
	<source src="/assets/Mixbus7/Mixbus6-256.mp4" type="video/mp4">
	Your browser does not support the video tag.
</video>
<div class="video-caption">Mixbus 6, 256 Sample Buffer</div>
{:/nomarkdown}


## Mixbus 6, 1024 Sample Buffer

{::nomarkdown}
<video autoplay loop muted class="gifvid">
	<source src="/assets/Mixbus7/Mixbus6-1024.mp4" type="video/mp4">
	Your browser does not support the video tag.
</video>
<div class="video-caption">Mixbus 6, 1024 Sample Buffer</div>
{:/nomarkdown}

# Mixbus 6, Limiter On

[Measurement Data](/assets/Mixbus7/Mixbus6Limiter.zip)

## Mixbus Limiter6, 64 Sample Buffer

{::nomarkdown}
<video autoplay loop muted class="gifvid">
	<source src="/assets/Mixbus7/MixbusLimiter6-64.mp4" type="video/mp4">
	Your browser does not support the video tag.
</video>
<div class="video-caption">Mixbus Limiter6, 64 Sample Buffer</div>
{:/nomarkdown}


## Mixbus Limiter6, 256 Sample Buffer

{::nomarkdown}
<video autoplay loop muted class="gifvid">
	<source src="/assets/Mixbus7/MixbusLimiter6-256.mp4" type="video/mp4">
	Your browser does not support the video tag.
</video>
<div class="video-caption">Mixbus Limiter6, 256 Sample Buffer</div>
{:/nomarkdown}


## Mixbus Limiter6, 1024 Sample Buffer

{::nomarkdown}
<video autoplay loop muted class="gifvid">
	<source src="/assets/Mixbus7/MixbusLimiter6-1024.mp4" type="video/mp4">
	Your browser does not support the video tag.
</video>
<div class="video-caption">Mixbus Limiter6, 1024 Sample Buffer</div>
{:/nomarkdown}


# Mixbus 7

[Measurement Data](/assets/Mixbus7/Mixbus6Limiter.zip)

## Mixbus 7, 64 Sample Buffer

{::nomarkdown}
<video autoplay loop muted class="gifvid">
	<source src="/assets/Mixbus7/Mixbus7-64.mp4" type="video/mp4">
	Your browser does not support the video tag.
</video>
<div class="video-caption">Mixbus 7, 64 Sample Buffer</div>
{:/nomarkdown}


## Mixbus 7, 256 Sample Buffer

{::nomarkdown}
<video autoplay loop muted class="gifvid">
	<source src="/assets/Mixbus7/Mixbus7-256.mp4" type="video/mp4">
	Your browser does not support the video tag.
</video>
<div class="video-caption">Mixbus 7, 256 Sample Buffer</div>
{:/nomarkdown}


## Mixbus 7, 1024 Sample Buffer

{::nomarkdown}
<video autoplay loop muted class="gifvid">
	<source src="/assets/Mixbus7/Mixbus7-1024.mp4" type="video/mp4">
	Your browser does not support the video tag.
</video>
<div class="video-caption">Mixbus 7, 1024 Sample Buffer</div>
{:/nomarkdown}

# Mixbus 7, Limiter On


## Mixbus Limiter7, 64 Sample Buffer

{::nomarkdown}
<video autoplay loop muted class="gifvid">
	<source src="/assets/Mixbus7/MixbusLimiter7-64.mp4" type="video/mp4">
	Your browser does not support the video tag.
</video>
<div class="video-caption">Mixbus Limiter7, 64 Sample Buffer</div>
{:/nomarkdown}


## Mixbus Limiter7, 256 Sample Buffer

{::nomarkdown}
<video autoplay loop muted class="gifvid">
	<source src="/assets/Mixbus7/MixbusLimiter7-256.mp4" type="video/mp4">
	Your browser does not support the video tag.
</video>
<div class="video-caption">Mixbus Limiter7, 256 Sample Buffer</div>
{:/nomarkdown}


## Mixbus Limiter7, 1024 Sample Buffer

{::nomarkdown}
<video autoplay loop muted class="gifvid">
	<source src="/assets/Mixbus7/MixbusLimiter7-1024.mp4" type="video/mp4">
	Your browser does not support the video tag.
</video>
<div class="video-caption">Mixbus Limiter7, 1024 Sample Buffer</div>
{:/nomarkdown}

# Data

* [Mixbus 6 Measurement Data](/assets/Mixbus7/Mixbus6.zip)
* [Mixbus 7 Measurement Data](/assets/Mixbus7/Mixbus.zip)
* [Mixbus 6 w/Limiter Measurement Data](/assets/Mixbus7/Mixbus6Limiter.zip)
* [Mixbus 7 w/Limiter Measurement Data](/assets/Mixbus7/MixbusLimiter.zip)

# Conclusion

* Mixbus 7 has reduced latency when the mixer is turned off for the 64 sample buffer size. Latency when the Limiter is _on_ is effectively identical.
* Mixbus 7 still does not have "MIDI Jitter
* Notably for me: Mixbus 6 and 7 crashed _frequently_ during these tests when changing buffer sizes unless I stopped the engine to change, then started the engine back.
* Mixbus 6 was more likely to have drifting latency. (Likely due to underruns). If I ran a test then walked away for an hour, with nothing but Mixbus running on my system, the latency would increase a significant amount.
    * Mixbus 7 did not do this. I do not recall having any increased latency while running Mixbus 7 during these tests.
* As the differences between these results and my prior results varied slightly, I reran tests on Reaper, Pro Tools and Cubase. They all returned practically identical results.
  * The only notable variation is the 64 sample buffer, which was 3ms more latent in the first tests.

I did a quick test at 128 sample buffer.

* Mixbus 6 - 10.44ms
* Mixbus 7 - 10.82ms

This appears to indicate that, on my test setup at least, the lowered latency only appears to be at the 64-sample buffer size.



# Meta

This post took:

* 26 hours to run the tests.
  * The tests were run, in full, 3 times. 
  * I spot checked multiple tests due to the slipping buffers.
* 12 hours to write the post.

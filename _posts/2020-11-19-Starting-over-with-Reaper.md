---
layout: ['post', 'reader']
title: 30 days of Starting over with REAPER
comments: true
date:   2020-11-19_21:05:53 
categories: music
tags: ['Reaper', 'Reaper Configuration']
image:
description: 30 days of starting from scratch with REAPER.
header:
header-caption:
series: reaperover
---

You might be aware that I 'was' a big fan of REAPER, and I amassed a [somewhat ridiculous configuration]({% post_url 2017-04-13-Reaper-Settings %}) which I'm not even particularly happy with anyway!

Well, [REAPER 6 came out](https://www.youtube.com/watch?v=bepxGZ-ZXGE) and I thought it was a disaster, largely the GUI.

So, I just stopped using REAPER. I've been happily using Studio One 5 and Cubase 10/11, with Logic Pro X for any video production (nice integration with FCPX).

Likewise, I've been doing my "30 days" in private. Various self-improvement tasks, depriving myself of things that I think I rely on, 30 days of playing a single instrument, etc...

Here we are: 30 days of Starting over with REAPER.

{% assign reaperover = site.posts | where: "series", "reaperover" | sort: 'date' %}
<ul>
{% for my_page in reaperover %} 
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

For the next 30 days I'll be writing articles detailing my journey of starting with REAPER from scratch. Every feature I use, setting I change, script I install, window I move or question I ask on the forum will be logged and explained.

I'll aim to answer 2+ questions for every decision:

* Why is this a problem for me?
* Why did I decide on this solution?
* (Optional) How is this done in a competing product that I believe achieves this better?
* (Optional) What are the other options to solve this? - Not always asked, as the options may simply be "Use another program" and/or "Don't do that thing", which are non-optional for this exercise.
* (Optional) What are the complications of selecting this solution?

# What I want

As part of this process I've started a new site feature: [DAW Wants](DAW-Wants.html). I'll be using this REAPER-centric series to flesh this out in the context of REAPER, and possibly some other comparisons that I make.

# Meta

This post took:

* 2 hours to write.
* ~12 hours to think about and write the [DAW Wants](DAW-Wants.html) page.

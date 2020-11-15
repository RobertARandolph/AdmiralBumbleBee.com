---
layout: ['post', 'reader']
title: DAW v DAW 72 - Conclusions
comments: true
date:   2020-11-15_14:38:47 
categories: music
tags: ['Testing', 'DAW']
image:
description:
header: /assets/DVD72/DVD72final.png
header-caption: Saga over... for now?
---

The DAW v DAW 7.2 series has been ongoing for a few weeks now and it's time to organize some data and draw some conclusions.

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

# Video

<iframe width="800" height="600" src="https://www.youtube.com/embed/UWNd6AkgaGs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Short overview video.

# Introduction

If you want to know what's going on here then [Read the introduction post]({% post_url 2020-10-25-daw-v-daw-721 %}).

# DAWs with Jitter

The DAWs that did not properly communicate MIDI offset during live input are:

* [Pro Tools 09.01]({% post_url 2020-10-28-DAW-v-DAW-7-Pro-Tools %})
* [FLStudio 20.7]({% post_url 2020-11-03-DAW-v-DAW-7-FLStudio %})
* [Digital Performer 10.13]({% post_url 2020-11-09-DAW-v-DAW-7-Digital Performer %})
* [Waveform 11.1]({% post_url 2020-11-12-DAW-v-DAW-7-Waveform %})
* [Cubase 11]({% post_url 2020-11-13-DAW-v-DAW-7-Cubase %})

# DAWS without Jitter

* [Live 10.1]({% post_url 2020-11-01-DAW-v-DAW-7-Live %}) - Live has that strange ~4 sample jitter.
* [Bitwig 3.2 ]({% post_url 2020-11-07-DAW-v-DAW-7-Bitwig %})
* [Mixbus 6.1]({% post_url 2020-11-08-DAW-v-DAW-7-Mixbus %})
* [Ardour 6.3 ]({% post_url 2020-11-08-DAW-v-DAW-7-Ardour %})
* [Logic 10.5]({% post_url 2020-11-10-DAW-v-DAW-7-Logic %}) - Logic has that strange ~4 sample jitter.
* [Reaper 6.1]({% post_url 2020-11-11-DAW-v-DAW-7-Reaper %})
* [Studio One 5.1 ]({% post_url 2020-11-12-DAW-v-DAW-7-Studio-One %})

# Lower Latency DAWs

## With Jitter

* [Waveform 11.1]({% post_url 2020-11-12-DAW-v-DAW-7-Waveform %})
* [Cubase 11]({% post_url 2020-11-13-DAW-v-DAW-7-Cubase %})

Both nearly identical behaviour.

## Without Jitter

* [Bitwig 3.2 ]({% post_url 2020-11-07-DAW-v-DAW-7-Bitwig %})
* [Ardour 6.3 ]({% post_url 2020-11-08-DAW-v-DAW-7-Ardour %})
* [Logic 10.5]({% post_url 2020-11-10-DAW-v-DAW-7-Logic %}) - Logic has that strange ~4 sample jitter.
* [Reaper 6.1]({% post_url 2020-11-11-DAW-v-DAW-7-Reaper %})

# Notable Results

* [Mixbus 6.1]({% post_url 2020-11-08-DAW-v-DAW-7-Mixbus %}) - Exponentially increasing latency with buffer size. 
    * Also the longest latency at all buffer sizes in my tests.
* [FLStudio 20.7]({% post_url 2020-11-03-DAW-v-DAW-7-FLStudio %}) performed the worst. High latency _and_ jitter.
* [Studio One 5.1 ]({% post_url 2020-11-12-DAW-v-DAW-7-Studio-One %}) - Had a bit more latency than other products, but it also had the _most configurability_. This is important because buffering isn't _all about MIDI_.
* If you care about live playback accuracy of MIDI Data, then [Reaper 6.1]({% post_url 2020-11-11-DAW-v-DAW-7-Reaper %}) and [Bitwig 3.2 ]({% post_url 2020-11-07-DAW-v-DAW-7-Bitwig %}) are your best choice as of the date of these tests.

I'm still interested in the ~4 sample latency that some "near-zero jitter" DAWs have. The hypothesis that this is rounding error when converting MIDI event position to sample position (round() instead of ceil()/floor()) is my favorite theory.

I don't think 4 samples is worth fretting over.

# WARNING!

As [Studio One 5.1 showed](https://blog.presonus.com/index.php/2020/10/20/whats-new-studio-one-5-1/), these results can be invalidated by an update.

I likely won't do these tests again unless there's a very good reason to. Test yourself with a loopback, [Bidule's MIDI Monitor](https://www.plogue.com/bidule/help/ch04s09.html) or [use your ears]({% post_url 2020-07-11-daw-v-daw-s1-fail %}#audibility).

# Conclusion

There's more that could be said, but the general rule is: If you're using a DAW with MIDI input jitter (not-communicating MIDI offsets), then use the lowest buffer size possible. That's all you can do.

Please remember as well that there's MANY tradeoffs in DAW design. Some companies may have had reasons for making these decisions, and a detriment in this realm may provide a benefit in another. It's not always cut and dry.

This was a lot of work to confirm, organize, discuss with various companies and readers and execute. If you enjoyed this then please let me know via email, [Discord](https://discord.gg/34cFzVn), Slack (if you know me there), leave a comment here, [donate](http://www.paypal.me/admiralbumblebee), or [Join Patreon](http://patreon.com/admiralbumblebee). All of them are great options.

# Meta

This post took:

* 308.6 hours so far.
* 9 hours to make the video.
* 1 hour to write this article.
* ~$450 to purchase software (Bitwig Update, Pro Tools update, Cubase Update)
* A bald spot on my head.

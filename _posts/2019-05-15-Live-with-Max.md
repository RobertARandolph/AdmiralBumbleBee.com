---
layout: ['post', 'reader']
title: "Max for Live"
comments: true
date:   2019-05-15_10:12:34 
categories: music
tags: ['Ableton Live']
image: /assets/Live/plugins/Max/MaxForLive.png
description: Max for Live
series: ableton
pdf: true
---

{::nomarkdown}
<img src="/assets/Live/Plugins/Max/MaxForLive.png" alt="Max for Live">
<div class="image-caption">Max for Live</div>
{:/nomarkdown}

Here's where things get fun for both the novice and the advanced user: [Max for Live](https://www.ableton.com/en/live/max-for-live/).

It's either a $199 purchase, or it comes with Live Suite (as of this writing). I won't be doing an in-depth review of Max for Live, since that could _easily_ be a series larger than the Live review itself (I believe M4L is _more_ functional and capable than Live). Instead this is an overview of how Max for Live impacts the ability, functionality and value of Live.

Max for Live is probably the most incredible value you can get as a Live user, so let me explain why...

**Other parts in this series**: 

{% assign lives = site.posts | where: "series", "ableton" | sort: 'date' %}
<ul>
{% for my_page in lives %} 
    {% if page.url != my_page.url and my_page.layout != "reader" %}
        <li><a class="page-link" href="{{ my_page.url | prepend: site.baseurl }}">{{ my_page.title | split: '-' | last }}</a></li>
    {% endif %}
{% endfor %}
</ul>

**VALID FOR LIVE 10.1**. Future updates may render some of this information invalid.

<!--more-->



# Contents
{:.no_toc}
* TOC
{:toc}

# Max

{::nomarkdown}
<img src="/assets/Live/Plugins/Max/MaxForLive2.png" alt="Max for Live">
<div class="image-caption">Max for Live</div>
{:/nomarkdown}

Max is a visual programming environment.

No, this doesn't mean it's for programming visuals (though, you can). It's a programming environment where you work with programmatic constructs via a visual representation rather than a textual representation.

You move objects around, connect them, set parameters and that's it. Simple but _not_ easy.

[Max](https://cycling74.com) has been around quite a while, and it's been successful as a standalone product based upon how incredibly powerful it can be without necessitating the user to learn a new method of interacting with their computer. It works with audio largely like how you think about audio (in a modular sense), with a few small additions.

# Max Patches

{::nomarkdown}
<video autoplay loop muted class="gifvid">
<source src="/assets/Live/Plugins/Max/LFO.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
<div class="video-caption">LFO for free</div>
{:/nomarkdown}

This section is short, but important.

[Go here](http://www.maxforlive.com/library/).

Go there. Now.

3,827 (as of this writing) devices available for you **for free**. [Remember when I whined a bit]({% post_url 2019-05-10-Live-Plugins %}) about the plugins in Live? This fixes almost everything. If you have Max for Live, then you have nearly everything that you could want.

Audio effects, MIDI effects, Video Effects, Hardware control, synthesis of all sorts (audio and video) and somehow even more.

There's plenty of incredible paid devices out there too, and quite often cheaper than their VST/AU/AAX competition and with more functionality.

# Max as a Patch

{::nomarkdown}
<img src="/assets/Live/Plugins/Max/Convolution.png" alt="Convolution Reverb Pro">
<div class="image-caption">Convolution Reverb Pro</div>
{:/nomarkdown}

Max for Live "fixes" a lot about Live.

[No Convolution Reverb?]({% post_url 2019-05-10-Live-Plugins %}#problems), LIES! [There's a great convolution reverb](https://www.ableton.com/en/packs/convolution-reverb/#?item_type=max_for_live) included with Max for Live, and a device for capturing IRs. This also means there's a cabinet IR loader there too.

* No Modulation? [Wrong](http://maxforlive.com/library/device/4551/lfo10) and Max for Live comes with an Envelope Follower and Drawable LFO.
* Want a cooler delay [than Echo?]({% post_url 2019-05-10-Live-Plugins %}#echo). M4L's [got your back](http://maxforlive.com/library/device/158/jg-delays).
* No step sequencer in Live? [Sure there is](http://maxforlive.com/library/device/231/advanced-step-sequencer).
* Is your [launchpad](https://novationmusic.com/launch/launchpad) not as cool as a [Monome](https://monome.org)? [Fixed](http://maxforlive.com/library/device/141/monomeemu).
* [How about Live following tempo to live drums?](https://www.ableton.com/en/packs/beatseeker/).
* Unhappy with MIDI input methods in Live? [Not anymore](https://audioutlaw.com/product/mia-midi-input-assistant/).
* That missing oscilloscope [isn't actually missing](http://www.maxforlive.com/library/device/1918/jo-floating-oscilloscope).
* Want tools for Max for Live itself, [those exist too](https://www.ableton.com/en/packs/max-live-building-tools/#?item_type=max_for_live).

**I could go on. This could be 5000 lines of ways that Max for Live improves the Live experience.**

If you own Live then you should absolutely acquire Max for Live. It brings a large amount of functionality that's missing from the stock Ableton Live installation to the table.

If I were to claim that Live was a 2/10 up till this point, with M4L it's a 8/10. (ratings arbitrary, don't latch on to this)

# Live Enhancement Suite

This has nothing to do with Max for Live, but I'm throwing it in here anyway. I'm constantly having people tell me about it. I know about it. I knew about it.

[Live Enhancement Suite](https://enhancementsuite.me)

I don't think too highly of DAWs that require third-party utilities that rely on third-party additions that rely on third-party integration to fix basic deficiencies. Yes it makes Live better for some people. Yes it's free. Yes it's easy to use (on Windows). Yes it's a must-have for some people.

However, if someone was able to fix these things in their spare time with a [third-party solution](http://www.hammerspoon.org), then there's no excuse for Ableton to allow these warts to fester.

Currently LES only adds 13 (11 on macOS) shortcuts, a context menu for effects/instruments (that you must configure yourself textually) and a context menu in the piano roll (which doesn't work in macOS properly, you have to shift-double-right-click for it).

The "stamp" tool does not work for me in macOS, however in Windows it's a nice shortcut for scale/chord placement.

Setting up menus is tedious, especially if you have a lot of effects/instruments that you frequently use.

Many of the shortcuts only work "if..." and tend to be somewhat error prone. If you're not in the right place, they fail as macros tend to do but without any direct feedback from Live itself or indication of context.

I get the excitement about LES. It has potential, but it's a small selection of hammerspoon scripts with some fancy branding to try and fix things that Ableton should have fixed 10 years ago. Meh.

# Conclusion

Short article. Big impact.

Max for Live is not talked about much relative to how _incredible_ of an impact it can have on a Live user's workflow, functionality and creative capability.

Max for Live brings more functionality to the table _than Live itself_ does due to the massive functionality of Max and the generous community.

Unfortunately, I find it unfair to consider it as part of Live because of the expense. It's well out of the budget for many hobbyists and it's not presented as a core part of Live. The value is _absolutely_ worth it. Max for Live is an unparalled value in the world of DAW add-ons, but... it is an add-on.

If you can afford it, Max for Live brings live into the stratosphere of functionality as it pertains to sound-design heavy production and sequencing.

# Support Me!

This post took 9 hours to research, screenshot, write and edit. If you appreciate the information presented then <a href="/DonateNow/">please consider joining patreon or paying me for my time spent bringing you quality content!</a>







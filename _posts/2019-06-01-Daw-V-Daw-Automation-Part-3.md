---
layout: post
title: "DAW v DAW - Part 4: More volume automation"
comments: true
date:   2019-06-01_11:04:42 
categories: music
tags: ['Rant', 'DAW', 'Testing']
image: /assets/Differ/Automation3/LogicNoSAA.png
description: More Automation stuff.
series: DAWDiffer
---

{::nomarkdown}
<a href="/assets/Differ/Automation3/LogicNoSAA.png">
<img src="/assets/Differ/Automation3/Thumbnails/LogicNoSAA.png" alt="Logic, No Sample Accurate Automation">
</a>
<div class="image-caption">Spoiler Alert: Logic, No Sample Accurate Automation</div>
{:/nomarkdown}

In [the last series]({% post_url 2019-05-25-Daw-V-Daw-Automation-Part-2 %}) I explored DAW fader automation. There's more to this though:

* Some DAWs have multiple volume automation points, and expectations of what to use.
* Some DAWs may have settings that affect automation.
* Some DAWs are tricky little buggers.
* Some companies are pretty cool.
  * Or not.

Please join me as I explore these facets and see more about how automation differs between products.

**Other posts in this series**:

{% assign differ = site.posts | where: "series", "DAWDiffer" | sort: 'date' %}
<ul>
{% for my_page in differ %} 
    {% if page.url != my_page.url  %}
        <li><a class="page-link" href="{{ my_page.url | prepend: site.baseurl }}">{{ my_page.title | split: '-' | last }}</a></li>
    {% endif %}
{% endfor %}
</ul>

<!--more-->



# Contents
{:.no_toc}
* TOC
{:toc}

# README

Before we start, it seems that some people didn't understand the last article. Probably because I ass-u-me-d that certain aspects of the testing were implicitly obvious. My bad 100%. **LET ME MAKE THIS CLEAR**

I was testing fader automation. **ONLY** fader automation. I wanted to know if what you see is what you get with fader automation.

I've had numerous responses from people saying that would do it another way, or that they're ok with the fade, or that they'd just edit the clip, or... various things dismissing their product's inability to show them what it's doing accurately.

You should absolutely be concerned if your product does something other than what it shows you for a function as important of automation. Even if you don't mind the fades, it should matter that the fades aren't specified or shown.

Look at Studio One for why this is so important! There are now 3 versions of the software that will render your project differently if you have automation in the project! 4.1.4 has the (very mildly) noise automation that's fairly quick. 4.5.0 has huge fades. 4.5.1 has much smaller transition time and less noise.

The software or developer should tell you what's happening. No matter what design decisions they make, you should be informed.

If I have to be the one to inform you, then you should be upset with your DAW's developer, [and not with me](https://en.wikipedia.org/wiki/Shooting_the_messenger).

# READE ME MORE

I **KNOW** that if you wanted to mute a part, then ideally you would just cut the region. Now you're only dealing with the hidden (or non-configurable) fades some DAWs put on region start/ends. Yet another article/video... We'll get there eventually I hope :)

This is an **AUTOMATION TEST**. Creating a drop in automation like this is the ideal way to expose _certain_ issues with what the product claims, and what it _does_. This isn't even the _only_ automation test. There's more testing to do!

There's almost always a workaround for any aberrant behaviour. I'm investigating a specific behaviour. Workarounds for 'the desired result' are mostly irrelevant.

I strongly urge the reader to stay informed, test everything and user your ears.

And for the love of all that's holy, don't trust me. **DO NOT TRUST ME**. Try it yourself. Decide if it matters to you. Use the workarounds or workflows that you desire.

# Video

<iframe width="800" height="450" src="https://www.youtube.com/embed/5suOAxOzyMI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


# The File

[Here is the test file that I used](https://www.admiralbumblebee.com/assets/Differ/TestSine.wav).

# The Test

{::nomarkdown}
<img src="/assets/Differ/Automation2/Setup.png" alt="120bpm, 1 bar fade">
<div class="image-caption">100bpm instant drop to -inf and back to 0dB</div>
{:/nomarkdown}

For my testing here I set the tempo to 100bpm, and at beat two I created the fastest possible automation from 0dB to -Inf. On beat three I created the fastest automation possible from -Inf to 0dB.

All DAWs had their buffer size set to 64 samples. All other settings default.

**NOTE**: Not all DAWs have automation snapping or the ability to set an automation point to an exact value. This may yield slight differences in results, but I believe that the results are easy to navigate.

# The Talk

I will be visiting the products in reverse order of how they performed [the last series]({% post_url 2019-05-25-Daw-V-Daw-Automation-Part-2 %}).

I'll be presenting various inspections based on settings, updates and workflows.

# Studio One 4.5.1

{::nomarkdown}
<a href="/assets/Differ/Automation3/StudioOne451.png">
<img src="/assets/Differ/Automation3/Thumbnails/StudioOne451.png" alt="Studio One 4.5.1">
</a>
<div class="image-caption">Studio One 4.5.1</div>
{:/nomarkdown}

The [forums jumped all over the last post](https://forums.presonus.com/viewtopic.php?f=151&t=35090). Great! The users there were rightly upset that their software wasn't properly communicating its functionality through documentation or through doing what is drawn the screen.

Presonus fixed Studio one in **THREE DAYS**. Well... kinda?

Studio One still shows a ripple _after_ the automation, and the fade is ~250samples (5.2ms). It's very clearly a low pass filter, which is quite possibly the worst way to handle this situation.

Except then they broke automation again even more.

## Studio One 4.5.1 Borked

{::nomarkdown}
<a href="/assets/Differ/Automation3/StudioOneFadeGraphic.png">
<img src="/assets/Differ/Automation3/Thumbnails/StudioOneFadeGraphic.png" alt="Studio One Setup">
</a>
<div class="image-caption">Studio One Setup</div>
{:/nomarkdown}

{::nomarkdown}
<a href="/assets/Differ/Automation3/StudioOneFade.png">
<img src="/assets/Differ/Automation3/Thumbnails/StudioOneFade.png" alt="Studio One Fade">
</a>
<div class="image-caption">Studio One Fade</div>
{:/nomarkdown}

This is a 1600 sample fade in Studio one. The software presents it as a linear fade.

What do we get? Some sort of monstrosity. There's multiple jumps, including a fairly significant one around -48dB.

This is **VERY AUDIBLE** on any sort of automation fade. Please, go try it. Don't trust me. 

**EDIT** - This is not a new thing apparently. I made a minor mistake here! This is the expected behaviour of Studio One. It's still ridiculous behaviour, for the reasons outlined in this article, but it's not a new bug. My mistake calling it a new bug!

### Clean

{::nomarkdown}
<a href="/assets/Differ/Automation3/StudioOneSines.png">
<img src="/assets/Differ/Automation3/Thumbnails/StudioOneSines.png" alt="At least it's clean?">
</a>
<div class="image-caption">At least it's clean?</div>
{:/nomarkdown}

The automation is at least clean, minus an anomaly at one of those fade breaks.

# FLStudio 20.1.2

{::nomarkdown}
<a href="/assets/Differ/Automation3/FLStudioChannel.png">
<img src="/assets/Differ/Automation3/Thumbnails/FLStudioChannel.png" alt="FL Studio Channel Volume Automation">
</a>
<div class="image-caption">FL Studio Channel Volume Automation</div>
{:/nomarkdown}

{::nomarkdown}
<a href="/assets/Differ/Automation3/FLStudioBalance.png">
<img src="/assets/Differ/Automation3/Thumbnails/FLStudioBalance.png" alt="FL Studio Fruity Balance Automation">
</a>
<div class="image-caption">FL Studio Fruity Balance Automation</div>
{:/nomarkdown}

The people [on Reddit's r/AdvancedProduction](https://www.reddit.com/r/AdvancedProduction/comments/bu5xd1/does_your_daw_perform_the_automation_you_think_it/) suggested that I did FL Studio wrong.

Above are tests of the channel volume and fruity balance.

This will be part of a different part of the series, but let's jump ahead.

Channel Volume automation performs no better [than volume fader automation]({% post_url 2019-05-25-Daw-V-Daw-Automation-Part-2 %}#flstudio-2012) than fader automation.

Fruity balance has a 300 sample transition (6.25ms). "Worse" [than Logic pro]({% post_url 2019-05-25-Daw-V-Daw-Automation-Part-2 %}#logic-1044).

**READ**: Once again, so we're totally clear: this is _only_ a problem because the software shows a near instant fade. Obviously this is not physically possible, however if that's what is displayed then it should be:

* What is done, or..
* Anything to the contrary should be documented

# Bitwig 3.0 Beta 4

{::nomarkdown}
<a href="/assets/Differ/Automation3/BitwigTool.png">
<img src="/assets/Differ/Automation3/Thumbnails/BitwigTool.png" alt="Bitwig automation with native Tool plugin">
</a>
<div class="image-caption">Bitwig automation with native Tool plugin</div>
{:/nomarkdown}

Some Bitwig users also think that (for reasons I _very much_ disagree with) [you should do automation with a plugin?](https://www.kvraudio.com/forum/viewtopic.php?f=259&t=526117).

Let's give it a shot!

Tool only goes to -36dB, and I did not stack them as it changed the result (perhaps you can figure out why... topic for another article.).

This gives [the exact same automation as before]({% post_url 2019-05-25-Daw-V-Daw-Automation-Part-2 %}#bitwig-30-beta-3).

[A user tested with a VST](https://www.kvraudio.com/forum/viewtopic.php?p=7416905#p7416905) and this has different results (that I'll be looking at in the future). 

The subject of third-party plugin automation is even more complex, but the fact that third-party VSTs offer more predictable results is concerning.

Spoiler Alert: Some plugins can do even better than that user showed. Why are Bitwig's native devices worse? Unacceptable.

# Ardour 5.12

{::nomarkdown}
<a href="/assets/Differ/Automation3/ArdourRegion.png">
<img src="/assets/Differ/Automation3/Thumbnails/ArdourRegion.png" alt="Ardour 'Clip Gain' Automation">
</a>
<div class="image-caption">Ardour 'Clip Gain' Automation</div>
{:/nomarkdown}

Using Ardour's clip gain offers more true-to-seen information. The transition time is approximately 10samples.

If you need the absolute in precision volume automation, then this is what you need. That leaves most other types of automation to smoothing though.

# Logic 10.4.4

{::nomarkdown}
<img src="/assets/Differ/Automation3/LogicSetting.png" alt="Logic's Sample Accurate Automation">
<div class="image-caption">Logic's Sample Accurate Automation</div>
{:/nomarkdown}

{::nomarkdown}
<a href="/assets/Differ/Automation3/LogicNoSAA.png">
<img src="/assets/Differ/Automation3/Thumbnails/LogicNoSAA.png" alt="Logic, No Sample Accurate Automation">
</a>
<div class="image-caption">Logic, No Sample Accurate Automation</div>
{:/nomarkdown}

Logic is a terribly strange beast. For the previous tests I had the `Preferences->Audio-General->Sample Accurate Automation` set to "Volume, Pan, Sends".

Technically, I made a mistake, because that is not the default setting!

In the graphics above I had to change the window size to 3200 samples on each side, rather than 800. That means that each X-axis division is 200 samples instead of 50.

So without Sample Accurate Automation turned on, the automation is 4,400 samples off, or about 91.7ms. The fade is about 600 samples or 12.5ms.

Ouch! That means that Logic's default behaviour is **FAR** more misleading.

# Waveform 10.1.5

I have nothing for Waveform here.

# Cubase 10.0.15

{::nomarkdown}
<video autoplay loop muted class="gifvid">
<source src="/assets/Differ/Automation3/CubaseFade.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
<div class="video-caption">Cubase Automatic Fades</div>
{:/nomarkdown}

{::nomarkdown}
<a href="/assets/Differ/Automation3/CubaseBox.png">
<img src="/assets/Differ/Automation3/Thumbnails/CubaseBox.png" alt="Cubase Range Selection Method">
</a>
<div class="image-caption">Cubase Range Selection Method</div>
{:/nomarkdown}

{::nomarkdown}
<a href="/assets/Differ/Automation3/CubaseManual.png">
<img src="/assets/Differ/Automation3/Thumbnails/CubaseManual.png" alt="Cubase Manual Adjustment">
</a>
<div class="image-caption">Cubase Manual Adjustment</div>
{:/nomarkdown}

The case could be made that I made a mistake last time around. I used the automation adjustment box thing for creating the automation.

When you use the range selection and pull down the top of the box, you automatically get fades that correspond to the render. It's possible to move those points closer together!

So if you look at the graphs above then you'll see that... they're exactly the same. That means that Cubase is automatically generating automation data that matches what will be rendered. Bravo!

The downside is that you can move things around, thereby tricking yourself into thinking that you made a difference, but you did not.

# Ableton Live 10.1b22

{::nomarkdown}
<img src="/assets/Differ/Automation3/LiveStraight.png" alt="Live is straight guys, seriously, he'll get a girlfriend soon.">
<div class="image-caption">Live is straight guys, seriously, he'll get a girlfriend soon.</div>
{:/nomarkdown}

I did not notice, or find anything to improve with Live. I think that it does mostly what it says that it will, and that's cool.

It would be nice if it didn't show you a perfectly straight vertical line that implies automation _can_ happen in less than a single sample.

You know, since that's physically impossible.

# Digital Performer 10.01

I have nothing to show here. I'm mostly happy with DP's Performance.

# Reaper 5.978

{::nomarkdown}
<img src="/assets/Differ/Automation3/ReaperTransition.png" alt="Reaper Settings for Automation">
<div class="image-caption">Reaper Settings for Automation</div>
{:/nomarkdown}

{::nomarkdown}
<video autoplay loop muted class="gifvid">
<source src="/assets/Differ/Automation3/ReaperTransitions.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
<div class="video-caption">Reaper Transitions</div>
{:/nomarkdown}

Reaper has a setting that allows you to adjust the transition time for _newly created points_. I had this set to 0.5ms (the default) and created the points using the "Envelope: Insert 4 envelope points at time selection" command, which created the 0.5ms fades.

The points can be manually adjusted, or set to 0.1ms. This means that Reaper is the **ONLY** DAW tested which both shows you accurate information, and gives you granular control over it.

# Pro Tools 2019.5.0

{::nomarkdown}
<img src="/assets/Differ/Automation3/ProToolsLimit.png" alt="Pro Tools Rate Limiting">
<div class="image-caption">Pro Tools Rate Limiting</div>
{:/nomarkdown}

Pro Tools seems to limit the distance between automation points to the transition time. This is also excellent behaviour. What you see is what you hear.

# Conclusion

I still believe that any product which does not render what it displays or documents is faulty. No matter what Audio Engineers like to think: we rely on our eyes to ascertain certain details and to confirm behaviour of edits.

I plan on testing things like plugins and _A LOT MORE_ about how DAWs behave differently from each other. This is a test of volume automation (mostly using the fader).

As of this post, there's only two products that do what they communicate that they are doing: Reaper and Pro Tools. Everything else shows you one thing, and does another.

Some products even render your project differently depending on global preferences! That is _COMPLETELY_ unacceptable. Project preferences are reasonable configuration parameters to change how a project renders, but _never_ global preferences.

Even if you think that these things don't affect you, if your DAW isn't doing what it shows you, then you should be suspicious and curious about what else it's telling you. Hopefully as this series progresses, you'll learn that there's quite a few things to be aware of!

# Support Me!

This post took 19 hours to research, screensho t, write and edit. If you appreciate the information presented then <a href="/DonateNow/">please consider joining patreon or paying me for my time spent bringing you quality content!</a>







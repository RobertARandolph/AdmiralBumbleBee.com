---
layout: ['post', 'reader']
title: "DAW v. Daw - Part 1: Automation and Fades"
comments: true
date:   2019-02-17_10:05:08 
categories: music
tags: ['Rant', 'DAW', 'Testing']
image: /assets/Differ/LogicRepeat2.png
description: Do all DAWs really sound the same?
series: DAWDiffer
---

{::nomarkdown}
<img src="/assets/Differ/LogicRepeat2.png" alt="The same content... different renders?">
<div class="image-caption">The same content... different renders?</div>
{:/nomarkdown}

You hear it again and again. **ALL DAWS SOUND THE SAME**. Set them up properly and you can null them, no difference.

That's true. It is true. No doubt. Scientific fact that you can verify yourself.

If you control for all variables that may invalidate your result, then the static output of nearly every major DAW is bit-for-bit identical.

**BUT**...

**Other posts in this series**:

{% assign differ = site.posts | where: "series", "DAWDiffer" | sort: 'date' %}
<ul>
{% for my_page in differ %} 
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

<iframe width="800" height="450" src="https://www.youtube.com/embed/fe2ako6oZBE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

I had some fun making a video this time.

I still love these clickbaity thumbnails. An emoji, some weird text and [a properly formed question](https://en.wikipedia.org/wiki/Betteridge%27s_law_of_headlines) then you're set.

# The Rant

The "Null Test", everyone's favorite [fallacious](https://en.wikipedia.org/wiki/Fallacy_of_composition) strawman. The idea that "If you _can_ make DAWs null, then they must sound identical" is a preposterous claim. There's an number of reasons for this that are immediately clear:

* It's rare for users to try setup a product to sound like another product. Most users use default settings.
* Interface Design choices lead users to utilize specific features that affect the total output of the product.
* Capabilities influence sound. If DAW X can do high quality resampling on import, but DAW Y can not then DAW X will sound better for a not-insignificant number of users.
* Some _common features_ simply do **NOT** sound the same.

These are practical concerns, but they are nonetheless concerns _and_ they are all objectively verifiable.

So why doesn't anyone do it?

_It's easier to be right about something if you pare away everything that makes you wrong._ The output of modern audio software is an incredibly complex system with multiple sound-effect subsystems working in tandem. It's nearly impossible to make a claim about whether products sound similar or not unless you focus on any given subsystem.

Now we have a nearly 30 year history of people focusing on if DAWs "sum" the same. Why summing? Why that particular subsystem? I suspect that this was a major focus given that the previous systems used, mixing consoles, did vary in summing quality. Naturally when people new to digital heard differences that's what they attributed it to.

Unfortunately, that's also one of the easiest subsystems in a DAW to test. Set the pan law correct. Turn off Dither. Turn off stretching. No automation. No fades. No anything except summing. Export in Realtime. **BOOM**. You can easily prove that DAW's have identical summing systems. They do. There's no doubt. That's not why we're here.

The problem is that _nobody works that way_! People use automation, fades, third-party plugins, third-part plugin formats, various rendering strategies, different interfaces to functionality or lack certain functionality altogether.

[I already tackled one common cause of DAWs sounding different]({% post_url 2019-01-06-ZTX-vs-Elastique50 %}). Stretching/warping is a common task in modern productions, and you simply can't "control" for this in most cases. Users simply use what's there. This allows us to say that for a non-trivial set of workflows that one DAW sounds better than another because of a subsystem that's key to that workflow.

So what about other subsystems that are used in nearly every single production?

There's some easy tests. So let's just take the time to do that.

# The Testing

I'll be using 3 DAWs here for simplicity, but I strongly suggest that you try these tests yourself. **NEVER** trust anyone that makes such claims as I am unless you test it yourself.

* Cubase Pro 10
* Logic 10.4.4
* Pro Tools 2018.12

I've chosen these 3 DAWs because they are the reference systems for the 3 major plugin formats: VST3, AudioUnit and AAX.

I've tried to make very simple tests that you can re-create quickly. I **STRONGLY SUGGEST** taking a few minutes and coming up with your own versions. DO NOT TRUST ME. Do not trust anyone who makes claims that go contrary to 'common knowledge' until you try it yourself.

Consider this a guide to learning, not a guide to truth.

## Automation

Automation doesn't work the same in every DAW from a UI perspective, but _also_ a rendering perspective. This is easy to test.

I did 2 tests:

* Long fade - Tests the modulation interpolation of the system.
* Bypass - Tests the plugin format and block processing type.

**BUT** I quickly realized only the "Long Fade" test was necessary.

### Long Fade-in

{::nomarkdown}
<a href="/assets/Differ/Automation.png">
<img src="/assets/Differ/Thumbnails/Automation.png" alt="Automation in Action">
</a>
<div class="image-caption">Automation in Action (click for larger image)</div>
{:/nomarkdown}

* 997Hz at -18dB FS peak with a -inf to 0dB fader volume automation over 2 seconds.

Before you judge, let's be very clear: modulation is hard. It's _impossible_ to produce "automation" that satisfies the 3 criteria most people want: fast response (low slew), clean and low-load. Most products favor low-load and clean (to an extent).

Why this is an issue is a topic for another article, maybe. This test shows how 'clean' the modulation is.

It's very clear here that the 3 DAWs have various artifacts when automating. Logic Pro is by far the worst, and audibly so! Pro Tools is the cleanest in analysis and sonically. Cubase performs admirably.

What's the main takeaway though? **There is a clear difference in the sonics of automation between the three products.**

__TRY IT YOURSELF!__

### Bypass

{::nomarkdown}
<a href="/assets/Differ/Bypass.png">
<img src="/assets/Differ/Thumbnails/Bypass.png" alt="Bypass test">
</a>
<div class="image-caption">Bypass test (click for larger image)</div>
{:/nomarkdown}

* 997Hz at -18dB FS peak with the fastest possible transition to -inf at 1 second.

This tests how "fast" the automation is. The goal here, counter to intuition, is to have the _ugliest_ pop at the end. That signals that there's a discontinuity. The less intense the termination is, the "slower" the automation is, which indicates some sort of interpolation.

Once again Pro Tools performs the best with Cubase second and Logic last.

And again... they are clearly different!

Let's look further!

{::nomarkdown}
<a href="/assets/Differ/BypassWave.png">
<img src="/assets/Differ/Thumbnails/BypassWave.png" alt="Waveforms">
</a>
<div class="image-caption">Waveforms (click for larger image)</div>
{:/nomarkdown}

Note that I carefully snapped the automation of each of these to 1 second in the DAW. _ONLY_ Pro Tools did _exactly_ that.

Cubase is late. Logic is 'on time', but has an obvious ramp. Pro Tools is perfectly on time _and_ has no ramp.

## Fades

Simple audio fades are another concern. I think it can be accepted that the default fade shape is the most used, and it's apparent that every DAW has different default curves/lengths (which people rarely change!).

One test.

* Linear Long - 2000ms fade - Equal Gain.

### Linear Long

{::nomarkdown}
<a href="/assets/Differ/Fades.png">
<img src="/assets/Differ/Thumbnails/Fades.png" alt="Fades">
</a>
<div class="image-caption">Fades (click for larger image)</div>
{:/nomarkdown}

* 997Hz at -18dB FS peak with a Linear fade applied for 2000ms

At least they can all do fades decently, but different nonetheless.

Logic is once again the noisiest, but the values are <-144dB FS with an average noise <140dB FS. Nothing to be concerned with.

I did not use a spectrogram this time because it was difficult to align the scrolling display so you could get a decent comparison. This view is the max FFT bin value for the entire fade.

The max bin measurement does not work on the [Automation](#automation) and [Fade](#fade) tests because the first block causes a huge spike in the output, and that first block dominates all of the other measurements. Application of a fade-in would "fix" the issue, but then contaminate the measurements with the processing of that fade algorithm. Try it yourself!

## Repeatability

The next concern is how rendering is affected by changes in settings. What happens if you change the buffer size, or some other settings? Will your automation change?

For this test I will repeat the [Bypass](#bypass) test, but with various settings to see if I can make the automation change position. The images will display the simple audio buffer tests, but rest assured that I tried everything I could find. Don't believe me? **TRY IT YOURSELF!**

I will not be testing delay compensation, as that is an extraordinarily complex topic. It's easy to break too, so it's also a low-hanging fruit. Let's avoid that.

### Pro Tools

{::nomarkdown}
<a href="/assets/Differ/ProToolsRepeat.png">
<img src="/assets/Differ/Thumbnails/ProToolsRepeat.png" alt="Pro Tools Repeat">
</a>
<div class="image-caption">Pro Tools render tests (click for larger image)</div>
{:/nomarkdown}

**NOTHING TO SEE HERE**

Pro Tools rendered the automation identically every single time. 54 renders, all identical.

### Cubase

{::nomarkdown}
<a href="/assets/Differ/CubaseRepeat.png">
<img src="/assets/Differ/Thumbnails/CubaseRepeat.png" alt="Cubase render tests">
</a>
<div class="image-caption">Cubase render tests (click for larger image)</div>
{:/nomarkdown}

Cubase was easy to break. Changing buffer sizes changed where the automation happened! From 64 sample buffer to 1024 sample buffer changed it by about 588 samples, or 12 milliseconds!

That's a lot!

That's not all either. Notice that the fade changes as well. The shorter buffer size has a quick fade, and the longer buffer size has a longer fade. This is the _exact_ same automation. I placed 2 points as close as possible to each other for a 0dB to -inf automation drop.

We're out of the territory of different DAWs sounding different completely now. The same DAW can't even sound the same!

I did not find any settings that alleviated this behaviour. Changing buffer sizes always changed automation.

**TRY IT YOURSELF!**

### Logic Pro

{::nomarkdown}
<a href="/assets/Differ/LogicRepeat.png">
<img src="/assets/Differ/Thumbnails/LogicRepeat.png" alt="Logic Repeat">
</a>
<div class="image-caption">Logic render tests (click for larger image)</div>
{:/nomarkdown}

Logic aced it, mostly. I tried every combination of buffer sizes, process buffer ranges, real/offline...

**BUT ONLY WITH SAMPLE ACCURATE AUTOMATION ON!**. That uses a good bit of CPU if you have a decent amount of automation in your project.

**That is not the default settings for Logic Pro!**

**note:** Look at that ugly fade. Ugly. It's supposed to be a near instant volume ramp! That's with Sample Accurate automation on too!

{::nomarkdown}
<a href="/assets/Differ/LogicRepeat2.png">
<img src="/assets/Differ/Thumbnails/LogicRepeat2.png" alt="Logic render test... default">
</a>
<div class="image-caption">Logic render test... default (click for larger image)</div>
{:/nomarkdown}

This is what logic looks like with the default settings. ARGH! Good luck "nulling" other DAWs when Logic Pro itself can't even decent how audio is supposed to be rendered.

**TRY IT YOURSELF!**

I'm serious. Don't trust me!

# Notes

Here's some notes:

* Pro Tools was consistently the easiest to setup the audio ([Automation](#automation) and [Fades](#fades)) tests. Snapping to values or simply entering values was easy.
  * Also very impressed with Pro Tools in every regard here.
* Logic is a pain. Setting up every single test was difficult. Automation snapping is limited to beat values, and if you try to setup a 'brickwall'-like automation, the two points snap together into one.
* This was a lot of work. Repeat, a lot of work.
* Should I test other products? Does it even matter?
* This took me 2 weeks of work. The content here seems minimal, but it was a great deal of testing, researching and quadruple checking myself.

# Conclusion?

Two things that people do in nearly every project: automate and fade. The products here don't render identical results, and quite frankly Cubase and Logic Pro are both "broken" with regards to automation.

Pro Tools impresses.

How "well" each one did is irrelevant for this article. The point here is that they didn't output the same results with the same input.

Summing? Yep, identical.

Anything else? Nope, quite different.

# Support Me!

This post took 45 hours to research, test, screenshot, write and edit. The video took me two 12 hour days of work. If you appreciate the information presented then <a href="/DonateNow/">please consider joining patreon or paying me for my time spent bringing you quality content!</a>







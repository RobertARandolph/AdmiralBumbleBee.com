---
layout: post
title: "Right in the Bunghole with Kali Audio LP8s"
comments: true
date:   2019-06-15_15:22:20 
categories: music
tags: ['Studio Tips']
image: /assets/Kali/mod/Setup.jpg
description: Kali audio LP8 modding
---

{::nomarkdown}
<img src="/assets/Kali/mod/Setup.jpg" alt="Setup">
<div class="image-caption">Setup</div>
{:/nomarkdown}

```
Bunghole - an aperture through which a cask can be filled or emptied.
```

Also, an ode to [Beavis and Butthead](https://www.youtube.com/watch?v=qqaKi9NTzS4).

Today I'll be experimenting with my Kali Audio LP8s. A simple "mod" that's been around almost as long as speakers have been around and the ramifications.

<!--more-->

**If you have any questions or comments, please comment below! I read every comment and respond to most.** No registration is necessary to comment, so don't be shy.

# Contents
{:.no_toc}
* TOC
{:toc}

# DO NOT DO THIS

Let me be very clear: **DO NOT DO THIS**.

It's important to know that ported speakers are often designed with ports not _only_ as a mechanism for changing the sound output of the speakers, but also to ventilate them.

**Doing anything in this article may, or at least _should_, void your warranty.**

If you do this, understand that you are doing something probably stupid for the sake of curiosity and/or fun. When you break something, it was your fault.

**DO NOT DO THIS**.

# Notes

There's a lot more to speaker design than this. I am only discussing the two modes of operation that will be explored: ported and sealed.

I am _not_ a speaker designer by any means. I only know what I've read from books and I've not seriously designed a speaker. I encourage the reader to read more and experiment.

I'm just a dude screwing around with his toys.

# Video

<iframe width="800" height="450" src="https://www.youtube.com/embed/BxW_nE7h1Z4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Video version. I wouldn't normally do a video for this, but I already had some animations so... why not.

# Theory Part 1

{::nomarkdown}
<video autoplay loop muted class="gifvid">
<source src="/assets/Kali/mod/SpeakerPressure.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
<div class="video-caption">Sealed Enclosure</div>
{:/nomarkdown}

One of the ideas behind ports is that by allowing air to freely enter and exit the enclosure, you've increased the possible excursion of the low frequency driver.

Why does the excursion increase? Pressure.

Inside of a _sealed_ enclosure there's air with nowhere to go. When the cone moves inwards, the air inside the enclosure is compressed and exerts pressure against the cone. The reverse happens when the cone moves outwards: the pressure decreases and tries to pull the cone back in.

The air acts like a spring that's connected to the speaker cone.

{::nomarkdown}
<video autoplay loop muted class="gifvid">
<source src="/assets/Kali/mod/SpeakerPort.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
<div class="video-caption">Ported</div>
{:/nomarkdown}

If you open up the enclosure then the air has somewhere to go. The pressure doesn't build up as much, and the cone has less pressure impeding its movement.

Given that the human ear [needs a bit more bass to feel like you're hearing it equally](https://en.wikipedia.org/wiki/Equal-loudness_contour), it's no surprise that lower frequencies require higher SPL (more excursion), and their wavelength is naturally long.

Reducing the air spring in the enclosure allows those higher SPLs to occur with less power.

# Theory Part 1.2

{::nomarkdown}
<video autoplay loop muted class="gifvid">
<source src="/assets/Kali/mod/Rolloff.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
<div class="video-caption">Rolloff change</div>
{:/nomarkdown}

The results of the loading of a sealed cabinet is that your "spring" has a smooth response to frequency. You end up with a 12dB/octave rolloff to your low end. Where that rolloff happens is largely determined by the size of the enclosure and the driver.

Ported enclosures can tune their ports to resonate at specific frequencies to extend the low-end response, but with no spring, the rolloff is much quicker (24dB/oct or faster). You get an interesting phenomenon where the air 'going in and out' lags behind the speaker movement, which can result in a small frequency range to be increased in amplitude, and the surrounding area to be cutoff rather severely. It's like a comb filter.

That 'lag' between the air in the port, and the driver does give a nice boost below the cabinet's natural cutoff, but it also means that you have a delay on what's heard by _at least_ one cycle, likely more. Now your time-domain is smeared.

There's a secondary issue with ported speakers. As the SPL increases, the efficiency of the port is decreased and begins to distort (or 'fart'). The phenomenon is called port compression and is largely a non-issue at studio SPLs (79-83 dB SPL C).

# Theory Part 2

{::nomarkdown}
<video autoplay loop muted class="gifvid">
<source src="/assets/Kali/mod/SpeakerImpulse.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
<div class="video-caption">Impulse Response</div>
{:/nomarkdown}

If you have a really stiff spring, like a sealed enclosure, the tension is normalized quickly. A less stiff spring stays sproingy much longer.

This affects the impulse response of the speakers. Sealed enclosures exposed to a quick spike will resonate less and return to a neutral position sooner. The air spring is constantly trying to get the cone back to a neutral air pressure.

Ported systems don't have this air spring, and in fact sometimes the air moving through the port becomes fouled by the 'incoming' pressure from the enclosure and driver. They not only wiggle around a bit longer, and more erratically (increasing as the SPL increases).

The wibbly-wobblies have an effect on your room's response as well. Both the port's resonant frequency and the poorer impulse response (to varying degrees) may further excite or exaggerate modes in your room. That's bad.

# Theory Part Disclaimer

It's easy to read the above and come away thinking that sealed enclosures are the end-all, and that any monitor with ports is awful.

Nope.

There are _many_ clever things you can do to improve ported systems. Well-designed ported systems will almost always outperform similarly sized sealed systems. However, the "ultimate" is a sealed system, and that requires A LOT of space to do well. There's always tradeoffs, and nothing in this article is meant to demean the creators of any of these products. They've done a way better job than I could have.

It's important that you acoustically measure speakers in your own space to know what results you get.

# Setup

{::nomarkdown}
<img src="/assets/Kali/mod/Setup.jpg" alt="Setup">
<div class="image-caption">Setup</div>
{:/nomarkdown}

I had 3 modes of bunging.

* MDF - I made an MDF block sized as closely as possible to the port, with rounded edges to match the internal shape.
* Foam - Slightly oversized fire-retardant (**IMPORTANT**)) closed-cell foam.
* MDF and Foam - MDF in the front of the port, and foam loading the port from the inside of the monitor.

# Workshop

{::nomarkdown}
<a href="/assets/Kali/mod/WorkshopFreq.png">
<img src="/assets/Kali/mod/Thumbnails/WorkshopFreq.png" alt="Workshop Frequency Response">
</a>
<div class="image-caption">Workshop Frequency Response (Click for larger image)</div>
{:/nomarkdown}

{::nomarkdown}
<a href="/assets/Kali/mod/WorkshopEDT.png">
<img src="/assets/Kali/mod/Thumbnails/WorkshopEDT.png" alt="Workshop RT60">
</a>
<div class="image-caption">Workshop RT60 (Click for larger image)</div>
{:/nomarkdown}

{::nomarkdown}
<a href="/assets/Kali/mod/WorkshopImpulse.png">
<img src="/assets/Kali/mod/Thumbnails/WorkshopImpulse.png" alt="Workshop Impulse Response">
</a>
<div class="image-caption">Workshop Impulse Response (Click for larger image)</div>
{:/nomarkdown}

Here we have some measurements from my workshop. The workshop is a medium-sized bedroom, square and very much not treated. It might be similar to what you're working in. (hopefully not!)

The things that we expected are present. Better impulse response (visible in RT60 and Impulse response chart), and less bass. The difference in rolloff isn't present, or is difficult to see.

The Double Bung measurement showed an increase in accuracy along the _entire_ spectrum. Fewer modes excited and a better response in the critical midrange bands.

In this case I think that the low-end extension is only harmed by a small amount. The bunged versions are only down 2dB at 80hz. The room's response is extremely unfriendly to anything below that. The 43hz bump on the un-bunged version is -4dB from the average response, which is certainly audible, but due to the large nearby null I think it's safe to say that this would be a misleading listening environment at best.

# Studio

{::nomarkdown}
<a href="/assets/Kali/mod/StudioFreq.png">
<img src="/assets/Kali/mod/Thumbnails/StudioFreq.png" alt="Studio Frequency Response">
</a>
<div class="image-caption">Studio Frequency Response (Click for larger image)</div>
{:/nomarkdown}

{::nomarkdown}
<a href="/assets/Kali/mod/StudioEDT.png">
<img src="/assets/Kali/mod/Thumbnails/StudioEDT.png" alt="Studio RT60">
</a>
<div class="image-caption">Studio RT60 (Click for larger image)</div>
{:/nomarkdown}

{::nomarkdown}
<a href="/assets/Kali/mod/StudioStep.png">
<img src="/assets/Kali/mod/Thumbnails/StudioStep.png" alt="Studio Step Response">
</a>
<div class="image-caption">Studio Step Response (Click for larger image)</div>
{:/nomarkdown}

The studio response is fairly ok-ish in general since this room is well treated. I made no effort to place this monitor properly. It's nearly in the center of the room. We can still see the tell-tale signs of ported/sealed cabinets.

Once again there's still a large null next to the +6dB 52hz bump. It's "worse" ported with the difference between the peak and null being greater.

The bunged version is definitely more accurate here.

# Toying with some settings

{::nomarkdown}
<a href="/assets/Kali/mod/CorrectionFreq.png">
<img src="/assets/Kali/mod/Thumbnails/CorrectionFreq.png" alt="Corrected Freq">
</a>
<div class="image-caption">Corrected Freq (Click for larger image)</div>
{:/nomarkdown}

{::nomarkdown}
<a href="/assets/Kali/mod/CorrectionRT60.png">
<img src="/assets/Kali/mod/Thumbnails/CorrectionRT60.png" alt="Corrected RT60">
</a>
<div class="image-caption">Corrected RT60 (Click for larger image)</div>
{:/nomarkdown}

{::nomarkdown}
<a href="/assets/Kali/mod/CorrectionImpulse.png">
<img src="/assets/Kali/mod/Thumbnails/CorrectionImpulse.png" alt="Corrected RT60">
</a>
<div class="image-caption">Corrected RT60 (Click for larger image)</div>
{:/nomarkdown}

So what if we seal the monitor, but mess with the settings on the back to try and acquire an equivalent frequency response. Then what happens? I tried in the workshop.

I tried just the bass shelf, since that's the only thing that seemed to help much.

Once again the impulse response and RT60 improves. Instead of a 44hz bump -9dB down, the shelf has the bump only -4dB down (even though it's only a +2dB shelf?)

# Ventilation

{::nomarkdown}
<img src="/assets/Kali/mod/Temp.jpg" alt="Tempurature after 40 total hours of Pink Noise">
<div class="image-caption">Tempurature after 40 total hours of Pink Noise (°f)</div>
{:/nomarkdown}

**READ ME**

Ports aren't _entirely_ about sound. Air goes in, air goes out, never a miscommunication. (you can't explain that). That air circulation allows heat to be exchanged with the outside world.

Amplified monitor's amplifiers generate heat. That heat needs to go somewhere. Ports are an excellent place for it to go.

I've had an LP8 running bunged at a nominal level (83dB SPL C) with pink noise for 40+ hours in 2 stages, and let me tell you... I'm sick of it.

The temperature of the backplate is barely warm to the touch. Internal components aren't hot either. Average temp of the house is 76-80f (24.5-26.7c). Backplate reached 88f (31c). Internals were at 96f (35.5c) when I opened it up.

I **DO NOT RECOMMEND** that you fill the ports. If it doesn't void your warranty, then it should. You're messing with something that is potentially a thermal design feature and *could* reduce the life of your monitor's significantly.

Be aware of this.

# Conclusion

{::nomarkdown}
<video autoplay loop muted class="gifvid">
<source src="/assets/Kali/mod/DoubleBung.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
<div class="video-caption">Doubley Bungled</div>
{:/nomarkdown}

First, here are the REW files: [Workshop](/assets/Kali/mod/WorkshopBung.mdat), [Studio](/assets/Kali/mod/StudioBung.mdat) and [Corrected](/assets/Kali/mod/Corrected.mdat). There were some issues with noise due to hvac, so keep that in mind when interpreting the results.

In my case, I'm looking for some monitors with "tighter" bass. That means I want less bass, and better time response. Bunging the LP8s gives me this while still having a monitor that has a moderately large sound.

I eventually decided to plug from inside with MDF, and then 2 layers of foam that are pressed down by the back plate. I may even decide to add more foam inside at some point and see what happens. For now, this is the experiment that I'm committing to.

This also may help out if you want to purchase a sub. The natural reduction of rolloff and the ~80hz cutoff of this cabinet (it seems?) matches very nicely with many sub designs. Now you have more control over the design of your low-frequency production.

Then again... don't do it.

# Support Me!

This post took 25 hours to research, photograph, test, screenshot, write and edit. The video took 9 hours to create after the article was written. If you appreciate the information presented then <a href="/DonateNow/">please consider joining patreon or paying me for my time spent bringing you quality content!</a>

<a href="https://www.patreon.com/bePatron?u=7465992"> <img class="patreon-button" src="/assets/Patreon.png" alt="Be a Patreon!"></a>

<form style="text-align: center;" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick">
<input type="hidden" name="hosted_button_id" value="BR247JAZBTUJJ">
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
</form>

**If you have any questions or comments, please comment below! I read every comment and respond to most.** No registration is necessary to comment, so don't be shy.


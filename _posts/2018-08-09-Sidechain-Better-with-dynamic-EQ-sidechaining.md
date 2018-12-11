---
layout: post
title: Sidechain Better with dynamic EQ sidechaining
comments: true
date:   2018-08-09_18:34:15 
categories: music
tags: ['Studio Tips', 'Bitwig', 'Tracktion Waveform', 'Reaper', 'Reaper Tips', 'Production Tips', 'FLStudio']
image: /assets/Production/DynEQ/Header.png
description: Sidechain better! Use a dynamic EQ
---

{::nomarkdown}
    <img src="/assets/Production/DynEQ/Header.png" alt="Why cut it all?">
<div class="image-caption">Why cut it all?</div>
{:/nomarkdown}

A typical scenario in mixing is that your kick drum and your bass, or some other similar elements, overlap spectrally. The 'normal' solution is a volume sidechain.

There's a better way though! Well, sometimes it's better, but it's worth knowing so you can learn when to use it.

<!--more-->

**If you have any questions or comments, please comment below! I read every comment and respond to most.** No registration is necessary to comment, so don't be shy.

# Contents
{:.no_toc}
* TOC
{:toc}

# Sidechaining

{::nomarkdown}
    <img src="/assets/Production/DynEQ/Main.png" alt="Why cut it all?">
<div class="image-caption">Why cut it all?</div>
{:/nomarkdown}

The most common approach to solving issues with sounds that have a lot of overlapping frequencies is to turn setup a processor that turns the volume of one down while the other is loudest. This process is often called simply "Sidechaining". Sidechaining refers to the routing method used where a compressor acts on one track, but makes its decisions based on the audio of another (the sidechain).

Sidechaining is an important technique and it's not directly replaceable. Some genres, like EDM, rely on the pumping effect of heavy sidechaining to create a signature sound.

When the desire is to fix mix issues or to 'create room' in the mix, then using dynamic EQ sidechaining is often a better solution.

Look at the graphic above. The Sub and Kick tracks have a significant amount of information in the same frequency range (represented on the vertical axis). However the sub has a lot of harmonic content that helps define its sound and presences. Wouldn't it be nice if we could turn down only those overlapping frequencies in the sub, but let the character of the sub still be present when the kick hits?

We can.

# How does it work?

{::nomarkdown}
<video autoplay loop muted class="gifvid">
<source src="/assets/Production/DynEQ/DynEQ.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
<div class="video-caption">Dynamic EQ in action</div>
{:/nomarkdown}

The basic concept here is not complex. We setup an EQ band on the track we want to affect. The band is set to the frequency area that is causing the most trouble.

Then some sort of routing, depending on the DAW, is setup so that the audio of another track (the Kick in this case) is turned in to a control signal and changes the gain of the EQ band on the other track in realtime.

You don't have to do a single band, nor must every band have the same setup. I have mixes with complex dynamic EQ and multiple bands acting in different ways based on different information. You can go wild with it.

# So if it's so cool, why doesn't everyone do it?

{::nomarkdown}
<video autoplay loop muted class="gifvid">
<source src="/assets/Production/DynEQ/Noise.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
<div class="video-caption">Noise :(</div>
{:/nomarkdown}

Firstly, a lot of people don't realize it's even a possibility.

Secondly, many DAWs struggle with this sort of setup and you must purchase a third-party product that may not work with your DAW anyway.

Thirdly.... noise.

Look at that video above. I'm EQing an area not near the sine wave, but noise is produced. When EQs are modulated they are not silent. There are _some_ filter designs that can be very quiet when modulated but they are rarely used in production EQ products. There is also an issue with when/how often DAWs send changes to the plugin and when the plugin wants them. Both of these things contribute to the noise.

So utilizing this method will often add a small amount of noise depending on the EQ that you are using. The tradeoffs are often worth it, but you need to be aware that it is there and it's inharmonic. The noise isn't related to your audio and can sound a bit gross at times.

Then again... repeatedly gain reducing your track repeatedly with classic sidechain compression can be more gross. You have to pick the tradeoff that yields the results that you want.

# Video

<iframe width="800" height="450" src="https://www.youtube.com/embed/6NfMgBkcvdU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

Yes, I made a video for this too, along with 4 videos on how to set this up natively in 4 different DAWs.

## Setup in Reaper

<iframe width="800" height="450" src="https://www.youtube.com/embed/Jq2nbb94ALY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## Setup in Bitwig

<iframe width="800" height="450" src="https://www.youtube.com/embed/IpWyQz-nXbU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## Setup in Waveform

<iframe width="800" height="450" src="https://www.youtube.com/embed/ooVzhzXxsEw" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## Setup in FLStudio

<iframe width="800" height="450" src="https://www.youtube.com/embed/q5fXg-dINpo" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

# Support Me!

This post took 7 hours to research, screencast, write and edit. If you appreciate the information presented then <a href="/DonateNow/">please consider joining patreon or donating!</a>

<a href="https://www.patreon.com/bePatron?u=7465992"> <img class="patreon-button" src="/assets/Patreon.png" alt="Be a Patreon!"></a>

<form style="text-align: center;" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick">
<input type="hidden" name="hosted_button_id" value="BR247JAZBTUJJ">
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
</form>

**If you have any questions or comments, please comment below! I read every comment and respond to most.** No registration is necessary to comment, so don't be shy.


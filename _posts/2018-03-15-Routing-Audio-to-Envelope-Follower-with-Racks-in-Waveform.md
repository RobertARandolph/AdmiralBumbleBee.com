---
layout: post
title: Routing Audio to Envelope Follower with Racks in Waveform
comments: true
date:   2018-03-15_10:56:48 
categories: music
tags: ['Tracktion Waveform', 'Tutorial']
image: /assets/Waveform/Tutorial/ModifierAdded.png
description: This is how I route modifier control signals around in Waveform
---

{::nomarkdown}
<video autoplay loop muted class="gifvid">
<source src="/assets/Waveform/Tutorial/Setup.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
<div class="video-caption">Everything setup</div>
{:/nomarkdown}

In [my previous Waveform Review]({% post_url 2018-03-14-Waveform-9-the-good-the-bad-the-weird-part-2 %}#modifier-nitpicks) I talked about issues with the Envelope Follower modifier.

The issue is that if you want to route audio from Track A to the modulate audio on Track B, ~~it requires a workaround with Racks~~

**EDIT**: Racks are NOT necessary unless you want the envelope to happen live. I updated this post on the 16th of March to reflection a correction by a reader. Thank you PierreG!

Someone asked for instructions on how to do this. So here it is!

<!--more-->

# Contents
{:.no_toc}
* TOC
{:toc}

# The easy way

{::nomarkdown}
<video autoplay loop muted class="gifvid">
<source src="/assets/Waveform/Tutorial/EasyWay.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
<div class="video-caption">The easy way, duh</div>
{:/nomarkdown}

The easy way is simply to drag the envelope follower's box to the plugin you want to control. That's no fun though, and this causes the modulation to only occur during playback, which may very likely be sufficient for you.

When I released this post on the 15th of March, I originally neglected to include this information as I thought that this method was bugged. [A user on the Tracktion forum](http://www.kvraudio.com/forum/viewtopic.php?f=22&t=501271&p=7034686#p7034497) offered a correction, and after some testing I realized he was right! Thank you again PierreG!

# The rack way

This is an introduction to racks, and necessary if you wish to use the envelope follower without playback (for live processing).

## Create the Racks

{::nomarkdown}
<img src="/assets/Waveform/Tutorial/Racks.png" alt="Racks in place">
<div class="image-caption">The two racks</div>
{:/nomarkdown}

First step is to add a new Rack. Apply this rack to your 'to' and from' tracks.

In the image above I want to control a plugin on 'Modulated' by the audio on 'Audio' track.

## Add I/O

{::nomarkdown}
<img src="/assets/Waveform/Tutorial/IO.png" alt="IO setup">
<div class="image-caption">IO Setup</div>
{:/nomarkdown}

Next we need to add extra I/O. For a stereo signal you need to add 2 inputs and 2 outputs.

Connection the I/O as shown in the picture.

## Add plugin

{::nomarkdown}
<img src="/assets/Waveform/Tutorial/Plugined.png" alt="Plugin in place">
<div class="image-caption">Plugin added</div>
{:/nomarkdown}

Add the plugin that you want to modulate and place it the path of the track that you want it to affect. We want to modulate a Volume & Pan plugin on 'Modulated' by a signal on 'Audio'.

So I place the plugin in the path of 'Modulated'.

## Add Modifier

{::nomarkdown}
<img src="/assets/Waveform/Tutorial/ModifierAdded.png" alt="Modifier added">
<div class="image-caption">Modifier in Place</div>
{:/nomarkdown}

The trick here is to add an 'Envelope Follower' on the 'Audio' track now.

## Assign The Modifier

{::nomarkdown}
<video autoplay loop muted class="gifvid">
<source src="/assets/Waveform/Tutorial/Modify.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
<div class="video-caption">Modifiers in place</div>
{:/nomarkdown}

Next we want the modifier on the 'Audio' track to modulate the 'Volume and Pan' in the 'Modulate' path in the rack.

Drag the modifier from the track to the rack, on to the 'Volume and Pan' plugin. When the menu pops up, select the parameter you want. In this case it's Volume for us.

## That's it!

{::nomarkdown}
<video autoplay loop muted class="gifvid">
<source src="/assets/Waveform/Tutorial/Setup.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
<div class="video-caption">Everything setup</div>
{:/nomarkdown}

Check out the video above.

Now the audio from the 'Audio' track is modulating the 'Volume and Pan' plugin that's in the path of the 'Modulated' track. We've essentially sent a modulation signal from one track to another. It just took too much effort.

You can save this as a preset to use later to avoid some of the routing. I suggest doing that.

# Support Me!

This post took 30 minutes to put together for a user on KVR. If you appreciate the information presented then <a href="/DonateNow/">please consider joining patreon or donating!</a>








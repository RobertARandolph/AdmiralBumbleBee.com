---
layout: ['post', 'reader']
title: "FLStudio 20.1... Exposed!"
comments: true
date:   2018-12-29_10:09:57 
categories: music
tags: ['DAW', 'FLStudio']
image: /assets/FLStudio/201/TrackModeAudio.png
description: FLStudio 20.1
---

{::nomarkdown}
<img src="/assets/FLStudio/201/Statistics.png" alt="More stats!">
<div class="image-caption">More stats!</div>
{:/nomarkdown}

FLStudio 20.1 is out. [The official change page is here](https://www.image-line.com/documents/news.php?entry_id=1544400349&title=fl-studio-2011-update). I'm going to be going over the changes, see if I notice anything extra, and wade through a bit of the hype to see how cool this update is.

I wouldn't call it 'Exposed' for no reason though...

**Other posts in this series**:

{% assign fls = site.posts | where: "series", "FLStudio" | sort: 'date' %}
<ul>
{% for my_page in fls %} 
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

<iframe width="800" height="450" src="https://www.youtube.com/embed/U1cZxcnWBM8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

MORE VIDEO CONTENT, NO MORE WINDOWS!!!!!!! HOOOORRRAAAYYYYY!!

# Introduction

## Playlist Track Mode

{::nomarkdown}
<img src="/assets/FLStudio/201/TrackModeAudio.png" alt="Track Mode... the big feature">
<div class="image-caption">Track Mode... the big feature</div>
{:/nomarkdown}

You can now drag a sample or a generator directly to a playlist track, and then the channel rack, playlist and mixer are now 'linked'. This _supposedly_ should fix something [that I complained about in a previous post]({% post_url 2018-07-15-30-days-with-FLStudio-20-Workflow %}#the-great-confusion).

**BUT IT DOESN'T**.

 Before I get on with the part where this feature is not particularly useful, I would like to first list some of the benefits that it offers.

* Add instruments directly from the playlist
* Add effects directly on a playlist track
* Adjusting channel route moves the linked channel along with all effects contents/routing.
* Double-clicking playlist opens associated channel (channel properties or generator)
* Automation clips automatically are grouped below the associated track

These are quite cool things and it gives you a workflow that is somewhere to other DAWs.

There is a fairly significant issue here if this was meant to give you a more linear workflow.

### Playlist track mode problems

{::nomarkdown}
    <video autoplay loop muted class="gifvid">
        <source src="/assets/FLStudio/201/MixedTracks.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <div class="video-caption">This isn't right...</div>
{:/nomarkdown}

The #1 issue is that the _real_ setup is this:

* Channels are linked to mixer tracks, as usual.
* Playlist tracks are linked to channels/mixer but _only_ for colour, icon and name.

So what does that mean? Let's look at the video above.

I have the track mode set up so that the Retro logue channel is linked to playlist track one which is linked to the mixer. So naturally you would think that if I have a clip corresponding to the Retroloue channel in the playlist on track 2, then it would naturally play to mixer track 2.

Of course it doesn't though! That would mean that clips need to automatically change their routing when they are moved in the playlist, but they do not. Not having this feature means that you do not have a linear-like workflow.

Playlist tracks are only _superficially_ linked to the mixer and channel. You can still place clips anywhere in the playlist

**This does not mean that the track-mode feature is useless.** It's an incredibly useful feature for people that are used to FLStudio's method of working. If you are a person who does not use FLStudio, or was partially interested in FLStudio but don't use it because of the workflow, then this is not going to change a single thing for you. There is still a disconnect between the playlist and the channel rack/mixer.

So what if clips did change their routing when you move them to a different playlist track?

## Improved Audio Recording

{::nomarkdown}
<img src="/assets/FLStudio/201/TrackModeAudio.png" alt="Track mode for audio">
<div class="image-caption">Track mode for audio</div>
{:/nomarkdown}

Trackmode for audio does what you'd expect.

* Mixer Channel is linked to Channel Rack
* Playlist tracks are linked to mixer tracks
* **Playlist tracks _are linked to channels_**

That last one is the big one. With the track list audio mode, if you move an audio clip to a new playlist track, the routing for the audio clip changes _if that playlist track is in audio track-mode_.

This does give you the 'linear DAW' workflow.

### 6 million Echo Slam

{::nomarkdown}
    <video autoplay loop muted class="gifvid">
        <source src="/assets/FLStudio/201/Disastah.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <div class="video-caption">CDEC, they're gonna get wiped from the face of the earth!</div>
{:/nomarkdown}

Yes, I'm an EG fan. Love DOTA 2. Playing with the Audio Track mode made me think of the 'It's a Disastah!!!!!' [line from TI6](https://www.youtube.com/watch?v=N7ugBH39T8Y).

Anyways, as you can see in the video, if you rely on the audio-track "linking" (scare quotes), you're in for a serious disaster.

The feature is a great start to becoming more organized, but it is not the silver-bullet. It's still possible to end up with a complete routing mess.

There is also a bug currently...

{::nomarkdown}
    <video autoplay loop muted class="gifvid">
        <source src="/assets/FLStudio/201/SwitchBug.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <div class="video-caption">Switching Bug?</div>
{:/nomarkdown}

I'm fairly certain this is a bug. If you adjust the channel routing to an audio-track-mode clip, then move the clip around, it will reset the channel upon returning to the track.

This means that as of 20.1.1, you can't reliably change the channel routing of an audio-mode-track.

### "Takes"

{::nomarkdown}
    <video autoplay loop muted class="gifvid">
        <source src="/assets/FLStudio/201/AudioTakes.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <div class="video-caption">"Takes" kinda.</div>
{:/nomarkdown}

One of the benefits to the new audio-track–mode is that you can replicate a workflow that looks somewhat like recording takes in another DAW.

FLStudio will automatically group tracks when recorded to the same playlist channel.

There's a few snafus here though:

1. _EVERY_ take in the "group" must be muted to record a new one. If you don't mute all takes, then anything un-muted on that channel will be recorded in your new channel. FLStudio does not automatically assign newly recorded parts to a new channel and route it back.
2. This also means that you can't listen to previous takes without spending time re-routing various parts so they don't end up recorded.
3. FLStudio has no 'comping' tools for easy editing of takes.
4. Tracks are consumed by the process, and FLStudio has a fixed (limited) number of tracks.
5. Recorded parts still clutter up your channel rack with poorly named audio files.
6. If there are empty tracks in your "take group", then those tracks will not be used for subsequent takes. You will need to use `the reset empty playlist tracks macro` to fix this, but it will also affect the rest of your project.
7. Colours only propogate when recording. If you decide to change the track information (colour, icon) for the parent track, it will only affect newly recorded tracks and not the grouped tracks by default.
8. When in record-mode, it's easy to end up accidentally recording channel assignment information as you're trying to fix the channel routing to deal with points 1 and 2.
9. Points 1, 2 and 4 mean that the 1:1 mapping of playlist tracks to mixer channels is likely no more. This is one of the benefits of the new mode (but certainly not the only benefit). This adds complexity to project setups rather than removing it.

This is a feature that I think needs a lot more work to be useful. It's easy to make mistakes (record channel assignment events, forget to mute a channel) and the workflow is too complex for something that should be as simple as "Assign input, Press Record".

# Tools > Macros > Reset empty playlist tracks

{::nomarkdown}
    <video autoplay loop muted class="gifvid">
        <source src="/assets/FLStudio/201/ResetTracks.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <div class="video-caption">Reset Tracks</div>
{:/nomarkdown}

When working on a project is fairly common to try out ideas and decide that they do not work how you expected them to. You may have done a number of organizational tasks like changing the icon changing color or setting up groups and then decided that it was all unnecessary.

Before FLStudio 20.1 this meant that you had to do some work resetting everything, and you are likely to end up still having those empty gaps.

This new macro automatically resets mixer tracks and then shifts everything to take up that empty space, so the end result is that it appears that nothing ever happened.

It is a small thing, but it is a huge feature for people that enjoy having their projects organized.

# Channel Rack Improvements

{::nomarkdown}
<img src="/assets/FLStudio/201/ChannelHeader.png" alt="Channel Rack Improvements">
<div class="image-caption">Channel Rack Improvements</div>
{:/nomarkdown}

* Step size is adjustable in the channel rack
    * Up to **512** steps now! WOOO!
* Swing knob added
* Close button added
* Channel Rack Menu > Set swingmix - This allows you to set swing mix for multiple selected channels simultaneously.

These are all nice features. In previous posts I did not discuss what "swing mix" is.

Swing mix lets you apply a multiplier to individual channels that changes the amount of swing that is applied to that channel. Previously if you want to change the swing mix of various channels at once then you had to go through each channel and do it manually. As described above you can now change the swing mix value of multiple channels in a single swift move.

## Stepsequencer Channel Looping

### Loop All

{::nomarkdown}
    <video autoplay loop muted class="gifvid">
        <source src="/assets/FLStudio/201/LoopAll.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <div class="video-caption">Loop All Channels</div>
{:/nomarkdown}

The new "Loop All Channels" allows you to set a step size for your channel rack larger than what the loop sizes than independently choose which channels loop for the full channel rack step size.

You can freely choose which channels loop, or have channels with longer step sizes and unique information.

This could be a really neat feature...

{::nomarkdown}
    <video autoplay loop muted class="gifvid">
        <source src="/assets/FLStudio/201/LoopBug.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <div class="video-caption">Loop Bugs (Watch with audio on)</div>
{:/nomarkdown}

I found a good number of bugs with phantom notes, notes that wouldn't play, loops that wouldn't change and once I somehow managed to make my channel step size control do nothing.

### Advanced Looping

{::nomarkdown}
    <video autoplay loop muted class="gifvid">
        <source src="/assets/FLStudio/201/AdvancedLooping.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <div class="video-caption">Advanced Looping</div>
{:/nomarkdown}

This is a feature that the FLStudio team got totally right (besides 2 bugs I found).

Channels can now be individually looped, that is to say that they can have their own step sizes, and this allows you to create interesting rhythms.

 Not only does this allow you to create interesting rhythms, but also allows you to simplify creation of simple [ostinatos](https://en.wikipedia.org/wiki/Ostinato). If there is a rhythm that you would like to continually be played underneath your main pattern, you no longer need to program that entire thing. it is now possible to simply program the ostinato pattern and then set the step size to what the ostinato is encompassed by.

This is a super cool feature, especially in the context of how FLStudio handles routing.

# Show complete piano roll preview

{::nomarkdown}
    <video autoplay loop muted class="gifvid">
        <source src="/assets/FLStudio/201/CompletePiano.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <div class="video-caption">Show complete piano roll</div>
{:/nomarkdown}

The previous default behavior was to show only the notes that would be visible for the amount of time the current channel step size would allow. This means that if you had a 12 bar part, but the channel rack was only displaying four bars, then you would only see four bars of your piano roll part.

You can now optionally show the entire part no matter how big the channel rack is.

# Plugin Window - Mute, Solo and Mix

{::nomarkdown}
<img src="/assets/FLStudio/201/NewEffect.png" alt="New Effect Options">
<div class="image-caption">New Effect Options</div>
{:/nomarkdown}

Having a mixed control for each effect is not the most revolutionary of features, but it is a feature that is incredibly useful. A mix control and in effect allows you to apply a volume reduced amount of the effect to the original signal passing through. This is like having a send per effect.

Mute turns the effect on or off.

Solo is the grouped inverse of mute. When you solo in effect than every other effect on the channel is muted. Not many products have a solo effect feature, and I love using this feature when it is available.

# Sampler Channels & Audio Clips time automation

{::nomarkdown}
    <video autoplay loop muted class="gifvid">
        <source src="/assets/FLStudio/201/FLTimeBug.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <div class="video-caption">Time automation bugged</div>
{:/nomarkdown}

~~[This appears to be broken.](https://forum.image-line.com/viewtopic.php?f=100&t=196504&p=1359111#p1359275) so I will not be reviewing it.~~

**EDIT:** This seems to be unrelated.

The feature works for sampler channels, but not audio channels. So either the changelog is wrong or this is still bugged.

# Update Checking

{::nomarkdown}
<img src="/assets/FLStudio/201/Updates.png" alt="Auto-Update Check">
<div class="image-caption">Auto-Update Check</div>
{:/nomarkdown}

FLStudio will know check for updates by default. This behavior can be turned off in the general section of your settings.

# Mono export

{::nomarkdown}
<img src="/assets/FLStudio/201/MonoExport.png" alt="Mono Export in 3 forms">
<div class="image-caption">Mono Export in 3 forms</div>
{:/nomarkdown}

There are now three modes to export a mono mix: Left only, Right only and Left + Right.

This feature doesn't have too many uses, but it can be useful for podcast exports, post/dialog, and mono referencing on other systems. There's possibly some other reasons I'm not thinking of as well.

# CPU & Memory Panel - View FPS

{::nomarkdown}
<img src="/assets/FLStudio/201/FPS.png" alt="FPS">
<div class="image-caption">FPS</div>
{:/nomarkdown}

You can now see the FPS of FLStudio. Unfortunately this is mutually exclusive with the "voice count" feature. If you wish to see both the FPS and the current voice count (the number of 'things making sound' currently) then you are out of luck.

# Project Information - Project Statistics

{::nomarkdown}
<img src="/assets/FLStudio/201/Statistics.png" alt="More stats!">
<div class="image-caption">More stats!</div>
{:/nomarkdown}

Projects to statistics has been expanded with information about the project itself:

* Plugins
* Channels
* Mixer tracks used
* Playlist tracks used
* Playlist clips
* Notes

I wonder if this will be used for some sort of competition in the future.

# 55 x "Minimal Kick" Samples

Woop-de-doo.

13 year olds rejoice!

# ZGameEditor Visualizer Export Wizard

{::nomarkdown}
<img src="/assets/FLStudio/201/ZGameExport.png" alt="ZGameEditor Auto-Youtube Track Maker">
<div class="image-caption">ZGameEditor Auto-Youtube Track Maker</div>
{:/nomarkdown}

Quick and easy export for making those youtube videos with an image that moves to the music.

I can't tell you how many 1,000s of times I've seen someone ask how to make these. This is going to be a beloved and overused feature for certain.

(Pardon my tone, but I seriously get asked this _daily_.)

# Akai FL Studio FIRE Improvements

You can [read more about it here](https://forum.image-line.com/viewtopic.php?f=1914&t=191060#fire_shortcuts_stepsequencer), same link as you'd've found in the [Official Changes](https://www.image-line.com/documents/news.php?entry_id=1544400349&title=fl-studio-2011-update).

# Conclusion

This update is a great push in the correct direction. It is only a "point one" release so expectations of flawless progress are likely unreasonable.

Some of my issues are with how this was marketed in that it seemed that they were pushing this as a solution for FLStudio's complex, and sometimes very confusing, workflow and routing.

This update provides what we software developers call "[syntactic sugar](https://en.wikipedia.org/wiki/Syntactic_sugar)". Nothing is changed in the underlying software or with the natural workflow. There has been some things added that make it easier to start or to manage small things, but once you actually start working on a project you will seek quickly that the workflow is the same as it always always been.

Hopefully the guys on the FLStudio team will iron out the bugs, and provide a way for clips to intelligently adjust their output as they move around the playlist. I suppose this should be an optional feature for all the people who enjoy the way it currently works, like me!

I quite enjoy working in FLStudio the way it is now. I am usually willing to accept the wonderous complexity with the trade-off of easily making mistakes or becoming lost in your own project. My main concern with this update is seen new features that are marketed as workflow enhancements but are really just half-cooked sugar on a cake that was already plenty sweet.

# Support Me!

This post took 11 hours to research, screenshot, write and edit the post. The video took 8 hours to capture, edit, overdub, composite and upload. If you appreciate the information presented then <a href="/DonateNow/">please consider joining patreon or paying me for my time spent bringing you quality content!</a>







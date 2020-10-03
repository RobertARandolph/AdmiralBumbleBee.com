---
layout: ['post', 'reader']
title: "30 days with FLStudio 20 - Part 1: Introduction to FL"
comments: true
date:   2018-06-16_11:09:20 
categories: music
tags: ['FLStudio', 'DAW']
image:
description: FLStudio can be weird... let's get that sorted.
series: FLStudio
pdf: true
---

{::nomarkdown}
<a href="/assets/FLStudio/AudioExplain.png">
<img src="/assets/FLStudio/Thumbnails/AudioExplain.png" alt="Audio Explanation">
</a>
<div class="image-caption">Audio workflow in FL</div>
{:/nomarkdown}

FLStudio does things in a way which can seem a bit strange to anyone used to another DAW, so the very first thing in a review is to cover _how_ FLStudio does things.

FLStudio's workflow is most certainly different, but I think that you'll find that it offers a lot of flexibility that's not present in other DAWs. The question is whether you're willing to pay for that flexibility by having to re-arrange how your brain works...

Or if you're a new DAW user, there's really no downside.

p.s. I forgot to mention in the announcement (I've edited it now) that this review is being done with a free NFR copy of FLStudio and all Image Line products.

**Other posts in this series**:

{% assign fls = site.posts | where: "series", "FLStudio" | sort: 'date' %}
<ul>
{% for my_page in fls %} 
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

# Main Elements

{::nomarkdown}
<img src="/assets/FLStudio/MainShot.png" alt="MainShot">
<div class="image-caption">Main Elements</div>
{:/nomarkdown}

FLStudio has 4 main elements:

* Channel Rack - This is where all of your sound generators (instruments and samplers) are stored along with automation clips.
* Patterns - A pattern contains information that controls the channel rack. I'll explain this more later.
* Playlist - this is where you sequence patterns.
* Mixer - Channels are routed to the mixer.

This may seem a bit confusing at first if you're used to another DAW, but this is a more explicit method of representing how routing in DAWs happens.

Let's dive a bit deeper...

# Signal Flow

{::nomarkdown}
<a href="/assets/FLStudio/Routing.png">
<img src="/assets/FLStudio/Thumbnails/Routing.png" alt="Routing">
</a>
<div class="image-caption">Main signal flow</div>
{:/nomarkdown}

All of your sound generating data is stored in the channel rack. So each synth, each piece of audio (which is in samplers) and each automation clip permanently resides in the channel rack.

From there you need a way to make those channels _do something_. That's where patterns come in. A pattern is a set of data that tells each channel what to do. A pattern does not need to control _each_ channel, but instead it can decide to only send data to a single channel. You could have a pattern that only sends data to the kick, or that sends data to the kick/snare/hats, or to all of the drums and bass etc...

When a pattern triggers, the channels make noise, but the noise needs to go somewhere! Each channel can be assigned to a mixer routing. The channels do not need to be assigned to mixer channels in order, it's totally arbitrary. Multiple channels can be assigned to the same mixer channel.

Now we have a pattern that makes channels send data to the mixer, but how does a pattern know when to play? That's what the playlist is for. The playlist is where you sequence patterns. Any pattern can go to any playlist track, and any pattern can trigger at any time, even multiple of the same pattern at the same time. There's no real limits.

However, take a look at Pattern 2 on the second and third playlist track. Patterns (but not audio) are monophonic, so when the overlapping Pattern 2 starts then the first Pattern 2 is muted. When Pattern 2 on the first track starts, Pattern 2 on track three is muted. This does not apply to audio clips though, as they can overlap without issue.

# Audio

{::nomarkdown}
<a href="/assets/FLStudio/AudioExplain.png">
<img src="/assets/FLStudio/Thumbnails/AudioExplain.png" alt="Audio Explanation">
</a>
<div class="image-caption">Audio Explained</div>
{:/nomarkdown}

Audio is quite an interesting topic in FLStudio.

In other DAWs, audio is placed inside items/regions/clips/soundbites/whatever and positioned in a track. The audio is triggered when the beginning of the clip is reached, and stops at the end of the clip.

FLStudio takes the abstraction of audio out further a bit, and makes it _far_ more flexible to work with. All audio in FLStudio is stored in samplers. There's a couple samplers to work with, which I'll cover at another time.

So when you place audio in your playlist, it looks like any other DAW, but the audio is not _simply_ playing at the start of the clip. The start of the clip is triggering a sampler. This is important to realize, you can treat audio clips just like any other DAW. They show on the track like a single clip, but _if you want_ you can also treat the audio like it's in a sampler... because it is.

Other DAWs implicitly have your audio in a very simple sampler. The beginning of the clip triggers the audio and it plays output to the track.

FLStudio _explicitly_ has your audio in a sampler, which gives you all of the benefits of a sampler. The sound warping, editing, slicing, scripting etc.. features are all available without needing to jump to a sound-file editor of some sort. All of these capabilities are present _live_ as well, and automatable because it's in a sampler instrument!

# Patterns

{::nomarkdown}
<a href="/assets/FLStudio/Patterns.png">
<img src="/assets/FLStudio/Thumbnails/Patterns.png" alt="Patterns">
</a>
<div class="image-caption">Patterns</div>
{:/nomarkdown}

Patterns I think are probably the most confusing thing if you are coming from another DAW, but it's actually rather simple.

A pattern controls control data for each channel. A pattern can control every channel in the project as you wish. You can basically think of them as "mini-projects" where you have the whole arsenal of your project at your disposal if you wish.

Most users will opt to use patterns to only use one or a few channels at a time though, like in the image above. In the displayed pattern, the only thing being controlled is the `Bassline` channel. When this pattern is played, the MIDI data in that pattern for that channel is activated and the Bassline is played.

If you wanted, you could create your _entire track_ in one pattern. You can split your drums out to multiple channels (and multiple mixer tracks), but program them all in a single pattern, or have a pattern for each element.

# Playlist

{::nomarkdown}
<img src="/assets/FLStudio/Playlist.png" alt="Playlist">
<div class="image-caption">Playlist</div>
{:/nomarkdown}

The playlist is where the action happens when you're in "song mode".

In the playlist you sequence your [patterns](#patterns). Audio files are optionally treated similarly to patterns, so you can place them as you wish. [Automation clips](#automation) can be sequenced here as well.

_Tracks in the playlist are not tied to mixer tracks_. The playlist does _nothing but sequence_. Your channels are assigned to mixer tracks. You can sequence patterns however you want, they will still output to the mixer track that the triggered channel outputs to.

The playlist is where FLStudio gets a reputation for being a "beat oriented" or "electronic music oriented" DAW. Thusfar I feel that this is a strange reputation, largely because audio files can be placed and used on tracks how you may do it in a traditional linear DAW environment, except you have significantly more flexibility.

Patterns and Audio Files and Automation Clips can have their lengths/starts adjusted how you may expect. You can slice them. You can quantize them. You can do most of the things that you'd expect.

# Automation

{::nomarkdown}
<img src="/assets/FLStudio/AutomationExplain.png" alt="Automation...">
<div class="image-caption">Automation, Hmm...</div>
{:/nomarkdown}

Written automation in FLStudio takes 2 forms: Automation Clips and Event Data.

Automation clips are like patterns, which have their own channels, that have control data for a parameter. You can paint this in the [playlist](#playlist) just like a pattern. Automation clips are not _linked_ to a pattern, so they can be used at any time in the playlist irrespective of the current playing pattern.

Event data _is_ linked to the current pattern. This is what you may think of as "traditional automation". You write control data for a parameter and it's part of the pattern, so it only acts when the pattern acts.

There's a problem here though: the event editor sucks. 

The most prominent issue is that it's difficult to find automation. First you have to find the pattern that has the data (since multiple patterns may be controlling a channel at once!), then you have to hunt around to find the parameter's event. You can do it from the browser (find the pattern, click, then find the parameter), or you can open the channel->synth/sampler with the parameter and access it via right click or 'last tweaked parameter'.

The second issue is that the event editor is pretty poor. It's a bar-graph style editor, much unlike the line/bezier based automation clips. It's difficult to set exact values, you can't see the exact values, there's very few tools for adjusting the curve and there's no thinning control (but there is interpolation and auto smoothing).

The event-based automation is the only way you can record automation, but if you wish to edit that data then you are in for a disappointment. You can convert event data to automation clips, but then you lose the pattern-link if you want that.

There's some other sore spots with automation if you don't use automation clips, but I'll probably get there later. There's also another way to adjust controls automatically in realtime, and that's something we'll _definitely_ get to.

# What do I think about all of this?

Coming from a traditional linear DAW environment, FLStudio can be quite strange. Having to manually handle routing from sound generators to the mixer, and link MIDI data to sound generators seems weird. Other DAWs do this all automatically for you when you put data on a track.

The complexity is managed by some shortcuts that make this routing nearly automatic, but you are still afforded a great deal of flexibility in how you utilize your data.

This whole setup does complicate the process of recording data yourself, such as audio or MIDI or automation, but at most it's one extra step. Once again this added movement is paid for by a lot of extra flexibility in how you route things, when things occur and where they are stored.

And yeah... event editing (recorded automation). What a mess.

# Support Me!

This post took 7 hours to research, screenshot, write and edit. If you appreciate the information presented then <a href="/DonateNow/">please consider joining patreon or donating!</a>







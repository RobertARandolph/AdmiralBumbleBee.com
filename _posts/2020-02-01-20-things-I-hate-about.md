---
layout: post
title: 20 things I hate about Ableton Live
comments: true
date:   2020-02-01_16:23:05 
categories: music
tags: ['Ableton Live']
image: /assets/Live/Hate1/Banner.png
description: I can't handle Ableton Live sometimes... here's why
---

{::nomarkdown}
<img src="/assets/Live/Hate1/Banner.png" alt="20 things I HATE about Ableton Live">
<div class="image-caption">20 things I HATE about Ableton Live</div>
{:/nomarkdown}

I was going to release a different article this week, but instead I was doing some mixing work in [Ableton Live](https://www.ableton.com/en/) for [Gater](https://soundcloud.com/gateraudio) (a young teen that makes fairly interesting music).

Of course I became supremely annoyed within seconds, and as I do, I started to write down my grievances as they arrived.

Now it's this article.

{% assign lives = site.posts | where: "series", "ableton" | sort: 'date' %}
<ul>
{% for my_page in lives %} 
    {% if page.url != my_page.url  %}
        <li><a class="page-link" href="{{ my_page.url | prepend: site.baseurl }}">{{ my_page.title | split: '-' | last }}</a></li>
    {% endif %}
{% endfor %}
</ul>

**VALID FOR LIVE 10.1**. Future updates may render some of this information invalid.

<!--more-->

**If you have any questions or comments, please comment below! I read every comment and respond to most.** No registration is necessary to comment, so don't be shy.

# Contents
{:.no_toc}
* TOC
{:toc}

# Introduction

I sincerely hope that I'm wrong about most of these. Please correct me in the comments if I've missed something _obvious and simple_.

**I'm not interested in workarounds**. Yes, you can _almost_ emulate some of these things with a few extra clicks, a [hammerspoon script or two](http://www.hammerspoon.org) and maybe a virgin sacrifice (or two). I don't care. **I DO NOT CARE**.

I do care if I missed some one click solution that does exactly what I want. I can do _all_ of these things in _at least_ two DAWs with minimal effort, and most of them in four total DAWs. I've excluded using [REAPER](https://www.reaper.fm) in examples because it's basically cheating.

These are ordered by how soon they annoyed me when I was sent a 100+ track project in Ableton Live to mix.

# 1 Can't apply effects to Frozen Tracks

{::nomarkdown}
<img src="/assets/Live/Hate1/Frozen2.png" alt="At least it tells you.">
<div class="image-caption">At least it tells you.</div>
{:/nomarkdown}

Freeze a track. Maybe your CPU is low. Maybe you're sending it to a collaborator. Maybe whatever...

You have two choices if you want to further effect it:

* Use a send - This is a parallel operation.
* Create a new track to send the frozen track to - Messy, takes up space, error prone, extra work.
* Unfreeze - If you froze the track, there's possibly a reason why you can't unfreeze it such as not having the effects/instruments or not having the processing power.

Quite oddly, Live doesn't let you place effects directly on the effects path of a frozen track. Irritating to say the least.

# 2 No track search

{::nomarkdown}
<video autoplay loop muted class="gifvid">
<source src="/assets/Live/Hate1/TrackSearch.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
<div class="video-caption">Track Search (Cubase)</div>
{:/nomarkdown}

Say you have a 20 track project and you need to find "Bass Pizzicato". You can scroll around a bit and find it pretty quick. After two or three times you know exactly where it is and you can scroll then click right to it. Not a big deal.

Now you have 200 tracks in an active project where you're frequently grouping/moving/deleting tracks. Finding a specific track is _maddening_.

Oh what I would give for the ability to just type a couple of letters to jump to a track.


# 3 Multiband Dynamics - No GR graph

{::nomarkdown}
<img src="/assets/Live/Hate1/GR.png" alt="Guess how much gain reduction is happening">
<div class="image-caption">Guess how much gain reduction is happening</div>
{:/nomarkdown}

"Use your ears!" It echoes through the halls of reason.

How about instead, "I know how to get to a good starting place numerically and that can save me minutes of time fiddling around."

Live's [Multiband Dynamics]({% post_url 2019-05-10-Live-Plugins %}#multiband-dynamics) only shows the gain reduction _value_ for bands. You see an ambiguous small vertical line to indicate the gain reduction and a momentary value. The text has low temporal resolution, and the line has no discernible value.

Depending on what I'm trying to do, I generally know that if I have x-amount of GR on a band, I want y-makeup gain. Multiband Dynamics takes x out of the equation and leaves you to fiddle around to find a starting point to make tweaks from.

I bet you can't guess how much GR is happening in the image above. Hint: It's not _at all_ what the UI implies.

# 4 No "Show only..."

{::nomarkdown}
<img src="/assets/Live/Hate1/ShowOnly.png" alt="Show only tracks with... (Cubase)">
<div class="image-caption">Show only tracks with... (Cubase)</div>
{:/nomarkdown}

I don't know how many people reading this are sent unfamiliar projects, or have their own projects become unfamiliar to them, but I suffer from both situations.

~~~ text
You hit play.

A clanging bell lashes out at you from somewhere.

You stop playback.

"Surely I can look down the arranger to find this!", you say to yourself, 
as you're yet to discover the horror before you.

You playback a few times to pinpoint the exact moment when the bell tolls.

Now you slowly search through 150 _mostly_ empty tracks,
filled with disabled clips, muted tracks and a mess of automation.
~~~

You know what improves this situation? Setting the playhead and having a single command that hides all tracks that can not make a sound.

I **LOVE** this feature. It's maybe one of the most useful features for navigating large projects.

# 5 No "narrow to selected"

{::nomarkdown}
<video autoplay loop muted class="gifvid">
<source src="/assets/Live/Hate1/Narrow.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
<div class="video-caption">Narrowing Track Visibility (Cubase)</div>
{:/nomarkdown}

Again, you're looking for/working on something and the gods of workflow have sewn you into a tapestry of abject clutter.

If only one could select a handful of tracks and hide everything else. Even better still, what if you could narrow tracks by a search term and/or combine that with only tracks that have active clips at the current time.

# 6 Meters off when latent plugins exist

{::nomarkdown}
<video autoplay loop muted class="gifvid">
<source src="/assets/Live/Hate1/BoomBap.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
<div class="video-caption">Kinda defeats the point of groups to save space?</div>
{:/nomarkdown}

Put a latency inducing plugin in your chain, and now every group meter you see will be out of sync with the audio. Put it on your master and now every native meter is useless.

In the example above I have a snare track in a group. The "bus" is the group meter. The Track is the Snare meter. There is a limiter on the master with some latency.

The group meter is off significantly, and the child is off only slightly (from block latency).

Bonkers mate.

# 7 Playhead off when latent plugins exist

{::nomarkdown}
<video autoplay loop muted class="gifvid">
<source src="/assets/Live/Hate1/BoomBap.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
<div class="video-caption">Let's try this again, this time with gusto!</div>
{:/nomarkdown}

Same video again, new information. Now I ask you... which meter is showing _what you hear_?

It's the bus/group meter. That means that the playhead is off, always being a bit far to the right of where the image of the audio is.

Good luck finding that strange bell noise when your playhead doesn't even show where you are properly!


# 8 No VCA faders

{::nomarkdown}
<a href="/assets/DP/VCA/VCAvAux.png">
<img src="/assets/DP/VCA/Thumbnails/VCAvAux.png" alt="VCA Fader vs. Aux Group">
</a>
<div class="image-caption">VCA Fader vs. Aux Group (click for larger image)</div>
{:/nomarkdown}

Live does not have [VCA Faders]({% post_url 2019-03-01-dp-10-vca %}). Why am I crying about it?

Read [that post]({% post_url 2019-03-01-dp-10-vca %}), or [this post]({% post_url 2016-06-02-Studio-OpiniOne %}#vca-faders), [or this section]({% post_url 2017-09-18-Mixbus-32c-The-Mixer %}#vcas), or [this one]({% post_url 2017-07-02--Things-that-Bitwig-could-improve %}#vca), and maybe [this one too]({% post_url 2016-12-16-Things-I-hate-about-Digital-Performer %}#vcas).

If you don't understand by now, I can't help you.

I was sent a project that had dozens of tracks of existing automation and ended up mixing with utility devices. Disgusting, and another 2-3 clicks on top of trying to figure out what track you need to adjust to begin with.

# 9 No trim automation

{::nomarkdown}
<img src="/assets/Live/Hate1/Trim.png" alt="Trim Automation (Mixbus)">
<div class="image-caption">Trim Automation (Mixbus)</div>
{:/nomarkdown}

VCA Faders aren't everything. Simply having an automation stage (or two, or three!) that exist pre/post fader that allow you to automate without touching your mixer fader would be lovely.

Adding a utility plugin gives you pre-fader automation adjustment that's 2-3 clicks and possibly a click-drag away. Hooey.

# 10 Glitches if global latency is too high

{::nomarkdown}
<video autoplay loop muted class="gifvid">
<source src="/assets/Live/Hate1/Osc.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
<div class="video-caption">That _should_ look like a clean sine wave!</div>
{:/nomarkdown}

If your total plugin-induced latency is too high, you _can_ get glitches.

This isn't _too strange_. Other products do this and it's not unreasonable to have a limit on total latency. What _is_ unreasonable is that there's no indicator of what that threshold is, nor is there a setting to change it.

My CPU meter was 1% when I took that image at a 64 sample buffer, with about 3000+ of induced latency from plugins. I had a signal generator outputting a sine wave, and I captured the output of Live in realtime with [Audio Hijack](https://rogueamoeba.com/audiohijack/).

When the oscilliscope's trace goes "flat", that means some audio was not rendered. You can hear an audible glitch when that occurs.

# 11 No Sidechain Search

{::nomarkdown}
<img src="/assets/Live/Hate1/Search.png" alt="You must suffer with me.">
<div class="image-caption">You must suffer with me.</div>
{:/nomarkdown}

Sidechaining the [native compressor]({% post_url 2019-05-10-Live-Plugins %}#compressor) isn't complex. Finding the track that you wish to use as your sidechain source **IS** complex and disheartening if you have too many tracks in your project.

You have to scroll though a list of track names. Heaven forbid you click the wrong track and have to repeat that, or even worse: you don't know the track name and have to find it (see other complaints).

**EDIT** - I originally _did_ try typing, and it wasn't consistent. Someone suggested this, so I tried again and it's fairly inconsistent. Sometimes it goes to a track, sometimes it does nothing, sometimes the window closes. There's no way to see what you've typed or to correct a mistake in typing with backspace.

Please Ableton: a normal search box.

# 12 Can't jump to locators

{::nomarkdown}
<img src="/assets/Live/Hate1/Locator.png" alt="You can't jump this.">
<div class="image-caption">You can't jump this.</div>
{:/nomarkdown}

Live has markers, called locators, that mark positions in a track. Cool.

There are no shortcuts to jump to a specific locator. Uncool.

What's the point of locators if you can't use them? [The shortcuts sheet](https://www.ableton.com/en/manual/live-keyboard-shortcuts/) doesn't list _any ways_ of using the locators.

It's wonderful to be focused on the mixer and instantly jump to _exactly where you want_ in the song, without error and without listening or touching your mouse.

**EDIT* - A user has pointed out that you can manual assign locators via Key/MIDI assignment. Great! Except it has to be done every time that you add a locator. If you delete a locator then the key assignment is deleted too.

# 13 Setting playhead while automation is showing is a great way to accidentally create automation


{::nomarkdown}
<video autoplay loop muted class="gifvid">
<source src="/assets/Live/Hate1/Playhead.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
<div class="video-caption">Roll the dice to see if you write to the envelope or playhead posistion.</div>
{:/nomarkdown}

Live has you set the playhead by clicking in the arrangement window.

Live also has you edit automation by clicking in _the exact same area_.

If you're working with automation and you want to adjust your playback location then you have two choices:

* Find an empty area - hopefully an area where clicking won't insert/modify an existing envelope!
* Click a small vertical bar to _temporarily_ set the playback position - Note: this requires stopping and starting playback _or_ requires that the global quantization value is kind to you.

Depending on your project this can a rare (but still annoying) occurrence or something that you struggle with constantly.

# 14 Order bands by Frequency

{::nomarkdown}
<img src="/assets/Live/Hate1/Sort.png" alt="2 3 1 4">
<div class="image-caption">2 3 1 4</div>
{:/nomarkdown}

I like to work with numerical values sometimes, and sometimes I like to throw nodes around in a graph.

Live's EQ lets you do both, but the problem arises when you pot Band 1 in the high end, and band 4 in the low end. Want to make a small adjustment to the frequency or Q... then your eyes dart around trying to figure if that's Band 1 at 5khz or was it Band 2? Wait, why is Band 8 all the way on the right of control layout but the filter itself is all the way to the left?

Sorting bands by frequency ist wunderbar. Take the frequency of all bands, then reorder them ascending. Simple task, big workflow dividends when you have 70 EQs in a project that are all mucked up.

# 15 Show/Remove Missing plugins

{::nomarkdown}
<img src="/assets/Live/Hate1/Disabled.png" alt="Disabled, but WHERE?">
<div class="image-caption">Disabled, but WHERE?</div>
{:/nomarkdown}

Missing plugins is typical scenario when getting in a project. I can't fault Live for that (as much as I'd like to).

What I can fault it for is there being no easy way to find, replace and/or remove those plugins. With Live's device area and 100s of tracks, it can take you an hour or more just to hunt down a _few_ missing plugins.

([there is a trick that can help though](https://resoundsound.com/ableton-live-show-devices-plugins-on-tracks/))

# 16 Trim Automation by Shape

{::nomarkdown}
<video autoplay loop muted class="gifvid">
<source src="/assets/Live/Hate1/Parabola.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
<div class="video-caption">Trim automation with shapes, add/subtract/scale/min/max (Digital Performer)</div>
{:/nomarkdown}

This one is a bit hard to explain, so watch the video above.

Occasionally you find that you have _almost_ the right automation, but you need to adjust it in a non-linear fashion. Perhaps you have a sine-wave modulation that you need to logarithmically decay into oblivion.

It's _practically_ impossible in Live. You need to fiddle with individual points to approximate the result you want, listen, adjust, listen, adjust, go mad, adjust etc...


# 17 No Playlists

{::nomarkdown}
<img src="/assets/Live/Hate1/Playlist.png" alt="Playlist in Mixbus">
<div class="image-caption">Playlist (Mixbus)</div>
{:/nomarkdown}

Sometimes you want to try out some edits. "Ok", you say, "I'll try them then use undo!".

Ah, my poor lad, this is where life bites you. What if those changes require _other_ edits in the project? Now you can't reliably utilize undo to get back to your previous project state.

Playlists alleviate these woes. Playlists allow you to have different arrangements of clips that you can pull up at will on a track non-destructively. If you want to try some new ideas, create a new playlist, try your ideas... don't like them or want to stash them? Switch back to your first playlist.

# 18 Pause

{::nomarkdown}
<video autoplay loop muted class="gifvid">
<source src="/assets/Live/Hate1/SpaceMadness.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
<div class="video-caption">SPACE MADNESS</div>
{:/nomarkdown}

_Quite_ often in Live it's necessary to stop playback, scroll through your project to [find something](), then continue playback.

You can "continue playback" using `shift-space`.

The problem is that when I'm mixing I, personally, _always want to continue playback. If I want to have playback restart from a point then I'll use a Loop.

I can't tell you how many times in the last 48 hours I've listened to 3 minutes of a track, stopped, then fat-fingered or forgot to hit shift and totally lost my place in the track.

**BLERGH**. I just did it when I flipped back to Live after writing this. Give me a break.

# 19 Loop bar is tiny

{::nomarkdown}
<img src="/assets/Live/Hate1/Loop.png" alt="Teeny-tiny living space.">
<div class="image-caption">Teeny-tiny living space.</div>
{:/nomarkdown}

I know this one isn't me. I've watched people live-streaming Live online, and watched videos where people fuss around trying to hit that loop bar _just_ right.

It's about 22 pixels high. On my 27" screen that means that it's just about 1.5mm. Ick.

**EDIT** - A user [has pointed out](https://twitter.com/WilliamS_mus/status/1224384664980336640) that you can use `ctrl/command l` to set the loop to the selection. The problem them becomes that you must redo any existing selections that you may be working on (which is a problem anyway because setting the loop **ALWAYS CHANGES THE SELECTION**).

An example would be when I was trying to do a non-grid edit. I nearly had the edit right then wanted to set a short loop so I could hear my results as I worked. Setting the loops undid my carefully setup selection! Necessitating using the selection be used and be set for something that _doesn't select anything_ is a strange UI decision.

However, since the loop and selection are intertwined as it is, the suggestion alleviates the problem as much as is currently possible.

# 20 (Poor) Peak Meters

{::nomarkdown}
<img src="/assets/Live/Hate1/MBMeter.png" alt="Metering Options (Mixbus)">
<div class="image-caption">Metering Options (Mixbus)</div>
{:/nomarkdown}

Live uses peak metering _everywhere_, which is practically useless in the digital world. No good for [gainstaging]({% post_url 2017-11-01-Gainstaging-for-the-modern-musician %}) and no good for ... anything.

Better options = better mixes.

# Conclusion

Let's be fair here: there's far more than 20 things that annoy me in Ableton Live.

I narrowed my list down, for this post, to features that I believe could benefit nearly every workflow.

I can't say that I'm amazed that people get anything done with Live, after all humans did (and still do) carry buckets of water from the river to their home for miles/kilometers every day.

I'll be at ease with my modern pressurized water supply.


This post took 12 hours to whine, write and edit. If you appreciate the information presented then <a href="/DonateNow/">please consider joining patreon or paying us for the time spent bringing you quality content!</a>

<a href="https://www.patreon.com/bePatron?u=7465992"> <img class="patreon-button" src="/assets/Patreon.png" alt="Be a Patreon!"></a>

<form style="text-align: center;" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick">
<input type="hidden" name="hosted_button_id" value="BR247JAZBTUJJ">
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
</form>

**If you have any questions or comments, please comment below! I read every comment and respond to most.** No registration is necessary to comment, so don't be shy.


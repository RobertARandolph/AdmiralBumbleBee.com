---
layout: ['post', 'reader']
title: "Live music with Ableton Live: An Overview"
comments: true
date:   2019-05-05_15:57:48 
categories: music
tags: ['Ableton Live']
image: /assets/Live/SmallSet.png
description: Live for live use, a no-brainer... or is it?
series: ableton
pdf: true
---

{::nomarkdown}
<img src="/assets/Live/SmallSet.png" alt="You need to play 'amb synth stem' quick... where is it?">
<div class="image-caption">You need to play 'amb synth stem' quick... where is it?</div>
{:/nomarkdown}

This is a post where I'm a bit out of date, and my abilities to _properly_ test the software are somewhat limited. I have toured and one of those tours was with Live in the backend. I played drums and used Live to control lighting, control vocalist effects live, trigger loops and live sample replacement on drums. This was in the era of Ableton Live 6-7.

I will do my best to cover Live as it pertains to its use as a Live music platform, but I don't make any claims to an attempt at high-quality coverage.

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

# Clip Launching

{::nomarkdown}
<img src="/assets/Live/Launch.png" alt="Clip launching trigger types">
<div class="image-caption">Clip launching trigger types</div>
{:/nomarkdown}

Live's Session view is 2 dimensions:

* Columns - Columns correspond to tracks and each track can have one, and _only_ one clip playing at a time.
* Rows - Rows are Scenes. An entire row can be triggered at a time, causing all clips on that row to be triggered. Scenes therefore allow you to group musical ideas together so they can be easily triggered as a single entity.

Scenes in Live are just triggers. The ability to [sequence](#sequencing) them is unavailable, nor is it possible to group clips or tracks outside of a row.

Clip launching is done via mouse, [follow action](#sequencing) or MIDI. When MIDI is used, a clip can respond to velocity information scaled by a percentage. The velocity capability is quite useful when using pad controllers that have velocity support.

_How_ a clip is launched is assignable to one of four modes:

* Trigger - The clip switches when triggered, according to quantization.
* Gate - Start and Stop of the clip are controlled by mouse down/up or MIDI note on/off respectively.
* Toggle - "On" messages stop playing clips, and start clips that are stopped.
* Repeat - Like gate except that the clip's loop point is switched to the current clip launch quantization length.

These modes are available as legato, meaning that the current playback position is kept when switching to the clip.

While this may sound like a simple setup, strangely I don't know of any competition that does this as well as Live. Considering the available hardware integration with Live, the clip launching experience is _even better_.

However, if we compare this process to dedicated samplers Live begins to crumble, but that's an _extremely_ unfair comparison. You can easily add these products to Live as a VST if necessary and reap the benefits of enhanced functionality on top of an integrated core clip launching system.

## Sync

{::nomarkdown}
<img src="/assets/Live/ClipQuantize.png" alt="Clip Quantize steps">
<div class="image-caption">Clip Quantize steps</div>
{:/nomarkdown}

During a live performance there's a need to enact playback of a piece of data ("launch a clip"), but make sure that the subsequent playback stays in sync with the rest of the project. Imagine if you have a drum loop playing and you want to launch a shaker loop on top of it. If loops triggered on input you would rarely get them in sync.

Live allows you to forward-quantize clip launching so that input is translated to the next time division. There's a global quantize and each clip can quantize to its own value if desired.

The system works, and it works well. I only have 3 minor qualms:

* No clip-length quantize - I don't see a way to make a clip's launch quantize dependent on its length.
* No multi-direction-quantize - Live can't see into the future, so this would require a playback delay slightly longer than the backward-quantize value. Essentially this would allow you to input a clip launching action late, and have it launch earlier than you pressed it.
* Only available in clip editor - Setting clip quantize is only available in the clip editor, which makes the process of adjusting the behaviour of a selection of clips a frustrating and error-prone clickfest.

## Tempo

{::nomarkdown}
<img src="/assets/Live/Tempo.png" alt="Tempo Controls">
<div class="image-caption">Tempo Controls</div>
{:/nomarkdown}

One of Live's claims to fame long ago was its ability to adjust tempo of a set on the fly so that you could easily sync with external audio/equipment. Live is one of the few DAWs that does this well. Audio and MIDI, along with automation, can be warped to a new tempo or to a new tempo map. You can nudge the tempo temporarily to help sync the playback to an external source as well.

## Link

{::nomarkdown}
<img src="/assets/Live/Link.png" alt="Link">
<div class="image-caption">Link</div>
{:/nomarkdown}

Link is an interesting technology that allows multiple systems to sync over a wireless network. Transports are synced, tempos are synced and setup is a breeze.

The downside here is that the support for the technology is limited largely to mobile applications. As far as I know, only 5 DAWs support it: Bitwig, Reason, Traktor, Serato and Maschine. That's a nice sampling of software that's in the same realm as what Live is, so perhaps it's more than sufficient.

The mobile application sync is excellent for adding a sequenced application to your personal setup, or having a friend over to quickly jump on and jam. I am perpetually excited about the ability to grab my iPad and add a touchscreen-based sequencer to my Live experience with nothing more than a click.

The latency is usually good and I have experienced no issues with setup. Click and go.

The only downside I've experienced is that it doesn't solve one of the major issues with live collaboration: transferring data. You still need to setup a mixer of some sort and transferring samples/settings between linked software requires some other solution. This isn't a problem that Link appears to be intended to solve, but it _is_ the biggest issue. Syncing multiple devices has been possible with MIDI for 35+ years, and syncing via MIDI over WIFI has been possible for 10+. Ableton picked the low-hanging fruit, but they at least made a nice pie with it.

# Sequencing

{::nomarkdown}
<img src="/assets/Live/Follow.png" alt="Follow Actions">
<div class="image-caption">Follow Actions</div>
{:/nomarkdown}

The arrangement view's capabilities have already been discussed. It's a linear sequencer with the capabilities/features that've been discussed.

However, when in Session view, clips have a curious and fantastic feature: follow actions. After a clip finishes playback it can execute one of the following actions:

* Stop - Make the clip a "One-Shot".
* Play again - Loop
* Previous - Play the previous clip on the track.
* Next - Play the Next clip on the track.
* First - Play the first clip on the track.
* Last - Play the last clip on the track.
* Any - Play _any_ clip on the track, including the clip that just finished.
* Other - Play any clip on the track except the clip that just finished.

There's 2 follow action setups available and you set a ratio that indicates the chance that one will randomly be selected over the other.

This allows for semi-autonomous, fully or partially/randomized playback and even algorithmic musical sequencing. I used to split drum loops up and then us follow actions to sequence the slices so that there would be places where randomness could occur, it's brilliant fun and allows you to add some spice to your live performance.

That's not all though, they are more than just a clever gimmick. Follow actions allow you to fully sequence a project so that it will work predictably and autonomously, while still allowing you to change the playback at anytime. Empty clips can have follow actions too, which gives you the ability to launch clips that do nothing but change the current sequence.

With a bit of ingenuity it's possible to put together some exciting and unique live performances that are still _completely_ in your control. It's a cool concept with an easy-to-use implementation (though it'd be easier if setting a follow action was hotkeyable or available in a context menu!)

Now it's time to burst the happy bubble... Live's competition has upped the game:

* Return to Arrangement
* Return to Last Clip
* Round-Robin
* Play First in Current Block - Bitwig has a concept of a 'block' of clips that are grouped clips for the sake of follow actions.
* Play Last in Current BLock
* Play Randomly in Current Block
* Play first in Next Block
* Play Random in Next Block
* Play First in Previous Block
* Play Random in Previous Block
* Play First in Other Block
* Play Random in Other Block
* Assignable action time - Live triggers follow actions at the end of the clip, Bitwig allows you to set the time where the follow action occurs.

Even more advanced actions are available in another product:

* Jump to marker
* Execute action (nearly anything possible in the DAW)
  * Likewise, execute code.
* Change Set
* Program Change (without using a 'dummy clip')
* Change preset
* Reload sample (with similar semantics to the follow actions themselves).
* Video control


Follow actions in Live were brilliant in the context of what Live offers when they first came out, but the competition has taken the idea and ran with it. Ableton has taken the idea and sat on it.

It's still super neato regardless.

# Hardware Support

This is going to be really simple: the support for Live via hardware is the best there is for any DAW. A huge variety of manufacturers directly support Live and do so with gusto.

Most anything on screen can be assigned to a MIDI control, with scale available. Quick and easy.

Programmatic support for controller scripting is limited or requires use of [Max for Live](https://www.ableton.com/en/live/max-for-live/). This is a fairly major failing if you want to do more complex things as the live scripting API isn't documented or publicly supported, but some enterprising individuals have [made it partially available](https://julienbayle.studio/ableton-live-midi-remote-scripts/) to the hacker crowd.

# Looper

{::nomarkdown}
<img src="/assets/Live/Looper.png" alt="Looper">
<div class="image-caption">Looper</div>
{:/nomarkdown}

[Go read about Looper.]({% post_url 2019-04-12-Writing-music-in-Live %}#looper) if you haven't already. It's brilliant for live use.

The _really cool_ part is you can use clips with automation to control Looper automatically. If you have a part of your track where you're always going to resample/loop something then you can trigger it with an empty clip that has the appropriate automation. The Looper sample can be easily pulled into the session as its own clip, or into Sampler for resampling/reuse.

The resampling power available with Looper is incredible, and then from there you can grab that sample and use it anywhere in Live where audio is accepted.

It's _really, really, REALLY_ cool.

## Not Looper - Dummy Clips

{::nomarkdown}
<img src="/assets/Live/Dummy.png" alt="Dummy Clip">
<div class="image-caption">Dummy Clip</div>
{:/nomarkdown}

Dummy clips can be used even further still to automate _anything_. If you want to trigger an effect then you can create an empty clip and place automation on it that turns on/off an effect on the track. It can automate anything about the effect.

This capability makes live performance about more than just triggering clips, but about musical expression through modification of existing sound. A lot is possible here, and it's incredible fun to take a [cheap pad controller](https://novationmusic.com/launch/launchpad-mini), fill the session view with empty clips that turn on/off effects and have varying automation for various parameters, input audio into that chain of effects and just have a blast triggering effects and effect automation.

If you're a live performer then surely can think of ways to take this idea to the max.

# Set Organization

{::nomarkdown}
<img src="/assets/Live/SmallSet.png" alt="You need to play 'amb synth stem' quick... where is it?">
<div class="image-caption">You need to play 'amb synth stem' quick... where is it?</div>
{:/nomarkdown}

Tiny live set pictured above with a concession made that there's no effects and all volume control is done at the clip level so that only 8 tracks are needed. Yet somehow... it's still a pain to use.

In the live performance realm, this is one of Ableton Live's absolute weakest points. For a full live performance it's generally required that you play multiple tracks. Live requires that you do one of two things to manage this:

* Multiple projects (sets) - Putting each track into its own Live project (set) is possible, however you are forced into audible downtime while you switch projects. Rarely is this acceptable.
* Many tracks in a single project (set) - The more common option is to have all of your tracks in a single Live project (set). This clearly has limitations regarding organization, ram usage and the most important: navigation.

It's moderately unwieldy to create a 10+ song live set (unless you have very simple songs or performance needs), but even with the most fastidious grouping there simply is no way to quickly get to something. No clip search, no track search, no navigation map, no markers/locations (for the Session grid). You are left to your own memory and dexterity if you want to quickly get to a clip or track in a large multi-song project.

Not only does this lack of navigation features lead to potential errors, but it reduces the opportunity for impulsive inspiration. Think a clip could sound really cool here because the crowd is riled up? Wait... where was it? Oh crap... wrong clip.

The lack of navigation is made worse by the fact that scenes are always _all rows_. If you want to use scenes in your project then you need to either:

* Have each song confined to a group, and solo the active song's group - Remember to solo the current song's group, or you're in trouble! Of course, this makes transitions difficult and error prone when you try to have two groups active at the same time. It also can significantly increase CPU/Ram usage when muted tracks still play their content, but don't output it.
* Offset all of your tracks so each track takes up an entire set of rows - This leaves your project looking like a _massive_ grid with data only looking like a slash from upper left to lower right. This makes the number of scenes in a project additive, so if you have 10 tracks with 20 scenes, then you have 200 scenes! Navigation is non-existent already, now it's even worse.

There is one bright light shining through the muck: you can drag a Live Set straight into the session view. Just drag the file straight into Live and it displays the whole session view setup as you drag it in. It makes the import job significantly easier.

# Conclusion

Ableton **Live** is still probably the best solution for musical _performance_ live that utilizes digital technology. I believe that it's lacking for show _control_ (controlling a show, rather than _being_ the show), but it appears that Live is clearly not geared towards that.

It's rather interesting to me that Live even has an Arrangement view. They're slowly starting to fall behind in Session view capability _and_ ease of use, yet it's called Live. If it were only the session view and all of the development effort was focused there then the case would likely be made that it's the absolute superior product in its class.

Yet... they're trying to position themselves as a traditional linear DAW for _production_. So far I think you can figure out how I feel about that.

Right now though, Live is still brilliant for live.

# Support Me!

This post took 12 hours to research, screenshot, write and edit. If you appreciate the information presented then <a href="/DonateNow/">please consider joining patreon or paying me for my time spent bringing you quality content!</a>







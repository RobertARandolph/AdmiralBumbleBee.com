---
layout: ['post', 'reader']
title: Things I hate about Digital Performer...
comments: true
date:   2016-12-16_08:56:38 
categories: music
tags: ['Digital Performer', 'DAW']
series: dp
---

![DP Velocity editing](/assets/DP/DPVelocity.png)

Digital Performer 9.1 isn't all roses. There's quite a few things that I would like improved and features that I feel are blatantly missing compared to the competition. Some of these things cause creative blocks, require tedious workarounds or simply aren't cool.

{% assign dp = site.posts | where: "series", "dp" | sort: 'date' %}
<ul>
{% for my_page in dp %} 
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

# Big misses

These are the things that annoy me on a daily basis when using DP. If you follow this blog, you'll soon see how badly they annoy me!

## VCAs

{::nomarkdown}
<img src="/assets/General/Fixed.png" alt="Fixed">
</br>
{:/nomarkdown}

{::nomarkdown}
  <img src="/assets/DP/vca.gif" alt="VCA">
  <div class="image-caption">VCAs in Cubase</div>
{:/nomarkdown}

VCAs confuse a lot of people, but once you understand them and use them they are an invaluable. The first thing that you need to understand about VCAs is why you can't simply send multiple channels to a bus/subgroup instead.

The easiest, but not only, differentiating example between a VCA and subgroup is when you have a reverb send. Ideally a reverb send needs to be post-fader, otherwise the reverb will be a fixed level no matter what you do to your track's fader. When the track's volume increases the reverb's level should increase, and when you lower the track volume the reverb should become quieter. This is done by setting your send as post-fader.

When you use a subgroup to group tracks you can lower the volume of multiple tracks at once. _However_, a subgroup will not affect the sends and post-fader effects of the tracks routed to it! You can mute a subgroup, but you will still hear all of your sends. Now imagine turning down a group greatly and then having to go back and adjust all your sends. It's tedious. Even worse, imagine trying to automation a subgroup and having to go back and match the automation on all of your sends and post-fader effects.

VCAs solve this problem, and others. A VCA gives you a __fader that controls other faders__. No audio passes through a VCA track. When you move a VCA, all of the faders attached to it are scaled by the VCA fader. Since the track faders move, this also affects any post-fader effects! This also means that you can automate a VCA and it works correctly with post-fader routing.

Now you may say, well why is this different from grouping the faders? Another layer of VCA wonderfulness is that it allows you to _easily_ layer automation. Imagine that you have 10 guitar tracks that you need to fade down before a chorus, but all of these guitar tracks already have their own automation data. One option would be to use 'trim' automation to scale the existing automation destructively, but a better option is a VCA.

VCA tracks allow you to separate layers of automation and do it across multiple tracks while maintaining routing integrity. You can have VCAs that control VCAs as well. VCAs are non-destructive to the tracks they control unless you explicitly combine the VCA automation and track automation. You can have the most complex automation imaginable on dozens, or hundreds, of tracks and if you want to add a slight swell over 1 minute you can just add a VCA and boom. Done.

DP does not have VCAs or anything resembling VCAs. With DP's amazing large project navigation features it's astonishing that there's no VCA capability! I hate mixing without VCAs and it's one of the #1 most irritating things about using DP.

## Absolute Grid

{::nomarkdown}
<img src="/assets/General/Fixed.png" alt="Fixed">
</br>
{:/nomarkdown}

{::nomarkdown}
  <img src="/assets/DP/grid.gif" alt="Snap types in Cubase">
  <div class="image-caption">Grid Snapping types in Cubase 8</div>
{:/nomarkdown}

Absolute grid is probably something that you've never thought about. Every other DAW that exists has this _by default_. When you set your grid to 1 beat, anything you move will snap to 1 beat increments. It's obvious right? RIGHT? __RIGHT???__

Apparently not to Motu.

DP only has a 'relative grid' mode. When you set the grid to 1 beat, all of your movements are _offset_ by 1 beat. DP does not snap anything __to__ the grid, it moves things by the grid amount. To get something on the grid in DP, you must first quantize then move it.

While DP does have excellent quantize and humanize options, the lack of an absolute grid at minimum _triples_ the number of clicks necessary to edit grid-oriented genres of music. This is __very__ frustrating.

## Resizable Mixer

{::nomarkdown}
  <img src="/assets/Cubase/MixerResize.gif" alt="Resizable Meters">
  <div class="image-caption">Resizing meters in Cubase</div>
{:/nomarkdown}

Fader resizing in Cubase.

Faders in DP are a fixed size. Meters in DP are a fixed size. They are small and the resolution is awful.

They need to be like the meters in S1 or Cubase as shown above. It can make a big difference when mixing.

## Hardware Inserts

{::nomarkdown}
<img src="/assets/General/Fixed.png" alt="Fixed">
</br>
{:/nomarkdown}


{::nomarkdown}
  <img src="/assets/DP/CubaseHardware.png" alt="Cubase Hardware Inserts">
  <div class="image-caption">Hardware Inserts in Cubase</div>
{:/nomarkdown}

~~I love using external hardware when mixing in a DAW. DP has always allowed this with a convoluted Aux send + manual compensation workflow, but it's tedious and error-prone. DP 9.1 added a Hardware Insert plug-in to automate the task, but __it is broken__.~~

~~So for now, DP does not have an easy way to use hardware inserts. Sucks.~~

This was fixed in DP9.13. Digital Performer's hardware inserts work great now, with auto latency-compensation.

## Sequence window beat warping

{::nomarkdown}
<img src="/assets/General/Fixed.png" alt="Fixed">
</br>
{:/nomarkdown}


{::nomarkdown}
  <img src="/assets/StudioEvaluatione/warp.gif" alt="Beat warping in Studio One">
  <div class="image-caption">Warping a beat in Studio One</div>
{:/nomarkdown}

Beat warping in Studio One

Some DAWs like Logic, Studio One, Reaper and Pro Tools allow you to simply select a beat then drag it in to place. The audio is automatically stretched to fill any gaps.

DP has the ability to do this via 'Quantize Soundbites', but there is no way to manually grab a beat and move it. Even if you could, you couldn't snap it to the grid anyway.

## File browser

{::nomarkdown}
<img src="/assets/General/Improved.png" alt="Improved">
</br>
{:/nomarkdown}


{::nomarkdown}
  <img src="/assets/DP/CubaseMediaBay.png" alt="Media Bay in Cubase">
  <div class="image-caption">Cubase's amazing Media Bay</div>
{:/nomarkdown}

DP has no file browser. No tagging. No file search. Nothing. That's it. You have to use your OS's file management system. Good luck.

Cubase's Media Bay is a masterful example of how file browsing can be done. Look at it. It's __awesome__.

## Free Routing

{::nomarkdown}
  <img src="/assets/DP/ReaperMatrix.png" alt="Reaper's Routing Matrix">
  <div class="image-caption">Reaper's Routing Matrix</div>
{:/nomarkdown}

Some DAWs allow you to route midi or audio to anywhere. This can be very useful and dangerous. I would like this option very much.

## Mixer Undo

{::nomarkdown}
  <img src="/assets/DP/CubaseMixerUndo.png" alt="Mixer undo in Cubase">
  <div class="image-caption">Mixer history in Cubase 9</div>
{:/nomarkdown}

[I discussed DP's awesome undo]({% post_url 2016-12-11-Cool-Features-in-Digital-Performer...-Part-2%}) earlier in this series. Unfortunately it is missing a major component of having perfect undo: no mixer undo.

When going through the undo-tree in DP it is possible to create quite a mess if you've been making mixer changes while editing. The changes to the mixer are not saved, but everything else is. Of course if you accidentally move a fader or plug-in parameter then you are at the mercy of the gods to get things back to where they are.

## Better sounding time/pitch manipulation

{::nomarkdown}
<img src="/assets/General/Fixed.png" alt="Fixed">
</br>
{:/nomarkdown}

{::nomarkdown}
  <img src="/assets/DP/CubaseStretch.png" alt="Cubase stretch algos">
  <div class="image-caption">Cubase time stretching algos</div>
{:/nomarkdown}

DP shipped with "PureDSP" stretching in 1997. Maybe it's been updated since then, but it sure doesn't sound like it. Most other DAWs use [Elastique](https://products.zplane.de/elastique-pitch-2) which can sound quite good when using the correct algorithm.

Motu __really__ needs to update this. With manual warping and DP's already fantastic pitch editor, this would be a hit feature.

# Minor things

Most of this stuff isn't the end of the world, but when encountered it can be really annoying. Some of these things can eat up hours of unnecessary time.

Sometimes these minor things are the most annoying, because it's strange how they're not even included. Baffling at times.

## Multi-channel control in mixer (plug-ins)

{::nomarkdown}
  <img src="/assets/DP/qlink.gif" alt="Cubase Q-link">
  <div class="image-caption">Cubase's Q-Link</div>
{:/nomarkdown}

If you haven't experienced Cubase's Q-link then you need to. It allows you to select a number of channels then act upon them. You can add multiple plug-ins at once, remove multiple plug-ins at once and _even control them at once_.

In this day of console and tape emulations I feel that this feature is very important. While using Cubase I've greatly enjoyed being able to use [U-he Satin](http://www.u-he.com/cms/satin) and [Waves NLS](http://www.waves.com/plugins/nls-non-linear-summer) with such ease. It's addictive and sounds great.

## Stem export

{::nomarkdown}
<img src="/assets/General/Fixed.png" alt="Fixed">
</br>
{:/nomarkdown}

{::nomarkdown}
  <img src="/assets/DP/CubaseStems.png" alt="Stem Export in Cubase">
  <div class="image-caption">Export dialong in Cubase</div>
{:/nomarkdown}

What are stems? Stems are grouped renderings of tracks, usually rendered from 0:00 to the end of the project. Stems allow you to easily collaborate with other engineers/musicians even if you lack similar software. Most DAWs have ways to render multiple stems with a single setup which allows you to create a 'import and go' version of your project for collaboration.
DP requires some ridiculous aux-track to even setup a single stem export. Then you need to export each stem one by one. This is tedious, time consuming and error-prone.

Take note of the image above to see how easy it is to export stems and tracks in Cubase with the batch functionality.

## Larger GUI elements

{::nomarkdown}
<img src="/assets/General/Fixed.png" alt="Fixed">
</br>
{:/nomarkdown}

{::nomarkdown}
  <img src="/assets/DP/DPVelocity.png" alt="DP Velocity editing">
  <div class="image-caption">DP's velocity handles</div>
{:/nomarkdown}

DP is notorious for having some really tiny UI elements on normal non-HDPI displays. With high DPI displays DP is even worse, but just look at that picture! Those tiny arrows are handles for editing velocity. Can you imagine working with that?

Can you even see it?! You can't make them larger either, only hack the graphic at best. That's not the only example either!

DP has many 'handles' for objects or smart-tool changes that are ridiculously tiny too.

## Better metering

{::nomarkdown}
  <img src="/assets/DP/CubaseMeters.png" alt="Cubase meter options">
  <div class="image-caption">Meter options in Cubase</div>
{:/nomarkdown}

DP has peak metering, and it's not even oversampled. No K-system, no [EBU R128](https://tech.ebu.ch/docs/tech/tech3341.pdf), no [VU metering](https://en.wikipedia.org/wiki/VU_meter), no [ITU BS.1770-3](https://www.itu.int/dms_pubrec/itu-r/rec/bs/R-REC-BS.1770-3-201208-S!!PDF-E.pdf) and not even basic RMS metering.

To be able to do any professional-level production you are basically required to spend money on proper meter plug-ins. Then you must manage these plug-ins and their windows constantly as you work on your project. Annoying and basically a requirement.

## Better bus creation

{::nomarkdown}
  <img src="/assets/DP/CubaseBusCreation.png" alt="Cubase bus creation">
  <div class="image-caption">Creating groups in Cubase</div>
{:/nomarkdown}

Select tracks and create new Bus. Easy right? Not in DP.

[DP requires a workaround](https://www.youtube.com/watch?v=xD_LB_B-BDs) for creating a subgroup/bus. Such a simple task, but a source of annoyance.

# Neat things I'd like to have

I can live without most of this stuff, but why should I?!

## Modulation

{::nomarkdown}
  <img src="/assets/DP/RenoiseMod.gif" alt="Renoise's awesome modulation">
  <div class="image-caption">Renoise's meta devices in action</div>
{:/nomarkdown}

Controlling things with generate signals is fun and often useful too. DP would benefit from some way to generate control signals in real-time, modify them and attach them to arbitrary controls in the program.

In the gif above, renoise is generating real-time control signals to adjust parameters in [Fabfilter Pro-q 2](http://www.fabfilter.com/products/pro-q-2-equalizer-plug-in). These signals can be mixed, scripted, split, generated via audio and more. This is a great feature for electronic music and post-production.

## Automation clips

{::nomarkdown}
  <img src="/assets/DP/S1AutomationClips.gif" alt="Automation Clips in S1">
  <div class="image-caption">Automation clip functionality in Studio One</div>
{:/nomarkdown}

Automation clips aren't common yet in DAWs, but they are exceptionally useful. An Automation clip is a region that contains only automation data. These regions can be moved around freely and linked to other identical clips to allow you to have matching automation throughout the project.

Note in the image how all of the clips's automation changes by changing 1. Moving the clips around also moves all contained automation.

DP's automation, like most things in DP, is selection-based. There is no way to create a container for automation nor any way to mirror automation throughout the project.

That said, [DP's search window]({% post_url 2016-12-13-Cool-Features-in-Digital-Performer...-Part-4%}) still allows for some great ways to select specific automation.

## Non-destructive automation curves

{::nomarkdown}
  <img src="/assets/DP/LogicCurvedAutomation.gif" alt="Logic's curved automation">
  <div class="image-caption">Curvey non-destructive automation in Logic</div>
{:/nomarkdown}

DP does have automation curve drawing tools. These tools only place automation nodes based on the shape of what you draw though. There is currently no way to place 2 points and apply a curve between them that can be edited later. DP requires that you use the automation tools to scale/offset/remake the current automation nodes instead.

## Control Macros

{::nomarkdown}
  <img src="/assets/DP/S1macro.gif" alt="Control Macros in S1">
  <div class="image-caption">Macro controls in Studio One</div>
{:/nomarkdown}

Control macros allow you to have 1 control that changes a number of parameters at once. DP does have its console feature, but this is lacking for this type of functionality as one may expect. The console is also fully manual and lacks a unified display of all your parameters and settings. You can only edit and see 1 parameter at a time.

## Better included instrument plug-ins

DP's instruments suck. That's it.

## Working remote control app

{::nomarkdown}
  <img src="/assets/DP/S1Remote.png" alt="Studio One Remote">
  <div class="image-caption">Studio One's amazing remote app</div>
{:/nomarkdown}

[DP Control](http://www.motu.com/products/software/dp/control-about) exists, but it's basically broken. There's numerous thread about alternatives, but there's nothing directly from Motu.

Other DAW makers have apps available that far surpass DP Control even if it worked. Check out [Studio One Remote](https://presonus.com/products/Studio-One-Remote), [Cubase iC Pro](https://www.steinberg.net/en/products/mobile_apps/cubase_ic_pro.html), [Logic Remote](https://itunes.apple.com/us/app/logic-remote/id638394624?mt=8) and [Pro Tools Control](http://www.avid.com/products/pro-tools-control).

I will say that Pro Tools Control does work with DP, but it's not nearly as good as it could be. [Since DP supports the OSC protocol]({% post_url 2016-12-14-Cool-Features-in-Digital-Performer...-Part-5%}) you can use software like [TouchOSC](http://hexler.net/software/touchosc) to make your own controller, but that is tedious and will lack the functionality available in a properly made control application.

## VST3 support

{::nomarkdown}
<img src="/assets/General/Fixed.png" alt="Fixed">
</br>
{:/nomarkdown}

VST2 is dead. DP only supports AU and VST2.

[What's so great about VST3?](https://www.steinberg.net/en/company/technologies/vst3.html) Autosuspend, Dynamic I/O, Native window resize support, Sample accurate automation, better preset organization, VSTXML, better midi support, Audio input for instruments, multiple midi I/O, and more.

While the AU spec does allow for some of these features, DP is a cross-platform DAW and ideally should support VST3.

## Re-record

{::nomarkdown}
  <img src="/assets/DP/CubaseReRecord.png" alt="Cubase Re-Record">
  <div class="image-caption">Cubase's Re-Record feature</div>
{:/nomarkdown}

The value I get from this feature is immense. It's nothing more than 1 button press to: delete current recording, rewind to beginning, record again.

This workflow can be accomplished with an external macro, but having a native key for it is fantastic. I use this very frequently in Cubase.

## Cubase's Control Room

<iframe width="560" height="315" src="https://www.youtube.com/embed/G_4NgjlAxH4" frameborder="0" allowfullscreen></iframe>
I really can't explain this as well as a 15 minute video can. There are so many useful features here, even if you don't need the cue mixes.

Watch the video and be amazed. Why doesn't every DAW have this?!

Control Room allows you to control multiple monitors (with different mixes and master plugins), have different click feeds, panning, levels, downmix presets, routing, mono/stereo switch etc...

If you don't want to watch the video, just know that Control Room gives you a lot of options for quickly controlling what comes out of your speakers.

## Spectral Editing

<iframe width="560" height="315" src="https://www.youtube.com/embed/bftcT-rbybc" frameborder="0" allowfullscreen></iframe>
Once again, watch the video. Spectral editing is an __amazing__ feature, and DP already has a spectral view... but no editing.

# Bugs

{::nomarkdown}
<img src="/assets/General/Improved.png" alt="Improved">
</br>
{:/nomarkdown}

DP has some _serious_ workflow bugs.

* Nudge is broken (Fixed)
* Hardware inserts are broken (Fixed)
* Midi input to plug-ins is broken (Fixed)
* Tab key does weird things (Fixed)
* Snapshot automation is broke on many third-party plug-ins
* Track selector bugs (Fixed)
* Console bugs
* Possible to destroy your project with branched undo
* Possible to edit midi data when it's not visible (Fixed)
* Window sets broken

And most importantly, the much touted performance improvements in 9.1 actually destroyed performance for many people. The latest version of DP has a number of weird bugs as well with editing during playback and plug-ins not rendering. (Fixed!)

Every DAW has bugs, but DP appears to be aspiring to [n-Track](http://en.ntrack.com/index.php) levels of bugginess.

# Conclusion

A lot of those images are Cubase, aren't they? (Edit: DP10 fixed a lot of these things!)

DP isn't all bad though. Check out the posts I wrote about the cool stuff in it

[Part 1]({% post_url 2016-12-10-Cool-Features-in-Digital-Performer...-Part-1%})
[Part 2]({% post_url 2016-12-11-Cool-Features-in-Digital-Performer...-Part-2%})
[Part 3]({% post_url 2016-12-12-Cool-Features-in-Digital-Performer...-Part-3%})
[Part 4]({% post_url 2016-12-13-Cool-Features-in-Digital-Performer...-Part-4%})
[Part 5]({% post_url 2016-12-14-Cool-Features-in-Digital-Performer...-Part-5%})

# Support me!

If you appreciate the information presented then <a href="/DonateNow/">please consider joining patreon or donating!</a>






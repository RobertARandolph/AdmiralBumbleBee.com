---
layout: post
title: Things I hate about Logic Pro X and Conclusion!
comments: true
date:   2018-02-04_09:44:36 
categories: music
tags: ['DAW', 'Logic Pro X']
image: /assets/Logic/LogicScreen.png
description: A list of things that I think could be improved in Logic Pro X and the conclusion of my 30 day review.
---

{::nomarkdown}
  <img src="/assets/Logic/LogicScreen.png" alt="Logic Pro X">
  <div class="image-caption">Logic Pro X in action</div>
{:/nomarkdown}

It's time for the post that everyone seems to love: when I talk about the stuff I dislike about a DAW.

First things first: If you see anything that's wrong or know of a _great_ work around then **please leave a comment**. I will gladly update the post with the information if it's good.

There won't be too many images here, so be prepared for a bit of reading and not many eye-catching screenshots. I've split things in to categories as well so that you can see the portions that are of most interest to you.

These grips apply to Logic 10.4. I wrote a good portion of this before 10.4, but I tried to make sure I erased anything that was improved with the update. If I missed something then that's mea culpa, so please correct me.

**Oh right, and this is the last post in the series**! My ultimate conclusion is at the end!

Let's get on it.

**Parts in this series**: 
* [Cool things in Logic Pro X Part 1]({% post_url 2017-12-18-Cool-things-in-Logic-Pro-X-Part-1 %})
* [Cool things in Logic Pro X Part 2]({% post_url 2017-12-23-Cool-things-in-Logic-Pro-X-Part-2 %})
* [Cool things in Logic Pro X Part 3]({% post_url 2018-01-05-Cool-things-in-Logic-Pro-X-Part-3 %})
* [Cool things in Logic Pro X Part 4]({% post_url 2018-01-09-Cool-things-in-Logic-Pro-X-Part-4 %})
* [Cool things in Logic Pro X Part 5]({% post_url 2018-01-13-Cool-things-in-Logic-Pro-X-Part-5 %})
* [Logic Pro X Tips & Tricks and more cool things]({% post_url 2018-01-16-Logic-Pro-X-Tips-and-Tricks %})
* [Logic Effects Review]({% post_url 2018-01-22-Logic-Effects-Review %})
* [Cool things in Logic Pro X Part 10.4]({% post_url 2018-01-26-Cool-things-in-Logic-Pro-X-Part-10-4%})
* [Logic Instruments and MIDI Effects Review]({% post_url 2018-01-31-Logic-Instruments-and-MIDI-Effects-Review %})

<!--more-->

# Contents
{:.no_toc}
* TOC
{:toc}

# FX

## No Search

Adding FX in Logic is an exercise in menu diving. Even though you can [organize plugins pretty nicely]({% post_url 2018-01-09-Cool-things-in-Logic-Pro-X-Part-4 %}#plugin-organization), selecting those plugins requires visually parsing and navigating multi-tiered menus.

I personally much prefer a search box. Another excellent option is the way that [Studio One handles it]({% post_url 2016-04-19-Studio-One %}#effects-organization) where there's an organized browser with screenshots.

Regardless of how it's done, the way Logic does it is probably the worst.

## Adding plugins

{::nomarkdown}
<img src="/assets/Logic/Bad/FXslot.png" alt="Tiny FX Slot">
<div class="image-caption">Tiny FX Slot for adding in Logic</div>
{:/nomarkdown}

When adding plugins there's a very tiny bar for you to select. I've included a screenshot above with an arrow showing the tiny area.

In order to add an FX when there's an FX present you must click that tiny little bar. Yes, I'm talking about that space below the FX.

It's a _HUGE_ pain. I think that I spend about 20% of my time mixing in Logic fumbling with that stupid little bar. Maybe that's a bit hyperbolic, but it sure feels like it sometimes.

## Removing plugins

You must click that up/down arrow shown next to Chromaverb [above](#adding-plugins) then click a menu item labeled 'No Plug-in' to remove a plugin.

You can't select it and hit delete. You can't swipe it off. You can't do anything except target a tiny little GUI widget and browse a menu.

Blergh.

## Only AU

This is a minor nitpick, but Logic only supports AU's natively. There's a [VST to AU adapter](https://www.fxpansion.com/products/vst-au-adapter/) and the even better [Metaplugin](https://ddmf.eu/metaplugin-chainer-vst-au-rtas-aax-wrapper/) that allow you to run VSTs in Logic, but it'd be nice if this was just integrated.

Most plugins are available as Audio Units though, so it's not a big deal.

# Audio Editor

## Smart Tempo multitrack

Smart Tempo [is awesome]({% post_url 2018-01-26-Cool-things-in-Logic-Pro-X-Part-10-4 %}#smart-tempo) but currently it can only be applied in the audio editor, and not to multitrack parts.

That means that adjusting multitrack recordings to tempo is still the only manual method. Hopefully this is improved in the future.

## De-reference file changes

There's some functions that are only possible in the 'File Editor'. If you make changes to a file, then all regions referencing that are changed.

Certain actions like 'Remove DC Offset', 'Reverse' and 'Normalize' are only available in the file editor, but you may not want to modify all regions referencing that file. A feature is needed to create new a new region when doing certain actions.

# Piano Roll Editor

## Single MIDI controller lane

There's a single controller lane in the MIDI editor. Often there's times where various controller data need to line up or be synchronized in some way, and having only a single lane makes it rather difficult.

If you work in the arrange view and set the track to [region based automation]({% post_url 2017-12-18-Cool-things-in-Logic-Pro-X-Part-1 %}#region-based-automation) then you can access multiple MIDI data lanes at once. The issue is that the vertical resolution is somewhat limited and you lose a visual connection with the MIDI note data. Turning on automation mode in the Arranger area also increases the vertical space every track uses, which can be annoying for larger projects.

## Menu-ized Controller selection

Want to select some MIDI data to edit? Get ready to menu dive! Not only that, but since the integrated editor is at the bottom of the screen you will also need to scroll the menu manually. If you use the pop-out editor `command-4` then that's not as much of an issue.

It's just an unpleasant experience in general. 

## Note entry snap

As far as I can tell, there's no way to easily select the length of the next inserted note. Logic uses the length of the previously inserted note when entering notes in the piano roll editor.

The workaround is to select a note of the length you wish to insert, then insert a note. Logic uses the last selected note's length as the inserted note's length. You can also hold option when inserting the note to drag-adjust the length.

I still much prefer to be able to press a hotkey to select the inserted note length, or constrain inserted notes to snap.

## Better MIDI manipulation tools

Logic has no easy ways to adjust butted midi notes, selections of midi notes or any other major ways to adjust MIDI data.

[Go see what's possible in Reaper](https://forum.cockos.com/showthread.php?t=176878). I'm serious... go look. These tools can be quite the time saver.

They also apply to MIDI CC.

# Key Commands

This section may look a bit bare. That's because 10.4 fixed 6/7 of my issues with key commands. Hooray Apple?!

## Macros

Logic has no Macro facility. There's no integrated way to chain commands together to be triggered by a single key press.

Of course, you can use [AppleScript](https://en.wikipedia.org/wiki/AppleScript) to do this, but who wants to mess with that?

# Track organization

## Single layer Track Stacks

Track folders, which are purely organization tools, can only be 1 layer deep. That means you can have a folder with tracks. You can not have folders within folders.

## Single layer Summing tracks

Summing stacks, which mix the audio of the containing folders, can only be 1 layer deep. You can not have summing stacks with summing stacks in them without some hacky workarounds that aren't worth the effort.

I butt heads with this one constantly when working in Logic. Especially so when dealing with drumkits where I want a 'Drums' summing stack, and then a summing stack for snare (top/bottom mic) and kick (kick in, kick beater, front-of-kick). I want those kick and snare summing stacks inside the drum summing stack. No can do in Logic.

## No track search

{::nomarkdown}
  <img src="/assets/Reaper/TrackMan.gif" alt="Track Manager">
  <div class="image-caption">Track Management in Reaper</div>
{:/nomarkdown}

There is no way to search for a track in a project. If you want to find a track in Logic then you have to _scroll_, **scroll**, **AND SCROLL**.

Combine that with the fact that your track folders and summing stacks only being one layer deep, and flying around a large project becomes an exercise in speed reading. 

## Track view sets

{::nomarkdown}
  <img src="/assets/Reaper/TrackView.gif" alt="Track Views">
  <div class="image-caption">Track view sets in Reaper</div>
{:/nomarkdown}

Track view sets is an idea that allows you to setup a selection of tracks that you can instantly show/hide or jump to. This is an excellent feature for navigating large projects.

# Mixer

## No mixer reset

I really like the ability to reset the mixer. Click one button and all the effects are removed, all automation is removed, all faders are reset, all Aux routing are removed.

You can't do that in Logic very easily. There is `Mix->Delete Automation->Delete All Track Automation`, then you can select all the tracks and option click controls while manually removing each FX slot, deleting and re-adding auxes... but a simple button would be nice.

## Can't move mixer channels

I hear this complaint a lot, but it doesn't really bother me that much.

Logic doesn't allow you to move Mixer channels in the mixer. At best you can change them in the Arranger area, and use the 'Tracks' view in the mixer. That's what I do.

This does seem to be an issue for a lot of Logic users though, so I am mentioning it.

## Tiny faders

{::nomarkdown}
<img src="/assets/StudioEvaluatione/resize.gif" alt="Resizable mixer strips">
<div class="image-caption">Resizable Mixer Strips In Studio One.</div>
{:/nomarkdown}

[I love resizable mixer strips]({% post_url 2016-05-22-Studio-EvaluatiOne %}#resizable-mixer-strips-are-amazing). I _really dislike_ tiny fader areas.

Logic's mixer is a fixed size. The faders on my screen are only 1.25"/31mm tall. That is so small!

As far as I'm aware, there's no fine control for the faders either. So you can't press a modifier key and scale the cursor movement to make the fader control finer.

## Fader quantized values

Fader values are quantized somehow. I've heard that there's only 128 values, but I don't think that is correct.

Regardless, if you want to enter a value of -34.6dbFS in to the fader, it gets changed to -34.5dbFS. If you click to enter again it may say -34.4dbFS.

The quantization changes depending on how low the fader is. It's also not consistent. Sometimes I can enter -40.3dbFS, and sometimes I can't.

These tiny values aren't important to me. What is important is how inconsistent the data entry appears to be and how this could be solved with better faders and data entry.

## Automation latency compensation issue

If you use a plugin that causes excess latency, then Logic fixes this latency by compensating for it in playback.

However, Logic does not appear to compensate this for automation correctly. If you have a plugin that causes latency and automate parameters on it, then all of the automation will be out of time for the previous plugins.

It took me a while to track this one down. I suspect that if you encounter it then you may be in for a long search as well. It's a subtle issue that can really screw up a mix.

## Automation is off slightly

I recently needed to have a very precise mute in a track. The visual automation line was perfectly lined up and I have `Preferences->Audio->General->Sample Accurate Automation->Volume, Pan, Sends, Plug-in Parameters` turned on.

Except the automation was always slightly late!

It turns out that for _very precise_ automation, the automation needs to be slightly early. I can not figure out why this is, or what the exact value is to offset. I just know that it needs to be early.

## Solo summing stacks doesn't work 'right'

If you solo a track in a summing stack, then you hear all the tracks in the summing stack, not the track you soloed.

The work around is to engage solo mode with `control-s` and use that for selecting tracks. The problem is that this causes a delay before the solo happens, so quickly soloing tracks is slow and awkward.

## Plugin bypass

There's no way quickly bypassing a row or column of plugins. There's no way to bypass all plugins in a project either.

## Clip gain

You can already adjust the gain of a clip by adjusting the 'Gain' box in the track inspector, but that is not very convenient.

A number of other DAWs have a line, knob or similar on the region that lets you directly change the gain of the region. Much nicer than digging around in the track inspector, and it also lets you easily see the changes that you've already made.

## Single layer VCAs

VCAs can't be assigned to VCAs. Trees of VCAs or using VCAs to adjust previous VCA automation is something I do often. You can not do this in Logic.

VCAs are only one-to-many assignment.

## No native effect modulation

{::nomarkdown}
  <video autoplay loop muted class="gifvid">
    <source src="/assets/Bitwig/Modulators/Modulators.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <div class="video-caption">Simple synth made with modulators in Bitwig!</div>
{:/nomarkdown}

Instruments can easily use the [modulator]({% post_url 2018-01-31-Logic-Instruments-and-MIDI-Effects-Review %}#modulator) to modulate instrument parameters. I also described a hacky work around to use this on effects, but there's no native modulation.

If you don't know what could be possible then go check out [how Bitwig does it]({% post_url 2017-06-23-Bitwig-Modulators %}). When you realize how cool modulators can be on effects, Logic can seem a bit disappointing for the creative musician.

## Channel Strip polarity

I want a polarity inversion control in the mixer! Always! There isn't one in Logic. You have to use a plug-in.

## Better automation tools

{::nomarkdown}
<img src="/assets/StudioEvaluatione/transform.gif" alt="Studio One Automation Transform">
<div class="image-caption">Studio One Automation Transform</div>
{:/nomarkdown}

Look at the [tools in Studio One]({% post_url 2016-06-09-Studio-AutomatiOne %}#editing-automation), especially the transform tool. **THAT** is how you handle automation.

Logic seriously needs tools like this.

## Automation parameter selection

{::nomarkdown}
  <img src="/assets/Reaper/AutomationFilter.png" alt="Automation Highlight">
  <div class="image-caption">Find Automation Stuff in Reaper</div>
{:/nomarkdown}

Logic Pro X 10.4 added a feature that updates the current automation track to the last touched parameter. This is located in the menu `Mix->Autoselect Automation Parameter in Read Mode`. That is nice.

However it would be much nicer if you could search the list of automatable parameters in a search box. I don't want to have to go hunting around in menus or plugin GUIs to find a parameter sometimes. I just know what I want, and I know where I want to put it.


## Monitor section

<iframe width="560" height="315" src="https://www.youtube.com/embed/G_4NgjlAxH4" frameborder="0" allowfullscreen></iframe>

The [monitor section in other DAWs]({% post_url 2017-09-18-Mixbus-32c-The-Mixer %}#monitor-section) is very useful if you are working in an environment with more than 1 listening option, or if you have multi-channel output routing of any sort. It's also nice for decoupling your master effects for rendering from the effects you may want simply for listening.

I _really_ like the monitor sections in DAWs like Mixbus [and Cubase]({% post_url 2016-07-11-CubaSerenity %}#control-room) and it'd be fantastic if Logic could include something similar.

Just watch the video above to see how awesome this feature is.

## Metering options

{::nomarkdown}
  <img src="/assets/DP/CubaseMeters.png" alt="Cubase meter options">
  <div class="image-caption">Meter options in Cubase</div>
{:/nomarkdown}

Logic only has peak meters in the mixer. At the very least it'd be nice to have RMS, but a variety of metering systems would be beneficial as well.

## Better freeze

{::nomarkdown}
<img src="/assets/Logic/Bad/FreezeOptions.png" alt="Freeze Options">
<div class="image-caption">Freeze Options in Reaper</div>
{:/nomarkdown}

Logic's freeze is strange. You have 2 "points" where you can freeze: source and pre-fader. 'Source' means just the audio/instrument is frozen. 'Pre-fader' means the effects are _all_ rendered.

Then you hit play. Not sure why you hit play, but it's strange to forget that you clicked to freeze, then you hit playback and the screen goes crazy while it freezes. Freezing should start automatically when pressing the button, and a cancel dialog should appear.

The main issue though is that you can't choose the point where to freeze. What if I don't want to freeze ALL of my FX? Maybe I just want to freeze everything up to a certain point? What if I want to freeze an Aux track? (you can't!).

Freezing is very useful still for people using large instruments, but it could be more flexible.

## More track group options

{::nomarkdown}
<img src="/assets/Logic/Bad/TrackGroup.png" alt="Track Grouping Options">
<div class="image-caption">Track Grouping options compared to Digital Performer</div>
{:/nomarkdown}

Look at Logic's (left) track grouping options compared to [Digital Performer's]({% post_url 2016-12-11-Cool-Features-in-Digital-Performer...-Part-2 %}#track-grouping) (right). Logic could have so much more granularity in the available options.

This may not seem like much, but when you're working with a lot of tracks you begin to find similarities between them that should be synchronized. Having more selective granularity in the grouping options allows you to make things work 'how they should' without having to think about the context of the project and where you may need to make matching changes eleswhere.

# GUI

## Plug-in GUIs

{::nomarkdown}
  <img src="/assets/Logic/Instruments/ESM.png" alt="ES M">
  <div class="image-caption">ES M in Logic</div>
{:/nomarkdown}

A lot of the plugins are very ugly. Go scroll [here]({% post_url 2018-01-22-Logic-Effects-Review %}) or [here]({% post_url 2018-01-31-Logic-Instruments-and-MIDI-Effects-Review %}) to see.

## Themes

Official themes or some way to colour Logic would be rad. I don't like the default moderately dark colours and it'd be nice to have a way to change it.

## Screen Flash

When you make an error in Logic, the whole screen flashes. Usually it's annoying, but occasionally it's rather startling. It's just a quick flash of an all white screen.

I can find no way to turn this off!

# Score Editor

I don't use the score editor much in Logic Pro X, but the few times I've delved in to it I've found some bothersome things...

## Rest placement

There doesn't appear to be a way to easily change the vertical placement of rests. Often it's necessary to have rests aligned to voices for easier reading.

Logic sometimes puts rests in the wrong place so they collide with note heads. I haven't been able to figure out how to fix this.

## Magnetic Layout

[Sibelius has a feature called Magnetic Layout](http://www.sibelius.com/products/sibeliusedu/features/magnetic_layout.html) that makes placing markings much easier.

Logic _almost_ does this, except it's very finicky. The alignment and placement of markings in Sibelius tends to be more intelligent and readable. Often in Logic I ended up with lots of overlapping markings, or having to retroactively adjust things across the whole score when making a minor adjustment elsewhere.

## Improved lyric entering

Writing lyrics in Logic is a pain. I really don't know what can be done _specifically_ to improve it, but the way it is now requires constant adjustment of lyric position and spacing.

The simple act of typing in Lyrics is also error-prone. A more intelligent lyrical editor with shortcuts that allow you to easily 'attach' lyrics to notes would be nice.

## Edit bar lines

I don't know if this is possible, but I could not figure it out: editing bar lines by dragging.

Sometimes uneven bar sizes are necessary, or manually spaced bar lines. Other programs allow you to simply move the bar line and things are spaced as necessary. I was unable to figure out how to reliably 

## Entry of tuplets

Triplets are easy to enter, but 5-6-7-9+ tuplets are notless easy. There's a number of modern musical styles that rely on complex polyrythms or subdivisions, and I encountered this somewhat frequently.

There is an 'n-tuplet' tool, but the process is a bit cumbersome. I feel like this could be improved with a simple shortcut to add tuples to a current note grouping. From there options could be accessed via a menu or pop-up dialog.

# Extra features

## Looper

<iframe src="https://www.youtube.com/embed/hiSTeVlinAg?ecver=2" width="560" height="315"></iframe>

I'd love to have a proper overdubbing looper like [Ableton's Looper](https://www.ableton.com/en/manual/live-audio-effect-reference/#looper) or better still, like [Digital Performer's POLAR]({% post_url 2016-12-10-Cool-Features-in-Digital-Performer...-Part-1 %}#polar).

If you're not familiar with loopers in this context, it's a feature that allows you to record layers _while hearing the previous layers_. Logic's cycle recording does not allow you to easily hear previous layers.

When doing chorus parts, self-overdubbing guitar or other creative uses, it's important that you hear previous passes. Logic does not have this ability natively.

## Chunks


{::nomarkdown}
	<img src="/assets/DP/DPSongSetup.png" alt="Chunks in Digital Performer">
	<div class="image-caption">Chunks in Digital Perfomer</div>
{:/nomarkdown}

Yeah, that DP feature. [I wrote about chunks already before]({% post_url 2016-12-12-Cool-Features-in-Digital-Performer...-Part-3 %}#chunks), so please go read about that.

Logic has a feature [called folders](https://support.apple.com/kb/PH13058?locale=en_US) which offers a minor subset of sequence-chunk features, but it's really not even close.

If you do anything with film scoring, orchestral work, large SFX or Foley projects or large band records, then you would not stop until you had Chunks. It greatly simplifies the process of working with a large set of musical data that's naturally part of a greater whole. _I LOVE CHUNKS_.

## Logical Search

{::nomarkdown}
	<img src="/assets/DP/SearchWindow.png" alt="Digital Performer Search">
	<div class="image-caption">Digital Performer Search</div>
{:/nomarkdown}

Searching for data to act on is something that happens fairly frequently in most workflows. You may not realize that you do it, but you do. You know the routine: you scroll a bit, spin your cursor in circles, scroll some more, click an item, select a few notes, unselect a few notes, unselect the wrong notes, swing your cursor around in rage...

Enter the logical search. This feature allows you to select data by its attributes. Once the data is selected then you can act on it as necessary.

DP isn't the only DAW with this feature btw, it's just the image I grabbed.

## Basically everything in Mixbus.

I did a review of Mixbus and I covered some cool features in Mixbus:

* [Cool things Part 1]({% post_url 2017-08-16-Cool-things-in-Mixbus-Part-1 %})
* [Cool things Part 2]({% post_url 2017-08-26-Cool-things-in-Mixbus-Part-2 %})
* [Cool things Part 3]({% post_url 2017-09-01-Cool-things-in-Mixbus-Part-3 %})
* [Cool things Part 4]({% post_url 2017-09-05-Cool-things-in-Mixbus-Part-4 %})

Every. Single. Thing. I want it all. Logic has nothing on Mixbus on any of these points, and they would all be excellent improvements and workflow enhancements.

## Latch Preview automation

{::nomarkdown}
  <img src="/assets/Reaper/Automation.png" alt="Automation">
  <div class="image-caption">Reaper Automation</div>
{:/nomarkdown}

Latch preview automation allows you to select an area to 'preview' automation before it's applied without messing with or using your existing automation.

If you work with dialog then this is something that you'd love if you don't have it already. It makes the process of automating sections of audio simple and pleasant.

# Meta

## No third-party beyond AU

There's no official support for Themes, extension Scripts (outside of the [scripter]({% post_url 2018-01-31-Logic-Instruments-and-MIDI-Effects-Review %}#scripter)) or anything really in Logic.

## Communication

Communicating with Apple about issues with Logic is basically not possible unless you are a tester. You simply submit your issue in to a black box and wait. Rarely you may get a response, but that almost never happens.

Meanwhile you can only sit there and wonder if anything will happen. Good luck!

# Conclusion

It's been a long 7 weeks [since I started]({% post_url 2017-12-14-30-days-of-Apple-Logic-Pro-X %}). This was only supposed to be a 30 day review, but some things got in the way.

There's really not much to say here. Logic is the king when it comes to:

* Included content
* Mac integration
* Feature set to Ease-of-use ratio

Logic also has fantastic communities throughout the web like [LogicPro Help](https://www.logicprohelp.com), [LUG](https://logic-users-group.com/forums/) and others.

I have zero plans to switch to Logic for my day to day work, because I _far prefer_ the configurable workflow in Reaper, but I think that for the personality of the average musician that just "wants to get things done"; Logic is the ultimate choice on macOS.

I could go on and list how basically every other DAW does a bunch of things better than Logic, but Logic does _most_ things well enough. If I was working in a high-pressure live recording environment I'd probably use [Mixbus](http://mixbus.harrisonconsoles.com) or [Pro Tools](http://www.avid.com/pro-tools). If I was working with complex scoring duties I'd use [Digital Perfomer](http://www.motu.com/products/software/dp) or [Cubase](https://www.steinberg.net/en/products/cubase/start.html). If I was working heavily with electronic dance music and live performance then [Ableton Live](https://www.ableton.com) or [Bitwig](https://www.bitwig.com). If I really loved flexible workflows and self-sufficiency then I use [Reaper](http://reaper.fm) (and that _is me_).

Let's not ignore the elephant in the room though, you are tied to Apple now. You need a mac, [of some sort](https://www.tonymacx86.com), to run Logic. That means that you're tied to their difficult-to-upgrade hardware. You're tied to their aggressive OS updates and frequent breaking of backwards compatibility. You're tied to all those things that make Apple evil in the eyes of many...

Do **I** care? No. I love macOS. I like Apple products. I enjoy using the Apple ecosystem. This may not be for everyone though, since if you ever want to access your Logic projects after switching to another vendor then you will need a mac around somewhere.

If you've paid the 'Apple Tax' though, that's bought you access to Logic Pro X. Logic used to cost nearly $1k, and it was _far_ less capable and came with _much_ less. Now you can get it [for **less** than $199]({% post_url 2018-01-16-Logic-Pro-X-Tips-and-Tricks %}#purchasing-logic-pro-x-cheaply). That's an amazing deal. Logic has also had [4 **major** updates](https://support.apple.com/en-us/HT203718) _for free_. Those updates would cost you around $150-200 each for another DAW. They were free for Logic users.

I don't think that there's any compelling reason for a mac user, that does audio, to not own Logic. If you have a mac and you are looking for a DAW then it's the de-facto starting point. You may not be perfectly happy with it over time and decide to choose another product that has more specialization, but there's a very good chance that Logic is sufficient no matter what. I've also learned during this review, specifically while writing this post, that when Logic has a bunch of things you hate then you may be surprised by a large update. Logic is always improving and thusfar it's been for only a single down payment.

So if you've read these reviews and you're not sure if you should own Logic, then you probably should. If you already know of a product that works how you want or if you're mostly happy with what you're using then I strongly doubt that Logic is going to totally WOW you. If you're new to music or music production then just buy it.

# Support Me!

This post took 13 hours to research, photograph, write and edit. If you appreciate the information presented then <a href="/DonateNow/">please consider joining patreon or donating!</a>








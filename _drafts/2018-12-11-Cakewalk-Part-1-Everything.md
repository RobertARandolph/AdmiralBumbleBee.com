---
layout: post
title: "30 days with Cakewalk - Part 1: Everything."
comments: true
date:   2018-12-11_18:35:35 
categories: music
tags: ['Cakewalk', 'DAW']
image:
description: First impressions
series: Cakewalk
---


**Other posts in this series**:

{% assign cakes = site.posts | where: "series", "Cakewalk" | sort: 'date' %}
<ul>
{% for my_page in cakes %} 
    {% if page.url != my_page.url  %}
        <li><a class="page-link" href="{{ my_page.url | prepend: site.baseurl }}">{{ my_page.title | split: '-' | last }}</a></li>
    {% endif %}
{% endfor %}
</ul>

<!--more-->

**If you have any questions or comments, please comment below! I read every comment and respond to most.** No registration is necessary to comment, so don't be shy.

# Contents
{:.no_toc}
* TOC
{:toc}

# First Impressions

## Love it

### GUI Configurability

{::nomarkdown}
<img src="/assets/Cakewalk/GUI.png" alt="GUI Configuration">
<div class="image-caption">GUI Configuration</div>
{:/nomarkdown}


## Annoyances

### No underrun alert

### Notifications

{::nomarkdown}
<img src="/assets/Cakewalk/Notifications.png" alt="Notifications">
<div class="image-caption">Notifications</div>
{:/nomarkdown}

### Device Alert

{::nomarkdown}
<img src="/assets/Cakewalk/NewAudio.png" alt="New Audio Device?">
<div class="image-caption">New Audio Device?</div>
{:/nomarkdown}

This is the single reason that this interview is being cut short of 30 days. I get this dialog 4-5 times an hour and it interrupts _EVERYTHING_. Nothing else can happen until the dialog is dealt with.

It's caused by a secondary HDMI-connected display. Anytime it's turned on/off Cakewalk will display the dialog. Cakewalk also displays the dialog randomly based on the same device. I've investigated and logged all device switches on my machine, and found that there's no glitches happening on the system level.

I also get this dialog if I alt-tab away from Cakewalk for more than ~15 seconds.

### Project Settings

{::nomarkdown}
<img src="/assets/Cakewalk/ProjectSettings.png" alt="No Project Settings?">
<div class="image-caption">No Project Settings?</div>
{:/nomarkdown}

There aren't any... apparently?

### Analytics

{::nomarkdown}
<img src="/assets/Cakewalk/Analytics.png" alt="Analytics on by default?">
<div class="image-caption">Analytics on by default?</div>
{:/nomarkdown}

### Empty MIDI Clips

{::nomarkdown}
<img src="/assets/Cakewalk/EmptyMIDI.png" alt="This isn't possibly">
<div class="image-caption">This isn't possibly</div>
{:/nomarkdown}

There is no way to insert a MIDI clip other than to drag one in, use the in-line piano roll or some wierd workarounds. Empty MIDI clips aren't even possible apparently.

For such a common workflow, it's strange that this isn't possible.

### Offline Undo

{::nomarkdown}
<img src="/assets/Cakewalk/UndoHistory.png" alt="No Offline Undo History">
<div class="image-caption">No Offline Undo History</div>
{:/nomarkdown}

If you close your project, your entire undo history is gone for good. Made a mistake and need to undo? Well, you better just never close your computer.

Then again [Windows may not let you keep your system running as-is anyway]({% post_url link2018-12-15-Why-I-hate-Windows %}#windows-update).

### Selecting Multiple Tracks

{::nomarkdown}
    <video autoplay loop muted class="gifvid">
        <source src="/assets/Cakewalk/MultiSelect.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <div class="video-caption">Multiple Track Selection</div>
{:/nomarkdown}

I had to google how to select multiple tracks. It _only_ works if you click the track numbers. There's plenty of surface area to click a track to make it the focus, but that does not select it.

The track selection doesn't follow your "Console selection" (not sure what this is called) though. You can have a track selected via the number, but another track selected and shown in the [mix strip](#mix-strip). So there's 2 ways of selecting tracks for something to happen to them.

What a strange and unnecessary design decision.

### Even-number starting stereo recording

{::nomarkdown}
<img src="/assets/Cakewalk/OddTrack.png" alt="Even number stereo track isn't possible?">
<div class="image-caption">Even number stereo track isn't possible?</div>
{:/nomarkdown}

If you want to record a stereo track where the left channel is an even-numbered track, then you're out of luck I think. I was unable to figure out how to do this if it is possible.

This may not be an issue for most people, since they can just re-order their inputs. I have outboard equipment that necessitates not driving myself crazy re-plugging a dozen things just because of some goofy software limitation.

### Clip based grouping

Ugh. [Reaper](http://reaper.fm/) does this too. Clips are grouped instead of tracks. Here's why I don't like this...

When I record to a track, I implicitly am indicating that I want that track to contain a specific sound. The track will always have that sound.

When I want to edit multiple "things" together, those things are parts that have some semantic association. Perhaps they were recorded together or created as part of a single larger sound.

Clip grouping ignores this intention and causes the user to maintain multiple groups on a track even though the track clearly implies a single sonic entity. Clip grouping assumes that at sometime, a track will no longer be part of the same larger entity. To put it more simply, it means that the software designer thinks that the track will, at some time, no longer be part of a group even if it was at some other time. Preposterous!

Imagine I record a drumset. I always want my kick, snare and overheads to be grouped. _Always_. I may temporarily suspend the grouping to change the timing of an _entire track_, but I want them to always be grouped regardless of what time it is. I don't magically want my snare to not be grouped with the rest of the drums at some other point in the song!

Clip grouping allows you to have parts of tracks that do not retain associations to other tracks, since clips at one point in time may be grouped, but clips at another point in time may not be.

Clip grouping causes any workflow where the track is the primary entity to have multiple failure modes. Clips can become desynced or un-grouped, even though the association between the _tracks_ remains.

All that said... Cakewalk's Clip Selection Groups don't work very well. I found it easy to make an edit to a clip that did not propagate because the selection didn't occur when I clicked a clip! It appears that you need to _explicitly_ activate the clip selection group by clicking the clip's top bar or using the right-click drag selection.

[Transient editing](#audio-snap) doesn't work across groups either.

So not only does Cakewalk use what I think is the worst edit-group method, but it does it poorly. It's easy to make mistakes that you may not notice and end up with tracks that _should_ remain edit-locked, that don't.

### Hanging notes

When working with digital synths (VSTi), I encountered hanging notes many times. This isn't uncommon when working in a DAW, but what _was_ bothersome is that I was unable to find how to send an "All Notes Off" to kill any stuck notes without Googling.

It's the little MIDI icon with a cross through it on the transport, under the time display.

It also doesn't always work.

### Cakewalk Application has stopped working

{::nomarkdown}
<img src="/assets/Cakewalk/Hang.png" alt="Hung like a horse">
<div class="image-caption">Hung like a horse</div>
{:/nomarkdown}

I've seen this dialog a good bit. I've seen it the most after recording long sections of audio, and when Cakewalk hangs I have no way to recover what was recorded.

### Cakewalk Projects

{::nomarkdown}
<img src="/assets/Cakewalk/CakewalkProjects.png" alt="c:\CakewalkProjects">
<div class="image-caption">c:\CakewalkProjects</div>
{:/nomarkdown}

Why are Cakewalk Projects stored in the root of the C drive by default?

They should be in C:\Users\name\Documents or C:\Cakewalk Projects\Music like everything else is supposed to do!

# Audio

## Basic Editing

## Audio Snap

## Asset Management

## Drum Replacer

{::nomarkdown}
<img src="/assets/Cakewalk/DrumReplacer.png" alt="Drum Replacer">
<div class="image-caption">Drum Replacer</div>
{:/nomarkdown}

Does not auto-scroll sometimes.

Desyncs sometimes.


## VocalSync

# Mixing

## Console

### Mix Strip

{::nomarkdown}
<img src="/assets/Cakewalk/MixStrip.png" alt="Mix Strip">
<div class="image-caption">Mix Strip</div>
{:/nomarkdown}

### ProChannel

{::nomarkdown}
<img src="/assets/Cakewalk/ProChannel.png" alt="Pro Channel">
<div class="image-caption">Pro Channel</div>
{:/nomarkdown}


## Plugins

### Give all keystrokes to plugins

{::nomarkdown}
<img src="/assets/Cakewalk/AllKeystrokes.png" alt="">
<div class="image-caption"></div>
{:/nomarkdown}

This "feature" is awful. Most other DAWs do this relatively intelligently, but Cakewalk requires that you constantly turn this feature on/off to use typing keyboard input to your plugins, or to Cakewalk itself.

I find myself needing to turn it on/off to type in values in a plugin most frequently.

# MIDI

## Basic Editing

I'm not particularly happy with basic MIDI Editing in Cakewalk. The smart tool's hot regions are small, so changing what the tool does requires hovering over tiny portions of notes.

The editing is tool-based, but the tools are far away in the main control bar and utilize the F-keys by default to switch to various tools. Most of the tools have varying modes, and the default setup is that you need to press the key multiple times to cycle through the various modes _and_ watch what the currently selected tool is! Terrible workflow! It's almost necessary to go and create new shortcuts for the various commonly used tools, or spend your time in "mode-cycle and watch" limbo.

And on some keyboards these tool keys may clash with other functions you utilize with Windows.

## Per clip editors

{::nomarkdown}
<img src="/assets/Cakewalk/EditorSelector.png" alt="Editor Selector">
<div class="image-caption">Editor Selector</div>
{:/nomarkdown}

Each MIDI clip can be set to utilize a different MIDI editor view by clicking the icon in the upper right of the Clip.

## Fret Pane

{::nomarkdown}
    <video autoplay loop muted class="gifvid">
        <source src="/assets/Cakewalk/FretPane.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <div class="video-caption">description</div>
{:/nomarkdown}

When using the staff view, a 'fret pane' can be opened to show a guitar fretboard which displays the notes being played at the current time.

I found that it didn't do the best job of creating playable chords. Many times there'd be a note way up or way down the fretboard when it could have been easily moved to an adjacent string so the entire part would be human-playable

## Step Sequencer

{::nomarkdown}
<img src="/assets/Cakewalk/StepSequencer.png" alt="Step Sequencer">
<div class="image-caption">Step Sequencer</div>
{:/nomarkdown}

## Transform Tool



## Pattern Tool

{::nomarkdown}
    <video autoplay loop muted class="gifvid">
        <source src="/assets/Cakewalk/PatternTool.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <div class="video-caption">Pattern Tool</div>
{:/nomarkdown}

## MIDI Track Tools

{::nomarkdown}
<img src="/assets/Cakewalk/MIDITrackTools.png" alt="MIDI Track tools">
<div class="image-caption">MIDI Track tools</div>
{:/nomarkdown}


# Notable Features

## Matrix View

## Load Balancing

{::nomarkdown}
<img src="/assets/Cakewalk/LoadBalancing.png" alt="Load Balancing">
<div class="image-caption">Load Balancing</div>
{:/nomarkdown}

http://www.cakewalk.com/Documentation?product=SONAR&language=3&help=AudioPerformance.14.html

## Plugin Upsampling

{::nomarkdown}
<img src="/assets/Cakewalk/Upsampling.png" alt="Plugin Upsampling">
<div class="image-caption">Plugin Upsampling</div>
{:/nomarkdown}

## Lenses

{::nomarkdown}
<img src="/assets/Cakewalk/Lenses.png" alt="Lenses">
<div class="image-caption">Lenses</div>
{:/nomarkdown}

## CWAF


## Aim Assist

{::nomarkdown}
    <video autoplay loop muted class="gifvid">
        <source src="/assets/Cakewalk/Playhead.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <div class="video-caption">Aim Assist</div>
{:/nomarkdown}

This is a silly name for a cool feature. It's nothing more than a line that shows your mouse position with a label for the current time.

It's a tiny thing, but this might be one of my favorite features about Cakewalk. It just makes most basic playback/editing actions easier.

## Keyboard Shortcuts

{::nomarkdown}
<img src="/assets/Cakewalk/Shortcuts.png" alt="Keyboard Shortcuts">
<div class="image-caption">Keyboard Shortcuts</div>
{:/nomarkdown}

# Support Me!

This post took XX hours to research, screenshot, write and edit. If you appreciate the information presented then <a href="/DonateNow/">please consider joining patreon or donating!</a>

<a href="https://www.patreon.com/bePatron?u=7465992" data-patreon-widget-type="become-patron-button">Become a Patron!</a><script async src="https://c6.patreon.com/becomePatronButton.bundle.js"></script>
 
<form style="text-align: center;" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick">
<input type="hidden" name="hosted_button_id" value="BR247JAZBTUJJ">
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
</form>

**If you have any questions or comments, please comment below! I read every comment and respond to most.** No registration is necessary to comment, so don't be shy.


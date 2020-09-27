---
layout: post
title: Digital Performer 10.1
comments: true
date:   2019-12-10_17:33:20 
categories: music
tags: ['Digital Performer']
image: /assets/DP/TenOne/MIDIClip.png
description: Digital Performer 10.1!
---

{::nomarkdown}
<img src="/assets/DP/TenOne/MIDIClip.png" alt="MIDI CLIPS!">
<div class="image-caption">MIDI CLIPS!</div>
{:/nomarkdown}
Digital Performer 10.1 is out, and it's a huge **free** update for DP users.

I'm pretty excited about this one. Having re-read what I've wrote, I know this almost sounds like some dopey press-release that I've copied, but it's pure childlike enthusiasm on my part.

MOTU has fixed many of the long standing complaints about DP and added some new cool features.

Enough gushing... click through for more gushing.

**ALERT**
**ALERT**
35+Mb of data in this post. That may not be much to most of you, but for those who it matters... be aware.
**ALERT**
**ALERT**

If you want to just jump to the [official changelog](https://cdn-data.motu.com/site/docs/dp/v10/DP101ReadMe.pdf), then please do. I think I found some things that aren't there though :)

<!--more-->



# Contents
{:.no_toc}
* TOC
{:toc}

# Introduction

There are some specific themes in this update, and I'll be splitting the changes into these themes. 

I won't be covering **EVERYTHING**. I'll be going over what I feel are some of the coolest features.

# MIDI

## Velocity Tool

{::nomarkdown}
    <video autoplay loop muted class="gifvid">
        <source src="/assets/DP/TenOne/VelocityTool.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <div class="video-caption">Velocity Tool (Video)</div>
{:/nomarkdown}

Adjusting Velocity in DP has always been a weak spot. There were (and are) [powerful workarounds]({% post_url 2016-10-25-Editing-Velocity-in-DP,-even-with-those-tiny-arrows %}), but the simple task was not easy.

DP now has a velocity tool to easily edit velocities. Select some notes, click with velocity tool and drag up/down.

## Clips

{::nomarkdown}
<img src="/assets/DP/TenOne/MIDIClip.png" alt="MIDI CLIPS!">
<div class="image-caption">MIDI CLIPS!</div>
{:/nomarkdown}

Digital Performer has treated MIDI as a stream of events with no containers. Nearly every other DAW has some sort of container for MIDI data so that you can easily move time-delineated sections of music around, but DP relied on selections (which is really powerful with [search]({% post_url 2016-12-13-Cool-Features-in-Digital-Performer...-Part-4 %}#search-window))

No more. Possibly one of the least exciting features to non-users (since you've probably had that feature long enough for the feature to vote in most countries), but a big feature for DP users.

### Clip-Sequence Integration

{::nomarkdown}
    <video autoplay loop muted class="gifvid">
        <source src="/assets/DP/TenOne/ClipTrack.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <div class="video-caption">Clip-Sequence Integration (Video)</div>
{:/nomarkdown}

As you might imagine from the introduction of MIDI Clips, the Clips window and Sequence window can utilize the same data container: Clips.

## Retrospective Record

{::nomarkdown}
    <video autoplay loop muted class="gifvid">
        <source src="/assets/DP/TenOne/Retrospective.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <div class="video-caption">Retrospective MIDI Recording (Video)</div>
{:/nomarkdown}

Like many other DAWs, DP now has retrospective record. It's always recording your MIDI input.

Record arm a MIDI track, and go to `Region->Retrospective MIDI Record` to input your last played MIDI at the cursor if the transport wasn't rolling, or where it was performed if the transport was rolling.

This can also be done from the context menu for MIDI clips.

## MIDI Selection

{::nomarkdown}
    <video autoplay loop muted class="gifvid">
        <source src="/assets/DP/TenOne/MIDISelect.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <div class="video-caption">MIDI Selection (Video)</div>
{:/nomarkdown}

Previously DP only marquee selected notes if the selection marquee included the head of the note.

There is now an option to select notes if _any_ part of the note is selected.

## Send Volume

{::nomarkdown}
    <video autoplay loop muted class="gifvid">
        <source src="/assets/DP/TenOne/SendVolume.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <div class="video-caption">Send Volume/Pan on Play (Video)</div>
{:/nomarkdown}

When working with certain VIs and external instruments it's useful to have the current Volume and Pan sent to the instrument on playback.

This is now an option. When there's no automation controlling the track (including VCAs), the current Volume and Pan will sent to the MIDI output as the appropriate MIDI data.

## Muted Notes

{::nomarkdown}
    <video autoplay loop muted class="gifvid">
        <source src="/assets/DP/TenOne/Muted.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <div class="video-caption">Muted Notes Look Muted (Video)</div>
{:/nomarkdown}

Muted notes in DP 10 looked like any other note even under scrutiny.

Muted notes in DP 10.1 look different at the slightest of glances.

## Snip and adjust note duration

{::nomarkdown}
    <video autoplay loop muted class="gifvid">
        <source src="/assets/DP/TenOne/Durations.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <div class="video-caption">Split and adjust note duration (Video)</div>
{:/nomarkdown}

Snip allows you to essentially 'remove time' from a project. Everything in the current time selection is removed, and following data is pulled forward.

A problem that often occurred is that you would have notes before the snip that exceed the snip boundary. These earlier notes would create unpleasant overlaps.

Holding option while looking at the edit menu, or using option-command-j (macOS)/alt-control-j (Windows), will apply the snip and chop off any note durations that exceed the beginning boundary of the snip.

It's nice to have both options. Most DAWs I'm aware of do one or the other.

## Mini Midi Maxi

Sorry.

Holding control while dragging allows you to snap MIDI automation to the minimum, maximum and middle values quickly.

Some of you orchestral library nerds out there will like that one.

# Clips

## Record to Clip

{::nomarkdown}
    <video autoplay loop muted class="gifvid">
        <source src="/assets/DP/TenOne/RecordToClips.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <div class="video-caption">Record to Clips (Video)</div>
{:/nomarkdown}

MIDI Clips now exist, but normal single-stream MIDI tracks still exist in DP 10.1.

There's now a preference to record to MIDI clips, or default back to single-stream MIDI tracks like the classic DP behaviour.


### Record to Clip Audio

{::nomarkdown}
    <video autoplay loop muted class="gifvid">
        <source src="/assets/DP/TenOne/RecordClip.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <div class="video-caption">Record Clips Audio (Video)</div>
{:/nomarkdown}

So you audio folks (like me!) aren't left out, audio is recordable directly to a clip as well.

## Edit Clips

{::nomarkdown}
    <video autoplay loop muted class="gifvid">
        <source src="/assets/DP/TenOne/MIDIEdit.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <div class="video-caption">Edit MIDI Clips (Video)</div>
{:/nomarkdown}

MIDI clips can be edited just like Soundbites (audio clips). You can also pull up the clip editor to edit MIDI there.

The MIDI Clip editor is _nearly_ identical to the traditional MIDI editor except it's confined to a clip.

## Record Clips

{::nomarkdown}
    <video autoplay loop muted class="gifvid">
        <source src="/assets/DP/TenOne/ClipRecord.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <div class="video-caption">Clip Recording! (Video)</div>
{:/nomarkdown}

[I complained about this before]({% post_url 2019-03-15-Things-I-dont-hate-about-Digital-Performer-10 %}#clips-window) and MOTU has listened.

You can now record your performance in the Clips window directly to your sequence.

Play clips and they are placed as played directly into your sequence, just like [Live](https://www.ableton.com) or [Bitwig](https://www.bitwig.com).

This isn't _too_ exciting on its own, but now that DP [has full editing capabilities for clips](#edit-clips) and you can [record directly to clips](#record-to-clip), this makes it possible for a part-based workflow. Create parts as you want (MIDI or audio) then sequence them temporally as you wish.

Live/Bitwig users may not be so excited by this feature until you step back and see how much more advanced the editing features are in DP.

## Play in Sequence

Previously since MIDI clips were not possible in the sequence, you had to queue them for playback.

Now MIDI clips placed in a track will play when the playhead reaches that point, allowing you to precisely place clips for playback rather than always needing to queue them.

## Pack and Unpack

{::nomarkdown}
    <video autoplay loop muted class="gifvid">
        <source src="/assets/DP/TenOne/Pack.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <div class="video-caption">Pack and Unpack (Video)</div>
{:/nomarkdown}

Previously it was not possible to get data in/out of clip form without fumbling around with copy and paste.

You can now create a clip from selected object _or_ selected time via the `region->pack/unpack` commands.

# Performance

DP is as responsive as it's ever been with over 30 performance improvements.

Nearly every common gesture is more responsive now:

* Deleting things
* Selecting things
* Dragging things
* Scrolling
* Variety of unnecessary redraws

If you've been a DP user then this will be a dramatic change. If you're new to the software then you might be surprised at how snappy things are compared to your current/previous DAW.

# GUI

## Assign to different colors

{::nomarkdown}
    <video autoplay loop muted class="gifvid">
        <source src="/assets/DP/TenOne/Colors.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <div class="video-caption">Assign all tracks to different colors (Video)</div>
{:/nomarkdown}

Technically this is just a bug fix, but it both warranted a note in the changelog and it's something that bothered me being broken.

You can now _reliably_ assign tracks to different colors based on the current theme and track type. This did not work properly in DP 10.0

## Larger widgets

{::nomarkdown}
    <video autoplay loop muted class="gifvid">
        <source src="/assets/DP/TenOne/VelCompare.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <div class="video-caption">Velocity Comparison (Video)</div>
{:/nomarkdown}

DP has been _notorious_ for having the tiniest, most difficult to see UI elements. 

**NOW** They are bigger! They are easier to see! They are easier to use!

Selected MIDI notes now show velocities with flags to indicate the note length. (optional)

The contrast is still unpleasantly low on the default theme, but there are a number of included themes which provide better contrast.

## Memory and Punch

{::nomarkdown}
<img src="/assets/DP/TenOne/MemoryPunch.png" alt="Memory and Punch Markers">
<div class="image-caption">Memory and Punch Markers</div>
{:/nomarkdown}

DP calls loop markers "Memory". It's used almost identically to "Loop markers" in other DAWs. Previously it was your normal repeat sign from music notation, and it was only visible when Memory was active. Now it's a more modern set of arrows that's always visible with a more clear indication of when active.

DP 10.0 did not have visible punch markers. Now it does.

## Note Display Options

{::nomarkdown}
    <video autoplay loop muted class="gifvid">
        <source src="/assets/DP/TenOne/NoteDisplay.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <div class="video-caption">Note Display (Video)</div>
{:/nomarkdown}

There are now options to display an outline on notes when zoomed out, and whether to round the corners of notes or not.

# Workflow

## Bounce Improvements (Stem Bounce!)

{::nomarkdown}
    <video autoplay loop muted class="gifvid">
        <source src="/assets/DP/TenOne/Bounce.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <div class="video-caption">Bounce to Disk (Video)</div>
{:/nomarkdown}

You can now directly export busses and/or tracks to their own files. It follows track selection and uses similar hotkeys to the track selection dialog.

You can bounce to disk in realtime which _also captures realtime input_. That means bouncing with external synths or rewire/etc... is possible (and easy!).

That's combined with DP's already excellent export options as shown in the video abvoe.

## Grid

Some people hate the absolute grid (a feature I love). It used to be difficult to turn this off everywhere, but now you can turn it off program-wide with a single click.

## Duplicate Objects

{::nomarkdown}
    <video autoplay loop muted class="gifvid">
        <source src="/assets/DP/TenOne/Duplicate.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <div class="video-caption">Duplicate Things... and stuff (Video)</div>
{:/nomarkdown}

DP leans upon using selections of time to define a context for action. New in 10.1 is the ability to select objects such as clips/soundbites/notes to use the duplicate feature for.

## Event Chasing Interpolation

{::nomarkdown}
    <video autoplay loop muted class="gifvid">
        <source src="/assets/DP/TenOne/Interpolation.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <div class="video-caption">Event Chasing Interpolation (Video)</div>
{:/nomarkdown}

DP now has an option to link automation event chasing interpolation to edit boundaries. That's a mouthfull so let me break it down a bit.

When copying automation along with an item, it's usually desirable for the last automation point to be the value until the next event that happens. Obvious right?

The issue is that when pasting _new_ automation, DP would connect the previous end point to the starting point of the newly placed automation. Usually you would end up with a linear ramp that you may not want. Imagine trying to automate a reverb tail in the video above. The "end to start" interpolation would make your reverb tail slowly increase until the newly pasted part.

Now there's an option to link this to edit boundaries. The final value of your initial automation will be the value until some new data is placed in its path.

I know quite a few users of other DAWs that are oogling this feature. No more messing up your automation because you wanted to paste/splice/cut something in your project!

## Scrolling and Zoom Preference Pane

{::nomarkdown}
<img src="/assets/DP/TenOne/ZoomMenu.png" alt="Scrolling and Zoom">
<div class="image-caption">Scrolling and Zoom</div>
{:/nomarkdown}

DP 10.1 has a new preference page for the new zooming and scrolling options.

## Mouse Zoom

DP never really played well with mouse and trackpad zooming. You can now pinch to zoom and option/alt-scroll to zoom various views.

This might seem like a small thing, but DP users have largely been happy using the excellent zoom tool.

## Hand Tool (Scrolling)

{::nomarkdown}
    <video autoplay loop muted class="gifvid">
        <source src="/assets/DP/TenOne/ScrollTool.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <div class="video-caption">Hand Tool (Video)</div>
{:/nomarkdown}

DP relies on the 'tool' paradigm for interface interactions. I personally prefer this way of working as it allows me to operate the interface consistently without needing to process endless variables to use some "smart" tool.

In this vein there is the new scroll tool which allows easier movement around your project.

DP has always been one of the better products for navigating large and small projects alike, and the scroll tool takes this to the next level.

(I rallied hard for this tool. I'm tickled pink that we have a proper 'pan' tool that I'm so used to using in graphical software.)

## Auto Zoom

{::nomarkdown}
    <video autoplay loop muted class="gifvid">
        <source src="/assets/DP/TenOne/MIDIAuto.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <div class="video-caption">MIDI Auto Zoom (Video)</div>
{:/nomarkdown}

MIDI tracks can now automatically zoom to show all notes. I think once you get used to this, you'll be pretty annoyed using anything else.

## Zoom to Selection

{::nomarkdown}
    <video autoplay loop muted class="gifvid">
        <source src="/assets/DP/TenOne/ZoomSelection.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <div class="video-caption">Zoom to Selection (Video)</div>
{:/nomarkdown}

DP's zoom to selection was a wart on its otherwise beautiful project navigation workflow. It only worked on time selections.

DP 10.1 makes zoom to selection actually zoom to your selection. Time selection (width) **and** Track selection (height).

## Audition Volume

{::nomarkdown}
<img src="/assets/DP/TenOne/AuditionVolume.png" alt="Audition Volume">
<div class="image-caption">Audition Volume</div>
{:/nomarkdown}

There's now an option for Audition Volume in preferences.

## Multitrack I-beam

{::nomarkdown}
    <video autoplay loop muted class="gifvid">
        <source src="/assets/DP/TenOne/IBeam.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <div class="video-caption">Multitrack I-Beam (Video)</div>
{:/nomarkdown}

The I-Beam tool is DP's time selection tool. Previously it was limited to single track selections.

It now works across tracks. This works with the new [duplicate behaviour](#duplicate-objects) feature for multitrack time _and_ object-based duplication.

If you like "area selection" then this is it. You can select track data and cut/copy/paste/duplicate it as you wish.

## Loop Tool Removed

No more loop tool!

# Bugs

Nearly **300** bug fixes (maybe more... I counted what I could find).

**THREE HUNDRED**

I don't think many people would describe DP as buggy, but MOTU dug deep into the archives and fixed **A LOT** of reported issues.

# Conclusion

There are some things I could nitpick. New features that I want still, but this is a **HUGE** update for DP users.

I do hope that they include clip sequencing [Ableton Live's Follow Actions](https://www.ableton.com/en/manual/launching-clips/#13-6-follow-actions). I still would like modulation capabilities, event/object scriping, macros, automation clips, spectral editing, automatic bundle creation, automatic aux connection, better articulation support, a resizable mixer, ... plenty more.

I'm known for nitpicking updates, but this is a great .1 release for users of the software. I will reserve judgement to see if they keep up this trajectory.

# Meta

This post took 33 hours to put together, including rushing all of yesterday to finish it.


 




---
layout: ['post', 'reader']
title: Mixbus MIDI Editing
comments: true
date:   2017-10-15_14:22:05 
categories: music
tags: ['Mixbus', 'DAW']
image: /assets/Mixbus/Editing/Midi.png
description: MIDI editing in Mixbus
---

{::nomarkdown}
  <img src="/assets/Mixbus/Editing/Midi.png" alt="MIDI editing">
  <div class="image-caption">MIDI Editing</div>
{:/nomarkdown}

In this third-to-last post of the mixbus review, I'm covering the MIDI editing capabilities. 

I will say that I am not primarily a MIDI-based musician. I do work with MIDI and softsynths in my freetime, however my knowledge of the needs of a professional composer are not personally acquired.

Let's get on to it.

**NOTE THAT THIS REVIEW IS FOR VERSION 4.2**

<!--more-->

# Contents
{:.no_toc}
* TOC
{:toc}

# MIDI

{::nomarkdown}
  <img src="/assets/Mixbus/Editing/Stacked.png" alt="Stacked">
  <div class="image-caption">Midi editing</div>
{:/nomarkdown}

One of the primary things a lot of people miss out when trying Mixbus is that it does have the capability of working with MIDI.

Mixbus's MIDI editing is inline, meaning that the MIDI editor is shown only in the editor view along the track. There is no "MIDI Editor" to pop out and no overlaying of tracks.

Mixbus contains MIDI data inside regions, just like audio data. Regions can be overlapped and play simultaneously, which makes layering parts a breeze. Region-based midi containers also make it much easier to change arrangements by containing certain data to a region then moving those regions around to experiment. Most of the region based editing features for audio are applicable to MIDI.

There is also the 'stacked' mode, which will be covered in the audio editing section. In the image above the stacked mode is shown, where regions are processed top down. Regions on the top are played and anything below them for that time is not.

## Drawing and Editing

{::nomarkdown}
  <img src="/assets/Mixbus/Editing/MidiEdit.png" alt="Editing">
  <div class="image-caption">Editing and Drawing</div>
{:/nomarkdown}

Mixbus's MIDI editing is tool based for editing note data. When working in a region you are primarily either using "Draw mode" or "Internal Edit Mode".

Notes are input with the Draw tool, where you're given a nice overlay of the current note name (with sharps...), MIDI note number, velocity and channel. This information disappears as you click and drag to input a note of a given length.

The default note length is the grid value, and the note value can be changed by dragging the note length after clicking.

Note velocity is _not_ set with the common bar-graph or line-graph under the piano roll, like you see in other DAWs. Instead in Mixbus you select the note(s) and use the mousewheel to adjust the velocity. A nice text overlay shows the velocity of the note that your mouse is currently hovering over.

CC and similar data is represented as automation similar to any mixer parameter or plugin parameter.

There is an interesting 'Transform' dialog for logical/mathematical adjustment of various MIDI values based on other notes attributes, randomization or a specific value. Surprisingly useful when programming things like drum parts.

Note channel or setting specific time, velocity or pitch is done via an edit dialog that is accessed by a context menu _or_ done through the list editor.

## List Editor

{::nomarkdown}
  <img src="/assets/Mixbus/Editing/ListEditor.png" alt="List Editor">
  <div class="image-caption">List Editor</div>
{:/nomarkdown}

There is a 'List Editor' that can be called up on a MIDI region. This gives you a quick overview of the data in the region, and allows you to quickly edit the data.

Data can be edited via mousewheel or entered manually.

## Percussive Note Mode (drum editor)

{::nomarkdown}
  <img src="/assets/Mixbus/Editing/DrumEdit.png" alt="Drum editor">
  <div class="image-caption">Drum Editor</div>
{:/nomarkdown}

Mixbus does have a simple drum editor, accessed from right clicking the track, selecting "Note Mode" then "Percussive".

This is a midi editing mode with no note length visible. Entering a note by dragging repeats the note rather than extending the length.

Under the hood, the note length (distance between note-on and note-off) is set to the current grid size.

Once again, note attributes are set via dialogs accessed by context menus.

## Data Manipulation

{::nomarkdown}
  <img src="/assets/Mixbus/Plugins/Mappers.png" alt="Midi Mappers">
  <div class="image-caption">Midi Mappers</div>
{:/nomarkdown}

I covered the MIDI processors [included in Mixbus already]({% post_url 2017-10-05-Review-of-Mixbus-instrument-and-MIDI-plugins %}#robin-gareus-midi).

Unlike many other DAWs, Mixbus primarily controls midi streams through the use of these plugins in realtime rather than manipulating data directly in the piano roll.

There are also destructive functions like 'legatize' which makes every note lightly overlap the next or the simple quantize dialog which aligns note-ons and note-offs to specific time values.

## Patch Selector

{::nomarkdown}
  <img src="/assets/Mixbus/Editing/PatchSelector.png" alt="Patch Selector">
  <div class="image-caption">Patch Selector</div>
{:/nomarkdown}

Mixbus now has a patch selector. It lets you quickly browse through presets or patches. 

Most synthesizers don't publish their information for this, but you can create your own patch map [as described here](http://www.harrisonconsoles.com/mixbus/mixbus4-live-manual/1/en/topic/midi-banks-and-patches).

Patch maps also show when you use the "Insert Patch Change", which can make it easier to navigate patch changes in a complex project.

## Multi-out instruments

{::nomarkdown}
  <img src="/assets/Mixbus/Editing/MultiSetup.png" alt="Multiout">
  <div class="image-caption">Multiout Setup</div>
{:/nomarkdown}

Setting up instruments with multiple outputs is fairly simple during track creation. Mixbus detects multiout instruments and gives you the option to allow mixbus to setup a one-to-many routing setup with busses for each output.

## Things I like

* The text overlays when editing notes is nice, and smooth. Very useful.

* Many of the [MIDI plugins are great]({% post_url 2017-10-05-Review-of-Mixbus-instrument-and-MIDI-plugins %}#robin-gareus-midi)

* Patch editor is pretty cool, but unfortunately it would require some way to get patch maps from plugins to be truly useful. Currently making your own patch maps is a pain.

## Criticisms

* Switching tools frequently for 'drawing' and 'editing' operations seems strange. Other DAWs have a smart tool that combines most operations with ease. I found it frustrating when using the draw mode, forgetting it was on, then accidentally drawing a note when I simply wanted to select something.

    Switching tools constantly is not fun.

* Right click is not used for any functions except opening context menus. I think this is an unfortunate omission that could be used for some sort of smart tool for midi.

* I found that adjusting velocity with mousewheel was cramp-inducing and not nearly as intuitive or quick as the bar-graph/line-graph method in other DAWs.

* Even though note colours change for given velocities, I still found it difficult to get an intuitive idea of the general velocity contour of the midi. Perhaps this is me being used to a different method of dealing with velocity.

* CC data, Pitch Data, etc... is represented as Automation data. Unfortunately I only see how to initially edit: Pitch, Pressure, Polyphonic Pressure and CCs 7, 10, 39, 42, 64, 66, 91 and 93.

* There is no indication of a note's channel. You can end up with 16 notes on 16 channels and have no quick visual indication of that until you mouse-over each note specifically, or open the List Editor and browse around.

* Keeping track of changes made via MIDI plugins is problematic. I prefer the visual method of seeing changes made in an editor, however there is some flexibility offered by the non-destructive nature of the realtime MIDI plugins.

* While MIDI editing, I had many times where MIDI data simply stopped being processed. I was unable to track this down to file a decent bug report. It happened only with very dense data streams, and only a handful of times.

* No notation editing.

* If there's a note-chasing capability, I've been unable to find it. Note chasing is when you begin playback in the middle of a note and it still sounds. This is an important function for some people and not so much others.

* [MPE is becoming popular]({% post_url 2017-06-16-Bitwig-feature-review-Note-Expression %}) and Mixbus has no support for editing it easily.

* One-to-many routing is simple if you remember to do it early on. Setting it up after you've created the track and data can be annoying.

    Many-to-one routing, where you have many midi tracks feeding a single instrument, is time-consuming to setup.

    Many-to-one-to-many routing, where you have many midi tracks feeding a single instrument that outputs to many tracks. This type of setup is very common in orchestral setups or film scoring.

* Destructive manipulation features like humanize, groove quantize, mappable scale constraints and swing grid are missing.

* Minimal manipulation tools for CC data. Things like warping, scaling, conforming to other data etc... (like [this](https://forum.cockos.com/showthread.php?t=176878) or [this](https://forum.cockos.com/showthread.php?t=177437)). Various DAWs have their own forms of these tools.

* I was unable to find tools for inspecting RPN, NRPN and Sysex data.

# Conclusion

Mixbus _does_ have basic midi editing, which is likely sufficient for most artists that enjoy playing their parts in with an external instrument.

Currently there's a number of features missing that I think your average 'computer musician' uses frequently. Most of these are listed in the [criticisms](#criticisms) section.

I think that if you are primarily a MIDI musician, it's worth trying Mixbus to see if it offers you what you need so that you can continue your work and take advantage of many of Mixbus's other unique features.

If you are currently using another DAW at a moderate or high level of competency then there's a fairly good chance you will find a lot of missing features and workflow shortcuts that you may already be used to.

Hopefully the Ardour and Mixbus team will be addressing this area of the software in the near future.

**NOTE THAT THIS REVIEW IS FOR VERSION 4.2**

# Support Me!

This post took 6 hours to research, photograph, write and edit. If you appreciate the information presented then <a href="/DonateNow/">please consider joining patreon or donating!</a>








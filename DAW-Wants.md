---
layout: post
title: What I want in a DAW.
comments: true
date:   2020-11-19_21:05:53 
visible: 0
---

This is a page about the things that I expect from a DAW that I use to make my own personal music.

These are **NOT** things that I use to rate topics in the [DAW Chart](/DAW-Chart.html).

# How recently was this updated

**Last Updated** - {{ page.last_modified_at | date: '%Y %B %d' }}

I would consider this doc 15% near a relatively stable state.

# Requirements

There are a number of things that I expect to be able to do with my DAW.

This is a _brain dump_. I will be refining this over time, possibly with more brain dumps :)

I will be adjusting terminology over time to be more consistent. Until this doc is at about 50%, I wouldn't expect anything remotely coherent.

## A note on Efficiency

I'll be using the word "efficiently" a number of times in these descriptions, and it's important to explain what "efficiently" means here:

`in a way that achieves maximum productivity with minimum wasted effort or expense.`

Productivity is achieving the defined goal that I want to do "efficiently". What is wasted effort or expense? Perhaps it's best to assign a points system to common computer actions. A higher total number is _less_ efficient **for me**. Take all actions necessary and add them up for what I'd view as "interactive efficiency".

* 0.5pt - A MIDI note or chord. [^note]
* 1pt - Pressing a _single_ keyboard key.
  * 0.2pts added for each key modifier, and the keys between the main key. [^modifiers]
* 3pts - Switching to another window.
* 5pts - Grabbing the mouse.
  * 5pts - Use the mouse cursor to select a context before I can "do" a thing.
* 10pts - Top level menu item.
  * 15pts - Each menu level.
* 20pts - Identifying context. [^context]
* 1000+pts - Action is _not_ undoable.

I will only say I wish something to happen "efficiently" if I expect to do the thing frequently.
  
[^note]: I can press a note on my MIDI keyboard faster without looking than pressing a keyboard key. Likewise the same for a chord, which encodes more information than a single key, thereby it's more efficient. I have an 88-key weighted controller right in front of me in the same place for the last ~10 years.
[^modifiers]: On QWERTY (which I don't use) Ex 1: Ctrl-Q - 1.6pts. Q is 1 point. Ctrl is 0.2, Z is 0.2, A is 0.2. ------ Ex 2: Command-Shift-Y - 3.4pts. Y is 1 pt. Shift is 0.2pt, Alt is 0.2, distance between shift and alt is 0.2, z is 0.2, x is 0.2, F is 0.2, G or T is 0.2.
[^context]: This is anytime that I need to stop and process "where" I am in the software. If pressing "Q" does something when the track is selected, but does something different when the track control panel is selected, then I need to (potentially stop and) recognize my current action context before pressing Q.

# Memorable Shortcuts

[I have an article/video on the shortcut system I prefer]({% post_url 2018-10-13-Reapers-amazing-menu-system %}), but the author is no longer actively developing scripts.

This will be a multi-step process, and these steps may change as I engage with the shortcut systems of various DAWs.

* List the shortcuts I use.
* List the shortcuts that I wish I used.
* List the commands with no shortcut assigned that I want to use.
* Organize shortcuts into workflows.
* ???
* Profit.

If a shortcut is specific to a certain DAW and generally unavailable then I'll note it.

Work in progress.

# Workflow

## Comping

There are several parts of the comping process. First the concepts that prepare content for "comping":

* Set two markers on the timeline, hit record, loop between the markers and have each pass saved as a separate recording associated with the track.
* Set two markers on the timeline, place the playback before the cursor, hit play. Recording only starts/stops at these markers and saves this section as a separate recording associated with the track.
* Associate arbitrary content from other tracks with another track efficiently.
* Associate entire tracks with another track efficiently.
* Dissociate specified non-mainline content from a track. i.e. "Remove a take".
* Edit associated content as if it's an independent entity. i.e. move content, stretch content, cut content, etc...

Utilizing the track content:

* Display these recordings on subsequent visual rows.
* Apply some sort of exclusive selection to contents of the rows _efficiently_.
* Apply some sort of _inclusive_ selection to the contents of the rows, where overlapping content is automatically mixed when "combined".
* The total of this selection becomes (automatically or manually) the content of the track where the recording originally occurred.
* Render or "glue" the main track's content so that it appears to be a single contiguous part.
* Revert or "un-glue" a part at any point in time. i.e. not relying on an undo stack, but a command that can return you to the state before "gluing".
* Apply edits to the main track, and have all associated content follow temporally.

## Click Track

My needs for a click track are relatively simple:

* Selectable sound source.
* Assignable track output so I can apply effects to the metronome.
  * Usually EQ and Compression/Sidechaining so that the click is audible for the current context.
* Defined pulse independent of the time signature.

It's **very** important to me that I have a click track with these characteristics, and I won't try any serious recording in a DAW without them.

A substitute for these features is all of these capabilities:

* Search for and import a MIDI track, with an assigned instrument.
* Search for and import a MIDI clip and automatically fit to tempo.
  * _Efficiently_ duplicate/loop the MIDI clip.

Quick setup of a MIDI track/instrument gives me a click track with an effectable output, then I can select the appropriate pulse via importing a MIDI clip.

## Audio Recording

* [Comping](#comping)
* [Comping](#comping) where all actions to a _single_ track propagate to other tracks in a manner which retains their relative phase that existed before the change.
  * This means that any time-stretching actions are phase sensitive as well.
* [Click Track](#click-track)
* Import a _track_ with pre-assigned effects.
  * Easily browse these importable track assets.
* Import a **set** of tracks efficiently with:
  * Input assignments.
  * Effects.
  * Parallel routings i.e. "Aux Tracks".
* Assign MIDI to effects parameters.
* Search for an effect and add it to the "guitar track" efficiently.
* Create & Assign a parallel audio path to a track (i.e. "Aux track") efficiently.
* Count-in functionality.
* Remote recording actions:
  * Play.
  * Start recording.
    * And start playback or...
    * Record during play back.
  * Stop recording.
    * And continue to play or...
    * Stop playing.
  * Move playhead to a specific marker.
  * Turn on looping.
    * Select which markers to loop between?
  * Restart recording, single command consisting of:
    * Stop recording.
    * Delete recording on all record-enabled tracks.
    * Reset to location where recording started, utilizing _all_ settings enabled when recording started(!).
    * Begin count-in if enabled.
    * Begin recording and playback.
* Phase-aligned grouped edits. (Yes, this is part of the _recording_ process!)
  * Edits (and time stretching!) applied to one track are applied to other tracks in the group.
  * Turn groups on/off efficiently.
  * Sub-grouping would be nice, but not necessary.
    * The idea is that I could group all of my snare tracks for editing, and those tracks have a parent of 'drum editing'. Sometimes I wish to edit only the snares, and sometimes I want _everything_ in the drum group to be edited.

## Sample Recording & Editing

I like to record samples of instruments I have on loan, am selling or just want to manipulate in its own context.

* Start recording when input passes threshold.
* Split on threshold, with a specified gate.
  * Selectable crossfading.
* Efficiently name selected clips by:
  * Ordinal placement in timeline.
  * Some concept of audio level.
  * Length.
  * Date/Time of recording _or_ process.
* Export a selection of audio containers (item/clip/region/whatever) to files with names corresponding to the name of the item:
  * With Track FX.
  * Raw, as edited.

## MIDI Input

I'm a simple man, I record MIDI with a controller 99% of the time.

* [Click Track](#click-track)
* Start _count-in_ on MIDI input.
* Constraint input to channel.
* Split channels to tracks.
* Filter _playback_ of notes, but record them. 
  * Sometimes I like to record with a piano sound regardless of the end sound, but I know which keyswitches I want at a given time. I want to play these keyswitches, but not hear them.

## MIDI Manipulation

* Split channels of a MIDI stream (probably from a MIDI item) to other tracks.
* Process MIDI streams in-flight. (MIDI FX/scripts)
* Select MIDI notes via logical construction. i.e. "If the note is a C is between bar 2 and 4 and is preceded by a D4".

## Mixing

* Use the following functions on a single track, or a pre-defined selection (group) of items:
  * Increase/Decrease the level of a track pre-fx.
  * Increase/Decrease the level of a track post-fx.
  * Adjust panning of a track.
    * Change the level of the first channel, or second channel independently.
  * Adjust the balance of a track.
    * Change the level of the first and second channel inversely proportionally.
  * Efficiently find, then add FX to a track:
    * Before the fader.
    * After the fader.
  * Efficiently remove an effect or effects from a track.
  * Re-order effects efficiently.
  * Move an effect from one track to another, removing it from the source and placing an identical effect (same settings) on the destination.
    * Same, but do not remove the effect from the source.
  * If grouped, control multiple identical FX's matching parameters with a single control efficiently. (Linked FX controls, or less efficiently: Macros)
* Change the [pan law]({% post_url 2019-12-07-Daw-V-Daw-Pan-Curves %})
* Increase the gain of a data encapsulate widget (Item/Region/Clip)
* Efficiently create buses for audio data that combine the data fed into them _and_ assign what's fed into them.
* Assign tracks to output to the input of another track, or tracks.
* Assign tracks to a hardware output or outputs.

# Editing

Making changes to temporally delimited containers of data (clips/items/blah blah blah).

## Playhead control

Integral to both editing and mixing, but an indispensable part of how I like editing systems to work.

Move the playhead to the:

* Next clip boundary.
* Previous clip boundary.
* Next transient.
* Previous Transient.
* Next n-value (tbd, I usually prefer zoom-based determination)
* Previous n-value (tbd, I usually prefer zoom-based determination)
* Specified Marker.

# Crossfade Editor

* Left and Right side shapes
  * With tension or bezier curves.
  * Efficient toggle ripple on/off.
* Apply crossfade to selected overlapping clips and launch crossfade editor efficiently.

## Audio Editing

These are things which I won't tolerate more than a single key press (computer or MIDI-actuating):

* Move the left boundary of the selected clip under the playhead, to the playhead.
* Move the right boundary of the selected clip under the playhead, to the playhead.
* Split the selected clip at the playhead.
* Select the:
  * next clip on the track.
  * previous clip on the track.
  * next track with data on it.
  * previous track with data on it.
* Move the:
  * Left boundary of the next clip to the playhead.
  * Right boundary of the next clip to the playhead.
  * Left boundary of the previous clip to the playhead.
  * Right boundary of the previous clip to the playhead.
* Stretch the:
  * Left boundary of the next clip to the playhead.
  * Right boundary of the previous clip to the playhead.
* Adjust clip gain +1dB.
* Adjust clip gain -1dB.

And a few things I don't mind being slightly more complex:

* Rectangle select to zoom.
* Turn on/off an editing group associated with the current track.

## MIDI Editing

These are things which I won't tolerate more than a single key press (computer or MIDI-actuating):

* Place note at playhead in the middle of current view.
* Move selected note up 1 semitone.
* Move selected note down 1 semitone.
* Move selected note up 1 octave.
* Move selected note down 1 octave.
* Select notes intersecting playhead.
* Split notes intersecting playhead.

# Arrangement

Making changes to large ad-hoc selections of things.

Select:

* A rectangular area (contiguous tracks, and a time selection including all items _and_ metadata [automation etc...]).
  * Via Mouse.
  * Via track and "between markers" selection.
* Information matching logical selection, "If the note is a C is between bar 2 and 4 and is preceded by a D4"".

Move selected tracks:

* To become contiguous, but in the same sequential order.
* To the end of the list efficiently.
* To the start of the list efficiently.
* To a cursor position.

Move selected data:

* Start of selection to playhead.
* End of selection to playhead.

# Workflow

Things that help me use the DAW.

## Window Management

* Efficiently recall a window setup.
* Mnemonic shortcuts for closing left, bottom and right side panels if applicable.

## Markers

* Edit marker names efficiently
* Re-order markers.
  * Ensure that markers line up with the shortcuts that I expect to trigger them.

## Search

* Search for track by name.
  * Optionally select these tracks.
  * Show routing children (tracks that route to this track).
  * Show edit group children (things that will respond to edits together).
* Search for clip by name.
  * Optionally select these clips.
  
## Zoom

* Zoom to:
  * Clip.
  * Everything in view.
  * Previous zoom level.
  * Next zoom level.
  * 4 Zoom levels.

# Effects

These are the general effects that I expect to have, and the functionality that I desire.

I, like most people, enjoy having various flavours of these types of effects. I'll be focusing on a general-use product of each type that I'd be happy using if it was my only option.

## All effects

* Fast fade on bypass.

## EQ

* At least 3 bell bands.
* High pass
  * Variable slope.
* Low pass
  * Variable slope.
* Smoothed filter automation.
* Type in filter values (level and frequency)
* Logarithmic graphical view with:
  * Spectrogram view.
    * With matching piano graphic.
  * Line graph.
* Output level.

## Compressor

* Variable attack/release shapes.
  * Or common topology emulations.
* If ratio is available, scaled with 1:1 at minimum value, 4:1 at 50% and 10:1 at 100%.
* Input level.
* Output level.

## Expander

* Variable attack/release shapes
  * Or common topology emulations.
* Ratio.
  * Scaled with 1:1 at minimum value, 4:1 at 50% and 10:1 at 100%.
* Input level.
* Output level.

## Reverb

* Pre-delay is accurate to the apex of next stage of reflections.
* Pre-delay in tempo.
* Pre-delay in milliseconds.
* Independent control of Early/Late Reflection parameters.

## Delay

Undecided. I like complex delays, so I need to trim my preferences down before filling this section.

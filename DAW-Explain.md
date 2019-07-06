---
title: The DAW Feature Chart explained
comments: true
categories: music
tags: ['DAWChart']
categories: music
tags: ['DAW', 'DAW Chart']
description: How does the DAW Chart work and what is it?
layout: "dawchart"
---

# Contents
{:.no_toc}
* TOC
{:toc}

# Introduction

The DAW Chart is simply my ratings of various functionality classes of DAWs based on their importance _to me_.

The ratings are relative. One DAW may have a perfectly sufficient set of features for many workflows, but if another DAW extends upon that in ease of use or functionality, then the latter DAW will receive a better rating.

I am not perfect and sometimes I miss things. If you ever think I've screwed up a rating then please let me know and I'll happily discuss it with you. Many people have convinced me in the past that some ratings are wrong, but just as many didn't realize how much better another product is than what they like in that area. We can discuss it though.

A high _overall_ rating doesn't mean a product is good. It just means it's more versatile.

**note** I do not cover video features. I do very little video and feel very underqualified to rate things as such.

# Installation

## Installation options

Some DAWs allow easy installation of multiple versions or installation to portable storage devices. This also considers how well you can fine-tune the installation of extra content that you may not want.

## Ease of Download

How easy is it to acquire the assets to install your DAW?

I rate highly when it's very obvious where/how to download products. If you have to 'install a trial' to authorize then I rate lower. If you need to enter a registered user area I rate even lower.

Products that put downloads behind logins are rated lower. The ease of finding that download area (how many clicks from the front page, and if the link is in the first scroll page) factors in heavily as well.

This can be considered how quickly you can find and get your product.

# User prefers dongle

## With dongle

I personally prefer dongles. I have created 2 categories so that you can weigh this as you wish. This category rates DAWs more highly if they use a dongle.

The ease of using the dongle, and the durability of the hardware are considered for the rating.

# User dislikes dongle

## No Dongle

This category is for people that dislike dongles.

I consider the ease of authorization. Serial-based is preferred over challenge-response.

I also consider how easily it is to acquire your registration information.

# Price

## Initial Cost

This is a relative rating like everything else. Unlike other ratings this is not subjective.

To calculate this I use the product cost from [Sweetwater](https://www.sweetwater.com) for the product version that's generally considered the 'standard' version for most uses. If the product is not available on Sweetwater, I use the direct from developer price. I use the prices in USD and I don't consider crossgrades or sales.

The scale is from 1-100, with 100 being the lowest price and 1 being the highest price. I use a scale up to 100 so that users that are price-restrained can set the weight for this category to greatly influence the ratings.

**THIS DOES NOT TELL YOU ABOUT VALUE** Only about _cost_.

The formula is:

rating = (99) * ((x - h) / (L - h)) + 1

100 * ((599 - 599) / (60 - 599))

Where x is the rating, L is the lowest DAW price and h is the highest daw price.

These are the prices I use:

* Reaper - $60
* Digital Performer - $499
* Cubase - $552
* Waveform - $109
* Studio One - $399
* Pro Tools - $599
* Logic - $199
* Reason - $399
* FLStudio - $199
* Live - $449
* Bitwig - $399
* Mixbus - $79

```clojure

;; Code for reuse later

(def daws 
    {:Reaper 60
     :Waveform 159
     :DP 499
     :Cubase 552
     :S1 399
     :PT 599
     :Logic 199
     :Reason 399
     :FL 199
     :Live 449
     :Bitwig 399
     :Mixbus 79})

(def min-val (val (apply min-key val daws)))
(def max-val (val (apply max-key val daws)))
(def min-rating 1)
(def max-rating 100)

(defn reverse-normalize
  "Normalize daw rating value"
  [x]
  (int (+ min-rating 
          (* (- max-rating min-rating) 
             (/ (- x max-val) 
                (- min-val max-val))))))

(defn price-rating
  "Print daw and rating"
  [[daw val]]
    (format "%s: %d" daw (reverse-normalize val)))

; (map price-rating (assoc daws :Sawstudio 1250))
```

## Upgrade Costs

In this category I consider how much you pay yearly, on average for large features updates.

Take how much you'd pay for major features updates, divide that by how long between updates.

This is from 1-10, with lower upgrade costs equaling 10.

**THIS DOES NOT TELL YOU HOW GOOD UPDATES ARE.** In fact, a DAW may rate highly on this because there are _not_ frequent updates which may be a bad thing. This also does not tell you about how often you get new features or bugfixes. Only update costs.

Here are the values I used:

* Reaper - $5
* Digital Performer - $100
* Cubase - $113
* Waveform - $109
* Studio One - $49
* Pro Tools - $99
* Logic - $0 (zero paid updates since Logic Pro X)
* Reason - $95
* FLStudio - $0
* Live - $45.80
* Bitwig - $139
* Mixbus - $19

```clojure
(def daws 
    {:Reaper 5
     :Waveform 109
     :DP 100
     :Cubase 113
     :S1 49
     :PT 99
     :Logic 0
     :Reason 95
     :FL 0
     :Live 46
     :Bitwig 139
     :Mixbus 19})
```

# General Workflow

## Stability

Stability should be obvious. Does the DAW crash? Does it scan plug-ins without issue? Are there many bugs with impede a 'normal' workflow?

I consider stability in the context of a wide-range of applications **and plugins**. A product may be stable on its own in general, but how well it handles errant plugins, scripts, drivers etc... is considered as well.

## Undo

This concerns the undo system. The foremost important thing considered is if _every_ action can be done/undone, including actions in the mixer.

There's other considerations like:

* Offline undo - undo history is restored when opening a project
* Branched undo - A tree-based undo system
* Undo consistency - If you undo/redo multiple times, does the project return to the exact same state?
* Third-party product undo - Can you undo third-party products changes?

## Manual

I am a proponent of good technical writing.

* Clear descriptions of functionality - This includes technical details and design rationalizations.
* Examples _along side_ explanations of functionality - Manuals that use examples in lieu of technical elaboration are infuriating.
* Ease of finding information
    * How easy is it to jump from software->information. Some programs have amazing tooltips or let you press a button to jump to a contextually related section in a manual
    * Does the product lay out the terminology it uses? Does it use common terminology?
    * Do hyperlinks work?
    * Is there an index and a table of contents?
* Proximity of information -  Is the information on a specific function located in a single place, or is it scattered throughout the document?
* Grammar.

## Metering

Metering is support for various metering standards like [LUFS](https://en.wikipedia.org/wiki/LKFS), [K-system](https://en.wikipedia.org/wiki/K-system)or [VU](https://en.wikipedia.org/wiki/VU_meter). There are many other standards.

The more the better, if they are accurate.

## Track Templates

Track Templates are a way of quickly inserting tracks with specific settings such as I/O, names, routing, plug-ins and organizational aspects. Does the DAW support it? How many aspects are saved and recalled? How easy is it to use?

## Key Commands

"Key commands" encompasses not only the ability to re-assign key->function assignments but also:

* Changing mouse modifiers
* Changing contextual commands
* Tooltips showing shortcuts assignments
* Comprehensive search of available actions
* Editing menus
* Alternate methods of accessing functions without modifier functions (See: Pro Tools Keyboard Focus)

This category does _not_ cover how "good" the default key commands are, only the flexibility of the command system.

## Menus

Top level and Context menus are a fact of life in modern software. This category focuses on the reliance, use and _management_ of menus in the software. Some considerations:

* Utilization of menu layers
* Ability to change menus (customization)
* Menu pinning (ability to leave menus open)
* Menu search - Notably this is a basic function in macOS, so for my purposes it is related to the number of searchable items or the adherence to macOS standards.
* Exposure of common functions _outside_ of menus
* Labelling of hotkeys in menus

## Window Management

How easy is it to manage windows that belong to the software?

* Window cycling
* Window Docking
* Screensets - the ability to recall window positions
* The lack of windows - this is considered a benefit.
* Window pinning

## Macro Shortcut Support

Macros in this case is the ability to trigger many functions with a single shortcut or action.

## Remote Control

Remote control is not only wired external control but wireless control.

For this rating I _only_ consider the native options or officially endorsed controllers and control applications.

The ease of creating or editing controllers is also considered.

# Sample and File Browsing

## Sample and File Browsing

How easy is it to search for files, bookmark folders, tag files, import metadata, and the options for previewing samples before import.

## Preview

The ability to preview samples at current tempo (or not!), vary volume, output device and how well it deals with tempo info.

Bonus points for toggling these options on/off and how well it integrates with [Search](#search)

## Tagging

The ability to apply tags to files, plugins, presets etc...

This is rated based on what things can be tagged and how easy it is to use the tags.

## Sample Search

Searching for files, presets, plugins and any other asset outside AND inside of the project.

The rating is based upon what can be searched for, how easy it is to utilize the search and how complex the searches can be (higher potential complexity is a better rating).

Composable searching adds a high bonus. This means searching for something, then searching those sub-results.

# Project Navigation

## Zoom Functionality

Zoom functionality covers the ability to easily focus in on a specific aspect of the project.

* Zoom to selection - Drawing a box to zoom, zooming to a search selection, zooming to time selection, zooming to object, etc..
* Mixer resizing - Narrowing mixer channels and the sizing of various elements in the mixer
* Zoom undo/redo
* Zoom presets - saving zoom levels and recalling them quickly
* Options for controlling zoom focus - Do zoom functions zoom on the cursor? playhead? center of screen? Selected object? Can you change this behaviour?

## Large Project Features

Large project features are things that make it easier to locate portions of a project.

* Visual project overview - Some method of visualizing and moving around a large project with a more compact graphic element
* Textual overview - Some method of viewing the project as a searchable textual list including metadata, object metadata, applied plugins, automation etc...
* Track visibility options - How easy is it to quickly hide/show tracks/channels in a project?
* Edit conforming - Being able to take project-wide linear edits from another project and applying them to the current project. Very important for video work, and _exceptionally_ time consuming to be done manually
* Proper support for extended file formats - Example being location data in BWF files.
* Organizational support - Track colouring, object colouring, moving of elements by type (e.g. all VCAs on left of mixer), individual object wave views, etc..
* Item notes
* Track Notes

## Project Search

This encompasses the ability to:

* Track search - Finding tracks via intelligent search including metadata and selectively showing or hiding tracks based on the search
* Item search - being able to intelligently search for, select, zoom to, replace or edit specific elements.
* Plugin search - see plugins currently used in the track, their dsp usage, preset, etc...

## Marker Features

For this category, a marker is considered some sort of visual flag that coincides with a specific time.

The rating is based on how many marker types there are, the availability of multiple marker tracks, the integration of selection/rendering features with markers, marker manipulation tools and markers integration with tempo features.

## Arrangement Tools

Arrangement tools are things that allow you to make large project-wide changes to the arrangement

* Tools that move all parts of a project together. 
* Tools that let you change the chord/scale of an entire project at once.
* Allowing you to embed projects within projects

# Mixing

## VCAs

I explained why [why VCAs can be useful before]({% post_url 2016-12-16-Things-I-hate-about-Digital-Performer %}#vcas).

If you've never used VCAs before then you probably think that you can live without them, but nearly every person I've seen try to use VCAs becomes a convert to the workflow.

They are very useful and make mixing complex projects a breeze. No DAW should be without them.

## PDC

Some plug-ins and processes require extra samples to do their work. This causes a delay before the output is heard.

Ideally a DAW should be able to compensate for this delay in all possible routing paths so that the user is unaware of the delay. This capability is called 'Plug-in Delay Compensation'

Some products have PDC that doesn't affect all paths. Some have PDC that doesn't work when another track is record-enabled. Some products do it correctly.

## Group and Bus Creation

How easy is it to route many tracks to one track? Not just sends and busses but edit grouping and VCAs as well.

I also consider how this information is visualized. Can you see all your current busses/sends/receives/VCAs at once? Are edit groups editable easily?

## Routing

Routing is the ability to send signals from one place to another. Some things I consider:

* Routing from many tracks to one
* Routing from one track to many
* Ease of routing midi to non-instrument plug-ins
* Routing of audio inside chains - parallel processing or similar
* Disabling a stream of data from being sent to the master output
* Visualization of the current routing scheme

## Mixer Channel Strip

Mixer Channel Strips allow you to quickly access common effects like EQ and Compression directly in the Mixer.

This rating covers whether this exists, how many options there are, if you can build your own and how good the included channel strip components are.

## Plugin Organization

Plug-in organization is not only how easy it is to organize plug-ins, but find them. Saving chains, presets, banks and organizing those assets is considered as well.

## Fader and Meter Size

Fader and Meter size is the ability to resize the meters and/or Fader.

## Hardware Inserts

Hardware inserts is the software's ability to integrate external processing in to the project. Latency compensation for inserts is a must.

## Load Balancing Features

This includes features such as integrated DSP cards, networked load balancing or special integration with any system that allows offloading processing to processor besides the host processor.

Multi-threading capabilities also factor in to this, however external load balancing features are considered more heavily.

## Freeze

Freezing is the ability to render audio **and** disable any processes that were rendered. This is NOT the same as bounce to audio. Freeze as a feature requires that the rendered effects/instruments are disabled, saved and that the process is undoable quickly.

Freeze features considered are: selecting point of freeze, aux freezing, audio/instrument only freezing, control of freeze render location, freeze speed, tail options and PDC working correctly with freeze.

## Monitor Section

Some DAWs have a second stage channel after the master channel that allows you to manage your monitoring environment without affecting the processes on the Master channel that would be rendered through.

The monitors section consideration does _not_ consider if a DAW can simply add a buss after the master channel or alternate routing. This category is specifically for an integrated monitor section solution.

# Included content

## Included Effects Plugins

Included Plugins is if the DAW covers at least the basic functionality below and how subjectively (good) the plug-ins are.

* EQ
* Resonant Filters
* Compression
* Brickwall limiter
* Delay
* Reverb
* Phaser/Flange/Chorus
* Guitar/Bass amplifier
* Hardware emulations

Some DAWs have the capability to build FX from various building blocks or write-plugins in realtime. Large bonus points for that.

## Included Synth Plugins

Things that generate sound in real-time.

* Subtractive Synthesizer
* 'Oddball' synths (additive, FM, PD, granular, wavetable, etc...)
* Sampler
* Drum instruments

Some DAWs have the capability to build FX from various building blocks or write-plugins in realtime. Large bonus points for that.

## Included Sound Content

Included sound-content covers the inclusion of audio loops, one-shot samples, Impulse Responses, midi loops and other

# Recording

## Re-Record

Re-record is being able to instantly press a button, delete the previous recording and start over from the exact point you started.

It may seem strange to include this, but it's a feature that can save you 100s of keystrokes a day and help keep you in the state of flow.

## Live Loop Recording

Loop or Cycle Recording is when you can record in a looped section and every loop is saved to a new take. Ideally these takes can be later 'comped' to create a new part.

## IO Map and Rename

I/O Map & Rename is how easy and flexible the I/O setup is. How much time and effort is there in setting up and labelling an audio device's I/O?

## Input Metering

Input Metering covers the ease at which you can see the _actual_ input values when recording, rather than the processed amplitude values of the track.

Some DAWs have features like meter strips that will greatly increase this score. Input tracks are another excellent feature in this context.

*This is not just the ability to see input values*, but also how easy it is to switch between processed/input values or to see both. Plenty of DAWs allow easy switching to see input values, but if you can't easily see the processed/unprocessed values then it will receive a low score.

# Automation

## General Automation

Some _basic_ things I expect from an automation system

* Easy parameter selection - Some way to easily select what parameter is being recorded or written or is editable.
* Multiple volume points - Pre/Post FX/Pan/Fader volume points for automation
* Automation Shapes - such as the ability to quickly draw a sine wave of a given frequency, phase and amplitude as automation
* Automation re-shaping - adding/subtracting a signal from the automation, stretching/compressing automation and other ways of modifying current automation.
* Track modes - tracks can be set to read/write/latch/touch at a per-track level
* Global modes - tracks can be set to read/write/latch/touch globally
* Ease of setting points to specific values
* Ease of assigning controllers to parameters for automation

## Snapshot Automation

Snapshot automation is being able to select a time area, change a selection of parameters throughout the channel/plug-in/project and apply those as automation at that point in time.

Object editing offers a variance of Snapshot Automation, but Snapshot automation also allows for creating complex transitions since you can apply parameter changes to any point in time and interpolate between them automatically.

## Automation Tools

This includes any features used to manipulation automation data like:

* Uncommon automation modes like Latch Preview
* Automation snapping
* Automation shape drawing
* Trim modes
* Recording modulation to Automation
* Scripting automation
* Automation thinning options
* Automation clips
* Automation _routing_
* Automation display methods (how easy it is to see multiple types of automation)
* Automation search
* Automation transformation tools

Some DAWs have rather different automation capabilities. It's possible for 2 DAWs to have the same score but wildly different automation capabilities. Research should be done to see if these capabilities match what you need, or you can ask me in the comments!

## Automation Modes

When writing automation manually in some form, there's a need to specify how and when the data is used.

Many DAWs have these basic modes:

* Trim mode - volume/pan faders are not affected by automation so that you can adjust the overall level of the track still.
* Read, Write, Touch and Latch modes at least.
    * Read - Controller moves are played back, not recorded.
    * Write - Controller moves are recorded immediately when playback starts.
    * Touch - Controller moves are recorded only when the control is moved then reset to the untouched value when the controller stops being touched.
    * Latch - Controller moves are recorded only when then control is moved, then envelope is set to the final value for the rest of the track.
    
There's other concepts like variances of write that do/don't write to end, fill modes, latch preview or suspend automation.

Some of these concepts like fill modes or latch preview can be useful even for people that write automation in by mouse.

## Automation Thinning

When automation is written it is often desirable to thin automation. This is the process of removing automation points while maintaining a similar curve.

The rating considers the functional capability, options and resulting curve of such a feature.

## Clip-based automation

Automation that is attached to a region/item/clip. Some DAWs only handle a set audio value, some allow full automation.

## Automation clips

These are items/clips/regions that store automation. They can be freely placed and always are connected to the same parameter. They are usually treated exactly like audio/midi events in most ways.

The rating covers both the availability and the flexibility of the feature.

## Modulation

Modulation is the ability to cause a parameters value to correspond to the current value of an incoming signal. 

* Audio modulation - Can an audio signal be used to modulate something? Is it audio rate?
* Plug-in modulation - modulation of plug-in parameters
* Visualization - How easy is it to see the current modulation setup
* Modulation -> Automation - can automation be written from modulation
* Anti-aliasing - are modulation signals anti-aliased?

# Audio 

## Audio Editing Tools

Audio Editing tools is not the 'tools' that you can select in the DAW, but instead the amount of functionality available for doing repetitive or complex edits to audio.

The number of functionalities considered is too much to fully list here, but here are some _basic_ tools that I expect from any DAW.

* Move between transients
* Split at time or selection
* Adjustable fade in/out and crossfades
* Snap to zero crossing
* Stretch with or without changing pitch, with selectable algorithms.
* Audio Warping - stretching inside the object using adjustable markers
* Quantize position
* Detect and trim silence

## Comping

Comping is the ability to take a bunch of layers of audio, likely loop recorded, and easily assembling a master take from those layers.

Some DAWs allow you to manage takes in rather complex ways, and some have no comping features at all!

## Multitrack Audio Editing

Multitrack Audio Editing consists of all of the [features in Audio Editing tools](#audio-editing-tools) but applied to multiple tracks or objects simultaneously.

Multitrack Audio Editing also concerns features that are only applicable to multitrack audio.

* Processes that consider all tracks - such as normalize that considers the peak values of all tracks or their summed values
* Phase-locked edits - Relative phase between tracks is maintained when warping or quantizing
* Transfer of warp markers across tracks
* Edit priority - When applying processes (such as warp quantize) to multiple tracks, you are able to select which track(s) take priority given items that are near each other.
* Routing - The ability to route _to_ or _from_ multiple tracks to a destination, not just with busses.

### Multitrack Freewarp

Multitrack freewarp is the ability to use warp markers on a single track, and in real-time affect other grouped objects.

### Multitrack Takes

Multitrack Takes is the ability to loop or cycle record to takes, and subsequently comp them.

The process of comping many tracks of dozens of takes at once can be cumbersome yet important when working with live instruments.

## Audio Bonuses

Audio Bonuses consists of things like spectral editing, various waveform drawings, object editing, source-destination editing and other non-essential features that can greatly enhance specific workflows.

## Pitch editing

Pitch editing is the ability to edit the pitch of notes without time stretching or manually splitting the audio-editing-toolsAuthorization prefer dongle. If the DAW has ARA support then it's rated on how well it integrates [Melodyne](http://www.celemony.com/en/melodyne/what-is-melodyne).

## Pitch Shifting

This is how good the pitch shifting sounds, **and** how few steps are required to achieve a good sounding result. I consider 10cent, +/-1 semitone, +/-7 semitones and +/-12semitones.

I'm considering this in context of the [Pitch Editing](#pitche-editing) system. Simply shifting a region up or down is not considered.

Many programs use the same base algorithm, however they may expose more parameters to that algorithm. I rate higher if the user is given more useful options, even if the same algorithm is present.

## Time Stretching

This is how good the time stretch sounds. I consider 50%, 90%, 110% and 200% stretch.

Many programs use the same base algorithm, however they may expose more parameters to that algorithm. I rate higher if the user is given more useful options, even if the same algorithm is present.

# Midi

## Note Entry Flexibility

Note entry flexibility concerns the number of ways notes can be entered like:

* Step entry
* Piano Roll
* Notation
* Tracker interface
* Drum editor
* Chord/Scale tools

## Note Entry Tools

Note entry tool is the consideration of functions that make note entry easier. Some basics that I expect from any DAW

* Pre-selection of note-length
* Draw notes - or some way to quickly draw in a sequence of repeated notes without pressing multiple shortcuts
* Enter note and adjust position, length and velocity in 1 smooth action.
* Tools for shaping Velocity and CC
* View filtering - some method of hiding or showing specific data in the current editor view
* 

## Multitrack Midi Editing

Multitrack Midi Editing is when the DAW allows you to view multiple streams/tracks/objects of midi data simultaneously and selectively edit one or all of the streams.

Some basic Multitrack Midi Editing features I expect:

* Fast selection of tracks to view
* Optional 'edit follows selection' - So that selecting a track makes it editable, but only as an option
* Stream colouring - some way to visually differentiate data from different midi streams
* Ability to edit multiple streams, not just one at a time
* Easy stream filtering - some way to quickly show/hide data streams without fiddling with checkboxes

## Midi Manipulation Tools

Midi  Manipulation Tools is a selection of processes or tools that let you make algorithmic changes to a selection of data.

I expect certain basic functions, but even within these some DAWs have much more advanced functionality:

* Quantize
* Humanize
* Randomize
* Groove quantize - extract the timing offsets from some midi stream then apply them to another
* Shift/set - moving or setting notes absolutely, relatively or based on some other information
* Velocity tools - compression, expansion, set to value, shapes etc..
* CC tools - tools to re-assign, reshape, thin, interpolate or insert midi CC
* Reverse
* Stretch phrase

## Chord input

Being able to quickly import cords is an important part of many peoples creative process. This rating covers both how easy it is to enter chords and how comprehensive the chord selection is.

I also consider plug-ins that allow you to do this easily, but only if they are included for free.

## Step Sequencing

The ability to create MIDI parts on a simple grid. Features like allowing shifting of notes, velocity control, reading of non-stepped parts and integration into the DAW are considered.

This is _NOT STEP RECORDING_. That is the ability to record notes one at a time after each other.

## Scale and Chord Tools

Scale and Chord Tools are tools that let you create or modify chord progressions or melodies based on some sort of pre-defined pitch constraints.

This rating specifically covers tools that let you change the entire arrangement, or affect the entire arrangement.

## Sysex and NRPN

NRPN means non-registered parameter number. It's a way of sending 14-bit data using 2 7-bit midi streams.

Sysex means 'System Exclusive'. It's a method of sending data that doesn't fall in to the midi spec.

Nrpn and Sysex are very valuable when working with hardware synthesizes and controllers.

## Articulation Management

Some sample libraries use MIDI data to trigger switching between sets of samples that express different instrument articulations. Keyswitches are a common method of achieving this (and often used interchangeably with the concept of articulations). You can thing of this as real-time metadata that's included in the stream of performance data. Perhaps a simpler way of saying it is "MIDI that change how the instrument sounds".

This category rates how well the DAW allows you to manage articulation data.

This is particularly important for orchestral composers and film scorers.

# Scoring

## General

This is a general rating of notation and scoring features. This will be expanded in the future. These ratings are not only compared to other DAWs, but to other scoring softwares like [Sibelius](http://www.avid.com/en/sibelius), [Finale](https://www.finalemusic.com) and [Dorico](https://www.steinberg.net/en/products/dorico/start.html).

I am not a professional engraver or composer, however I am a classically trained musician with many years of experience in the pit. These ratings will develop over time since I generally avoid using DAW notation packages and instead use a specific third-party solution.

If you have any suggestions or comments then please add them on the [DAW Feature Chart](/DAW-Chart.html) page. Thank you!

## Printing

It's one thing to display staves in a way that makes editing easy, but it's another feature class entirely to display data in a manner where a traditional musician can read it.

This rates how well a DAW lets you format a score visually _and_ print it properly.

I don't consider how well these programs compare to 3rd party options. These are ratings relative to the DAWs, not to standalone notation software.

# Live Performance

## First Party Controller Support

The availability and support for controllers developed by the company that made the DAW.

This generally provides excellent integration with the software that is unavailable to third-parties.

## Third Party Controller Support

Support for controllers made by companies that are not the DAW developer.

This is rated in the context of live performance. I have focused on how quickly you can access common controls for tracks, or use features like pads without much effort.

I've rated some software highly that does a particularly good job at supporting common cheap controllers like the [Novation Launchpad](https://www.ableton.com/en/products/controllers/launchpad/) or [Akai APC-40](http://www.akaipro.com/products/pad-controllers/apc-40).

## Clip Launching

Clip launching is the ability to quickly and easily start playback of a sample. When and how the sample is triggered along with the ease of access is considered.

Clip launching is often thought of as being a copy of [Ableton Live's Session View](https://www.ableton.com/en/manual/session-view/), but some products offer their own unique method of playing back samples or whole projects live.

## Cue Preview

Cue Preview is the ability to route sample playback preview to another output.

This may occur in the browser, or it may happen elsewhere. The ease of previewing samples/effects/instruments is considered along with the potential for errors.

## Controller Mapping

In this section I am **NOT** considering the _capability_ of controller mapping technology in the DAW. This rating is for the ease of accessing common controls.

Live performance requires immediate access to a variety of parameters. The ability to quickly map a MIDI CC from hardware->software is what this category is about.

## Project Switching

It's often necessary to switch projects Live. This category considers how easy and how fast it is to switch to another project.

Some DAWs have features like tabs or similar, and this increases their rating by at least 5. Being able to control when/how tabs are loaded increases the rating further.

# Extensibility

## Scripting

The capability for third-parties to create extensions to the software without needing to build the software on specific platforms.

Considerations include: GUI capabilities, integration with the product, documentation, support and over-all capability.

## VST2

Support for [Steinberg's VST 2.4 specification](https://www.steinberg.net/index.php?id=334&L=1). Since most products implement this properly, it is either a 0 or 9 rating.

If I'm made aware of deficiencies in the implementation, then I will remove points as necessary.

1 extra point is given if the host natively supports 32-bit plugins.

## VST3

Support for [Steinberg's VST 3.X specification](https://www.steinberg.net/en/company/technologies/vst3.html).

This rating is based on how much of the VST3 spec the product supports. I am unable to test this _thoroughly_ as a user, so this rating is based off the best information I can gather until I have the time dive in to the VST 3 sdk fully.

1 extra point is given if the host natively supports 32-bit plugins.

## LV2

Support for the [LV2](http://lv2plug.in) format. It is either a 0 or 10 rating currently.

## Audio Units

Support for [Apple's Audio Unit](https://developer.apple.com/library/content/documentation/MusicAudio/Conceptual/AudioUnitProgrammingGuide/Introduction/Introduction.html) format.

## Other

This category is specifically for formats that only that specific host supports. Things like [Avid's AAX](http://apps.avid.com/aax-portal/) or the [SAWStudio API](http://www.sawstudio.com/downloads_api.htm) are considered.

Each format supported adds 1 point to the rating. Extensions to other formats add 1 point to the rating. This is so the ratings are not inflated by companies that only support proprietary formats.

No considerations are given for how many plugins are available in these other formats.

# Collaboration

Features relative to working on the same project on different computers with different users.

## Remote Collaboration

Support for collaboration over a network connection _remotely_. Live collaboration will be given higher ratings than non-live systems, however implementation is key.

## Local Collaboration

Support for collaborating with users in the same physical space.

## Project Interchange

Does the DAW support formats like AAF/OMF and how well? How easy is it to export/import stems? Does the DAW work well across platforms? (mac->windows->linux?)

# Looks

## Themes

This category is the consideration of the _variety_ of themes available. Variations of dark, light, moderate and in between.

## Themability

How much can theme authors change the look of the DAW? If you can only change the colours then it will be rated lowly. If you can change the graphics and move elements around then that will result in a high rating.

Themability also considers how much variation there is in _3rd party_ themes.

## Responsiveness

Responsiveness is how quickly the GUI reacts to input. Most programs have excellent responsiveness with nothing happening, so this is tested while under high load. 

## Zoom

Can the DAW have its elements zoomed to be larger or smaller? 

## HDPI 

HDPI is the support the DAW has for very high resolution displays. All platforms the DAW supports are considered. This ties in with themability.

# Learning

## First-Party Learning

First-party learning covers resources directly available from the developer of the software. I also consider officially sanctioned learning resources from non-company individuals (second-part0).

## Third-Party Learning

Third-Party Learning is resources from everyone else.

## Learning Curve

A higher value means that it's easier to learn.

How easy is it for a _new_ user to attain _high skill_ with the product. This is not 'how easy is it to do basic things', it is a rating of how easy it is to master the full capability of the software.

A basic software may have much higher rating than a more capable software, simply due to less functionality. This rating only works in context of all the other ratings.

## Software Defaults

Software Defaults are the first-launch experiences of the majority of users. How many things will most users want to change upon first opening the software?

# Meta

## Customer Support

Customer Support is how fast and how helpful the company is when attempting to troubleshoot issues, the range of issues they support, the speed of response and the number of potential issues that they may support.

This _is not_ how good of support that you can receive in general for the product. This is about the direct support from the company.

## Software Updates

How frequently the software is updated, the thoroughness of changelogs _and_ if the updates address common user requests.

Some software may be updated more often, some may be updated less often. I take into consideration the consistency of the updates timings to even this out.

## Community Support

Community support is a rating based on how friendly the non-officially-sanctioned communities are to people having issues. This is very subjective, but there are clear tendencies for some groups.

## Community Cohesion

Community Cohesion is how well the community works together and the general 'club-like' nature of the non-officially-sanctioned communities. Do many users know each other? Are there non-offensive in-jokes? Do the developers interact with people? Are there large support/tip threads? Are there users that scour the internet just to help people?

A community with high-cohesion that is relatively unfriendly to newcomers will get a lower rating than an uncohesive community that is very friendly to newcomers.

## Customization

Customization is how much of the DAW can be changed to user preference without requiring extended effort such as writing code or downloading third-party utilities.

# Subjective

## Weirdness

How far the software differs from the general population in terms of common workflows. This can be a positive or negative attribute

## Comprehensibility

How easy is it to approach understanding the DAW at an advanced level.

This has nothing to do with how quickly you can learn to use a DAW to make the music you want. It's about the difficulty of becoming an advanced user relative to what the product offers.

## Fragility

Some products are fragile: they release updates that break existing functionality, don't support backwards compatibility, release half-baked features etc...

This rating considers how likely it is that the user of a given product will have to deal with an update introducing new problems, **OR** a product's _lack of updates_ causing the user to be unable to utilize an advertised feature.

## Professionalism

Every product allows you to make music to some degree. This category considers features relative to film scoring, dialogue editing, broadcast standard adherence, project interchange, turnkey support (can you get the product up and running quickly with a guarantee of no issues?), live support and other media-based features that are encountered by those utilizing the software to make a living beyond _just_ making music.

## Simplicity

How easy is it to understand the primary workflows in a product. **NOT** how easy is it to execute the workflows.

Given an unaided person with minimal pre-requisite knowledge, how much effort would be required to gain an understanding of what is occurring in a project and/or how to achieve that goal.

This could also be thought of as a rating for how few "Gotcha"s or "Dark Corners" there are.

# Bias

## Preference

How much I personally enjoy using or reviewing the software.

## History

How long I've been using the software relative to its origins.

## Connections

How connected I am to the product in terms of personal relationships, testing, investment and income dependence.

# Support Me!

This post took 3 hours to research, photograph, write and edit. If you appreciate the information presented then <a href="/DonateNow/">please consider joining patreon or donating!</a>

<a href="https://www.patreon.com/bePatron?u=7465992"> <img class="patreon-button" src="/assets/Patreon.png" alt="Be a Patreon!"></a>

<form style="text-align: center;" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick">
<input type="hidden" name="hosted_button_id" value="BR247JAZBTUJJ">
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
</form>

If you have any questions or comments, please comment below! I read every comment and respond to most.



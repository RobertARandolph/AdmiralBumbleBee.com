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

No picture here, because it doesn't exist!

If you want to know if/when a glitch has happened in your audio then you're out of luck until you listen to the playback.

Total workflow killer to need to double-check every single recording in case Windows has decided to have a seizure.

### Notifications

{::nomarkdown}
<img src="/assets/Cakewalk/Notifications.png" alt="Notifications">
<div class="image-caption">Notifications</div>
{:/nomarkdown}

You can turn these off, but they're on by default and almost totally useless.

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

Then again [Windows may not let you keep your system running as-is anyway]({% post_url 2018-12-15-Why-I-hate-Windows %}#windows-update).

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

{::nomarkdown}
    <video autoplay loop muted class="gifvid">
        <source src="/assets/Cakewalk/ClipGroup.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <div class="video-caption">Clip Grouping going wrong</div>
{:/nomarkdown}

Above you can see that I have 2 "Clip Selection Groups" as indicated by the `01` in the upper left. I select one... wait, just one? It's a selection group? Anyway, I cut it and now I have a weird partial group. If I restart this and click the top-bar of the clip it works as expected.

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

{::nomarkdown}
<img src="/assets/Cakewalk/HungLikeAHorse.png" alt="Playback is stopped, no MIDI is present">
<div class="image-caption">Playback is stopped, no MIDI is present</div>
{:/nomarkdown}

When working with digital synths (VSTi), I encountered hanging notes many times. This isn't uncommon when working in a DAW, but what _was_ bothersome is that I was unable to find how to send an "All Notes Off" to kill any stuck notes without Googling.

It's the little MIDI icon with a cross through it on the transport, under the time display.

{::nomarkdown}
<img src="/assets/Cakewalk/Panic.png" alt="This is the panic button">
<div class="image-caption">This is the panic button</div>
{:/nomarkdown}

It also doesn't always work.

I know because I've had to hit it a few hundred times in the last 3 weeks. I have about a 75% success rate.

### Cakewalk Application has stopped working

{::nomarkdown}
<img src="/assets/Cakewalk/Hang.png" alt="Hung like a horse">
<div class="image-caption">Hung like a horse</div>
{:/nomarkdown}

I've seen this dialog a good bit. I've seen it the most after recording long sections of audio, and then I manually need to find the audio and attempt to import it back to the correct place.

An extra layer of annoyance is that for some reason my 'recent projects' gets wiped or truncated after a crash on occasion. Usually the project that was active when the DAW crashed ends up missing, which means extra clicking around when I'm already frustrated enough.

### Help Module

{::nomarkdown}
<img src="/assets/Cakewalk/HelpModule.png" alt="Help Module">
<div class="image-caption">Unhelpful Module</div>
{:/nomarkdown}

### Cakewalk Projects

{::nomarkdown}
<img src="/assets/Cakewalk/CakewalkProjects.png" alt="c:\CakewalkProjects">
<div class="image-caption">c:\CakewalkProjects</div>
{:/nomarkdown}

Why are Cakewalk Projects stored in the root of the C drive by default?

They should be in C:\Users\name\Documents or C:\Cakewalk Projects\Music like everything else is supposed to do!

### NO MIXER UNDO

{::nomarkdown}
    <video autoplay loop muted class="gifvid">
        <source src="/assets/Cakewalk/NoMixerUndo.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <div class="video-caption">No Mixer Undo</div>
{:/nomarkdown}

AHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH

Watch as I move a fader and hit `ctrl-z` multiple times. My project slowly disassembles itself, but the fader never moves.

It's 2018. Most DAWs have mixer undo. It's a vital workflow tool, especially when working with certain automation tasks or working with grouped faders.

### Fader Groups are Borked

{::nomarkdown}
    <video autoplay loop muted class="gifvid">
        <source src="/assets/Cakewalk/FaderGroup.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <div class="video-caption">Broken Fader Groups</div>
{:/nomarkdown}

Watch how when I move a fader, then touch another... the previous one pops back.

Cakewalk stops fader movement when one of the faders in the group has reached its max/min value. The issue is that the fader you're currently moving still can move. Soon as you touch the group again, that fader will reset.

This is broken as of this posting. It may be fixed in the future.

### Media Browser

{::nomarkdown}
<img src="/assets/Cakewalk/Browser.png" alt="It does browse, but that's about it">
<div class="image-caption">It does browse, but that's about it</div>
{:/nomarkdown}

The media browser is not that great.

If you right-click to get properties you are given the useless Windows file properties window.

MIDI files can be previewed through the currently selected track

The controls for preview output (audio and synth are separate) and 'preview at host tempo' are located in a multi-layered menu triggered by pressing a small downward facing triangle.

I was unable to find an ability to set user-folders, and even if it is possible there does not seem to be any way to quickly jump to a user folder.

### Automation Modes

{::nomarkdown}
<img src="/assets/Cakewalk/AutomationModes.png" alt="Automation Modes are lacking">
<div class="image-caption">Automation Modes are lacking</div>
{:/nomarkdown}

This is something that may fly in a hobbyist environment or simple professional contexts, but having 3 simple automation modes is bothersome.

Let's take a moment and look at what a competitor offers, then I'll explain why this matters.

{::nomarkdown}
<img src="/assets/Cakewalk/CubaseAutomation.png" alt="Cubase's Automation options">
<div class="image-caption">Cubase's Automation options</div>
{:/nomarkdown}

Cubase doesn't even have the crème de la crème of automation systems (in fact, it can be argued that it's the worst of the more advanced systems), yet it's **FAR** superior to what Cakewalk offers.

So why should you care?

Have you ever wanted to just punch-in some automation to a short section? Adjust an entire complex automation curve after the fact by combining 2+ curves? Scale a curve by another curve? Redo only a section of some automation? Write the first or last value to the beginning or end of the track? Loop a section and have the mix "set" by the end of that loop (and continue mixing along the track in 'loops')? Have a specific time selection where _no_ automation exists and your fader value reigns supreme? Stop playback in latch mode and write the final value stopped? Write automation using native controls when stopped?

I can go on... there's dozens of workflows other DAWs are capable of that can greatly speed up your mixing workflow once you realize they exist.

Sonar's automation system is in great need of an overhaul. It's the absolute basics, and arguably is even missing some basic tenants of a competent automation system.

Let's not forget either that it does not have any sort of implicit curves. All of the draw tools utilize a system that generations new points of automation. Should you want to change a curve, you need to re-draw it. That [transform tool](#transform-tool) doesn't exist for automation like it does in other DAWs (like DP, Cubase, Studio One and Reaper)

There is "offset mode", but it comes with this silly caveat

```Note: Any position that you set a fader to in Offset mode remains in effect when you switch back to Envelope mode. For example, if you set a volume fader to -INF while in Offset mode, switch to Envelope mode and drag the fader to its maximum level, you will not hear anything.```

What a brilliant way to end up with a project that seems hopelessly bugged! You can easily end up with a fader that seems like it's doing nothing.

When using 'offset mode' I also crashed Cakewalk multiple times.

### No VCAs

{::nomarkdown}
<img src="/assets/Waveform/Weird/VCAs.png" alt="VCAs are weird">
<div class="image-caption">VCAs don't exist in Cakewalk</div>
{:/nomarkdown}

We can't discuss my dislike of the automation system without talking about VCAs. First let me help you understand why this matters:

[Explanation 1]({% post_url 2018-03-08-Waveform-9-the-good-the-bad-the-weird-part-1 %}#vcas)
[Explanation 2]({% post_url 2016-12-16-Things-I-hate-about-Digital-Performer %}#vcas)
[Explanation 3]({% post_url 2017-09-18-Mixbus-32c-The-Mixer %}#vcas)
[Explanation 4]({% post_url 2017-07-02--Things-that-Bitwig-could-improve %}#vca)
[Explanation 5]({% post_url 2016-06-02-Studio-OpiniOne %}#vca-faders)

Hopefully one of those explanations hooks you. I occasionally take a stab at explaining the 'whats' and benefits of VCAs in various ways to reach new people.

Along with Cakewalk's simplistic automation system, there are no VCAs faders. VCA faders not only make mixing a joy, but are another tool in the arsenal of a automationist (I made that word up, I hope it sticks).

I **LOVE** working with VCA faders. They make working with large complex arrangements a breeze. _If anything_, they allow you to easily layer automation and create 'trim automation' easily.

## Basic Editing

{::nomarkdown}
    <video autoplay loop muted class="gifvid">
        <source src="/assets/Cakewalk/BasicEditing.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <div class="video-caption">Basic Editing</div>
{:/nomarkdown}

## Audio Snap

{::nomarkdown}
    <video autoplay loop muted class="gifvid">
        <source src="/assets/Cakewalk/AudioSnap.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <div class="video-caption">Audio Snap</div>
{:/nomarkdown}

## Asset Management

{::nomarkdown}
<img src="/assets/Cakewalk/AssetManagement.png" alt="Asset Management">
<div class="image-caption">Asset Management</div>
{:/nomarkdown}

## Drum Replacer

{::nomarkdown}
<img src="/assets/Cakewalk/DrumReplacer.png" alt="Drum Replacer">
<div class="image-caption">Drum Replacer</div>
{:/nomarkdown}

Does not auto-scroll sometimes.
Desyncs sometimes.

## VocalSync

{::nomarkdown}
    <video autoplay loop muted class="gifvid">
        <source src="/assets/Cakewalk/VocalSync.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <div class="video-caption">VocalSync</div>
{:/nomarkdown}

# Mixing

## Console

{::nomarkdown}
<img src="/assets/Cakewalk/Console.png" alt="Console">
<div class="image-caption">Console</div>
{:/nomarkdown}

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


#### Compressor 

{::nomarkdown}
  <img src="/assets/Cakewalk/Compressor.png" alt="Compressor">
  <div class="image-caption">Compressor </div>
{:/nomarkdown}


#### EQ 

{::nomarkdown}
  <img src="/assets/Cakewalk/EQ.png" alt="EQ">
  <div class="image-caption">EQ </div>
{:/nomarkdown}


#### Tube 

{::nomarkdown}
  <img src="/assets/Cakewalk/Tube.png" alt="Tube">
  <div class="image-caption">Tube </div>
{:/nomarkdown}


#### Saturation Knob

{::nomarkdown}
  <img src="/assets/Cakewalk/SaturationKnob.png" alt="Saturation Knob">
  <div class="image-caption">Saturation Knob</div>
{:/nomarkdown}


#### Tape Emulator

{::nomarkdown}
  <img src="/assets/Cakewalk/TapeEmulator.png" alt="Tape Emulator">
  <div class="image-caption">Tape Emulator</div>
{:/nomarkdown}


#### Console Emulation

{::nomarkdown}
  <img src="/assets/Cakewalk/ConsoleEmulation.png" alt="Console Emulation">
  <div class="image-caption">Console Emulation</div>
{:/nomarkdown}


#### REmatrix Solo

{::nomarkdown}
  <img src="/assets/Cakewalk/REmatrixSolo.png" alt="REmatrix Solo">
  <div class="image-caption">REmatrix Solo</div>
{:/nomarkdown}


#### BREVERB 2

{::nomarkdown}
  <img src="/assets/Cakewalk/BREVERB2Pro.png" alt="BREVERB 2">
  <div class="image-caption">BREVERB 2</div>
{:/nomarkdown}


#### FX Chain

{::nomarkdown}
  <img src="/assets/Cakewalk/FXChain.png" alt="FX Chain">
  <div class="image-caption">FX Chain</div>
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

{::nomarkdown}
    <video autoplay loop muted class="gifvid">
        <source src="/assets/Cakewalk/BasicMIDI.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <div class="video-caption">Basic MIDI Editing</div>
{:/nomarkdown}

I'm not particularly happy with basic MIDI Editing in Cakewalk. The smart tool's hot regions are small, so changing what the tool does requires hovering over tiny portions of notes.

The editing is tool-based, but the tools are far away in the main control bar and utilize the F-keys by default to switch to various tools. You can use Middle Mouse Click to access a toolbar, but I found this to not be reliable as the tool bar would come up and disappear almost instantly sometimes.

 Most of the tools have varying modes, and the default setup is that you need to press the key multiple times to cycle through the various modes _and_ watch what the currently selected tool is! Terrible workflow! It's almost necessary to go and create new shortcuts for the various commonly used tools, or spend your time in "mode-cycle and watch" limbo.

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

{::nomarkdown}
    <video autoplay loop muted class="gifvid">
        <source src="/assets/Cakewalk/Transform.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <div class="video-caption">Transform Tool</div>
{:/nomarkdown}

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

## Synth Rack

{::nomarkdown}
<img src="/assets/Cakewalk/SynthRack.png" alt="SynthRack...">
<div class="image-caption">SynthRack...</div>
{:/nomarkdown}

MIDI track outputs to synth, audio track takes input from synth with monitoring on.

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

## Screensets

{::nomarkdown}
<img src="/assets/Cakewalk/Screensets.png" alt="Screensets">
<div class="image-caption">Screensets</div>
{:/nomarkdown}

## CWAF

{::nomarkdown}
<img src="/assets/Cakewalk/CWAF.png" alt="CWAF">
<div class="image-caption">CWAF</div>
{:/nomarkdown}

## ACT

{::nomarkdown}
<img src="/assets/Cakewalk/ACT.png" alt="ACT">
<div class="image-caption">ACT</div>
{:/nomarkdown}

The idea here is that Cakewalk will intelligently map MIDI input to the current context. So you can map your controller to multiple plugins, and the correct mapping will become live on focus.

In practice... it is a pile of garbage.

Not only is it difficult to get working _even if_ you have a device with official mappings, but it's prone to corruption, won't control VST3 plugins and undoing mappings requires use of a [third party program](http://forum.cakewalk.com/How-to-make-ACT-Learn-button-work-in-any-Sonar-version-m3419474.aspx) that is equally poorly designed and cumbersome to use.

I found at least 4 third-party programs that attempt to fix the issues with ACT, yet the authors don't seem to admit that there's issues with the design or function.

Guys, if you have to write software to fix someone else's software... that 'someone else's software' **IS RUBBISH**. You can spin it however you want, but ACT is fundamentally flawed and functionally broken.

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

## Mix Recall

{::nomarkdown}
<img src="/assets/Cakewalk/MixRecall.png" alt="Mix Recall">
<div class="image-caption">Mix Recall</div>
{:/nomarkdown}

## Keyboard Shortcuts

{::nomarkdown}
<img src="/assets/Cakewalk/Shortcuts.png" alt="Keyboard Shortcuts">
<div class="image-caption">Keyboard Shortcuts</div>
{:/nomarkdown}


# Plugins

## Effects

### Sonitus Compressor 

{::nomarkdown}
  <img src="/assets/Cakewalk/SonitusCompressor.png" alt="Sonitus Compressor ">
  <div class="image-caption">Sonitus Compressor </div>
{:/nomarkdown}

### Sonitus Delay 

{::nomarkdown}
  <img src="/assets/Cakewalk/SonitusDelay.png" alt="Sonitus Delay ">
  <div class="image-caption">Sonitus Delay </div>
{:/nomarkdown}

### Sonitus Gate 

{::nomarkdown}
  <img src="/assets/Cakewalk/SonitusGate.png" alt="Sonitus Gate ">
  <div class="image-caption">Sonitus Gate </div>
{:/nomarkdown}

### Sonitus Multiband 

{::nomarkdown}
  <img src="/assets/Cakewalk/SonitusMultiband.png" alt="Sonitus Multiband ">
  <div class="image-caption">Sonitus Multiband </div>
{:/nomarkdown}

### Sonitus Equalizer 

{::nomarkdown}
  <img src="/assets/Cakewalk/SonitusEqualizer.png" alt="Sonitus Equalizer ">
  <div class="image-caption">Sonitus Equalizer </div>
{:/nomarkdown}

### Sonitus WahWah 

{::nomarkdown}
  <img src="/assets/Cakewalk/SonitusWahWah.png" alt="Sonitus WahWah ">
  <div class="image-caption">Sonitus WahWah </div>
{:/nomarkdown}

### Sonitus Modulator 

{::nomarkdown}
  <img src="/assets/Cakewalk/SonitusModulator.png" alt="Sonitus Modulator ">
  <div class="image-caption">Sonitus Modulator </div>
{:/nomarkdown}

### Sonitus Phase 

{::nomarkdown}
  <img src="/assets/Cakewalk/SonitusPhase.png" alt="Sonitus Phase ">
  <div class="image-caption">Sonitus Phase </div>
{:/nomarkdown}

### Sonitus Reverb 

{::nomarkdown}
  <img src="/assets/Cakewalk/SonitusReverb.png" alt="Sonitus Reverb ">
  <div class="image-caption">Sonitus Reverb </div>
{:/nomarkdown}

### Sonitus Surround 

{::nomarkdown}
  <img src="/assets/Cakewalk/SonitusSurround.png" alt="Sonitus Surround ">
  <div class="image-caption">Sonitus Surround </div>
{:/nomarkdown}

### Sonitus Surround Comp

{::nomarkdown}
  <img src="/assets/Cakewalk/SonitusSurroundComp.png" alt="Sonitus Surround Comp">
  <div class="image-caption">Sonitus Surround Comp</div>
{:/nomarkdown}

### BREVERB 2 

{::nomarkdown}
  <img src="/assets/Cakewalk/BREVERB2.png" alt="BREVERB 2 ">
  <div class="image-caption">BREVERB 2 </div>
{:/nomarkdown}

### TH3  

{::nomarkdown}
  <img src="/assets/Cakewalk/TH3.png" alt="TH3  ">
  <div class="image-caption">TH3  </div>
{:/nomarkdown}

### Boost 11 

{::nomarkdown}
  <img src="/assets/Cakewalk/Boost11.png" alt="Boost 11 ">
  <div class="image-caption">Boost 11 </div>
{:/nomarkdown}

## Instruments

### SI-Bass Guitar

{::nomarkdown}
  <img src="/assets/Cakewalk/SI-BassGuitar.png" alt="SI-Bass Guitar">
  <div class="image-caption">SI-Bass Guitar</div>
{:/nomarkdown}

### SI-Drum Kit

{::nomarkdown}
  <img src="/assets/Cakewalk/SI-DrumKit.png" alt="SI-Drum Kit">
  <div class="image-caption">SI-Drum Kit</div>
{:/nomarkdown}

### SI-Electric Piano

{::nomarkdown}
  <img src="/assets/Cakewalk/SI-ElectricPiano.png" alt="SI-Electric Piano">
  <div class="image-caption">SI-Electric Piano</div>
{:/nomarkdown}

### SI-String Section

{::nomarkdown}
  <img src="/assets/Cakewalk/SI-StringSection.png" alt="SI-String Section">
  <div class="image-caption">SI-String Section</div>
{:/nomarkdown}

### TTS-1 

{::nomarkdown}
  <img src="/assets/Cakewalk/TTS-1.png" alt="TTS-1">
  <div class="image-caption">TTS-1</div>
{:/nomarkdown}

## MIDI FX

### Arpeggiator

{::nomarkdown}
  <img src="/assets/Cakewalk/Arpeggiator.png" alt="Arpeggiator">
  <div class="image-caption">Arpeggiator</div>
{:/nomarkdown}

### Chord Analyzer

{::nomarkdown}
  <img src="/assets/Cakewalk/ChordAnalyzer.png" alt="Chord Analyzer">
  <div class="image-caption">Chord Analyzer</div>
{:/nomarkdown}

### Echo Delay

{::nomarkdown}
  <img src="/assets/Cakewalk/EchoDelay.png" alt="Echo Delay">
  <div class="image-caption">Echo Delay</div>
{:/nomarkdown}

### MIDI Event Filter

{::nomarkdown}
  <img src="/assets/Cakewalk/MIDIEventFilter.png" alt="MIDI Event Filter">
  <div class="image-caption">MIDI Event Filter</div>
{:/nomarkdown}

### Quantize  

{::nomarkdown}
  <img src="/assets/Cakewalk/Quantize.png" alt="Quantize">
  <div class="image-caption">Quantize</div>
{:/nomarkdown}

### Transpose  

{::nomarkdown}
  <img src="/assets/Cakewalk/Transpose.png" alt="Transpose">
  <div class="image-caption">Transpose</div>
{:/nomarkdown}

### Velocity  

{::nomarkdown}
  <img src="/assets/Cakewalk/Velocity.png" alt="Velocity">
  <div class="image-caption">Velocity</div>
{:/nomarkdown}

# Support Me!

This post took 46 hours to research, screenshot, write, whine and edit. If you appreciate the information presented then <a href="/DonateNow/">please consider joining patreon or donating!</a>

<a href="https://www.patreon.com/bePatron?u=7465992" data-patreon-widget-type="become-patron-button">Become a Patron!</a><script async src="https://c6.patreon.com/becomePatronButton.bundle.js"></script>
 
<form style="text-align: center;" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick">
<input type="hidden" name="hosted_button_id" value="BR247JAZBTUJJ">
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
</form>

**If you have any questions or comments, please comment below! I read every comment and respond to most.** No registration is necessary to comment, so don't be shy.


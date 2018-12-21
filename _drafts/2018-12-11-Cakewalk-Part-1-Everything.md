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

I actually didn't like much at first. That did change over time though.

## Annoyances

### No underrun alert

No picture here, because it doesn't exist!

If you want to know if/when a glitch has happened in your audio then you're out of luck until you listen to the playback.

Total workflow killer to need to double-check every single recording in case Windows has decided to have a seizure.

### Lost Windows

It's easy to 'lose' a window in the background with no way to get it back.

No way to screenshot it because the window is gone until you start moving things around to find it. Incredibly frustrating.

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

As far as I can see their are no specific settings that are set project by project that you can change after the project is created, except for the things in the control bar, and associated menus.

### Analytics

{::nomarkdown}
<img src="/assets/Cakewalk/Analytics.png" alt="Analytics on by default?">
<div class="image-caption">Analytics on by default?</div>
{:/nomarkdown}

Cakewalk has analytics turned on by default, which is an invasion of privacy that I do not think is acceptable. These analytics may be anonymized, butt I do not feel that a DAW should have these things enabled by default.

### Buzz Words

{::nomarkdown}
<img src="/assets/Cakewalk/Buzz.png" alt="Buzzwords Galore">
<div class="image-caption">Buzzwords Galore</div>
{:/nomarkdown}

MIDI Microscope, Lenses, ACT, CAL, Aim Assist, VocalSync, Skylight, Audiosnap etc...

Can you guess what these things do without checking the manual? If you're not already a Cakewalk user you may be able to guess [Vocalsync](#vocalsync), or wrongly guess what Audiosnap does and be lost on the rest.

I asked a number of educated audio people (around 50 or so) what they thought some of these terms referred to, and only one person got _any_ right: a former Sonar user. He didn't even get them all!

Cakewalk is awash in buzzwords that don't actually describe what the function does. The manual does do an admirable job explaining the features, but you may be in for some heavy manual reading to fully understand the functionality offered by the software.

### Empty MIDI Clips

{::nomarkdown}
<img src="/assets/Cakewalk/EmptyMIDI.png" alt="This isn't possibly">
<div class="image-caption">This isn't possible</div>
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

I like the concept of having some sort of live help that shows you what a control does, but Cakewalk's help module is almost completely useless.

It is slow to react to what you are focusing on, and the description offered is minimal and unhelpful.

Luckily there is another help system which allows you to press F1, and the manual load focused on the section that corresponds to where your mouses hovering. That is useful.

### Weak Metronome

{::nomarkdown}
<img src="/assets/Cakewalk/Metronome.png" alt="No metronome settings">
<div class="image-caption">No metronome settings</div>
{:/nomarkdown}

There's no rhythms, no time-signature changes, no user-based sounds (maybe you can add this in a specific folder?), no adjustable tone-based metronome.

It's a poor showing of a metronome system.

### Cakewalk Projects

{::nomarkdown}
<img src="/assets/Cakewalk/CakewalkProjects.png" alt="c:\CakewalkProjects">
<div class="image-caption">c:\CakewalkProjects</div>
{:/nomarkdown}

Why are Cakewalk Projects stored in the root of the C drive by default?

They should be in C:\Users\name\Documents or C:\Users\name\Music like everything else is supposed to!

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

### Plugin Selection

{::nomarkdown}
<img src="/assets/Cakewalk/PluginMenu.png" alt="Plugin Menus">
<div class="image-caption">Plugin Menus</div>
{:/nomarkdown}

Adding/Removing plugins isn't particularly fun in Cakewalk. You need to either use the browser + drag'n'drop or utilize the terrible menu system.

[There is a third-party solution](https://www.kvraudio.com/forum/viewtopic.php?f=105&t=171797) that sorta fixes the issue, but it still relies on utilizing multi-layer menus for finding your products.

A proper in-line plugin finder is needed! The other DAWs have it guys, get with the times!

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

### Zoom Tool

{::nomarkdown}
<img src="/assets/Cakewalk/ZoomTool.png" alt="Zoom Tool is hidden!">
<div class="image-caption">Zoom Tool is hidden!</div>
{:/nomarkdown}

I love the mouse-based zoom workflow. I don't like using mice for much, but for selecting areas of the screen to work on it's a great tool.

Cakewalk has a tool that lets you select what you want to see by just boxing that area. Press `z` to activate it.

It's not on the tool palette though! I bet a lot of Cakewalk users don't know it exists.

Try the modifier keys with it too to unlock some extra features.

There's also a hidden scrub tool if you look for it.

# General Audio

## Basic Editing

{::nomarkdown}
    <video autoplay loop muted class="gifvid">
        <source src="/assets/Cakewalk/BasicEditing.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <div class="video-caption">Basic Editing</div>
{:/nomarkdown}

Basic editing is not a golden star on Cakewalk's reputation.

Editing relies on utilizing multiple tools which are presented in layers, there is an edit tool with multiple sub tools, there is a draw tool with multiple sub tools, there is an array stool with multiple sub tools, there is a select tool, there is a move tool and there is a smart tool.

Juggling these tools is not exactly the most efficient of workflows. The smart tool does work, but it does lack a number of features offered by other tools.

If you have ever edited in a DAW that has a keyboard-based editing flow, or a more functional smart tool then utilizing something like Cakewalk's fractured system is not the most pleasant of experiences.

You can get things done that need to be done, but there are other systems for basic audio editing that are designed to work much more efficiently and offer more functionality.

## Takes and Comping

{::nomarkdown}
  <video autoplay loop muted class="gifvid">
    <source src="/assets/Cakewalk/Comping.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <div class="video-caption">Takes and Comping</div>
{:/nomarkdown}

Takes and comping in Cakewalk are well implemented.  I have used the number of comping systems and I find that Cakewalk's is easy to use and allows enough flexibility to handle most tasks.

One of the things that I enjoy about it is that you can record directly to the take lanes in case you have a take that you need to do overdubs on. This allows you to minimize the number of take lanes, so that you do not have a screen full of takes that you need to scroll up and down to utilize.

There are systems that are more complex and have more features, but hose systems tend to be error-prone and get in the way of even more advanced workflows.

## Audio Snap

{::nomarkdown}
    <video autoplay loop muted class="gifvid">
        <source src="/assets/Cakewalk/AudioSnap.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <div class="video-caption">Audio Snap</div>
{:/nomarkdown}

This is what is referred to as warping in other products, but Cakewalk's implementation is somewhat sad.

You simply get some lines drawn on your waveform that you can move around to stretch that portion of audio between the adjacent 'audio snap' lines.

The waveform is not updated in real time, so it can be difficult to know exactly what you were going to get before hand. This is important because the algorithm does not always put the transient marker exactly where it needs to be. In some other products there is no need to move around the markers, since you can see exactly what is happening in real time. When you can see what is happening in real time you can just move the marker to exactly where things need to go and get on with your life.

Look at how Studio One does it:

{::nomarkdown}
<img src="/assets/StudioEvaluatione/warp.gif" alt="Studio One Warping">
<div class="image-caption">Studio One Warping</div>
{:/nomarkdown}

Doesn't that look so much better? Everything about it is better from a user interaction perspective.

Not only that but you can utilize working across multiple tracks at the same time. So if you wish to move a snare drum hit in a multitrack recording you can do that.

Other products also have fully featured quantization tools that allow you to work with warp markers as if they were MIDI notes, or to transfer of warp markers directly to MIDI.

As far as I know does not have these features.

## Asset Management

{::nomarkdown}
<img src="/assets/Cakewalk/AssetManagement.png" alt="Asset Management">
<div class="image-caption">Asset Management</div>
{:/nomarkdown}

Cakewalk comes with some basic audio asset management tools:

* Consolidate Project - Consolidate takes all of the files referenced that exist outside of the project folder and puts them inside the project folder.
* Clean Audio Folder - Clean removes all audio in the projects audio folder that is not currently referenced in the project.

## Drum Replacer

{::nomarkdown}
<img src="/assets/Cakewalk/DrumReplacer.png" alt="Drum Replacer">
<div class="image-caption">Drum Replacer</div>
{:/nomarkdown}

Drum replacer allows you to set a threshold which will cause a sample to be triggered when that threshold is violated by the audio.

As you may expect by the name, this is used to replace drums in drum recordings.

It does have a neat feature that allows you to apply a filter before the detection, and it shows the audio's waveform after the processing.You can also limit how frequently samples can be triggered, which helps with lower frequency sounds that may look like multiple hits to the replacer.

You can add and remove triggers manually, and I quite appreciate this feature.

It is also possible to output the triggers to midi so that you can utilize an external software instrument to produce the drum sounds. I find that this workflow is somewhat cumbersome though. Other products simply let you click a button to export a midi track, but drum replacer directly outputs the midi to a synth that is currently in the project. If you want to capture the midi then you need to set up a MIDI loopback and record it.

When working with complex parts is nice to be able to export to MIDI directly and then utilize the plethora of midi editing tools at your disposal to clean up the triggers.

I found that this worked relatively well, particularly when using sound fonts that had multiple velocity levels for a sound, but there were a few issues:

* Does not auto-scroll sometimes.
* Occasionally the sound will de-sync from the recording
* No output to MIDI
* Limited support for sample types (only soundfonts allow multiple velocity)
* Creating your own SFZ files is a pain. [There is a utility](https://app.box.com/s/aq7o929e14mamea5rng4zjotj0ge0xi5), but it's something that should not need to exist.

Overall I did find that the workflow works relatively well for doing simple drum emplacement. If you need to work with more complex parts then I would much rather use a different DAW.

## VocalSync

{::nomarkdown}
    <video autoplay loop muted class="gifvid">
        <source src="/assets/Cakewalk/VocalSync.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <div class="video-caption">VocalSync</div>
{:/nomarkdown}

Vocalsync is an answer to [VocAlign](https://www.synchroarts.com/products/vocalign-pro/overview).

The idea is to analyze two pieces of audio and then shift one of them so that it aligns with the source. This is done with an engine similar to [audiosnap](#audiosnap), so audio is affected only between parts where it needs to be.

I found that it works fairly well, but does not work as well as vocalign or [Align takes](/ReaperScripts.html#align-takes---thread).

# Mixing

## Console

{::nomarkdown}
<img src="/assets/Cakewalk/Console.png" alt="Console">
<div class="image-caption">Console</div>
{:/nomarkdown}

The mixing console is what you would expect from digital audio software, it has all the basic features that you would want contained in the [mix strips](#mix-strip)

A thing that I enjoy is that you can adjust the metering specification for the various types of channels. It would be nice if VU and K-System metering was available, but rms is fine enough for most uses.

Another feature that I like is that you can select the range of the meter for each individual channel or for each type of channel.

One of the more disappointing things is that there is no navigation system that allows you to quickly find or jump to a specific track, or a type of track. Other products have things like search boxes and/or tree views that make it easy to navigate a large project in the mix console.I worked on a 45 track project in Cakewalk and even that was relatively difficult to move around and without any easy way of finding tracks.

(Utilizing folders only obfuscates information and adds more clicks. They're a great organizational tool, but they are _not_ a navigation tool.)

### Send Assistant

{::nomarkdown}
<img src="/assets/Cakewalk/SendAssistant.png" alt="Send Assistant">
<div class="image-caption">Send Assistant</div>
{:/nomarkdown}

Creating sins is something that most DAWss are not very good at. The act of creating a send is usually ambiguous since there are multiple ways that you may want this to happen and various goals that you may have when creating a send.

Enter the Send Assistant. It offers a dialogue that makes it easy to create a send to the destination that you want.

It is also possible to create sends directly from the plus button next to the send. You can create new tracks or utilize existing tracks, and there is this concept of a "patch point".

Patch points allow you to send audio to a bus that can then be used as an input on any other track. Patch points allow you to send audio from any track to any other track.

All in all, creating sends in Cakewalk is an unusually pleasant experience.

### Mix Strip

{::nomarkdown}
<img src="/assets/Cakewalk/MixStrip.png" alt="Mix Strip">
<div class="image-caption">Mix Strip</div>
{:/nomarkdown}

The mix strip for each channel offers you most of what you'd expect:
* Mono/Stereo
* Polarity Inversion
* Automation modes
* Mute
* Solo
* Record arm
* Input Monitor
* FX
* Sends
* Pans
* Faders
* I/O assignment

It is a bit disappointing that you cannot change the size of the faders, so you end up bound to the relatively small faders you are offered. A neat feature is that you can easily access [Pro Channel](#prochannel) straight from the mix strip by clicking the pro channel button.

I am not a fan of using menus to remove sends or effects. It is not difficult to add a modifier that allows you to click in effect or a send and remove it. Two clicks and visual recognition of a menu is a poor workflow.

### ProChannel

{::nomarkdown}
<img src="/assets/Cakewalk/ProChannel.png" alt="Pro Channel">
<div class="image-caption">Pro Channel</div>
{:/nomarkdown}

I **LOVE** ProChannel.

I know that it seems silly, but I love channel strips in mixers in DAWs, and I think that Cakewalk's channel strip is only second to what Steinberg offers in Cubase and Nuendo.

You are given a selection of tools that sound relatively decent and are easy to access for every single channel in your console. They are also fairly CPU friendly.

It appears that before BandLab purchased Cakewalk, Sonar had many more ProChannel modules. I would love to see these added, but I suspect that they will be separated out as purchasable assets to help monetize Cakewalk.

#### Compressor 

{::nomarkdown}
  <img src="/assets/Cakewalk/Compressor.png" alt="Compressor">
  <div class="image-caption">Compressor </div>
{:/nomarkdown}

An [1176 style compressor](https://www.uaudio.com/hardware/1176ln.html). Fast attack time and that "all buttons in"mode is available as you would expect.

It does not sound exactly like an 1176. Despite that I have enjoyed utilizing it when mixing in Cakewalk and I think that it is a great compressor despite its inauthenticity.

#### EQ 

{::nomarkdown}
  <img src="/assets/Cakewalk/EQ.png" alt="EQ">
  <div class="image-caption">EQ </div>
{:/nomarkdown}

This is an atypical, four band equalizer with a high-pass and low-pass.

There are four modes:

* Hybrid - [SSL 400 E-series curves](https://en.wikipedia.org/wiki/Solid_State_Logic#4000_series) except that when you cut, you get a much sharper constant-q response. "Surgical" when cutting and "broad" when boosting.
* Pure - Symmetrical cuts and boosts that are not constant-q. This gives you a very wide equalizer that is good for broad changes.
* E-Type - [SSL4k E-type](https://en.wikipedia.org/wiki/Solid_State_Logic#4000_series). A more aggressive sound with that becomes _less_ aggressive with larger gain values. Sharp with small changes, broad with large changes. Your typical constant-q behaviour. (Also my favorite EQ style)
* G-type - Much broader EQ response like the [SSL 4000 G-type](https://en.wikipedia.org/wiki/Solid_State_Logic#4000_series). Large boosts are similar to the E-type, but smaller boosts are broader.

I really enjoy using the ProChannel equalizer.

#### Tube 

{::nomarkdown}
  <img src="/assets/Cakewalk/Tube.png" alt="Tube">
  <div class="image-caption">Tube </div>
{:/nomarkdown}

I may not be very popular with this opinion, but I feel that the two module just sounds farty and unpleasant.

Turning on type II makes this even worse. It gives you a saturation sound that is devoid of any high-end sparkle but has the grid and the low-end that just causes a mix to end up sounding muddy and overly dense.

#### Saturation Knob

{::nomarkdown}
  <img src="/assets/Cakewalk/SaturationKnob.png" alt="Saturation Knob">
  <div class="image-caption">Saturation Knob</div>
{:/nomarkdown}

[Softube's Saturation Knob](https://www.softube.com/index.php?id=satknob) (which is free to any DAW users) is available in the ProChannel. I am not the biggest fan of this, but I have heard people use it any pleasing way.

#### Tape Emulator

{::nomarkdown}
  <img src="/assets/Cakewalk/TapeEmulator.png" alt="Tape Emulator">
  <div class="image-caption">Tape Emulator</div>
{:/nomarkdown}

Ahhhh, the ubiquitous love of tape machines. This does not sound like a tape machine.

It _does_ sound cool though. I also appreciate the lock knob which inversely links the input level in the output level.

I have had quite a lot of fun putting it on 7.5 IPS and smashing some distant drum mics. Man, that's fun.

#### Console Emulation

{::nomarkdown}
  <img src="/assets/Cakewalk/ConsoleEmulation.png" alt="Console Emulation">
  <div class="image-caption">Console Emulation</div>
{:/nomarkdown}

Here you're given channel and bus emulations of 3 famous console styles:

* [SSL 4000](https://en.wikipedia.org/wiki/Solid_State_Logic#4000_series)
* [Neve (88R I think)](https://ams-neve.com/)
* [Trident A-Range](https://www.uaudio.com/blog/trident-a-range-desk/)

They all sound fantastic and I have been a fan of putting them on nearly every single channel. I particularly like the S-type, which sounds _similar_ to an SSL 4K console. Regardless if the emulation is good I find that it is a cool sound.


#### REmatrix Solo

{::nomarkdown}
  <img src="/assets/Cakewalk/REmatrixSolo.png" alt="REmatrix Solo">
  <div class="image-caption">REmatrix Solo</div>
{:/nomarkdown}

This is your typical convolution reverb, and it is available on every single channel if you want.

It comes with a decent selection of impulses and you can load your own. There is a single EQ band and you can add your own pre-delay.

An alternate use of this is to use it as a guitar cabinet simulator for which it does a reasonable job.

It's nothing exciting but it is still a useful thing to have at your fingertips. Especially so when there's so many free impulse responses out there.

#### BREVERB 2

{::nomarkdown}
  <img src="/assets/Cakewalk/BREVERB2Pro.png" alt="BREVERB 2">
  <div class="image-caption">BREVERB 2</div>
{:/nomarkdown}

This is an amazing algorithmic reverb that you get for free and get to use on every single channel in your project multiple times (if you're like me and making some crazy mess of shoegaze at 3am).

Joking aside, [BREVERB 2](https://overloud.com/products/breverb-2) is a great reverb that people happily pay $100+ to own. I think it is a wonderful addition to Cakewalk.

#### FX Chain

{::nomarkdown}
  <img src="/assets/Cakewalk/FXChain.png" alt="FX Chain">
  <div class="image-caption">FX Chain</div>
{:/nomarkdown}

FX chain does nothing more than a light but FX in between your ProChannel modules.

#### Style Dials

{::nomarkdown}
<img src="/assets/Cakewalk/StyleDials.png" alt="Style Dials">
<div class="image-caption">Style Dials</div>
{:/nomarkdown}

"Style dials" are a silly little concept where you have a single knob that does multiple functions such as:

* Depth - Reverb/delay, very short
* Gater - Gate
* Grit - distortion, supposedly tubey but... nah.
* Max - Brickwal Limiter that sounds alright.
* Pulse - Tremolo with distortion?
* Shaper - Transient shaper
* Smoother - De-esser
* Space - Big sounding reverb

I was initially very skeptical of these things, since I'm not a big fan of one plug-ins. I eventually came around to it and found that I used "Gater", "Depth" and "Shaper" frequently enough to warrant a positive word about them.

None of these sound particularly bad, and I would imagine that there useful for occasional use. My concern would be that people would overuse these and leave all of their mixes having a very similar sounding "flavor".

## Plugins

### Give all keystrokes to plugins

{::nomarkdown}
<img src="/assets/Cakewalk/AllKeystrokes.png" alt="">
<div class="image-caption"></div>
{:/nomarkdown}

This "feature" is awful. Most other DAWs do this relatively intelligently, but Cakewalk requires that you constantly turn this feature on/off to use typing keyboard input to your plugins, or to Cakewalk itself.

I find myself needing to turn it on/off to type in values in a plugin most frequently.


## Markers

{::nomarkdown}
<img src="/assets/Cakewalk/Markers.png" alt="Markers">
<div class="image-caption">Markers</div>
{:/nomarkdown}

I'm sticking this in the mixing section because I use markers most when mixing.

Cakewalk has a fairly basic markers system. You create time based markers so that you can jump to sections. It's possible to set the 'pitch' of a marker for use with groove clips (though I didn't figure out how to utilize that).

I wish there were hotkeys for the first 10 markers at least, because I like to use these functions frequently when working. Marker actions would be nice (make something happen at a marker).

Basic, but necessary feature that's implement at its bare minimum of functionality.

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

### MIDI Microscope

{::nomarkdown}
  <video autoplay loop muted class="gifvid">
    <source src="/assets/Cakewalk/MIDIMicroscope.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <div class="video-caption">MIDI Microscope</div>
{:/nomarkdown}

This is nothing more than a small magnifying glass.

Cakewalk's MIDI editing controls are quite annoying due to their small size and narrow targets, and this is apparently supposed to alleviate it.

It does not. In fact the two times that I want to use it actually made me feel slightly nauseous. In no way did make it easier to edit midi for me.

## Multitrack MIDI Editing

{::nomarkdown}
<img src="/assets/Cakewalk/MultitrackMIDI.png" alt="Multitrack MIDI Editing">
<div class="image-caption">Multitrack MIDI Editing</div>
{:/nomarkdown}

This feature is the ability to view multiple MIDI parts overlaid while editing a single part. With this active you can better create harmonies and work with rhythms in a more natural manner.

I expect this functionality out of any DAW and it's here.

## Track Filters

{::nomarkdown}
<img src="/assets/Cakewalk/TrackFilters.png" alt="Track Filters">
<div class="image-caption">Track Filters</div>
{:/nomarkdown}

A necessary feature for workflows that utilize a large number of tracks. You can create filters that instantly show only certain sets of tracks.

It's simple and it's easy to setup.

I would still prefer a search feature, but this works alright.

## Per clip editors

{::nomarkdown}
<img src="/assets/Cakewalk/EditorSelector.png" alt="Editor Selector">
<div class="image-caption">Editor Selector</div>
{:/nomarkdown}

Each MIDI clip can be set to utilize a different MIDI editor view by clicking the icon in the upper right of the Clip.

I think this is actually pretty cool that you can have a preferred type of midi editor per clip. I do think that it is perhaps more complex than it needs to be.

Since a track will normally house a specific instrument, I think it is a reasonable assumption to make that that instrument will always warrant the same type of editor. Having the editor preference set as per clip makes for more clicking and increases the chance of ending up with a clip that is not set up how you want.

This is still a great feature and I wish more audio products would have something like it.

## Fret Pane

{::nomarkdown}
    <video autoplay loop muted class="gifvid">
        <source src="/assets/Cakewalk/FretPane.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <div class="video-caption">description</div>
{:/nomarkdown}

When using the staff view, a 'fret pane' can be opened to show a guitar fretboard which displays the notes being played at the current time.

I found that it didn't do the best job of creating playable chords. Many times there'd be a note way up or way down the fretboard when it could have been easily moved to an adjacent string so the entire part would be human-playable.

## Quick Tab

{::nomarkdown}
<img src="/assets/Cakewalk/Tablature.png" alt="Tablature view">
<div class="image-caption">Tablature view</div>
{:/nomarkdown}

Quick tab is neat, but it's very limited. There's no way that I could find to adjust enharmonic equivalents, add extra notation for performance characteristics, adjust rhythmic display etc...

I tried it with some direct transcriptions I've done in the past and it did an alright job, but the places where there were mistakes were unfixable due to the inflexibility.

## Step Sequencer

{::nomarkdown}
<img src="/assets/Cakewalk/StepSequencer.png" alt="Step Sequencer">
<div class="image-caption">Step Sequencer</div>
{:/nomarkdown}

This is a step sequencer that allows you to program sounds, usually drums, by clicking blocks that correspond to a place in time.

As far step sequencers go I found this was relatively decent.

Unfortunately the competition is already beginning to leap-frog Cakewalk. [Studio One 4's new pattern editor]({% post_url 2018-05-24-Studio-One-4 %}#pattern-editor) is a good example.

This is still a decent attempt and I would think that most people would appreciate how simple it is to place notes and adjust the velocity. Sometimes having a more functional step sequencer takes away from the essence of the concept: a simple way to enter musical information.

## Transform Tool

{::nomarkdown}
    <video autoplay loop muted class="gifvid">
        <source src="/assets/Cakewalk/Transform.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <div class="video-caption">Transform Tool</div>
{:/nomarkdown}

This allows you to select an area of data and then basically treat it like a bitmap image. You can warp and skew the data by changing the size of the rectangle.

A particularly neat feature is the ability to have a "soft" transform.This mode allows you to select an area that extends slightly outside and inside of the transform rectangle and scales the data at the boundaries to give a smooth transition around the transform box.

A couple other DAWs have a similar feature, but this works well enough.

## Pattern Tool

{::nomarkdown}
    <video autoplay loop muted class="gifvid">
        <source src="/assets/Cakewalk/PatternTool.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <div class="video-caption">Pattern Tool</div>
{:/nomarkdown}

The pattern tool is nothing more than a tool that lets you paste MIDI data (by selecting a file) when you drag your mouse across the MIDI editor.

I am not sure how useful this is, but if there are common rhythms that you use you want to use as a starting point for a track then I'd imagine this could be useful.

## MIDI Track Tools

{::nomarkdown}
<img src="/assets/Cakewalk/MIDITrackTools.png" alt="MIDI Track tools">
<div class="image-caption">MIDI Track tools</div>
{:/nomarkdown}

MIDI track tools allow give you ways to transform your incoming MIDI data in real time. Here's what you can do:

* Snap to scale - A decent set of scales is available and non-diatonic notes will be shifted to the scale. There is a scale manager where you can create your own scales.
* Input Quantize - MIDI notes are shifted to the nearest rhythmic value.
* Arpeggiator - An arpeggiator with latch (letting go of keys does not stop the notes). You can also scale the velocity, shift the pitch, add swing (shift offbeats forward) and adjust the duration. Flam (doubling of notes with a slight offset) is there, and creates an interesting textural sound. The arpeggiator comes with 14 different patterns of playback.
* Key - Pitch shift.
* Time - Time shift.
* Bank browser
* Patch selection method (bank selection, cc 0, cc32 or patch 100 offset)

## Synth Rack

{::nomarkdown}
<img src="/assets/Cakewalk/SynthRack.png" alt="SynthRack...">
<div class="image-caption">SynthRack...</div>
{:/nomarkdown}

Synths are stored in the 'synth rack'. The plugins are global to the project and you route tracks to them as needed.

It's not an uncommon system, and it has some benefits in terms of CPU/Disk usage. It can be confusing for people that are used to per-track instruments, but I feel that the benefits outweigh the initial confusion.

If you're used to working with hardware, then this should be a familiar system.

If you want to use a MIDI track with a synth, instead of an instrument track, then you need to output the MIDI track to the synth rack slot, create an audio track and set that to take input from the synth and turn input echos on. I found this mildly confusing at first. It's necessary if you want to use [MIDI FX though](#midi-fx).

## Sysex

{::nomarkdown}
<img src="/assets/Cakewalk/Sysex.png" alt="Sysex!">
<div class="image-caption">Sysex!</div>
{:/nomarkdown}

If you have old synths then you know what a pain it is to deal with sysex parameter changes or even firmware updates.

Cakewalk has full sysex support! HOORAY!

# Notable Features

## Matrix View

## Load Balancing

{::nomarkdown}
<img src="/assets/Cakewalk/LoadBalancing.png" alt="Load Balancing">
<div class="image-caption">Load Balancing</div>
{:/nomarkdown}

Cakewalk can attempt to balance the load of your project across multiple processors as much as possible, which is a neat feature that surprisingly not many DAWs do (or do well).

When I installed Cakewalk, this feature was disabled, so [follow the directions here to get started](http://www.cakewalk.com/Documentation?product=SONAR&language=3&help=AudioPerformance.14.html).

## Plugin Upsampling

{::nomarkdown}
<img src="/assets/Cakewalk/Upsampling.png" alt="Plugin Upsampling">
<div class="image-caption">Plugin Upsampling</div>
{:/nomarkdown}

[Aliasing](https://en.wikipedia.org/wiki/Aliasing#Online_audio_example) is the bane of anyone using digital audio with any sort of non-linear process (such as anything with saturation/distortion).

Cakewalk can upsample the signal pathway for all processes to twice the sample rate. This is sufficient to reduce a significant amount of aliasing and decrease the inharmonic content that may be present from non-linear processes.

There are some caveats though. Your processing load will be doubled (or thereabouts) and there will naturally be changes to your audio from the up/downsampling process. These changes are beyond the scope of this review, but there's no free cake here!

## Lenses

{::nomarkdown}
<img src="/assets/Cakewalk/Lenses.png" alt="Lenses">
<div class="image-caption">Lenses</div>
{:/nomarkdown}

"Lenses" is a marketing buzzword for letting you select what parts of Cakewalk are shown. It changes most aspects of the GUI to remove elements that are unnecessary for a given workflow.

I found this feature to be _completely_ worthless. It's a neat idea, but on my 18-core system with a Radeon Pro Vega 64, changing lenses can take upwards of 20 seconds. The temporal delay isn't the only thing. I found that often when attempting to make my own lenses, things did not stay where I put them.

The lenses feature clashes partially with the [screensets](#screensets) feature below as well. Switching to a lense sometimes changed my screen layout, which necessitated switching to the screenset that I already had loaded.

## Screensets

{::nomarkdown}
<img src="/assets/Cakewalk/Screensets.png" alt="Screensets">
<div class="image-caption">Screensets</div>
{:/nomarkdown}

Screensets are a way of saving a window layout. You can take a snapshot of where things are laid out on the screen and recall it later to enable a smoother workflow for a specific task.

Once again, switching screensets is slow and error prone. I found a number of times where things would be docked wrong or where windows would not be 'where I left them'.

More annoyingly, it's 2018 and Cakewalk is slower at switching screensets than [Sawstudio](http://sawstudio.com/) was nearly 20 years ago (near instant, even under load). Screenset switching should be _instant_ or it feels like more of a nuisance than a help.

## CWAF

{::nomarkdown}
<img src="/assets/Cakewalk/CWAF.png" alt="CWAF">
<div class="image-caption">CWAF</div>
{:/nomarkdown}

This is the 'find my audio files' type tool. It searches for audio files used in Cakewalk projects.

It has 2 functions that I found mildly useful:

* Move project - it does what it says on the tin.
* Save report - this saves a textual report of what was found so that you can further process the information.

It's not as nice as some other asset management tools in other DAWs, but it is big step above nothing at all.

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

## Snap Intensity

{::nomarkdown}
<img src="/assets/Cakewalk/SnapIntensity.png" alt="Snap intensity and magnetic testing">
<div class="image-caption">Snap intensity and magnetic testing</div>
{:/nomarkdown}

I can't stand how it's not possible to set how close you need to be something for it to 'snap' in other products.

Cakewalk lets you adjust how strong the 'magnet' is when snapping. Not only can you adjust it, but it has a useful widget that allows you to test the feel of the current setting without needing to go back to your project and potentially mess up somethign trying it.

Brilliant feature that's well executed.

## Landmark snapping

{::nomarkdown}
<img src="/assets/Cakewalk/Landmarks.png" alt="Landmark snapping">
<div class="image-caption">Landmark snapping</div>
{:/nomarkdown}

Cakewalk lets you turn on/off the ability to snap to non-time related events like: markers, transients, current time, MIDI notes, clips and automation nodes.

This makes placing things FAR easier, since music doesn't always happen on the time grid. Excellent feature that not every DAW has caught up with yet.

## Mix Recall

{::nomarkdown}
<img src="/assets/Cakewalk/MixRecall.png" alt="Mix Recall">
<div class="image-caption">Mix Recall</div>
{:/nomarkdown}

Save your mix, then recall it later. That's as simple as it gets.

Notably _this saves and recalls automation!_. Other products don't do this correctly which causes some major frustrations.

It appears to handle routing correctly, plugin settings and other mix related things.

Well done.

## Keyboard Shortcuts

{::nomarkdown}
<img src="/assets/Cakewalk/Shortcuts.png" alt="Keyboard Shortcuts">
<div class="image-caption">Keyboard Shortcuts</div>
{:/nomarkdown}

I'm conflicted. Cakewalk's keyboard shortcuts window is conceptually neat, but it's also deeply flawed.

You can search for shortcuts by key or by name, bind to keyboard and MIDI and import/export. There's also a neat feature that lets you use a MIDI "modifier key", so that you can send a MIDI note that allows use of a second layer of utilization. So C1 could do something, and C1 + C2 could do something else.

The issues I have:

* Few shortcuts - I know this seems silly, but there are few shortcuts available.
* **TERRIBLE** default bindings - The default bindings are some sort of next level trash. A number of useful functions are unbound, and useful functions (like tools) are bound to overlapping keys.
* Multiple Layers - You cant search just everything. You need to know if your binding is global, console, event list, step sequencer, etc... etc... You're left to browsing 18 sub-layers of shortcuts by hand.
* Slow - the keyboard shortcuts window is slow to load, slow to bind/unbind and slow to switch "areas".
* Corruption - I've had my shortcuts corrupted once, that's more times than I ever want it to happen. I've never had this happen in any other software. I've _lost_ bindings due to my own idiocy, but never had bindings corrupted on save.

The Keyboard Shortcuts window is a necessary feature that's only half-done.

## CD Burning

{::nomarkdown}
<img src="/assets/Cakewalk/CDBurning.png" alt="CD Burning">
<div class="image-caption">CD Burning</div>
{:/nomarkdown}

I can't review this because I don't own a cd/dvd drive, let alone a burner. I don't miss it at all.

## Loop Construction

{::nomarkdown}
<img src="/assets/Cakewalk/LoopConstruction" alt="Loop Construction">
<div class="image-caption">Loop Construction</div>
{:/nomarkdown}

Loop construction is where you create "Groove Clips". They are sliced or stretched so that they can conform to the project tempo. You can edit pitch/pan/gain of the slices as you want as well.

The pitch of a loop can be set so that it transposes (within capability) as well. This data is written to the file so that it can be utilized when using the [browser](#media-browser) to preview files.

Files that have been groovified are shown with rounded corners in the track view.

It's an interesting tool, but I found that it did a poor job of transient detection and tempo detection unless the file was immaculately recorded and sliced.

# Plugins

## Effects

### Sonitus Compressor 

{::nomarkdown}
  <img src="/assets/Cakewalk/SonitusCompressor.png" alt="Sonitus Compressor ">
  <div class="image-caption">Sonitus Compressor </div>
{:/nomarkdown}

Ahhh my old love. I used to use the Sonitus Compressor obsessively before they were bought out. I still have my original license that I used as a DX plugin.

It's versatile and easy to use. Brilliant plugin back then... 

These days with oversampled compressors that have various modes or more technical parameters, it's a bit lacking, but as an included stock plugin I think it's more than sufficient.

### Sonitus Delay 

{::nomarkdown}
  <img src="/assets/Cakewalk/SonitusDelay.png" alt="Sonitus Delay ">
  <div class="image-caption">Sonitus Delay </div>
{:/nomarkdown}

A competent delay. Not much more needs to be said. Nothing fancy here at all.

### Sonitus Gate 

{::nomarkdown}
  <img src="/assets/Cakewalk/SonitusGate.png" alt="Sonitus Gate ">
  <div class="image-caption">Sonitus Gate </div>
{:/nomarkdown}

Sonitus Gate is a simple gate that is easily surpassed by other free options on the market. I see no reason to use it other than nostalgia.

The envelope characteristics lead to less natural results than you can get with other products.

### Sonitus Multiband 

{::nomarkdown}
  <img src="/assets/Cakewalk/SonitusMultiband.png" alt="Sonitus Multiband ">
  <div class="image-caption">Sonitus Multiband </div>
{:/nomarkdown}

A difficult to use multiband compressor that's once again surpassed by free and cheap options elsewhere in nearly every facet.

### Sonitus Equalizer 

{::nomarkdown}
  <img src="/assets/Cakewalk/SonitusEqualizer.png" alt="Sonitus Equalizer ">
  <div class="image-caption">Sonitus Equalizer </div>
{:/nomarkdown}

Simple 6 band biquad equalizer. Bleh.

### Sonitus WahWah 

{::nomarkdown}
  <img src="/assets/Cakewalk/SonitusWahWah.png" alt="Sonitus WahWah ">
  <div class="image-caption">Sonitus WahWah </div>
{:/nomarkdown}

Grainy sounding wahwah with an autowah setting that doesn't react as sharply as I want it to.

### Sonitus Modulator 

{::nomarkdown}
  <img src="/assets/Cakewalk/SonitusModulator.png" alt="Sonitus Modulator ">
  <div class="image-caption">Sonitus Modulator </div>
{:/nomarkdown}

Flanger, Phaser, Chorus, Tremolo. Simple versions of each. Nothing exciting except for the tape mode in the flanger which gives you more extreme sounding flange.

### Sonitus Phase 

{::nomarkdown}
  <img src="/assets/Cakewalk/SonitusPhase.png" alt="Sonitus Phase ">
  <div class="image-caption">Sonitus Phase </div>
{:/nomarkdown}

Now _this_ is a cool inclusion. I don't know of any other DAW that comes with a product like this. Phase rotation with both IIR and FIR options. You can rotate the phase of your audio to deal with cancellation issues that crop up when multi-micing sources.

Cool.

### Sonitus Reverb 

{::nomarkdown}
  <img src="/assets/Cakewalk/SonitusReverb.png" alt="Sonitus Reverb ">
  <div class="image-caption">Sonitus Reverb </div>
{:/nomarkdown}

Sounds exactly like I remember: thin. No thanks.

### Sonitus Surround 

{::nomarkdown}
  <img src="/assets/Cakewalk/SonitusSurround.png" alt="Sonitus Surround ">
  <div class="image-caption">Sonitus Surround </div>
{:/nomarkdown}

I don't use surround, so I have nothing to say.

### Sonitus Surround Comp

{::nomarkdown}
  <img src="/assets/Cakewalk/SonitusSurroundComp.png" alt="Sonitus Surround Comp">
  <div class="image-caption">Sonitus Surround Comp</div>
{:/nomarkdown}

I don't use surround, so I have nothing to say.

### BREVERB 2 

{::nomarkdown}
  <img src="/assets/Cakewalk/BREVERB2.png" alt="BREVERB 2 ">
  <div class="image-caption">BREVERB 2 </div>
{:/nomarkdown}

Fantastic reverb plugin that could warrant its own reverb. The Cakewalk version is missing some "spaces" and presets (obviously), but the Hall and Room modes alone are perfectly fine for most uses.

There's also fewer parameters for adjustment. Each of the modes is missing 2-3 parameter panels, with some knobs missing on each panel.

It doesn't really matter. It's an awesome inclusion, and probably the best included Reverb along with Apple's new [Chromaverb]({% post_url 2018-01-26-Cool-things-in-Logic-Pro-X-Part-10-4 %}#chromaverb). It's not as fun to watch as Chromaverb though :)

### TH3  

{::nomarkdown}
  <img src="/assets/Cakewalk/TH3.png" alt="TH3  ">
  <div class="image-caption">TH3  </div>
{:/nomarkdown}

Alright, I might get some hate here, but I dislike TH3. I really dislike it. All of the models sound too forward, the presets are far too loud, and browsing your 'components' is a pain. The Fender models in particular sound completely wrong to me, and I have most of those represented in my studio to compare with.

The Cakewalk version is missing components as expected, but it's not much of a loss. It's like losing that McDonalds receipt that you were going to throw away anyways.

It's almost a downside that TH3 is included. It's a neat idea, but... not a fan.

### Boost 11 

{::nomarkdown}
  <img src="/assets/Cakewalk/Boost11.png" alt="Boost 11 ">
  <div class="image-caption">Boost 11 </div>
{:/nomarkdown}

Eh. It's a brickwall limiter that doesn't sound too bad. If you're looking for those disgustingly loud -4LUFS levels then this won't get you there. Sensible target loudnesses are easily acquired with Boost 11.

I think most folks that want aggressive loudness enhancements will be better served by third-party products no matter what.

## Instruments

### SI-Bass Guitar

{::nomarkdown}
  <img src="/assets/Cakewalk/SI-BassGuitar.png" alt="SI-Bass Guitar">
  <div class="image-caption">SI-Bass Guitar</div>
{:/nomarkdown}

Ahahahahahahahahahahahahahahahahahahahahahahah

...

hahahahahahahahahah

Bass guitar. Nope. Not even close.

### SI-Drum Kit

{::nomarkdown}
  <img src="/assets/Cakewalk/SI-DrumKit.png" alt="SI-Drum Kit">
  <div class="image-caption">SI-Drum Kit</div>
{:/nomarkdown}

It goes well with the bass guitar!

### SI-Electric Piano

{::nomarkdown}
  <img src="/assets/Cakewalk/SI-ElectricPiano.png" alt="SI-Electric Piano">
  <div class="image-caption">SI-Electric Piano</div>
{:/nomarkdown}

Electric piano is a simple instrument that can be emulated fairly well with samples and some post-processing. Yet this sounds dull and lifeless.

Difficult to mess up, but there it is.

### SI-String Section

{::nomarkdown}
  <img src="/assets/Cakewalk/SI-StringSection.png" alt="SI-String Section">
  <div class="image-caption">SI-String Section</div>
{:/nomarkdown}

A string section for your 'bass' and 'drums'.

### TTS-1 

{::nomarkdown}
  <img src="/assets/Cakewalk/TTS-1.png" alt="TTS-1">
  <div class="image-caption">TTS-1</div>
{:/nomarkdown}

This is not meant to sound good. It's a general midi synthesizer and it does a _fantastic_ job. You have a whole host of standard instruments and configuration options.

It most certainly doesn't sound good, but it does exactly what it's aiming to do. That's admirable and I'm sure many people have a use for it.

## MIDI FX

A note that these only work on MIDI tracks it seems. I was unable to figure out how to use them on instrument tracks. So as far as I know this necessitates a workaround as described in the [synth rack section](#synth-rack) to use these with software instruments.

### Arpeggiator

{::nomarkdown}
  <img src="/assets/Cakewalk/Arpeggiator.png" alt="Arpeggiator">
  <div class="image-caption">Arpeggiator</div>
{:/nomarkdown}

A cheesy looking arpeggiator with few options, 4 patterns and difficult to use parameters.

The [built in arpeggiator is much better](#midi-track-tools)

### Chord Analyzer

{::nomarkdown}
  <img src="/assets/Cakewalk/ChordAnalyzer.png" alt="Chord Analyzer">
  <div class="image-caption">Chord Analyzer</div>
{:/nomarkdown}

Not very good at its only job. A second inversion Emin chord shows up as G#min+5 1st inversion... most inversions come out wrong! What's the point of this if it can't get inversions correct?

### Echo Delay

{::nomarkdown}
  <img src="/assets/Cakewalk/EchoDelay.png" alt="Echo Delay">
  <div class="image-caption">Echo Delay</div>
{:/nomarkdown}

A simple MIDI delay that adds midi notes to the stream like a delay or echo.

It can increase/decrease the pitch of subsequent echos to create a cool sparkly or droney sound. Pretty fun.

### MIDI Event Filter

{::nomarkdown}
  <img src="/assets/Cakewalk/MIDIEventFilter.png" alt="MIDI Event Filter">
  <div class="image-caption">MIDI Event Filter</div>
{:/nomarkdown}

You can filter most MIDI events here, including RPN/NRPN, clock and aftertouch. Unfortunately you're limited to one of each type of event. So you may end up needing a handful of MIDI event filters to get the job done.

Surprisingly there's no log to show you what's going in/out, which is essential to a utility like this.

### Quantize  

{::nomarkdown}
  <img src="/assets/Cakewalk/Quantize.png" alt="Quantize">
  <div class="image-caption">Quantize</div>
{:/nomarkdown}

Quantizes notes in both directions. Useful, quick and non-destructive.

### Transpose  

{::nomarkdown}
  <img src="/assets/Cakewalk/Transpose.png" alt="Transpose">
  <div class="image-caption">Transpose</div>
{:/nomarkdown}

A proper transpose plugin that does more than just pitch shifting. It can transpose keys/scales and allows custom transpositions. There's more that could be done here, but compared to what other DAWs offer, this is great.

### Velocity  

{::nomarkdown}
  <img src="/assets/Cakewalk/Velocity.png" alt="Velocity">
  <div class="image-caption">Velocity</div>
{:/nomarkdown}

MIDI Velocity scaling, re-writing, limiting, randomization and changing.

It's a dynamics processor for MIDI notes. It works well.

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


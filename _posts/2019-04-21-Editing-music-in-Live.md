---
layout: post
title: "Editing music in Ableton Live: An Overview"
comments: true
date:   2019-04-21_12:01:15 
categories: music
tags: ['Ableton Live']
image: /assets/Live/MIDIClip.png
description: Editing in Ableton Live
series: ableton
---

{::nomarkdown}
<img src="/assets/Live/MIDIClip.png" alt="MIDI Clip Editor">
<div class="image-caption">MIDI Clip Editor</div>
{:/nomarkdown}

It's time to cover what I consider "editing" in Ablteton Live, and by 'cover' I mean: "become excruciatingly frustrated with".

Welp. On with it...

<!--more-->

**If you have any questions or comments, please comment below! I read every comment and respond to most.** No registration is necessary to comment, so don't be shy.

# Contents
{:.no_toc}
* TOC
{:toc}

# What is Editing?

For the sake of this article I'm considering editing as the process of taking recorded/input data and modifying the data itself. This may be changing the length of a clip or moving MIDI notes around, or anything similar.

This would not include things that change the output characteristics of the data (which I would consider "Mixing").

The Session view is not mentioned in these sections as Session view editing is done in the Clip Editor.

# Audio Workflows

Editing audio in Live is _extremely_ simple, both in capability and execution. Sometimes it's pleasantly simple, and sometimes it's infuriatingly simple.

## Arrangement View

{::nomarkdown}
<video autoplay loop muted class="gifvid">
<source src="/assets/Live/ClipEdit.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
<div class="video-caption">Clip Editing</div>
{:/nomarkdown}

Audio clips can be edited in two places: the Arrangement view and the Clip Editor.

Arrangement view editing offers you three abilities:

* Edge editing - if you grab the top sides of the clip, you can adjust the start and end point.
* Fade editing - You can grab the top 'dot' on the edge to pull a fade inwards. You can grab the bottom dot to pull the edge out as a fade.
* Split - You can split the audio at the edit cursor point.

There are some _notable and basic_ capabilities missing:

* Contents adjustment - There is no way to move the contents of the clip, without moving the clip boundaries. This is useful for when you need to make a slight adjustment to the audio in a clip, but the clip boundaries are what you need. Frequently used with vocal edits.
* Boundaries adjustment - There is no way to move the clip boundaries while keeping the contents in the same place. Useful for content that is not perfectly timed to the grid, but you'd like to use clip boundaries to delineate the start stop. This is a two step procedure in Live currently.
* Adjust edge/fade _to_ - There are no commands to pull a specific edge to the current place. You may be zoomed in where you can not see the left or right edge and desire to pull the edge to within your view. This currently requires a split, select and delete operation in Live. This is a very important feature for fast editing.
* Split - Splitting audio is annoying. The split is at a point where you recently double clicked, which is shown by a thin colour shifting line. I was unable to figure out how to make this happen _not_ at a grid line. That makes any sort of precise edit require many steps.
* Clip Volume/Automation - I'm considering this an edit feature as it's often used in place of split/delete. Live has no automation that attaches to the clip that's shown in the arrangement view. Clip envelopes do exist in the clip editor, as does clip volume.

The amount of advanced functionality that's missing is a list that's likely larger than this entire article itself. The most flagrant exclusions:

* No pitch editing - No integrated pitch editing.
* No warping in arrangement.
* No split clip at transients.
* No clip start/end quantize - This is very useful when you've split clips at transients. The result is a lossless quantization of audio that works well for material with minimal sustain.
* No clip effects - The ability to add plugins to clips does not exist. This could be considered mixing, however it's a fairly common workflow to use plugins for advanced editing of audio.
  * Likewise there's no way to do common tasks to audio like normalize, DC removal, basic filtering or anything else you can imagine.
* No item overlap modes - Overlapping clips in Live always play the last clip, and if you overlap two clips and move one then the previous clip is tripped. There's no way to change this behaviour. Technically there's no clip overlap in Live at all.
* No alternates - A clip is a clip. There's no alternates, no playlists, no takes. Just one clip. If you want to try something else out then you need to hide your clip on a muted track somewhere else.
* No Grouping - You can not group clips so that acting on one clip will act on everything else, or at the very least selecting one clip will select its group.
* No transient/edge navigation - When zoomed in for editing it can be useful to use a shortcut to jump to the next transient or the start/end of the next or previous clip. Extremely useful feature.
* No Fade editor - Live's fades are exponential/log or S shaped. There's no linear fade and no way to accurately edit crossfades. 
  * No Fade shortcuts - No shortcuts like 'Fade to cursor' or 'Fade to transient' or anything similar. Fades are strictly a mousing task.
  * No grouped fades - Selecting multiple clips does not allow you to add/move/edit multiple fades at once.
* No Split tooling - Split is already basic and annoying, but there's no tooling for it at all. **No 'split at zero crossing' is a huge bummer.**

There's _literally_ hundreds of audio editing functions that Live is missing compared to other mature DAWs. These features aren't necessary for everyone, and surely nobody needs them all, but each user has tasks they need to accomplish and it's highly likely that Live is missing a large contingent of features that would aide any given workflow.

## Clip Editor

{::nomarkdown}
<img src="/assets/Live/ClipEditor.png" alt="Clip Editor">
<div class="image-caption">Clip Editor</div>
{:/nomarkdown}

The clip editor gives you some more "advanced" editing features, but disconnected from the view of your project.

* Sample - The sample section allows you to transpose/detune and reverse. The start/end of the clip can be set, only in beats(???), and loop attributes can be adjusted.
  * Warp - There's a section to turn [warping](#warping) on/off, set the clip's BPM, change the stretching mode and adjust some attributes of the stretching mode.
  * Clip start/end - Clip start/end is interesting. It obviously changes the start/end of the clip relative to the contained audio, but in the Arrangement view the starting point of the clip stays the same. So if you adjust the start in the clip editor then your audio will be 'pulled forward'. There does not appear to be a way to keep the audio at the exact time in the Arrangement view when using this.
* Envelope - There is an envelope section that allows you to draw automation that's attached to the clip. A notable feature is that the automation does not need to be linked to the clip itself. You can turn off "Region: Linked" to create automation that exists in a time plane adjacent to the clip itself. You can use this to create automation that plays out of sync with the clip for some interesting morphing effects over time. There's 5 types of envelopes for audio clips:
  * Volume
  * Transposition - pitch change
  * Grain Size - Used in the texture mode. Changes the size of the 'grains' that the sample is split into, overlapped and played back.
  * Flux - Used in texture mode. Adds randomness to the grain playback.
  * Sample offset - When utilizing 'beats' mode, you can automate which beat is played at a given time. This essentially turns the playhead into a 'beat selector' and the automation communicates which beat is to be played at a given time. The selection is relative to the current time, so you can select to play +/- 8 16th notes from the current position. Excellent tool for reshuffling beats or creating interesting textures from existing sounds with minimal effort.
  
In the Clip Editor envelope section there is a "Mixer" section for automating mixer controls, but that will be covered in another article.

I'm never terribly happy with software that puts editing features outside the context of the project. When utilizing Live's non-linear Session view the clip editor makes sense since each clip is its own entity that has no decided relation to anything else.

When utilizing the Arrangement view, the clip editor makes you edit data outside the context of other clips placed in the view. Maybe you wish to warp a beat to line up with another clip? Too bad! You're left to fuss with the clip editor and reference back and forth to the Arrangement view. Perhaps you wish to manually duck a clip relative to something else... once again, too bad.

Live strongly assumes that every clip is its own entity with minimal relation to other clips, and it compartmentalizes the editing process based on this assumption. Other DAWs have long since realized that this is foolish and allow most of their editing capabilities to be used directly in the view where clips are arranged.

### Warping - Stretch

{::nomarkdown}
<video autoplay loop muted class="gifvid">
<source src="/assets/Live/Stretch.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
<div class="video-caption">Warp Stretching</div>
{:/nomarkdown}

Live is known for its warping capability. Warping the process of stretching or compressing audio without the pitch being affected.

You can warp the whole clip as you may expect, but the feature's claim to fame is the ability to both warp only small sections without needing to split the clip, and the software automatically utilizing the warp feature to intelligently conform clips to the tempo of the set.

The automatic warping of clips is naive, but effective. If a clip is a "follower" then Live takes the defined tempo of the clip and stretches the clip relative to the tempo of the set, or the last master clip. The automatic warping ensures that if you change the tempo of your project, then everything will still play "in time" (albeit degraded in quality).

Clips that are defined as masters override the set-tempo warping relation. There is a strange kink in the plumbing though: many clips can be a "master", but only the last clip in the set _is the master_. That can mean that you could delete a clip or two and have your entire set in total disarray! Even worse still is that the presence of a master clip will disable your ability to change the set's tempo. Master clips have no indication of their state in the Arrangement, so complex project may lead to a frantic frenzy of finding the furthest foremost master clip. ACK! Why is this even possible, and why is there no indicator?

Live does a brilliant job at warping entire tracks or long complex sections of audio. There are a variety of commands that let you get the warp markers correct, set the length properly and get on with your set.

### Warping - Beats

{::nomarkdown}
<video autoplay loop muted class="gifvid">
<source src="/assets/Live/Warp.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
<div class="video-caption">Warping</div>
{:/nomarkdown}

Live has a system attempts to find the onsets of notes and marks them. You can then create 'warp markers' at that point and stretch the clip starting at that warp marker. The warping occurs between the nearest warp markers, or if none then the clip start/end.

You can create warp markers anywhere you want by double clicking, but there's small grey triangles that you can click to create a warp marker where Live thinks there's a note onset. The detection for this is not adjustable sadly (many other DAWs allow adjustment of the detection process to help you get more accurate results). Ctrl/Cmd lets you create a warp marker and simultaneously activates the nearest pseudo warp markers to the left and right so you can move your beat in that contained area. (shown above)

Warping in Live is a relatively simple process, but it only occurs in the Clip editor so you unable to make warp adjustments relative to neighboring content. Multiple identical selected clips can be warped at once if selected, but that leaves out something like a drumset recording (as the warp markers will not be identical).

Live can automatically quantize audio by taking the current warp markers (not psuedo warp markers, but only what you activated) and moving them to the nearest grid division. If you click the background of the audio you can activate all pseudo warp markers and quantize them to the grid.

Due to Live's inflexibility with creating pseudo warp markers (the 'beat detection'), the quantization process often gives _terrible_ results. Clean drum loops usually work ok-ish, but anything else ends up with a bad case of the warbles.

### Warping - Creative

{::nomarkdown}
<img src="/assets/Live/Creative.png" alt="Creative Warping">
<div class="image-caption">Creative Warping</div>
{:/nomarkdown}

Live's warping capabilities are moderately decent, but it's take to another level with the plethora of stretching type options. A wide variety of interesting effects can be created by playing with stretching/warp markers then switching to an "inappropriate" algorithm.

I found this particularly fun to play with, and it's something that isn't easily accessible in many other products (particularly at the clip level).

Using the "beats" mode on non-beat audio leads to interesting glitchy behaviours. Tones and Textures modes give wild results on almost anything with some sustain, and re-pitch offers your classic tape/vinyl style effects where speed and pitch are interdependent.

## Tempo

{::nomarkdown}
<img src="/assets/Live/TempoWarp.png" alt="Tempo Warping">
<div class="image-caption">Tempo Warping</div>
{:/nomarkdown}

Live has tempo editing. Technically this is a form of automation, but I'm including it here as a form of editing.

The master track has an automation mode called "Song Tempo". You can draw tempo changes, and ["Follow"](#warping---stretch) clips will adjust their tempo as played in realtime.

The tempo editing unfortunately doesn't have a feature that transfers grooves or transfer clip's tempo data to the Song Tempo.

Thankfully the normal automation tools apply, so you get nice features such as bezier curves (shown above) for smooth tempo changes.

## Multitrack

{::nomarkdown}
<img src="/assets/Live/Laugh.png" alt="Multitrack Editing in action">
<div class="image-caption">Multitrack Editing in action</div>
{:/nomarkdown}

Live's multitrack editing is a sight to behold! **It's utterly terrible.**

Clips can be selected and have most of their attributes changed together, but this quickly breaks down when you have many splits/edits on a track. Now editing is a struggle that kicks off with trying to select what you need, which itself usually means zooming out and zooming back in. Then you must make sure you don't accidentally select another clip, and if you need to work on another section it's back to the start of the dance with a sigh and groan.

If you need to work with multitrack recorded parts (like multiple mics on a guitar amp, drumsets, etc...) then you probably need to start some prophylactic antipsychotics, or just use another program.

# MIDI Workflows

## Arrangement

{::nomarkdown}
<video autoplay loop muted class="gifvid">
<source src="/assets/Live/MIDIArrange.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
<div class="video-caption">MIDI in the Arrangement View</div>
{:/nomarkdown}

MIDI editing doesn't really exist in the arrangement view. You can change the clip position, start and end.

_That's it._

There isn't an inline editor or any functions that act on clips without utilizing the Clip Editor.

## Clip Editor

{::nomarkdown}
<img src="/assets/Live/MIDIClip.png" alt="MIDI Clip Editor">
<div class="image-caption">MIDI Clip Editor</div>
{:/nomarkdown}

MIDI editing functions in the Clip Editor are equally sparse. I will be discussing CC editing when I discuss automation.

There's only a handful of editing capabilties:

* Quantize - Adjusts the start and/or end to the nearest grid (as defined in the dialog.
* Legato - Sets note ends to move to the next note's start.
* Reverse
* Invert - Inverts the selected notes. There is no option for inversion center, scale inversion or chord inversion.
* Speed - You can speed up or slow down the notes.

There is a "Fold" mode that removes all unused notes from the piano roll. This gives you a step-sequencer-like view for drum programming, however you're left to set this up on your own. As you may imagine, it's an annoyingly fiddly process. If you have a Drum Rack plugin on the track, then this isn't even necessary as your notes are pre-named for you and likely already in the vicinity of each other.

Note Velocity can be edited with the "Draw" tool (b on keyboard). You can draw straight lines to set velocity. Cool I guess, but where's the other tools for velocity? Randomization? Humanization? Other shapes?

Live does have Note off velocity though, which is a fairly advanced and rare MIDI parameters. Strange that it's available given all of the other functionality Live eschews.

I'm not even sure I could begin to list the features missing from MIDI editing, but here's a small selection:

* No way to set all notes to a given start or end.
* No Scale tools
* No Chord tools
* No Apeggiator
* No scale/chord inversion
* Extremely limited Quantize - No tuplets, offset, swing, sensitivity, strength, randomness, emphasis... just start/end.
* No Notation
* No Event list - Event Lists are extremely helpful for precise editing of data. When you know exactly what some MIDI data needs to be, you can key it in instantly.
  * No Event search - Event search is an incredible time saver when you want to only edit a subset of data. See [DP's Search]({% post_url 2016-12-13-Cool-Features-in-Digital-Performer...-Part-4 %}#search-window) or [Cubase's PLE]({% post_url 2016-07-11-CubaSerenity %}#project-logical-editor) to see what you're missing.
* No Humanize tools - Live lacks tools to write specified 'randomizations' to MIDI data.
* No Transpose tools - Live expects you to mouse/keyboard in transposition, but it also lacks scale transposition, harmonization or transposition maps. If you want to do something as simple as change a song from minor to major, then you will need to go through and find every b3 in your entire project and manually move it (or use a realtime MIDI effect).
* "Split Notes" - Tools to selectively move selected notes between clips easily are not available. Live relies on the fiddly select, copy, switch contexts, paste and probably fiddle with position workflow. See Digital Performer's Split Notes function for how incredibly easy this can _actually be_.
* No de-flam - No tools for removing those accidental double taps or half-note miskeys. Other DAWs can fix them in a blink. Live requires manual editing.
* Stretching is weird - If you select a number of notes and they do not all have the same start time, then there's small indicators that appear in the timeline. The indicators are between the earliest note, and the start of the latest note. This can be a small area sometimes! To put salt on the wound, you can't actually stretch based on the end times. You are left trying to stretch based on the _start_ times, which is rarely what you're trying to line up! If you want to stretch some MIDI to fit into a space or to match something else then it's just a strange workflow.
* Program change is per clip - For some reason program change messages are per clip???
* No MPE - [MPE is cool.]({% post_url 2017-06-16-Bitwig-feature-review-Note-Expression %}) Live does not offer this.
* Channel editing - MIDI channel is per track in Live. There's no way to edit channel data on a per clip basis, or to even know what channel a clip will output to without referencing the track's settings.
* Pitch class select is single click - Selecting a pitch class or range by using the piano roll is a cool feature that most DAWs have. Live makes this a _single click_ operation, so if you have some selected data and you want to quickly preview a note by using the piano roll then you will lose your selection!
* **DOUBLE CLICKING DELETES NOTES** - Ugh. You know what else double clicking does? It inserts notes. Why does the exact same input yield two diametrically opposing functions? This is quite possibly the biggest UI mistake that you can make.
* No split/divide/scissors? - This is such an incredibly strange thing to be missing that I'm almost certain I just can't figure out how to do it. Can you really not split notes in Live?
* No heal/glue? - Like split, I can't figure out how to join two notes. Someone please tell me this isn't missing.
* No Solo - It does not appear that there is a way to solo the clip in the editor, instead you must utilize the track solo.
  * No mute either.
* No overlap fix - There are no tools for fixing or transforming note overlaps.
* Legato is one button - The legato feature is almost interesting, but there is no scaling or overlap setting. Adjusting the amount of overlap can be important for certain parts and synthesizers.
* Absolutely no tools for articulations/keyswitches - MIDI is MIDI in Live. There's no distinction between what may be 'music' and what might be 'data'. There's all sorts of weird labour intensive workarounds. Gross.
* No polyphony restriction - Limiting the number of active notes is a useful function for CPU saving, effect or for simplifying arrangements. Not here though!
* Groove application is per clip - If you wish to use Live's Groove feature to change the timing of your MIDI, then you're limited to applying it per clip. It can not be applied to a selection, nor can you easily commit the groove changes to hard data that you can edit.
* No sysex editing - If you have any hardware synths then there's a chance that you're aware with sysex. It's used for control modification on older synths, and for firmware on a lot of synths. Live has your back thou... oh. Nevermind. No sysex here.
* No MIDI input editing - One of my favorite ways to edit MIDI is to select a note and play what I want it to be on my MIDI keyboard. It's fast, it's intuitive and it's a "musical" (Ugh, I hate saying that) workflow.
* No mousewheel based editing - Mousewheel is scroll only in Live. Using it for pitch or velocity is a useful workflow.

I give up. This is too much typing. There's plenty more if you care to look for yourself. Live's MIDI editing is quite possibly the simplest and most featureless of any of the major DAWs.

Somehow it's even more feature/function baren than audio editing. Not everyone needs 100s of features, but I guarantee that for _any_ given workflow there's features that Cubase/Logic/Digital Performer (or even Pro Tools or Reaper) has that would speed up the user's process. Even something as simple as adding notes takes [o(2n)](https://en.wikipedia.org/wiki/Big_O_notation) effort where most any other DAW would be o(n+1). For a few hundred notes that effort builds up fast... let alone considering _editing_ the content where Live is almost always o(2n+) (or even o(n^2) in some cases!) and many other DAWs offer o(1) for editing functions.

I'm sure this seems like I'm being some sort of "I WANT ALL THE FEATURES" lunatic, but I assure you that no matter what you do in Live with MIDI: you're doing too much work.

### Keyboard Editing

I've heard a number of Live users discuss how they miss using the keyboard to edit when they try to use another DAW. Live does have an interesting keyboard shortcut setup for editing.

Arrow keys move notes. Shift+up/down transposes up. Shift+left/right changes duration. Cmd/Ctrl+up/down changes vertical selection. Cmd/Ctrl stops snapping when moving notes.

I can see how these are useful, but I far prefer DAWs that let you change the note by pressing a key on your MIDI keyboard and that have proper transpose tools. Likewise I find it more helpful to have "move start" and "move end" shortcuts that allow you to move the selected note's start or end to the cursor no matter what you are viewing.

I'm also not enamoured with the positioning of the shortcuts. The general workflow is a "hold mouse and arrow keys" positioning. That's not a position that's particularly enjoyable for more than a few minutes. Trying to use shift and cmd/ctrl with arrow keys is a pinky workout too.

Why not just WASD? HLKL? 1234? Basically anything else?

Seriously... just let us use WASD or let us change the shortcuts.

## Multitrack

{::nomarkdown}
<img src="/assets/Live/MultiMIDI.png" alt="Multitrack MIDI Editing">
<div class="image-caption">Multitrack MIDI Editing</div>
{:/nomarkdown}

Live 10.1 adds the ability to select multiple MIDI clips simultaneously and edit them like a single clip. However it has a number of drawbacks:

* Clip based - It's clip based instead of track based, so it requires zooming around your project and carefully selecting the appropriate clips.
* Active clip selection is colour based - You switch between which MIDI clip is editable by selecting a bar at the top of the editor. This uses the clip colour. There is no way to select by name.
  * The selection bars are tiny. They measure about 1mm on my 27" screen. Vexatious workflow at best.
* All inactive clips are grey - It can be impossible to tell which notes belong to which clip because _ALL_ inactive clips are grey.
* No Visibility management - The only way to show/unshow a clip is to select/deselect it. If you wish to temporarily remove a clip from the view then you need to find the appropriate clip (which can be difficult due to the reasons above), and deselect it. To add it back you will need to find the clip again and reselect it. Hopefully you don't accidentally screw up your selecting or you get to start all over again.
* No CC Editing.
* No Envelope Editing.
* Session view looping - When selecting multiple clips in the session view, all selected clips are looped to match the length of the longest loop. The loops are marked by thin black lines, but this quickly becomes confusing. It's easily possible to think that you're editing data on its own only to find out that you edited part of a loop and affected another part of the clip.
* No folding.
* Active part editing only - It's not possible to edit multiple parts at once. You get to see multiple parts (for limited definitions of "see", all unselected are grey), but only edit the active part.

# Project Workflows

{::nomarkdown}
<video autoplay loop muted class="gifvid">
<source src="/assets/Live/SetEdit.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
<div class="video-caption">"Area Selection"</div>
{:/nomarkdown}

By "Project Workflows" I'm referring to actions that work on areas of data, often mixed data types, or that affect the structure of the project.

There's one thing here that Live does well: _you can select _any_ data in the Arrangement view and move it._

That may seem simple, but you can copy a section of a track perfectly to another part of a song. Draw a box and everything in the box can now be moved exactly as it is in the box.

# Conclusion

Editing existing data in Live is quite possibly the most frustrated I get when working with DAW software. I'm convinced that anyone doing anything but the absolute simplest workflows is either frequently frustrated or stuck in the "don't know what they don't know" phase where they aren't aware of how much extra work they're doing

I'm so miffed by the process of writing this post that I'm certain I screwed up somewhere.

I could _almost_ buy the argument that it's for simplicity, but it's not simple. Basic things are missing. Commonly used functions are missing. Non-musical workflows? HAH. Good luck.

I discussed this with a number of Live users (including a [Certified Trainer](https://www.ableton.com/en/education/certification-program/)) and I walked away with the answer that missing functionality "reduces cognitive load".

I guess next time I want to wash my car, I'll just use a tooth brush and tap water to reduce my cognitive load.

# Support Me!

This post took 28 hours to research, screenshot, write and edit. If you appreciate the information presented then <a href="/DonateNow/">please consider joining patreon or paying me for my time spent bringing you quality content!</a>

<a href="https://www.patreon.com/bePatron?u=7465992"> <img class="patreon-button" src="/assets/Patreon.png" alt="Be a Patreon!"></a>

<form style="text-align: center;" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick">
<input type="hidden" name="hosted_button_id" value="BR247JAZBTUJJ">
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
</form>

**If you have any questions or comments, please comment below! I read every comment and respond to most.** No registration is necessary to comment, so don't be shy.


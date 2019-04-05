---
layout: post
title: 'Waveform: the good, the bad, the weird. - Version 9.1.1, Part 6: MIDI Editing'
comments: true
date:   2018-03-28_09:33:10 
categories: music
tags: ['Tracktion Waveform', 'DAW']
image: /assets/Waveform/Weird/MultiEdit.png
description: MIDI Editing in Waveform 9, with 50% more whining!
series: waveform
---

{::nomarkdown}
<img src="/assets/Waveform/Weird/MultiEdit.png" alt="Multi-editing">
<div class="image-caption">This isn't a good thing...</div>
{:/nomarkdown}

It's MIDI Day! Today I'm covering MIDI workflows specifically, even though I did that partially in [part 4]({% post_url 2018-03-21-Waveform-9-the-good-the-bad-the-weird-part-4 %}) and [part 5]({% post_url 2018-03-25-Waveform-9-the-good-the-bad-the-weird-part-5 %}).

I know that it seems like there's a lot of bad things today, and there is, but the core experience is decent. If you are a workflow-maven, a super MIDI nerd or you love exploring the depths of what can be done with MIDI, then you need to try the demo first.

* Good
  * Basic MIDI Editing
* Bad
  * MPE
  * Notation
  * Advanced MIDI Editing
  * Default Shortcuts
  * Per-Note Colouring
  * Step Recording
* Weird
  * MIDI Multi-Editing
  
  
**Other parts in this series**: 

{% assign waves = site.posts | where: "series", "waveform" | sort: 'date' %}
<ul>
{% for my_page in waves %} 
    {% if page.url != my_page.url  %}
        <li><a class="page-link" href="{{ my_page.url | prepend: site.baseurl }}">{{ my_page.title | split: '-' | last }}</a></li>
    {% endif %}
{% endfor %}
</ul>

**VERSION** - This review is (hopefully) accurate as of Waveform 9.1.1. Further versions may obsolete these views.


<!--more-->

# Contents
{:.no_toc}
* TOC
{:toc}


# Good

## Basic MIDI Editing

{::nomarkdown}
<video autoplay loop muted class="gifvid">
<source src="/assets/Waveform/Good/MIDIEdit.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
<div class="video-caption">Basic MIDI Editing</div>
{:/nomarkdown}

The process of entering and editing notes in Waveform 9 is nice. It's quick, it's easy and it's pleasant.

You click with the pencil tool. Horizontal movements adjust the note length, vertical movements adjust the velocity. You can shift-click a note to adjust the velocity. Ctrl/Cmd click copies notes.

The pencil-entered note is entered as the last note-length (which many people seem to prefer).

There's a 'Chords' feature that lets you select a note and build a chord from it in a single click.

You can select a group of notes and apply a groove to the selection in a single click.

The 'Select Notes' menu in the bottom panel has a number of options to select notes with similar properties (pitch, mute-status, start time, velocity, etc...)

There's a variety of functions for editing note lengths, inverting pitches, modifying notes (like the legato command which adjust all note lengths to come up to the next note).

Editing CC, velocity, pitchbend etc... at its core level is clear and simple. When you make a selection of data there's a scaling box which is pretty neat.

Render notes. Render notes allows you to select specific notes and quickly render a new audio clip with just those notes rendered. **GENIUS**. I've used this so much. It's a great way to audition changes to midi in a new context, or to grab bits of a part to use elsewhere.

A feature that's rather unique that I like is that you can set the grid size in ticks. This allows you to work with odd polyrhythms or make 'groove-oriented' adjustments consistently across a part quickly.

The 'Line Tool' lets you quickly edit a series of notes, based on the previous note length and current grid size, as a repetition along the drawn line. The Line tool also edits CC/Velocity/Pitch/etc... data too.

The general process of **basic** MIDI editing in Waveform 9 is a total pleasure... and there's an inline editor so you can do all of this right in the main view quickly.

# Bad

This section is accurate for Waveform 9.0.39b, hopefully.

The Tracktion team may have changed these since I wrote this. During the course of this review I will try to maintain this, but after the review is over it's unlikely I will keep this up to date. Please try the demo yourself first before becoming upset by these things!

## MPE

{::nomarkdown}
<video autoplay loop muted class="gifvid">
<source src="/assets/Waveform/Bad/MPE.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
<div class="video-caption">MPE :(</div>
{:/nomarkdown}

[Read about what MPE is in my Bitwig post]({% post_url 2017-06-16-Bitwig-feature-review-Note-Expression %}#what-is-mpenote-expression). Read it. **READ IT**.

It's somewhat unsurprising that MPE works in Waveform since [the original author of Tracktion](https://github.com/julianstorer) now works at [one of the premier makers of MPE capable instruments, Roli](https://roli.com).

Does it stand up though? Look at [how well Bitwig does it]({% post_url 2017-06-16-Bitwig-feature-review-Note-Expression %}). [Cubase does it quite well too](https://www.steinberg.net/en/company/technologies/vst_expression.html).

It's not very good.

Editing MPE data is not fun. You only get 'blocks' of messages. You can enter 'fine' data and 'coarse' data. You can very clearly hear the steps on playback, which is particularly troubling with pitch bends.

When you select a note, you get a per-note editing box. If you want to somehow select a note 'behind' that, then you have to click away.

There's no tools for curves, shapes or editing existing data.

It's about as basic as you can get. If you have an MPE capable controller then you can edit data alright, and it records the data fine (as most DAWs will!). If you want to enter your own MPE data then you may want to look at another DAW.

## Notation

Waveform has no notation capabilities. That's all there is to it. It probably won't have one for a long time, if at all.

If you need this capability then you will need to be comfortable setting up a workflow using another Notation suite and operating that with Waveform 9 in some manner.

This is a short section, but it's surely a deal breaker for some people.

[It is unlikely to happen for a while too](http://www.kvraudio.com/forum/viewtopic.php?f=22&t=501918#p7038460), so don't hold your breath. I do admire the developers for recognizing their inability to do it right though.

## Advanced MIDI Editing

{::nomarkdown}
<img src="/assets/DP/Transpose.png" alt="Not Waveform">
<div class="image-caption">This isn't Waveform, sorry</div>
{:/nomarkdown}

If you want to _really_ get in deep and edit your MIDI, you may want to export your MIDI to another DAW like [Cubase](https://www.steinberg.net/en/products/cubase/start.html), [Logic](https://www.apple.com/logic-pro/), [Digital Performer](http://www.motu.com/products/software/dp) (my choice!) or [Reaper](https://www.reaper.fm).

Waveform lacks most of the fancy MIDI tools that you may want. Data search? Transposition tools? CC curve tools? MIDI Scripting? CC thinning? Rubato work? Humanization tools? Advanced Quantization tools?

Nope. You're out of luck.

This may seem like a big deal, but I caution the reader to do a bit of self-evaluation and think about how often you actually use many 'advanced' tools compared to basic MIDI data entry. I suspect for most people this isn't a huge deal, especially since 2 of the most popular DAWs out there also lack a number of what I'd consider advanced MIDI tools.

## Default Shortcuts

{::nomarkdown}
<img src="/assets/Waveform/Bad/MIDIShortcuts.png" alt="MIDI Shortcuts">
<div class="image-caption">Some shortcuts for MIDI</div>
{:/nomarkdown}

The default shortcuts for the MIDI editor are pretty bad. There's nothing available to change the grid size. No way to quick edit velocity or CC value. No way to adjust the current note's length or pitch.

Actually, there's really not many at shortcuts for MIDI editing at all. I counted 15 things that affect notes, 4 are 'nudge' and 4 are up/down versions.

The most important shortcuts IMO, the shortcuts to select tools, are cmd-option-number (mac) or ctrl-alt-number (win). Go ahead and try to hit cmd-option-4 or ctrl-alt-4. It's not pleasant is it? You _can_ change these to something easier like cmd-number or ctrl-number, but then you clobber other shortcuts that you must change now. It's a bit strange to me really, you'd think that these would be better thought-out.

_By far_ the most bothersome thing that I encounter is that I don't see any way to change grid size with the keyboard. This is a 'make or break' thing for quick MIDI editing workflows.

Compared to other DAWs, which I just checked, that have 100s of shortcuts available and the most basic tools are the easiest to press... it's disappointing.

(Also, the default Redo on macOS isn't cmd-shift-z, which **really** bothered me until I changed it)

## Per-Note Colouring

{::nomarkdown}
<img src="/assets/Waveform/Bad/NoteColours.png" alt="Note Colours">
<div class="image-caption">Note Colours</div>
{:/nomarkdown}

Waveform 9 has per-note colouring! Cool!?

Nope. There's 5 colours. That 4 colour grid on the right recolours your notes based on if they are "in key" or note.

Not cool. In fact, while trying to use this I found that it made things more difficult than working with a single colour.

## Step Recording

Many DAWs have step recording. Step recording allows you to enter MIDI notes one-by-one, on the grid, by playing the notes while playback isn't active.

Step recording is a wonderful feature normally. Waveform has made it so basic as to be not so wonderful.

What's missing?

* No shortcuts to change grid size
* No MIDI input to change grid size (some other products assign lower-octaves to change grid size, it's very nice!)
* No MIDI input to change anything... see above.
* No obvious indication of current note length
* Rest insertion relies on grid size
* No Live Step (that plays other notes at the current time)
* No backstep (to record over or _with_ the last played note)
* No adjustment of previous note without grabbing the mouse and messing up your current position
* No Velocity selection for current note unless you grab the mouse and dive a menu (**EDIT** - In the options menu you can 'Use incoming MIDI velocities for step entry', however this is insufficient for unskilled performers, which is likely a reason they are using step recording to begin with)
* Doesn't respond to played velocity?!
* No CC input
* Doesn't recognize pitch bend, which means that input notes may sound different than playback
* Chord input frequently inputs multiple notes in succession. You have to be pretty close to perfect to input a chord.

tldr; if you rely on step record, you may want to try the Waveform demo first. Waveform isn't even what I'd consider a basic implementation of step record sadly.

# Weird

This section is accurate for Waveform 9.0.39b, hopefully.

The Tracktion team may have changed these since I wrote this. During the course of this review I will try to maintain this, but after the review is over it's unlikely I will keep this up to date. Please try the demo yourself first before becoming upset by these things!


## MIDI Multi-Editing

{::nomarkdown}
<img src="/assets/Waveform/Weird/MultiEdit.png" alt="Multi Editing">
<div class="image-caption">Multiple Clip Editing? Kinda?</div>
{:/nomarkdown}


Waveform 9 has overlaid MIDI editing, where you can view multiple clips overlaid at once and edit them.

Except... I think it's broken?! The pencil doesn't select which track to edit. The 'eye' doesn't work. The manual shows a lock icon, but I don't have a lock?

It sorta works. You can overlay clips. You can select which one to edit (but not with the pencil icon?). The note overlays look nice.

I'm confused. Is this bugged? Am I stupid? Is this just designed weirdly?

I'll update this if I find out anything, but I tried to figure it out for 3 hours and it just seems broken... or it's awful. I'll assume that it's a bug, or series of bugs, for now.

# Support Me!

This post took 11 hours to research, photograph, write and edit. If you appreciate the information presented then <a href="/DonateNow/">please consider joining patreon or donating!</a>

<a href="https://www.patreon.com/bePatron?u=7465992"> <img class="patreon-button" src="/assets/Patreon.png" alt="Be a Patreon!"></a>

<form style="text-align: center;" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick">
<input type="hidden" name="hosted_button_id" value="BR247JAZBTUJJ">
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
</form>

If you have any questions or comments, please comment below! I read every comment and respond to most.



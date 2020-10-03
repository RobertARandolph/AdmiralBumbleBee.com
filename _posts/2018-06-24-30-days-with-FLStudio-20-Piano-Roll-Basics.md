---
layout: ['post', 'reader']
title: "30 days with FLStudio 20 - Part 3: Piano Roll basics"
comments: true
date:   2018-06-24_09:46:03 
categories: music
tags: ['FLStudio', 'DAW']
image: /assets/FLStudio/FLPianoDrums.png
description: Going through the basics of FLStudio's Piano roll
series: FLStudio
pdf: true
---

{::nomarkdown}
<img src="/assets/FLStudio/FLPianoDrums.png" alt="Drums">
<div class="image-caption">Drums in the Piano Roll</div>
{:/nomarkdown}

FLStudio's manual has some bold claims in it...

`FL Studio's Piano roll has the well deserved reputation as the best Piano roll in the business.`

And...

`FL Studio has, arguably, the most powerful Piano roll editor available. `

If you've read my website much then you know I really rev up when I see claims made about features. I'll be spending this post, and the following 2 posts discussing MIDI editing/entry which is mostly done in the Piano Roll.

To start with, I'm going to cover the bare basics of Piano Roll usage. Is it really the best?

**Other posts in this series**:

{% assign fls = site.posts | where: "series", "FLStudio" | sort: 'date' %}
<ul>
{% for my_page in fls %} 
    {% if page.url != my_page.url  %}
        <li><a class="page-link" href="{{ my_page.url | prepend: site.baseurl }}">{{ my_page.title | split: '-' | last }}</a></li>
    {% endif %}
{% endfor %}
</ul>

<!--more-->



# Contents
{:.no_toc}
* TOC
{:toc}

# What IS a Piano Roll and what should it do?

{::nomarkdown}
<img src="/assets/FLStudio/PRExplain.png" alt="Piano Roll Explained">
<div class="image-caption">Piano Roll Explained</div>
{:/nomarkdown}

Take a piano and turn it on its side. Each key is extended horizontally to your right. Little blocks show you when, how long and which keys are hit. When you hit play a playhead moves from left to right and notes are triggered as the playhead passes them.

Piano Rolls usually also have some way to edit 'metadata' (information about events) for each notes. Things like velocity (volume), pan, pitch etc..

That's what it is, but what should it do?

Piano Rolls _need_ to do a few specific things at minimum:

* Add notes
* Delete notes
* Select notes
  * Edit multiple selected notes at once
* Mute notes
* Change note's start time
* Change note's length
* Display recorded data
* Adjust velocity
* Add/Edit pitch bend

There's also some advanced features that are expected by most DAW users these days, many of which I [cover in a later post]({% post_url 2018-06-24-30-days-with-FLStudio-20-Piano-Roll-Basics %}):

* Edit to a grid
  * Grid often has 'swing', which moves specific beats closer to the subsequent beats for a galloping like feel
* Quantize notes (automatically move them to a time grid)
* Constrain to key/scale
* Edit MIDI CC data
* Paint notes (draw in a series notes, often according to a grid, with a single action)
* Zoom in/out quickly
* Support for features like [MPE]({% post_url 2017-06-16-Bitwig-feature-review-Note-Expression %})
* Advanced selection tools for selecting notes based on specific attributes such as pitch class, length, velocity, position etc...
* Editing [multiple MIDI parts at once]({% post_url 2018-03-28-Waveform-9-the-good-the-bad-the-weird-part-6 %}#midi-multi-editing)
* Colouring notes based on specific attributes like pitch or velocity
* Tools to enter chords easily
* Tools for quickly creating 'shapes' of metadata, like a sine wave shaped velocity curve or similar.
* Preview sounds as a note is entered

There's even more capabilities that various softwares have, however I think that these 2 lists cover the basic expectations of most intermediate music makers (and even some beginners).


# How does FLStudio's Piano Roll work?

{::nomarkdown}
<video poster="/assets/FLStudio/FLPianoRollWorkflow.jpg" controls muted preload="none">
<source src="/assets/FLStudio/FLPianoRollWorkflow.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
<div class="video-caption">Click play to see piano roll basics in action</div>
{:/nomarkdown}


In FLStudio you left click to add a note, right click to delete it.

From there you have a number of tools that you can select to delete, mute, select, etc... ootes. These tools are temporarily available with various combinations of shift, alt/option and ctrl/command. When you click to insert a note it uses the last selected note length, unless you hold shift then you can draw the note length by dragging.

The currently viewed note property (in the bottom) can be adjusted with the mousewheel. The note start time can be nudged with the mousewheel.

There's a nice zoom tool that lets you select an area to view, and then zoom-right-click to back out (but not to your previous zoom!).

Panning around your arrangement is just click-drag the mousewheel.

Two paint tools are available. One of them uses the current snap setting for note length and one uses the last entered length. The `Paint Drum Sequencer Mode` tool has some extra functionality to work with painted notes as if you're working with drums (basically just opening the slice tool and holding alt/option to halve the note entry time).

There's really _nothing_ here that's groundbreaking _functionally_. All of these basic functions are available in other DAWs, with similar entry methods.

# So why is it so good? Or... Is it?

{::nomarkdown}
<video autoplay loop muted class="gifvid">
<source src="/assets/FLStudio/Blink.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
<div class="video-caption">Blink and you'll miss it</div>
{:/nomarkdown}

There are intangibles about software that are difficult to quantify. The one of these that's thrown around the most is how [intuitive](https://community.ardour.org/node/3322) software is to use.

Think about that, [intuitive](https://community.ardour.org/node/3322). Read that small article.

What does it mean for something to be "intuitive"? It's pretty much a bullshit term that people use to mean, "It works how I expect it to, because I _expect_ it to work that way_". Everyone has different expectations though!

In the context of FLStudio's Piano Roll, at a basic level, it's that you can discover how it works quickly with minimum friction. A young child that knows how to use a mouse can easily click around and figure out how FL's piano roll operates fairly quickly.

Some other DAW's hide what I consider "basic functionality" behind tools or modifier keys. There's some functions that every piano roll needs to do, and they should be available with minimal mechanical and cognitive friction.

FLStudio manages to do this.

A Cubase user moving to Logic is going to be annoyed with how MIDI editing in Logic works. A [Cakewalk](https://cakewalk.bandlab.com) user is going to be confused when trying to use Reaper. An Ableton Live user will not naturally enjoy diving in to using [Renoise](http://www.renoise.com).

**BUT** I think that _any_ of those people can learn to use FLStudio's Piano Roll and be relatively comfortable with it in a few minutes. Discovering functionality happens quickly, and there's only 2 basic mechanics to use for most midi editing: click mouse button and/or hold modifier key.

That fluidity and relative simplicity can be a big help when working sometimes as well. I certainly have forgotten how to compress a group of notes, or quantize in a certain way in my main DAW.

# Is it the best yet?

**I haven't covered everything about the Piano roll**. There's even more here to discuss, but purely based on the basics... is it **the best**?

No. Nope. Nein. нет. Không. 아니야. 

Yes, I do think that FLStudio is the easiest Piano Roll to acclimate to, but that's a matter of hours of use _at most_. Once you acclimate to other products I think that FLStudio, at a _basic level_, is surpassed by most of the other DAWs in functionality.

That said **FLStudio's Piano Roll is not bad**. The basic interactions with it are pleasant. They are simple. When switching DAWs, it only takes me a minute to re-habituate to it. It's a fluid and easy to use system.

However, there's still more to FL's piano roll system. Keep in mind, once again, that _I'm simply considering the basic interactions_ with the Piano Roll. There's much more to come.

Will some of the more advanced features help FL live up to the claim? The next 2 posts will help elaborate on that. Two more posts to go on the Piano Roll!

# Support Me!

This post took 6 hours to research, screenshot, write and edit. If you appreciate the information presented then <a href="/DonateNow/">please consider joining patreon or donating!</a>







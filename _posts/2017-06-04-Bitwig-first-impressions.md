---
layout: ['post', 'reader']
title: "Bitwig first impressions"
comments: true
date:   2017-06-07_14:43:10 
categories: music
tags: ['DAW', "Bitwig"]
series: Bitwig
---

{::nomarkdown}
  <img src="/assets/Bitwig/Impression1.png" alt="Bitwig first try">
  <div class="image-caption">First Day of Bitwig 2.1</div>
{:/nomarkdown}

So my first few days of Bitwig have been interesting. I can't say that it's been a pleasant experience, but rarely is learning a new DAW.

Remember, these are just first impressions. I will dive in with more detailed analysis and review as this series continues over the next 26 days.

Click through for much more detailed first impressions.

**Other posts in this series**:

{% assign bits = site.posts | where: "series", "Bitwig" | sort: 'date' %}
<ul>
{% for my_page in bits %} 
    {% if page.url != my_page.url and my_page.layout != "reader" %}
        <li><a class="page-link" href="{{ my_page.url | prepend: site.baseurl }}">{{ my_page.title}}</a></li>
    {% endif %}
{% endfor %}
</ul>
<!--more-->

# Contents
{:.no_toc}
* TOC
{:toc}

# Setup

## Audio Devices

{::nomarkdown}
  <img src="/assets/Bitwig/InputSetup.png" alt="WTF">
  <div class="image-caption">Setting up inputs</div>
{:/nomarkdown}

~~The first thing I had to do was setup the I/O for the interface that I use with my laptop. This took me _30 clicks_. Followed by manually naming everything. It doesn't even pull the Coreaudio names from the device.~~

~~Unpleasant.~~

**EDIT August 10th, 2018** Fixed, much better.

## Audio Inputs

{::nomarkdown}
  <img src="/assets/Bitwig/InputList.png" alt="Input List">
  <div class="image-caption">Let's select an input!</div>
{:/nomarkdown}

~~The image says it all. Selecting inputs is a PITA. That massive list is just not fun to navigate.~~

~~There also seems to be no input meters so you can find which input is active... Major PITA when it doesn't pull coreaudio device input names to begin with!~~

**EDIT August 10th, 2018** Fixed.

## Audio Inputs again

{::nomarkdown}
  <img src="/assets/Bitwig/InputDelete.png" alt="Deleting Inputs">
  <div class="image-caption">Let's just delete an input, but which one?</div>
{:/nomarkdown}

~~Can you tell which input I'm deleting? Me either.~~

**EDIT August 10th, 2018** Fixed.

## Track Volume!?

{::nomarkdown}
  <img src="/assets/Bitwig/TrackVol.png" alt="Default Track Volume">
  <div class="image-caption">-10db by default?</div>
{:/nomarkdown}

I get it. Most people using this will be using samples that are normalized and pegging 0dbFS. This is _not the answer_. If you are recording any audio input this is a terrible setting. It encourages people to record hotter than necessary.

What should happen is that the default Sampler volume is -10db instead.

## Midi devices

{::nomarkdown}
  <img src="/assets/Bitwig/Controllers.png" alt="Controllers">
  <div class="image-caption">'Controller' setup</div>
{:/nomarkdown}

Setting up midi devices was very confusing for me. There's 2 aspects to the confusion:

1. Why do you need to setup anything at all!? Most DAWs automatically setup and make available the midi I/O that's there.
2. It's called "Add Controller". This must be some new-fangled hip kid nomenclature. I never refer to my keyboard or any of my midi devices as a 'controller'.

I'm sure a lot of folks will handle this fine, but at the very least it should be noted that Bitwig requires you to setup your devices before you can use them. Even generic midi I/O.

## Startup time

Bitwig takes up to a full minute to start on my system. The longest of any DAW that I own (of _many_).

# Looks

Upon first inspection, I have to say that I think Bitwig looks a bit blocky. The colour selection is a bit muted and dull, but I suspect most musicians in their dark caves will appreciate that. _I don't_.

There also does not appear to be a way to change this. You are stuck with the dark grey and orange colour scheme.

## Slow first clicks

~~The first use of anything in Bitwig is slow. First use of every menu is slow. First sliding of an element is slow. First search is slow.~~

~~Basically you need to warmup the program before it feels fluid.~~

**EDIT August 18th, 2018** Fixed!

# OS Integration 

## Moom no worky

The first thing I noticed about Bitwig is that it doesn't function with one of my favorite programs, [Moom](https://manytricks.com/moom/). That's a bit of a bugger, but I can manage.

## No Menu Bar

{::nomarkdown}
  <img src="/assets/Bitwig/Help.png" alt="Search">
  <div class="image-caption">This is how I find things</div>
{:/nomarkdown}

Next up is that there is no native menu bar. When using new software, or complex software, I abuse the macOS help search as shown above. This allows me to quickly find functions and features by simply hitting cmd-shift-/ and typing. Nothing.

This also makes multi-screen use a PITA if you're used to your menu bar functions in a specific place

## Browser window

{::nomarkdown}
  <img src="/assets/Bitwig/Browser.png" alt="Floating browser">
  <div class="image-caption">Window in prison</div>
{:/nomarkdown}

The browser window for Bitwig is a native window that the OS knows nothing about. It can't exist outside the main window, so it's always blocking your view when open. It doesn't respond to alt-tab or cmd-`. It doesn't respond to ctrl-w or cmd-w.

Not only that, but when you move it around it has this sluggish elastic lag. It just feels bad to interact with it.

## Window position not remembered

It seems that the window position is not remembered on a per-app basis with Bitwig on mac. It seems to be saved with the project instead.

## Keyboard window switching does not work!

You can't cmd-` or alt-tab through effects windows. Extremely bothersome. This is the sort of thing that makes me want to quit a program for good.

# Neat Things

## Package Manager

{::nomarkdown}
  <img src="/assets/Bitwig/Pakman.png" alt="Package Manager">
  <div class="image-caption">How you install bonus content</div>
{:/nomarkdown}

Bitwig has a 'Package Manager'. This is how you get samples, presets, and other content not included with the core program. Much nicer to be able to easily select the content that you want than have to download it all with the original software download, or through some clunky interface like Logic Pro X's.

## Modulation system

{::nomarkdown}
  <img src="/assets/Bitwig/BitwigImpressionMod.gif" alt="Modulation!">
  <div class="image-caption">Modulation! (keytracking and lfo</div>
{:/nomarkdown}

I will explore this more in another post, but Bitwig has some seriously great modulation. In the above image I have 2 LFOs controlling gain/frequency of a band of [Pro-Q 2](https://www.fabfilter.com/products/pro-q-2-equalizer-plug-in)

## Expression

{::nomarkdown}
  <img src="/assets/Bitwig/NoteExImpress.png" alt="Note Expression">
  <div class="image-caption">Note Expression</div>
{:/nomarkdown}

Bitwig has vairous note expression tools. I actually have been unable to figure out how to utilize these yet, and the manual offers _zero_ help in this regard, but I'm sure it's great once I figure it out.

# Bothersome stuff

## Demo limitation

{::nomarkdown}
  <img src="/assets/Bitwig/DemoLimit.png" alt="Demo Limitation">
  <div class="image-caption">Demo Limitation :(</div>
{:/nomarkdown}

This is a big one. What's the worst thing that can happen when you're making music? You suddenly lose all of your work and have no way to recover it.

So how does bitwig treat the potential customer? By making you experience that worst-case scenario every time you use the program!

The Bitwig demo can not save. Every time you open it, you're doomed to lose everything.

A _significantly_ better option would be to disallow from opening saved projects. That would encourage people to purchase the program rather than forcing them to experience (even if at times minor) the most catastrophic scenario an artist can experience. 

## Record turns off when changing I/O

{::nomarkdown}
  <img src="/assets/Bitwig/RecordOff.gif" alt="Record off">
  <div class="image-caption">Record turns off when changing I/O</div>
{:/nomarkdown}

~~There is _never_ a time when I want to not be recording after changing I/O... at least that I know of yet. Maybe there's some weird thing that will make this seem more reasonable, but so far I hate this.~~

~~Record should stay on when changing inputs!~~

**EDIT August 10th, 2018** Fixed.

## Tooltips

{::nomarkdown}
  <img src="/assets/Bitwig/Tooltips.png" alt="Tooltip">
  <div class="image-caption">Tooltip placement</div>
{:/nomarkdown}

Tooltips are placed very oddly around the program. Not only that, but they don't show the shortcut for that action, which is something every program should do.

## Instrument GUI

It takes at least 2, often 3-4 clicks to get to an Instrument GUI from any given place. Those clicks really build up over time. In general, tweaking instruments in Bitwig seems like a chore so far.

## Resizing the GUI is slow

Resizing the main GUI is slow, jerky and just ugly.

Not only that, but the screen flashes repeatedly while doing it. This is not the best experience when it doesn't remember your screen size to begin with!

## You can't edit pitch/CC in the secondary panel editor?!

{::nomarkdown}
  <img src="/assets/Bitwig/CCEditingSnafu.gif" alt="CC Editing">
  <div class="image-caption">CC Editing context switch</div>
{:/nomarkdown}

Just what the title says. Maybe I'm missing something, but it appears that CC/pitch must be edited in the horrendous large main panel editor or as arranger automation.

What a horrible disconnect! Often CC needs to be edited to time properly with events/notes, but you are forced to context switch to acheive this visual mapping.

Notice how in the animated image the CC-lane moves, and how you're forced to context switch to do something this simple.

## Midi editing seems primitive.

{::nomarkdown}
  <img src="/assets/Bitwig/ToolsImpress.png" alt="Tool-based editing">
  <div class="image-caption">Tool-based editing</div>
{:/nomarkdown}

Bitwig appears to use a tool-based editing system, except with a very limited selection of tools. The manual actually doesn't seem to cover note editing beyond the availability of these tools, so I assume that's all there is.

Just the act of drawing in notes is rather painful, let alone editing complex played-in arrangements. I suppose I'll expand on that more later.

## Shortcuts **suck**

{::nomarkdown}
  <img src="/assets/Bitwig/ShortcutsImpress.png" alt="Shortcuts...">
  <div class="image-caption">That's it</div>
{:/nomarkdown}

No joke. That's all 4 shortcuts listed for the note editor. Yes there are other things you can do, but they are not organized correctly in the shortcut browser or manual.

Combined with the worthless tool tips and lack of a help-system, figuring out shortcuts in Bitwig is a creativity-killing experience.

# Donate?

This post took 8 hours to research, photograph, write and edit. If you appreciate the information presented then <a href="/DonateNow/">please consider joining patreon or donating!</a>






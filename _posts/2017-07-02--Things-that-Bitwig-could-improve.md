---
layout: post
title: "Things that Bitwig could improve."
comments: true
date:   2017-07-02_09:54:26 
categories: music
tags: ['Bitwig', 'DAW']
series: Bitwig
---

{::nomarkdown}
  <img src="/assets/Bitwig/Tooltips.png" alt="Tooltips">
  <div class="image-caption">Tooltip... not very useful</div>
{:/nomarkdown}

Bitwig is a cool DAW no doubt, but there's a number of things that could be greatly improved.

Here's a non-exhaustive list of things that I've found problematic in my time with Bitwig so far...

(Using BITWIG STUDIO 2.1.1 as of the time of this writing)

{% assign bits = site.posts | where: "series", "Bitwig" | sort: 'date' %}
<ul>
{% for my_page in bits %} 
    {% if page.url != my_page.url  %}
        <li><a class="page-link" href="{{ my_page.url | prepend: site.baseurl }}">{{ my_page.title}}</a></li>
    {% endif %}
{% endfor %}
</ul>
<!--more-->

# Contents
{:.no_toc}
* TOC
{:toc}

# Missing Features

## Automatic multi-out and multi-in routing

{::nomarkdown}
  <img src="/assets/Bitwig/Bad/AutoRoute.png" alt="Auto Route">
  <div class="image-caption">Automatic multi-out Routing</div>
{:/nomarkdown}

<strike>Currently if you place a multi-output VSTi on a track in Bitwig, there's no simple or automatic way to assign the outputs to their own individual (optionally grouped) tracks. You can create an FX layer with its outputs, then manually create the tracks and add [Audio Receivers]({% post_url 2017-06-27-Bitwig-Effects-review %}#audio-receiver)(or set input and activate monitoring) to each new track and take input from the specific channels of that FX Layer.

This is really a major oversight. Tedious!</strike>  
 
* **edit**: I was mostly wrong with the above statement. First right-click the device and select "Add missing chains", then in the mixer there's a "↓↓" next to the name of the track at the top. This opens up the tracks for each FX/Instrument Layer. So it _is_ possible to have tracks routed so each Instrument output is visible in the mixer. The only issue is that if you want the outputs as tracks in the _arranger_, then you have to deal with the tedium of manual routing.
  
Another issue is how difficult it is to route multiple tracks to a single Multi-Out device. It's a common workflow to have a single Kontakt instance with many instruments loaded, feed that single Kontakt instance with multiple midi tracks assigned to the in-Kontakt instruments, and working happily. Bitwig doesn't offer a way to set this up easily or save this setup without requiring a template.

## Freeze

<iframe src="https://www.youtube.com/embed/BjsZWUpXHRA?ecver=2" width="640" height="360" frameborder="0" allowfullscreen></iframe>

Freeze is a feature that allows you to render a track and disable but not delete the effects on that track. It's a massively useful feature, especially when you can select the point in the chain that can be frozen and freeze sends.

The video above shows [Reaper's](http://www.reaper.fm) excellent freezing facilities.

## Stereo Panner

{::nomarkdown}
  <img src="/assets/Bitwig/Bad/StereoPan.png" alt="Stereo Pan">
  <div class="image-caption">Various Panning methods</div>
{:/nomarkdown}

Bitwig only offers a balance control unless you insert [dual pan]({% post_url 2017-06-27-Bitwig-Effects-review %}#dual-pan) in to your device chain.

This can be an issue because the default 'pan' knob in Bitwig simple fades in/out the left and right channels of a stereo signal. Full pan left simply mutes your right signal, and full pan right simply mutes your left signal.

Selectable stereo panners, similar to what's shown above, would be a great addition. Having to dive in to your device chain for something as basic as proper panning is pretty silly.

## VCA

{::nomarkdown}
  <img src="/assets/StudioEvaluatione/VCA.png" alt="VCA">
  <div class="image-caption">VCA</div>
{:/nomarkdown}

VCAs are important for mixing, especially in Bitwig where all of your sends are post-fader by default. Yes, bitwig does have groups, but they do not solve some fairly major issues that VCAs do solve.

Maybe you haven't run in to, or noticed, the issues that VCAs solve. They do solve some common issues though.

### VCA save #1: the runaway reverb

Let's say that you have 3 tracks: Kick, Snare, Clave. That is your entire drum kit.

Snare is going to a reverb send with -15db send. Lots of reverb on that snare, but the balance with the other 2 kit elements is perfect!

You've reached a point in your track where you need to turn your drum kit down. It's way too loud. The balance of the elements is perfect, but everything needs to come down. Here's where you have trouble:

* Create a group and lower the group - A group lowers the _combined_ value of all tracks sent to it. However, since the snare is sending to the reverb at -15db that is unchanged. Your send track's reverb is still at the _exact same value_. Your dry drum sound is pulled down by the group, but all routing that _happens before the group_ is unchanged. You are now left with proportionally much more reverb on your snare because the group never changes that send amount!

* Create a VCA and lower it - A VCA affects the fader of each channel. Since the value of the fader is changed, then the audio going out of the post-fader send is also changed! VCAs attached to your whole kit will maintain the same proportions for the routing.

    VCAs also have the bonus that they don't interfere with automation. The VCA is like a second fader on top of each track's fader, so if you have automation on those tracks they stay intact. They are simply scaled by the VCA amount.

### VCA save #2: the picky mixer

Imagine you have complex automation on your drum kit. Hand-crafted with love to make your percussion sound like [Peter Erskine](https://en.wikipedia.org/wiki/Peter_Erskine) himself took up playing breaks just for you.

Later you device that for the chorus all your drums need to come down slightly. What do you do? Add a group and automate that? We already know of problems that causes, but groups also encapsulate everything inside them. If you want to separately affect A and C and A and B... there's no way to do that.

VCAs let you setup automation (or just simple fader changes) that simply scale the existing faders that they are tied to. VCAs can be attached to multiple tracks without defining a hierarchy, so you can have a VCA that controls A + B and A + C and then A + B + C all totally separately. You can not do that with groups!

VCAs can also control other VCAs. So maybe you have a lead vocal that needs to come up with your whole drum section, a VCA can do that without having to group your vocals and drums together. It won't affect your automation, it won't screw up your sends or routing.

VCA systems also have a way of combining the VCA data with what it controls. You can write a subtle VCA fade out then combine that with the automation of the tracks that it's controlling. Now your crazy automation slowly fades out (or becomes crazier).

## Tempo Map

{::nomarkdown}
  <img src="/assets/Bitwig/Bad/TempoMap.png" alt="Tempo Map">
  <div class="image-caption">Tempo Mapping</div>
{:/nomarkdown}

Tempo mapping is basically automating the tempo and time signature of your track. I use this frequently to help give tracks more expressive feels, or to have the project follow the performer rather than ruining the performance's groove by warping it to a fixed tempo.

Many DAWs allow you to even automatically create tempo maps from performances in great detail, or apply a tempo map to a performance to conform it to a current tempo map.

Bitwig has nothing of the sort.

## Comping & Loop recording

<iframe src="https://www.youtube.com/embed/pO0iJi4cqtQ?ecver=2" width="480" height="360" frameborder="0" allowfullscreen></iframe>

Comping allows you to take multiple audio (or midi!) parts, select the best parts, and _quickly_ insert them in to the main performance. Most comping systems attach comps to each clip, so that a single clip may have 100s of different performances that can be composited to make a single great performance.

A companion to comping is the ability to loop a section and repeatedly perform that part with each loop creating a new layer to the clip. These layers can be selected or comped as needed. Sometimes it's even useful to dump your layers to new so they play at once for cool harmony effects, or lined up side-by-side for a more interest repeated progression.

# Manual

{::nomarkdown}
  <img src="/assets/Bitwig/Bad/ManualVerb.png" alt="Manual">
  <div class="image-caption">The manual doing work</div>
{:/nomarkdown}

Bitwig's manual needs some work.

These problems persists around the manual as a whole, but I'll provide 1-2 examples for each issue. It's very easy to find more examples with just a cursory glance through though.

* Terse descriptions - Most sections have very limited information (see graphic above). When writing the effects/instrument reviews I had to spend hours with a scope trying to figure out what specific parameters were doing. 

* Missing information - Often the manual doesn't even _mention_ functionality present in various areas ([Qua anyone?]({% post_url 2017-06-23-Bitwig-Modulators %}#math))

* Strange order - The manual explains automation and mixing before explaining how to work with audio or notes.

* Information in odd places - Where do you think you learn to draw notes? The Note Event section? Nope... Arranger view section (where there's no note editor!)

* Missing information - What type of midi message does the 'Fine' pitch control of the [Note Pitch Shifter]({% post_url 2017-06-29-Bitwig-Instruments-Review %}#note-pitch-shifter) send? Which icon indicates VST 2 or 3?

I've figured out these things (and a lot more) despite the manual, but a more comprehensive manual would help a lot.

**EDIT August 10th, 2018** The manual is improving. It's still not great, but it's getting better.

## Tooltips

{::nomarkdown}
  <img src="/assets/Bitwig/Tooltips.png" alt="Tooltips">
  <div class="image-caption">Tooltip... not very useful</div>
{:/nomarkdown}

I [mentioned it before]({% post_url 2017-06-04-Bitwig-first-impressions %}#tooltips), but it's become even more annoying over time.

* Tooltips aren't consistent - some items have tooltips, some don't. Of course it's only that I notice the ones that don't when I really need on-the-spot info about something.

* Tooltips don't show assignment - Most other productivity software shows the currently assigned shortcut in the Tooltip. Bitwig does not. Some software will even go as far as to show you what modifiers work and what they do as well.

* Tooltips are misaligned - Tooltips often show near/by the wrong item. They are usually offset next to the GUI element, rather than the mouse. This could be improved a lot.

## Realtime help

{::nomarkdown}
  <img src="/assets/Bitwig/Bad/ZoomandPan.png" alt="Helpful?">
  <div class="image-caption">Also super helpful</div>
{:/nomarkdown}

Bitwig almost has realtime help, except apparently you can only Zoom and Pan.

**EDIT August 10th, 2018** This is improving, slowly.

Logic let's you mouse-over any item and, with the press of a key, open the manual to a description of what the thing does.

{::nomarkdown}
  <img src="/assets/Bitwig/Bad/HelpBar.png" alt="Actually Helpful">
  <div class="image-caption">A helpful bar</div>
{:/nomarkdown}

Studio One has a help bar that shows you all current modifiers and/or a description of what's under the mouse. It changes in real-time as you move, as you press modifiers and as you change contexts.

It's actually very helpful, even when you know your way around quite well.

# Browser

## Doesn't remember size/position

The pop-up browser does not remember its size and position. Every time I call it up, it plasters itself in a new place at the default size.

I don't need a large browser window, and I always want it in the upper right. It does not seem possible to make it always recall there.

## Slow loading some samples

A lot of .wav format samples preview rather slowly. I know this is not a system issue, since they load instantly in other DAWs. It's actually rather slow trying to browse through a number of wav format samples. The delay is a bit less than half of a second (around 300ms), but that adds up and sullies the user experience.

I don't normally use [FLAC](https://xiph.org/flac/), however on the suggestion of a user I attempted to browse some FLAC samples. That's _much worse_ than waves.

## Side browser no modulators

The side browser doesn't show modulators. I wouldn't mind being able to _never use_ the pop-up browser, but it's required for modulators.

I think that the side-browser should allow modulators to be shown so they can be drag&dropped on to the appropriate slot.

## No fuzzy search

"EQ5" wont find "EQ-5". "Verb" won't find "Reverb"

Search could be greatly improved with some fuzzy-logic.

I would also love to see a [logical editor](http://www.soundonsound.com/techniques/logical-editor) or even basic [regular expression](https://en.wikipedia.org/wiki/Regular_expression) support.

## No project search

Bitwig has no way to search for things already in the project. It's rather useful to be able to search and move-to or select 'all of the 606 snare.wav' or whatever.

I use project searching constantly in other DAWs. It's an excellent way to navigate, replace samples, extract parts, select areas, make large modifications to midi data etc...

## One result?

When there's only 1 result, hitting enter doesn't select it. This means that there's always an extra mouse/key movement necessary when there's only 1 thing that hitting enter could possibly do.

## Loses focus easily

I frequently have trouble with the browser and browser search losing focus, then I begin typing and crazy stuff happens to the project. I've found a number of complaints about this as well.

# Note editor & Arranging

## Drum editor names can't be resized

{::nomarkdown}
  <img src="/assets/Bitwig/Instruments/DrumAssign.png" alt="Drum Assignment">
  <div class="image-caption">Automatic sample naming</div>
{:/nomarkdown}

If your sample names are too long, then the drum editing mode is a bit useless unless you manually go and rename every thing.

Being able to resize the name columns would really help.

## Constant tool changing

Bitwig uses the tool paradigm for editing. This means that something as simple as entering a note then making a time selection requires a full key-press and mental tracking of what tool is active.

I really dislike this method of working.

The most problems occur when I do something with a certain tool (pen/select/erase/knife), then go do something non-editing related. The first time I come back I _always_ assume I'm back at the default cursor tool. Sure you could make a habit if always pressing '1' to get back to the cursor tool, or pressing the appropriate tool every time you use it, but that's just inefficient.

I'm much more a fan of modifier and context related editing where you have a plethora of functions available based on the modifier key that's held down and where you click. This means that there is always a reference function that the cursor that only changes at the time that you input an action.

I'm not suggesting that the tool-paradigm be eliminated. I'm very used to using it in Cubase and Studio One, but they both have extended the usefulness of the tools through context-sensitive hotspots and a number of modifiers. They also have great features like 'secondary tool', 'last tool', and the always useful smart tool that works entirely contextually.

## Note length is tied to your last note

When you enter a 1/16th note, every subsequent note is a 1/16th note until you draw something else. It's frustrating! 

Being able to use a hotkey to select note-length and quality (dotted/triplet) is much more productive and faster.

I feel that this is a major issue in Bitwig's note editor. It basically means that you often have to drag every single note to size, and sometimes scroll around just to input a note!

## Note scaling

Being able to scale phrases would be very useful. Simply select a phrase scale it by a given %.

You can currently do this to a clip, but not selected notes.

## Notes are labelled only as sharps

ARGH. I hate this. It's so frustrating sometimes. Half the western keys _do not have sharps_, and most common pop chord modifications are _flats_. It's a pain in the ass to transpose things mentally.

Luckily it's not too much of an issue in the piano roll, since I never really pay attention to the note names, but still... c'mon. B♭m7 is not spelt: A# C# F G#. 

## No zoom to selection

Often when working there's a small section that I want to focus on. Most other DAWs have a function that lets you select and area and have the screen zoomed to that selection.

Bitwig makes you fiddle around with mouse-drag scrolling or a bunch of key presses to try and get close.

## No zoom undo

You've fiddle around to zoom in to that section you're working on, and now you want to get back to what you were looking at before. Other DAWs? Zoom undo to back up zoom levels.

Bitwig? _More fiddling with zoom_

## Layered editing could improve a lot

{::nomarkdown}
  <img src="/assets/Bitwig/Bad/LayerComp.png" alt="Layered Editing">
  <div class="image-caption">Layered editing</div>
{:/nomarkdown}

This is a feature that will also make an appearance when discussing things about Bitwig that are cool.

Bitwig allows you to view multiple clips that occur in the same time in your project. You can select which clips are visible, which clip is editable, what clips are always un-editable etc...

Unfortunately, Layered editing is a mouse-fest. Everything is multiple clicks. There's few shortcuts as well.

Selecting what you want to see involves clicking lots of small 'eye' icons. You can't drag-click locks/view buttons. Editing doesn't follow track or clip selection. View doesn't follow selection (or quickly view-only selected). No shortcuts to move current edit layer, switch layers, layer view presets,one-click selection and other usability improvements.

A strange thing I continually experienced is that it's possible to have something as the active edit layer, but not visible. I can imagine scenarios where this would be useful, however you can't add any new notes when this happens. It's confusing when it happens and once again makes for more mouse clicking.

Another huge annoyance is that the buttons in the layer editor respond to mouse-up. That means that if you click the button then move it off the button's rectangle, it won't be triggered. I've had many times that I thought I locked a layer, but I didn't because of this.

## One lane at a time

Often when writing midi automation (midi CC), there's a number of automation moves that are dependent on each other _and the notes_. The obvious workflow is to be able to show/filter a number of CCs so you can see their relative position to each other.

Bitwig only lets you show one lane at a time in the note editor. If you want to see multiple lanes, the you have to back up to the arrangement view.

What if you are using clips that aren't in the arrange view? Then you're screwed. There's no way to see multiple lanes at the same time in the editor.

## Limited to no midi tools

{::nomarkdown}
  <img src="/assets/Bitwig/Bad/Humanize.png" alt="Humanize">
  <div class="image-caption">DP's humanize dialog</div>
{:/nomarkdown}

There's a lot of different types of midi editing that can be automated. Humanize, randomize, de-flam, time scaling, inversion, filtering, selected transposition mapping, [groove quantize](http://www.soundonsound.com/techniques/groove-quantise-part-1) and much more.

AFAIK, Bitwig has none of these useful and awesome tools. You hack at it by hand, or you maybe setup some [note fx]({% post_url 2017-06-29-Bitwig-Instruments-Review %}#note-effects) that applies to the whole stream. You're still missing about a dozen or more useful functions though!

## Lacking useful automation tools

{::nomarkdown}
  <img src="/assets/StudioEvaluatione/transform.gif" alt="Scale!">
  <div class="image-caption">Scale it!</div>
{:/nomarkdown}

There's so many cool ways to work with automation in other DAWs. Bitwig is really far behind in this regard.

* Scaling and Reshaping - Other DAWs have tools to scale and reshape automation data as if you're working in a photo editor. Very useful, and I use this often
* Shapes - Yes, [Bitwig does have modulation]({% post_url 2017-06-23-Bitwig-Modulators %}) but often modulation needs to be changed over time manually. Bitwig's modulator parameters can't be edited, nor can their data be recorded as automation.
* Thinning/interpolation - Controlling how often external data is sampled for automation, and optionally thinning it, is an important part of automation management
* VCAs - [VCAs](#vcas)
* Automation clips - Bitwig can have automation that's assigned to a clip, however it does not have a way for automation to exist _only_ as a clip that can be assigned or attached to an unrelated parameter at will.
* Preview mode - [Latch preview automation]({% post_url 2017-03-30-Things-that-I-really-like-about-Reaper %}#latch-preview) mode is exceptionally useful. This allows you to select an area, test changes and apply them at will. Current Bitwig does not have any facility for previewing automation.
* Snapshot automation - [Snapshot automation]({% post_url 2016-12-14-Cool-Features-in-Digital-Performer...-Part-5 %}#snapshot-automation) is a feature that I use very often. It allows you to write the current settings of the selected parameters as automation to the current time or selection with options for how the data before/after is managed.

All in all, Bitwig's automation is very poor. There's a number of DAWs that support _all_ of these features each with their own additional twists and capabilities.

# 3rd party plug-ins load slow first time

~~Non-bitwig devices load unusually slow here. 5+ seconds for any given first load of a VST.

I understand that the instantiation is being done on-the-spot, rather than on-load of the DAW, however other DAWs both start faster _and_ load VSTs faster.~~

**EDIT August 10th, 2018** This is fixed it seems.

# Only sharps in value entry

Bitwig allows you to enter note values for most knobs that accept a frequency value. Unfortunately you can only enter un-modified notes and sharps.

[See this section for more](#notes-are-labelled-only-as-sharps)

# Device panel doesn't auto scroll

{::nomarkdown}
  <video autoplay loop muted>
    <source src="/assets/Bitwig/Bad/DPscroll.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <div class="video-caption">Adding a new device to the right</div>
{:/nomarkdown}

When adding a new device to the right in the device panel, the devices view does not scroll fully to the right.

# More FX flavours

[As mentioned before]({% post_url 2017-06-27-Bitwig-Effects-review %}#conclusion), I think Bitwig would benefit from some more variations of the effects that it offers.

There is a great deal of flexibility offered with what is available, however there are a number of common 'flavours' of effects that Bitwig simply does not offer.

Some suggestions:

* Convolution reverb
* Better _guitar_ amp simulation
* At least 1-2 popular analog compressor emulations
* Dynamic equalizer (this can be done with modulators, but it's a pain to setup and tune)
* A simple analog EQ emulation - ~3 bands with gain dependent Q set on classic frequency centers.

# Container sends

Multi-device containers like [the drum machine]({% post_url 2017-06-29-Bitwig-Instruments-Review %}#drum-machine) really need a way to send their outputs to another track/device chain. Currently it's not possible to group-process instruments from a Drum Machine unless you split out your samples/device to its own track.

This could also be solved by a simple 'send' and 'receive' device pair that lets you send audio from one chain to another chain destination or track. This is possible currently in some regard, but you can't reach inside of a container to take audio out.

This could also be solved by just having FX sends inside the container.

# Better I/O management

~~[I mentioned before]({% post_url 2017-06-04-Bitwig-first-impressions %}#setup) what a pain Bitwig can be to setup I/O if you have anymore than 2-4 device I/O. Obviously I'd like to see that improved.~~

**EDIT August 10th, 2018** Fixed.

# Conclusion

Bitwig has a long way to go in some regards, but it's progressing. There's a chance that very few of these things bother _you_ and that would certainly make Bitwig a great choice for you.

There's still more to go though, I've yet to cover some of the cool things in Bitwig!

# Support Me!

This post took 9 hours to research, photograph, write and edit. If you appreciate the information presented then <a href="/DonateNow/">please consider joining patreon or donating!</a>






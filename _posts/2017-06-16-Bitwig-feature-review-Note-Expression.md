---
layout: ['post', 'reader']
title: "Bitwig feature review - Note Expression"
comments: true
date:   2017-06-16_11:37:41 
categories: music
tags: ['DAW', 'Bitwig', 'Comparator']
series: Bitwig
---

{::nomarkdown}
  <img src="/assets/Bitwig/NoteExpressionChip.png" alt="Note Expression">
  <div class="image-caption">Note Expression in action</div>
{:/nomarkdown}

One of the major features that sets Bitwig 2 apart from other DAWs (such as [Ableton Live](https://www.ableton.com)) is Note Expression.

Note Expression, at its core, allows you to apply modulation of certain parameters to specific notes. The original midi spec only allows for control messages to be attached to the whole stream of data. With Note Expression, you can have a complex part where only certain notes that are specifically controlled.

After the break I'll break it down even further with some examples.

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

# What is MPE/Note Expression?

## The meaning of the words.

[MPE](https://www.bitwig.com/en/16/the_future_of_midi.html) stands for "Multidimensional Polyphonic Expression". They sure came up with a name that sounds fancy, but what it offers IS fancy as you'll see soon.

There is another technology similar to MPE that's called "VST Expression". This is part of Steinbergs VST 3 specification, so it's possible that some VST 3 softsynths you have already support it.

Bitwig supports both of these specifications.

## What does MPE offer you?

With normal midi, any CC messages that you send are sent on their own channel. They do not correspond to any specific _note_, but instead they correspond to _time_.

This means that for MIDI, if you move your pitch wheel while playing a chord of 3 notes, all 3 notes will be pitch-shifted by the same amount. There's no way for the synthesizer to know _what_ you want the pitch wheel to do, it only knows _when_ you used it, so it applies it to everything.

MPE (and VST Expression) work a bit differently. They allow you to attach messages to specific notes. So if you play 3 notes, it's possible for MPE to express that you wish only the highest note to be pitch-shifted.

## How would you input it with an instrument?

Your average piano does not allow you to specifically perform pitch or timber modulations on a per-note-basis, however there are instruments that do. Excluding the obvious things such as natural string instruments, there are a number of modern electronic controllers that work with MPE-compatible synthesizers.

### Eigenharp

<div style="position:relative;height:0;padding-bottom:56.25%"><iframe src="https://www.youtube.com/embed/avQwj45M-j0?ecver=2" width="640" height="360" frameborder="0" style="position:absolute;width:100%;height:100%;left:0" allowfullscreen></iframe></div>

### Linnstrument

<div style="position:relative;height:0;padding-bottom:56.25%"><iframe src="https://www.youtube.com/embed/flKMz9UmqAw?ecver=2" width="640" height="360" frameborder="0" style="position:absolute;width:100%;height:100%;left:0" allowfullscreen></iframe></div>

### Roli Seaboard

<div style="position:relative;height:0;padding-bottom:56.25%"><iframe src="https://www.youtube.com/embed/ke1h4LskKsE?ecver=2" width="640" height="360" frameborder="0" style="position:absolute;width:100%;height:100%;left:0" allowfullscreen></iframe></div>

### Haken Continuum

<div style="position:relative;height:0;padding-bottom:56.25%"><iframe src="https://www.youtube.com/embed/Sa9Vx0svwdM?ecver=2" width="640" height="360" frameborder="0" style="position:absolute;width:100%;height:100%;left:0" allowfullscreen></iframe></div>

### GeoShred (iPad app)

<div style="position:relative;height:0;padding-bottom:56.25%"><iframe src="https://www.youtube.com/embed/YBleY_iNsH4?ecver=2" width="640" height="360" frameborder="0" style="position:absolute;width:100%;height:100%;left:0" allowfullscreen></iframe></div>

## But I don't have one of those fancy controllers!

{::nomarkdown}
  <img src="/assets/Bitwig/NEFancy.png" alt="Fancy Not Needed">
  <div class="image-caption">Note Expression in action</div>
{:/nomarkdown}

Note expression can be easily programmed in Bitwig. Parts can be played in, or drawn in, as you would expect. From there the Note Expression mode is engaged and you have a number of tools to create your own expressive controller data.

## What supports it?

When you've figured out _how_ you want to input MPE, you need to figure out what the expressions are being interpreted by.

There's a list of MPE-capable synths at the [Linnstrument](http://www.rogerlinndesign.com/ls-recommended-sounds.html) website. If your softsynth supports [VST3](https://www.steinberg.net/en/company/technologies/vst3.html) there's also a good chance that it may support note expression.

# Demonstration

{::nomarkdown}
  <img src="/assets/Bitwig/NoteExpressionChip.png" alt="Note Expression">
  <div class="image-caption">Note Expression in action</div>
{:/nomarkdown}

  <script type="text/javascript" src="/admc/comparator.js?v={{ site.time | date:'%s' }}"> </script>
  <link rel="stylesheet" type="text/css" href="/admc/admc.css">
<admc path="/assets/Bitwig/Audio" title="With and Without MPE">
	<file name="WithExpression.mp3" />
	<file name="NoExpression.mp3" />
    <jump name="Bass Jump" time="0:5.500" />
    <jump name="Bass Warble" time="0:7.360" />
</admc>

So here's a simple demonstration of MPE in use. The image above is the part being played, showing the note expression.

We have a simple 1/8th note bass line with _no modulations_. The upper voice has timber (pitch) modulations that give it some flavour. If you listen carefully to the "With Expression" using the [Audio Comparator]({% post_url 2017-01-30-Comparator %}) above, you should be able to hear that the lower voice has no pitch modulation and the upper voice does.

The "No Expression" file is only using the pitch wheel. So when there's a pitch modulation, both voices are affected. There are 2 bookmarks in the comparator above that jump playback to places where this is particularly obvious: Bass Jump, and Bass Warble.

In a DAW that does not have MPE or VST Expression, in order to emulate the sound of the "With Expression" file, you would need 2 separate tracks, 2 separate midi files and 2 separate instances of the instrument. 

# Workflow

## Note Editing

{::nomarkdown}
  <video class="gifvid" loop muted class="gifvid">
    <source src="/assets/Bitwig/ExpressEdit.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <div class="video-caption">Editing Note Expression</div>
{:/nomarkdown}

The workflow for using Note Expression is very simple. As shown in the video above, you turn on the viewer for it and . You can add points to the line, curve the section between points, and move the points to any position.

There are 7 types of note expression available

* Micro-pitch - Allows adjustment of single-note pitch, and is drawn on the note itself.
* Velocity - The starting velocity of the note. Same function as normal midi.
* Timbre - An assignable expression with no fixed meaning, often used for things like filter cutoff or an LFO depth. Timbre can be 
* Pressure - Another assignable expression with no fixed meaning. On various MPE enabled controllers, it corresponds to the pressure that the key experiences at any given time.
* Gain - The volume of a note at a given time.
* Pan - The pan of a note at a given time.
* R-Vel - Release velocity. On various MPE enabled controllers, this is how fast the note is released. It is implemented as an editable parameter in the note inspector.

## Expression Assignment

{::nomarkdown}
  <video class="gifvid" loop muted class="gifvid">
    <source src="/assets/Bitwig/ExpMod.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <div class="video-caption">Assigning Note Expression</div>
{:/nomarkdown}

Every instrument in Bitwig has slots for modulators. One of these modulators is the "Expression" modulator. It allows you to freely assign the following expression parameters to any instrument parameter: Velocity, Timbre, R-Velocity, Pressure. In the above video, you can see that _each note_ is having sub, pitch, shape, and sync modulated.

Even if you don't have a synth that supports MPE, you can still use the note expression editor similar to how you'd normally program with MIDI CC. Take note though, that the expressions will apply to all given notes at that time like CC.

On MPE enabled instruments, if you assign an expression to a parameter that corresponds to a per-voice element (like a filter cutoff/res, osc volume/type, sub level, etc..), then the expression will act on a per-voice basis as expected. Any parameters that are global to all voices will affect all notes as expected.

# Creative uses

I'm sure plenty of people are reading this and thinking, "Well that's neat and all, but why?" You may not _need_ note expression, but there are some cases where it's really useful. There's also endless possibilities if you have a proper MPE-enabled controller (even a tablet/phone based one).

* Evolving pads - making evolving pads that correspond precisely to the movements that _you_ want is a great use of note expression. It's no longer necessary to rely on complex envelope and LFO routings to morph your pad. You can draw per-voice modulations as you want.
* Emulation of stringed instruments - Often with stringed instruments, such as the ubiquitous electric guitar, two notes are played but only one is bent. Sometimes there's a variance between 2 identical pitches played on different strings. There's many other instances where per-voice expression allows you to create more convincing performances without the need to have multiple tracks and instruments for just 1 performance.
* Choral emulation - Some choral libraries have vocal ranges automatically spread across a single input, or allow fine-grained control of voice position. Note expression gives you greater control over the performance without needing to split up your track in to multiple tracks with multiple instances of a library.
* Chord spread - Create _WIDE_ chords that morph over time by abusing the per-voice panning expression
* Piano expression - Use the gain expression to slowly fade out upper notes in a delicate piano part, thus giving it a feeling that seems eerily intimate.
* Use a pre-built MPE controller - [As already discussed](#how-would-you-input-it-with-an-instrument), there's a wide variety of controllers that have multiple dimensions of control built right in to every key. Bitwig is a great companion if you own, or wish to own one of these.
* Create your own controllers! - It's not too difficult to buy an off-the-shelf [Arduino](https://www.arduino.cc) or [Raspberry PI](https://www.raspberrypi.org) and create your own MPE based controllers.

There's so much more that you can do. Even though I'm familiar  

# Issues

## Editing note lengths with note expression data

{::nomarkdown}
  <video loop muted class="gifvid">
    <source src="/assets/Bitwig/ExpressLoss.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <div class="video-caption">Right side expression gets moved always</div>
{:/nomarkdown}

What if you have a note that has micro-pitch data, and you want to trim the note while retaining that data?

Too bad. The right side of the expression is always moved. There doesn't appear to be any way to stretch/expand/shift the expression data so that you can retain what you want.

## No shapes

{::nomarkdown}
  <img src="/assets/Bitwig/NoSine.png" alt="No Shapes">
  <div class="image-caption">I did that by hand, it was not fun</div>
{:/nomarkdown}

Neither note expression nore automation has any way to draw shapes. That means that if you want a smooth vibrato, then get ready to spend an hour clicking in every dot and possibly curving every line segment.

## No copy&paste of expression points

{::nomarkdown}
  <img src="/assets/Bitwig/NoCopy.png" alt="No copy&paste">
  <div class="image-caption">No copy and paste</div>
{:/nomarkdown}

The title says it. Expression points can not be copied, pasted or duplicated. Not on the same note, not to another note, no way, no how.

It's even worse if you wish to try and keep some expression on a note. Perhaps you think, "Ok, I'll copy that note, then just resize it!" No, bitwig has out-clevered you by [always screwing up the right side of the expression!](#editing-note-lengths–with-note-expression-data)

## Note expression is not chased! (nothing is!)

{::nomarkdown}
  <video class="gifvid" loop muted class="gifvid">
    <source src="/assets/Bitwig/NoteChase.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <div class="video-caption">What note do you think plays?</div>
{:/nomarkdown}

Chasing is when the DAW goes back in time to calculate any changes and note-starts so that when you hit play at X time, it will always sound the same. Bitwig does not do this, and it's a problem

Let's look at the movie above. I have a micro-pitch expression on a C note that slides up to C. The play cursor is set so that playback will start when the note is at an F during the sliding process. What do you think happens?

* Bitwig looks back in time to see that there's a note-expression, calculates the ramp and correctly starts playback at F? **NO**
* Bitwig ignores the note expression totally and just plays C? **NO**

What really happens is _nothing is played at all_. No note. The note start is behind the play position, so bitwig never even plays the note.

## Release velocity is hidden in the note inspector

{::nomarkdown}
  <img src="/assets/Bitwig/RVel.jpg" alt="Release Velocity's hiding space">
  <div class="image-caption">Where oh where is Release Velocity</div>
{:/nomarkdown}

Release velocity is an MPE parameter that allows an instrument to respond to how fast the performer releases from the key. While bitwig allows you to edit Velocity (note-ON), the Release-Velocity (note-OFF) is hidden in the note inspector.

It's a bit baffling too, since Rvel is one of the mappable Expression Modulator parameters.

## Expression ambiguity

{::nomarkdown}
  <img src="/assets/Bitwig/ExpAmbig.png" alt="What's going where?">
  <div class="image-caption">Ambiguous note expression</div>
{:/nomarkdown}

In that image above, what note is doing what? You have to change it to find out! There's no highlight showing the active note or expression points. There's no differentiation between each note in any way.

Needless to say it becomes quite a conundrum to know what's happening in a part, let alone editing it, when you have anything that's non-trivial happening.

# Conclusion

Bitwig's note-expression system is really cool. I had a lot of fun using it, especially when using an MPE controller (like [GeoShred](https://itunes.apple.com/us/app/geoshred/id1064769019?mt=8)).

Note expression is one of the many ways that Bitwig sets it self apart from Ableton Live as well, and it is worth an inspection if you're a Live user. I originally thought that it was going to be fairly useless, as it was when I was using [Cubase 9 Pro](https://www.steinberg.net/en/products/cubase/what_is_new_in_cubase_9.html), but with the modulators in Bitwig note-expression really comes in to its own as both an editing tool and a unique new way of performing with electronic instruments.

# Support me!

This post took 12 hours to research, photograph, write and edit. If you appreciate the information presented then <a href="/DonateNow/">please consider joining patreon or donating!</a>






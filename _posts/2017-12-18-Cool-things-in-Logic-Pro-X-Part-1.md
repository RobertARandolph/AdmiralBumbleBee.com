---
layout: ['post', 'reader']
title: Cool things in Logic Pro X Part 1
comments: true
date:   2017-12-18_10:12:03 
categories: music
tags: ['DAW', 'Logic Pro X']
image: /assets/Logic/Good/Part1.png
description: An exploration of some quality of life features in Logic Pro X
---

{::nomarkdown}
  <img src="/assets/Logic/Good/Part1.png" alt="Logic Part 1">
  <div class="image-caption">Some interesting features in Logic Pro X</div>
{:/nomarkdown}

Here it comes! The part where I do a little mini-series on some cool features in Logic Pro X while [I spend a month using it]({% post_url 2017-12-14-30-days-of-Apple-Logic-Pro-X %}).

All three of these are not major unique features, but instead are quality of life-improvements. Little things that other DAWs also do, but not as well or as easily.

* Region Based Automation
* Drum Replacement and Triggering
* Guitar Notation and Tablature
* Persistent Undo

Let's get on to it!



**Other parts in this series**: 
* [Cool things in Logic Pro X Part 2]({% post_url 2017-12-23-Cool-things-in-Logic-Pro-X-Part-2 %})
* [Cool things in Logic Pro X Part 3]({% post_url 2018-01-05-Cool-things-in-Logic-Pro-X-Part-3 %})
* [Cool things in Logic Pro X Part 4]({% post_url 2018-01-09-Cool-things-in-Logic-Pro-X-Part-4 %})
* [Cool things in Logic Pro X Part 5]({% post_url 2018-01-13-Cool-things-in-Logic-Pro-X-Part-5 %})
* [Logic Pro X Tips & Tricks and more cool things]({% post_url 2018-01-16-Logic-Pro-X-Tips-and-Tricks %})
* [Logic Effects Review]({% post_url 2018-01-22-Logic-Effects-Review %})
* [Cool things in Logic Pro X Part 10.4]({% post_url 2018-01-26-Cool-things-in-Logic-Pro-X-Part-10-4%})
* [Logic Instruments and MIDI Effects Review]({% post_url 2018-01-31-Logic-Instruments-and-MIDI-Effects-Review %})
* [Things I hate about Logic Pro X and Conclusion!]({% post_url 2018-02-04-Things-I-hate-about-Logic-Pro-X %})

<!--more-->

# Contents
{:.no_toc}
* TOC
{:toc}

# Region Based Automation

{::nomarkdown}
  <img src="/assets/Logic/Good/RegionAutomation.gif" alt="Region Based Automation">
  <div class="image-caption">Region and track based automation toggling back and forth</div>
{:/nomarkdown}

If you come from another DAW like [Ableton Live](https://www.ableton.com) then this may not be too exciting for you. In the context of everything else that Logic offers, a Live user may find this to be a welcome feature when crossing over. For everyone else, it's a great workflow enhancement.

Logic's automation can be constrained to regions. This means that any automation data can be contained by the region, instead of on the track. This eliminates the mess of having automation being copied/moved/overwritten as you move your regions around when composing. Region-based automation always moves with the region.

Even for simple things like toggling an effect on/off anytime that region appears, it's wonderful. Region-based automation also loops with the region when you loop it! It's a very simple feature that can be exhilarating if you have dealt with a product that only has track-based automation. 

There is a caveat though: region-based automation does not properly coalesce with underlying track automation. By default projects start with the File->Project Settings->General->"Region automation takes priority over track automation" option. When this option is on then _only_ region based automation is played at that time. When the option is turned off and both track and region based automation exist.... crazy things happen.

Regardless of this issue, for simple automation that needs to be retained with a region it's a very handy feature.

# Drum Replacement and Triggering

{::nomarkdown}
  <img src="/assets/Logic/Good/KickTrigger.png" alt="Drum Trigger">
  <div class="image-caption">Kick Trigger in action</div>
{:/nomarkdown}

Drum triggering is a simple concept. You record some sort of transient heavy signal like a drum, [drum trigger](https://www.sweetwater.com/store/detail/CETKIT) or even a simple [piezo sensor](https://en.wikipedia.org/wiki/Piezoelectric_sensor). Then you turn that recording to midi notes and feed those midi notes in to a sampler that triggers an appropriate drum sound. Replacing the sound can fix an awful recording, or doubling the sound can provide some extra beef to something that's _nearly_ there. Triggering a sample from an audio track is something you can do in basically every major DAW, but Logic greatly simplifies this process.

Logic has a feature called 'Replace or Double Drum Track' that does this process simply. You simply select the track that you wish to replace or double, then use this feature.

In the image above you can see the recorded drum triggers at the top, the 'Replace or Double Drum Track' dialog and the resulting midi track at the bottom. Here's what the various parameters do in the dialog:

* There are 2 modes: Replacement and Doubling. Replacement mutes the original regions on the track after the process is done. Doubling does not mute the original. Both modes create a new instrument track.
* There is a threshold so you can set the level where a 'trigger event' occurs. As you adjust the threshold you can see the note events on the corresponding instrument track change to show you the result of the threshold setting.
* The generated note can be changed.
* The timing offset allows you to adjust the result in case there is a delay on the sample you are triggering, or some other timing related issue.

The resulting midi is _velocity sensitive_ and _accurate_. This means that with a good quality multi-sample drum library, the resulting sound will be much more natural than some other trigger methods.

Of course, the resulting midi can be edited as you wish and you can even re-apply the trigger settings differently if needed.

The net result is a very quick workflow for replacing drums that is easily superior to anything else I've used in another DAW product. The quality of results for the time spent is excellent.

## Tip!

Maybe you don't record live drums, but you can still use this feature to your advantage even if you're on a coffee shop on your laptop.

Simply setup a new audio track and record yourself lightly tapping on the microphone. That 'pop' sound can be converted to a drum easily using the 'Replace or Double Drum Track' feature.

The benefit of this compared to the 'Musical Typing' keyboard (which lets you use your typing keyboard to input midi) is that the 'Replace or Double Drum Track' method is velocity sensitive. If you play softly then a soft midi note is converted, if you play hard then a high-velocity midi note is converted.

You could easily tap out an intense metal drum beat while your wife sleeps soundly in bed next to you... not that I've done that ;)

# Guitar Notation and Tablature

{::nomarkdown}
  <img src="/assets/Logic/Good/GuitarChart.png" alt="Guitar stuff">
  <div class="image-caption">Lead sheets, tablature, chords and more</div>
{:/nomarkdown}

Let me get this out of the way: Yes other programs like [Cubase](https://www.steinberg.net/en/products/cubase/start.html) have similar features. There's a reason that I didn't mention them in my previous reviews. They kinda suck.

It's possible that you may not care about this, but if you are a guitarist then it makes it very easy to retain a record of the composition of a track. I personally like to maintain a chart of the arrangement of a project that I'm recording. It only takes a few minutes and can save you a lot of time in the future.

The example above took me 3 minutes to input a melody, chords, lyrics, a tabbed bass line and then format it. (I know that whole tie measure looks weird. I have no clue how to space that measure out correctly!)

Logic's implementation of guitar-related scoring features is much nicer. There's 2 main reasons for this...

## Chord Grid Library

{::nomarkdown}
  <img src="/assets/Logic/Good/GridLibrary.png" alt="Chord Grid Library">
  <div class="image-caption">Guitar Chord Grid Library</div>
{:/nomarkdown}

The guitar chord library makes it easy to select the correct chord to insert from a preset library. The options in the image above are fairly self-explanatory.

There is also a page where you can manually input frettings and name the chord appropriately. Inputting a chord only takes a few seconds at most, and finding the names of chords you may not be familiar with is simple.

## Staff Styles

{::nomarkdown}
  <img src="/assets/Logic/Good/StaffStyles.png" alt="Staff styles">
  <div class="image-caption">Staff Styles</div>
{:/nomarkdown}

Staff styles allow you to adjust the staff as necessary to properly represent the music you are writing. In this particular case there's a number of tablature styles available with excellent options for mapping the viewable tablature to the underlying MIDI data.

Compared to other integrated tab systems in other DAWs, Logic's ability to manage staff styles gives you a nice selection of tablature and bass/guitar related options.

# Persistent Undo

{::nomarkdown}
  <img src="/assets/Logic/Good/PersistentUndo.png" alt="Undo History">
  <div class="image-caption">Persistent Undo</div>
{:/nomarkdown}

I've [covered this before]({% post_url 2017-08-26-Cool-things-in-Mixbus-Part-2 %}#persistent-undo) [a few times]({% post_url 2016-12-11-Cool-Features-in-Digital-Performer...-Part-2 %}#offline-branching-undo), but until every DAW has it I'm going to consider it a feature worth mentioning.

If you close your project, save it, and re-open it in Logic Pro X then all of your undo data is retained. Worked on a project last week and realized the edits you made are off time? Open that project up and cmd-z a few times. Now you're back to where you were when you hadn't drank a few too many.

This is a simple feature that is missing in a lot of major DAWs, but it's something that you really miss when it's not there.

# Support Me!

This post took 4 hours to research, screenshot, write and edit. If you appreciate the information presented then <a href="/DonateNow/">please consider joining patreon or donating!</a>








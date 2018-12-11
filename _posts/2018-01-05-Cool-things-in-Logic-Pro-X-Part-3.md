---
layout: post
title: Cool things in Logic Pro X Part 3
comments: true
date:   2018-01-05_09:51:37 
categories: music
tags: ['DAW', 'Logic Pro X']
image: /assets/Logic/Good/Part3.jpg
description: An exploration of some overlooked features in Logic Pro X
---

{::nomarkdown}
  <img src="/assets/Logic/Good/Part3.png" alt="Logic Part 3">
  <div class="image-caption">My niece rocking out after Christmas</div>
{:/nomarkdown}

After a short holiday break I'm here to continue my series [Logic Pro X](https://www.apple.com/logic-pro/) while [I spend a month using it]({% post_url 2017-12-14-30-days-of-Apple-Logic-Pro-X %}).

Today I'm covering a selection of features that I think are criminally overlooked in other examinations of Logic that I've read online.

* Logic Remote
* Drummer
* Multi and Dual Mono
* Convert to Sampler Track
 


**Other parts in this series**: 
* [Cool things in Logic Pro X Part 1]({% post_url 2017-12-18-Cool-things-in-Logic-Pro-X-Part-1 %})
* [Cool things in Logic Pro X Part 2]({% post_url 2017-12-23-Cool-things-in-Logic-Pro-X-Part-2 %})
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

# Logic Remote

{::nomarkdown}
  <img src="/assets/Logic/Good/LogicRemote.png" alt="Logic Remote">
  <div class="image-caption">Logic Remote</div>
{:/nomarkdown}

[Logic Remote](https://itunes.apple.com/us/app/logic-remote/id638394624?mt=8) is a remote control application for your iOS device that allows you to wireless control Logic Pro X.Perhaps that doesn't sound particularly exciting, but Logic Remote is one of the best (if not the best) DAW Remotes out there.

The application allows you full mixer control. FX, I/O, Sends, Pan/Volume and Mute/Solo are all accessible. FX parameters are fully controllable, which is rare in control apps. You can add/remove/copy/paste/replace plugins at will in the mixer as well. You can even quickly jump to tracks (or markers) by holding down on the transport readout and selecting the track.

Transport control is built-in. Play, record, return-to-zero and a timeline that you can navigate as necessary is available. Cycle is controllable as well.

There's multiple different ways to _play_ music as well. All of the musical inputs are _velocity sensitive_ with a controllable range of velocity output!

* Chord strips - 8 strips that allow you to play a specific chord (which are editable) at a given octave. There are 3 blocks for playing bass notes.
* Fretboard/Strings - either a guitar, bass or fretless fretboard that you can play multiple notes at once on. Bending, fretless vibrato and even bending beyond the nut are supported.
* Fretboard chord strip - In the fretboard mode you can also select a chordstrip that allows you to play chords with a fretboard interface.
* Keyboard - A traditional keyboard interface. Sliding can produce glissando, scroll the keyboard or bend pitch. There's an arpeggiator (with latch, so you don't have to hold down the keys thew hole time), scale lock and 3 zoom levels for the keyboard as well.
* Drum pad - Drum pads. There's note repeat that makes a held note repeat at the selected time division. Spot erase allows you to erase a note on a currently playing rhythm, which is exceptionally useful for composing. Note repeat can also be used to transform existing data!
* Smart controls - all of the modes above also have 'smart controls' which allow you to control portions of the software instrument using a pre-selected or 'smart selected' set of parameters.

Even if you have no use for the mixer or musical input, there's a key commands view that allows you to access a wide range of Logic's key commands. You can use your iOS device as a second input device with logic-specific commands right at the touch of your finders. Key command sets can be created on your computer and shared to Logic Pro X.

Logic Remote has an excellent built-in help describing how to operate the product _and_ it has the Logic Pro X manual integrated so that you can learn about Logic on the go!

Did I mention that Logic Remote is totally free? It is completely free if you've payed the Apple Tax™ and drank the Kool-Aid. Let me tell you: the Kool-Aid is delicious. Logic Remote is a fantastic product and indispensible for ANY Logic users.

# Drummer

{::nomarkdown}
  <img src="/assets/Logic/Good/Drummer.png" alt="Logic Drummer">
  <div class="image-caption">Drummer</div>
{:/nomarkdown}

Logic's Drummer tracks may seems like a gimmick, and truly they are... but they are a useful and fleshed out gimmick.

Drummer is basically an integrated rhythm machine. There's an interface that allows you to control the Loudness and Complexity on an X/Y panel. Next to that is an area that lets you control which percussion instruments are used and optionally allows you to control the instrument that defines the beat. The complexity of certain percussion elements may be controllable with a slider. Swing and the frequency/complexity of fills is also controllable.

There's multiple 'Drummers', which defines a set of grooves for multiple genres. Each drummer normally comes with its own drum kit, but the drum kit (or samples) and Drummer may be disconnected to use whatever you want. Even doing things like taking a punk beat (Max is awesome here) and putting some future-bass-like samples in it can yield a surprisingly useful result at the correct tempo

All those things discussed so far would be neat and useful just for laying down some drum sounds so that you or another musician can lay down some tracks. Drummer would be a nice addition for musicians just with that alone. But wait! There's more!

Logic's Drummer can natively utilize [Logic's Groove Track capability]({% post_url 2017-12-23-Cool-things-in-Logic-Pro-X-Part-2 %}#groove-track). Simply click the `Follow` button in the Drummer interface and select a track. Logic will utilize the timing information in that track to modify the rhythm of the Drummer. Your Drummer groove just like whatever you select! Each Drummer region can follow a different track. Once again this is an instance where Logic's Groove Track feature trumps the groove-oriented features in other products.

But there's even more!

You can right click (control-click) the Drummer Region then select `Convert->Convert to MIDI Region`. Now your Drummer track is a normal midi track with all of the groove information, velocity and expression right there. This allows you to use the Drummer feature as a quick template for creating your own unique tracks using whatever samples or percussion instrument that you want! Often I have to program parts for tracks, and I've already developed a mental dictionary of which Drummers have certain grooves that are common. I can simply setup a drummer track, Convert to MIDI Region and _BOOM_: half the work is done for me. I just need to build upon the boilerplate and create something more original and contextually appropriate.

Logic's Drummer might be a feature that you initially laugh at, but when you take some time to explore it then it becomes an great asset.

I seem some Orchestral guys brag about how they have massive templates setup that let them work faster. Me? I have Logic's Drummer that lets me work faster.

# Multi and Dual Mono

{::nomarkdown}
  <img src="/assets/Logic/Good/DualMono.png" alt="Dual Mono">
  <div class="image-caption">Dual Mono</div>
{:/nomarkdown}

Multi Mono? Dual Mono? How exciting can this really be? _Very exciting._

Multi mono is simple. This allows you to apply a single plugin to individual channels in a surround setup. These plugins can be coupled (linked) or unlinked. Simple, yet useful.

Dual Mono is where the unique awesomeness occurs. On any stereo track you can insert a mono-capable plugin as a 'Dual Mono' plugin. This places 2 identical mono versions on the Left and Right _or_ on _Mid/Side_. The plugins are individually controllable, or a they can be coupled (linked).

The L/R mode should be fairly obvious how useful this is. You can affect the left and right channels uniquely to correct stereo imbalances or create stereo effects. This alone is nice for using on Reverbs with slightly different settings, delays or any sort of effect with a randomized element.

Mid/Side is where this feature really blows away the competition. Let me explain what it is and hopefully the usefulness becomes apparent. The 'Mid' channel is everything between the left and right signals that is correlated. This is the sound that you hear between the speakers as a phantom center. Side is simply everything else, and due to the fact that the Side signal contains no correlated information it stores both the left and right channels in a single mono stream which is decoded after the processing. (the mono side signal is decoded via mid+side and mid-side)

With the Mid/Side integrated Dual-Mono processing you can natively create fantastic stereo effects or exercise a great deal of control on your stereo signal. No other DAW I'm aware of offers you this sort of control over your stereo signal with such ease.

I suggest googling ([or checking here]({% post_url 2017-12-30-Great-learning-resources-for-Musicians %})) for some examples of Mid/Side processing to see some of the cool tricks you can do with it.

# Convert to Sampler

{::nomarkdown}
  <img src="/assets/Logic/Good/ConvertToSampler.png" alt="Convert to Sampler">
  <div class="image-caption">Convert to Sampler Track</div>
{:/nomarkdown}

Convert to Sampler Track isn't a particularly unique feature. [Cubase](https://www.steinberg.net/en/products/cubase/start.html), [Ableton Live](https://www.ableton.com/en/) and [Bitwig](https://www.bitwig.com) do this just as well.

I think that it deserves a mention here since not every DAW does it, and it can be an excellent tool.

Convert to Sampler Track allows you to select some audio then right-click (control click) and select `Convert->Convert to New Sampler Track`. From there you can select to convert the selected regions, or to create samples at each transient marker. You can also select where the mapped notes start and end.

Logic then takes what you selected, puts it in to an EXS24 sampler instrument and creates a midi region with the samples triggered at the exact time they occurred in the original audio. It will sound exactly like the original audio, except you can now move around the midi notes to control the audio in the sampler!

Along with the ability to re-organize your audio using the plethora of available midi tools, you can also modify the audio in [all of the ways that EXS24](https://documentation.apple.com/en/logicstudio/instruments/chapter_12_section_3.html) allows you to.

Simply sing a scale, `Convert to New Sampler Track`, and now you can play your voice on your keyboard!

Drag in a drum loop, `Convert to New Sampler Track`, and now you can slice/chop it up in to some crazy breakbeats.

Select your guitar solo, `Convert to New Sampler Track`, and make imperceptible changes to the ordering and expressiveness of the part with Logic's fantastic MIDI editing suite.

Take your field record out and record yourself banging on some steel bars at the local steel supply, `Convert to New Sampler Track`, and nown you can create your own modern industrial take on the [Anvil Chorus](https://www.youtube.com/watch?v=WEMMVHAINFM).

Convert to Sampler Track isn't revolutionary, but it is a very useful feature that every DAW should have, but doesn't.

# Support Me!

This post took 12 hours to research, screenshot, write and edit. If you appreciate the information presented then <a href="/DonateNow/">please consider joining patreon or donating!</a>

<a href="https://www.patreon.com/bePatron?u=7465992"> <img class="patreon-button" src="/assets/Patreon.png" alt="Be a Patreon!"></a>

<form style="text-align: center;" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick">
<input type="hidden" name="hosted_button_id" value="BR247JAZBTUJJ">
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
</form>

If you have any questions or comments, please comment below! I read every comment and respond to most.



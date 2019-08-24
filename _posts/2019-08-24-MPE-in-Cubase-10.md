---
layout: post
title: MPE in Cubase 10
comments: true
date:   2019-08-24_14:58:49 
categories: music
tags: ['Cubase', 'Review', 'Monthly']
image: /assets/Cubase/MPE/Thumbnails/MPEParameters.png
description: Using MPE in Cubase 10.
---

{::nomarkdown}
<img src="/assets/Cubase/MPE/Thumbnails/MPEParameters.png" alt="MPE Parameters">
<div class="image-caption">MPE Parameters</div>
{:/nomarkdown}

Cubase 10 has MPE support...

_sorta..._ well, somewhat. I guess.

Let me walk you through the muck and wishiwashiness by explaining how MPE in Cubase 10 works.

[Make sure you read the previous article about what MPE is!]({% post_url 2019-08-10-What-is-MPE %})

**IMPORTANT** - This information is for Cubase 10.0. Future versions may improve this functionality. If you are running a newer version then please check the release notes and documentation to verify that this information is still relevant.

<!--more-->

**If you have any questions or comments, please comment below! I read every comment and respond to most.** No registration is necessary to comment, so don't be shy.

# Contents
{:.no_toc}
* TOC
{:toc}

# Video

<iframe width="800" height="450" src="https://www.youtube.com/embed/N4Z0dPulgfc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

This is the video explaining the steps for using MPE in Cubase 10 plainly.

# What is MPE

<iframe width="800" height="600" src="https://www.youtube.com/embed/YEEE-Hjmpdw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

MIDI is generally used to stream data across a channel. Channels are used to separate data streams, and you get 16 channels per port.

The majority of MIDI usage is to have a single instrument per channel. All of the notes for that instrument go on the channel. That also means that parameter control data (CC, RPN, NRPN, Pitch Bend, Pressure etc...) are also flowing through **and applied to that channel**.

Imagine an instance where a chord of 4 notes is played. All 4 notes on a single channel. If you have a pitch bend message on that channel then _all four notes_ will be pitch bent.

What if you want to pitch bend only _one_ note? You could put that on a channel by itself, or on the same channel on another port, or another track in your DAW...

No matter which of those things you do, you would now be forced to deal with editing multiple MIDI data streams separately, even though the data belongs to the same concept. The machine that you're feeding with the data (a synth? sampler?) now needs to be configured to respond properly to these multiple sources of data. Ugh.

**ENTER MPE**

MPE standardizes the concept of "put each note on their own channel". Each note is assigned a zone or channel (a zone spans one or more channels) and Pitch/Pressure/CC-74 is applied only to the data in that zone.

Most MPE usage is "Note Level" usage. Notes are spread across the channels, so that each note as 5 dimensions of expression available that are exclusive to that note. There's 5 messages used with MPE:

* Pitch
* Channel Pressure
* CC 74 - whatever.

Then the two usual note messages:

* Note on
* Note off - particularly interesting, since how fast the fingers leave the key is rarely considered in non-MPE contexts.

This totals 5 dimensions of expression.

Why not every single CC/RPN? Well, some of those are used for controlling the MPE setup. The rest simply are not defined in the specification, and certainly could be used by a reckless developer. Future revisions of MPE would break those implementations though!

Regardless of the seemingly ridiculous limitations, MPE does give you 16 voices of MIDI with 3 independent parameters per voice as part of the data specification.

# What is VST Expression - Note Expression

Note Expression is part of the VST Expression Spec/API.

Note Expression operates quite differently than MIDI since it uses programmatic constructs (VST3 Controllers) to convey information between the editor and the instrument. The result is similar though, and more expansive.

Note Expression allows you to assign a variety of MIDI parameters to a single note, rather than to the entire channel.

Note Expression is a less generalized implementation, but functionally is a near-superset of MPE. What you can do with MPE can be done with Note expression (except for the rarely used MPE Zones), and Note Expression can do more.

**NOTE** - VST Expression also encompasses [Expression Maps](https://steinberg.help/cubase_pro_artist/v9.5/en/cubase_nuendo/topics/expression_maps/expression_maps_c.html), but this is extraneous functionality for this topic. It is a cool feature in its own right (in theory!)

# MPE to VST Expression

{::nomarkdown}
<img src="/assets/Cubase/MPE/NotMPE.png" alt="Not MPE, but VST Expression">
<div class="image-caption">Not MPE, but VST Expression</div>
{:/nomarkdown}

Cubase **DOES NOT HAVE MPE EDITING**. Read that again.

**Cubase DOES NOT HAVE MPE EDITING!**

To work with MPE in Cubase, you map MPE to VST3 Note Expression. So...

_**YOU SHOULD OWN AN MPE CAPABLE INPUT DEVICE**_ if possible.

If you're reading this, and you don't own one, then jump ship or buy one. You could make a small investment in [GeoShredder](http://www.wizdommusic.com/products/geoshred.html) if you have an iOS device and a Mac. It has MPE output and can do MIDI over network into Cubase.

If you _do_ have one, then the process is straightforward:

* Setup your device in the Studio `Studio->Studio Setup->MIDI` section
* Click the tiny button in the Note Expression panel (with the Key Editor open) that is labeled `MIDI as NoteExp`.
* You should be done.
  * Alternatively: Read the Manual - It's the Note Expression section.

I'm serious. After you setup your device and click "MIDI as Note Exp", everything _should_ work as far as getting MPE into Cubase and having that map to Note Expression.

## Why use an MPE controller?

Here's the problem:

* MPE utilizes one channel for 'Master' messages. This is _usually_ channel one.
* Cubase defaults to inputting notes to channel 1.

So you certainly think, "Ok, but I can assign notes to channels easily in Cubase!"

It's not that easy. Note allocation in MPE is mildly complex and you will have little success trying to manually select the correct channel for each note. **CUBASE DOES NOT PROVIDE** automatic MPE channel selection for mouse-based input.

Each note that you wish to have individual expression characteristics must be put on its own channel (2-16 normally). There is currently no mechanism to automate this process.

### Slightly better editing

You can improve this poor editing experience by at least setting Cubase to colour notes by Channel.

Unfortunately, you still must manually (with the mouse) select the note's channel. I am unable to find a keyboard shortcut to make this process easier.

## Doing it without a device

{::nomarkdown}
<a href="/assets/Cubase/MPE/MPEParameters.png">
<img src="/assets/Cubase/MPE/Thumbnails/MPEParameters.png" alt="MPE Parameters">
</a>
<div class="image-caption">MPE Parameters (Click for larger image)</div>
{:/nomarkdown}

If you want to explore MPE-Note Expression without an MPE device then you can still do it.

* You may need to click the "Expression" header with the down triangle then:
  * `MIDI Controller Setup`
  * In the right panel select CC 74
  * Click `<<` to move CC 74 to the left panel.
  * Now you can assign CC 74 in the Expression list.
    
After completing this setup you can double click a note to bring up the Expression Editor. The current Note Expression value being edited is based on your selection in the "Note Expression" panel. MPE uses the following expression data:

* CC #74
* Pitchbend
* Aftertouch
* Note On Velocity
* Note Off Velocity - Editable in the "Info Bar", not in the normal velocity editing area.

From there explore clicking the various little widgets in the box to see what they do. The video above shows some of the capabilities.

**NOTE 1**: [Remember to manage note channels](#why-use-an-mpe-controller). For two notes to have individual expression characteristics, they must be on a separate channel, and that channel must not be the MPE master (if the device utilizes that).

**NOTE 2**: Many MPE Synths use Channel 1 as the MPE Master Channel. That means that no note data will be valid on that channel. If your MPE synth uses Channel 1 as the MPE Master Channel, then set your track's input channel to 2. That will make all entered notes default to Channel 2 instead of Channel 1

# Editing "MPE" in Cubase

{::nomarkdown}
    <video autoplay loop muted class="gifvid">
        <source src="/assets/Cubase/MPE/Editing.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <div class="video-caption">Editing MPE (Video)</div>
{:/nomarkdown}

Once you have everything setup, then you can use the VST Expression editor to draw your data just like it's automation. There's a few extra features as well:

* Tilt Side
* Compress Side
* Scale Vertically
* Move Vertically
* Scale Around Absolute Center
* Scale Around Relative Center
* Stretch

It's pretty cool as you can see in the video above.

All the normal CC/Automation tools work as well.

The _only_ not cool thing is that you have to manually assign MIDI channel to each note that you don't want to overlap.

# Conclusion

It took me a while to get my head around mapping MPE to Note Expression. I originally tried a number of unnecessary things, and walked away thinking Cubase was less functional than it really is. I wrote this entire article with incorrect information the first time around, and I'm not even completely certain that I'm 100% correct right now.

However, once you get MPE->Note Expression->MPE working, Cubase's editing capabilities are _the best_ on the market... well, expect not automatically assigning note MIDI Channels. That makes the experience less than awesome for complex pieces.

I found that in practice it's fairly rare to have more than 2-3 notes with individual expression data. That makes manually managing MIDI channels much easier. Cubase's colouring of notes by Channel further aids the process.

For now, this is the future. May as well get on board?

(That's what they said about Ruby on Rails though, and look where we are now)

# Meta

This post took 31 hours to research, write and edit. I also totally screwed up _the entire article_ once and had to redo it all. (Cubase's MPE Documentation is not that awesome). The video took 8 hours. If you appreciate the information presented then <a href="/DonateNow/">please consider joining patreon or paying us for the time spent bringing you quality content!</a>

<a href="https://www.patreon.com/bePatron?u=7465992"> <img class="patreon-button" src="/assets/Patreon.png" alt="Be a Patreon!"></a>

<form style="text-align: center;" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick">
<input type="hidden" name="hosted_button_id" value="BR247JAZBTUJJ">
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
</form>

**If you have any questions or comments, please comment below! I read every comment and respond to most.** No registration is necessary to comment, so don't be shy.


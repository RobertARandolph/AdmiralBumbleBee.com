---
layout: post
title: MPE in Cubase 10
comments: true
date:   2019-08-09_14:58:49 
categories: music
tags: ['Cubase', 'Review', 'Monthly']
image:
description:
---

Cubase 10 has MPE support...

_sorta..._ well, somewhat. I guess.

Let me walk you through the muck and wishiwashiness by explaining how MPE in Cubase 10 works.

<!--more-->

**If you have any questions or comments, please comment below! I read every comment and respond to most.** No registration is necessary to comment, so don't be shy.

# Contents
{:.no_toc}
* TOC
{:toc}

# What is MPE

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

Note Expression is a less generalized implementation, but a near-superset of MPE. What you can do with MPE can be done with Note expression (except for the rarely used MPE Zones), and Note Expression can do _a lot_ more.

**NOTE** - VST Expression also encompasses [Expression Maps](https://steinberg.help/cubase_pro_artist/v9.5/en/cubase_nuendo/topics/expression_maps/expression_maps_c.html), but this is extraneous functionality for this topic. It is a cool feature in its own right (in theory!)

# MPE to VST Expression

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

## Doing it without a device

{::nomarkdown}
<img src="/assets/Cubase/MPE/NoteExpSetup.jpg" alt="Note Expression Setup for MPE use">
<div class="image-caption">Note Expression Setup for MPE use</div>
{:/nomarkdown}

If you want to explore MPE-Note Expression without an MPE device then you can still do it.

* Open the Key Editor
* Open the Note Expression panel
* Assign Pitchbend to Pitchbend
* Assign Aftertouch to Aftertouch
* Assign CC 74 to CC 74
  * You may need to click the "Expression" header with the down triangle then:
    * `MIDI Controller Setup`
    * In the right panel select CC 74
    * Click `<<` to move CC 74 to the left panel.
    * Now you can assign CC 74 in the Expression list.
    
After completing this setup you can double click a note to bring up the Expression Editor. The current Note Expression value being edited is based on your selection in the "Note Expression" panel.

From there explore clicking the various little widgets in the box to see what they do. The video above shows some of the capabilities.

# Editing "MPE" in Cubase

Forget it. It just shows up as normal MIDI data and you're once again responsible for per-note channel selection. All of your events show up in a single cluster of nonsense that's basically not editable.

Not to mention that setting the current 'input channel' constantly, or editing the notes' channel afterwards, is a pain.



# Meta

This post took XX hours to research, write and edit. If you appreciate the information presented then <a href="/DonateNow/">please consider joining patreon or paying us for the time spent bringing you quality content!</a>

<a href="https://www.patreon.com/bePatron?u=7465992"> <img class="patreon-button" src="/assets/Patreon.png" alt="Be a Patreon!"></a>

<form style="text-align: center;" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick">
<input type="hidden" name="hosted_button_id" value="BR247JAZBTUJJ">
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
</form>

**If you have any questions or comments, please comment below! I read every comment and respond to most.** No registration is necessary to comment, so don't be shy.


---
layout: ['post', 'reader']
title: Keytrack any parameter in Reaper with this script
comments: true
date:   2017-08-06_13:16:27 
categories: music
tags: ['Reaper', 'Reaper Tips', 'Reaper Scripts']
image:
description: Modulating parameters by MIDI notes in Reaper!
---

{::nomarkdown}
  <video autoplay loop muted class="gifvid">
    <source src="/assets/Reaper/Keytrack/MainTrack.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <div class="video-caption">Midi notes modulating parameter values</div>
{:/nomarkdown}

Keytracking is a capability that many synthesizers have. It allows you to modulate a parameter by the value of the incoming midi note.

This capability is very useful to be applied outside of a synthesizer. Perhaps you want your higher frequency synth notes to have more reverb than the lower frequency notes, or maybe you want an LFO to be less drastic when you're playing bass notes.

I've written a JSFX script for reaper that allows you to use midi-note values to modulate parameters. Let me show you how to use it.

<!--more-->

# Contents
{:.no_toc}
* TOC
{:toc}

# Introduction

Here's a quick overview of what we're doing.

* We load the JSFX Keytracker on our track. It has a slider that corresponds to the current note-value, on the current channel.
* We use Reaper's "Link from Midi or FX Parameter" to link our desired control to the JSFX Keytracker

When an midi note is input to the JSFX Keytracker, the slider changes to reflect the note. We've linked another parameter to this, and our note value (0-127) is turn in to a percentage of the slider value (0-100%). This modulates our parameter.

# The script

The following code is the script. You can either create a new file and drop this in it, or [download from here].(/assets/Reaper/Keytrack/KeyTracker).

To find the location of where to put this:

* Open Reaper
* Options menu->Show RESOURCE path in explorer/finder
* Open the "Effects" folder
* Create a new folder ('AdmiralBumbleBee' if you wish)
* Place this file in it

Now it will show in your JS effects list as "KeyTrack Generator"

```
desc: Keytrack generator
//tags: Key track follow generator link
//author: Robert Randolph

slider1:0<0,127,1>Midi Note Value
slider2:0<0,15,1{1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16}>Input Channel
slider3:0<0,1,1{Note On, Note Off}>Trigger

in_pin:none
out_pin:none

@init

noteOn = $x90;
noteOff = $x80;

@slider
inChannel = slider2;
noteTrig = slider3

@block

while (midirecv(offset,msg1,msg2,msg3)) ( 
    channel = msg1 & $x0F;
    onOffStatus = msg1 & $xF0; // 144 == Note On, 128 == Note Off

    trigTest = noteTrig == 0 ? (noteOn):(noteOff); // comparison value based on our note on/off setting

    channel == inChannel ? (
        trigTest == onOffStatus ? (
            slider1 = msg2;
        )
    );
    
    midisend(offset,msg1,msg2,msg3); // pass through
);
```
# How to use

There's 2 ways you may wish to use this: on a track taking midi input, or on a track not taking midi input.

I will explain how to set it up on both.

## Midi Track

{::nomarkdown}
  <video autoplay loop muted class="gifvid">
    <source src="/assets/Reaper/Keytrack/SetupTrack.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <div class="video-caption">Linking keytracker to a parameter</div>
{:/nomarkdown}

Setting it up on a midi track is simple.

* Place Keytrack Generator as the first plug-in on the track with a parameter that you wish to modulate.
* Wiggle the parameter (from a plug-in on the same track) that you wish to have keytracked.
* Click the "Param" menu in the upper right of the window.
* Select "Parameter modulation/MIDI link".
* In the new window check "Link from MIDI or FX Parameter".
* In the first box select "Keytrack generator:" then "Midi Note Value".

Now you're done. **That's it.**

The parameter that you linked will now change depending on the note you play. You can adjust the offset and scale in the parameter modulation window to get the values synced up how you want.

## Non-Midi Track

Setting it up on a track that doesn't have midi input is only slightly different. I've broken this setup in to 2 stages.

### Stage 1

{::nomarkdown}
  <img src="/assets/Reaper/Keytrack/MidiRoute.png" alt="Rout Midi">
  <div class="image-caption">Route the midi</div>
{:/nomarkdown}

* Create a track.
* Drag from the midi track 'Route' box to the audio track 'Route' box. (see arrows in image)
* Set the track to have a midi input (with monitoring on), or some midi note data in an item. This is the midi that will modulate your destination track.
* Send the midi from your midi track to the track that has the parameter(s) that you wish to modulate.
    * Make sure you don't send audio. It isn't necessary and may confuse you later
    * Confirm that midi is being routed.

### Stage 2

Stage 2 is identical to the [midi track section](#midi-track). The difference is that our midi is coming from another track in the project rather than the track with the parameter that we're modulating. That's why we setup the send in stage 1.

* Place Keytrack Generator as the first plug-in on the track with a parameter that you wish to modulate.
* Wiggle the parameter (from a plug-in on the same track) that you wish to have keytracked.
* Click the "Param" menu in the upper right of the window.
* Select "Parameter modulation/MIDI link".
* In the new window check "Link from MIDI or FX Parameter".
* In the first box select "Keytrack generator:" then "Midi Note Value".

# Conclusion

That's really all there is to it! This is a fantastic way to create special effects that are tied to the specific midi-input note.

Remember as well that [Reaper's routing is pretty fantastic]({% post_url 2017-04-18-Reapers-Amazing,-but-Awful,-Almost-Anything-to-Anywhere-Routing %}) and you can [also do some crazy multi-routing]({% post_url 2017-07-25-Control-multiple-parameters-across-tracks-in-Reaper-with-faders %}) with Reaper. This all applies to this post as well. Get creative! There's a lot of potential here!

If you want to modulate a parameter by the pitch of audio, then there's a way to do that too... [but that's another blog post.]({% post_url 2017-08-06-Realtime-pitch-tracked-EQ-bands-in-ReaEQ %})

# Support Me!

This post took 4 hours to research, screenshot, write and edit. If you appreciate the information presented then <a href="/DonateNow/">please consider joining patreon or donating!</a>








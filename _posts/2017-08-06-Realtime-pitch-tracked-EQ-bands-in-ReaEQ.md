---
layout: post
title: Realtime pitch-tracked EQ bands in ReaEQ
comments: true
date:   2017-08-06_15:27:41 
categories: music
tags: ['Reaper', 'Reaper Tips', 'Reaper Scripts']
image:
description: Realtime pitch tracking EQ band in Reaper. Totally native!
---

{::nomarkdown}
  <video autoplay loop muted class="gifvid">
    <source src="/assets/Reaper/Keytrack/ReaSurfing.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <div class="video-caption">Tracking synthesizer audio then voice</div>
{:/nomarkdown}

If you read [my post on Keytracking]({% post_url 2017-08-06-Keytrack-any-parameter-in-Reaper-with-this-script %}) then maybe you saw that I implied that you can use the pitch of any audio signal.

So let me share how you can modulate the frequency value of a ReaEQ band by the incoming audio's pitch!

<!--more-->

# Contents
{:.no_toc}
* TOC
{:toc}

# Introduction

The idea here is fairly simple. We use ReaTune to send out midi, then we use a custom JSFX plug-in to create a slider that corresponds to the frequency of the midi note ReaTune is outputting. Now we can link anything to that slider, like a ReaEQ band.

# The Script

The following code is the script. You can either create a new file and drop this in it, or [download from here](/assets/Reaper/Keytrack/KeyTrackerEQ).

To find the location of where to put this:

* Open Reaper
* Options menu->Show RESOURCE path in explorer/finder
* Open the "Effects" folder
* Create a new folder ('AdmiralBumbleBee' if you wish)
* Place this file in it

Now it will show in your JS effects list as "KeyTrack Generator ReaEQ edition"

```
desc: Keytrack generator - ReaEQ edition
//tags: Key track follow generator link
//author: Robert Randolph

slider1:0<0,24000,1>Midi Note Frequency 
slider2:440<420,460,1>Base Frequency
slider3:0<-4,4,1>Octave Offset
slider4:0<0,4,1>Harmonic Offset
slider5:0<0,15,1{1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16}>Input Channel
slider6:0<0,1,1{Note On, Note Off}>Trigger

in_pin:none
out_pin:none

@init

noteOn = $x90;
noteOff = $x80;

@slider
baseFreq = slider2;
octOffset = slider3;
baseOffset = slider4;
inChannel = slider5;
noteTrig = slider6;

@block

while (midirecv(offset,msg1,msg2,msg3)) ( 
    channel = msg1 & $x0F;
    onOffStatus = msg1 & $xF0; // 144 == Note On, 128 == Note Off

    trigTest = noteTrig == 0 ? (noteOn):(noteOff); // comparison value based on our note on/off setting

    channel == inChannel ? (
        trigTest == onOffStatus ? (
            incNote = msg2;
            useNote = incNote + (octOffset * 12); // change octave of incoming note
            noteFreq = ((baseFreq / 32) * (2 ^ ((useNote - 9) / 12))); // Midi note to frequency
            noteFreqOff = noteFreq + (baseOffset * noteFreq); // Harmonic offset
            slider1 = noteFreqOff;
        )
    );
    
    midisend(offset,msg1,msg2,msg3); // pass through
);
```

## Script extras

This script has some extra functions [compared to the other one]({% post_url 2017-08-06-Keytrack-any-parameter-in-Reaper-with-this-script %}#the-script).

* Base Frequency - This is your a=XXXhz tuning reference. Set this to the tuning reference of the instrument you're using.
* Octave Offset - This offsets the output value by N octaves. 2 Octaves up from 440hz is 1,760hz. 
* Harmonic Offset - This offsets the output by 1 harmonic value. 2 Harmonics up from 880hz is 2,640hz, where 2 octaves up would be 3,520hz.

# Setup

{::nomarkdown}
  <video autoplay loop muted class="gifvid">
    <source src="/assets/Reaper/Keytrack/SurferSetup.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <div class="video-caption">Setting up the surfer</div>
{:/nomarkdown}

Setup is very simple, and you may already know what you need to do if you [read the other post]({% post_url 2017-08-06-Keytrack-any-parameter-in-Reaper-with-this-script %}#the-script)

* Add "ReaTune" to our audio track.
    * Turn on "Send MIDI events when pitch changes"
* Add "Keytrack generator - ReaEQ edition" to our audio track
* Add ReaEQ to our audio track.
    * Turn **OFF** the to-be-modulated EQ band "Log-scale automated frequencies"
* Parameter link the "Keytrack generator - ReaEQ edition" to the frequency of our ReaEQ band.
    * Wiggle the frequency of the band that you wish to have keytracked.
    * Click the "Param" menu in the upper right of the window.
    * Select "Parameter modulation/MIDI link".
    * In the new window check "Link from MIDI or FX Parameter".
    * In the first box select "Keytrack generator:" then "Midi Note Value".
  
That's it!

**Keep in mind that the keytracking script doesn't update parameters until a new note comes in.**

# Other plug-ins

If you want to use another plug-in then you may need to adjust for the logarithmic scale used by that plug-in. Here's a script that works for something like [Fabfilter Pro-Q 2](https://www.fabfilter.com/products/pro-q-2-equalizer-plug-in)

The 'minVal' and 'maxVal' variables need to be changed to the minimum and maximum frequency of your EQ.

```
desc: Keytrack generator - Log scale Edition
//tags: Key track follow generator link
//author: Robert Randolph

slider1:0<0,100,1>Midi Note Frequency 
slider2:440<420,460,1>Base Frequency
slider3:0<-4,4,1>Octave Offset
slider4:0<0,4,1>Harmonic Offset
slider5:0<0,15,1{1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16}>Input Channel
slider6:0<0,1,1{Note On, Note Off}>Trigger

in_pin:none
out_pin:none

@init

noteOn = $x90;
noteOff = $x80;
minVal = 10;
maxVal = 30000;
logDelta = log(maxVal / minVal)

@slider
baseFreq = slider2;
octOffset = slider3;
baseOffset = slider4;
inChannel = slider5;
noteTrig = slider6;

@block

while (midirecv(offset,msg1,msg2,msg3)) ( 
    channel = msg1 & $x0F;
    onOffStatus = msg1 & $xF0; // 144 == Note On, 128 == Note Off

    trigTest = noteTrig == 0 ? (noteOn):(noteOff); // comparison value based on our note on/off setting

    channel == inChannel ? (
        trigTest == onOffStatus ? (
            incNote = msg2;
            useNote = incNote + (octOffset * 12); // change octave of incoming note
            noteFreq = ((baseFreq / 32) * (2 ^ ((useNote - 9) / 12))); // Midi note to frequency
            noteFreqOff = noteFreq + (baseOffset * noteFreq); // Harmonic offset
            slider1 = log(noteFreqOff / minVal) / logDelta * 100;
        )
    );
    
    midisend(offset,msg1,msg2,msg3); // pass through
);
```

# Support Me!

This post took 7 total hours to research, screenshot, write and edit. If you appreciate the information presented then <a href="/DonateNow/">please consider joining patreon or donating!</a>








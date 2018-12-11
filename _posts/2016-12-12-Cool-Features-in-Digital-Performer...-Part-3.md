---
layout: post
title: Cool Features in Digital Performer... Part 3
comments: true
date:   2016-12-12_12:44:50 
categories: music
tags: ['Digital Performer', 'DAW']
---

![Day 3](/assets/DP/Featurespt3.png)

In today's discussion of neato things in Digital Performer I will be covering: Chunks, Pre-Gen and guitar plug-ins.

Be sure to check out the other DP Features posts!

[Part 1]({% post_url 2016-12-10-Cool-Features-in-Digital-Performer...-Part-1%})
[Part 2]({% post_url 2016-12-11-Cool-Features-in-Digital-Performer...-Part-2%})
[Part 4]({% post_url 2016-12-13-Cool-Features-in-Digital-Performer...-Part-4%})
[Part 5]({% post_url 2016-12-14-Cool-Features-in-Digital-Performer...-Part-5%})

<!--more-->

# Contents
{:.no_toc}
* TOC
{:toc}

# Chunks

![Chunks](/assets/DP/Chunks.png)

Chunks are truly one of the most useful and unique features in Digital Performer. There are 3 things that are chunks: Sequences, V-Racks and Songs. As they all interact together, let's discuss what each one is then I will cover how they interact.
## Sequence

![A Sequence](/assets/DP/Sequence.png)

A sequence in DP is basically what you'd consider a 'song' or 'project' in another DAW. It's a collection of audio files, midi, automation, edits and all the routing associated with these things going out to your audio card.

It's very simple, except rather than being the topmost layer of your project hierarchy, a sequence can be a building block as well.

Sequences can also be triggered from the Chunks window manually or via Midi. This allows you to play a sequence on demand.

Sequences can be imported to, or exported from other sequences. This allows for 'track import/export' type workflows, except it allows you to incorporate the song window as described below as well.

## Song

![Song window](/assets/DP/Song.png)

A Song in DP is a collection of Sequences __and other Songs__ on a timeline. You can place sequences and songs on this grid and play them back. Meters can be mixed and parts can overlap. The grid is updated dynamically as you add things. The length of chunks used in the song window can be determined manually or automatically. The song window even has its own conductor track (tempo/meter).

All Sequences and Songs are played back _in real time_. Many other DAWs allow you to have a rendered clip reference a project (Reaper and Tracktion), but DP's song window is a real time collection of chunks that can be played. Think of it as a sequencer for your sequences (and songs!).

The Song window 

## V-rack

![V-rack](/assets/DP/V-rack.png)

A V-rack is a mixer of Aux channels and Instrument tracks that do not belong to a sequence. They are standalone tracks.

V-racks allow you to share effects and instruments between sequences and songs. So you can have multiple independent sequences that all have access to the same effects sends and instruments. Another trick is that you can have a master track in your V-rack that is global to all of your sequences.

If you find that a sequence has a number of instruments or sends that you wish to have available globally to your project, you can export them to a v-rack. You can also view v-racks in your sequence's mixer for convenience.

## How Does it all work?

![1000 words](/assets/DP/DPSongSetup.png)

Hopefully a picture is worth a thousand words.

Above is a hypothetical setup. You have a Song feeding a V-Rack with multiple Sequences inside. Some sequences have their own V-Racks. Inside Song A there is also a Song B that has its own Sequences, one of which is identical to a Sequence in Song A and sharing the same V-rack. Every sequence has its own mixer, automation, meter etc... plus what V-Rack functionality that it's using. When Song A is played, the appropriate Sequence/Songs are played in real-time tick-by-tick just as if each chunk were its own 'region' in another DAW

On a superficial level, DP offers you modular song creation. 

# Pre-Gen

![Pre-Generation](/assets/DP/PreGen.png)

What an innocent little menu item that is, but beneath it is a lot of tech. The menu offers you the option to run a plug-in in "Real Time", but isn't that how playback is done anyway? Not in DP!

DP by default tries to pre-render your tracks so that it doesn't need to do so when you click play. This means that if you have no plugin windows open, and you're not on an aux track, when you hit 'play' DP is likely just playing back a pre-rendered wave file of the track.

This feature can have drastic ramifications on how much CPU power you can use in a project. It's basically automatic and dynamic freeze. When another DAW would be sitting there idly, DP is pre-genning (freezing sorta) your tracks. I believe that DP also saves data when you playback as well.

The resulting effect is that DP can run significantly larger projects compared to some other DAWs. Quite handy when you start going crazy with chunks!

# Plug-ins part 3 - Guitar 

Guitar Effects and Amps Galore!

All of these are midi-controllable. Most of the pedals are fantastic, and the analog versions include most of the weirdness that you would expect.

The amp sims are decent, and you need to make sure to use them with a cab IR for the best experience, but luckily DP includes Live Room G and Live Room B. The Live Room plug-ins come with a number of cabs and mixable mic placements.

The MegaSynth plugin is a pseudo-modular effect that can do some really gnarly things. Check out the GUI for an idea of what you can do with it.

In my experience, DP also has one of the best included Tuner plug-ins of any DAW. The Intelligent Noise Gate is also _by far_ the best gate for guitars that I've seen included in a DAW. Some third-party amp sims have equivalent or slightly better gates, but the gate pedal in DP is an excellent plugin. It also works really well on noise synths, e-pianos and even drums. I've used it to clean up a really squeeky kick pedal by abusing the 'Mains Frequency' value with 'buzz' on and using the gate as normal.

![ACE 30](/assets/DP/ACE30.png) 
 
![AnalogChorus](/assets/DP/AnalogChorus.png) 
 
![AnalogDelay](/assets/DP/AnalogDelay.png)  
  
![AnalogFlanger](/assets/DP/AnalogFlanger.png) 
 
![AnalogPhaser](/assets/DP/AnalogPhaser.png) 
 
![ClearPebble](/assets/DP/ClearPebble.png) 
 
![Custom59](/assets/DP/Custom59.png) 
 
![DeltaFuzz](/assets/DP/DeltaFuzz.png) 
 
![DiamondDrive](/assets/DP/DiamondDrive.png) 
 
![Dplus](/assets/DP/Dplus.png) 
 
![DynaSquash](/assets/DP/DynaSquash.png) 
 
![HiTopBooster](/assets/DP/HiTopBooster.png) 
 
![IntelligentNoiseGate](/assets/DP/IntelligentNoiseGate.png) 
 
![LiveRoomB](/assets/DP/LiveRoomB.png) 
 
![LiveRoomG](/assets/DP/LiveRoomG.png) 
 
![LiveStage](/assets/DP/LiveStage.png) 
 
![MegaSynth](/assets/DP/MegaSynth.png) 
 
![MicroB](/assets/DP/MicroB.png) 
 
![MicroG](/assets/DP/MicroG.png) 
 
![MultiFuzz](/assets/DP/MultiFuzz.png) 
 
![RXT](/assets/DP/RXT.png) 
 
![Soloist](/assets/DP/Soloist.png) 
 
![Springamabob](/assets/DP/Springamabob.png) 
 
![TubeWailer](/assets/DP/TubeWailer.png) 
 
![Tuner](/assets/DP/Tuner.png)
 
![UberTube](/assets/DP/UberTube.png) 
 
![Wah](/assets/DP/Wah.png) 

Quite the selection of stuff! Even if you are not a guitarist, many of these plugins are _awesome_ on synths. The analog delay with automation is _extremely_ fun on dirty bass synth tracks. You can get half way to that dirty bass just by throwing on RXT. Heck, maybe your dirty bass synth __is__ a bass guitar because you ran it through MegaSynth first.

I don't think any of these plug-ins suck. The amp sims are mediocre, except for the ACE 30. The effects are really well done though.

(Yes these are all on 'Tom Bus' and 'Snare Bus'. I just needed the images.)

# Notes

Note: All images are taken with the '8 bit' theme for DP9.

Be sure to check out the other DP Features posts!

[Part 1]({% post_url 2016-12-10-Cool-Features-in-Digital-Performer...-Part-1%})
[Part 2]({% post_url 2016-12-11-Cool-Features-in-Digital-Performer...-Part-2%})
[Part 4]({% post_url 2016-12-13-Cool-Features-in-Digital-Performer...-Part-4%})
[Part 5]({% post_url 2016-12-14-Cool-Features-in-Digital-Performer...-Part-5%})

# Support me!

If you appreciate the information presented then <a href="/DonateNow/">please consider joining patreon or donating!</a>

<a href="https://www.patreon.com/bePatron?u=7465992"> <img class="patreon-button" src="/assets/Patreon.png" alt="Be a Patreon!"></a>

<form style="text-align: center;" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick">
<input type="hidden" name="hosted_button_id" value="BR247JAZBTUJJ">
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
</form>

If you have any questions or comments, please comment below! I read every comment and respond to most.
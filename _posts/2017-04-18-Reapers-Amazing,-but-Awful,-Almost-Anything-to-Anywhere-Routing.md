---
layout: post
title: Reaper's Amazing, and Awful, Almost Anything to Anywhere Avenues (routing)
comments: true
date:   2017-04-18_08:30:08 
categories: music
tags: ['DAW', 'Reaper', 'Tutorial', 'Reaper Tips']
---

{::nomarkdown}
  <img src="/assets/Reaper/FXModulation.gif" alt="Modulation madness!">
  <div class="image-caption">Modulate all of the things!</div>
{:/nomarkdown}

Reaper has quite a routing system. It can allow for some exceptionally cool routing configurations that will leave you scratching your head the next day.

In this post I'll be going over _some_ of the things you can do with Reaper's routing, and I will also discuss why it will immolate your soul and leave nothing but the charred remains to remind you of your sins.

<!--more-->

# Contents
{:.no_toc}
* TOC
{:toc}

# Background: Why this all works

There are 2 concepts that you need to understand before the flexibility of Reaper's routing makes any sense

## Reaper has tracks. Just tracks.

{::nomarkdown}
  <img src="/assets/Reaper/AudioandMidi.png" alt="Audio and Midi">
  <div class="image-caption">Audio and Midi on the same track, in the same place</div>
{:/nomarkdown}

There aren't "Midi tracks" or "Audio Tracks" or "Aux Tracks" or "Video Tracks" or ... anything. It just has tracks.

Tracks can contain basically any data. You can mix data and overlap data. Look at the image above. Yep, that's audio **and** midi on the same track, **and** they place at the same time, **and** they can be freely routed.

## Every track is basically a 64 channel DAW.

{::nomarkdown}
  <img src="/assets/Reaper/EightinPlace.png" alt="Eight things at once">
  <div class="image-caption">Eight items, two ways</div>
{:/nomarkdown}

Any given track in Reaper has 64 channels of I/O with the option to have freely placeable overlapping media items. This allows each _single_ track in Reaper to act as a 64-channel DAW in its own right.

* Routing
    * Each track in Reaper has 64 channels of audio to route to/around/within/between FX as you desire. Look at the "Plug-in pin connector" window and the "8x mono to 1x stereo" plug-in. We have an 8-channel media item ("8 channels 1 item") being mixed _just on one track_. We could have individual routing for each channel before getting to that mixer if we want.
* FX can route
    * FX can take input from any of the 64 inputs, and output specifically to any of the 64 outputs. There are also mixer/spliter plug-ins to deal with I/O in the midst of a plug-in chain.
* Input
    * Shown on the bottom track labeled "8 Channels 1 item", each track in Reaper can take up to 64 channels of input. 
    * This doesn't _just_ mean recording, it can also take up to 64 discrete channels of input from other tracks to be routed anywhere else, _even inside the track itself to various fx_.
* Output
    * A track can output to any one of 64 individual outputs to another track. (Tutorial Coming soon!)
    * Any media item can output to any one of the 64 64 individual outputs to be then routed elsewhere. (tutorial coming soon)

# Part 1: One to Many

## Tracks
{::nomarkdown}
  <img src="/assets/Reaper/OnetoMany.png" alt="One to Many">
  <div class="image-caption">One to many</div>
{:/nomarkdown}

This is pretty simple. Most any DAW can do _something_ like this. The difference with Reaper is that there's no distinction between a normal track and "Aux/FX/Send Track" like in other software.

{::nomarkdown}
  <img src="/assets/Reaper/Receive.png" alt="Receives">
  <div class="image-caption">Where's that noise coming from</div>
{:/nomarkdown}

A very useful thing to note here is that in Reaper you can not only see sends, but _receives_ as well. If you can't recall where an empty track is taking data from, then you can click the routing window and see the receive.

## One VI to separate tracks

{::nomarkdown}
  <img src="/assets/Reaper/BfdMulti.png" alt="BFD in action">
  <div class="image-caption">BFD out to multiple tracks</div>
{:/nomarkdown}

As you would expect from a modern DAW, Reaper can easily handle instruments that have multiple outputs. In the image above [FxPansion BFD3](https://www.fxpansion.com/products/bfd3/) is outputting to multiple tracks. Nothing special, other than all the things that you can do with it.

## FX

{::nomarkdown}
  <img src="/assets/Reaper/FXRouting.png" alt="Routing FX">
  <div class="image-caption">Routing Parallel FX</div>
{:/nomarkdown}

A single FX can route itself to many destinations, which of course includes other FX in the chain.

In the image above I have setup a parallel routing scheme. The ReaEQ does nothing except split the signal (any plug-in can do this, and it's not strictly necessary here, but it does make things easier when you want to get more complex.). At the end of the chain I have a mixer that combines the paths to output a single stereo signal.

You can do a wide variety of routing setups with FX, including sending specific FX to another track (or vice versa!).

[Shoutout to EAReckon's EAReverb 2](https://www.eareckon.com/en/products/eareverb2-reverb-plug-in.html). IMO one of the best algorithmic reverb plug-ins.

## FX Bonus

{::nomarkdown}
  <img src="/assets/Reaper/FXSplit.png" alt="Splitting FX">
  <div class="image-caption">One to many... other things</div>
{:/nomarkdown}

Since the "One to Many" paradigm works for FX, you can also have FX that output after processing. Reaper comes with various things that let you split your signal up and send data out to be processed.

Complex processing setups are possible (and encouraged!)

# Section B: Many to one

Many to one is basically what most people think of as a "Send" or as a "Buss". Multiple tracks route audio to a single track.

Reaper has multiple ways to achieve the "many to one" routing scenario.

## Folders

{::nomarkdown}
  <img src="/assets/Reaper/RoutingFolders.png" alt="Reaper Folders">
  <div class="image-caption">Routing with Folders</div>
{:/nomarkdown}

Most DAWs consider folders to be semantic grouping. Reaper uses them for routing of audio and visualization. A track can have a hierarchal setup of tracks "below" it that all feed upwards to the parent in the hierarchy.

Consider the image above. All the drum tracks are routed in to a hierarchy of folders. The following list shows the busses, that is to say the tracks that have _no media items_, but just have their children's audio routed to them:

* Drums - receives audio from: Kick, Snares, Toms, Ambient
    * Snares - receives audio from: Snare, Snare Bottom 
    * Toms - receives audio from: Rack, Floor Small, Floor Big
    * Ambient mics - receives audio from: Overheads, Room

In the image there is a waveform drawn for the buss tracks that shows the combined signal routed to them, but this is not an actionable piece of data. However, top-level tracks can contain media, just like any track.

## Sends - Master/Parent send **ON**

{::nomarkdown}
  <img src="/assets/Reaper/MasterOn.png" alt="Sends">
  <div class="image-caption">What differentiates a send from a buss</div>
{:/nomarkdown}

A track in Reaper can send audio to any other track, and simultaneously output audio from itself. This is just like a normal send in any other DAW, except the destination is just another track. No requirement for the destination to be an "Aux/FX/Send Track" like in other DAWs.

All you have to do is create a send and leave the pictured item checked. Sometimes it's called "parent send" depending on the folder hierarchy. This is what allows the track to operate normally and also send out data to other tracks.

## Busses - Master/Parent send **OFF**

{::nomarkdown}
  <img src="/assets/Reaper/MasterOff.png" alt="Busses">
  <div class="image-caption">What differentiates a buss from a send</div>
{:/nomarkdown}

When you turn off the Master/Parent send, the track will only output data to its sends. This setup allows you to coalesce audio to a single place without using folder tracks.

Same as setting up a buss track in any other DAW, rather than using Reaper's folder system.

# Episode 3: Many to Many

<iframe src="https://www.youtube.com/embed/Vu9n5AQetfI?ecver=2" width="560" height="315"></iframe>

Let's start this off with a [Kenny](http://www.kennymania.com/reaper-videos/) video.

Here you can see that it's possible to record multiple channels of data (audio) to a single media item, then split those multiple channels out to their own tracks. This can make something like managing a large multi-channel, but single performance, item very simple. Multitrack drums are particularly useful to be worked in this manner.

Of course, all the other routing features are available here too.

# Chapter IV: One to One

We already know that "One to One" routing exists, since it's simply an extension of "One to Many", but it may not be obvious how useful this can be.

## Parameter modulation

{::nomarkdown}
  <img src="/assets/Reaper/FXModulation.gif" alt="Modulation madness!">
  <div class="image-caption">Modulate all of the things!</div>
{:/nomarkdown}

Another subcategory of "One to One" is that Reaper has parameter modulation for any given FX parameter.

In the image above I have 2 things happening:

* Eq Band 2 gain - modulated by a drum beat. It's value follows the amplitude of a drum-beat signal routed to it.
    * This means any signal that you can create can be used to modulate an FX. (It is not audio-rate, but I do not know the limit) 
    
    edit: The limit is the sample rate divided by the buffer size. Modulation changes once per buffer. So at 44,100khz and a 128 sample buffer size, your maximum modulation speed is 344.53125hz. Due to the 'stepped' modulation there is also aliasing and a lot of noise inherent in the signal that must be dealt with by the modulated parameter. This also means that the modulation may change depending on the buffer size! (thanks to evildragon for pointing this out)
* Eq Band 3 Frequency - modulated by an LFO sine
* Eq Band 3 Gain - modulated by an LFO sine

There's also a feature not shown: you can link any parameters to midi CC or to another FX parameter on the same track (even across plug-ins).

## Workflow enhancers

<iframe src="https://www.youtube.com/embed/lwfqrpmzPFI?ecver=2" width="560" height="315"></iframe>

<iframe src="https://www.youtube.com/embed/DXxXMGfSMts?ecver=2" width="560" height="315"></iframe>

The 2 [Kenny](http://www.kennymania.com/reaper-videos/) videos above explain some basic, but excellent uses for it simple one-to-one routing.

# Was ist mit dem anderen Morgen? Das ist ein Kapitel für sich.

{::nomarkdown}
  <img src="/assets/Reaper/FXplore.gif" alt="Follow the ball!">
  <div class="image-caption">What's happening in this gif?</div>
{:/nomarkdown}

Imagine this: You have a brilliant music making/mixing/producing session and you wake up ready to keep working. One of the great things about Reaper is...

Wait. Scratch that.

One of **the most annoying** things about Reaper is how difficult it can be to figure out how stuff is routed. Don't believe me? Check out the gif above of me trying to show a [the fx routing from earlier](#fx). I'm sure you have it figured out after a few views right? This is a very simple setup. It's that parallel routing right? _No._

I actually changed it slightly, and the EAReverb plug-in is being routed to another track! I'm sure you can understand how confusing that can become eventually, especially if you go nuts with routing. (like I tend to)

Reaper's routing gives you enough rope to shoot yourself in the foot. When you're in the groove some very fun and useful things are possible, but when you wake up the next morning... well... good luck.


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


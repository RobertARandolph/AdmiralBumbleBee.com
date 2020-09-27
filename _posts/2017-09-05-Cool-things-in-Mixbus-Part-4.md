---
layout: post
title: Cool things in Mixbus part 4
comments: true
date:   2017-09-05_11:24:01 
categories: music
tags: ['Mixbus', 'DAW']
image: /assets/Mixbus/Good/Part4.png
description: Workflow enhancers in Mixbus 4
---

{::nomarkdown}
  <img src="/assets/Mixbus/Good/Part4.png" alt="Part 4">
  <div class="image-caption">Unique Workflow Enhancers</div>
{:/nomarkdown}

This time in Mixbus we're covering some workflow enhancers that are rarely found in other products.

* Meter Bridge
* OSC
* Scripting

Don't forget [Part 1]({% post_url 2017-08-16-Cool-things-in-Mixbus-Part-1 %}), [Part 2]({% post_url 2017-08-26-Cool-things-in-Mixbus-Part-2 %}) and [Part 3]({% post_url 2017-09-01-Cool-things-in-Mixbus-Part-3 %}).

<!--more-->

# Contents
{:.no_toc}
* TOC
{:toc}

# Meter Bridge

{::nomarkdown}
  <img src="/assets/Mixbus/Good/MeterBridge.png" alt="Meter Bridge">
  <div class="image-caption">Meter Bridge</div>
{:/nomarkdown}

Mixbus's meter bridge is an incredibly useful window. Often when setting levels or mixing in the edit window it can be annoying to have to constantly switch to the mixer to get a general idea of levels. The meter bridge solves that.

The meter bridge has saved me many times while setting levels away from the computer. Throw a meter bridge up on a monitor and you can see what's happening easily. Even when just editing or composing it's great to have the meter bridge on a second monitor for quick level references.

**Meter bridge is awesome.**

I also want to emphasize how fantastic it is that Mixbus's meters have proper VU modes as well. These days with so many analog gear emulations, it's important that you be mindful of [analog reference levels](https://en.wikipedia.org/wiki/DBFS#Analog_levels) in your gain staging. Mixbus provides this on nearly all available metering.

# OSC

{::nomarkdown}
  <video autoplay loop muted class="gifvid">
    <source src="/assets/Mixbus/Good/OSC.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <div class="video-caption">Lemur OSC Template</div>
{:/nomarkdown}

[OSC](http://opensoundcontrol.org/introduction-osc) is a protocol that lets you send messages across a network. Mixbus supports it [with excellent documentation](http://manual.ardour.org/using-control-surfaces/controlling-ardour-with-osc/osc-control/).

Why does OSC matter? Because there are amazing applications like [TouchOSC](https://hexler.net/software/touchosc) and [Lemur](https://liine.net/en/products/lemur/).

As shown above, some advanced templates are being developed for high-quality remote control of Mixbus from your phone or tablet. The template video is showing: Mixer Page, bankable session overview, full strip control and transport. All this available wirelessly in the palm of your hands.

Many DAWs have solutions like these, but rarely as complete, configurable and open as Mixbus's.

# Scripting

{::nomarkdown}
  <img src="/assets/Mixbus/Good/Scripting.png" alt="Scripting">
  <div class="image-caption">Scripting window</div>
{:/nomarkdown}

Mixbus inherited Ardour's awesome [LUA scripting](http://manual.ardour.org/lua-scripting/). Even for non-programmers there is not much difficulty in beginning to write useful scripts. Mixbus comes with a number of example scripts and some useful scripts to serve as demonstration.

Not only are scripts capable of acting upon Mixbus, but plug-ins and instruments can be written. [The inline scopes like a-scope]({% post_url 2017-09-01-Cool-things-in-Mixbus-Part-3 %}#inline-scopes) are written in Lua, and things like the Sine Generator and Noise generator are written in Lua.

Mixbus/Ardour haven't had this very long, but given the nature of the types of users that use Ardour, I'm sure we'll soon see a number of powerful and useful scripts develop over time.

Meanwhile, it serves as an excellent workflow-problem solver for advanced users and the adventurous.

# Support Me!

This post took 2 hours to research, screenshot, write and edit. If you appreciate the information presented then <a href="/DonateNow/">please consider joining patreon or donating!</a>







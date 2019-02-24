---
layout: post
title: Do ALL DAWs sound the same pt2
comments: true
date:   2019-02-22_17:27:15 
categories: music
tags: ['']
image:
description:
---


<!--more-->

**If you have any questions or comments, please comment below! I read every comment and respond to most.** No registration is necessary to comment, so don't be shy.

# Contents
{:.no_toc}
* TOC
{:toc}


## Faders

Faders are a big bugaboo of mine. Every DAW has different fader scales, fader throw ranges and different fader MIDI mapping.

If you numerically set the values of the faders, then you can generate bit-for-bit identical results (or at least <-144dB FS). Who does that though? Nearly all of use grab the fader with our mouse or a controller.

I'm providing measurements for these aspects of fader control:

* Fader Sized - Simple the size of the adjustable fader range on screen.
* Fader Scale - How are the values scaled from -inf to 0. How much control do you have at common levels? This amounts to [accuracy](https://en.wikipedia.org/wiki/Accuracy_and_precision).
* Fader Throw Range - How large is the physical range of the fader? This amounts to [precision](https://en.wikipedia.org/wiki/Accuracy_and_precision).
* MIDI Mapping - 8-bit mapping of controller values. This combines both accuracy and precision (from a UX perspective) for controller based workflows.

This is not an objective influence on sound, however it is a major usability concern. If one DAW does not allow you to adjust something to -24dB easily, but another does then there will be a clear influence on the resulting product.

### Fader Scale

This is a sampling of values at physical locations mapped to my screen. Fader at specific percentages and what the corresponding value is.

### Fader Throw Range

{::nomarkdown}
<a href="/assets/Differ/Faders.png">
<img src="/assets/Differ/Thumbnails/Faders.png" alt="Fader size">
</a>
<div class="image-caption">Fader size</div>
{:/nomarkdown}

The size of the fader on my screen as a physical measurement. I use the maximum fader size possible.

Larger values allow more precise cursor-based input.

My screen is 16:9 with a 27" diagonal. Resolution is effective (Retina) 2560x1440. So that means that 1 pixel = 0.00919239824".

* Pro Tools - 199px * 0.00919239824 = 1.83".

* Cubase - 644px * 0.00919239824 = 5.9"

* Logic - 137px * 0.00919239824 = 1.26"

All of these products allow you to manual enter values, but I suspect that few people actually do that.

#### Fader Fine-tune

Fader Throw Range doesn't tell you everything. Shortcuts exist (PT: , Cubase: , Logic: ) to scale your cursor input relative to the fader movement.

I measured how far the fader value moved when moving my physical mouse 1 inch. (I have 1:1 cursor vector->mouse pixel mapping set up. I'm _extremely_ picky about this!)


* Cubase

* Logic

* Pro Tools

### MIDI Mapping

Mapping of values for an 8-bit (0-127) controller assigned to a fader.

# Support Me!

This post took XX hours to research, photograph, write and edit. If you appreciate the information presented then <a href="/DonateNow/">please consider joining patreon or paying me for my time spent bringing you quality content!</a>

<a href="https://www.patreon.com/bePatron?u=7465992"> <img class="patreon-button" src="/assets/Patreon.png" alt="Be a Patreon!"></a>

<form style="text-align: center;" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick">
<input type="hidden" name="hosted_button_id" value="BR247JAZBTUJJ">
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
</form>

**If you have any questions or comments, please comment below! I read every comment and respond to most.** No registration is necessary to comment, so don't be shy.


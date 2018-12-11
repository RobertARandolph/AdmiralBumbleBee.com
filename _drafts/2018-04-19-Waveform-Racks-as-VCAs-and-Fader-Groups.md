---
layout: post
title: Waveform Racks as VCAs and Fader Groups
comments: true
date:   2018-04-19_07:51:28 
categories: music
tags: ['Tracktion Waveform', 'Tutorial']
image:
description: Setting up Racks to work as VCAs and Control Groups in Waveform
---

You may have read in [my Waveform review]({% post_url 2018-02-28-30-days-with-Tracktion-Waveform-9 %}) about how I [dislike the VCA implementation]({% post_url 2018-03-08-Waveform-9-the-good-the-bad-the-weird-part-1 %}#vcas).

There's a bit of a workaround.

There's also no explicit control grouping (or fader grouping) in Waveform 9.1.1 and lower. For that situation there's 2 workarounds.

I'm going to walk you through how to use these workarounds, and include the necessary presets for using them. I'll also talk you through how to create your own presets for this setup.

On with it!


<!--more-->

**If you have any questions or comments, please comment below! I read every comment and respond to most.** No registration is necessary to comment, so don't be shy.

# Contents
{:.no_toc}
* TOC
{:toc}

# VCAs with Racks

## The Concept

The idea here is that we want to control multiple faders with a single fader. There's some specifics though.

If you want this to be an implementation of VCAs, then the following points need to be adhered to:

* The change must occur before sends - This is one of the major benefits of VCAs and how it differs from submixes. This allows you to turn down multiple tracks and their volume change affects post-fader sends. So when you turn your drums down, the reverb send comes down with it. 
  If you turned down a submix, all children sends would be the same still. So if you turn down the drum submix, then your snare reverb is still sent at the same volume since it happens at the track level. So your -12db drum track still has a reverb setup for a -1db drum mix.
* The control of multiple faders must be automated - This is unique to VCAs compared to control grouping. VCAs allow you to automate entire sections.
* The control of multiple faders must not takeover children automation - I think this is self-explanatory. VCAs allow you to stack automation.
* The control must not change relative levels of children - The relative level of VCA children should stay the same.

Most DAWs with VCAs do this the traditional way. They have a fader that adjusts other faders. It doesn't pass audio, it just controls faders.

Due to Waveform's unique routing capability we can meet these requirements another way. We can setup a secondary fader after (or before!) our primary fader. These secondary faders are all grouped inside a rack then controlled with a single macro parameter. The macro parameter can be controlled in a number of ways. This method meets all of the requirement for a VCA fader being a VCA fader.

This concept also allows a lot of flexibility that traditional VCAs do not have. The secondary volume can be placed _anywhere_ in the effects chain. So you can create VCA-like setups that meet your own requirement!

## The Implementation

## Making your own Preset

# Control Groups with modifiers


# Support Me!

This post took XX hours to research, photograph, write and edit. If you appreciate the information presented then <a href="/DonateNow/">please consider joining patreon or donating!</a>

<a href="https://www.patreon.com/bePatron?u=7465992"> <img class="patreon-button" src="/assets/Patreon.png" alt="Be a Patreon!"></a>
 
<form style="text-align: center;" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick">
<input type="hidden" name="hosted_button_id" value="BR247JAZBTUJJ">
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
</form>

**If you have any questions or comments, please comment below! I read every comment and respond to most.** No registration is necessary to comment, so don't be shy.


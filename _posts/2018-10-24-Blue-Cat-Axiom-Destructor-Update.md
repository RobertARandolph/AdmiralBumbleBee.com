---
layout: post
title: "Blue Cat Axiom and Destructor 1.1 Update: IR Loader"
comments: true
date:   2018-10-24_10:08:35 
categories: music
tags: ['Review', 'Guitar']
image:
description: Axiom and Destructor updates!
---

{::nomarkdown}
<img src="/assets/BlueCat/Axiom/IR.png" alt="IR Loader">
<div class="image-caption">IR Loader</div>
{:/nomarkdown}

Blue Cat recently released Axiom 1.1 and Destructor 1.4, and it came with a feature that I absolutely love: [IR Loading](https://www.bluecataudio.com/Blog/tip-of-the-day/loading-impulse-responses-in-axiom-destructor-guitar-cabs/).

But don't roll your eyes just yet, this is one of the finest Impulse Response loaders that's inside [one of the finest guitar plugins out there]({% post_url 2018-04-15-Blue-Cat-Axiom-Plugin-Review %})

I want to take a few minutes here to show you what it is, and why I think it's so cool.

There's also some other changes, such as the drag-and-drop ability in Axiom. I just _really_ like the new IR Loader, so that's all I'm going to talk about here.

<!--more-->

**If you have any questions or comments, please comment below! I read every comment and respond to most.** No registration is necessary to comment, so don't be shy.

# One section about it all

{::nomarkdown}
    <video autoplay loop muted class="gifvid">
        <source src="/assets/BlueCat/Axiom/IR.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <div class="video-caption">Impulse Response Loader</div>
{:/nomarkdown}

This was my number one complaint [when I reviewed Axiom]({% post_url 2018-04-15-Blue-Cat-Axiom-Plugin-Review  %}). To create the full amplifier chain, you needed to create your own preamp and cabinet responses, which can be very difficult for someone unfamiliar with the technicalities behind this process. Even with various presets for these parts, it's not the most friendly of processes.

If you're not familiar with Impulse Responses, then let me offer you a quick explanation.

An impulse responses created by running a signal through a piece of equipment in capturing it. The signal may be a sharp and sudden signal (impulse) or it may be a sign sweep (which requires being 'deconvolved'). The result of this process can then be loaded into a product which does a process called [convolution](https://en.wikipedia.org/wiki/Convolution). Now all of the linear characteristics of the signal that you captured can be applied to the signal that you want to process.

Using impulse responses is a very common way of allowing a musician to simulate using an external cabinet like a guitar cabinet. Guitar cabinets are not flat devices. They have wild frequency responses that are a large part of what makes a guitar amp sound like a guitar.

[Axiom](https://www.bluecataudio.com/Products/Product_Axiom/) and [Destructor](https://www.bluecataudio.com/Products/Product_Destructor/) now have the capability to load IRs.

If you read [this post on their website](https://www.bluecataudio.com/Blog/tip-of-the-day/loading-impulse-responses-in-axiom-destructor-guitar-cabs/) then you know everything you need to know, but I'm going to rehash why this is cool.

There's a few things about the new Blue Cat IR loaders that are tremendously cool (and fairly unique). These are all shown in the video above:

* The frequency response of the IR is shown - Being able to see the frequency response of the IR allows you to make more intelligent changes to it.
* EQ - There is an equalizer combined with the IR loader. Changes to the equalizer are immediately reflected in the displayed curve of the impulse response that was loaded. How useful!
* Mixing - The impulse response can be freely mixed with the equalizer curve. This mixing of the impulse response is also displayed graphically.
* Shifting - One of the neater features... The IR can be shifted so that its frequency response is moved horizontally along the frequency axis. If you have an IR that feels too booming you can move it to the right, and if you have an IR that doesn't have the resonance peak in just the right place then you can adjust it without needing to do ridiculous things with equalizer.
* Reverb - Impulse responses can be used to capture reverbs, and these type of impulses work just fine in the IR loader of Axiom and Destructor. (Note: be careful! Long IRs will absolutely eat up your CPU due to the compromises necessary to have the IR Loader be zero latency.)
* (Axiom) EQ effect - In axiom the IR loader is built into the freely usable equalizer, so you can use IRs wherever you need to.
* Zero Latency - The IR loader in the Blue Cat products is zero latency, so you can use it live while you are playing guitar through your computer without any noticeable increase in delay between what you play and what you hear.

Not only do you get an IR loader to use all of those impulse responses that you purchase to use with your other guitar products, but you get an incredibly flexible and easily usable module to use it in.

# Support Me!

This post took 2 hours to screenshot, write and edit. If you appreciate the information presented then <a href="/DonateNow/">please consider joining patreon or paying me for my time spent bringing you quality content!</a>

<a href="https://www.patreon.com/bePatron?u=7465992"> <img class="patreon-button" src="/assets/Patreon.png" alt="Be a Patreon!"></a>

<form style="text-align: center;" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick">
<input type="hidden" name="hosted_button_id" value="BR247JAZBTUJJ">
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
</form>

**If you have any questions or comments, please comment below! I read every comment and respond to most.** No registration is necessary to comment, so don't be shy.

**WRITTEN IN** [VS Code](https://code.visualstudio.com). [See this post for more information]({% post_url 2018-10-06-Editor-Musings %}).
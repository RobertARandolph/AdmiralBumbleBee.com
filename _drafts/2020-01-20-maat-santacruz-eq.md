---
layout: post
title: maat santacruz eq
comments: true
date:   2020-03-07_19:36:04 
categories: general
tags: ['Review']
image:
description:
---

Let's start this article out right!

If you like analyzers, fuzzy analog emulations, dynamic behaviour, rbj's or rock-bottom prices then move on. This is not the product for you.

Santacruz EQ is a product intentionally targeted at an audience that is interested in a specific featureset (and possibly lineage), and is willing to pay for it.

Curious? You know the drill...

<!--more-->

**If you have any questions or comments, please comment below! I read every comment and respond to most.** No registration is necessary to comment, so don't be shy.

# Contents
{:.no_toc}
* TOC
{:toc}

# Introduction

[SantaCruzEQ](https://www.maat.digital/santacruzeq/) is the stripped-down version of [thEQBlue](https://www.maat.digital/theqblue/), which is itself the continuation of the famous [Algorithmix PEQ Blue](http://www.algorithmix.com/en/classic_peq_blue.htm).

SCEQ has one prevailing feature: A variety of minimum-phase filter 'types'. There are a few neat features sprinkled on top, but that's the draw.

So why would you even care?

# Curvilicious

{::nomarkdown}
<video autoplay loop muted class="gifvid">
<source src="/assets/maat/sceq/Curve.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
<div class="video-caption">Sym vs. Asym</div>
{:/nomarkdown}

Take your favorite EQ. Create a band. Move the band up and down. What happens to the shape? What happens to the width? What happens when you adjust the Q?

Can you change these interactions? _Probably_ not. There are [some notable products](https://www.dmgaudio.com/products_equilibrium.php) that [have some similar functionality]({% post_url 2018-01-22-Logic-Effects-Review %}#channel-eq), but you'll be hard pressed to find the variety presented by the maat 'blue' line.

Watching the video above demonstrates probably the most classic difference: symmetrical vs. asymmetrical. There are two videos superimposed showing two separate bands moving through their gain range. 

* The symmetrical filter's negative gain shape is the inverse of its positive gain.
* The asymmetrical filter's negative gain shape is much narrower.

The asymmetrical filter's behaviour allows for precise reduction of spectral content, while allowing for broader boosts. Generally asymmetric topologies are "more musical" (ugh, I hate that phrase) as the common workflow is to singularly target problem harmonics (or resonances) for reduction, but enhance timbre with broad positive gain adjustments (multiple harmonics affected).

Most digital EQs on the market are _symmetrical_, which generally necessitates more fiddling with a band's Q in most musical workflows.

SCEQ has more capabilities than that which are limited by your selection of the 6 or 12 version.

## Topologies

### Sym/Asym

Discussed above.

### Proportional

{::nomarkdown}
<video autoplay loop muted class="gifvid">
<source src="/assets/maat/sceq/Proportional.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
<div class="video-caption">Proportional 3</div>
{:/nomarkdown}

Proportional Q links the slope of the filter to the gain. The more extreme the gain, the narrower the filter.

* 1 - Values inside of +/- 6dB have a shallower slope and further values decrease the slope proportional to the gain.
* 2 - More narrowing outside of +/- 6dB compared to 1.
* 3 - particularly wide inside of +/- 3dB. Shown in the video above for illustration.

### Const-Q

{::nomarkdown}
<img src="/assets/maat/sceq/ConstQ.png" alt="Constant-Q">
<div class="image-caption">Constant-Q</div>
{:/nomarkdown}

Constant Q maintains a linear-like relationship between gain and Q for at least boost or cut, potentially with exceptions described below.

* Asym - Symmetrical boost, Proportional cuts.
* Asy R - Proportional boost like Proportional 3, but wider between 0-3dB. Symmetrical cuts.
* Inverse - I'm somewhat confused as to why this is in the constant-Q section. It's the proportional behaviour of Asy R, but both cut and boost.
* Ideal - Symmetrical (Shown in video).
* New - Proportional, but Constant. From the manual - "It preserves exactly the same bandwidth at half the maximum amplitude".

### Parallel

Parallel is rather neat.

Most EQs work by taking a number of filters, then feeding the result of each filter into the next. For most things they use a serial connection



* FF-FB
* LC Asy

# Measurements

# Features

## f Lock

## Sort

## Autogain

# Missing Features

# Conclusion

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


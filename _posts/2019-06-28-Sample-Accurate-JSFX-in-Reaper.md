---
layout: post
title: Sample Accurate JSFX in Reaper
comments: true
date:   2019-06-29_08:21:11 
categories: music
tags: ['Reaper', 'Programming', 'Video']
image:
description: Sample accurate JSFX in Reaper
---

{::nomarkdown}
<img src="/assets/Differ/ReaperFix.png" alt="Reaper with Sample Accurate JSFX">
<div class="image-caption">Reaper with Sample Accurate JSFX</div>
{:/nomarkdown}

[In the last DAW v DAW post I indicated that JSFX in Reaper may be flawed]({% post_url 2019-06-22-Daw-V-Daw-Automation-Part-4 %}). I was obviously wrong, I knew I was wrong, and here's where I explain how I was wrong.

No text today. If you like text, then go read [the documentation](https://www.reaper.fm/sdk/js/js.php#js_intro).

<!--more-->

**If you have any questions or comments, please comment below! I read every comment and respond to most.** No registration is necessary to comment, so don't be shy.

# Contents
{:.no_toc}
* TOC
{:toc}

# Video

<iframe width="800" height="450" src="https://www.youtube.com/embed/6Yz2vWxhcbM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

You'll clearly want to research how to do a _bit more_ than having sample accurate parameter values. IMD and discontinuities await you with this naive code.

I simply wanted to show what is possible, and how simple it can be.

# Code

```
desc:Sample Accurate Volume
//author: Ripped off from Cockos

slider1:0<-60,0,0.1>Volume (dB)

in_pin:left input
in_pin:right input
out_pin:left output
out_pin:right output

@init

@slider
ddb = (10 ^ (slider1 / 20));

@block

@sample

db_chg_splpos = slider_next_chg(1, next_db_value);

db_chg_splpos > 0 ? 
(
  ddb = (10 ^ (next_db_value / 20));
);

spl0 *= ddb;
spl1 *= ddb;
```

# Support Me!

This post took 9 hours to research, animation and screencast. If you appreciate the information presented then <a href="/DonateNow/">please consider joining patreon or paying me for my time spent bringing you quality content!</a>

<a href="https://www.patreon.com/bePatron?u=7465992"> <img class="patreon-button" src="/assets/Patreon.png" alt="Be a Patreon!"></a>

<form style="text-align: center;" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick">
<input type="hidden" name="hosted_button_id" value="BR247JAZBTUJJ">
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
</form>

**If you have any questions or comments, please comment below! I read every comment and respond to most.** No registration is necessary to comment, so don't be shy.


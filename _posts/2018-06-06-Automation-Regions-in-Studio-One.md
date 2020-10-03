---
layout: ['post', 'reader']
title: Automation Regions in Studio One
comments: true
date:   2018-06-06_09:17:54 
categories: music
tags: ['Studio One', 'Tutorial', 'Studio Tips']
image:
description: How to make 'Automation Regions' in Studio One.
---

{::nomarkdown}
<img src="/assets/Studio One/AutomationRegion.png" alt="Automation Regions">
<div class="image-caption">"Automation Regions"</div>
{:/nomarkdown}

Automation Clips/Items/Regions/Whatever are a neat concept that some other DAWs have. It allows you to contain automation data in a region so it can be easily moved around and/or linked to other regions.

[Studio One](https://www.presonus.com/products/Studio-One) doesn't have this feature natively, but years ago I figured out a workaround. I just realized last night that I never wrote about it, so here we go!

The following is a tutorial on how to emulate 'Automation Clips' or 'Automation Items' in Studio One.

<!--more-->



# Contents
{:.no_toc}
* TOC
{:toc}

# Intro

<iframe width="800" height="450" src="https://www.youtube.com/embed/_eLjFKgv4bg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

First you need to understand what we're doing here. The above video explains the feature in Reaper.

FLStudio has what's usually considered the de facto standard implementation of Automatino Clips, so I suggest [Reading the FLStudio Manual](http://www.image-line.com/support/flstudio_online_manual/html/playlist_automationclip.htm) on the topic as well.

Once you understand what we're doing, then let's proceed.

# Setup

You need the following things to make this work:

* A plugin with MIDI control capability. The plugin must allow you to control parameters with MIDI input.
  * If your desired target plugin doesn't support this, then you need some sort container plugin like [Bluecat Patchwork](https://www.bluecataudio.com/Products/Product_PatchWork/) or some similar plugin that hosts plugins and passes automation data.
* An Instrument track to contain your 'automation region'
* An Audio track or Instrument track.

# Method 1 - Minimal with MIDI Controllable Plugin

<iframe width="800" height="450" src="https://www.youtube.com/embed/wf53Zc_k_cQ" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

* Set your Instrument track output to the Plugin on your Audio or Instrument track.
* Create a MIDI Region on your 'Automation Region' instrument track.
* Open the MIDI editor.
* In the controller lane, hit the `...` and select the parameter that you wish to automate.
* Draw your automation!

That's all there is to it. Now that clip will contain automation data for the plugin _on another track_.

You can "Duplicate shared" on your clip and that will allow you to have 2 regions that have the exact same automation data.

Watch the video above for more info.

# Method 2 - Method with Container and Any Plugin

<iframe width="560" height="315" src="https://www.youtube.com/embed/aTd1pRRPuT0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

If your plugin does not show up as an output on an instrument track, then you need to apply a workaround.

The solution is to use some sort of container plugin that _does_ show up as an input, and allows you to map internal parameters. I am going to use [Bluecat Patchwork](https://www.bluecataudio.com/Products/Product_PatchWork/) for this. The process is similar to above with a couple extra steps.

* Add your container plugin to your 'main' track.
* Add your target plugin inside the container plugin.
* Map the target plugin, inside the container, to a macro or external automation parameter. (See manual of your container plugin for this information)
* Set your Instrument track output to the Plugin on your Audio or Instrument track.
* Create a MIDI Region on your 'Automation Region' instrument track.
* Open the MIDI editor.
* In the controller lane, hit the `...` and select the parameter that you wish to automate. This is the container plugin's external parameter that you have mapped internally to your target parameter.
* Draw your automation!

Once again, watch the video above to see me do this with [Bluecat Patchwork](https://www.bluecat.com/products/product_patchwork/)

# Conclusion

Yep. It's that simple.

Now you can have regions that hold your automation data and you can move them around wherever you want. You can have automation that is updated across your timeline as you adjust it anywhere.

People have been asking for this in Studio One for 5+ years, but it's already there! :)

# Support Me!

This post took 4 hours to screencast, write and edit. If you appreciate the information presented then <a href="/DonateNow/">please consider joining patreon or donating!</a>







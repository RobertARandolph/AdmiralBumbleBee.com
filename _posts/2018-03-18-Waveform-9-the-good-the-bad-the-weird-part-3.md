---
layout: post
title: 'Waveform 9: the good, the bad, the weird. Part 3: Macros - UI design - Ghost tracks - Buying'
comments: true
date:   2018-03-18_10:18:57 
categories: music
tags: ['Tracktion Waveform', 'DAW']
image: /assets/Waveform/Good/GhostTrack.png
description: A look in to some more features of Waveform and the store... eww, the store.
---

{::nomarkdown}
<video autoplay loop muted class="gifvid">
<source src="/assets/Waveform/Good/SubMenu.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
<div class="video-caption">Submenus work correctly!</div>
{:/nomarkdown}

Part 3 is here. Today the main topic is how Waveform kicks Live and Bitwig's ass in one major way.

Today I'm covering:

* The Good
  * Macro Parameters
  * Sub-menu Niceness
  * Ghost Tracks
* The Bad
  * The Store
* The Weird
  * Surprise! 

**Other parts in this series**: 
* [30 days with Tracktion Waveform 9]({% post_url 2018-02-28-30-days-with-Tracktion-Waveform-9 %})
* [Part 1: Browser - Mixing - GUI - VCAs]({% post_url 2018-03-08-Waveform-9-the-good-the-bad-the-weird-part-1 %})
* [Part 2: Modulation - Plugin browsing - Annoyances - GUI]({% post_url 2018-03-14-Waveform-9-the-good-the-bad-the-weird-part-2 %})
* [Part 4: Pattern Generator - Edit Clips - Folder editing - Chord Track]({% post_url 2018-03-21-Waveform-9-the-good-the-bad-the-weird-part-4 %})
* [Part 5: Step Clips - Loops - Clip Linking - Loop Recording - Track Presets]({% post_url 2018-03-25-Waveform-9-the-good-the-bad-the-weird-part-5 %})
* [Part 6: MIDI Editing]({% post_url 2018-03-28-Waveform-9-the-good-the-bad-the-weird-part-6 %})
* [Part 7: Recording]({% post_url 2018-03-31-Waveform-9-the-good-the-bad-the-weird-part-7 %})
* [Part 8: Clip Layer FX, Multisampler, Scripting, Project Management and more]({% post_url 2018-04-03-Waveform-9-the-good-the-bad-the-weird-part-8 %})
* [Instruments and Effect Review]({% post_url 2018-04-08-Waveform-9-instruments-and-effect-review %}) 
* [Conclusion]({% post_url 2018-04-11-Waveform-9-Conclusion %})

**VERSION** - This review is (hopefully) accurate as of Waveform 9.1.1. Further versions may obsolete these views.

<!--more-->

# Contents
{:.no_toc}
* TOC
{:toc}

# The Good

## Macro Parameters

{::nomarkdown}
<video autoplay loop muted class="gifvid">
<source src="/assets/Waveform/Good/MacroParameter.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
<div class="video-caption">Macro Parameters in action</div>
{:/nomarkdown}

Macro parameters is a feature that allows you to control multiple parameters with a single control. This feature is presented in the bottom panel under 'Macro Parameters' when you click a plugin or a track.

I've created a simple [Tilt filter](https://www.edn.com/design/analog/4368935/Implement-an-audio-frequency-tilt-equalizer-filter) of sorts in the animation above. As the low-end is boosted, the high-end is reduced and vice versa. There's a single knob that adjusts the center frequency as well. This is achieved by having having a macro that is linked to the band 1 gain by 100% and band 2 gain by -100%. Another macro controls the frequency of both bands together.

Macro Parameters are contained to each plugin or track, but [Racks]({% post_url 2018-03-15-Routing-Audio-to-Envelope-Follower-with-Racks-in-Waveform %}) are a 'plugin' and their own Macro Parameters that can work across tracks and control multiple plugins at once across tracks.

Macro Parameters can be [modified/modulated]({% post_url 2018-03-14-Waveform-9-the-good-the-bad-the-weird-part-2 %}#modifiers) with allows for some complex and very fun results.

My absolute favorite thing about Macro Parameters is how easy they are to setup...

There's 2 methods to assign parameters to a Macro. First you can create a Macro then click the '+' on the assignment and select the parameter from a menu. BORING! The part that I love is that you can click the ->O (a knob) to the left of the parameter name. Now you can use the right-hand search/parameter pane to find parameters. Left-drag the knob to assign positive or negative assignment to it. Done! Very easy to navigate a huge list of plugins. (Once again, I'd prefer to have a fuzzy search feature, but it's still better than nothing).

I would like if you could turn on the macro parameter assignment, then move a control on the plugin GUI to trigger selection. However I'm quite happy with how Macro Parameters are implemented regardless. **EDIT**: This does work, sort of. When you adjust a parameter in a plugin GUI, the parameter jumps to the top of the parameter list on the right side. From there you can adjust the value and offset.

A super fantastic feature that other DAWs could learn from. When you include the capability of using Racks with Macro Parameters, then even [Ableton Live](https://www.ableton.com/en/) and [Bitwig](https://www.bitwig.com/en/home.html) could learn a thing or two from Waveform.

## Sub-menu Niceness

{::nomarkdown}
<video autoplay loop muted class="gifvid">
<source src="/assets/Waveform/Good/SubMenu.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
<div class="video-caption">Submenus done right</div>
{:/nomarkdown}

This is a 'small thing', but it's really a major thing that a lot of software gets wrong.

Watch the animation. When I move left to right, moving over a menu item does not trigger. Cursors selection of menu items only happens on mostly-vertical and on right to left movement. When you move your mouse to the right to select a submenu then you'll probably get to the submenu and not trigger something else and make the submene disappear.

Why does this matter? Because it disallows you from accidentally closing the sub-menu by selecting a menu item below it. Let's look at it done _wrong_. (This example is from [CSS Tricks](https://css-tricks.com/targetting-menu-elements-submenus-navigation-bar/), it's purposely a naive implementation and not an indication of their capability to implement GUI effectively)

{::nomarkdown}
<video autoplay loop muted class="gifvid">
<source src="/assets/Waveform/Good/SubMenuWrong.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
<div class="video-caption">Submenus done wrong</div>
{:/nomarkdown}

In the example above, the split second that I move over a menu item it's triggered. If I try to swipe to a submenu then my moving over a parent menu item makes the submenu disappear and I'm out of luck. **VERY** bothersome. Rage inducing! GRRRRRR!!!!!!

Waveform does this right. Thank you guys.

## Ghost Tracks

{::nomarkdown}
<img src="/assets/Waveform/Good/GhostTrack.png" alt="Ghost Tracks">
<div class="image-caption">Ghost Tracks</div>
{:/nomarkdown}

Ghost tracks may not be what you think, but they are still mega-cool. Ghost tracks allow you to underlay another track's data on your current track.

In the image above I have the 'Drum Overheads' underlaid below my piano track. The 'Vox Lead' track has a MIDI piano melody underlaid below it. This works with MIDI under MIDI too.

Gone are the days of trying to visually trace where things are, or trying to line up the playhead so you can edit things in time. Select your track, go to 'Ghost Tracks' and select the track that you want underlaid. 

But wait! There's more!

You can underlay as many tracks as you want. If you want the Kick, Snare, Bassline and some Shaker part all underlaid on your midi while you work, do it. If you want your entire string section underlaid below your Vox while you work? Do it.

Really cool feature. I do wish that it wasn't menu-based selection, because when you have 248 tracks... selecting tracks in a menu is somewhat unpleasant. (read: I rather squeeze grapefruit juice in my eyes). That doesn't take away from how useful this feature is though. A++, would Ghost Track again.

# The Bad

## The Store

{::nomarkdown}
<img src="/assets/Waveform/Bad/Store.png" alt="The Store">
<div class="image-caption">The Store</div>
{:/nomarkdown}

This evaluation of the store is current as of March 18, 2018. If you're reading this a few weeks from now, many of these issues _might_ be fixed.

I get it. Tracktion isn't an office of guys working all day. They're making affordable software and they have a budget... but the web store is pretty awful.

First you go to [Tracktion.com](http://tracktion.com) and there's no immediate link to the store on the first view. I can't even cmd-f (find) for 'Store' or 'Marketplace' to find a link. That's probably the best part about it in fact!

* There's a 'Compare items' function that I can't figure out how to use at all.
* It always says 'Welcome -' (My name _IS_ filled out in account information).
* It consistently labels my cart with the wrong number of items (This is often because a 'freebie' that's added, that I already own, but not shown in all windows).
* Checking out hasn't worked for 2 days :(
* Products don't link to a comparison chart. It can be difficult to figure out why one product is more $$ than another without multiple page switches. (The product pages themselves DO have this, but only when you click 'Buy Now')
* Clicking 'Buy' on a product page doesn't actually add the product to your cart, it takes you to the store where you have to 'add to cart' again.
* The 'Buy Now' button on the page doesn't buy it now. In fact it just pops up a menu where you're _at least_ 8 more clicks from buying it (4 of which are trying to get to checkout!)
* It's slow. The store is so very slow. It may be because there's a sale going on right now, but that's not a particularly good reason.
* 'Apply Discount Code' doesn't apply a discount code. It pops up another section for you to enter a discount code _then you click again_ to enter the code. Strange.
* 'Sort By Position' is the default sort. Interesting.
* 'Hardware' and 'Learning' are selectable categories, but they have nothing in them. It's disappointing to click this and be presented with nothing. They shouldn't show if they are empty.
* Clicking 'Edit' in the cart just takes you to the store product page. Hmm. There's a quantity button there in the cart already? What is it there for?

Overall, the process of buying the product seems amateurish to me. It's not _difficult_ to purchase the product, but it's not nearly as slick as it could be. When you depend on income from affordable software, then impulse purchases should be easy and not half a dozen extra clicks.

Then again it's not _all_ bad. *Spoiler alert* Even though I'm reviewing an NFR, why do you think I'm even looking at the store right now? ;)

# The Weird

The weird thing is that I have nothing for this section today! The ratio of Good:Bad notes I've taken so far is nearly 20:1 too...

# Support Me!

This post took 5 hours to research, photograph, write and edit. If you appreciate the information presented then <a href="/DonateNow/">please consider joining patreon or donating!</a>

<a href="https://www.patreon.com/bePatron?u=7465992"> <img class="patreon-button" src="/assets/Patreon.png" alt="Be a Patreon!"></a>

<form style="text-align: center;" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick">
<input type="hidden" name="hosted_button_id" value="BR247JAZBTUJJ">
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
</form>

If you have any questions or comments, please comment below! I read every comment and respond to most.



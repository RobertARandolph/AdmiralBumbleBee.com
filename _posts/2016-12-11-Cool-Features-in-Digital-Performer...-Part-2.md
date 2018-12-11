---
layout: post
title: Cool Features in Digital Performer... Part 2
comments: true
date:   2016-12-11_14:47:57 
categories: music
tags: ['Digital Performer', 'DAW']
---

![Features again!](/assets/DP/Featurespt2.png)

As part of this ongoing series showing some of the cool stuff in [Digital Performer 9](http://motu.com/products/software/dp), today I will discuss: Offline branching undo, Dynamic Equalizer, Spatial Maximizer and Track Grouping.

Be sure to check out the other DP Features posts!

[Part 1]({% post_url 2016-12-10-Cool-Features-in-Digital-Performer...-Part-1%})
[Part 3]({% post_url 2016-12-12-Cool-Features-in-Digital-Performer...-Part-3%})
[Part 4]({% post_url 2016-12-13-Cool-Features-in-Digital-Performer...-Part-4%})
[Part 5]({% post_url 2016-12-14-Cool-Features-in-Digital-Performer...-Part-5%})

<!--more-->

# Contents
{:.no_toc}
* TOC
{:toc}

# Offline branching undo

![Branched Undo!](/assets/DP/Undo.png)

This is a big one. What does that phrase, "Offline branching undo" mean? Let's break it down.

* Offline - This means that your undo history is saved and available even after you close your project. Note that I'm using a project from __*2008*__, created 3 versions ago, in these pictures!

* Branching - Imagine you are at a point in your project that we'll call X. Now you do actions "A B C". Your history now looks like "X A B C". In most DAWs, if you undo back to X then do actions "Q R S" now your undo history is overwritten to "X Q R S". "A B C" will now be gone forever. In DP you retain _both histories_. That means if did "A B C", then went back to X and did "Q R S", if you go back to X again you can choose to redo "A B C" __or__ "Q R S". In DP your undo history retains these branches! The highlighted actions in the above image are potential branches you could take when redoing from a specific point.

There is one caveat: Not everything in DP is undoable. Specifically you can not undo changes in the mixer. So as DP is right now, you can make some funky things happen if you have a lot of mixer changes and then you try to undo some edit changes done in between. If you keep your recording/editing/mixing separate then it works great.

Despite the lack of mixer undo, _DP has separate undo stacks for soundfiles_, your main project and POLAR. Every soundfile has its own offline branching undo! This can be an _amazing_ feature when working with post-production for film, or when working with heavily edited genres of music like IDM or DnB.

Another thing is that DP's undo is _unlimited_. Most other DAWs have a preference for setting the number of undo levels. This is not a thing in DP.

![Undo Preferences](/assets/DP/UndoPref.png)

Given that this could create a massive amount of data, you have pruning options as shown above.

![Undo Timeline](/assets/DP/UndoTime.png)

The Undo History window also has a navigatable display showing you a timeline of changes. You can go through this timeline and basically see what your undo stack looked like at a specific time and date if you want. It also gives you an overlook of the history of the undo stack.

# Plug-ins part 2 - Dynamic Equalizer x2

## Dynamic Equalizer

![Dynamic Equalizer](/assets/DP/DynEQ.gif)

Dynamic Equalizers seem like a daunting effect, but if you understand what a compressor is then it's very simple. A compressor acts on the gain of a signal as a whole. Dynamic equalizers have compressors (or expanders/gate/limiter etc..) that action the gain _of a filter band_ instead of upon the gain of the whole signal.

Dynamic equalizers are exceptionally useful tools. They allow you to make changes on the spectral content of a signal solely based upon the envelop of the signal. Maybe your singer gets a bit nasally in some shouty parts, but sounds great otherwise. Dynamic EQ is your saviour. Maybe the attack of your kick is amazing and you want it untouched, but you need some more mid-range on the 'boom' of it. Dynamic EQ will do it.

Dynamic EQs aren't difficult to find in the third-party world. Many products are available like: [bx_dynEQ v2](https://www.plugin-alliance.com/en/products/bx_dyneq_v2.html), [Voxengo GlissEQ](http://www.voxengo.com/product/glisseq/), [TDR Nova](http://bedroomproducersblog.com/2015/11/18/tdr-nova-dynamic-equalizer/), [Toneboosters FIX](http://www.toneboosters.com/tb-flx/) and even [Fabfilter Pro-MB](http://www.fabfilter.com/products/pro-mb-multiband-compressor-plug-in) is a dynamic EQ in its default mode.

Despite owning a number of dynamic EQ plug-ins, I always grab the Motu Dynamic EQ first when I feel I need that type of process. It's straightforward and competently designed. The inclusion of this plugin is another example of a stock processor that will easily save you $100+ by choosing DP over another product.

## Spatial Maximizer

![Spatial Maximizer](/assets/DP/SpatMax.gif)

The Spatial Maximizer is 2 Dynamic EQs in one package. Each processor operates on either the Mid or Side signal.

* Side - This is content that is exclusive to the Left and Right channels respectively.

* Mid - This is content that is present in both the left and Right channels. 

By splitting the signal up in to the Mid and Side components, the Spatial maximizer allows for some rather creative processing. Once again this is something that you can get with many third-party products. Mid/Side dynamic EQ is a fairly rare process and by having this stock plugin available you don't need to think about purchasing another tool on the rare occasions that you may require it.

# Track Grouping

![Track Grouping Preferences](/assets/DP/TrackGroup.png)

Track Grouping is something that most every DAW has. DP takes it a few steps further by giving you fine-grained control over what a group means.

As you can see in the picture above, what specific aspects of the select tracks are grouped is definable. If you want a group that only controls the zoom level of the tracks then you can do it. If you want macro control of only sends for certain tracks and nothing else, you can do it. If you want some tracks to respond to take/comp commands but not anything else (such as mixer changes) then you can do it.

Another aspect of this is that groups are not linked to any sort of hierarchy in DP. You can have a group of (Track 1, Track 2, Track 3) and another group of (Track 2, Track 7, Track 11) and yet another of (Track 1, Track 7 and Track 18). They can all overlap, and you have fine-grained control over what the group actually does.

For me this a _huge_ feature in DP. Many other DAWs have 'dumb grouping' where all aspects of tracks are grouped. Most DAWs also link grouping to a specific hierarchy, and this does not allow overlapping groups or groups that exist outside folders. With DP you can have anything grouped no matter where it is and it will stay group.

DP also has a shortcut for very quickly suspending track groups. Press the shortcut, then the number of the track group and it's disabled. There's also a handy window that allows you to apply new group settings to a group, move groups, turn groups on/off and manage groups.

A hidden grouping feature of DP is that you can temporarily make nearly any command apply as a grouped-command by holding down the T key when performing it. If you wish for an action to apply to All __Visible__ Tracks then you can hold down the W key while performing your action. With DP's track visibility features this can be a pretty convenient trick.

# Notes

Note: All images are taken with the '8 bit' theme for DP9.

Be sure to check out the other DP Features posts!

[Part 1]({% post_url 2016-12-10-Cool-Features-in-Digital-Performer...-Part-1%})
[Part 3]({% post_url 2016-12-12-Cool-Features-in-Digital-Performer...-Part-3%})
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
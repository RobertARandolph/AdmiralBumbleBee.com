---
layout: post
title: Cool things in Logic Pro X Part 4
comments: true
date:   2018-01-09_09:39:48 
categories: music
tags: ['DAW', 'Logic Pro X']
image: /assets/Logic/Good/Part4.jpg
description: An exploration of some random features in Logic Pro X
---

{::nomarkdown}
  <img src="/assets/Logic/Good/Part4.png" alt="Logic Part 4">
  <div class="image-caption">Screenshots all globbed together, Modern Art</div>
{:/nomarkdown}

And here we are with the penultimate 'Cool things' feature in [Logic Pro X](https://www.apple.com/logic-pro/) while [I spend a month using it]({% post_url 2017-12-14-30-days-of-Apple-Logic-Pro-X %}). One more 'Cool Things' post, a surprise, effects review, instruments review and a conclusion are still coming.

There's no theme today, I'm just grabbing 5 things from my list I've been making and going with it.

* Plugin Organization
* Swipe Comping
* Alternatives and Reversions
* Content
* Automatic connections


**Other parts in this series**: 
* [Cool things in Logic Pro X Part 1]({% post_url 2017-12-18-Cool-things-in-Logic-Pro-X-Part-1 %})
* [Cool things in Logic Pro X Part 2]({% post_url 2017-12-23-Cool-things-in-Logic-Pro-X-Part-2 %})
* [Cool things in Logic Pro X Part 3]({% post_url 2018-01-05-Cool-things-in-Logic-Pro-X-Part-3 %})
* [Cool things in Logic Pro X Part 5]({% post_url 2018-01-13-Cool-things-in-Logic-Pro-X-Part-5 %})
* [Logic Pro X Tips & Tricks and more cool things]({% post_url 2018-01-16-Logic-Pro-X-Tips-and-Tricks %})
* [Logic Effects Review]({% post_url 2018-01-22-Logic-Effects-Review %})
* [Cool things in Logic Pro X Part 10.4]({% post_url 2018-01-26-Cool-things-in-Logic-Pro-X-Part-10-4%})
* [Logic Instruments and MIDI Effects Review]({% post_url 2018-01-31-Logic-Instruments-and-MIDI-Effects-Review %})
* [Things I hate about Logic Pro X and Conclusion!]({% post_url 2018-02-04-Things-I-hate-about-Logic-Pro-X %})

<!--more-->

# Contents
{:.no_toc}
* TOC
{:toc}

# Plugin Organization

{::nomarkdown}
  <img src="/assets/Logic/Good/PluginManager.png" alt="Plug-in Manager">
  <div class="image-caption">Plug-in Manager</div>
{:/nomarkdown}

Logic's Plugin Organization is second to none, but tied with Cubase's facilities at least. Specifically I'm referring to the window shown in the image above.

[Logic Pro X 10.1](https://support.apple.com/en-us/HT204983) added the 'Plug-in Manager', which is a feature that allows you to change how plugins appear in Logic. Here's some of the features:

* Renaming of plugins
    * Changeable long name 
    * Changeable short name - shown when there's not enough space for the long name
* Folder and sub-folder categorization
* Sorting
* Rescanning and revalidation
* Disable/Enable plugins
* List by Manufacturer
* Show plugin version
* Check validation status

I'm sure that doesn't _seem_ exciting at first, but I assure you that it's a big time saver. I have my plugins organized in a manner which greatly reduces searching and aids me in locating 'flavours' of processor when I'm not 100% sure what I want.

Even though I've pared down my AU plugin list from ~1800 to only a few hundred in the last few days (all legitimate!), having things organized is a huge help.

**BONUS NACHOS**

Cubase and Reaper have an awesome feature that lets you see what plugins are not currently in a category. Logic does not have this... almost.

When I organized my plugins I simply took everything and dragged it to a folder I called 'Uncategorized'. Then I simply dragged plugins from 'Uncategorized' to the correct folder. The net result being that anything that wasn't in a properly labelled folder was left in the 'Uncategorized' folder and I can easily see what I missed.

Sometimes I amaze myself with the (admittedly somewhat small) amount of brain power I put towards such insignificant issues.

**BONUS NACHOS AND CHEESE**

Want even more power over your plugin organization? Go purchase the awesome [Auganizer](http://www.auganizer.com). Even with Logic Pro X's new plug-in manager, Auganizer offers you a number of features that aid in the organizational process. Particularly with more advanced filtering, search and the fact that it works with all AU hosts.

**BONUS CHILI NACHOS AND CHEESE**

I was going to save this for a 'tips' post, but I'll let you in on a secret: you can create sub-folders in Logic's Plug-in Manager easily. A sub-folder is indicated by a colon `:`.

So `Guitar` is a folder, and `Guitar:Pedals` would create a sub-folder under Guitar with the name Pedals. Any level of sub-folder can contain effects. See my plug-in organizer screenshot above for this in action. (EQ, Dynamics, Guitar, Saturation)

# Swipe Comping

{::nomarkdown}
  <video autoplay loop muted class="gifvid">
    <source src="/assets/Logic/Good/Comp.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <div class="video-caption">Comping</div>
{:/nomarkdown}

First, What is 'Comping'. Comping is short for 'Compositing' (and many online sources get this wrong!). This is the act of taking a number of performances and editing them into a single cohesive performance.

Any host with basic editing tools, copy and paste can do this. So what's the big deal? _Logic makes it easy_.

First thing I did here was create a 'Take Folder'. I did this by having a cycle on with the setting `Recording->Overlapping Audio Recordings->Cycle On: Create Take Folder` set to **on**. Then I recorded for 7 cycles. This created a take folder with all of my recordings. (Note: make sure that the 'Replace mode' button in your control bar is off! It's a box with an X in it.)

Swipe comping is exactly what you see in the video above. With `Preferences->General-Editing->Quick Swipe and Take Editing Swipe Zones` on, I can click-drag the bottom of the take and select that portion of the take for my comp. You can select the same portion of another take by clicking the bottom half of the take.

It's really that easy.

A benefit that Logic Pro X has over some other similar comping systems (Like [Studio One](https://support.presonus.com/hc/en-us/articles/210041103-STUDIO-ONE-How-to-use-Track-Comping) and [Digital Performer](https://www.youtube.com/watch?v=pO0iJi4cqtQ)) is that you can edit the regions in the take folder easily. Each region in the take folder is its own autonomous entity that can be edited and played with as you want, with the changes being reflected in the comp. Other implementations force you in to this 'comping mode' where editing is either not possible or difficult.

Logic's comping even works perfectly well on multitrack performances like drums.

# Alternatives and Reversions

{::nomarkdown}
  <img src="/assets/Logic/Good/AlternativeAndReversions.png" alt="Alternatives and Reversions">
  <div class="image-caption">Alternatives and Reversions</div>
{:/nomarkdown}

## Alternatives

Alternatives. These features get less exciting as this posts goes on, but I know you... everytime you try to be organized then your project folder has lots of "Project1", "Project1revision", "Project1vocalup", "Project1guitaroverdubs", "Project1killmenow" etc...

Not necessary in Logic. Logic has an intrinsic 'Alternatives' feature. You can save alternatives, edit alternatives and recall alternatives just as if you were 'Save As'ing the project, except all of your alternatives are saved _with_ the project.

Alternatives are easily accessible and renameable from within the project itself via the `File->Project Alternatives->Edit Alternatives...` menu.

Have an alternative that you want to break out in to its own project? `File->Project Alternatives->Export Alternative as Project...` is all you need.

Yet another feature in Logic that simplifies a common workflow that I'm pretty sure we're all awful at.

## Reversions

In `Preferences->General->Project Handling` you can setup how many backups that Logic retains for the project. No more manual backups. No more inane searches through various folders to find backups. No more hassle.

To load a backup you go to `File->Revert To` and select the backup you want. Time and date are shown to aid you in the decision. Of course, Logic also prompts you to load the most recent backup if Logic crashed for some reason. 

Let's not forget as well that [your undo history will be present]({% post_url 2017-12-18-Cool-things-in-Logic-Pro-X-Part-1 %}#persistent-undo) when you reload the project. 

# Content

{::nomarkdown}
  <img src="/assets/Logic/Good/Content.png" alt="Content">
  <div class="image-caption">Content</div>
{:/nomarkdown}

Logic has a lot of free stuff available in `Logic Pro X->Sound Library`. High quality multisampled instruments, presets for the included synths, great drum kits, [impulse responses](https://en.wikipedia.org/wiki/Convolution_reverb), libraries for alchemy and more.

Just about 60gb of content.

I wouldn't expect anyone to have a use for all of that. I suspect that 50-90% of it is useless for most people, but it's fantastic that you have the choice. I'm particularly fond of the selection of IRs and Drum libraries. It's a paltry ~8gb for me, but it's probably $300 worth of content that I've purchased elsewhere for use in other DAWs.

I know that the content is overlooked by most producers that think they don't "need" it, but it's full of things that are either excellent starting points for creating your own content, or just outright excellent content for included effects (like IRs for Space Designer).

Don't overlook it! Explore it and see what's there. You might be surprised how much content there is, and that there's a little bit in there that will help you out with whatever you do.

# Automatic connections

{::nomarkdown}
  <img src="/assets/Logic/Good/AutoConnect.png" alt="Auto connect">
  <div class="image-caption">Auto connect</div>
{:/nomarkdown}

This is a really simple thing that no other DAW I know of gets right. When you turn-on or plug-in a new device to your system, Logic finds it and enables it automatically.

It's instantly available anywhere in your project or preferences. There's no settings to change, nothing to refresh, no screwing around. It's done. Automatically.

Everything just works. It's made writing this so much easier, since I often switch between numerous devices for setting up screenshots. I don't have to think about what I have hooked up or if it's enabled or set for some weird mode. I just turn it on and go.

# Support Me!

This post took 8 hours to research, screenshot, write and edit. If you appreciate the information presented then <a href="/DonateNow/">please consider joining patreon or donating!</a>

<a href="https://www.patreon.com/bePatron?u=7465992"> <img class="patreon-button" src="/assets/Patreon.png" alt="Be a Patreon!"></a>

<form style="text-align: center;" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick">
<input type="hidden" name="hosted_button_id" value="BR247JAZBTUJJ">
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
</form>

If you have any questions or comments, please comment below! I read every comment and respond to most.



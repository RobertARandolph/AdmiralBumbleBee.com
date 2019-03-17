---
layout: post
title: Cool Features in Digital Performer... Part 5
comments: true
date:   2016-12-14_09:21:59 
categories: music
tags: ['Digital Performer', 'DAW']
series: dp
---

![Day 5](/assets/DP/Featurespt5.png)

This installment of "Cool Features in Digital Performer" I'm going to wax poetic about: Snapshot Automation, Clippings, OSC Support, Midi Effects, and some more plug-ins.

Be sure to check out the other DP Features posts!

{% assign dp = site.posts | where: "series", "dp" | sort: 'date' %}
<ul>
{% for my_page in dp %} 
    {% if page.url != my_page.url  %}
        <li><a class="page-link" href="{{ my_page.url | prepend: site.baseurl }}">{{ my_page.title | split: '-' | last }}</a></li>
    {% endif %}
{% endfor %}
</ul>

<!--more-->

# Contents
{:.no_toc}
* TOC
{:toc}

# Snapshot Automation

![Automation Snapshots](/assets/DP/AutomationSnapshot.png)

Snapshot Automation is nearly essential to my workflow. It is a very simple concept with major ramifications to automation heavy workflows without a controller.

Snapshot automation allows you to make changes to something, such as a plug-in, and affect a piece of time with those changes as automation. Changes can be flat or ramped from one change to the next. This allows for using a single plugin where you may have to use 2 and work with bypass automation, or allows very easy morphing between parameters.

Here are the options available, which may make it easier to understand what is possible:

Time Range, this affects how the current changes are applied compared to what is already written as automation -

* All time
* Selected Time
* From counter to chunk end
* From counter to chunk start
* From counter to next change (flat)
* From counter to next change (ramped)
* From counter to previous change (flat)
* From counter to previous change (ramped)
* From previous change to next change

Tracks, this affects which tracks the snapshot parameters are taken from. Remember the powerful track selector features here! - 

* All
* Selected tracks
* Tracks shown in edit window
* Tracks shown in mixing window
* Tracks shown in edit window (of the plug-in)

Data types, this pinpoints exactly which data on the affected track is written. DP has powerful automation filtering features that apply here. - 

* All _enabled_ data types
* Current data types in effects window
* Data types visible in mixing board
* Active data types in effects window
* All data types in effects window

Using these features you can make a change to your project at a point and write those changes instantly as automation. You can ramp these from other changes or apply the changes to a specific piece of time. Very powerful feature for non-controller based automation.

Here's a quick example of morphing between 2 presets in a plug-in. This took me about 10 seconds to do, and this doesn't even scratch the surface of what you can do using the snapshot automation parameters and DP's excellent automation tools.

![Automation Morphing!](/assets/DP/SnapshotMorph.png)

# Clippings

![A clippings window](/assets/DP/Clippings.png)

Clippings are basically what it sounds like. It's a clipboard, but a clipboard on steroids. A clipping window can hold basically anything. Links to files, presets, _sequences_ (this basically gives you track templates), midi _data_, audio _data_ and various other things.

There's 3 types of clipping windows in DP, and there can be multiple clipping windows of each type. Global, Project and Startup.

* Global - available to any DP project
* Project - these are available on a per-project basis.
* Startup - these are per-project but everything in the window is executed upon project load. Very useful for rewire, video, complex hardware setups and more.

Clippings allow you to store commonly used things to be quickly available. If it's in DP it can be 'clipped'. If it exists on your system it can be 'clipped'.

# OSC Support

![Osc Support!](/assets/DP/OSC.png)

[OSC](http://opensoundcontrol.org/introduction-osc) is a protocol that allows you to send structured messages to a device. For most people this isn't very noteworthy, but if you're a techno-muso-geek then OSC support is very exciting.

DP has nearly-complete OSC bindings. Many commands are available, the mixer, effects parameters, the entire transport and some other bits.

OSC control makes it possible for you to create your own control systems for DP using any number of programs like [TouschOSC](http://hexler.net/software/touchosc) or even [making your own hardware controller](http://cnmat.berkeley.edu/oscuino).

# Midi Effects


DP has a whole suite of __Real-Time__ _non-destructive_ midi plug-ins. This means that when you put these on a midi track, they do not alter the written data. The data is only altered in real-time as playback occurs.

Note that many of these effects have various extra parameters not shown. Some of them have multiple layers of parameters with some really neat capabilities.

Arpeggiator ⬇

![Arpeggiator](/assets/DP/Arpeggiator.png)

Change Duration ⬇

![ChangeDuration](/assets/DP/ChangeDuration.png)

Change Velocity ⬇

![ChangeVelocity](/assets/DP/ChangeVelocityReal.png)

Deflam ⬇

![Deflam](/assets/DP/DeflamReal.png)

Echo ⬇

![Echo](/assets/DP/Echo.png)

Groove ⬇

![Groove](/assets/DP/Groove.png)

Humanize ⬇

![Humanize](/assets/DP/HumanizeReal.png)

Invert Pitch ⬇

![InvertPitch](/assets/DP/InvertPitch.png)

Quantize ⬇

![Quantize](/assets/DP/Quantize.png)

Reassign Continuous Data ⬇

![Reassign](/assets/DP/Reassign.png)

Remove Duplicates ⬇

![RemoveDupes](/assets/DP/RemoveDupes.png)

Time Shift ⬇

![TimeShift](/assets/DP/TimeShift.png)

Transpose ⬇

![Transpose](/assets/DP/TransposeReal.png)

I'm not even going to go through all of these. Check out the GUIs to see what you can do. There's some very cool stuff like the Reassign CC effect and Humanize.

# Plug-ins part 5 - Boom and boomier

This is the last installment of the plug-in reviews. DP has quite a few other plug-ins that I'm not covering, so don't assume that's all!

## Proverb

![Proverb](/assets/DP/Proverb.png)

Proverb is a [Convolution Reverb](https://en.wikipedia.org/wiki/Convolution_reverb). These type of processors basically allow you to replicate the sound of a static space's reflections and decay.

There are a lot of third-party convolution plug-ins, such as my favorite [LiquidSonics Reverberate 2](http://www.liquidsonics.com/software_reverberate.htm). Proverb does not compete with these products, but it does offer you a great basic convolution reverb that most people will not outgrow.

Proverb does have some features that can be uncommon in other convolution reverb products, notably the dynamics section. Proverb has both a gate and compression. Compression allows you to create much denser sounding spaces that the IR alone would create, but without the downside of clouding up your mix as the detection is linked to the dry signal fed to the reverb.

There's [numerous](http://www.openairlib.net) [free](http://www.voxengo.com/impulses/) [impulse responses](http://www.samplicity.com/bricasti-m7-impulse-responses/) out there that you can easily load in to Proverb. Unless you need some particularly specialized features, Proverb is more than sufficient for creating some amazing spacial sounds.

As a bonus, throw Proverb on a send and follow it up with Ensemble Chorus included in DP. There's some really cool sounds waiting for you!

## Subkick

![Subkick](/assets/DP/Subkick.png)

Subkick does what it sounds like it may do. When the threshold of the plug-in is crossed, it lets through a signal that emulates the sound of a strong kick drum boom. With drive and pitch parameters you can create some __really__ crazy kick sounds, or subtly beef up your anemic recorded kick.

Subkick is definitely not a processor that you will throw on every track, but it is one of the best kick enhancers out there and it's free with DP.

# Notes

Note: All images are taken with the '8 bit' theme for DP9.

Be sure to check out the other DP Features posts!

[Part 1]({% post_url 2016-12-10-Cool-Features-in-Digital-Performer...-Part-1%})
[Part 2]({% post_url 2016-12-11-Cool-Features-in-Digital-Performer...-Part-2%})
[Part 3]({% post_url 2016-12-12-Cool-Features-in-Digital-Performer...-Part-3%})
[Part 4]({% post_url 2016-12-13-Cool-Features-in-Digital-Performer...-Part-4%})

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

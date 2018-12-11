---
layout: post
title: Automation in Studio One
comments: true
date:   2016-06-09_08:34:50 
categories: music
tags: ['DAW', 'Studio One']
---

![More than meets the eye!](/assets/StudioEvaluatione/transform.gif)

Automation is an extremely important tool. In Studio One it's even more important than some other DAWs since S1 does not have any modulation capabilities; automation is the only way to move controls around 'automatically'.

Studio One excels largely in editing and 'penning in' automation, but is **seriously** lacking in some areas. Let's investigate

<!--more-->

# Contents
{:.no_toc}
* TOC
{:toc}

# Writing with a controller

## Assigning midi to a control

![Not too difficult I suppose](/assets/StudioEvaluatione/AssignController.png)

Assigning a midi controller to a specific in-daw control is not difficult, but could be improved.

First you have to open your external devices window (the rightmost down pointing arrow in the upper section of the picture), move the controllers you want to map to have them available.

Then in the DAW, you move the thing you want to map and then what you want to map it to. Both of these will show in the upper left. Press the left-facing triangle in the middle and they are now mapped.

I've seen better, I've seen worse. The most bothersome thing is that you apparently can't map NRPN, Sysex, notes, velocity, pitch bend etc... Only midi CC. For me the exclusivity of CC control is a damning oversight that makes this feature very frustrating for me.

## Punching automation

Nothing here to see folks! It really sucks, confining automation changes appears to be only doable by hand.

# Editing automation

## Freehand

![It works.](/assets/StudioEvaluatione/automating.gif)

Well, it does what you'd expect, but with no density or thinning controls.

## Shapes

![Ohhhh, shaps!](/assets/StudioEvaluatione/shapes.gif)

There are a few basic shapes you can add: Sine, Saw, Square, Triangle and Parabola. You can change the phase offset, frequency and DC offset of these shapes.

There's no way to adjust the automation density, change the slope of the parabola or to manually enter a frequency for the shapes. Fine control of frequency is only attained through the grid settings.

It is a bit weird that the manual calls them 'Figures'. Doesn't exactly make searching for this easy.

## Transform

![More than meets the eye!](/assets/StudioEvaluatione/transform.gif)

The transform tool is super cool. Just watch the gif. It's also exceptionally useful.

A weird issue with it is that once you draw the transform box, it seems rather difficult to get rid of it!

## Trim

![At least we can trim pretty easily.](/assets/StudioEvaluatione/trim.gif)

Trimming manually works as expected. Select points or space between points and hover your mouse at the top of the lane/track till you see the horizontal trim cursor. Good enough.

## Other

![Halfway there](/assets/StudioEvaluatione/EditValue.png)

You can edit the literal value of an automation point by right clicking on it. Unfortunately you can not change the location of the value here. Unfortunate, as that would be extremely useful.

## Missing

The only way to add automation to a currently existing automation is to create a VCA, make your secondary automation, then merge it. Some other DAWs allow you to directly add/subtract automation as you write it, which is an exceptionally useful feature.

# Modes

![Just the basics, ma'am](/assets/StudioEvaluatione/modes.png)

Studio One only comes with the basic automation modes: Off, Read, Touch, Latch and Write.

Read mode is automatically turned on when automation is written, which is nice compared to some DAWs that don't do that. Touch _only_ writes automation when an assigned controller is touched, which requires a touch-sensitive controller for optimum usefulness. Latch turns on automation when a controller is touched and then doesn't turn it off, meaning it will continue to write the current value of the controller until you stop. Write is simply an 'overwrite' mode.

Other DAWs have all sorts of features for adjusting how and when automation is written. S1 only contains what I've listed here and nothing else. DAW automation has really advanced in the last 10 years with all sorts of excellent ways to handle complex workflows for film, large audio projects and crazy electronic production. Studio One is about a decade in the past here.

# Bonus: Instrument Part Automation

![No clue man.](/assets/StudioEvaluatione/InstrumentPartAutomation.png)

So apparently S1 has a feature called 'Instrument Part Automation'. How exactly this is helpful, I've yet to figure out.

I actually can't figure out why this is useful because nowhere else in the manual does the term 'Instrument Part' appear. I don't know what an instrument part is or why having automation part of it is important.

S1 automatically attaches automation to audio regions, so that's not it... I think. Instrument tracks have all the same modes as audio tracks, so there's nothing special there either. My best guess is that this simply allows you to edit automation for an instrument in the 'editor' for the midi region. 

I'm actually really confused by this, and once again the Studio One fails to actually explain this.

# Double Bonus: Automation Tracks

![Somewhat useful, sure.](/assets/StudioEvaluatione/AutomationTracks.png)

Automation tracks are simply tracks that only contain automation. They can have automation for basically any controls in the mixer which is largely where they become useful.

Things like busses and VCAs don't display in the main view, so they don't have an obvious way of editing automation. Automation tracks allow you to essentially put those 'mixer-only' entities in to your main view.

They are also quite useful for decontextualizing large 'song  wide' changes from the instruments themselves. If you have a crescendo that affects a number of tracks, you could easily group all the automation specific to that crescendo in to an automation track. Since it can contain automation from all over, you can have a single track that contains the automation for a single 'idea'. Very useful.

# Conclusion

## Good

* Editing automation

    The automation editing tools are excellent, barring the inability to enter specific frequencies on the periodic drawing options. The transform tool is amazing.

* Automation tracks

    I've found automation tracks to be particularly useful. I really enjoy the idea of thinking of automation as a function of the arrangement rather than as a function of the instrument. Automation tracks allow you to work with that mindset.

## Bad

* Moving automation

    Automation moves with regions (if you have "automation follows events turned on), but if you overlap regions then the overlapped automation is __deleted__. Yes, deleted. You don't get it back by un-overlapping the parts, you have to undo. There is no way to cross-fade automation or 'keep' automation. This applies to the 'instrument part automation', which implies to me that the feature doesn't really store automation in instrument 'parts'... but I still dont know what an instrument part even is anyway!

    There's no way to move an automation point to exactly where you want, and when you do move it, the current value is displayed in whatever your grid's timebase is. Not exactly what I want when I turn the grid off!

* Automation density

    Apparently, there's no way to control automation density in Studio One. Complete bummer. I can't figure out how to change how often automation points are written or how to thin out points that already exist.

    Really big issue IMO. There are times where you need very fine-grained control of your automation, and times where you want to thin out things to reduce CPU load. No can do here.

    If it's possible, it's not in the manual.

* Automation point display

    As far as I can tell, automation point positions are always displayed in the grid timebase, even if the grid is turned off. It should display in the current transport timebase.

    There is also no way to manually enter a value for the time of the automation point.

* No punch, no preview.

    There's no way to punch in automation unless you have a touch-sensitive controller. There's no preview feature to allow you to punch in automation and only commit it when approved.

* No beziers, no splines.

    There's the parabola shape, but I can't figure out how to change the slope if necessary. You can finagle what resembles the curve you want by using the shape tools, but it's painful.

    Once again, stuck in the DAW features of the last decade.

* Missing 'extra modes'

    Trim to... cross-over... add, etc.. Lots of missing modes of automation that are _extremely_ useful in some contexts. Nuendo and Sequoia really have this down.

    Also worth mentioning that there's no 'Trim current automation' mode, which essentially modulates your current automation by the incoming data. This is probably the most common missing feature in S1.

## Summary

Mostly, Studio One has the bare basic automation features that you'd expect from a DAW back in 1998. The transform tool is useful (but not unique), and that's about it.

This is not really where S1 shines at all. VCA Faders really help out for day to day work, but when you really want to dig in to more advanced automation workflows, S1 is a total disappointment.

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
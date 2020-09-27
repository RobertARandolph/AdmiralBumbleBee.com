---
layout: post
title: "Mixbus 5 32c - Reviewed!"
comments: true
date:   2018-08-14_11:31:06 
categories: music
tags: ['Mixbus', 'DAW', 'Review']
image: /assets/Mixbus/mb5/MB5.png
description: Mixbus 5 overview and review
---

{::nomarkdown}
<img src="/assets/Mixbus/mb5/MB5.png" alt="Mixbus 5 32c is here!">
<div class="image-caption">Mixbus 5 32c is here!</div>
{:/nomarkdown}

Mixbus **FIVE** 32c is alive! (and I'm no artist, but I tried)

I'm interrupting the [Bitwig series](/tags/#Bitwig) because I think it's necessary, and because I have the scoop.

Enough intro rubbish. On with it!

<!--more-->



# Contents
{:.no_toc}
* TOC
{:toc}

# The Video

<iframe width="800" height="450" src="https://www.youtube.com/embed/ON7nP3Kk350" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

Everything in this article is in the video, and vice versa.

# The Big Stuff

## Plugin Tagging

{::nomarkdown}
<img src="/assets/Mixbus/mb5/Tagging.png" alt="Plugin Tagging">
<div class="image-caption">Plugin Tagging</div>
{:/nomarkdown}

This is the big feature along with [Plugin Tags](#plugin-tags) for a lot of people I think.

You can now add tags to plugins to make searching easier. The [Plugin Manager](#plugin-manager) has also been improved to facilitate this.

Adding tags is easy, you select the plugin and add the tags separate by spaces. Unfortunately you can't tag multiple things at once./legacy

And to kick this feature off...

## Plugin Tags

{::nomarkdown}
<video autoplay loop muted class="gifvid">
<source src="/assets/Mixbus/mb5/Tags.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
<div class="video-caption">Pre-tagged plugins (I had to hide the names, sorry)</div>
{:/nomarkdown}

There's over 3,000 tags ready. It's fairly likely that most of (or all?) of your plugins will be tagged and ready to go.

This is a huge feature, and I'm sure it was a lot of work. Plugin tagging is a feature that is nice to use, but it's tedious to setup.

Harrison has done the lion's share of the work for you already. Really cool thing to add. 

## Mixer Store/Recall

{::nomarkdown}
<img src="/assets/Mixbus/mb5/StoreRecall.png" alt="Store and Recall">
<div class="image-caption">Store and Recall</div>
{:/nomarkdown}

Often it's beneficial to allow yourself what I like to call, "the freedom of error." This means that when you aren't afraid of making irreversible changes, you can explore and find solutions you may have never found otherwise.

This also allows you to create "templates" of sort to copy/past between projects.

The real beauty of this is that you don't need to restore from track to track. When you recall you can select what track data in the stored data gets moved to your project. Want to move settings from a "Kick" project to a "Cajon" in another project? Just assign away. Easy to do.

It's not _all_ roses though. Sends don't get saved, and sometimes if you have a send present in the stored data then it will just crash Mixbus. Not very nice :( I've been told that it will take quite a bit of work to fix this issue, but I hope they invest the time.

(Note, don't confuse this with "Mixer Store", which is a less good version of this feature.)

## Track Organizer

{::nomarkdown}
<img src="/assets/Mixbus/mb5/TrackOrganizer.png" alt="Track Organizer">
<div class="image-caption">Track Organizer</div>
{:/nomarkdown}

Track Organizer is a neat little script that lets you assign tracks to groups, colour them, add comments and rename them easily.

It's nicer than trying to do this in the Editor view.

There's a preset set of groups available, but you can open up the script editor and add your own. Find the like that looks like this:

`local pl = {["----"]   = "", ["Drums"] = "Drums", ["Bass"] = "Bass", ["Guitars"] = "Guitars", ["Keys"] = "Keys", ["Strings"] = "Strings", ["Vox"] = "Vox"`

Now you can add your own groups in the format of `["Group"] = "Group"`. There needs to be commas between each set, and the last one does not get a comma.

## Mixer Reset

{::nomarkdown}
<img src="/assets/Mixbus/mb5/ResetMixer.png" alt="Reset Mixer">
<div class="image-caption">Reset Mixer</div>
{:/nomarkdown}

Yet another script is one that will reset your mixer for you.

You can select which things are reset, and by default it does not remove your plugins; it only bypasses them. The plugin bypass on reset is something that I quite enjoy. I've not seen that in any other product and it's brilliant.

## Grid and Snap

{::nomarkdown}
<img src="/assets/Mixbus/mb5/SnapAndGrid.png" alt="Snap and Grid changes">
<div class="image-caption">Snap and Grid changes</div>
{:/nomarkdown}

Snap has been improved!

For instance if you wanted to snap to snap to Markers AND the grid before, you could not. Now you can set which things are 'snappable' in preferences.

The snap settings are much tidier now, as you can see in the menu above. No more going through a giant menu trying to figure out which triplet setting you need.

The overall experience with snapping is more pleasant.

## MIDI Velocity!

{::nomarkdown}
<img src="/assets/Mixbus/mb5/NoteVelo.png" alt="Note Velocity Improvement">
<div class="image-caption">Note Velocity Improvement</div>
{:/nomarkdown}

Mixbus is not good at MIDI. It's really not, but at least you can now see the velocity of the current note!

The velocity is drawn as a horizontal bar on top of the note, and... that's it.

Not a big deal to some people, but in Mixbus world this is a pretty big leap in MIDI technology. (That is a bit sad, I know).

## Control surface support

{::nomarkdown}
<img src="/assets/Mixbus/mb5/ControlSurface.png" alt="Control Surface Support">
<div class="image-caption">Control Surface Support</div>
{:/nomarkdown}

A bunch of control surfaces are not supported. I was unable to test these at all, so best of luck.

It's nice to see them supporting competitor's products though.

## WAY faster VST Scanning

{::nomarkdown}
<video autoplay loop muted class="gifvid">
<source src="/assets/Mixbus/mb5/VSTScan.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
<div class="video-caption">VST Scanning</div>
{:/nomarkdown}

VSTs scan **SIGNIFICANTLY** faster on my machine now. A hung VST no longer ruins your Mixbus experience either. Mixbus will pop up a window asking if you want to wait on it.

This was a sore spot for me and it's nice to see it improved.

**EDIT** I did test this on my system multiple times, but I've been told there was no direct improvements for this. Maybe just some luck?

Mixbus 4.3 should have had the pop-up too, but I don't get it when I test Mixbus 4.3.

## LegacyQ

{::nomarkdown}
<img src="/assets/Mixbus/mb5/LegacyQ.png" alt="LegacyQ">
<div class="image-caption">LegacyQ</div>
{:/nomarkdown}

**FREE** with the upgrade from MB4 32c to MB5 32c.

This is the plugin version of the Series 10 digital equalizer that works fully with control surfaces. The GUI looks quite nice, but how does it fair?

The most important thing is the sound. I can't say if it sounds like the original Series 10 EQ, but I can say that it doesn't seem to be anything special.

It operates basically like any digital EQ except with some limitations. Each band has a specific range that it can be moved between. Band 1 is 40-800hz, band 2 is 100-2,000hz, band 3 is 250-6,000hz, band 4 500-10,000hz, band 5 is 800-15,000hz. This limitation is nonsense. Maybe the original EQ worked like that, but come on.

Bands A and B are only high/low-pass or bells. They allow steeper slopes than bands 1-5 in the high/low-pass modes.

The analyzer is similar to [x42 EQ](https://x42-plugins.com/x42/x42-eq) in that it is both fast and it has high resolution in the low bands. It's a nice touch.

There's a "search" band that turns the current band in to a bandpass filter with boost capabilities. It makes the "search and destroy" workflow a bit easier.

The bell bands can get very, very narrow. That is great, but it's nothing that you can't get with products from other makers. (Though, if you don't have anything yet, it's very welcome)

The GUI is a bit of a mess.

* The Analyzer only shows you about 18db at a time, and you have to manually tune it. This means constantly screwing around with it only to just see the peaks (and often not see the whole picture if you want it)
* The sides are shaded which makes the A and B bands sometimes look disabled at a glance.
* You can move the graphical band nodes outside of the screen. Once they're gone then you need to use the knobs or resize the graph area to get them back.
* The knob indicators are difficult to read.
* Fine tune is jumpy
* Typing in values doesn't work at all for me.

It's a great addition for people that don't have a bunch of VST plugins already, but some of the current bugs make it annoying to use. When those get sorted then I think it'll add some functional value to the Mixbus 32c package for new users.

# The Small Stuff

## Floating Transport

{::nomarkdown}
<img src="/assets/Mixbus/mb5/FloatingTransport.png" alt="Floating Transport">
<div class="image-caption">Floating Transport</div>
{:/nomarkdown}

A floating transport that is _resizable_. If you want a big transport, or want to throw it on another window, or have a touch screen then you'll love this 'small' change.

## Scripts

{::nomarkdown}
<img src="/assets/Mixbus/mb5/MoreScripts.png" alt="More Scripts">
<div class="image-caption">More Scripts</div>
{:/nomarkdown}

There's more scripts added than was mentioned, but nothing particularly useful. Just some small examples.

## CPU Profile

{::nomarkdown}
<img src="/assets/Mixbus/mb5/CPU.png" alt="CPU Profile">
<div class="image-caption">CPU Profile</div>
{:/nomarkdown}

This might be my personal favorite feature in Mixbus 5. Plugins now can show a CPU usage profile, _and it's done correctly_.

Let me explain:

DAW's process everything in chunks. That chunk is what you setup as a 'buffer size' in Mixbus. Everything has to be done in that number of samples.

So if you are at 44,100hz sample rate and your buffer is 128 samples, the DAW has 2.9 milliseconds (128 / (441000 / 1000)) to process everything. That's not very much time!

Most DAWs report CPU in terms of 'how much time is left'. So if it took 2ms to process the project and it has 2.9ms to complete the whole buffer then it will report 69% CPU usage (2 / 2.9). It doesn't _actually care_ about how much CPU is being used. The DAW only cares about how much time it has.

DAWs don't use 'real' CPU usage because it's complex to do, and because it doesn't matter how fast the computer can process audio, it only matters if the data arrives in time. So if your DAW is set to a buffer equating 1ms, a processor that can do 100 calculations in 1ms is more valuable than a processor that can do only 10 in 1ms, but 500 in 2ms. The DAW needs the data _in time_ so it only cares about the latency.

The CPU Profile section reports to you how long a plugin took to process everything. The min, max, average time and std deviation.

On multiple core systems this is muddied a bit, but it gives you a much clearer and more accurate view of the performance that isn't reliant on buffer size.

## A-Comp improved and A-Expander added

{::nomarkdown}
<img src="/assets/Mixbus/mb5/A-Comp.png" alt="A-things improved">
<div class="image-caption">A-things improved</div>
{:/nomarkdown}

No more zippering weird noise when adjusting gain of A-Compressor and A-Expander! Wooooo.

A-Compressor has a cool new inline display too.

A-Comp also sounds better or I'm crazy. Maybe my tastes have changed, but it seems to sound better. Nothing about this in the official release notes though.

There is also now an A-Expander, which works decently.

## Mac Info Bar

{::nomarkdown}
<img src="/assets/Mixbus/mb5/TopBar.png" alt="Top Bar">
<div class="image-caption">Top Bar</div>
{:/nomarkdown}

The info bar is on top on macOS!!!!!!!!!!!!!!!!!!!!!!!!!!!!

Thank you. It was awful on the bottom.

## Add Track in Mixer

{::nomarkdown}
<img src="/assets/Mixbus/mb5/AddTrack.png" alt="Add Track in the Mixer">
<div class="image-caption">Add Track in the Mixer</div>
{:/nomarkdown}

You can now easily add tracks when viewing the mixer. Small looking improvement, but a potentially fantastic workflow improvement for many users.

## Thicker Pane Separators

{::nomarkdown}
<img src="/assets/Mixbus/mb5/Pane.png" alt="Feel the pane">
<div class="image-caption">Feel the pane</div>
{:/nomarkdown}

Adjusting panes in Mixbus has always been difficult. You had to wiggle your cursor just right before it would 'grab' and you'd be able to click and move it.

The bars separating panes have been increased in size. A small improvement, but something that I know will lessen my frustration during sessions just a tiny bit. Every bit counts when working with musicians.

## Plugin Manager

{::nomarkdown}
<img src="/assets/Mixbus/mb5/PluginSelector.png" alt="Plugin Selector">
<div class="image-caption">Plugin Manager</div>
{:/nomarkdown}

The plugin manager has been changed and it's way better. The 'Show Only' boxes are radio buttons now instead of a menu, and there's more options.

You can select by author (with a prefilled menu), I/O and format. The [tagging support](#plugin-tagging) is there as mentioned before.

I already thought that Mixbus had one of the better plugin selectors, but it's much improved now.

## Marker Delta

{::nomarkdown}
<img src="/assets/Mixbus/mb5/MarkerDelta.png" alt="Marker to Cursor delta">
<div class="image-caption">Marker to Cursor delta</div>
{:/nomarkdown}

Mixbus 4.3 was able to show the time between the play cursor and the mouse cursor, but Mixbus 5 can now show the distance between the start marker and the play cursor.

It's quite an enhancement for people doing film work, or anyone doing post-production.

## VST Touch Automation

VST Plugins now trigger touch automation.

## MIDI Patchfiles

350+ MIDI Patch files are included now. So you can have proper lists of patches when you use external synths and program changes.

The total is now up to 448 synths supported. That's **A LOT**.

## VST Resizing

VSTs can now be resized.... but very poorly. This feature is totally broken.

VSTs can be made larger, but not smaller. Some VSTs can't be made smaller no matter what and will blow up in size when you attempt to resize them.

This needs fixing ASAP.

# The Missing Stuff

## MIDI

MIDI still sucks. You wouldn't want to do a full MIDI Production in Mixbus if you had a choice. Mixbus _does_ support MIDI, but the full experience has improved very little.

## Stretching

Time stretching is still unsatisfactory. The [rubberband stretching library](https://breakfastquay.com/rubberband/) is just... bad. It doesn't sound very good.

There's also no marker-based time stretching so that you don't need to chop up your audio. I'm not sure what the Harrison Consoles team are up to in this regard, but it sorely needs to be improved.

I'm not even suggesting this for music folks (many of which do use this functionality), but for film post, dialogue work, scoring etc... being able to fit sounds in to a specific time is a necessary workflow devil. Mixbus doesn't hold a candle to its competitors in this area.

## No Comping still

No swipe-comping or similar workflows yet.

## I still hate the VCAs

Ardour does VCAs in an awesome way. The Mixbus team has chosen to change how VCAs are done to replicate how it works on their hardware consoles.

This is a completely artificial limitation! We're using a digital product. It's great to emulate analog systems where it benefits the workflow, but changing a working system to emulate an older less-flexible way of working is silly.

I [already complained about this once]({% post_url 2017-09-18-Mixbus-32c-The-Mixer %}#vcas) so I'll spare you here.

# Is it worth it?

{::nomarkdown}
<img src="/assets/Mixbus/mb5/79.png" alt="$79">
<div class="image-caption">$69</div>
{:/nomarkdown}

The upgrade is $79. Is it worth it?

If you value your time at more than $10 an hour, then it'll probably pay for itself in a week or two of using plugins.

There isn't _that_ much new compared to what spoiled users have come to expect from big DAW companies, but Harrison has consistently proven themselves with large **free** follow-up updates.

I think that this update meets the mark for value as it is, but if history is any indicator then it will be more than worth it in the coming months. Mixbus 5 is one of those updates that doesn't earn your money because the devs are throwing bling at you, but because they are clearly listening to user feedback and making small changes (some of which are substantial work) in response to feedback.

If you don't have a good GUI-based EQ, then it's most certainly worth it (especially when LegacyQ's bugs are fixed).

If you want to show that responding to user feedback is a value-generating mechanism for the developers, then you should support it.

If you're a _new_ user then very little of this will be exciting. It's just one of those updates. I suspect that many existing users will find a feature or two that touches them, but new users are going to wonder "what's the fuss?" and you'd be right. There is no fuss if you haven't wanted any of these things to improve.

There's companies out there that just throw feature after unfinished feature out the door hoping to lure you in with some "new shiny". Then there's the companies that put man-hours in to things that people are asking for. [Bitwig](http://bitwig.com) is becoming the latter. [Image Line](https://www.image-line.com/flstudio/) has always been the latter. Harrison has usually been the latter, but this time it's almost 100% in that direction in a major update.

So it's up to you if you want to support that.

# Support Me!

This post took 17 hours to research, screenshot, write and edit. If you appreciate the information presented then <a href="/DonateNow/">please consider joining patreon or donating!</a>







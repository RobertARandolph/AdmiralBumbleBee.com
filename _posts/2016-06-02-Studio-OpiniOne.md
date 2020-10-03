---
layout: ['post', 'reader']
title: Studio One evaluation Pt. 2
comments: true
date:   2016-06-02_10:31:55 
categories: music
tags: ['DAW', 'Studio One']
---

![Mastering, but I'm not too sure here](/assets/StudioEvaluatione/SongMode.png)

Stage 3 of evaluation. What have we learned so far?

In this post I will go over some of the more unique, or less common, features in Studio One 3.2.2. There are some neat features at least, but there are some that I find quite questionable.

<!--more-->

# Contents
{:.no_toc}
* TOC
{:toc}

# Scratchpad

![Not there.](/assets/StudioEvaluatione/Scratchpad.png)

Let's be clear, I am spoiled by [Chunks in Digital Performer](https://www.youtube.com/watch?v=iAPbm2kQ3Xo). They basically modularize the entire process of creating music. Every sequence is a 'thing' you can freely move around, Instruments and effects can be global to a bunch of sequences, and you can freely export/import these objects anywhere.

Studio One's Scratch Pad is a somewhat simple method of allowing a musician to try out an idea.

Basically what happens is a 'mini project' opens to the right of the sequencer which allows you to do whatever you want without affecting your current project. This seems like a cool idea, but in my experience it's basically useless after you've created more than a single track.

When I'm working, I have all sorts of tracks going: drums, guitars, synths, noise things, basses, percussion, vocals, etc... If I want to try out an idea, it's in the context of what I'm already working on. The scratch pad in S1 decontextualizes your idea from your project. Yes you can copy over tracks and arranger sections, but that's a silly amount of work for something that is supposed to be a 'quick try something out' feature.

I've yet to find a single time where I wanted to try an idea outside the context of what I'm already doing. As that's the case, when I want to try an idea, I simply use S1's track layers to give me a fresh canvas for the instrument that I want to try out ideas on. The benefit of this is that you can also comp in your ideas using the comp features of S1, which are quite good.

Yes, you can easily drop your current project or section (using the arranger track) to the scratch pad, but that seems to be unnecessary to me. You can simply just use layers, or if you're on OS X you can use the 'versions' feature of your OS to maintain multiple versions of the track.

It is quite confusing as well that the time-signature control in the transport always controls your main project, but the tempo control works on what is focused (either the main or scratch pad). I found this extremely confusing when I made some attempts to use the decontextualized nature of the scratchpad to try out ideas in a new tempo or time signature.

Overall I really do not like this feature. Perhaps I'll warm up to it, but for now it seems redundant to me.

# Mix FX

![Not so sure about Mix FX yet.](/assets/StudioEvaluatione/MixFX.png)

Mix FX is a new plug-in format in Studio One that allows a plug-in basically to take input from multiple tracks simultaneously with ease, and also individually process those channels as well.

Basically the idea is to allow for creation of effects that allow a developer to emulate the behaviour of analog hardware with things such as crosstalk between channels.

Mix FX can only be used on a bus including your master channel. It is quite possible to have different settings on your drum bus, synth bus, guitar bus and then any combinations of those busses plus your master.

What do I think about Mix FX? I don't really like it much yet. There's only the Console Shaper included with S1v3, and I've tried it on all sorts of mixes and sources. It just doesn't do it for me. I'm __quite__ happy to have left behind the days of crosstalk on every channel and noise everywhere. However, some folks really like the Console Shaper.

It's a very neat concept, but it will only be proven over time with the involvement of third-party developers. It has been said that [Softube](http://www.softube.com/) and [Steven Slate](http://www.slatedigital.com/) are working on Mix FX for Studio One. I hope that their offerings bring something awesome to the table. It is really a cool concept that just needs superlative implementation to shine.

# VCA Faders?

![Every DAW needs VCAs, and S1 provides them.](/assets/StudioEvaluatione/VCA.png)

Every DAW should have VCA Faders, but they don't. Why do you need this?

When you use a VCA the faders themselves are controlled. This means that any post-fader effects or _sends_ are affected when you change your VCA group level.

When you use a group bus, all of your sends and post-fader effects stay the same level. So if you drop your group bus down -50db, then your sends are still at the same level and everything sounds out-of-whack. Since VCA's change the faders themselves, then your sends will behave happily with that -50db cut.

Another benefit is that VCAs allow you to easily separate out layer of automation. Especially when you can layer VCAs and merge VCA automation, as mentioned below. 

Coalesce automation in other DAWs allows you to mix the VCA fader changes with the automation on the tracks that the VCA is controlling. This lets you 'write' your changes and start with a blank slate on your VCA. In Studio One this concept is called 'Merge Automation' and it works great. In a previous post I was unable to find this option, and here it is.

You can layer VCAs as well, which means that you can have VCAs controlling VCAs. Tree-like branches of automation are possible, which may sound complex, but it allows you very clean control over tracks with great speed.

Imagine that you have a bunch of bass synths in your song with all of their own crazy automations. As the chorus comes up, you really want to bring it. Add a VCA to control all of your bass tracks and you can easily bring up your bass tracks without messing up any sensitive post-fader effects or sends. Everything will sound 'normal'. If you use a group bus with automation, then things will sound out of whack since all of your post-fader effects/sends will be still sent the same volume.


# Arranger Track

![No sir, I don't like it](/assets/StudioEvaluatione/Arranger.png)

The Arranger Track in S1 basically allows you to mark a section of time as a 'part'. You can then freely drag parts around without having to do a dance of selecting time and tracks.

It's useful, I guess... sorta.

I have 2 main issues with the Arranger Track:

1. You can't assign tracks or regions to a section.
    Yes, my guitar track may be 'in the intro', but composition-wise that's just an intro to the verse. I don't want to copy that guitar track around if I want to re-use the intro later. I found that this happens a lot. Many times where there's a part that crosses in to the 'time of a section' and will subsequently be moved around with that section. I don't want that. I want a 'section' to consist of musical parts, and musical parts don't always start/end at the same time as related parts. Studio One insists that they should.

2. Sections can't overlap.
    This goes back to issue 1 again. When you have transitions between parts, you have to either decouple them from the arranger section or make them part of only 1 section. This means that if my Verse 1 has a transition in to Chorus 1, I have to either decide that it's always part of Verse 1, Chorus 1 or neither. If I decide that it is part of Verse 1, then as it is a transition, it will have musical content that is actually part of Chorus 1 as well. Vice versa if I decide that it's part of Chorus 1. Confusing? Yeah, it is. Essentially you can't mush sections together. Sections end when another begins. That's not how music works most of the time.

If you were able to assign regions or tracks to a section, and able to overlap sections, then it would be trivial to have overlapping sections, transitions and complex arrangements. Perhaps it would be even better if you could arrange scratch-pads in an overlapping way (as if they were regions in your project.)

I will mention (once again) that the chunks feature and song window in [Digital Performer](http://motu.com/products/software/dp) make doing complex arrangements like this very simple. You can extract/insert parts as sequences then arrange them overlapping as much as you want in the Song window. Here is what the song window looks like in DP, note that each of those blocks is its own sequence (project) and they can all access effects/instruments that are global to all of them if needed.

![This is useful!](/assets/StudioEvaluatione/DPSong.png) 

[Tracktion](https://www.tracktion.com/) also has a feature called 'edit clips' which allows you to treat an entire project as a region in your project. This allows you to overlap sections and create whatever arrangement you want, while still retaining the individuality of parts. [Reaper](http://www.reaper.fm/) also has a similar feature.

Comparatively, Studio One's arranger track appears to be only useful for the most basic of 'block based music'.

# Project Mode

![Mastering, but I'm not too sure here](/assets/StudioEvaluatione/SongMode.png)

Studio One supports what it calls 'Projects'. A project is a group of 'songs', with a special view for the mastering stage.

The project window has a lot of useful things for preparing your media for publishing.

* A larger variety of file types can be imported, along with S1 songs directly(!). If you use a Song, then it will alert you to any changes made, along with offering an option for manually updating the rendered files to the latest Song changes.
* Large metering with K-meter and peak/rms options, along with a phase meter. A large clipping LED is present as well
* The spectrum meter plugin is integrated, along with its Waterfall and Sonogram modes.
* Per-track inserts
* Master section with pre-fader and post-fader sections that are clearly separated out.
* Labelling for track name, artist name and clear labels for track length.
* Meta-info can be edited easily for each track and the album.
* Clearly labeled area for pauses after the track (for cd media)
* Excellent sequencing area where you can arrange your tracks order, spacing, crossfade and do basic editing.
* Clear indicator of 'time left' for CD releases.
* Publishing options for digital releases and physical releases. 

Over all this is an extremely useful feature if you work on album-based projects.

I did use this quite a bit to get a feel for it, however I did not do an entire album with it. As far as I can see this is competently implemented and an excellent addition to S1.


# Channel Editor 

![Extremely cool, and fun.](/assets/StudioEvaluatione/ChannelEditor.png)

This is so cool. It's pretty much the 'killer feature' of Studio One 3 to me. It can be accessed by clicking that 'knob' under the record button in the mixer, or clicking the little space invaders looking guy in the upper left of an effects window.

You can run effects AND instruments in parallel using various splitters. The splitters can simply have multiple outputs for parallel audio/midi paths or split based on channel or frequency.

Being able to easily run parallel compression on your busses, especially the master bus, is amazing. Being able to easily run parallel filters on synths makes for some excellent sounds. There's an endless number of great things you can do.

The only thing missing from this is having modulator devices that allow you to insert modulators in to the signal path.If Presonus adds that, then this is easily a feature to switch to S1 for alone.

Undo does not work in this window. It sucks. It sucks a lot. It really, really sucks.

# Multi-Instruments

![Instruments Too!](/assets/StudioEvaluatione/MultiInstrument.png)

This feature also extends to having instruments run in parallel with the same routing capabilities. You can easily create multi-timbral patches using multiple synths by adjusting the instrument bars above the keyboard. Note-FX can be split to go to multi-instruments with complex routings. All of the effects routings you can do in the normal channel editor are available as well.

My main issue with the multi-instrument function is that it's a bit weird to create one. There's 2 options for creating one and they both require you to drag&drop from the instrument browser to some unintuitive area. Once you do that you are given a dialog to combine or create a separate instrument. It would be much nicer if you could simply just create a multi-instrument with a keypress or menu item.

Undo doesn't work here either. Awful. Frustrating. You can do some really complex cool things that you can really screw up and you have no way to back out of your mistake.

Edit: June 5th.

I just noticed that you can drag a 'Multi-Instrument' from the browser Instruments window. That's better.

# Macro Controls

![I never really got in to these, but they are useful.](/assets/StudioEvaluatione/Macro.png)

Macro controls are part of the Channel Editor. They allow you to assign a single knob, button or axis to any number of controls along with scaling.

When you have a large effects or instrument patch, there are often a lot of similar controls that you want to change at a single time, such as the 'over all reverb level' when you have 5 different reverbs in a huge patch. All of those reverb's mix settings can be assigned to a single knob for quick far-reaching control.

![Editing with style](/assets/StudioEvaluatione/MacroEditor.png)

The editor for the macro window is well done and it allows scaling of inputs per parameter that is assigned. Multiple targets can be added at once with drag and drop or with a button-click.

The biggest issue with the Macro Controls is that __*UNDO DOES NOT WORK*__. That's right. You can't undo or redo things you do in this window. It sucks.

# In-sequencer audio-bend

![Not super unique, but super useful.](/assets/StudioEvaluatione/warp.gif)

I mentioned this in another post, but it needs to be mentioned again. Being able to 'Audio Bend' right in the sequencer is extremely useful. Other DAWs (I'm looking at you Cubase and Digital Performer!) require an awkward use of 'quantize', which really sucks if just want to quickly grab a note and toss it in place.

The audio bend feature also can work across group tracks, in phase, so it is indispensable for editing drums or other multi-tracked instruments. This feature is one of my absolute favorite things in S1 (and Pro Tools). I use it frequently for quick fixes and everytime I do I think about how relatively painful the same process is in Digital Performer.

# Presonus Exchange

![Very useful!](/assets/StudioEvaluatione/PresonusExchange.png)

Presonus Exchange is a way that you can quickly get content from other users. Macros, Extensions (think plugins for workflow), FX Chains, Grooves, Pitch Names (for editing drums in the midi editor), Presets and Sound sets.

The macro section I found particularly useful, however all of the sections appear to be lacking content.

I checked to see how to upload your own things to the exchange and quickly realized why there's so little content. It's not easy or straightforward. There is also basically no reward for uploading things.

I welcome this feature as it makes browsing google for things less of an issue. Integrating DAW extensions in to the DAW itself is a great idea. Hopefully they add some sort of reward system for people to upload their creations. Otherwise it really doesn't seem worth the frustration using their web-based exchange site.

You know, just thinking about it... why isn't uploading implemented in to the Presonus Exchange in Studio One itself? That seems like quite a failure in design to me.

 
# Soundcloud integration

![Useful, but not for me](/assets/StudioEvaluatione/SoundCloud.png)

I don't like soundcloud. The auto-play on their browser implementation is the most annoying thing that I've experienced on a music website. They also don't allow you to access music over your upload limit unless you subscribe, which sucks since they've changed the upload limits over time!

That all said, the soundcloud integration in S1 is very good. You can publish directly to soundcloud, browse the tracks of the people you follow, grab your own tracks, listen to streams (and it's routed through your master track so you can apply effects to the streams!) and browse your favorites.

For me I find none of these things useful. However, if you are active on soundcloud and enjoy doing remixes or listening to streams then this is really cool. I can imagine that remixers/samplers will really enjoy this functionality a lot.

I hope that Presonus integrates support for other music services as they become popular.

# Support me!

If you appreciate the information presented then <a href="/DonateNow/">please consider joining patreon or donating!</a>





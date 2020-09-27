---
layout: post
title: Mixbus Audio Editing
comments: true
date:   2017-10-18_09:13:56 
categories: music
tags: ['Mixbus', 'DAW']
image: /assets/Mixbus/Editing/AudioEditing.png
description: Audio editing in Mixbus 
---

{::nomarkdown}
  <img src="/assets/Mixbus/Editing/AudioEditing.png" alt="Audio Editing">
  <div class="image-caption">Audio Editing</div>
{:/nomarkdown}

In this penultimate post regarding Mixbus, I'm going to cover some of the more useful or unique features of Audio editing.

Mixbus covers most of the basic editing functions that you'd expect in a DAW. Here I'm going to cover the more useful or unusual features.

<!--more-->

# Contents
{:.no_toc}
* TOC
{:toc}

# Audio

## Zooming

{::nomarkdown}
  <img src="/assets/Mixbus/Editing/Zoom.png" alt="Zoom">
  <div class="image-caption">Zoom</div>
{:/nomarkdown}

Probably one of the most important features for audio editing is the ability to easily zoom in, out and around a project quickly.

Mixbus supports 3 zooming features that I feel are critical to editing:

* Zoom to selection - Simply pressing the Z key will zoom to the current tracks and time range. Double click to zoom to selection is also an option.
* Zoom undo ("Toggle zoom state") - switches between your last and most recent zoom state both horizontally and vertically.
* Zoom focus - When using the + and - keys to zoom, the center of that zooming action is easily set in Mixbus. You can set the zoom center to: left of screen, right of screen, center of screen, playhead, mouse and edit point. There's a command to cycle the zoom command.

Common zoom features like zoom in/out are available, however these 3 functions listed I feel are the core to efficient audio editing. Having done probably millions of edits myself (working on large multitracked drum sample libraries) and watched other very taleneted audio editor work, I feel fairly confident in this claim.

Mixbus has these core basics just right.

## Stacked Editing

{::nomarkdown}
  <img src="/assets/Mixbus/Editing/StackedAudio.png" alt="Stacked Editing">
  <div class="image-caption">Stacked Editing</div>
{:/nomarkdown}

When you have overlapping regions in other DAWs, it can be a pain to get crossfades and edits just right because the z-order (layer order) of the regions requires a lot of fussing.

In Mixbus you can right-click a track go to "Layers" and selected "Stacked" to use the stacked editing mode. This puts all of your regions in a multi-layer view where the top region has playback priority.

Adjusting the layering of parts is significantly easier, which is particularly helpful when working with things like dialogue and classical music editing.

This stacked editing mode is fairly rare in DAWs and much easier than constantly pressing a shortcut or accessing a menu to adjust z-order.

## Ripple Editing

{::nomarkdown}
  <video autoplay loop muted class="gifvid">
    <source src="/assets/Mixbus/Editing/Ripple.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <div class="video-caption">Ripple Editing</div>
{:/nomarkdown}

Ripple editing is an extremely important feature when working with dialogue or film. Ripple editing makes it so that edits to a region affect regions after it. Moving a region to the right moves everything to the right. Moving a region to the left moves every region to the right of it to the left as well. If you delete a region, everything is pulled to the left by that amount to fill the gap.

Many DAWs have ripple editing, but some still don't, so this is certainly a feature worth highlighting.

## Drag transparency

{::nomarkdown}
  <video autoplay loop muted class="gifvid">
    <source src="/assets/Mixbus/Editing/Transparent.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <div class="video-caption">Transparency</div>
{:/nomarkdown}

Aligning regions is a very common editing action. Often when editing you need to align the data inside a region with the data inside another region. With DAWs that have opaque regions this is more trial and error than should be necessary.

Mixbus has a feature that causes a dragged region to become translucent so that you can see both the contents of the dragged region and the region below it. This makes editing overdubs a breeze, along with the following feature.

Regions can also be made transparent at will, which allows the transparent region to be 'audibly transparent' at the point of the overlap. (option is under the "gain" menu in 4.2 for some reason).

## Playhead/Mouse edit point

{::nomarkdown}
  <img src="/assets/Mixbus/Editing/PlayheadMouse.png" alt="Playhead/Mouse">
  <div class="image-caption">Playhead or Mouse target</div>
{:/nomarkdown}

I love editing shortcuts like "Trim start at edit point", "Trim end at edit point", "Range start" and "Range finish". 

Pressing a shortcut to act on the current _edit point_ is another key element in fast editing, but what _is_ an edit point?

The mouse or the playhead can be the edit point in Mixbus. The mouse is obvious, but with the non-obvious benefit of not having to click to activate a command. You simply position your cursor and press the corresponding shortcut for an edit point based action.

The playhead mode allows you to take advantage of a number of ways of moving the playhead. Playhead to mouse, Playhead to mark, Playhead to Next Grid, Playhead to next Region Boundary, Move to Next Transient, etc... and many variations. A fluent use of these playhead movement commands allows the users to edit very quickly without the 'point and search' mouse-based workflow.

If you've ever watched a world-class editor in a nashville editing suite (Pro Tools, usually in Keyboard Focus Mode), then you know how incredibly useful this workflow is.

If you haven't, then just imagine tippity-tapping on your keyboard as if you're writing a letter to someone, except each key press represents an editing action or an edit-point movement. Yes, some people can work that fast, and Mixbus's editing capabilities support that.

## Group Editing

{::nomarkdown}
  <video autoplay loop muted class="gifvid">
    <source src="/assets/Mixbus/Good/Grouping.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <div class="video-caption">Grouping</div>
{:/nomarkdown}

Editing multiple tracks at the same time is vital if you work with any sort of multitracked instruments. Most DAWs allow this, but Mixbus has a unique way of creating and managing edit groups.

There's a sidebar on the left of the editor (and on top of the mixer) where you can simple click and drag to create a new group. Turning the group on or off is done by simply clicking that bar.

I think this is a major improvement over other group management systems in other products, however it does not currently support nested groups which is a shame.

I also [discussed groups in Mixbus earlier]({% post_url 2017-08-16-Cool-things-in-Mixbus-Part-1 %}#grouping). Check that out too.

## Fades and Crossfades

{::nomarkdown}
  <img src="/assets/Mixbus/Editing/Fades.png" alt="Fades">
  <div class="image-caption">Fades and Crossfades</div>
{:/nomarkdown}

Mixbus has fades and crossfades like any DAW, however it does make using fades a bit easier than most.

There are fade handles on the top corners of every audio region that create a fade or crossfade without changing the region boundaries. At the bottom corners of every region is a fade handle that creates a fade or crossfade _and_ adjusts the region boundaries.

There's 5 quick fade types (Linear, Constant Power, Symmetric, Slow, Fast), but no fade editor. Rarely is that an issue except on very long fades that are probably better written as automation, or in combination with automation.

There's edit point based commands for setting fade-in/out or creating fades based on time selections, which is fantastic.

Mixbus certainly does not have the powerhouse suite of fade tools present in some other DAWs, but the simplicity and ease of access to the tools it has are excellent.

I also did not measure any distortions or noise present during the fades, which is still an issue in some DAWs in 2017.

## Locations

{::nomarkdown}
  <img src="/assets/Mixbus/Editing/Locations.png" alt="Locations">
  <div class="image-caption">Locations</div>
{:/nomarkdown}

Managing markers is nothing new in the DAW world. While Mixbus's locations window isn't the fanciest, it does get the job done mostly.

I am not mentioning this because it's a particularly good implementation of this feature, however with the various edit point and range based editing commands, utilizing markers and ranges in Mixbus is the key to a great editing experience.

Regions and markers are also utilized in [Mixbus's export function]({% post_url 2017-08-26-Cool-things-in-Mixbus-Part-2 %}#export-features), so this once again becomes a useful window to become familiar with.

## Rhythm Ferret

{::nomarkdown}
  <img src="/assets/Mixbus/Editing/Ferret.png" alt="Rhythm Ferret">
  <div class="image-caption">Rhythm Ferret</div>
{:/nomarkdown}

Rhythm Ferret is a tool that allows you to split regions at specific points.

Rhythm Ferret is extremely useful for splitting up regions for faster editing using some of the edit mode based command already mentioned.

There's a lot of ways Rhythm Ferret can detect what is to be split, so I suggest [checking out the Ardour manual on the subject](http://manual.ardour.org/editing/rhythm-ferret/) to further education yourself.

## Region Gain

{::nomarkdown}
  <video autoplay loop muted class="gifvid">
    <source src="/assets/Mixbus/Good/RangeEditing.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <div class="video-caption">Automatic Range Editing</div>
{:/nomarkdown}

I covered [automatic range editing already]({% post_url 2017-09-01-Cool-things-in-Mixbus-Part-3 %}#automatic-range-editing), but I'm going to mention it here.

This feature allows you to quickly make edits to the volume of portions of regions very quickly without fussing with automation. This data also works before automation as well.

# Criticisms

* Zoom undo ("Toggle zoom state") is only a toggle. Some other DAWs have a full undo stack (even a branched offline undo stack!) for zoom, which is very useful sometimes.

* Despite [Locations](#locations) there is no explicit savable zoom levels or points outside of scripting this function or using the locations feature combined with zoom shortcuts. A minor complaint if one at all.

* Horizontal zoom dropdown menu shows time. Not always useful. It would be helpful if it had some preset lengths matching the main time format.

* The summary view is damn near useless. No matter how many times I remind myself how it works, I never use it correctly. I _know_ how to operate it, but I constantly find myself working against it.

    Here's what I do that doesn't work: clicking in an empty space to jump there, resizing vertically, moving vertically, try to zoom in the summary itself (big projects make it very difficult to use), using region editing commands to edit it (habitually) and accidentally right clicking and _always_ selecting "Reset Summary to Extents"... which I never want.

* Adjusting region layer position (z-order) is not undoable, despite showing up in the undo menu. Possibly a bug.

* Ripple editing sorta works with automation, but moving regions to the left causes unexpected results. Undoing edits that move automation also causes a mess. (v4.2)

* No nested groups for group editing.

* I was able to break groups for editing in a few ways. Turning off groups then moving regions caused issues quite often.

* Scrub mode basically requires turning off "Auto Return". I like auto return on while working usually, but I _never_ want it on while scrubbing. If there is a use for "Auto Return" being active after a scrub command, please let me know.

* Fades and crossfades are not reflected in the drawing of the region. 

* Fade-in and Fade-out portion of crossfades don't have individually editable shapes, which can be important when transitioning between 2 very different parts. An example would be from a whisper to a sudden shout. Usually a linear fade-out on the whisper and a fast ramp on the shout works best.

* No playlist view feature. Playlists must be cycled through. Some other DAWs allow you to view playlists (or their version of playlists) all at once. Layers can be used in this manner, but then you lose the benefit of the playlist feature that basically offers you 'different versions' of things.

* No marker search. Marker search is important for quickly jumping to an area in a dense project without needing to visually search around.

* No range search. This would be very useful to pull up and search for a range, jump to it, then perform some action.

* I could not find any automatic features for creating markers or ranges. Some files come with metadata that may imply markers that you do, or do not want in your project.

* Rhythm ferret does not seem to be able to work on grouped regions very well. You can't  select which region that you want rhythm ferret to work on, assuming you want a single track's data to be used for all of the edits.

    This is a major issue when using rhythm ferret on something like drums. I may wish to split all my drums based on the kick, and possibly just the snare later.

    Rhythm Ferret would be even more useful if there was a way for you to set track priority, so that a single operation could work on just kick and snare but always use kick if there's a snare hit nearby. A similar case would be a chorus where you don't want multiple splits when the chorus does not line up perfectly, but instead you want the splits to primarily follow a certain track.
    
    Other products have these capabilities, so I don't think it's unreasonable to ask for. 

* TimeFX mode works very strangely. It almost always seems to default to shrinking. When using it near butt-spliced boundaries there's a number of strange behaviours.

* No audio warping. Audio warping is the ability to drag a marker inside a region and have it automatically time stretched between nearby markers without adding more regions to the project. It's extremely useful with working with various types of audio.

# Conclusion

I haven't covered everything there is to audio editing in Mixbus, but instead just the things I particularly find nice.

For basic editing, which is probably 95% of what the average user does and 99% of what the advanced user does, Mixbus offers a very nice selection of tools combined with a fantastic shortcut based workflow. The animations for editing actions are also very smooth, which is very noticable.

There are advanced things missing like audio warping, inline pitch editing, spectral editing, fill gaps and other fancy things that other DAWs are popping up with. Most users will get by just fine without these bonuses though.

Personally I really do miss audio warping, especially multitrack audio warping. I also am not very happy with [Rhythm Ferret](#rhythm-ferret) at all as a near-substitute. That is a major workflow killer for me.

# Support Me!

This post took 4 hours to research, photograph, write and edit. If you appreciate the information presented then <a href="/DonateNow/">please consider joining patreon or donating!</a>








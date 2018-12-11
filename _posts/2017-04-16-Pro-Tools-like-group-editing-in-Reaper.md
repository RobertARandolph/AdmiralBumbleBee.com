---
layout: post
title: Pro Tools-like group editing in Reaper
comments: true
date:   2017-04-16_07:34:01 
categories: music
tags: ['DAW', 'Reaper', 'Tutorial', 'Reaper Tips']
---

{::nomarkdown}
  <img src="/assets/Reaper/DPTrackGroup.png" alt="DP's Track Grouping">
  <div class="image-caption">Track Grouping in Digital Performer</div>
{:/nomarkdown}

If you are not familiar with how DAWs like [Pro Tools](http://www.avid.com/pro-tools) and [Digital Performer](http://motu.com/products/software/dp) handle editing multiple tracks at once, let me explain:

* You select some tracks.
* You add them to a group
* Optionally setup _what_ is grouped about them (DP has fantastic options for this)

Now when you make an edit to a single track that is in an _active_ group, the same edit happens to everything else in that group. Groups can be turned on/off at will quite easily.

Reaper does things quite differently, and I find it to be a pain. But there's a workaround (more like an alternate workflow) that I think is better in some case...

<!--more-->

# Contents
{:.no_toc}
* TOC
{:toc}

# Reaper's default workflow

{::nomarkdown}
  <img src="/assets/Reaper/DefaultItemGroup.gif" alt="Default Item Grouping">
  <div class="image-caption">Item Grouping can get confusing</div>
{:/nomarkdown}

In Reaper, media items are grouped for editing instead of tracks. This means that you can have items _across_ tracks or items on the same tracks that do not respond to the same editing actions. This can both be useful and irritating.

Look at the gif above to see how this works. Here's what's happening:

* I first select then edit some items that were grouped. This is all of the drum tracks.
* Then I select then edit some items that exclude the overheads/room mic. 
* Then I select then edit just the four kick/snare mics.

Can you see how this would be confusing? There are multiple groups of items and you can't quickly tell how they are grouped. The groups don't affect the whole performance, but instead just the area of time that the media item exists in.

If you do much multi-track editing this can cause some disasters!

Luckily, due to Reaper's customizability, there is a nice workaround.

# The Reaper workaround: Setup

## Step 1: Setup groups

{::nomarkdown}
  <img src="/assets/Reaper/TrackGroupSetup.png" alt="Track Group Setup">
  <div class="image-caption">Setting up groups</div>
{:/nomarkdown}

The first step is to setup some groups and assign tracks to those groups. I've setup groups 1-9 in a very simple project here. 

**Tip**: To quickly edit group names

* Open the Grouping Matrix
* Uncheck Show Group Details
* Open the 'Track grouping parameters window'
    * Right click on a group name in the Grouping Matrix window
        * **OR**
    * Select a group in the grouping matrix window and press shift-g
* Left click the "Rename..." button at the top next to the Group combo-box.

 
 
I suggest setting up your groups near the end of your group list. This way you can use the lower-numbered groups for day-to-day manually setup tasks.

## Step 2: Setup Custom Actions

Now we need to setup some custom actions that we can map toolbars or actions to.

**Pre-requisite** - You must install the "Script: X-Raym_Group selected items according to their order in selection per track.lua" script. This can be done via [ReaPack](https://reapack.com) or acquired at [ExtremRaym's site](https://www.extremraym.com/en/my-reaper-scripts/)

### Top Level Groups

{::nomarkdown}
  <img src="/assets/Reaper/CustomActionSetupParent.png" alt="Custom Action Setup for a parent">
  <div class="image-caption">Custom Actions Ready...</div>
{:/nomarkdown}

Top level groups are groups that are not contained in any other group. This would be something like "All Drums".

Create a Custom action consisting of the following and name it "Edit All Drums"

* Track: Unselect all tracks
* Group: Select all tracks in Group 05 (our "All Drums" track group)
* Item: Select all items in track
* Item grouping: remove items from group
* Script: X-Raym_Group selected items according to their order in selection per track.lua
* **ON** Consolidate undo points
* Name - "Edit All Drums"

Repeat this for each group that you created. You can do this quickly by selecting your "Custom: Edit All Drums" action and pressing 'Copy' in the actions window. Now just change which group it selects and name it appropriately.

Soon you'll have something looking vaguely like the image above.

### Children and Overlapping groups

{::nomarkdown}
  <img src="/assets/Reaper/CustomActionSetupChild.png" alt="Custom Action Setup for a child">
  <div class="image-caption">Custom Actions Ready</div>
{:/nomarkdown}

Any overlapping groups or groups with a 'parent' need to select the parent, and any overlapping groups, then remove items from their groups. If you don't do this, then _you will end up with a mess of groups_. 

So something like the "Custom: Edit Snares" needs to look like this:

* Track: Unselect all tracks
* Group: Select all tracks in Group 05 (our "All Drums" track group)
* Item: Select all items in track
* Item grouping: remove items from group
* Item: Unselect all items
* Group: Select all tracks in Group 02 (our "Snares" group)
* Item: Select all items in track
* Script: X-Raym_Group selected items according to their order in selection per track.lua
* **ON** Consolidate undo points
* Name - "Edit Snares"

You may have noticed that this is _almost_ identical to our "Custom: Edit All Drums" action, except before "Script: X-Raym_Group selected items according to their order in selection per track.lua" we added 3 actions:

* Item: Unselect all items
* Group: Select all tracks in Group 02 (our "Snares" group)
* Item: Select all items in track

To make life easy, whenever you want to create an edit action for a sub-selection of tracks, just copy the parent's action and add those lines.

### Kill groups

You may want to have groups to turn off edit groups like an "Edit No Drums" action:

* Track: Unselect all tracks
* Group: Select all tracks in Group 05 (our "All Drums" track group)
* Item: Select all items in track
* Item grouping: remove items from group
* Item: Unselect all items
* Track: Unselect all tracks

## Step 3: Implement a use pattern

{::nomarkdown}
  <img src="/assets/Reaper/TrackGroupToolbar.png" alt="A sample toobar">
  <div class="image-caption">A simple toolbar to use</div>
{:/nomarkdown}

The easiest way to access these actions is to use a normal toolbar, [Contextual Toolbar](http://forum.cockos.com/showthread.php?t=150702) or [Radial Menu](http://forum.cockos.com/showthread.php?t=186637)

Now you can do things like this!

{::nomarkdown}
  <img src="/assets/Reaper/ReaperTrackGroups.gif" alt="Reaper Track edit groups">
  <div class="image-caption">Reaper group editing toolbar</div>
{:/nomarkdown}

Take note that I have overdubs on this, and they are still selected for editing without issue.

# Bonus Nachos

{::nomarkdown}
  <img src="/assets/Reaper/SelectingOne.png" alt="Make sure this is on">
  <div class="image-caption">Gotta select them all!</div>
{:/nomarkdown}

I strongly suggest making sure that this option is turned on. By default you can right click the item grouping icon in the main toolbar to access it. It can also be found in the actions menu.

{::nomarkdown}
  <img src="/assets/Reaper/ProjectBayItems.png" alt="Project Bay Items">
  <div class="image-caption">The Project Bay shows item groups</div>
{:/nomarkdown}

You can see your current item groups in the Project Bay (Cmd-B/Ctrl-B by default). This can be useful, so explore what is possible in this window.
 

# Support me!

This post took 3 hours to research, screenshot, write and edit. If you appreciate the information presented then <a href="/DonateNow/">please consider joining patreon or donating!</a>

<a href="https://www.patreon.com/bePatron?u=7465992"> <img class="patreon-button" src="/assets/Patreon.png" alt="Be a Patreon!"></a>

<form style="text-align: center;" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick">
<input type="hidden" name="hosted_button_id" value="BR247JAZBTUJJ">
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
</form>



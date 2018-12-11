---
layout: post
title: Cool Features in Digital Performer... Part 4
comments: true
date:   2016-12-13_10:28:16 
categories: music
tags: ['Digital Performer', 'DAW']
---

![Day 4](/assets/DP/Featurespt4.png)

Today's installment of cool stuff in DP brings you up to snuff on these features: Mixer Scenes, Track Selector, Search Window, and some creative effects.
Be sure to check out the other DP Features posts!

[Part 1]({% post_url 2016-12-10-Cool-Features-in-Digital-Performer...-Part-1%})
[Part 2]({% post_url 2016-12-11-Cool-Features-in-Digital-Performer...-Part-2%})
[Part 3]({% post_url 2016-12-12-Cool-Features-in-Digital-Performer...-Part-3%})
[Part 5]({% post_url 2016-12-14-Cool-Features-in-Digital-Performer...-Part-5%})

<!--more-->

# Contents
{:.no_toc}
* TOC
{:toc}

# Mixer Scenes

![Mixer Scenes](/assets/DP/MixerScenes.png)

DP has what are called 'Mixer Scenes'. This isn't a hugely unique feature, but surprisingly many DAWs are missing this feature. Mixer scenes allow you to save all of your mixer settings _and automation_ as its own entity.

If you've read [Part 3]({% post_url 2016-12-12-Cool-Features-in-Digital-Performer...-Part-3%}) then you should be familiar with what Chunks are in DP. Every Mixer Scene is tied to its own sequence and every V-rack has its own Mixer Scene as well! You can use V-racks to essentially create different vibes to a mix, while having your sequence with its own unique mix aspects.

Along with Mixer Scenes, DP has Snapshot Automation. I will cover this in the next post.

# Track Selector and Track Layouts

![Track Selector](/assets/DP/TrackSelector.png)

Working with >30 tracks in most DAWs can become a major pain in the ass with constant zooming, scrolling etc... DP is the __king__ of large project navigation. The Track Selectors are a big part of this, as is the Track Overview Window.

Each window in DP has its own Track Selector, and they work independently even when multiple windows are visible. The Track Selector's basic function is to allow you to choose what is visible in the active window. 

In the Midi editors it also chooses which track is the editable track. The Track Selectors all have search windows that allow you to quickly find a track and they have various key commands to apply basic binary logic to the current visibility settings. There's selection commands available to allow you to select/hide/show only tracks that are: selected, empty, have content, play enabled, record enabled, input monitored and enabled. You can also specifically show/hide/show only Audio, Midi, Aux, Instrument and Master Fader channels.

A really fantastic feature though is that Track Selectors allow you to save Track Layouts. If you have a track layout that you find yourself using frequently then you can save and recall this at will. These track layouts can be used in any applicable window. By making smart use of Track Layouts and the Consolidated Window you can make working with __massive__ (500+ tracks) projects in DP a breeze.

# Search Window

![The amazing Search Window](/assets/DP/SearchWindow.png)

DP works based on selections. If you want something then you select it, but selecting with just click and drag can be a major hassle. This is where the Search Window comes in.

The Search Window allows you to make very fine-grained selections in your project. You can add to your current selection with a search, search in a selection, create a new selection or simply view the results of the search to make your own manual selection.

Nearly every single piece of user-editable information in DP is searchable. Even odd things like Sysex, Poly Aftertouch messages, Streamers, Flutters, Tune Requests, Number of times the letter "T" appears in a soundbite name, Note Off Velocity or selecting loops that repeat a certain number of times only. The possibilities are nearly endless.

Not only is all this information it is able to be manipulated. Search requirements can be grouped to create logical nodes which allow for some interesting selections. Groups can be nested too.

Searches can be saved and recalled at a later time and searches can be repeated via key command. Search results can also be navigated by key command.

## Examples

![Search Window Example Guitar](/assets/DP/SearchGuitar.png)

Here I'm selecting all soundbites that are NOT lead guitar that are panned to the right and are automated to be between -10dbFS and 0dbFS. Essentially I'm selecting all soundbites in this project that are a specific performance only in a breakdown.

![Search Window Example Hat](/assets/DP/SearchHat.png)

In this example I'm selecting any Hi-Hat note that's played on the upbeat and is played very softly. The drummer was playing on an electronic kit and kept hitting the near-edge of the pad on the upbeats, so I'm selecting all of those hits and then I will increase the velocity and humanize it slightly.

![Search Window Example Automation](/assets/DP/SearchAutomation.png)

On this track I have some automation on Sonic Modulator. The Low Delay Mix has 2 sections that are totally flat at values 0.045 and -0.025. I want to select everything that isn't a flat value so I can increase the crazy sample-and-hold automation I have. This is easily done with the search above

## So much more

![Change CC](/assets/DP/ChangeCC.png)
![Change Velocity](/assets/DP/ChangeVelocity.png)
![DeFlam](/assets/DP/DeFlam.png)
![Humanize](/assets/DP/Humanize.png)
![Smooth CC](/assets/DP/Smooth.png)
![Spectral Edit](/assets/DP/Spectral.png)
![Split Notes](/assets/DP/Split.png)
![Thin Automation](/assets/DP/Thin.png)
![Transpose](/assets/DP/Transpose.png)

There is so much that you can do with the Search window, and it only is what lets you _select_ data. DP has many tools that let you adjust the data once it's selected that I won't be covering here.

What I have pictured above is only a selection of the things you can do. DP has a wide range of tools and other functions for manipulating data once you have selected it.

# Plug-ins part 4 - Creative

## Sonic Modulator

![Sonic Modulator](/assets/DP/SonicModulator.png)

Sonic Modulator is a multi-band... thing. It does stuff. Look at the GUI dude. It can produce choruses, flanging, tremolo, rotary speaker sounds, various filter effects, vibrato and all of these things in a multiband context.

The Delay, Pitch, Filter and VCA can be modulated by one of 5 LFOs. The Pitch, Delay and VCA have independent sections to work on the low-end or high-end of the signal as defined by the crossover. The 5th LFO is an audio input which allows you to do some really crazy things by bussing a track to modulate one of the sections.

Sonic Modulator is _only_ a mono to stereo effect. In this capacity it is fantastic at widening mono sources in subtle or Duchamp-esque ways.

## Pattern Gate

![The Pattern Gate](/assets/DP/PatternGate.png)

Pattern Gate is a very simple effect that can be a great deal of fun. It's a sequenced gate with parameters that affect the envelope of the gate as it turns on and off.

There really isn't much to say about this effect except that it can be rather addictive. I originally thought it was a bit useless and gimmicky, but I've found myself throwing it on a track and getting lost for an hour just making fun noises. Usually I end up keeping it on the track too :)

## Ensemble Chorus

![Ensemble Chorus](/assets/DP/EnsembleChorus.png)

Simply a fantastic chorus plug-in that creates some amazing stereo choruses.

I have this on basically 90% of my projects somewhere, frequently on a Reverb send to create a lush and vivacious sounding space. Ensemble Chorus's parameters allow you to go from subtle chorused silkiness to all-out brain-bending wider-than-stereo lunacy.

Yet another simple effect in DP that easily rivals third-party alternatives.

# Notes

Note: All images are taken with the '8 bit' theme for DP9.

Be sure to check out the other DP Features posts!

[Part 1]({% post_url 2016-12-10-Cool-Features-in-Digital-Performer...-Part-1%})
[Part 2]({% post_url 2016-12-11-Cool-Features-in-Digital-Performer...-Part-2%})
[Part 3]({% post_url 2016-12-12-Cool-Features-in-Digital-Performer...-Part-3%})
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
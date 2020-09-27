---
layout: post
title: "Bitwig 2.4 - The Early Edition - and conclusions"
comments: true
date:   2018-08-18_10:46:26 
categories: music
tags: ['Bitwig', 'DAW']
image:
description: Bitwig 2.4! Early look at new changes, and my conclusions so far.
---

{::nomarkdown}
<img src="/assets/Bitwig/Bitwig24.png" alt="Bitwig 2.4">
<div class="image-caption">Bitwig 2.4</div>
{:/nomarkdown}

The last post in the Bitwig update mini-series.

This is a quick look at the upcoming Version 2.4 along with my updated conclusions on Bitwig as a whole.

All previous post have (hopefully) been updated to reflect the new changes.

**Other posts in this series**:

{% assign bits = site.posts | where: "series", "Bitwig" | sort: 'date' %}
<ul>
{% for my_page in bits %} 
    {% if page.url != my_page.url  %}
        <li><a class="page-link" href="{{ my_page.url | prepend: site.baseurl }}">{{ my_page.title}}</a></li>
    {% endif %}
{% endfor %}
</ul>

<!--more-->



# Contents
{:.no_toc}
* TOC
{:toc}


# Updates

All of the relevant pages in the [previous Bitwig review](/tags/#Bitwig) will be updated with this new information.

# The small touches

* Right Click Modulation Amount - You can now right-click a modulated parameter to see its current modulation value, remove it or click that item to adjust the modulation amount
* Bottom pane now shows more information about what the mouse is over. I'd consider this a major feature personally. It makes learning Bitwig easier, and remembering what you're doing when you're away for a bit less embarrassing ;)
* Nested Device chains take less space when minimized.
* Anti-Click works better when clip launching
* Scenes can be coloured
* 

# Complaints Resolved

* Tooltips suck _slightly_ less. They still don't show you shortcuts, which is my main complaint.

That's it :(

# The big features

## Resizing!

{::nomarkdown}
<video autoplay loop muted class="gifvid">
<source src="/assets/Bitwig/Resize.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
<div class="video-caption">Resizing... is a feature.</div>
{:/nomarkdown}

This is one of those times where you can tell how young a product is. This is considered a major improvement: you can resize tracks.

Well, you can't do this in Ableton Live so I guess it's a "feature".

Bitwig's track resizing capabilities are still rather poor though. There's no hotkeys for adjusting tracksize, you can't resize selected tracks, no resize presets, no quick resize/snap back, etc...

Little by little I suppose.

## Sampler Improvements

{::nomarkdown}
<img src="/assets/Bitwig/Instruments/Sampler.png" alt="Improved Sampler">
<div class="image-caption">Improved Sampler</div>
{:/nomarkdown}

Sampler is improved with some new stretching modes. Notably there's a 'wavetable' like sampling called "Cycles" and a granular mode called "Textures".

I spent a lot of time messing with the "Cycles" mode and the "Textures" mode and I didn't really come up with anything _particularly_ cool. Even with liberal and experimental modulation of the parameters both methods tended to sound somewhat harsh.

The "Cycles" mode formant knob was the best thing out of the lot in my experience. Hopefully they will add some visualization to the cycles/textures modes and add a few extra parameters (like crossfades for grains).

The Multisampler sample editing window in the expanded view is simplified, but equally powerful. Look at the left pan to see all of the information available, along with what's nicely tucked away in the sample editor. It's beautiful and well-integrated.

There's a new "list" window that shows you the samples on the left, and where they are mapped/spread across the zones. When attempting to make some multi-sampled libraries myself I found this much easier to use. It would be nice if there was a way to automatically sort samples by their lowest assignment for a cleaner display.

There's a few other minor improvements:

* Pingpong mode (play forward then play in reverse)
* Better visual indication of crossfades in loops (that's the gradient that you see in the screenshot above).
* Detect root key
* Groups for zone editing (HOORAY!)
* Round-robin per zone
* Freeze playhead (great for modulation)
* Attack, Decay an Release shapes are displayed nicer (you can drag the triangle above them to change the shape)
* Samples can be loaded in ram or streamed from disk

**BIG ISSUE**

_There is still no 'pitch shift without changing speed' mode that doesn't sound awful_. Bitwig improved [pitch/time stretching]({% post_url 2018-08-10-Whats-new-in-Bitwig-23-the-late-edition %}#time-stretching-that-doesnt-suck), but the elastique stretching modes weren't moved to the sampler.

It's not _always_ needed, but it can be a big help and is a standard feature in other 'big' samplers.

Other than that though... Sampler in Bitwig is the best sampler you're going to get with a DAW without throwing $200+ for some sort of upgraded sampler version from that DAW developer.

## Channel Support

{::nomarkdown}
<img src="/assets/Bitwig/Channels.png" alt="MIDI Channel Support">
<div class="image-caption">MIDI Channel Support</div>
{:/nomarkdown}

Oh look, support for MIDI Channels. It's only a 35 year old technology that nearly every other DAW supports.

Baby steps, they have to take baby steps I guess.

The MIDI Channel implementation is nice though. Channels color code notes so that you can easily see which channel a note belongs to. MIDI data like CC and Velocity are colour coded as well.

Currently there's not much support for moving notes between channels or multi-channel editing easily, but it's the first step.

~~I would also prefer that note colouring was used for something more useful like pitch or velocity, since those are used in nearly every situation. MIDI Channels are not used particularly frequently (which is now they managed to not have them for so long).~~

**UPDATE** You can actually change this. Right click the background of the piano roll. Awesome.

# Instruments

## Note Effects

### Channel Filter

{::nomarkdown}
<img src="/assets/Bitwig/Instruments/ChannelFilter.png" alt="Channel Filter">
<div class="image-caption">Channel Filter</div>
{:/nomarkdown}

As of Bitwig 2.4, MIDI Channels are supported. Channel Filter lets you control which MIDI channels are allowed through the plugin.

### Channel Map

{::nomarkdown}
<img src="/assets/Bitwig/Instruments/ChannelMap.png" alt="Channel Map">
<div class="image-caption">Channel Map</div>
{:/nomarkdown}

As of Bitwig 2.4, MIDI Channels are supported. Channel Map lets you route a MIDI channel to any other MIDI channel.

# Effects

## Bit-8 Improvements

{::nomarkdown}
<img src="/assets/Bitwig/Effects/Bit8.png" alt="Bit-8">
<div class="image-caption">Bit-8</div>
{:/nomarkdown}

It's not new, but it's better. Check out the old version:

{::nomarkdown}
<img src="/assets/Bitwig/Effects/Bit8old.png" alt="Bit-8 Old">
<div class="image-caption">Bit-8 Old</div>
{:/nomarkdown}

We have some notable improvements here. The quantize style is adjustable, along with "Square domain" quantization. Jitter can now happen randomly with a specifiable chance. There's a rectifying clipper available now as well.

It's head and shoulders above the bitcrushers in any other DAWs. (and that's not just because the new screenshot is a hidpi-size image)

# Modulators And Containers

## Parseq-8

{::nomarkdown}
<img src="/assets/Bitwig/Modulators/Parseq8.png" alt="Parseq8">
<div class="image-caption">Parseq8</div>
{:/nomarkdown}

This is a unique little guy.

It's 8 modulators in a row. A sequencer runs and triggers each modulator. It's basically a step sequencer with each step having its own modulation output.

You can run the sequencer in forward, reverse and pingpong, and it can cycle or 'oneshot'. The oneshot mode is useful when you use the "note" modes (restart, random, advance), where a new incoming note is what triggers movement in the sequencer.

Each step 'turns off' when it's no longer its turn, but there's a 'hold' which will make the previous step hold its value.

So why would you use this? The most obvious example would be to sequence other modulators. You could turn on one LFO for a beat, then another LFO, then the next beat use a step sequencer (you would modulate the depth of these to do this). Likewise you can use it for any situation where you want something to change to a specific value for a set period of time, but at a regular rate or in response to note changes.

I love that Bitwig is taking ideas like these from the modular synth community and applying them in a digital environment in ways that make sense.

## Note Counter

{::nomarkdown}
<img src="/assets/Bitwig/Modulators/NoteCounter.png" alt="Note Counter">
<div class="image-caption">Note Counter</div>
{:/nomarkdown}

Every time a note is played, a counter increments and along with it a modulation value is output.

You can change how a note increments the value, how many steps there are and make it uni/bipolar.

I've come up with some interesting sounding ideas with cycling effects on/off or having a delay change delay time per-note or light filter modulation. I had to stop messing with it and keep writing this review, but I'm going back to it soon as I'm done. Maybe my favorite modulator right now.

## Note FX Layer

{::nomarkdown}
<img src="/assets/Bitwig/Instruments/NoteFXLayer.png" alt="Note FX Layer">
<div class="image-caption">Note FX Layer</div>
{:/nomarkdown}

I am **IN LOVE**.

This lets you use [Note FX]({% post_url 2017-06-29-Bitwig-Instruments-Review %}##note-effects) in parallel. So in the image above, if I play a chord it is arpeggiated to create a melody, and the chord is doubled (octave up and down). It sounds _massive_

I already covered the [note effects]({% post_url 2017-06-29-Bitwig-Instruments-Review %}##note-effects) so check that out and see what you can do.

## Steps Improved

{::nomarkdown}
<video autoplay loop muted class="gifvid">
<source src="/assets/Bitwig/Modulators/StepsImprove.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
<div class="video-caption">Steps, Improved!</div>
{:/nomarkdown}

Now you can auto-generate patterns _and_ apply transforms to the pattern. Cool stuff.

Copy and Paste are there too now for steps.

# Conclusion

Bitwig 2.4 is yet another fantastic update and an update that I suspect many people will face their first upgrade period for Bitwig. Let me explain...

Bitwig gives you 1 year of updates with a purchase. For 1 year you get all major updates "for free". At the end of that year you keep that major version of Bitwig and it's yours. If you wish to have further updates then you must pay a "yearly" upgrade fee that is currently $169. You can pay this fee at any time and you are brought up to date.

There was a lot of rumblings about this being a "subscription" plan that will ruin Bitwig. It's not. It's no different than any other upgrade fee except you don't have the fear of paying for an upgrade and a new version coming out in 2 months that you have to pay again for. This system prevents that.

So is it worth it? I'm not sure that 2.4 _itself_ is worth $169 personally. If you are a heavy user of the sampler then it's surely a brilliant upgrade. Parseq-8 is amazing and Note Counter is incredible fun. Just thinking about those 2 modulators makes me want to throw money at Bitwig... so maybe it is worth it?

[Previously I said that I would not be continuing to use Bitwig and would uninstall it]({% post_url 2017-07-10-Bitwig-Conclusion %}#choice---uninstall). **That has changed**. Bitwig is my happy place. It's what I do when I want to experiment with sound design or if I have some crazy idea I want to experience. No, it's not my 'daily driver', and honestly for the music making I do, it's not even in my top 3. _For me_ it's an instrument. It's magnificent digital instrument with few parallels.

The Bitwig team is continually improving this "instrument" aspect of Bitwig and I think that's fantastic. For it to be a great DAW though, they need to spend some time looking at the old men in the DAW industry. Bitwig is sorely lacking in advanced MIDI tools, Audio Editing capabilities, video capabilities and project navigation (finding tracks, organizing tracks, project zooming, asset management). The "2" next to Bitwig belies an immaturity that is evident in how you manage data. Managing sound though... Bitwig is ace, and nothing really comes close.

Taking a step back and looking at what Bitwig is 'competing with', Ableton Live, paints a different picture. Ableton Live is equally deficient in the areas I mentioned, but lacks the modulation/container/MPE workflows present in Bitwig. In that direct comparison I feel that Bitwig is the superior product currently. Compared to [FLStudio](/tags/#FLStudio) it's a wash. FLStudio is a more mature product with slightly better project navigation, fantastic education resources, large helpful community and more fluid MIDI editing. Bitwig's modulation system is vastly superior and I feel that the overall workflow is cleaner (FLStudio has some deep dark scary places you need to do for things like MIDI CC editing or the terrible audio editing workflow).

As a DAW, Bitwig has sometime to flesh things out. As an instrument or a 'music environment', Bitwig is unbeatable.

# Support Me!

This post took 9 hours to research, screenshot, write and edit. If you appreciate the information presented then <a href="/DonateNow/">please consider joining patreon or donating!</a>







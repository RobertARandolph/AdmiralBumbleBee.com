---
layout: ['post', 'reader']
title: String Harmonic Calculator
comments: true
date:   2020-10-11_15:29:37 
categories: music
tags: ['Programming']
image:
description:
header:
header-caption:
---

{% include harmonics.html %}

I was working on a transcribing a song and arranging for electric bass. I needed to know some harmonics and all of the charts out there suck.

So I started writing a thing to generate a chart of all harmonics and their nearest equal temperament equivalents... There's a story here, but above is a working chart. [It is also a 'site feature' now](/Harmonics.html).

Press on for the story...
<!--more-->

# Contents
{:.no_toc}
* TOC
{:toc}

# Doing things the 'smart' way

I originally started this out by writing a program to generate the graphics. It's not particularly difficult to do _get the data_. I had the data sorted within about an hour.

Formatting it visually was much less fun. I spent about 10 hours fiddling with different ways to generate an image. Then I thought, "What if I just did this the dumb way?".

# Doing things the 'dumb' way

* Generating a simple svg of boxes for a fretboard, and lines for harmonics took me about 45 minutes.
* Opening that `.svg` in [Affinity Designer](https://affinity.serif.com/en-us/designer/), turning the harmonics into arrows and fleshing out the fretboard took about 30 minutes.
* Exporting the images and writing a small javascript image switcher took about 30 minutes.

About 2:15 to go from clojure->svg->pngs->what you see above.

Now, the downside is that I can't do something crafty like arbitrarily generate harmonics. But why? At the 10th harmonic we're already _way_ past the boundaries of what is feasible to use on your average guitar, and just on the edge of what can be used on electric bass guitar. Another potential downside in the manual generation of things is that I may have made a mechanical error (mistype).

I probably would have spent another 10-20 hours putting together a fully extensive generated chart for zero benefit, and I think that's an generous estimate.

I still might do it, because there is useful information that I'm not presenting here (harmonic absolute distances, temperament selection, generate notes on a fretboard, artificial harmonic offsets etc...)

But for the problem I wanted to solve... this is more than enough.

(I also had fun writing a bunch of code that I didn't use.)

# Colourblind

It's not colourblind safe, and I currently don't care. The numbers and shapes convey the information. The colours are because it was fun to learn a new feature of [sass](https://sass-lang.com) that I didn't know.

# Scope

Got my scope back btw. If you're curious then watch github this next week or two while I work on the DAW v DAW 7.2 article.

# Meta

This post took:

* 10 hours to fail to do smartly.
* 2 hours to do dumb and more than good enough.

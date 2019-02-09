---
layout: post
title: Kali LP8 Review
comments: true
date:   2019-02-09_21:15:10 
categories: music
tags: ['Reviews', 'Studio']
image: /assets/Kali/Header.jpg
description: Review and Testing of the Kali Audio LP-8
---

{::nomarkdown}
<img src="/assets/Kali/Header.jpg" alt="Kali Audio LP8">
<div class="image-caption">Kali Audio LP8</div>
{:/nomarkdown}

First thing my wife said was "Wow, these look legit."

I'm reviewing the [Kali Audio LP-8 Studio Monitors](https://www.kaliaudio.com/lone-pine-detail) today.

I didn't think they looked legit personally. I thought they were just your standard cheap studio monitors. They don't have that intimidating heft when you take them out of the box, or the firmness on the baffle.

My disclaimer about paying for the product is at the end of the review this time.

Let's see how they stand up!


<!--more-->

**If you have any questions or comments, please comment below! I read every comment and respond to most.** No registration is necessary to comment, so don't be shy.

# Contents
{:.no_toc}
* TOC
{:toc}

# Unboxing

<iframe width="800" height="450" src="https://www.youtube.com/embed/o1zryJzoDro" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Yes, I did one of those silly unboxing videos. I'm sure you can see how serious I took this.

Don't worry, that _is_ the right link.

# Video Review

<iframe width="800" height="450" src="https://www.youtube.com/embed/_2hQF8zCLLk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Video review that covers basically the same things as this. Not worth watching if you've read this article. The article has more information.

# Introduction

# Initial reactions - Sound

The LP8 sound like there's _quite_ a bit of mid-range. In the 400-800 range. They sound boxy to me with the default settings, but I am also used to [ADAM Audio A7](https://www.adam-audio.com/en/archived-products/a7/) with a [Sub10](https://www.adam-audio.com/en/subwoofer/sub10-mk2/). My default monitoring setup has a very strong low-end (a few dB above "flat", I like to feel my music).

I do not like the default sound for listening to music, but I did use them [for working on a video](https://www.youtube.com/edit?o=U&video_id=e56tR6is_Do), and I heard issues with my voice recording that I never noticed before. Mouth sounds were particularly annoying and that's a _good thing_ if you're trying to produce clean sounding human voice.

For fun I turned up the low/high dip switches to increase the high and low end, and I found the LP8 _much_ more comfortable to work with. I will explore this in the measurement section.

After 4 days of just general listening I forgot they were there unless I thought about it.

# Testing

## Test Setup

{::nomarkdown}
<img src="/assets/Kali/Setup.jpg" alt="Setup">
<div class="image-caption">Setup</div>
{:/nomarkdown}

The first thing we have to cover here is that these tests are only relative to my space. I spent weeks testing, treating, building, testing, treating, building etc... with professional help, so that my Adam S3A + Sub10 setup would be fantastic. I now use Adam A7 + Sub 10, but it's equally as nice.

Graphs above.

Thusly I've setup the LP-8s near the A7s and am measuring approximately 3ft out for most measurements. I am measuring a single monitor at a time except for the matching test.

All graphs are presented with 1/6 octave smoothing for clarity. I've included the [REW](http://www.roomeqwizard.com) files so that you can inspect my data yourself.

[DATA](/assets/Kali/REW.mdat).

## Frequency Response

{::nomarkdown}
<a href="/assets/Kali/Levels.png">
<img src="/assets/Kali/Thumbnails/Levels.png" alt="Frequency Response at varying levels">
</a>
<div class="image-caption">Frequency Response at varying levels</div>
{:/nomarkdown}

My first look here is to try the monitors at various levels. The SPL measurements on the graphs are correct.

As my [first impressions](#initial-reactions---sound) seemed to indicate, they appear to be rather "dull" in my space. The high end seems to be rather muted. From 100 to 10,000hz it's nearly 10dB down in my space, with the monitors I was given.

Let's look at my A7s with the exact same setup:

{::nomarkdown}
<a href="/assets/Kali/A7Levels.png">
<img src="/assets/Kali/Thumbnails/A7Levels.png" alt="A7 Comparison">
</a>
<div class="image-caption">A7 Comparison</div>
{:/nomarkdown}

A7's are _much_ flatter by default in my space. (Except, where did that 70hz null come from?? Ugh.)

The Kali Audio LP-8 do come with some [dip switches](https://en.wikipedia.org/wiki/DIP_switch) on the back, so let's explore those and see if some corrections can be made.

### High Switches

{::nomarkdown}
<a href="/assets/Kali/HighSwitches.png">
<img src="/assets/Kali/Thumbnails/HighSwitches.png" alt="High Switches">
</a>
<div class="image-caption">High Switches</div>
{:/nomarkdown}

This test is made solely at -18dBFS output and 75dB SPL C (my normal combined listening level).

Clearly the switches work :)

High up is ideal for my space, otherwise the LP8s sound rather boxy and with far too much mid-range.

### Low Switches

{::nomarkdown}
<a href="/assets/Kali/LowSwitches.png">
<img src="/assets/Kali/Thumbnails/LowSwitches.png" alt="Low Switches">
</a>
<div class="image-caption">Low Switches</div>
{:/nomarkdown}

This test is made solely at -18dBFS output and 75dB SPL C (my normal combined listening level).

Low switches work, but they're not as impactful as the [back](#back) may seem to imply they would be.

The "low up" variant seems like a 1dB low shelf filter, and the "low down" looks like about 2dB down.

### Both Switches

{::nomarkdown}
<a href="/assets/Kali/BothSwitches.png">
<img src="/assets/Kali/Thumbnails/BothSwitches.png" alt="Both Switches">
</a>
<div class="image-caption">Both Switches</div>
{:/nomarkdown}

This test is made solely at -18dBFS output and 75dB SPL C (my normal combined listening level).

Well, it _looks_ like the high/low switches are actual shelves instead of just 'turn up the woofer' or 'turn up the tweeter'. I could certainly be wrong, and would need to tear apart the electronics to know for sure.

The reason I say this is because around 650hz is rather close, but the extremes are not. If it was just a naive transducer level control, then we'd seen almost identical graphs, but shifted up/down.

Nevertheless, it looks like for my space I'll want low down and high up for 'accuracy'.

### Position switches

{::nomarkdown}
<a href="/assets/Kali/PositionSwitches.png">
<img src="/assets/Kali/Thumbnails/PositionSwitches.png" alt="Position Switches">
</a>
<div class="image-caption">Position Switches</div>
{:/nomarkdown}

{::nomarkdown}
<a href="/assets/Kali/PositionSwitchesSpread.png">
<img src="/assets/Kali/Thumbnails/PositionSwitchesSpread.png" alt="Position Switches">
</a>
<div class="image-caption">Position Switches offset for "clarity"</div>
{:/nomarkdown}

[On the back](#back) of the monitors there are these position switches. They are called 'boundary EQs' in the manual, but they're presented as things you would do based on where you place the monitors, so I think they are better referred to as "position switches".

A short intermission here: My arms are so tired of messing with these switches already. For a normal user this would be what they'd want to do even! This sort of testing is necessary if you want to optimize your value when purchasing lower cost speakers like these. **KALI AUDIO, PLEASE SAVE MY ARMS**.

Ok, so these appear to mess with _something_ to do with the low frequencies. The low and low mid range is changed with what appears to be a parametric bell filter of some type.

Switch 2 is somewhat notable as it appears to add this funky filter between 200-300hz. Viewing the manual indicates that this seems to be the switch for when the speaker is within 20in (50cm) of a wall. I suspect that will be true for the vast majority of people using the monitors, and it makes me wonder why that wouldn't be the default instead.

### My best try

{::nomarkdown}
<a href="/assets/Kali/OptimalFreq.png">
<img src="/assets/Kali/Thumbnails/OptimalFreq.png" alt="Optimal Response Attempt">
</a>
<div class="image-caption">Optimal Response Attempt</div>
{:/nomarkdown}

So here's my best attempt with the switches for optimal _frequency_ response.

I noticed that earlier 70hz null in my A7 setup was due to the sub being set incorrectly. Embarrassing that I didn't notice that by ear immediately (though my wife did comment about the bass sounding different 2 days ago...).

Anyway, it's fairly clear that the Kali Audio LP8s are _quite_ a bit duller than the Adam A7, or that they are designed for a response slope that favors much less high end.

Let me put on half-octave smoothing so you can see this more clearly:

{::nomarkdown}
<a href="/assets/Kali/OptimalHalf.png">
<img src="/assets/Kali/Thumbnails/OptimalHalf.png" alt="Optimal attempt, half-octave smoothing">
</a>
<div class="image-caption">Optimal attempt, half-octave smoothing</div>
{:/nomarkdown}

This makes it very clear.

It's almost as if you look at it and think "If I could just have a bitmap of that LP8 frequency response and rotate it a few degrees...". That's precisely what slope is.

The LP8s are relatively flat when setup properly, but the design appears to favour a much duller high end than what may traditionally be considered "flat". I suspect that this is incidentally, or intentionally, to prevent fatigue when mixing. I have no doubt that when designing speakers made for 8-hour listening sessions it can be tempting to have something with less high-end to help avoid ear fatigue.

It is what it is. I don't _like_ it per se, but it seems to be a rather valuable contrast to my current monitoring setup.

I can only listen to my A7s in short bursts or I get ear fatigue. If I listen any longer I start to feel irritated.

The LP-8s don't seem to have that effect. I can listen to them for 12 hours a day and chug along.

### Stereo Match - Listening space

{::nomarkdown}
<a href="/assets/Kali/Matching.png">
<img src="/assets/Kali/Thumbnails/Matching.png" alt="Matching Left and Right">
</a>
<div class="image-caption">Matching Left and Right</div>
{:/nomarkdown}

My space is highly symmetrical. I've discussed my [clinical OCD](https://en.wikipedia.org/wiki/Obsessive–compulsive_disorder) in the past, and my checking/counting behaviours lead me to constantly put (only specific) things 'back in their place'. The acoustical symmetry of my space is one of these compulsions.

I placed the measurement microphone at just over 3 feet (1m) from each tweeter then measured each monitor.

The apparent offset in some of the nulls is likely due to a huge wall of cases (former live touring musician, you end up with a lot of cases!) I have on one side of my space to the right.

The LP8s appear to be extremely well matched in this scenario.

### Stereo Match - Single Place

{::nomarkdown}
<a href="/assets/Kali/MatchedSingle.png">
<img src="/assets/Kali/Thumbnails/MatchedSingle.png" alt="Matched, both in same position">
</a>
<div class="image-caption">Matched, both in same position</div>
{:/nomarkdown}

The more scientific method would be to have each speaker placed in a single spot, the microphone in a single spot, and make 2 measurements.

So I did that.

{::nomarkdown}
<img src="/assets/Kali/Matching.jpg" alt="Matched front">
<div class="image-caption">Matched front</div>
{:/nomarkdown}

{::nomarkdown}
<img src="/assets/Kali/Blocks.jpg" alt="Blocks">
<div class="image-caption">Blocks</div>
{:/nomarkdown}

I setup a square stool and clamp some blocks firmly down so that I could repeatably place different monitors in the exact same place.

They appear to be very close. I repeated these measurements multiple times and that resonant peak offset between 14kHz and 15kHz was persistent. The biggest deviation, besides that resonant peak, was less than 1dB. That's _quite_ impressive for cheaper monitors that were not purposely matched.

Those resonant peaks are a bit bothersome though.

The 7dB+ swings are not representative of the monitor's performance. The speakers were not placed in the room in an optimal position. The testing here is only comparative between two speakers placed in the same position. When the speakers are placed in an appropriate place they seem to test much, much flatter.

## Impulse Response

~~~ python
import matplotlib.pyplot as plt
import numpy as np
import wave
from scipy.interpolate import interp1d

sp = wave.open("Impulse.wav", "r")
signal = sp.readframes(-1)
signal = np.fromstring(signal, "Int16")

sp2 = wave.open("Impulse2.wav", "r")
signal2 = sp2.readframes(-1)
signal2 = np.fromstring(signal2, "Int16")
signal_dirac = np.repeat(0, 200)
signal_dirac[30] = 6000

x = np.linspace(0, 200, 200)

f1 = interp1d(x, signal[1:201], kind = 'cubic')
f2 = interp1d(x, signal2[19:219], kind = 'cubic')

xnew = np.linspace(0, 200, num=800)

f3 = interp1d(x, signal_dirac, kind = 'cubic')

plt.plot(xnew, f1(xnew), xnew, f2(xnew), xnew, f3(xnew))
plt.legend(('Kali LP-8', 'Adam A7', 'Perfect Response'),
           loc='upper right')
plt.title('Impulse Response')
plt.show()
~~~

Impulse response is rather important as it communicates a number of characteristics, but for this purpose I'm most interested in what you may call the 'flabbiness' of the drivers.

I played a single sample impulse through the speaker and then recorded the output.

Here is the python code used to make this graph, and [here is the wav file of the LP8](/assets/Kali/Impulse.wav) and [the A7](/assets/Kali/Impulse2.wav)

I don't write Python, I just hacked this together real quick so I could get the image. I can't tell you how many times I type `(function` when writing c/python now instead of `function(`. Save me o' Lisp Lord. 20 years of C and half a dozen of Lisp and Lisp has already claimed its permanent space in my brain.

(While proofreading this article, I could barely handle re-reading that code. May heaven show mercy on my soul. Surely this can be optimized to be unreadable!)

{::nomarkdown}
<a href="/assets/Kali/Impulse.png">
<img src="/assets/Kali/Thumbnails/Impulse.png" alt="Impulse Response Test">
</a>
<div class="image-caption">Impulse Response Test</div>
{:/nomarkdown}
What does this tell us? The low end is a bit flabby. The A7 response much quicker in this case. 

Before the absolute peak at '25' there's a section where the A7 'goes down' and the LP8 'goes up'. That seems likely to be the effect of the amplifier stage in the LP8, and would audibly be a marker of some _very_ light masking >10kHz.

I not going to spend the time hooking up something cheaper or a consumer-grade speaker for this test, but the LP8 performs _very_ well for its price and size. 8" drivers moving quick isn't easy.

I repeated this test around 20 times, with varying setups, and the results were nearly identical every time. This is why I'm presenting only a single measurement.

# Internals

{::nomarkdown}
<img src="/assets/Kali/Board.jpg" alt="Circuit Board">
<div class="image-caption">Circuit Board</div>
{:/nomarkdown}

{::nomarkdown}
<img src="/assets/Kali/Top.jpg" alt="Tweeter area">
<div class="image-caption">Tweeter area</div>
{:/nomarkdown}

{::nomarkdown}
<img src="/assets/Kali/Bottom.jpg" alt="Woofer area">
<div class="image-caption">Woofer area</div>
{:/nomarkdown}

Here goes my Warranty...

I'm not an electronics guru dude, so I will refrain from posting my thoughts on this.

I _am_ a construction nerd though, and I have to say that the general construction is excellent for the price. I have a few concerns though:

* Poor epoxy welding of the reflex port extension.
* Very poor packing (none). The interior walls have a very light padding.
* Front baffle is thin plastic with no reinforcement. Ideally a very stiff substrate is desired.
* MDF is thin. I'm a bit confused about this because it's not that much more expensive to source 50% thicker MDF in china for very, very little more. (I'm certain that this would only add $2-3 to the total price of the product... I've specced it for similar)
* PCB mounting plate is fairly thin.

I've seen more expensive products with _much_ worse construction. I would be curious what a speaker designer thinks about some of these choices, but in terms of general competence it seems that the LP8s are fine.

# Images

## Front

{::nomarkdown}
<img src="/assets/Kali/Front.jpg" alt="Front">
<div class="image-caption">Front</div>
{:/nomarkdown}

Nothing remarkable besides the not-reinforced plastic faceplate/baffle and the inverted dustcap.

I really think they could have done better with an MDF baffle, but it wouldn't have looked as curvy.

## Back

{::nomarkdown}
<img src="/assets/Kali/Back.jpg" alt="Back">
<div class="image-caption">Back</div>
{:/nomarkdown}

Here's where the devious dip switches lie!

# Thoughts

There's not really a conclusion here. Here's some of my issues with this product:

* Accessing dip switches to tune (and/or test) is a major pain. I know it's common for these to be on the back, but if you're going to try and disrupt the market, _DO IT BETTER_. This is a **BAD** design. It's anti-user. It's anti-my-arms. It's terrible.
* 1/2" mdf body is a bit... meh.
* Thin plastic baffle with no reinforcement could be _easily_ improved.

My gripes are fairly minor for a product in the price range. If it were 2 or 3 times the price I would definitely want a more rigid baffle. 4x the price and I want a remote for changing settings, or something more accessible.

$500usd total though... I'm keeping them. For me they are a steal and they fill a space in my monitoring setup that I sorely needed: Monitors that I can actually use all day.

I was sent these monitors for review with the option of returning them, or purchasing them. I will be purchasing them, I'm quite fond of them now and you'll be hearing more about them in the future I suspect.

# Support Me!

This post took 26 hours to research, photograph, screenshot, test, video, write and edit. If you appreciate the information presented then <a href="/DonateNow/">please consider joining patreon or paying me for my time spent bringing you quality content!</a>

<a href="https://www.patreon.com/bePatron?u=7465992"> <img class="patreon-button" src="/assets/Patreon.png" alt="Be a Patreon!"></a>

<form style="text-align: center;" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick">
<input type="hidden" name="hosted_button_id" value="BR247JAZBTUJJ">
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
</form>

**If you have any questions or comments, please comment below! I read every comment and respond to most.** No registration is necessary to comment, so don't be shy.


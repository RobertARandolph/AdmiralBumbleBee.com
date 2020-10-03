---
layout: ['post', 'reader']
title: "Couture Transient Shaper And Distortion Review"
comments: true
date:   2018-09-01_09:44:05 
categories: music
tags: ['Review', 'Comparator']
image:
description: A review of Auburn Sounds Couture plugin
---

{::nomarkdown}
<img src="/assets/Couture/Couture.png" alt="Couture in Action">
<div class="image-caption">Couture in Action</div>
{:/nomarkdown}

Let's start this one with a bang. **Go download it right now.** You have nothing to lose. The transient shaper portion is free to use.


# **THIS IS A MEDIA HEAVY POST!!!!!!!**

Clicking through will load 15.6MB of data.

<!--more-->



# Contents
{:.no_toc}
* TOC
{:toc}

# Disclosure

{::nomarkdown}
<img src="/assets/Couture/Testers.png" alt="and I helped!">
<div class="image-caption">It's shake and bake, and I helped!</div>
{:/nomarkdown}

In the interest of disclosure: I was deeply involved in the development of this plugin. I did not author it, however I spent a lot of time with the author in the alpha and beta periods. As such, I did not pay for this product with my own money. If you feel that my review seems biased because of this, please say so in the comments!

# Video!

<iframe width="800" height="450" src="https://www.youtube.com/embed/FmNqOStdBx0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

As usual, I'm trying to add video content, so above is a video covering what's also here, but not in as much detail. Both content sources have slightly different information.

Subscribe if you like it. It's a big deal to me due to how youtube works.

# Transient shaping

{::nomarkdown}
<video autoplay loop muted class="gifvid">
<source src="/assets/Couture/Transients.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
<div class="video-caption">Transient Shaping vs Compressor</div>
{:/nomarkdown}

I'm really getting in to this animation stuff. I've tried to make a graphic showing the basic concept of transient shaping.

Transient shaping is when a processor monitors the audio and looks for transients. It attempts to find when they start and when they end (or when **you** want it to start or end), then it allows you to adjust the transient portion of the signal itself.

An issue is that some folks confuse this with the attack stage in a compressor, or compressors in general. Compressors will affect the transient due to the attack phase of the envelope, however due to the _release_ phase they also affect the rest of the signal. It may be possible to have a compressor with an auto-attack that does an admirable job of opening up _just_ enough to let the whole transient pass, but the release stage will affect the rest of the signal somehow.

Some transient shapers _are_ just auto-attack compressors with a very quick release. Some monitor the 'speed' that the waveform changes and basically multiply that. Some do multiple variations.

Neither of these things are bad, or good. Compressors are probably more often the useful of the two, since changing the relationships between parts of sounds is often more powerful than isolating things.

I want to make it clear that the video above is simplified for visibility. There's more to how compressor envelopes work, and transient shapers are never that accurate, but hopefully you understand the basic concept

## Couture's Transient Shaping

{::nomarkdown}
<img src="/assets/Couture/Transient.png" alt="Transient Section">
<div class="image-caption">Transient Section</div>
{:/nomarkdown}

Couture's Transient shaper is rather gentle. It doesn't 'grab' transients really hard like some other transient shapers do, and **it's volume compensated**.

That last point is huge. You can audition extreme settings without blowing your speakers out. Since Couture has 3 levels of transient adjustment (knob value times 1, times 2 or times 3), you are free to make changes without being fooled by changes in level or messing up the balance of your track. You can give the plugin more headroom by hitting the '20' switch over 'clip'.

The transient portion has 2 extra parameters that are missing from many other transient shapers: speed and front/back. Let me explain...

* Speed - The name of this is a bit confusing at first I think. Speed changes how long the effect lasts. So a small speed value will result in a very short transient that's affected. A large speed value will result in a longer transient. You can think of this like a 'sharpness' control. Low values are sharp, high values are fuller.
* Front/Back - This moves the transient shaping effect in time. If you move the knob to the right then the effect happens later. Knob to the left makes the effect happen earlier. It's basically a way to tune the transient shaping's location in time so that you get the part of the transient you want.

The extra tuning capability might bother some people, since sometimes it can take a couple extra seconds to get a nice result compared to other transient shapers. However, I think that the end result is often better if you take the time.

If you are in a rush I strongly recommend [TransReckon](https://www.eareckon.com/en/products/transreckon-transient-shaper.html). It's €59 instead of free, but it does offer excellent results with minimal effort. Couture does beat it out in many cases, but with some extra effort. I still personally grab TransReckon first, and switch to Couture if I can't get exactly what I want with it.

## Doing it in Reverse

{::nomarkdown}
<img src="/assets/Couture/Reverse.png" alt="Reverse">
<div class="image-caption">Reverse</div>
{:/nomarkdown}

Using a transient shaper to increase the sustain of a sound (or decrease the attack) isn't a new concept, but it is something few people use.

Couture does this _extremely_ well. Turn the 'Sharpen' knob all the way to the left and now the transients are decreased instead of increased.

Changing the proportion of the attack to the body of the sound acts similar to an intelligent leveler. It's far more effective at making your sounds feel more even than using a compressor.

The 'Speed' and 'Front/Back' knobs make this even more useful in that you can tune where the transition between attack and the rest of the sound occurs.

# Distortion with a twist

{::nomarkdown}
<video autoplay loop muted class="gifvid">
<source src="/assets/Couture/CoutureDist.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
<div class="video-caption">description</div>
{:/nomarkdown}

Normally distortion is relative to the absolute level of the signal. Loud parts of the signal are affected, and soft parts of the signal are affected less.

Couture does this in a rather unique way. It first analyzes the signal and then applies distortion that is multiplied by the current level.

Maybe that sounds confusing, so let me explain another way. 

* A normal saturation device works like this - there is a signal and a threshold. The closer the signal is to the threshold, the more it is saturated.
* Couture works like this - There is no threshold. Couture monitors the level at each point in time and _inversely_ applies saturation. The result is that low sounds are saturated equally as much as loud sounds.

It's a rather unique sound. It adds some meatiness to things like basses and vocals. Rock drums work fantastic with it. [Check out the audio examples below](#distortion)

Most of the time the 'Bass' and 'Tube' modes sound excellent with moderate values, but the harmonic complexity (which translates to a 'fullness') can muddy up a mix pretty quickly if you're not careful. Applied to a handful of elements it's a sound that can't be replicated any other way that I know of.

The downside is that if it doesn't work, it just sounds really bad. There's very little middle ground. Either you try it and it's an amazing effect that nothing else can replicate, or it's terrible. Then again... sometimes that 'terrible' sound is exactly what you want.

## Mood

{::nomarkdown}
<img src="/assets/Couture/Mood.png" alt="Mood">
<div class="image-caption">Mood</div>
{:/nomarkdown}

That little 'Mood' parameter is a key to this whole shebang.

It reacts to the incoming level and changes the cutoff of the low pass filter. Low values (knob to the left) decrease the low pass with high volume sounds, and high values (knob to the right) increase the low pass with high volume sounds.

[I posted about a neat trick before using this]({% post_url 2018-08-21-A-more-natural-drum-noise-gate-with-Couture-and-Reaper %}), but there's more to it.

The distortion section of Couture can become quite aggressive. The distortion is level-independent as discussed, but the mood parameter is level-_dependent_! This means that we can distort the _whole_ signal, but apply the low pass to only the loud parts.

We can have Couture default to having an aggressive low pass (cuts off high frequencies), but it opens up on loud sounds (more high frequency information passes).

We could also do the reverse. Couture defaults to wide-open (all high-frequencies pass), but the low-pass closes on loud sounds (less high frequency information passes).

Having an envelope on a filter is nothing new, and most good filterboxes (or plugins) have such a feature, and often far more complex. The inclusion of this in Couture is a key to making it all work.

Once you get a distortion sound that you like, crank it up a bit extra then adjust the 'LP' and 'Mood' to tame it (or make it more exciting!) as you want.

# Transient Shaping tests

## Test 1 - Drums

Let's first test the Transient Shaper portion. I'm going to do this with 2 files: Drum overheads and a Snare Mic.

Ideally the transient shaper will only pick up the snare sounds in the snare mic. It would not miss any hits, and it will not accent any leakage.

The overheads should only have the kick and snare ideally.

To show this better I've taken the original sound, inverted the polarity and mixed it in with the effected portion. This will emphasize the differences (though it's not perfect since the latency compensation in Couture isn't exact). These are the 'Inverted' files'

I have files without the inversion process so you can hear it as it would exist recorded

I've also included examples from my favorite transient processor, [TranReckon](https://www.eareckon.com/en/products/transreckon-transient-shaper.html) and the ever present [Native Instruments Transient Master](https://www.native-instruments.com/en/products/komplete/effects/transient-master/). Transreckon is labeled with 'trans' and Transient Master is labeled with 'TM'.

Couture is the other files except Dry.

**THESE ARE EXTREME EXAMPLES TO SHOW FUNCTION** This is **NOT** intended to demonstrate good sounding usage.

  <script type="text/javascript" src="/admc/comparator.js?v={{ site.time | date:'%s' }}"> </script>
  <link rel="stylesheet" type="text/css" href="/admc/admc.css">
<admc path="/assets/Couture/Drums/" title="Drum Transient Tests">
	<file name="OHDry.mp3" />
	<file name="OHProcessedInverted.mp3" />
	<file name="OHProcessedNormal.mp3" />
	<file name="SnareDry.mp3" />
	<file name="SnareProcessedInverted.mp3" />
	<file name="SnareProcessedNormal.mp3" />
	<file name="SnareTransInverted.mp3" />
	<file name="SnareTransNormal.mp3" />
	<file name="SnareTMInverted.mp3" />
	<file name="SnareTMNormal.mp3" />
	<file name="OHTransInverted.mp3" />
	<file name="OHTransNormal.mp3" />
	<file name="OHTMInverted.mp3" />
	<file name="OHTMNormal.mp3" />
</admc>

It's the amazing [Comparator that I made entirely in vanilla javascript]({% post_url 2017-01-30-Comparator %}).

### Results

The snare test went very well. Using the detector bass to remove the bass allowed it to easily track the snare primarily. It does miss some hits in the rolls, but it does so consistently which sounds fine.

The overheads are also consistent, but even with the bass turned way up it didn't catch the kick drum as well as I'd like. I think you'll find that the other 2 company's processors did even worse though.

Transreckon does a _MUCH_ better job on the overheads, but worse on the snare. NI Transient Master, to me, sounds like it is inferior on all of these tests so far. Transient Master does do an excellent job of detecting transients

## Test 2 - Bass

Here we have a tricky sound for transient shapers: Deep Bass.

Some transient shapers will see the long low-frequency waves as transients themselves.

Once again I've included examples from my favorite transient processor, [TranReckon](https://www.eareckon.com/en/products/transreckon-transient-shaper.html) and the ever present [Native Instruments Transient Master](https://www.native-instruments.com/en/products/komplete/effects/transient-master/). Transreckon is labeled with 'trans' and Transient Master is labeled with 'TM'.

Couture is the other files except Dry.

<admc path="/assets/Couture/Bass/" title="Drum Transient Tests">
	<file name="DivaDry.mp3" />
	<file name="DivaProcessedInverted.mp3" />
	<file name="DivaProcessedNormal.mp3" />
	<file name="DivaTransInverted.mp3" />
	<file name="DivaTransNormal.mp3" />
	<file name="DivaTMInverted.mp3" />
	<file name="DivaTMNormal.mp3" />
</admc>

### Result

Couture does the best job here. It captures the hard note onsets well, and the lesser note onsets are still processed lightly. I think that this is the optimal result.

Transient Master does well at capturing _most_ of the note onsets, but it misses a few. Those missed transients end up making it sound strange.

My beloved Transreckon _nearly_ does it perfectly but it affects similar transients in different ways. The 'capture' is correct, but the effect is not as good as couture.

## Test 3 - Vocals

Running transient shapers in reverse (cutting the attack, or increasing the sustain) isn't a new concept. Couture does this better than any that I know though.

The concept is that instead of compressing vocals, you reduce the attack phase. This changes the proportion between the initial sound(s) and the body of the word. The result is similar to normal compression, but a smoother sound. Even the waveform drawing shows this clearly.

I've included a 'Reverb' example here. When the reverse transient shaping is applied ('ReverseReverb'), you can hear how the vocal is clear and then at the end of the phrase the Reverb blooms out. It's a great way to get rich reverb sounds without cluttering your mix with reverb everywhere.

It's also an interesting way to create that 'rising reverb' sound on percussion, but I'm not showing that here. Buy Couture and figure it out yourself.

<admc path="/assets/Couture/Vox/" title="Vocal Compression">
	<file name="Dry.mp3" />
	<file name="Reverse.mp3" />
	<file name="Reverb.mp3" />
	<file name="ReverseReverb.mp3" />
</admc>

# Distortion

{::nomarkdown}
<img src="/assets/Couture/Mix.png" alt="A quick mix">
<div class="image-caption">A quick mix</div>
{:/nomarkdown}

I wrote a very quick 4 bars of a metal track. Just overheads, 2 guitars, bass, vocals and growling. Everything played on normal instruments. It took me about 15 minutes to record and 10 minutes to mix. (And about 2 hours to dissect everything and get the comparator ready!)

I chose this type of growly aggressive metal because it is frequently heavily distorted, _and_ it relies on strong transients.

Trying to add that rugged sound without trashing the transients is a tough task. This is where couture shines. Making things sound more full bodied or making things sound aggressive without having to ruin the transient response.

If you don't enjoy this style of music, I apologize. The lyrics are tame ('Crawling through the damned' and 'Hiding, Craving. Feeling the Rain') and I felt it was a great way to show off Couture.

## Test 1 - Vocals

One of these takes is quite out of tune... I'm not going to bother fixing it.

<admc path="/assets/Couture/Dist/Vox/" title="Vox Distortion">
	<file name="Dry.mp3" />
	<file name="Bass.mp3" />
	<file name="Rect.mp3" />
	<file name="Sin.mp3" />
</admc>

### Results

I really like the 'Bass' mode on vocals for adding just a touch of grit. Even on pristine pop vocals it can add a subtle grit that makes the track sound fuller.

The 'Rect' and 'Sin' modes are what I like for getting a distorted vocal sound. I've shown two variations here.

## Test 2 - Drums

This is nothing more than a single drum overhead track with microphones in an [XY configuration](https://en.wikipedia.org/wiki/Microphone_practice#X-Y_technique:_intensity_stereophony).

<admc path="/assets/Couture/Dist/Drums/" title="Drums Distortion">
	<file name="Dry.mp3" />
	<file name="Bass.mp3" />
	<file name="Fuzz.mp3" />
	<file name="Tube.mp3" />
</admc>

### Results

Once again, the 'Bass' mode adds a really nice fullness. I pushed the 'Tube' mode here just to show how it affects the cymbals in a nice way even when there's loud bass/snare transients.

'Fuzz' in this context gives an overloaded cassette-tape like sound. Really cool for lo-fi stuff.

## Test 3 - Bass

Some random Danelectro bass with nylon tapewound strings.

<admc path="/assets/Couture/Dist/Bass/" title="Bass Distortion">
	<file name="Dry.mp3" />
	<file name="Bit.mp3" />
	<file name="Fuzz.mp3" />
	<file name="Tube.mp3" />
</admc>

### Results

I don't think you can go wrong here. You can hear between the 'Bit' 'Fuzz' and 'Tube' modes how varied the sound can be.

The part that I **LOVE** about Couture's distortion is that you can dial in something that affects the body of the sound, but you don't end up with an attack that's completely destroyed. In all of these samples you can hear that the attack of the bass is intact.

## Test 4 - Growl

I know. Forgive me.

<admc path="/assets/Couture/Dist/Growl/" title="Growling Distortion">
	<file name="Dry.mp3" />
	<file name="Bit.mp3" />
	<file name="Fuzz.mp3" />
	<file name="Tube.mp3" />
</admc>

### Results

Much like the [bass sounds](#test-3---bass), the intelligibility (hah!) of the sound remains intact while still imparting a distorted/crunchy character.

I know that many of my readers won't care for this example at all, but I think it's one of the best examples of how useful this distortion can be. **Despite the terribly unappealing sound of the growl**, it still can be made _more_ aggressive sounding without completely destroying the intelligibility of the lyrics.


## Mix

<admc path="/assets/Couture/Dist/Mix/" title="Mix">
	<file name="Dry.mp3" />
	<file name="Couture.mp3" />
</admc>

This whole example was put together in about 25 minutes. The hi-hats are too loud, the levels are off, there's no kick drum presence (because it's only overheads), the guitars are kinda sloppy... I know. It's not fantastic.

The mix isn't exactly what I'd be aiming for, but I thought it would be interesting to hear all of these parts (with guitars added) together with and without Couture.

With couture on, everything becomes slightly more beefy and aggressive. This is without the attack transients being totally squashed in order to get that aggressive feel.


# Conclusion

The 'free' bit of the transient shaper is fantastic. It's not the most _accurate_ in that it does not catch every transient in lower volume passages, but that also leads it to sounding more natural than competing transient shapers in my opinion.

The distortion section is unique and if you decide to purchase it, it will be one of the few plugins in your arsenal with no replacement. It clearly does not sound good on everything, so it won't be the 'magic bullet' that makes your recordings amazing.

When you do find a use for the distortion section, there's nothing else that can do it. It's amazing for adding some light sound of'thickness' to sounds. When you want some extreme grit, it sounds much cooler than a bitcrusher.

The 'Mood' parameter [has some interesting uses as I've written about before]({% post_url 2018-08-21-A-more-natural-drum-noise-gate-with-Couture-and-Reaper %}). It's also useful for adding some variation to pumping pads, dynamic leads and it's **AMAZING** on screaming vocals combined with the 'Tube' distortion mode.


# Support Me!

This post took 12 hours to research, screenshot, record, write and edit. If you appreciate the information presented then <a href="/DonateNow/">please consider joining patreon or paying me for my time!</a>







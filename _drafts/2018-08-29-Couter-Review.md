---
layout: post
title: "Couture Transient Shaper And Distortion Review"
comments: true
date:   2018-08-29_09:44:05 
categories: music
tags: ['Review', 'Comparator']
image:
description: A review of Auburn Sounds Couture plugin
---

Let's start this one with a bang. Go download it right now. You have nothing to lose. The transient shaper portion is free to use.

Then head past the break for a more detailed review.

<!--more-->

**If you have any questions or comments, please comment below! I read every comment and respond to most.** No registration is necessary to comment, so don't be shy.

# Contents
{:.no_toc}
* TOC
{:toc}

# Transient shaping

I'm really getting in to this animation stuff. I've tried to make a graphic showing the basic concept of transient shaping.

Transient shaping is when a processor monitors the audio and looks for transients. It attempts to find when they start and when they end (or when **you** want it to start or end), then it allows you to adjust the transient portion of the signal itself.

An issue is that some folks confuse this with the attack stage in a compressor, or compressors in general. Compressors will affect the transient due to the attack phase of the envelope, however due to the _release_ phase they also affect the rest of the signal. It may be possible to have a compressor with an auto-attack that does an admirable job of opening up _just_ enough to let the whole transient pass, but the release stage will affect the rest of the signal somehow.

Some transient shapers _are_ just auto-attack compressors with a very quick release. Some monitor the 'speed' that the waveform changes and basically multiply that. Some do multiple variations.

Neither of these things are bad, or good. Compressors are probably more often the useful of the two, since changing the relationships between parts of sounds is often more powerful than isolating things.

I want to make it clear that the video above is simplified for visibility. There's more to how compressor envelopes work, and transient shapers are never that accurate, but hopefully you understand the basic concept

# Distortion with a twist

Normally distortion is relative to the absolute level of the signal. Loud parts of the signal are affected, and soft parts of the signal are affected less.

Couture does this in a rather unique way. It first analyzes the signal and then applies distortion that is multiplied by the current level.

Maybe that sounds confusing, so let me explain another way. 

* A normal saturation device works like this - there is a signal and a threshold. The closer the signal is to the threshold, the more it is saturated.
* Couture works like this - There is no threshold. Couture monitors the level at each point in time and _inversely_ applies saturation. The result is that low sounds are saturated equally as much as loud sounds.

It's a rather unique sound. It adds some meatiness to things like basses and vocals. Rock drums work fantastic with it.

The downside is that if it doesn't work, it just sounds really bad. There's very little middle ground. Either you try it and it's an amazing effect that nothing else can replicate, or it's terrible.

# Test 1 - Drums

Let's first test the Transient Shaper portion. I'm going to do this with 2 files: Drum overheads and a Snare Mic.

Ideally the transient shaper will only pick up the snare sounds in the snare mic. It would not miss any hits, and it will not accent any leakage.

The overheads should only have the kick and snare ideally.

To show this better I've taken the original sound, inverted the polarity and mixed it in with the effected portion. This will emphasize the differences (though it's not perfect since the latency compensation in Couture isn't exact). These are the "Inverted" files"

I have files without the inversion process so you can hear it "normally"

I've also included examples from my favorite transient processor, [TranReckon](https://www.eareckon.com/en/products/transreckon-transient-shaper.html) and the ever present [Native Instruments Transient Master](https://www.native-instruments.com/en/products/komplete/effects/transient-master/). Transreckon is labeled with "trans" and Transient Master is labeled with "TM".

Couture is the other files except Dry.

**THESE ARE EXTREME EXAMPLES TO SHOW FUNCTION** This is **NOT** intended to demonstrate good sounding usage.

  <script type="text/javascript" src="/admc/comparator.js?v={{ site.time | date:'%s' }}"> </script>
  <link rel="stylesheet" type="text/css" href="/admc/admc.css">
<admc path="/assets/Couture/Drums/" title="Drum Transient Tests">
	<file name="OHDry.wav" />
	<file name="OHProcessedInverted.wav" />
	<file name="OHProcessedNormal.wav" />
	<file name="SnareDry.wav" />
	<file name="SnareProcessedInverted.wav" />
	<file name="SnareProcessedNormal.wav" />
	<file name="SnareTransInverted.wav" />
	<file name="SnareTransNormal.wav" />
	<file name="SnareTMInverted.wav" />
	<file name="SnareTMNormal.wav" />
	<file name="OHTransInverted.wav" />
	<file name="OHTransNormal.wav" />
	<file name="OHTMInverted.wav" />
	<file name="OHTMNormal.wav" />
</admc>

It's the amazing [Comparator that I made entirely in vanilla javascript]({% post_url 2017-01-30-Comparator %}).

## Results

The snare test went very well. Using the detector bass to remove the bass allowed it to easily track the snare primarily. It does miss some hits in the rolls, but it does so consistently which sounds fine.

The overheads are also consistent, but even with the bass turned way up it didn't catch the kick drum as well as I'd like. I think you'll find that the other 2 company's processors did even worse though.

Transreckon does a _MUCH_ better job on the overheads, but worse on the snare. NI Transient Master, to me, sounds like it is inferior on all of these tests so far. Transient Master does do an excellent job of detecting transients

# Test 2 - Bass

Here we have a tricky sound for transient shapers: Deep Bass.

Some transient shapers will see the long low-frequency waves as transients themselves.

Once again I've included examples from my favorite transient processor, [TranReckon](https://www.eareckon.com/en/products/transreckon-transient-shaper.html) and the ever present [Native Instruments Transient Master](https://www.native-instruments.com/en/products/komplete/effects/transient-master/). Transreckon is labeled with "trans" and Transient Master is labeled with "TM".

Couture is the other files except Dry.

<admc path="/assets/Couture/Bass/" title="Drum Transient Tests">
	<file name="DivaDry.wav" />
	<file name="DivaProcessedInverted.wav" />
	<file name="DivaProcessedNormal.wav" />
	<file name="DivaTransInverted.wav" />
	<file name="DivaTransNormal.wav" />
	<file name="DivaTMInverted.wav" />
	<file name="DivaTMNormal.wav" />
</admc>

## Result

Couture does the best job here. It captures the hard note onsets well, and the lesser note onsets are still processed lightly. I think that this is the optimal result.

Transient Master does well at capturing _most_ of the note onsets, but it misses a few. Those missed transients end up making it sound strange.

My beloved Transreckon _nearly_ does it perfectly but it affects similar transients in different ways. The "capture" is correct, but the effect is not as good as couture.

# Conclusion

# Support Me!

This post took XX hours to research, photograph, write and edit. If you appreciate the information presented then <a href="/DonateNow/">please consider joining patreon or donating!</a>

<a href="https://www.patreon.com/bePatron?u=7465992"> <img class="patreon-button" src="/assets/Patreon.png" alt="Be a Patreon!"></a>
 
<form style="text-align: center;" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick">
<input type="hidden" name="hosted_button_id" value="BR247JAZBTUJJ">
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
</form>

**If you have any questions or comments, please comment below! I read every comment and respond to most.** No registration is necessary to comment, so don't be shy.


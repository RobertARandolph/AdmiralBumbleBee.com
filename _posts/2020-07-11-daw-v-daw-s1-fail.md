---
layout: post
title: "DAW v DAW - Part 7.1: Studio One 5 Live Jitter"
comments: true
date:   2020-07-11_10:06:08 
categories: music
tags: ['Studio One', 'DAW', 'Testing', 'Rant']
image:
description: Studio One Live Jitter.
header: /assets/Studio One/Timing/S1Jitter.png
header-caption: Live MIDI to Instrument Jitter
---

[Studio One 5 is out!](https://www.presonus.com/press/press-releases/PreSonus-Studio-One-5) just came out!

This would be an exciting day, if they managed to fix [one of the many **technical** issues](/tags.html#daw) with their product compared to the rest of the market, which they didn't.

Let's look at one of the _most irritating_ and [long standing](http://expressiveness.org/2012/12/04/midi-jitter) audible, and testable problems with Studio One: MIDI Input Jitter.

This is part one of a multi-part article. A full comparison of other DAWs will follow this article. This article is an explanation of the phenomenon using Studio One 5 as the demonstration software.

<!--more-->

**If you have any questions or comments, please comment below! I read every comment and respond to most.** No registration is necessary to comment, so don't be shy.

# Contents
{:.no_toc}
* TOC
{:toc}

# Disclaimer

**DO NOT TRUST ME**.

Run the tests yourself, on your own machine. I've provided information on the potential mechanisms causing this, audio samples, visual samples and instructions on how to reproduce.

**TRY IT YOURSELF**. Never trust some random guy on the internet when it's easy to use your own brain and your own hands.

(If you're not willing to put in the effort... then it might be worth assuming this is correct.)

# Prior work

I want to be sure that it's understood that this is _by no means_ original work. [Geert Bevin has covered this previous](http://expressiveness.org/2012/12/04/midi-jitter) and this provides us a historical overview along with testing methodologies.

I will be reproducing this work with some added information while using newer versions of the software.

# Video

<iframe width="800" height="400" src="https://www.youtube.com/embed/XgQpz-IygMQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

A video with the same information as this article is available above. Like, Subscribe, Thumbs Up, retweet, whatever... I don't care.

# Overview

I want to make sure that this is _fully_ understood, so I'll make this as simple as possible:

## Action

* The user **INPUTS** MIDI and it is passed to an instrument plugin to be output.

_NOTE_: Please recognize that this is live input. Playback of internal data is a separate topic.

## Desired Behaviour

* The audio from the instrument is output at the exact time that the MIDI input occurs.

## Actual Behaviour in Studio One versions 1.0 - 5.0

* The audio from the instrument is _not_ output at the same time as the MIDI.

The audio is output _at the boundaries of the buffer_ rather than at the boundaries (note-on/note-off) of the MIDI event.

## Audibility

<script type="text/javascript" src="/admc/comparator.js?v={{ site.time | date:'%s' }}"> </script>
<link rel="stylesheet" type="text/css" href="/admc/admc.css">
<admc path="/assets/Studio One/Timing/Audio" title="Live VST Instrument Timing">
	<file name="Live2048.wav" />
	<file name="S12048.wav" />
</admc>

I know someone will want to chime in with "BUT YOU CAN'T TELL THE DIFFERENCE ANYWAY" or "n-milliseconds isn't much". I can nip that in the bud easily.

These samples are 2048 sample buffer, at a sample rate of 48,000z. Tempo is 180bpm and note onsets are quarter notes.

Here are audio files from Studio One 5.0 and Ableton Live 10, performed on the _exact_ same test setup. The Live file was exported, imported into Studio One, and exported from Studio one in case some sort of resampling/audio rendering bug would be at play.

The effect is reduced with lower buffer sizes [as described below](#test-results-version-3), but it is still audible in certain contexts. I encourage you to test yourself to see what the limits of your workflow are.

Given that other products do not have this problem, I feel that _any_ deviance is unacceptable even if it was inaudible.

## Impact

* Performance might be impacted from audible jitter.
    * This is variable relative to audio settings.
* [Live recordings may not match the result of recording _then_ playing back. (Remember! Live input->plugin and internal input->plugin are different scenarios)](#test-results-version-2)
* Resampling workflows are affected.
* Trust in the Presonus development process is potentially altered.
* Personal embarrassment for not noticing this problem.
* Forum arguments, of course.

# Test Setup

{::nomarkdown}
<img src="/assets/Studio One/Timing/Flow.png" alt="Test Flow">
<div class="image-caption">Test Flow</div>
{:/nomarkdown}

The test consists of:

* A MIDI sequencer at a set tempo playing quarter notes.
* The DAW being tested taking MIDI input from the sequencer.
* The DAW being tested internally forwarding that MIDI data to an instrument plugin.
* The DAW being tested internally recording the output of that instrument plugin.

## Mitigations 

There are potential problems with this setup.

**I'll list these issues and how I'm mitigating their effect.**

* The sequencer's output might jitter.
    * Utilize the same sequencer output to test multiple DAWs at once - If any product consistently demonstrates no input jitter, then we can conclude that the sequencer signal is clean.
* Sequencer's output might drift.
    * Sequencer drift is expressed visually as an difference in note offset that decreases or increases linearly. Jitter is a change in offset that varies from note to note. This is a test for _jitter_.
    * Sequence drift is heard as a constant tempo. Jitter sounds... jittery.
* MIDI input device jitter/timing issues
    * Utilize the same MIDI input device to test multiple DAWs at once - If any product consistently demonstrates no input jitter, then we can conclude that the sequencer signal is clean.
* The instrument plugin might be broken.
    * Option 1 - Use multiple plugins and compare their outputs to monitor consistency.
    * Option 2 - Use a native instrument plugin. This places the entirety of the error on the manufacturer as a whole, but does not separate the error source between DAW and plugin.
* The testing system might be incorrect.
    * Test multiple DAWs - If a number of products _consistently_ produce correct results then it can be assumed that the test is likely to be an indicator of error.
        * This does _not_ necessarily mean that we're testing what we think we are. There could be a secondary source of error yet uncovered. Correlating results with the proposed mechanism of action will alleviate this.
* Time clock/beat/whatever.
    * This test is not concerned with, or affected by, time clocks. The ability of some products to consistently operate as expected verifies this.
* Input modifications may change results
    * All quantize settings will be turned off.
* Audio/MIDI might be delayed
    * Recorded files will be shifted so that the onset of the audio stream matches on first hit.
* Test results may depend on system configuration.
    * Tests were personally repeated by me on Windows, macOS and on 3 different machines.
    * Tests were performed by 4 other parties privately while I was writing this article.
    * This issue has been reproduced by other parties for [at least 8 years](http://expressiveness.org/2012/12/04/midi-jitter)
* Audio routing may affect outcome.
    * The tests were repeated with audio capture setup the following ways:
        * Internal audio routing in the DAW.
        * System audio capture.
        * Microphone capture from speakers.

I'll be addressing all of these while testing to ensure the accuracy of results.

The best mitigation is for **YOU** to read this article, attempt to understand the issue, and repeat the tests yourself!

# Test Results

{::nomarkdown}
<a href="/assets/Studio One/Timing/Jitter.png">
<img src="/assets/Studio One/Timing/Thumbnails/Jitter.png" alt="Live Jitter Results">
</a>
<div class="image-caption">Live Jitter Results (Click for larger image)</div>
{:/nomarkdown}

This is the result of the following process:

* Record - Sequencer->MIDI Track->Audio Track.
* Align first beat of recorded audio to grid.
* Take image.
* Annotate image.

There's **UP TO 16MS OF JITTER** at 180bpm, 2048ms sample buffer. The jitter you experience is relative to note onset relative to buffer size (or chunk size).

## Test Results Version 2

{::nomarkdown}
<a href="/assets/Studio One/Timing/LivePlayback.png">
<img src="/assets/Studio One/Timing/Thumbnails/LivePlayback.png" alt="Live vs Playback">
</a>
<div class="image-caption">Live vs Playback (Click for larger image)</div>
{:/nomarkdown}

The issue is compounded further if we compare the signal you hear live against the signal that you hear on playback.

* The top MIDI track is the data recorded from the external sequencer.
* The middle track is the audio that you hear when monitoring during record or playing live.
* The bottom track is the audio that you hear if playing back the MIDI that was recorded.

This is a definitive indicator that what you hear during live monitoring with plugin instruments _does not match_ what you hear when playing back.

## Test Results Version 3

{::nomarkdown}
<a href="/assets/Studio One/Timing/ManyBuffer.png">
<img src="/assets/Studio One/Timing/Thumbnails/ManyBuffer.png" alt="Audio Buffer Size Variations">
</a>
<div class="image-caption">Audio Buffer Size Variations (Click for larger image)</div>
{:/nomarkdown}

It would be ideal to have a third test where live audio is recorded with Studio One being set to different buffer sizes. Studio One 5 appears to limit live track->track recording when the buffer size is less than 2048 (the maximum setting).

I've worked around this by using [Audio Hijack](https://rogueamoeba.com/audiohijack/) to record the audio, then import it back into Studio One for display. Extra software introduces more variables that might affect the testing, however there's no plausible mechanism by which this would affect this testing scenario. Be aware of it regardless.

I added lines at the the beat so you can easily see the variance.

The results indicate that lowering buffer size reduces the effect, but does not eliminate it.

Worryingly, the difference between what you hear live and what you hear during playback **varies with buffer sizes**.

# Hypothesis

{::nomarkdown}
<a href="/assets/Studio One/Timing/Hypothesis.png">
<img src="/assets/Studio One/Timing/Thumbnails/Hypothesis.png" alt="What I think is happening">
</a>
<div class="image-caption">What I think is happening (Click for larger image)</div>
{:/nomarkdown}

DAWs process events in 'chunks', usually the size of your audio buffer (or of a secondary buffer or similar concept).

The note's onset may not align with the buffer's onset. Offset data must be forwarded to the plugin for the note to be triggered at the correct time. (Note onset - buffer onset) must be communicated to the plugin.

If the offset is not communicated then the note will be played back at the next nearest buffer start. The buffer's onset is rarely aligned with the tempo, so the result is a 'jittery' output which very rarely aligns with the input.

## The fix

{::nomarkdown}
<a href="/assets/Studio One/Timing/Offset.png">
<img src="/assets/Studio One/Timing/Thumbnails/Offset.png" alt="The fix - Offset">
</a>
<div class="image-caption">The fix - Offset (Click for larger image)</div>
{:/nomarkdown}

If the hypothesis is correct, then the fix is to properly send offset data.

Send MIDI data in chunks, but include offset data so that the downstream consumer can play the received notes at the appropriate time.

# Considerations

The problem that I'm describing can be confusing. So I want to clarify a few points:

* This does not affect raw MIDI recording.
* This has nothing to do with delay between input/output (this is compensated in the tests).
* This has nothing to do with drift.
* MIDI Clock and MTC are not involved, nor would they fix this problem.
* Other (the majority of!) DAWs pass all of these tests easily.

Buffer sizes commonly used for live input will demonstrate this problem less significantly. Even though the problem is naturally reduced by the context in which it is presented, it is still audible in a variety of music contexts. Despite even the musical effect of the problem, it is a technical issue that's solvable and has been solved by competing products.

# Conclusion

I understand what it's like to be a fan of a product and be faced with a glaring issue like this.

* You feel embarrassed that you didn't notice it.
* You feel attacked, because surely you're a good enough musician/engineer _to have noticed this if it was really a problem_.
* You feel ripped off by the company that you believe let you down.

Maybe you even spend the mental effort to come up with explanations for this not being an issue to help save face in your own mind.

These feelings are real, and I've experienced them all. I've made a fool of myself defending software or ideas that were simply wrong because of my investment in those ideas/products. I'm sure I've done it on this very website and not realized it.

I'm presenting this article as a series of carefully notated tests that you can try on your own machine, with evidence of results and an educated guess at what the problem is.

I hope that this can be viewed as what it is: an investigation into the functionality of software.

It is not an attack on Presonus. It is not an attack on its users.

However, it is obvious that I've singled out Studio One 5 for this first installment of the series. Studio One has had this issue for over a decade. Studio One 5 is the latest release of all major DAWs. I feel these are points that make Studio One the most gregarious offender of products that demonstrate the behaviour.

Therefore I chose to use Studio One for the article where I describe the behaviour.

I hope Presonus fixes this issue, after 10+ years, as soon as they can.

The next article will be exploring the behaviour of other DAWs.

# Meta

This post took:

* 67 hours of testing and research.
* 9 hours to write and edit. 
* 12 hours to make a video. 

If you appreciate the information presented then <a href="/DonateNow/">please consider joining patreon or paying us for the time spent bringing you quality content!</a>

<a href="https://www.patreon.com/bePatron?u=7465992"> <img class="patreon-button" src="/assets/Patreon.png" alt="Be a Patreon!"></a>

<form style="text-align: center;" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick">
<input type="hidden" name="hosted_button_id" value="BR247JAZBTUJJ">
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
</form>

**If you have any questions or comments, please comment below! I read every comment and respond to most.** No registration is necessary to comment, so don't be shy.


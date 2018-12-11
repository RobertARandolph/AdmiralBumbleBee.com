---
layout: post
title: Cool Features in Digital Performer... Part 1
comments: true
date:   2016-12-10_10:35:50 
categories: music
tags: ['Digital Performer', 'DAW']
---

![Polar!](/assets/DP/Featurespt1.png)

As I've been a Digital Performer user for a couple years, I thought I'd do a bit of a pseudo-review on DP. I'm going to cover some of the cool (and often unique) features in DP9, and I will also cover some of the downsides of using DP.

Be sure to check out the other DP Features posts!

[Part 2]({% post_url 2016-12-11-Cool-Features-in-Digital-Performer...-Part-2%})
[Part 3]({% post_url 2016-12-12-Cool-Features-in-Digital-Performer...-Part-3%})
[Part 4]({% post_url 2016-12-13-Cool-Features-in-Digital-Performer...-Part-4%})
[Part 5]({% post_url 2016-12-14-Cool-Features-in-Digital-Performer...-Part-5%})

Click through for some neat features!

<!--more-->

# Contents
{:.no_toc}
* TOC
{:toc}

# POLAR

![Polar!](/assets/DP/Polar.png)

If you are familiar with the concept of 'cycle record' or 'loop recording' then you _almost_ know what POLAR is. With loop recording, the previous loop is put in the background and you no longer hear it while recording the next loop. With POLAR you hear all previous takes as you record each subsequent take. If you are familiar with Ableton Live's Looper plug-in then you know basically how POLAR works. If you've used a guitar looper pedal then you know too.

With any sort of basic midi control, you can create yourself a full-featured guitar looper pedal.

POLAR does have some useful features that you won't find on your average guitar looper pedal though. You can trigger recording via an audio threshold, group overdubs, easily do stereo overdubs (drums! difficult lead parts!), and your looping session is fully synced to your project. Doing vocal harmonies is fun with POLAR. Creating complex multi-layer guitar solos is addictive. Even using it to create drum tracks 1 drum at a time is possible for the coordination impaired.

Then when you're done, you can just dump each overdub in to its own track in your project, or export them to use elsewhere.

Note: This functionality is available for MIDI recording without any plug-in necessary. Traditional audio loop recording is possible as well (where the previous take is not played back with each subsequent take).

# Plug-ins part 1 - MasterWorks

There's a bit of a [meme](https://en.wikipedia.org/wiki/Meme) about not using stock plug-ins in your DAW. In DP that would be quite the mistake. DP comes with a suite of excellent sounding plug-ins. The first that I'd like to take about is what is called the 'MasterWorks Series'.

There's 6 plug-ins in this pack of plug-ins.

## MasterWorks Equalizer

![MasterWorks Equalizer](/assets/DP/MWeq.png)

I actually thought I was going to write something lukewarm about this EQ, except I've been going through dozens of old DP projects and I realized that I used this very often. It was only when [Fabfilter Pro-Q 2](http://www.fabfilter.com/products/pro-q-2-equalizer-plug-in) came out that I began to use MW EQ less often.

While this is a fairly standard EQ, it does have 1 feature that makes it stand out: "Audition with noise". This adds a small bit of pink noise to the signal when you touch a parameter. The added noise makes it easier to hear the EQ's effect on the signal, and it's particularly useful when doing any sort of 'seek and destroy' type operation.

The multiple filter-types available are very useful as well. Mostly they vary the Q of the filter as the band gain is increased, but in different ways. Using an appropriate filter type can morph the MW EQ from a surgical kick drum EQ to a gentle Vocal filter.

## MasterWorks Leveler - LA2A emulation

![MasterWorks Levelr](/assets/DP/MWleveler.png)

This is one of the best [LA2A](http://www.uaudio.com/hardware/compressors/la-2a.html) emulations out there. I owned several LA2A emulations when I first switched to DP, and I've since sold them all.

Not only do you get to select from 4 different eras of LA2A, but the emulation goes so far as to emulate the photocell warmup time. You can bypass this warmup, or save the state of warmup at any point.

## MasterWorks FET-76 - 1176 emulation

![MasterWorks FET-76](/assets/DP/MWfet.png)

Ah yes, the ubiquitous [1176](http://www.uaudio.com/hardware/compressors/1176ln.html). This is Motu's emulation of the famous unit, and they did quite an excellent job.

I can not say that it is my favorite 1176 emulation, but unless you've owned a selection of hardware units (as I have), then I think the large majority of users would be exceptionally happy with this plug-in.

## MasterWorks Compressor - Multiband Compressor

![MasterWorks Compressor](/assets/DP/MWcomp.png)

The MasterWorks Compressor is a fairly vanilla multiband compressor that has been executed well. It is an _excellent de-esser_ and invaluable on a Reverb send to reduce unwanted artifacts. I've also used it to fix some unruly kick drums many times.

Currently I always reach for [Fabfilter Pro-MB](http://www.fabfilter.com/products/pro-mb-multiband-compressor-plug-in) any time that I need a multiband compressor, but considering that MW Comp comes free with DP... I think it is a fantastic addition.

## MasterWorks Limiter

![MasterWorks Limiter](/assets/DP/MWlimiter.png)

While this isn't [Invisible Limiter](http://aom-factory.jp/products/invisible-limiter/), [Elephant](http://www.voxengo.com/product/elephant/), [Limitless](https://dmgaudio.com/limitless), [Ozone](https://www.izotope.com/en/products/master-and-deliver/ozone.html?gclid=COLunK6Q6tACFYxkhgodcu8GkA) or [Xenon](http://www.pspaudioware.com/plugins/dynamic_processors/psp_xenon/) it is still a great limiter.

In fact, I would much rather to use MW Limiter over the pervasive [Waves L2](http://www.waves.com/plugins/l2-ultramaximizer) Limiter. I even frequently use MW Limiter instead of [Fabfilter Pro-L](http://www.fabfilter.com/products/pro-l-brickwall-limiter-plug-in).

## MasterWorks Gate

![MasterWorks Gate](/assets/DP/MWgate.png)

MasterWorks gate is simply a good gate plug-in. Period. It has proper sidechaining from audio, filtered input or midi. All the basic controls exist and it has a display that makes it fairly easy to understand what's going on.

When using the midi side-chain option along with any sort of clever midi-note-generation, the MW Gate can be a cool envelope destroying machine or rhythmic envelope generator.

# Tracks Overview window

![Tracks Overview Window](/assets/DP/TO.png)

When working in a DAW, often you will want to get a large overview of your project. This is especially common when working with relatively large projects. Basically every other DAW requires that you setup a window-layout and manually zoom out to get a large overview of your project.

DP Has the Tracks Overview Window. This view allows you to have excellent 'macro' control of your project. Often when doing anything except editing or mixing, the Tracks Overview Window is the place to be. Check out the image of the tiny project to get an idea of how useful this view can be.

![Track Overview Controls](/assets/DP/TOcontrols.png)

The TO also allows a DP user to be in total command of projects with 100s of tracks. With the track visibility pane and the TO, navigating a 500-600 track project is a breeze, if not outright pleasant. Even when working in small projects the TO allows the user to do most anything they need to without having to fool around with scrolling, zooming, searching for settings in a channel strip or whatever.

![Tracks Overview horizontal split](/assets/DP/TOsplit.png)

With DP's consolidated window, it's possible to have any of the other editors open with the TO available on the top or bottom pane. Also be sure to see those track visibility panels on the left that allow you to have different tracks visible in each pane. There's menu items to quickly show 'All Audio', 'All record enabled' etc... and you can save track visibility layouts to recall later. Often I'll have a top pane with just the audio tracks I'm recording, and the bottom is a full project overview, or I'll have the multitrack drums I'm editing in the bottom while I have a single track waveform editor open up top for small adjustments. The possibilities are massive and make for very quick and informed workflows.

![Tracks Overview horizontal split](/assets/DP/TOsplit2.png)

If you've used a DAW that has a sort of 'overview lane', the TO is this concept but on steroids. I can't emphasizes how useful this view is.

(Hmm... is that a branched offline undo history I see?)

# Notes

Note: All images are taken with the '8 bit' theme for DP9.

Be sure to check out the other DP Features posts!

[Part 2]({% post_url 2016-12-11-Cool-Features-in-Digital-Performer...-Part-2%})
[Part 3]({% post_url 2016-12-12-Cool-Features-in-Digital-Performer...-Part-3%})
[Part 4]({% post_url 2016-12-13-Cool-Features-in-Digital-Performer...-Part-4%})
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
---
layout: static-post
title: Free and decent plug-ins!
comments: true
date: 2018-09-25_11:56:11
categories: music
tags: ['Review']
image: /assets/Reaper/ReaPack.png
description: Free crossplatform plug-in list.
---

There are many free plug-ins on the market, there are many places where you can go and find free plug-ins that you know are going to be decent.

I aim to make this such a place.

This the place where you can find plug-ins that I have personally vetted and decided that they are worth trying.

**Last Updated** - {{ page.last_modified_at | date: '%Y %B %d' }}

# Contents
{:.no_toc}
* TOC
{:toc}

# FAQ

## What criteria is used?

There are three main criteria, and these are taken into account in a balanced manner. You can think of it like this: each category is rated on a scale from 1 to 10. If the total score is above 20 then it will make the list.

* GUI - the GUI must be both usable and easy to look at. There must not be any glitchiness, bugs, menu diving or other common problems that interfere with UX. A big issue that I really dislike is when control printers are scaled so that commonly used values are difficult to select, this will immediately disqualify a product.
* DSP quality - there should be no zipper noise, aliasing should be dealt with in a reasonable manner, filters should respond as drawn, envelope times should be near standardized values (in the case of compressors near the 60% value) and in general the product should sound pleasing
* Ease of acquisition - if a product is difficult to download and install then it will not be included.

I will only be considering [gratis](#gratis)products that are both available on macOS and Windows. **64-bit is a requirement**. There will be no 32-bit products on this list for Mac OS or Windows. (unless I make a mistake of course...)

I will not list “magware”, which is software that only comes with the purchase of a magazine. Any product that requires purchase of any sort will not be listed.

“Free versions” with ridiculous limitations will not be listed. I will only list free versions of commercial products if they feel fully functional in their own right.

## X and Y plug-in is not listed!!

Thank you for letting me know, this may have been an oversight. There may also be a chance that I simply do not feel that this plug-in is worth the time of attempting to use.

I do not aim to list every single free plug-in on this page. This plug-in list is only intended to list products that I feel are on par with commercial alternatives in some manner.

## No, but really X plug-in is amazing! I use it all the time!

If you told me about it than I gave it a second look, and if it is still not here and I'm sorry it will not be here unless it is updated in the future.

I do keep track of all requests, and my turnaround time is about 1 week.

## What does "free" mean?

There are two common terms used, "free as in speech" and "free as in beer". Let me clarify on my use of free:

* Libre - "free as in speech" - these are products that are open source, which means that you are able in some manner to modify the product for your specific use as long as being permitted other freedoms by the license of the software. **NOT ALL LIBRE SOFTWARE IS GRATIS**. While you may be offered source code and liberties with the source, the author may still charge for their work. Be ethical and be responsible.
* Gratis - "free as in beer" - these products do not require payment to acquire. You may not be free to modify, distribute, copy or change the software in any way, but you can acquire the software and use it without paying for the opportunity.

The gratis section I will be judging much more harshly, because nobody except for the author has the ability to improve the software. Since you are put at the mercy of the author, who may not be maintaining the software at all, I must judge the software as if there is no potential for it to improvement at all.

Libre software has potential to be improved by you, or anyone else. Thusly I evaluate this software as having the potential to be excellent, but I still will only list things that I think are worth trying.

**If a product is both gratis and libre then it will be listed in the libre category.**

## LV2

[LV2](http://lv2plug.in) is a plug-in format that has been primarily used by open source software, and you may be most familiar with that if you are a Linux DAW user.

[It is possible to run LV2 plug-ins on macOS as I've described here]({% post_url 2017-11-29-Run-LV2-plugins-on-macOS %}).

Windows users... sorry. I have no clue how you can easily utilize LV2 plug-ins without changing your DAW.

# Libre

These are effects that You can change to suit your preferences since you have access to the source code and you are allowed to modify it.

As I mentioned before I do not hold these to the same standard as I do with the gratis plug-ins, because you are free to modify these as you need.

I will only be forgiving issues with the GUI, these plug-ins must still sound as good as their gratis counterparts.

**NOT ALL OF THESE ARE GRATIS**. Just because the source code is available and you may be offered freedom with it, that does not not mean that the author is not charging money for their work.

## DAWs

* [Ardour](http://ardour.org) - The premier libre audio software.
* [Q-Tractor](https://qtractor.sourceforge.io) - I used Q-tractor for a few hours and found it to be a surprisingly complete DAW for genearl purpose work.
* [Radium](http://users.notam02.no/~kjetism/radium/) - open source tracker with a lot of modern features, this is really cool software!

## Audio Software

* [Sonic Visualizer](https://www.sonicvisualiser.org) - this is a **MUST HAVE** software for _anyone_ doing digital audio. Fantastic tools for visualizing audio. Try importing something and starting with one of the “layers” (right click in the main view).

## Plug-in packs

* LV2
    * [ZamAudio](http://www.zamaudio.com/?p=976) - comprehensive collection of plug-ins in LV2 format. I do not know about VST versions. ZamComp and ZaMultiComp are the standouts here.
    * [LSP](http://lsp-plug.in) - _Excellent_ set of plug-ins currently only available for Linux. The GUIs aren't pretty, but they are technically accurate and imminently useful 
    * [eq10q](http://eq10q.sourceforge.net) - excellent EQ and Compressor options.

## Equalizers

* LV2
    * [x42 Equalizer](https://x42-plugins.com/x42/x42-eq) - my favorite lv2 plug-in period. [See a mini-review I did here]({% post_url 2017-09-30-Review-of-Mixbus-effect-plugins %}#x42-eq).

## Metering and Measurement

* LV2
    * [x42 Meter Collection](https://x42-plugins.com/x42/x42-meters) - a collection of metering products that surpass what you will find in most commercial suites.
    * [x42 Oscilloscope](https://x42-plugins.com/x42/x42-scope) - my favorite oscilloscope plug-in. 
    * [Kmeter](http://www.mzuther.de/en/software/kmeter/) - [k-metering solution](https://en.wikipedia.org/wiki/K-system)

## Guitar and Bass

* LV2
    * [Guitarix](http://guitarix.org) - fantastic package for guitar and bass amplification.


## Reverb

* LV2 and VST
    * [Dragonfly Reverb](https://github.com/michaelwillis/dragonfly-reverb) - it's based on freeverb, which some people aren't enamoured with, but regardless of your opinions you should give it a shot. There's a lot you can do with it that simply aren't possible with some of the other popular freeverb clones. Worth the DL, and your time.

## Modulation

* LV2
    * [x42 whirl](https://x42-plugins.com/x42/x42-whirl) - rotary speaker simulator that aims for authenticity. Easily the best free option out there that competes nicely with expensive commercial offerings.

## Virtual Analog

* LV2
    * [setBFree](https://x42-plugins.com/x42/setBfree) - "Analog" I suppose. Beautiful [Hammond B3](https://en.wikipedia.org/wiki/Hammond_organ) emulation. You'd be hard pressed to find better options, though you may find products with a better GUI

* VST
    * [Surge](https://surge-synthesizer.github.io) - Easily the best open source synth on the market if you are looking for GUI-based options.

## Modern Synthesis

* VST
    * [zynaddsubfx](http://zynaddsubfx.sourceforge.net) - not only the best free software synthesizer, but one of the best synthesizers available on the market _period_.
    * [dexed](https://asb2m10.github.io/dexed/) - [Yamaha DX-7 emulation](https://en.wikipedia.org/wiki/Yamaha_DX7) and it does it well.
    * [Helm](https://tytel.org/helm/) - this is simply the best free synthesizer on the market in my opinion. It is a must-have for any one that uses software synthesizers.

* VST/LV2
    * [Ryukau plugins](https://github.com/ryukau/VSTPlugins/releases) - Enveloped Sine and Iterative SinCluster in particular are interesting.

## Sampler

* VST/LV2
    * [sfizz](https://sfz.tools/sfizz/) - [SFZ format](https://sfzformat.com) player, of which there [are many](https://www.kvraudio.com/forum/viewtopic.php?t=526555).

# Gratis

These are plug-ins that you can acquire without needing to spend money.

## DAWs

* [Waveform Free](https://www.tracktion.com/products/waveform-free) - The _best_ gratis DAW that isn't libre.
* [Cakewalk](https://cakewalk.bandlab.com) - **WINDOWS ONLY** I have included this because it is a great product despite being Windows only.

## Software

* [Lacinto ABX](http://lacinato.com/cm/software/othersoft/abx) - Software for doing blind tests between audio files.

## Plug-in packs

* VST
    * [Fullbucket synths](https://www.fullbucket.de/music/vst.html) - large collection of free synthesizers that sound decent, though the GUIs aren't exactly beautiful.
    * [MeldaFree](https://www.meldaproduction.com/product/keyword?keyword=free) - Nagware, but still free. The most comprehensive set of useful free plug-ins.
    * [Bluecat Free](https://www.bluecataudio.com/Products/Bundle_FreewarePack/) - Not the prettiest, but less visually complex than the Melda set if that doesn’t work for you.
    * [Hornet](https://www.hornetplugins.com/plugins/category/free-vst-plugins/) - Harmonics and Fat FET stand out in this for me, but you may find the others useful.
    * [Hofa](https://hofa-plugins.de/en/plugins/4u/) - brilliant free tools. The Goniometer, Blindtest and Dynamic TiltEQ should be a stape in any studio.
    * [AuburnSounds](https://www.auburnsounds.com) - Graillon, Panagement and Couture have usable free versions. [I reviewed Couture here]({% post_url 2018-09-02-Couter-Review %})
    * [HY plugins](https://hy-plugins.com/plugins/vst/vst-effect/) - most of the commercial products have a free version that is worth downloading.
    * [SocaLabs](https://socalabs.com) - THe GUIs aren't that great, but there's some unique things here that you won't find anywhere else.

## Equalizers

* VST
    * [Nova](https://www.tokyodawn.net/tdr-nova/) - This is both an equalizer and a dynamic equalizer. nova is a must-have for anybody, and the only reason you wouldn't have it is if you own the [gentleman's edition](https://www.tokyodawn.net/tdr-nova-ge/)
    * [Nova-67P](https://vladgsound.wordpress.com/plugins/nova67p/) - this is the precursor to Nova, and it’s an interesting alternative. I prefer to use Nova in this case.
    * [SlickEQ](https://www.tokyodawn.net/tdr-vos-slickeq/) - it took me a while to warm up to this product, but I now use the [gentleman's addition](https://www.tokyodawn.net/tdr-vos-slickeq-ge/) as my secondary most used EQ. Get it.
    * [PTeq-x](https://www.kvraudio.com/product/pteq-x-by-ignite-amps) - _amazing_ sounding EQ. Must have.
    * [SonEQ](https://sonimus.com/products/soneq/) - My favorite free simple hardware-like EQ.
    * [Overtone GEQ](https://www.voxengo.com/product/overtonegeq/) - this is not _just_ a graphical equalizer, it had some nice harmonics to you whatever you do.
    * [Luftikis](https://www.kvraudio.com/product/luftikus-by-lkjb) - german for “airhead”, it’s an apt name. Maag eq4 is the commercial equivalent, but Luftikis is a fine alternative.
    * [sTilt](https://www.tb-software.com/TBProAudio/stilt.html) - this is what's called a tilt-shift filter. It equally reduces high and low end inversely proportional to each other.
    * [QRange](https://lkjbdsp.wordpress.com/qrange/) - Interesting linear phase equalizer having a bit of a laugh at [ThEQorange](https://www.maat.digital/theqorange/). However, it's still worth a try.

## Dynamics

* VST
    * [Dcam Freecomp](https://www.fxpansion.com/products/dcamfreecomp/) - brilliant free compressor. **REQUIRES LOGIN/SIGNUP**
    * [Kotelnikov](https://www.tokyodawn.net/tdr-kotelnikov/) - The best free 'clean' compressor out there. [The gentleman's edition](https://www.tokyodawn.net/tdr-kotelnikov-ge/) ends up on most of my projects.
    * [W1 Limiter](http://www.yohng.com/software/w1limit.html) - this is not here because it sounds amazing, but because it is a great emulation of the Waves L1 limiter that is somehow loved by many people.
    * [DC1A](https://klanghelm.com/contents/products/DC1A/DC1A.php) - I'm not in love with DC1A, but I am with its [big brother DC8C3](https://klanghelm.com/contents/products/DC8C/DC8C.php). Both are must haves, especially if you're a dynamics geek.
    * [Mjuc Jr.](https://klanghelm.com/contents/products/MJUCjr/MJUCjr.php) - [MJUC](https://klanghelm.com/contents/products/MJUC/MJUC.php) was product of the year when it was released, and Mjuc Jr. is a must try.
    * [Molot](https://vladgsound.wordpress.com/plugins/molot/) - This baby is a blast, literally. If you want clean soft compression, go elsewhere. If you wanna blow things up, MOLOT is your choice among $200+ competition.
    * [Limiter 6](https://vladgsound.wordpress.com/plugins/limiter6/) - The precursor to [Limiter 6 GE](https://www.tokyodawn.net/tdr-limiter6-ge/). The €50.00 is worth  it, but I know of no better free VST limiter.
    * [Feedback Compressor II](https://www.tokyodawn.net/tdr-feedback-compressor-2/) - The precursor to [Kotelnikov](https://www.tokyodawn.net/tdr-kotelnikov/), however I prefer to use Feedback Compressor on bass instruments. It’s possible to get a nearly identical sound with Kotelnikov, but with  more effort. I do prefer Kotelnikov * for master bus compression though.
    * [Frontier](https://d16.pl/frontier) - I would not recommend this for final limiting, but used on various tracks it’s quite fun and versatile.
    * [A1TriggerGate](http://www.alexhilton.net/A1AUDIO/index.php/a1triggergate) - this is another excellent plug-in from Alex Hilton. It is a sequenced gate.
    * [Rough Rider](https://www.audiodamage.com/pages/free-downloads) - It's ugly, it sounds ugly, but I used this thing a lot for years. Still fun.
	* [Loudmax](https://loudmax.blogspot.com) - An excellent true peak limiter! Surprisingly how good this is for a free plugin.

## Metering and Measurement

* VST
    * [Youlean](https://youlean.co) - Must-have metering solution.
    * [dpMeter 3](https://www.tb-software.com/TBProAudio/dpmeter3.html) - I don’t use Youlean, I use dpMeter 3 for my level metering needs (along with vumt deluxe which is not free)
    * [Span](https://www.voxengo.com/product/span/) - Span is basically the de facto frequency analyzer plug-in on the market, just get it.
    * [Correlometer](https://www.kvraudio.com/product/correlometer-by-voxengo) - This tells you the correlation between left and right channels, which also can correspond to 'stereo width'. It can be used for testing per-band correlation between two sources by routing the signals to the Left and Right channels of the plugin.
    * [MvMeter2](https://www.tb-software.com/TBProAudio/mvmeter2.html) - [as described in my Gain Staging post]({% post_url 2017-11-01-Gainstaging-for-the-modern-musician %}), having a VU meter is useful (if not essential), and this is an excellent free one.
    * [LVC-Meter](https://lvcaudio.com/plugins/lvc-meter/) - Visual metering with EBU, K-System, spectral analyzers etc..
    * [EQ Curve Analyzer](https://www.bertomaudio.com/eqca.html) - Neat tool for analyzing frequency response curves of filters.

## Distortion

* VST
    * [Saturation Knob](https://www.softube.com/index.php?id=satknob) - decent saturation. It will alias, so I suggest not using on sources with a lot of high frequency content.
    * [IVGI](https://klanghelm.com/contents/products/IVGI/IVGI.php) - My #1 free saturation module. This is the little brother of [SDRR](https://klanghelm.com/contents/products/SDRR/SDRR.php) which is amazingly cheap and worth 10x the price.
    * [Tube Amp](https://www.voxengo.com/product/tubeamp/) - I delightfully easy to use tube emulation plug-in.
    * [Krush](https://www.tritik.com/products/krush/) - this is not a good sounding distortion, it’s a FSU (- stuff up) monster. A LOT of fun.
    * [Fuzz Plus](https://www.audiodamage.com/pages/free-downloads) - Classic and simple fuzz.

## Filters

* VST
    * [Tal-filter](https://tal-software.com/products/tal-filter) - a simple autofilter.
    * [Filter Jam](https://www.audiothing.net/effects/filterjam/) - a simple resonant filter.

## Reverbs

* VST
    * [Tal-reverb](https://tal-software.com/products/tal-reverb) - not particularly useful for general work, but on synthesizers with long attack times it can sound neat.
    * [Tal-reverb-4](https://tal-software.com/products/tal-reverb-4) - less clingy sounding than the tal-reverb, this is more useful for general reverb needs.
    * [Orilriver](https://www.kvraudio.com/product/orilriver-by-denis-tihanov) - Orilriver is my favorite free VST reverb, and I like it so much that I often use it instead of many of my more expensive commercial reverb products.
    * [OldSkoolVerb](https://www.voxengo.com/product/oldskoolverb/) - OldSKoolVerb isn't the best sounding reverb out there, but there's been a number of records made with a very similar sound, so now it has its place in the production world. It can be a great sound design tool as well.
    * [Ambience](http://www.smartelectronix.com/~magnus/) - This is in the lineage of [SparkVerb](https://www.uvi.net/en/effects/sparkverb.html). It’s a fantastic free reverb.
    * [Riviera](https://nuspaceaudio.com/2017/02/07/riviera-fast-hybrid-reverb-plugin-for-modeling-high-dimensional-spaces/) - I nearly didn’t list this because of how ugly it is, but it sounds nice.
    * [Verbate Basic](https://acondigital.com/products/verberate-basic/) - One knob for a preset of a single algorithm, but it sounds great.

## Guitar and Bass

* VST
    * [LePou pack](https://lepouplugins.blogspot.com) - I don’t like these much, but they are incredibly popular and I’ve heard some fantastic tones made with them.
    * [TSE freebies](https://www.tseaudio.com/software/x50v2) - Everything except x50 is free here. All potentially usable depending on what sounds you need.
    * [Mercuriall](https://mercuriall.com/cms/details_freestuff) - Interesting pedals and a fun cabinet modelling.
    * [NadIR](https://www.kvraudio.com/product/nadir-by-ignite-amps) - easy to use convolution software for using guitar and bass cabinet impulses.
    * [SHB-1](https://www.kvraudio.com/product/shb-1-by-ignite-amps) - Bass amp head that is a bit crazy.
    * [The Anvil](https://www.kvraudio.com/product/the-anvil-by-ignite-amps) - guitar pre-amp simulator that sounds absolutely amazing.
    * [NRR-1](https://www.kvraudio.com/product/nrr-1-by-ignite-amps) -  another great sounding guitar tube pre-amp emulation
    * [Pro F.E.T.](https://www.kvraudio.com/product/prof-e-t-by-ignite-amps) - this is a high gain stombox emulation, and I love using it on bass guitar, but it works fantastic in front of a digital amplifier for normal guitar.
    * [Boogex](https://www.voxengo.com/product/boogex/) - I was tempted to leave this off the list, because I rarely can get any good sounds out of it however I have heard some usable sounds made with it from other users so I have included it.
    * [Emissary](https://www.kvraudio.com/product/emissary-by-ignite-amps) - My favorite free guitar amp head. I’ve used this on countless mixes despite having nearly every commercial guitar pack at my disposal.

## Delays

* VST
    * [Spaceship Delay](https://www.kvraudio.com/product/spaceship-delay-by-musical-entropy) - This is not the prettiest delay, but it is fun!
    * [Tempo Delay](https://www.voxengo.com/product/tempodelay/) - a basic delay plug-in with no-frills.
    * [FreqEcho](https://valhalladsp.com/shop/delay/valhalla-freq-echo/) - not the most versatile delay, but fun nonetheless.

## Modulation

* VST
    * [Tal-chorus-lx](https://tal-software.com/products/TAL-Chorus-LX) - simple Juno 60-based chorus
    * [Multiply](https://acondigital.com/products/multiply/) - easy to operate chorus plug-in.

## Stereo Management

* VST
    * [Ozone Imager](https://www.izotope.com/en/products/master-and-deliver/ozone/ozone-imager.html) - basic 'widening' software with useful visualization.
    * [A1SteroControl](http://www.alexhilton.net/A1AUDIO/index.php/a1stereocontrol) - stereo workhorse. The GUI is ugly as sin, but it’s functional.

## Virtual Analog

* VST
    * [synth1](https://www.kvraudio.com/product/synth1-by-ichiro-toda) - It is not the most technically competent synthesizer, but it is emulating a hardware synthesizer that is not particularly technically competent either. Many people love this product, and I would be remiss to not include it.
    * [tal-u-no-lx](https://tal-software.com/products/tal-u-no-lx) - Juno 60 emulation. Excellent sounding.
    * [tal-noisemaker](https://tal-software.com/products/tal-noisemaker) - simple synthesizer with decent quality output.
    * [Tyrell N6](https://u-he.com/products/tyrelln6/) - simple good sounding synthesis.
    * [Triple Cheese](https://u-he.com/products/triplecheese/) - barely passes muster for this list. It isn't a technical marvel, but you can get some creative sounds out of this thing if you can stand to look at the GUI for long enough.
    * [Podolski](https://u-he.com/products/podolski/) - another simple synthesizer with excellent sounds.
    * [VCV Rack](https://vcvrack.com) - this is not a VST plug-in by itself, but it does have VST integration. You owe it to yourself to give VCV a try.
    * [ob-xd](https://www.kvraudio.com/product/ob-xd---virtual-analog-synthesizer-by-discodsp) - OB-X emulation that gets pretty close. Still useful and worth trying.

## Modern Synthesis

* VST
    * [Ribs](https://www.kvraudio.com/forum/viewtopic.php?t=486995) - granular synthesis gone wild, download it.
    * [Crystal](http://www.greenoak.com/crystal/Crystal/Crystal.html) - The classic free soft synth.
    * [Kairatune](http://futucraft.com/kairatune) - VA-like design but with a somewhat shinier sound. Surprisingly fun!

## Samplers

* VST
    * [Grace](http://www.onesmallclue.com/plugin/grace/) - a moderately capable VST sampler.
    * [tx16w](https://www.tx16wx.com) - powerful sampler with a GUI that is somewhat annoying, but powerful enough to offset those annoyances.
    * [HISE](http://hise.audio) - HSE is not for the faint of heart. It’s highly functional but mildly complex. The tradeoffs are worth it. It’s one of the few samplers that comes close to [Kontakt](https://www.native-instruments.com/en/products/komplete/samplers/kontakt-6/pricing/) in terms of capability, and it’s free.
    * [Spitfire Audio Labs](https://www.spitfireaudio.com/labs/) - Neat collection of fairly simple, and intriguing instruments.

## Other

* VST
    * [tal-vocoder](https://tal-software.com/products/tal-vocoder) - useful vocoder. Requires some routing to make work.
    * [Proximity](https://www.tokyodawn.net/proximity/) - an interesting plug-in that emulates physical phenomenon around the concept of moving an object in physical space.
    * [MSED](https://www.voxengo.com/product/msed/) - MSED lets you turn any stereo plug-in into a mid-side processing beast. Place it before the plug-in to convert it to a mid-side signal then place it after the plug-in to convert it back to a stereo signal.
    * [Midside-Matrix](https://goodhertz.co/midside-matrix) - another excellent mid-side plug-in, with a GUI that is slightly nicer than MSED.
    * [Hypercyclic](http://www.mucoder.net/en/hypercyclic/) - maybe the best arpeggiator plug-in, and it’s free.
    * [tonespace](http://www.mucoder.net/en/tonespace/) - awesome chord generator. If you want to eventuall upgrade from this then I suggest Scaler (not free)
    * [ISOL8](https://www.tb-software.com/TBProAudio/ISOL8.html) - If your DAW does not have proper monitoring tools, then this will give you what you need to quickly and easily mange mix monitoring tasks.
    
# Hall of Shame

* [Hornet StereoView](https://www.hornetplugins.com/plugins/hornet-stereoview/) - Requires Twitter or Facebook sharing.
* [Calf Studiogear](https://calf-studio-gear.org) - Poor quality DSP.
* [LVCAudio T-chain](http://lvcaudio.com/plugins/tchain/) - Microtransaction based "free" environment. Nausea inducing GUIs with extreme faux-3d.

# Support Me!

This list took me over 90 hours initially! I will be updating it as long as I'm keeping this site active, so the time will pile up. If you appreciate the information presented then <a href="/DonateNow/">please consider joining patreon or paying me for my time spent bringing you quality content!</a>






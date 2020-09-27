---
layout: post
title: DIY Drum Triggers in Reaper
comments: true
date:   2018-05-28_08:21:05 
categories: music
tags: ['Reaper Tips', 'Reaper Scripts', 'Studio Tips', 'Comparator']
image: /assets/DrumStuff/Trigger/ShopHolder.jpg
description: Making triggers and using them, in REAPER.
---

{::nomarkdown}
<img src="/assets/DrumStuff/Trigger/Piezos.jpg" alt="Piezos">
<div class="image-caption">Piezo Elements</div>
{:/nomarkdown}

I often need to use drum triggers. Drum triggers are basically a type of [transducer](https://en.wikipedia.org/wiki/Transducer) that is applied directly to a drum head. This gives you an isolated signal, without leakage from other instruments, that you can use to convert to MIDI and trigger a drum sound with a sampler.

In this post I'm going to walk you through how I do this _very cheaply_, and how I use the resulting trigger signal in Reaper.

**YOU DON'T NEED DRUMS TO DO THIS!!** You can trigger anything. A desk. A lamp. A mousepad. Your wife's belly. A floor pad. Anything you can hit/tap/punch/stomp or impact, you can "Trigger".

On with it!

<!--more-->



# Contents
{:.no_toc}
* TOC
{:toc}

# The Reason

{::nomarkdown}
<img src="/assets/DrumStuff/Trigger/TriggerWhy.png" alt="Why use a trigger?">
<div class="image-caption">Why use a trigger?</div>
{:/nomarkdown}

There's many situations where it's necessary to either replace or reinforce (mix in the replacement with the original) the recorded sound:

* The drummer is playing very fast - The faster that a drum is played, the softer the sound. It's simply not possible to lift the stick high enough for a strong sound and still play quickly. Replacing or reinforcing the sound gives a more powerful result while retaining the speed.
* The drums sound wrong - Sometimes the drumkit doesn't sound appropriate for the track.
* Leakage is too extreme - There's cases where there's a lot of leakage from other drums in to your specific drum mic. Gating can sound unnatural sometimes, so the best action is to replace the sound entirely.
* Mix concerns - Sometimes you just need a different sound to fit in a mix.

I think that one of the big misconceptions is that triggering somehow "fixes poor playing" or lets drummers play unnaturally faster. It doesn't. It's just a technique that is available to improve the _sound_ of the kit as it's recorded.

So the question now becomes: Why use a trigger?

You can easily use a trigger->MIDI converter on the recorded drum sound, but then you must be careful so that leakage is not triggering your sound. If you try to trigger a snare on the recorded snare mic you might get mistriggers from the rack tom or kick drum due to leakage. That's no good!

There are some intelligent trigger softwares like [apTrigga3](http://apulsoft.ch/aptrigga3/), [Addictive Trigger](https://www.xlnaudio.com/addictivetrigger), [Slate Trigger](http://stevenslatedrums.com/trigger-2-platinum/) and [Drumagog](http://www.drumagog.com) that let you deal with leakage effectively, but why bother if you don't need to?

Enter the drum trigger. This small electronic element goes _right on the drum_. There's no leakage. You just get a spike of noise when _that_ drum is hit, and not much else. No more leakage. No more mistriggering.

# The Trigger

{::nomarkdown}
<img src="/assets/DrumStuff/Trigger/Piezos.jpg" alt="Piezos">
<div class="image-caption">Piezo Elements</div>
{:/nomarkdown}

[Buy yourself a piezo element or a few dozen](https://www.sparkfun.com/products/10293). Sparkfun is a great company, but don't buy these from them. Order on [eBay](https://www.ebay.com) and you can get 20 for $2usd.

I suggest something in the 1"/25mm range. It's not _critical_ since all we want is a spike of sound that's isolated from other drum sounds.

# The Hookup

{::nomarkdown}
<img src="/assets/DrumStuff/Trigger/Soldered.jpg" alt="Soldered">
<div class="image-caption">Make the connections</div>
{:/nomarkdown}

Hooking your trigger up to a cable is ultra-mega-super simple. You don't even need to solder.

Take a 1/4"/6.35mm cable TS (tip-sleeve or "Mono" cable), slice it open so you can get to the ground and hot. Attach the piezo leads to these. One lead to one lead, and the other lead to the other lead.

You can solder it. You can twist and tape. You can super glue them. Just make sure there's clean metal to metal contact.

Make sure the leads are electrically separated. You don't want them touching, so insulate them with some shrink wrap tubing or tape. The image above is for illustration, as I just soldered some wire together real quick for an image.

That's it. You're done. It takes 45 seconds. Really. If you can twist some wire and use tape (almost any tape will work), then you can do this.

Plug your new trigger in to a [DI box](https://en.wikipedia.org/wiki/DI_unit) and then plug the DI box output to a [mic preamp](https://en.wikipedia.org/wiki/Microphone_preamplifier). You can go straight to a line-in if you want, but the DI->Mic preamp method works best.

There's **no need for fancy trigger conversion boxes**. _NONE_. Don't waste your time or money. If you have Reaper (or any DAW!) and can record an audio signal, then this is all you need.


# The Application

{::nomarkdown}
<img src="/assets/DrumStuff/Trigger/ShopHolder.jpg" alt="Shop Holder">
<div class="image-caption">Messy piezo kick holder</div>
{:/nomarkdown}

Getting the trigger on your drum is an interesting predicament. If there's a chance that you want to blend the sampled signal with your original drum, then you need to be careful not to interfere with the drum head. You have a few options:

* Place the piezo element under or between existing damping.
* Place the element on the shell of the drum.
* Place the element on the kick drum beater (for the kick drum). This one is guaranteed to destroy your trigger pretty quick, but it's fun!

For the kick drum, which is what I'm using as an example here, I have glued a piezo element to a piece of wood. A string attaches to 2 lugs and through the wood piece. The piezo is pressed lightly on the outside edge of the kick drum head. There's minimal change to the sound this way. I can put it on and take it off in less than a minute. It's ugly, but it works nicely. (I have some nicer ones, but I want you to realize how easy this can be without any major tools).

You can just tape your trigger on if you want. Just get it on there.

{::nomarkdown}
<img src="/assets/DrumStuff/Trigger/Triggering.jpg" alt="Triggering">
<div class="image-caption">Triggered</div>
{:/nomarkdown}

Look at my solution. It isn't pretty, but it works fantastic. Just get it on there!

# The Conversion

{::nomarkdown}
<img src="/assets/DrumStuff/Trigger/EugenTrigger.png" alt="Eugen Trigger">
<div class="image-caption">Eugen's Drum Trigger</div>
{:/nomarkdown}

I am going to be using a script called [Eugen Drum Trigger (beta)](https://forum.cockos.com/showthread.php?t=179310). You can install it with [reapack](https://reapack.com) by searching for "Drum". The script is called `Drums to MIDI(beta version)` in reapack.

[The REAPER Blog has a video on some other methods](https://www.youtube.com/watch?v=5r7yn1zFTrE) and [Kenny has a video on the topic as well](https://www.youtube.com/watch?v=nCGi_uLTlIE), but Eugen's Drum Trigger is the cat's meow.

Operating this is pretty straightforward:

* Make a selection of the item and range you want to analyze
* Press the "Get Selection" button
* Adjust the Threshold, Sensitivity and Re-trigger until you're happy
  * Be aware of the HP/LP settings. It defaults with a high pass that is very aggressive. You may wish to turn this down.
* Set up the "Insert item on new track" (or whatever other option you want) along with the associated MIDI settings
* Press "Create MIDI"

A new item is created with MIDI notes that have start times corresponding to the onset of your trigger events.

# The Sampler

{::nomarkdown}
<img src="/assets/DrumStuff/Trigger/Sampler.png" alt="Sampler">
<div class="image-caption">ReaSamplOMatic5000</div>
{:/nomarkdown}

Once you generate the MIDI, all you need to do now is take a drum synth or sampler and put it on that MIDI track. I suggest using something that has multiple samples per layer and multiple sampled velocity layers.

If you own a drum plugin like [Superior Drummer](https://www.toontrack.com/product/superior-drummer-3/), [BFD](https://www.fxpansion.com/products/bfd3/) or any other drum library then use that. Any sampler works. Any drum sound making plugin works. You can even trigger non-drum sounds.

You can also sample your own kick drum and process it, then load those samples in to ReaSamplOMatic5000, which is what I've done above.

I hit the kick drum 5 times, then processed the sound so each hit sounded decent. Then I imported the sounds in to the ReaSamplOMatic5000 "List" page from the FX/Media Bay source tab. Selected "Sort Peak" in the list window, and adjusted the velocity range of the samples.


# The Creativity

You don't need to use this on just drums! You can attach piezo elements to ANYTHING. You can make a drumset out of your desk if you want. Throw one in an old pair of shoes, one inside your mousepad and one under your keyboard rest. Now you magically have a 3 piece drumset right at your desk.

If you want to hear the drum sounds in realtime, I strongly suggest watching [the REAPER Blog's video](https://www.youtube.com/watch?v=5r7yn1zFTrE). You can use some of those methods to trigger samples in realtime.

# REAPERBlog video

Check out this video discussing a very similar topic on REAPERBlog's youtube channel:

<iframe width="800" height="450" src="https://www.youtube.com/embed/z81ZBT0xPFE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

# The Conclusion

{::nomarkdown}
<img src="/assets/DrumStuff/Trigger/Sounds/DrumSounds.png" alt="Drum sounds">
<div class="image-caption">The session in the audio below</div>
{:/nomarkdown}

  <script type="text/javascript" src="/admc/comparator.js?v={{ site.time | date:'%s' }}"> </script>
  <link rel="stylesheet" type="text/css" href="/admc/admc.css">
<admc path="/assets/DrumStuff/Trigger/Sounds/" title="Kick Drum Triggered">
	<file name="NoTrigger.mp3" />
	<file name="TriggerMix.mp3" />
	<file name="TriggerSolo.mp3" />
</admc>

There's some resulting sounds. All done 100% natively in [REAPER](https://www.reaper.fm) with no extra paid products.

This is a completely un-mixed drum recording (and there's some wonderful kick-pedal squeeking in there. UGH). The only thing that changes is having no kick drum triggered sound, a mix of recorded and trigger, and just the trigger by itself. The generated MIDI track is using ReaSamplOMatic5000 with 5 kick drum samples I recorded myself from the same kick/mic.

The files are normalized to a fixed LUFS value. The difference in a mix is pretty huge.

Neat, isn't it?

# Support Me!

This post took 7 hours to photograph, write and edit. If you appreciate the information presented then <a href="/DonateNow/">please consider joining patreon or donating!</a>







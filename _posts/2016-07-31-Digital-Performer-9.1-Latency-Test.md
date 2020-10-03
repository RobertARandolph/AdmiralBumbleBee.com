---
layout: ['post', 'reader']
title: Digital Performer 9.1 Latency Test
comments: true
date:   2016-07-31_11:11:59 
categories: music
tags: ['Testing', 'Digital Performer']
---

[![The hookups](/assets/DPLatency/Thumbnails/hookup.jpg)](/assets/DPLatency/hookup.jpg)


Recently [MOTU released Digital Performer 9.1](http://motu.com/newsitems/digital-performer-91-is-now-shipping) and one of the major enhances was advertised to be reduced latency in OS X with "industry-leading overall latency performance."

I was very skeptical of this. There's certain physical realities that can't be overcome without some sort of misadvertising. So what do we do? We test it!

<!--more-->

# Contents
{:.no_toc}
* TOC
{:toc}

# Pre-requisite information

First we have to understand that modern software moves audio around in what we call buffers. These are chunks of samples, and a reference to that chunk of data's location in memory is passed around the software. We'll use 128 samples for this discussion.

So this whole time our audio is MOVING. 44,100 samples (in this example) need to come out of the speakers per second. If we want to do something with that 128 sample buffer, we have about ~2.9ms (128 / 44100) * 1000) before we need to send the 129-256th sample buffer.

We need to both fill this buffer (take it off disc, generate sound, whatever), and empty the buffer (send it to the audio device for DA). So there's going to be 2 full buffers worth of time that need to pass before we can hear what happened. 

128 samples filled. That takes 2.9ms
128 samples dumped. That takes 2.9ms.

So in this example anything that happens will take ~5.8ms at minimum before we can hear it.

On top of that latency, our hardware also has to convert audio to digital, and digital to audio. Due to the processes necessary for that, the hardware will usually penalize us with from 2-10ms of extra latency that is fixed.


# The Setup

[![A graph to help understand](/assets/DPLatency/Thumbnails/graph.png)](/assets/DPLatency/hookup.jpg)

So to test what the latency of DP is, all we really need to do is send audio from in->out and measure the distance in time between them. That is called "Round Trip Latency", or RTL for short. This operation is commutative, meaning we can also test it by measuring out->in.

So the idea is to play a sound, capture that sound (a), have it run through the interface, back out and capture that sound (b). The time difference (delta) between A and B is our RTL.

In the graph you can see the routing setup. (Note the in/out numbers used are arbitrary. It's what was available and easy for me at the time)

* We play a click sound from the DAW. Easy to recognize transients make this ideal material. This is output to Out 1
* Out 1 is routed to Input 8. We tap line line here with a scope probe. This gives us our reference signal.
* The audio goes through the DAW with a track set to Input 8. The track has realtime monitoring on and outputs to Out 6.
* We capture the audio from Out 6. This is the point where the loop terminates for us.

Note: There isn't a true loop happening. The audio does not pass through the scope and back to Input 8. I just suck at drawing stuff sometimes.

# The measurement

The oscilloscope has a function which allows one to display 2 signals and put a cursor on a point (a), then another cursor on another point (b).

Then you can simply take the delta of these cursors, or the difference. The difference in time between these 2 signals is the true total throughput latency of the interface, plus the hardware.

# The results

With a 44.1khz sampling rate and a 64 sample buffer, I ran this test 3 times with various DAWS. Here are the results.

* DP 9.02 = 10.2ms
* DP 9.1 = 7.32ms
* Studio One = 7.32ms (8.64ms predicted)
* Cubase = 7.32ms (6.46ms predicted
* Logic = 7.32ms (6.5ms predicted)
* Tracktion = 7.32ms (1.5ms predicted...  optimistic aren't we?)
* Ableton Live = 7.32ms (6.46ms predicted)

Most DAW's have a small text near the buffer setting that tells you what the expected total RTL is. The DAW polls the hardware to see what it reports as its total latency and adds that to the DAW's own predicted latency.

# Interpretations

To determine the amount of time that passes during a single buffer cycle we use the following formula: ((rate / 1000) / buffer-size). For a 64 sample buffer at 44.1khz, that gives us 1.4512471655ms for each buffer.

Ideally a DAW only causes 2 buffers of latency. One on the input and output stage. This gives us very close to 2.9ms of latency theoretically. The remaining latency is caused by the hardware's various stages of conversion, mixing, protocol latency etc.. If we take the most commonly reported total latency, 7.32, we can subtract our total theoretical latency. This yeilds a hardware latency of 4.42ms.

Every DAW except DP 9.02 gives the same total latency. So what is happening with DP 9.02?

First we subtract our known hardware latency of 4.42ms. 10.2 - 4.42 = 5.78. That's a total of 5.78ms latency being caused by DP 9.02.

If you're fairly keen, you will notice that 2.9\*2 = 5.8. That's just about 4 total buffers! This would imply that DP 9.02 was using 4 total buffers for I/O instead of the bare minimum of 2 that every DAW I tested was using.

# Conclusion

DP 9.02 was broken or very poorly designed.

DP 9.1 __*does not*__ offer industry leading latency. It simply is now on par with every other DAW.

# Support me!

If you appreciate the information presented then <a href="/DonateNow/">please consider joining patreon or donating!</a>





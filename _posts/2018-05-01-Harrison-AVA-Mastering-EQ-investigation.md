---
layout: ['post', 'reader']
title: "Harrison AVA Mastering EQ: An Investigation"
comments: true
date:   2018-05-01_10:34:27 
categories: music
tags: ['Review', 'Mixbus']
image:
description: An investigation in to Harrison's AVA Mastering EQ
---

{::nomarkdown}
<img src="/assets/AVA/AVA.png" alt="AVA">
<div class="image-caption">AVA Mastering EQ</div>
{:/nomarkdown}

Harrison recently [Released the AVA Mastering EQ](https://harrisonconsoles.com/site/ava-plugins.html). I [already reviewed its Mixbus cousin]({% post_url 2017-09-30-Review-of-Mixbus-effect-plugins %}##xt-me-mastering-equalizer) and quite frankly I didn't think too highly of it based on the asking price.

AVA Mastering EQ is a VST/AU/AAX version of XT-ME at a **far** more reasonable price of $49 (on May 1st, 2018). I suggest simply taking this price in to consideration as I explore this product.

This is not a review per se. This is my curiosity being documented. I'm just going to explore the product and take you along for the ride. If you think my findings are evidence of a purchase worth $29 then go for it.

I was given this plugin for beta testing, and I talk with a number of employees at Harrison frequently now. I'm _fairly_ certain that my personal views on this product are tainted by my relationship with their team at this point. So I'm going to avoid giving a final recommendation of any sort. Keep in mind that my exploration may be similarly influenced... or not. You decide.

<!--more-->



# Contents
{:.no_toc}
* TOC
{:toc}

# Phase and Frequency

I will be using [Fabfilter Pro-Q 2](https://www.fabfilter.com/products/pro-q-2-equalizer-plug-in) as the control for these tests. I'm attempting to match the frequency response between Pro-Q 2 and AVA Mastering EQ. Then we'll explore the [phase response]({% post_url 2017-09-25-Harrison-Mixbus-EQ-Revisited %}).

## Test 1 - Flat Top

### Settings

{::nomarkdown}
<img src="/assets/AVA/AVAtest1.png" alt="Ava Test 1">
<div class="image-caption">Ava Test 1</div>
{:/nomarkdown}

{::nomarkdown}
<img src="/assets/AVA/ProQtest1.png" alt="Pro Q Test 1">
<div class="image-caption">Pro Q Test 1</div>
{:/nomarkdown}

These are the settings used for the first test. 

Pro Q has a single 12 pole filter engaged.

AVA Mastering EQ has 8 bands engaged. **EDIT** - I've been corrected. ALL bands are always engaged. There's simply 8 visible bands active on the GUI in this case.

I had to manually tweak this to get them close to each other. The actual settings are not useful, and I did not record their exact values for this test.

The AVA Mastering EQ setup is not _perfect_ because it's somewhat difficult to get it perfect, but that's irrelevant in normal usage.

### Results

{::nomarkdown}
<img src="/assets/AVA/Curve1.png" alt="Curve 1">
<div class="image-caption">Curve 1</div>
{:/nomarkdown}

{::nomarkdown}
<img src="/assets/AVA/Phase1.png" alt="Phase 1">
<div class="image-caption">Phase 1</div>
{:/nomarkdown}

As we can see the frequency response _and_ the phase response are identical.

This is expected, but contrary to some [information a Harrison rep posted online](https://www.gearslutz.com/board/showpost.php?p=13288294&postcount=42). It's to be noted that he was using the wrong tools to match the shapes though.

I don't at all think the poster was being dishonest. I suspect most users would attempt to do this the same way that Ben did. It's just possible to get much closer than indicated, if you feel that this is a necessary task you encounter in your daily work.

## Test 2 - Single Band

### Settings

{::nomarkdown}
<img src="/assets/AVA/AVAtest2.png" alt="Ava Test 2">
<div class="image-caption">Ava Test 2</div>
{:/nomarkdown}

{::nomarkdown}
<img src="/assets/AVA/ProQtest2.png" alt="Pro Q Test 2">
<div class="image-caption">Pro Q Test 2</div>
{:/nomarkdown}

This time we're using a single band in AVA Mastering EQ set to +4db at 1khz.

Pro-Q 2 is using a 4-pole filter with approximately a Q-factor of 4.5 centered at 1khz.

### Results

{::nomarkdown}
<img src="/assets/AVA/Curve2.png" alt="Curve 2">
<div class="image-caption">Curve 2</div>
{:/nomarkdown}

{::nomarkdown}
<img src="/assets/AVA/Phase2.png" alt="Phase 2">
<div class="image-caption">Phase 2</div>
{:/nomarkdown}

The frequency response of Pro-Q is slightly wider. This makes me think that the slope of the AVA Mastering EQ filters are about 18db/oct, since the 12db/oct setting in Pro-Q is too narrow to match.

The phase response is once again very similar.

I suspect that by using 3 12db/oct bands in Pro-Q 2 and some tweaking, I could have matched the frequency response... but resulting phase response would have been awful.

## Test 3 - High/Low pass

### Settings

{::nomarkdown}
<img src="/assets/AVA/AVAtest3.png" alt="Ava Test 3">
<div class="image-caption">Ava Test 3</div>
{:/nomarkdown}

{::nomarkdown}
<img src="/assets/AVA/ProQtest3.png" alt="Pro Q Test 3">
<div class="image-caption">Pro Q Test 3</div>
{:/nomarkdown}

Both products have a 12db/oct high-pass at 100hz, and a 12db/oct low-pass at 10,000hz.

Settings were left matched.

Pro-Q 2 has a 'Natural Phase' mode. This helps [compensated for the filter-craziness near nyquist]({% post_url 2017-11-21-What-do-I-want-in-an-EQ %}#cramping). I suspect that Pro-Q is getting a natural phase response with normal IIR filters, then adjusting the frequency response with a linear-phase high shelf. The net result being 'analog-like' frequency _and_ phase response.

### Results

{::nomarkdown}
<img src="/assets/AVA/Curve3.png" alt="Curve 3">
<div class="image-caption">Curve 3</div>
{:/nomarkdown}

{::nomarkdown}
<img src="/assets/AVA/Phase3.png" alt="Phase 3">
<div class="image-caption">Phase 3</div>
{:/nomarkdown}

We have differences!

AVA Mastering EQ is slightly more aggressive in the low-pass frequency response.

The notable thing here is that AVA Mastering EQ has a surprisingly flat phase response in the high-end. Note that Pro-Q's phase response ends at about 45° and AVA Mastering EQ ends at 0° phase rotation.

Let's dig further!

## Test 4 - Higher High-pass

### Settings

{::nomarkdown}
<img src="/assets/AVA/AVAtest4.png" alt="Ava Test 4">
<div class="image-caption">Ava Test 4</div>
{:/nomarkdown}

{::nomarkdown}
<img src="/assets/AVA/ProQtest4.png" alt="Pro Q Test 4">
<div class="image-caption">Pro Q Test 4</div>
{:/nomarkdown}

This time I'm using a low-pass set at 15khz on both products. No low-pass.

### Results

{::nomarkdown}
<img src="/assets/AVA/Curve4.png" alt="Curve 4">
<div class="image-caption">Curve 4</div>
{:/nomarkdown}

{::nomarkdown}
<img src="/assets/AVA/Phase4.png" alt="Phase 4">
<div class="image-caption">Phase 4</div>
{:/nomarkdown}

Oh no. Here it is again. The filter is cramping near [the nyquist limit](https://en.wikipedia.org/wiki/Nyquist_frequency).

AVA Mastering EQ's low-pass filter gets steeper and steeper the closer you get to nyquist (half of the sample rate).

### Further poking - AVA

{::nomarkdown}
<video autoplay loop muted class="gifvid">
<source src="/assets/AVA/Cramp.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
<div class="video-caption">AVA Mastering EQ low-pass frequency sweep</div>
{:/nomarkdown}

The above animation is the frequency response of the AVA Mastering EQ low-pass filter being moved. Note how the right side of the filter appears be increasing in slope the higher it gets.

Here's an image of the phase response...

{::nomarkdown}
<img src="/assets/AVA/PhaseLP.png" alt="Phase sweep">
<div class="image-caption">Phase of the Sweep</div>
{:/nomarkdown}

The red line is the first setting at 5khz. It moves down from there predictably. (Red->Green->Blue->Purple etc..)

Let's look at Pro Q...

### Further poking - Pro-q

{::nomarkdown}
<video autoplay loop muted class="gifvid">
<source src="/assets/AVA/ProQLP.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
<div class="video-caption">Pro-Q 2 low-pass frequency sweep</div>
{:/nomarkdown}

Here we can see a 12db/oct low-pass frequency sweep in Pro-Q. Note how the filter's shape remains fairly consistent.

And an image of the phase response.

{::nomarkdown}
<img src="/assets/AVA/PhaseLQProQ.png" alt="Phase Sweep">
<div class="image-caption">Phase of the Sweep</div>
{:/nomarkdown}

Predictable change and consistent positive phase rotation.

### Even More Poking - AVA impulse response

{::nomarkdown}
<img src="/assets/AVA/Impulse.png" alt="Impulse Response">
<div class="image-caption">Impulse response</div>
{:/nomarkdown}

Impulse response is what the filter does in response to a single sample spike. This is basically how you can see "ringing" of filters, including pre-rining.

_Pretty big_ difference here. AVA Mastering EQ is -20db quieter at some points.

### What does it Mean?!

I said this ain't a review. It's up to you to try the demo and listen.

Pro-Q is definitely closer to an 'analog-like' response. Is that necessarily the best outcome though?

AVA Mastering EQ cuts the high end more aggressively, which I've seen some people claim is desirable in the digital realm.

It's your choice... If you've read my website, then you know what I think about this situation.

## Test 5 - Weird Curve

### Settings

{::nomarkdown}
<img src="/assets/AVA/AVAtest5.png" alt="Ava Test 5">
<div class="image-caption">Ava Test 5</div>
{:/nomarkdown}

{::nomarkdown}
<img src="/assets/AVA/ProQtest5.png" alt="Pro Q Test 5">
<div class="image-caption">Pro Q Test 5</div>
{:/nomarkdown}

I took an old project and applied a very light EQ to it using AVA Mastering EQ. I then matched this in Pro-Q.

AVA Mastering EQ has 8 bands active. **EDIT** - I've been corrected. ALL bands are always engaged. There's simply 8 visible bands active on the GUI in this case.

Pro-Q has 2.

It took me about 20 minutes to match these two. It was _FAR_ easier to using AVA Mastering EQ to match with, since it's [easier to create gentle curves](#usage)

### Results

{::nomarkdown}
<img src="/assets/AVA/Curve5.png" alt="Curve 5">
<div class="image-caption">Curve 5</div>
{:/nomarkdown}

{::nomarkdown}
<img src="/assets/AVA/Phase5.png" alt="Phase 5">
<div class="image-caption">Phase 5</div>
{:/nomarkdown}

I couldn't get the frequency response perfect, but it's close.

Phase response is equally similar. No surprises here.


## Test 6 - Distortion and noise

{::nomarkdown}
<img src="/assets/AVA/Distortion.png" alt="THD">
<div class="image-caption">THD</div>
{:/nomarkdown}

All processors add a bit of distortion to the signal.

I have a number of graphs, but they are all fairly consistent with the results shown above. They're both below 0.005% THD.

They both have similar noise floors. AVA Mastering EQ was slightly lower in high frequency noise and higher in low-frequency noise (similar to the THD graph) I was unable to capture an overlaid graph because my analyzer is being a bit of twa... jerk.


# Interface

## Usage

{::nomarkdown}
<video autoplay loop muted class="gifvid">
<source src="/assets/AVA/AVASwipe.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
<div class="video-caption">Swiper! No Swiping!</div>
{:/nomarkdown}

AVA Mastering EQ is essentially an intelligent [graphic equalizer](https://en.wikipedia.org/wiki/Equalization_(audio)#Graphic_equalizer).

You draw the curve you want and it adapts. Unlike traditional graphic EQs though, what you see is _mostly_ what you get ([as evidenced above](#phase-and-frequency)).

So you can gently create complex EQ curves without needing to adjust a number of frequency/gain/Q knobs, or needing to click and drag multiple nodes. Single bands can be reset with right click or right click and drag.

*THERE IS A TRIM OPTION*. A frequent reader [will know why I think this is so important]({% post_url 2017-11-01-Gainstaging-for-the-modern-musician %}). Every plugin needs this.

## Smooth

{::nomarkdown}
<video autoplay loop muted class="gifvid">
<source src="/assets/AVA/Smooth.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
<div class="video-caption">Smoothing</div>
{:/nomarkdown}

The created curves can be smoothed by holding shift and dragging. The discontinuities in the curve are lessened and the response is made to be more 'gentle'

This is a significant shortcut over manipulating multiple EQ bands via node or knob. The time it takes to create a curve, then make it gentler is vastly reduced compared to more traditional digital EQ workflows.

## Zoom

{::nomarkdown}
<video autoplay loop muted class="gifvid">
<source src="/assets/AVA/Zoom.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
<div class="video-caption">Zoom Zoom.</div>
{:/nomarkdown}

The response graph defaults to being zoomed to a -4 to +4 range. As you create bands that have higher or lower gain, the graph automatically adjusts. It goes up to -14 to +14.

An upcoming feature is the ability to lock the zoom, as well as manually set the zoom feature. That is showcased in the video above.

The -4 to +4 mode plus the [resizing capability](#resize) allows for some _very_ fine movements.

## Resize

{::nomarkdown}
<video autoplay loop muted class="gifvid">
<source src="/assets/AVA/Resize.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
<div class="video-caption">Resizing</div>
{:/nomarkdown}

AVA Mastering EQ is _fully_ resizable. It can be resized from a fullscreen monster to be placed on a second monitor or down to an ultra-tiny space-saving indicator of what's on your master channel.

# Price

[Fabfilter Pro-Q 2](https://www.fabfilter.com/shop/?currency=usd&vat=0) - **$179usd**

[AVA Mastering EQ](https://harrisonconsoles.com/site/ava-plugins.html) - **$49usd**

# CPU

AVA Mastering EQ is slightly heavier on CPU than Pro-Q by a factor of about 2 when there's an equal number of "visible bands" active. Still very light.

AVA Mastering EQ has all bands always active, so there's no change in CPU usage as you adjust bands.

# Conclusion

No conclusion. Read above. [Try the demo](https://harrisonconsoles.com/site/ava-plugins.html). That's it.

Well, no, that's not it. AVA Mastering EQ does let you do some things much faster than other 'Node and Knob' type EQs. The workflow is a notably unique aspect of it. While doing these fairly basic tests, it was always easier for me to create a curve in Pro-q, then match it with AVA. If I made it in AVA first then it was a total pain to match Pro-Q.

A large part of the 'sound' of a plugin isn't in the DSP, it's in the GUI. Allowing the user to quickly access the ideas they want to express without overshooting or interfering with it is where 'good sound' is born.

Obviously Pro-Q 2 has _far_ more features, and this was my qualm [when I did the original review of XT-ME]({% post_url 2017-09-30-Review-of-Mixbus-effect-plugins %}#xt-me). For $109 (even though it was constantly on sale), XT-ME didn't provide anything that was _particularly_ amazing.

For $49 though... I think you can make your own decision.

# Support Me!

This post took 9 hours to research, photograph, write and edit. Those animations were created frame by frame, taking about 5 minutes per frame! If you appreciate the information presented then <a href="/DonateNow/">please consider joining patreon or donating!</a>







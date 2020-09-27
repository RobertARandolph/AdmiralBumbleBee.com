---
layout: post
title: Eve SC307 & TS112 Setup and Testing
comments: true
date:   2019-06-08_10:31:30 
categories: music
tags: ['Studio', 'Studio Tips']
image: /assets/Eve/FinalForNow.png
description: Monitor Setup - Eve Audio SC307 and TS112
---

{::nomarkdown}
<img src="/assets/Eve/Testing.jpg" alt="Testing Setup">
<div class="image-caption">Testing Setup</div>
{:/nomarkdown}

Recently I took delivery of [Eve Audio SC307](https://eve-audio.de/index.php?page=SC307) and a [TS112 Subwoofer](https://eve-audio.de/index.php?page=TS112).

I live-streamed the unboxing and initial setup, and here's some information regarding how I tuned the setup and some caveats.


<!--more-->



# Contents
{:.no_toc}
* TOC
{:toc}

# Video

<iframe width="560" height="315" src="https://www.youtube.com/embed/m2m70NNjk6A" frameborder="0" allow="" allowfullscreen></iframe>

Here's a wonderfully poorly recorded unboxing and setup.

# Wonderful Customer Service

I purchased these monitors from [Front End Audio](https://www.frontendaudio.com), and after the purchase I received 7 e-mails in the course of about 24 hours. 3 of the e-mails were pertinent (registration, invoice, shipping). 4 of the e-mails were typical online retailer spam. The sort of thing that I think we're all used to and just junk or filter.

I received an e-mail saying:

"Nothing feels better than knowing that you'd let us earn your business not once, but twice! Thank you. It means a lot to everyone here at Front End Audio and it is the reason why we do what we do. We absolutely love our customers and we look forward to earning your business again and again in the future.
If you have any feedback on how we can improve, reply to this email. We'd love to hear from you."

I rarely respond to these things because the few times I've written feedback, I received no response. This time I wrote back explaining exactly what happened and how it annoyed me.

Shane responded to the feedback within 8 hours, clearly having read _my whole e-mail_ (incredibly rare!), and responding without being defensive. "I can assure you that we will make changes based on your suggestions and this will improve."

I then received another e-mail from Shane asking exactly which e-mails that I received and assuring me that the system would be adjusted.

Within 3 days I received confirmation that the e-mail system had been changed to reduce the initial user e-mails by 75%.

I've complained about e-mails to 3 retailers in the past: [American Musical Supply](https://www.americanmusical.com), [Sweetwater](https://www.sweetwater.com) and [B&H](https://www.bhphotovideo.com) and did not receive a response, let alone action.

It's reasons like this why it's important to support smaller local (American for me) retailers that offer excellent service.

I could have purchased these monitors for about 33% less if I was willing to forgo the warranty by purchasing at [Thomann](https://www.thomannmusic.com). I'm willing to forgo warranties, since I'm more than capable of repairing products myself, and parts are often less expensive than shipping+time. Shane at FEA was completely honest about Thomann when I asked and offer both pros and cons to purchasing from them or FEA. I found that rather refreshing. Eventually we came to an agreement on a package deal for the monitors and more that made me feel comfortable "paying more than I had to".

I have nothing against [AMS](https://www.americanmusical.com) or [Sweetwater](https://www.sweetwater.com) or [B&H](https://www.bhphotovideo.com), given that I've spent tens (hundreds?) of thousands of dollars with them. However, for now I'll be checking [Front End Audio](https://www.frontendaudio.com) first, and Sweetwater shortly after.

(I wasn't paid for this section. I wasn't reimbursed for this in any way. I decided to write this on my own accord _after_ the purchase was made. I gain nothing from it except showing my appreciate for caring for the customer and honest sales.)

# Testing Procedure

{::nomarkdown}
<img src="/assets/Eve/Testing.jpg" alt="Testing Setup">
<div class="image-caption">Testing Setup</div>
{:/nomarkdown}

Testing was done with [REW](https://www.roomeqwizard.com) and a [Behringer ECM8000](https://www.sweetwater.com/store/detail/ECM8000--behringer-ecm8000-measurement-condenser-microphone).

Setup is simple:

* Plug the microphone into your interface.
* Set the gain to a reasonable value
  * Make sure the interface's monitoring is turned off. You do NOT want the microphone's output in your monitors.
* Open REW, set the input to the input, and output to your left channel's output.
* Click "Measure" and ignore the warning about SPL (it doesn't matter for most testing)

The default settings are mostly fine, but I use a 512k length and 0-20,0000hz sweep.

I did all of the initial measurements with the sub in "Pure Satellite" mode. I want the system to be primarily setup ideally with the main speakers, and then utilize the sub to add the bottom octave.

I do something relatively unconventional in that I do each listening position measurement with me and the seat moved away, and with the microphone right above my head with me in place. Having me there obfuscates from problems, but it does give somewhat of an idea of how things are going to sound when you're actually sitting there listening.

I do only check one position for this. I'm only curious about the listening position since I don't move, and I am not changing the room treatment. If I was changing the treatment then I would be taking multiple measurements around the room to find room modes more easily.

# Initial Setup

The initial setup is shown above, and in the previous image.

I had a strong feeling that this was going to be sub-optimal due to the proximity to the lower untreated corner and the distance from the wall.

The SC307s are rear-ported, so it's important that they're about 0.5m (19") from the back wall. I set them up to about 0.3m (12") to start.

I did this because the "minimum distance" (distance you need to be from the speakers for the sound to 'combine' from the drivers) was about 1.5m (59"). I have no ability to move my desk back due to a doorway to my right which would become obstructed.

# Whining about stuff

{::nomarkdown}
<img src="/assets/Eve/QuickStart.png" alt="Quick Start... or Slow Start, am I right?">
<div class="image-caption">Quick Start... or Slow Start, am I right?</div>
{:/nomarkdown}

I know that these are controls that I will very rarely touch, but I need to take a moment to squeel a bit.

I had two annoying issues when setting up.

1. The volume lock was turned on for one of my monitors. I _did not_ do this accidentally, as I only switched one switch a single time during setup (woofer selection). It was rather confusing to not be able to turn on/up the monitors.
2. The woofer selection documentation is very confusing.
   The switches are parallel to the driver alignment. The manual shows that if you switch to the left, then the woofer is on the left. If you switch to the right, then it's on the right. That _is not what happens_. It is the **OPPOSITE**. The manual is correct if you pay attention to only the labeling, but if you pay attention to the orientation then it is confusing.
   
Luckily I took a moment to play a few sines through the speakers to figure out when the low-frequency driver was active and determined that the switching _direction_ was opposite of the woofer selection _direction_.

I'd also like to point out that there's a single knob for a variety of settings that involves "Push and Hold for X seconds, turn to Y, Push and Hold, Push, Turn, do the hokey-pokey". It's not _difficult_, but it is annoying. I'd have happily paid an extra $100 for a display on the back and a dedicated control knob.

## Measurement

{::nomarkdown}
<a href="/assets/Eve/Initial.png">
<img src="/assets/Eve/Thumbnails/Initial.png" alt="Initial Measurements">
</a>
<div class="image-caption">Initial Measurements</div>
{:/nomarkdown}

The initial measurement is not exactly awesome. I have a huge bump at 76hz and a massive dip at 114hz. Not good.

We're only +/-15dB right? At least that's _way_ better than most people that throw studio monitors in their bed/guestroom these days. (Spend the $50 and measure your setup. You might be pleasantly disgusted)

# Distance

{::nomarkdown}
<a href="/assets/Eve/Closer.png">
<img src="/assets/Eve/Thumbnails/Closer.png" alt="Setup Closer">
</a>
<div class="image-caption">Setup Closer</div>
{:/nomarkdown}

The next step was to move the monitors closer/further from me. Originally were was a pretty significant bump at ~76hz and a huge dip at 114hz, and simply moving them much closer totally fixed the problem.

That brings another problem though...

## Minimum and Critical Distance

{::nomarkdown}
<video autoplay loop muted class="gifvid">
<source src="/assets/Eve/Critical.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
<div class="video-caption">Critical Distance</div>
{:/nomarkdown}

Speakers with multiple drivers require that the sound from each driver has enough distance to essentially combine with the energy from the other elements. The animation above is showing this effect.

Likewise there is a relationship between the sound that makes it direct to your ears, and the sound that reflects off elements in/of the room. This is called the "Critical Distance" and is where the direct and reverbant elements are equal.

Attempting to balance these two elements is incredibly difficult, however in my studio this is a pretty large measurement given the amount of acoustic treatment in the space. That gives me a lot of flexibility, but the size of the 3-way SC307s does not.

# Sub phase

{::nomarkdown}
<video autoplay loop muted class="gifvid">
<source src="/assets/Eve/Phase.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
<div class="video-caption">Sub Phase</div>
{:/nomarkdown}

Needless to say, setting the phase of the subwoofer is really important.

I took these measurements part way through my experiments just to see how the sub was doing in the room. Neither measurement here is "correct", however it does give some information regarding how to continue with the placement and setup of the speakers.

There are times though where you can end up with some massive issues when the sub-phase is incorrect...

{::nomarkdown}
<a href="/assets/Eve/BadPhase.png">
<img src="/assets/Eve/Thumbnails/BadPhase.png" alt="Wrong Phase">
</a>
<div class="image-caption">Wrong Phase</div>
{:/nomarkdown}

This measurement was one of my tests with the sub in the very wrong place, and with the phase set incorrectly. That's a 40dB null right in the body of a deep kick drum or around a B on a bass-guitar (or B on 7-string guitar). That would be _TERRIBLE_ for the type of music I work with.

# Wall-E

{::nomarkdown}
<img src="/assets/Eve/WallE.jpg" alt="Resemblance?">
<div class="image-caption">Resemblance?</div>
{:/nomarkdown}

{::nomarkdown}
<a href="/assets/Eve/WallE.png">
<img src="/assets/Eve/Thumbnails/WallE.png" alt="Wall-E... maybe?">
</a>
<div class="image-caption">Wall-E... maybe?</div>
{:/nomarkdown}

I suspected that my current speaker stands are too low. So I placed the SC307s on top of my old Adam A7s. The resulting measurement was significantly improved.

I do want to keep the A7s in the setup as they are repairable (eventually, when I get parts). Even though this looks pretty dang silly, it appears to be a fairly reasonable result.

**NOTE**: I prefer the resemblance to Johnny 5, but the chat decided on Wall-E. I'd even happily accept R.O.B. However, there's an excellent argument for the Wall-E resemblance given the presence of Wall-E's romantic interest in the movie...

Luckily when I showed my wife the picture, even as an intolerably big fan of Disney, she [chose correctly](https://en.wikipedia.org/wiki/Short_Circuit_(1986_film))

## Wall-E Closer

{::nomarkdown}
<video autoplay loop muted class="gifvid">
<source src="/assets/Eve/FarNear.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
<div class="video-caption">Far to Near</div>
{:/nomarkdown}

I made this animation for myself consisting of 26 positions with the monitor traversing about 1.5m total. Even though the labels are "Far" "Mid" and "Near", it's only relative to the distance traveled. 2m total from the listener is certainly not "far" by any means.

Bringing Wall-E even closer resulted in a much better response for somewhat obvious reasons:

* Distance from walls
* More direct energy to listener

The downside is that the closer the monitors get, the more the sound is influenced by my head position due to [the distance](#distance).

What to do?

# Mirroring Placement

{::nomarkdown}
<video autoplay loop muted class="gifvid">
<source src="/assets/Eve/SpeakerMeasurement.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
<div class="video-caption">Speaker Placement Mirroring</div>
{:/nomarkdown}

When I did the livestream I mentioned measuring three places to align the right side monitor. Someone in chat appeared confused, so here's what I was doing and why.

Once a monitor is placed, and assuming your stands are identical, you need to get 3 measurements correct to match the other monitor: distance from wall A, distance from wall B and angle. All 3 measurements need to be perpendicular to the walls (or always measured at the same angle).

The video above shows what these measurements are and how they affect placement. Please forgive the minor inaccuracy in the animation, I did the animation by had. You can measure these on the monitors themselves, or the stands.

X and Y should be obvious I think.

The angle (θ) is determined by measuring any one of the corners not referenced for X/Y. You can use wall A or B. X and Y are a pivot point and measuring one of the other 3 corners changes the angle.

You are taking a right triangle with the origin at the X/Y location (c), and changing the length of ac or bc will change the angle of angles A and C. As long as either line segment ac or bc are the same length on both monitors, they will be angled identically as the perpendicularity of the measurement to the wall ensures a right triangle.

If your walls are angled then everything is the same as long as your X, Y and θ measurements are all perpendicular to _each other_.

tldr; Just measure one corner perpendicular to the wall for room placement (X and Y), then measure any _other_ corner with the measuring tape perpendicular to a wall to ensure angle.

# Result

{::nomarkdown}
<a href="/assets/Eve/ComplexFinal.png">
<img src="/assets/Eve/Thumbnails/ComplexFinal.png" alt="All of the final tests">
</a>
<div class="image-caption">All of the final tests</div>
{:/nomarkdown}

{::nomarkdown}
<a href="/assets/Eve/FinalForNow.png">
<img src="/assets/Eve/Thumbnails/FinalForNow.png" alt="Final decision for now">
</a>
<div class="image-caption">Final decision for now</div>
{:/nomarkdown}

{::nomarkdown}
<img src="/assets/Eve/FinalSetup.jpg" alt="Final Setup - Desk as-is">
<div class="image-caption">Final Setup - Desk as-is</div>
{:/nomarkdown}

The speakers sound cool at 2m distance. Wide (stereo width), deep (stereo correlation) and thick (a low-end bump). Closer they don't sound fun at all, but the placement is clearly superior.

Given that I purchased these products for the purpose of technical tooling, I decided to keep them approximately 1.17m from the listening position.

I don't move frequently when using the speakers for technical choices since I work "in the box" almost entirely. I feel that with some minor tweaking I can get the listening distance set appropriately and have an _extremely_ accurate setup relative to the size of this space.

The images above are the semi-final tests with sub, and the setup that I finally settled on. It's +/-4dB at 1/12oct smoothing. That's not bad at all really.

It sounds _really_ good too.

[Here's the REW files](/assets/eve/FinalForNow.mdat) so you can peak the impulse response and waterfall. I think you'll agree that I need to do something about the sub, it's got quite the boom to it right now. Luckily switching to "Pure Satellite" is a single button press on a remote and I have 2 other sets of monitors to reference on... which is the topic of another article ;)

# Support Me!

This post took 17 hours to measure, stream, animate, capture, write and edit. If you appreciate the information presented then <a href="/DonateNow/">please consider joining patreon or paying me for my time spent bringing you quality content!</a>







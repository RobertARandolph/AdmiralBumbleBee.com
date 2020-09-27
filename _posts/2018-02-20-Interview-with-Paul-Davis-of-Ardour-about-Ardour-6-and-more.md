---
layout: post
title: Interview with Paul Davis of Ardour about Ardour 6.0 and more
comments: true
date:   2018-02-20_17:54:38 
categories: music
tags: ['Interviews', 'Studio Tips', 'DAW']
image: /assets/Ardour/ArdourCar.jpg
description: An interview with Paul Davis, maintainer of Ardour, about Ardour 6.0 and more.
---

{::nomarkdown}
<img src="/assets/Ardour/ArdourCar.jpg" alt="Ardour Sell Out">

<div class="image-caption">Selling out for Free Software</div>
{:/nomarkdown}

On Sunday the 18th of February, I held an interview with [Paul Davis](http://equalarea.com/paul/cv.html) of the fantastic [Ardour](https://ardour.org) audio software. I [covered Ardour in the past a few times]({% post_url 2017-10-26-30-Days-with-Ardour-v2 %}).

While Paul is not the only awesome person that works on the software, due to its open source nature, he is the benevolent dictator that helps keep things flowing.

I wanted to find out about some of the big changes that may be coming in Ardour 6.0. What are the changes? Why where the necessary? How do they benefit the average user?

Let's hit it!

<!--more-->

# Contents
{:.no_toc}
* TOC
{:toc}


## Question - Let's try one of the most cliché questions ever: Please tell us a little about yourself

I'm Paul Davis. I'm 54 years old. I live on the edge of Philadelphia. I was born in the UK but have lived in the US for the last 29 years and am now a US citizen. 

For the first part of my career as a programmer, I moved back and forth between commercial and research environments as a systems programmer. In 1994, I was working in the Computer Science & Engineering department at the University of Washington when I got the chance to be the 2nd employee at Amazon.com. I took it, stayed with the company for just 1 year, then quit to become a stay-at-home parent for my daughter.

By 1998 I had returned to some programming as a hobby, and started focusing on MIDI and audio programming. I've been doing that ever since, initially without any real need to make a living from it, but for the last decade or so, writing audio software has been my full time job.

In my spare time, I do a lot of cooking, endurance athletics (running, cycling, triathlon), and listen to a lot of music. Regrettably, I don't play music at all.

## Question - I've read a bit about your interest in marathoning (ed: oops, meant to ask about Triathalon), is that still something that you're pursuing?

During the late 1990s to about 2015, I was very actively racing, along with my wife who is a nationally ranked age-group triathlete. These days, I don't have much interest in racing anymore, but I do still like to run and cycle, and generally try to stay in shape enough where I can run a half-marathon at pretty much any time. 

## Question - So you're pretty well known these days as the author of Ardour (among other things), and there's some pretty big changes coming up for Ardour 6.0. I noticed that there's a nutempo branch that you're working on. Before we get too deep in to it, what was the impetus for beginning this work?

We have quite a lot of small but important bugs in Ardour that relate to the handling of musical time. Note ons and offs will "go missing" under certain circumstances, for example. The problems don't make Ardour unusable, but there are a number of common workflows where these sorts of problems are really irritating.

As we've investigated the cause(s) of this class of bugs, it became more and more clear that the relationships between musical time (bars, beats and so forth) and audio time (samples) is fairly complex and that we were not really dealing with it correctly.

There have been some attempts to fix or at least improve matters in the past, but after a lot of discussion, I concluded that we really needed to accept that we needed a complete overhaul of the way that we represent and manipulate time inside the program. Otherwise, bugs like the one I mentioned would keep being discovered.

## Question - So from a user perspective, there hopefully would be a reduction in a certain class of bugs, however I'm sure there are benefits. Is there anything that a user could expect in terms of forward facing enhancements?

Well, the changes in the [nutempo development branch](https://github.com/Ardour/ardour/tree/nutempo) have two distinct but very inter-related goals. One is to prevent back-and-forth conversions between musical time and audio time, because this generally leads to errors at some point. If we need to manipulate, say, the position of a note or a region by moving it a certain number of beats, then we should do that using musical time, not an audio time approximation of it. 

These changes will hopefully lead to an end to the corner cases where a note on or note off is missed because of small errors in figuring out what time it is supposed to occur.

The other goal was to redesign the tempo map, which is what fundamentally connects audio and musical time together, so that it can be manipulated more easily by the user.

Ardour still has quite a strong focus on recording musicians performing on instruments of various kinds, and we know that humans have a much more flexible notion of musical time than metronomes and most DAWs.

The changes to tempo map manipulation that Nick Mainsbridge implemented during the development of Ardour 5 made it significantly easier to "fiddle with" the tempo map to get it to match actual human performances. But there are still some nasty issues with this, and we decided that we needed a more radical design for the tempo map.

This new design should make it much easier to manipulate the tempo map to match a human performance, which then means that we can fit computer-generated accompaniment (percussive or otherwise) to the performance in a more natural way.

How far we get towards making this sort of "fit tempo map to performance" operation fully automatic, I don't yet know. But being able to easily say "hmm, the start of this  measure is <here> and not <there>" is an important first step along that trajectory.

We want the computer to work better with human musical performance rather than trying to force everyone to follow the computer's (rigid) idea of time.

## Question - With the new focus on 'music time', do you forsee any potential issues when converting back to audio time (samples) where it's necessary? How are discrepancies expected to be handled?

The errors when converting between the two time domains are very small. Sub-sample small. The problems arise when we convert more than once, so for example, from musical time to audio time then back to musical time. You can end up with a note on being on the wrong sample (and thus maybe being excluded from a loop or a selection or a region). Or it can end up slightly off the beat, not enough to hear but enough to cause problems for the software. 

If we can avoid these two way conversions, then we remain in the realm of very small errors that will not alter audible timing in any way.

The goal in nutempo is not to convert from musical time to audio time except when we absolutely have to, and to never convert back.

## Question - When going through the code, I noticed something called 'Super Clock'. What's that? It sounds... super.

Superclock is an idea whose time has come and gone. And may yet return.

So, one of the fundamental problems when converting between audio time and music time is the lack of common divisors. Let's illustrate. Suppose we are using a sample clock at 48kHz, and a tempo of 120 bpm. 

That gives us 400 samples per beat. If we stay in common time (4/4), our numbers all work very nicely. But suppose we want do do triplet time. All of sudden, we have a time of 133-1/3 samples showing up somewhere.

Computers do not do well with storing and manipulating numbers like this accurately, so we really want to avoid generating them.

The idea behind superclock is to express audio time (or even wallclock time in some senses) using a massively higher "ticks per second". If we use 508032000 we have a number that we can divide almost any way we want (every integer up to 12, and many more beyond it) without getting a fractional answer. 

In this design, our triplet beat is 1411200 "superclock ticks". No fractions.

Obviously, because a DAW runs using the sample clock of an audio interface to measure time, at some point we have to go back to actual samples. But if we do that only at the last possible moment, we don't end up creating and accumulating rounding errors along the way.

The new tempo map design uses superclock for all of its mathematics.

However, originally when we started thinking about superclock it seemed that it might be an idea that we could use everywhere to solve timing issues. Store all time - musical or audio (or even video!) as superclock, and only convert to samples (or anything else) at the last moment.

The problem with this idea is that users can change the tempo map, and when they do, this can mean that events that are defined by musical time should move with respect to audio time - imagine increasing the tempo, for example: notes (and maybe regions too) get closer together when measured in seconds or samples, even though they are still the same distance apart in musical time.

So every time a tempo map change occured, we would have to find every time position (represented in superclock time) that was "really" a musical time, and recompute the correct superclock value.

This seemed totally impractical.

So for now, superclock remains an internal feature of the tempo map, designed mostly to avoid rounding errors when converting between musical time and audio time, a conversion that we try to avoid as much as possible.

However ... some recent discussions about Ardour's inability to change to sample rate of a session have raised the possibility that we should actually store even audio time as superclock values rather than samples. If we did this, then changing the sample rate would become relatively trivial. This is a direction that we might explore later in the lifecycle of 6.x.

## Question - When I was preparing for this interview, I did some research and sent out some e-mails. At least 3 of the 'Major' DAWS out there currently use samples as their primary temporal format. Do you find this surprising? (I'll point out that one of these DAWs has 9 version-long bugs with dropped MIDI notes!)

I don't really find it suprising. Most of the "major" DAWs started life at a time when the easy manipulation of both MIDI and audio to fit musical time was not feasible (arguably in some cases, not even contemplated). Some of them started without MIDI (or alternately, started with MIDI and without audio). In all these scenarios, just as in Ardour's history, the rather complex relationship between audio and musical time is something that can take a while to become apparent.

What I find more suprising actually is that at least one notable DAW uses floating point seconds as its primary temporal format, which strikes me as crazy given [the problems that any experienced programmer knows about when using floating point math](http://floating-point-gui.de).

Representing time in superclock-type formats (and there is some evidence that other DAWs do this) is a way to avoid floating point for this purpose.

## Question - Currently you're still working on the nutempo changes. Thusfar what has been the most challenging aspect, and looking forward what do you expect to be challenging?

  It has been an insane amount of work. Although I've been quite distracted by some personal/life stuff recently, I have been working on nutempo for at least 3 months so far, and it is still far from finished (it doesn't even build yet!)

The changes require going through the entire program, finding every reference to a time position (audio or musical) and asking whether the time representation should really be audio or something more flexible.

If it is not fundamentally audio (e.g. the duration of the fade in of an audio region is always fundamentally in samples), then the code needs to be changed to use a new type of data object that can represent different sorts of time. 

There's really no way to do this type of change without the help of the compiler, and so the work has basically involved building ardour over and over and over, fixing every complaint from the compiler. Many of the issues reported by the compiler have typically required going back to the API design and modifying it.

And so it just has been going around and around ... design, try to build, fail, redesign, try to build, modify line, modify line, fail build, redesign ...

It also took some time to actually come up with coherent designs for the new time objects. It was only a couple of weeks ago, for example, that I realized that all measures of duration need a position associated with them. If you have N beats (musical time) and you want to convert that to samples, you have to know where the N beats are being measured from, because the answer may vary if the tempo map has changes.

One of our time long developers, [David Robillard](https://github.com/drobilla) (who now works for [Ableton](https://www.ableton.com)) had come up with a different solution for this, and it took me several days just to assess whether or not his design was better or worse than what I eventually did.

Looking ahead, there are two major challenges that I foresee. The first will be missing implementations - bits of functionality that I thought were complete but still require work. I should have been more diligent about making sure that I can find all of these cases, but I was not. The second and bigger issue is going to be finding all the new bugs that will have been generated by the changes.

It is incredible how much of a DAW is really about time - representing it, manipulating it, storing it - and so nutempo has involved changes to 10's of thousands of lines of code. So many user operations are fundamentally about changing time values in some way - dragging things, stretching things, deleting things, trimming etc. - and every single one of these will need to be carefully evaluated in a whole series of thoroughly designed tests to check that I have not broken them.

It is, frankly, almost as daunting as the initial code changes.

## Question - I'd like to delve in to your workflow a bit. What IDE or text editor (or emacs) do you use, and how do you utilize it to aid you in the "Build and groan" process to work through these massive changes? What about linters? Unit testing? etc...

I develop entirely inside the [GNU Emacs editor](https://www.gnu.org/software/emacs/). I can run the build inside emacs, and use one key to step through compiler errors and warnings. 

For this work, however, the process has been notably more annoying because of the nature of C++ errors. Emacs correctly identifies the actual error and highlights it in red, but the command to step through each error doesn't only jump to these "actual errors." It also takes me to the location of every other file/line referenced by the compiler as part of its error output. So if I get the arguments to a function call wrong (because I changed the API for example), there will be one actual error and then sometimes a dozen or more "possible alternatives" shown by the compiler. Emacs makes me step to each one, which is maddening. I should really try to find a fix for that :)

On such widespread changes as this, there are a couple of code-level strategies to follow. One of them is: rename functions/methods you suspect you don't want to keep around. This makes the compiler complain about every single use of the old name (because the old name no longer exists), and you get to stare at the use case and contemplate its meaning for your plan to remove that method.

So for example, my initial changes altered Region::position() (which returns the position of a Region on the timeline) to Region::position_sample() since the current implementation at that time returned only an audio time value.

I am then forced to grapple with every place that used it and ask "should this really be a sample?"

Another approach has been to start with the replacement function having a new, extended name, leave the old one in place, and then find errors. An example: in the master branch, a Location object has a start and an end given in samples, with ::start() and ::end() methods to match. I changed the underlying data model so that Locations now have a start and end that be in any time domain, and then added ::start_time() and ::end_time() methods. This lets me find all the places that used the old version (::start() in samples) in a way that isn't appropriate to the context. Then later, once I've fixed all those issues, I can remove the old ::start() and rename ::start_time() to ::start(). 

I really don't know any good way to do such massive code changes. Reading the code in some cases would be faster than waiting for the compiler, so sometimes when I've been working on a particular file and the compiler complains a couple of times about a particular code construct, I will just use my eyes/text editor to find all the others and change/fix them before going back to the compiler.
	
It's very arduous and yet also incredibly boring work, but any slippage of my attention just leaves bugs hiding for later.

## Question - Regarding your attention slipping, do you have any special things you do to prepare yourself and your environment before working on large codebase changes like this for the day?

  Egyptian licorice mint tea.

It's more about taking breaks during the day - I'll go for a run. Also, reaching good break points at the end of the day so I start with a clear mind.

I listen to a lot of ambient music (currently, mostly streamed from [Deep Space One](http://somafm.com/deepspaceone/) by [SOMA FM](http://somafm.com)) which helps me stay calm and focused

## Question - Where do you source your tea?

[Whole Foods](http://www.wholefoodsmarket.com)

## Question - Back to Ardour. I'm sure much of this intense work will go unnoticed by the general public. Has there been any discussion of future plans that may ride on the back of the nutempo changes?

  The immediate impetus for the changes came from another development branch called "[beatbox](https://github.com/Ardour/ardour/tree/beatbox)". The goal there is to make it easy for users to create grooves as a way to get started. We're not aiming for Live or [Bitwig](/tags/#Bitwig) style "groove oriented production" at this time, but many people would like to at least start by getting some simple beats together.

The beatbox branch manages to get a significant distance toward that goal. But as usual for Ardour, we're not happy with something that can only do the simple stuff. The current beatbox branch is really rooted in a fixed tempo/fixed meter world, and that's not adequate for us. So that means that the thing making the noise needs to know about the tempo map, in ways that a typical plugin cannot. That led to thoughts about the structure of the tempo map and how something like beatbox could use it, which then initiated the start of "nutempo". 

It will be a great day when I can get back to working on "beatbox" again, which will be a really useful addition to Ardour, even for users that actually play/record instrumental performance.

I've already mentioned the goals of being able to "fit tempo map to performance" - this will also start to show up once nutempo is working to an acceptable level.

## Question - As Ardour is an Open Source effort, is there anything that either the non-programming public or experienced developers can do to aid this effort, or orthogonal efforts?

  There are several areas where non-developers can be of huge benefit to the project.

(1) Writing (good) documentation - there's a lot of stuff undocumented or poorly documented in the manual

(2) Bug report triage - during times like this, and even in other times, there's not much focus on bug reports. Paying attention to them, ensuring that issues can be replicated, asking for more information, correctly classifying bug reports ... this is all really valuable stuff (ed: [Learn more here](https://ardour.org/reporting_bugs))

(3) Writing good bug reports - telling us that something is broken is only the start. We have a whole web page on how to write good bug reports.

(4) Filing really well thought out design ideas - we have some users who have really contributed a lot by submitting ideas for features or improvements that are really carefully thought out and very well documented/described. Providing information about the workflow that a new idea would help with is always useful. (ed: [Read this first though!](https://ardour.org/usability_thoughts.html))

(5) Helping other users - the more that the user community can support itself, the more time that core developers can spend on development (ed: [Learn more here](https://community.ardour.org/community) and [What to expect](https://ardour.org/support_expectations.html))

## Question - I know that you work(ed) closely with corporate interests like Waves and Harrison. Have they been instrumental in working out these changes that have been discussed?

The collaboration with [Waves](https://www.waves.com) has ended (for now, at least). [Harrison](http://harrisonconsoles.com/site/index.html) remain deeply involved in the development of Ardour, and I'm collaborating actively with them on the design of the GUI side of nutempo (mostly tempo map manipulation stuff), as well as making sure that core ideas being introduced make sense.

There are many other "big" architectural changes that will be in Ardour 6.0, and Harrison has been very involved with most of them too. We also rely very heavily on the insightful feedback of the (few) professional users of Ardour who hang out on IRC with us. 

## Question - What are some of the other big changes? A short overview would suffice.

(1) Cue monitoring

(2) Wet recording

(3) Varispeed reimplemented and at a very deep level

(4) Full latency compensation, everywhere, for everything

These are all implemented already.

We're not releasing 6.0, however, until all the planned changes that will break session format compatibility are ready. 

A major release is typically accompanied by a session file format change. We aim for back-compatibility when we can. We do not want to release 6.0 and then shortly thereafter release 7.0 because of nutempo (for example). 

Not fully tested or finalized but largely or completely functional.

So 6.0 will not surface until all these changes (several of which significantly alter the session file format) are done.

## Question - Thank you very much for your time so far. A parting question: Is there anything that you'd like to bring attention to the reader about the Ardour project? Particularly anything that someone interested in Ardour should familiarize themselves with to better understand the software and the community surrounding it?

I may have a better answer next time, but for now: we don't do web forums! :)

Need to get back to the house wiring!

Robert - Great, thank you very much for your time! Enjoy your wiring :)


# Support Ardour!

This interview took 3 hours to do, 2 hours to edit and many hours of research to prepare for. If you appreciate the information presented then please consider donating or subscribing to [Ardour](https://community.ardour.org/s/subscribe).

You know my donation options already, so go check out what they are doing!





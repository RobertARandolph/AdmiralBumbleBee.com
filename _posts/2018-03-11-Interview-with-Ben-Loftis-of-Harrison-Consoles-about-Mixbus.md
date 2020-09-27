---
layout: post
title: Interview with Ben Loftis of Harrison Consoles about Mixbus
comments: true
date:  2018-03-11_17:23:37 
categories: music
tags: ['Interviews', 'Studio Tips', 'DAW', 'Mixbus']
image: /assets/Mixbus/MainShot.png
description: An interview with Ben Loftis of Harrison Consoles about Mixbus
---

{::nomarkdown}
<img src="/assets/Mixbus/MainShot.png" alt="Mixbus 32c">
<div class="image-caption">Mixbus 32c in action</div>
{:/nomarkdown}

I previous [did a review series about Mixbus 32c 4.x](/tags/#Mixbus). [Harrison Mixbus](http://harrisonconsoles.com/site/mixbus32c.html) is a relatively new DAW in the music world, yet has easily managed to insert itself in to the pro audio world as a contender.

I took some time to discuss Mixbus with [Ben Loftis](http://www.benloftis.com/portfolio.html). We covered some of the history of Mixbus, goals, design challenges and team management.

This interview was conducted on [IRC](https://en.wikipedia.org/wiki/Internet_Relay_Chat). I attempted to keep most of the content intact as written, but I made some edits so that the text is more clear for non-native english readers. If you have questions, please leave a comment and I will clarify and/or edit that section.

Click through for the full text interview.

<!--more-->

# Contents
{:.no_toc}
* TOC
{:toc}

## Hello! Let's start with the most generic question ever. Who are you, what do you do, where do you do it, and what do you do when you're not doing it?

I'm Ben Loftis; I'm a partner at Harrison Consoles, as well as the product manager for Mixbus and other DAW-related products.

We are based in Nashville, Tennesse; and that's where I live with my wife, 2 nearly-grown kids and a dog.

At Harrison I spend most of my time obsessing over UI details, and watching people use Mixbus to see where we need to make changes; and sometimes coding. When I'm not working, I often go out to see a show in Nashville. (usually rock, but anything works if it's live music) 

I have a band made of some neighborhood dads.

All that, plus a bit of walking or hiking to stay reasonably in shape, keeps me pretty busy.

## How did you personally get in to the DAW world, and what was the spark that lead Harrison to enter the software world in such a grand manner?

I started using Cakewalk back in the DOS days. It was MIDI-only back then. I was sold on it by a guy at the guitar shop: he did a quick demo mashing a lot of drum keys in step-entry mode and it made a convincing drum sequence.

I thought it looked like a sure way to become a musician overnight. A few years later, I think, I finally realized that i'd been had :)

I followed Cakewalk for several years and versions after that. I also tried Cubase, ProTools, etc etc. Like a lot of computer-literate people, I became the guy who everyone asked over to help get their computer recording setup working.

Anyway, during that period I was starting my engineering career and I had several jobs that culminated in a position at Harrison as a GUI designer for the large-format consoles.

There was a time when ProTools was getting traction in music studios, and editing suites, but it still wasnt used on the big film stages, where our consoles were used, because it couldn't reliably record "Destructively", like the tape machines and mulitrack digital machines they were using.

So our customers asked us to create a box that could do that feature, and bundle it with our consoles. Rather than start product from the ground up, we asked a few companies whether they would customize a DAW to do the job.

After some searching, we found [Paul Davis]({% post_url 2018-02-20-Interview-with-Paul-Davis-of-Ardour-about-Ardour-6-and-more %}), and [Ardour](https://ardour.org), and he agreed to add the feature under contract, and we'd sell the product with our consoles.

So that started our collaboration.  Unfortunately, the same NAB show where we launched the product, ProTools came out with a fix for their destructive record features, and since most of our customers already had 100+ PT systems in the edit suites, they weren't really interested in a competing box for the mixing stage. So, that product didn't really fly, but we had become pretty good friends with Paul, and he asked if we would make a plugin (eq and compressor) for Ardour.

So I knocked something up, but it really didn't feel very convincingly like a "console". Opening all those windows was a pain.

So we had the idea: since we've already customized Ardour once, why don't we do it again, but this time for a more consumer-level product? And we'll customize the mixer so it looks & works like a console... !

That's how Mixbus was started.

## I'd like to back up for a moment. I think most folks assume consoles are designed by putting some knobs in faders in a cannon and blast it at a metal chassis. What does being a 'large-format console GUI designer' consist of? What makes this a job that necessitates a person to specialize in it?

Hmm, that's a deep question but I'll try to keep it brief.

Historically, Harrison has always been driven by "innovation", as opposed to a console company like API or Neve, which are more about vintage sound. (which I'm not knocking)

In practical terms, this means that in the late 80's, the Harrison guys were using computers to control the mixer, and automate all the settings and knobs (this was before my time at Harrison) 

So the Harrison Series10, when it was launched, could fully recall all the settings of the eqs, etc, with the click of a button. that sounds trivial _now_, but it was really a new concept at the time. The console was so expensive and so new that few music studios could jutify it. but the FILM guys really got it. They needed a console that could adapt to the changes of a film. For example, a track might contain a door slam for one scene, and a gunshot in the next, and you needed to have different eq, bussing, panning, etc on-the-fly, and automated to the timecode sequence.

This continues to be a problem today because when a film is being mixed, you might have seveeral different playback machines (one with dialog, one with music, one with effects) ... and _something_ has got to mix those together, right? Since this might be the first time that you are hearing all the elements together, you are now making decisions about panning, eq, and such. i.e. you are mixing.

Finally, it gets really complicated because you are mixing in multiple dimensions. You need to record a surround mix (maybe of several flavors) as well as a stereo mix, and you need to mix the dialog, music, and effects separately because someday someone might remix the movie with a different language of dialog, or a different soundtrack, or whatever.

So you end up with a rather large management problem: at any given moment, you've got hundreds of playback tracks, many of which are ignored, but many of which are being summed together and sent to "just the right places" on the final recorder(s). You've got to synchronize the whole thing by arming those recording tracks, automating your moves, and doing 1,000 other things on the fly, while the producer and director-types are standing behind you and making suggestions.

In fact there are usually a dozen people or so in the room: the music director, dialog editor, effects editor; music mixer, dialog mixer, and fx mixer, producers, directors, hangers-on and caterers. Everything has to be very clear and visual so everyone can be engaged.

For example we have a (patented) feature that scrolls the waveform of the associated playback track on the console, so everyone can see the cues coming "ah, here comes the door slam.. " http://harrisonconsoles.com/site/espwaveforms.html

So, long story short:  there's a lot of GUI work to be done.

## So being experienced in console design, along with your interest in other products (as you and I have discussed before), how much of your time thinking about Mixbus comes from seeing what other products do 'wrong' and doing better, compared to your own innovative vision.

Well, firstly I think there are a lot of different kinds of users.

I think a lot of the "older" DAWs have tried to please "everyone", and the result is a strange choice of what features are front&center, and what features are buried on other pages or windows.

Abelton Live did a great job of focusing on a single type of workflow (looped beats & clips for electronic music). They give features like the "clip launcher" the main focus of the UI.

Similarly, Mixbus puts the _mixer_ features front&center: fader, eq, compression, panning, bussing, plugins & monitoring take up the "whole screen". almost nothing is more than one click away.

So, for certain users and tasks, Mixbus is going to provide a much more immediate feel than other DAWs.

## That brings me to the concept of 'feature creep', where over time the DAW starts to be saturated with features that are requested or desired by a big part of the user base. How do you combat that, or do you? What defines the focus of the project?

I've had the chance to speak with other DAW developers, and we all laugh about the 1,000+ ToDo items, largely user requests, and the fact that the list never shrinks.

I think you can clearly define about 100 items that nearly -all- of your users do. and after that, it seems every user has an intensely personal workflow and needs.

In the console world, it's pretty easy:  when we sell a big console, the sale might be dependent on certain items being added. So of course, you do them to make the sale, so for 40 years, that was very much part of our DNA: custom console manufacturing for people with very specific needs (and the budget to get what they need)

It's been hard to remind ourselves that we can't do that for Mixbus; we have to make a judgment call regarding how many users it will really help, and whether it fits in the vision for the product.

We have some advantages because mixbus doesn't have to be everything for everybody: we already make a highly automated surround film mixer so we don't need to recreate that in Mixbus.

Similarly we make an analog console with all the professional studio communication and cue-mix features, so we don't have to focus on that for Mixbus.

**I think if you go back and look at the releases through version 4, though, you'll find that nearly every feature was widely requested by users on our forum, or other channel of communication.**

So it's largely an editing job: listen to all the input, form an overall mental model of what people are asking for, and then code something up to solve it.

It's somewhat complicated by the Ardour open-source side: unlike every other DAW, we can't _prevent_ someone from adding a feature if they really want to!

For example, I always told our users that Mixbus would never open ProTools sessions; it's just not practical for us to pursue that. But a user actually did the work of reverse-engineering the format, and published it into ardour. so although it was never on our roadmap, it's now part of the product.

From that standpoint, my job becomes a bit of editing; sometimes I hide a feature for a few releases until it has withstood some testing in the ardour community, or until I have time to tidy-up the gui for it.

## My next question segues nicely here. I wanted to ask about the bidirectional development process with Ardour. Has there been any collisions or conflicts of interest? How do you determine what's fed upstream to Ardour? Have you ever blocked any downstream changes?

At this point in development, Harrison is largely funding and driving the Ardour development process. We typically host a "gathering of the minds" every year or so, here in Nashville, and talk about the roadmap in very general terms.

Of course we don't always exactly follow the plan, because things change throughout the period between meetings. But at least we have a chance to get together and kick ideas around.

Regarding the specific upstream/downstream commits, it's pretty simple really. We want everything that Ardour has to offer, and we add our mixer features to it.

The only exception is when something just isn't ready for a "commercial quality" release. In that case we will wait to merge those changes into Mixbus until it makes sense.

And the same happens in reverse, too: if I push a change to ardour with the intent of using it in Mixbus, then it almost always gets tweaked a bit and improved by the ardour guys before it gets released anywhere. and in a very few cases it even gets vetoe'd and then I have to decide whether to agree with their choices, or to put it in Mixbus anyway.

That happened recently with a change to the DSP% indicator at the top of the screen; I wanted to change them to horizontal bars instead of a text display, but the general consensus was that it didn't improve things; so it was reverted. At first, it hurt my pride a bit and I almost kept Mibus "my way". but then I calmed down and let the process work as intended.

(You'd have to be pretty intimately familiar with the gui to recognize the changes, but here's a pic:

{::nomarkdown}
<img src="/assets/Mixbus/status-bar.png" alt="New Status Bar">
<div class="image-caption">Status bar attempt</div>
{:/nomarkdown}

The yellow colored bars (DSP%, etc) at the very top were the change.  but instead it's been reverted to a little text display, like it always was.)

## I have a lot of technical readers, largely programmers, but many IT people and hobbyist nerds. I'd like to know more about your VCS (git I assume) setup and how you manage working with two, often diverging, projects across two teams.

Yes, we use git. Because we are all working closely on the same team, and continuously on IRC chat, there's little conflict between the 2 projects.  Generally speaking, any change that can conceivably be part of ardour is pushed there, and then we always merge from ardour to mb (never the other direction)

Whereas, if it's a very mixbus mixer-specific feature, we always do that work in mixbus git.

The bigger conflicts occur when someone is working on a very big, deep feature branch: like the tempo changes that [Paul Reported to you last week]({% post_url 2018-02-20-Interview-with-Paul-Davis-of-Ardour-about-Ardour-6-and-more %}). But that kind of problem happens in any big software project, it's not limited to our situation.

## So speaking of what my readers have read, I've previously had a bit of a fit about Mixbus's lack of 'pure emulation' of certain Harrison console processes (such as EQ and compression). When you are making choices about integrating features that in some what duplicate hardware functionality, where do you draw the line between designer intent, and the exact behaviour of the resulting design?

Hmm, that's a loaded question.

Of course it is important to recreate the "macro" behavior of a recreation: for example the analog eq has a proportional-q shape that varies with gain; it is important that the digital counterpart has that behavior.

Then there is unintended behavior like, I dunno, clipping at some voltage level ... ? and one could argue that an emulation must have that, but one could also argue that if you want it to "sound good" you must avoid that.

And then finally there is "micro" behavior like noise or microphonics or whatnot. That can be important to the 'sound', or not.

One problem with the "micro" stuff is that it can be different for every unit that you test. What does it mean, really?

Luckily we are freed from a lot of these issues because we actually made this stuff. We have a guy who was here in 1975, and he tests the mixbus eq's just like he tests the analog ones (with test gear, and with his ears) if he says it is a good eq, then who can argue???

I say we are lucky, because if we were recreating someone else's gear, we'd have no choice but to recreate every detail of an example model, in the hopes that we capture the magic. But we actually "made" these products so we know where the magic is :)

I have an anecdote that I love to share: I watched a documentary once (or maybe it was a book, I forget) where some guys were recreating the rocket nozzles of the Apollo rockets. And they'd find bits and pieces of the rocket at junk yards, and retired workers basements, or whatever... and they'd find little oddities like "this pipe necks down to half-diameter at this spot." The question was: "is that necessary to the operation of this rocket?" OR: is it "another pipe went perpendicularly across here, and we had to shrink this pipe to make room for it" ???

So I guess the short answer is: yes, I would err on the side of designer's intent. Because otherwise you have no idea whether you are recreating something important, or not.

## What feedback have you recieved (e-mail, forum post, video, anything...) that made you most proud of your work on Mixbus so far?

It is gratifying to hear from "prop" users who are using Mixbus in some capacity. I make it a priority to ready nearly every customer-support request we get, so I see the good and the bad. I see lots of great comments from users, but of course i see a lot of complaints too; people are more likely to write if they have a problem.

At this moment, perhaps the most gratifying project is the local university Belmont has adopted Mixbus to teach mixing in all of their "audio" classes... They are sending hundreds of students through a bit of mixbus training every semester. They like it because it focuses on the real tasks of mixing: levels, panning, eq, bussing, etc: all in one place. and they can teach audio concepts without getting too bogged down in computer-y stuff, like creating busses and connecting them, etc.

And, after the initial installation I've never had to return to Belmont to provide a "fix" Hundreds of students sit down and use it every week, to do their projects in the lab, and it seems to work.

I think that's a pretty high point, actually, yeah!

## On the otherside of feedback: Have you ever spoken to a user or seen some complaint that just made you sit back and think, "Man, we _really_ need to fix that ASAP". If so, which aspect of the software did that regard (if you can speak about it currently)

In the early days, everything seemed to be a 5-alarm fire. but I've mellowed out a lot since then. Realistically, everything you need, for the primary task of "Mixing some tracks into a good-sounding mix" has been there since v1.

Software is never "done", and even if you stop making new features, you have to keep building it for newer computers and OS's. So I don't imagine we will stop development anytime.

But to return to your point:  we need to fix some midi stuff for heavy midi users, some plugin stuff for heavy plugin users. We have some "meta" features like "copying the settings of one session into another" for pro users. **Perhaps the most obvious lack, in hindsight, was the inability to monitor MIDI on the same track, while you are also playing on that track. but we've fixed that issue in the next major update.**

Generally speaking, if you need to record a band, or mix some live band tracks, or edit a podcast/ebook; or record yourself and add a bit of effects and MIDI, there's nothing that needs fixing ASAP.

## Alright, a handful of questions left. Firstly a very important one: One of your coworkers has said that you love to obsess about small GUI changes (seems that this interview has shown this to be true ;)). Do you feel like that's true, and why do you think you do that if so?

Yes, I suppose that's true. I have a lot of very strong opinions about how a UI should work. Which are largely driven by watching over user's shoulders, and seeing that they are fiddling with something minor while missing the big picture.

Audio software is a fun place to work because the user can do a -ton- of possible things, and they are all very similar in priority. In a business app, you can guess that the user will start at the top of the document, and fill it in towards the bottom, then click the "go" button. In audio, you can't guess whether someone will click the play button, or a fader, or the bass knob, or whatever. However you can know with very high certainty that when they want to boost the bass, they don't want it to be 6 clicks away.

So: yes i think about it a lot. I also change my mind a lot. You really can't make decisions about this stuff until you do it, and use it. And you have to be ready to revert something when it doesn't work out.

**I get lots of suggestions from users, and sometimes I feel like they are miffed because their change doesn't make it in. But in many many cases I actually try it, or at least mock it up, and I really think about it.** Then I might decide that it's not better, just "different". So I'll drop it, even though it is quite a nice suggestion on the face of it.

## Is there anything on the horizon for Mixbus that you want to tease?

Regarding a "teaser" of Mixbus: [There's quite a lot underway on the Ardour side]({% post_url 2018-02-20-Interview-with-Paul-Davis-of-Ardour-about-Ardour-6-and-more %}), which can be inferred from the work underway in git. Since so much of our work is visible, we prefer to keep the mixbus side "even more secretive" than normal, so we always have a bit of a surprise for users when we make an announcement.

{::nomarkdown}
<img src="/assets/Mixbus/status-bar.png" alt="The status bar again">
<div class="image-caption">The status bar again</div>
{:/nomarkdown}

In hindsight it was a terrible idea. it's far too attention-grabbing for something that the user shouldn't be thinking about, at all!

## Finally, if there was one thing you could say personally to every Mixbus user, what would it be?

That's easy: Thank You!!! When we launched Mixbus v1, we had no idea that it would generate so much interest and debate. Since then it's been a wild (but very gratifying) ride.

As I said, I make it a point to read every incoming support email, because I use that for generating ideas. And so I've a personal connection with many thousands of people. It's really been a lot of fun to see how many ways it can be used. Because everybody is different: beginner, pro, musician, videographer, podcaster, young, old, mac, win, whatever. There's no way to meet everyone's expectations, but we do try!!!

## Thank you Ben! Hopefully we'll be able to talk again when Mixbus 5 is out, and maybe dive deeper in to user experience and some of the awesome new things coming!

Yes!! This was great, thanks for the insightful questions!

# Support Me!

This interview took 3 hours to conduct and ~6 hours to prepare for. If you appreciate the information presented then <a href="/DonateNow/">please consider joining patreon or donating!</a>








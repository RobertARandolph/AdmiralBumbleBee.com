---
layout: post
title: Scaler Q&A
comments: true
date:   2018-04-28_14:27:43 
categories: music
tags: ['Interviews', 'Studio Tips']
image: /assets/General/Scaler.png
description: Interview with Scaler Developer
---

{::nomarkdown}
<img src="/assets/General/Scaler.png" alt="Scaler">
<div class="image-caption">Scaler VST</div>
{:/nomarkdown}

On April 28th, 2018 at the [EDM Production Discord](http://discord.gg/edmp) I held a Q&A with [The guys behind Scaler](https://www.pluginboutique.com/product/3-Studio-Tools/72-Utility/3933-Scaler)

Here is the transcription of the live session.

<!--more-->



# Contents
{:.no_toc}
* TOC
{:toc}

# Q&A

### Please introduce yourselves for us

**Scaler Team**:  Hey ! I am Ed, one of the developer of Scaler. Scaler is a music theory plugin that helps you come up with chord progressions.

### What programming language did you use to create this plugin? I'd like to try and create my own plugins but don't know how.

**Scaler Team**:  : Scaler is built in C++ and uses JUCE a framework dedicated to audio programming and plugin development. I recommend everybody interested in this topic to check out JUCE, it's really good and they have great resources to learn

### Have you looked at any other frameworks besides JUCE? I tried to get going in it but had difficulty using VS on windows

**Scaler Team**: Not really no, I started having a look and how I could do without framework and realized why people started coming up with frameworks ^^

### What is the setup you use for programming? For example what Editor/IDE, Frameworks etc. do you use?

**Scaler Team**:  I mainly work on a Mac so I use Xcode a lot. I use Visual Studio 2017 when  using Windows and for other programming tasks, I use Atom, an open source text editor.

### When designing a VST, how much thought goes into the architecture of it versus the "build it fuck it ship it" mentality?

**Scaler Team**: There is a bit of both, I like to follow the “Make it work, make it right, make it fast” mantra. It fits pretty well how we work, we build a prototype of the features and then we refine them in terms of design and engineering.

### Adding on to this, how much thought goes into writing code for a VST that's optimized for live production versus users who only use it in the studio? Is live performance something that you think about when designing the UI and architecting the signal flow?

**Scaler Team**: Scaler was mostly thought as a tool to be used in the studio but the fact that you can bind your controller and live transform the MIDI signal make it somewhat a “performance” tool and a lot of people use it this way. There's been improvement in this area in order to play a second line of melody or letting MIDI-CC message pass thru to control synth while triggering chords. We try to improve this part in every version now in order to accommodate both types of use

### How do you test your plugins to see if they work?

**Scaler Team**: I do a lot of testing myself during development, then I send an "alpha" version to the rest of the team which they test and use in their actual setup everyday. Usually a lot of things are caught in this phase and I receive a lot of feedback which we then use to refine the features. The last part is still a long and painful process as every DAW as its quirks and own way to setup things like MIDI routing etc...

### Do you have any other programming hobbies you do in your spare time?

**Scaler Team**: I don't really have time for any other programming at the moment. I barely made music for the last 6 month even though I started to work on Scaler to help me make some more.

There are some really cool things happening everywhere, on the web, in AR/VR etc... The good thing about being a programmer is that it seems that I will never run out of things to do as long as I am keen on learning stuff.

### How many people are on a team, and how do you divide up work with something like a plugin?

**Scaler Team**: There are a lot of people who gravitate around Scaler. The "core" team is composed of the two founders, Davide and I, who are involved on a daily basis. We regularly consult with Josh Abrahams and Paul Martin for some of the more complex and technical questions.

To this we need to add the people from Plugin Boutique who are handling the distribution, marketing, support and also helped shaping Scaler in the early days.

There are also a few artists and producers who have been helping us a lot by bringing Scaler into their workflow and gave invaluable feedback on its usability.

I'll use this as an opportunity to present the main team quickly, and some info about what everyone is doing:

Davide Carbone (artist and music producer) who handles the relation with our partner (Plugin Boutique) and the relation with artists. Davide also runs the School of Synthesis (a music school dedicated to electronic music). This give him the ability to meet with artists of all level, industry professionals and potential users. His input in this regard is invaluable.

Josh Abrahams (artist and music producer) who helps on the more complex theory subject and overall usability of the app.

Paul Martin (software engineer and hobbyist musician) who is consulted on the tough technical questions and does a lot of work in the background for the next features of Scaler.

Myself, (software engineer) I am responsible for the programming, graphic design all sort of technical things (support, forum etc...).

### I'm curious how you land a distribution deal with a company like plugin boutique, and I'd also like to know why you choose to work through a distro rather than launch it through your own company?

**Scaler Team**: Davide had a long standing relationship with Plugin Boutique and their sister company Loopmasters. He released several sample packs including the successful Davide [Carbone’s Drum & Bass Masterclass](https://www.loopmasters.com/products/29-Davide-Carbone-s-Drum-and-Bass-Masterclass) and also created a synth: [Carbon Electra](https://www.pluginboutique.com/product/4-Synth/1671-Carbon-Electra).

Starting our own company wasn't necessarily making sense, we believe Scaler is a game changer and are trying to put it in the hand of most people so Plugin Boutique was and still is an obvious partner.

There are a lot of things to handle when you create your own company... Distribution and marketing are hard and time consuming, working with experienced people in this area makes a lot of sense... and it allows us to focus on building the product.

### While your plugin boutique deal obviously helps with exposure, what other methods have you tried/considered for increasing your reach and hopefully sales?

**Scaler Team**: At the moment we are in a phase where we try to confirm that our approach is the good one and try to give our user the tools they want.

We have been surprised by how successful Scaler has been and how quickly people have adopted it.

Before we try to increase the amount of people that know about Scaler, we want to be sure that it does what it is supposed to do really well.

###  How do you come up with a plugin concept and design? Did you focus on the layout /interface to use it simply and catch someones eye on the plugin?

**Scaler Team**: Mostly through necessity... It is the mother of invention after all, we came up with this idea independently with Davide...

For me it was about learning and understanding what I was doing... So I started creating a small web-app to show relation between scales.

For Davide, he thought of this for a long time and was bewildered that with all the helpful plugins, no-one had ever made anything that could detect notes and tell you what key and scale you are in and then suggest the diatonic chords.

The design has been an iterative process, we tried and tried again until things started to make sense and the plugin was usable.

 It is still an ongoing task, we are constantly improving and trying to find better ways to do things.

### How much music theory knowledge is needed to create such plugin? Where did yall find a lot of the information for this plugin, was it your own knowledge from school? transcribing? online resources? gigging?

**Scaler Team**: There is a lot of theory behind Scaler, a lot more than what I thought I could ever understand. We are lucky to have experts on the subject in the team to help on the more complex aspects of it. A lot of the complexity comes from trying to program something that isn’t purely based on logic...

There are a lot of things that are considered incorrect or named differently etc… due to the history of music and composition itself.

There are a lot of different profiles in the team, some people were classical trained, some learnt by themselves by practicing and/or working with musicians. 

In terms of resources, we referred to a few things online especially around naming conventions as there are sometimes multiple ways to name the same note, chord or scale. It seems that people over the years tried to make it more complicated to keep composition to themselves ;)

### What is your musical background? If you're also a producer what genres do you enjoy producing or playing around in the most?

**Scaler Team**: The team in diverse in this regard so I will give some info about everyone:

 Davide and Josh are awarded electronic music producers and they run s:amplify a music production house in Melbourne.
 
 Paul and I are both hobbyist musician. Paul plays guitar, bass in small bands here and there. For my part I play some guitar and got into production much more recently... In terms of style, there is nothing specifically, I try a bit of everything from trip-hop to orchestral things and flamenco inspired things on the guitar...

### Since you are in the plugin business whats your opinion on piracy. Some people claim that it can help a company get exposure and that they'll buy it eventually but I disagree. How has piracy impacted you so far?

**Scaler Team**: Piracy is there, we have all downloaded or used pirated software at some point (or most of us at least). It is part of the business. I understand how it can get you exposure but also know that exposure doesn't pay rent.

I don't have much problem with it in general but if you like a software or get a lot of value from it, remember to support the developer in some way at some point.

In terms of protection against piracy it usually annoys the people who buy the software more than the people who get it illegally. So we try to not put too much of it and rely on the majority of people being honest and willing to get more updates and more content etc...

### If you buy Scaler, do you gain access to new updates and content, like newly added artist presets? Or will those have to be purchased also?

**Scaler Team**: Yes you get access to all updates for free at the moment. We are adding presets every couple of months and have a big update coming with lots of new features in a few weeks

In case this changes in the future, there would be an upgrade price anyway.

For me this is closely linked to the piracy issue, software companies have to respect their customers and it is their job to work out a pricing that doesn't encourage piracy. As users, we all hate having to buy the yearly update when the software or game has barely changed.

### Is there any plans to have it record the timings and length of notes/chords?

**Scaler Team**: Maybe in the future, not in the next update but it is something we have been asked a lot.

Sorry for the lack of precise answer on this one, it is one of the subject we are still unsure about. How much do you want to do in Scaler versus in your DAW? This answer varies a lot depending of how well you know you DAW and your tools.

### As a question for you guys, what do you think is the importance of having different chord progressions? It seems like all the chart toppers use the same canon chord progression anyway.

**Scaler Team**: That's an interesting one... It's true to some extent that they all use the same progression and will use the same progressions for years to come. At the same time, every now and then there is a shift, new genres a created or make a come back and merge with the previous ones etc... Being able to know what works in jazz, in blues, in pop can help you come up with your own mix.

For example, if tomorrow the #1 hit that shows everybody that a IV-V-I is outdated, it will probably simply be replaced a variation of it anyway. The numbers will read differently, until it comes back, because it sounds good and people aren't tired of it anymore...

### How could I best use Scaler in a way to aid in the learning of music theory and chord relations? 

**Scaler Team**: Scaler is a great visual aid when it comes to navigating chords and scales.

If you don’t simply rely on the presets for quick ideas, but look at how similar they are per genre or artist, there are some interesting things to learn.

It helps you navigate and understand chord functions and shows their importance in creating nice progressions. And finally having scales laid out on the keyboard helps you see how they relate to each other and identify the common patterns.

A lot of our users who have a deeper understanding of theory have reported that it was still helping them, especially for modulation as you can visually link things together etc...

### What is the biggest difference between your plugin, and the ones that are compared to yours? (i dont know if someone already asked this)

**Scaler Team**: I would say that it is the philosophy behind it that is different. We try to build an assistant, something you give some input either by detecting what you've already done or by selecting a genre/artist you like, then it gives you some output and shows you a lot of things. From there, you have to work and be creative.

Scaler won't output a track, progression or melody for you without effort, you have to listen, select and put some thoughts into what you are doing.

### Any future products we should be excited for?!

**Scaler Team**: First, we are honored at the success of Scaler. It’s something we have done in our life that has genuinely changed the way people do things, in this case music. It’s a great feeling and we are excited to continue working on it.

So in the short term, a more exciting Scaler soon with a lot of really cool features.

 In the future, we have several ideas and are discussing how we can prioritize them. We feel that we can contribute more to enabling people to better their music composition and production, but it's a bit too early to talk about this in details.

### Are there any other products that you work on? If not, then are there stuff that you'd like to Branch out to?

**Scaler Team**: When I first started producing I was surprised at how bad the user experience could be in some audio effect. Usually the graphic design is good, but the usability is not great. This is something I would love to try to tackle at some point.

### Ed, thank you very much for your time! Especially at this time of day for you. (Q&A ended at 5:45am for Ed!)

**Scaler Team**: Thanks for having me and organizing this.

Thank you all for participating. We wanted to start a discussion with our user base, and judging by how interesting the questions/answers have been, I don’t think there was a better place to do this.

# Thanks Users!

Questions come from users at the [EDM Production Discord](http://discord.gg/edmp). Thanks everyone that participated!


# Support Me!

This Q&A took 5 hours to prepare and 1 hour to execute. If you appreciate the information presented then <a href="/DonateNow/">please consider joining patreon or donating!</a>







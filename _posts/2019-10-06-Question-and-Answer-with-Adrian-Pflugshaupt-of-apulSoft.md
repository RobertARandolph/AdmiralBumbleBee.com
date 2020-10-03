---
layout: ['post', 'reader']
title: Question and Answer with Adrian Pflugshaupt of apulSoft
comments: true
date:   2019-10-06_12:13:58 
categories: music
tags: ['Interviews', 'Studio Tips']
image:
description: Interview with Adrian Pflugshaupt of apulSoft
---

One of my absolute favorite plugin developers(!) joined us [on discord](http://discord.gg/edmp) to have an in depth live Q&A segment.

apulSoft makes my favorite digital EQ: [apQualizr2](http://www.apulsoft.ch/apqualizr2/) and a brilliant new transient/saturation plugin: [apShaper](http://www.apulsoft.ch/apshaper/). Let's not forget the incredibly accurate [apTrigger](http://www.apulsoft.ch/aptrigga3/) either, and how easy it is to create realistic triggered parts with its modulation system.

**NOTE**: I was late to the start of the interview due to a silly error of my own. Adrian was kind enough to postpone for **7 hours**.


<!--more-->



# Contents
{:.no_toc}
* TOC
{:toc}

### Welcome and thank you! Can you start by letting us know your path into music, programming and audio plugin development?

***ADRIAN***: I started everything at the same time at about the age of 10. I got my first Saxophone and my oldest brother had an Atari ST and I immediately stared coding on it. Mostly because there was no software available as the machine had just been released. During the 90s I did a lot of chip-music on that Atari ST and coded some games. When I was about 20 I had to decide what to study and the choice was between math, computer science or music and I went for music and studied Jazz Saxophone in Lucerne, Switzerland as well as at the New School in New York and immediately started to work as a performing musician.

A few years later (when OSX 10.3 came out) I decided it is time to go back to programming and as I had always been fascinated by DSP algorithms I found plugin development to be the perfect field. Together with another musician we created apulSoft and released a first plugin called Wormhole to route audio over tcp/ip.

I went on alone and created the first [apTrigga](http://www.apulsoft.ch/aptrigga3/), mainly because I needed such a trigger plugin for a production I was working on for a band called Kubus.

I took a break from doing audio programming to create two games and some apps for the iPhone. The most known is "Beyond Ynth" which did win the IMGA grand prix that year.

The years went on, I worked for various people and companies (notably plasq and skitch) and now since a few years I'm back to doing plugins exclusively as well as going on to work as a performing musician.

### Your plugins seem to be on the cutting edge for their features. Very flexible parameter modulation, unique way to do anti-aliasing in apShaper, variable filter slopes in apQualizr... It makes me think, are there any breakthroughs happening in DSP? Were there any developers or researchers out there that came up with completely new methods of tackling traditional DSP tasks or challenges in the recent years?

***ADRIAN***: : I do think so. I did read through lots of DSP papers the last years and see some development happening. One thing is that there is vast amounts of DSP research that went into military/geological and medicine and not all of that really has been applied to audio. At the same time some standard methods do not seem a perfect fit for audio purposes (looking for instants at you, bilinear transform) and there have been new methods found in the last few years that have inspired me to figure out some different stuff - especially for apShaper. Some researchers found methods to combat aliasing using minbleps etc. and there has been things done with antiderivatives and as the results looked promising I came up with my own scheme for apShaper. Overall .. the answer is, yes a lot of interesting stuff is happening. There are some annual dsp meetings that publish a lot of interesting stuff.

[DAFX comes to mind www.dafx.de](http://dafx.de)

### With the audio plugin landscape being very crowded, what process do you follow to come up with plugin features that are still innovative?

***ADRIAN***: I'm not sure the stuff I do is really innovative.. or let's say that is not necessarily my goal. I just see how work is done in music studios and then think about what tools I'd like to have for my own productions.

Maybe in a few years I will be able to record a full album with just my own algorithms used for DSP..

### With the growing popularity of leasing schemes via sites like Splice (Rent to Own) is this a model you have considered for your own projects or do you see some other method of distribution as worth exploring in the future vs the current outright purchase model you currently use.

***ADRIAN***: I have to say I find this "Rent to Own" scheme quite interesting. Although personally I do not rent to own anything and really like to buy things at full price I think it is overall a nice idea. However for apulSoft implementing such a system would be a big hurdle. It's just a one man venture and I do everything myself. I'd rather work on new algorithms than a new store and a rent-to-own system. So I guess for the forseeable future I won't be able to do it unless there is a way where I wouldn't need to implement it myself. I saw Reason now offers something like that and I think it makes a lot of sense there where there is a central publisher.

### Adrian, with apQualizr2... can you EQ pineapple out of a pizza?

***ADRIAN***: haha. Not yet. For this I'd need to implement the anti-hawaiian filter algorithm.

### That sounds like a threat... almost

***ADRIAN***: [With the black hole as the ninth planet everything suddenly seems possible](https://www.sciencemag.org/news/2019/09/planet-nine-may-actually-be-black-hole)

I can make it worse by saying.. if there's pineapple on it, it's not a pizza (I have to know.. Italy is very close)

### What do you find the most interesting about DSP? Are there any personal "hobby" plugins that you've written that you find useful? What might we see in the future from apulSoft?

***ADRIAN***: The thing I find the most interesting about DSP is how it can create a fusion between beautiful math and sound and music. In a way it enables us to easily hear complex mathematics and enjoy them in a different way. 
Hobby plugins: I created an audio visualizer that I find interesting, but it's probably useless for anyone else. I phase shifts the audio by 90 degrees and then uses the shifted signal and the original one to draw lines (kinda like what's done with stereo for oscilloscope music). It allows me to see whether there is aliasing in the audio as that always leads to non-smooth curves on the display. Unless your are fighting with aliasing in your algorithms, it's probably useless, but it does look pretty.
In the future we might see a synth, a psychoacoustic mastering effect, a reverb and updates to the current products. Currently I'm trying to create a library of my filter math and code so I could license the filters to others and in the process filtering in my three plugins will improve a lot.


### How much you use ready-made algorithms vs building them all by yourself

***ADRIAN***: When I created my first EQ, I used the standard algorithms available and added my own oversampling to combat the shortcomings of the bilinear transform. And this really annoyed me. I really wanted to know why the filters work the way they do and needed to understand the math behind. Since then I do come up with my own algorithms for everything. It is vastly time consuming, but not knowing where the math came from was just not satisfactory for me.

Bascially it made me feel like I'm selling something I haven't created.

### Could you elaborate on the process you went through to improve your mathematical understanding in this realm?

***ADRIAN***: Luckily I learned a lot of math during gymnasium (high-school). We had a great math teacher (who originally wanted to became a piano player..) and went through a lot of stuff including some higher math. This gave me a good starting point. Then there's my father in law who is a mathematician and sometimes helped me out to understand some things. I also watched a lot of Oppenheim's classes on MIT opencourseware: [https://ocw.mit.edu/resources/res-6-007-signals-and-systems-spring-2011/](https://ocw.mit.edu/resources/res-6-007-signals-and-systems-spring-2011/) + bought any DSP book I could find.

### Just a question I like to ask a lot of audio plugin developers: Are there any plugin companies that you look up to/follow?

***ADRIAN***: When I started out I followed u-he closely. In a way he inspired me to even attempt to create plugins. These days I'm very impressed by Ableton (I also used Live on stage for many years) and Native Instruments.

### Was there any unique sonic understanding (or horizon?)  that you were given by your ongoing performances with the Saxaphone in a live Jazz Context, and that you can specifically trace to being the inspiration for a feature in any of your plugins so far? And if so, what? 

***ADRIAN***: As I mentionned earlier twenty years ago I worked on an album with the band Kubus. We created a fusion of EDM and Jazz and as we were recording I had a hard time getting the bass drum sounds we needed. That's when I created the prototype of my first really successful plugin apTrigga using NI Reaktor and later ported that to C++. 

A big inspiration from playing the Saxophone is coming from studio work where I see how Pro mixers use the available tools and sometimes hear shortcomings that happen with DSP.

### I was asking more in the sense of your playing itself directly influencing your plugins, like for example is there anything that's really hard to do or make sound good on a saxophone that can be pulled off with the assistance of plugins? Or were there any tasks that you wished were easier in a live setting that you carried over to your plugin development

***ADRIAN***: For the saxophone.. not really. A few years ago I got fed up playing through a laptop on stage, I felt it's already hard enough without computers and especially when playing festivals with limited setup time, things were crazy because I never reached a point where I would have a rowdy or similar. Plus I spent too much time in front of computers already when not playing . So nowadays I try to keep things on stage as acoustic as possible and that side has somewhat separated from the plugin development. What kinda has carried over is hearing and understanding harmonics which is extremely important for playing wind instruments and plugin development as well.

### How much time do you spend in the design stage for the various parts of development: UI, GUI, code architecture, product delivery, issue tracking, and any other concepts. I'm specifically curious about how much time you spend thinking about various stages before you act upon them.

***ADRIAN***: I definitely do not spend enough time thinking before acting and it always bites me later. For me everything starts with the DSP side of things and usually I go through quite a few iterations before I find things work nicely enough. Then usually I have an extremely hard time coming up with an UI and spend a lot of time trying to get rid of confusing features. In general everything takes much longer than I expect. Usually I believe to be able to create a plugin in half a year, but it always ends up taking a year or more. I cannot really tell how much time goes into what as things tend to influence each other even at late stage - there might be a last minute change to the dsp because the UI changed. In summary I do everything wrong :P

Fun story: when I did apShaper I took a break for a month or two at some point and when I came back I didn't understand my own UI anymore.

### Is that something that you anticipate trying to improve, or are you happy with your process?

***ADRIAN***: Well... I certainly would like to improve that, but on the other hand I've been doing this for many many years and still haven't improved a lot. Yeah.. next time will be better :wink:

Actually on a more serious side:

I used to work for a few companies where this kind of thing would have been impossible and it makes things boring

So to be able to change things as development goes on is kind of a luxury I can have because I'm working alone on this

### what is your overall process when you start making a new plugin?

***ADRIAN***: I need to have an idea that inspires me enough to try it. I get these from reading through recent dsp developments or tricks used by sound engineers. Then I usually do some kind of prototype work and if I like the sound results I start to think about how to condense things into a plugin that maybe can be understood by others.

### What's the design philosophy behind the GUI and the UX of your plugins? How do you find a balance between functionality and ease of usability?

***ADRIAN***: I really have a hard time judging "ease of usability". Initially my GUI goal was to avoid any similarities between plugins and old-school hardware. I disliked how plugins mimic the look and feel of existing hardware because I thought the computer could do so much more. It could display the information you are editing while it's adjusted instead of just showing a rotating knob. While I still think this is a good idea, it has proven to be extremely hard to implement - so I now have knobs as well, but still kinda dislike them. I dream of a workflow where everything that can be adjusted is shown on some kind of diagram or graph and you immediately see the changes. I believe that would give ease of usability and hopefully my stuff has it at least partially. Other points I find important: I hate color gradients and I'd like the GUI to be vector just because it's 2019 and most things are finally high resolution. I also do prefer black information on white background, but that has lead to discussions before :)


### The amount of modulation apQualizr2 has makes me want to kill myself for buying Pro-Q2, can you help console me? 

***ADRIAN***: You are not alone.

### On a more serious note, what do you think your role is as a plugin dev in designing the future of plugins? Do you wish to go down the route of making it easier for musicians to mix, or rather creating more advanced functionality in your products? Maybe there's space for both?

***ADRIAN***: I see this tendency in the industry to try to make things easier for musicians to mix, but I don't agree with the idea. I feel making music is hard and we just need tools that sound as good as possible and train to use them. When algorithms help people mix, things are going to sound the same even more than now. I wouldn't really want to make my products more advanced to use, but I'd like to improve the sound result. I strongly believe there is still quite some room to improve the sound quality of almost all digital algorithms. We've seen how musicians (myself included) like to use analog gear again although it's a pain to use, but I think this just shows that the digital stuff still needs to get better.

### Where do you see the industry heading with advancements in automation? I'm betting a large amount of manual corrective tasks are going to continue to head the way Izotope seems to be taking them, optimized trained algorithms that recognize objects within sound and apply abstract properties as opposed to specific EQ moves. 

***ADRIAN***:  I guess I'm old-fashionned but I wouldn't use such algorithms for my own music and therefore it's a direction I wouldn't want to invest my time into. But obviously everybody should use the tools they feel make them create the best results. Personally I do want to know as precisely as possible what is going on with my signals and the automated algorithms seem to take control away from me.

I also see a problem with AI if it's implemented using neural networks. It works nicely for tasks what would have been impossible to tackle with computers, but I for now came to the conclusion audio is not one of them because the networks rely on multidimensional approximation and audio tolerates very little approximation (=noise).

### Do you think there will always be a role for manual tweaks and editing of more traditional engineering parameters, or will we see a large part of the industry abstract away the "nitty gritty details"? 

***ADRIAN***: +1 for manual tweaks.

but...we'll definitely see more of the abstracting away, but I think that is driven by sales  and not by the demands of artists.

### Do you see object based sound like Atmos/Ambisonics becoming a standard way of mixing audio in the future? (Easier to have one mix that decodes to binaural, stereo, 5.1, 7.1, etc. outputs)  If that happens, what do you think your plugins would look like in a more object based mixing space?

***ADRIAN***: Not sure how my plugins would fit into this, but what I see is how surround mixing etc. outside of movies has declined a lot in recent years.. maybe because the vast majority of people now listens to music using their mobile phones playing back compressed stereo files over bluetooth headsets. I do find surround sound fascinating but I don't think it's where the music industry is heading to currently.

None of the recording studios I've recorded in during the last few years even has a surround setup.

### What would you prefer, as a developer? a) 100 paying users - each reporting a different bug that's in the platform (DAW/OS) layer, or b) 1 paying user - reporting 100 different bugs in your actual software?

***ADRIAN***: but no other customers?

**ED**: let's assume no other customers

***ADRIAN***: ...

### I saw a presentation by someone recommending Rust (the language) to develop audio applications. Do you see any emerging open-source technologies potentially reshaping future development of audio applications?

***ADRIAN***: I'm not really familiar with Rust (yet). But to be viable for plugin development it needs to have the option of manual memory management, interoperability with c/c++ and of course be real-time compatible. For the time critical dsp part of the software no operation can block (use an undefined amount of time). This is hard, but possible using c++/c/assembly and mostly impossible using c# or java. Not sure about rust, I read about it but I think it's too early to even try something with it + I am very happy with the way c++ has developed in recent years.

I think Linux is becoming an option for audio in recent years, but haven't really investigated in-depth. Every time I try something goes wrong and I fear the amount of customer inquiries a linux version of my products would create.

### Do you have any advice for someone wanting to learn DSP for the purpose of building audio plugins but has no background in programming?

***ADRIAN***: If you just want to learn DSP, get Reaktor, Max/MSP or the free pd and check out lots of available online DSP resources.
If you want to learn DSP and programming audio plugins at the same time.. maybe better focus on just one of these things first. Both are hard and the combination is almost like poison. I spend a lot of time on the JUCE forum and I see newcomers struggle with both things at the same time. Overall I think learning to program is easier. Frameworks like JUCE or wdl help to ease the pain of getting into plugins. It used to be crazy, but now it manageable.
The way I started was to fire up XCode on OSX 10.3, compile an AU example project and without knowning anything I started to tweak the code where I saw fit.

### I saw an earlier question being posted on advice for people wanting to get into DSP without a programming background, and I wanted to follow up to that with a question on how to get started if you do have a programming background. What are some good starting resources and must-have books for practical audio DSP programming?

***ADRIAN***: As metionned I found the MIT resources about DSP in general very helpful. Playing around with Reaktor or pd (pure-data) is nice to try stuff. Book-wise there's this one that gives some basics: https://www.dspguide.com/
Advanced topics can be found on the IEEE or DAFX homepages and  with the scientific papers checkout out the cited works often leads to great sources of information.

Also before getting into any DSP, learn about complex numbers and the fourier transform.

A nice pratical book IMHO is this one: DAFX: digital audio effects   by Zölzer

### How much extra work is AAX support and do you have advice about specific tools or programming frameworks that a hobbyist learning DSP could use to make their own AAX plugins?

***ADRIAN***: I use the JUCE framework and that means besides debugging I need no additional work for the AAX version. However in order to build an AAX version you need to be a registered Pro Tools AAX developer with Avid and any further information about this falls under NDA... I guess for a hobbyist it is impossible to create an AAX plugin.

### Is there anywhere I can find your music online?

***ADRIAN***: Some live stuff is on youtube. There are only two Adrian Pflugshaupt on the world and the other one isn't a musician.

In recent years I've been a co-leader of the Swiss Jazz Orchestra and AFAIK all our music is on iTunes.

I co-created the first album of the dub band: "Dub Spencer & Trance Hill" called "Nitro" which I think is available on many platforms.

That Kubus band.. I think the CDs are sold out and never made it to streaming platforms, but at least there's a teaser on youtube: [https://www.youtube.com/watch?v=SgFPYzwBqYE](https://www.youtube.com/watch?v=SgFPYzwBqYE)

There's many other albums but the event I'm proud about the most is Quincy Jones 75th birthday at the Jazz Festival Montreux available on DVD/Bluray etc...

### What two artists would you like to see collaborate with each other that haven't yet? Genre being irrelevant.

***ADRIAN***: Wow, that's hard. Janelle Monae + Daft Punk :p

### Why knobs instead of sliders? :stuck_out_tongue:

***ADRIAN***: Knobs use less space and are more square which means moving them around is destructive to the layout.


### Thank you for hanging out @Pflugshaupt! It's been super fun and educating.

# Meta

This Q&A took 7 hours to setup, host, transcribe and edit.







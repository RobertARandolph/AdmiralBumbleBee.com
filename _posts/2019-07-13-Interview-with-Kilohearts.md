---
layout: post
title: Interview with KiloHearts
comments: true
date:   2019-07-13_13:23:10 
categories: music
tags: ['Interviews', 'Programming']
image: /assets/Khs/PhasePlant/Khs.png
description: Interview with Kilohearts.
---

{::nomarkdown}
<img src="/assets/Khs/PhasePlant/Khs.png" alt="Phase Plant">
<div class="image-caption">Phase Plant</div>
{:/nomarkdown}

We recently had an interview session with the fine people at [KiloHearts](https://kilohearts.com) over at the [EDMP Discord](discord.gg/edmp)

<!--more-->



# Contents
{:.no_toc}
* TOC
{:toc}

### Hi! To my question: Is there any plan to add time-stretching to the sampler in Phase Plant?

**PerL**: We have been considering adding a granular module in addition to the sampler. So not exactly time stretching but similar.
**Anders**: Directly about time stretching: Not really planned. It'd be cool, but it's pretty far down on the list.
**PerS**: Also Time-stretching and similar techniques are notoriously hard to get right. So a big investment in development time.

### What do you think is the coolest thing someone has done with phaseplant so far?

**PerL**: Some of the one patch songs that people have done are pretty mind blowing. It's so much fun to see what talented sound designers can come up with. They know how to use our product better than we can.
**PerS**: I really love some of the factory presets that Rob Swire made. He also hid some cool easter eggs in them.
**Anders**: Maybe not the coolest ever but for I love this thing: https://twitter.com/kiloHearts/status/1135647615209627648
**PerS**: Other that those there have been some impressive stuff going on that's not strictly useful. Like the 1920 voices patch.

### What are your plans for future features in phaseplant if any? I know its kind of early but Im curious

**PerS**: This is the question we get the most. I'll just paste some answers from earlier:

...if I can find them...

Some stuff in no particular order:
- Something akin to "warp-modes", made popular by... other synths. (Most of which can be accomplished already, but it requires some complex understanding)
- Better content browsing for wavetables, presets and samples.
- More filter types.
- Snap Heap and Multipass as snapins
- Better modulation overview.
- Improved LFO editor and MSEG envelopes
- More snapins!

**Anders**: We have a bazillion things we want to add, both things that we've thought of while developing but gone "we'll have to add that in an update", and things that users have suggested. We've thought quite a lot about it though for a long time so a lot of the time when we get requests it's "yeeeeeah we've already thought of that and [we won't add it because]/[it's on our todo]"

### While we're waiting on the list, could you share a couple "we won't add it because" requests?

**PerL**: A multisampler is something that gets requested a lot. While It's not out of the question in the future, but it's not on the roadmap
**PerS**:
**Anders**: One thing that gets requested a lot that is on the "likely not, at least not soon" is running VSTs as FX within SP/MP/PP.

There are two main reasons for that. One is that we with PP support polyphonic effects, which is hard to do in a good way with VSTs.

The other is related, and that is that we add new stuff to our snapin system all the time, like for example polyphony, and we don't want to be held back by having to support some VST bridge as well. It'd slow down development a lot.

### Is the acronym PP intentional?

**PerS**: As in it's a pun on "Faceplant" while also meaning a "plant" as in "factory".


### I guess this is already requested a million times: Ability to save / load custom LFOs?

**Anders**: YES! That's a must.

### What is your thought process when designing a new synth from scratch, for example how did the original concepts around Phaseplant get locked in?  Do you seek to improve what is out there or do you really feel there are things missing from what's available?

**PerL**: We wanted to do a synth that covered three big synthesis techniques in one package (subtractive, wavetable, FM)
**Anders**:(, and Samples) 
**PerS**: Phase Plant was born as an idea at the same time we came up with the snapin concept in general. A long time ago it seems. Like 2013?
**PerL**: Also, we wanted to use our snapins for the FX section, so it made sense to do the generator section modular as well
**PerS**: We didn't really "lock it in" ever. It's still evolving.
**PerS**: About the previous question: We absolutely seek to improve on what's out there. I'm a huge fan of minimalism and "elegance" I always try to understand a system to see what's possible with as few controls as possible. That's one of the reasons "warp modes" aren't in Phase Plant yet. You can do most warp modes if you understand audio rate modulation and the wavetables.

`Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.`
- Antoine de Saint-Exupery

### How many operators are available for FM btw i have to ask

**Anders**: There's actually a limit: 30
**PerL**: No "normal" patch has maxed out the generator stack yet, but some one note songs may have.

### For Per Larsson: Do you know Dan Larsson? Also for Per Larsson: What would you say is the best advice you could give an aspiring developer? Besides stocking up on aspirin.

**PerL**: I do not know who Dan Larsson is.

Gonna paste in an answer for the developer one, hang tight.

I've mostly been learning by doing it. Start with a small project and work your way up. I'm no DSP expert by any means, I have had to read up quite a lot of DSP algorithms to be able to implement them in our products. For example, when we decided to do Multipass I had no idea how to implement a band splitting filter. Anders also helps out with a lot of DSP code. He figured out the higher order filters in Slice EQ, for example, which I still can't wrap my head around. :sweat_smile:
There are a ton of great resources online:
The JUCE framework is a good starting point. We don't use it at Kilohearts, but it will get you off the ground fast. [JUCE](https://juce.com/)
Julius Orion Smith III has a bunch of free DSP books on his homepage: [DSP Books](https://ccrma.stanford.edu/~jos/)
I can also recommend [The Audio Programmer Discord channel](https://discord.gg/yg5rph)

### How do you keep from getting too frustrated during the programming process?

**PerL**: Frustration followed by the sweet triumph when you overcome an obstacle and the thing FINALLY WORKS is what keeps us going
**Anders**: Also we're embarassingly bad at actually doing boring stuff, we pick something fun up and do that instead. "I should finish this thing buuuuut there's also this new Snapin idea I want to try out..."

### What's your biggest struggle when designing a new snapin? also, as a side note I really love the visual for ensemble, I think it's one of the coolest ways of visualizing that type of effect

**PerL**: The UI usually takes a long time, At least if it does something special, like the ensemble. For phase plant we probably spent 50% time on the UI 25% on framework code and 25% on the DSP code.
**PerS**: I just want to throw it out there since people have no way of knowing: Kilohearts is us three, and a new friend called Stu who helps us out. That's it. No legions of coders or anything.

### How do different companies' algorithms for generating a (sine/square/saw/etc) wave differ? Are the algorithms represented in the time domain, and does the difference come from a different number of Fourier coefficients? Or are the algorithms represented in the frequency domain, and the difference is found in the spectral coefficients? Obviously some degree of taste applies here, and that probably drives the individual tweaks that devs do, but what else is there to it? How do you feel about the dev tools currently available for plugin development? Do you like the tech stack? Are there features/tools that you wish you had access to? And how do you feel about (I'm assuming you use this) C++ as it is today?

**PerS**: That's a great question that I'll leave to PerL.
**Anders**: Multiball question.

Our current tech stack is 95% our own custom stuff. We do use third party libs for vector graphics rendering but that's about it. It's got both ups and downs. I love that we've got total control over everything and can do whatever we want at any point. The downside is of course that we HAVE to do everything ourselves as well.

The biggest downside is compatibility fixes. All DAWs and OSes have their own quirks and weirdnesses, and keeping up with supporting everything takes a lot of time which something like JUCE for example already has done for you most of the time.

**PerL**: That's a big question, I'll answer it with how Phase Plant does it:

The analog oscillator uses a well known technique called MinBLEP to generate alias free analog waveforms. It does some precalculation in the spectral domain (and in the cepstral domain, even :upside_down:). The main part of the algorithm runs in the time domain, tho.

Mostly you want to stay in the time domain when doing real time DSP, since doing FFT shenanigans will add a lot of latency.

The wavetable oscillator also does some precalculation in the frequency domain, but the real time part runs in the time domain

Mostly you want to keep both the time domain and the frequency domain in mind when working with the DSP, since each will give you different insights

### how often do you look towards vintage/analog equipment for ideas?

**Anders**: Hardly at all to be fully honest, Especially from a UX standpoint.
**PerS**: Was gonna say. Just about never. One way to put it is people who try to simulate hardware often go for recreating faults in the signal processing caused by, well, physics. We often aim at "mathematically correct" instead.
**PerL**: Yeah, my mind is 100% digital :smiley:

### With analogue modular routing you can literally out any out put into any input eg headphone out to gate in or something and really mess stuff up and get interesting feedbacks. Are all the possibilities available in digital or does it still need more work or a step change to achieve?

**PerL**: You can do some pretty messed up stuff in Phase Plant too, with the audio rate modulation system, Especially if you start doing feedback cycles. The only product we have that tries to emulate analog shortcomings is the Ladder Filter snapin, which can be overdriven. But you can still create a similar sound by combining perfect filters and distortion.
**PerS**: There are of course more in-depth systems available than Phase Plant. Like Softubes Modular. Which really pushes the boundries on simulating Analog Modular sound processing.
**Anders**: Well, in theory it's all available in digital but in practice there's often things like performance etc... There is one thing that's hardly ever "emulated" in a digital world though because it doesn't make sense, and it's all the hums, buzzes, clicks and whatnot.

There's a long long presentation by Mick Gordon about the music in DOOM where he talks about his "Doom instrument", which basically is a network of overcompressed & hard driven analog gear. It's amazing and cool in so many ways, and it's kind of one of the few things that I feel is hard to construct the same way with a digital system.

Not because digital can't do it in theory, but because there's so much auxillary sounds and fx and whatnot that just comes naturally by those devices that you'd have to specifically model digitally and that kind of... takes away the charm somehow.

### When creating a synth, do you have a target audience for it? or are synths pretty versatile in that aspect

**PerL**: For most of our products I feel like the target audience is people who like to tinker and design sounds themselves. Most of our customers are EDM producers, if I were to guess. But there are people doing all sorts of stuff, like sound design for games and movies. We do some paid advertising as well, but we have a quite limited budget. Community building and word of mouth are the main ways we advertise
**PerS**: About a target audience: Not really. We build stuff that we like to use, and this is it! :smiley: We used to market ourselves to everyone dealing with sound, but that didn't turn out to be very lucrative, so we focused our marketing on EDM, and it's been better.

Editor: Marketing an electronic synth to electronic musicians... brilliant! :wink:

**PerS**: We'll you jest, but really they work great for other stuff. We recently launched our products with Slate, and they have customers who think our products look too "computery", but when they use them they love them. Lots of metal producers, and funk and whatnot are blown away by what they have been missing.

### Metal producers use PP? interesting

**PerS**: Not PP specifically since it's not in the Slate bundle. But Multipass and all the snapins.

### What IDE/Editors do you guys use? Version Control? Testing? CI? Distro? Rubber Ducks?

**PerL**: We develop in C++, mostly in Visual Studio on Windows. We have some internal tools written in Python as well. We use Genie for our build system and Jenkins as our build server. And OG source control in SVN, have considered Git but haven't felt the need to make the switch.

For testing we have to internally developed VST hosts (the Player and the Analyzer) which save the state reloads the plugin immediately when we rebuild, which is super convenient
**Anders**: Visual Studio/VS Code, SVN, Jenkins. We primarily develop on Windows using Visual Studio, When doing dev on Mac (mostly bughunting and debugging) we use VS Code.

### What was your strategy marketing your very first product?

**PerL**: For our first product (kHs ONE), we basically just uploaded it to our homepage and then made a thread on KVR Audio :smiley: Then we sat back and watched the cents roll in.
**PerS**: For many years we could only spend a small fraction of our time on development. But for the last two years weve been fortunate enough to do this full time.
**Anders**: That was 2011. We've done a loooot of side hustling to pay the bills since then though

### As a company i see Kilohearts to be doing everything right. No scummy trial baiting, no advertising or marketing that oversells the products, very affordable rent plan, well created products marketing themselves with the push of artists using them... It makes me wonder, what is the effect of piracy on a company like this, and what is your stance on it?

**PerL**: Piracy is tricky... :smiley: We decided early on to not require a dongle like iLok for our products. Which means cracked versions popping up are pretty much unavoidable
**PerS**:
**Anders**: Appreciate you like what we're doing, we're pretty much winging it :smile: About piracy, well... It's there, it's gonna be there, we care but we're not losing sleep over it.

Moderator: do you have any idea of the percent of people that pirate your software vs people who buy it?

**Anders**: Not really tbh, but if it's on par with other products: A looot of people pirate.

### Do you find that having an affordable subscription option lowers piracy rates on your software?

**PerL**: We hope so, but we really have no idea
**Anders**: Don't know yet :smiley: But bottom line, please don't pirate y'all.

**PerS: We don't measure it, but we have it on good authority that piracy rates for similar products are about 95%.
That had me thinking about it at least. But we don't feel that it can get in the way of accessibility. That's why we don't use iLoks or dongles or stuff like that.

### Are automations on the table for phase plant? Macros are cool and all but for me at least phase plant ends up ever so slightly more cumbersome for simpler patches when the only way to automate is by assigning stuff to macros

**Anders**: Automations are on the table, But due to the dynamic nature of it, it can't be supported directly but needs some kind of workaround. We're still figuring out the best technical/UX tradeoff there, but yes. We'd like to address it.

### Would you dive into the technical reasons why there's currently no real way to automate a vst with an external modulation source.

**PerL**: There is a problem with automating parameters in a modular plugin like Phase Plant. If you set up an automation from your DAW to the filter cutoff and then remove the filter module you will have the automation in your DAW being connected to nothing.
**Anders**: Well, the DAW sees a number of "parameters" in the plugin. We have potentially thousands of internal parameters, which may or may not be active etc etc. This makes it impossible to make an 1:1 mapping between the host and our internal state.
**PerS**: Third answer to your question, which I interpret as being about VSTs as modulation sources: It's just not in the protocol. Rack Extensions in Reason have it. VST dont.

### Hej ! Wouldn't it be nice to have it possible to drag 'n drop individual snapins into an environment like SnapHeap, Multipass or PhasePlant ?

**Anders**: You mean like if you've added a snapin "standalone" but feel later "oh I want to put this in a snap heap instance instead", it could be nice to drag/drop it into Snap Heap.
I think direct drag/drop may be a problem, but I totally see the point and maybe some copy/paste or whatnot could be done. Will have a think about it!

### Would it be possible to add Sends as snapins? i.e. allowing you to FM the original waveform from the mixer portion of Phase Plant, or sending the signal to another lane while still passing through the rest of the lane, I feel like that could open up some really interesting parallel processing opportunities.

**PerL**:  The generator stack in Phase Plant runs at sample precision, which allows us to do all the fancy audio rate modulations. In the effects section the audio is processed buffer-by-buffer in each effect, so about 64 samples at the time. This makes it harder to send the signal around freely without inducing latency.
**PerS**:
**Anders**: Sending stuff back from the mixing section to the generators would have to introduce delays, and would likely not be super useful. At least not as useful as it might sound as a quick idea.

Moderator: I think some sort of feedback routing would be really cool. something similar to Massive's feedback when you route insert 2 > feedback > back through.

**PerS**:  Sure. We've talked about that stuff a little. Soundtoys have something similar right?
**Anders**: Ok, let's just say I'll have a look at it then :smiley:.

### Serious question, what doesn't your complete snapin toolbox do?

**Anders**: Basically "what snapins are missing"? I'd love to have a vocoder in there.
**PerS**: Impulse response stuff.
**Anders**: : Yeah, IRs would be dope.

### Would you guys be interested in doing tape emulation in the future?

**PerS**: Sure, but it ties in to the time-stretch tech we spoke about eariler. It takes a lot of time.
**Anders**: Well there are few things that are "hard no" :smiley:

### Are 31 bands really neccessary?

**PerL**: 31 bands cover the audible spectrum from 20 Hz to 20 kHz nicely, with each band representing one third of an octave.
**Anders**: 31 bands in what context? Carve EQ? It's a common number of bands for "high precision" graphic EQs.

### And now a technical question about Phaseplant... What form of FM does it use? Clearly it's not Yamaha FM, because that's PM, but it can't be analog FM either, since you said you don't do emulations beyond the Moog ladder.

**Anders**: Ok, well PP supports 3 kinds of FM basically: One kind is, like you said, actually Phase Modulation. There's also two other kinds of FM that you can access by modulating either Shift (frequency) or Semi/Cent (pitch). They're more "true" FM in some sense. I guess you could call it analog, but it doesn't really matter. Both yield more non-harmonic sounds than PM which is harder to control, but can give a range of wildly different sounds that are hard to do with PM.
**PerL**: PM has the nice feature that it doesn't drift out of tune. Linear FM can drift if the modulator has DC offset, and Exponential FM is just wild :smiley:

### Why does 'normal' FM (fine tune) not yield the expected lower sidebands?

**Anders**: I can't answer that off the top of my head right now, would love to discuss in detail at another time though.

### Are there any questions you were hoping to answer but nobody asked? if so what are they and what are the answers?

**PerS**: What's your highscore in Phase Invaders? Mine is embarrassingly low...
**PerL**: I wish someone asked the question about the duck sized horses.

### what would you rather fight, 100 duck size horses, or 10 horse sized requests for feedback routing?

**PerL**: The feature requests. Turns out you can just put them at the end of the todo list and never ever get to them.

### Are there any questions that people asked, but you wished they didn't? If so what are they and why did you not want to see that question?

**PerS**: Yeah, I would love to not get asked about warp-modes and oscillator-modes all the time. I feel like some competitors take a concept that has a solution, create a shortcut to it and slap a cool name on it. I'm looking at you "gorilla mode". Then people wonder why we don have "hysterics-filter" or "mega-oscillation". Because it's there, just without the names...

### Quite a few people would like me to ask you guys, professional coders, synth creators, etc.......................... "food suggestions please?"

**Anders**: I just ripped all of my kitchen out so anything that can't be cooked with microwave or boiled water (not boiling, only have a boiler) is out
**PerL**: Anything with cilantro and you can count me in. And [Molly's smashed taters[(https://www.youtube.com/watch?v=tPdi0cUPg0Q)
**PerS**: No great suggestions on food to buy. But food to cook.
Get a deep fryer if you haven't got one, and roll some Halloumi-sticks in flour. Dunk them in the fryer. Put on a plate, spread finely chopped onions and chili and parsley on top and some sauces you like. Heaven.

I tried the potatoes. They were :fire:
**PerL**: Agreed
**Anders**: Can you make them in a microwave?

### Here's a question (probably best suited for dev) regarding sample rates and processing... is it true that most VST's these days accommodate for high sample rates (undersampling) and low ones (oversampling)

**PerL**: We oversample internally as needed. But we don't worry too much about sample rates below 44100

### Does using a quality plugin really make a difference in making good quality music, or it's just down to the producer skills?

**Anders**: Plugins are tools. You need to know what you're doing, but good tools can make it simpler.

Think of it as a guitar. Some people can create wonders with one guitarr, and not so much with another. Some need 5 different ones. Some love to collect them.

### 1) Are you guys adding more games to Phase Plant? 2) Have you guys ever considered developing plugins for Linux? 3) What crazy, experimental plugin would you make if one morning you woke up and magically had a complete mastery of coding and DSP?

**PerL**: 1) Nope. 
2) Yes, we have considered it and decided it was not worth our time, sadly
3) I have some ideas for a new synthesis technique I'd like to explore actually

### What lead you guys to develop the snapin ecosystem? Was it an early idea for the company? Was it based on any similar solutions by a competitor? Similarly for the subscription plan.

**PerS**: Anders and PerL founded the company, and then I joined a little later. At that time they had some input from a major artist about a band splitter that should have a set effects list on each band. We came up with the idea of making those chains customizable. Then we thought: why not make them their own plugins as well? And Snapins were born. We had some basic idea of Phase Plant immidiately. It just took us many years to make it reality.

**Anders**: Long story short:

We started making a multiband plugin loosely based on some youtube trick SeamlessR did. I think we called it NeuroChorus or something when working on it. Then at some point we felt "wait, wouldn't it be nice if we could move these around".

And then yadda yadda snapins.

About subscription: Not really.
We have created som many plugins that the bundle is getting really expensive. We just wanted people to be able to get it without having to break the bank.


### Some of us have a general idea of what to expect from possible snapins in the near future & feature additions due to the conversations in the KHS discord, but is there an official list you guys can confirm? If so, what are the snapins you guys as developers are most excited for? And maybe, if its not too much, what are the ones you're least looking forward to doing (cause of probable code nightmares?)

**Anders**: We have been looking at making a convolution snapin, but the math owned us. Might return to that some day.

Making a convolver is not that hard, making a super fast one is harder.

* Conclusion

and that wraps up our Q/A with Kilohearts! Be sure to go check them out and support them at [Their Website](https://kilohearts.com/)

[They also have discord here](https://discord.gg/k6uWEN)

---
layout: post
title: Question and Answer with Fabien Schivre from Tokyo Dawn
comments: true
date:   2017-11-07_11:16:09 
categories: music
tags: ['Interviews', 'Studio Tips']
image: /assets/General/TDL.png
description: Q&A with Fabien from tokyodawn.net
series: fabien
---

{::nomarkdown}
  <img src="/assets/General/TDL.png" alt="Q&A">
  <div class="image-caption">Discord q&a with Fabien</div>
{:/nomarkdown}

Recently on the [EDM Production discord](http://discord.gg/edmp) that I help administrate, I held a Q&A with [Fabien Schivre from Tokyo Dawn](http://www.tokyodawn.net/tokyo-dawn-labs/). Specifically we discussed Tokyo Dawn Labs.

Click through for the whole Q&A as I've transcribed it.

{% assign fabien = site.posts | where: "series", "fabien" | sort: 'date' %}
<ul>
{% for my_page in fabien %} 
    {% if page.url != my_page.url  %}
        <li><a class="page-link" href="{{ my_page.url | prepend: site.baseurl }}">{{ my_page.title | split: '-' | last }}</a></li>
    {% endif %}
{% endfor %}
</ul>

<!--more-->

# Contents
{:.no_toc}
* TOC
{:toc}

# Q&A

A big thank you to everyone on [the discord](http://discord.gg/edmp) for asking questions and participating!

### Do you have any pets?

**Fabien**: No pets, but short living exotic plants. ;)



### What motivates you to offer a free version of most of your stuff?

**Fabien**: When Vlad and I started to release plugins, we did it for free simply because we already had "real" jobs with responsibility in the early IT business and comfortable income. The whole motivation behind our work was fun, and a quick way to gain access to high end software. 😉  

Only later it developed into a fully fledged business, and at this point we realized how effective freeware acts as advertisement, SEO, demo and PR vehicle. For us, it's cheap to build and pushes a perpetual stream of newcomers into our funnel, assuming they'll remember us once they have a paypal account. :D

The costs for ad campaigns are hilarious, and incredibly ineffective as most of the audience runs ad-blockers anyway. Those who don't definitely aren't part of our  specific audience. Freeware is so much cooler and nicer. In my experience good vibes make a huge difference in operational costs!



### How much are you a musician or producer or DAW user yourself, and how does that experience (whether a lot or limited) influence your design ethos and user interface?

**Fabien**: I made a few attempts at producing music several years ago as part of the "Comfort Fit" project, but quickly left it and put most focus into the technical side of things. 

[https://comfortfit.bandcamp.com/album/forget-and-remember](https://comfortfit.bandcamp.com/album/forget-and-remember)

Check the "Forget And Remember" album on that page to hear some of my "influences" (main work by Boris Mezga) :expressionless: .

I do a lot of audio work and mastering for my label though (creative sometimes supervision too when needed), and of course regularly run tests in all sorts of hosts for our plugins. 

I'm of course involved in most music projects we release, in a way or another. You can check out our label's music by clicking around over here: [http://www.tokyodawn.net/](http://www.tokyodawn.net/)



### Any plans to port your plugins for linux? like u-he did? PLEASE! :smile:

**Fabien**: Linux support will follow at "some" point. Not sure when exactly, though. It's not an implementation issue.

Small step over to Linux, we'd love to support it asap of course, but we have to be wise with our resources, testing and bugfixing is by far the most expensive aspect for us. Supporting a whole new OS is more work than it seems at the end of the day. We also postponed VST3 support for the same reason. Not politics, just pragmatism.

 

### When designing a product, what is the process you use for determining the parameter ranges and scaling? Do you err on the side of safe for "mostly good results" or to allow users more capability but more potential for poor sound?

**Fabien**: Parameter ranges typically depend on the specific application and technical possibilities. There's often a musically sensible sweet-spot to most parameters, with this in mind, narrow ranges can make sense at times. The most difficult part from my point of view is essentially everything that the end user doesn't see: The countless little bad things cleaned out during the evaluation process. Dead angles, redundancy, or sometimes just a bad feel with something. We spend a lot of time fine tuning our parameter ranges.

We certainly don't start defining ranges on paper. We only do during development.

Another important aspect related to parameters is parameter smoothing and click free operation.



### What does the TDR EQ and also the compressor offer that the competition doesnt? In terms of maybe workflow, ease of use, approach?

**Fabien**: That's a wide question, but I'd answer with our strong (and quite unique) focus on equal loudness workflows, serious anti-aliasing (I mean, really serious! 😃 ), the Smart Actions known from the GEs, a careful parameter mapping and UI layout, and the point that we aren't wasting much time with 50 year old concepts made for a different world, and instead use all resources to first get digital right. ;)

The anti-aliasing and careful DSP development is definitely something I'd highlight. This is what makes our products, even the freebies, so popular in the pro mastering scene. I recommend you to give our manuals some time. Check out the introductory chapter in [Kotelnikov](http://www.tokyodawn.net/tdr-kotelnikov-ge/)'s manual for example.

[Kotelnikov Manual](http://www.tokyodawn.net/labs/KotelnikovGE/Manual.pdf#page=6)

This is stuff even Weiss gear doesn't come close technically. As mentioned above, our initial motivation was access to true high end, without the cost. The idea to publish our tools only came later.



### I think that also answers this question: SlickEQ looks like it lacks features compared to other products like Pro-Q2 or Equillibrium. Why would I choose SlickEQ as an EQ?, unless you wish to elaborate further about that product

**Fabien**: I think it's an interesting question to be answered, especially if someone is wondering about it. 😃

Point is ease of use and fast decision making. That's quite a feature in our fast moving world.

[slickEQ](http://www.tokyodawn.net/tdr-vos-slickeq/) (free) in particular has a wide following because of its simplicity (and really nice filters). Many people seem to enjoy the well balanced mix between old school analogue control and modern equal loudness options, etc. Usability is very good.

All our plugins support stepped control for this reason (fast decision making). Simply drag with the right mouse button, or configure the behavior in the settings dialog. Interestingly, many old fashioned mastering engineers are used to them.



### You mentioned that our world is "fast moving" i'd definitely agree. How do you think this will effect plugin development? With things moving faster and faster by the day and so many people making music do you believe that the programs will make it easier and easier to make qaulity music faster and faster with effeciency and speed being the top concerns? Or will they stay as they are with people working around them through steps to get a qaulity sound?


**Fabien**: IMHO in the improvements are due to tech that is speeding up our world. So in some sense, the solution is already there when problems appear 😉  I'm not particularly pessimistic with it.

Tech is maybe the wrong term.

I mean intellectual improvement. One example: Counting beans vs weighting beans. Quite a difference.

Similar is happening in audio production tech for sure. Weighted beans don't taste worse 😉 



### These plugins give people like me (a mate just in their bedroom with a kb+mouse) the ability to make a ton of music at the tip of my fingers. How do you think this will effect the music industry of the future?

**Fabien**: IMHO it already does since a while



### What inspired you to make TDR Nova when other plugins(such as Fab Filter Pro-q) are around?

**Fabien**: When we started, they weren't around. I also personally don't see them as particularly smart concepts. It's mostly a frankenstein bucket of all  features one could imagine. But not particularly sexy. In arts, these things matter, don't they? 😉 

### Eh I guess, but it's still very useful for people(like me) who don't get paid much money

**Fabien**:  these are really different philosophies. Nova in particular is made to guide the user to only make reasonable moves. slickEQ is very similar in this regard. We intentionally don't add any feature one could request, as it quickly messes up usability and rewarding experiences



### Looking through your website, I noticed that your plugins are very traditional mix/mastering focused, while your record label puts out a lot of dance-oriented genres like afrobeat and house. Are there any plans to get more into sampler/sequencer/synth/etc tools that are oriented specifically towards making dance music or are they seen as separate spheres?

**Fabien**: would be a great fit indeed. We haven't started yet, though, but who knows! VSTI is definitely an exciting world.



### Have you ever done any wave shapers and more specifically a buchla style triple wave folder? Also what's the most underexplored type of audio processing that devs aren't giving enough attention to in your opinion
**Fabien**: Yes, plugins and label are still separate, but we're looking forward to let some synergies between both bloom. As you said, it would fit well.

Waveshapers, of course. We often use such methods somewhere deep inside our code. Even a dB to lin conversion is arguably a waveshaper, even if it doesn't produce sound. 

But to be honest, waveshapers have a very bad taste to them. The sound of old cheesy sat plugins is essentially the sound of waveshapers. They don't even come close to what happens in a truly fat sounding analogue amp.

The definitely have been explored deeply. But now considered too weak from the musical point of view. Not directly, if at all, we do sweetening style sat.

We might do a destruction box and guitar pedal style concepts sooner or later though



### Do you have any insight on what plugins might be able to do in the future?

**Fabien**: Our next releases will be updates for the [SlickEq](http://www.tokyodawn.net/tdr-vos-slickeq-ge/) and [Nova](http://www.tokyodawn.net/tdr-nova-ge/) families, and then a remake of our old Proximity plugin.



### Do you ever entertain ideas for more experimental plugins?

**Fabien**: Yes

Definitely. But we're still small so we first meant to cover the basics and extend our initial audience (pro mastering). We will for sure step into more creative tools, be it sat, special FX or maybe even instruments at some point. We prefer doing small and safe steps.



### Also, I’ve always wondered what are the preferred coding languages for VST’s. There are many, and I can imagine most of them would work.

**Fabien**: yes. But most libs are written in C++ so there's little choice i.e. aax sdk, vst sdk



### What are your current thoughts on various international delivery standards? Do you have any strong opinions about level practices espoused by any particular delivery standard, I'm curious about this from a developer's standpoint.

**Fabien**: I personally don't matter much about delivery levels. If needed, streaming/broadcasting authorities will do it anyway and statically turn up or down. The only critical point is leaving sufficient "crest factor" in the material, otherwise your material might end up being lowered too much.

It's also worth mentioning that specification is rather weak (inaccurate) and short lived in this area.



### What would be your dream plugin?

**Fabien**: [Kotelnikov](http://www.tokyodawn.net/tdr-kotelnikov-ge/) was one of of them!

😃

[Nova](http://www.tokyodawn.net/tdr-nova-ge/), too. These are things we always wanted to have, so we tried to build them.  We have other ideas, too of course. To be announced once ready. 😃



### **Fabien**, I'm so excited you're coming to talk with us, because I just discovered TDR Nova (actually through this discord) and I'm in love with it. What are some secret tips one might not discover on your own.. any do's and dont's?

Since you mentioned [Nova](http://www.tokyodawn.net/tdr-nova-ge/) being one of your dream plugins, could you expand on on some of the things that are particularly unique about it that may not be obvious?

**Fabien**: The [Nova](http://www.tokyodawn.net/tdr-nova-ge/) family has a few unique feature worth being mentioned. And the GE even more. ;)

* Super wide control range for freq (beyond 20k at any rate) and super smooth Qs. The HP and LP filters go crazy steep, which is great for special FX or fattening kicks due to the hefty phase shift. Zero quantization or nyquist warping problems.

* the nova family is truly parallel, with perfectly symmetric boost and cuts. Parallel EQ structures aren't exactly easy to do in digital, but offer enormous advantages when nonlinearity comes into play (as is the case with the compressors/expanders inside Nova). Check out how other parallel dynamic EQs behave, most, even the latest by waves, fabfilter, izotope offering don't get this right, as they all produce asymmetric boosts/cuts when dynamic EQing is engaged (i.e. don't really do what the user told to do).

* The equal loudness support. Nova standard supports implicit Equal loudness for all linear aspects of the plugin (EQ, gain, stereo) and the GE also offers an explicit loudness compensation for all nonlinear aspects (compressor/expander). In my opinion, this is super super super important.

* The GE's "Smart Actions" allow the processor to analyses the signal and make suggestions! Basically, smart, input dependent presets. You can match EQs with it, remove resonances and much more. But the coolest part is that these smart actions purely adjust public parameters, the operator can learn from them and later fine tune to taste. BTW, we had these features almost a year before izotpoe popped up with very similar "revolutionary" ideas 😉 

* A powerful differential antialiasing structure. It basically combines the advantages of oversampling with those of non oversampling (i.e. we only resample the difference between in and out, never the whole signal).



### Considering TDL is more about mastering plugins, I'm wondering if we can expect some other types of plugins from you. distortions? ampsims? something other than dynamics and EQ, basically :smile:

**Fabien**: as mentioned above, a remake of [Proximity](http://www.tokyodawn.net/proximity/) will follow. This is meant to cover several special FX as well with a powerful modulation section.

Take the standard application: Simulating distance. A distance pan pot. Now imagine what happens when you modulate this signal (tremelo or vibrato if true delay is engaged), or when you mix it back to the original (phaser/flanger/chorus). All this, but with style, because the tremelo then not only modulates gain, but replicates the physical properties it has when travelling through air.

Further, precise doppler effects are possible.

Now think stereo and you have a really deep panner.

Finally, think dynamically and you have a cool "singer distance maintainer" and similar.

That's the next product. But ideas are still all over the place here, no worries!

### Sounds interesting 😃

It's great to have you here (Referring to Mario Krušelj (evildragon)), because our beta team carries a huge part of our hardest work. I'm sure EvilDragon knows what I mean when talking about lots of little fixes and improvements.

Nova for example had almost 6 months of beta + dozens of updates

Most work is always after release 😃


### What got you interested in audio plugin development? When did you start and what were you doing prior?

**Fabien**: I'm now 38 years old (just for ref) and did countless things in the past. But I wanted to build my own audio processors sooner or later (not just plugs, but in general).

On the pro side, I first went deep into Flash development, studied communication informatics. Flash got hyped like crazy, good coders treated like rockstars. I was a lucky mercenary. Later, I was even more lucky landing some really prestigious jobs for several ad agencies and tech companies (SAP/Microsoft).

All these nice jobs allowed me to buy a lot of free time to run my label and play around with plugin dev. Again, I was very lucky. I later started to release them. For free. Which prepared the ground for what we are/have today.



### A challenge I always run into audiodev is understanding technical concepts unrelated to audio processing; e.g. thread management and communication, or efficient GUI implementation. Do you have some advice on learning more about these types of topics as a part of, or separate from, plugin development?

**Fabien**: This part is super hard. Keep in mind this is still truly cutting edge development at the limits of a machine not really meant to do real time audio. No field I've ever come across is as demanding as audio plugin development.

My personal way out is some game dev experience I could gain in the past, and for the harder things, there's Vlad in our team. Russians have a special hand with these complexities! :)



### Do you work with an open-source audio plugin framwork (e.g. JUCE or wdl-ol)? Or do you work directly with SDKs using a homebrew setup?

**Fabien**: [Juce](https://www.juce.com), but now strongly modified for our demands. Juce is great.



### Do many plugin development shops roll their own infrastructure for authentication? What would you say are cases where integration of a third-party system (e.g. iLok) would be more beneficial?

**Fabien**: I have no insight into other businesses. But in our case, it was well worth the work. Third party integration isn't much less work, and quite expensive on the long run.



### What is the process you guys use to go from a blank slate to a full product, from bridging the visuals and the algorithm, to making sure the plugin is secure and reliable? And less generally, where would a developer go to learn about the algorithms behind equalization (and similar filters) development? 

**Fabien**: To be honest, it's hard to answer your first question. I really have no idea beside starting somewhere and not giving up too quickly. Product design is quite a challenge, but also plenty of fun and excitement. The trick is maybe more about irrationally strong self motivation than anything else. 😉 

The second is easier. But still covers several specialized fields. Usability, graphics, CPU optimization, audio and and are each filling whole universities. IMHO you primarily need a good team to handle all aspects properly.



### I want to try making my own plugins, but I don't know much CSS, and I want a visual way to see what i'm creating. Is there a program that eases plugin making and makes it visual?

**Fabien**: Have a look at [reaktor](https://www.native-instruments.com/en/products/komplete/synths/reaktor-6/) or maybe the old synthedit/flowstone. But as mentioned above, making plugins isn't exactly comparable to web-design. there are worlds of rocket science in between.



### (I am a fellow plugin developer) What do you think about resellers? Is it worth it to pursue this channel if you're not the size of say, iZotope? What is the typical revenue share for reseller you get? Do you think one can avoid to do discounts? (btw you're welcome on #dplug discord channel any time 😃 )

**Fabien**: We long avoided any resellers, and only recently decided to slowly open us to the reseller market. Clearly: You get much better cuts if using your own, self hosted store. It's also much better SEO wise, since you then become the unique point of access for your products (no seo expert can beat that).

On the other hand, many third party stores have enormous impact on the market. Being present of the shelves alone is worth the work. Free ads, sometimes purchases :)

They roughly take half of the end price (but also handle taxes, discount events and whatever on their own).

We use to forbid weird 99 prices for our products and no reseller had any problem with it so far. There's always room to discussion.

Avoiding discounts, i.e. fixed prices is IMHO the best way to generate a notion of value in 2017 if you ask me. Valhalla does this right imho.



### Fellow plugin developer here. Few questions: - What does your release process look like? Specifically, how do you go from your source repo to a finished release pushed to the public? Do you use CI? How much is automated? - What sort of tests do you do on your plugins? Do you have any testing on the audio DSP code itself?

**Fabien**: Most of the build chain is covered by [Juce](https://www.juce.com)'s "Projucer". It's an IDE of IDEs. More or less, it glues everything together.

We then use standard OS scripting to generate the installation packages.

We do not run explicit tests like unit tests and similar. Instead, our code is littered with assertions, and we separate things nicely (DSP/view/controller). If something's wrong, it typically breaks early (optimally). Most bugs we hunt relate to weird threading situations where two thread have to be synced for data transmission between them.

Modern plugin hosts are not unlike browsers in the 2000 era. Each tries to enforce it's own standards, at the cost of plugin devs trying to please them all. 😃

I forgot, we do really extensive human evaluation before release, as noted above. We have no investors stressing us, and drive in  relatively safe financial waters, deadlines don't exist in our company. That helps a lot at making software stable.



### When designing and testing your limiter, how much of the process of tweaking is you and Vlad's input, and how much is the testers?

**Fabien**: It's wildly separated. We both do algorithms, but I primarily implement the UI and param handling, while Vlad primarily implements the DSP. We're definitely on the same wavelength, but often live by different philosophies. this means really hard, but fruitful debates. Positive tension. We're happy to often find out, surprised, that the result out-climb the sum of their parts.

Our testers then take concepts apart on their own, we fix things again and the final product is then published.



### When should you oversample, and what are some downsides of it? Your post here gets referred to sometimes [https://www.gearslutz.com/board/mastering-forum/968641-some-thoughts-high-resolution-audio-processing.html](https://www.gearslutz.com/board/mastering-forum/968641-some-thoughts-high-resolution-audio-processing.html)

**Fabien**: Ok, about oversampling. Let's first make clear what we are talking about.

Oversampling is a term originating from AD/DA design. The machines have the central problem of having to use an analogue filter at some point (the first Nyquist filter for AD or final Nyquist filter for DA). A proper CD quality Nyquist filter however is asking for a super crazy steep slope having thousands of dB per octave. At 200th order filter or more. Analogue tech is not capable of this, so we have a problem.

One clever solution to it is, instead of sampling 44.1kHz and having to use a very steep analogue filter, we sample in the MHz range instead with a simple first order filter (Nyquist is now far away from the audio range), and do all steep filtering in the digital domain, which itself can nicely handle the task.

That's oversampling. Meaning "sampling more than requested", to ease the work of the analogue filter.

Now when processing, we generally mean something different...

Digital processing has incredible advantages at handling all linear processes (EQing, delay, static gain changes). It's almost perfect at it, and a rather weak point of analogue tech in general. But digital audio runs into a huge problem once nonlinear processes come into play: They have the habit of introducing whole new partials to the signal (= new tones). Technically, one can say that all nonlinear processes multiply the total bandwidth. Very often to infinity. That's great, harmonic distortion and cool sounding guitars! 

The problem is that the sampling theorem clearly defines a limit, the so called Nyquist frequency that is disallowed to pass. If you break the limit, the theorem clearly says that you can no more expect sensible results. So, as soon a nonlinearity multiplies the initial bandwidth, you are very likely to break the theorem (and your signal's integrity). Aliasing appears. Content that wasn't present before. The third harmonic of a 12kHz partial (36kHz) then suddenly lands at say, 2Hz, without any loss of energy. A sine turns into a wild sawtooth. A wrong chord appears. HF sounds metallic. The sound of digital audio 1998.

These are very serious problems that ask for very specialized solutions. for example, most nonlinearities, when fed with a sine, prominently generate third harmonic partials. All saturators do this. this already triples the bandwidth of the original material. This is the simplest case, and already reaches the limits of DIY oversampling!
[4:25 PM] **Fabien** TDR: More serious anti-aliasing can only be done at the core of the algorithms. While manual oversampling can help here and there, with weak pugs in particular, it doesn't have a very good cost vs benefit ratio, and imposes clear limitations on the audio (the SRC's Nyquist filter).

In [Kotelnikov](http://www.tokyodawn.net/tdr-kotelnikov-ge/) for example, you have a multi-stage resampling scheme, and only what the compressor "does" really runs at higher rates, not the audio itself. If anything, resampled audio is only being added to the input. In insane mode, the peak detector runs at 16x the audible bandwidth. No way to achieve this via DIY resampling.

In that sense, our plugins do not oversample. they sample "right" and give each nonlinearity the room it needs to work without creating aliasing.

There's no need to oversample our plugins. Use the quality dropdown instead. But other plugs, old ones in particular will probably benefit here and there.

Keep in mind though that more samplerate doesn't equal better quality. It's a balance, I'd say that oversampling to 88.2 or 96 is reasonable. But more really isn't. It's more important to pick right processors. 😃



### What's the most underexplored type of audio processing that devs aren't giving enough attention to in your opinion

**Fabien**: There's enormous potential in resynthesis, but we simply aren't there yet. Resynthesis is difficult, but someone could solve this in the future. Then, incredible things would become possible (think [melodyne](http://celemony.com)). [Klanghelm](https://klanghelm.com) and [Valhalla](https://valhalladsp.com) have excellent offers.

BTW while we're at it, someone asked for my fave plugins. I more or less stopped using any third party plugins at my workplace. But I have huge respect for the old Waves renaissance series, I'm a fan of anything Crane Song.



### You stopped with third-party plugins? Does that mean that you use TDR and first party (reaper?) plugins only?For most tasks I ended up building my own, even if it's just to the fun of it

**Fabien**: I don't produce music, keep this in mind.so, Eq, comp and limiters are typically everything I need.

### b-b-b-but... reverb!

**Fabien**: good question

I totally dislike late reverb tails in my mixes! What I use is a lot of early reflection trickery

I mixed large parts of this album: [https://www.youtube.com/watch?v=nRbY2mzXmjk](https://www.youtube.com/watch?v=nRbY2mzXmjk)

you should be able to hear these techniques

# Final.

**AdmiralBumbleBee**: thank you very much! We very much appreciate your time and effort! This channel will be held as a shrine to your greatness.

**Fabien**: Ah! Thanks for the opportunity



# Support Me!

This post took 3 hours to transcribe and edit. If you appreciate the information presented then <a href="/DonateNow/">please consider joining patreon or donating!</a>








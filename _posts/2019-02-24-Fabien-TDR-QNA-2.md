---
layout: post
title: Question and Answer with Fabien Schivre from Tokyo Dawn, Again!
comments: true
date:   2019-02-24_15:08:35 
categories: music
tags: ['Interviews', 'Studio Tips']
image: /assets/General/TDL.png
description: Q&A with Fabien from tokyodawn.net
series: fabien
---

{::nomarkdown}
  <img src="/assets/General/TDL2.png" alt="Q&A">
  <div class="image-caption">Discord q&a with Fabien</div>
{:/nomarkdown}

Recently on the [EDM Production discord](http://discord.gg/edmp) that I help administrate, I held a Q&A with [Fabien Schivre from Tokyo Dawn](http://www.tokyodawn.net/tokyo-dawn-labs/). We had a free for all this time!

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

**If you have any questions or comments, please comment below! I read every comment and respond to most.** No registration is necessary to comment, so don't be shy.

# Contents
{:.no_toc}
* TOC
{:toc}

# Q&A

### Can you, in your own words, tell us why someone who has perhaps never heard of Tokyo Dawn plugins a reason or reasons why they should buy Tokyo Dawn plugins? What do they offer that perhaps other plugin manufacturers don't?

**Fabien**: Well, the first and best reason is that many of our offers are delivered free of charge. This of course relates to our freeware background (Vlad and mine). At some point it simply set the basis for our whole marketing concept, severely reducing advertisement costs (compared to more traditional models).

Then, there's quality. Rather than wasting time trying to confuse our audience with ads, fancy texting, and affiliates, we spend most energy into true research and development. All this while keeping a consumer oriented pricing, not unlike the pricing of videogames.

Our product prices usually grow over time. Resale value is very high, even if you end up finding cooler stuff elsewhere (but you can be sure we're working hard that you don't come into the situation :wink: ).

### Thanks in advance, Fabien! My question is: Do you sometimes "experiment" in order to give your plugins a unique sound that coaxes the more creative sound in people, or do you focus your attention more on releasing by-the-book, professional software that does exactly what's on the tin and does it well?

**Fabien**: We try to keep the parameters we offer as meaningful and authentic as possible. That is, they should do exactly what the label above them says, in any situation.
We try to extend the operational ranges of the offered parameters as much as possible technically, but would never intentionally hide surprises. This certainty is a field where digital can show its advantages over analogue processing, which usually means that many parameter don't really purely do what they mean to do, e.g. they also saturate or affect other parameters along the way. Certainty and predictability in operation is a feature!

Creativity is the operator's job. We only try to help him achieve his vision as smoothly as possible, also guiding him around into perceptual traps or unwise technical decisions.


### 1. Would you say thats a proper tool to start out with given the person has some experience with programming in C#? If not what would be your recommendation?

**Fabien**: Yes, [JUCE](https://juce.com) is a great start! The matter can get very complicated without JUCE, that's certain! :)

### 2. When looking for new employees (software devs) how important would you say their portfolio in plugins is? Would you consider other coding experience?

**Fabien**: We don't use to work with employees, only with partners. Former experience is mandatory of course, and even then, we carefully try to keep the overall philosophy intact.

The field is simply too demanding and specialized for classic employer/employee relations.

### Please could you elaborate on what you mean by reflection trickery

**Fabien**: Sure. What I meant is subtle use of early reflections, very similar to these appearing in any natural environment. Such reflections, at the right level, improve intelligibility (our hearing is literally built for a reflective environment).

One simple example for such a reflection could be a static delay of say, 20ms, reduced by about 20dB, Left right flipped, and added to the original.

### So if i understand you correctly,  if something has a sharp attack, it wont necessarily be intelligible, it needs a bit of reflection to give it context

**Fabien**: Yes, exactly. This is particularly obvious with very minimal electronic music. I'd simply experiment with various early reflection generators and stick to what I like most. IMHO the most useful stuff happens right at the edge of audibility (very low dry/wet)

### What other things can you do to give depth to a mix, without muddying it ?

**Fabien**: One "trick" certainly is subtle saturation. I mean really subtle.

This again relates to our hearing expecting and rewarding anything that looks natural. In nature, any physcial event comes with its own specific distortion pattern. In digital audio though, it's possible to deviate from this. A bit of saturation, almost everywhere, somewhat "naturalizes" a mix.

But this has its limit of course, as it directly reduces contrast. Balancing this out is what makes really great mixes.

### what is the definition of Psychoacoustics in the simplest term? - how important is it in getting a professional result out of your mixes? - is this reverb trickery - psychoacoustics? - where can i learn / read more about psychoacoustics? - your Proximity plugin says it deals with Psychoacoustics... but i still dont understand what Proximity is doing.


**Fabien**: Psychoacoustics just means that certain perceptual mechanisms/hallucinations are being abused to achieve something. Say, if you want more bass, you can simply increase the low freqs. But you can also saturate the low frequencies in such a manner that max level doesn't change much, but sounds much stronger. Basically the difference between speaking and shouting. The absolute level, when shouting, isn't much higher than with speaking. But the sound color is much more aggressive. The effect of this color can't be fully explained in a technical manner, so we classify it as psychoacoustic, i.e. something that only works in combination with human psychology/neurology.

You can start checking out the wikipedia page: [https://en.wikipedia.org/wiki/Psychoacoustics](https://en.wikipedia.org/wiki/Psychoacoustics)

With regard to proximity, it bases on an old paper by Michael Gerzon: [http://www.aes.org/e-lib/browse.cfm?elib=6825](http://www.aes.org/e-lib/browse.cfm?elib=6825)

It uses various psychoacoustic mechanisms, all relating to distance perception. Sort of a toolkit allowing to mix not only left to right, but also front to back.

This tool is no quite old, and we haven't updated it in a while. We have to rework the whole product to our modern standards, but hvaen't found the time yet.


### Since then a lot has changed, what other plugins, yours or other, have implemented what Proximity had at the time that was so unique?

**Fabien**: Oh, I don't follow the market very much. But I've heard leapwig audio released a nice stereo tool loved by many top class mastering engineers.

It's likely loosely related to proximity. You can also find several free stereo positioning tools on the market (most mic simulators also offer similar trickery)


### They all do the same basic thing, so they must all be fairly similar in quality at a DSP level, right?

**Fabien**: Yes, the basis is schoolbook stuff. Almost trivial.

You didn't ask, but I'll answer anyway: For me, the only relevant difference between modern EQs is usability and flexibility, maybe also CPU load. The human interface is the most vital part of the EQ, allowing to achieve fast, rewarding results. It's also worth mentioning that the technical side of digital EQs can go very deep and become super confusing. The only practical difference between butterworth, chebychev and bessel is the Q (!). These seemingly complicated things are no more than different ways to specify the internal Q of any filter beyond first-order. Add a Q control and you have all under your finger-tips. Or take the elliptic vs elliptical filter. Two completely different things. The first is also a way to specify Q inside a higher order filter, while the latter is a high-pass filter operating on the stereo difference (i.e. on the "S" channel of M/S). Someone has to present all this redundance in an agreeable manner. Autogain is also an important aspect IMHO, especially when EQing whole mixes.

### Recently, I tried out the demo of plugindoctor to get some objective measurements of different eqs I have, and Nova is far and away the cleanest in terms of both the noise floor and THD. What kind of black magic do you use to get your plugins so clean?

**Fabien**: A nice balance between German and Russian engineering! :smiley: We simply refuse to compromise audio quality for additional features, seemingly wider param ranges or the CPU. We take the sampling theorem very seriously, put a lot of energy into the human interface and documentation. That's it essentially.

### What is your opinion on the usage of sliders vs. knobs in user interfaces? When i look at TDR plugins i don't see any sliders, is this a conscious design decision?

**Fabien**: I like knobs, but wouldn't hesitate using sliders when the UI asks for it. for example, I'm a great fan of Wave's old ren comp, and its somewhat modern presentation.

### Shame tdr don't believe in saturation plugins. He's said loads of times he's not interested in fake saturation. Hence why there's no real distortion unit from TDR. But he's not entertained by waveshapes / saturation." Not sure exactly how that user got that impression, but since you're here, could you clarify if any of it is accurate?

I like saturation, it's a deep and fascinating subject. It's just that clean and precise wasn't that widely established as it is today. So we took the opportunity to position ourselves in this market.

But we'll certainly move into dirtier fields now that we covered most bread and butter tools. It's very very hard to get saturation right, not only is analogue audio ridiculously badly documented (primarily the result of decades of try and error). today, digital audio devs have to first redo all the work these "old guys" didn't and truly explore and document the mechanisms leading to nice sounding distortion we can know experience in the last dozen survivors.

This is super hard.

The guys over at nebula (and related) have the great advantage to not dependent on understanding these mechanisms, they try to sample them. Sounds excellent, but even they can't tell you how and why. Give digital a bit more time to rework the lost 60 years of undocumented analogue try and error, then we'll see stunning saturators! Soundtoys already sound very nice imho, or [Klanghelm](https://klanghelm.com/contents/products/SDRR/SDRR.php), or [Fabfilter's Saturn](https://www.fabfilter.com/products/saturn-multiband-distortion-saturation-plug-in).

We also have ideas, but nothing I could present now.

**Fabien**: I'd like to know if there's any "common knowledge" in the audio world that gets thrown around, that you find particularly bothersome.

The whole dither hype and panic maybe.

But I'd say that very often, the very basics of engineering are lacking. For example, the radical difference between floating point math and fixed point math is still only known to most motivated audio ppl. As is the respect toward the overwhelmingly strong effects of perception and bias.

Here's an example for such an important perceptual effect:

https://www.youtube.com/watch?v=G-lN8vWm3m0

Thankfully, grass-roots audio education is at a very high level thanks to many forums, blogs and FB groups!

What audio school contribute, I seriously doubt (but maybe I lack experience in this area. But I'd recommend anybody, if possible to go to a true university instead)

### Regarding education, how do you think the lesser-fortuned or younger folks should go about sifting through the plethora of information online in order to avoid erroneous content? i.e. those that can't buy books or afford schooling (USA, Hooray!)

**Fabien**: Good question. Start with free books, like this one: http://www.dspguide.com/

Many universities put their lectures on youtube. Try to avoid third parties when it comes to education, directly go to the source.

Audio and music in particular are combinations of several disciplines, you won't find a place to learn them all, at once.

But you can jump into individual aspects of the tech and psychology, and draw your own conclusions for your audio work!

### Do you think that certain companies (won't name any but the word "orange" comes to mind) price their products unreasonably? Additionally, what sort of work is put into pricing products in terms of profitability and competitive-ness?

**Fabien**: Sure, several do! Not sure if I'm the right person to judge over other developer's business decisions, the market does anyway. [Klanghelm](https://klanghelm.com/contents/main.php), [Valhalla](https://valhalladsp.com), [Acon](https://acondigital.com), all good companies (even MAAT are very lovely ppl in real life! :smiley: ).

We can offer low prices by not advertising in a classic way. Instead, we release freeware, help or educate on the web. It's more fun anyway, and you stay in touch with the audience. From the financial point of view, we have extremely low customer acquisition costs. Likely the lowest on the market. Of course we think very carefully about such aspects

### Since many small dev companies specialize in specific areas of DSP, like how valhalla does with reverb, what would you consider your guys specialty at TDR?

**Fabien**: Mhhh... well, antialiasing is certainly one of our specialties (we go very far in this sector, with our products often using multirate algorithms, i.e. algorithms doing various things at their optimal sample-rates). 
We also think to build nice fuzz free UIs all built around the idea of musical flexibility (and not just the swiss army knife flexibility for the sake of flexibility). :)

### Do you feel like the concept of objectivity is misconstrued in many audio-related communities?

**Fabien**: Not sure to follow, how do you mean?

###  I see many people that relate both anecdotal and faulty experimental data as objective truth, and yeah, definitely not contained to audio but I've found it to have a higher concentration in audio communities than others

**Fabien**: Yes, now I can see. Karl Popper can be seen as the founder of the modern scientific method.

He was immensely clever and reduced the difference between science and pseudo science to one simple aspect:

A scientific hypothesis must be falsifiable. 

This doesn't mean "falsified". But the possibility to be wrong. Only esoterica and "soft sciences" (socially accepted esoterica) depend on these.

Most music engineers ignore this best practice. And debate cables, dither and other irrelevant things This is a true bottleneck. Other fields of signal processing like radar, navigation, the internet, and so much more, don't discuss such a crap.


Instead, they use scientific standards. That's what I meant. Most of what we use in our products is inspired by bread and butter tech established in non-music fields.

No black magic, just boring verifiable science.

No Belief.

### Do you think there can be some sort of value found in certain pseudoscience research?

**Fabien**: That's easy! No. :)

Except, worthy is what you learn about human perception bias!

### What is the best way to get to the source?

**Fabien**: With DSP and audio, read the books written by practitioners. Not stuff written by teachers.

e.g. want to understand fractals, read Mandelbrot. want to understand filters, read Hamming. Want to understand sound perception, start with Helmholtz. And so on, want to get relativity, read Einstein's own words. You'll find out their are the best explainer of their fields.

Beware the teacher, or worse, the journalist

### It hurts :(

**Fabien**: No offense really, I just see this legend building problem.

### Favorite album right now?

**Fabien**: Tommy Guerrero, The Heliocentrics, Sebastien Tellier, Roman GianArthur

Waiting for new Cinematic Oerchestra and new Amon Tobin.

### Where did you purchase them?

**Fabien**: I primarily buy from [Bandcamp](https://bandcamp.com).

### Legend building problem?

**Fabien**: Every instance changes the message a bit.

This tip isn't mine really, I got it from a professor telling to to avoid the typical scientific literature and learn directly from the original papers and essays instead. I am still surprised how right he was.

Hierarchy doesn't improve education, but most educational systems are.

### Doesn't that go back to the issue where some folks lack the resources to do that? Most papers/essays are paywalled in most of the world.

**Fabien**: Yes, and reading/comprehension skills.

A good tutor or if you want, a "master" is definitely worth it. I am not talking about beginning.

But once you act on your own and got the basics, it's easier to learn from the sources.

Say, you want to learn something new about perception or acoustics. You already have the basics covered. It's in this case I'd recommend jumping onto the sources, and avoid secondary literature.

### Do you think more music purchasing/streaming services should follow bandcamp's model? Is it actually financially feasible?

**Fabien**: 

Bandcamp is great. But I fear the youth already choosed a different path. Their generation will likely not buy music anymore, but consume it more like electricity or water.

I don't like that, I literally grew up in record stores. ;) But things move and change.

### do you have any sites where you find these primary sources?

**Fabien**: Yes.

[https://www.dsprelated.com](https://www.dsprelated.com), [http://www.aes.org/e-lib/](http://www.aes.org/e-lib/) and [Amazon](https://www.amazon.com)

Then there's my own "peer group", my friends and colleagues discussing ideas. I like hanging out in forums like GS or KVR, plus several FB communities, so I quickly see new developments or hypes.

Many of the things I like to look into aren't directly audio related, often completely different fields. Working through historical patents, be in a washing machine controller, a small part of a locomotive or whatever, is something I love spending my time with.

### What books do you recommend for me to pick up to learn about mixing and the sound signals overall apart from the one you just linked? Thanks (i am a begineer aswell)

There are many blogs around covering this, but I don't of many worthy books in this sector. Samplecraze, Dan Worrall and several others have great tutorials on the web.

Oh, maybe Bob Katz' mastering books? It's one of the few music production related books that I read.

Here's the type of book that I love (it's also free): [https://www.raymondscott.net/artifacts/](https://www.raymondscott.net/artifacts/)

(music production isn't my main hobby, I'm more into product design)

### In the audio world, paying testers is fairly uncommon. Most companies seem to get by with giving people a free product in return for 100s of hours of testing. Understandably it's a small industry, but does that ever concern you? Do you have any thoughts about that?

**Fabien**: Yes, our testing team also doesn't get paid. Most are really happy to help develop the concepts.  They get the products for free (of course).
We depend on their work, I greatly value their contribution

### I was more curious about the impacts of that arrangement on the rest of the industry. All things considered, it's somewhat strange to not pay people working on a product.

**Fabien**: The necessity for testing grows exponential with the complexity of the product. It would be too expensive guess.

I guess that most bigger plugin companies have a full time "chief QA officer"or similar.

But indeed, in classic industries, it's a full time job.

Doesn't mean we wouldn't pay a lot for third party services! Be it the creation of nice videos and tutorials, our documentation, tax consultancy, hosting, certificates and more.

But field testing is mostly compensated in a symbolic manner, nobody gets forced to anything ;) Testing and fixing exotic bugs is what we spend most time with.


# Support Me!

This post took 2.5 hours to transcribe and host the Q&A. If you appreciate the information presented then <a href="/DonateNow/">please consider joining patreon or paying me for my time spent bringing you quality content!</a>

<a href="https://www.patreon.com/bePatron?u=7465992"> <img class="patreon-button" src="/assets/Patreon.png" alt="Be a Patreon!"></a>

<form style="text-align: center;" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick">
<input type="hidden" name="hosted_button_id" value="BR247JAZBTUJJ">
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
</form>

Please check out [TokyoDawn](https://www.tokyodawn.net) as well! Great music and great software.

**If you have any questions or comments, please comment below! I read every comment and respond to most.** No registration is necessary to comment, so don't be shy.


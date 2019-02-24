---
layout: post
title: Interview with Rob Stenson of Goodhertz, and of Rob Stenson.
comments: true
date:   2019-01-12_09:23:10 
categories: music
tags: ['Interviews', 'Programming']
image:
description:
---

{::nomarkdown}
<img src="/assets/Goodhertz/RobStenson.jpg" alt="Rob Stenson (stolen from twitter)">
<div class="image-caption">Rob Stenson (stolen from twitter)</div>
{:/nomarkdown}

I recently had the wonderful opportunity to interview [Rob Stenson](http://robstenson.com), who you may know better from [Goodhertz](https://goodhertz.co) or maybe as [a banjoist](https://robstenson.bandcamp.com). I use Goodhertz plugins as a reference for various plugin functionality, so I was excited to have this chat.

I tried to shy away from [any information you can already find](https://tonal.goodhertz.co), such as [this interview of himself](https://tonal.goodhertz.co/interview-with-rob/)(??) or [this other interview of himself](http://my1stinstrument.com/about/).

I hope you enjoy, and I'd like to thank Rob for the opportunity and his time yet again!

<!--more-->

**If you have any questions or comments, please comment below! I read every comment and respond to most.** No registration is necessary to comment, so don't be shy.

# Contents
{:.no_toc}
* TOC
{:toc}

### Hello! Please introduce yourself.

**Rob**: Sure thing! My name's Rob Stenson, I'm a co-founder of an audio software company called Goodhertz, where I design and program audio plugins and all kinds of related things, like advertisements and videos.

### Before Goodhertz, what was your education and work history like?

**Rob**: I studied architectural history and computer science at Columbia University (where I got to combine those two interests in a project mapping medieval churches in France), then I moved to Bay Area, where I worked in advertising and then at [Twitter](https://twitter.com), before I left to start up [Goodhertz](https://goodhertz.co) with Devin Kerr.

### How did you meet Devin?

**Rob**: Devin went to college with a childhood friend of mine, Jack Stratton, a musician who leads a band called [Vulfpeck](https://vulfpeck.com) — Jack was looking for a very particular kind of audio plugin that didn't seem to exist, and he knew that Devin had experience in digital signal processing and I had experience in user interface design, so it seemed like a natural fit. So we started working together in our spare time, then ultimately went full time.

### As Goodhertz grew, I saw that you took on some interns. As a business owner, how do you decide to do such a thing and how do you handle mentoring someone while running a business?

**Rob**: Great question, and I wish I could answer it better, but I have to admit the interns have mostly worked closely with Devin, since the real bulk of the work we do is in signal processing. So both of our interns so far — Emma Azelborn and Jennifer Hsu — have been focused on DSP work, and both contributed directly to two released plugins (Wow Control in Emma's case, and [Megaverb](https://goodhertz.co/megaverb) in Jennifer's). Emma's actually now a full time employee, so she's contributed to lots more than just [Wow Control](https://goodhertz.co/wow-ctrl) at this point! I will say, mentoring is very important to us, but it is tough to strike a balance between running a business, having time to deep dive on research, and running an intern program at the same time.

### Do you feel like the internship concept is an acceptable form of 'on-boarding' a new employee, compared to traditional methods (training, probation, etc...)?

**Rob**: I think for us, because DSP has strong ties to the academic world, internships do make a lot of sense — in our case, both our interns were summer interns, on break from school. That's a great question, though; I wish I had more to say on it! My own experience entering the programming workforce was actually none of those, since I never had a true tech world internship. At Twitter — this was a number years ago — we had very little training apart from a few classes, and we were expected to be committing code very soon after we started.

### Did you enjoy that dive-in approach at Twitter?

**Rob**: I think at the time I was pretty terrified of messing something up, but, looking back, it was very cool that new employees were able to start contributing so quickly.

### I'd like to dig a bit deeper technically for a moment. I know that the team at Goodhertz has a natural focus on elegant build systems. If you can share, I'd like to know about some of the build systems you use, your testing and if you integrate any DSP-based tests in your code.

**Rob**: Great question! We do definitely have a focus on that, and I'm constantly refining (breaking) it. All of our plugins start out as "configs," which are really just files where we build up all the parameters and features of a plugin using a kind of DSL — it started out as YAML files, then became [Clojure](https://clojure.org) files, then a combination of HTML & CSS very briefly, and then [Python](https://www.python.org), which is what we've had for a while now.

Having all this data about a plugin at our fingertips is great, because our DSP code, which often begins life at [Matlab](https://www.mathworks.com/products/matlab.html) scripts but always ends up as [C++](https://en.wikipedia.org/wiki/C%2B%2B), can avoid as much boilerplate as possible. The configs are also great because our plugins are "editable" up until the last moment. If we want to add a parameter to a plugin that's almost finished, it's as easy as editing one Python file and the corresponding C++ — all the visual assets are artifacts of the build system.

As for testing, I know we have a lot of tests around our DSP, and particularly around our internal DSP library, but I can't say I know too much about them.

### Are the dsp-tests integrated into some sort of testing library integrated into your build system somehow?

**Rob**: Most of the critical tests are integrated into our DSP library, which ends up in the plugins as a built library itself, so it's a little [silo'd](https://en.wikipedia.org/wiki/Information_silo) from the actual build system, though there are a few more generic DSP tests built into the build system.

### When someone on the team has an idea for a product, how does the prototyping phase go? Do you mock up in third-party softwares like matlab/max/supercollider or just jump straight to C++ or design a GUI or ...?

**Rob**: Kind of depends on the project — for projects oriented around modeling hardware units, we'll run tests on those units and, I believe, there's extensive work done in Matlab before any kind of C++ gets written. But if we're making "digital native" plugin, or working on a modification of an existing plugin, that work will often start by jumping straight into C++. I know Devin will actually often make [a branch](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging) in [git](https://git-scm.com) and simply implement an idea by overriding parameters in existing plugins; i.e. repurposing an existing slider to do something new — I think that's kind of the lowest-cost way to test out an idea quickly. As for designing a GUI, usually that comes much later in the process, because our build system builds "pretty good" UIs right out of the box, which much or any effort from the programmer. They'll take the layout  code from a similar plugin and drop it into a new config, which gets the plugin to a very useable state for internal testing, and then I'll come in and try to understand the layout a little by talking with the DSP team, then I'll do a pass on the layout based on that. It's a very lego-like design process, all about snapping together building blocks that have been road-tested in other plugins.

**AdmiralBumbleBee**I  feel like that's a very instructive answer for anyone reading. It's also a decidedly 'lispy' way to work.

### Can you tell me about an instance of inspiration you've had for a product and walk through a high-level overview of the process from inspiration to shipping?

**Rob**: Sure! I'll go with our latest plugin, [Megaverb](https://goodhertz.co/megaverb), since it's still fresh in my memory. I think it was in May of last year, I was talking to Devin about another one of our plugins, [Lossy](https://goodhertz.co/lossy), which is an emulator of the really awful artifacts that mp3s introduced to the world — the kind of swishy, underwater sounds that low bitrate compression introduces. Early in making that plugin, a friend of ours (shoutout to Chris Conover) was playing around with a prototype and put a reverb in front of the lossy compression, which sounded absolutely incredible, just gave the Lossy algorithm so much to work with. But that was early days for us, and a reverb seemed a little ambitious, especially as a sub-feature of a plugin with a totally different feature set. But then in May I asked Devin if we could add a really gnarly reverb to Lossy, like  one of the early digital reverbs, since it mines the same aesthetic territory, which some people would call "bad" though really it's just artificial. Devin was very into the idea and started researching early digital reverbs, then ended up getting one and running some tests on it and, after a short period, we did add it to Lossy and released it. But (a) I think Lossy in general is a tough plugin to "get" for some people (it's probably a little soon to be nostalgizing mp3 artifacts), and (b) there was so much cool stuff left to explore in what became the Megaverb algorithm. So the team made a new plugin config and set about exploring, I believe in a combination of Matlab and C++, trying to really understand the different kind of sounds the old digital reverbs produced. Throughout that time I would do passes on the interface.

Megaverb in particular was difficult because reverbs have a different kind of control set than some of our other stuff, but eventually we got there, and put it to a round of public betas, which brought up a lot of cool things. It's often quite difficult to know what people will really want in a plugin, so that beta period is crucial. And then we just had to stop at some point and ship it! What do they say, you never finish a piece of art you just stop working on it?

That wasn't all that high level of an answer, my bad!

### Quick aside, what's your favorite text editor and why is it emacs? :)

**Rob**: Hah, good question! I feel like I've tried them all but have never really landed on one — I'm actually in kind of a [vim](https://www.vim.org) phase at the moment (sorry!), using it as a plugin in [VSCode](https://code.visualstudio.com), partly because I'm interested in the similarities it has as a mode of computer interaction with video editing software, like [Premiere](https://www.adobe.com/products/premiere.html). Can't knock it till you tried it!

### While working at Goodhertz, what's been the most disasterous prototype or attempt at developing a product, and how did you cope with that situation? How do you handle refocusing the team after something major happens in a negative way?

**Rob**: I think given the really subjective nature of audio plugins, not too much falls into the category of disaster for us. Usually what happens is that an idea is too broad, or we can't figure out a way to really present the idea to a customer. That's happened a couple of times, where the plugin can make very cool sounds but can also get you into trouble quickly without an easy way out. But I wouldn't say those are disasters, since the engineering time spent is both educational for everyone involved, and we can always come back to it or break it down for parts later on. I think some work we did recently on a semi-abandoned plugin actually yielded some generic code that's helped speed up all our plugins.

### Do you do much private contract work in terms of audio plugins?

**Rob**: We've done some contract work, though I don't think any of it is private. When we've done work in the past it's always been public on the end product, i.e. there will be a notice like "DSP powered by Goodhertz," that kind of thing. We're working on a contract project now that's private for the moment, but when it's complete we'll be able to talk about it publicly.

### I'd like to know how you feel about product pricing. There's companies out there on constant sale, companies with quarterly massive sales, companies that never have sales, companies that have sales only through dealers etc... Goodhertz _seems_ to fall on the side of very rare sales. What are your thoughts about pricing modulations and how that affects customer perception?

**Rob**: Yeah that's something we think about a lot. Ideally, we'd run no sales at all — that is, we feel like our products are priced very fairly compared to some of the bigger audio plugin companies out there, so if someone wants to a buy a plugin at any time of the year, there shouldn't be a barrier to entry. But we do recognize that sales are a very important part of the audio plugin market, something that buyers expect, as well as a way for people in countries with weaker currencies to purchase our plugins at prices that aren't exorbitant — that's been one of the big realizations for us; someone buying a plugin in a country that's not Canada, the United States, or Northern Europe is making a much bigger proportional investment in our software. That's part of the reason we run a semi-publicized 50%-off coupon program, where we give you a [one-off coupon](https://goodhertz.co/faq#do-you-have-any-educational-discounts-or-any-discounts-for-that-matter) if you post a track to social media along with the Goodhertz plugin settings you used in a free trial.

As for customer perception, I will say it seems like only companies with exorbitantly-priced plugins slash their prices.

**AdmiralBumbleBee**: If you haven't seen how they do preset sharing then [check it out!](https://goodhertz.co/vulf-comp/3.2.0?cat=8&cre=8&drl=-14&lf=30&lfc=100&lft=2&out=-5.5&wf=0&cm=0). Presets/programs can be expressed as web-links that display nicely on Goodhert'z own website. It's easily the best system I've seen and I hope other companies shamelessly copy this (with credit, of course).

### Do you ever feel like Goodhertz is competing directly with companies ~like waves~ uhh, that have ridiculous markup only to slash it 90% every week?

**Rob**: Tough question! I know we're direct competitors with [waves](https://www.waves.com) in some respects, as we both make headphone-mixing plugins (for one concrete example), though they do feel far away as a company and as software, since they look and feel of what they do is remarkably different. So if someone really loves how a waves plugin looks and sounds, they might have a hard time with the more functional approach we take. Of course, I think a lot of our customers have a hard time with waves plugins, which is how they end up looking deeper in the plugin landscape and finding thoughtfully-made software like ours. Indirect competitors, I guess.

### I think most of my readers are aware of some very specific things Goodhertz plugins do right in nearly every product: smooth automation, excellent bypass, clean modulation among others. I constantly use these as a reference for what other developers are doing wrong when I review. How do you, or your team, come to notice these common flaws and fix them?

**Rob**: All the credit for that goes to Devin. Before Goodhertz, he was a professional mastering engineer, which means — by necessity — he was familiar a huge part of the plugin landscape, and, as a result, was extremely well-schooled in how poorly made many of the plugins were when it came to a professional workflow. One of the first things we talked about was that we would never use knobs in our plugins (almost all parameters in our plugins start out life as sliders), given how unnatural they are for computer interaction. And smooth automation — that's a huge one for us. Anything other than smooth automation makes it so difficult to actually evaluate how the signal is being processed, since clicks and pops create discontinuities not only in the signal but also in a mixer's subjective perception of the signal. So I think everything you mentioned was something we wanted to solve before we had written a single line of code for our own plugins.

### I have one more question here, and maybe a follow up. As developers we're all constantly using software that was created freely (libre and/or gratis) by very talented people. We're starting to enter a time where people are realizing that these talented developers should be paid for their herculean efforts. What's your stance on this? Have you seen or thought of any potential solutions? Would you partake in a solution if it was presented to you?

**Rob**: Yeah, such an interesting topic — I think as audio developers we're in a little bit of a unique situation, because the biggest open source component of the work we do, a library called [JUCE](https://juce.com), is actually a library we pay to use, so it's almost a kind of hybrid, especially given that it has a corporate sponsor as well. That said, I personally would be very open to a solution if it was presented, though it seems complicated, given that so often the people behind the biggest name open source projects actually do get paid for their work via corporate sponsorships. Not to say that's everyone, or even a significant percentage of the people doing the hard work; I've had a tab open for a couple weeks now for making a PayPal donation to a developer that's instrumental in some of the Python libraries I use on a daily basis for typography work, someone who I've been told really doesn't get paid for the great work they're doing — I really need to make that donation!

### Can you let us know the name of that person and how to donate, in case anyone else is curious?

**Rob**: Absolutely, though I can't find it at the moment, my bad! Can I follow up with you on that?

**AdmiralBumbleBee**: [https://blog.ronaldoussoren.net/support/](https://blog.ronaldoussoren.net/support/)

### Thank you very much for your time! It's been great chatting with you. Is there anyone you'd like to thank that's helped you with your success thusfar?

**Rob**: Thank you for such interesting questions! So many people have helped me over the years, though none more so than my [wife, Diana Zheng](https://gwanim.com/pages/about), since she's always there to talk with me about whatever I'm learning about at the moment, whether it's audio plugins, [s-expressions](https://en.wikipedia.org/wiki/S-expression), or 15th-century printed books. And she's always inspiring me with whatever it is she's learning about or pursuing at any given moment. Also, I probably wouldn't have studied computer science or learned how to program if it wasn't for her dad's tacit disapproval of me studying art history when I first met him as a 19-year-old.

# Support Me!

This interview took 6 hours to prepare 4, 1 hour to setup, 2 hours to conduct and 2 hours to edit. If you appreciate the information presented then <a href="/DonateNow/">please consider joining patreon or paying me for my time spent bringing you quality content!</a>

<a href="https://www.patreon.com/bePatron?u=7465992"> <img class="patreon-button" src="/assets/Patreon.png" alt="Be a Patreon!"></a>

<form style="text-align: center;" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick">
<input type="hidden" name="hosted_button_id" value="BR247JAZBTUJJ">
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
</form>

**If you have any questions or comments, please comment below! I read every comment and respond to most.** No registration is necessary to comment, so don't be shy.


---
layout: ['post', 'reader']
title: "Everything I like about Ableton Live"
comments: true
date:   2019-05-18_10:21:30 
categories: music
tags: ['Ableton Live']
image: /assets/Live/Hardware.png
description: Conclusion of the Live review series
series: ableton
pdf: true
---

{::nomarkdown}
<img src="/assets/Live/Hardware.png" alt="Hardware Support">
<div class="image-caption">Hardware Support</div>
{:/nomarkdown}

The review is concluded. A few days earlier than 45 days [since I announced it]({% post_url 2019-04-06-45-Days-with-Ableton-Live-Suite %}), but nearly a week longer that I've been using it for this review in private.

Will it [end poorly](https://en.wikipedia.org/wiki/St._Elsewhere) or [end well?](https://en.wikipedia.org/wiki/The_Fugitive_(TV_series))?

Or [will you just never want to visit this website again?](https://en.wikipedia.org/wiki/Roseanne)


**Other parts in this series**: 

{% assign lives = site.posts | where: "series", "ableton" | sort: 'date' %}
<ul>
{% for my_page in lives %} 
    {% if page.url != my_page.url and my_page.layout != "reader" %}
        <li><a class="page-link" href="{{ my_page.url | prepend: site.baseurl }}">{{ my_page.title | split: '-' | last }}</a></li>
    {% endif %}
{% endfor %}
</ul>

**VALID FOR LIVE 10.1**. Future updates may render some of this information invalid.

<!--more-->



# Contents
{:.no_toc}
* TOC
{:toc}

# Standout Features

## Hardware Support

{::nomarkdown}
<img src="/assets/Live/Hardware.png" alt="Hardware Support">
<div class="image-caption">Hardware Support</div>
{:/nomarkdown}

Ableton Live's hardware support is superlative. Not only because of Ableton's inclusion of templates, [hackable API](https://julienbayle.studio/ableton-live-midi-remote-scripts/), [Max for Live]({% post_url 2019-05-15-Live-with-Max %}) and [Push](https://www.ableton.com/en/push/)... but because everyone and their mother makes products that ship with Ableton Live support.

If you want to have a hands-on experience with a DAW and have the ability to purchase hardware that has a turnkey experience: Ableton Live is _the premium option_ at nearly all budgets (barring large-scale mixing operations).

I won't be covering [Push](https://www.ableton.com/en/push/) during this 45 day review, as my push was destroyed by my own curiosity, but it is a brilliant experience for those working with electronically created music. I don't know of any other integrated creative experience that surpasses it. [Maschine](https://www.native-instruments.com/en/products/maschine/production-systems/maschine/) comes close, but ultimately falls short of the Live as a whole.

## Metronome

{::nomarkdown}
<img src="/assets/Live/Metronome.png" alt="Metronome">
<div class="image-caption">Metronome</div>
{:/nomarkdown}

I am frustrated by the fact that I can't quantify this. I can't seem to measure it. I have no clue _why_ it is.

Live's click/metronome consistently allows me to play better than other clicks. I've spent 1000's of hours playing with and practicing with click tracks, and I'm pretty alright with it, but I've been able to execute more complex rhythms with more consistency when working with Live.

I've rendered dozens of clicks from other DAWs and compared them. I've synced them live. I can find no reason why Live's click would somehow allow me to perform more consistently.

I went as far as to create a number of DAW clicks rendered at the same tempo and use Live's [sequencing capabilities]({% post_url 2019-05-01-Live-with-Live %}#sequencing) to randomly select click tracks while I played something that I have difficulty playing in time. _Every time_ my response to Live's metronome resulted in tighter timing.

I really have no clue what it is. I have no idea why it would be. It just is.

## Link

{::nomarkdown}
<img src="/assets/Live/Link.png" alt="Link">
<div class="image-caption">Link</div>
{:/nomarkdown}

I don't personally have a use for Link, but it's an interesting technology largely because of how easy it is to use. I've had a couple dozen Live users tell me how important it is to their workflow as well.

## Manual

{::nomarkdown}
<img src="/assets/Live/Manual.png" alt="Manual">
<div class="image-caption">Manual</div>
{:/nomarkdown}

Live has a well written manual.

It is missing some details, but on the whole it does a good job of explaining how to operate the software (not how the software operates though!).

While I did encounter a number of omissions, I did not find any _errors_. I much prefer missing information to erroneous information.

Of all the DAW manuals I've read, Live's it the only one I did not notice any overt errors in.

## Fact Sheets

{::nomarkdown}
<img src="/assets/Live/Facts.png" alt="Fact Sheets">
<div class="image-caption">Fact Sheets</div>
{:/nomarkdown}

Live's manual comes with [Audio Fact Sheets](https://www.ableton.com/en/manual/audio-fact-sheet/) and [MIDI fact Sheets](https://www.ableton.com/en/manual/midi-fact-sheet/) that clear up myths about Audio/MIDI in general, but also clarify the underlying mechanics of a number of operations in Live.

[FLStudio's manual](https://www.image-line.com/support/flstudio_online_manual/html/app_audio.htm) has something similar, and I applaud these efforts. Good job teams!

Audio/MIDI Fact Sheets

## Certified Training

I know this sounds silly, because it's not a service that I would use, but I extend many kudos to Ableton for their extensive efforts to create a [training system](https://www.ableton.com/en/education/certification-program/) for users.

Not everyone has the time to spend experimenting and exploring a product to fully learn it. The certified trainer program makes it easy to find human training resources for the busy (or dumb) user.

Beyond the training program's availability, Ableton offers extra benefits for trainers to help incentivize people to apply to the program.

I believe that programs like this enhance the user experience and force developers to maintain a focused and organized roadmap, lest the training program (and the product itself) become a laughing stock. Separates the wheat from the chaff.

Training programs aren't necessary, but they make everyone one both sides coordinate their knowledge and abilities. That's a good thing.

## Max for Live

{::nomarkdown}
<img src="/assets/Live/Plugins/Max/MaxForLive.png" alt="Max for Live">
<div class="image-caption">Max for Live</div>
{:/nomarkdown}

[Max for Live]({% post_url 2019-05-15-Live-with-Max %}).

# Cool features

## Track Naming

Live automatically names tracks that haven't been manually named. Sample and instrument name changes change the track name so that you're not left browsing around for "13 Audio" when you want to find a violin sampler track.

## Undo

Live 10.1 has undo that persists with project even after you close and re-open Live. Awesome.

Likewise Live has undo that affects _nearly_ every control that you can change including VST parameters.

Many other products are still catching up with this. Proper undo is an indescribable boon to creative workflow. It allows you to freely try things with little repercussion. Turn knobs until it sounds terrible, and ctrl-z/cmd-z a few steps to get to nirvana.

## Step Record

[Step Record]({% post_url 2019-04-12-Writing-music-in-Live %}#step-record) is brilliant.

## Hot Swap

Live allows you to click a little recycle-looking icon on any device then utilize the browser to temporarily replace the device (or preset) with your selection.

The replacement can be temporary or semi-permanent (undoable).

If you like using Live's browser, and like presets, then I can imagine that this feature a feature you shouldn't live without.

## Packs

Ableton [centralizes and provides](https://www.ableton.com/en/packs/) a huge number of "sounds". The ones that I've used are consistently high-quality and a decent value.

Not everyone is looking to create their own sounds from scratch (how many guitarists make their own guitars? Weirdos ;) ).

Even cooler still is that some packs get updates, and Live coordinates updates for packs natively. There is no need to run around the web finding it if there's updates, and installing them yourself. It's a two click process.

Every DAW can learn from this.

## Chasing

MIDI defines note-on and (optionally) note-off events. This arrangement means that if you play _after_ a note-on there is no way for the software to know that there should be an event triggered.

Note chasing attempts to solve this by reading behind the current play position, or storing metadata about note positions, and playing anything that 'should be playing' even if you start playback after a note-on.

Live does an excellent job of this. Many other modern DAWs still suck at this.

## Audio to MIDI

Live has [a number of ways to turn audio into MIDI data](https://www.ableton.com/en/manual/converting-audio-to-midi/), and they work pretty well.

* Slice - Slice cuts up the track and throws it in a sampler so you can shuffle around the audio
* Convert Harmony - Attempts to transcribe the harmonic structure. It does a terrible job most of the time, but it can be an interesting start to something new.
* Convert Melody - Transcribes a monophonic signal into MIDI notes. Does a dang good job.
* Convert Drums - Tries to find kick, snare and hat sounds and throw them in a drum rack. Rarely does a great job unless you feed it really simple simples, which once again makes it pretty fun for creative use.

## Save as Live Set

Ableton somewhat opened up their project format so that other software can [save your data as a Live set](https://www.ableton.com/en/live/compare-editions/#export-enabled-ios-apps).

Now third-party software can create projects that you can continue in Live without any friction.

## The community

Live has a vibrant and active community. There's a bit of [psychological anomalies at play](https://en.wikipedia.org/wiki/Stockholm_syndrome) among some of the power users, but if you have a question there's an excellent chance that you can get an answer quickly.

Live's support system does lack [someone to give you a sarcastic response](https://www.linkedin.com/in/scottwfisher?trk=org-employees_mini-profile_title) when you completely deserve it though. I miss that.


# As much as you can carry, and not a pound more

Despite what you may think about me, given the things I write about, I have a somewhat controversial opinion about how to choose the best product for you:

> The best product is the one that has **just barely** enough features

Ideally this fabled product would _also_ grow in featureset just slightly faster than you acquire the need for new features.

**That doesn't happen for 99.92% of users**

Users of software generally are divided into six groups in any point in time:

1. Happy with the software, and the complexity is only slightly above their ability and requirements
2. Happy with the software, but their needs exceed the software. However this user is acclimated to the software and performs workarounds without a second thought.
3. Neutral about the software, because their primary interest is in exploration of the product rather than _using_ the product.
4. Unhappy with the software as their needs have exceeded the product's capabilities, and this user is unhappy with workarounds.
5. Unhappy with the software as their needs significantly exceed the product's abilities, and workarounds are not available.
6. Unhappy with the software are the software's functionality, and subsequently usually its complexity, exceeds their needs and ability.

I am clearly 5 in regards to Live. I've intentionally made this clear through the review. Live is _not for me_.

However, products with "too many" features are instantly cumbersome and put a burden of decision on the user. Excellent for users that know exactly _how they want to work_, poor for people that don't want to think about how they work.

I talk to 100s of musicians every week, 1000s of different people every month. Through IRC, [Discord](https://discordapp.com) and [via email](mailto:audiolabs@gmail.com). If there's anything I've learned, it's that a heavy majority of users don't think about what they're doing when they make music, _nor do they want to_. A singular focus on the musical task is their desire.

Software like [Ableton Live](https://www.ableton.com/en/live/) or [other products](https://www.apple.com/mac/garageband/) fit the bill for these users. There's a basic set of functionality that _just barely_ covers the needs of many musicians, and doesn't burden them with "Oh, what's the hot key for this very specific function".

I hate it. I always want to know the best way to do something. When I'm working on something, I'm constantly switching between thinking about _what_ I'm doing and _how_ I'm doing it. Ironically this leads me towards looking for efficiencies, but itself is an inefficient want to focus on a creative task. However it's undeniably helpful in subsequent iterations of utilizing that functionality. The less often I realize there's a better way to do something, the more I can focus on the musical task itself.

I think that people that are happy with Live simply don't care. 10 extra clicks doesn't matter, because their focus on 'doing the task' is being achieved, albeit slowly and/or error-prone.

There's nothing wrong with that. It's not an insult. It's not a slight. It's a fact of life.

Anyone that's in the more technical camp can relate to finding out how your favorite artists works and being amazed at how relatively inefficient it is, and/or how they rely on less knowledge than you expected.

My favorite artist uses Ableton Live. He *records rock music*. He works in a way that dazzles me with it simplicity, yet simultaneously angers me by its modesty.

Throughout this review I've made the conscious effort to be _particularly critical_. I want to make sure it's clear how far Live is behind in nearly every basic aspect of the software.

There is one measure of software that's the very essence of its practicality: does it offer what the user needs, and no more complexity than that?

Ableton Live manages to succeed at this for more musicians that possibly any other software.

# HAH! What cop-out

I'm sure that there's a subsection of readers that think the previous section is some sort of apologetics to appease angry Live users, Ableton themselves or some subsection of potentially angry people.

It's not.

I drafted that statement after the first week of reviewing Live, and I've made minor changes since. If you've chatted with me about Live then you've heard me say this many times already. If you've read the [DAW Chart's FAQ](/DAW-Chart.html#why-is-ableton-live-rated-so-low) then you've read me say similar things _at least_ 2 years ago.

I toured with Live, playing well over 200 shows and I've put in significant time using the software both before I started this site, since I started the site (giving tech support to users across IRC/Discord/Forums), and since I've started this review. My opinion of Live was already largely formed by a great deal of time spent with it. Of course, I tried to remain open for this review, but let's be real... I'm not perfect.

I think Ableton has some of the most talented people in the entire industry, but I've always been left thinking that the end product is a disaster of bureaucracy and the "[Agile](https://en.wikipedia.org/wiki/Agile_software_development) done wrong" meme. Lots of smart people working, not much smart work getting done.

Ableton Live 10.1 hasn't managed to _entirely_ change my opinion, but it has convinced me that Live's dearth of capabilities is at least partially intentional.

# Conclusion

Ableton Live is still not for me. I don't think that it ever will be.

I hope that this review series has left you somewhat informed about what Live can do, and what it can't do. If you read this and spent most of the review thinking "I don't really care that it doesn't have X Y or Z" then Live is the _perfect_ software for you.

If perhaps you find yourself cringing at mentions of Live lacking some functionality, then I would strongly consider demoing the software to see if you can accept the workarounds (if any).

# Thanks

I'd like to thank [Ill-Esha](http://ill-esha.com) for introducing me to Milo at Ableton Live. The folks at Ableton were fully aware of my thoughts about Live going into this, and they still supported this review.

I admire their confidence in their product.

I'd also like to thank [the commenters at Reddit](https://www.reddit.com/r/ableton/comments/bnj5m3/thoughts_on_this_guys_critisims_of_ableton_live/) for giving me some things to think about in how I present my views in the future. They also provided a number of technical corrections that I appreciate. I suggest reading that thread to explore dissenting opinions regarding what I've presented here.

I would also like to thank [my patrons at Patreon](http://patreon.com/admiralbumblebee). The money covers _some_ of the fees for maintaining the site, and more importantly they actively provide feedback on nearly every post.

# Support Me!

This post took 16 hours to research, screenshot, write and edit. If you appreciate the information presented then <a href="/DonateNow/">please consider joining patreon or paying me for my time spent bringing you quality content!</a>







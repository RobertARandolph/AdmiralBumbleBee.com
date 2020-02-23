---
layout: post
title: Fluff and Failure
comments: true
date:   2020-02-16_09:07:05 
categories: general
tags: ['General', 'Rant']
image:
description: Just some rambling.
---

No article last week and no "real" article this week, so I thought I'd spend an hour or two writing something to discuss why.

<!--more-->

**If you have any questions or comments, please comment below! I read every comment and respond to most.** No registration is necessary to comment, so don't be shy.

# Contents
{:.no_toc}
* TOC
{:toc}

# Failure

I wrote an article about debugging a strange issue with [a microcontroller](https://www.microchip.com/wwwproducts/en/PIC18F27Q43) that baffled me all week. I also spent a couple hours a day debugging _another issue_ with a different device I built and threw some discussion about debugging that.

My conclusions on both were wrong. My _troubleshooting_ was wrong. _EVERYONE THAT HELPED ME_ was wrong. To this day I don't understand fully either issue, and neither does anyone on any forum/chat I've posted on.

To most intrepid minds the first thing I'm sure you will think is, "He's asking the wrong question" or "He doesn't understand what the _problem_ is".

I think so to. I thought so before I started writing.

## An example

Allow me to explain one of the issues, a hardware issue rather than the software issue I was writing about. We have:

* A simple transistor switch
  * Alternately an optocoupler based switch.
  * Alternately one of 5 types of relays I have here.
  * Alternately a reed switch.
  * Alternately a physical switch.
  * Alternately physically shorting the desired lines.
* A device (camera) that has a 3.3v input that it uses to actuate the shutter.

The camera's interface to the input is a TRS 2.5mm plug. Shorting the tip to the ground will actuate the shutter to take a picture.

Problem: Every single switch circuit I tested would intermittently not actuate the shutter. Worse still: sometimes the shutter would randomly actuate! **EVEN WORSE STILL** this behaviour varied between 4 different cameras!

Oh no, we're not done yet though. The transistor _and_ optocoupler circuits were showing upwards of +3v vce when saturated. I can think of a few reasons the transistor circuit could be doing that, but the opto? No clue.

No problem let's just assume that we're using a relay. A relay isn't an option for the project because I have to sync a flash, motors, and time the shutter within ~200ns or less. For the sake of simplification, a relay.

Pick a single camera. Is the camera broken? (all of them?). No. Using a stripped cable and physically touching tip line to sleeve produces the desired results _every_ time.

Try different power supplies. All show the same behaviour. Try different components. Same. Try different cables... you guessed it. Try a different room, well of cour... wait!?? What. If I go to my brother's house then it behaves differently.

Naturally I started to search for expert resources. Forums. Chats. Books. Astrologists. Witches. Maybe you're familiar with the saying "Ask n experts and you'll get n+1 answers"? Yep, that's where I ended up.

I'm _pretty_ sure we've solved it, but I don't know why what I did solved it. I'll leave the solution to the reader to puzzle out ;) In fact, I'll leave the it to the reader to figure out what the _problem was/is_. (Hint: There appear to be 3 separate issues that were interdependent.)

# It all feels like fluff

I find it easy to be critical, and I think this is part of the human experience. We're quick to believe that something is incorrect, and subsequently we're quick to believe someone that says something is incorrect. At the very least, we're quick to entertain (and often respond to) their commentary.

It's difficult to be positive. We (most of us) are suspicious of affirmations. It seems that the older we become, the less likely we are to trust someone saying that something is good and the burden of evidence necessary to overcome that distrust increases.

I distrust myself when I think something positive. I am highly skeptical of the validity of my efforts, and I'm quick to take criticism seriously. I don't immediately _agree_ with criticism, but I do accept the _potential_ for its validity. The criticism's value is proportional to the stake of the critic and my respect for the critic. I have strong opinions about things, but I spend a considerable amount of time as my own devil's advocate to justify those opinions.

I do very little without thinking about the potential issues that my solution or efforts are facing or creating. I am not omniscient; I often miss considerations, and I misprioritize considerations much more than I would like to, so don't walk away thinking that I believe that I think [I'm the thinker](https://en.wikipedia.org/wiki/Thinker_(DC_Comics)). I don't.

That is a wonderful thing at times, and it makes me fairly good at presenting certain types of ideas.

It's also a terrible thing at times, and it makes me overlook fantastic ideas when I judge the complications or problems to outweigh the general benefits. This is often at odds with the fact that I'm an unusually curious person that loves to take things apart and poke at things that "shouldn't" be poked.

That brings us to two in progress articles.

## Article 1
One article is purely positive. The premise of the article is to be positive without criticism. I am having a difficult time finishing this article because I believe that readers will distrust the content as they (and I!) know that the software in question has _plenty_ of pain points. It's complicated by other factors, which I mention in the article (if I publish it!). I've struggled heartily with this article. Each section that I write I can rebut my own positivity with ease. Each attempt to explain that away leads to writing weak, passive and content that's more critical than positive.

Readers of the site might find this to be strange, given that [one my last articles was completely positive]({% post_url 2020-01-25-best-guitar-stand %}). I started that article in November! It took me almost 4 months to talk myself down from the ledge of "Well maybe the stand could improve this... or that or that other product is better in some circumstances or...".

My [last article about Live]({% post_url 2020-02-01-20-things-I-hate-about %}) was critical and probably one of the easiest articles I've ever written.

## Article 2

The second article I've had sitting around for the last 6-7 weeks isn't meant to be positive. I'm finding a difficult time being positive about parts of the product that I like, and finding it easy to be critical of minor things to balance out any perceived positivity.

The product is niche. The target market is small. It has significant crossover with existing products and to most people will appear to be inferior to almost any existing product. It's not.

The review is further complicated by the fact that the product is purposely limited. They _removed_ features to simplify the product and to artificially create pricing tiers in their offerings. I believe that this is a valid business strategy, but it's _easy_ to attack it. It's software! Removing features takes more effort than adding them, so they _must be ripping us off_! Meh. No. I know that's hogwash, but I bet I could get [10 million subscribers](https://www.youtube.com/channel/UCXuqSBlHAE6Xw-yeJA0Tunw) by thoughtlessly ripping produ... nevermind.

There are criticisms to be made of the product, but currently I spend more than half the article defending the idea of feature removal, simplification and pricing tiers. That's not a battle that I can win, nor a hill that I want to fight on (let alone die on). What's left is content that looks like shilling or [fluff](https://en.wiktionary.org/wiki/fluff).

# Cognitive Overload

I've worked on 7 significant projects in the last 2 weeks.

* Mixing an album for a genre that I'm very unfamiliar with.
* Mixing a track [in Ableton Live]({% post_url 2020-02-01-20-things-I-hate-about %})
* Mastering 2 tracks
* [Two hardware projects](#failure)
* A javascript media project
* Two documentation efforts - professionally and an OSS project.
* Coping with the increasing loss of sensation in my right hand - a nightmare for a writer/programmer/musician.

I've also been reading about various Lisp editing methods and the history of how people have worked with Lisps. I'm largely unhappy with [paredit](https://www.emacswiki.org/emacs/ParEdit), and despite being my main interface to editing Lisp; I've never liked it. What I really want is for someone to [add frame editing to Emacs](https://www.greenfoot.org/frames/) with a reasonable keyboard interface. It's a perfect fit for LISP.

Changing mental contexts over and over has been difficult. I have no issues prioritizing and concentrating on projects, but the downtime between them increases with each context switch.

That's left me with little time to write and produce video.

# Conclusion

I'm writing this partially to sort through my own thoughts, and to present my regular readers with insight into what's going on.

If you take anything from this: it's me begging someone to add frame editing to Emacs.

# Meta

This post took 2 hours write. If you appreciate the information presented then <a href="/DonateNow/">please consider joining patreon or paying us for the time spent bringing you quality content!</a>

<a href="https://www.patreon.com/bePatron?u=7465992"> <img class="patreon-button" src="/assets/Patreon.png" alt="Be a Patreon!"></a>

<form style="text-align: center;" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick">
<input type="hidden" name="hosted_button_id" value="BR247JAZBTUJJ">
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
</form>

**If you have any questions or comments, please comment below! I read every comment and respond to most.** No registration is necessary to comment, so don't be shy.



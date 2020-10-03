---
layout: ['post', 'reader']
title: You don't use your software, and neither do your users.
comments: true
date:   2020-03-07_09:59:31 
categories: general
tags: ['Programming', 'Rant', 'General']
image: /assets/General/NoSoftware.png
description: A rant about software.
header: /assets/General/NoSoftware.png
header-caption: Nobody uses software?
---

Developing, testing, documenting and reviewing software has led me to one inescapable conclusion:

**NOBODY ACTUALLY USES THE SOFTWARE**

Ok, clickbait aside, a day doesn't go by where I realize that there's chasm between users, testers and developers. It has been particularly apparent to me lately, and it's delayed the article I expected to have ready today.

More after the break.

<!--more-->



# Contents
{:.no_toc}
* TOC
{:toc}

# Problems

Most software[^1] starts under the (often erroneous) assumption that there _is_ a problem, and the developer can solve it.

Let's ignore that and the failures of poor domain knowledge, lack of imagination, incomplete problem statements, tech-wedging (my term for using tech that you're excited about even if it's not appropriate) and all other manners of failure of conception.

There are two points of failure that eludes even the most technically brilliant minds: 

* Is the solution to this problem an effort to solve the **problem**, or to **solve** the problem. 
* Expressing what the problem and solution are.

Developers fall into the trap of becoming excited by the act of solving a problem, rather than the proposition of the problem being solved. Conflating a technical success with a practical solution is unnervingly easy to do.

The result is the tech world being deluged with all manner of clever software, monumental efforts, impressive scale, technical brilliancy and endless discussions about software where the most voted comment is, "I don't understand what it does." or "I don't understand what to do with it."

We're deluged with software that manages to weasel its way into use, but nobody can agree on how to use it, what to use it for, when to use it or what best practices are. The implications are more far reaching than comments on [hacker news](https://news.ycombinator.com/news).

# Users

With unnerving frequency I discover broken features or capabilities that are a core part of a software's package. I'm not saying "broken" in the sense of "I don't like how it works", but in the sense of "I contacted the author (or investigated the code myself) and confirmed that the feature hasn't worked for months/years."

If it were just me then I'd accept it as an anomaly, perhaps bad luck, or a penchant for trying things instead of "doing things".

_It's not just me._ I get to watch 10s of thousands of people actively discuss their use of music software. I professionally produce educational media, promotional media, document and test software (outside of admiralbumblebee). I actively monitor users of that software so I can better target my efforts. I'm also an active consumer, and participant, of open source software.

## An Example

I've been working with a piece of software that is largely free of bells and whistles that are often demanded on the market. The software aims to provide a technically superior approach for the core use of the tool. They sure do a great job of telling you that the tool is superior (and it is!), but not exactly why/how you'd use that knowledge.

Before I start using software I like to read what reviews say, what users say, what the developers say and poke around for any rumours. This software is universally praised by owners of the software, and unsurprisingly derided by non-users because of the lack of plumage. **Big names highly praise the software for its results**.

I usually start my journey by blindly fooling with the software, feeling my way around without a clear purpose so that I can take in what's most easily consumable. Immediately with this software I notice that a number of modes of operation produce identical results!?

Out comes the engineering hat, and after a few tests it's apparent that the software produces identical results despite flags for _core functionality_ being changed. The core of the software does the _exact same thing_ in about 7/24 potential configurations!! These are the same modes of operation lauded by industry giants, yet the software is fundamentally broken.

We're not done yet though, because when I checked with support, _nobody else had noticed_. _Nobody_. Not the users. Not the testers. Not the developers.

It's easy to blame 'dumb users' or a variety of other malicious attributions, but I believe the reason is benign: the broken options were the last things you saw on the interface, vaguely marketed and you only would know to look for a difference if you read deep into the documentation (or were perhaps intimately knowledgeable with the problem domain and historical attempts to solve it).

Users picked the first setting or two, it mostly worked, and they didn't think a step further.

Few knew _to_ use those functions, what they did and why they did it.

## Example 2

I can provide dozens of examples just from the last two months, but I'll relay one more example for this article.

There is a tool that transforms data from format A to format B.

The goal of the tool is to transfer data from a provider to another provider so that the data can be utilized to create a frontend (interface). This is a completely reasonable thing to do and is wholly necessary in today's software world.

Alas, when the software is ran, it produces _malformed_ format B. The output is essentially garbage. It needs to be edited manually or you must use an extra tool that can correct the malformed data.

Digging deep into the repository I discovered that the tool had been producing Format B incorrectly for **years**. WHAT? The tool is moderately popular, and cursory search results show plenty of people using the tool. How is this possible?

While perusing blog posts I noticed something curious: people were using format B as an intermediary. The users were using the aforementioned tool to produce format B, but then using a secondary tool **which corrects malformed format B** to produce format C. The second tool _was capable of fixing certain types of format B_ errors!

It appears that someone figured out this A->B->C workflow, wrote about it and it was copied by anyone that actually needed A->C. Apparently nobody was using the tool for format A->B with the intention of using format B.

Not a single person that I could find was using the tool for its intended purpose. Likely your mind might wander to, "Why did someone write A->B when A->C is what everyone needed?". I wonder that too, though you could rightfully point out that I needed format A->B :) [^2]

# Testers and testing

Testers have their task framed to:

* Locate incidental issues.
* Check for regressions.
* Verify functionality.
* Provide information necessary to repair the issues.

But what about when your users don't use the software the way you designed it, solving problems that the software wasn't made to solve, and instructing others on how to do the same... then how does testing get you out of that pickle?

**It doesn't**. Naturally I think many readers will insist that [dogfooding](https://en.wikipedia.org/wiki/Eating_your_own_dog_food) is how you address the disconnect. It's not.

The developers and testers have poisoned their well by framing their solution in a specific, often implicit, domain. If you know the software wasn't made to do X, then testers don't do X, because _you know it's not supposed to do X_. That is an incredibly difficult mindset to abandon as a developer or QA/Tester/Support. Your users _will do X_, and they'll blame you when it doesn't work, then insist that the software is a failure without considering what the software was supposed to do.

There's often friction between developers and _good_ testers as well. Testers might preempt the user-confusion and try to communicate to the developers the potential for problems. Naturally the dev team says, "It's not made to do that" or "Nobody will do that" or... some variation.

What is the solution though?

# Marketing

Ugh. Look away now! It's a dirty word! Slimy. Sleezey. Dishonest. Inauthentic. Blergh.

The best software on the market _is not the software that does it the best_. It's the software that _tells you what it does, and then does it_. [^3]

Really. Try it. Go find some well loved product. They _simply_ tell you what it is, and supplement that with information on what you what to expect. Often it's not the technically or conceptually perfect solution either, but a product with seemingly arbitrary restrictions and 'missing features'.

Likewise there are technical masterpieces that fall by the wayside because few people can grok the software. In order to use the software, you often must be capable of having had made it yourself.

If its left up to the user to answer "But what does it do?", the likelihood that they get it wrong and spread the word is high.

It's not just first-party marketing either. It's second/third party content that matters. It's what your users tell other users they can/should do. _That is what people will do_. If your software manages to solve the problems people have and _they know your software can do it_, and that's reinforced by _what other users say_, then you are on a path to success.

It doesn't matter if it's the best solution, the fastest solution, the prettiest solution or any other superlative. It matters that users know what they can be expected to achieve, and that the software does it.

## Marketing As Testing

I strongly believe that marketing is the best testing.

If you want to know what to test, tell your users what your software does _clearly and precisely_. You explicitly bind yourself to those claims by making the claims in public. Everyone on the team knows what the software can/should/will do (or provides) and becomes hypersensitive to it.

Your users also become sensitive to the core functionality. If you say they can do X and they can't do X, you'll know _fast_.

However if you say, "Our software does (general thing that includes X)" when X is actually your bread and butter, then the connection is lost. Users will probably find X, but also find Y and Z. 

You'll have users that _only_ want Y, _only_ want Z, and by coincidence want X as well.

Some of the users will abandon the software because it doesn't do Y and Z well, and some users will figure out how to make Y and Z work then use it. The developers think X is their core, and the users think a bit of x, a bit of y and a bit of z is what the product is about. The murky reputation spreads. Users wonder why Y and Z aren't being improved, developers are confused why people don't love their X-solution, and nobody is happy.

_Communication_ is the key. When the developers and users both understand what can be accomplished (or what to expect), a symbiotic relationship blossoms. Like it or not, marketing is how you connect with your users. Support, updates and (sometimes) documentation is how you nurture that connection.

Some products may require fancy promotional materials, some can get away with easy-to-acquire _and_ easy-to-read documentation, some can live off "tip of the day" or "did you know?" and some can survive on _consistent_ word of mouth. No matter how it gets done, a clear path of communication about expectations of the product must be present for the developers to operation efficiently and for users to consume the product effectively.

# Conclusion

I regularly encounter software where the core functionality is silently broken. People happily use the software for something else, or don't realize what the core function should be doing, or _do_ recognize the failure and silently move to another piece of software (because they _heard that the other software does it right_).

Developers become frustrated. Testers become frustrated. Users can't agree with each other or help each other. The entire product ecosystem devolves into a mess of implicit expectations.

Making software is difficult. Being clear about your purpose and being sensitive to your goals isn't.

Unless you have no clue what you're doing... then I guess it's pretty hard.


[^1]: This applies to nearly any product, but software is the easiest way for me to talk about it.
[^2]: I ended up writing my own converter. The effort taken was less than producing a clear example, filing an issue, replying to comments, waiting for a fix (if any) and confirming the fix. Selfish, but if nobody actually cared that it was broken then it's difficult for me to spend the extra effort.
[^3]: Some software does a lot, like programming languages or creative products. In these cases the target is to tell users what you're offering so that they can figure out what to do with it (rather than telling them what they _can_ do). The goal I'm espousing is to make a social contract about your offerings at a high level.

# Meta

This post took 6 hours to write.







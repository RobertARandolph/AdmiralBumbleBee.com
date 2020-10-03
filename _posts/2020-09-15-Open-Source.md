---
layout: ['post', 'reader']
title: Open Source
comments: true
date:   2020-09-15_19:31:23 
categories: general
tags: ['General']
image:
description: Open Source!
header: /assets/General/BeeDoor.png
header-caption: I honestly have no clue what I'm doing here, I just wanted to make a cute image.
pdf: true
---

[AdmiralBumbleBee.com is now Open Source!](https://github.com/admiralbumblebee/AdmiralBumbleBee.com)

Click through for your questions answered.

<!--more-->


# Contents
{:.no_toc}
* TOC
{:toc}

# Why?

I get e-mails from developers and technical minded people that point out site issues, errors, want to make suggestions etc...

Github provides a better platform for these types of requests than private e-mails. It also allows consumers of the site to become developers and contributors _if they wish_. If you don't want to change anything, then you're free to simply [create an issue](https://github.com/admiralbumblebee/AdmiralBumbleBee.com/issues) and walk away.

## Yeah but... Why?

The real reason is that I wanted some sort of platform for curious people to see what is happening on the site. Drafts in progress, changes in progress and a way for me to share content through some sort of sidechannel.

(**NOTE** - I removed about a dozen drafts that potentially violate NDAs or similar agreements. Some of the drafts published to the repo have more fleshed out versions on my disk that I haven't committed. _Don't expect the drafts folder to have anything meaningful yet!_ )

It just so happens that open sourcing the site achieves this and a few other things that I realized are more valuable than my original goal.

# Where

[On Github](https://github.com/admiralbumblebee/AdmiralBumbleBee.com)

# So what's the big deal?

This took almost 2 full weeks of evenings of git hackery. I had to:

* Separate out media assets from my repository - I stored media in git, as I simply served from the origin. Never changed media, so it was never a problem.
* Edit history - There were a number of commits with sensitive information, private comments, proprietary software, server addresses, etc... 
* Separate backend from frontend - I had all sorts of hacks in place. Local hooks that triggered backend software on the remote, remote scripts that updated the local repo, hooks that re-wrote refs _on the remote_ after push (ick), etc...
* Begin preparing backend software - There's no longer any "backend" to the site. There are now local scripts that you can run locally to do things statically where possible.
  * I've not released these (yet?)
* Outline plans for new features - Changing how everything works operationally means that I've needed to rethink how certain new features will come to fruition. I've had ideas for new versions of various features, but they were held back by the hacky nature of the rest of the site.
  * This also means thinking about how to distribute the site to contributors once there's back and front end co-mingled.
* Think about and select a license that I was happy with - It's not a permissive license, but it is sufficient for the purposes of the project.

## Backend

I'm still using some (even _more hacky than before_) scripts to post-process content before publish. I'll be slowly rewriting these tools and making them public.

Maybe I'll even one day finish converting the site to my (still private) clojure-based static site system...

# How do I...

Hopefully all of your questions are [answered in the README](https://github.com/admiralbumblebee/AdmiralBumbleBee.com/blob/master/README.md). (They won't be, so... ask me!)

If you have further questions then please [create an issue](https://github.com/admiralbumblebee/AdmiralBumbleBee.com/issues) or [submit a pull request with your changes](https://github.com/admiralbumblebee/AdmiralBumbleBee.com/pulls) (probably after discussing it with me or [on Discord](https://discord.gg/34cFzVn))

**NOTE** - I still manually deploy the site. I'll be investigating options for automatic deployment.

# Does this mean that you expect **US** to write your articles?

No. Even though I haven't put out anything substantive in a month, I don't expect anyone else to contribute. If you want to though... that'd be great. A style guide is something I'm thinking about to help facilitate this.

# What about videos!

I'm hoping that I can pre-publish scripts and some media assets for videos on github and get feedback.

Otherwise, videos will still be something I do on my own.

# Meta

This post took:

* 35.5 hours of screwing with git and the wonderful [BFG](https://rtyley.github.io/bfg-repo-cleaner/)
* 16 hours of re-planning future ideas (note taking, not 'real' planning)
* 120 minutes writing this post.









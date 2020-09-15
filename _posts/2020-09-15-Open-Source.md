---
layout: post
title: Open Source
comments: true
date:   2020-09-15_19:31:23 
categories: general
tags: ['General']
image:
description:
header:
header-caption:
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

# How do I...

Hopefully all of your questions are [answered in the README](https://github.com/admiralbumblebee/AdmiralBumbleBee.com/blob/master/README.md).

If you have further questions then please [create an issue](https://github.com/admiralbumblebee/AdmiralBumbleBee.com/issues) or [submit a pull request with your changes](https://github.com/admiralbumblebee/AdmiralBumbleBee.com/pulls) (probably after discussing it with me or [on Discord](https://discord.gg/34cFzVn))



# Meta

This post took:

* 35 hours of screwing with git.
* 16 hours of re-planning future ideas (note taking, not 'real' planning)
* 90 minutes writing this post.

 If you appreciate the information presented then <a href="/DonateNow/">please consider joining patreon or paying us for the time spent bringing you quality content!</a>

<a href="https://www.patreon.com/bePatron?u=7465992"> <img class="patreon-button" src="/assets/Patreon.png" alt="Be a Patreon!"></a>

<form style="text-align: center;" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick">
<input type="hidden" name="hosted_button_id" value="BR247JAZBTUJJ">
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
</form>

**If you have any questions or comments, please comment below! I read every comment and respond to most.** No registration is necessary to comment, so don't be shy.


---
layout: ['post', 'reader']
title: Giving up on Ardour
comments: true
date:   2016-09-11_10:04:22 
categories: music
tags: ['DAW', 'Ardour']
---

![Buffer underrun madness!](/assets/Ardour/Performance.png)

Sadly, there are some things about Ardour that make it not possible for me to continue the whole month with it. In fact, I've been cheating and using DP mostly lately. I just haven't had time to write about it.

So let's go through some dealbreakers _for me_ with Ardour currently. Be sure to read the conclusion at the end however!

<!--more-->

# Contents
{:.no_toc}
* TOC
{:toc}

# Performance

![Buffer underrun madness!](/assets/Ardour/x-run.png)

For me, in OS X 10.11.6, the performance of Ardour is __*extremely*__ poor.

At a 64 sample buffer size, at 44.1khz I can not record a single track in ardour without the above graphic. Those little markers indicate x-runs (or buffer underruns). Each one of those is a little gap in the audio that ends up sounding pretty awful.

On the same system, only seconds later, I can open DP and record 16 channels of audio in a project with ~40 tracks + effects at the same buffer size. No issues. That's with DP 9.1.2 which is currently performing worse than 9.02 for me! (Motu is working on this!).

You can see in the header image of this post what Ardour looks like within seconds of opening. 56 x-runs, 85-95% cpu usage. Perhaps it's just my system, but other DAWs run perfectly fine here for me.

I'm sure the Ardour team will track this down, but there seems to not be many OS X users at all. Perhaps the performance is reasonable in the context of what Ardour is, but compared to other DAWs on the same system, it's just not acceptable to me. Perhaps it would be different for you though?

# OS X Window management

![Argh!](/assets/Ardour/WindowManagement.png)

I mentioned this before, and the developers know about it. It should be fixed eventually, but I can't deal with it until then.

Using OS X, any extra window in Ardour stays on top of all applications all the time. The windows also do not respond to cmd-w or cmd-` cycling. Extremely annoying and a huge workflow killer. You can see in the image there that despite Ardour being in the background, there's Ardour windows on top of my vim instance! Gross.

There is also currently a bug where if you have a secondary monitor on the left-side of your main display, windows sometime disappear or do not show on the monitor they were saved on. This means that I'm always having to swing to the left monitor to get Ardour windows back.

# Undo

Undo in Ardour is awful. There are many operations in Ardour that can not be undone with the 'undo' command, or they aren't undone properly.

I've found it to be quite the crapshoot when hitting the undo key what will happen. I've also ended up with some instances where I undo'd, then redo'd and the project wasn't the same as before the operation.

I should ideally take the time to go through these things and report them, however the above listed issues lead me to stop using Ardour quite quickly. I still messed with the Lua quite a bit, but using it to record audio... that ended pretty fast.

## Conclusion

I think Ardour at its heart is actually quite decent software. It has the basics covered very nicely. It has some unique features that are actually very useful. The ability to interact with the development team on a whim, and get bugs fixed quickly, is unparalleled.

I think that for a very large portion of DAW users, Ardour is possibly an ideal solution. For me, with those 3 issues though, it's not usable. I simply can't deal with those things in a creative environment.

# Support me!

If you appreciate the information presented then <a href="/DonateNow/">please consider joining patreon or donating!</a>





---
layout: post
title: macOS Catalina Speech to Text
comments: true
date:   2020-03-15_10:27:49 
categories: general
tags: ['Rant']
image: /assets/General/Voice/Banner.png
description: macOS sucks lately.
header: /assets/General/Voice/Banner.png
header-caption: Voice Control
---

macOS Catalina made accessibility worse for users that utilize their voice to type. This is a multi-faceted issue, and I will walk you through my daily hell.

(if you want to know [why this matters to me]({% post_url 2019-09-06-More-Health %}) <--)

I'm still 3 music-based articles behind, so I spent portions of this weekend putting together this article while I revisit [Prolog](https://en.wikipedia.org/wiki/Prolog). Not much I can do when the software I'm reviewing is broken or suddenly has a major updating looming.

I really should write more how-tos I suppose. Anyway, on to the rant.

<!--more-->



# Contents
{:.no_toc}
* TOC
{:toc}

# Some History

The best voice to text option on macOS was Nuance Dragon for Mac. In 2018 [they canned it](https://scottbakerbooks.com/2018/10/29/dragon-for-mac-discontinued/).

Dragon for Mac _barely_ worked, but it did work. Updates to macOS, frameworks and Dragon's authorization server's spottiness quickly made the software unusable by early 2019.

Approximately 1 year later, [macOS Catalina](https://en.wikipedia.org/wiki/MacOS_Catalina) was released with the new [Voice Control](https://en.wikipedia.org/wiki/MacOS_Catalina#Voice_control) feature which promised...the exact same features of Dragon for Mac.

The connection isn't difficult to make, given that "Voice Control" is powered by the [Siri engine](https://en.wikipedia.org/wiki/Siri) which itself is powered by technology [from Nuance Communications](https://en.wikipedia.org/wiki/Nuance_Communications#Partnership_with_the_Siri_and_Apple_Inc.) (the maker of Dragon).

This doesn't sound like a sad story on the surface, but you've yet to be exposed to Apple's ineptitude.

# Dictation

{::nomarkdown}
<img src="/assets/General/Voice/Dictation.png" alt="Dictation">
<div class="image-caption">Dictation</div>
{:/nomarkdown}

Macs have had the dictation feature since OS X Jaguar. It's a server-side interpretation of speech which appears to simulate typing in some manner on the client.

Dictation works on _nearly_ every text input widget. If it accepts text, then you can utilize the dictation feature.

**BUT IT IS TERRIBLE**

I speak relatively [accent neutral](https://www.atlasobscura.com/articles/is-there-a-place-in-america-where-people-speak-without-accents). I am able to utilize Dragon with minimal effort, and friends are amazed when Siri understands every single word I say.

macOS Dictation has no clue. Around 50% of the output looks like some transliterated mess, with me speaking an alien language. Over time I've learned what it can and can't do well, but that's insufficient for daily work.

## It **WAS** better

{::nomarkdown}
<img src="/assets/General/Voice/Previous.png" alt="Dictation of old">
<div class="image-caption">Dictation of old</div>
{:/nomarkdown}

Dictation _at least_ used to have options. The option of note was the ability to activate it by voice input. Obviously you don't want random speech interfering with your computer's operation, but you _also_ don't want that pop-up microphone on your screen at all times (you'll see why this matters later).

After months (since mid 2019) of messing with the dictation feature, I did learn which words I could accurately get across. I would switch between dictation and typing to reduce the load on my hands.

That is **gone** in Catalina.

It's replaced by....

# Voice Control

{::nomarkdown}
<img src="/assets/General/Voice/VoiceControl.png" alt="Voice Control">
<div class="image-caption">Voice Control</div>
{:/nomarkdown}

One of Catalina's headline features: Voice Control.

It has the basic features that you could want from Speech-to-Text:

* Commands - A variety of commands to control your computer, edit text and the ability to add scripted commands to recognized vocalizations.
    * Mouse Control - Selection of items by number, a grid overlay to click portions of the screen.
* Dictionary - Add new words to the recognition database, so I can say "Cubase" and not get "QBase".
* Accurate - Voice Control types what I say with few errors.

Four things that change the world for people like me.

It works fantastic...

When it works.

## Raw Input

{::nomarkdown}
    <video autoplay loop muted class="gifvid">
        <source src="/assets/General/Voice/Input.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <div class="video-caption">When will it work? (Video)</div>
{:/nomarkdown}

Based on my snooping around and testing, it appears that Voice Control only supports [NSControl](https://developer.apple.com/documentation/appkit/nscontrol) based inputs.

Talking to Safari works. Talking to TextEdit.app works. Talking to Pages.app works.

What doesn't work?

* Any [Electron](https://www.electronjs.org)-based application
    * [Slack](https://slack.com)
    * [Discord](https://discordapp.com)
    * [Visual Studio Code](https://code.visualstudio.com)
    * [Skype](https://www.skype.com/en/)
    * [Atom](https://atom.io)
* [Emacs](https://www.gnu.org/software/emacs/)
* [Vim](https://www.vim.org)
* [Jetbrains](https://www.jetbrains.com) products.
* [Sublime Merge](https://www.sublimemerge.com)
* [iTerm 2](https://iterm2.com)
* [Serif Products](https://affinity.serif.com/en-us/) - [Affinity Photo](https://affinity.serif.com/en-us/photo/) and [Affinity Designer](https://affinity.serif.com/en-us/designer/)
* Basically any audio software. Some [Logic textboxes](https://www.apple.com/logic-pro/) work, some don't.

How do I know this? Because that's a list of the software I use nearly every day.

I can't use Catalina's Speech-to-Text with _any_ of these applications!

## Cmon Apple!

{::nomarkdown}
<img src="/assets/General/Voice/Cmon.png" alt="C'mon Apple, you're supposed to be better than this">
<div class="image-caption">C'mon Apple, you're supposed to be better than this</div>
{:/nomarkdown}

I use `System Preferences->Accessibility->Display->Increase Contrast` on my computer.

Look what it does to the **ALWAYS ON TOP** Voice Control icon (the black thing center right). It's a mess!

We can peer further into the depths of Apple's development by looking at the Dictation icon while using the same settings:

{::nomarkdown}
<img src="/assets/General/Voice/DictationReduced.png" alt="Dictation Overlay">
<div class="image-caption">Dictation Overlay</div>
{:/nomarkdown}

Oh.

**OH.** That looks fine.

Subtract the fact that the body of the microphone is supposed to be an input level meter. The level indicator works with neither overlay if you have "Increase Contrast" turned on.

I sometimes wonder [if anyone actually uses this stuff]({% post_url 2020-03-07-You-dont-use-software-nor-users %}).

## Bug Fixes

Catalina 10.15.2 allowed me to use Voice Control with Emacs. It was an odd exception.

Luckily 10.15.3 "fixed" that issue. Now I can't use it with _any_ text editor that I use. Glad they squashed that terrible bug.

Thanks Apple.

# Alternatives

There are no functional alternatives. The alternative products that _do_ work, rely on Dragon for mac. The rest require _extensive_ configuration (or developing your own application from a framework) to end up with a mediocre solution.

I'd love to be wrong. If you use something or find something (_and try it_) that works, **please** let me know!

# Conclusion

I'm stuck on a platform I generally like, but with limited ability to utilize my computer. I work in cycles of 15 minutes on, 5-10 minutes off. I've become adept at utilizing spelling-correction to fix frequent errors.

If I switched to Windows then I could utilize [Dragon Professional](https://www.nuance.com/dragon/business-solutions/dragon-professional-individual.html), which is a more advanced solution than has ever been available on macOS.

There is the option of writing in a VM, but that's quite a complex workaround when you consider synchronizing softwares, file systems and handling build environments.

Right now... it just sucks. The work I could get done in 8 hours 3 years ago takes me 12-16 hours now, while still being only 8 billable hours.

# Meta

This post took 9 hours to research, write and edit.







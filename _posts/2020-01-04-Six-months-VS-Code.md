---
layout: ['post', 'reader']
title: "What I learned from 6 months with VS Code"
comments: true
date:   2020-01-04_10:27:47 
categories: programming
tags: ['Programming']
image:
description: 6 months with VS Code and I learned a lot.
---

{::nomarkdown}
<img src="/assets/Editor/Breakpoint.png" alt="Chrome Debugger">
<div class="image-caption">Chrome Debugger</div>
{:/nomarkdown}

Speech to Text works in Emacs for me now that I'm on macOS Catalina, and I've switched back to using Emacs (my computing home).

I learned a lot while exclusively using VS Code for 6 months, and I'm writing this article to give an overview of the "major" things that I took away from it.

<!--more-->



# Contents
{:.no_toc}
* TOC
{:toc}

# Introduction

I switched to using VS Code full time. 50+ hours a week writing code, writing tutorials, writing documentation, writing articles, writing e-mails, chatting... I basically live in my text editor.

I have to say that the experience has been overall pleasant. I certainly would recommend it to a newbie trying to learn Clojure, because [Calva](https://calva.readthedocs.io/en/latest/) is easy to get running. I don't think that I experienced anything where I could outright say "No, this is unusable for this workflow".

I have switched back to [emacs](https://www.gnu.org/software/emacs/) however. There primary reason being that my speech to text system (Catalina's [Voice Control](https://support.apple.com/en-us/HT210539)) now works with Emacs somewhat, and there were some small things that _constantly_ bothered me.

Allow me a few moments of your time to explain what I learned about both editors in this stint. (I promise, I won't wax philosophical and I will stick to concrete examples).

# Overview

Here's a high level overview of the major topics I'll be covering.

* [File Management](#file-management) - File Management in VS Code is terrible. Emacs is amazing.
* [Window/Tab management](#window-management) - Emacs is bliss.
* [Sync] - VSCode's [settings sync extension](https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync&WT.mc_id=vscodecandothat-dotcom-team) is incredible. Emacs'... well, I setup something that kinda works?
* [Coding](#coding)
  * [Clojure](#clojure) - Calva > CIDER ... until it's not.
  * [Javascript](#javascript) - VS Code is fantastic for javascript and related language development.
  * [C/ASM](#casm) - No.
  * [Nim](#nim) - No.
* [Fonts](#fonts)
  * Ligatures - VS Code easily supports [ligatures](https://en.wikipedia.org/wiki/Orthographic_ligature), and I like ligatures. Emacs is not so friendly
* [Terminal](#terminal) - Emacs doesn't have one. (Don't even bother arguing, you know they all suck). VS Code does, and it works.
* [Git](#git) - [Gitlab](https://about.gitlab.com) is amazing.
* [Vim](#git) - VS Code Vim mode irritates me constantly.
* [Navigation](#navigation) - Ivy mode. \*DROOL\*
* [Completion](#completion) - Intellisense works, [Company](http://company-mode.github.io) fits me better. (Plus a discussion about completion).
* [Startup](#startup) - Emacs' startup time is vastly superior once it's started.
* [Scripting](#scripting) - VS Code... my goodness.


# File Management

{::nomarkdown}
<a href="/assets/Editor/FileManagement.png">
<img src="/assets/Editor/Thumbnails/FileManagement.png" alt="File Management">
</a>
<div class="image-caption">File Management (Click for larger image)</div>
{:/nomarkdown}

Let's face it, managing files is part of life. Most solutions out there have their shortcomings, and thusly the primary factor becomes convenience.

VS Code has this little browser that you can interact with the mouse. Pray that you don't need to move a file to an off-screen folder, because then you're in for minutes of "Drag and slowly scroll". There isn't an integrated search in the browser nor is there any quick keyboard commands to interact with it.

Emacs has Dired (I use [Dired+](https://www.emacswiki.org/emacs/DiredPlus)) among other options. Dired is incredible.

Dired offers full keyboard control of moving, copying, encrypting, diffing, grepping, permissions, bookmarking, search/replace, renaming, compression, printing and more. 

Some of the cooler features I use often:

* Rectangle file editing - Files are displayed in a buffer and you can make rectangle based selections to manipulate text with. Want to remove dates from a bunch of files without fiddling with regex? Takes 5 seconds or less.
* Search and Replace - Easily search for files by name, then search and replace in those files.
* Quick Symlinks - Create/modify hard/symlinks.
* Apply Lisp Function - Programmatic access directly to your files without needing to fuss with launching a repl, compiler or interpretter.
* Shell Command - Run shell command on file or files.
* Tags - Files can be tagged then marked via tags.
* Directory Comparison - Diff and Union on directories with a single key command (or menu option).
* Inline and mousover image thumbnails.
* Advanced Marking - Marking flags a file/directory for an operation. You can mark based on regex, file information (executable, directory, symbolic links, by extension), by omitted, by content, by tags and programmatically using a predicate (function that returns truthy or falsey).

There's a good bit more than you can see on the [Dired+](https://www.emacswiki.org/emacs/DiredPlus) page, or by trying emacs yourself :)

# "Window" Management

{::nomarkdown}
<video autoplay loop muted class="gifvid">
<source src="/assets/Editor/ace-window.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
<div class="video-caption">ace-window, it happens fast, so pay attention ;)</div>
{:/nomarkdown}

VS Code has no real concept of window management. You have tabs (that order by recent, by default. **GROSS**), splits and windows. Managing these is largely mouse-based and/or dependent on what your OS provides.

Emacs is different.

Emacs has 3 basic layers:

* Frame - What you'd normally call a "Window". It's the visual box you see.
* Window - A display inside the frame. You might consider this a "Split" or "Tab" or your sole view.
* Buffer - In-memory data that can be displayed in an _Emacs window_. Buffers are just data, they are not files. Buffers can be written to files, and files can be read into buffers, but they are not the files.

Frame management is provided by your window manager. There are some Emacsy tricks here, but nothing mindblowing.

Window management isn't mindblowing either really. You can save split configurations, easily move buffers between windows, have persistent windows, have popups, navigate to/from windows with a key command and...

**ace-window**

Living without ace-window is something I never want to do again. A key is pressed and all of your current windows are greyed-out with a letter or number shown in the upper left. Press that key to move to that window. The video above shows the basic workflow.

That's not all though. ace-window offers this workflow for moving windows, (window t to window n for instance), copying windows, maximizing a window and splitting a given window.

I lack the vocabulary to express how pleasant ace-window is to use. It allows me to keep a setup of 4-8 windows on-screen and jump to what I want with my eyes closed. Managing the windows is 2-3 key presses (once again, eyes closed. Same keys always do the same thing).

I missed ace-window more than anything else when using VS Code. Even after 6 months I still caught myself hitting the ace-window key (Control-X then o) to switch to a split or another tab.

# Sync

{::nomarkdown}
<img src="/assets/Editor/Sync.png" alt="Settings Sync Settings">
<div class="image-caption">Settings Sync Settings</div>
{:/nomarkdown}

This is where Emacs dies. Trying to sync Emacs configurations between multiple is a roll-your-own experience fitting of preparing your own guillotine. It's possible, and I do it with [syncthing](https://syncthing.net) (for privacy), while others do it with things like [use-package](https://github.com/jwiegley/use-package) and githubing their init.el/.emacs.

VS Code [Settings Sync](https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync) is incredible. It uses a private [gist](https://gist.github.com) to upload your settings and you can pull those settings to any other computer that can access that gist.

There are some options as shown in the screenshot above, but it's plug-and-play (not in the Windows 95 sense, thank goodness).

I use my editor on 3 computers, and Settings Sync is a godsend.

# Coding

I primarily work in 3 languages and I play around in one. So let me compare a _single_ major thing between the editors. Each one of these could be their own longform article, so I'll keep it brief.

## Clojure

CIDER vs Calva.

I _prefer_ working with a simple [inferior lisp mode](https://www.emacswiki.org/emacs/InferiorEmacsLispMode), but sometimes you hit something so sticky that you need (want is probably more accurate) debugging capabilities beyond [inline defs and execute at point](http://blog.cognitect.com/blog/2017/6/5/repl-debugging-no-stacktrace-required), prn/println and logs.

Calva, in VS Code, offers a package for jumping in with [structured editing](https://calva.readthedocs.io/en/latest/paredit.html), [linting](https://calva.readthedocs.io/en/latest/linting.html) and [getting in a REPL quick](https://calva.readthedocs.io/en/latest/connect-sequences.html).

[CIDER](https://www.google.com/search?client=safari&rls=en&q=CIDER+clojure&ie=UTF-8&oe=UTF-8) the REPL. You setup your own structured editing ([Paredit](http://danmidwood.com/content/2014/11/21/animated-paredit.html), [smartparens](https://github.com/Fuco1/smartparens), [cleverparens](https://github.com/luxbock/evil-cleverparens), [lispyville](https://github.com/noctuid/lispyville), etc..). You setup your own linting ([clj-kondo](https://github.com/borkdude/clj-kondo), [joker](https://github.com/candid82/joker), [eastwood](https://github.com/jonase/eastwood) etc...).

However CIDER offers more:

* [Test Running](https://docs.cider.mx/cider/index.html) - Calva has this too, but CIDER's is more complete.
* [Configurable Indentation](https://docs.cider.mx/cider/config/indentation.html) - You're locked in to Calva's setup, with some minor configuration.
* [Stacktrace Navigation](https://docs.cider.mx/cider/usage/navigating_stacktraces.html) - Nothing similar in Calva. It's rare that you need to dive into a stacktrace, but if you do then Calva is not the place to do it. CIDER offers a complete set of navigation, filtering and code references.
* [REPL Connection](https://docs.cider.mx/cider/usage/managing_connections.html) - CIDER's integration with nREPL is far more complete, and allows management of complex connection setups. I am not a fan of nREPL (story for another time?), but if you're going to use it then CIDER is where you want to be.
* 
* **DEBUGGING** - This is where CIDER wins me over.

I'm breaking out of the list to discuss debugging. I've been told that [Cursive](https://cursive-ide.com) offers "more powerful" debugging due to its integration with the java ecosystem, but CIDER makes me happy.

There's two specific features of the debugger that I use frequently:

* [Trace](https://docs.cider.mx/cider/debugging/tracing.html) - This is where I'd start inline printing values (with a macro that prints and returns the printed value...) to figure out where some function is goofing my data. Trace lets you see the input and output of each function call in an easily readable graph. This does become cumbersome with complex values (maps are a big offender), but it is a convenience that I don't like living without.
* [Debugger](https://docs.cider.mx/cider/debugging/debugger.html) - It's a debugger. Breakpoints (static and conditional), value inspection, value _injection_(!) and force-step to location are the features I use. Value injection is a day-saver sometimes. Your data flow is _almost right_ and you want to see if an issue would be fixed with a small change to the data without writing the code to do it... inject.

There are libraries that allow you to debug without much pain in Calva. [Spyscope](https://github.com/dgrnbrg/spyscope), [tools.logging](https://github.com/clojure/tools.logging), [tools.trace](https://github.com/clojure/tools.trace), [ritz](https://github.com/pallet/ritz) and a variety of different printers (and some things I'm sure I forgot). CIDER puts most of what you need, most of the time, at your finger tips. You can even extend your CIDER capabilities with something like [Sayid](https://github.com/clojure-emacs/sayid) or refactoring support with [clj-refactor](https://github.com/clojure-emacs/clj-refactor.el). I used spyscope quite a bit, and became more familiar with tools.logging and tools.trace.

CIDER just makes it easier in general, and you can always bring in whatever libraries/packages you want to extend your experience.


## Javascript

{::nomarkdown}
<img src="/assets/Editor/Breakpoint.png" alt="Chrome Debugger">
<div class="image-caption">Chrome Debugger</div>
{:/nomarkdown}

I write "vanilla js" primarily, with some [cljs](https://clojurescript.org) occasionally. [Chrome Debugger](https://code.visualstudio.com/blogs/2016/02/23/introducing-chrome-debugger-for-vs-code) is heaven. You can connect your VS Code instance directly to a Chrome instance and debug straight in your editor.

I know Emacs users are going to guffaw and "ackshually" in an instant. "You can do this with [Skewer mode](https://github.com/skeeto/skewer-mode) and/or [Indium](https://github.com/NicolasPetton/Indium)!". Yep.

I have Indium setup in Emacs and the experience is more hassle than opening up a file and clicking a single button like VS Code (you do need a launch config, but it's single setup and only a few letter to type). Indium is nice, and it's becoming better quickly, but VS Code is grab and go.



## C/ASM

I don't need anything fancy for C. I've been writing C since 1989 without fancy things, and I'm ok with it. 

Writing C in VS Code is alright, but setting up your compiler settings is a pain. Debugging works fine with gdb or lldb.

I'm very happy with [ccmode](https://www.gnu.org/software/emacs/manual/html_mono/ccmode.html), [flycheck](https://www.flycheck.org/en/latest/) (for linting and syntax checking), [gdb](https://www.gnu.org/software/emacs/manual/html_node/emacs/GDB-Graphical-Interface.html) and [occur mode](https://www.emacswiki.org/emacs/OccurMode) for working with errors/warnings.

Somewhat surprisingly to me, I didn't have any code on this computer that I can share in a screenshot. Then again... I don't even know what I would screenshot?

## Nim

[Nim](https://nim-lang.org) is my favorite hobby language. It's very fast, simple memory management (properly controllable GC), lisp-like macros, a mildly sane type system (no type systems are totally sane, kill me in the comments if you want) and it has a pleasant package system.

[Nim Extension](https://marketplace.visualstudio.com/items?itemName=kosz78.nim) in VS Code is basically simple syntax highlighting/completion. There's no debugging support, no refactoring support and minimal code navigation features.

[nim-mode](https://github.com/nim-lang/nim-mode) is only slightly more mature because of the nimsuggest support that integrates linting and better completion. No debugging support out of the box.

I just work with nim like it's C. Neither editor brings much to the table, and that's fine with me. Once again, no screenshots.

# Fonts

{::nomarkdown}
<img src="/assets/Editor/Ligatures.png" alt="Ligatures in Fira Code">
<div class="image-caption">Ligatures in Fira Code</div>
{:/nomarkdown}

This is a big one for me. I use [Fira Code](https://github.com/tonsky/FiraCode). I prefer ligatures and I prefer the look of Fira Mono over other fonts (mostly, I [like the look of Pragmata Pro](https://www.fsd.it/shop/fonts/pragmatapro/), but the author has never responded to my licensing questions!)

[Set up in VS Code](https://github.com/tonsky/FiraCode/wiki/VS-Code-Instructions) is straightforward.

[Emacs setup](https://github.com/tonsky/FiraCode/wiki/Emacs-instructions) is dodgy.

I've considered [Mitsuharu's Emacs](https://bitbucket.org/mituharu/emacs-mac/src/master/), however I'm perpetually afraid of a project like this to be abandoned and leaving me with a specialized config to convert to "vanilla" emacs. I suppose I'll switch to it after I write this article.


# Terminal

{::nomarkdown}
<img src="/assets/Editor/VSCodeTerminal.png" alt="VS Code Terminal.">
<div class="image-caption">VS Code Terminal.</div>
{:/nomarkdown}

Emacs does not have a proper terminal. There are some objective reasons and reasons that you can only comprehend if you actually try to use it term-mode, shell-mode, or eshell. No matter what you pick, there's little rats scurrying around in your editor just waiting to cross your feet when you least expect it.

VS Code _does_ have an [integrated terminal](https://code.visualstudio.com/docs/editor/integrated-terminal) that works exactly as you'd expect. There's no dark corners, rats or the subsequent [hantavirus](https://en.wikipedia.org/wiki/Orthohantavirus) waiting to suck 4 hours out of your day because `rvm` only worked in your normal terminal, but not your editor terminal. (I'm not bitter, I promise).


# Git

{::nomarkdown}
<a href="/assets/Editor/Gitlens.png">
<img src="/assets/Editor/Thumbnails/Gitlens.png" alt="Gitlens">
</a>
<div class="image-caption">Gitlens (Click for larger image)</div>
{:/nomarkdown}


[Magit](https://magit.vc) (Emacs) vs [Gitlab](https://gitlens.amod.io) plus native VS Code Source Control. Battle of the century.

Gitlens wins for me. At no point did I _need_ to read Gitlens documentation, and when I decided to I realized I had figured out most everything myself. I used Magit for 4 years and I don't feel that I _discovered_ a single feature. Nearly every time I wanted to do something, I had to jump to the [dense documentation](https://magit.vc/manual/magit.html) to experience the customary frustration I'd come to expect, then google for how to do what I wanted.

I can not honestly give even a simple "review" of Magit because I still have almost no clue how to use it. The User Guide does nothing to guide you. It explains what can be done in a fine grained manner and offers little information on how to utilize the functionality for a workflow.

While writing this section I attempted to revert a single line of code in a file. I was able to figure this out in Gitlens about as fast as I could think of what it might be that I needed to do. I gave up after 10 minutes with Magit. Maybe if I knew how to do this with vanilla git then Magit's workflow would make more sense, but I suck with Git (pretty sure everyone does). That's why I use software like this.

Hmm... maybe staging some code line-by-line.

* Gitlens/VS Code - Select code, right click and select `Stage Selected Ranges`. This works with multiple selected ranges (multiple cursors)
* Magit - Hmmm... nothing in the buffer. Have to switch to the Magit buffer. I don't see any options to stage the current line or region (selection). Go back to the code buffer, create a region (select). Back to Magit window. No options. Alright, to the User Guide and start searching. [Here we go](https://magit.vc/manual/magit.html#Staging-and-Unstaging). Apparently staging works differently if there's a region, but there's no indication of that until you check the manual. [You can go elsewhere to find more information](https://magit.vc/manual/magit.html#The-Selection)
  * What's a "Hunk" anyway? Alright... start searching. The word is used 18 times before it's explained, except I don't understand [the explanation](https://magit.vc/manual/magit.html#The-hunk_002dinternal-region). It doesn't appear to be your normal [diff hunk](https://www.gnu.org/software/diffutils/manual/html_node/Hunks.html). Oh, maybe sometimes it's referring to hunks in the "diff sense" and sometimes in the "Magit sense". Now what is this stuff about how selections differ... ugh.
  
I just use [Sublime Merge](https://www.sublimemerge.com) separate from Emacs. I don't want to learn about 5 different tools just to use a tool I hate (git). Magit is clearly highly-functional, but it's also a product for people that _want to use git_. No thanks.

The more I learn about git, the dumber I feel I become. The less I have to know about git, the happier I am.

# Vim

I "use Vim". [I've explained why I prefer Modal Editing before]({% post_url 2018-10-06-Editor-Musings %}#modal-editing), and that will never change.

I don't like Vim though, and the VS Code Vim extension is limited. There's 4 things that bother me enough to rage-quit VS Code.

* Spacebar - I use `space` to scroll down in normal mode, and `shift-space` to scroll up. It's a key remapping in Emacs, and it works as expected. In VS Code I've tried everything I can, but space ends up being "eaten" by all normal mode commands. A common example is typing `f space` in normal mode to move the point to next space. Works fine in Evil. VS Code scrolls the page. Another common example is `shift-v` for line selection then attempting to scroll down to select more lines. I haven't figured out how to make that work in VS Code. It scrolls, the cursor moves, but no selection happens.
* VSCode Vim is VERY SLOW sometimes - With larger files or certain commands the entire GUI slows down like you're a hippo drowning in a bog.
* VSCode configuration is json, disgusting.

# Navigation

{::nomarkdown}
<video autoplay loop muted class="gifvid">
<source src="/assets/Editor/Ivy.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
<div class="video-caption">Ivy/Counsel/Swiper</div>
{:/nomarkdown}

VS Code has `cmd-shift-p` to navigate editor commands and `cmd-p` to open files.

Emacs, for me, has [Ivy](https://github.com/abo-abo/swiper). [Helm](https://github.com/emacs-helm/helm) is another popular option, but it feels less "Emacsy" to me. I feel like I can switch between Ivy and vanilla Emacs without issue, but Helm utilizes its own unique design.

Why do I like Ivy?

* Fuzzy Completion - I can type `Control-x Control-f` to find files and type `doc tab adm tab post tab six` to grab this post. Each time the list of options available for completion is visually narrowed down. It prioritizes input in a manner that makes sense to me: full words, first letter of words, space indicates a new word, then "totally fuzzy" last.
  * I prefer to narrow down my file searches like above. I often have to jump between files all over my disk when using emacs, as I don't spend all day in a single project. Using things like `locate` or vim's [ctrlp](https://github.com/kien/ctrlp.vim) end up being slow for me because it requires a full disk search. I _almost_ know where all of my files are, so typing a couple letters is enough to jog my memory down the way. Another way to think about it: I remember "landmarks" of where things are, and Ivy allows me to navigate landmarks.
* Variety of Frontends - This works for all emacs commands (opened with `alt-x` for me), grepping (using `ag` for me), emacs variables, emacs functions, emacs symbols, in-file definitions (code OR plain text headlines/sections), emacs clipboard (yank) history, library loading, theme loading, bookmark search, find unicode characters, complete code (clojure/elisp/python/common lisp etc...), switch buffers ("Files" in most editors), controlling [Rhythmbox](https://en.wikipedia.org/wiki/Rhythmbox) and in-file text search.
  * I have fuzzy find turned off for in-file text search.
* Fast - Ivy is fast. Even with tens of thousands of things to narrow down, it's instant while typing on my 2011 macbook pro.
* I found 6 new things that Ivy can do while writing this section. COOL.

Ivy (and Counsel/Swiper) works how I think. That works for me. I feel like I'm home when I use Ivy.

# Completion

{::nomarkdown}
<img src="/assets/Editor/Company.png" alt="Company">
<div class="image-caption">Company</div>
{:/nomarkdown}

I like completion (and suggestion). It's not because I want to "save time" typing, it's because I want to type more accurately. I often don't recall a precise name for a variable or function, but I remember the general idea, and completion allows me to type part of it or something-like-it and complete it correctly. This is an issue in C, Javascript and Java more than other languages I use.

[VS Code Intellisense](https://code.visualstudio.com/docs/editor/intellisense) works fantastic. It consistently puts the most likely candidate first.

[Company mode](https://company-mode.github.io) relies on what's called a "backend" to provide completion cues. The accuracy of the suggestions depends on the backend. For instance [CIDER works fantastic with company](https://docs.cider.mx/cider/usage/code_completion.html), but my [best attempt (using irony) for C](https://github.com/Sarcasm/company-irony) yielded sub-par results.

Company mode works nicer for me for a two reasons though:

* Configuration - I have `control-f` setup to complete the top suggestion, `tab` setup to scroll between choices, `alt-number` to select choices in the list and the delay set to 0. This is identical to my [zsh setup](http://zsh.sourceforge.net) and I feel more comfortable with these shortcuts.
* [ISpell](https://www.gnu.org/software/emacs/manual/html_node/emacs/Spelling.html) - I use Flyspell to check spelling, and company to type long words or words that I mis-spell frequently ("necessarily" is my worst offender, and "achieve" comes close.)

# Startup

Emacs has a reputation of having a looooonnnnnnngggggggggg startup time if you have even a moderately sized configuration. That reputation is well-deserved. Emacs takes almost 15 seconds to start up on my _very fast_ computer.

VS Code starts up _fairly_ quick. About 5 seconds on my computer with my setup.

There's more to the startup story though: [emacsclient](https://www.emacswiki.org/emacs/EmacsClient). I only start emacs one time when my computer boots.

From that point forward, my GUI Emacs connects to the headless Emacs instance and it starts instantly. I can close the GUI at will, knowing that I can jump right back in where I started without delay.

I use [Desktop Save Mode](https://www.gnu.org/software/emacs/manual/html_node/elisp/Desktop-Save-Mode.html) to ensure that the editor state stays the same even if my headless instance is shut down.

# Scripting

So you want to [write a VS Code Extension](https://code.visualstudio.com/api). If you're not bald now, you will be soon enough.

Writing a package in emacs is **SIGNIFICANTLY** easier. Write function. Put function in File. Require file. Use Function. (There's more to it of course... but it's effectively that simple.)

Not once during my time using VS Code did I feel like extending the editor was worth the time it might save me. Comparatively, I write elisp to extend Emacs every week or so. The price of entry is much lower to extend Emacs (assuming language knowledge equality).

# Conclusion

I didn't want to write a giant article about the topic, but instead a higher level overview of the major things that affected my _daily_ use of VS Code compared to my decades of using Emacs.

Ideally, I would be using [Cursive](https://cursive-ide.com) for Clojure, [VS Code](https://code.visualstudio.com) for javascript, [Clion](https://www.jetbrains.com/clion/) for C, etc... I can't handle trying to juggle a variety of editor configurations and trying to remember thousands of key commands.

Now that I can use speech-to-text in Emacs, I'm back to my editor home. I learned a good bit about editing workflows while using VS Code, and saw some neat features. I'm considering giving [Atom](https://atom.io) a try for a few weeks because of [Chlorine](https://atom.io/packages/chlorine) (clojure mode), but last time I tried Atom the Vim extension was not up to snuff.

Committing to experiencing uncomfortable workflows is a great way to learn about the things that you'd never think to look for, and I will continue to do that in all phases of life :)

# Meta

This post took 12 hours to write and edit. 6 months of research too :)







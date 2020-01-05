---
layout: post
title: 'Text Editor Musings'
comments: true
date:   2018-10-06_13:00:51
categories: general
tags: ['General', 'Programming', 'Open Source', 'Testing']
image: /assets/Editor/CodeDebug.png
description: My thoughts about Text Editors.
---

{::nomarkdown}
<img src="/assets/Editor/CodeDebug.png" alt="Debugging">
<div class="image-caption">Debugging (VS Code)</div>
{:/nomarkdown}

This week's post is not a post about music, but instead it's a post about tools that I use to write this music centric website and tools I use to create music software.

I'm talking about a text editor. So in this post I will be discussing my thoughts about text editors, what features I enjoy, what features I do not need and my thoughts about various products on the market currently.

[This week's video post is here, it is unrelated to this topic]({% post_url 2018-10-06-Mastering-QNA-Justin %}).


<!--more-->

**If you have any questions or comments, please comment below! I read every comment and respond to most.** No registration is necessary to comment, so don't be shy.

# Contents
{:.no_toc}
* TOC
{:toc}

# Introduction

So what is this all about? I have to use a text editor to edit text, and from when I program. Recently I have become one of the many sufferers of [RSI](https://en.wikipedia.org/wiki/Repetitive_strain_injury) like many other computer users, especially programmers. My solution has been to begin using [Dragon for Mac](https://www.nuance.com/dragon/dragon-for-mac/software.html), which is a dictation software. I now do all of my programming(!!) and all of my writing using my voice instead of typing on a keyboard. I also have begun using Dragon to input commands into DAW's, and has been working fantastic so far. I can nearly run a full session by just using my voice ( but that does have some issues, which I think are pretty obvious).

I have used [Emacs](https://www.gnu.org/software/emacs/) for a long time, over two decades now. My problem with Emacs is that it does not properly accept text input from Dragon. Often I will get a bunch of garbled nonsense when I'm speaking into Emacs. I have done a significant amount of research trying to figure out how to fix this problem, but I have not come up with a solution yet.

Thusly I have had to change my editor to something else so that I can continue to do what I enjoy doing: programming, music and writing.

## Dragon

Dragon is absolutely brilliant. I was able to use it out of the box without any training and it had an extremely high accuracy rate. I did some of the training exercises and improved even further.

I was able to input text for my writing and automatically train Dragon to use various words that are not normal English words (like Cubase, Mixbus or Bitwig etc...).

Dragon also allows you to create custom commands that can do the following: trigger AppleScript, use Automator, send keystrokes, select menu items or run shell scripts. Using this functionality I have been able to set up a number of vocalizations that allow me to do things with software that are well beyond speaking text input. These custom actions can be global (apply to any software), or you can set up actions that are specific to different software.

Some examples:

* "dubclee" - Sometimes when you speak something and then edit it with your mouse or keyboard, then Dragon makes a mistake and adds an extra space where it is unnecessary. I have a command called, "dubclee",  where I speak that word and it will automatically search backwards for two spaces delete them and then move back to the end of the line where I was typing.
* "ahcom" - This will trigger the auto complete in a number of softwares.
	* "acone", "actoo", "acree", "acour" - These refer to one, two, three and four. They will trigger control-n that number of times, which in macOS will move the current selection downwards. This will allow me to select auto complete suggestions quickly
	*  I use auto complete for completing names of symbols when I am programming.
* "slurp", "barf", "pkill", "plice" etc... -  I am used to using something called [paredit](http://danmidwood.com/content/2014/11/21/animated-paredit.html). This allows me to move symbols and statements around inside of semantic blocks. I do a lot of programming in lisp ([common lisp](https://common-lisp.net) and [Clojure](https://clojure.org)) and I try to have similar things set up for other programming languages that allow me to move things around inside of semantic blocks.
* "vidj" - this enters "vdj" then presses tab to trigger a snippet that I have for inserting an MP4 that loops and looks like an animated gif. It inserts the code below and I can use the words "tab" and "stab" to move between specific parts in the snippet that I have declared to be editable ("directory", "filename" and "description" in this case).

```html
{::nomarkdown}
    <video autoplay loop muted class="gifvid">
        <source src="/assets/directory/filename.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <div class="video-caption">description</div>
{:/nomarkdown}
```

 I have a number of other vocalizations I use when programming as well, and I have some for writing these articles as you can see. I feel that in only a matter of two weeks or so I am more effective use my voice and typing.

 **HOWEVER** I do not value Dragon for keeping my hands off the keyboard (and mouse), I valuate most for allowing my brain to utilize my keyboard and mouse for other things. I no longer have to mentally context switch for using my hands to type words, then type symbols that are non-English words, or use my keyboard in an unnatural way for text or project navigation. my hands on the keyboard and mouse are always ready and in the back of my head I now only think of using my keyboard and mouse specifically for "large jump" navigation purposes. Anything that involves moving far away from my current position in the file is something that I use my hands for, and anything that is local I simply say it.

 This concept of local and nonlocal may be difficult to understand until you have tried it. My mouth is just used for anything that I want to be input at the place I'm currently looking, in my hands are used for changing what that place specifically is.

### This Post

**This entire post was written using Dragon along with every editor mentioned.**

## Modal Editing

I'm not a Vim user, but I think that modal editing is the superior way to edit text (and program). What is model editing?

Modal editing is when you have two or more layers that allow your keyboard to do different things, let me give you a very simple example:

* "Insert" - you may have your text editor set to a mode called "insert", and everything that you type appears on the screen just like you would expect.
* "Normal" -  now there is another mode called normal that you can switch to, where when you use your keyboard it no longer inputs text, but instead each letter corresponds to an action that makes your cursor move or does something inside the editor. You can almost think of this is having a mode it is basically a "shortcuts mode".

Having these two modes allows you to not rely on using modifier keys as much, or move your hand to use the arrow keys, home, end, page up, page down, etc... Rather than needing to think about hitting modifier keys the only thing that your brain needs to keep track of is whether you are in a mode that enters text, or if you are in a mode that is controlling your text editor.

You may also now realize that this opens up the editor having more complex shortcuts, here are a couple examples in "Normal mode":

* "ciw" - since all input is treated as some sort of shortcut, the editor can now respond to words as if they were short because themselves. This shortcut stands for "chang in word", and it does exactly what it says. It will delete the current word and immediately put you into "insert mode" so that you can change the current word. It doesn't matter where your cursor is placed, you do not need to have the cursor at the end of the word to delete it.
	* ci" - just like "ciw", this will change everything inside of the next quotes that appear. In Vim there are a lot of these types of objects, where you can delete or change the content of that "object" with a quick series of letters.
* "b", "w", "e" - these commands would move you backwards to the beginning of the previous word, forward to the beginning of the next word, or forward to the end of the next word. It can be a very quick way to navigate nearby words.
* "yy" - this will copy the current line to the clipboard, no matter where your cursor is placed on that line.
* "t", "f" -  if you press "t" followed by a letter, it would move the cursor up to that letter. "f" will move the cursor on top of the letter that you pressed after "f".

Those are extremely simple examples, but you may be able to see how quickly you can move around text without needing to lift up your hand and grab the mouse. There are thousands of shortcuts, and you may only need a couple dozen of them to fly around your document with ease.

Emacs does not use this type of editing by default, but I use a package called [evil-mode](https://github.com/emacs-evil/evil) to allow me to have modal editing that is highly compatible with Vim. There is another package for Emacs called [god mode](https://github.com/chrisdone/god-mode) that gives you Emacs shortcuts with modal editing, so you do not need to relearn your Emacs shortcuts, but instead you do not need to press the modifier keys when you are in "god mode".

When I first switched to modal editing I originally tried to use [god mode](https://github.com/chrisdone/god-mode) in Emacs, and it was fantastic. I did not need to relearn any shortcuts, but my life was made much easier since I did not need to constantly press the control key to do things (my control key is what most keyboards label as "caps lock"). I quickly realized that if I wanted to use other programs with this style of editing I would not be able to use my reflexive god mode shortcuts. I saw that Vim key bindings were nearly universally available for most software, so I switched to using Vim-style shortcuts so that my brain did not constantly have to switch between different types of text navigation.

No matter what editor I use, I expected to have modal editing in the Vim style.


# What you want is an IDE...

I know you're going to read this article and if you are programmer you are going to probably tell me that I want an IDE because there are so many features that I expect to have for my editor.

I do not want an IDE. They are almost always targeted to a specific language, and if you wish to integrate them with other languages it is a complete pain. I wish to have one program that allows me to do my work regardless of which language I need to operate in.

I work with a number of programming languages (ordered by how frequently I use them): [Clojure](https://clojure.org), [Java](https://en.wikipedia.org/wiki/Java_(programming_language)), [C89](https://en.wikipedia.org/wiki/ANSI_C#C89), [Javascript](https://en.wikipedia.org/wiki/JavaScript), [Nim](https://nim-lang.org), [D](https://dlang.org), [Common Lisp](https://common-lisp.net), [Python](https://www.python.org), [Lua](https://www.lua.org) and sometimes more for fun.

I have yet to see an IDE that allows me to do what I want to do without needing to switch to another IDE.

I just want to text editor that lets me do relatively simple things, and I will take care of the rest myself.

# What I'm considering

* [TextMate](https://macromates.com) - [Info Here](#textmate)
* [Sublime Text](https://www.sublimetext.com) - [Info Here](#sublime-text)
* [VS Code](https://code.visualstudio.com) - [Info Here](https://code.visualstudio.com)
* [Atom](https://atom.io) - [Info Here](#atom)
* [BBEdit](https://www.barebones.com/products/bbedit/) - [Info Here](#bbedit)

# What I'm not considering

* [Vim](https://www.Vim.org) - [Info here](#Vim)
* [Emacs](https://www.gnu.org/software/emacs/) - [Info Here](#emacs) (tldr; I love emacs, but Dragon hates it.)
* [Spacemacs](http://spacemacs.org) - I already have my own preferences, I don't want somebody else imposing theirs upon me. Spacemacs is a highly opinionated setup that clashes with my preferences. I tried it, and by time I got it working how I want it'd not be spacemacs anymore.

# Features that I like

I have tried to organize these features in order of their importance to me, but some of these features are only useful in certain contexts.

For example I only care about [refactoring](#refactoring) when using a language like C or Java, but when I am using those languages it is incredibly important. The rest of the time that I'm using the editor it doesn't matter to me at all.

## Syntax Highlighting

```javascript
toggle_cycle_button = function (txt, disabled, index) {

	button = document.getElementById("timer" + index);
	cyc_input = document.getElementById("cycle_input" + index);

	if (disabled == true) {
		button.disabled = true;
		cyc_input.disabled = false;
		cyc_input.style.backgroundColor = "white";
		button.classList.remove("cycle_button_active");
	} else {
		button.disabled = false;
		cyc_input.disabled = true;
		cyc_input.style.backgroundColor = "lightgrey";
		button.classList.add("cycle_button_active");
	}
	button.innerHTML = txt;
};
```

That looks nice doesn't it?

I want my editor to have proper syntax highlighting no matter what language I pop in. Most editors do this fine.

## Sane Regex support

```
 \(19\|20\)[0-9]\{2\}
```

Do you see that right there? That is exactly what I'm talking about that I do not want! All those nasty backslashes littering my beautiful world-hunger solving regex. Gross.

I just want sane regular expression support, and that means **NOT EMACS** (re-builder sucks, don't even bother suggesting it!). It also means **NOT VIM** (I don't care how no very extra super magic you make it, it still never works how I expect). I prefer [PCRE](https://www.pcre.org), but I can live with javascript regex if I'm forced to.

Even better... Let me easily run a shell command against my file _or_ selected text. Then I can use whatever regex engine I want.

## Snippets

{::nomarkdown}
<video autoplay loop muted class="gifvid">
    <source src="/assets/Editor/Snippet.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>
<div class="video-caption">Snippet in action</div>
{:/nomarkdown}

A snippet is a way to use a small piece of text to trigger a large insertion of text. Snippets usually will have what are called "tabstops" that allow you to jump to specific parts of the snippet to enter information.

Snippets also can be used with predefined variables so that you can encapsulate something that is currently selected, or perhaps use the current filename or maybe the date.

I cannot live without snippets, they greatly reduce the amount of typing (or speaking) that needs to be done.

I think that every major editor support snippets.

## Multiline Find and Replace

{::nomarkdown}
	<video autoplay loop muted class="gifvid">
		<source src="/assets/Editor/MultiLine.mp4" type="video/mp4">
		Your browser does not support the video tag.
	</video>
	<div class="video-caption">Multiline Find and Replace (TextMate)</div>
{:/nomarkdown}

This may seem strange to some of you but multiline find and replace is a huge feature to me! I often need to find bits of text across multiple files and change them, like you can see in my website here. (This is not possible to add to the footer!)

It is surprising how many editors do not have this capability, and it drives me crazy!

Multiline find and replace is fairly rarely needed when programming, but when managing a website is invaluable.

## Jump to

{::nomarkdown}
<video autoplay loop muted class="gifvid">
	<source src="/assets/Editor/Jump.mp4" type="video/mp4">
	Your browser does not support the video tag.
</video>
<div class="video-caption">Jump to... thing (Sublime Text)</div>
{:/nomarkdown}

I often need to browse source code that I am not familiar with,which means that I need a way to quickly find out what a specific function, variable, class etc... is.

You would think that this would ork well in most editors, but it does not! Ihave surprisingly found that most editors do not do jumped to definition, declaration or symbol particularly well.the only editor that I have found that does this consistently well is [VS Code](https://code.visualstudio.com).

Trying to setup [ctags](https://ctags.io) to make this feature work in Vim or Emacs is ridiculously difficult. Some packages/modes set this up for you, but if you switch languages often then you will be hard pressed to find a unified experience.

I have this "working" in Emacs using a complex [ctags](https://ctags.io) setup that I'm constantly tinkering with.

I want a better experience!

### Peek

{::nomarkdown}
<video autoplay loop muted class="gifvid">
	<source src="/assets/Editor/Peek.mp4" type="video/mp4">
	Your browser does not support the video tag.
</video>
<div class="video-caption">Peek (VS Code)</div>
{:/nomarkdown}

This is like jump to definition/declaration except _WAY_ better. You jump to your "thing" but it shows up in a small window directly in your editor without changing your current context.

You can edit the file in this small window, and you can select which of the files that you want to edit where the match shows up.

I used [VS Code](https://code.visualstudio.com) for a little while when I first started using Dragon, and I have become addicted to this feature. it is amazing how nice it is to not have to context switch in order to check on the definition/declaration of something or to make a quick edit.

Even more importantly, this works with nearly every language I have tried it on without error!

## Documentation

{::nomarkdown}
  <img src="/assets/Editor/Manual.png" alt="Manual (BBEdit)">
  <div class="image-caption">Manual (BBEdit)</div>
{:/nomarkdown}

I like good documentation. I love reading manuals.

What I don't like is when I'm not sure what I'm looking for and I have to crawl through documentation that uses terms that I'm unfamiliar with. I want to be able to read all of the documentation in one go, or at least a sizable chunk of it, so that I am generally familiar with the software.

Being able to browse the documentation allows me to find information that I need more easily in the future.

Vim/Emacs are particularly terrible about this. When you need to find some information you are off to Google to figure out what it is that you need to know about, and then to find that information. I have been using Emacs for nearly 2 decades and I still have trouble finding documentation for things that I need sometimes. It's difficult to even figure out what the term I need to search for is at times!
 
## Interactive Documents

{::nomarkdown}
  <video autoplay loop muted class="gifvid">
    <source src="/assets/Editor/Interactive.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <div class="video-caption">Interactive Documents (BBEdit)</div>
{:/nomarkdown}

In Emacs there is a concept of a `*scratch*` buffer where you can run ELisp code directly as it's written. [Org Mode](https://orgmode.org) similarly allows you to [put code directly into documents](https://orgmode.org/worg/org-contrib/babel/), and mix programming languages in the same document.

[BBEdit has a feature called "worksheets"](https://www.barebones.com/products/bbedit/benefitsintegrate.html#worksheet) that allows you to put UNIX commands into a document and then run them directly. From there you can utilize "Text Transformations" (BBEdit term) and other features to mess with the output of the command.

You can cheat this with other editors by making a plug-in/extension/package that runs the current selection as a shell command (or inserts to a file and runs a script) and puts the output into your document.

I utilize this feature in emacs frequently, and I would be somewhat unhappy if I had to live without it. I'll already miss that I can't just flip to a document and type some lisp to solve my problem.

## Integrated Terminal

{::nomarkdown}
  <img src="/assets/Editor/Shell.png" alt="Integrated Terminal/Shell (Emacs)">
  <div class="image-caption">Integrated Terminal/Shell (Emacs)</div>
{:/nomarkdown}

This is a really big one for me, I use the term a lot when I operate my computer. I do not like having to switch windows to see my terminal application.

That context switch frequently makes me forget what I was doing and I rather have my terminal as a [window split](#window-splits) (ironic right?).

## File Browsing

{::nomarkdown}
	<video autoplay loop muted class="gifvid">
		<source src="/assets/Editor/Browse.mp4" type="video/mp4">
		Your browser does not support the video tag.
	</video>
	<div class="video-caption">File Browse (Emacs)</div>
{:/nomarkdown}

There are two camps in the file finding world: people that want only find files based on their current directory, and people that want to find files anywhere on their computer.

I have noticed that many programmers think that file finding is relevant only to their current project, and they are subsequently happy with a solution that allows them to search based on a root directory. I rarely use anything like this! Vim users are particularly notorious for this, as can be seen by the proliferation of [ctrlp](https://github.com/ctrlpVim/ctrlp.Vim) and [command-t](https://github.com/wincent/command-t). (Yes, I know "netrw" and "[NERDtree](https://github.com/scrooloose/nerdtree" exist, but they are archaic!)

I almost always need to browse for a file by manually browsing my local disk, or a network. Often this means that I will want to slowly narrowed down the location of the file as I look through the file system. Typing "filename.ext" doesn't do anything for me.

I prefer to have a fuzzy directory browsing experience. Take this for example:

I have a file named "core.clj". It is located in "/Users/Robert/Documents/Programming/clj-audiofile/src/clj_audiofile/". I don't recall exactly where it is, and I don't want a program searching my entire file system for it. So what do I do? Watch the image above.

I type: doc`[tab]`pro`[tab]`cl`[control-p]`src`[tab]``[ctrl-n]``[ctrl-n]``[enter]``[enter]`

This is using [counsel/ivy](https://github.com/abo-abo/swiper). I did this starting out with no idea what I was looking for, when you know what you're looking for it can be significantly faster.

I can use this workflow for more than just files. It works with editor commands, language commands, snippets, clipboard, file bookmarks etc...

I like browsing, not "finding" most of the time.

### File Finding

{::nomarkdown}
<video autoplay loop muted class="gifvid">
	<source src="/assets/Editor/Find.mp4" type="video/mp4">
	Your browser does not support the video tag.
</video>
<div class="video-caption">File Find (Textmate)</div>
{:/nomarkdown}

I just said that I preferred "file browsing" over "file finding", yet I can't deny that quickly jumping to a file in a project is exceptionally useful.

I wanted to find the file "2017-10-24-Harrison-Mixbus-Conclusion.md", and I typed "mixbucon" then `control-n` (down in macOS). File found.

I could have typed just "micon" and had the same result, but I don't care. As long as I can type what is in my brain and it finds it.

Nearly most every editor has fuzzy file finding, and I won't consider anything that doesn't.

## FTP and SSH Support

{::nomarkdown}
  <img src="/assets/Editor/FTP.png" alt="FTP and SSH support (BBEdit)">
  <div class="image-caption">FTP and SSH support (BBEdit)</div>
{:/nomarkdown}

I have used FTP and SSH and Emacs with [tramp](https://www.gnu.org/software/tramp/) for quite a long time. Being able to edit local remote as if they are local files is incredibly freeing.

macOS allows you to mount remote directories with things link [sshFS](https://www.digitalocean.com/community/tutorials/how-to-use-sshfs-to-mount-remote-file-systems-over-ssh) or nativtely for FTP (more nicely with [mountainduck](https://mountainduck.io)). So you might not find this as useful as ideas, but when combined with file bookmarks and having mixed local and remote projects it is a huge timesaver.

I cannot live without this feature, but I could integrate this with my operating system without too much issue.

## Find in Project

{::nomarkdown}
	<video autoplay loop muted class="gifvid">
		<source src="/assets/Editor/Fip.mp4" type="video/mp4">
		Your browser does not support the video tag.
	</video>
	<div class="video-caption">Find in Project (Emacs)</div>
{:/nomarkdown}

Often it's necessary to find things in the project that aren't relative to a specific programming context. This means that I need a way to find something that is contained in the files of the project with minimal effort.

In the example above I needed to find something in my website where I had referred to "x42 plugins" as the heading of a section. I have many places in my website where I have done this, so I need to be able to easily see context surrounding this.

Many text editors are not very good at finding things in a project, and are even worse at showing you the results in an easy to navigate way.

## Error management

{::nomarkdown}
<video autoplay loop muted class="gifvid">
	<source src="/assets/Editor/Error.mp4" type="video/mp4">
	Your browser does not support the video tag.
</video>
<div class="video-caption">Error Management (Emacs)</div>
{:/nomarkdown}

None of us write code correctly the first time, and when re-factoring things get broken that we need to fix.

Having an editor that allows you to capture error messages from your build system and then browse those error messages is a fantastic tool.

In the video about you can see that I compile the project and then was able to quickly jump to the errors with minimal effort. I find this type of workflow allows you to be more daring and more free in your attempts to solve problems, and reduces the fear that builds up about re-factoring and having everything break on you.

## Macros

{::nomarkdown}
  <video autoplay loop muted class="gifvid">
    <source src="/assets/Editor/Macro.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <div class="video-caption">Macros (Vim)</div>
{:/nomarkdown}

There are things that you simply can't do with find/replace that are not common enough that you want to write a script for. It's also possible that you don't want to spend the next 2 hours of your life figuring out how to write a regex for it (I do this **WAY** too often, I won't be defeated by regex! It must be able to solve everything!)

That's where Macros come in.

Macro functionality allows you to record a series of actions and play them back as needed. Nearly every text editor can do this out of the box (Except Atom and VS Code (how is that acceptable?)).

This functionality is especially powerful in modal editing scenarios where you are given extra functionality to navigate text/code. It makes it much easier to create macros without resorting to menus/commands(M-x etc..)/arrow keys/etc...

In the video above I wanted to take some data and prep it for [JSON](https://en.wikipedia.org/wiki/JSON)ification. I could have used the Vim regex of `s/\(.*\)\s\(.*\)/'\1': '\2',`, but it was faster just to type `qa0i'[esc]ea':[esc]wi'[esc]A',[esc]q` then 4@a (yes, it's fast if you're familiar with Vim). I did things slowly in the video so you can see them, and I didn't use "4@a" which will apply the macro 4 times in a row.

Macros are awesome. You can think of them as 'one-off' scripts...

## Column Editing

{::nomarkdown}
  <video autoplay loop muted class="gifvid">
    <source src="/assets/Editor/Column.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <div class="video-caption">Column Selection and Editing (TextMate)</div>
{:/nomarkdown}

This is something that is surprisingly useful. Select rectangles (or columns) and edit them as desired.

Most editor have this function by using multiple cursors, but some editors like Vim have first class support for column editing.

It's a fantastic function that is great for handling comments, data structures, and more. I prefer to have an implementation that doesn't utilize 'multiple cursors', but if it works... it works.

## Debugging

{::nomarkdown}
<img src="/assets/Editor/CodeDebug.png" alt="Debugging">
<div class="image-caption">Debugging (VS Code)</div>
{:/nomarkdown}

Debugging is necessary, and I like if my text editor was able to pull debugging symbols from whatever debugging process that is being used.

 I have course understand that not all languages will be supported by every text editor, but I expect at least C, Lisp (Clojure) repl and Javascript (Node) support.

Python, Nim and Java support are nice.

## Run Command On...

{::nomarkdown}
	<video autoplay loop muted class="gifvid">
		<source src="/assets/Editor/Shell.mp4" type="video/mp4">
		Your browser does not support the video tag.
	</video>
	<div class="video-caption">Filter command through (TextMate)</div>
{:/nomarkdown}

I use a UNIX-based system because I am comfortable using the included utilities to manage my computing needs. Likewise I expect to be able to utilize these tools when programming or when writing an article.

I commonly use Emacs `M-!` and `M-|` commands, but they are somewhat bulky to use at times.

In the video above I am using TextMate. I was looking through my system logs and wanted to see a specific disk error I noticed was occurring. So I copied the text into the editor and then ran the following command `grep "disk" | sed "s/.*400//g" | sort | uniq`. I output this command to a new document.

* `grep "disk"` - find all lines containing the word "disk"
* `sed "s/.*400//g"` - get rid of all that gibberish at the beginning (this is important for the next comamnd). `.*` captures everything up till `400`. The format here is `s/find/replace/g` where "find" is what you're looking for, and "replace" replaces it. So I'm replacing everything up to the "400" with nothing
* `sort` - I want all similar lines next to each other, so I sort them.
* `uniq` - This is why I killed all that date info and sorted. `uniq` outputs all unique lines.

In about 10 seconds (inclding the time to think, as you can see above), I have a document showing the specific disk errors that occurred recently.

I use this feature very often, often for much more complex tasks.

## AppleScript and Automator

{::nomarkdown}
  <img src="/assets/Editor/AppleScript.png" alt="Applescript and Automator (BBEdit)">
  <div class="image-caption">Applescript and Automator (BBEdit)</div>
{:/nomarkdown}

This is different from [Extensibility](#easy-extensibility). AppleScript/Automator allows external applications to interact with the software, rather than the software being changed by code itself.

The ability to be used with AppleScript/Automator allows me to integrate other software workflows into my text editor.

Example: I finish editing a graphic. I can press `ctrl-F5` on my computer to automatically added to my assets directory, and potentially process the image for minification or other needs. Then the proper code is inserted into the text center at the point to utilize this asset, and the asset is added to my version control and a commit dialog pops up.

This is possible with some editors that are controllable from the command line, however [the application that I use for controlling my keyboard and mouse](http://www.controllermate.com) does not have this functionality exposed for easy use outside of using AppleScript.

## Completion

{::nomarkdown}
  <video autoplay loop muted class="gifvid">
	<source src="/assets/Editor/Complete.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <div class="video-caption">Code Completion (IntelliJ)</div>
{:/nomarkdown}

This is a feature that I don't really expect most text editors to do very well, because well... they don't.

Completion of words in the current file is always excellent, but completing things in a project or having editor understand the code to know what is contextually possible...

That's for the IDEs.

None of the editors I've tried do this well. Even [VS Code](#vs-code), which is supposed to be a [Javascript](https://en.wikipedia.org/wiki/JavaScript)/[TypeScript](https://en.wikipedia.org/wiki/TypeScript) IDE, doesn't do this very well.

I have this working very nicely in Emacs for Lisp code (as it should), but even that was somewhat of a pain to get right.

## Code Browser

{::nomarkdown}
  <video autoplay loop muted class="gifvid">
    <source src="/assets/Editor/Class.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <div class="video-caption">Code Browsing (Sublime then TextMate)</div>
{:/nomarkdown}

I often need to do one of two things:

* See what functions/methods/headers/etc... exist in a document to orient myself
* Quickly jump to something

I expect there to be some sort of code browsing (often called symbol browse/jump/goto).

This is where non-emacs/vim text editors really have a leg-up. The emacs/vim packages for this functionality are rubbish. Yes, you can skim code and use incremental search/find, thusly dealing with all of the false positives and loading your short-term memory with garbage you don't need...

Or you can just use some functional that loads all of the necessary symbols into a graphical view for you. When you want to browse code, then you have something that does that and only that.

## Easy Extensibility

{::nomarkdown}
  <img src="/assets/Editor/Extend.png" alt="Extensibility (TextMate)">
  <div class="image-caption">Extensibility (TextMate)</div>
{:/nomarkdown}

I don't want to learn a whole new ecosystem for a script. Give me some text and give me a sensible language. Textmate does this nicely, Sublime does this nicely. Everything else sucks. (I love lisp, but Elisp is ugh).

Dragon often has problems with capitalizing the sentence correctly, so I need a command that will capitalize the current sentence. I created that in TextMate in about 20 seconds. Doing it in Sublime was equally simple (even though this isn't as easy in Python).

Some other editors require learning some sort of framework for creating scripts or that you learn a number of esoteric language commands (and oddities).

I just want something that lets me use the skills I already have to improve my text editing process.

P.S. That ruby should be `print ARGF.read.strip.gsub!(/(^|\.\s)([a-zA-Z1-9])/){ $1 << $2.upcase }`, since Dragon puts leading spaces at the beginning of lines sometimes. Funny enough, I found this error while writing this section.

## Refactoring
{::nomarkdown}
  <video autoplay loop muted class="gifvid">
    <source src="/assets/Editor/Refactor.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <div class="video-caption">Refactoring (VS Code with Javascript)</div>
{:/nomarkdown}

Okay, this one really isn't necessary, and it is also an IDE feature, but I really enjoy having this feature!

Functionality that lets me quickly re-factor my code is brilliant, but this does require that the editor understands the code and it is relatively rare outside of IDEs.

I enjoy having this, but I do not expect it.

I do expect having re-factoring for Lisp though, but those are basic editing commands for working with [sexps](https://en.wikipedia.org/wiki/S-expression).

## Colour Selection

{::nomarkdown}
  <video autoplay loop muted class="gifvid">
    <source src="/assets/Editor/Color.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <div class="video-caption">Colour input (BBEdit)</div>
{:/nomarkdown}

This is one of those features that I did not even realize that I wanted until I had seen it in action.

There is a color palette that you can select colors from, and then the color is input into your file in the correct format. The part about "correct format" is particularly important.

I ended up using this feature in BBEdit quite a bit, and it was a driving factor in me using that editor for a significant portion of the time that I spent with it. Other editors do have this feature (or extensions), but BBEdit showed it to me first.

# Features I don't care about

## Multiple cursors

Honestly, I think that this is totally unnecessary. I have yet to see an instance of where multiple cursors would be necessary in the place of regex or macros.

I understand that not everybody is deft with regular expressions, however I am and I have yet to find a need for multiple cursors (even though I have this capability enabled in my editor for a while now!).

## Version Control

I know I will get flack for it, but I use [Mercurial](https://www.mercurial-scm.org), and not [git](https://git-scm.com). I **HATE** git (and don't bother telling me that it's because I don't understand it, I'll go ahead and concede that if it makes you happy. I think it's obtuse and consistently used incorrectly which leads to constant frustrations.)

If I download something from getup, I immediately create a Mercurial repository for myself to track things. I'm happy doing this via [CLI](https://en.wikipedia.org/wiki/Command-line_interface). I have not seen an integrated VCS that made more sense to me than using a CLI.

## Window Splits

This is another one that I know a lot of people love, but I never use window splits. For me it does nothing but create visual noise, and makes my brain constantly context switch because I am too willing to look at something in another window rather than what is on my screen.

I also dislike that a lot of editors default opening things in window splits (Emacs is _AWFUL_ about this). I just want one file open, and I want to easily jump to other files as needed.

## Loading Times

It seems to be a thing where people discuss loading times, files or editor, as some sort of qualitative indicator of editors.

**I.**

**Don't.**

**Care.**

If I have to wait an extra three seconds for a file to load so that I can use an editor that will save me minutes per hour with other functionality, and I'm willing to spend that extra three seconds.

I also do not care if my editor takes 10 minutes to load or not, because I never close the thing (with Emacs I use [emacsclient](https://www.emacswiki.org/emacs/EmacsClient) which lets me close the editor, but have a server running in the background to instantly attach new clients to.)

## Package Management

I have been manually installing packages/plugins/bundles/scripts since I first started using a computer. It doesn't bother me.

I do enjoy the ability to easily search for these things, but it is not particularly important to me. I am more interested in being able to [create these things myself with minimal friction](#easy-extensibility).

**BIG DEAL** - I dislike when projects forgo basic functionality because it's available in a plug-in/package/extension. It also irks me to need to search for, then try, half a dozen things for functionality that is relatively common. (I'm looking at you [Atom](#atom))

## Json settings

I don't know what the deal is with settings being [JSON](https://en.wikipedia.org/wiki/JSON), but I don't like it. I prefer having GUI for setting, or my settings being _purely_ scriptable.

JSON is a middle ground that I find unacceptable, just give me one of the extremes.

I do find it weird that these graphical text editors utilize a textbased configuration that offers no script ability benefits. Strange choice or lazy choice... I can't tell.

## Crossplatform

I use macOS. If there comes a time where I'm not using macOS, then my editor not existing or being set up correctly will be the least of my problems given how much I have invested into the platform for all of my needs.

I am plenty happy doing basic text editing in Vim when I move to other operating systems. I do all of my main writing and development in macOS.

## How old it is

While researching what other people enjoy about their editor, I frequently came across the sentiment that people should "abandon ancient editors".

I don't care if my editor is 40 years old or 40 days old. What I care about is if my editor does what I need. It is text in program, this is not anything new and competing needs haven't changed much in the last 50 years (despite what people want to convince themselves of).

If the product is "alive" then that is enough for me.

# Editors

This is not a listing of pros and cons in the context of an objective review. This is a listing of pros and cons specifically for my uses. These things may not apply to you, and you may find some of the pros as cons, and some of the cons as pros for your specific workflow.

As the title of the post implies, these are _my_ musings.

## Emacs

Let's be clear, I am fully aware that I have probably molded my desires around what Emacs offers. I have tried to explore the manuals and documentation of the other editors to learn what features they offer rather than the features that I know I already have in Emacs.

 I have found features that did not have set up an Emacs, but there was not a single thing that I found that I could not replicate in Emacs within a minute or two (with the exception of the VS Code IDE-like features, that _is possible_ but takes more time. I only have CL, Clojure, JS and C setup right now for a full IDE experience in Emacs).

I fully accept that there is a bias to all of this as an Emacs user, but I can't use it until my hand/arm heals. My hope is that I find something _better_. I am not religiously attached to it. I am fucntionaly attached to it.

Anyway... it's the best I've found for me to day, which is why I use it.

**THE GOOD**

* Extensibility - Emacs is the ultimate in extensibility. Elisp is a blocker when it comes to accessibility, but once you leap over that hurdle it's easy to make the editor do what you want.
* Vim - Emacs is the best Vim. [Evil-Mode](https://github.com/emacs-evil/evil) offers the best parts of Vim (Modal editing with known key commands) and you get to keep the best parts of Emacs.
* Completion - Emacs has the best completion packages: [Helm](https://github.com/emacs-helm/helm) and [Ivy](https://github.com/abo-abo/swiper). The built-in[Ido Mode](https://www.emacswiki.org/emacs/InteractivelyDoThings) with [Hippie Expand](https://www.emacswiki.org/emacs/HippieExpand) is already better than what I've seen in other editors.
* Near Universal - Emacs is available on nearly every platform that you could want, and it's probably preinstalled for you already.
* Errors - [Emacs occur-mode is a brilliant method for dealing with errors](#error-management). Helm and Ivy can extend that for even more super powers.
* [Eshell](https://www.gnu.org/software/emacs/manual/html_mono/eshell.html) - I like Lisp. I like having Lisp everywhere. Having my shell be a Lisp environment is brilliant.
* Active community - If you have a question about Emacs then you can probably get it answered quickly via IRC or StackOverflow.
* macOS - macOS has most of the common Emacs key bindings available in every text window. If you are used to navigating around text with Emacs, then you will be very comfortable using macOS (wonder why I love Emacs and macOS so much? That's a big part of it.)
* Finding things - Emacs has the most comprehensive system available for finding anything. Commands, files, settings, colours, symbols... anything. Folks seem to sure love Sublime's "Goto anything", but it pales in comparison to what you can do with Emacs. (See [helm](https://github.com/emacs-helm/helm), [ivy](https://github.com/abo-abo/swiper) and [icicles](https://www.emacswiki.org/emacs/Icicles) for extensions of this functionality)
* [Tramp](https://www.gnu.org/software/tramp/) - Tramp is the absolute most brilliant [FTP and SSH file editing implementation](#ftp-and-ssh-support). Other than the lag from initially loading the file is completely seamless. It feels like you are just editing the file on your local machine. Emacs also has bookmarks which allows you to quickly open up files or directories on remote systems.
* Functionality - Emacs has the most functionality shipped with the editor...
* [Documentation](#documentation) - It has [documentation that you can sit down and read](https://www.gnu.org/software/emacs/manual/emacs.html), but it also makes it fairly easy to find the things that you need. Emacs is often called a self-documenting editor, [and if you click here you can see why](https://www.gnu.org/software/emacs/manual/html_node/emacs/Help-Summary.html). Emacs makes it easy to find what you want to know about quickly, even if you may not know what it is that you need.

**THE BAD**

* It doesn't work with Dragon properly.
* Obtuse - Learning Emacs is not an easy task. You need some perseverance to fully understand how to utilize the software. You ask is basically only for people that wish to dive deep into their editor.
* **Setup - getting Emacs to work the way that you expect it to is going to take some time, and you basically never finish.**
	* Bolded because this is actually a really major con. Emacs won't work out of the box for 99.9% of people despite having a huge amount of functionality by default. It's a shotgun of features, while other editors are guided missiles.
* Functionality - Emacs has the most functionality shipped with the editor... But it requires some work to utilize some of it and possibly learning Elisp (beyond extending the editor, I'm speaking of simply accessing features (adding shortcuts, enabling packages, configuring packages etc..))
* Packages - The Emacs package ecosystem is pretty messed up right now. Installing packages can be somewhat confusing to make sure you get the correct repository in the correct version, then you are basically required to Google how to set up the package. That said, Emacs packages are generally very high quality and high functionality.
* Ctags - For true IDE like functionality you will need to get [ctags](https://ctags.io) set up and working. This is not always an easy task.
* Windows - Using Emacs on Windows is not fun. If I was on Windows then I would never have used Emacs in the first place because of how difficult it is to set up some things.

## Vim

I already use Vim frequently. It will always be my "one-off" editor. It will always be my secondary editor, and it will always be my emergency editor that I will happily use if there's nothing else around.

I can utilize Vim in its vanilla state without thinking twice about any of the commands. I met the point with Vim where when I read these posts about why people leave Vim I get frustrated with their of commands because they are invariably longer or more complex than necessary. Oddly enough, I feel more comfortable using Vim than any other editor...

**BUT.** There's no denying that many other more modern and have workflow improving functionality that is either painful, difficult or obtuse to set up with Vim. I would never say that it's impossible to make them work for even the most complex workflows, but I do think that it is more difficult than it needs to be. You can download any of these other editors (including Emacs) and have more functionality out of the box without any fussing with a text-based configuration file.

None of this post is about replacing Vim, since it is not and never will be my primary editor. 

**THE GOOD**

* Training - If you are new to Vim then there are plenty of options for learning how to use the editor out there.
* [Modal Editing](#modal-editing) - Vim is the king of modal editing, it is what everybody else tries to emulate. Even though I believe that Emacs is a better Vim, Vim is Vim.
* Everywhere - Vim is preinstalled on more systems than Emacs, and if you know vim you can probably use vi just fine. Vi is on _everything_ you'll probably encounter.
* Active community - If you have a question about Vim then you can probably get it answered quickly via IRC or StackOverflow.
* Plugins - Vimscript is a mess, and using Python (or Lua with NeoVim) isn't that easy, but there are some authors in the Vim community that focus on quality. As a result there are some extremely high-quality plugins available for Vim. My experience is that Vim has the highest quality plug-ins of any editor community.

**THE BAD**

* Text Editor - Vim tries to be a text editor and not much more. IDE-like features are difficult to integrate into VIM no matter which plug-ins you use. Much of the community also seems to have this strange fetish for using vanilla vim, and telling people how they don't need X or Y plug-ins.
	* There are some IDE like setups for venom for specific languages, but you are out of luck for a complete omniglot experience. Trying to set up Vim so it works nicely with Lisp and C++ is a frustrating experience, if it's even possible. Doing this with other editors is not only possible, but often easy.
* Scripting - writing your own extensions in Vim is not fun. [Even if you use Neovim](https://neovim.io) the API itself is strange and has a number of warts.
	* However, you can make simple scripts that use only your basic editor knowledge. In my experience there is a huge leap between simple scripts and intermediate scripts. The level of difficulty goes from "Anybody can do it" to "Vim-Master" in the blink of an eye.
* Vim isn't a good Vim - [Emacs is a better Vim](https://github.com/emacs-evil/evil) and [NeoVim](https://neovim.io) is a better Vim. There's something clearly wrong when the software isn't even the best version of itself.
* [Colemak](https://colemak.com) - I do not use QWERTY, I use the [Colemak](https://colemak.com) keyboard layout when I type. The default then key layout is absolutely terrible when using Colemak. Switching to a "Colemak Layout" means that when I switch to another vim-like set up I am totally incapable of using it. I have to stick with the default Vim keys, ugh.
* Ctags - For near-IDE like functionality you will need to get [ctags](https://ctags.io) set up and working. This is not always an easy task.

## VS Code

I have used VS Code for approximately six months in the past, and I have always been very impressed with it. I would not have even written this post to begin with if it wasn't missing the features I listed below.

I feel that minus these deficiencies it is probably the nicest "install and go" editor that is available.

**THE GOOD**

* Language Support - When VS Code says that it supports a language, then it _really_ supports the language. Language support in VS Code implies IDE-like functionality for that language. [Debugging](#debugging), [intelligent completion](#completion), [Symbol movement](#jump-to) etc... will work perfectly.
* Frequent Updates - VS Code is constantly adding new features, and more importantly improving the speed in responsiveness of the software. VS Code has become faster with nearly every update, rather than becoming slower... so far.
* [Peek](#peek) - This is not originally a VS Code feature, but this is where I was exposed to it. I am addicted to "Peek".
* [Debugging](#debugging) - VS Code has the nicest debugging tools for supported languages of any editor in this list.
* [Terminal](#integrated-terminal) - VS Code has the nicest terminal integration I've tried besides [Emacs](#emacs)... I actually spent a good period of time using Emacs inside of VS Code (for commit messages and diffs mostly).

**THE BAD**

* Vim - [The Vim extension](https://github.com/VSCodeVim/Vim) does not work very well in my experience, and it frequently clashes with other extensions. It has improved over time, but it still needs a lot of work.
* Microsoft & Github - [Microsoft is buying Github](https://news.microsoft.com/2018/06/04/microsoft-to-acquire-github-for-7-5-billion/). Github makes VS Code's #1 competitor: [Atom](#Atom). Surely this will cause issues down the road.
* Longetivity - VS Code is cool right now, but it is new. How long will VS Code still be a text editor and not turned into a full-blown IDE or a bloated-mess?
* Extension format bloated - Just like [Atom](#atom), [look at what's necessary to create an extension](https://code.visualstudio.com/docs/extensions/example-hello-world). This is no more capable than what you can do with other editors, but it's significantly more complex.
* Missing features I **need**
	* [Multiline replace](#multiline-find-and-replace) - VS Code uses [ripgrep](https://github.com/BurntSushi/ripgrep) for find and replace, and ripgrep supports multiline find/replace. VS Code does not... This is one of the most requested features I've seen for VS Code since it started. Still doesn't exist. Maybe in a few months?
	* [Regex support](#sane-regex-support) - VS Code uses two different regex engines depending on which search you use. I find this unacceptable. It confuses me frequently.
	* [Macros](#macros) - There is no native support for macros. I found an extension that is supposed to offer this functionality but it did not work very well at all. It supported text movement, but many other features (offered by extensions normally) did not integrate.

## Atom

My experience with Atom has been poor. It basically feels like a poor man's VS Code, but with a smaller community and VS Code is free as well.

I fully accept that this may be a deficiency in my evaluation, but at no time that I feel like I was gaining something by using Atom other than it not being VS Code.

I also _abhor_ the package system. It's complex for absolutely **NO** reason (perhaps a technical reason of course, but not a front-facing reason). It offers no functionality that other editors offer, but with less complexity. Even something as simple as creating a [snippet](#snippets) is minimum of 4 lines of code (and it lives in your config!). Ridiculous.

Overall, Atom was the least enticing and least exciting editor that I tried. For that matter, it was also the least simple and felt like it needed the most configuration.

Not a fan.

**THE GOOD**

* Completion - Excellent completion for some languages.
* Packages - Atom has a lot of packages, and nearly all of the ones that I tried worked rather well.
	* Ultra-functional - The Atom package authors go crazy with having monolithic packages it seems. Thingfs that are multiple packages in other ecosystems seem to often be giant packages in the Atom ecosystem. I rather select packages than configure packages, but I can see the argument for configuration over selection.
* Useful packages - Here's the packages I found that were useful
	* [Bezier curve editor](https://atom.io/packages/bezier-curve-editor)
	* [Highlight trailing spaces](https://atom.io/packages/trailing-spaces)
	* [Atom-IDE](https://atom.io/packages/atom-ide-ui)
	* [Pigments](https://atom.io/packages/pigments)
* Fun packages - Here's a list of things I found that weren't useful, but were surpisingly _fun_ to use.
	* [Wakatime](https://atom.io/packages/wakatime)
	* [Scroll Through Time](https://atom.io/packages/scroll-through-time)
	* [Git Time Machine](https://atom.io/packages/git-time-machine)

**THE BAD**

* Package reliance - The editor seems to have fairly minimal functionality by default. Most functionality is located in packages.
* Themes - The default theme looks like someone vomited a Martha Stewart paint collection at night onto my screen. So you say I should install another theme right? I tried to find a theme that I found pleasant, and I was completely unable to. I don't want to spend hours creating my own theme (even though I spent about 90 minutes trying to find a theme). You can see what colors I like by viewing images so far. It seems like people that use Atom enjoy low contrast themes. Gross.
* "hackable" - They call it a hacklable text editor for the 21st century, but have you actually tried to "hack it"? I have and it is not pleasant. [Go ahead and look how complex it is to write a "word count" package](http://flight-manual.atom.io/hacking-atom/sections/package-word-count/).
	* [Flight Manual](https://flight-manual.atom.io) - I read and followed along with this entire book, and I still think it is obtuse. That's probably because _I am not a JS programmer_. In fact, you may have seen me in ##Javascript around 4pm EST on October 1st asking a regex question trying to put together a simple Atom plugin.
* Microsoft & Github - [Microsoft is buying Github](https://news.microsoft.com/2018/06/04/microsoft-to-acquire-github-for-7-5-billion/). Github makes [VS Code](#vs-code)'s #1 competitor: Atom. Surely this will cause issues down the road.
* Slow - The rumours are true. I have a monster machine, and Atom still slowed down on me in various instances. I don't mind slowdowns _usually_, but the line was drawn when Atom would hiccup while typing.
* Language support - It would appear that Atom is largely used by people dealing with web technologies. When attempting to use it for systems languages or lisps, the integration was poor.
* Community - IRC is empty. Slack is quiet. The forum currently has 8 posts in the last 24 hours. Github issues are equally quiet. Where are the atom users? Where do I get help quickly?

## Sublime Text

Sublime Text has a large following, and I understand why. It is fast and it is relatively easily extensible.

It is extremely similar to TextMate, but with more users and extensions.

I also hate that cmd-p shortcut. It's difficult to press on a [Colemak](https://colemak.com) keyboard. I changed it, but then I had to change other keyboard bindings... then more... then more. Changing 4-5 shortcuts meant I had to change about 20. Now my setup is nothing like the documentation, great!

**THE GOOD**

* Packages - writing plug-ins in Sublime Text is simple, and it uses pythons which is not difficult to use if you are unfamiliar with it. (Makes one wonder why so many of the packages suck.)
	* Console - There is an integrated Python console where you can write quick scripts on the fly. I enjoy this 'emacs-like' ad-hoc scripting. I used it often while writing this article.
* Theme - the default theme is perfect. It's a minor bonus, but I appreciate it.
* Fast - Of all the editors that I tried, Sublime Text was the most responsive in all circumstances. Not just loading times, but for completion and use of extensions.

**THE BAD**

* A lot of the packages suck - Quite a few of the packages simply do not work, or they are poorly put together. Probably 75% of the things that I tried were non-functional or buggy.
* API is documented poorly
	* Remember that [extensibility sample?](#easy-extensibility)? It took me nearly an hour to replicate that in Sublime. Code at the bottom of this section. The methodology is awful as well, and I suspect this fails if you have multiple cursors too! I am certain the code can be improved.
* JSON-like Configuration - I hate this, why is this such a popular thing? I'm using a graphical editor because I don't want to do things like this. Give me a preferences panel so I don't have to go googling to figure out how to change a setting ( Many settings are listed in the defaults file that shows in the left pane, but there are apparently many that are not). Why copy one of the worst parts of Vim (and some parts of Emacs)??
* Not Unique - I was unable to find a single thing about sublime text that was a compelling reason to use it over another editor. Everything in Sublime was easily replicated in other editors, if not a native feature.
	* It is however missing a lot of IDE-like functionality that other editors have.
* Cost - $80 for a text editor is a bit steep when you consider the competition, but when you consider how much time that you may spend using it is not that much. My main gripe with it is that it is not open source, and if anything happens to the company or the authors then you are pretty screwed.
* Goto anything - What a poorly named feature! I attempted to "go to anything" and it rarely did that. I was able to go to _some_ (local) files and _sometimes_ symbols but that was it. Probably 75% of the time it was unable to goto what I wanted.
	* There are prefixes that are necessary for going to things. I don't want to think about what I'm going to. Let me _GO TO ANYTHING_. I wouldn't even mind this feature if it wasn't called "Goto anything"... because it ain't.


```python
import sublime
import sublime_plugin
import re

class CapSenCommand(sublime_plugin.TextCommand):
	def run(self, edit):
		reg = self.view.line(self.view.sel()[0])
		test_string = self.view.substr(reg)
		def capMatch (match):
  			return match.group(1) + match.group(2).capitalize()

		text = re.sub('(^|\.\s)([a-zA-Z1-9])', capMatch, test_string.strip() )
		self.view.replace(edit, reg, text)
```

## TextMate

I use all of the listed editors write this post, and I ended up using TextMate the most. It is not the best editor here, nor is it the most capable.

TextMate offers me most of the features that are important to me, and it does it in a very simple interface. It's very similar to [Sublime Text](#sublime-text), but I found that the available Bundles offered the functionality I need with minimal fuss. Sublime Text was a mess of broken packages or half-assed functionality.

Textmate also has more functionality by default compared to Sublime in my experience, which lead to a nicer experience. It was the editor I spent the least amount of time messing with.

**THE GOOD**

* Regex - [TextMate has the most awesomest regex engine](https://macromates.com/manual/en/regular_expressions).
* Multiline replace - Multiline replace works fantastic.
* Snippet multitrigger - It handles having snippets with the same trigger nicely (select with number).
	* TextMate's snippet format has been copied by nearly everyone else, and is quite comprehensive.
* Bundles - TextMate calls its extensions "bundles", and they are incredibly easy to create.
	* Once again, many other editors have adopted support for TextMate style extensions
	* This offers [Run command on...](#run-command-on) (shell execute with selection) functionality.
* Source Control - I know that I said [I wasn't interested in version control features](#version-control), but I like TextMate's implementation of this. It is simple and there are no crazy graphics or anything else. It is just a textual way of viewing your current version control status and interacting with it via hotkeys.

**THE BAD**

* IDE - IDE-like features are relatively rare in TextMate, and there are few bundles that will give you these things.
* Terminal - You are stuck using your terminal software, as there is no integrated terminal in TextMate. That _really_ annoys me.
* **MENUS** - Figuring out functionality in TextMate means diving through a huge list of menus for bundles, and to make the editor usable you will be needing to create a lot of settings for shortcuts.
* Cost - $60. When you consider that this is open source is not that much of a negative. If something happens the author then it is possible that development will continue.
* Hidden settings - There's some hidden settings that require googling around to find. Irritating.
* Development - TextMate does get somewhat frequent updates, but they're relatively small. Development has slowed quite a bit over the last 10 years.
	* Despite that it's still a quite functional product.

# BBEdit

I enjoyed using BBEdit. It is a fantastic product for Mac users. It has the nicest documentation and excellent customer support.

My main issues with it are that it is not geared towards programming outside of C/C++. The Javascript support pales in comparison to [VS Code](#vs-code), so that's not worth investigating.

**THE GOOD**

* Multiline replace - Multiline replace works fantastic.
* Regex - BBEdit uses grep-based regex, which is familiar and easy to use. (Also means backreferences, thank goodness)
	* [Perl-style regex](https://www.pcre.org) also supported. Woo! PCRE for the win.
* **A MANUAL** - BBEdit has a comprehensive classical manual! Awesome. I enjoy reading manuals, not interrupting my workflow to constantly look for functionality.
* Find differences - This function allows you to copy and paste text to find diffs, rather than needing to dump it into files or browse a full file diff.
* Applescript - Excellent [Applescript](https://en.wikipedia.org/wiki/AppleScript), with **WITH DOCUMENTATION**
* Web support - BBEdit has the best web technologies support that I've encountered in a plain text editor with no configuration.
* Text Transformations - This is not particularly unique in what type of result you get, but it is a simple GUI-presented way of manipulating and inserting text. You can apply transformations to text in a wide variety of ways without needing to utilize any specific programming language. Even as someone that's at home writing Perl for text processing, I found this to be a quick way to acheive a number of useful tasks.

**THE BAD**

* Language support -  seems to be poor. Only C, C++, Objective-C, HTML/CSS and markdown seemed to have excellent support.
* Completion - Having autocomplete turned on slows down text display significantly (even on an extremely fast system!). I had to turn off completion and use it manually, which still would cause slowdowns in text display.
* Always html/css/markdown - No matter what language the project is in, you will see html/css/markdown options and menus.
	* BBEdit _is marketed primarily as an HTML editor)_, so this is not necessarily a failing of the product. It's more likely a failing of my use of it.
* Community - the BBEdit community, in public, seems smaller than other editors with fewer resources.
* Dragon - BBEdit is specifically singled out in the Dragon user manual is not being compatible. Despite this I have written a good portion of this document in BBEdit with Dragon without issue.
* Cost - $49.99. Once again it is not open source and if something happens to the company you might be in big trouble (given the breaking changes in macOS at times). The longetivity of the software does have a lot to say about how well the author supported it.

# Conclusion

There is no conclusion here. I have no idea what I am going to use.

At this point it's between [Sublime Text](https://www.sublimetext.com) and [TextMate](https://macromates.com) for me. I felt the most comportable writing this post in [TextMate](#textmate), and I can honestly say that it was a positive experience. I also did some C work and Java work in it. I prefer to use an IDE for Java when possible still though.

I don't know. Nothing is good as Emacs, not a single one of these products offers the same functionality with the ease of use (once you're familiar with the platform).

Maybe I'll put a note at the bottom of posts with what I wrote it in for a while? Maybe? I don't really know how many of you people care about this at all anyway.

# Support Me!

This post took 25 hours to research, screenshot, test, write and edit. If you appreciate the information presented then <a href="/DonateNow/">please consider joining patreon or paying me for my time spent bringing you quality content!</a>

<a href="https://www.patreon.com/bePatron?u=7465992"> <img class="patreon-button" src="/assets/Patreon.png" alt="Be a Patreon!"></a>

<form style="text-align: center;" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick">
<input type="hidden" name="hosted_button_id" value="BR247JAZBTUJJ">
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
</form>

**If you have any questions or comments, please comment below! I read every comment and respond to most.** No registration is necessary to comment, so don't be shy.

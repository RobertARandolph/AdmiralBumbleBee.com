---
layout: post
title: Why I hate Windows
comments: true
date:   2018-12-15_13:13:20 
categories: programming
tags: ['Rant', 'Programming', 'Cakewalk']
image: /assets/WinRant/Update.png
description: Why I hate Windows, and why it probably doesn't matter to you.
series: Cakewalk
---

{::nomarkdown}
<img src="/assets/WinRant/Update.png" alt="Windows Update">
<div class="image-caption">Windows Update</div>
{:/nomarkdown}

Anyone that reads this knows that I hate [Microsoft Windows](https://en.wikipedia.org/wiki/Microsoft_Windows). I get questions fairly frequently about why, and the reasons require their own post.

This is that post.

{% assign cakes = site.posts | where: "series", "Cakewalk" | sort: 'date' %}
<ul>
{% for my_page in cakes %} 
    {% if page.url != my_page.url  %}
        <li><a class="page-link" href="{{ my_page.url | prepend: site.baseurl }}">{{ my_page.title | split: '-' | last }}</a></li>
    {% endif %}
{% endfor %}
</ul>

<!--more-->

**If you have any questions or comments, please comment below! I read every comment and respond to most.** No registration is necessary to comment, so don't be shy.

# Contents
{:.no_toc}
* TOC
{:toc}

# WARNING

**I AM NOT SAYING WINDOWS IS BAD**.

It is. You know it is. I know it is. We don't need to cover that.

I'm explaining _why I dislike using Windows_.

Many of these reasons may not apply to you, and that's okay. It is my computer and these are the things that bother me about using Windows, and _some_ reasons why this Cakewalk review will be cut short. (There's some more serious Cakewalk-related reasons though).

If you have suggestions to improve my Windows experience and that would be wonderful, but there's a very high likelihood that I have already tried. Don't let that stop you from making suggestions.

# Video

**HAH**

No video this week because I couldn't figure out a sensible screen capture and editing workflow that let me work to my normal standard of quality (which isn't even that great anyway!).

I did learn about [Hitfilm](https://fxhome.com), which is a pretty decent program.

# Typing

{::nomarkdown}
<img src="/assets/WinRant/Language.png" alt="Language Settings">
<div class="image-caption">Language Settings</div>
{:/nomarkdown}

I'm a bit weird when it comes to typing. I type with a keyboard layout called [Colemak](https://colemak.com/). If you care why, [read here](http://mkweb.bcgsc.ca/carpalx/). It's one of the most efficient layouts with the fewest keys moved.

I also love doing language study. I'm particularly keen on studying vietnamese and korean. So this means using [Telex](https://en.wikipedia.org/wiki/Telex_(input_method)) and a hangul layout with a [korean IME](https://support.microsoft.com/en-us/help/130053/howto-how-to-use-hangeul-korean-windows-input-method-editor-ime). I also switche to japanese study occasionally, which means using a [japanese IME](https://en.wikipedia.org/wiki/Japanese_input_methods).

I also type with [dvorak programmer](https://www.kaufmann.no/roland/dvorak/), and of course with QWERTY occasionally. When writing in German I usually switch to [Neo](https://neo-layout.org/index_en.html) as well.

To complicate this all even more, I learned a re-arranged hangul layout that matches the transformation of QWERTY->colemak in terms of key placement. Telex is a special case that _shouldn't_ care where your keys are (Windows cares though...)

I also have caps lock remapped to control, pause to escape, HL (h and l typed together) to escape and I have application specific hotkeys all over the place.

Setting this up in Windows is **impossible**. Not _difficult_, but **impossible**.

I've managed to get Colemak working fine, that's easy. Switching to another layout on the fly is difficult (it's a simple keypress in macOS). Using multiple IMEs it's incredibly difficult. Using a hangul layout + IME with a colemak layout transformation requires writing my own keyboard layout (including all sublayers!).

So when I'm in Windows I can type english in Colemak and just live with that... _almost_.

Some applications don't seem to respect the layout I've setup in the Region and Language settings. I've found a few applications where I can type in textboxes fine, but keyboard shortcuts work like QWERTY. I even found an application that made control back into caps lock!

## Shortcuts

{::nomarkdown}
<img src="/assets/WinRant/XKeymacs.png" alt="Windows shortcut... solution?">
<div class="image-caption">Windows shortcut... solution?</div>
{:/nomarkdown}

It's [no secret that I love emacs]({% post_url 2018-10-06-Editor-Musings %}). Even though prefer using vim bindings, I utilize a number of emacs shortcuts when I type.

* Control (shift to select) - f - move caret right
* Control (shift to select) - b - move caret left
* Control (shift to select) - n - move caret one line down
* Control (shift to select) - p - move caret one line up
* Control (shift to select) - a - move caret beginning of line
* Control (shift to select) - e - move caret end of line
* Control- h - delete character left
* Control- d - delete character right
* Control- k - delete from caret to end of line
* Control- v - scroll down
* Control- l - recenter caret to center of page
* Control- t - transpose characters
* Control- o - insert line
* Control- k - cut
* Control- y - paste (yank)

I use these commands like it's second nature. Even when doing normal typing I constantly use these commands to do light editing to text. It's much easier than reaching for the arrow keys, page up/dn keys, backspace and there's no analog to transpose.

These are _native_ to macOS. Nothing needs to be installed. They're also common in most shell environments thanks to [Readline](https://en.wikipedia.org/wiki/GNU_Readline).

[There is a potential solution to this in Windows](http://www.cam.hi-ho.ne.jp/oishi/indexen.html) but it has some problems. Keys like C-a and C-v are already taken by the OS as select all and paste respectively. (This is also an issue when using a non-cmd.exe/powershell terminal where c-c and c-z are already taken, so you can't copy/paste text without using other shortcuts).

XKeymacs has a number of issues besides that, but the inability to type `c-a c-k` to delete a line drives me bonkers. It's built into my brain more firmly than where the 'h' key is.

# Setup

{::nomarkdown}
<img src="/assets/WinRant/Runtime.png" alt="Let's install a few runtimes...">
<div class="image-caption">Let's install a few runtimes...</div>
{:/nomarkdown}

Windows comes with very few things, which can be nice, but it is also problematic when you want to get a system up and running for productivity.

You will need to get drivers installed for nearly every single part of your system, and you will probably spend time figuring out which version of the drivers are correct to have a stable system. Don't forget your peripherals as well!

Then you probably want some sort of application to deal with images, some sort of application for browsing the Internet, an application for listening to music, some sort of antivirus/firewall (or you will need to set up Windows variations of these), something for mail etc... Once you have all that going then you're almost set.

And of course once you get all that set up you realize that none of these applications are designed to work with each other in any way whatsoever, and nor do they respect the file system in a consistent way so if you begin to work on a workflow that utilizes the software you need to come up with your own system to follow and integrate that with a variety of other applications ideas of how you're supposed to use your computer.

Let's not forget all the different runtimes that you need to install! C++, .net, C++ different version, .net again, some weird thing that's probably a virus but the application needs anyway...

# Configuration

{::nomarkdown}
<img src="/assets/WinRant/Screen.png" alt="Where's that setting to change my primary screen again?">
<div class="image-caption">Where's that setting to change my primary screen again?</div>
{:/nomarkdown}

You have everything set up, and it probably took less work than I've said (even though for me it takes even more work), and now you want to configure your computer to work how you want it to.

Of course you would just go to one preferences pane, or a location where all of your configuration files are held, and edit things as necessary right?

Well… No. You will need to go into multiple applications and through multiple configuration dialogues to find what you need to change. These things all write to different places on the disc, or the registry and if you make a mistake then good luck figuring out how to undo it if it's not changeable from the GUI.

And if for some reason the application that controls those settings has some sort of problem, then you are really screwed. On my window system I have at least a dozen applications the control configuration for how my system operates in some manner. Video card drivers, mouse drivers, three different things to control how the screen displays, two different ways to interact with USB devices, etc... It never stops.

In macOS the same equipment (same system, same peripherals) are controlled by 1 preferences app, all of the prefs are in the same directory in human-readable text files, and the GUIs are all consistent (except the mouse drivers). Most Linux DE's are equally easy, but the preferences are in predictable directories if required.

## Keyboard shortcuts

{::nomarkdown}
<img src="/assets/WinRant/Shortcuts.png" alt="Shortcuts... Nope.">
<div class="image-caption">Shortcuts... Nope.</div>
{:/nomarkdown}

Of course, you can't change application shortcuts unless the application specifically offers you the capability to do so. Many applications do not give you that capability, even though it may be incredibly useful.

In macOS you can change the shortcuts for nearly the entire OS and any application as needed if there's a menu item for the action.

### Alt-F4

**WHO IN THEIR RIGHT MIND THOUGHT THAT ALT-F4 WAS A SENSIBLE SHORTCUT TO CLOSE A WINDOW????????????????????????**

Have you really thought about that? It's a difficult shortcut to press with one hand, despite being a common task. What about something like say... alt-q, or command-q?

## Consistency

If you buy a new computer with Windows preinstalled on it, you will have no idea how it works or what is installed on it. There is a great deal of manufacturer splintering where every manufacturer has their own custom Windows installation set up that they provide, and it is often not consistent per brand. Some companies splinter their Windows experiences based upon model.

This is not an issue if you are a self builder, it can be a major issue if you are a business owner that requires support plans for your systems (like me).

## Backups

{::nomarkdown}
<img src="/assets/WinRant/Restore.png" alt="Restore/Backup? LOL.">
<div class="image-caption">Restore/Backup? LOL.</div>
{:/nomarkdown}

Having a good backup solution is one the most important things to do when you first set up a system. Windows does not come with a backup solution that is even remotely decent. It requires that you purchase and install a backup solution from another party, or be technical enough to set up something like [rsync](https://rsync.samba.org/) (which isn't the best backup solution anyway).

I use the [Crashplan for business](https://www.crashplan.com/en-us/), but I also like having a local backup in case anything goes wrong and I need a quick restore, or to retrieve a handful files. Windows doesn't make this easy, in effect makes it somewhat difficult since backing up a window system so that it can be restored in place onto a new computer is nearly impossible. You generally are held to restoring only programs and files.

In macOS I was able to keep a single restore running from 2008 to 2017 across multiple machines, retaining the entire operating system setup in its entirety. It's also free with macOS. Time machine _does_ have some issues of its own when run on HFS volumes (which are uncommon now) but for a local backup solution as part a redundant data backup plan it's fantastic. Windows... not fantastic.

## Text Editing

{::nomarkdown}
<img src="/assets/WinRant/Notepad.png" alt="Windows Text Editing brilliancy">
<div class="image-caption">Windows Text Editing brilliancy</div>
{:/nomarkdown}

I'm convinced Sublime is so popular because most of the users are Windows users. (I know a number of macOS Sublime users, and Sublime is a quite nice, snappy application. So don't misinterpret me here...)

Setting up emacs/vim in Windows is a massive pain in the buttocks. This is a big deal for me, and a major part of setting up a working operating system for me.

If you want to do something as incredibly simple as word processing or text editing, you're off to your favorite search engine to find something.

Don't fret though! Windows 10 comes with Candy Crush! Blergh.

## Codecs

{::nomarkdown}
<img src="/assets/WinRant/Codec.png" alt="Codecs">
<div class="image-caption">Codecs</div>
{:/nomarkdown}

After a long day you want to just sit down and watch some videos. Not quite yet... you need to install some codecs first. You also need to know that's what you need, and you need to find a pack of them that hopefully doesn't come with a bunch of ad/spyware. Oh yeah, and it may not have that _one_ codec you need.

Or you can install VLC of course.

Wait a second there... VLC doesn't let you export certain formats, in particular h264. If you want to use one of the most common video formats in the general computing world then you need to install ffmpeg, possibly for each application you want to use. Hopefully your _paid_ application supports it, but it might not.

# Design issues

{::nomarkdown}
<img src="/assets/WinRant/Tracking.png" alt="Why is this _even_ a screen?">
<div class="image-caption">Why is this _even_ a screen?</div>
{:/nomarkdown}

User as administrator? Why is that normal?

No true safe mode? (Try it and see how many apps startup!)

Update broken? It'll try to install it again!

Drivers? Why are drivers still a thing for simple devices?

Telemetry constantly, **CONSTANTLY** uses your disk drive. It's nearly impossible to turn off. If you pay attention to logging you'll see that Windows is constantly messing with your disk drive for no good reason.

Install only on primary partition... unless you're a geek that wants to use a third-party bootloader. (ahem)

**NO** I do not want to switch to Edge. STOP ASKING ME.

Why are there ads in my start menu?

How did these random games show up that I never installed? Why is there stuff constantly showing up in there that I did not want, don't need and did not give permission to be there?

Why is Windows Defender thrashing my drive?

Why do I need to give EVERY SINGLE APPLICATION PERMISSION TO DO ANYTHING????????????

## HiDPI

{::nomarkdown}
<img src="/assets/WinRant/Scaling.png" alt="Scaling at least exists in Windows 10">
<div class="image-caption">Scaling at least exists in Windows 10</div>
{:/nomarkdown}

Have you tried to use HiDPI in Windows? It's a disaster. About 1/4 of the applications are simply broken, and the rest are ugly or run unusually slow.

It's not perfect on macOS of course (nothing you can do about low res bitmaps), but at least nothing is outright broken from the user's point of view. Most Linux DEs handle this alright as well.

Then again, as a developer, Windows' HiDPI support is much nicer to deal with. So why is everyone screwing it up?

## EULA

{::nomarkdown}
<img src="/assets/WinRant/Services.png" alt="Windows Services EULA">
<div class="image-caption">Windows Services EULA</div>
{:/nomarkdown}

[Let's take a look here](https://www.microsoft.com/en-us/servicesagreement/), which you agree to implicitly when you install Windows 10.

`To the extent necessary to provide the Services to you and others, to protect you and the Services, and to improve Microsoft products and services, you grant to Microsoft a worldwide and royalty-free intellectual property license to use Your Content, for example, to make copies of, retain, transmit, reformat, display, and distribute via communication tools Your Content on the Services.`

Hmm... So they can use your content to advertise their products, for free. Neat.

[You can't stop them from getting your information either](https://www.howtogeek.com/fyi/windows-10-sends-your-activity-history-to-microsoft-even-if-you-tell-it-not-to/) (They've said this is fixed...)

No thanks.

# Windows Update

{::nomarkdown}
<img src="/assets/WinRant/Update.png" alt="Windows Update">
<div class="image-caption">Windows Update</div>
{:/nomarkdown}

What an incredible piece of garbage this is. Microsoft wanted you to upgrade your system more, so they create a system that forces you to upgrade your system, even when you don't want to.

I have been unable to turn off Windows update no matter what I do. I have tried every single possible thing that I found on the Internet, and Windows still manages to turn Windows update back online and update at the worst possible times.

I have spent more time trying to get Windows not update than I've spent actively trying to keep my system in a working state.Of course I suspect many other people do this and it results in many systems being out of date because the users became so frustrated with Windows update that they turned it off somehow.

I have lost a significant amount of data due to Windows update. I absolutely despise it. It's decided to restart when I step away from my computer while a long-running process is going, causing me to lose hours of data. It's put my computer in a restart loop because an update failed.

I have also had to reinstall Windows twice because Windows update installed something that caused my video card drivers to not operate correctly, and of course I was unable to fix it because the settings that controlled us were in a binary format and I was unable to edit them in safe mode without the drivers running.

[I'm glad I'm not one of the people that lost everything because of Windows Update](https://www.engadget.com/2018/10/05/windows-10-october-update-1809-delete-data-wipe-user-profile/). Lest you think that is someone doing it wrong, [Microsoft themselves cofirmed it](https://www.forbes.com/sites/gordonkelly/2018/10/06/microsoft-windows-10-update-lost-data-upgrade-windows-7-windows-xp-free-upgrade/#3a69d7b66fa4). You know, [Microsoft really is something](https://www.digitaltrends.com/computing/microsoft-more-october-2019-update-bugs/).

[Plus they spy on you anyway...](https://www.ghacks.net/2018/11/23/german-federal-office-bsi-publishes-telemetry-analysis/).

**I REALLY HATE WINDOWS UPDATE**

If there was one singular reason why I can't stand Windows, this is why. I have to choose between having a _working_ system and having a working up-to-date system.

# Development

{::nomarkdown}
<img src="/assets/WinRant/Install.png" alt="Installing things sucks.">
<div class="image-caption">Installing things sucks.</div>
{:/nomarkdown}

I had to set up [Python](https://www.python.org/), then [Ruby](https://www.ruby-lang.org/en/), then [Java](https://www.java.com/en/), then [WSL](https://docs.microsoft.com/en-us/windows/wsl/install-win10), then [Git](https://git-scm.com/download/win), then... about 25 other things.

It goes on and on, and guess what? None of these applications utilize a similar installer, install to a similar location, or even operate similarly in any manner.

And of course, most of them don't even work properly. It took me nearly an entire day did get Ruby working correctly in Windows, and then another day messing with Python and learning to [use it in Windows](https://docs.python.org/3/using/windows.html).

I can't even find a terminal that works somewhat sanely. Powershell is limited, and the bash alternatives are all slow or strangely missing common tools. Forget even trying to get my preferred shell ([fish](https://fishshell.com)) running.

Even doing something as simple as downloading [Visual Studio](https://visualstudio.microsoft.com/) and attempting to compile the [VST3 SDK examples](https://www.steinberg.net/en/company/technologies/vst3.html) didn't work correctly. In fact even Microsoft's own examples for C# and C++ did not work correctly!

And don't even get me started on [chocolatey](https://chocolatey.org/)... even just _installing that_ is a pain.

# Sound

## Multiclient Audio

{::nomarkdown}
<img src="/assets/WinRant/MultiClient.jpg" alt="You can't see it, but Itunes stopped, and won't play, soon as I opened Reaper">
<div class="image-caption">You can't see it, but Itunes stopped, and won't play, stopped soon as I opened Reaper</div>
{:/nomarkdown}

If you spent enough on your audio interface and you don't have to worry about this, but most people running the issue that they cannot play audio through multiple applications at once when using an ASIO application.

That is because many drivers are not what is called "multi-client". That means that the driver is not great in a way that allows multiple applications to access it.

This is _never_ an issue in macOS. Also not an issue with Linux as long as you're using a common setup.

Can you name those 4 albums or artists on the bottom that have visible covers?

## Robustness

{::nomarkdown}
<img src="/assets/WinRant/LatencyMon.png" alt="I have a MONSTER system... can't run Cakewalk at 64 samples though">
<div class="image-caption">I have a MONSTER system... can't run Cakewalk at 64 samples though</div>
{:/nomarkdown}

There is none. Open an application to check an e-mail, slack/discord or whatever. There's a chance you may end up with a parade of crackles in your audio and need to up your buffer size.

No matter where I go there seems to always be something that messes up my DAW audio.

In macOS while writing articles, I'll sometimes have 30+ applications open doing graphics/video/writing/programming and still have a DAW running perfectly in the background at 64 sample-length buffer. I can do the same in Linux without a hitch, and in fact Linux does this _better_.

I can't manage this in Windows on the _same machine_ with the same everything connected, a lean Windows install and nothing open except the absolute necessary processes running. If I open an e-mail app or Chrome, then it's time to bump up the buffer.

Run another DAW at the same time and _everything_ goes to pot. I've had 11 DAWs open at the same time in macOS without a hiccup. I can't even manage 2 in Windows (rewire, hah! Sure, good luck.) I'm sure it is possible, but it will require some digging and testing and configuration deep dives.

## Sample Rates

{::nomarkdown}
<img src="/assets/WinRant/SampleRate.png" alt="Wait... it defaults to 16-bit too">
<div class="image-caption">Wait... it defaults to 16-bit too</div>
{:/nomarkdown}

Changing sample rates requires reopening nearly every single application on the computer. In macOS this is completely unnecessary, when you change sample rates everything updates as you may expect, everything updates. There will be a little pop, a quiet one, but everything still works.

## Device-App attachment

If you change sound devices, open applications won't change. They need to be closed or reset to change devices.

That can be _exceptionally_ annoying.

## ASIO panels

{::nomarkdown}
<img src="/assets/WinRant/ASIO.png" alt="My $1,200 interface has worse configuration than one of my $79 ones... but only in Windows.">
<div class="image-caption">My $1,200 interface has worse configuration than one of my $79 ones... but only in Windows.</div>
{:/nomarkdown}

When needing to adjust audio interface parameters inside of a DAW, Windows applications require you to open an ASIO control panel. None of these control panels work similarly or have a similar design, or even give you access to the same types of parameters.

I switch interfaces relatively often and it can be somewhat annoying to have to switch my expectations of what I can do inside a control panel.

I have also run into situations where changing buffer sizes in the ASIO panel does not actually change the buffer size in the host.

## Performance

There's at least 3 types of drivers in Windows. None of them offer low-latency performance by default. 2 of them are garbage no matter what you do, and ASIO only works if you install a driver.

This is a major issue. In macOS, even the worst audio interfaces will give you usable latency (the default laptop soundcard will even!). Windows users just roll the dice and hope they can get something usable.

Even Linux has this right!

# Files

## No Quicklook in Explorer

{::nomarkdown}
<img src="/assets/WinRant/QuickLook.png" alt="How do you browse these images quickly?">
<div class="image-caption">How do you browse these images quickly?</div>
{:/nomarkdown}

[This is something that can be fixed with an application installation](https://github.com/QL-Win/QuickLook), but why?

QuickLook is functionality that allows you to simply hit the spacebar when browsing files in your file Explorer and instantly see a preview of that file. When looking through images or PDFs or any other document it is incredibly helpful to see a preview instantly to make sure that some weirdly named file is actually what you think it is.

I use QuickLook **A LOT** and I'm not entirely happy with the windows alternative. It's slower and it does not support all the file types that macOS does.

## Filesystem is wonky

{::nomarkdown}
<img src="/assets/WinRant/Settings.png" alt="Let's change some settings..">
<div class="image-caption">Let's change some settings..</div>
{:/nomarkdown}

What happens when you want to change a setting in Windows? You just go to file open it up and change the setting right?

Well no… The setting might be in the registry, or it may be in a binary file hidden somewhere or who knows where it is! There is no place in the operating system where you can be guaranteed to find settings, preferences or other application information. It's the Wild Wild West out there.

At least all applications keep their settings in the same place right? Nope. Well... perhaps they use similar formats? Nein. _Surely_ there's clear documentation on how to find these things RIGHT? Ahahhahahahahahahahah. No.

This is not the problem of the filesystem itself, but the culture surrounding Windows and Microsoft lack of clear documentation regarding where things should be. This has improved in recent years, but there is no incentive for developers to follow any of these guidelines, nor is there an easy way to find these guidelines.

## Program Files (x86)

{::nomarkdown}
<img src="/assets/WinRant/x86.png" alt="WHY WHY WHY WHY do I have so many places for programs to go?">
<div class="image-caption">WHY WHY WHY WHY do I have so many places for programs to go?</div>
{:/nomarkdown}

Need I say more? Your applications are all split up. Program Files, Program Files x86 and now Users\{UserName}\AppData\Local\Programs\ is a thing too.

But don't worry! It's not like any important data is there except an executable. Applications _love_ to scatter files and settings all over your drive.

You may not realize this, but if you're curious then [pick your favorite file monitoring software](https://www.raymond.cc/blog/3-portable-tools-monitor-files-folders-changes/) and pay attention. (or use [ProcMon like I do](https://docs.microsoft.com/en-us/sysinternals/downloads/procmon)) It's ridiculous!

I'm not annoyed that files are being written/read, I'm annoyed at how fractured the logic is to their location. Not even Microsoft's own applications follow a similar logic to where types of data will be stored on the drive.

# GUI

## Consistency

{::nomarkdown}
<img src="/assets/WinRant/Menus.jpg" alt="They're all different!">
<div class="image-caption">They're all different!</div>
{:/nomarkdown}

If you're a Windows user then you have surely noticed that nearly every application has its own menu system, its own style of checkboxes combo boxes sliders etc… How the mouse buttons interact how the window is maximized or not maximized or how anything works is not consistent from application to application.

here is almost no consistency between applications and windows, and that often means that for each application you have to do a major context switching your brain in order to interact with it. Initially learning the software is also an issue too.

This drives me absolutely crazy have to spend mental energy remembering where some option is or how some GUI widget works when ALT tabbing to another application.

(This is a major reason I prefer Safari over Chrome or Firefox on macOS. It's just easier to use when you are used to other applications (most of them) that adhere to macOS design guidelines.)

## Taskbar and Notifications

{::nomarkdown}
<img src="/assets/WinRant/Taskbar.png" alt="Taskbar is a terrible design.">
<div class="image-caption">Taskbar is a terrible design.</div>
{:/nomarkdown}

The taskbar and the notification area are in the same GUI widget, which means that as the notification area grows you get less space to show where apps are. If you use the combined option then you lose track of where specific windows are, and it makes it more difficult to select the appropriate window.

## Alt-Tab

{::nomarkdown}
<img src="/assets/WinRant/AltTab.jpg" alt="Alt Tabbing to disaster">
<div class="image-caption">Alt Tabbing to disaster</div>
{:/nomarkdown}

Regarding the previous point someone may suggest simply using alt tab, which I do.The issue is that there is no inter-app window switching hotkey. In macOS you use `cmd-~`,which will allow you to switch between windows of the selected application.

Windows does not make a distinction between application Windows and applications, so when you use alt–tab you end up switching between every single open window on the operating system. This is both inefficient and frustrating.

It's easy to lose an application window (how often have you had to go searching for that dialog that's locked up your whole app?), and trying to manage multiple applications that have multiple windows is nothing more than a test of the durability of your tab key.

## Menu bar

{::nomarkdown}
<img src="/assets/WinRant/MenuBar.png" alt="Menu Bars are all over the place">
<div class="image-caption">Menu Bars are all over the place</div>
{:/nomarkdown}

I know this is something that bothers Windows users when they moved to macOS, but I strongly feel that this is a thing that macOS got right. macOS has plenty of annoying things, but I strongly feel this is a UX choice they aced.

In macOS menu bars are always at the top of the screen, the menu bar changes depending on which application is currently open. This means that there is a minimal amount of screen space dedicated to menu bars and you always know exactly where the menu bar is going to be located.

I can go to the file menu in almost any application with my eyes closed because it is always in the exact same place on my screen.

In Windows menus are all over the place. They may not even be at the top of the application, and many applications implement their own menu system that is different from others. That might mean that one application has checkboxes and has menus that work one way and another application has checkboxes that work another way and yet another application shows checkboxes but they don't actually do anything. Some applications and windows, including ones from Microsoft itself, don't even have menus, but instead you click something and it opens up a sidebar that has a bunch of options for you.

Some Linux DE's copied this over the years, but it's not fully taken hold yet. It's a bit difficult when many applications draw their own menus instead of doing things right.

## Screenshots

{::nomarkdown}
<img src="/assets/WinRant/Screenshot.jpg" alt="Screenshots of screenshots">
<div class="image-caption">Screenshots of screenshots</div>
{:/nomarkdown}

This is something I learned while writing this post... Taking screenshots is a terrible experience. The best application I found was [ShareX](https://getsharex.com/), and it exposes one of the nastier things about Windows: windows.

If I want to take a screenshot of what looks like a window, sometimes it's not even possible. Microsoft's own explorer isn't just 'a window', it's a bunch of windows stacked on each other. Yes, this is due to how Windows defines programmatic "windows", but as an end-user it's frustrating.

Why do I even need to install a program to take screenshots anyway? Or to take video?

(Anyone that mentions the abomination "Snipping tool" should be drug out into the street and shot. It's like 10 clicks to capture a window and save it to a file. Nonsense.)

## Stuff I don't want

{::nomarkdown}
<img src="/assets/WinRant/StartMenu.png" alt="Why is this here? Why should I have to turn this off?">
<div class="image-caption">Why is this here? Why should I have to turn this off?</div>
{:/nomarkdown}

Windows manages to have both a dearth of useful applications yet still constantly push all these idiotic games and useless pop culture applications upon you with no easy way to get rid of them.

No, I do not want candy crush. No I do not want a news app or a stock thing, and even more so I don't want to spend a ridiculous amount of time trying to figure out how to get off my computer.

In macOS I just drop that to [App Cleaner](https://freemacsoft.net/appcleaner/) and it's gone for good. I do not even need to use that application to get it visually off my system, but app cleaner does a great job of removing all the little bits that may be hidden from view. "Normal" app uninstallation in macOS is as simple as drag and drop, which is still light years ahead of Windows.

Linux is... let's not talk about install/uninstall in Linux environments.

# Things that just don't work right

## Slow down

{::nomarkdown}
<img src="/assets/WinRant/AppUsage.png" alt="Wait... why was Xbox running at all?">
<div class="image-caption">Wait... why was Xbox running at all?</div>
{:/nomarkdown}

I am sure that this is not necessarily something that is inherently the fault of the operating system, however after I have windows open for about four hours it begins to slow down significantly without any signs of a memory leak or a runaway process.

When googling for this I find that this is a very common issue that other people have and that there is a wide variety of solutions that tend to point to Windows components themselves rather than other installed applications.

I reinstalled Windows completely from scratch and did not install any other applications other than the necessary drivers and this was still a persistent issue for me. It seems possible that this is simply a driver application issue, but it is incredibly annoying.

## Cortana

{::nomarkdown}
<img src="/assets/WinRant/Cortana.png" alt="Cortana">
<div class="image-caption">Cortana</div>
{:/nomarkdown}

I greatly dislike the concept of Cortana, but it is incredibly difficult to completely turn off. It is a privacy issue and even when attempting to use it it doesn't work very well at all.

As a comparison, Siri is equally as useless, but I can completely turn it off. Linux doesn't have these annoying jabber-boxes thankfully.

## Deleting files

{::nomarkdown}
<img src="/assets/WinRant/InUSe.png" alt="File is in use...">
<div class="image-caption">File is in use...</div>
{:/nomarkdown}

If an application has a file open, then it is impossible to delete it in Windows _sometimes_. In Linux and macOS this is not an issue in the slightest.

It is even more problematic when there are hidden applications or sub processes that are using a file and you can't manage to delete it without going through task manager and "end tasking" dozens of applications… or just restarting your computer.

# Conclusion... mostly.

I know there's **A LOT** of people that happily use Windows day to day, and they do "fine" (for warped definitions of "fine"). When you start using other operating systems, you quickly learn how things can work and how many things in Windows are more difficult than they need to be.

I use Windows every day. I'm the guy that does tech support for the family (which is Windows of course). I used to sell turn-key DAW systems from the Win XP to Win 7 eras. I'm not a Windows newbie, and more importantly I know how to use an internet search. These aren't just the frustrations of a 'switcher'.

I've not listed everything that I find problematic, but the things that I find problematic in day-to-day computing life. There's other issues that pop up in long term use or when dealing with system administration.

I can't stand Windows. I'm not even particularly happy with macOS or Linux... but they're immeasurably nicer to use than Windows.

# Support Me!

I spent the last 36 hours doing EVERYTHING in Windows, including writing this post and publishing it. If you appreciate the information presented then <a href="/DonateNow/">please consider joining patreon or paying me for my time spent bringing you quality content!</a>

<a href="https://www.patreon.com/bePatron?u=7465992"> <img class="patreon-button" src="/assets/Patreon.png" alt="Be a Patreon!"></a>

<form style="text-align: center;" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick">
<input type="hidden" name="hosted_button_id" value="BR247JAZBTUJJ">
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
</form>

**If you have any questions or comments, please comment below! I read every comment and respond to most.** No registration is necessary to comment, so don't be shy.


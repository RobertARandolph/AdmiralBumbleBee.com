---
layout: ['post', 'reader']
title: PDF and more
comments: true
date:   2020-09-28_18:04:30 
categories: general
tags: ['General']
image: /assets/General/ClampedUp.png
description: Site updates and more.
header: /assets/General/ClampedUp.png
header-caption: Clamping on Edge Banding on a Table
pdf: true
---

This week I've been working on PDFs for every post, which is a request I've received fairly frequently.

I'll explain basically how it works and where you can use it.

This also provides a "Reader" version of each page with no navigation or distractions. I'll try to improve the reader pages over time. These are fully static, not dynamic, so they are easily acquired and displayed through various means.

There's also been a few significant adjustments to then [DAW Chart](/DAW-Chart.html).

<!--more-->


# Contents
{:.no_toc}
* TOC
{:toc}

# Reader

This was step one towards PDFs. I needed to have a styled page generated that has a nice style for reading.

If you click the "Reader" button in the upper right there, by the date, then you will be greated with a nice clean "Reader" version of the page.

# PDF

I've had many requests for PDF versions of pages. I have a tendency to write long-form posts with a lot of information, and it appears that some users enjoy reading these offline.

[Jekyll-pdf](https://github.com/abeMedia/jekyll-pdf) is ancient and I didn't desire to hack away to make it work.

[wkhtmltopdf](https://wkhtmltopdf.org) is an excellent option that converts html to pdf fairly quickly and accurately, but it has problems. The main issue is that it treats all URLs as absolute paths on _your filesystem_. So `/assets/` is treated as if that was the root on your drive.

I tinkered with [dockerizing](https://www.docker.com), but it was **FAR** too slow, and obviously overkill. I had a [chroot](https://en.wikipedia.org/wiki/Chroot)'d setup working, but it was fragile and I would need to distribute a setup script for anyone (including myself!) that wanted to use the site.

I decided the solution was to:

* During build - [generate a list of](https://github.com/admiralbumblebee/AdmiralBumbleBee.com/blob/master/_plugins/jekyll-pdfify.rb) all files with pdf: true in the frontmatter
* Start an HTTP server
* Go through each file and run wkhtmltopdf on the URL, and output to the same source directory of the file. 
* Insert the PDF link when applicable

Currently I have to generate pdfs for **ALL** pages each time. I will need to adjust [the script](https://github.com/admiralbumblebee/AdmiralBumbleBee.com/blob/master/generate-pdfs) to only generate for recently changed files.

I've only enabled PDFs on the [FLStudio Review](/tags/#FLStudio), [Ableton Live Review](/tags/#Ableton+Live) and [Infinistrip Review](/music/2020/06/03/PSP-InfiniStrip-Review.html).

You can e-mail/message me if you want an article as PDF, or add `pdf: true` in a [pull request on the post](https://github.com/admiralbumblebee/AdmiralBumbleBee.com/tree/master/_posts). I have to accept the PR and regenerate the site here.

# [DAW Chart](/DAW-Chart.html)

* Reason removed - Reason Studios appears to be pushing the product as a plugin with a sequencer, rather than as a DAW. I will not be spending further time considering it.
* Reaper
    * [Community Interactions](DAW-Explain.html#community-interactions): +15 (worse) - Reaper forums appear to be becoming more hostile by the month. Either you receive an excellent, detailed response or one of the regulars tries to shout you down for not being part of the cult.
* FLStudio
    * [Fragility](/DAW-Explain.html#fragility): -7 - Further reasearch indicates that FLStudio's fragility is relatively low. 
* Cubase
    * [Simplicity](/DAW-Explain.html#simplicity): +7 - I had the opportunity to see two different neophytes use Cubase for the first time. Cubase is much easier to use for general work than I originally thought.
    * [Community Interactions](DAW-Explain.html#community-interactions): -8 (better) - I've had much better experiences with the Cubase corners of the internet lately.
    * [Preference](/DAW-Explain.html#preference): +10 (worse) - I haven't touched Cubase since Studio One 5 came out.
* Pro Tools 2020.9.1
    * [Local Collaboration](/DAW-Explain.html#local-collaboration): +7 - added support for Live Link.
* Mixbus 6.1 - Version Update
* Studio One
    * [Community Interactions](DAW-Explain.html#community-interactions): +5 (worse) - Asking questions on my private account seems to be increasingly more fraught with poor interactions.
    * [Preference](/DAW-Explain.html#preference): -5 (better) - I've been using Studio One almost exclusively since 5.0 came out. Emotionally there are some high highs, and low lows.
    * [Frustration](/DAW-Explain.html#frustration): -13 (better) - I've become much more in-tune with working in Studio One.

* [Weirdness](/DAW-Explain.html#weirdness-inverted) - All weirdness scores inverted. This allows someone to use subjective weighting with the assumption that they want _not weird_ software.

# [Favourites](/Favourites.html)

* Music Software
    * Added [iReal Pro](https://irealpro.com)
* Guitars
    * Added MTD 534-24.
* Accessories
    * Removed John Pretrucci Jazz III
    * [Blue Chip Jazz 80 Large](https://shop.bluechippick.net/products/Jazz80-LG.html) - You probably think I'm crazy right now. $50 for a pick!?!?!? **IS IT MADE OF GOLD???**. No, it's made of [Vespel](https://www.dupont.com/products/vespel-polyimide.html). The material alone for the pick is worth ~$10-$15, and it's difficult to work to the level of the Blue Chip products.
        * I have difficulty holding a pick due to health issues, and this material is practically magic. I'm able to keep it in my fingers, but it feels glassy smooth on the strings. I've tried 100s of picks and this _is it_ for me. Smooth on the strings, stays in my hand.
            * **NOTE** - I've lost only 1 guitar pick in my life. I still own every single pick I've acquired since I started playing (including many worn to a nub). I'm not at all concerned with losing the pick.
* Pedals
    * Removed [Darkglass Vintage Ultra](https://www.darkglass.com/creations/vintage-ultra-v2/) - I don't use this much anymore. I prefer the preamps on my MTD basses.
* DAW
    * Removed Bitwig - I've become increasingly frustrated with Bitwig's direction and development speed. I no longer view the software with irrationally positive warm feelings. It is still excellent software, but my emotional attachment to it is dissolved.
* EQ
    * Added [SlickEQ](https://www.tokyodawn.net/tdr-vos-slickeq/) - I've used slickEQ nearly exclusively in 2020. It was not a conscious decision. I grabbed it once and have reached for it ever since.
* Delay
    * Removed [Late Replies](https://www.bluecataudio.com/Products/Product_LateReplies/) - Excellent product, but I rarely use it. Too complex for the simple things that I want to achieve.
* Electrically Powered Blades
    * Adjusted Selection to [Freud 10" Think Kerf Rip](https://www.freudtools.com/products/LU87R010)
* Food
    * Removed [Phở](https://en.wikipedia.org/wiki/Pho). I've discovered that [Alliums](https://en.wikipedia.org/wiki/Allium) make my health issues much worse. Eliminating Onion and Garlic from my diet has drastically improved some of my symptoms. Phở broth is heavily infused with onions and I will no longer be eating it.
* Books
    * Added [The Anarchist's Workbenc](https://lostartpress.com/products/the-anarchists-workbench) - It's a woodworking book as much as it is a book about practical decision making and learning from experience.
* Software Development
    * Removed Calva
    * Removed Nim
    * Added [Fira Code](https://github.com/tonsky/FiraCode) - I've been using Fira Code for a while now, and it's only when I move away from it do I realize how much I rely on it. I prefer ligatures as well.

# [Reaper Script Showcase](/ReaperScripts.html)

* Added [LiveBeatRepeater](/ReaperScripts.html#livebeatrepeater---thread)
* Added [MK Slicer](/ReaperScripts.html#mk-slicer---thread)
* Added [MIDI CC Mapper X](/ReaperScripts.html#midi-cc-mapper-x---thread)

# Meta

This post took:

* 42 hours to get the Reader and PDF export working.
* 7 hours to update site stuff.

 If you appreciate the information presented then <a href="/DonateNow/">please consider joining patreon or paying us for the time spent bringing you quality content!</a>

<a href="https://www.patreon.com/bePatron?u=7465992"> <img class="patreon-button" src="/assets/Patreon.png" alt="Be a Patreon!"></a>

<form style="text-align: center;" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick">
<input type="hidden" name="hosted_button_id" value="BR247JAZBTUJJ">
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
</form>

**If you have any questions or comments, please comment below! I read every comment and respond to most.** No registration is necessary to comment, so don't be shy.


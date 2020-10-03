---
layout: ['post', 'reader']
title: PDF and more
comments: true
date:   2020-09-28_18:04:30 
categories: general
tags: ['General']
image:
description:
header:
header-caption:
pdf: true
---

This week I've been working on PDFs for every post, which is a request I've received fairly frequently.

I'll explain basically how it works and where you can use it.

This also provides a "Reader" version of each page with no navigation or distractions. I'll try to improve the reader pages over time. These are fully static, not dynamic, so they are easily acquired and displayed through various means.

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

# Meta

This post took:

* XX hours to do
* YY hours to do

 If you appreciate the information presented then <a href="/DonateNow/">please consider joining patreon or paying us for the time spent bringing you quality content!</a>

<a href="https://www.patreon.com/bePatron?u=7465992"> <img class="patreon-button" src="/assets/Patreon.png" alt="Be a Patreon!"></a>

<form style="text-align: center;" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick">
<input type="hidden" name="hosted_button_id" value="BR247JAZBTUJJ">
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
</form>

**If you have any questions or comments, please comment below! I read every comment and respond to most.** No registration is necessary to comment, so don't be shy.


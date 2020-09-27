---
id: 435
title: Counterfeit Arduino nano fix(es)!
date: 2014-12-15 20:44:37 -05:00
author: Robert
layout: post
comments: true
categories: Programming
tags: Electronics Tutorial Programming
---
Are you having trouble with your SainSmart, TinkerVault, Hossen, RioRand or whatever Arduino Nano not connecting? That sucks.

You have been a victim of FTDI&#8217;s idiotic policies. Read more about it here [hackaday](http://hackaday.com/2014/10/22/watch-that-windows-update-ftdi-drivers-are-killing-fake-chips/). They essentially set the PID on your Arduino to 0000, and it will no longer be recognized.

So now your Nano won&#8217;t connect to windows. It&#8217;s not recognized by the Arduino IDE. It doesn&#8217;t show up in your OS&#8217;s device enumeration facilities.

First thing you need to do is UNINSTALL the FTDI drivers in windows. NOW. Do not install them again. When we&#8217;re done, windows will automatically find non-bricking drivers that you can use, or you will use modified drivers. FTDI pulled the &#8216;bricking drivers&#8217; from windows, so the automatically found drivers will not reset your PID. Just don&#8217;t install the latest drivers from FTDI unless you want to be reminded that you were scammed into buying a counterfeit product.

Easiest thing to do is install the drivers here: [at reddit](http://www.reddit.com/r/arduino/comments/2k0i7x/watch_that_windows_update_ftdi_drivers_are/clhdmdg).This allows Arduinos with 0000 PIDs to operate correctly. If you switch between OS X and/or Linux, then this isn&#8217;t enough. Your Arduino is still soft-bricked. You will need to fix the PID in order to use it in another OS.

If you have access to linux then just follow the directions [here](http://www.minipwner.com/index.php/unbrickftdi000).

If you&#8217;re using windows then download FT_PROG from [FTDI SUCKS](http://www.ftdichip.com/Support/Utilities.htm). Install it. Run it. Scan and Parse. Find where you can edit the PID (Product ID), somewhere under USB\_Device\_Descriptor. It will be listed as 0000. That is why your Nano is broken. Change it to 6001. Click program. Your Nano is probably fixed now and will work in OS X or linux.

If you are getting the &#8220;avrdude: ser_recv(): programmer is not responding error.&#8221; error, then you can try the reset trick listed at [stackoverflow](http://stackoverflow.com/questions/19765037/arduino-sketch-upload-issue-avrdude-stk500-recv-programmer-is-not-respondi). That never worked for me, so I had to reburn the bootloader using another Arduino. Follow the directions [here](http://sysexit.wordpress.com/2013/02/07/burning-a-bootloader-to-an-arduino-nano-using-another-arduino/) or more advanced at [this place](http://letsmakerobots.com/content/make-arduino-isp-programmer).

&nbsp;

Update: Amazon refunded the money for all my counterfeit TinkerVault Nanos even outside of the return time. Good going Amazon! (and thanks to &#8216;Calvin&#8217; from the India call center for his fast, polite and efficient help).







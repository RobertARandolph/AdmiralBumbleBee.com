---
layout: post
title: Transfer mouse DPI/CPI settings to a different resolution device
comments: true
date:   2017-12-08_14:21:24 
categories: general
tags: ['Tutorial', 'Programming', 'General']
image: /assets/Random/Maths.gif
description: Transfer your mouse settings accurately across computers with different size/resolution screens
---

{::nomarkdown}
  <img src="/assets/Random/Calculator.png" alt="Calculator">
  <div class="image-caption">The Real calculator is later in the post</div>
{:/nomarkdown}

Do you have multiple computers, and use multiple mice? Then surely you've experienced the frustration of moving between the computers and the cursor movement feeling different. This really annoys me, and maybe it annoys you.

I've written a little calculator to help you translate your mouse cursor movement between devices and I explain how/why it works.

This is a wall-of-text with minimal pictures, but it's worth reading if you care about your computer workflow.

<!--more-->

# Contents
{:.no_toc}
* TOC
{:toc}

# Pre-requisite information

There are 2 modes of cursor control:

* Accelerated control - the speed of the mouse controls the movement of the cursor
* Ratio control - (often called 1:1, but it can be any other ratio). The physical distance the mouse moves translates to an exact number of on-screen pixels that the cursor moves.

With accelerated mouse movement, this entire post is worthless. In order for a direct mapping of cursor behaviour to happen across systems, then we need to eliminate variables. The primary variable to eliminate is the speed of the mouse movement. This leaves us with a reliable mapping of mouse-output to cursor-behaviour.

With this direct correlation between mouse movement and cursor movement, we can adjust either variable to yield a new relationship between the mouse moving and the cursor moving. **IDEALLY** we want to change how the mouse reports movement. To understand why we need to change the mouse instead, you need some more information...

## DPI? NO! Cpi.

Often mouse 'speed' or 'precision' (ugh!) is reported in a measurement called "DPI". This is misnomer, but it sorta makes sense.

Mice actually output something called a 'count'. A count is a set of values that look like `(1, 1, -1, -1, 1, 1, ...)` ideally. This tells the operating system (after passing through the drivers) to move the cursor by those values. What is happening under the hood is that the mouse takes an image of the surface it is resting on, and compares it with the last image taken. Then it outputs data saying "We've _shifted_ in this direction by _this much_". 

Most decent mice (often marketed as 'gaming mice') allow you to change the DPI or CPI. This value tells you that if you move the mouse 1-inch in some directly, it will output a total of CPI-value counts with that vector. If my mouse is set to 800cpi, and I move it 1-inch to the right, the driver will receive a total of 800 counts of movement in that direction. If your settings or correct, the mouse will move 800 pixels in that direction.

## CPI is better than mouse scaling

We know now that CPI (dpi?) is how we control many many counts the mouse outputs for 1-inch of physical movement. This is a value that you set on the mouse, or in the mouse's drivers.

But you say, "I can just change my cursor speed in my operating system's settings!". You are right, and _shame on you for it_.

Operating system based mouse scaling simply multiplies the counts by a factor. So if you have your OS scaling set to 2x, then your counts are all multiplied by 2. A count of 1 because 2. A count of -1 becomes -2.

Perhaps you've realized already that this is an issue? That means that it's impossible to move your cursor by 1 pixel! It will always move in 2 pixel increments. An even worse scenario happens if you use scaling factor that isn't a whole number. There's no subpixels on your display that are used for cursor movement, so a value of 1.5x causes the cursor to skip a pixel for every other movement. (1, 1, 1, 1) becomes (2, 1, 2, 1). That's even more imprecise and unpredictable.

**DO NOT SCALE YOUR MOUSE BY THE OS SETTINGS**

At least don't do that if you care about [precision and accuracy](https://en.wikipedia.org/wiki/Accuracy_and_precision).

## A quick note about hz

Mice are usually USB devices. This means that they are subject to a polling rate. Every (1/polling rate)-milliseconds the device is asked for information.

If the polling happens slowly then your mouse will build up counts. It may have 1+ counts of movement before it can communicate that. That ends up coming out looking something like `(5, 6, 2, 1, 5, 6)` instead of `(1, 1, -1, -1, 1, 1, ...)` etc...

The issue here is that if you make multiple quick small movements, such as correcting the trajectory of your cursor as you move it, the counts reported may not accurately reflect the physical movement of the mouse. However, if the mouse could transfer that information faster, then the OS could update the cursor movement using those more frequent smaller value counts.

This is where the 'hz' setting on some mice come in. If your mouse supports it, it's almost always best to use a higher polling rate, 500hz or higher. This setting _very slightly_ improves the responsiveness of the mouse, but there are times where it can be noticeable.

## Correction and more

Some mice offer things like path correction. Turn it off. Open up some paint application and draw the straightest line you can. If you can draw a perfectly straight line freehand then your mouse is garbage, or you have the drivers setup in a way that minimizes [precision and accuracy](https://en.wikipedia.org/wiki/Accuracy_and_precision). 

In mice with low-quality sensors, the firmware applies a low-pass filter (or other noise-reducing DSP) to the output. The result is fewer high-frequency small movements. Some mice outright apply path correction which attempts to make it easier to draw straight lines.

MAny low-quality office/desktop mic do this. Avoid them at all cost. It adds to the unpredictability of the output even more.

# I GOT IT! So what is the actual problem?

The actual problem is that screen size, and screen resolution affect how much the cursor moves. Let's take an example here.

* If I have a screen with a 23" width and a 1000 pixel width. My mouse is set to 1000cpi. If I move my mouse 1-inch, then my cursor will go from the left side of the screen to the right side of the screen perfectly. 1-inch of mouse movement == 23" of cursor movement.

* If I have a screen with a 17" width and a 1000 pixel width. My mouse is set to 1000cpi. If I move my mouse 1-inch, then my cursor will go from the left side of the screen to the right side of the screen perfectly. 1-inch of mouse movement == 17" of cursor movement.

**Exact same resolution. Exact same CPI. The 17"-wide screen's setup moves the cursor 59% more for the same physical mouse movement!** That feels pretty awful if you switch between computers frequently.

The ideal setup would be so that the 2 computer's cursor move the same physical distance as a ratio of the mouse's physical movement. They should have the exact same physical ballistics. **If moving the mouse 1" moves the cursor 10", then that should happen on another computer.**

## Video games?

None of this matters for most video games, especially FPS/Third-person. Video games usually take direct mouse info (counts) from OGL/DX/etc.. and apply them directly to whatever cursor or camera control method is being used.

First-person shooters map CPI to rotation. This means that if your settings are setup so that 1600cpi causes your character to do a 360° rotation, that will happen on any system. Screen size or resolution is irrelevant.

This is why gamers usually refer to their mouse settings as `cm/360°`. With zero acceleration, no path correction and a high-grade sensor, physical mouse distance relates directly, proportional to the CPI, to the distance the mouse moves to make the character do a full 360° turn. This is a constant value that does not change depending on screen size or resolution!

However, on the desktop, we still are bound by screen size and resolution.

# Solution!

The solution is fairly simple. First you need a computer setup with known mouse CPI, monitor size and resolution. Then you need your destination computer's monitor size and resolution.

![Imhotep is invisible](/assets/Random/Maths.gif)

* sourcecpi = the source computer's mouse dpi
* sourcex = the source computer's horizontal resolution
* sourcey = the source computer's vertical resolution
* sourcediag = the diagonal screen measurement, in inches.
* destx = the destination computer's horizontal resolution
* desty = the destination computer's vertical resolution
* destdiag = the destination screen measurement, in inches.

## Calculator

Please fill out all values.

Screen 1 - <input id="cpi1"> Mouse CPI/DPI

Screen 1 - <input id="inch1"> Monitor size (inches)

Screen 2 - <input id="inch2"> Monitor size (inches)

Screen 1 - <input id="res1x"> by <input id="res1y"> pixel resolution

Screen 2 - <input id="res2x"> by <input id="res2y"> pixel resolution


<button type="button" onclick="calc_transfer()">Submit</button>

<p id="error"></p>
<p id="result" style="color:red;font-weight:bold;"></p>
<p id="resultround"></p>

<script>
function calc_transfer() {
    var i;

	var vals = ["cpi1", "inch1", "inch2", "res1x", "res1y", "res2x", "res2y"];

	var descriptions = ["Source Mouse CPI/DPI", "Source Monitor size", "Destination Monitor size", "Source resolution X", "Source Resolution Y", "Destination Resolution X", "Destination Resolution Y"];

	var check_vals_results = new Array(vals.length);

	document.getElementById("error").innerHTML = "";

	for (i = 0; i < vals.length; i++) {
	    check_vals_results[i] = check_nan(document.getElementById(vals[i]).value);

		if (check_vals_results[i] === 0) {
			if (document.getElementById("error").innerHTML === "") {
				document.getElementById("error").innerHTML = "Please fill out the following: " + descriptions[i];
			} else {
				document.getElementById("error").innerHTML += ",  " + descriptions[i];
			}
		}
	}

	if (document.getElementById("error").innerHTML === "") {
		var diag1 = Math.sqrt(Math.pow(check_vals_results[3], 2) + Math.pow(check_vals_results[4], 2));
		var diag2 = Math.sqrt(Math.pow(check_vals_results[5], 2) + Math.pow(check_vals_results[6], 2));
		var cpi1 = check_vals_results[0];
		var inch1 = check_vals_results[1];
		var inch2 = check_vals_results[2];
		var target = diag2 / ((diag1 / cpi1) * (inch2 / inch1));

		document.getElementById("result").innerHTML =  "Target CPI setting precise: " + target;
		document.getElementById("resultround").innerHTML =  "Target CPI setting rounded: " + Math.round(target);
	}
}

function check_nan(x) {
    if (isNaN(x) || x === "") {
        return 0;
    } else {
        return x;
    }
}
</script>

# OS Notes

Different operating systems work slightly differently.

## macOS

Macs. I love them, but mousing on them is ridiculous by default. I've [discussed the issues with acceleration before]({% post_url 2016-12-30-Better-mouse-usage-through-anchoring %}#explanation), but I'm going to do it again here.

### Mouse acceleration

There is a snafu here. Depending on how your mouse movements are mapped to the cursor movement, you may need to move the mouse a different distance for the same cursor difference. This can be caused by something called mouse acceleration.

Mouse acceleration causes the cursor to respond to the speed at which the mouse is moving rather than the distance the mouse is moved. With mouse acceleration on, moving the mouse a physical 10cm the cursor can traverse either 10px or 10000px on screen! The cursor responds to the _speed_ at which the mouse moves with mouse acceleration turned on, so in order to move the cursor 100px you must always move the mouse at the same speed. Humans are very bad at this.

The alternative is to turn off mouse acceleration. This will cause the physical mouse movement to have a 1:1 mapping to the cursor movement. E.g. moving the mouse 10cm will always move the cursor 1000px no matter how fast or slow you move it. __This is the ideal setup for a mouse__ unless you have some disability that inhibits accurate mouse movement.

With mouse acceleration _off_, the distance from 1 to C in the graphic is a fixed physical distance. To use control C the mouse will always move in the same direction and the same distance _at any speed_. __This means that it is possible to target a control without any visual interaction at all!__. Moving the mouse to the control, with a small amount of practice can be done purely based on muscle memory with no visual or mental labour!

To turn off mouse acceleration depends on your OS. For OS X users, [I wrote a solution myself](http://www.teamliquid.net/forum/tech-support/194668-mac-mouse-woes-be-gone). You can also try the Steelseries Exactmouse product (I can't link to it).

### Retina

You should not need to change anything for retina devices. The cursor movement is naturally scaled by 2 (currently). Yes, this does skip pixels, but with the very high pixel density it's not the biggest issue... so they say.

## Windows

{::nomarkdown}
  <img src="/assets/Random/WindowsPrecision.png" alt="Windows setup">
  <div class="image-caption">Windows setup</div>
{:/nomarkdown}

Windows is easy to setup. Turn off "Enhance pointer precision". Set the slider to "6".

Install your mouse drivers and make sure any path correction or acceleration is turned OFF. Set any speed settings without a dpi/cpi label to medium.

That's it. You're done.

### HDPI

With Windows HDPI screens, you should not need to change anything if you have everything scaled to a 100%. Any further scaling requires that you adjust the destination CPI by that value as necessary.

## Linux

I have no idea how stuff works on Linux for mice. Anyone want to enlighten me? I would assume it's necessary to have a device with on-board CPI changing, and [the information found here](https://wiki.archlinux.org/index.php/Mouse_acceleration) 

Do you guys even use mice? I thought you just typed on [Model M's](https://en.wikipedia.org/wiki/Model_M_keyboard) in front of an old monochrome CRTs still. ;) (I'm joking, I type on a Model M!)

# Which mouse do I buy?

Anything with driver-based or on-board DPI/CPI adjustment. Most any brand-name gaming mouse will work great. They are usually worth the price. Just make sure you can adjust the DPI/CPI. If you are unsure then read the product's manual. You can also google "Product drivers" (where product is the name of the product), and then click the 'images' tag on google.

# Conclusion

The chances that this helps anyone is very low I'm sure, but this is a topic that I'm passionate about. I couldn't find any information about this topic specifically anywhere online so I thought it was time that I did something about it.

If you found this interesting or useful, please let me know!

# Support Me!

This post took 6 hours to research, write and edit. If you appreciate the information presented then <a href="/DonateNow/">please consider joining patreon or donating!</a>








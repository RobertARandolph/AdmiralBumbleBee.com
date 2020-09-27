---
layout: post
title: Better mouse usage through anchoring
comments: true
date:   2016-12-30_14:01:40 
categories: Rant
tags: ['Rant', 'Tutorial']
---

{::nomarkdown}
  <img src="/assets/Random/MouseAnchor.png" alt="Mouse Anchor">
  <div class="image-caption">Mouse Anchoring</div>
{:/nomarkdown}

The act of using a mouse to control a cursor is inherently an __inefficient__ UI paradigm. Luckily there are a few things you can do to reduce both the physical and mental loads that mousing puts upon you.

One of these is "Mouse Anchoring"

<!--more-->

# Contents
{:.no_toc}
* TOC
{:toc}

# Explanation

To use a mouse to control a cursor there are a number of things that happen. You may not be aware that you do these things, but they do happen.

* Visually locate the cursor
* Sometimes move the cursor to locate it
* Visually locate the target
* Move the mouse
* Visually locate the cursor again
* Locate the target
* Repeat the last 2 steps until the cursor and the target overlap

Most of these steps are not necessary and you can trade the visual/mental burden of cursor tracking for a much easier physical action. This action is what I call 'Mouse Anchoring'.

In the graphic above cursors 2,3 and 4 represent arbitrary cursor locations. The cursor may be at any one of those positions depending on the last thing you did. As they are arbitrary locations, they carry with them arbitrary distances from a target control. Thusly in order to overlap the cursor with the target, you must go through the visual location cycle.

On a normal single screen though, there are exactly 4 cursor bounding locations that maintain the same distance from a statically placed control: the corners. The cursor can be placed in the corner with a single inaccurate movement since a corner provides 2 bounded edges. With the cursor placed in the corner it is no longer necessary to visually locate the cursor before or during movement to the target.

There is a snafu here. Depending on how your mouse movements are mapped to the cursor movement, you may need to move the mouse a different distance for the same cursor difference. This can be caused by something called mouse acceleration.

Mouse acceleration causes the cursor to respond to the speed at which the mouse is moving rather than the distance the mouse is moved. With mouse acceleration on, moving the mouse a physical 10cm the cursor can traverse either 10px or 10000px on screen! The cursor responds to the _speed_ at which the mouse moves with mouse acceleration turned on, so in order to move the cursor 100px you must always move the mouse at the same speed. Humans are very bad at this.

The alternative is to turn off mouse acceleration. This will cause the physical mouse movement to have a 1:1 mapping to the cursor movement. E.g. moving the mouse 10cm will always move the cursor 1000px no matter how fast or slow you move it. __This is the ideal setup for a mouse__ unless you have some disability that inhibits accurate mouse movement.

With mouse acceleration _off_, the distance from 1 to C in the graphic is a fixed physical distance. To use control C the mouse will always move in the same direction and the same distance _at any speed_. __This means that it is possible to target a control without any visual interaction at all!__. Moving the mouse to the control, with a small amount of practice can be done purely based on muscle memory with no visual or mental labour!

To turn off mouse acceleration depends on your OS. For OS X users, [I wrote a solution myself](http://www.teamliquid.net/forum/tech-support/194668-mac-mouse-woes-be-gone). For Linux and Windows users just use google.

# But but... but?

Surely you see some issues with this. You must move the mouse to the corner after every mouse movement, and as the cursor movement is bounded you may end up with your mouse slowly edging off your mouse pad (the mouse can move, but the cursor won't... so you'll creep in that direction with the mouse).

The solution to this is to have a bounding box on your mousepad itself. Contrary to the graphic, I use the upper-left corner for anchoring. The top and left side of my mouspad are blocked by my typing keyboard and my electric piano. This allows me to throw my mouse in to the upper-left corner, which also places my cursor in the upper left corner. From this point my mousepad now offers a 1:1 mapping of my screen. Every control on the screen is placed the same physical distance form the mouse starting point as it is from the cursor starting point.

If I move my mouse to a specific place on my mousepad from the physical anchor, it always corresponds to the same cursor location on screen.

This is why I call it '_Mouse_ Anchoring' and not 'Cursor Anchoring'.

# Conclusion

Despite a slight physical load increase, mouse anchoring reduces cognitive load significantly. Operating controls can occur while viewing other things on or off screen. This technique also encourages the user to maintain a clean desktop environment.

While I am not a fan of the mouse/cursor (1:1 Keyboard mapped UIs are _far_ superior for total efficiency), this is one of a few things that you can do to give yourself a greater deal of accuracy and control over your computing environment while simultaneously reducing cognitive load.






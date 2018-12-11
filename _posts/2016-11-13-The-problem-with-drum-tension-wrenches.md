---
layout: post
title: The problem with drum torque wrenches
comments: true
date:   2016-11-13_12:46:07 
categories: music
tags: ['Drums', 'Repair', 'Testing']
---

[![Evan's Torque thingie](/assets/TorqueDrum/Thumbnails/Evans.jpg)](/assets/TorqueDrum/Evans.jpg)

I have an [Evans Torque Key](http://daddario.com/EvProductDetail.Page?ActiveID=3567&productid=448&productname=Torque_Key&sid=4ffafe7e-f537-4d66-ac5e-b34e5a458468) that I've been testing for a couple months for attempting to quickly maintain drum tuning. While the actual product itself is great, the concept that it is based on is fundamentally flawed.

I'm going to cover both the product and the issues that underlie its failure as a product.

<!--more-->

# Contents
{:.no_toc}
* TOC
{:toc}

# Basic Principles

The [Evans Torque Key](http://daddario.com/EvProductDetail.Page?ActiveID=3567&productid=448&productname=Torque_Key&sid=4ffafe7e-f537-4d66-ac5e-b34e5a458468) is a very simple product.

![Evans Torque Wrench](/assets/TorqueDrum/TorqueWrench.png)

To use the wrench, you simply place the wrench on the tuning rod and turn while _only_ holding the black part.

In the above drawing, the grey part is a solid piece. The black portion rotates on the grey shaft _mostly_ freely and only in one directly. Looking from the top of the drawing, the black portion will only turn clockwise.

The red section is a screw going through the silver. The screw terminates in a hardened bushing. The blue part is a bearing that is fixed in to the black.

While in the neutral position, as you tighten the red screw, it causes the bearing to be set in to the bushing. This creates friction when attempting to turn the black part. As you hold the black portion and turn, eventually the torque of the tuning rod will overcome the friction of the bearing-bushing (red/blue) joint and they will separate.

Since you can adjust the amount of force between the bearing-bushing joint by adjusting the red screw, you can control how much torque occurs before that joint breaks. The bottom of the red screw has numbering and an index, and the turning is detented. This allows you to set torque values relatively accurately.

To work on another tuning rod, you must manually snap the bearing-bushing joint back together and repeat the process.

# Product Review

The [Evans Torque Key](http://daddario.com/EvProductDetail.Page?ActiveID=3567&productid=448&productname=Torque_Key&sid=4ffafe7e-f537-4d66-ac5e-b34e5a458468) as a product itself is wonderful. The torque values are repeatable __in ideal circumstances__ (this is important!). It's solidly built and will take a severe beating.

As a simple drum key it is an improvement over what most drummers seem to use. The handle is large. The socket fits various tuning rod types from vintage to modern drums. There is a knurled top that allows you to _correctly_ set your drums to finger tight (never use your fingers for this!). Mine appears to have a magnetic insert which is very handy.

Outside of the flawed premise of the product, there is another issue. Even though there's 4 'clicks' between values, on something like a 10" drum, each click (0.25 of a whole number on the dial) is more than a single whole tone at some points. For instance it's impossible to go from a low G# to an A on my 12" rack tom using the torque wrench. Using the absolute ideal procedure (that I outline later), will all rods equally torqued the head sounds from a G# at click 3 to a slightly sharp A3 at click 3.25. That kinda sucks. There's no way to access interim values and you're basically stuck with that.

Since pitch values are exponential, it also requires an exponential amount of torque (divided by the rods used) to move between values. The torque wrench values are linearly mapped though. That means that while 3.0-3.25 jumps over a whole tone, 9-10 only changes the drum by a few cents! There's no good way to intuitively process what is about to happen to the drum based upon the dial values.

As a product, if using torque to tune drums was a reasonable proposition, this would be a decent option.

Unfortunately...

# The problem to start

Let's first talk about what torque is. Not the mathematical super serious idea of what torque is, what what it means to us _in this context_. Torque in this context is the amount of force required to turn a screw. You've certainly experienced a screw feeling tighter and more difficult to turn as you turn it in to something. That force required is torque.

Using torque as a measurement for fasteners works quite well. However, this presupposes that you have a few things (more than I will list in fact): linear friction on the thread, relatively non-elastic mating surfaces, a consideration for fastener failure and the desired preload. With drums, you have none of these things.

* Linear friction: It is possible to achieve linear friction across the thread of a tuning rod through carefully maintenance and lubrication. Unfortunately nobody does that. Every drum I've seen has a combination of dirt, corrosion, wood bits and years of cruft in the tuning rod and bolt. Just look at the header image on this post. I have scheduled cleaning of that drum every 6 weeks and it's still all mungy.

* Non-elastic mating surfaces: When torquing a bolt to mate two surfaces, the torque value depends on the elasticity of the surfaces. Take for instance the act of mating two surfaces with a rubber gasket between them. The fastener torque is relative to the elastic properties of the gasket, _not_ to the properties of the bolt as it is with relatively inelastic materials. A drum is basically a gasketed joint with the hoop and drum sandwiching the head as a gasket. The necessary torque for a given linear force depends on the position, condition, material and pre-loading of the head.

* Consideration of fastener failure: Torque values for various fasteners are normally given as a value that gives sufficient pre-load before the yield point of the fastener. With drums, as we have a gasket, this is not a consideration. The gasket (head) will always fail before the fastener will. We are applying force to compress a gasket, not to load a bolt.

* Preload: The goal of tuning a drum is not a desired compressive value (preload). The goal is a specific pitch, which requires a number of factors to be harmoniously in action including compressive force. 

# The problem in action.

![The drum as it is](/assets/TorqueDrum/DrumIdeal.png)

In the above image we have a picture of a __potential__ example of a well-tuned drum. Each point of tension across the hoop has the head at an even amount of tension. The rim of the head is parallel to the bearing edge of the drum, and each tuning rod is equally torqued.

This will almost never happen for a variety of reasons:

* Head Wear: From various trauma such as: stick strikes, travel stress, repeated tunings, uneven exposure to the elements etc... the drumhead will not require an even amount of force at each tuning point to reach the same level of tension.

* Tuning Rod friction: You know it. Your tuning rods and lugs are never clean. Some are squeeky clean, some have a bit of corrosion, and some require king kong to twist in to submission. Go look up 'dry/lube torque values' or something on google. For __the same preload__ a lubricated thread will require less torque. This means that hoop compression on the head is greatly influenced by the friction on the tuning rod, not just the torque applied to it.

* Head setting: There's no guarantee that the head was set on the drum properly to begin with.

* Tuning sequence: There's no guarantee that a specific force was _evenly_ applied to the whole head at a time. 

Head setting and Tuning sequence are really big factors.


![The drum as it is](/assets/TorqueDrum/DrumMessed.png)

Let's take a look at this drum now.

This is a drum with all tuning rods having an equal amount of torque applied. The problem being that one single tuning rod (D) was brought to a given torque first. The torque was achieved by the uneven deformation of the head and the lever action of A/B. (With C being something like a fulcrum and B offering a stop, unless C isn't sufficiently low, then C is the stop. Or if B and C are sufficiently high, then A will be brought to a given torque without ever turning it!)

After D was brought to torque, A was already under a good deal of load. The required force to bring A to a given torque value results in a relatively small amount of rotation compared to what was done to D to bring it to a given torque value.

As this process is repeated around the drum, the problem is compounded as the head deforms in response to the forces generated. Some of the deformations will slip and cause the preload of the complementary side of the head to relax. Some of the deformations on the head will be permanent. Some of the deformations will be on the drum shell, and some on the drum head.

This set of problems is compounded by the type of hoop used. 

* Die-cast hoops: These do not deform easily. With the above example, it is entirely possible to have portions of the hoop applying no force to a head at certain spots. See lug B in the example. The head is already loose at the hoop at this point, however the hoop itself will provide enough stiffness to allow the same torque on B as A and D. This is despite B having almost no influence on the head itself. In order for B and C to apply sufficient force on the head-rim to tension the head, the hoop of the drum will need to deform. That requires rather a lot of force with a die-cast hoop.

* X-Flange hoop: Flanged hoops deform more readily than die-cast hoops. As such if the torque of A and D is of a value that will allow B and C to apply sufficient force to bend the hoop, then it is possible to achieve tuning rod settings that are applying (unequal!) force on the head at all points. This results in major dead spots, inharmonic ringing and greatly reduced head life.

* Wood hoops: Wood hoops do not readily deform along the Y axis relative to the drum. They will warp though. In the above illustrated situation, applying torque to tuning rod B will likely cause the wood hoop to either twist in or outward. This behaviour reduces the life of the hoop, looks ugly, changes the compressive force around the hoop as the deformation propagates, and has all the same issues as flanged hoops regarding the head. Wood hoops can also deform and start to slip off the edge of the head-rim, which can cause unexpected 'bubbles' in the head under tension. I believe this is a common cause of head breakage on wood-hooped drums. 

# But...

The previous section was a pretty radical example. Even though it's only a 1° bend across the entire drum, it's extreme.

However, even a very minor difference in initial torque will propagate through the head as the drum is tuned. It's very easy to experience this yourself. Simply take a drum, record it. Have a friend randomly detune all but 1 tuning rod. Attempt to retune the drum to the exact same sound across the head without touching that single un-touched tuning rod. Have fun. No really... have fun.

# Hey you dick. You cut me off..

Sure. You can tune a drum very well with a torque wrench.

All you have to do is

* Very carefully set the head 
* Lubricate all the rods thoroughly, otherwise the compressive force is a ratio of friction>0:torque. You need friction minimized as much as possible for torque to correlated near-directly to compressive force.
* Pre-tighten all the tuning rods to a fixed value
* Re-set the head 
* Turn each rod to a very low torque-value
* Tap and listen to make sure even _head tension_ is applied (not torque!)
* Repeat all the above steps at increasingly high torque values until the desired value is reached.
* Now since you lubricated your tuning rods, they'll come loose easily due to the resonant nature of the drum (it's a shaking machine!). So you have to apply [something like this](http://www.gaugerpercussion.com/lockerztrade-tension-rod-locks.html). Those things have their own problems as well.

Easy? I guess? The whole time you are required to check the assembly by eye and by ear. If you're already checking by ear, aren't you just tuning the drum like we have for 1000s of years already?

That's not all though! When you want to touch-up a drum, you have to carefully make sure:

* The head hasn't shifted, which would require starting over
* The hoop hasn't shifted, start over if it has
* No dead spots have developed, if so start over
* No rods have came very loose, if so... do not pass go, do not collect $200.
* Drum got dirty? Wet? Played outside? Live in Florida? Remove all tuning rods and lubricate. Start over.

Then maybe you can just tweak that rod or two to a specific torque value. Maybe. Go with the previous example. Take a well-tuned, but used, drum that has all but 1 (or even 2) rods detuned randomly and see if you can bring it back to its previous state with a torque wrench. It's not possible.

# Conclusion

Torque wrenches for drums are cool ideas. Unfortunately, torque is a red herring when it comes to tuning drums. It's possible to have perfect torque values on every tuning rod and an awful sounding drum. Likewise (as most drummers know), it's possible to have wildly different torque values across the tuning rods and have an amazing sounding drum. In fact, it's _common_.

Torque wrenches for drums just give an illusion of 'sound recall'. If we could guarantee a number of variables at a specific state, the wrenches could live up to this promise. We can not make those guarantees. At best we can carefully monitor the process as we tune the drum, but at that point we are simply going through the common tuning process and no longer require the specialized tuning wrench.

That's not to say that all drum tuning devices and aides are rubbish. [There's some out there based on sound science](http://circularscience.com) that are definitely worth considering. Maybe we'll cover that again another time ;)

# Support me!

If you appreciate the information presented then <a href="/DonateNow/">please consider joining patreon or donating!</a>

<a href="https://www.patreon.com/bePatron?u=7465992"> <img class="patreon-button" src="/assets/Patreon.png" alt="Be a Patreon!"></a>

<form style="text-align: center;" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick">
<input type="hidden" name="hosted_button_id" value="BR247JAZBTUJJ">
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
</form>

If you have any questions or comments, please comment below! I read every comment and respond to most.
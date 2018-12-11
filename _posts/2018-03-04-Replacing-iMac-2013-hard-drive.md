---
layout: post
title: Replacing a 2013-2017 iMac hard drive
comments: true
date:   2018-03-04_14:08:16 
categories: random
tags: ['Tutorial', 'General', 'Electronics']
image: /assets/iMacDrive/Video.jpg
description: Upgrading an iMac to a solid state drive.
---

{::nomarkdown}
<video poster="/assets/iMacDrive/Video.jpg" controls muted preload="none">
<source src="/assets/iMacDrive/Video.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
<div class="video-caption">Time Lapse Video (press play)</div>
{:/nomarkdown}


I usually try to avoid duplicating information that you can easily find online other places. I want my website to be full of relatively _unique_ content. This week I needed to change the hard drive in my iMac because it was failing and I wanted something better. [You can find out](https://www.ifixit.com/Guide/iMac+Intel+27-Inch+EMC+2309+and+2374+Hard+Drive+Replacement/1634) how [to do this](https://9to5mac.com/2015/02/13/how-to-swap-imac-hard-drive-for-ssd/) in [a number of places](https://www.youtube.com/watch?v=3w6E2_XqaBw), so I'm not really bringing in groundbreaking content here.

I am doing the [30 days with Waveform]({% post_url 2018-02-28-30-days-with-Tracktion-Waveform-9 %}) right now though, and I've been unable to progress on this review due to the large number of studio changes and the necessity to upgrade my main studio system.

Rather than having no posts for 7-8 days while I try to catch up, I've decided to show how I went about the process of changing my iMac's 1tb [Seagate Barracude](https://en.wikipedia.org/wiki/Seagate_Barracuda) to a [1tb Samsung EVO 850](http://www.samsung.com/semiconductor/minisite/ssd/product/consumer/850evo/) [Solid State Drive](https://en.wikipedia.org/wiki/Seagate_Barracuda).

This is also a great citation if you're a non-Mac person and want to show people why macs are awful. Likewise it's a great post if you're a mac user and want to suffer along with me.

Let's get on with it.

<!--more-->

# Contents
{:.no_toc}
* TOC
{:toc}

# Prepare

{::nomarkdown}
<img src="/assets/iMacDrive/Restore.png" alt="Restoring">
<div class="image-caption">Clone the drive</div>
{:/nomarkdown}

The first thing I did was reboot in to [macOS Recovery mode](https://support.apple.com/en-us/HT201314).

With my SSD hooked up, I cloned my 'Macintosh HD' partition to my SSD. This ensures that when I drop in the SSD, it will boot up and everything is great. There's nothing to do beyond simply hooking up the drive and powering on.

I do have a bootcamp Windows (and linux) partition. I attempted to use [dd](https://en.wikipedia.org/wiki/Dd_(Unix)) to clone the whole drive, but that took _way too long_ [even when using rdisk](http://serenity.ee/post/82120938429/mac-os-dd-with-devdisk-vs-devrdisk) and a blocksize of 1m (which appeared optimal for my drive).

So I just reinstalled Windows after. I'll do Linux later.

# Supplies

{::nomarkdown}
<a href="/assets/iMacDrive/Starting.jpg">
<img src="/assets/iMacDrive/Thumbnails/Starting.jpg" alt="Starting">
</a>
<div class="image-caption">Supplies</div>
{:/nomarkdown}

You'll need some tools. I strongly suggesting just buying [this pack right here](https://eshop.macsales.com/item/OWC/DIYIMACHDD12/). This includes the adhesive strips that you need, a way of holding the display, a cutter and the thermal sensor.

The iMac's hard drive is a 3.5" drive. This means that I also needed to purchase a [drive converter bracket](https://eshop.macsales.com/item/NewerTech/ADPTADRV/) as well.

(in reality I only bought the sensor and bracket because my brother already had the tools)

# Opening the thing

{::nomarkdown}
<a href="/assets/iMacDrive/Open1.jpg">
<img src="/assets/iMacDrive/Thumbnails/Open1.jpg" alt="Open">
</a>
<div class="image-caption">Opening part 1</div>
{:/nomarkdown}

To start the little plastic pizza cutter thing is placed behind the display and ran along the edge. This breaks the adhesive that holds the display to the chassis.

# Corner

{::nomarkdown}
<a href="/assets/iMacDrive/Corner.jpg">
<img src="/assets/iMacDrive/Thumbnails/Corner.jpg" alt="Corner">
</a>
<div class="image-caption">Corner</div>
{:/nomarkdown}

Here it is stuck in the corner.

# Put in the drive

{::nomarkdown}
<a href="/assets/iMacDrive/Drive1.jpg">
<img src="/assets/iMacDrive/Thumbnails/Drive1.jpg" alt="Drive1">
</a>
<div class="image-caption">Put in the drive</div>
{:/nomarkdown}

While my brother was cutting open the display, I put the SSD inside of the bracket.

# Open carefully

{::nomarkdown}
<a href="/assets/iMacDrive/Trim.jpg">
<img src="/assets/iMacDrive/Thumbnails/Trim.jpg" alt="Trim">
</a>
<div class="image-caption">Lifting the display</div>
{:/nomarkdown}

The plastic pizza cutter doesn't cut fully in to the adhesive. This requires that you use something else to slowly and carefully lift the display as you cut. The [kit that I linked before](https://eshop.macsales.com/item/OWC/DIYIMACHDD12/) has a tool for this job.

You can just use a credit card or a guitar pick though.

# Cut more

{::nomarkdown}
<a href="/assets/iMacDrive/TrimMore.jpg">
<img src="/assets/iMacDrive/Thumbnails/TrimMore.jpg" alt="TrimMore">
</a>
<div class="image-caption">More cutting</div>
{:/nomarkdown}

The cutting takes a while. We also placed the suction cups in place to allow the screen to be pulled while cutting.

Yes, [my brother](http://www.thelostvertex.com) is wearing sunglasses indoors. He has [photosensitive migraines](https://en.wikipedia.org/wiki/Photophobia) and usually exists in darkness.

# Dusty

{::nomarkdown}
<a href="/assets/iMacDrive/Dusty.jpg">
<img src="/assets/iMacDrive/Thumbnails/Dusty.jpg" alt="Dusty">
</a>
<div class="image-caption">Dusty</div>
{:/nomarkdown}

Despite trying to clean the iMac 4 times a year, it's still very dusty inside.

# Removing 2 cables

{::nomarkdown}
<a href="/assets/iMacDrive/DeCable.jpg">
<img src="/assets/iMacDrive/Thumbnails/DeCable.jpg" alt="DeCable">
</a>
<div class="image-caption">Decabling</div>
{:/nomarkdown}

There's 2 cables to remove on this model. The cable closest to the center has a lift tab. The cable near the side is a pull cable. Careful with the pull cable. Try to use the tabs on the sides to leverage against rather than tugging on the cable.

# Lift

{::nomarkdown}
<a href="/assets/iMacDrive/Lift.jpg">
<img src="/assets/iMacDrive/Thumbnails/Lift.jpg" alt="Lift">
</a>
<div class="image-caption">Lift</div>
{:/nomarkdown}

The display is now lifted.

There is adhesive on the bottom. That is removed by hinging the display back and forth, then pulling the adhesive out.

# Long Peel

{::nomarkdown}
<a href="/assets/iMacDrive/LongPeel.jpg">
<img src="/assets/iMacDrive/Thumbnails/LongPeel.jpg" alt="LongPeel">
</a>
<div class="image-caption">Long Peel</div>
{:/nomarkdown}

The adhesive strips now need to me removed. Try to get as much as you can in one go.

# Peel part 2

{::nomarkdown}
<a href="/assets/iMacDrive/Peel.jpg">
<img src="/assets/iMacDrive/Thumbnails/Peel.jpg" alt="Peel">
</a>
<div class="image-caption">Careful peel</div>
{:/nomarkdown}

Some adhesive remains. I use a [hobby knife](https://www.amazon.com/OLFA-Cushion-Grip-Art-Knife/dp/B0006O87TQ/ref=sr_1_2?ie=UTF8&qid=1520193575&sr=8-2&keywords=olfa+hobby+knife) to get at the edge of the strip then try to lift it up.

# Unscrew the Speaker

{::nomarkdown}
<a href="/assets/iMacDrive/UnscrewSpeaker.jpg">
<img src="/assets/iMacDrive/Thumbnails/UnscrewSpeaker.jpg" alt="UnscrewSpeaker">
</a>
<div class="image-caption">Unscrew the speaker</div>
{:/nomarkdown}

Many tutorials suggest fully removing this speaker, but we learned that this is not necessary. Just unscrew it for now. You can push it to the side slightly to get to the screws you need.

# Lift the speaker

{::nomarkdown}
<a href="/assets/iMacDrive/LiftSpeaker.jpg">
<img src="/assets/iMacDrive/Thumbnails/LiftSpeaker.jpg" alt="LiftSpeaker">
</a>
<div class="image-caption">Remove screws with the speaker moved</div>
{:/nomarkdown}

There's a mount that you need to remove so the hard drive can be removed. The mount screws are under the speaker. Just push the speaker to the side and remove the screws.

# Display Adhesive

{::nomarkdown}
<a href="/assets/iMacDrive/DisplayAdhesive.jpg">
<img src="/assets/iMacDrive/Thumbnails/DisplayAdhesive.jpg" alt="DisplayAdhesive">
</a>
<div class="image-caption">Remove the display adhesive</div>
{:/nomarkdown}

The display has adhesive on it too. That is removed.

# Change the drive pins

{::nomarkdown}
<a href="/assets/iMacDrive/DriveSwitch.jpg">
<img src="/assets/iMacDrive/Thumbnails/DriveSwitch.jpg" alt="DriveSwitch">
</a>
<div class="image-caption">Drive pin switch</div>
{:/nomarkdown}

The hard drive has pins on the side. These pins are transferred to the bracket. These pins are what set in to the mounts that were just removed.

# Drive Sensor

{::nomarkdown}
<a href="/assets/iMacDrive/DriveSensor.jpg">
<img src="/assets/iMacDrive/Thumbnails/DriveSensor.jpg" alt="DriveSensor">
</a>
<div class="image-caption">Drive Sensor</div>
{:/nomarkdown}

The thermal sensor is applied to the drive. There's a nice little square on the ssd, which seems like a decent place to put it.

As far as I know, the original drive has this sensor built in, which is why we need to add it to the new drive.

# Very dusty

{::nomarkdown}
<a href="/assets/iMacDrive/VeryDusty.jpg">
<img src="/assets/iMacDrive/Thumbnails/VeryDusty.jpg" alt="VeryDusty">
</a>
<div class="image-caption">Very dusty inside!</div>
{:/nomarkdown}

It's nasty in there.

# Cleaning

{::nomarkdown}
<a href="/assets/iMacDrive/Cleaning.jpg">
<img src="/assets/iMacDrive/Thumbnails/Cleaning.jpg" alt="Cleaning">
</a>
<div class="image-caption">Cleaning</div>
{:/nomarkdown}

I took the iMac in to my shop. There I took an [Air Compressor](https://www.aircompressorsdirect.com) and blew out the dust in to my [dust collection system](http://www.rockler.com/dust-collection).

You can use canned air and a normal vacuum. I just use what I have.

# Cleaned

{::nomarkdown}
<a href="/assets/iMacDrive/Cleaned.jpg">
<img src="/assets/iMacDrive/Thumbnails/Cleaned.jpg" alt="Cleaned">
</a>
<div class="image-caption">Cleaned</div>
{:/nomarkdown}

Much cleaner.

# Cable Move

{::nomarkdown}
<a href="/assets/iMacDrive/CableMove.jpg">
<img src="/assets/iMacDrive/Thumbnails/CableMove.jpg" alt="CableMove">
</a>
<div class="image-caption">Making room for the new drive</div>
{:/nomarkdown}

On the 2 systems I've done this two, the SATA cable is inside the mounting bracket. It's easier to put in the new drive if you move this outside of the bracket.

# Screw the speaker

{::nomarkdown}
<a href="/assets/iMacDrive/ResetSpeaker.jpg">
<img src="/assets/iMacDrive/Thumbnails/ResetSpeaker.jpg" alt="ResetSpeaker">
</a>
<div class="image-caption">Putting the speaker, and new drive, back</div>
{:/nomarkdown}

The new hard drive is put in, and the speaker is screwed back in.

# Adhesive Clean

{::nomarkdown}
<a href="/assets/iMacDrive/AdhesiveClean.jpg">
<img src="/assets/iMacDrive/Thumbnails/AdhesiveClean.jpg" alt="AdhesiveClean">
</a>
<div class="image-caption">Adhesive Clean</div>
{:/nomarkdown}

I use [Isopropyl Alcohol](https://en.wikipedia.org/wiki/Isopropyl_alcohol) and [Kimwipes](https://www.fishersci.com/shop/products/kimberly-clark-kimtech-science-kimwipes-delicate-task-wipers-7/p-211240) to clean the leftover adhesive bits.

# Adhesive Cleaning

{::nomarkdown}
<a href="/assets/iMacDrive/AdhesiveCleaning.jpg">
<img src="/assets/iMacDrive/Thumbnails/AdhesiveCleaning.jpg" alt="AdhesiveCleaning">
</a>
<div class="image-caption">Adhesive Cleaning</div>
{:/nomarkdown}

The cleaning is as simple as some alcohol and rubbing.

# Tested

{::nomarkdown}
<a href="/assets/iMacDrive/Tested.jpg">
<img src="/assets/iMacDrive/Thumbnails/Tested.jpg" alt="Tested">
</a>
<div class="image-caption">Tested</div>
{:/nomarkdown}

The display is hooked back up, with no adhesive applied, and the system is tested. You don't want to close the thing up with something wrong! That adhesive ain't cheap and shipping takes time.

# Apply Adhesive

{::nomarkdown}
<a href="/assets/iMacDrive/ApplyAdhesive.jpg">
<img src="/assets/iMacDrive/Thumbnails/ApplyAdhesive.jpg" alt="ApplyAdhesive">
</a>
<div class="image-caption">Apply Adhesive</div>
{:/nomarkdown}

The adhesive strips are applied according to the instructions.

There's little holes in the strips and the iMac that allow you to line things up, but I find it easier to manually line it up and pull the backing off slowly from the underside. You can see the method in the picture. I pull off the backing and with my other hand slowly align the edges.

# Down

{::nomarkdown}
<a href="/assets/iMacDrive/Down.jpg">
<img src="/assets/iMacDrive/Thumbnails/Down.jpg" alt="Down">
</a>
<div class="image-caption">Down</div>
{:/nomarkdown}

The display is then set down on the chassis and the screen is aligned. We then removed the adhesive strip backing with the display in place. This procedure allowed the display to be aligned with no adhesive active and moved very slightly to get the adhesive ready.

This is probably the scariest part, but if you work slowly with some help it's not bad.

# Clean

{::nomarkdown}
<a href="/assets/iMacDrive/Clean.jpg">
<img src="/assets/iMacDrive/Thumbnails/Clean.jpg" alt="Clean">
</a>
<div class="image-caption">Clean</div>
{:/nomarkdown}

My brother the screen freak spent about 20 minutes cleaning the screen. Only water is used. 

Sunglasses still intact.

# Done

{::nomarkdown}
<a href="/assets/iMacDrive/Done.jpg">
<img src="/assets/iMacDrive/Thumbnails/Done.jpg" alt="Done">
</a>
<div class="image-caption">Done</div>
{:/nomarkdown}

Done!

That's it. Now I can get back to working on this review among other things.


# Support Me!

This post took 3 hours to research, photograph, write and edit. If you appreciate the information presented then <a href="/DonateNow/">please consider joining patreon or donating!</a>

<a href="https://www.patreon.com/bePatron?u=7465992"> <img class="patreon-button" src="/assets/Patreon.png" alt="Be a Patreon!"></a>

<form style="text-align: center;" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick">
<input type="hidden" name="hosted_button_id" value="BR247JAZBTUJJ">
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
</form>

If you have any questions or comments, please comment below! I read every comment and respond to most.



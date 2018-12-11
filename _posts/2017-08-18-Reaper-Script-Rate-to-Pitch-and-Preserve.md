---
layout: post
title: Reaper Script Rate to Pitch and Preserve
comments: true
date:   2017-08-18_15:29:43 
categories: music
tags: ['Reaper', 'Reaper Scripts', 'Reaper Tips']
image: /assets/Reaper/RatetoPitch.png
description: Converting Rate to Pitch in Reaper
---

{::nomarkdown}
  <img src="/assets/Reaper/RatetoPitch.png" alt="Rate to Pitch">
  <div class="image-caption">Rate to Pitch and Preserve</div>
{:/nomarkdown}

Sometimes in a project you may have some items with 

* "Preserve pitch when changing rate" off, so that you can stretch them and change the pitch. 
* "Preserve pitch when changing rate" on so that you can stretch the item and **not** change the pitch. 
* Pitch changes via the "Pitch Adjust" parameter.

The following script consolidates the selected items so they retain their length and pitch, but with "Preserve pitch when changing rate" on. 

It does this by finding items with "Preserve pitch when changing rate" off, then it translates the rate to pitch, assigns that to the pitch value and turns on "Preserve pitch when changing rate".

[**Thanks to Canopy for the idea**](https://soundcloud.com/canopy_music) **EDIT**: 17th of March - and he corrected the script to work with non-rate pitch-based offset.

<!--more-->

# The Script

The following code is the script. You can either create a new script via the actions window and drop this in it, or [download from here](/assets/Reaper/Scripts/RatetoPitchandPreserve.lua).

To find the location of where to put this:

* Open Reaper
* Options menu->Show RESOURCE path in explorer/finder
* Open the "Scripts" folder
* Create a new folder ('AdmiralBumbleBee' if you wish)
* Place this file in it

~~~
selected_items_count = reaper.CountSelectedMediaItems(0)

reaper.Undo_BeginBlock()

-- INITIALIZE loop through selected items
for i = 0, selected_items_count-1  do
  item = reaper.GetSelectedMediaItem(0, i) -- Get selected item i

  take = reaper.GetActiveTake(item)

  preserve = reaper.GetMediaItemTakeInfo_Value(take ,"B_PPITCH")

  if preserve == 0 then
    
    oldpitch = reaper.GetMediaItemTakeInfo_Value(take, "D_PITCH")
    rate = reaper.GetMediaItemTakeInfo_Value(take, "D_PLAYRATE")
    newRate = 1
    newPitch = (((12/math.log(2)) * math.log(rate)) + oldpitch)
    reaper.SetMediaItemTakeInfo_Value(take, "D_PITCH", newPitch)
    reaper.SetMediaItemTakeInfo_Value(take, "B_PPITCH", 1)

  end

end -- ENDLOOP through selected items

reaper.Undo_EndBlock("Change Rates to Pitch and Preserve Pitch", -1)
~~~

# Special Thanks

Thank you to Elan Hickler for the pitch/rate scripts [HERE](https://github.com/ReaTeam/ReaScripts/tree/master/Takes%20Properties), and [ExtremRaym](https://www.extremraym.com/en/).

I borrowed some ideas from these resources to cobble this together.

# Support Me!

This script took only 15 minutes to write. If you appreciate the information presented then <a href="/DonateNow/">please consider joining patreon or donating!</a>

<a href="https://www.patreon.com/bePatron?u=7465992"> <img class="patreon-button" src="/assets/Patreon.png" alt="Be a Patreon!"></a>

<form style="text-align: center;" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick">
<input type="hidden" name="hosted_button_id" value="BR247JAZBTUJJ">
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
</form>

If you have any questions or comments, please comment below! I read every comment and respond to most.



---
layout: post
title: Jekyll Post Creating Script
comments: true
date:   2016-04-11_11:00:50
categories: programming
tags: ['Programming']
---
So I wrote a little bash script this morning to make creating a new jekyll post easy for my blog.

~~~
array=( $@ )
len=${#array[@]}
_first=$1
_last=${array[$len-1]}
_rest=${array[@]:1:$len-2}
_filename=$( printf "%s-%s" "$(date +%F)" "$_first" )
_postname=$( printf "%s %s" "$_first" "$_rest" )

echo $_rest

for var in $_rest 
do
    _filename+="-"
    _filename+=$var
done

cat <<EOF > _posts/$_filename.md
---
layout: post
title: $_postname
comments: true
date:   $(date +%F_%T) 
categories: $_last
tags: ['']
image:
description:
---

<!--more-->

# Contents
{:.no_toc}
* TOC
{:toc}

# Support Me!

This post took XX hours to research, photograph, write and edit. If you appreciate the information presented then <a href="/DonateNow/">please consider joining patreon or donating!</a>

<a href="https://www.patreon.com/bePatron?u=7465992"> <img class="patreon-button" src="/assets/Patreon.png" alt="Be a Patreon!"></a>

<form style="text-align: center;" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick">
<input type="hidden" name="hosted_button_id" value="BR247JAZBTUJJ">
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
</form>

If you have any questions or comments, please comment below! I read every comment and respond to most.


EOF

open _posts/$_filename.md 

~~~

<!--more-->

All the arguments except the last are the name of the post and file. The last argument is the category.

It then opens it, as I'm in OS X, in ~~mac vim. I just hit the keys 'Go' (heh, funny) and start editing.~~ [Visual Studio Code](https://code.visualstudio.com).

I certainly could be done better, but I'm not a bash guy. This works for now and I can change it as time goes.

**Updated August 3rd, 2017**

See [This post]({% post_url 2017-07-15-How-AdmiralBumbleBee-works %}) for more. Specifically the [opengraph]({% post_url 2017-07-15-How-AdmiralBumbleBee-works %}#opengraph-tags) section to see how the image and description properties work.

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
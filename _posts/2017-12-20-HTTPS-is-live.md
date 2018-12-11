---
layout: post
title: HTTPS is live
comments: true
date:   2017-12-20_11:20:05 
categories: general
tags: ['General', 'Tutorial']
image:
description: Setting up https on admiralbumblebee.com
---

I am not a web admin. I'm not a web guy. I'm not a network guy. There is one thing that I think I'm pretty good at though, and that's responding to well-spoken criticism.

So [https is live](https://en.wikipedia.org/wiki/HTTPS) and [here is why it matters](https://doesmysiteneedhttps.com/). Please update your bookmarks to use [https://www.admiralbumblebee.com](https://www.admiralbumblebee.com)!

[Here is how](https://www.digitalocean.com/community/tutorials/how-to-secure-apache-with-let-s-encrypt-on-ubuntu-16-04) I set it up on [my server](https://www.digitalocean.com) using [certbot](https://certbot.eff.org) and [apache](https://httpd.apache.org). Type the commands in the boxes while ssh'd in to your server.

* `sudo add-apt-repository ppa:certbot/certbot` - add the certbot repo
* `sudo apt-get update` - update your apt packages
* `sudo apt-get install python-certbot-apache` - install the certbot bot for apache
* `sudo certbot --apache -d admiralbumblebee.com -d www.admiralbumblebee.com -d admiralbubblebath.com -d www.admiralbubblebath.com` - setup the bot and acquire certificates for the domains associated with this website
* `1` - it asks if you wish to enable redirection. I have this turned _off_ currently. I may change this in the future.
* `sudo certbot renew --dry-run` - This simply checks to make sure the certificate renewal process works correctly in 90 days when it expires.

That's all there was too it. It only took me a few minutes.

**EDIT** -

Since this post I installed certbot-auto. This is as easy as navigating to the directory that you wish to install it in, and using the following 2 commands:

* `wget https://dl.eff.org/certbot-auto`
* `chmod a+x certbot-auto`

Use `./path/to/certbot-auto` the same way as you use certbot in the above information. It automatically updates itself and generally works better.

I also forgot to mention that I added a cronjob for renewing with the command `crontab -e` then adding the following line to the end of the file (this is for apache, which is what I run):

`52 0,12 * * * root /home/certbot-auto renew --quiet --pre-hook "sudo service apache2 stop" --post-hook "sudo service apache2 start"`
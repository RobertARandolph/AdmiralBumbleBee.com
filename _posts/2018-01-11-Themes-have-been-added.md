---
layout: ['post', 'reader']
title: Themes have been added!
comments: true
date:   2018-01-11_17:21:14 
categories: general
tags: ['General']
image: /assets/General/Dark.png
description: Dark mode engage!
---

{::nomarkdown}
  <img src="/assets/General/Dark.png" alt="Dark mode!">
  <div class="image-caption">Dark mode</div>
{:/nomarkdown}

Upon Popular request... this website now has a 'dark mode'. Just hit that 'Dark Theme' or 'Light Theme' button in the navigation bar to switch. The value is saved with a 1000 day cookie.

The DAW Feature Chart is still the same colours. It's pretty mild so I won't change that unless there's some request.

I wrote this myself and I'm certainly no javascript genius. I'm also not a designer by any means, so I'm sure I can improve the theme colours.

Here's how it works... (please berate me if I did something stupid, thank you).

p.s. This **was broken** only when viewing the page for this post. I've since fixed that. Sorry!

<!--more-->

# Contents
{:.no_toc}
* TOC
{:toc}

# Blank stylesheet import

I simply have this stylesheet link in my header:

`<link id="mainstyle" rel="stylesheet" type="text/css" href="{{ '/css/main.css' | prepend: site.baseurl }}" />`

The 2 sidebars also have a similar link. Currently if you are using the dark theme

# Style sheet

I use [sass](http://sass-lang.com) to handle my style sheets, so I simply have the appropriate variables set up for the stylesheets. Sass generates the different themes for me.

My 'Dark' sass looks something like this right now:

~~~
$base-font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
$base-font-size:   16px;
$base-font-weight: 400;
$small-font-size:  $base-font-size * 0.875;
$base-line-height: 1.5;

$spacing-unit:     30px;

$text-color:       rgb(202, 202, 202);
$background-color: #161616;
$brand-color:      #c5deff;

$grey-color:       #828282;
$grey-color-light: rgb(245, 245, 245);
$grey-color-dark:  darken($grey-color, 25%);

$container-background: rgb(82, 82, 82);

$h2-background-color: darken($container-background, 10%);
$h3-background-color: darken($h2-background-color, 10%);
$h4-background-color: darken($h3-background-color, 10%);

$highlighter-background: rgb(82, 82, 100);
$highlighter-color: white;

$content-width:    65%;

$on-palm:          775px;
$on-laptop:        1439px;

@mixin media-query($device) {
    @media screen and (max-width: $device) {
        @content;
    }
}

@import
        "base",
        "layout",
        "syntax-highlighting"
;
~~~

# Javascript

You can pull the JS easily [right here](/admt/admt.js), but I'm going to explain the basic use anyway.

When the site loads, I check for a cookie. If there's no cookie then I default to the main theme. 

~~~
write_css: function () {
    var saved_theme = get_cookie("theme");

    if (!saved_theme) {
        saved_theme = "main";
        set_cookie("theme", "main", 1000)
    } else if (saved_theme != "main") {
        document.getElementById("mainstyle").href = "{{ '/css/" + saved_theme + ".css' | prepend: site.baseurl }}";
    }

    update_nav(saved_theme);
}
~~~

Then I need to change the linked stylesheet in the sidebar iframes. (I use iframes for the sidebar now so that my static site generator doesn't need to render EVERY page when I write a new post. With the integrated 'recent posts' version, every single page needed to have a 'new post' added to that. The iframe version is a huge speed up for me! Almost 10x render time improvement)

~~~
var change_theme = function (theme_name) {
    document.getElementById("mainstyle").href = "{{ '/css/" + theme_name + ".css' | prepend: site.baseurl }}";
    set_cookie("theme", theme_name, 1000);

    update_nav(theme_name);

    // Update the sidebar iFrame themes as well if possible. This should eventually be an array of items to update

    // This gives a 'object is null' error on page load because the stupid iframe isn't loaded. I'm not dealing with that shit. Let it error.
    document.getElementById("sidebar1").contentWindow.document.getElementById("mainstyle").href = "{{ '/css/" + theme_name + ".css' | prepend: site.baseurl }}";
    document.getElementById("sidebar2").contentWindow.document.getElementById("mainstyle").href = "{{ '/css/" + theme_name + ".css' | prepend: site.baseurl }}";
}
~~~

The button switches the theme to the opposing theme. This code could be improved, obviously. I should have a list of themes and cycle through them, or have a drop down. Whatever, it works. I'll obliterate it later when I want to add more than 1 theme.

~~~
switch_theme: function () {
    var main_theme = get_cookie("theme");

    if (main_theme === "dark") {
        change_theme("main");
    } else if (main_theme === "main") {
        change_theme("dark");
    }
}
~~~

Of course you need to update the navigation as well...

~~~
var update_nav = function (theme_name) {
    // This is intentionally backwards. If we're using the 'main' theme, we want the button to say 'Dark' to switch to.
    show_name = ((theme_name === "main") ? "Dark" : "Light");

    var button = document.getElementById("theme_button");
    
    button.innerHTML = show_name + " theme";
}
~~~

# Conclusion

That's it. The most difficult part of this was re-writing all my stylesheets to use [sass](http://sass-lang.com) variables. I had a lot of hardcoded things in there, which is no good. Laziness really.

I also fixed noticed 5 bugs while writing this, so I'm glad I took the time to explain it. My blog is usually my [rubber duck](https://en.wikipedia.org/wiki/Rubber_duck_debugging), but today I'm more aware of it than usual.

Hopefully this helps some folks that like to read in dark rooms, outdoors at night or perhaps have migraines or similar maladies that require limited light exposure.

# Support Me!

This post took 4 hours to research, photograph, write and edit. If you appreciate the information presented then <a href="/DonateNow/">please consider joining patreon or donating!</a>








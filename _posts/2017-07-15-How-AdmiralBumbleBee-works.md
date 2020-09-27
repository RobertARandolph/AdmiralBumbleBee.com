---
layout: post
title: How this site works - The technologies behind it
comments: true
date:   2017-07-15_11:55:47 
categories: general
tags: ['General', 'Programming', 'Tutorial']
---

{::nomarkdown}
  <img src="/assets/Blog/SourceTree.png" alt="SCM">
  <div class="image-caption">SCM management</div>
{:/nomarkdown}

I've received some questions over time about how I blog. What platform I use, how I manage dependencies, how I achieve certain effects, how I update, how I handle images etc...

I primarily use [Docker](https://www.docker.com), [Jekyll](https://jekyllrb.com), [Mercurial](https://www.mercurial-scm.org) and [Visual Studio Code](https://code.visualstudio.com). Click through to see how I use these things together to create what you're reading now.

<!--more-->

# Contents
{:.no_toc}
* TOC
{:toc}

# Overview

I write my posts in [Visual Studio Code](https://code.visualstudio.com) and the posts are formatted using [Kramdown](https://kramdown.gettalong.org) and [Yaml](http://www.yaml.org). I use [ImageMagick](https://www.imagemagick.org/script/index.php) to format images while writing.

The blog is generated using [Jekyll](https://jekyllrb.com), which is a flat-site generator. I use Jekyll inside a [Docker](https://www.docker.com) container.

When the blog is generated, I upload it to my [Digital Ocean Droplet](https://www.digitalocean.com) using [Mercurial](https://www.mercurial-scm.org).

# File Structure

{::nomarkdown}
  <img src="/assets/Blog/BlogFiles.png" alt="File Structure">
  <div class="image-caption">File Structure of AdmiralBumbleBee.com</div>
{:/nomarkdown}

File structure is already described [at the jekyll website](https://jekyllrb.com/docs/structure/). The only thing that I do is I categorize photos in the /assets/ directory by the subject.

I store full size images in /assets/subject/. Large images have thumbnails in /assets/subject/thumbnails.

# Jekyll

[Jekyll](https://jekyllrb.com) is where all the fun happens.

Many websites on the web currently accept a request from the client, then generate the page before the data is sent to the user. Jekyll works differently.

Jekyll generates the entire site locally on your computer, then you upload the website to your server. The server serves the site as it was when you created it on your computer.

The workflow is simple and the [quick start guide](https://jekyllrb.com/docs/quickstart/) does an excellent job of explaining how to get going. If you have trouble with versions and weird ruby errors, check out the [Docker](#docker) section for a way to avoid all that mess.

1. I use a simple [post creation script]({% post_url 2016-04-11-Jekyll-Post-Creating-Script %}) that creates a post template for me. I also have a similar script for making drafts if I know a post will take me many days/weeks to complete. I just navigate to my blog location and type `./create post name category`.
2. I run `bundle exec jekyll serve` (actually the [Docker](#docker) version of this!), and I write my post. I can point my browser to http://127.0.0.1:4000 which is a fully-operational version of my site that updates as I save files.
3. When the post is ready I run I run `bundle exec jekyll build` (actually the [Docker](#docker) version of this!). **This is important**. There's a feed.xml file that generates an RSS feed for your website. If you don't run build, then your feed.xml will point to 127.0.0.1:4000 rather than your website because that's what serve was using!

After that I upload the site to my web server using [Mercurial](#mercurial).

I have no special jekyll settings or setup other than using [pagination](https://jekyllrb.com/docs/pagination/).

# Visual Studio Code

Writing posts in [Visual Studio Code](https://code.visualstudio.com) is pretty straightforward. However I have some snippets I use that make life a bit easier.

First, I suggest that you check the [CSS for images](#css-for-images) section to see why I have the double underscored text after the images.

Second, I escaped the above [Liquid Template tags](https://shopify.github.io/liquid/) using &#123;% raw %&#125;&#123;% endraw %&#125; around the whole thing. That stops Jekyll from parsing those links.

~~~~~~~~~~~~~~~~~~
{% raw %}
	"Linked Image": {
		"prefix": "lmg",
		"body": [
			"[![${1:alt-text}](/assets/${2:directory}/Thumbnails/${3:file})](/assets/$2/$3)"
			"__${4:description}__"
		],
		"description": "Image linked to higher-res version"
	},
	"UnLinked Image": {
		"prefix": "img",
		"body": [
			"![${1:alt-text}](/assets/${2:directory}/${3:file})"
			"__${4:description}__"
		],
		"description": "Image standalone"
	},
	"Link": {
		"prefix": "lnk",
		"body": [
			"[${1:word}](${2:url})"
		],
		"description": "Link to Selected Text"
	},
	"Blog Link": {
		"prefix": "snk",
		"body": [
			"[${1:word}]({% post_url ${2:url} %})"
		],
		"description": "Link to Selected Text on Blog"
	},
	"Video": {
		"prefix": "vdj",
		"body": [
			"<video autoplay loop muted class=\"gifvid\">",
  			"	<source src=\"/assets/${1:url}\" type=\"video/mp4\">",
  			"	Your browser does not support the video tag.",
			"</video>"
			"__${2:description}__"
		],
		"description": "Insert Muted Mp4 video"
	},
{% endraw %}
~~~~~~~~~~~~~~~~~~

**Here's what the snippets do:**

* **Linked Image** - this inserts an image that is a link to a larger version of the image. It automatically uses the thumbnail image (described in [ImageMagick](3imagemagick)) and links to the full-size version.

    Example of what I'd type: lmg &#123;tab&#125; This is an Image &#123;tab&#125; Directory &#123;tab&#125; imagename.png &#123;tab&#125; description

    Output:
    ~~~
    {% raw %}
    [![This is an Image](/assets/Directory/Thumbnails/imagename.png)](/assets/Directory/imagename.png)
    __Description__
    {% endraw %}
    ~~~

* **Unlinked Image** - Just an image.

    Example of what I'd type: img &#123;tab&#125; This is an Image &#123;tab&#125; Directory &#123;tab&#125; imagename.png &#123;tab&#125; description

    Output:
    ~~~
    {% raw %}
    ![This is an Image](/assets/Directory/imagename.png)
    __Description__
    {% endraw %}
    ~~~

* **Link** - Just a link to some other site on the web.

    Example of what I'd type: lnk &#123;tab&#125; Link to Here &#123;tab&#125; http://www.admiralbumblebee.com

    Output:
    ~~~
    {% raw %}
    [Link to Here](http://www.admiralbumblebee.com)
    {% endraw %}
    ~~~

* **Blog Link** - A link to a post on this blog. This requires a special format that uses [Liquid Template tags](https://shopify.github.io/liquid/) to create a link to the correct place when generating the post.

    Example of what I'd type: snk &#123;tab&#125; Link to this Post &#123;tab&#125; 2017-07-15-How-AdmiralBumbleBee-works

    Output:
    ~~~
    {% raw %}
    [Link to this Post]({% post_url 2017-07-15-How-AdmiralBumbleBee-works %})
    {% endraw %}
    ~~~

* **Video** - A link to a video hosted on the blog. This requires some javascript [that I explain later](#video-autoplay).

    Example of what I'd type: vdj &#123;tab&#125; Directory/video.mp4 &#123;tab&#125; Description

    Output:
    ~~~
    {% raw %}
    <video autoplay loop muted class-"gifvid">
        <source src="/assets/Directory/video.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    __Description__
    {% endraw %}
    ~~~

# Mercurial

{::nomarkdown}
  <img src="/assets/Blog/SourceTree.png" alt="SCM">
  <div class="image-caption">SCM management</div>
{:/nomarkdown}

The idea that you upload your _entire website_ to the server once it's generated sounds daunting. It is. So I don't do that.

I use what's called an [SCM](https://en.wikipedia.org/wiki/Software_configuration_management). Specifically I use [Mercurial](https://www.mercurial-scm.org) and [SourceTree](https://www.sourcetreeapp.com).

What mercurial does is tracks changes to files and stores only those changes. Mercurial is running remotely on my web server and locally on my computer.

Since binary files don't respond well to simply tracking changes, I use the [largefiles extension](https://www.mercurial-scm.org/wiki/LargefilesExtension). The largefiles extension to mercurial makes limited management of media easier, and I strongly recommend it.

## Setup

I have the remote repository setup in the /var/www/html/ directory on my server. I have the [largefiles extension](https://www.mercurial-scm.org/wiki/LargefilesExtension) setup in my .hgrc file inside the web root.

Locally I create a repository in the /BlogRoot/\_site directory. \_site is where jekyll creates your generated site. You _do_ _not_ want to track the entire blog root locally. All you want to do is track \_site directory.

In the local Mercurial repository I setup a 'remote' that points to my web server. The remote location looks like this: ssh://user@serverIP:port//var/www/admiralbumblebee.com/. The remote location allows us to `hg push` our local changes directly to that repository we setup on the server.

You will need to setup [ssh keys](https://www.digitalocean.com/community/tutorials/how-to-set-up-ssh-keys--2) for this to work properly, but it shouldn't be too difficult.

**Important**

Mercurial does not show the changes on push unless you add a special update hook. In the .hg/.hgrc file on your remote server (or in .hgrc in your remote user home), you must add these lines:

~~~
[hooks]
changegroup = hg update >&2
~~~

This hook makes HG update the remote directory to reflect the changes after the push. Without the update hook, a local `hg push` will do nothing and you'd have to log in to the server and run `hg update` everytime you push.

I did that for a while. It's not fun. The hook is better.

## Use

When the changes are generated on my computer [using jekyll](#jekyll), I go through the following process to get stuff on my web server:

1. `hg add _site` - This tells mercurial that there's new files that have been added. We need to track the changes of the new post and any new media we added.
2. `hg commit` - Now the changes are committed as a snapshot. The _changes_ (not the changed files, but the changes themselves) are what gets uploaded to the server when we...
3. `hg push` - This puts the _changes_ on the server.

I do this in [SourceTree](https://www.sourcetreeapp.com). Just Commit, check the 'immediately push changes to default' box at the bottom, add a commit message, then commit.

As long as you have the [update hook](#setup) in place, then your changes will show immediately and you now have a blog post! (and obviously I have this in place)

## Bonus?

No bonus. I use branches sometimes, but rarely. I usually use jekyll drafts.

You can obviously use [Git](https://git-scm.com) for SCM, but I can't stand the names of Git's commands. Doing things in Mercurial is almost always simpler and more intuitive without having to remember a bunch of ridiculous syntax and in-jokes.

# Imagemagick

I use [ImageMagick](https://www.imagemagick.org/script/index.php) to process my images after categorizing them in [Adobe Lightroom](http://www.adobe.com/products/photoshop-lightroom.html)

I export my photos from Lightroom to the directory, something like BlogDirectory/assets/PostSubject/. If I don't need linked images then there's nothing to do. If I want thumbnails with larger images I run this script:

~~~
mkdir Thumbnails ; find * -name '*.jpg' -exec convert '{}' -auto-orient -resize '640x>' -quality 60 Thumbnails/'{}' \;
~~~

I installed ImageMagick on macOS using `brew install imagemagick`. Simple.

# Javascript abuse

The blog has 2 main scripts. One to re-organize the header hierarchy to an outline format, and one to autoplay videos.

## Video Autoplay

Chrome and Firefox won't autoplay videos, and I've mostly replaced animated gifs on the blog with muted looping MP4s. So every page has this script to autoplay all the videos that are 'gif replacements'.

~~~ javascript
  // Autoplay videos in document because firefox/chrome won't autoplay after dom manipulation
  var gv = document.getElementsByClassName("gifvid");

  for (i=0;i<gv.length;i++) {
    gv[i].play();
  }
~~~

The script finds all of the elements with the gifvid class and plays them. Simple.

## Header to outline.

You've probably noticed that each sub-header on the blog has its own colour coded box for easier following of topics. Jekyll has _no way to do this_. So I wrote a script that re-arranges the DOM.

~~~ javascript
for (x=1;x<7;x++) {
var h1s = document.getElementsByTagName("H" + x);

// Wrap Hx tags with the appropriate divs for an 'outline' type presentation
for (i=0;i<h1s.length;i++) {
    var w = document.createElement('div');
    w.className = "h"  + x + "-style";
    var el = h1s[i];
    var ns = el.nextSibling;

    el.parentNode.insertBefore(w, el);
    w.appendChild(el);

    while (ns != null && (ns.tagName != "H" + x) && (ns.className != "h" + x + "-style")) {
    ns2 = ns.nextSibling;
    w.appendChild(ns);
    ns = ns2;
    }
}
~~~

This script goes through and finds all of the headers, which are written as `# header` and `## Header` in the markdown, and surrounds them with a div. What constitutes a 'section' is determined from Header to the next header appearance.

And with this script, my blog has an outline format that helps differentiate varying sections.

## ADMRB

I already discussed [the rating bar]({% post_url 2017-02-02-Another-new-feature %}) on the blog, but just to remind you... there it is.

## ADMC

The [Comparator!]({% post_url 2017-01-30-Comparator %}) One of my favorite features, and I've yet to use it enough.

# CSS for images

In the [visual studio code](#visual-studio-code) section I showed how I have descriptions written like `__description__` after images. I have similar CSS for video as well. Here is the CSS that turns that into text under the image.

~~~
p > img + strong {
	margin: 0 auto;
	width: 80%;
	text-align: center;
	display: block;
	font-weight: normal;
	border-bottom: 1px solid grey;
}

p > img + strong :after {
	content: "x";
}

p > a + strong {
	margin: 0 auto;
	width: 80%;
	text-align: center;
	display: block;
	font-weight: normal;
	border-bottom: 1px solid grey;
}

p > a + strong :after {
	content: "x";
}
~~~

Jekyll turns `__this__` into `<b>this</b>`. The CSS takes any bolded text after an image and styles it appropriately so that it appears as an image description.

# OpenGraph tags

[OpenGraph](http://ogp.me) is a way that services like twitter and facebook pull metadata from your website. So this is how you can make jekyll show the correct metadata when linking a blog post on twitter or facebook:

In 'head.html', between your header tags add this code:

~~~
{% raw %}
<meta content="{{ site.title }}" property="og:site_name">
  {% if page.title %}
    <meta content="{{ page.title }}" property="og:title">
  {% else %}
    <meta content="{{ site.title }}" property="og:title">
  {% endif %}
  {% if page.title %}
    <meta content="article" property="og:type">
  {% else %}
    <meta content="website" property="og:type">
  {% endif %}
  {% if page.description %}
    <meta content="{{ page.description }}" property="og:description">
  {% else %}
    <meta content="{{ site.description }}" property="og:description">
  {% endif %}
  {% if page.url %}
    <meta content="{{ site.url }}{{ page.url }}" property="og:url">
  {% endif %}
  {% if page.date %}
    <meta content="{{ page.date | date_to_xmlschema }}" property="article:published_time">
    <meta content="{{ site.url }}/about/" property="article:author">
  {% endif %}
  {% if page.image %}
    <meta content="{{ site.url }}/assets/{{ page.image }}" property="og:image">
  {% else %}
    <meta content="{{ site.url }}/assets/logo.png" property="og:image">
  {% endif %}
  {% if page.categories %}
    {% for category in page.categories limit:1 %}
    <meta content="{{ category }}" property="article:section">
    {% endfor %}
  {% endif %}
  {% if page.tags %}
    {% for tag in page.tags %}
    <meta content="{{ tag }}" property="article:tag">
    {% endfor %}
  {% endif %}
{% endraw %}
~~~

With this setup you can also add an 'image' and 'description' property at the top of your post to explicitly give the post a different image or description in the [OpenGraph](http://ogp.me) generated link.

# Page tricks

I have some [Liquid Template](https://shopify.github.io/liquid/) things on my blog that you may find useful.

## Jekyll Tags/Categories page

I have a file called 'tags.md' in my blog root. Jekyll turns this in to /tags/index.html, and that's what you see when you hit the 'Site Map' link at the top of the page.

Here's the code to make the tags page:

~~~
{% raw %}
---
layout: page
title: Site Map
description: Tags!
permalink: /tags/
---
<!-- Get the tag name for every tag on the site and set them
to the `site_tags` variable. -->
{% capture site_tags %}{% for tag in site.tags %}{{ tag | first }}{% unless forloop.last %},{% endunless %}{% endfor %}{% endcapture %}

<!-- `tag_words` is a sorted array of the tag names. -->
{% assign tag_words = site_tags | split:',' | sort %}

<!-- Build the Page -->

<!-- List of all tags -->
<ul class="tags">
  {% for item in (0..site.tags.size) %}{% unless forloop.last %}
    {% capture this_word %}{{ tag_words[item] }}{% endcapture %}
    <li>
      <a href="#{{ this_word | cgi_escape }}" class="tag">{{ this_word }}
        <span>({{ site.tags[this_word].size }})</span>
      </a>
    </li>
  {% endunless %}{% endfor %}
</ul>
<div id="tags-list">
   <!-- Posts by Tag -->
   <div>
     {% for item in (0..site.tags.size) %}{% unless forloop.last %}
       {% capture this_word %}{{ tag_words[item] }}{% endcapture %}
       <h2 id="{{ this_word | cgi_escape }}">{{ this_word }}</h2>
       {% for post in site.tags[this_word] reversed %}{% if post.title != null %}
         <div>
           <span style="float: left;">
            {{ post.date | date_to_string }} - <a href="{{ post.url }}">{{ post.title }}</a>
           </span>
         </div>
         <div style="clear: both;"></div>
       {% endif %}{% endfor %}
     {% endunless %}{% endfor %}
   </div>
</div>
{% endraw %}
~~~

Hopefully the commens are sufficient, and I'm pretty sure I ripped off most of this from a number of other blog posts.

## Hidden posts

In my post at the top I can write `visible: 0` in the [front matter](https://jekyllrb.com/docs/frontmatter/) to make Jekyll not _list_ that page on the main site. Currently it will still be listed on the Site Map, but you can easily exclude it.

In the blog root, in index.html I have the following code:

~~~
{% raw %}
<ul class="post-list">
{% for post in paginator.posts %}
    {% if post.visible != 0 %}
        <li>
            <span class="post-meta">{{ post.date | date: "%c" }}</span>
            <h2>
            <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
            </h2>
            {% if post.excerpt %}
            {{ post.excerpt }}
        {% endif %}
            {% if post.content contains site.excerpt_separator %}
            <a href="{{ post.url | prepend: site.baseurl }}">Read more →</a>
            {% endif %}
        </li>
    {% endif %}
{% endfor %}
</ul>
{% endraw %}
~~~

You should be able to see where that code goes, and the only important part is `&#123;% if post.visible != 0 &#125;` and the accompanying `&#123;% endif %&#125;`. This makes Jekyll not list the post on the front page.

I have similar code in the recent-posts list as well.

If you want you can use this to not list posts from the sitemap and even make an unlisted site map that shows unlisted posts. I may or may not have this... I don't want you looking for it.

# Docker

If you get some weird ruby errors with jekyll, then Docker is the solution for you.

Docker is a way to contain a piece of software in an environment that isn't linked to your running operating system. It's a way that we can use jekyll, without actually using Jekyll or Ruby on your local system. Docker handles all the dependencies in the container so there's no way for you to have issues with your installation of ruby or jekyll or whatever.

Using Docker is actually fairly simple. 

* Install Docker - Duh.
* Install the Docker for jekyll - run `docker pull jekyll/jekyll` in your shell.

Now instead of using a `bundle exec jekyll serve` or similar, we interact with the jekyll that exists inside docker with `docker run -v $(pwd):/srv/jekyll -p 4000:4000 jekyll/jekyll jekyll serve`. Yeah that sucks to type, let's break it down:

* `Docker run ` - This runs the docker container with the following options.
* `-v $(pwd):/srv/jekyll` - The Docker jekyll only works inside the docker container. It uses /srv/jekyll inside the docker container to do everything, but we need those things on our hard drive instead. The -v command maps local:container volumes, so we're mapping our current directory (`$(pwd)`) to the /srv/jekyll directory in the container. Everything that happens in /srv/jekyll will be mapped to the current local directory. This makes it so running the following command is just like doing it locally.
* `-p 4000:4000` - Just like with the directory, ports inside the container exist only in the container. If we want to run the jekyll webserver in the container, then we need to map the container's port 4000 to our local port 4000.
* `jekyll/jekyll jekyll serve` - This runs the `jekyll serve` command from the `jekyll/jekyll` container. Docker holds many containers, so we have to address the correct container, then run the command we want.

See if you can break down the command to start a new blog in the current directory `docker run -v $(pwd):/srv/jekyll jekyll/jekyll jekyll new .`.

It may sound complex, but this is all fairly simple. You can easily setup a [shell alias](https://shapeshed.com/unix-alias/#how-to-set-an-shell-alias) for these commands to make it simpler to type. Another option is to write small scripts, and yet another option is to just use your shell history ;)

# Anything else?

If I missed anything, or if you have questions about anything in this setup feel free to comment below.

I'm not going to troubleshoot your problems, but if I can point you in the right direction I will. 

# Support Me!

This post took 3 hours to research, photograph, write and edit. If you appreciate the information presented then <a href="/DonateNow/">please consider joining patreon or donating!</a>








---
layout: post
title: "Bitwig Review, but better!"
comments: true
date:   2018-08-03_08:58:27 
categories: music
tags: ['Bitwig', 'DAW']
image:
description: Bitwig revisited
series: Bitwig
---

{::nomarkdown}
<img src="/assets/Bitwig/Logo.png" alt="Bitwig, again?!">
<div class="image-caption">Bitwig, again?!</div>
{:/nomarkdown}

I already did a [Bitwig review](/tags/#Bitwig) didn't I? The people at [Bitwig](https://www.bitwig.com) have been doing a lot of work and they've rendered a good part of my review series obsolete.

So what is there for a man to do except do an updated review **_and_ make addendums to the previews reviews**. The new posts will have all of the content, and I'll silently make updates to previous content. So for the next few weeks I'll be doing just that.

I'm also removing the individual ratings for each plugin in the reviews. That appears to confuse people, and I understand how it can be misleading. That will be done when this post is published.

This time I won't be doing _only_ Bitwig content though. There will be some other content interleaved between the Bitwig posts, however I'll be using Bitwig _almost_ exclusively in this period.

I know announcement posts are boring, but they sometimes get folks to dm/pm/e-mail me ideas of what they'd like to see. That helps me with the review, so here it is. If you know of anything you'd like to see then you can see how to contact me on my [About page at the bottom](/about/)

**Other posts in this series**:

{% assign bits = site.posts | where: "series", "Bitwig" | sort: 'date' %}
<ul>
{% for my_page in bits %} 
    {% if page.url != my_page.url  %}
        <li><a class="page-link" href="{{ my_page.url | prepend: site.baseurl }}">{{ my_page.title}}</a></li>
    {% endif %}
{% endfor %}
</ul>

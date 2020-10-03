---
layout: ['post', 'reader']
title: 30 days of wigging out
comments: true
date:   2017-06-04_11:55:15 
categories: music
tags: ['DAW', 'Bitwig']
series: bitwig
---

{::nomarkdown}
  <img src="/assets/Bitwig/Logo.png" alt="bitwig!">
  <div class="image-caption">It's time!</div>
{:/nomarkdown}

You may or may not know, but I have an anonymous electronic music side project. I have used [Renoise](http://www.renoise.com) for this for many years, but in the spirit of my 30 days project, I will be using [Bitwig Studio 2.1](https://www.bitwig.com/en/home.html) for 30 days.

Why now? Well, basically because there's finally crossfades. Seriously.

I will be doing large reviews like I've done for the other DAWs, so check back twice a week for more fun!


**Other posts in this series**:

{% assign fls = site.posts | where: "series", "FLStudio" | sort: 'date' %}
<ul>
{% for my_page in fls %} 
    {% if page.url != my_page.url  %}
        <li><a class="page-link" href="{{ my_page.url | prepend: site.baseurl }}">{{ my_page.title}}</a></li>
    {% endif %}
{% endfor %}
</ul>

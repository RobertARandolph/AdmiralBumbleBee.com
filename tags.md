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
         {% if post.visible != 0 %}
         <div>
           <span style="float: left;">
            {{ post.date | date_to_string }} - <a href="{{ post.url }}">{{ post.title }}</a>
           </span>
         </div>
         <div style="clear: both;"></div>
       {% endif %}{% endif %}{% endfor %}
     {% endunless %}{% endfor %}
   </div>
</div>

---
layout: page
title: Site Map
description: Tags!
permalink: /tags/
---
<script>
// handle year query string.
window.addEventListener('load', function() {
    // I'm editing this a year later, and I hate myself.
    // Past self, you're not as funny as you think you are, but I know that won't stop you.
    sparnyounth2t098hto4y = new URLSearchParams(window.location.search);
    if (sparnyounth2t098hto4y.get('year') === "true") {
    toggle_avoid_collisions_with_other_libraries_so_I_do_this_because_Im_lazy();
    }
});
    // multiple clipboards, yo
    function toggle_avoid_collisions_with_other_libraries_so_I_do_this_because_Im_lazy () {
        if ( typeof toggle_avoid_collisions_with_other_libraries_so_I_do_this_because_Im_lazy.toggle_var_avoid_collisions_with_other_libraries_so_I_do_this_because_Im_lazy == 'undefined') {
               toggle_avoid_collisions_with_other_libraries_so_I_do_this_because_Im_lazy.toggle_var_avoid_collisions_with_other_libraries_so_I_do_this_because_Im_lazy = 0;
           }
        if (toggle_avoid_collisions_with_other_libraries_so_I_do_this_because_Im_lazy.toggle_var_avoid_collisions_with_other_libraries_so_I_do_this_because_Im_lazy === 0) {
           e_sort = document.querySelector("#enable-sort"); 
           e_sort.style.transform = "translate(82px, 0px)"; 
           e_sort.classList.remove("sort-radius-left");
           e_sort.classList.add("sort-radius-right");
           document.querySelector("#by-tags").style.display = "none";
           document.querySelector("#by-year").style.display = "block";
           toggle_avoid_collisions_with_other_libraries_so_I_do_this_because_Im_lazy.toggle_var_avoid_collisions_with_other_libraries_so_I_do_this_because_Im_lazy = 1;
        } else {
           e_sort = document.querySelector("#enable-sort"); 
           e_sort.style.transform = "translate(0px, 0px)"; 
           e_sort.classList.remove("sort-radius-right");
           e_sort.classList.add("sort-radius-left");
           document.querySelector("#by-year").style.display = "none";
           document.querySelector("#by-tags").style.display = "block";
           toggle_avoid_collisions_with_other_libraries_so_I_do_this_because_Im_lazy.toggle_var_avoid_collisions_with_other_libraries_so_I_do_this_because_Im_lazy = 0;
           }
           }
           </script>

<div id="tags-type"  onClick="toggle_avoid_collisions_with_other_libraries_so_I_do_this_because_Im_lazy();">
<span id="enable-sort" class="sort-radius-left"></span>
<span id="sort-tag">By Tags</span>
<span id="sort-year">By Year</span>
</div>

<!-- Get the tag name for every tag on the site and set them
to the `site_tags` variable. -->
{% capture site_tags %}{% for tag in site.tags %}{{ tag | first }}{% unless forloop.last %},{% endunless %}{% endfor %}{% endcapture %}

<!-- `tag_words` is a sorted array of the tag names. -->
{% assign tag_words = site_tags | split:',' | sort %}

<!-- Build the Page -->
<div id="by-tags">
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
    <ul>
</ul>
    <div id="tags-list">
       <!-- Posts by Tag -->
       <div>
         {% for item in (0..site.tags.size) %}{% unless forloop.last %}
           {% capture this_word %}{{ tag_words[item] }}{% endcapture %}
           <h2 id="{{ this_word | cgi_escape }}">{{ this_word }}</h2>
           {% for post in site.tags[this_word] reversed %}
           {% if post.title != null %}
             {% if post.visible != 0 and post.visible != false %}
             <div>
               <span>
               <span class="tag-post-date">
                {{ post.date | date_to_string }} 
               </span>
                <span class="tag-post-content">
                  <a href="{{ post.url }}">{{ post.title }}</a>
                </span>
               </span>
             </div>
           {% endif %}
           {% endif %}
           {% endfor %}
         {% endunless %}{% endfor %}
       </div>
   </div>
</div>

<div id="by-year" style="display:none;">
  <ul class="tags">
  {% assign counter = 0 %}
  {% for post in site.posts %}
    {% assign thisyear = post.date | date: "%Y" %}
    {% assign prevyear = post.previous.date | date: "%Y" %}
    {% assign counter = counter | plus: 1 %}
    {% if thisyear != prevyear %}
      <li><a href="#{{ post.date | date:"%Y" }}">{{ thisyear }} ({{ counter }})</a></li>
      {% assign counter = 0 %}
    {% endif %}
  {% endfor %}
  </ul>

    {% for post in site.posts %}
      {% assign currentdate = post.date | date: "%Y" %}
      {% if currentdate != date %}
        <h2 id="y{{post.date | date: "%Y"}}">{{ currentdate }}</h2>
        {% assign date = currentdate %}
      {% endif %}
      {% if post.title != null %}
      {% if post.visible != 0 %}
        <div>
        <span class="tag-post-date">
         {{ post.date | date_to_string }} 
        </span>
        <span class="tag-post-content">
          <a href="{{ post.url }}">{{ post.title }}</a>
        </span>
     </div>
     {% endif %}
     {% endif %}
    {% endfor %}
</div>

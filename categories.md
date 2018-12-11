---
title: Categories
permalink: categories.html
---

<html>
<head>
<link rel="stylesheet" id="mainstyle" href="{{ "/css/main.css" | prepend: site.baseurl }}">
<script type="text/javascript" src="/admt/admt.js"> </script>
</head>
<body class="side-bar-body">


    <!-- Get the tag name for every tag on the site and set the to the `site_tags` variable. -->
    {% capture site_tags %}{% for tag in site.tags %}{{ tag | first }}{% unless forloop.last %},{% endunless %}{% endfor %}{%
    endcapture %}

    <!-- `tag_words` is a sorted array of the tag names. -->
    {% assign tag_words = site_tags | split:',' | sort %}

    <h1 class="page-heading"><a href="/tags/" target="_parent">Categories!</a></h1>
    {% for item in (0..site.tags.size) %}{% unless forloop.last %} {% capture this_word %}{{ tag_words[item] }}{% endcapture
    %}
    <div><a href="/tags/#{{ this_word | cgi_escape }}" target="_parent" class="tag">{{ this_word }}</a></div>
    {% endunless %}{% endfor %}

</body>
</html>


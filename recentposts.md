---
title: Recent Posts
permalink: recentposts.html
---

<html>
<head>
  <link rel="stylesheet" id="mainstyle" href="/css/{{ site.main_theme }}.css?v={{ site.time | date:'%s' }}">
  <script type="text/javascript" src="/admt/admt.js"> </script>
</head>
<body class="side-bar-body">

<form method="get" id="search" action="http://duckduckgo.com/" target="new" style="margin-bottom: 5px">
  <input type="hidden" name="sites" value="admiralbumblebee.com"/>
  <input type="hidden" name="k8" value="#444444"/>
  <input type="hidden" name="k9" value="#D51920"/>
  <input type="hidden" name="kt" value="h"/>
  <input type="text" name="q" maxlength="255" placeholder="Search AdmiralBumbleBee.com" style="width: 70%;" />
  <input type="submit" value="Go" style="width: 25%;" />
</form>

<h2 class="recent-post-header">
  <a href="/tags/?year=true" target="_parent">Recent Posts</a>
</h2>
{% assign i = 0 %}
{% for post in site.posts limit:50 %}
  {% if post.visible != 0 %}
  <div class="recent-post">
    <a class="recent-post-link" href="{{ post.url }}" target="_parent">{{ post.title }}</a>
  </div>
  {% endif %}
{% endfor %}
</body>
</html>


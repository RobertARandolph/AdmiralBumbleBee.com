---
title: Recent Posts
permalink: recentposts.html
---

<html>
<head>
  <link rel="stylesheet" id="mainstyle" href="{{ "/css/main.css" | prepend: site.baseurl }}">
  <script type="text/javascript" src="/admt/admt.js"> </script>
  <script>
  flexFont = function () {
    var divs = document.getElementsByClassName("flexFont");
    for(var i = 0; i < divs.length; i++) {
    var charl = divs[i].childNodes[1].innerHTML.length;
        var relFontsize = divs[i].offsetWidth / charl * 1.8;
        divs[i].style.fontSize = relFontsize+'px';
    }
};

window.onload = function(event) {
    //flexFont();
};
window.onresize = function(event) {
    //flexFont();
};
  </script>
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

<h1 class="page-heading">Recent Posts!</h1>
{% for post in site.posts limit:10 %}
  {% if post.visible != 0 %}
  <div class="recent-post flexFont">
    <a href="{{ post.url }}" target="_parent">{{ post.title }}</a>
  </div>
  {% endif %}
{% endfor %}


</body>
</html>


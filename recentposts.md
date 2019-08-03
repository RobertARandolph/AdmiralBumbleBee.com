---
title: Recent Posts
permalink: recentposts.html
---

<html>
<head>
  <link rel="stylesheet" id="mainstyle" href="{{ "/css/main.css" | prepend: site.baseurl }}">
  <script type="text/javascript" src="/admt/admt.js"> </script>
  <script>
//  up_fonto = function ( e ) {
//  console.log("Hey!"); 
//  e.target.style.fontSize = "20px";
//  }
//  flexFont = function () {
//    var divs = document.getElementsByClassName("flexFont");
//    for(var i = 0; i < divs.length; i++) {
//    var charl = divs[i].childNodes[1].innerHTML.length;
//        var relFontSize = divs[i].offsetWidth / charl * 2;
//        var minSize = Math.min(relFontSize, 20);
//        divs[i].style.fontSize = Math.floor(minSize) + 'px';
//        //divs[i].addEventListener("mouseover", up_fonto);
//    }
//};

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

{% assign i = 0 %}
{% for post in site.posts limit:50 %}
  {% if post.visible != 0 %}
  <div class="recent-post flexFont">
    <a class="recent-post-link" href="{{ post.url }}" target="_parent">{{ post.title }}</a>
  </div>
  {% endif %}
{% endfor %}
</body>
</html>


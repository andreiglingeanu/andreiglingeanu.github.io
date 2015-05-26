---
layout: default
title: Words
---

<div id="home">
  <h1>Words</h1>
  <ul class="posts">
    <li><span>17 Feb 2015</span> &raquo; <a href="http://ewebdesign.com/problem-raw-css/">
      The Problem With Raw CSS
    </a></li>
    {% for post in site.posts %}
      <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
  </ul>
</div>

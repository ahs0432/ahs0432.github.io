---
title: "PHP Language"
layout: archive
permalink: categories/PHP
author_profile: true
sidebar_main: true
---

{% assign posts = site.categories.PHP %}
{% for post in posts %} {% include archive-single2.html type=page.entries_layout %} {% endfor %}

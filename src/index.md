---
title: 'Good Morning'
layout: 'layouts/feed.njk'
metaDesc: '11ty theme'
imageURL: https://images.unsplash.com/photo-1503481766315-7a586b20f66d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1335&q=80
pagination: 
  data: collections.blog
  size: 7
permalink: '{% if pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber }}{% endif %}/index.html'
paginationPrevText: 'Newer posts'
paginationNextText: 'Older posts'
paginationAnchor: '#post-list'
eleventyNavigation:
  key: Home
  title: 🏠 Home
  order: 1
---
A notebook of sorts. Let's put a pin in everything. 
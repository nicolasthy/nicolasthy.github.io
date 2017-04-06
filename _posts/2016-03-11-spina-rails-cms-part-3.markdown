---
title: 'Spina: A Ruby on Rails CMS – Part 3'
date: 2016-03-11 09:00:00 Z
categories:
- tutorial
- rails
- spina
tags:
- rails
- spina
layout: post
image: spina.png
cover: spina.png
excerpt: Introduction to a new CMS built on Ruby on Rails. This is a step by step
  guide to get started with it.
comments: true
listed: false
prevpost: spina-rails-cms-part-2
published: true
---

<div class="alert alert-warning">
Spina has been updated a lot since I've written these articles. Commands may have changed since and I will do my best to write new articles on Spina soon !
</div>

Hi, this is Part 3 of a serie of article about Spina, you may want to check out [Part 1 - Spina: A Ruby on Rails CMS]({{site.baseurl}}/spina-rails-cms/) first if you are new to Spina or [Part 2 - Creating a Spina Theme]({{site.baseurl}}/spina-rails-cms-part-2) !

In this section we will see how to create the views for our freshly created theme for our blog !

## Creating the Spina Views

We are going to create a blog similar to the one that I currently have. It's done with the [Butane theme for Jekyll](https://github.com/alexcarpenter/butane-jekyll-theme) created by [Alex Carpenter](http://alexcarpenter.me/) with some adjustments that I have done (adding excerpts and covers).

This is what you should get at the end.

![Butane Spina Theme]({{site.baseurl}}/images/tutorial-blog.png "Butane Spina Theme")

To achieve this you will need to create the following files:

* app/views/layouts/lemonsky/application.html.haml
* app/views/labs
  * /pages/homepage.html.haml
  * /pages/show.html.haml
  * /pages/custom.html.haml
  * /shared/_footer.html.haml
  * /shared/_navigation.html.haml

Now that the views exist, you can actually go and create your pages in your Admin Panel and get your app to work. However your pages won't show anything. Here I am just going to show you specific examples to show you how things work on Spina, for the rest I will invite you to download the sources attached to this article.

### Listing the articles with ancestry

Everything you need to display is contained in the `@page` variable. Also Spina is based on ancestry to handle your pages tree. You can use it like this:

_homepage.html.haml_
{% highlight haml linenos %}
%section.c-archives
  %ul.c-archives__list
    - @page.children.each do |child|
      - if child == @page.children.first
        - this_year = child.created_at.strftime("%Y")
        %h2.c-archives__year= this_year
      - else
        - next_year = child.created_at.strftime("%Y")
        - if this_year != next_year
          %h2.c-archives__year= next_year
      %li.c-archives__item
        %h3= link_to child.title, child.materialized_path
        %p= child.created_at.strftime("%b %-d, %Y")
        .n-post-excerpt= child.content(:excerpt).try(:html_safe)
{% endhighlight %}

[Here is the list of all the methods you can use to navigate your tree.](https://github.com/stefankroes/ancestry#navigating-your-tree)

To get the full code for this theme you can go and [download the sources here](https://github.com/nicolasthy/Spina-Butane-Theme) !

### Bonus: Creating a breadcrumb

Here is another example of how you can manipulate your tree using ancestry in Spina
{% highlight haml linenos %}
ol.breadcrumb
  li
    = link_to "Home", root_url
  - @page.ancestors.each do |ancestor|
    li
      = link_to ancestor.menu_title, ancestor.materialized_path
  li.active
    a = @page.menu_title
{% endhighlight %}

`menu_title` is your Navigation Title in your Advanced tab and the `materialized_path` is in the Search Engine tab when creating / updating a page. The name of these variables can be found when looking into the [source code of Spina](https://github.com/denkGroot/Spina/blob/master/app/views/spina/admin/pages/_form_advanced.html.haml).

That's it folks ! Hope this small series will help you start your own project on Spina !

---
layout: post
title:  "Spina Advanced: Building a blog"
date:   2016-03-23 10:00:00 +0100
categories: tutorial rails spina
tags: rails spina
image: spina-blog.jpg
cover: spina-blog.jpg
excerpt: Implementing an existing Spina plugin to create a blog.
comments: true
listed: false
published: false
featured: false
---

Hi, I've been very busy lately trying to explore new stuff and I realized it was time to share some of my discoveries. Some of you may want me to write more articles about React but to be honest I've been mainly working on Spina and there is so much to do on it, really enjoying everything about it !

Therefore I'll be starting a project with you guys: Building a blog ! This will allow me to see if the final result could be a viable solution for my own blog. I'll be learning everything on the go, so as soon as I've managed to achieve something I'll share it with you.

In this article we will take a look at [Bram Jetten's Spina Blog Plugin](https://github.com/Bramjetten/Spina-Blog-Example). I also assume that you have read my previous articles about Spina or at least have a working project with Spina, you can [follow these steps to be up to date]({{site.baseurl}}/spina-rails-cms/) !

So let's get started !!

## Installing a plugin

Unfortunately Bram's blog plugin example does not have any installation guide yet. However Harm de Wit did publish a [wiki to create your own plugin](https://github.com/denkGroot/Spina/wiki/How-to-create-a-plugin) which helped understand how the installation worked.

First of all you need to retrieve the files in the right location (Here I am using a fork of Bram's plugin which is originaly in dutch):
{% highlight shell %}
# run these commands in your rails project
cd vendor
mkdir plugins
cd plugins
git clone https://github.com/nicolasthy/Spina-Blog-Example.git spina_blog
{% endhighlight %}

Once you've cloned the file you can add the plugin to your Gemfile and run `bundle install`:

`gem 'spina_blog', path: 'vendor/plugins'`

This plugin comes with migrations that you need to retrieve in your main app with the following commands:
{% highlight ruby %}
rake spina_blog_engine:install:migrations
rake db:migrate
{% endhighlight %}

You have now succesfully installed the blog plugin ! Now if you head to your admin panel you should have a new tab for Blog Posts !

![Spina Blog Plugin]({{site.baseurl}}/images/blog-admin-plugin.png "Spina Blog Plugin")

## Setting up the views

---
title: 'Spina: A Ruby on Rails CMS'
date: 2016-03-11 09:00:00 Z
categories:
- tutorial
- rails
- spina
tags:
- rails
- spina
image: spina.png
cover: spina.png
excerpt: Introduction to a new CMS built on Ruby on Rails. This is a step by step
  guide to get started with it.
comments: true
listed: true
featured: true
nextpost: spina-rails-cms-part-2
layout: post
---

Hi, lately I have been working on a different project that no longer requires React — neither Javascript actually. It's a CMS built on Ruby on Rails, a kind of equivalent to Wordpress, called [Spina](http://www.spinacms.com/). It's new, it's open-source, it's ruby on rails and it's awesome !

The down-side of this project is that they don't really have any documentation yet. That's why I've decided to start writing about it and even contributed to their Wiki. As I am a front-end developer, I won't be able to talk about all the back-end ruby part. It's going to be mainly some front-end tips and instructions to get started with Spina. You won't find a lot of articles or tutorials about this, but the developers at Spina are very reactive and even opened a Slack channel to communicate with it's users !

So let's get started !

## Installing Spina

Installing Spina is really easy, you only need 3 simple lines given in their [Github repo](https://github.com/denkGroot/Spina).

As it's a Ruby on Rails CMS, you obviously need to have a Rails app first. If you don't have ruby and rails installed on your machine, I've given links to get your environment configured in my [OSX development setup]({{site.baseurl}}/osx-el-capitan-dev-setup/) article !

If you do have Ruby on Rails working, simple create a new project.
{% highlight ruby %}
rails new MySpinaApp
{% endhighlight %}

Then simply add these lines to your `Gemfile`
{% highlight ruby %}
gem 'spina-template'
gem 'spina'
{% endhighlight %}
Don't forget to `bundle install` !

And finally run the installation with the following command in your terminal and answer to the different questions that the command line asks you.
{% highlight ruby %}
rails g spina:install
{% endhighlight %}

Now if you run `rails s` and open up `localhost:3000` you should have your CMS running. If you want to go to the admin panel, just go to `localhost:3000/admin` and use the login you gave in the command line to log in !

In the next section we will see how to create a theme for our new Spina app and I will explain you how to suit your pages to your needs !

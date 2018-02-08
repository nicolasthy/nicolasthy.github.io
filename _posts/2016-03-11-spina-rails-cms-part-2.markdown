---
title: 'Spina: A Ruby on Rails CMS – Part 2'
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
prevpost: spina-rails-cms
nextpost: spina-rails-cms-part-3
comments: true

listed: false
---

<div class="alert alert-warning">
Spina has been updated a lot since I've written these articles. Commands may have changed since and I will do my best to write new articles on Spina soon !
</div>

Hi, this is Part 2 of a serie of articles about Spina, you may want to check out [Part 1 - Spina: A Ruby on Rails CMS]({{site.baseurl}}/spina-rails-cms/) first if you are new to Spina and want to get started with it !

In this section we will see how to configure our Spina app to create our own theme with it's different page templates ! Let's build a blog !!

## Creating a Spina Theme

After installing Spina, and if you chose to use the Demo theme, you will have two files in `config/initializers/themes`, a `default.rb` and a `demo.rb`. I recommend deleting these later, since it might through you an error since your pages are using one of these at the moment.

This is how our New page panel will look like for our Post page creation.

![Spina Admin Panel]({{site.baseurl}}/images/spina-admin.png "Spina Admin Panel")

You can go and create a new file in this folder with your own theme name, I'll be calling it `labs.rb`.

Then add the following by changing "Labs" by your theme name !
{% highlight ruby linenos %}
module Spina
  module LabsTheme
    include ::ActiveSupport::Configurable

    config_accessor :title, :page_parts, :view_templates, :layout_parts, :custom_pages, :plugins, :structures

    self.title = 'Labs'

  end
end

theme = Spina::Theme.new
theme.name = 'Labs'
theme.config = Spina::LabsTheme.config
Spina.register_theme(theme)
{% endhighlight %}

Ok so we now have our theme configured. However we need to add page_parts, templates and a custom page.
The following code snippets will go right after `self.title = 'Labs'`.

Let's add some page_parts. If you look at the demo theme you can see 8 page_parts that are all the available page_parts on Spina (Line, Text, Photo, Photo collection, Attachment, Attachment collection, Structure and Color). In our case we are building a simple blog, therefore we only need 3 parts: an **excerpt** (Text), a **content** (Text) and a **thumbnail** (Photo).
{% highlight ruby linenos %}
self.page_parts = [
  # Labs Page parts
  { name: 'excerpt', title: 'Excerpt', page_partable_type: 'Spina::Text' },
  { name: 'content', title: 'Content', page_partable_type: 'Spina::Text' },
  { name: 'thumbnail', title: 'Thumbnail', page_partable_type: 'Spina::Photo' }
]
{% endhighlight %}

For our blog we will need 3 type of pages: a Homepage with the list of all our posts, a Post page and a Custom page for all the other static pages (i.e. an About page).
{% highlight ruby linenos %}
self.view_templates = {
  'homepage' => { title:'Homepage', page_parts: %w(excerpt content) },
  'show' => {
    title: 'Default Post', description: 'A default post page', usage: 'Can be used for a blog post',
    page_parts: %w(excerpt content thumbnail)
  },
  'page' => { title:'Custom Page', page_parts: %w(content) }
}
{% endhighlight %}
<center><small><em>Writting `%w(excerpt thumbnail content)` is the same as writting `["excerpt", "thumbnail", "content"]`. It's just a shortcut.</em></small></center>

And finally we will add a custom_pages, that will be our Homepage. It seems to be a bug with Spina, but every time you update your Preferences, it regenerates all the defined custom_pages if they don't exist. And unfortunately I didn't manage to not to define any custom_pages. That's why we will only define the Homepage which will always be existent on our website.
{% highlight ruby linenos %}
self.custom_pages = [
  { name: 'homepage', title: 'Home', deletable: true, view_template: 'homepage' }
]
{% endhighlight %}
I'd rather set `deletable: true`, in case there is a bug and we get two or more homepages...

That's it ! You now a configured your theme for our blog !

In the next section we will see how to use this theme in our Spina App !

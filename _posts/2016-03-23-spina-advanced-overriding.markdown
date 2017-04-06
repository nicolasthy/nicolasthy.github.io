---
title: 'Spina Advanced: Overriding'
date: 2016-03-23 09:00:00 Z
categories:
- tutorial
- rails
- spina
tags:
- rails
- spina
layout: post
image: spina-advanced.jpg
cover: spina-advanced.jpg
excerpt: Going further with Spina and trying to override it's default behavior to
  fits our needs.
comments: true
listed: true
featured: false
---

<div class="alert alert-warning">
Spina has been updated a lot since I've written these articles. Commands may have changed since and I will do my best to write new articles on Spina soon !
</div>

Hi, previously we saw [how to install and set up our own theme on Spina]({{site.baseurl}}/spina-rails-cms/). However it just didn't feel like I had a full control of my content and felt the need to override the default behavior of the CMS.

Spina allows you to implement plugins just like on Wordpress, unfortunately I'm no Ruby expert and didn't really understand how I could achieve to create my own plugin. It is however something I am looking forward to do and am currently working on it.

So here we are, I'd like to modify some behaviors on Spina but I don't want to develop a plugin for it. Actually a plugin would probably not be appropriate for this kind of change. I'd like to set a default `<title>` when I don't specify it in the `SEO <title>` field which would be “{Page title} - {Site name}”. If you have already used Spina you should know that by default it takes the Page Title as the `SEO <title>` when you leave it blank. Why would I need to change this? I could simply go to my layout and append the Site name ! Sure... But what if I don't need the Site Name for a given page? How do I manage to do this? And I would have to set a condition to not to show the Page Title on the homepage since it would only be the Site Name.

This might not look like the most interesting override to apply to Spina, however it's easy enough to help you understand how it works. You can do whatever you want after this. So let's get started !

## Unlinking the Title and the SEO Title

By default when setting a title to your page, it creates a `SEO <title>` but this is no longer what we want it to do.

To do that we will have to recreate the `Page` model and update the part we want to change. Let's look at [Spina's source code for this](https://github.com/denkGroot/Spina/blob/master/app/models/spina/page.rb).

Simply create a new file `app/models/spina/page.rb` and copy paste the code from Spina.
Then let's change the part we need which is the following:
{% highlight ruby %}
def seo_title
  read_attribute(:seo_title).blank? ? title : read_attribute(:seo_title)
end
{% endhighlight %}
That we will be replacing by:
{% highlight ruby %}
def seo_title
  read_attribute(:seo_title)
end
{% endhighlight %}

Now if you set your `SEO <title>` to blank it won't insert the title of the page instead.

## Displaying our custom page title

This is the easy part, we just have to set our title in our default layout:
{% highlight ruby %}
title = @page.seo_title.present? ? @page.seo_title : "#{@page.title} - #{current_account.name}"
{% endhighlight %}

That's it ! The `current_account.name` references the Website name that you may set in your admin panel. Pretty easy don't you think?


You can apply this to any behavior in Spina by simply recreating the desired file at the same location as in Spina's source code and change the line you want.

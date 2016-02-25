---
layout: post
title:  "Coffeescript to ES6"
date:   2016-02-25 08:00:00 -0500
categories: blog
tags: blog coffeescript es6
image: react-learning-center.png
excerpt: Why I switched from CoffeeScript to ES6 using ReactJS.
comments: true
listed: true
---
_TLDR_: **CoffeeScript** is good, but in my opinion, it isn't the right choice for **ReactJS**. It is easier to go with ES6 if you want to work on both Rails and non-Rails apps.


Hi, for the last two months I have been switching from **[CoffeeScript](http://coffeescript.org/)** to **[ES6](https://babeljs.io/docs/learn-es2015/)** on my ReactJS projects. In fact when I started my part time job — and started learning React — I had to integrate React to an existing Ruby on Rails project. As you know most Rails developers use CoffeeScript, so I had to start working with it.

Hopefully the **[react-rails](https://github.com/reactjs/react-rails)** gem that I used did support CoffeeScript and it does work pretty well !

So why the hell did I switch to ES6?

As I told in my previous post, I am starting to learn Redux and other libraries that I can combine with ReactJS. **Redux** needs NPM to be installed and as I am no Rails pro, I didn't think it was possible to have it on my app. Therefore I started learning Redux on other side projects without Rails. I was first using **Browserify** and it was a pain in the ass to get CoffeeScript to be compiled along with React... So I just went without it on these projects and started to learn how to write **ReactJS without CoffeeScript**. At first it was a mess ! I constantly forgot the curly brackets, the semicolons, the `var` keyword, ... CoffeeScript is so easy and practical, why did I even try using something else?!

Then came the time where, on my Rails project, I had to do something I didn't know how to do. I looked up on stackoverflow and found some solutions written in plain Javascript that I didn't know how to convert to CoffeeScript. I had to start using, frequently, a [converter tool (JS2Coffee)](http://js2.coffee/) and the resulting code was often too complicated. My React code was already a mess since I was still learning and didn't know any best practice, but it got even worse, I hardly understood my own code.

The thing that made me switch to ES6 is **React's Add-Ons**. I had been trying to use **[React's Animation](https://facebook.github.io/react/docs/animation.html)** for a while and never achieved to make it work (and still don't), so I asked for [help on stackoverflow](http://stackoverflow.com/questions/34775456/react-rails-animations-with-coffeescript) and here was the first answer:

> _I believe you're shooting yourself in a foot by trying to use both jsx and coffee script at the same time._
> _Rails likes plain ol' javascript just as much as coffee!_

From there I asked myself what I should do. I didn't want to go back to _plain ol'_ Javascript since I was looking to use something I didn't know. So I talked about it with a co-worker and he had done a project using ES6 and it looked really nice and clean ! The complete opposite of my own code.

I already intended rewriting my code since I didn't split well my components, so it didn't take me much time to decide to do so using ES6. It's quite easy to switch from one to the other and ES6 isn't really hard to learn either.

Now I only work with ES6 and no longer use CoffeeScript which looks too compact and actually scares me.

CoffeeScript is good, but in my opinion, it isn't the right choice for ReactJS.

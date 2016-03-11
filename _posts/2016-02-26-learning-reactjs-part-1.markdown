---
layout: post
title:  "Learning React.js: Part 1 - What is React?"
date:   2016-02-26 11:00:00 +0100
categories: tutorial react
tags: react redux webpack browserify nodejs
image: react-learning-center.png
excerpt: Learn ReactJS step by step for all levels. This is step 1 on this course where I will try to explain to you what React is and when you should use it.
comments: true
listed: false
nextpost: learning-reactjs-part-2
---
_**Prelude:**_ This article is part of a series of lessons about React.js, you can find all of them [here]({{site.baseurl}}/learning-reactjs/) !

Hi, let me explain to you the reasons I have been working with **React** for the past months. If I get the definition from the official docs from Facebook, React is a Javascript Library for building user interfaces. People use React as the V of MVC which abstracts away the DOM from you, giving a simpler programming model and better performance. However I'm not sure it is clear enough for all of you.

## Why I chose React.js

When I have been given the chance to choose the library I was going to be using for my project at work I had the option between **Angular**, **React** or an other library (Ember, Backbone, ...). I didn't know any of these, the only thing I was told was "We need a dynamic app and from what we know React is new, it's done by **Facebook** and you don't need to rewrite a full MVC app.". I had already read a little bit of Angular's documentation since a friend of mine was using it at his work and I didn't want to rewrite a full MVC app while we had already a solid Rails app, therefore the choice was easy for me, but it may not be for you.

I am not trying to start a war with all of you Angular lovers, _**it's a great JS library**_. If you are familiar with Angular it might be a good idea trying to learn React and the other way too. I chose React for it's simplicity and it's speed. When I tried to learn Angular I was lost with all the `ng` everywhere ...

## What makes React.js a good choice

The concept of **virtual DOM** and the fact that only the updated parts are re-rendered seduced me. In fact React abstracts away the DOM from you, giving a simpler programming model and better performance. React can also render on the server using **Node**. I also discovered that Facebook had an other library, React Native, that allows you to create native apps using React. This is a huge bonus since I have been looking to create mobile apps for a while and even started learning **Swift** a year ago.

An interesting thing about React is that you have to build an app that is composed of components which are _the smallest possible representative of a group of DOM elements along with its corresponding actions and state_. Therefore you have to decompose your code in multiple components which makes your app really clean and simple to update. Even though this is a common practice in programming, React forces you to work this way in order to achieve your objectives.
This is how it could look like:

![React Lifecycle]({{site.baseurl}}/images/react-lifecycle.png "React Lifecycle")
_<center><small>React.js app lifecycle</small></center>_

Here you can see that when you open an app, it renders a component that may see it's state evolve during time and that this component may render another component as a child. I will continue talking about **states, props and render** in the next section.

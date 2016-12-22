---
title: 'Learning React.js: Part 2 - State vs Props'
date: 2016-02-29 15:00:00 Z
categories:
- tutorial
- react
tags:
- react
- redux
- webpack
- browserify
- nodejs
layout: post
image: react-learning-center.png
excerpt: Learn ReactJS step by step for all levels. This is step 2 on this course
  where I will explain you the difference between state and props in React.
comments: true
listed: false
prevpost: learning-reactjs-part-1
---

_**Prelude:**_ This article is part of a series of lessons about React.js, you can find all of them [here]({{site.baseurl}}/learning-reactjs/) !

Hi, as I was starting to mention state and props in [my previous post about React.js]({{site.baseurl}}/learning-reactjs-part-1/), I will try to explain you what these are.

There are two types of "model" data in React: props and state. It's important to understand the distinction between the two.

Let's start with state so you can understand easier what props are !

## What is state in React.js

Think about it like if it was the state of a component at a given time. For example take the like button from any given social network, at first when you start your app we can say that it's state is set to `false`. Now you click it, it triggers an event and the like button becomes active, we've just set it's state to `true`. Your like button will update through time therefore you need it to have a state.

Let's write some code to show you how it works.

{% highlight javascript linenos %}
import React, { Component } from 'react';

class Like extends Component{
  constructor(props){
    super(props);

    this.state = {
      like: false
    }
  }
  handleClick(e){
    e.preventDefault();
    this.setState({like: !this.state.like})
  }
  render(){
    return(
      <div>
        <button onClick={this.handleClick}>
          {this.state.like ? "Unlike" : "Like"}
        </button>
      </div>
    );
  }
}

export default Like;
{% endhighlight %}

I am not yet going to go through all the code, I'll keep that for another section. However you can see here that my button triggers an `onClick` event which will update the like state thanks to `setState` and inside my button the text will not be the same when the state is `true` or `false`. How does React manage that? Here enters the virtual DOM. In fact when you update the state of a component, it will re-render itself by giving to the virtual DOM new values which will then update the actual DOM dynamically.

I think this might be enough regarding the state in React, it might not be enough explanation but you will understand it better when starting to write actual code.

## What is props in React.js

So from here we can say that the state of a component can be updated through time when the user triggers an event.

Props are the "opposite" of state. It should not, and won't update. However you may pass props from a component to it's children and then pass these props to the state of the new component.

That's it for me, understanding props and state in React is fundamental and I invite you to read these other sources in case my explanations didn't help you at all:


* [props vs state – Github](https://github.com/uberVU/react-guide/blob/master/props-vs-state.md){:rel="nofollow"}
* [Thinking in React – Facebook](https://facebook.github.io/react/docs/thinking-in-react.html){:rel="nofollow"}
* [What is the difference between state and props – stackoverflow](http://stackoverflow.com/questions/27991366/what-is-the-difference-between-state-and-props-in-react){:rel="nofollow"}

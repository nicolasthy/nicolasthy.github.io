---
title: 'Learning React.js: Part 2 - Writing your first component'
date: 2017-04-04 15:00:00 Z
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
  where I will show you how to create your first React Component.
comments: true
listed: false
prevpost: learning-reactjs
nextpost: learning-reactjs-part-3
---

_**Prelude:**_ This article is part of a series of lessons about React.js, you can find all of them [here]({{site.baseurl}}/learning-reactjs/) !

Hi ! In the previous article, we introduced `create-react-app`, a tool to generate a scaffolded React project. If you haven't yet installed and created a new app with this command line tool, I invite you to do so as I will take it as a starting point for further examples.

Here is the generated code in your `src/App.js`. I removed some of the JSX to make it easier to read.

{% highlight javascript linenos %}
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        Hello World
      </div>
    );
  }
}

export default App;
{% endhighlight %}

This is a standard boilerplate of a React Component. It's purpose, render a simple Hello World. It's not much, but it will allow me to introduce you to some "new" concepts.

## Imports and destructuring
### Destructuring

{% highlight javascript %}
import React, { Component } from 'react';
{% endhighlight %}

Our starting point for every component we will create in the future. Importing React and the tools needed to create a Component. This is a good example of `destructuring`. When I started writting React code, I usually had to write the following:

{% highlight javascript %}
// Before
class App extends React.Component { ... }
// After
class App extends Component { ... }
{% endhighlight %}

After a while, I discovered what `destructuring` meant and how to use it. To give you an easy case of `destructuring`, imagine we have the following object:

{% highlight javascript %}
const person = {
  firstName: 'Nicolas',
  lastName: 'Thiry'
};
{% endhighlight %}

If I need to render my first name, I would have to do `person.firstName`. In this case it's not that complicated to prefix every property with `person`, but in some situations it's exhausting. That's why we can destructure this object to be able to use only `firstName` to render "Nicolas".

{% highlight javascript %}
// If you want to rename the properties
const { firstName: first, lastName: last } = person;
// Or use some nice ES6, { firstName: firstName } == { firstName }
const { firstName, lastName } = person;
{% endhighlight %}

You will find this pretty convenient when dealing with long variables such as `this.props.user.attributes.firstName`.

### Imports

Let's go back to our initial case:

{% highlight javascript %}
import React, { Component } from 'react';
{% endhighlight %}

This time we are importing a module, it looks like destructuring but it doesn't actually work the same way. When importing, you usually fetch an Object or value from a file containing some `export` statements (except for CSS and SVG apparently, if someone could light me up on this point I would be glad to understand).

You have two types of exports: __named exports__ and __default exports__.

{% highlight javascript %}
// Named exports with equivalent import
export const Number = 10;
import { Number } from '../path/to/file';
// Default exports with equivalent import
export default {
  Number: 10
}
import File from '../path/to/file';
const { Number } = File;
{% endhighlight %}

The default export is unique and will usually be used when dealing with single exports in a file. As you can see in our Component example, we export default our Component since it is the only Object we intend to export.
With named exports you can have multiple exports in a single file, allowing you to import only what you need.
You can however export a same Object as a named export and a default export. I assume this is how React does it for it's Component.

{% highlight javascript %}
export const Object;

export default {
  Object
};
{% endhighlight %}

With the following you can import and use Object like this:
{% highlight javascript %}
import File, { Object } from '../path/to/file';
console.log(File.Object)
console.log(Object)
{% endhighlight %}

Both `File.Object` and `Object` will log the same thing and I assume this is how it is done in React to allow us to write both `React.Component` or `Component`.

___

## JSX and Rendering

When talking about rendering in React, we often talk about JSX. JSX is a syntax used by React for writing HTML like code that will be converted into Javascript in order to interact with the DOM. It's a long and interesting topic that I won't focus on in this article since it is already long enough.

All you need to know for now, is that it is almost like normal HTML.
The differences are:
* `class` becomes `className`
* JSX renders a virtual DOM that will then be converted to real DOM
* The rendered component must be surrounded by a single DOM element
* You can easily insert Javascript in JSX with curly brackets

When rendering you can return a single DOM element and use the inline syntax or in case of multiple line, juste use the parenthesis.

{% highlight javascript %}
render() {
  return <div className="App">Hello World</div>;
}
// OR
render() {
  return (
    <div className="App">
      Hello World
    </div>
  );
}
{% endhighlight %}

That's it for today. If you have questions or suggestions, leave a comment bellow or tweet me ([@nicolasthy](http://twitter.com/home?status=@nicolasthy)) !

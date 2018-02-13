---
title: 'Learning React.js: A step by step course'
date: 2017-02-23 09:00:00 Z
category: react
tags:
- react
- webpack
layout: post
image: learning-react-getting-started.png
cover: learning-react-getting-started.png
excerpt: Learn ReactJS step by step for all levels.
comments: false

listed: true
featured: false
size: small
---

React has become very popular among developers within the past few years. Many Javascript developers have switched from other libraries to React and sometimes switching from a different library may be difficult to understand the basics of React.

___

## Summary
* [Part 1: Setting up React]({{site.baseurl}}/learning-reactjs/#part-1-setting-up-react)
* [Part 2: Writing your first component]({{site.baseurl}}/learning-reactjs-part-2/)
* [Part 3: State vs Props]({{site.baseurl}}/learning-reactjs-part-3/)
* Part 4: Component Lifecycle
* Part 5: Components Nesting

___

# Part 1: Setting up React

React has grown a lot since it's release and the way I get started with a new React project has changed too. This was the part I hated the most with React, I didn't know much about webpack, browserify, ... therefore it was difficult for me to get the right settings.
Dan Abramov (a React beast), created a node module, `create-react-app` [on GitHub](https://github.com/facebookincubator/create-react-app#getting-started), that helps you do all the dirty stuff (webpack config, install core dependencies, ...). It's amazing and I strongly advise you to use it.

The documentation of this utility is very well written. I won't rewrite it again and let those who want further informations go check out the official docs.

Here are the commands you need to run to get your app up and running ! (Assuming you have Node installed)

{% highlight shell %}
npm install -g create-react-app

create-react-app my-app
cd my-app/
npm start
{% endhighlight %}

I highly recommend installing and using `yarn` instead of npm to install new dependencies.
On macOS simply install it with Homebrew:
{% highlight shell %}
brew install yarn
{% endhighlight %}
For the other platforms, I'll let you check [the official website](https://yarnpkg.com/en/docs/install#windows-tab).

Yarn will allow you to manage your dependencies faster than npm.
{% highlight shell %}
// Add new dependencies
yarn add DEPENDENCY_NAME
{% endhighlight %}

If you have already run `create-react-app` you will see that in the generated files, there is an `src` folder. This is the folder where you will be working with all your JS files. You have some default code in there that we will look into deeper in the next sections.

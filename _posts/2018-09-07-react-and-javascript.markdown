---
title: 'Lookback at React in 2018'
date: 2018-09-07 09:00:00 Z
category: react
tags:
- react
layout: post
image: react-2018.jpg
cover: react-2018.jpg
excerpt: Three years later, this is what React has become and why I am still in love with this librairy
comments: true

listed: true
featured: true
size: large

published: true
---

Since 2009, JavaScript has overcome a huge growth thanks to Node.js which gave birth to new frameworks and new possibilities to achieve.

The ecosystem has grown. Using JavaScript for simple animations and creating dynamic interfaces with jQuery is long gone. Node.js offers so many possibilities and has open JavaScript to so many new aspects: desktop applications, web applications, command line tools, back-end development and mobile applications.

Angular, Ember and Backbone were the first big JavaScript frameworks. They opened the path to a whole new way of building web applications. However React will be the one that we will focus on. Created by Facebook and publicly released in 2013, React has brought a lot of new improvements to the JavaScript ecosystem forcing it to grow faster.

**React is light and powerful**

React is defined as the V of the MVC pattern. Being very lightweight, React can be easily included in any existing application in order to improve the quality and the performances of it’s Views (V in the MVC pattern). React uses reactive programming and Virtual DOM to improve the performances of the animations for a modern and dynamic application.

**It solves real issues**

Facebook has created React to in order to fix a recurring issue on their social network. In fact they had a lot of complaints regarding chat notifications not syncing correctly across the platform. Therefor they searched for a way to setup a data flow in their application using a single data source. This gave birth to Flux. Flux makes state change predictable while storing the application’s state in a store and dispatching it to the components who need it.

**Then the React God joined the battle**

**Dan Abramov**, a developer at React, created his own implementation of this pattern, lighter and easier to approach. He is the author of Redux. This version of the Flux pattern has grown so much that it has more stars on Github than the official version.

Seing how appreciated and how much React had grown, the Facebook teams decided to go even further. Two years after it’s release, they realised that the Virtual DOM was an abstraction of the actual DOM and they were actually not linked to each other. It can wrap any kind of view system: DOM for the web and UIKit for iOS. This is how React Native was created and how Facebook opened it’s library to new possibilities by allowing developers to create native cross-platform mobile applications using React.

Therefor we went through the processes applied by [Instagram to integrate React Native to it’s existing native application](https://engineering.instagram.com/react-native-at-instagram-dd828a9a90c7#.9u2h3wo82) and the [development of the new Codiko’s mobile application]({{site.baseurl}}/codiko-mobile/).

The results of this analysis demonstrated the power and the ease of use of this library in the development of modern mobile applications. Creating an iOS and Android app can be tedious for companies. React Native achieves the same goals than native languages, plus some: same or better performances and easy to deploy.

Other libraries emerged and try to compete with React. **Evan You** and **Dominic Gannaway** have both released their own one: Vue.js and Inferno. Vue.js is the closest library to React, it has incredible performances and recently allows to develop mobile apps with Weex. Backed by the Chinese community and their top companies (Alibaba and Baidu), Vue.js is growing to be a serious competitor.
The second one, Inferno, was created to see if it was possible to improve performances while insanely reducing it’s file size. The results were so impressive that Facebook hired it’s author to help them build the React of the future.

The React of the future is closer than we think, in fact during their annual conference, Facebook announced their ongoing developments.
React Fiber is the name given to this new React. Completely rewritten it’s core, their objective was to improve it’s performances by handling scheduling of the call-stack. This allows React developers to set priorities on their render method to avoid low-priority processes to slow the more important ones.

Facebook has decided to go even further with it’s library and announced during the same conference the release of React VR, a library allowing developers to create 360º websites and VR apps. They have in fact invested a lot in VR and are trying to make VR the new internet.

The social network has taken the risk, 5 years ago, to reinvent web development.

## Reactive Programming

What made React special, and that is still probably true, is the fact that it relies on Reactive Programming. I assume it's name comes from this, even if my sources were kind of vague on this point, but it makes sense when we aknowledge the fact that a React applications, reacts to it's users input.
When a user interacts with the applications, it reacts instantly to it and updates the view. That's a bold description of React.

But there is more to Reactive Programming. The library relies on Virtual DOM. A complex but simple pattern. It's `render` method is the key to everything you need.

### Virtual DOM

"The DOM was never designed to create dynamic interfaces"

The DOM (Document Object Model) was designed to be a static representation of an HTML web page. However Javascript, and to be more generic the Web, has evolved a lot throughout the years to respond to new needs. Therefor it needs to be dynamic and to interact with it's user to provide an ideal experience.

Introducing the mighty Virtual DOM. This concept was not introduced by React, but Facebook took advantage of it and built React around it.

The Virtual DOM is in fact a representation of the DOM in a JSON format, which is then watched to identify the elements that were updated and then applied to the DOM. React's `render` function allows us to write HTML code in JSX (an HTML like syntax) which will then be processed in Javascript to generate our Virtual DOM JSON and finally appear in our DOM.
When posting a comment on a page, instead of refreshing the page or your `CommentList`, it will only append a new `Comment` item to your list.
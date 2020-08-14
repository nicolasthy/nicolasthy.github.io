---
title: "Create your own blog using Next.js"
author: Nicolas Thiry
tags: ["javascript"]
excerpt: Next.js is a powerful and popular React framework that helps you create easily SSR applications.
created_at: "2020-07-29 14:00:00 Z"
published: false
---

![Next.js](../static/nextjs.jpg)

## Creating a blog

Let's get started an create a blog using Next.js. This step by step guide is using various dependencies that I've chosen and with whom I'm comfortable with.

I will be using React Hooks and styled-component. Here is a list of the versions of the main dependencies I will be using:

* `next: 9.4.4`
* `react: 16.13.1`
* `styled-components: 5.1.1`

I will also assume that you have basic knowledge of Javascript and React.

### Create a Next.js project

First of all let's initialize the project:

```console
npx create-next-app my-awesome-blog
```

If you prefer using npm instead of yarn, you can add `--use-npm` to the previous command line.
Select the Default starter app so we can set everything by our self.

You should now be able to run `yarn dev` and start your Next.js app.


## Bonus: Implement dark mode
---
title: "Create your own blog using Next.js"
author: Nicolas Thiry
tags: ["react"]
excerpt: Next.js is a powerful and popular React framework that helps you create easily SSR applications.
created_at: "2020-07-29T14:00:00Z"
published: false
---

Let's get started an create a blog using Next.js. This step by step guide is using various dependencies that I've chosen and with whom I'm comfortable with.

This blog has been built with Next.js and I will show you how and the ressources I have used to achieve it.

I have chosen Next.js instead of Gatsby for personnal reasons, I believe both are very good to achieve this result. There are maybe many more frameworks that are as good as these.

My first attempt was based on [this awesome article](https://cezarsampaio.dev/post/creating-a-blog-with-nextjs) written by [@cezarsmpio](https://twitter.com/cezarsmpio).
It ended up being a patchwork of that article and many more I had found on dev.io and the final result wasn't clean enought.

Therefore I ended up finding an [example repo from next.js](https://github.com/vercel/next.js/tree/canary/examples/blog-starter) which I used as a reference.

These references are great and can be used as a base if you want. In this post I will simply show you my interpretation and how I ended up with this blog. You will also find a bonus tutorial at the end to learn how to implement the famous Dark Mode 🙌

I will be using React Hooks and styled-component. Here is a list of the versions of the main dependencies I will be using:

* `next: 9.4.4`
* `react: 16.13.1`
* `styled-components: 5.1.1`

I will also assume that you have basic knowledge of Javascript and React.

## Create a Next.js project

First of all let's initialize the project:

```Shell
npx create-next-app my-awesome-blog
```

If you prefer using npm instead of yarn, you can add `--use-npm` to the previous command line.
Select the Default starter app so we can set everything by our self.

You should now be able to run `yarn dev` and start your Next.js app.


## Bonus: Implement dark mode
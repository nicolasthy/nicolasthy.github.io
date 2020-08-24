---
title: "Switching to React Hooks"
author: Nicolas Thiry
tags: ["react"]
excerpt: How I switched from React components to React Hooks on a large scale application.
created_at: "2020-07-29 12:00:00 Z"
published: false
---

For a long time React components were written as `class` components. Before getting into details about the why and how, let's have a look at the same component written with and without Hooks.

Without hooks:

```React
import React, { Component } from "react"

class MyAwesomeComponent extends Component {
  construtor() {
    super()

    this.state = {
      value: "Hello you.",
    }
  }

  updateValue = () => {
    this.setState({ value: "Hello me!" })
  }

  render() {
    return (
      <div>
        <h1>My Awesome Component</h1>
        <span>{this.state.value}</span>
        <button onClick={this.updateValue}>Update Value</button>
      </div>
    )
  }
}

export { MyAwesomeComponent }
```

With hooks:

```React
import React, { useState } from "react"

const MyAwesomeComponent = () => {
  const [value, setValue] = useState("Hello you.")

  const updateValue = () => {
    setValue("Hello me!")
  }

  return (
    <div>
      <h1>My Awesome Component</h1>
      <span>{value}</span>
      <button onClick={updateValue}>Update Value</button>
    </div>
  )
}

export { MyAwesomeComponent }
```

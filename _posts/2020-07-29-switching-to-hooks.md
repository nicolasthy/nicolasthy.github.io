---
title: "Switching to React Hooks"
author: Nicolas Thiry
tags: ["react"]
excerpt: How I switched from React components to React Hooks on a large scale application.
created_at: "2020-07-29T12:00:00Z"
published: false
---

For a long time React components were written as `class` components. Before getting into details about the why and how, let's have a look at the same component written with and without Hooks.

<SyntaxComparaison>

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

</SyntaxComparaison>
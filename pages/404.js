import { useEffect, useState } from "react"

import { Error404 } from "../components/base/Error404/Error404"

const ERRORS = [
  {
    image: "/static/404/nicolas-angry.png",
    title: "&$!#%",
    message: "Are you trying to break something over here?! I hope your just lost.",
  },
  {
    image: "/static/404/nicolas-you-rock.png",
    title: "Let’s do this",
    message: "What you’re looking for isn’t here, but I got your back!",
  },
  {
    image: "/static/404/nicolas-hmm.png",
    title: "Hmm",
    message: "So you ended up here, that’s strange. You probably missed something.",
  },
]

export default () => {
  const [error, setError] = useState({})

  useEffect(() => {
    setError(ERRORS[Math.floor(Math.random() * 3)])
  }, [])

  return <Error404 error={error} />
}

import { useEffect } from "react"

function Administrator() {
  useEffect(function () {
    document.title = import.meta.env.VITE_MODE
  }, [])
  return (
    <p>
      {import.meta.env.VITE_MODE}
    </p>
  )
}
export default Administrator
import { useEffect } from "react"

function Administrator() {
  useEffect(function () {
    document.title = import.meta.env.VITE_MODE
  }, [])
  return (
    <BrowserRouter>
      <Routes>

      </Routes>
    </BrowserRouter>
  )
}
export default Administrator
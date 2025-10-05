import { useEffect } from "react"
import { BrowserRouter, Routes } from "react-router-dom"

function Seller() {
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
export default Seller
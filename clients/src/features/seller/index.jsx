import { useEffect } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import Login from "./pages/Login"
import Register from "./pages/Register"

function Seller() {
  useEffect(function () {
    document.title = import.meta.env.VITE_MODE
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}
export default Seller
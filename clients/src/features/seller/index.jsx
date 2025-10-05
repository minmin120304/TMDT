import { useEffect } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import Login from "./pages/Login"
import Register from "./pages/Register"
import AuthLayout from "./layouts/AuthLayout"

function Seller() {
  useEffect(function () {
    document.title = import.meta.env.VITE_MODE
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default Seller
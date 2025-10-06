import { useEffect } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import Login from "./pages/Login"
import Register from "./pages/Register"
import AuthLayout from "./layouts/AuthLayout"
import MainLayout from "./layouts/MainLayout"

function Seller() {
  useEffect(function () {
    document.title = import.meta.env.VITE_MODE
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="tai-khoan" element={<AuthLayout />} >
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Route>
        <Route path="quan-ly" element={<MainLayout />}>

        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default Seller
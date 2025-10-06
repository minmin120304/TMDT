import { useEffect } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import AuthLayout from "./layouts/AuthLayout"
import MainLayout from "./layouts/MainLayout"
import AllProduct from "./pages/AllProduct"
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"
import Register from "./pages/Register"
import { ROUTE_KEYS } from "./routes"

function Seller() {
  useEffect(function () {
    document.title = import.meta.env.VITE_MODE
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTE_KEYS.ACCOUNT} element={<AuthLayout />} >
          <Route path={ROUTE_KEYS.REGISTER} element={<Register />} />
          <Route path={ROUTE_KEYS.LOGIN} element={<Login />} />
        </Route>
        <Route element={<MainLayout />}>
          <Route path={ROUTE_KEYS.MANAGEMENT}>
            <Route index element={<Dashboard />} />
            <Route path={ROUTE_KEYS.PRODUCTS} element={<AllProduct />} />
          </Route>

          {/* Default error page */}
          <Route path={ROUTE_KEYS.NOT_FOUND} element={"ddd"} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default Seller
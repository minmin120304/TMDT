import { useEffect } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import AuthLayout from "./layouts/AuthLayout"
import MainLayout from "./layouts/MainLayout"

import AddProduct from "./features/AddProduct"
import Dashboard from "./features/Dashboard"
import Login from "./features/Login"
import ProductDashBoard from "./features/ProductDashBoard"
import Register from "./features/Register"

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

            <Route path={ROUTE_KEYS.PRODUCTS}  >
              <Route index element={<ProductDashBoard />} />
              <Route path={ROUTE_KEYS.INSERT} element={<AddProduct />} />
            </Route>
          </Route>

          {/* Default error page */}
          <Route path={ROUTE_KEYS.NOT_FOUND} element={"ddd"} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default Seller
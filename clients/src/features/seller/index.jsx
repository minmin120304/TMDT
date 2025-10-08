import { Route, Routes } from "react-router-dom"

import AuthLayout from "./layouts/AuthLayout"
import MainLayout from "./layouts/MainLayout"

import Login from "./features/Auth/Login"
import Register from "./features/Auth/Register"
import Dashboard from "./features/Dashboard"
import DiscountDashboard from "./features/Marketing/DiscountDashboard"
import MarketingDashboard from "./features/Marketing/MarketingDashboard"
import OrderDashboard from "./features/Order/OrderDashboard"
import ReturnOrder from "./features/Order/ReturnOrder"
import AddProduct from "./features/Product/AddProduct"
import ProductDashBoard from "./features/Product/ProductDashboard"
import { ROUTE_KEYS } from "./routes"

function Seller() {

  return (
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

          <Route path={ROUTE_KEYS.ORDERS} >
            <Route index element={<OrderDashboard />} />
            <Route path={ROUTE_KEYS.RETURN} element={<ReturnOrder />} />
          </Route>

          <Route path={ROUTE_KEYS.MARKETING} >
            <Route index element={<MarketingDashboard />} />
            <Route path={ROUTE_KEYS.DISCOUNTS} element={<DiscountDashboard />} />
          </Route>
        </Route>

        {/* Default error page */}
        <Route path={ROUTE_KEYS.NOT_FOUND} element={"ddd"} />
      </Route>
    </Routes>
  )
}
export default Seller
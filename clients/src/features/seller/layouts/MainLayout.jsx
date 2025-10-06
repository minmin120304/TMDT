import { Outlet } from "react-router-dom"
import Sidebar from "../components/Sidebar"

function MainLayout() {
  return (
    <div className="w-screen h-screen overflow-hidden grid grid-cols-[1fr_5fr]">
      <Sidebar />
      <div className="h-full overflow-auto">
        <Outlet />
      </div>
    </div>
  )
}

export default MainLayout
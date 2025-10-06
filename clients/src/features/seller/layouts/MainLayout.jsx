import Sidebar from "../components/Sidebar"

function MainLayout() {
  return (
    <div className="w-screen h-screen overflow-hidden grid grid-cols-2">

      <Sidebar />
    </div>
  )
}

export default MainLayout
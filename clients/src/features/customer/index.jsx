import { useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LazadaHeader from "./components/lazada/LazadaHeader"
import LazadaHomepage from "./components/lazada/LazadaHomepage"

function Customer() {
  useEffect(function () {
    document.title = import.meta.env.VITE_MODE
  }, [])

  return (
    <Routes>
      <Route path="/" element={
        <div className="min-h-screen bg-gray-50">
          <LazadaHeader />
          <LazadaHomepage />
        </div>
      } />
    </Routes>
  )
}
export default Customer
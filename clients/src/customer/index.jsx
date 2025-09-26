import { useEffect } from "react"

import ShopeeHeader from "@customer/components/ShopeeHeader"

function Customer() {
  useEffect(function () {
    document.title = import.meta.env.VITE_MODE
  }, [])

  return (
    <>
      <ShopeeHeader />
      <p>
        {import.meta.env.VITE_MODE}
      </p>
    </>
  )
}
export default Customer
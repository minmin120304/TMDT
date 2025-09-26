import { lazy, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'

const mode = import.meta.env.VITE_MODE
let App;

switch (mode) {
  case "seller":
    App = lazy(() => import("./seller"))
    break;
  case "administrator":
    App = lazy(() => import("./administrator"))
    break
  case "customer":
  default:
    App = lazy(() => import("./customer"))
    break;
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)

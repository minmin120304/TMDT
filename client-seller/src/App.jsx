import Button from "@/components/Button"
import { UIButton } from "@ui"

function App() {

  return (
    <>
      <Button />
      <div className="mt-4">
        <UIButton>External UI Button</UIButton>
      </div>
      <p className="text-red-500">Test</p>
    </>
  )
}

export default App

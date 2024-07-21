import { useState } from 'react'
import ColorList from './ColorList'
import Form from './Form'
import { ToastContainer, toast } from 'react-toastify'
import Values from 'values.js'

// toast.success('awesome')
// toast.error('error message')
const App = () => {
  const [colors, setColors] = useState(new Values().all(10))

  const addColor = (color) => {
    try {
      const newColors = new Values(color).all(10)
      setColors(newColors)
    } catch (error) {
      toast.error(error.message)
    }
  }
  return (
    <main>
      <Form addColor={addColor} />
      <ColorList colors={colors} />
      <ToastContainer position="top-center" />
    </main>
  )
}
export default App

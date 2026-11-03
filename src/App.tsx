import { useState } from 'react'
import Phones from './components/Phones'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Phones></Phones>
    </>
  )
}

export default App

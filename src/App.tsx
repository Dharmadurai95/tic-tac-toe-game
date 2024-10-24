import { useState } from 'react'

import './App.css'
import Board from './square'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>

        <Board />
      </div>
    </>
  )
}

export default App

import { useState } from 'react'
import simpleUI from './simple-ui/simple-ui'

function App() {

  return (
      <div>
        <button onClick={simpleUI.modal}>activate modal</button>
      </div>
  )
}

export default App

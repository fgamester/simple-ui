import { useCallback } from 'react'
import simpleUI from './simple-ui/simple-ui'

function App() {

  const showModal = useCallback(() => {
    simpleUI.modal({
      title: 'Title',
      text: 'Hello There'
    });
  });

  return (
    <div>
      <button onClick={showModal}>activate modal</button>
    </div>
  )
}

export default App

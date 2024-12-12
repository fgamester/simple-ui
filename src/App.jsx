import { useCallback } from 'react'
import simpleUI from './simple-ui/simple-ui'

function App() {

  const showModal = useCallback(() => {
    simpleUI.modal({
      title: 'Title',
      text: 'Lorem ipsum dolor sit amet.',
      buttonText: ''
    });
  });

  return (
    <div>
      <button onClick={showModal}>activate modal</button>
    </div>
  )
}

export default App

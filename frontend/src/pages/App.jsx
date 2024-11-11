import { useState } from 'react'
import UserLocation from '../components/UserLocation'

function App() {
  const [count, setCount] = useState(0)

  return (<>
        <UserLocation></UserLocation>
  </>
  )
}

export default App

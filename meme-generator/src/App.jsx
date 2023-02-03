import './App.css'
import {useState} from 'React'
function App() {
  const [theobj, setTheobj] = useState("Yes")
  console.log(useState(5))
  setTheobj("Nah")
  console.log(theobj)
  return (
    <>

    </>
  )
}

export default App

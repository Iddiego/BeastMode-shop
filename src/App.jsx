import { useEffect, useState } from "react"
import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"


const App = () => {

  const [mensaje, setMensaje] = useState("Mensaje 0")
  const [contador, setContador] = useState(0) 
  
  useEffect (()=>{
    console.log("UseEffect....")
  }, [mensaje])
  
  const restar = () => {
    setContador(contador - 1)
  }

  return(
  <>
  <NavBar/>
  <ItemListContainer/>
  </>
)
}

export default App

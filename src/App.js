import React from 'react'
import Cabecera from './components/Cabecera'
import Peticion from './components/Peticion'
import './App.css'
import { useEffect} from 'react'

const App = () => {
 
  
  useEffect(() => {
    obtenerPersonajes();
}, [])

const [personajes, setPersonajes] = React.useState([])

const obtenerPersonajes = async() => {
  try{
  const res = await fetch(`https://www.breakingbadapi.com/api/characters`);
  const results = await res.json()
  setPersonajes(results)
  } catch (error) {
      console.log(error)
  }
}
  return (
    <div>
      <Cabecera/>
      <ul>
                {
                    personajes.map(noun => <Peticion key={noun.char_id} {...noun} />)
                }
            </ul>
    </div>
  )
}

export default App
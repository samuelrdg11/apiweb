import React from 'react'
import Cabecera from './components/Cabecera'
import './App.css'
import { useEffect} from 'react'
import Paginacion from './components/Paginacion'
import BreakingList from './components/BreakingList'

const App = () => {
 

const [personajes, setPersonajes] = React.useState([])
const [paginaActual, setPaginaActual] = React.useState(1);
const [publiPorPagina] = React.useState(8);

const obtenerPersonajes = async() => {
  try{
  const res = await fetch(`https://www.breakingbadapi.com/api/characters`);
  const results = await res.json()
  setPersonajes(results)
  } catch (error) {
      console.log(error)
  }
}

useEffect(() => {
  obtenerPersonajes();
}, [])


const indiceUltimoPost = paginaActual * publiPorPagina;
const indicePrimerPost = indiceUltimoPost - publiPorPagina;
const publiActual = personajes.slice(indicePrimerPost, indiceUltimoPost)
const paginar = numeroPaginas => setPaginaActual(numeroPaginas);

  return (
    <div>
      <Cabecera/>
      <BreakingList personajes={publiActual}/>
      <Paginacion  postsPorPagina={publiPorPagina} totalPosts={personajes.length} paginar={paginar} />
      
    </div>
  )
}

export default App
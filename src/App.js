import { useEffect, useState } from 'react'
import axios from 'axios'

import Header from './components/header/Header.js'
import PokeInfo from './components/pokeinfo/PokeInfo.js'
import PokeList from './components/pokelist/PokeList.js'
import Footer from './components/footer/Footer.js'

import './assets/css/App.scss'


function App() {
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/')
  const [next, setNext] = useState('')
  const [prev, setPrev] = useState('')
  const [pokeData, setPokeData] = useState([])
  const [pokemon, setPokemon] = useState()

  const api = async() => {
    const res = await axios.get(url)
    setNext(res.data.next)
    setPrev(res.data.previous)
    getpokedata(res.data.results)
  }

  const getpokedata = async(results) => {
    results.map(async(item) => {
      const result = await axios.get(item.url)
      setPokeData(state => {
        state = [...state, result.data]
        state.sort((a, b) => a.id > b.id ? 1 : -1)
        return state
      })
    })
  }

  useEffect(() => {
    api()
  }, [url])

  return (
    <>
      <Header pokemon={(poke) => setPokemon(poke)}/>
      <PokeInfo pokemon={ pokemon } />
      <PokeList pokeData={ pokeData } next={ next } prev={ prev } resetUrl={(path) => { setUrl(path); setPokeData([]) }} setPoke={ (poke) => setPokemon(poke)} />
      <Footer />
    </>
  );
}

export default App;

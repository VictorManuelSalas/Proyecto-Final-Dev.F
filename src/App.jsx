import axios from 'axios'
import { useState, useEffect, useRef } from 'react'

//Componentes
import FotoInicio from './components/FotoInicio'
import Buscador from './components/Buscador'
import Header from './components/Header'

function App() {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://api.tvmaze.com/search/shows?q=${query}`)
      console.log(result.data)
      setItems(result.data)
      setIsLoading(false)
    }

    fetchItems()
  }, [query])

  
  return (
    <div>
      <Header />
      <FotoInicio />
      <Buscador getQuery={(q) => setQuery(q)} />
    </div>
  )
}

export default App

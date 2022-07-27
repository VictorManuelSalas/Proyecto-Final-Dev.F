/*
import { Routes, Route, Outlet, Navigate } from 'react-router-dom'
import App from './components/App'
import Header from './src/components/Header'
import API from './src/components/API'
import Pelis from './src/components/Peliculas/Pelis'
import PeliculaInfo from './src/components/Peliculas/PeliculaInfo'

const Paths = () => {
    return (
      <section className='container'>
        <Header />
        <Routes>
          <Route path='/' element={<p>Home</p>} />
          <Route path='/about' element={<p>About</p>} />
          <Route path='/casilla' element={<Outlet />}>
            <Route index element={<Pelis />} />
            <Route path=':productId' element={<PeliculaInfo />} />
          </Route>
          <Route path='/api' element={<API />} />
          <Route path='/404' element={<p>404</p>} />
          <Route path='*' element={<Navigate to='/404' />} />
        </Routes>
      </section>
    )
  }
  
  export default Paths */
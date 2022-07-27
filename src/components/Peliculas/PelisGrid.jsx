import React from 'react'
import Spinner from './Spinner'
import Pelicula from './Pelicula'

const PelisGrid = ({ items, isLoading}) => {
  return (
    isLoading ? (<Spinner />) : (<section className='cards'>
        { items.map((item) => (
            <Pelicula key={item.id} item={item.show}  />
        ))}
    </section>)
  )
}

export default PelisGrid
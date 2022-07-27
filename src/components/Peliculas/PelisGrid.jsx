import React from 'react'
import Spinner from './Spinner'
import Pelis from './Pelis'

const PelisGrid = ({ items, isLoading }) => {
  return (
    isLoading ? (<Spinner />) : (<div className='container text-center mt-5 mb-5  '>
      <div className="row">
        <div className="col">
          {items.map((item) => (
            <Pelis key={item.show.id} item={item.show}  />
          ))}

        </div>
        </div>
        </div>
    )
)}

export default PelisGrid
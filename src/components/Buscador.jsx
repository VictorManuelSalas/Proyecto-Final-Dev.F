import React, { useState, useRef } from 'react'

const Buscador = ({getQuery}) => {

    const searchRef = useRef(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
        getQuery(searchRef.current.value)
        e.target.reset()
    }
    return (
        <form className="d-flex m-auto w-50" onSubmit={handleSubmit}>
            <input
                ref={searchRef}
                className="form-control me-sm-2 rounded-pill"
                type="text"
                placeholder="Nombre de la pelicula o serie"
                autoFocus />
            <button className="btn btn-secondary my-2 my-sm-0 rounded-pill" type="submit">Buscar</button>
        </form>

    )
}

export default Buscador
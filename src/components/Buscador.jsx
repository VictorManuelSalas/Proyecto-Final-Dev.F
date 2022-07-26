import React from 'react'

const Buscador = () => {
    return (
        <form className="d-flex m-auto w-50">
            <input className="form-control me-sm-2 rounded-pill" type="text" placeholder="Search" />
            <button className="btn btn-secondary my-2 my-sm-0 rounded-pill" type="submit">Buscar</button>
        </form>

    )
}

export default Buscador
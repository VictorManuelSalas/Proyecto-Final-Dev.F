import React, {useState} from 'react'

const Buscador = ({ getQuery }) => {
    const [texto, setTexo] = useState('')

    const onChange = (q) => {
        setTexto(q)
        getQuery(q)
    }
    return (
        <form className="d-flex m-auto w-50">
            <input 
            className="form-control me-sm-2 rounded-pill" 
            type="text" 
            placeholder="Search" 
            value={texto}
            onChange={(e) => onChange(e.target.value)} 
            autoFocus />
            <button className="btn btn-secondary my-2 my-sm-0 rounded-pill" type="submit">Buscar</button>
        </form>

    )
}

export default Buscador
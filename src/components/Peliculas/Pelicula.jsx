import React from 'react'

const Pelicula = ({ item, itemImg }) => {
    return (
        <div className='card'>
            <div className='card-inner'>
                <div className='card-front'>
                    <img src={itemImg} alt={item.name} />
                </div>
                <div className='card-back'>
                    <h1>{item.name}</h1>
                    <ul>
                        <li>
                            <strong>Lenguaje:</strong> {item.language}
                        </li>
                        <li>
                            <strong>Genero:</strong> {item.type} 
                        </li>
                        <li>
                            <strong>Duracion:</strong> {item.runtime}
                        </li>
                        <li>
                            <strong>Estado:</strong> {item.status}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Pelicula
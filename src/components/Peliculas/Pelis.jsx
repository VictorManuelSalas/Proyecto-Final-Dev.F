import React from 'react'
import SinFoto from './sinfoto.jpg'

const Pelis = ({ item, summary }) => {

    return (
            <div className="card rounded-5 m-auto mb-3" style={{ width: '18rem' }}>
                {item.image == null ? <img id='sinfoto' src={SinFoto} className='rounded-pill' alt={item.name} /> : <img className='rounded-pill' src={item.image.medium} alt={item.name} />}
                <div className="card-body">
                    <h5 className="card-title text-dark">{item.name}</h5>
                    <p className="card-text text-dark" >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <p className="card-text text-dark"><small className=" text-dark">Duracion: {item.runtime == null ? 'No definido' : item.runtime + ' min'} </small></p>

                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>

          

        /*
               <div className='card m-5 p-3'>
                   <div className='card-inner'>
                       <div className='card-front'>
                           {item.image == null ? <img id='sinfoto' src={SinFoto} alt={item.name} /> : <img src={item.image.medium} alt={item.name} />}
                       </div>
                       <div className='card-back'>
                           <h1>{item.name}</h1>
                           <ul>
                               <li>
                                   <strong>Lenguaje:</strong> {item.language}
                               </li>
                               <li>
                                   <strong>Genero:</strong> {item.genres == 0 ? <p>No definido</p> : item.genres[0]}  {item.genres[1]}  {item.genres[2]  }
                                   
                               </li>
                               <li>
                                   <strong>Duracion:</strong>  {item.runtime == null ? <p>No definido</p> : item.runtime  }
                               </li>
                               <li>
                                   <strong>Estado:</strong> {item.status}
                               </li>
                           </ul>
                       </div>
                   </div>
               </div> */
    )
}

export default Pelis
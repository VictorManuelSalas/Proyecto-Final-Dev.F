import React from 'react'
import SinFoto from './sinfoto.jpg'

const Pelis = () => {
    return (
        <div className="card mb-3" style={{ maxWidth: 540 }}>
            <div className="row g-0">
                <div className="col-md-4">
                    {item.image == null ? <img id='sinfoto' src={SinFoto} alt={item.name} /> : <img src={item.image.medium} alt={item.name} />}
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text">{item.summary}</p>
                        <p className="card-text"><small className="text-muted">{item.runtime == null ? <p>No definido</p> : item.runtime} min</small></p>
                        <div>
                            <button type="button" className="btn btn-info">See More</button>
                        </div>

                    </div>
                </div>
            </div>
            <div className="alert alert-dismissible alert-info">
                <button type="button" className="btn-close" data-bs-dismiss="alert" />
                <strong>Heads up!</strong> This <a href="#" className="alert-link">alert needs your attention</a>, but it's not super important.
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
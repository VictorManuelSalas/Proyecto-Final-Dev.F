
import React from 'react'
import  imgFondo  from '../assets/imgFondo.jpg'
import  imgfondo2  from '../assets/imgfondo2.jpg'
import  imgfondo3  from '../assets/imgfondo3.jpg'
import  imgfondo4  from '../assets/imgfondo4.jpg'
import  imgfondo5  from '../assets/imgfondo5.jpeg'
import  imgfondo6  from '../assets/imgfondo6.jpg'
import  imgfondo7  from '../assets/imgfondo7.jpg'

const FotoInicio = () => {
    return (

        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={3} aria-label="Slide 4" />
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={4} aria-label="Slide 5" />
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={5} aria-label="Slide 6" />
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={6} aria-label="Slide 7" />
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img id='fondoimg' src={imgfondo3} className="d-block" alt="..." />
                </div>
                <div className="carousel-item">
                    <img id='fondoimg' src={imgfondo2} className="d-block" alt="..." />
                </div>
                <div className="carousel-item">
                    <img id='fondoimg' src={imgFondo} className="d-block" alt="..." />
                </div>
                <div className="carousel-item">
                    <img id='fondoimg' src={imgfondo4} className="d-block" alt="..." />
                </div>
                <div className="carousel-item">
                    <img id='fondoimg' src={imgfondo5} className="d-block" alt="..." />
                </div>
                <div className="carousel-item">
                    <img id='fondoimg' src={imgfondo6} className="d-block" alt="..." />
                </div>
                <div className="carousel-item">
                    <img id='fondoimg' src={imgfondo7} className="d-block" alt="..." />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
            </button>
        </div>

    )
}

export default FotoInicio
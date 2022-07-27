import React from 'react'
import { BiMoviePlay } from 'react-icons/bi'

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><BiMoviePlay /> SearchMovies</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
              <div className="collapse navbar-collapse" id="navbarColor02">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                           
                        </li>
                        <li className="nav-item">
                            
                        </li>
                        <li className="nav-item">
                            
                        </li>
                        <li className="nav-item">
                            
                        </li>

                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Header
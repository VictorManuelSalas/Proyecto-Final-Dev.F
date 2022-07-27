import React from 'react'

const Spinner = () => {
    return (
        <div className='d-flex justify-content-center'>
            <div className="spinner-grow text-light m-3" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-light m-3" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-light m-3" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-light m-3" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>

    )
}

export default Spinner
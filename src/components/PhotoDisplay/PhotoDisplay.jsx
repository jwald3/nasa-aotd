import React, { useContext } from 'react'
import { AppContext } from '../../App'
import './PhotoDisplay.css'

const PhotoDisplay = () => {
    const { photoData } = useContext(AppContext)
  
    return (
        <div className="display">
            <div className='photoTitle'>
                 <h2 >{photoData.title}</h2>
            </div>
            <div className='content'>
                <img
                    src={photoData.hdurl}
                    className="photo"
                    alt={photoData.title}
                />
                <p>{photoData.explanation}</p>
            </div>
        </div>
    )
}

export default PhotoDisplay
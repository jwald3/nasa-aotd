import React, { useContext } from 'react'
import { AppContext } from '../../App'
import PictureOfTheDay from '../PictureOfTheDay/PictureOfTheDay'
import './PhotoDisplay.css'

const PhotoDisplay = () => {
    const { photoData } = useContext(AppContext)
  
    return (
        <div className="display">
            <div className='photoTitle'>
                 <h2 >{photoData.title}</h2>
            </div>
            <div className='content'>
                <PictureOfTheDay />
                <p>{photoData.explanation}</p>
            </div>
        </div>
    )
}

export default PhotoDisplay
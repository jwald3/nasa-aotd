import React, { useContext } from 'react'
import { AppContext } from '../../App'
import './PictureOfTheDay.css'

const PictureOfTheDay = () => {
    const { photoData } = useContext(AppContext)
  
    return (
        <div className="display">
            <div className='content'>
                {
                    photoData.media_type === "image" ? (
                        <img
                            src={photoData.url}
                            className="photo"
                            alt={photoData.title}
                        />
                    ) : (
                        <iframe
                            src={"https://www.youtube.com/embed/cNT5yAqpBmI?rel=0"}
                            className="photo"
                            title={photoData.title}
                        />
                    ) 
                }
                
            </div>
        </div>
    )
}

export default PictureOfTheDay
import React from 'react'
import './ImageList.css'
import ImageCard from './ImageCard';

const ImageList = (props) => {
   const images = props.images.map( (image) => {
        return <ImageCard key={image.id} imageview={image}/>
   });

  return ( <>

       <h1>Images are Display Below</h1>

      <div className='image_list'> {images} </div>
  
  
  </>
    
   
  )
  
}

export default ImageList
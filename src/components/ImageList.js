import React from 'react'

const ImageList = (props) => {
   const images = props.images.map( (image) => {
        return <img 
        style={{height:"300px",}}
        key={image.id}
        alt={image.description}
        src={ image.urls.regular} />
   });
  return (
    <div> {images} </div>
  )
}

export default ImageList
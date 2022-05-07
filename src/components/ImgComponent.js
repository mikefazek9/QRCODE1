import React from 'react'
import Font from './Font'
import QR from "../images/image-qr-code.png"


function ImgComponent() {
  return (
    <div className='QR-section'>
        <img src={QR} alt="QR code" className='QR-image'/>
        <Font />
    </div>
  )
}

export default ImgComponent
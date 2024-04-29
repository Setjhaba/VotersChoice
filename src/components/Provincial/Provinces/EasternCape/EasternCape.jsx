import React from 'react'
import "./EasternCape.css"
import { easternCape } from '../../../../utils/Provinces/EC'

const EasternCape = () => {
  return (
    <div className='eastern-cape'>
      <h5>Eastern Cape</h5>
      <ul>
        {easternCape}
      </ul>
    </div>
    
    
  )
}

export default EasternCape

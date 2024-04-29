import React from 'react'
import './Mpumalanga.css'
import { mpumalanga } from '../../../../utils/Provinces/MP'

const Mpumalanga = () => {
  return (
    <div className='mpumalanga'>
      <h5>Mpumalanga</h5>
      <ul>
          {mpumalanga}
      </ul>
    </div>
  )
}

export default Mpumalanga

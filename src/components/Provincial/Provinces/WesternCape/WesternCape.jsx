import React from 'react'
import "./WesternCape.css"
import { westernCape } from '../../../../utils/Provinces/WC'

const WesternCape = () => {
  return (
    <div className='western-cape'>
      <h5>Western Cape</h5>
      <ul>
          {westernCape}
      </ul>
    </div>
  )
}

export default WesternCape

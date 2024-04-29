import React from 'react'
import "./NorthernCape.css"
import { northernCape } from '../../../../utils/Provinces/NC'

const NorthernCape = () => {
  return (
    <div className='northern-cape'>
      <h5>Northern Cape</h5>
      <ul>
          {northernCape}
      </ul>
    </div>
  )
}

export default NorthernCape

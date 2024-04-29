import React from 'react'
import "./NorthWest.css"
import { northWest } from '../../../../utils/Provinces/NW'

const NorthWest = () => {
  return (
    <div className='north-west'>
      <h5>North West</h5>
      <ul>
          {northWest}
      </ul>
    </div>
  )
}

export default NorthWest

import React from 'react'
import './Limpopo.css'
import { limpopo } from '../../../../utils/Provinces/LP'

const Limpopo = () => {
  return (
    <div className='limpopo'>
      <h5>Limpopo</h5>
      <ul>
          {limpopo}
      </ul>
    </div>
  )
}

export default Limpopo

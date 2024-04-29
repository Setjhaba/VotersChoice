import React from 'react'
import "./KZN.css"
import { kwa_zulu } from '../../../../utils/Provinces/KZN'

const KZN = () => {
  return (
    <div className='kwa-zulu'>
      <h5>Kwa-Zulu Natal</h5>
      <ul>
          {kwa_zulu}
      </ul>
    </div>
  )
}

export default KZN

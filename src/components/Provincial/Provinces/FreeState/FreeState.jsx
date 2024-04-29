import React from 'react'
import "./FreeState.css"
import { freeState } from '../../../../utils/Provinces/FS'

const FreeState = () => {
  return (
    <div className='free-state'>
      <h5>Free State</h5>
      <ul>
          {freeState}
      </ul>
    </div>
  )
}

export default FreeState

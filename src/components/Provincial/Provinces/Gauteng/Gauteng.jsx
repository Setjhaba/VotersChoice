import React from 'react'
import "./Gauteng.css"
import { gauteng } from '../../../../utils/Provinces/GP'

const Gauteng = () => {
  return (
    <div className='gauteng'>
      <h5>Gauteng</h5>
      <ul>
          {gauteng}
      </ul>
    </div>
  )
}

export default Gauteng

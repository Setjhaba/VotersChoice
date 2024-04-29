import React from 'react'
import "./Provincial.css"
import EasternCape from './Provinces/EasternCape/EasternCape'
import FreeState from './Provinces/FreeState/FreeState'
import Gauteng from './Provinces/Gauteng/Gauteng'
import KZN from './Provinces/KZN/KZN'
import Limpopo from './Provinces/Limpopo/Limpopo'
import Mpumalanga from './Provinces/Mpumalanga/Mpumalanga'
import NorthernCape from './Provinces/NorthernCape/NorthernCape'
import NorthWest from './Provinces/NorthWest/NorthWest'
import WesternCape from './Provinces/WesternCape/WesternCape'

const Provincial = () => {

  return (
    <>
    <section className="provincial-candidates-container">
      <div className='provincial-candidates-content'>
        <p>Select your province to find out which parties and independents you can vote for provincally.</p>

        <div className='provinces'>
          <EasternCape />
          <FreeState />
          <Gauteng />
          <KZN />
          <Limpopo />
          <Mpumalanga />
          <NorthernCape />
          <NorthWest />
          <WesternCape />
        </div>
      </div>
      
    </section>    
         
           
    </>
    
  )
}

export default Provincial

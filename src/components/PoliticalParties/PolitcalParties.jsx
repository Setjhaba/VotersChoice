import React from 'react'
import "./PoliticalParties.css"
//import PoliticalPartiesCard from './PoliticalPartiesCard/PoliticalPartiesCard'
//import { Political_Parties } from '../../utils/data'
import { SortedData } from "../../utils/National"
//import { National_Candidates } from "../../utils/National"


const arrayData = SortedData.map(data => 
  <li key={data.id}>
    <p>{data.title}</p>
  </li>
)

const PolitcalParties = (data) => {
  return (
    <>
    <section className='parties-container'>
      <h5>Political Parties Contesting National Elections</h5>
      
      <ul>
        {arrayData}
      </ul>

      {/*
      <div className='parties-content'>
        {SortedData.map((item) => (
          <PoliticalPartiesCard key={item.title}
            iconURL={item.icon}
            details={item} />
          ))}
      </div> 
      */}   
    </section>
    </>
  )
}

export default PolitcalParties

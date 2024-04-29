import React from 'react'
import "./Hero.css"

const HomePage = () => {
  return (
    <>
    <section className='hero-container'>
      <div className='hero-content'>
        <h2>Make an informed vote.</h2>

        <p>With many political parties vying for your vote in the coming national and provincial elections. Here is a list of parties and independents you can expect to see on the ballots. Vist their websites and make your decision.</p>

        <button className='partyRedirectButton'>
          <a href='national-candidates'>National</a>
        </button>
      </div>

      <div className='hero-img'>
        <div className='home-icon'>
          <img src='./Assets/Images/istockphoto.jpg' alt='South African Flag' />
        </div>
      </div>
    </section>
    
    <section className='second-page-container'>
      <div className='second-page-content'>
        <h2>Make it matter.</h2>
        <p>
          Discover more parties and indepedents contesting the Provincial elections here.
        </p>

        <button className='partyRedirectButton'>
          <a href='provincial-candidates'>Provincial</a>
        </button>
      </div>  
        
      <div className='second-page-img'>
        <div className='second-page-icon'>
          <img src='./Assets/Images/istockphoto 2.jpg' alt='' />
        </div>
      </div>
        
       
    </section>
    </>
  )
}

export default HomePage

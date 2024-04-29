import React from 'react'
import "./Contact.css"
import ContactForm from './ContactForm/ContactForm'
//import ContactInfoCard from './ContactInfoCard/ContactInfoCard'

const Contact = () => {
  return (
    <section className='contact-container'>
      <h5>Get in touch</h5>

      <div className='contact-content'>
        {/*<div style={{flex: 1}}>
          <ContactInfoCard iconURL="./Assets/Images/icons8-mail-48.png"
          text="info@voterschoice.com" />
        </div> */}

        <div style={{flex: 1}}>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}

export default Contact

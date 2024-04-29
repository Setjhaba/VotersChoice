import React from 'react'
import "./ContactInfoCard.css"

const ContactInfoCard = ({ iconURL,text }) => {
  return (
    <div className='contact-info-card'>
        <div className='icon'>
            <img src={iconURL} alt={text} />
        </div>

        <p>{text}</p>
    </div>
     
    )
}

export default ContactInfoCard

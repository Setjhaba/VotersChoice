import React from 'react'
import "./ContactForm.css"

const ContactForm = () => {
  return (
    <div className='contact-form-content'>
      <form className="contact-form" action="https://getform.io/f/zbxdvgpb" method='POST'>
            <input type='text' name='firstname' placeholder='Firstname' required/>
            <input type='text' name='lastname' placeholder='Lastname' required/>
            <input type='text' name='email' placeholder='Email' required/>
            <textarea type='text' name='message' placeholder='Message' rows={3} required/>

            <button>Send</button>
      </form>
    </div>
  )
}

export default ContactForm

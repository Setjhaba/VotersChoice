import React from 'react'
import "./MobileNav.css"

const MobileNav = ({ isOpen, toggleMenu }) => {
  return (
    <>
     <div className={`mobile-menu ${isOpen ? "active" : ""}`} onClick={toggleMenu}>

        <div className='mobile-menu-container'>
            <img className='logo' src='./Assets/Images/VotersChoice.PNG' alt='' />

            <ul>
                <li>
                    <a href='/' className='menu-item'>Home</a>
                </li>

                <li>
                    <a href="national-candidates" className='menu-item'>National</a>
                </li>

                <li>
                    <a href="provincial-candidates" className='menu-item'>Provincial</a>
                </li>

                <li>
                    <a href="contact" className='menu-item'>Contacts</a>
                </li>
            </ul>
            
        </div>
    </div>
    </>
  )
}

export default MobileNav

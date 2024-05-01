import React, { useState } from 'react'
import "./NavBar.css"
import MobileNav from '../MobileNav/MobileNav';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const NavBar = () => {

    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
      setOpenMenu(!openMenu)
    };

  return (
    <>
        <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />

        <nav className='nav-wrapper'>
            <div className='nav-content'>
                <a href='/'><img className='logo' src='./Assets/Images/VotersChoice.PNG' alt=''/></a>

                <ul>
                    <li>
                        <a href="/" className='menu-item'>Home</a>
                    </li>

                    <li>
                        <a href='/national-candidates' className='menu-item'>National</a>
                    </li>

                    <li>
                        <a href='/provincial-candidates' className='menu-item'>Provincial</a>
                    </li>

                    <li>
                        <a href='/contact' className='menu-item'>Contact</a>
                    </li>
                </ul>

                <button className='menu-btn' onClick={toggleMenu}  >
                    {openMenu ? <CloseIcon /> : <MenuIcon />}
                </button>    

            </div>
        </nav> 
    </>
   
  )
}

export default NavBar

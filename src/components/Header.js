import React from 'react'
import Navbar from './Navbar'
import logo from '../chicago.gov-logo.png'
const Header = () => {
  return (
    <>
      <header role='banner' id='cds-header' className='cds-header section'>
        <div className='cds-navbar'>
          <button className='cds-menu-btn'>MENU</button>
          <div className='cds-logo' id='logo'>
            <em className='cds-logo-text'>
              <a href='/simpleapplication' title='Home'>
                <img src={logo} alt='Logo of the City of Chicago' />
                <h1 className='cds-header-title'>Chicago(Application)</h1>
              </a>
            </em>
          </div>
        </div>
        <Navbar />
      </header>
    </>
  )
}

export default Header

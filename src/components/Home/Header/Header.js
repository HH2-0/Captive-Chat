import React from 'react';
import Contacts from '../Contact-Us/Contact';
import './Header.css'

function Header() {
  return (
      <header>
        <div className='header-overlay'>
          <div className='container'>
            <div className='row'>
                <div className='col-lg-12'>
                    <h2>Welcome to Captive-Chat</h2>
                    <p>Enjoy your stay with us</p>
                </div>
                <div className='iconContent'>
                  <a href="" className="btn" >
                     Sign Up
                  </a>
                  <a href={""} className="btn" >
                     Register
                  </a>
                </div>
            </div>
          </div>
        </div>
      </header>
  );
}

export default Header;
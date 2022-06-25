import React from 'react';
import { signInWithGoogle } from '../../../Firebase';
import { auth } from '../../../Firebase';
import './Header.css'


import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

function Header() {
  const [user] = useAuthState(auth);
  return (
      <header>
        <div className='header-overlay'>
          <div className='container'>
            <div className='row'>
                <div className='col-lg-12'>
                    <h2>Welcome to Captive-Chat</h2>
                </div>
                <div className='iconContent'>
                  {user ? <LoggenIn /> : <Register/>}
                </div>
            </div>
          </div>
        </div>
      </header>
  );
}

function Register(){
  return(
    <button className='btn' onClick={ signInWithGoogle }>
       SignUp with Google
    </button>
  )
}

function LoggenIn(){
  const navigate=  useNavigate()
  function Search(){
    navigate('/HomePage2')
  }
  return(
    <button className='btn' onClick={Search}> Visit Chats </button>
  )
}

//

export default Header;

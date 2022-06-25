import React from 'react';
import { Navbar, Container, Nav} from 'react-bootstrap';
import './Nav.css'
import { Link} from "react-router-dom"
import { signInWithGoogle ,logout } from '../../Firebase';
import { auth } from '../../Firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
function Navs() {
  const [user] = useAuthState(auth);
  return (
    <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand > <Link to='/' className='lin'>C-Chat</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link to = '/' className='first btn'>
                      <Link className="lin" to='/'>
                        Home
                      </Link>
                    </Nav.Link>
                    <Nav.Link className='first'>
                      {user ? <LoggenIn /> : <Register/>}
                    </Nav.Link>
                    <Nav.Link className='first'>
                      {user ? <Search /> : <Home/>}
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  );
}
function Register(){
  return(
    <button className='btn' onClick={ signInWithGoogle }>
       <Link to='/'className='lin'>SignIn</Link>
    </button>
  )
}
function Home(){
  return(
    <Link to='/' className="lin">Search</Link>
  )
}
function Search(){
  return(
    <Link to='/HomePage2' className="lin">Search</Link>
  )
}

function LoggenIn(){
  return(
    <button className='btn' onClick={logout}> <Link to='/' className="lin">Sign Out</Link></button>
  )
}

export default Navs;
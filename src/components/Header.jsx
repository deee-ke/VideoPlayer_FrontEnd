import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import '../Header.css'

function Header() {
  return (
    <Navbar className="bg-primary">
        <Container>
          <Navbar.Brand >
            <Link className='neo-link ' to={'/'} style={{textDecoration:"none",color:'white',fontSize:'30px',fontWeight:'500'}}>
            <i class="fa-solid fa-clapperboard  me-3 text-dark"></i>
            Neo Player
            </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
 
  );
}



export default Header
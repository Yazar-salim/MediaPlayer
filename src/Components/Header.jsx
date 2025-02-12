import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <Navbar className=" sticky-top" >
    <Container>

      <Link to={'/'} style={{textDecoration:"none",padding:"8px"}}>
      <Navbar.Brand className='text-dark  '> 
      <i className="fa-solid fa-music fs-2 me-1"></i>
        {" "}
        <span style={{fontWeight:"700",fontSize:"25px"}}>Music Player</span>
      </Navbar.Brand>
      </Link>
      
    </Container>
  </Navbar></div>
  )
}

export default Header
import React from 'react'
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

function Header() {

    
    return (
        <>


    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            {/* <NavLink to='/' className='d-flex align-items-center text-dark mx-2 text-decoration-none'>Home</NavLink> */}
            <NavLink to='/addproduct' className='d-flex align-items-center text-dark mx-2 text-decoration-none' >Add Product</NavLink>
            <NavLink to='/' className='d-flex align-items-center text-dark mx-2 text-decoration-none'>View Product</NavLink>

           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

</>)
}

export default Header
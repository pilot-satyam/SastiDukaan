import React from 'react'
import { Navbar,Nav,Container,Row } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'


function header() {
  return (
    <header>
    <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
      <Container>

        <LinkContainer to='/'>
        <Navbar.Brand>Sasti Dukaan</Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {/* to add the shopping cart img we use font-awesome cdn from cdn.js hence in short we use fa */}
            
            <LinkContainer to='/cart'>
            <Nav.Link><i className='fas fa-shopping-cart'></i>Cart</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/login'>
            <Nav.Link><i className='fas fa-user'></i>Login</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    </header>
  )
}

export default header

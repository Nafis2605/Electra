import React from 'react'
import {Navbar, Nav, Container} from "react-bootstrap"
import {LinkContainer} from "react-router-bootstrap";
const Header = () => {
    return (
        <header>
            <Navbar bg="dark" variant= "dark"expand="lg" collapseOnSelect>
            <Container>
                <LinkContainer to='/'>
                    <Navbar.Brand href="/">Electra</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                    <LinkContainer to='/cart'>
                        <Nav.Link href="/cart"><i className="fa fa-shopping-cart" aria-hidden="true"></i> Cart</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to='/login'>
                        <Nav.Link href="/login"><i className="fa fa-user-circle" aria-hidden="true"></i> Log In</Nav.Link>
                    </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
</Navbar>
        </header>
    )
}

export default Header

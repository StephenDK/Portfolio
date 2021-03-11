import React, { Component } from 'react';

import { Navbar, Nav } from 'react-bootstrap'


class Navigation extends Component {
    render() {
        return(
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{ width: '100%' }}>
                <Navbar.Brand href="#home">Stephen Klein</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
					<Nav>
						<Nav.Link href="#deets">Contact Me</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
        )
    }
}

export default Navigation;
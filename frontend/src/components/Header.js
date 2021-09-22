import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

function Header() {
	return (
		<header>
			<Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
				<Container>
					<Navbar.Brand href='/'>Home</Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='mr-auto'>
							<Nav.Link href='/cart'>
								<i className='fas fa-shopping-cart px-2'></i>Cart
							</Nav.Link>
							<Nav.Link href='/login'>Login</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
}

export default Header;

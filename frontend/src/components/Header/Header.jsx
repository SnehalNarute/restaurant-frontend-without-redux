import React from 'react'
import './Header.css'
import { Navbar, Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
	return (
		<>
			<Navbar style={{ background: '#ce0505' }}>
				<Container>
					<Link to='/'>
						<Navbar.Brand
							style={{
								color: '#ce0505',
								background: '#fff',
								padding: '0.3rem 0.6rem',
								borderRadius: '50%',
								fontWeight: '600',
							}}
						>
							e!
						</Navbar.Brand>
					</Link>
					<Navbar.Toggle />
					<Navbar.Collapse className='justify-content-end'>
						<Navbar.Text>
							<Link to='/login'>
								<Button
									style={{
										textDecoration: 'none',
										color: '#fff',
										marginRight: '1rem',
										background: 'transparent',
										outline: 'none',
										border: 'none',
									}}
								>
									Login
								</Button>
							</Link>
							<Link to='/register'>
								<Button variant='outline-light'>
									Create an account
								</Button>
							</Link>
						</Navbar.Text>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	)
}

export default Header

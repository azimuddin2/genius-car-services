import { signOut } from 'firebase/auth';
import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/logo.png';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleLogout = () => {
        signOut(auth);
    }

    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img height={40} src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="home#services">Services</Nav.Link>
                            <Nav.Link href="home#experts">Experts</Nav.Link>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                            {
                                user &&
                                <>
                                    <Nav.Link as={Link} to="/add-service">AddService</Nav.Link>
                                    <Nav.Link as={Link} to="/manage-service">Manage</Nav.Link>
                                </>
                            }
                        </Nav>
                        <Nav>
                            {user &&
                                <Link title='Order' to='/order-history'>
                                    <FontAwesomeIcon className='text-light border rounded p-2  me-2' icon={faCartShopping}></FontAwesomeIcon>
                                </Link>
                            }
                            {
                                user ?
                                    <button onClick={handleLogout} className='btn btn-primary px-4 py-1'>Logout</button>
                                    :
                                    <Nav.Link className='btn btn-primary text-white px-4 py-1' as={Link} to="/login">Login</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function AppNavbar () {
    const cart = useSelector(state => state.cart);
    return (
        <Navbar fixed='top' bg="light" expand="lg" className='py-3 shadow-sm p-3 mb-5 bg-body'>
            <Container>
            <Link to="/home" className='navbar-brand'>Cart App</Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className=" me-auto">
                <Link to="/home" className='nav-link'>Products</Link>
                <Link to="/cart" className='nav-link'>Cart - {cart.length}</Link>
                <Link to="/about" className='nav-link'> About </Link>
                <Link to="/contact" className='nav-link'>Contact</Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};
export default AppNavbar;
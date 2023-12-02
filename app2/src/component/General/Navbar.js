import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function MyNav() {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container className='d-flex justify-content-between'>
                <Navbar.Brand to='/'><Link to='/' className='text-decoration-none text-bg-dark fs-3'>Navbar</Link></Navbar.Brand>
                <Nav className="ms-auto ">
                    <Link to='/' className='text-decoration-none text-bg-dark mx-2' >Home</Link>
                    <Link to='/products' className='text-decoration-none text-bg-dark mx-2'>Our Products</Link>
                    <Link to='/resturan' className='text-decoration-none text-bg-dark mx-2'>Resturan</Link>
                </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default MyNav;
import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Links from '../../Shared/Links';
import { UserInfoContext } from '../../App';
import { useNavigate } from 'react-router-dom';

function NavBar() {
    const navigate = useNavigate()
    const {user, setUser} = useContext(UserInfoContext)
    const LogOut = () => {
        localStorage.removeItem("userToken")
        navigate("/Login")
        setUser(null)
    }
    return (
    <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="m-auto ">
                    <Links title={"Home"} path={"/"}></Links>
                    <Links title={"categories"} path={"categories"}></Links>
                </Nav>
                {!user ?
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown" className='mb-3 mb-lg-0 '>
                        <Links title={"Register"} path={"Register"} ></Links>
                        <Links title={"Login"} path={"Login"} ></Links>
                    </NavDropdown>
                :
                    <>
                        <button className='btn btn-dark' onClick={LogOut}>Logout</button>
                    </>
                }
            </Navbar.Collapse>
        </Container>
    </Navbar>
    )
}

export default NavBar
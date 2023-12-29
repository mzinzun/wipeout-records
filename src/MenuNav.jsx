import { NavLink } from 'react-router-dom'
import { Navbar, NavDropdown, Nav, Form, FormControl, Button } from 'react-bootstrap'

function MenuNav() {
    return (
        <Navbar className='' expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-danger"/>
            <Navbar.Collapse id="basic-navbar-nav navbar row">
                <Nav className="navbar col row justify-content-end">
                    <Nav.Link className="menuNav col-md-3" href="/">Home</Nav.Link>
                    <Nav.Link className="menuNav col-md-3" href="/contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
export default MenuNav

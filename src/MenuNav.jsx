import { Link } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'

function MenuNav() {
    return (
        <Navbar className='' expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-danger"/>
            <Navbar.Collapse id="basic-navbar-nav navbar row">
                <Nav className="navbar col row justify-content-end">
                    <Link to="/home" className="menuNav col-md-3" >Home</Link>
                    <Link to='/contact' className="menuNav col-md-3" >Contact</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
export default MenuNav

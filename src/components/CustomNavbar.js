import React, { Component } from 'react'
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {Link } from 'react-router-dom';

class CustomNavbar extends Component {
    render() {
        return (
            <div>
                <Navbar default collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to='/'>HotelGALLERY</Link>
                        </Navbar.Brand>
                        <Navbar.Toggle/>
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight>
                            <NavItem eventKey={1} componentClass={Link} to='/'>Home</NavItem>
                            <NavItem eventKey={2} componentClass={Link} to='/about'>About</NavItem>
                            <NavItem eventKey={3} componentClass={Link} to='/news'>News</NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}


export default  CustomNavbar;

import React, { Component } from 'react';
import { Navbar, Nav } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <Navbar expand="xs">
                <Nav navbar>
                    <NavLink className="nav-link" to="/home">
                        <i className="fa fa-home fa-sm" /> RenoTahoeTrails.com
                    </NavLink>
                    <NavLink className="nav-link" to="/trails">
                        Trail Directory 
                    </NavLink>
                </Nav>
            </Navbar>
        );
    }   
}

export default Header;
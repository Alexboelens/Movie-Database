import React from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

import icon from '../components/images/logo4.png';




class AppNavbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        }
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        return (
            <div>
                <Navbar color="dark" dark expand='sm' className='mb-5 navbar'>

                    <div className='logo-wrap mr-5'>
                        <img src={icon} alt="logo" />
                        <NavbarBrand tag={RRNavLink} to='/'>Movie Database</NavbarBrand>
                    </div>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav navbar className='mr-auto'>
                            <NavItem>
                                <NavLink tag={RRNavLink} activeClassName='active' to='/movies'>Movies</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={RRNavLink} activeClassName='active' to='/tv-shows'>Tv Shows</NavLink>
                            </NavItem>
                            <NavItem className='mr-auto'>
                                <NavLink tag={RRNavLink} activeClassName='active' to='/people'>People</NavLink>
                            </NavItem>

                        </Nav>
                        <Nav navbar className='mr-5'>
                            <NavItem>
                                <NavLink tag={RRNavLink} activeClassName='active' to='/login'>Login</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={RRNavLink} activeClassName='active' to='/create-account'>Create Account</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={RRNavLink} activeClassName='active' to='/my-list'>My List</NavLink>
                            </NavItem>
                        </Nav>





                    </Collapse>
                </Navbar>
            </div >
        )
    }
}

export default AppNavbar;
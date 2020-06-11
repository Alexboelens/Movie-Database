import React, { useState } from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import icon from '../components/images/logo.png';


const AppNavbar = ({ loadUser }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div>
            <Navbar color="dark" dark expand='lg' className='mb-5 navbar' id='navbar'>

                <div className='logo-wrap mr-5'>
                    <img src={icon} alt="logo" />
                    <NavbarBrand tag={RRNavLink} to='/'>Movie Database</NavbarBrand>
                </div>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav navbar className='mr-auto'>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret className='text-white'>
                                Movies
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    <NavItem>
                                        <NavLink tag={RRNavLink} activeClassName='active' to='/movies/now-playing' className='text-dark'>Now Playing</NavLink>
                                    </NavItem>
                                </DropdownItem>
                                <DropdownItem>
                                    <NavItem>
                                        <NavLink tag={RRNavLink} activeClassName='active' to='/movies/popular' className='text-dark'>Popular</NavLink>
                                    </NavItem>
                                </DropdownItem>
                                <DropdownItem>
                                    <NavItem>
                                        <NavLink tag={RRNavLink} activeClassName='active' to='/movies/upcoming' className='text-dark'>Upcoming</NavLink>
                                    </NavItem>
                                </DropdownItem>
                                <DropdownItem>
                                    <NavItem>
                                        <NavLink tag={RRNavLink} activeClassName='active' to='/movies/top-rated' className='text-dark'>Top Rated</NavLink>
                                    </NavItem>
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret className='text-white'>
                                TV Shows
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    <NavItem>
                                        <NavLink tag={RRNavLink} activeClassName='active' to='/tv/popular' className='text-dark'>Popular</NavLink>
                                    </NavItem>
                                </DropdownItem>
                                <DropdownItem>
                                    <NavItem>
                                        <NavLink tag={RRNavLink} activeClassName='active' to='/tv/on-tv' className='text-dark'>On TV</NavLink>
                                    </NavItem>
                                </DropdownItem>
                                <DropdownItem>
                                    <NavItem>
                                        <NavLink tag={RRNavLink} activeClassName='active' to='/tv/airing-today' className='text-dark'>Airing Today</NavLink>
                                    </NavItem>
                                </DropdownItem>
                                <DropdownItem>
                                    <NavItem>
                                        <NavLink tag={RRNavLink} activeClassName='active' to='/tv/top-rated' className='text-dark'>Top Rated</NavLink>
                                    </NavItem>
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret className='text-white'>
                                People
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    <NavItem>
                                        <NavLink tag={RRNavLink} activeClassName='active' to='/people/popular' className='text-dark'>Popular People</NavLink>
                                    </NavItem>
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                    <Nav navbar className='mr-5'>
                        <NavItem>
                            <NavLink tag={RRNavLink} activeClassName='active' to='/login'>Login</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={RRNavLink} activeClassName='active' to='/register'>Register</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={RRNavLink} activeClassName='active' to='/my-list'>My List</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default AppNavbar;
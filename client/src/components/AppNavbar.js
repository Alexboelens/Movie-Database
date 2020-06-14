import React, { useState, useEffect, useContext, Fragment } from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import icon from '../components/images/logo.png';
import AuthContext from '../context/auth/authContext';


const AppNavbar = () => {
    const authContext = useContext(AuthContext);
    const { loadUser, isAuthenticated, user, logoutUser } = authContext;

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        loadUser();
        // eslint-disable-next-line
    }, []);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    const handleLogout = () => {
        logoutUser();
    }

    const authLinks = (
        <Fragment>
            <NavItem className='mr-3'>
                <NavLink to='#!' className='active'>Welcome {user && user.name}</NavLink>
            </NavItem>
            <NavItem>
                <NavLink tag={RRNavLink} activeClassName='active' className='mr-1' to='/favorites'>Favorites</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to='#!' onClick={handleLogout}>
                    <i className='fas fa-sign-out-alt mr-1' />
                    Logout
                </NavLink>
            </NavItem>
        </Fragment>
    );

    const guestLinks = (
        <Fragment>
            <NavItem>
                <NavLink tag={RRNavLink} activeClassName='active' to='/login'>Login</NavLink>
            </NavItem>
            <NavItem>
                <NavLink tag={RRNavLink} activeClassName='active' to='/register'>Register</NavLink>
            </NavItem>
        </Fragment>
    );

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
                        {isAuthenticated ? authLinks : guestLinks}
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default AppNavbar;
// Handles display of the top menu.

import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import AuthenticationService from '../service/AuthenticationService';
import styled from 'styled-components';

const HeaderNav = styled.nav`
`;

const HeaderLi = styled.li`
    display: inline-block;
    float: left;
    padding-left: 20px;
`;

const LoginLi = styled.li`
    display: inline-block;
    float: right;
    padding-right: 20px;
`;

const HLink = styled(Link)`
    textDecoration: none;
`;

function MenuComponent() {
    const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
    return (
        <>
        <header>
            <HeaderNav>
                {isUserLoggedIn && <HeaderLi><HLink to="/courses" >Courses</HLink></HeaderLi>}
                {isUserLoggedIn &&  <HeaderLi><Link to="/">Home</Link></HeaderLi>}
                {!isUserLoggedIn && <LoginLi><Link to="/login">Login</Link></LoginLi>}
                {isUserLoggedIn && <LoginLi><Link to="/logout" onClick={AuthenticationService.logout}>Logout</Link></LoginLi>}
            </HeaderNav>
        </header>
        <br/>
        </>
    )
}
export default withRouter(MenuComponent)
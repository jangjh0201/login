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

const SubmitInput = styled.input`
    border: none;
    color: #644512;
    cursor: pointer;
    background-color: white;
    font-weight: 500;
`;

function MenuComponent() {
    const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
    
    return (
        <>
        <header>
            {isUserLoggedIn ? (
                <HeaderNav>
                    <HeaderLi>
                        <HLink to="/courses"><SubmitInput type="submit" value="Courses"/></HLink>
                    </HeaderLi>
                    <HeaderLi>
                        <HLink to="/"><SubmitInput type="submit" value="Home"/></HLink>
                    </HeaderLi>
                    <LoginLi>
                        <HLink to="/logout" onClick={AuthenticationService.logout}><SubmitInput type="submit" value="Logout"/></HLink>
                    </LoginLi>
                </HeaderNav>
            ) : (
                <LoginLi>
                    <HLink to="/login"><SubmitInput type="submit" value="Login"/></HLink>
                </LoginLi>
            )}
        </header>
        <br/>
        </>
    )
}
export default withRouter(MenuComponent)
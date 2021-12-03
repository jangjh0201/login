import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import AuthenticationService from "../service/AuthenticationService";

const Mainp = styled.p`
  text-align: center;
  font-weight: 500;
  font-size: 20px;
`;

function Home() {
    const isUserLoggedIn = AuthenticationService.isUserLoggedIn();

    return (
        <div>
            <Mainp>Welcome</Mainp>
            <ul className="navbar-nav navbar-collapse justify-content-end">
              {!isUserLoggedIn && <li><Link className="nav-link" to="/login">Login</Link></li>}
              {isUserLoggedIn && <li><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
            </ul>
        </div>
    );
}

export default Home;
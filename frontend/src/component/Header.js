import React from "react";
import { withRouter, Link } from "react-router-dom";
import AuthenticationService from "../service/AuthenticationService";
import styled from "styled-components";

const LogoTitle = styled.div`
  text-align: center;
  padding: 20px;
`;

function Header() {
  const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
  return (
    <header>
      <Link to="/courses" style={{ textDecoration: 'none' }}>
        <LogoTitle><img src="https://drtrue.kr/web/upload/logo/footer_logo.png" style={{height: 'auto'},{width: '150px'}}/></LogoTitle>
      </Link>
      <ul className="navbar-nav navbar-collapse justify-content-end">
        {!isUserLoggedIn && <li><Link className="nav-link" to="/login">Login</Link></li>}
        {isUserLoggedIn && <li><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
      </ul>
    </header>
  );
}
   
export default withRouter(Header);
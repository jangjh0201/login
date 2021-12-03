import React from "react";
import { withRouter, Link } from "react-router-dom";
import AuthenticationService from "../service/AuthenticationService";
import styled from "styled-components";

const LogoTitle = styled.div`
  text-align: center;
`;

function Header() {
  return (
    <header>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <LogoTitle><img src="https://drtrue.kr/web/upload/logo/footer_logo.png" style={{height: 'auto'},{width: '150px'}}/></LogoTitle>
      </Link>
    </header>
  );
}
   
export default withRouter(Header);
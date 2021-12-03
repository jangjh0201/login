import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import AuthenticationService from "../service/AuthenticationService";

const Mainp = styled.p`
  text-align: center;
  font-weight: 500;
  font-size: 20px;
  padding-top: 50px;
`;

function Home() {
    const isUserLoggedIn = AuthenticationService.isUserLoggedIn();

    return (
        <div>
            <Mainp>설탕없는 식탁 Dr.True</Mainp>
            {!isUserLoggedIn && <p>로그인 후 이용해주세요</p>}
            {isUserLoggedIn && <p>환영합니다</p>}
        </div>
    );
}

export default Home;
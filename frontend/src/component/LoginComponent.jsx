// Login Component representing the login screen.
import React from 'react';
import AuthenticationService from '../service/AuthenticationService';
import { useState } from 'react';
import styled from 'styled-components';

const Title = styled.h2`
  color: #4d2600;
  padding : 10px;
`;

const Input = styled.input`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 50px;
  margin: 0 0 8px;
  padding: 5px 39px 5px 11px;
  border: solid 1px #dadada;
  background: #fff;
  box-sizing: border-box;
`;

const Submitbtn = styled.button`
  font-size: 15px;
  font-weight: 800;
  display: block;
  width: 100%;
  height: 40px;
  cursor: pointer;
  text-align: center;
  border: none;
  background-color: #fcf5e9;
  color: #4d2600;
`;

export default function LoginComponent(props) {
    const [state, setState] = useState({
        username: '',
        password: '',
        hasLoginFailed: false,
        showSuccessMessage: false
    });

    const handleChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        });
    };

    const loginClicked = () => {
        AuthenticationService.executeBasicAuthenticationService(state.username, state.password)
            .then(() => {
                debugger;
                AuthenticationService.registerSuccessfulLogin(state.username, state.password);
                props.history.push('/courses')
            }).catch(e => {
                console.log(e);
                setState(
                    {
                        ...state,
                        showSuccessMessage: false,
                        hasLoginFailed: true
                    }
                );
            });
    };

    return (
        <div>
            <Title>Login</Title>
            <div className="container">
                {state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                {state.showSuccessMessage && <div>Login successful</div>}
                <Input
                    type="text"
                    name="username"
                    value={state.username}
                    onChange={handleChange}
                    placeholder="아이디를 입력하세요."
                    required
                />
               <Input
                    type="password"
                    name="password" 
                    value={state.password} 
                    onChange={handleChange}
                    placeholder="비밀번호를 입력하세요."
                />
                <hr/>
                <Submitbtn type="submit" onClick={loginClicked}>로그인</Submitbtn>
            </div>
        </div>
    );
}

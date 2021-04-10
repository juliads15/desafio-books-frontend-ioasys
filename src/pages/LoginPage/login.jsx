import React from "react";
import * as S from "./styled.js";
import "./styled-css.css";
import Logo from "../../components/logo/logo";

const Login = () => {
    return (
        <S.LoginPageWrapper>
            <S.StyledForm>
                <Logo/>
                <br /><br />
                <div className="label-float">
                    <input type="email" name='email' placeholder=" "/>
                    <label for='email'>Email</label>
                </div>
                <br/>
                <div className="label-float">
                    <input type="password" name='password' placeholder=" "/>
                    <label for='password'>Senha</label>
                    <button className="login-button"><a href="/books" style={{textDecoration: "none"}}>Entrar</a></button>
                </div>
            </S.StyledForm>
        </S.LoginPageWrapper>
    );
};

export default Login;
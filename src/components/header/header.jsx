import React from "react";
import LogoBlack from "../logo-black/logo-black";
import * as S from "./styled";


const Header = () => {
    return (
        <S.Header>
            <S.Wrapper>
                <LogoBlack />
                <S.Greeting>Bem vindo, <b>Júlia!</b></S.Greeting>
                <S.LogOut>
                    <img src="../../assets/icons/Log Out.png"/>
                </S.LogOut>
            </S.Wrapper>
        </S.Header>
    );
};

export default Header;
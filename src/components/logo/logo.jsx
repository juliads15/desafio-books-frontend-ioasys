import React from "react";
import * as S from "./styled";
import { ReactComponent as IoasysLogo } from "../../assets/icons/logo-white.svg";
import { Link } from "react-router-dom";

const Logo = () => {
    return (
        <S.Wrapper>
            <IoasysLogo />
            <S.Title>Books</S.Title>
        </S.Wrapper>
    );
};

export default Logo;
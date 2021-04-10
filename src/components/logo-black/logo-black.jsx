import React from "react";
import * as S from "./styled";
import { ReactComponent as IoasysLogo } from "../../assets/icons/logo-black.svg";
import { Link } from "react-router-dom";

const LogoBlack = () => {
    return (
        <S.Wrapper>
            <IoasysLogo />
            <S.Title>Books</S.Title>
        </S.Wrapper>
    );
};

export default LogoBlack;
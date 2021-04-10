import styled from "styled-components";

export const Header = styled.header`
    position: absolute;
    width: 1130px;
    height: 40px;
    left: 115px;
    top: 40px;
    display: flex;
    justify-content: space-between;
`;

export const Wrapper = styled.div`
    max-width: 1130px;
    display: flex;
    flex-flow: row;
    display> flex;
    justify-content: space-between;
    align-items: center;
`;

export const Greeting = styled.span`
    position: relative;
    top: 5px;
    left: 880px;
`

export const LogOut = styled.div`
    height: 32px;
    width: 32px;
    border-radius: 50%;
    border: 1px solid #d0c2c5;
    border-blur: 20%;
    position: relative;
    top: 5px;
    left: 890px;
`;

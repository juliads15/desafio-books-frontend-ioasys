import styled from "styled-components";

import background from "../../assets/images/Background-image.jpg";

export const LoginPageWrapper = styled.div`
    position: absolute;
    left: 0px;
    right: 0px;
    top: 0px;
    bottom: 0px;
    display: flex;
    background-image: url(${background});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

export const StyledForm = styled.form`
    position: relative;
    top: 200px;
    left: 115px;
    display: block;
    justify-content: space-between;
    
`;

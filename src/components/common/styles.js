import styled from "styled-components";

import background from "../../assets/images/Background-books.png";

export const Wrapper = styled.div`
  background: url(${background});
  min-height: 100vh;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
`;

export const Section = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
`;
import styled from "styled-components";

export const HomeStyles = styled.div`
  & .beersC {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(331px, 1fr));
    justify-items: center;
    justify-content: center;
    /* grid-gap: 30px; */
    gap: 30px;
    padding: 30px 30px 50px;
  }
`;

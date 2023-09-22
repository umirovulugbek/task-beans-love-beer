import styled from "styled-components";

export const SearchStyle = styled.div`
  text-align: center;

  & form {
    min-height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    & input {
      width: 40%;
      padding: 0px 10px;
      outline: none;
      height: 45px;
      font-family: "Montserrat", sans-serif;
      border: none;
      box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;
      font-size: 20px;
      @media (max-width: 410px) {
        width: 100%;
      }
    }
    & button {
      cursor: pointer;
      background-color: #5762f7;
      display: inline-flex;
      font-size: 20px;
      font-family: "Montserrat", sans-serif;
      align-items: center;
      color: white;
      padding: 10px;
      border: none;
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
      height: 45px;
      & span {
        margin-left: 10px;
      }
    }
  }
`;

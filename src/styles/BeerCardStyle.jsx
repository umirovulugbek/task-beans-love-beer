import styled from "styled-components";

export const BeerCardStyles = styled.div`
  padding: 20px;
  background-color: #fff;
  border-radius: 7px;
  border: 1px solid #e7e7e7;
  justify-items: center;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.1);
  cursor: pointer;
  & .favoruties {
    margin-bottom: 8px;
    display: flex;
    justify-content: flex-end;
  }

  & .beer-card-items {
    display: flex;

    & .beer-card-items__img {
      margin-right: 20px;
      height: 70%;
      width: 20%;
      padding: 0;
      position: relative;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      & img {
        height: 180px;
        background-repeat: no-repeat;
        background-position: center;
        background: no-repeat scroll center scroll;
        -webkit-background-size: cover;
        background-size: cover;
        width: 100%;
        cursor: pointer;
        transition: all 0.5s ease-in-out;
        overflow: hidden;
      }
    }
  }
`;

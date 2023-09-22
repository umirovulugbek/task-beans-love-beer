import styled from "styled-components";

export const HeaderStyle = styled.div`
  & .header {
    background-color: #11dcb4;
    padding: 12px 20px;
    & .header_items {
      display: flex;
      justify-content: space-between;
      align-items: center;
      & .logo {
        font-size: 36px;
        color: white;
        align-items: center;
        cursor: pointer;
        text-decoration: none;
        @media (max-width: 600px) {
          font-size: 30px;
        }
        @media (max-width: 500px) {
          font-size: 25px;
        }
        @media (max-width: 430px) {
          font-size: 18px;
        }
      }
      & ul {
        display: flex;
        & li {
          list-style-type: none;
          margin-right: 10px;
          :last-child {
            margin-right: 0px;
          }
          & .active {
            color: #5762f7;
          }
          & a {
            text-decoration: none;
            color: white;
            font-size: 20px;
            position: relative;
            @media (max-width: 600px) {
              font-size: 15px;
            }
            & .favoritescount {
              -webkit-box-align: center;
              align-items: center;
              border-radius: 50%;
              /* border: 1px solid #e43333 !important; */
              border: none;
              bottom: 8px;
              display: flex;
              justify-content: center;
              right: -15px;
              -webkit-box-pack: center;
              justify-content: center;
              max-height: 10px;
              min-width: 10px;
              padding: 2px;
              position: absolute;
              font-size: 11px;
              font-weight: 500;
              background-color: #e43333;
              color: white;
            }
          }
        }
      }
    }
  }
`;

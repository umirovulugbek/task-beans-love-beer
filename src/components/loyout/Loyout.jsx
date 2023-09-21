/* eslint-disable react/prop-types */
import styled from "styled-components";
import Header from "./Header";



const StyleComponents = styled.div`
  transition: all 0.25s linear;
  min-height: 900px;
  padding: 50px 30px;
  background-color: #f2f2f2;
`;
export default function Loyout(props) {
  
  return (
    <>
        <Header />
        <StyleComponents className="mainSection">
          {props?.children}
        </StyleComponents>
   
    </>
  );
}

import styled from "styled-components";

export const HeaderStyle = styled.div`
      &  .header{
        background-color: #11dcb4;
        padding:12px 20px;
	   & .header_items{
		   display: flex;
		   justify-content: space-between;
		   align-items: center;
              &  .logo{
                font-size: 36px;
			 color: white;
			 align-items: center;
			 cursor: pointer;
			 text-decoration: none;
                }
                & ul {
                        display: flex;
                        & li{
					    list-style-type: none;
					    margin-right: 10px;
					    :last-child{
						margin-right: 0px;
					    }
					    & .active{
						color: #5762f7;
					    }
					& a{
						text-decoration: none;
						color: white;
						font-size: 20px;
					}
                        }
                }
         }
        }

`

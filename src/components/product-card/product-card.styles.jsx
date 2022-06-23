
import styled from 'styled-components';

export const StyledProductCard = styled.div`
width: 300px;
display: flex;
flex-direction: column;
height: 300px;
align-items: center;
position: relative;
margin-bottom: 20%;
margin-left: 20px;       
justify-content: space-evenly;


img {
  width: 100%;
  height: 90%;
  object-fit: contain;
  margin-bottom: 25px;
  margin-left: 10px;
  margin-top: 25px;
  justify-content: space-evenly;
}

button {
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 240px;
  display: none;
}

&:hover {
  img {
    opacity: 0.8;
  }

  button {
    opacity: 0.85;
    display: flex;
  }
}
`

export const StyledFooterInpcard = styled.div`
width: 100%;
height: 5%;
display:flex;
justify-content: space-between;
font-size: 14px;
margin-left: 10px;
`
export const ProductName = styled.span`
width: 90%;
margin-bottom: 13px;
`
export const ProductPrice = styled.span`
width: 10%;

`           
       
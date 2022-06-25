import styled from 'styled-components';


export const StyledCartItem = styled.div`
width: 100%;
display: flex;
height: 80px;
margin-bottom: 15px;
img {
  width: 30%;
}

@media screen and (max-width: 800px) {
   margin-bottom: 10px;
  margin-top: 10px;
}
`
export const StyledCartItemDetails = styled.div`
width: 70%;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
padding: 10px 20px;

@media screen and (max-width: 800px) {
  width: 70%;
padding: 5px 5px;
}
`
export const StyledNamePrice = styled.span`
font-size: 16px;
@media screen and (max-width: 800px) {
  font-size: 10px;
}
`


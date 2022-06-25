import styled from 'styled-components';

export const StyledCheckoutcontainer = styled.div`
width: 55%;
min-height: 90vh;
display: flex;
flex-direction: column;
align-items: center;
margin: 50px auto 0;

@media screen and (max-width: 800px) {
  width: 90%;
  margin: 0;
}
`
export const Checkoutheader = styled.div`
width: 100%;
padding: 10px 0;
display: flex;
justify-content: space-between;
border-bottom: 1px solid darkgrey;

@media screen and (max-width: 800px) {
  width: 85%;
  padding: 5px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
}
`
export const HeadBlock = styled.div`
text-transform: capitalize;
margin-right: 70px;
margin-left: -90px;

  &:last-child {
  width: 2%;
}
@media screen and (max-width: 800px) {
font-size: 12px;
margin-right: 0px;
margin-left: 0px;

&:last-child {
  width: 1%;
}
}
`
export const CheckoutTotal = styled.span`
margin-top: 30px;
margin-left: auto;
font-size: 25px;
`
export const Emptymessage = styled.span`
margin-top: 100px;
font-size: 20px;

` 

import styled from 'styled-components';

export const StyledCheckoutItemContainer = styled.div`
width: 100%;
display: flex;
min-height: 100px;
border-bottom: 1px solid darkgrey;
padding: 15px 0;
font-size: 15px;
align-items: center;
justify-content: space-evenly;
@media screen and (max-width: 800px) {
  font-size: 11px;

}
`
export const StyledImageContainer = styled.div`
width: 17%;
padding-right: 45px;

img {
  width: 100%;
  height: 100%;
}

@media screen and (max-width: 800px) {
  width: 50%;
  padding-right: 20px;
}
` 
export const StyledCheckoutNamePrice = styled.span`
width: 23%;
`
export const StyledCheckoutQuantity = styled.span`
width: 23%;
display: flex;
padding: 50px;
` 
export const StylCheckoutArrow = styled.div`
cursor: pointer;
`

export const StylCgeckoutValue = styled.span`
margin: 0 10px;
`
export const StylCheckoutXbutton = styled.div`
padding-left: 12px;
cursor: pointer;
`  
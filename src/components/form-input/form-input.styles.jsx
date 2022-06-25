import styled, { css } from 'styled-components';

const Subcolor = 'grey';
const Maincolor = 'black';

const shrinkLabelStyles = css`
top: -14px;
font-size: 12px;
color: ${Maincolor};
`
export const FormInputGroup = styled.div`
position: relative;
margin: 45px 0;
input[type='password'] {
letter-spacing: 0.3em;  
`

export const StyledFormInputLabel = styled.label`
color: ${Subcolor};
font-size: 16px;
font-weight: normal;
position: absolute;
pointer-events: none;
left: 5px;
top: 10px;
transition: 300ms ease all;

${({ shrink })=> shrink && shrinkLabelStyles };
@media screen and (max-width: 800px) {
  font-size: 12px;
}
`


export const StyledFormInput = styled.input`
background: none;
background-color: white;
color: $sub-color;
font-size: 18px;
padding: 10px 10px 10px 5px;
display: block;
width: 100%;
border: none;
border-radius: 0;
border-bottom: 1px solid ${Subcolor};
margin: 25px 0;

&:focus {
  outline: none;
}

&:focus ~ ${StyledFormInputLabel} {
  ${ shrinkLabelStyles };
}
`





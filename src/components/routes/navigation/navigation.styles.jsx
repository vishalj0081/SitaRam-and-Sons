import styled from 'styled-components';
import {Link} from 'react-router-dom';


export const StyledNavigation = styled.div`
height: 70px;
width: 100%;
display: flex;
justify-content: space-between;
margin-bottom: 25px;
`

export const StyledLogo = styled(Link)`
height: 100%;
width: 70px;
padding: 25px;
@media screen and (max-width: 800px) {
 padding: 10px 1px 5px 0px;
 width: 50px;
`
export const StyledNavLinks = styled.div`
width: 50%;
height: 100%;
display: flex;
align-items: center;
justify-content: flex-end;
@media screen and (max-width: 800px) {
padding: 0px;
width: 90%;

`


export const StyledNavLink = styled(Link)`
padding: 20px 15px;
cursor: pointer;
`

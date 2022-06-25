import { Link } from 'react-router-dom';
import styled from 'styled-components';


export const StyledCategoryPreview = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 10px;
margin-top: 10px;
@media screen and (max-width: 800px) {
 
  align-items: center;
  
  }

`

export const StyledPreviewTitle = styled(Link)`
font-size: 22px;
margin: 20px;
cursor: pointer;
color: white;         
background-color: rgb(62, 63, 64);


@media screen and (max-width: 800px) {
font-size: 12px;
margin: 5px;
align-items: center;

}

`
  export const StyledPreview = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
 
  @media screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 50px;
    row-gap: 20px;

    }
  
    `
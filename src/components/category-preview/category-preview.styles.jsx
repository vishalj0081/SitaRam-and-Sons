import { Link } from 'react-router-dom';
import styled from 'styled-components';


export const StyledCategoryPreview = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 10px;
margin-top: 10px;
`
export const StyledPreviewTitle = styled(Link)`
font-size: 22px;
margin: 20px;
cursor: pointer;
color: rgb(62, 63, 64);
`
  export const StyledPreview = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  `
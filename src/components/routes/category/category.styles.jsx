import styled from 'styled-components';

export const StyledCategory = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
column-gap: 20px;
row-gap: 50px;
@media screen and (max-width: 800px) {
display: grid;
grid-template-columns: repeat(2, 1fr);
column-gap: 25px;
row-gap: 10px;
padding: 0px 10px 0px 0px;

 }
  
`
export const CategoryTitle = styled.h2`
font-size: 28px;
margin-bottom: 25px;
text-align: center;
`

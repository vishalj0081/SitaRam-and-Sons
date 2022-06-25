
import styled from 'styled-components';

export const StyledAuthentication = styled.div`
display: flex;
width: 900px;
justify-content: space-between;
margin: 30px auto;

@media screen and (max-width: 800px) {
display: flex;
flex-direction: column;
 gap: 25px;
padding: 10px 10px 10px 30px;
align-items: center;
width: 300px;
font-size: 12px;

button{
    min-width: 30px;
    font-size: 10px;
}

`

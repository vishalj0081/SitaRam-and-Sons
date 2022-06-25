
import styled from 'styled-components';

export const StyledAuthentication = styled.div`
display: flex;
width: 900px;
justify-content: space-between;
margin: 30px auto;

@media screen and (max-width: 800px) {
display: flex;
flex-direction: column;
justify-content: space-between;
 gap: 20px;
 margin: 30px 60px 0px;
 padding: 10px 10px 10px 10px;

align-items: center;
width: 300px;
font-size: 10px;

button{
    min-width: 30px;
    font-size: 10px;
}
form{
    width:300px;
    margin-top: -30px;
    
}
input{
font-size: 13px;
}
`

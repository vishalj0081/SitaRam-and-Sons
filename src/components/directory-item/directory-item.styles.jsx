
import styled from 'styled-components';

export const StyledBGImage = styled.div`
width: 100%;
height: 100%;
background-size: cover;
background-position: center;      
background-image: ${({imageUrl})=> `url(${imageUrl})`};
` 

export const Styledbody = styled.div`
height: 90px;      
padding: 0 25px;      
display: flex;
flex-direction: column;      
align-items: center;      
justify-content: center;      
border: 1px solid black;     
background-color: white;    
opacity: 0.7;      
position: absolute;

h2 {
font-weight: bold;          
margin: 0 6px 0;
font-size: 22px;
color: #4a4a4a;
text-transform: uppercase;
}

p {
font-weight: lighter;
font-size: 16px;
}
`
export const StyledDirectoryItem = styled.div`
min-width: 30%;
height: 320px;
flex: 1 1 auto;
display: flex;
align-items: center;
justify-content: center;
border: 1px solid black;
margin: 0 7.5px 15px;
overflow: hidden;
&:hover {
cursor: pointer;

& ${StyledBGImage} {
transform: scale(1.1);
transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
}

& ${Styledbody} {
opacity: 0.9;
}
}

&.large {
height: 380px;
}
 
&:first-child {
margin-right: 7.5px;
}
 
&:last-child {
margin-left: 7.5px;
}
`


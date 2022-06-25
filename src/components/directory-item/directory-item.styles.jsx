
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
opacity:85%;      
position: absolute;

@media screen and (max-width: 800px) {
    height: 50px; 
    width: 120px; 
    padding: 0 0px; 
}

h2 {
font-weight: bold;          
margin: 0 6px 0;
font-size: 22px;
color: #4a4a4a;
text-transform: uppercase;
@media screen and (max-width: 800px) {
font-size: 10px;
color: black; 

}

}

p {
font-weight: lighter;
font-size: 16px;
color: blue;
@media screen and (max-width: 800px) {
font-size: 7px; 
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
opacity: 100%;
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

@media screen and (max-width: 800px) {
height: 200px;

}

`

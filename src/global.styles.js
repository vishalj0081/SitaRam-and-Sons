import { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`

body {
    margin: 0;
    padding: 10px 20px;
    font-family: 'Merriweather', serif;
    @media screen and (max-width: 800px) {
    padding: 10px;

    }
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
   }
  
   a {
    text-decoration: none;
    color: black;
        }
  
  * {
    box-sizing: border-box;
  }
  
`
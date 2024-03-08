import { createGlobalStyle } from 'styled-components';
import { themeColor } from './theme';

const GlobalStyles = createGlobalStyle`



*{
 padding: 0;
 margin: 0;
 box-sizing:border-box;
 list-style: none;
  text-decoration:none;
}
${themeColor}

input {
  border:none;
  }

 li {list-style:none;
    text-decoration:none;
} 

body {
 font-family: 'Exo 2', sans-serif;
}

button {
  border:none;
}

`;

export { GlobalStyles };

import { createGlobalStyle } from 'styled-components';
import { Colors } from './colors';
import { themeColor } from './theme';

const GlobalStyles = createGlobalStyle`

${themeColor}

*{
 padding: 0;
 margin: 0;
 box-sizing:border-box;
 list-style: none;
  text-decoration:none;
}

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

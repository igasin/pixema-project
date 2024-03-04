import { createGlobalStyle } from 'styled-components';
import { Colors } from './colors';

const GlobalStyles = createGlobalStyle`
*{
 padding: 0;
 margin: 0;
 box-sizing:border-box;}

input {
  border:none;
  }

 li {list-style:none} 

body {
 background-color:${Colors.BLACK};
 font-family: 'Exo 2', sans-serif;
}

button {
  border:none;
}

`;

export { GlobalStyles };

import styled, { createGlobalStyle } from 'styled-components';

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
  background-color:${Colors.GRAPHITE}
}

button {
  border:none;
}`;

export { GlobalStyles };

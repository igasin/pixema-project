import { css } from 'styled-components';

export const themeColor = css`
  [theme="dark"] {
    --primary: #7b61ff;
    --primary-bright: #917cff;
    --secondary: #80858b;
    --black: #000000;
    --dark: #242426;
    --white: #ffffff;
    --graphite: #323537;
    --error: #ff5154;
    --light: #afb2b6;
    --yellow: "#F3A608";
    --green: #00a340;
    --orange: #f45d2d;
  }
  [theme="light"] {
    --primary: #7b61ff;
    --primary-bright: #917cff;
    --secondary: #80858b;
    --black: #ffffff;
    --dark: #80858b;
    --white: #000000;
    --graphite: #afb2b6;
    --error: #ff5154;
    --light: #afb2b6;
    --green: #00a340;
    --yellow: "#F3A608";
    --orange: #f45d2d;
  }
`;

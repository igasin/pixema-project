import { css } from 'styled-components';

export type Theme = 'dark' | 'light';

export const themeColor = css`
  html [theme="dark"] {
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
  html [theme="light"] {
    --primary: #7b61ff;
    --primary-bright: #917cff;
    --secondary: #80858b;
    --black: #000000;
    --dark: #242426;
    --white: #000000;
    --graphite: #ffffff;
    --error: #ff5154;
    --light: #afb2b6;
    --green: #00a340;
    --yellow: "#F3A608";
    --orange: #f45d2d;
  }
`;

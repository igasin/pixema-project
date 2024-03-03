import { css } from 'styled-components';

export type Theme = 'dark' | 'light';

export const ThemeColor = css`
html [theme="dark"] {
    --primary: #7b61ff;
    --primary-bright: #917CFF;
    --secondary:#80858b;
    --black:#000000;
    --dark: #242426;
    --white: #ffffff;
    --graphite: #323537;
    --error:#FF5154;
    --light: #AFB2B6;
    --yellow: "#F3A608";
    --green: #F45D2D;    

}
html [theme="light"] {
    --primary: #7b61ff;
    --primary-bright: #917CFF;
    --secondary:#80858b;
    --black:#FFFFFF;
    --dark: #242426
    --white: #000000;
    --graphite: #FFFFFF;
    --error:#FF5154 ;
    --light: #AFB2B6;
    --green: #00A340;
    --yellow: "#F3A608";
    --orange: #F45D2D;
}
`;

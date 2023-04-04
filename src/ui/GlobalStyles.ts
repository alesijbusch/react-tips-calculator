import { createGlobalStyle } from 'styled-components';
import decorImg from '../assets/decor.svg';

export const GlobalStyles = createGlobalStyle`
    *, *:before, *:after{
        box-sizing: border-box;
    }

    body, h2,  p {
        padding: 0;
        margin: 0;
    };
    
    body {
        font-family: 'Noto Sans SC', sans-serif;
        font-size: 16px;
        font-weight: 400;
        background: no-repeat url("${decorImg}"), #eaf2f2;
    }
`;

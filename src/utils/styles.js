import { createGlobalStyle } from 'styled-components'
import styledNormalize from 'styled-normalize'

export const themes = {
  default: {
    name: 'Défaut',
    colors: {
      main: '#3B3B3B',
      second: '#EEEFE9',
      ter: '#5E85FE',
      quad: '209, 212, 196',
      background: '#fff',
      text: '#3B3B3B',
    },
    fonts: {
      body: '"Sora", sans-serif',
      title: '"Sora", sans-serif',
    },
    mq: {
      small: `@media screen and (max-width: ${46}em)`,
      medium: `@media screen and (max-width: ${75}em)`,
      mediumLandscape: `@media screen and (orientation: landscape) and (max-width: ${62}px)`,
      mediumPortrait: `@media screen and (orientation: portrait) and (max-width: ${62}px)`,
      large: `@media screen and (min-width: ${92}em)`,
      xlarge: `@media screen and (min-width: ${2000}px)`,
    },
    shadow: `box-shadow: 20px 20px 60px #cacbc6, -20px -20px 60px #ffffff`,
  },
  classic: {
    name: 'Classique',
    colors: {
      main: '#EF0D50',
      second: '#EEF1F9',
      ter: '#EF0D50',
      quad: '0, 0, 145',
      background: '#ffffff',
      text: '#32337B',
    },
    fonts: {
      body: '"Sora", sans-serif',
      title: '"Sora", sans-serif',
    },
    mq: {
      small: `@media screen and (max-width: ${650}px)`,
      medium: `@media screen and (max-width: ${1260}px)`,
      mediumLandscape: `@media screen and (orientation: landscape) and (max-width: ${1260}px)`,
      mediumPortrait: `@media screen and (orientation: portrait) and (max-width: ${1260}px)`,
      large: `@media screen and (min-width: ${1800}px)`,
      xlarge: `@media screen and (min-width: ${2000}px)`,
    },
  },
  night: {
    name: 'Nuit',
    colors: {
      main: '#92F2D2',
      second: '#383838',
      ter: '#92F2D2',
      quad: '156, 156, 156',
      background: '#1e1e1e',
      text: '#ffffff',
    },
    fonts: {
      body: '"Sora", sans-serif',
      title: '"Sora", sans-serif',
    },
    mq: {
      small: `@media screen and (max-width: ${650}px)`,
      medium: `@media screen and (max-width: ${1260}px)`,
      mediumLandscape: `@media screen and (orientation: landscape) and (max-width: ${1260}px)`,
      mediumPortrait: `@media screen and (orientation: portrait) and (max-width: ${1260}px)`,
      large: `@media screen and (min-width: ${1800}px)`,
      xlarge: `@media screen and (min-width: ${2000}px)`,
    },
  },
  simple: {
    name: 'Simple',
    colors: {
      main: '#000091',
      second: '#ffffff',
      ter: '#000091',
      quad: '0, 0, 145',
      background: '#ffffff',
      text: '#1e1e1e',
    },
    fonts: {
      body: '"Sora", sans-serif',
      title: '"Sora", sans-serif',
    },
    mq: {
      small: `@media screen and (max-width: ${650}px)`,
      medium: `@media screen and (max-width: ${1260}px)`,
      mediumLandscape: `@media screen and (orientation: landscape) and (max-width: ${1260}px)`,
      mediumPortrait: `@media screen and (orientation: portrait) and (max-width: ${1260}px)`,
      large: `@media screen and (min-width: ${1800}px)`,
      xlarge: `@media screen and (min-width: ${2000}px)`,
    },
    shadow: `border: 1px solid rgba(0, 0, 145, 0.2)`,
  },
}

export const GlobalStyle = createGlobalStyle`
  ${styledNormalize}

  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-family: ${(props) => props.theme.fonts.body};
    line-height: 1.4;
    text-rendering: geometricPrecision;
  }

  body {
    background-color: ${(props) => props.theme.colors.background};
    font-weight: 300;
    color: ${(props) => props.theme.colors.text};
  } 

  *, *:before, *:after {
    margin-top: 0;
    box-sizing: inherit;
  }

  #root {
    overflow: hidden;
    width: 100%;
    position: relative;
  }
  
  h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
    font-family: ${(props) => props.theme.fonts.title};
    font-weight: 300;
    line-height: 1.2;
  }

  a {
    color: ${(props) => props.theme.colors.main};
  }

  input {
    color: ${(props) => props.theme.colors.text};
    text-rendering: geometricPrecision;
  }

  strong {
    font-weight: 700;
  }
`

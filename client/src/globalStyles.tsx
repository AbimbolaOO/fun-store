import { css, Theme } from '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    palette: {
      primaryTextColor: string;
      placeHolderColor: string;
      placeHolderColorSecondary: string;
      tertiaryIconColor: string;
      bgColor: string;
      bgColorSecondary: string;
      bgColorTertiary: string;
      hoverColor: string;
      hoverColorSecondary: string;
      hoverColorTertiary: string;
      linkTetiaryColor: string;
      linkSecondayColor: string;
      btnBgColor: string;
      btnBgColorA: string;
      btnBgColorB: string;
      verticalLineColor: string;
      horzontalLineColor: string;
      paginationColor: string;
      dropBoxColor: string;
      surfaceColor: string;
      sliderIconColor: string;
    };
  }
}

export const theme: Theme = {
  palette: {
    primaryTextColor: '#707070',
    placeHolderColor: '#e4e4e2',
    placeHolderColorSecondary: '#dbdbdb',
    tertiaryIconColor: '#b3b3b2',
    bgColor: '#ffffff',
    bgColorSecondary: '#000000',
    bgColorTertiary: '#f8982b',
    hoverColor: '#535454',
    hoverColorSecondary: '#034baf',
    hoverColorTertiary: '#f0e504',
    linkTetiaryColor: '#212121',
    linkSecondayColor: 'firebrick',
    btnBgColor: '#313131',
    btnBgColorA: '#F3E4A4',
    btnBgColorB: '#F5B91B',
    verticalLineColor: '#dadada',
    horzontalLineColor: '#dadada',
    paginationColor: '#b1b3b3',
    dropBoxColor: '#cacaca',
    surfaceColor: '#f3f3f3',
    sliderIconColor: '#f2f2ef',
  },
};

const GlobalStyles = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  * {
    margin: 0;
  }
  html,
  body {
    height: 100%;
  }
  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    font-family: 'Work Sans', sans-serif;
  }
  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }
  input,
  button,
  textarea,
  select {
    font: inherit;
  }
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }
  #root,
  #__next {
    isolation: isolate;
  }
`;

export default GlobalStyles;

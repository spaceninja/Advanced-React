import React from "react";
import styled, { ThemeProvider, injectGlobal } from "styled-components";
import Meta from "./Meta";
import Header from "./Header";
import { inject } from "async";

const theme = {
  red: "#ff0000",
  black: "#393939",
  grey: "#3a3a3a",
  lightgrey: "#e1e1e1",
  offWhite: "#ededed",
  maxWidth: "1000px",
  large: "1300px",
  bs: "0 12px 24px 0 rgba(0,0,0,0.09)"
};

const StyledPage = styled.div`
  background: white;
  color: ${props => props.theme.black};
`;

const Inner = styled.main`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
`;

injectGlobal`
  @font-face {
    font-family: 'radnika_next';
    src: url('/static/radnikanext-medium-webfont.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }}

  html {
    box-sizing: border-box;
    font-family: radnika_next, sans-serif;
    font-size: 10px;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
  }

  a {
    text-decoration: none;
    color: ${theme.black};
  }
`;

class Page extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Meta />
          <Header />
          <Inner>{this.props.children}</Inner>
        </StyledPage>
      </ThemeProvider>
    );
  }
}

export default Page;
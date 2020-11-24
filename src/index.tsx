import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/globalStyles";
import { theme } from "./styles/theme";

ReactDOM.render(
  <Router>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </Router>,
  document.getElementById("root")
);

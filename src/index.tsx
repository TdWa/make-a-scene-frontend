import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

import { Provider } from "react-redux";
import store from "./store";

import { ThemeProvider } from "styled-components";
import GlobalStyles from "./general-styles/globalStyles";
import { theme } from "./general-styles/theme";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </Router>
  </Provider>,
  document.getElementById("root")
);

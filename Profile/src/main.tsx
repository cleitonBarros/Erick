import React from "react";
import ReactDOM from "react-dom/client";

import { ThemeProvider } from "styled-components";

import App from "./App.tsx";
import GlobalStyles from "./styles/global.ts";
import { defaultTheme } from "./styles/themes/defaultTheme.ts";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

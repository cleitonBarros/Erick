import React from "react";
import ReactDOM from "react-dom/client";

import { ThemeProvider } from "styled-components";

import App from "./App.tsx";
import { SiderBarContext } from "./context/useContext.tsx";
import GlobalStyles from "./styles/global.ts";
import { defaultTheme } from "./styles/themes/defaultTheme.ts";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <SiderBarContext>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </SiderBarContext>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";

import { ThemeProvider } from "styled-components";

import App from "./App.tsx";
import { client } from "./lib/dato-cms/dato-cms.tsx";
import GlobalStyles from "./styles/global.ts";
import { defaultTheme } from "./styles/themes/defaultTheme.ts";

import { ClientContext } from "graphql-hooks";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ClientContext.Provider value={client}>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </ClientContext.Provider>
  </React.StrictMode>
);

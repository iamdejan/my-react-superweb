import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { routeTree } from "./routeTree.gen";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material";

const router = createRouter({routeTree});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router
  }
}

const theme = createTheme({
  colorSchemes: {
    dark: true,
  },
});

const rootElement = document.getElementById("root");
if(rootElement !== null && !rootElement.innerHTML) {
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </StrictMode>
  );
}

import { createRootRoute, FileRoutesByPath, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import AppBar from "@mui/material/AppBar";
import { Button, Container, Toolbar, Typography } from "@mui/material";

type RouteLink = {
  link: keyof FileRoutesByPath,
  title: string
};

const routeList: RouteLink[] = [
  {
    link: "/about",
    title: "About"
  },
  {
    link: "/counter",
    title: "Counter"
  },
  {
    link: "/to-do-list",
    title: "To-Do List",
  },
  {
    link: "/distance-calculator",
    title: "Distance"
  },
  {
    link: "/uuid-generator",
    title: "UUID"
  },
  {
    link: "/bmi-calculator/",
    title: "Body Mass Index"
  },
  {
    link: "/password-generator",
    title: "Password Generator"
  },
  {
    link: "/calculator",
    title: "Calculator"
  }
];

export const Route = createRootRoute({
  component: () => (
    <>
      <AppBar position="static" sx={{margin:"0", padding:"0"}}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
              <a href="/" style={{textDecoration: "none", color: "inherit"}}>My React Superweb</a>
            </Typography>
            {routeList.map(route => (
              <Button key={route.link} variant="text" color="inherit" href={route.link}>
                {route.title}
              </Button>
            ))}
          </Toolbar>
        </Container>
      </AppBar>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  )
});

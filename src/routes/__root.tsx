import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import AppBar from "@mui/material/AppBar";
import { Button, Container, Toolbar, Typography } from "@mui/material";

type RouteLink = {
  link: string,
  title: string
};

const routeList: RouteLink[] = [
  {
    link: "/",
    title: "Home"
  },
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
    title: "Distance Calculator"
  },
  {
    link: "/uuid-generator",
    title: "UUID Generator"
  },
  {
    link: "/bmi-calculator",
    title: "BMI Calculator"
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
              <Button key={route.link} variant="text" color="inherit" disableElevation href={route.link}>
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

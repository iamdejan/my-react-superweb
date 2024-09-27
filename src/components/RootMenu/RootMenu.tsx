import { AppBar, Button, Container, Drawer, List, ListItem, Toolbar, Typography } from "@mui/material";
import { FileRoutesByPath, Outlet } from "@tanstack/react-router";
import { JSX, lazy, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { grey } from "@mui/material/colors";

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
    link: "/ulid-generator",
    title: "ULID"
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
  },
  {
    link: "/json-sorter",
    title: "JSON Sorter"
  }
];

const TanStackRouterDevtools =
  process.env.NODE_ENV === "production"
    ? (): null => null // Render nothing in production
    : lazy(() =>
      import("@tanstack/router-devtools").then((res) => ({
        default: res.TanStackRouterDevtools,
      })),
    );

export default function RootMenu(): JSX.Element {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppBar position="static" sx={{margin:"0", padding:"0"}}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Button color="inherit" onClick={() => setOpen(true)}>
              <MenuIcon />
            </Button>
            <Typography variant="h5" component="div" sx={{ marginLeft: "auto" }}>
              <a href="/" style={{textDecoration: "none", color: "inherit"}}>My React Superweb</a>
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
      <Outlet />
      <Drawer open={open} onClose={() => setOpen(false)}>
        <List>
          {routeList.map((route) => (
            <ListItem
              key={route.link}
              sx={{
                textDecoration: "none",
                boxShadow: "none",
                color: "inherit",
                "&:hover": {
                  backgroundColor: grey[200],
                }
              }}
              component="a"
              href={route.link}
            >
              <Typography>
                {route.title}
              </Typography>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <TanStackRouterDevtools />
    </>
  );
}

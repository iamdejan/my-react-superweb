import {
  AppBar,
  Button,
  Container,
  Drawer,
  List,
  ListItem,
  Toolbar,
  Typography,
  Divider,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import { FileRoutesByPath, Link, Outlet } from "@tanstack/react-router";
import { JSX, lazy, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ThemeSwitch from "../ThemeSwitch";
import DrawerLink from "../DrawerLink";

const theme = createTheme({
  colorSchemes: {
    dark: true,
  },
});

type RouteLink = {
  link: keyof FileRoutesByPath;
  title: string;
};

const routeList: RouteLink[] = [
  {
    link: "/about",
    title: "About",
  },
  {
    link: "/counter",
    title: "Counter",
  },
  {
    link: "/to-do-list",
    title: "To-Do List",
  },
  {
    link: "/distance-calculator",
    title: "Distance",
  },
  {
    link: "/uuid-generator",
    title: "UUID",
  },
  {
    link: "/ulid-generator",
    title: "ULID",
  },
  {
    link: "/bmi-calculator/",
    title: "Body Mass Index",
  },
  {
    link: "/password-generator",
    title: "Password Generator",
  },
  {
    link: "/calculator",
    title: "Calculator",
  },
  {
    link: "/json-sorter",
    title: "JSON Sorter",
  },
  {
    link: "/json-compare",
    title: "JSON Compare",
  },
];

const TanStackRouterDevtools =
  process.env.NODE_ENV === "production"
    ? (): null => null // Render nothing in production
    : lazy(() =>
        import("@tanstack/router-devtools").then((res) => ({
          default: res.TanStackRouterDevtools,
        })),
      );

export default function RootMenu(): JSX.Element | null {
  const [open, setOpen] = useState(false);

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme} defaultMode="dark">
        <AppBar position="static" sx={{ margin: "0", padding: "0" }}>
          <Container maxWidth={false}>
            <Toolbar disableGutters>
              <Button color="inherit" onClick={() => setOpen(true)}>
                <MenuIcon />
              </Button>
              <Typography
                variant="h5"
                component="div"
                sx={{ marginLeft: "auto" }}
              >
                <Link
                  to="/"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  My React Superweb
                </Link>
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
        <Outlet />
        <Drawer open={open} onClose={() => setOpen(false)}>
          <List>
            {routeList.map((route) => (
              <DrawerLink
                key={route.link}
                title={route.title}
                to={route.link}
              />
            ))}
          </List>
          <Divider />
          <List>
            <ListItem>
              <ThemeSwitch />
            </ListItem>
          </List>
          <Divider />
          <List>
            <DrawerLink
              title="Date Time"
              to="https://date-time.overrated.lol"
            />
          </List>
        </Drawer>
        <TanStackRouterDevtools />
      </ThemeProvider>
    </>
  );
}

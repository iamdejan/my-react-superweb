import { ListItem, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Link } from "@tanstack/react-router";
import { JSX } from "react";

type DrawerLinkProps = {
  title: string;
  to: string;
};

export default function DrawerLink(props: DrawerLinkProps): JSX.Element {
  return (
    <Link
      to={props.to}
      style={{
        textDecoration: "none",
        color: "inherit",
        boxShadow: "none",
      }}
    >
      <ListItem
        sx={(theme) => ({
          "&:hover": {
            backgroundColor: grey[200],
            ...theme.applyStyles("dark", {
              backgroundColor: grey[900],
            }),
          },
        })}
      >
        <Typography>{props.title}</Typography>
      </ListItem>
    </Link>
  );
}

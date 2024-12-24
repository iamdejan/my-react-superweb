import { JSX } from "react";
import { ListItem, Typography } from "@mui/material";
import { Link } from "@tanstack/react-router";

type DrawerLinkProps = {
  link: string;
  title: string;
};

export default function DrawerLink(props: DrawerLinkProps): JSX.Element {
  return (
    <ListItem>
      <Typography
        component={Link}
        to={props.link}
        sx={{
          textDecoration: "none",
          boxShadow: "none",
          color: "inherit",
        }}
      >
        {props.title}
      </Typography>
    </ListItem>
  );
}

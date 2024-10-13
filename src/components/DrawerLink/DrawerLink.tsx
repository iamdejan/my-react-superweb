import { ListItem, ListItemProps, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { createLink, Link } from "@tanstack/react-router";
import React from "react";

const DrawerLink = createLink(
  React.forwardRef((props: ListItemProps<"a"> & { title: string }, ref: React.ForwardedRef<HTMLAnchorElement>) => {
    return (
      <ListItem
        {...props}
        sx={(theme) => ({
          textDecoration: "none",
          boxShadow: "none",
          color: "inherit",
          "&:hover": {
            backgroundColor: grey[200],
            ...theme.applyStyles("dark", {
              backgroundColor: grey[900],
            })
          }
        })}
        ref={ref}
        component={Link}
      >
        <Typography>
          {props.title}
        </Typography>
      </ListItem>
    );
  })
);

export default DrawerLink;

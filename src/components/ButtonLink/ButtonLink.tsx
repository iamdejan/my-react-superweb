import { Button, ButtonProps } from "@mui/material";
import { createLink, Link } from "@tanstack/react-router";
import React from "react";

const ButtonLink = createLink(
  React.forwardRef(
    (
      props: ButtonProps<"a"> & { text: string },
      ref: React.ForwardedRef<HTMLAnchorElement>,
    ) => {
      return (
        <Button {...props} ref={ref} component={Link}>
          {props.text}
        </Button>
      );
    },
  ),
);

export default ButtonLink;

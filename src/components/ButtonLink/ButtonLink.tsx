import { JSX } from "react";
import { Button } from "@mui/material";
import { Link } from "@tanstack/react-router";

type ButtonLinkProps = {
  link: string;
  title: string;
};

export default function ButtonLink(props: ButtonLinkProps): JSX.Element {
  return (
    <Button
      variant="contained"
      color="primary"
      component={Link}
      to={props.link}
    >
      {props.title}
    </Button>
  );
}

import { JSX } from "react";
import {
  Alert,
  Link,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";

const features: string[] = [
  "To-do list",
  "Distance converter",
  "UUID generator",
  "BMI ideal weight",
  "Password hasher",
  "Calculator",
];

type ReferenceLink = {
  link: string;
  text: string;
};

const referenceList: ReferenceLink[] = [
  {
    link: "https://roadmap.sh/react",
    text: "React Roadmap",
  },
  {
    link: "https://tsh.io/blog/react-component-lifecycle-methods-vs-hooks/",
    text: "React component lifecycle: React lifecycle methods & hooks",
  },
  {
    link: "https://www.robinwieruch.de/react-list-component/",
    text: "React List Component",
  },
];

export default function Home(): JSX.Element {
  return (
    <Paper
      sx={(theme) => ({
        backgroundColor: "rgba(230,230,230,1)",
        background:
          "linear-gradient(180deg, rgba(230,230,230,1) 0%, rgba(255,243,250,1) 100%)",
        ...theme.applyStyles("dark", {
          backgroundColor: "rgba(17,17,17,1)",
          background:
            "linear-gradient(180deg, rgba(17,17,17,1) 0%, rgba(23,22,23,1) 100%)",
        }),
        minHeight: "100vh",
        minWidth: "100%",
        margin: 0,
        padding: 1,
      })}
    >
      <Typography variant="h4" paddingY={2} align="center">
        My React Superweb
      </Typography>

      <Alert
        severity="info"
        variant="filled"
        sx={{
          marginY: "2rem",
        }}
      >
        Check out my new website:{" "}
        <Link
          href="https://date-time.overrated.lol"
          style={{
            textDecoration: "none",
            fontWeight: "bold",
            color: "inherit",
          }}
        >
          SolidJS Date Time Utilities
        </Link>
      </Alert>

      <Typography>
        This is a simple React website to fulfill my utilities, which are:
      </Typography>
      <List>
        {features.map((feature) => (
          <ListItem key={feature}>
            <ListItemText primary={"• " + feature} />
          </ListItem>
        ))}
      </List>

      <Typography sx={{ paddingBottom: 2 }}>
        List of links for further references:
      </Typography>
      {referenceList.map((item) => (
        <div key={item.link}>
          <Link href={item.link}>
            <Typography sx={{ paddingBottom: 1 }}>{item.text}</Typography>
          </Link>
        </div>
      ))}
    </Paper>
  );
}

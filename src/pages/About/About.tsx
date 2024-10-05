import { JSX } from "react";
import { Paper, Typography } from "@mui/material";
import { useDocumentTitle } from "@uidotdev/usehooks";

type PaperData = {
  title: string,
  text: string
};

const paperList: PaperData[] = [
  {
    title: "Who Am I?",
    text: "I'm Giovanni Dejan, a backend engineer at a multi-finance company.",
  },
  {
    title: "Why do I learn frontend?",
    text: "Because I'm bored, that's why. I also want to make myself more marketable in the job market.",
  },
  {
    title: "Who inspired you to learn frontend?",
    text: "No one, actually. But if there's a trigger, it has to be because of the job market crisis of 2022-2024.",
  },
];

export default function About(): JSX.Element {
  useDocumentTitle("About");

  return (
    <Paper
      sx={(theme) => ({
        backgroundColor: "rgba(230,230,230,1)",
        background: "linear-gradient(180deg, rgba(230,230,230,1) 0%, rgba(255,255,237,1) 100%)",
        ...theme.applyStyles("dark", {
          backgroundColor: "rgba(17,17,17,1)",
          background: "linear-gradient(180deg, rgba(17,17,17,1) 0%, rgba(23,22,23,1) 100%)",
        }),
        minHeight: "100vh",
        minWidth: "100%",
        margin: "0",
        padding: "0",
      })}
    >
      <Typography variant="h4" align="center" paddingBottom={3} paddingTop={2}>
        About This Website
      </Typography>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "2rem",
          padding: "1rem",
        }}
      >
        {paperList.map((item) => (
          <Paper
            key={item.title}
            elevation={4}
            sx={{
              padding: 2,
              minHeight: "8rem",
            }}
          >
            <Typography variant="h6">{item.title}</Typography>
            <div>{item.text}</div>
          </Paper>
        ))}
      </div>
    </Paper>
  );
}

import { JSX } from "react";
import { Box, Container, Grid, Paper, Typography } from "@mui/material";

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
  return (
    <Container
      sx={{
        backgroundColor: "rgba(230,230,230,1)",
        background: "linear-gradient(180deg, rgba(230,230,230,1) 0%, rgba(255,255,237,1) 100%)",
        minHeight:"100vh",
        minWidth:"100vw",
        margin:"0",
        padding:"0",
      }}
    >
      <Typography variant="h4" align="center" paddingBottom={3} paddingTop={2}>
        About This Website
      </Typography>
      <Grid container maxWidth="100%" rowSpacing={{xs: 1, sm: 2, md: 3}} columnSpacing={{xs: 1, sm: 2, md: 3}} alignItems="center" justifyContent="space-evenly">
        {paperList.map(item => (
          <Grid key={item.title} item sm={3}>
            <Paper elevation={4}>
              <Box p={2}>
                <Typography variant="h6">{item.title}</Typography>
                <div>{item.text}</div>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

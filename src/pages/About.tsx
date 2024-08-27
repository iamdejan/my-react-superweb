import { Container, Typography } from "@mui/material";

export default function About(): JSX.Element {
  return (
    <Container
      sx={{
        backgroundColor: "rgb(255,255,255)",
        background: "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,237,1) 100%)",
        minHeight:"100vh",
        minWidth:"100%",
        margin:"0",
        padding:"0",
      }}
    >
      <Typography variant="h4" align="center" paddingBottom={3} paddingTop={2}>
        About This Website
      </Typography>
      <div>
        Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed ullamcorper, risus nec tempus tempor, nisi turpis sodales ante, ultricies pellentesque enim orci in quam. Fusce eget quam risus. Etiam vitae diam vitae nibh suscipit sodales. Nunc tincidunt lacus vel magna venenatis, ac ornare enim pellentesque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras vel libero at orci pellentesque posuere vel id sapien. Duis ut porta nibh. Nullam pulvinar, mauris a dapibus sollicitudin, lorem libero pellentesque elit, sit amet consectetur libero neque eu lectus. Curabitur molestie arcu imperdiet sagittis facilisis.
      </div>
      {/* TODO: add papers to this page. */}
    </Container>
  );
}

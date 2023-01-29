import { Container, Typography } from "@mui/material";
import ShrinkBar from "./ShrinkBar/ShrinkBar";
import ShortUrlList from "./ShortUrlList/ShortUrlList";

function MainPage() {
  return (
    <Container maxWidth="lg">
      <Typography variant="h1">SAN Short URL</Typography>
      <ShrinkBar />
      <ShortUrlList urls={[]} />
    </Container>
  );
}

export default MainPage;

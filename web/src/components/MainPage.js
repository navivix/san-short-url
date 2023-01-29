import { Container, Typography } from "@mui/material";
import ShrinkBar from "./ShrinkBar/ShrinkBar";
import ShortUrlList from "./ShortUrlList/ShortUrlList";
import useUrls from "../hooks/useUrls";

function MainPage() {
  const { urls, loading, createUrl, deleteUrl } = useUrls();

  return (
    <Container maxWidth="lg">
      <Typography variant="h1">SAN Short URL</Typography>
      <ShrinkBar onSubmit={createUrl} />
      {loading ? (
        <Typography variant="body1">Loading...</Typography>
      ) : (
        <ShortUrlList urls={urls} onDelete={deleteUrl} />
      )}
    </Container>
  );
}

export default MainPage;

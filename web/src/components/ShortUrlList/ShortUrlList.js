import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import ShortUrlListElement from "./ShortUrlListElement";

function ShortUrlList({ urls }) {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Full URL</TableCell>
            <TableCell>Short URL</TableCell>
            <TableCell align="right">Clicks</TableCell>
            <TableCell align="right" />
          </TableRow>
        </TableHead>
        <TableBody>
          {urls.map((url) => (
            <ShortUrlListElement
              key={url._id}
              full={url.full}
              short={url.short}
              clicks={url.clicks}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ShortUrlList;

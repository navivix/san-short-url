import { TableCell, TableRow } from "@mui/material";

function ShortUrlListElement({ full, short, clicks }) {
  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell component="th" scope="row">
        {full}
      </TableCell>
      <TableCell>{short}</TableCell>
      <TableCell align="right">{clicks}</TableCell>
    </TableRow>
  );
}

export default ShortUrlListElement;

import { TableCell, TableRow, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function ShortUrlListElement({ full, short, clicks }) {
  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell component="th" scope="row">
        {full}
      </TableCell>
      <TableCell>{short}</TableCell>
      <TableCell align="right">{clicks}</TableCell>
      <TableCell align="right">
        <IconButton variant="contained">
          <DeleteIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
}

export default ShortUrlListElement;

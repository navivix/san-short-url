import { TableCell, TableRow, IconButton, Link } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function ShortUrlListElement({ full, short, clicks, onDelete }) {
  const handleDelete = () => onDelete(short);

  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell component="th" scope="row">
        <Link href={full}>{full}</Link>
      </TableCell>
      <TableCell>
        <Link
          href={`${
            process.env.REACT_APP_API_URL || "http://localhost:3000"
          }/${short}`}
        >
          {short}
        </Link>
      </TableCell>
      <TableCell align="right">{clicks}</TableCell>
      <TableCell align="right">
        <IconButton onClick={handleDelete} variant="contained" color="error">
          <DeleteIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
}

export default ShortUrlListElement;

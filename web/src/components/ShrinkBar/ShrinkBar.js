import { useState, useEffect } from "react";
import { TextField, Button, Box } from "@mui/material";
import validateUrl from "../../utils/validateUrl";

function ShrinkBar({ onSubmit }) {
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => setUrl(e.target.value);

  const handleSubmit = () => {
    setUrl("");
    onSubmit(url);
  };

  useEffect(() => {
    if (url !== "" && !validateUrl(url)) setError("Invalid URL.");
    else setError("");
  }, [url]);

  return (
    <Box sx={{ display: "flex", mb: 2 }}>
      <TextField
        sx={{ mr: 2 }}
        value={url}
        onChange={handleChange}
        variant="outlined"
        placeholder="URL"
        error={!!error}
        helperText={error}
        fullWidth
      />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Shrink
      </Button>
    </Box>
  );
}

export default ShrinkBar;

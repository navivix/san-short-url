import { useState } from "react";
import { OutlinedInput, Button, Box } from "@mui/material";

function ShrinkBar({ onSubmit }) {
  const [url, setUrl] = useState("");

  const handleChange = (e) => setUrl(e.target.value);

  const handleSubmit = () => {
    setUrl("");
    onSubmit(url);
  };

  return (
    <Box sx={{ display: "flex", mb: 2 }}>
      <OutlinedInput
        sx={{ mr: 2 }}
        value={url}
        onChange={handleChange}
        placeholder="URL"
        fullWidth
      />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Shrink
      </Button>
    </Box>
  );
}

export default ShrinkBar;

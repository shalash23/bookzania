import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelect() {
  const [location, setLocation] = React.useState("");

  const handleChange = (event) => {
    setLocation(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Location</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={location}
          label="Location"
          onChange={handleChange}
        >
          <MenuItem value={"cairo"}>Cairo</MenuItem>
          <MenuItem value={"Sharm%20%EL%20%sheikh"}>Sharm El-Sheikh</MenuItem>
          <MenuItem value={"hurghada"}>Hurghada</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

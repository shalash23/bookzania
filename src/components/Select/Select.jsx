import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { cityContext } from "../../store/APIContext";

export default function BasicSelect() {
  const [cityState, setCityState] = React.useContext(cityContext);

  const handleChange = (event) => {
    setCityState(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Location</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={cityState}
          label="Location"
          onChange={handleChange}
        >
          <MenuItem value={"cairo"}>Cairo</MenuItem>
          <MenuItem value={"sharm%20el%20sheikh"}>Sharm El-Sheikh</MenuItem>
          <MenuItem value={"hurghada"}>Hurghada</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { radiusContext } from "../../store/APIContext";

export default function Radius() {
  const [radiusState, setRadiusState] = React.useContext(radiusContext);

  const handleChange = (event) => {
    setRadiusState(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120, ml: 4 }}>
      <FormControl fullWidth>
        <InputLabel id="category-select-label">Radius</InputLabel>
        <Select
          labelId="category-select-label"
          id="category-select"
          value={radiusState}
          label="Radius"
          onChange={handleChange}
        >
          <MenuItem value={500}>500 Meters</MenuItem>
          <MenuItem value={1000}>1 KMS</MenuItem>
          <MenuItem value={2000}>2 KMS</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { categoryContext } from "../../store/APIContext";

export default function BasicSelect() {
  const [categoryState, setCategoryState] = React.useContext(categoryContext);

  const handleChange = (event) => {
    setCategoryState(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120, ml: 4 }}>
      <FormControl fullWidth>
        <InputLabel id="category-select-label">Category</InputLabel>
        <Select
          labelId="category-select-label"
          id="category-select"
          value={categoryState}
          label="Category"
          onChange={handleChange}
        >
          <MenuItem value={"accomodations"}>Accomodations</MenuItem>
          <MenuItem value={"amusements"}>Amusements</MenuItem>
          <MenuItem value={"cultural"}>Cultural</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

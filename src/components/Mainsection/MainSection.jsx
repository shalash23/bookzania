import { Box, Container, Typography } from "@mui/material";
import { getRequest } from "../../utils/GetRequest";
import { useContext, useEffect, useState } from "react";
import Select from "../Select/Select";
import Category from "../Select/Category";
import { cityContext, categoryContext } from "../../store/APIContext";
export default function MainSection() {
  const [cityState, _] = useContext(cityContext);
  console.log(cityState);
  const [cityDimensions, setCityDimensions] = useState({
    lon: null,
    lat: null,
  });

  useEffect(() => {
    getRequest(cityState);
  }, [cityState]);
  return (
    <Container maxWidth={"lg"}>
      <Box sx={{ mt: 8 }}>
        <Typography
          variant="h4"
          component="h2"
          sx={{
            textTransform: "capitalize",
            fontWeight: "bolder",
          }}
        >
          find the nearest attraction to your travel spot!
        </Typography>
        <Box
          sx={{
            display: "flex",
            mt: 4,
            mb: 8,
          }}
        >
          <Select />
          <Category />
        </Box>
      </Box>
    </Container>
  );
}

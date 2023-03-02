import { Box, Container, Typography } from "@mui/material";
import getRequest from "../../utils/GetRequest";
import { useEffect } from "react";
import Select from "../Select/Select";
import Category from "../Select/Category";
export default function MainSection() {
  useEffect(() => {
    getRequest();
  }, []);
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

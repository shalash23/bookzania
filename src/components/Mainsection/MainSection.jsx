import { Box, Container, Typography } from "@mui/material";
import getRequest from "../../utils/GetRequest";
export default function MainSection() {
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
      </Box>
    </Container>
  );
}

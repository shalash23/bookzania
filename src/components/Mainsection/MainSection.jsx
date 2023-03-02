import { Box, Container, Typography } from "@mui/material";
import { getRequest } from "../../utils/GetRequest";
import { useContext, useEffect, useState } from "react";
import Select from "../Select/Select";
import Category from "../Select/Category";
import Radius from "../Select/Radius";
import { cityContext, categoryContext } from "../../store/APIContext";
import Cards from "../cards/Cards";
export default function MainSection() {
  const [cityState, _] = useContext(cityContext);
  const [categoryState, __] = useContext(categoryContext);
  const [responseData, setResponseData] = useState();
  const [cityDimensions, setCityDimensions] = useState({});

  useEffect(() => {
    (async () => {
      if (!cityState) return;
      try {
        const res = await getRequest(cityState);
        setResponseData(res[0]);
      } catch (e) {
        console.log(e);
      }
    })();
  }, [cityState]);

  useEffect(() => {
    if (!responseData) return;
    setCityDimensions({ lon: responseData.lon, lat: responseData.lat });
    console.log(cityDimensions);
  }, [responseData]);
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
          <Radius />
        </Box>
        <Cards
          lon={cityDimensions.lon}
          lat={cityDimensions.lat}
          category={categoryState}
        />
      </Box>
    </Container>
  );
}

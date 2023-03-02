import * as React from "react";
import LoadingButton from "@mui/lab/LoadingButton";

export default function LoadingButtons() {
  return (
    <LoadingButton loading loadingIndicator="Loading…" variant="outlined">
      Fetch data
    </LoadingButton>
  );
}

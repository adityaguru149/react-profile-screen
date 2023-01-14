import * as React from "react";
import Box from "@mui/material/Box";
import { Theme } from "@mui/material/styles";
import makeStyles from "@mui/styles/makeStyles";

export const NotFoundPage = (): JSX.Element => {
  return (
    <Box sx={{ minWidth: "256px", maxWidth: "512px", padding: "64px" }}>
      <NotFoundCard
        goToHomeActionHandler={() => {
          console.log("Not implemented yet.");
        }}
      />
    </Box>
  );
};

export const NotFoundCard = (props: { goToHomeActionHandler: () => void }): JSX.Element => {
  const { goToHomeActionHandler } = props;
  const classes = useStyles();

  return (
    <Box sx={{ minWidth: "1112px", maxWidth: "1112px", padding: "0 64px 0 64px" }}>
      <p>NotFound works!</p>
    </Box>
  );
};

const useStyles = makeStyles((theme: Theme) => ({}));

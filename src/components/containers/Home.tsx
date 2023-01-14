import * as React from "react";
import Box from "@mui/material/Box";
import { Theme } from "@mui/material/styles";
import makeStyles from "@mui/styles/makeStyles";

export const Home = (): JSX.Element => {
  const classes = useStyles();

  return (
    <Box sx={{ minWidth: "1112px", maxWidth: "1112px", padding: "0 64px 0 64px" }}>
      <p>Home works!</p>
    </Box>
  );
};

export const TopBar = (props: { logoutActionHandler: () => void }): JSX.Element => {
  const { logoutActionHandler } = props;
  const classes = useStyles();
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", margin: "20px 0 20px 0" }}>
      <p>Top Bar works!</p>
    </Box>
  );
};

const useStyles = makeStyles((theme: Theme) => ({}));

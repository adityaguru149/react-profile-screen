import * as React from "react";
import Box from "@mui/material/Box";
import { Theme } from "@mui/material/styles";
import makeStyles from "@mui/styles/makeStyles";

export const LoginPage = (): JSX.Element => {
  return (
    <Box sx={{ minWidth: "256px", maxWidth: "512px", padding: "64px" }}>
      <LoginCard
        loginActionHandler={() => {
          console.log("Not implemented yet.");
        }}
      />
    </Box>
  );
};

export const LoginCard = (props: { loginActionHandler: (username: string, password: string) => void }): JSX.Element => {
  const { loginActionHandler } = props;
  const classes = useStyles();

  return (
    <Box sx={{ minWidth: "1112px", maxWidth: "1112px", padding: "0 64px 0 64px" }}>
      <p>Login works!</p>
    </Box>
  );
};

const useStyles = makeStyles((theme: Theme) => ({}));

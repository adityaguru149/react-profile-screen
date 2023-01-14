import * as React from "react";
import Box from "@mui/material/Box";
import { Theme } from "@mui/material/styles";
import makeStyles from "@mui/styles/makeStyles";
import Button from "@mui/material/Button";
import LoginIcon from "@mui/icons-material/Login";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { useNavigate } from "react-router-dom";
import API from "src/api/auth_api";
import { APIResult } from "src/model/APIResult";
import { AuthData } from "src/model/AuthData";

export const LoginPage = (): JSX.Element => {
  const navigate = useNavigate();

  const handleLogin = async (username: string, password: string) => {
    const response: APIResult<AuthData> = await API.verifyUser(username, password);
    if (response.type === "success") {
      localStorage.setItem("jwt", response.value.token);
    } else {
      console.error("Oops something went wrong!");
    }

    navigate("/");
  };

  return (
    <Box sx={{ minWidth: "256px", maxWidth: "512px", padding: "64px" }}>
      <LoginCard loginActionHandler={handleLogin} />
    </Box>
  );
};

export const LoginCard = (props: { loginActionHandler: (username: string, password: string) => void }): JSX.Element => {
  const { loginActionHandler } = props;
  const classes = useStyles();

  // TODO: Manage translations with i18n
  const usernameLabelText = "Username";
  const passwordLabelText = "Password";
  const loginActionText = "LOGIN";

  // Local state(s)
  const [username, setUsername] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [paswordVisible, setPasswordVisible] = React.useState<boolean>(false);

  const togglePasswordVisibility = React.useCallback(() => {
    setPasswordVisible(!paswordVisible);
  }, [paswordVisible]);

  return (
    <Card
      sx={{
        flex: 1,
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;",
        display: "flex",
        paddingTop: "16px",
      }}>
      <Box sx={{ display: "flex", flex: 1, flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto", paddingTop: 0 }}>
          <Typography sx={{ marginBottom: "4px" }} variant="body1" color="text.primary" component="div">
            {usernameLabelText}
          </Typography>
          <TextField
            id="input-username"
            variant="outlined"
            value={username}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setUsername(event.target.value);
            }}
            sx={{ display: "flex", flex: 1, marginBottom: "16px" }}
          />
          <Typography sx={{ marginBottom: "4px" }} variant="body1" color="text.primary" component="div">
            {passwordLabelText}
          </Typography>
          <TextField
            id="input-password"
            variant="outlined"
            value={password}
            type={paswordVisible ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton aria-label="toggle password visibility" onClick={togglePasswordVisibility} edge="end">
                    {paswordVisible ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setPassword(event.target.value);
            }}
            sx={{ display: "flex", flex: 1, marginBottom: "16px" }}
          />
          <Box sx={{ display: "flex", flex: 1, justifyContent: "space-between", margin: "24px 0 17px 0" }}>
            <Button
              variant="contained"
              endIcon={<LoginIcon />}
              className={classes.customBlueBtn}
              onClick={() => {
                loginActionHandler(username, password);
              }}>
              {loginActionText}
            </Button>
          </Box>
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }} />
      </Box>
    </Card>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  customBlueBtn: {
    display: "flex",
    flex: 1,
    backgroundColor: "#51A1FF",
    color: "#fff",
    padding: "16px",
    boxShadow: "none",
    fontWeight: 700,
    fontSize: "12px",
  },
}));

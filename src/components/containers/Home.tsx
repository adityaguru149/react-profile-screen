import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import LogoutIcon from "@mui/icons-material/Logout";
import { Theme } from "@mui/material/styles";
import makeStyles from "@mui/styles/makeStyles";
import { useNavigate } from "react-router-dom";

export const Home = (): JSX.Element => {
  const classes = useStyles();
  const navigate = useNavigate();

  const shortLoremText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
    " Ultrices nec, leo, nunc tempor, suspendisse eu et.  " +
    "Aliquam tortor et faucibus semper ornare vitae nibh tincidunt. " +
    "Ultricies in arcu eleifend porta fringilla tellus lacus.";
  const longLoremText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices nec, leo, nunc tempor, suspendisse eu et. " +
    "Aliquam tortor et faucibus semper ornare vitae nibh tincidunt." +
    " Ultricies in arcu eleifend porta fringilla tellus lacus." +
    " Aliquam tortor et faucibus semper ornare vitae nibh tincidunt." +
    " Ultricies in arcu eleifend porta fringilla tellus lacus.";

  React.useEffect(() => {
    checkLogin();
  }, []);

  const checkLogin = () => {
    const jwtToken: string | null = localStorage.getItem("jwt");
    // jwtToken not saved so user is not logged
    if (jwtToken == null) {
      navigate("/login");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("jwt");
    navigate("/login");
  };

  return (
    <Box sx={{ minWidth: "1112px", maxWidth: "1112px", padding: "0 64px 0 64px" }}>
      <TopBar logoutActionHandler={handleLogout} />
    </Box>
  );
};

export const TopBar = (props: { logoutActionHandler: () => void }): JSX.Element => {
  const { logoutActionHandler } = props;
  const classes = useStyles();

  // TODO: Manage translations with i18n
  const profilePageTitle = "Profile";
  const logoutBtnText = "LOGOUT";

  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", margin: "20px 0 20px 0" }}>
      <Typography variant="h4" color="text.primary" component="div">
        {profilePageTitle}
      </Typography>
      <Button
        variant="outlined"
        endIcon={<LogoutIcon />}
        className={classes.customLogoutBtn}
        onClick={() => {
          logoutActionHandler();
        }}>
        {logoutBtnText}
      </Button>
    </Box>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  customLogoutBtn: {
    borderColor: "#FF7260",
    color: "#FF7260",
    marginRight: "12px",
    boxShadow: "none",
    fontWeight: 700,
    fontSize: "16px",
    textTransform: "none",
  },
}));

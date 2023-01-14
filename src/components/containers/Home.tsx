import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import LogoutIcon from "@mui/icons-material/Logout";
import { Theme } from "@mui/material/styles";
import makeStyles from "@mui/styles/makeStyles";
import { useNavigate } from "react-router-dom";
import API from "src/api/auth_api";
import { ProfileData } from "src/model/ProfileData";
import { APIResult } from "src/model/APIResult";
import { ProfileCard } from "../shared/ProfileCard";

export const Home = (): JSX.Element => {
  const classes = useStyles();
  const navigate = useNavigate();

  // TODO: Manage translations with i18n
  const noProfileDataMsgText = "Oops something went wrong! No profile data to display.";

  // Local state(s)
  const [profileData, setProfileData] = React.useState<ProfileData | null>(null);

  React.useEffect(() => {
    checkLogin();
  }, []);

  const checkLogin = async () => {
    const jwtToken: string | null = localStorage.getItem("jwt");
    // jwtToken not saved so user is not logged
    if (jwtToken == null) {
      navigate("/login");
    } else {
      const response: APIResult<ProfileData> = await API.getProfileUser(jwtToken);
      if (response.type === "success") {
        setProfileData(response.value);
      } else {
        console.error("Oops something went wrong!");
      }
    }
  };

  const handleLogout = React.useCallback(() => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("profile");
    navigate("/login");
  }, []);

  const handleGoToProfileEdition = React.useCallback(() => {
    navigate("/edit");
  }, []);

  return (
    <Box sx={{ minWidth: "1112px", maxWidth: "1112px", padding: "0 64px 0 64px" }}>
      <TopBar logoutActionHandler={handleLogout} />
      {profileData !== null ? (
        <ProfileCard profile={profileData} goToProfileEditionHandler={handleGoToProfileEdition} />
      ) : (
        <Typography sx={{ marginBottom: "16px" }} variant="body1" color="text.primary" component="div">
          {noProfileDataMsgText}
        </Typography>
      )}
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

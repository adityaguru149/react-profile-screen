import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import API from "src/api/auth_api";
import { ProfileData } from "src/model/ProfileData";
import { APIResult } from "src/model/APIResult";
import { Theme } from "@mui/material/styles";
import makeStyles from "@mui/styles/makeStyles";
import { useNavigate } from "react-router-dom";
import { ProfileEditionCard } from "../shared/ProfileEditionCard";

export const ProfileEditionPage = (): JSX.Element => {
  const classes = useStyles();
  const navigate = useNavigate();

  // TODO: Manage translations with i18n
  const noProfileDataMsgText = "Oops something went wrong! No profile data to display.";
  const returnBtnText = "RETURN TO HOME";

  // Local state(s)
  const [profileData, setProfileData] = React.useState<ProfileData | null>(null);

  React.useEffect(() => {
    getProfileData();
  }, []);

  const getProfileData = async () => {
    const jwtToken: string | null = localStorage.getItem("jwt");
    // jwtToken not saved so user is not logged
    if (jwtToken !== null) {
      const response: APIResult<ProfileData> = await API.getProfileUser(jwtToken);
      if (response.type === "success") {
        setProfileData(response.value);
      } else {
        console.error("Oops something went wrong!");
      }
    }
  };

  const updateProfileData = async (
    name: string,
    address: string,
    type: string,
    phone1: string,
    phone2: string,
    nickName: string,
    email: string
  ) => {
    const jwtToken: string | null = localStorage.getItem("jwt");
    // jwtToken not saved so user is not logged
    if (jwtToken !== null) {
      const response: APIResult<ProfileData> = await API.updateProfileUser(jwtToken, {
        name,
        address,
        type,
        phone1,
        phone2,
        nickName,
        email,
      });
      if (response.type === "success") {
        handleReturnToHome();
      } else {
        console.error("Oops something went wrong!");
      }
    }
  };

  const handleReturnToHome = React.useCallback(() => {
    navigate("/");
  }, []);

  return (
    <Box sx={{ minWidth: "256px", maxWidth: "512px", padding: "64px" }}>
      {profileData !== null ? (
        <ProfileEditionCard
          profile={profileData}
          goToHomeActionHandler={handleReturnToHome}
          updateProfileHandler={updateProfileData}
        />
      ) : (
        <Box sx={{ display: "flex", flex: 1, flexDirection: "column" }}>
          <Typography sx={{ marginBottom: "16px" }} variant="body1" color="text.primary" component="div">
            {noProfileDataMsgText}
          </Typography>
          <Button
            variant="outlined"
            startIcon={<ArrowBackIcon />}
            className={classes.customLogoutBtn}
            onClick={() => {
              handleReturnToHome();
            }}>
            {returnBtnText}
          </Button>
        </Box>
      )}
    </Box>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  customLogoutBtn: {
    borderColor: "#54AC7E",
    color: "#54AC7E",
    marginRight: "12px",
    boxShadow: "none",
    fontWeight: 700,
    fontSize: "16px",
    textTransform: "none",
  },
}));

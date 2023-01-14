import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import PermPhoneMsgOutlinedIcon from "@mui/icons-material/PermPhoneMsgOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import picOne from "src/assets/images/pic1.jpeg";
import { Theme } from "@mui/material/styles";
import makeStyles from "@mui/styles/makeStyles";
import { ProfileData } from "src/model/ProfileData";

interface ProfileCardProps {
  profile: ProfileData;
  goToProfileEditionHandler: () => void;
}

export const ProfileCard = (props: ProfileCardProps): JSX.Element => {
  const { profile, goToProfileEditionHandler } = props;
  const classes = useStyles();

  // TODO: Manage translations with i18n
  const profileCardTitleText = "Overview";
  const profileCardDetailsLinkText = "View contact";

  return (
    <Box sx={{ minWidth: "512px", maxWidth: "512px" }}>
      <Card
        sx={{
          flex: 1,
          boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;",
          display: "flex",
          paddingTop: "16px",
        }}>
        <Box sx={{ display: "flex", flex: 1, flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto", paddingTop: 0 }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", margin: "20px 0 20px 0" }}>
              <Typography variant="h4" color="text.primary" component="div">
                {profileCardTitleText}
              </Typography>
              <Button
                variant="text"
                className={classes.customBlueBtn}
                onClick={() => {
                  goToProfileEditionHandler();
                }}>
                {profileCardDetailsLinkText}
              </Button>
            </Box>
            <Box sx={{ display: "flex", margin: "24px 0" }}>
              <AccountCircleOutlinedIcon />
              <Box sx={{ display: "flex", flex: 1, flexDirection: "column" }}>
                <Typography
                  sx={{ margin: "0 8px", fontWeight: 700 }}
                  variant="body1"
                  color="text.primary"
                  component="div">
                  {profile.name}
                </Typography>
                <Typography sx={{ margin: "0 8px" }} variant="body1" color="text.secondary" component="div">
                  {profile.address}
                </Typography>
                <Typography sx={{ margin: "0 8px" }} variant="body1" color="text.secondary" component="div">
                  {profile.type}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                <Avatar alt={profile.name} src={picOne} sx={{ width: 64, height: 64 }} />
              </Box>
            </Box>
            <Box sx={{ display: "flex", margin: "24px 0" }}>
              <LocalPhoneOutlinedIcon />
              <Typography
                sx={{ margin: "0 8px", fontWeight: 500 }}
                variant="body1"
                color="text.primary"
                component="div">
                {profile.phone1}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", margin: "24px 0" }}>
              <PermPhoneMsgOutlinedIcon />
              <Typography
                sx={{ margin: "0 8px", fontWeight: 500 }}
                variant="body1"
                color="text.primary"
                component="div">
                {profile.phone2}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", margin: "24px 0" }}>
              <BadgeOutlinedIcon />
              <Typography
                sx={{ margin: "0 8px", fontWeight: 500 }}
                variant="body1"
                color="text.primary"
                component="div">
                {profile.nickName}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", margin: "24px 0" }}>
              <EmailOutlinedIcon />
              <Typography
                sx={{ margin: "0 8px", fontWeight: 500 }}
                variant="body1"
                color="text.primary"
                component="div">
                {profile.email}
              </Typography>
            </Box>
          </CardContent>
        </Box>
      </Card>
    </Box>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  customBlueBtn: {
    borderColor: "#51A1FF",
    color: "#51A1FF",
    boxShadow: "none",
    fontWeight: 500,
    fontSize: "16px",
    textTransform: "none",
  },
}));

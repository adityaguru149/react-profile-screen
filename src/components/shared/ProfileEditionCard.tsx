import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import PermPhoneMsgOutlinedIcon from "@mui/icons-material/PermPhoneMsgOutlined";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import CardContent from "@mui/material/CardContent";
import HomeIcon from "@mui/icons-material/Home";
import { Theme } from "@mui/material/styles";
import makeStyles from "@mui/styles/makeStyles";
import { ProfileData } from "src/model/ProfileData";

interface ProfileEditionCardProps {
  profile: ProfileData;
  goToHomeActionHandler: () => void;
  updateProfileHandler: (
    name: string,
    address: string,
    type: string,
    phone1: string,
    phone2: string,
    nickName: string,
    email: string
  ) => void;
}

export const ProfileEditionCard = (props: ProfileEditionCardProps): JSX.Element => {
  const { profile, goToHomeActionHandler, updateProfileHandler } = props;
  const classes = useStyles();

  // TODO: Manage translations with i18n
  const profileCardTitleText = "Edition";
  const cancelActionText = "Cancel";
  const updateActionText = "Update";

  // Local state(s)
  const [name, setName] = React.useState<string>(profile.name);
  const [address, setAddress] = React.useState<string>(profile.address);
  const [type, setType] = React.useState<string>(profile.type);
  const [phone1, setPhone1] = React.useState<string>(profile.phone1);
  const [phone2, setPhone2] = React.useState<string>(profile.phone2);
  const [nickName, setNickName] = React.useState<string>(profile.nickName);
  const [email, setEmail] = React.useState<string>(profile.email);

  return (
    <Box sx={{ minWidth: "256px", maxWidth: "512px" }}>
      <Card
        sx={{
          flex: 1,
          boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;",
          display: "flex",
          paddingTop: "16px",
        }}>
        <Box sx={{ display: "flex", flex: 1, flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto", paddingTop: 0 }}>
            <Box sx={{ display: "flex", margin: "20px 0 20px 0" }}>
              <Typography variant="h4" color="text.primary" component="div">
                {profileCardTitleText}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", margin: "16px 0" }}>
              <Typography
                sx={{ marginBottom: "8px", fontWeight: 500 }}
                variant="body1"
                color="text.primary"
                component="div">
                Name
              </Typography>
              <TextField
                id="input-username"
                variant="outlined"
                value={name}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircleOutlinedIcon />
                    </InputAdornment>
                  ),
                }}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setName(event.target.value);
                }}
                sx={{ display: "flex", flex: 1, marginBottom: "16px" }}
              />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", margin: "16px 0" }}>
              <Typography
                sx={{ marginBottom: "8px", fontWeight: 500 }}
                variant="body1"
                color="text.primary"
                component="div">
                Address
              </Typography>
              <TextField
                id="input-username"
                variant="outlined"
                value={address}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <HomeIcon />
                    </InputAdornment>
                  ),
                }}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setAddress(event.target.value);
                }}
                sx={{ display: "flex", flex: 1, marginBottom: "16px" }}
              />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", margin: "16px 0" }}>
              <Typography
                sx={{ marginBottom: "8px", fontWeight: 500 }}
                variant="body1"
                color="text.primary"
                component="div">
                Type
              </Typography>
              <TextField
                id="input-username"
                variant="outlined"
                value={type}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AdminPanelSettingsIcon />
                    </InputAdornment>
                  ),
                }}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setType(event.target.value);
                }}
                sx={{ display: "flex", flex: 1, marginBottom: "16px" }}
              />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", margin: "16px 0" }}>
              <Typography
                sx={{ marginBottom: "8px", fontWeight: 500 }}
                variant="body1"
                color="text.primary"
                component="div">
                Phone
              </Typography>
              <TextField
                id="input-username"
                variant="outlined"
                value={phone1}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LocalPhoneOutlinedIcon />
                    </InputAdornment>
                  ),
                }}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setPhone1(event.target.value);
                }}
                sx={{ display: "flex", flex: 1, marginBottom: "16px" }}
              />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", margin: "16px 0" }}>
              <Typography
                sx={{ marginBottom: "8px", fontWeight: 500 }}
                variant="body1"
                color="text.primary"
                component="div">
                Phone (2)
              </Typography>
              <TextField
                id="input-username"
                variant="outlined"
                value={phone2}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PermPhoneMsgOutlinedIcon />
                    </InputAdornment>
                  ),
                }}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setPhone2(event.target.value);
                }}
                sx={{ display: "flex", flex: 1, marginBottom: "16px" }}
              />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", margin: "16px 0" }}>
              <Typography
                sx={{ marginBottom: "8px", fontWeight: 500 }}
                variant="body1"
                color="text.primary"
                component="div">
                Nickname
              </Typography>
              <TextField
                id="input-username"
                variant="outlined"
                value={nickName}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <BadgeOutlinedIcon />
                    </InputAdornment>
                  ),
                }}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setNickName(event.target.value);
                }}
                sx={{ display: "flex", flex: 1, marginBottom: "16px" }}
              />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", margin: "16px 0" }}>
              <Typography
                sx={{ marginBottom: "8px", fontWeight: 500 }}
                variant="body1"
                color="text.primary"
                component="div">
                Email
              </Typography>
              <TextField
                id="input-username"
                variant="outlined"
                value={email}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailOutlinedIcon />
                    </InputAdornment>
                  ),
                }}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setEmail(event.target.value);
                }}
                sx={{ display: "flex", flex: 1, marginBottom: "16px" }}
              />
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between", margin: "20px 0 20px 0" }}>
              <Button
                variant="text"
                className={classes.customCancelBtn}
                onClick={() => {
                  goToHomeActionHandler();
                }}>
                {cancelActionText}
              </Button>
              <Button
                variant="contained"
                className={classes.customUpdateBtn}
                onClick={() => {
                  updateProfileHandler(name, address, type, phone1, phone2, nickName, email);
                }}>
                {updateActionText}
              </Button>
            </Box>
          </CardContent>
        </Box>
      </Card>
    </Box>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  customCancelBtn: {
    color: "#7e8796",
    boxShadow: "none",
    fontWeight: 500,
    fontSize: "16px",
    textTransform: "none",
  },
  customUpdateBtn: {
    backgroundColor: "#51A1FF",
    color: "#FFF",
    boxShadow: "none",
    fontWeight: 500,
    fontSize: "16px",
    textTransform: "none",
  },
}));

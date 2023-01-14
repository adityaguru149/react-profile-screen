import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Calendar from "react-calendar";
import { Theme } from "@mui/material/styles";
import makeStyles from "@mui/styles/makeStyles";

interface CustomCalendarProps {
  onDateChangeHandler: (date: Date) => void;
}

export const CustomCalendar = (props: CustomCalendarProps): JSX.Element => {
  const { onDateChangeHandler } = props;
  const classes = useStyles();

  // TODO: Manage translations with i18n
  const calendarTitleText = "Schedule response";
  const calendarDateText = "Date";
  const cancelActionText = "Cancel";
  const updateActionText = "Schedule";

  // Local state(s)
  const [date, setDate] = React.useState(new Date());

  return (
    <Box sx={{ display: "flex", flex: 1 }}>
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
                {calendarTitleText}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", margin: "20px 0 20px 0" }}>
              <Typography variant="body1" color="text.secondary" component="div">
                {calendarDateText}
              </Typography>
              <Typography
                sx={{ backgroundColor: "#f6f7fb", marginLeft: "8px", padding: "8px" }}
                variant="body1"
                color="text.primary"
                component="div">
                {new Intl.DateTimeFormat("fr-FR").format(date)}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between", margin: "20px 0 20px 0" }}>
              <Calendar onChange={setDate} value={date} />
            </Box>
            <Box sx={{ display: "flex", margin: "20px 0 20px 0" }}>
              <Button
                variant="contained"
                className={classes.customUpdateBtn}
                onClick={() => {
                  onDateChangeHandler(date);
                }}>
                {updateActionText}
              </Button>
              <Button
                variant="contained"
                className={classes.customCancelBtn}
                onClick={() => {
                  console.log("Not implemented yet.");
                }}>
                {cancelActionText}
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
    backgroundColor: "#FFF",
    color: "#222832",
    width: "93px",
    fontWeight: 500,
    fontSize: "14px",
    textTransform: "none",
    marginLeft: "16px",
    border: "solid #a0a096 1px",
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;",
    padding: "8px",
  },
  customUpdateBtn: {
    backgroundColor: "#3182ff",
    color: "#FFF",
    width: "93px",
    boxShadow: "none",
    fontWeight: 500,
    fontSize: "14px",
    textTransform: "none",
    padding: "8px",
  },
}));

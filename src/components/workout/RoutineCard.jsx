import {
  Avatar,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@material-ui/core";
import { FitnessCenter } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core";
import WorkoutPopup from "../workout/WorkoutPopup";
import { useState } from "react";
import UserUpdateInfo from "../profile/UserUpdateInfo";
import WorkoutContainer from "../../containers/workout/WorkoutContainer";

export const RoutineCard = (props) => {
  const [openPopup, setPopup] = useState(false);
  const { prop } = props;
  const useStyles = makeStyles((theme) => ({
    card: {
      display: "flex",
      backgroundColor: "#201e2a",
    },
    cardDetails: {
      flex: 1,
    },
    cardMedia: {
      width: 160,
    },
    avatar: {
      // fill: '#FFB020',
      backgroundColor: "#FFB020",
    },
    submit: {
      margin: theme.spacing(1, 0, 1),
      backgroundColor: "#0CF4E2",
      color: "#201A30",
      borderRadius: 10,
    },
  }));
  const classes = useStyles();
  return (
    <>
      <Card className={classes.card} sx={{ height: "100%" }} {...props}>
        <CardContent className={classes.cardDetails}>
          <Grid container spacing={3} justifyContent="space-between">
            <Grid item>
              <Typography color="textSecondary" gutterBottom variant="overline">
                {prop.title} (sets/repetitions)
              </Typography>
              <Typography color="textPrimary" variant="h4">
                {prop.setrep}
              </Typography>
            </Grid>
            <Grid item>
              <Avatar className={classes.avatar}>
                <FitnessCenter />
              </Avatar>
            </Grid>
          </Grid>
          <Grid item>
            <Button
              color="primary"
              variant="contained"
              className={classes.submit}
              onClick={() => setPopup(true)}
            >
              Start
            </Button>
          </Grid>
        </CardContent>
      </Card>
      <WorkoutPopup openPopup={openPopup} setPopup={setPopup}>
        <WorkoutContainer title={prop.title} exercise={prop.model} />
        {/* <UserUpdateInfo /> */}
      </WorkoutPopup>
    </>
  );
};

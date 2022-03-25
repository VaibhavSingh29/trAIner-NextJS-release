import * as React from "react";
import {
  Container,
  Divider,
  Grid,
  Typography,
  Box,
  Avatar,
  Button,
} from "@material-ui/core";
import { BugReport } from "@material-ui/icons";
import { profileHeaders } from "../../../data/updateProfile";
import { ProfileDashBoard } from "./ProfileDashBoard";
import { makeStyles, useTheme } from "@material-ui/styles";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import Popup from "../Popup";
import { useState } from "react";
import WorkoutPopup from "../workout/WorkoutPopup";
import UserUpdateInfo from "../profile/UserUpdateInfo";
import { RiPencilFill } from "react-icons/ri";

const ViewProfile = () => {
  const userName = useSelector((state) => state.profile.userName);
  const userAge = useSelector((state) => state.profile.userAge);
  const userGender = useSelector((state) => state.profile.userGender);
  const router = useRouter();
  const theme = useTheme();
  const [openPopup, setPopup] = useState(false);
  const useStyles = makeStyles({
    divider: {
      backgroundColor: "#FFFFFF",
      p: 3,
    },
    avatar: {
      height: 70,
      width: 70,
      // marginBottom: 5,
      marginRight: theme.spacing(2),
      marginBottom: theme.spacing(1),
    },
    age: {
      marginLeft: theme.spacing(1),
    },
    submit: {
      backgroundColor: "#24c564",
      color: "#201A30",
      borderRadius: 5,
      minWidth: 0,
    },
  });
  const classes = useStyles();
  return (
    <>
      <Container>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="flex-start"
            alignItems="center"
          >
            <Avatar
              src="/fullbody.png"
              className={classes.avatar}
              variant="rounded"
            >
              VS
            </Avatar>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="flex-start"
            >
              <Typography variant="h4" color="inherit" margin="auto">
                {userName}
              </Typography>
              <Typography variant="subtitle" className={classes.age}>
                {userGender} {userAge}
              </Typography>
            </Box>
          </Box>
          <Box>
            <Button className={classes.submit} onClick={() => setPopup(true)}>
              <RiPencilFill size={20} />
            </Button>
          </Box>
        </Box>
        <Divider className={classes.divider} />
        <Box height={10} />
      </Container>

      <Container maxWidth="lg">
        <Grid container spacing={3}>
          {profileHeaders.map((profileHeader) => (
            <Grid item lg={4} sm={6} xl={3} xs={12}>
              <ProfileDashBoard
                key={profileHeader.title}
                prop={profileHeader}
              />
            </Grid>
          ))}
          <Grid item lg={8} md={12} xl={9} xs={12}></Grid>
          <Grid item lg={4} md={6} xl={3} xs={12}></Grid>
          <Grid item lg={4} md={6} xl={3} xs={12}></Grid>
          <Grid item lg={8} md={12} xl={9} xs={12}></Grid>
        </Grid>
      </Container>
      <Popup
        openPopup={openPopup}
        setPopup={setPopup}
        title="Add or Update Personal Information"
      >
        <UserUpdateInfo setPopup={setPopup} />
      </Popup>
    </>
  );
};

export default ViewProfile;

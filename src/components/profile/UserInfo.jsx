import {
  Avatar,
  Button,
  Box,
  Divider,
  CardActions,
  CardContent,
  Card,
  Typography,
} from "@material-ui/core";
import { useRouter } from "next/router";
import { makeStyles } from "@material-ui/styles";
import { useTheme } from "@material-ui/styles";

const UserInfo = () => {
  const theme = useTheme();
  const useStyles = makeStyles({
    card: {
      //   display: 'flex',
      backgroundColor: "#201A30",
    },
    cardDetails: {
      flex: 1,
    },
    cardMedia: {
      width: 160,
    },
    avatar: {
      height: 170,
      width: 170,
    },
    submit: {
      // margin: theme.spacing(3, 0, 2),
      backgroundColor: "#0CF4E2",
      color: "#201A30",
      borderRadius: 10,
      // width: 200
    },
  });
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent>
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Avatar className={classes.avatar} variant="rounded" />
          <Typography color="textPrimary" gutterBottom variant="h5">
            Vaibhav Singh
          </Typography>
          <Typography color="textPrimary" variant="body2">
            Male, 21
          </Typography>
          <Typography color="textSecondary" variant="body2"></Typography>
        </Box>
      </CardContent>
      <Divider />
      <CardActions>
        <Button
          className={classes.submit}
          color="primary"
          variant="contained"
          type="submit"
          fullWidth
        >
          Upload Picture
        </Button>
      </CardActions>
    </Card>
  );
};

export default UserInfo;

import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { GrClose } from "react-icons/gr";

const useStyles = makeStyles((theme) => ({
  dialog: {
    padding: theme.spacing(2),
    position: "absolute",
    backgroundColor: "#201e2a",
    width: "100%",
    height: "100%",
  },
  button: {
    backgroundColor: "#ee4b57",
    color: "#ffffff",
    minWidth: 0,
    margin: theme.spacing(0.5),
  },
}));

const WorkoutPopup = (props) => {
  const classes = useStyles();
  const { title, children, openPopup, setPopup } = props;
  return (
    <Dialog open={openPopup} maxWidth="lg" classes={{ paper: classes.dialog }}>
      <DialogTitle>
        <div style={{ display: "flex" }}>
          <Button className={classes.button} onClick={() => setPopup(false)}>
            <GrClose size={20} />
          </Button>
        </div>
      </DialogTitle>
      <DialogContent dividers>{children}</DialogContent>
    </Dialog>
  );
};

export default WorkoutPopup;

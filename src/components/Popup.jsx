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
    top: theme.spacing(5),
    backgroundColor: "#201e2a",
  },
  button: {
    backgroundColor: "#ee4b57",
    color: "#ffffff",
    minWidth: 0,
    margin: theme.spacing(0.5),
  },
}));

const Popup = (props) => {
  const classes = useStyles();
  const { title, children, openPopup, setPopup } = props;
  return (
    <Dialog open={openPopup} maxWidth="md" classes={{ paper: classes.dialog }}>
      <DialogTitle>
        <div style={{ display: "flex" }}>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            {title}
          </Typography>
          <Button className={classes.button} onClick={() => setPopup(false)}>
            <GrClose size={20} />
          </Button>
        </div>
      </DialogTitle>
      <DialogContent dividers>{children}</DialogContent>
    </Dialog>
  );
};

export default Popup;

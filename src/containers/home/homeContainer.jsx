import MainLayout from "../../layout/MainLayout";
import { Container, Grid, Typography } from "@material-ui/core";
import CuratedContainer from "../home/CuratedContainer";
import RecommendedContainer from "../home/RecommendedContainer";
import { recommendations } from "../../../data/recommendedSection";
import { Snackbar, MuiAlert } from "@material-ui/core";
import { useSelector } from "react-redux";
import * as React from "react";

const Home = () => {
  const isLoggedIn = useSelector((state) => state.auth.isAuthenticated);
  const [open, setOpen] = React.useState(isLoggedIn);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  return (
    <Container maxWidth="lg">
      <CuratedContainer />
      <Typography variant="subtitle2" color="textSecondary" className="p-2">
        Other Recommendation(s)
      </Typography>
      <Grid container spacing={4} className="p-2">
        {recommendations.map((recommendation) => (
          <RecommendedContainer
            key={recommendation.title}
            prop={recommendation}
          />
        ))}
      </Grid>
      {/* <Snackbar
        open={open}
        autoHideDuration={2000}
        message="Logged in successfully"
        onClose={handleClose}
      >
        {/* <Alert severity="success">Logged in successfully</Alert> */}
      {/* </Snackbar> */}
    </Container>
  );
};

export default Home;

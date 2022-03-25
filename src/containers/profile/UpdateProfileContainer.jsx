import { Typography, Container, Grid } from "@material-ui/core";
import UserInfo from "../../components/profile/UserInfo";
import { UserUpdateInfo } from "../../components/profile/UserUpdateInfo";

const UpdateProfileContainer = () => {
  return (
    <Container maxWidth="lg">
      <Typography mb={3} variant="h4">
        Account
      </Typography>
      <Grid container spacing={3}>
        <Grid item lg={4} md={6} xs={12}>
          <UserInfo />
        </Grid>
        <Grid item lg={8} md={6} xs={12}>
          <UserUpdateInfo />
        </Grid>
      </Grid>
    </Container>
  );
};
export default UpdateProfileContainer;

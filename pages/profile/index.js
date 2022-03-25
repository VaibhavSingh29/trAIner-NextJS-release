import CustomizedSnackbars from "../../src/components/Snackbar";
import ProfileContainer from "../../src/containers/profile/ProfileContainer";
import MainLayout from "../../src/layout/MainLayout";

const Profile = () => {
  return (
    <>
      {/* <CustomizedSnackbars /> */}
      <MainLayout>
        <ProfileContainer />
      </MainLayout>
    </>
  );
};

export default Profile;

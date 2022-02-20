import MainLayout from "../../src/layout/MainLayout";
import RegisterContainer from '../../src/containers/auth/RegisterContainer'

const Register = () =>{
    return (
        <MainLayout title="Register">
            <RegisterContainer/>
        </MainLayout>
    );
}

export default Register;
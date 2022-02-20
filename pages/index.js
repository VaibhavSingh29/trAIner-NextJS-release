import { useSelector } from "react-redux";
import Home from "../src/containers/home/homeContainer";
import MainLayout from "../src/layout/MainLayout";
import GetStarted from "../src/containers/getstarted/GetStartedContainer";



const Index = () =>{
  const isLoggedIn = useSelector((state)=>state.auth.isAuthenticated);

  return (
    <MainLayout>
        {isLoggedIn && <Home/>}
        {!isLoggedIn && <GetStarted/>}
    </MainLayout>
  );
}

export default Index;
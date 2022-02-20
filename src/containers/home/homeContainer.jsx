import MainLayout from "../../layout/MainLayout";
import { Container, Grid, Typography } from "@material-ui/core";
import CuratedContainer from "../home/CuratedContainer"
import RecommendedContainer from "../home/RecommendedContainer";
import { recommendations } from "../../../data/recommendedSection";

const Home = ()=>{
    return(
            <Container maxWidth = 'lg'>
                <CuratedContainer/>
                <Typography variant='subtitle2' color='textSecondary' className='p-2'>Other Recommendation(s)</Typography>
                <Grid container spacing={4} className='p-2'>
                {recommendations.map((recommendation) => (
              <RecommendedContainer key={recommendation.title} prop={recommendation} />
            ))}
                </Grid>
            </Container>
    );
}

export default Home;
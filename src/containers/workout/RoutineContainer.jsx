import { Container, Grid, Button, Box, Typography } from "@material-ui/core"
import { exercises } from "../../../data/workoutSection";
import { RoutineCard } from "../../components/workout/RoutineCard";
import Link from 'next/link';
import {AiFillPlayCircle} from 'react-icons/ai'
import { IconContext } from "react-icons";

const RoutineContainer = () => {
    return(
        <Container maxWidth='lg'>
            <Typography variant="h2">Routine</Typography>
            <Grid container spacing = {2}>
                {exercises.map((exercise) => (
                    <Grid item 
                        lg = {4}
                        sm = {6}
                        xl = {3}
                        xs = {12}>
                            <RoutineCard key = {exercise.title} prop = {exercise}/>
                        </Grid>))}
                
            </Grid>
            <Box margin={5} display='inline-flex' alignItems='center'>
            {/* <Link href='/workout'><a className='text-muted'><IconContext.Provider
      value={{ color: 'green'}}>
        <AiFillPlayCircle size = {50}/></IconContext.Provider></a></Link>
         */}
        </Box>
        </Container>
    )
}

export default RoutineContainer;
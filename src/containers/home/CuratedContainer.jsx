import { Container, makeStyles } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import Link from 'next/link';
import {AiFillPlayCircle} from 'react-icons/ai'
import { IconContext } from "react-icons";
import { useSelector } from "react-redux";

const CuratedContainer = ()=>{
  const userName = useSelector((state)=>state.profile.userName);

  const token = useSelector((state)=>state.auth.accessToken);
  console.log(token);
    const useStyles = makeStyles((theme) => ({
        mainFeaturedPost: {
          position: 'relative',
          backgroundColor: theme.palette.grey[800],
          color: theme.palette.common.white,
          marginBottom: theme.spacing(4),
          backgroundImage: 'url(/personalizedworkout.jpg)',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        },
        overlay: {
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: 'rgba(0,0,0,.3)',
        },
        mainFeaturedPostContent: {
          position: 'relative',
          padding: theme.spacing(3),
          [theme.breakpoints.up('md')]: {
            padding: theme.spacing(6),
            paddingRight: 0,
          },
        },
    }));

    const classes = useStyles();
    return(
    <Paper className={classes.mainFeaturedPost}>
      <div className={classes.overlay} />
      <Grid container>
        <Grid item md={6}>
          <div className={classes.mainFeaturedPostContent}>
            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
              Hi, {userName}
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
            Continue your personalized training program.
            </Typography>
            <Link href='/workout/routine'><a className='text-muted'><IconContext.Provider
      value={{ color: 'green'}}>
        <AiFillPlayCircle size = {50}/></IconContext.Provider></a></Link>
          </div>
        </Grid>
      </Grid>
    </Paper>
    );
}

export default CuratedContainer;
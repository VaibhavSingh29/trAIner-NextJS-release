import { Avatar, Button, Card, CardContent, Grid, Typography } from '@material-ui/core';
import { FitnessCenter} from '@material-ui/icons';
import { makeStyles } from '@material-ui/core';
import { useRouter } from 'next/router'

export const RoutineCard = (props) => {
  const router = useRouter();
  const {prop} = props;
  const useStyles = makeStyles((theme)=> ({
    card: {
      display: 'flex',
      backgroundColor: '#6b6876'
      
    },
    cardDetails: {
      flex: 1,
    },
    cardMedia: {
      width: 160,
    },
    avatar: {
      // fill: '#FFB020',
      backgroundColor: '#FFB020',
    },
    submit: {
      margin: theme.spacing(1, 0, 1),
      backgroundColor: '#0CF4E2',
      color: '#201A30',
      borderRadius: 10,
    },
    
  }));
  const classes = useStyles();
  return(
  <Card
    className={classes.card}
    sx={{ height: '100%' }}
    {...props}
  >
    <CardContent className={classes.cardDetails}>
      
      <Grid
        container
        spacing={3}
        justifyContent= 'space-between'
      >
        <Grid item>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="overline"
          >{prop.title} (sets/repetitions)
          </Typography>
            <Typography
            color="textPrimary"
            variant="h4"
          >
            {prop.setrep}
            </Typography>
          
        </Grid>
        <Grid item >
          <Avatar className={classes.avatar}>
            <FitnessCenter/>
          </Avatar>
        </Grid>
      </Grid>
      <Grid item>
      <Button color="primary" variant="contained" className={classes.submit} onClick={()=>{router.push('/workout')}}>
          Start
        </Button>
      </Grid>
    </CardContent>
  </Card>
)};

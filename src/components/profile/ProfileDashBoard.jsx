import { Avatar, Box, Card, CardContent, Grid, Icon, Typography } from '@material-ui/core';
import { CancelScheduleSendSharp, FitnessCenter, Height, LinearScale } from '@material-ui/icons';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import MoneyIcon from '@material-ui/icons/Money';
import { makeStyles } from '@material-ui/core';
import { BiHealth, FaWeight } from 'react-icons/fa';
import { useSelector } from 'react-redux';

export const ProfileDashBoard = (props) => {
  const userHeight = useSelector((state)=>state.profile.userHeight);
  const userWeight = useSelector((state)=>state.profile.userWeight);
  const userBMI = useSelector((state)=>state.profile.userBMI);
  const {prop} = props;
  const useStyles = makeStyles({
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
    }
    
  });
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
          >{prop.title}
          </Typography>
          {(() => {
        if (prop.title === 'Height') {
          return (
            <Typography
            color="textPrimary"
            variant="h3"
          >
            {userHeight} m
            </Typography>
          )
        } else if (prop.title === 'Weight') {
          return (
            
            <Typography
            color="textPrimary"
            variant="h3"
          >
            {userWeight} kg
            </Typography>
          )
        } else {
          return (
            <Typography
            color="textPrimary"
            variant="h3"
          >
            {userBMI}
            </Typography>
          )
        }
      })()}
          
        </Grid>
        <Grid item >
          <Avatar className={classes.avatar}>
          {(() => {
        if (prop.title === 'Height') {
          return (
            <Height className={classes.avatar}/>
          )
        } else if (prop.title === 'Weight') {
          return (
            
            <FaWeight className={classes.avatar}/>
          )
        } else {
          return (
            <FitnessCenter className={classes.avatar}/>
          )
        }
      })()}
          </Avatar>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
)};

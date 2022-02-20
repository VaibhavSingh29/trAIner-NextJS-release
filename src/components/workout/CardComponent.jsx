import { Avatar, Box, Card, CardContent, Grid, Icon, Typography } from '@material-ui/core';
import { CancelScheduleSendSharp, FitnessCenter, Height, LinearScale } from '@material-ui/icons';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import MoneyIcon from '@material-ui/icons/Money';
import { makeStyles } from '@material-ui/core';
import { BiHealth, FaWeight } from 'react-icons/fa';
import {FiRepeat} from 'react-icons/fi'
import {AiOutlineNumber} from 'react-icons/ai'
import { useSelector } from 'react-redux';

export const CardComponent = (props) => {
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
            <Typography
            color="textPrimary"
            variant="h4"
          >
            1/3
            </Typography>
          
        </Grid>
        <Grid item >
          <Avatar className={classes.avatar}>
          {(() => {
        if (prop.title === 'Sets') {
          return (
            <AiOutlineNumber className={classes.avatar}/>
          )
        } else if (prop.title === 'Repetitions') {
          return (
            
            <FiRepeat className={classes.avatar}/>
          )
        }
        })()}
          </Avatar>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
)};

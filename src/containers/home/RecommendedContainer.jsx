import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { CardActionArea } from '@material-ui/core';
import { Hidden } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';

const RecommendedContainer = (props)=> {
  

  const useStyles = makeStyles({
    card: {
      display: 'flex',
      minHeight:170,
    },
    cardDetails: {
      flex: 1,
    },
    cardMedia: {
      width: 160,
    },
    typo: {
      color: 'text.grey'
    }
  });

  const {prop} = props;
  const classes = useStyles();
  return (
    <Grid item xs={12} md={6}>
    <CardActionArea component="a" href="#">
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component="h2" variant="h5" className={classes.typo}>
                {prop.title}
              </Typography>
              <Typography variant="subtitle1" paragraph color='primary.contrastText'>
                {prop.description}
              </Typography>
            </CardContent>
          </div>
          <Hidden xsDown>
            <CardMedia className={classes.cardMedia} image={prop.image} title="hello" />
          </Hidden>
        </Card>
      </CardActionArea></Grid>
  );
}

export default RecommendedContainer;
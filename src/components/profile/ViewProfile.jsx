import * as React from 'react';
import { Container, Divider, Grid, Typography, Box, Avatar, Button } from "@material-ui/core";
import { BugReport } from "@material-ui/icons";
import { profileHeaders } from "../../../data/updateProfile";
import { ProfileDashBoard } from "./ProfileDashBoard";
import { makeStyles,useTheme } from '@material-ui/styles';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux'

const ViewProfile = () => {
  const userName = useSelector((state)=>state.profile.userName);
  const userAge = useSelector((state)=>state.profile.userAge);
  const userGender = useSelector((state)=>state.profile.userGender)
  const router = useRouter();
  const theme = useTheme();
  const useStyles = makeStyles({
    divider: {
      backgroundColor: '#FFFFFF',
      p: 3,
    },
    avatar: {
      height:70,
      width:70,
      // marginBottom: 5,
      marginRight: theme.spacing(2),
      marginBottom: theme.spacing(1),
      
    },
    age: {
      marginLeft: theme.spacing(1)
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
      backgroundColor: '#0CF4E2',
      color: '#201A30',
      borderRadius: 20,
      width: 100
    },
  });
  const classes = useStyles();
	return(
		<>
    <Container>
    <Box display= 'flex' flexDirection='row' justifyContent='space-between' alignItems='center'>
      <Box display= 'flex' flexDirection='row' justifyContent='flex-start' alignItems='center'>
      <Avatar src="/fullbody.png" className={classes.avatar} variant='rounded'>VS</Avatar>
      <Box display= 'flex' flexDirection='column' justifyContent='flex-start'>
      <Typography variant="h4" color="inherit" margin='auto'>
                {userName}
      </Typography>
      <Typography variant="subtitle" className={classes.age}>{userGender} {userAge}</Typography>
      </Box></Box>
      <Box>
      <Button color="primary" variant="contained" fullWidth type="submit" className={classes.submit} 
      onClick={() => {router.push('/profile/update') }}>
          Update
        </Button></Box></Box>
      <Divider className={classes.divider}/>
      <Box height={10}/>
    </Container>
			
		<Container maxWidth = 'lg'>	
        <Grid
          container
          spacing={3}
        >
			{profileHeaders.map((profileHeader) => (
              <Grid
			  item
			  lg={4}
			  sm={6}
			  xl={3}
			  xs={12}
			>
			  <ProfileDashBoard key={profileHeader.title} prop={profileHeader} />
			</Grid>
            ))}
          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
           
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
         
          </Grid>
          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
    
          </Grid>
        </Grid>

      </Container></>
	)
}

export default ViewProfile;
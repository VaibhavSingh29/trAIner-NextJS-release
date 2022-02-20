import { Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography} from "@material-ui/core";
import { VscFeedback } from 'react-icons/vsc'
import {ImSortNumbericDesc} from 'react-icons/im'
import {RiGuideLine} from 'react-icons/ri'
import Image from 'next/image';
import Link from 'next/link'
import { Button } from '@material-ui/core';
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme)=> ({
    button: {
        // backgroundColor: '#0CF4E2',
        // color: '#201A30',
        color: '#0CF4E2',
        borderRadius: 50,
        padding: 10,
        minWidth: 150,
        // height: 30
    }
}));

const GetStarted = () => {
    const classes = useStyles();
    return (
        <Container maxWidth='lg'>
            <Grid container spacing={0} direction='row'>
                <Grid item xs={12} sm={6} p={5}>
                    <Typography variant="h2" gutterBottom>
                    Personalized routines designed for you.
                    </Typography>
                    <List>
                        <ListItem>
                            <ListItemIcon>
                                <VscFeedback size={30}/>
                            </ListItemIcon>
                            <ListItemText>
                                <Typography variant='subtitle2' color='textSecondary'>Instant form feedback </Typography>
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                        <ListItemIcon>
                                <ImSortNumbericDesc size={30}/>
                            </ListItemIcon>
                            <ListItemText>
                                <Typography variant='subtitle2' color='textSecondary'>Rep counting</Typography>
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                        <ListItemIcon>
                                <RiGuideLine size={30}/>
                            </ListItemIcon>
                            <ListItemText>
                                <Typography variant='subtitle2' color='textSecondary'>Guidance with every workout</Typography>
                            </ListItemText>
                        </ListItem>
                    </List>
                    <Grid item justifyContent='center' alignItems='center'>
                    <Link href='/login'><Button variant='outlined' className={classes.button}>Get Started</Button></Link>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Image src={'/getstarted.png'} width={840} height={840}></Image>
                </Grid>
            </Grid>
        </Container>
    );
}

export default GetStarted;
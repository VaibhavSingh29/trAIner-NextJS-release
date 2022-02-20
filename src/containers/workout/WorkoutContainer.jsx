import { Container, Divider, Grid, Typography } from "@material-ui/core";
import React from "react";
import Webcam from "react-webcam";
import { useRef } from "react";
import { makeStyles } from "@material-ui/core";
import { CardComponent } from "../../components/workout/CardComponent";
import { counting } from "../../../data/workoutSection";
import { Pose } from '@mediapipe/pose'
import * as cam from '@mediapipe/camera_utils'
import {useEffect, useState} from 'react'
import * as tf from '@tensorflow/tfjs';
import { Avatar, Card, CardContent} from '@material-ui/core';
import {FiRepeat} from 'react-icons/fi';
import { useRouter } from 'next/router';

const WorkoutContainer = () => {
  // const router = withRouter();
  const router = useRouter();

  const canvasRef = useRef(null);
  const drawingUtils = window;
  const mpPose = window;
  var synthesis = window.speechSynthesis;
  var speech = null;
  let prob = null;
  let model = null;
  var up_count = 0;
  var down_count = 0;
  var flag = 0;
  // const connect = window.drawConnectors;
  var camera = null;
  const [message, setMessage] = React.useState('loading...')
  const [count, setCount] = React.useState('0')
  
  async function loadModel() {
    // const pred = 0;
    try {
      
    // const model = await tf.loadLayersModel(handler);

    model = await tf.loadLayersModel(`http://20.204.171.206:8080/bicep_curl/model.json`);
    // console.log('model loaded successfully');
    // console.log(arr)
    // tf.tensor2d([arr]).print();
    return model;
    
  } 
    catch (err) {
    console.log(err);
    }
    // console.log(pred);
  }

  function predict(arr) {
    const pred =  model.predict(tf.tensor2d([arr]));
   const val = pred.dataSync()[0]
    // console.log(val)
    return val;
  }

  function onResults(results) { 
    if (results.poseWorldLandmarks) {         //handling of out of frame
          //Setting h,w of canvas
      canvasRef.current.width = webcamRef.current.video.videoWidth;
      canvasRef.current.height = webcamRef.current.video.videoHeight;

      const canvasElement = canvasRef.current;
      const canvasCtx = canvasElement.getContext('2d');
      canvasCtx.save();


      canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
      canvasCtx.drawImage(results.image, 0, 0, canvasElement.width, canvasElement.height);

      const arr = []
      
      
      // console.log(results.poseLandmarks);
      for (var i = 0, len = results.poseLandmarks.length; i < len; ++i) {
        arr.push(JSON.parse(results.poseLandmarks[i].x));
        arr.push(JSON.parse(results.poseLandmarks[i].y));
        arr.push(JSON.parse(results.poseLandmarks[i].z));
        arr.push(JSON.parse(results.poseLandmarks[i].visibility));
      }
    //   console.log(arr);
      const new_val = predict(arr);

      let promise = Promise.resolve(new_val);
      promise.then(function(val) {
        prob = val;});
      
      console.log(prob);
      
      if (prob>0.95 && flag == 0){
        flag = 1
        up_count+=1
        // speech = new SpeechSynthesisUtterance("Bicep Up");
        // synthesis.speak(speech);
  
        setMessage('Up');
        setCount(down_count);
        if(down_count === 15) {
          // router.push('/workout/routine');
          // camera.pause();
          // webcamRef = null;
          // canvasRef = null;
        }
        
        // 'up'
        console.log('up');

      }

      else if (prob<0.002 && flag == 1) {
        flag = 0
        down_count+=1
        // speech = new SpeechSynthesisUtterance("Bicep Down");
        // synthesis.speak(speech);
        setMessage('Down');
        
        // txt = 'down'
        
        console.log('down');

      }

      if (prob>0.95) {
        
        drawingUtils.drawConnectors(canvasCtx, results.poseLandmarks, mpPose.POSE_CONNECTIONS, { visibilityMin: 0.65, color: 'rgb(10,255,0)' });
      drawingUtils.drawLandmarks(canvasCtx, Object.values(mpPose.POSE_LANDMARKS_LEFT)
          .map(index => results.poseLandmarks[index]), { visibilityMin: 0.65, color: 'white', fillColor: 'rgb(255,138,0)' });
      drawingUtils.drawLandmarks(canvasCtx, Object.values(mpPose.POSE_LANDMARKS_RIGHT)
          .map(index => results.poseLandmarks[index]), { visibilityMin: 0.65, color: 'white', fillColor: 'rgb(0,217,231)' });
      drawingUtils.drawLandmarks(canvasCtx, Object.values(mpPose.POSE_LANDMARKS_NEUTRAL)
          .map(index => results.poseLandmarks[index]), { visibilityMin: 0.65, color: 'white', fillColor: 'white' });
      canvasCtx.restore();
      }
      else if (prob<0.002){
        
        drawingUtils.drawConnectors(canvasCtx, results.poseLandmarks, mpPose.POSE_CONNECTIONS, { visibilityMin: 0.65, color: 'rgb(10,255,0)' });
      drawingUtils.drawLandmarks(canvasCtx, Object.values(mpPose.POSE_LANDMARKS_LEFT)
          .map(index => results.poseLandmarks[index]), { visibilityMin: 0.65, color: 'white', fillColor: 'rgb(255,138,0)' });
      drawingUtils.drawLandmarks(canvasCtx, Object.values(mpPose.POSE_LANDMARKS_RIGHT)
          .map(index => results.poseLandmarks[index]), { visibilityMin: 0.65, color: 'white', fillColor: 'rgb(0,217,231)' });
      drawingUtils.drawLandmarks(canvasCtx, Object.values(mpPose.POSE_LANDMARKS_NEUTRAL)
          .map(index => results.poseLandmarks[index]), { visibilityMin: 0.65, color: 'white', fillColor: 'white' });
      canvasCtx.restore();
      }
      else{
        // txt = 'nothing'
        // flag = 0;
        setMessage('nothing')
        console.log('nothing');
        drawingUtils.drawConnectors(canvasCtx, results.poseLandmarks, mpPose.POSE_CONNECTIONS, { visibilityMin: 0.65, color: 'rgb(255,138,0)' });
      drawingUtils.drawLandmarks(canvasCtx, Object.values(mpPose.POSE_LANDMARKS_LEFT)
          .map(index => results.poseLandmarks[index]), { visibilityMin: 0.65, color: 'white', fillColor: 'rgb(138,138,0)' });
      drawingUtils.drawLandmarks(canvasCtx, Object.values(mpPose.POSE_LANDMARKS_RIGHT)
          .map(index => results.poseLandmarks[index]), { visibilityMin: 0.65, color: 'white', fillColor: 'rgb(0,217,231)' });
      drawingUtils.drawLandmarks(canvasCtx, Object.values(mpPose.POSE_LANDMARKS_NEUTRAL)
          .map(index => results.poseLandmarks[index]), { visibilityMin: 0.65, color: 'white', fillColor: 'white' });
      canvasCtx.restore();
      }
      // 
    }
    else{
      canvasRef.current.width = webcamRef.current.video.videoWidth;
      canvasRef.current.height = webcamRef.current.video.videoHeight;

      const canvasElement = canvasRef.current;
      const canvasCtx = canvasElement.getContext('2d');
      canvasCtx.save();
      console.log('out of frame')
      // canvasCtx.restore();
    }

  }
  
  // loadModel(url);
  useEffect(() => {
    model = loadModel();
    const pose = new Pose({locateFile: (file) => {
      return `https://cdn.jsdelivr.net/npm/@mediapipe/pose/${file}`;
    }});
    pose.setOptions({
      modelComplexity: 1,
      smoothLandmarks: true,
      enableSegmentation: true,
      smoothSegmentation: true,
      minDetectionConfidence: 0.5,
      minTrackingConfidence: 0.5
    });
    // 
    pose.onResults(onResults);

    
    const camera = new cam.Camera(webcamRef.current.video,{
      onFrame:async()=>{
        await pose.send({image:webcamRef.current.video})
      },
      width:1000,
      height: 700
    });
    camera.start()


  }, [])
    const useStyles = makeStyles({
        divider: {
          backgroundColor: '#FFFFFF',
          p: 3,
        },
        text: {
            color: '#e6e6e6'
        },
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
    const webcamRef = useRef(null);
    const classes = useStyles();
    return(
      <>
      {/* <div>
      <Webcam ref={webcamRef} style={{
        position: 'absolute',
        marginRight: 'auto',
        marginLeft: 'auto',
        left: 100,
        // right: 0,
        textAlign: 'center',
        // zIndex: 9,
        // width: 1000,
        // height: 700,
    }}/>
    <canvas 
    ref={canvasRef}
    style={{
      position: 'absolute',
      marginRight: 'auto',
      marginLeft: 'auto',
      left: 100,
      textAlign: 'center',
      zIndex: 2,
      // width: 1000,
      // height: 700,
    }}></canvas>
    </div> */}
        <Container maxWidth='lg'>
        
            <Grid container spacing ={2}>
            <Grid item lg={8}>
            <div>
      <Webcam ref={webcamRef} style={{
        position: 'absolute',
        marginRight: 'auto',
        marginLeft: 'auto',
        left: 100,
        // right: 0,
        textAlign: 'center',
        // zIndex: 9,
        width: 800,
        // height: 700,
    }}/>
    <canvas 
    ref={canvasRef}
    style={{
      position: 'absolute',
      marginRight: 'auto',
      marginLeft: 'auto',
      left: 100,
      textAlign: 'center',
      zIndex: 2,
      width: 800,
      // height: 700,
    }}></canvas>
    </div>
            </Grid>
            <Grid item lg={4}>
                <Grid direction="column"  container spacing={2}>
                    <Grid item>
                        <Typography variant="h2">
                            Dumbell Curl
                        </Typography>
                        <Divider className={classes.divider}></Divider>
                    </Grid>
                    {/* {counting.map((counts) => (
                    <Grid item>
			            <CardComponent key={counts.title} prop={counts} />
			        </Grid>
                    ))} */}
                    <Grid item>
                    <Card
    className={classes.card}
    sx={{ height: '100%' }}
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
          >Repetitions
          </Typography>
            <Typography
            color="textPrimary"
            variant="h4"
          >
            {count}
            </Typography>
          
        </Grid>
        <Grid item >
          <Avatar className={classes.avatar}>
            <FiRepeat className={classes.avatar}/>
          </Avatar>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
                    </Grid>
                </Grid>
            </Grid>
            </Grid>
        </Container></>
    );
}

export default WorkoutContainer;
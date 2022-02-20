import axios from "axios";
import Router from "next/router"
import {SERVER} from '../../lib/router'
const UPDATEPROFILE = 'updateprofile';
const GETPROFILE = 'getprofile';




const initialState = {
        userName: 'User',
        userGender: null,
        userHeight: 'NaN',
        userWeight: 'NaN',
        userAge: null,
        userActivity: null,
        userPurpose: null,
        userBMI: 'NaN',
        userEmail: null,
}

export const updateProfile = (values) => {
    return (dispatch, getState) => {
            const token = getState().auth.accessToken;
            // console.log(values);
            let data = {values};
            // const data = JSON.stringify([values]);
            // "userHeight": height, "userWeight": weight, "userGender": gender, "userActivity": activity, "userPurpose": purpose
            console.log(data);
            axios.post(`${SERVER}/profile`,
                    {...values},
                    {headers: {"Accept": "*/*", "Authorization": `Bearer ${token}`, 
                    // 'Content-Type': 'application/x-www-form-urlencoded'
                }
            })
            .then(response=>{
                console.log(response);
                dispatch({type: UPDATEPROFILE, payload: response.data});
                console.log(response.data);
                Router.push('/profile');
            })
            .catch(e=>{throw new Error(e);})
    }
}
// "Accept": "*/*", 
export const getProfile = () => {
    console.log('get running');
    return (dispatch, getState) => {
        const token = getState().auth.accessToken;
        axios.get(`${SERVER}/profile`,
        {headers: {"Accept": "*/*", "Authorization": `Bearer ${token}`}}
        )
        .then(response=>{
            dispatch({type: GETPROFILE, payload: response.data});
            console.log(response.data);
            Router.push('/profile');
        })
        .catch(e=>{throw new Error(e);})
    }
}

export default (state = initialState, action) => {
    switch(action.type) {
        case UPDATEPROFILE:
            return {
                userName: action.payload[0].userName,
                userGender: action.payload[0].userGender,
                userHeight: action.payload[0].userHeight,
                userWeight: action.payload[0].userWeight,
                userAge: action.payload[0].userAge,
                userPurpose: action.payload[0].userPurpose,
                userActivity: action.payload[0].userActivity,
                userBMI: action.payload[0].userBMI,
                
            }
        case GETPROFILE:
            return {
                userName: action.payload[0].userName,
                userGender: action.payload[0].userGender,
                userHeight: action.payload[0].userHeight,
                userWeight: action.payload[0].userWeight,
                userAge: action.payload[0].userAge,
                userPurpose: action.payload[0].userPurpose,
                userActivity: action.payload[0].userActivity,
                userBMI: action.payload[0].userBMI,
                userEmail: action.payload[0].userEmail,
            }
        default:
            return state;
    }
}
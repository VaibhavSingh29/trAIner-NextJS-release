import axios from 'axios';
import Router from 'next/router'
import { saveExpiryTime } from '../../lib/localStorage';
import {SERVER} from '../../lib/router'
import { getProfile } from './profile';

const AUTHENTICATE = 'authenticate';
const DEAUTHENTICATE = 'deauthenticate';
const REAUTHENTICATE = 'reauthenticate';


//initial state
const initialState = {
    accessToken: null,
    refreshToken: null,
    isAuthenticated: false,
}
//actions
//authenticate
export const authenticateLogin = ({email, password}) => {
    return (dispatch) => {
        axios.post(`${SERVER}/auth/login`,
                    {"userEmail": email, "userPassword": password},
                    {headers: {"Accept": "*/*",}
            })
            .then(response=>{
                dispatch({type: AUTHENTICATE, payload: response.data});
                // saveExpiryTime(response.data.expiresIn);
                // runTimer(dispatch, response.data.expiresIn * 1000);
                console.log(response.data);
                Router.push('/');
                
            })
            .catch(e=>{throw new Error(e);})
    }
}

export const authenticateRegister = ({name, phone, email, password}) => {
    return (dispatch) => {
        axios.post(`${SERVER}/auth/signup`,
                    {"userName": name, "userPhone": phone, "userEmail": email, "userPassword": password},
                    {headers: {"Accept": "*/*",}
            })
            .then(response=>{
                dispatch({type: REAUTHENTICATE, payload: response.data});
                // saveExpiryTime(response.data.expiresIn);
                // runTimer(dispatch, response.data.expiresIn * 1000);
                console.log(response.data);
                Router.push('/login');
                
            })
            .catch(e=>{throw new Error(e);})
    }
}


//deauthenticate
export const deauthenticate = () => {
    // localStorage.removeItem('timer');
    return (dispatch) => {
      Router.push('/');
      dispatch({type: DEAUTHENTICATE});
    };
  };
//reauthenticate
export const reauthenticate = (token) => {
    return(dispatch) => {
        dispatch({type: REAUTHENTICATE});
    }
}

//reducer
export default (state = initialState, action) => {
    switch(action.type) {
        case AUTHENTICATE:
                return {
                accessToken: action.payload.accessToken,
                isAuthenticated: true,
                }
        case DEAUTHENTICATE:
            return {
                accessToken: null,
                isAuthenticated: false,
            }
        case REAUTHENTICATE:
            return {
                accessToken: action.payload.accessToken,
            }
        default: 
            return state;
    }
}



// export { authenticate, deauthenticate };
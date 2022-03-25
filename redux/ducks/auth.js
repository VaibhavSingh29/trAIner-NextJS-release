import axios from "axios";
import Router from "next/router";
import { SERVER } from "../../lib/router";
import { setSnackbar } from "./snackbar";
const AUTHENTICATE = "authenticate";
const DEAUTHENTICATE = "deauthenticate";
const REAUTHENTICATE = "reauthenticate";

//initial state
const initialState = {
  accessToken: null,
  refreshToken: null,
  isAuthenticated: false,
};
//actions
//authenticate
export const authenticateLogin = ({ email, password }) => {
  return (dispatch) => {
    axios
      .post(
        `${SERVER}/auth/login`,
        { userEmail: email, userPassword: password },
        { headers: { Accept: "*/*" } }
      )
      .then((response) => {
        dispatch({ type: AUTHENTICATE, payload: response.data });

        Router.push("/");
      })
      .then(() => {
        dispatch(setSnackbar(true, "success", "Logged in successfully"));
      })
      .catch((e) => {
        throw new Error(e);
      });
  };
};

export const authenticateRegister = ({ name, phone, email, password }) => {
  return (dispatch) => {
    axios
      .post(
        `${SERVER}/auth/signup`,
        {
          userName: name,
          userPhone: phone,
          userEmail: email,
          userPassword: password,
        },
        { headers: { Accept: "*/*" } }
      )
      .then((response) => {
        dispatch({ type: REAUTHENTICATE, payload: response.data });
        console.log(response.data);
        Router.push("/login");
      })
      .then(() => {
        dispatch(
          setSnackbar(
            true,
            "success",
            "You are successfully Registered. Please Login to access your profile"
          )
        );
      })
      .catch((e) => {
        throw new Error(e);
      });
  };
};

//deauthenticate
export const deauthenticate = () => {
  // localStorage.removeItem('timer');
  return (dispatch, getState) => {
    Router.push("/");
    getState().profile.userName = "User";
    dispatch({ type: DEAUTHENTICATE });
    dispatch(setSnackbar(true, "error", "Logged out successfully"));
  };
};
//reauthenticate
export const reauthenticate = (token) => {
  return (dispatch) => {
    dispatch({ type: REAUTHENTICATE });
  };
};

//reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATE:
      return {
        accessToken: action.payload.accessToken,
        isAuthenticated: true,
      };
    case DEAUTHENTICATE:
      return {
        accessToken: null,
        isAuthenticated: false,
      };
    case REAUTHENTICATE:
      return {
        accessToken: action.payload.accessToken,
      };
    default:
      return state;
  }
};

// export { authenticate, deauthenticate };

import { useSelector } from "react-redux";
import { reauthenticate } from "../redux/ducks/auth";

// const token = useSelector((state)=>state.auth.refreshToken);

export function saveExpiryTime(timer) {
  localStorage.setItem("timer", timer);
}

export function runTimer(dispatch, timer) {
  setTimeout(() => {
    dispatch(reauthenticate(token));
  }, timer);
}

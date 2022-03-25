import { Button } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { deauthenticate } from "../../redux/ducks/auth";
import { makeStyles } from "@material-ui/styles";
import { BiLogOutCircle } from "react-icons/bi";
import { HOME } from "../../lib/router";
import { getProfile } from "../../redux/ducks/profile";
// import Link from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: "#ee4b57",
    color: "#ffffff",
    borderRadius: 5,
    minWidth: 0,
    marginRight: 10,
  },
}));

const Header = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isAuthenticated);
  // console.log(isLoggedIn);

  return (
    <nav className="navbar navbar-expand-md navbar-dark md-5">
      <div className="container">
        <Link href="/">
          <a href="#" className="navbar-brand">
            <Image
              alt=""
              src={"/brand.png"}
              width="200"
              height="60"
              className="d-inline-block align-top"
            />
          </a>
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto text-center">
            {isLoggedIn && (
              <Button
                className={classes.button}
                onClick={() => dispatch(deauthenticate())}
              >
                <BiLogOutCircle size={25} />
              </Button>
            )}
            {/* there must be a better way of doing this */}
            {isLoggedIn && (
              <Link href="/">
                <a className="nav-link">Home</a>
              </Link>
            )}
            {!isLoggedIn && (
              <Link href="/login">
                <a className="nav-link">Login</a>
              </Link>
            )}
            {!isLoggedIn && (
              <Link href="/register">
                <a className="nav-link">Register</a>
              </Link>
            )}
            {isLoggedIn && (
              <Link href="/profile">
                <a onClick={() => dispatch(getProfile())} className="nav-link">
                  Profile
                </a>
              </Link>
            )}
          </ul>
        </div>
      </div>{" "}
    </nav>
  );
};

export default Header;

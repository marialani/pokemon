import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { AppBar, IconButton, Toolbar, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import paths from "../constants/paths";
import NavMenu from "./NavMenu";
import Login from "./Login";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    width: "100%",
    padding: "0.75rem",
  },
  menuButton: {
    marginRight: 16,
    marginLeft: -12,
    color: "black",
  },
  linksDiv: {
    width: "15vw",
    display: "flex",
    justifyContent: "flex-end",
    position: "relative",
    maxWidth: "15vw",
  },
  rightToolbar: {
    marginLeft: "auto",
    marginRight: -12,
  },
  logo: {
    margin: "auto",
    "&:hover": {
      WebkitFilter:
        "drop-shadow(5px 5px 5px #e6bf00) drop-shadow(-5px -5px 5px #e6bf00)",
      filter:
        "drop-shadow(5px 5px 5px #e6bf00) drop-shadow(-5px -5px 5px #e6bf00)",
    },
  },
  avatar: {
    backgroundColor: "black",
  },
  exploreImg: {
    maxWidth: "100%",
    paddingBottom: "0.5rem",
    "&:hover": {
      WebkitFilter: "drop-shadow(5px 5px 5px #e6bf00)",
      filter: "drop-shadow(5px 5px 5px #e6bf00)",
    },
  },
}));

export default function Header({ appBarStyling }) {
  const classes = useStyles();

  return (
    <AppBar
      position="static"
      style={{
        backgroundColor: "rgba(245, 245, 245, 0.2)",

        boxShadow: "0 1rem 1rem rgba(0,0,0,0.3)",
        zIndex: "0",
      }}
      className={appBarStyling}
    >
      <Toolbar className={classes.toolbar}>
        <NavMenu />
        <IconButton className={classes.logo} aria-label="logo">
          <Link component={RouterLink} to={paths.home}>
            <img
              src={"/assets/images/homepage/pokemon-ball.png"}
              alt="pokeball"
              style={{
                width: "3rem",
              }}
            />
          </Link>
        </IconButton>
        <div className={classes.linksDiv}>
          <Login />
        </div>
      </Toolbar>
    </AppBar>
  );
}

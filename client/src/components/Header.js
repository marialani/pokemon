import React, { useState } from "react";
// import Grid from "@material-ui/core/Grid";
import { Link as RouterLink } from "react-router-dom";
import { AppBar, IconButton, Toolbar, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import paths from "../constants/paths";
import NavMenu from "./NavMenu";
import Login from "./Login";

const useStyles = makeStyles((theme) => ({
  // appBar: {
  //   background:
  //     "radial-gradient(circle, white 10%, whitesmoke 25%, silver 85%, grey 100%)",
  //   boxShadow: "0 1rem 1rem rgba(0,0,0,0.3)",
  //   zIndex: "0",
  // },
  // appBarHome: {
  // background: "transparent",
  // boxShadow: "0 1rem 1rem rgba(0,0,0,0.3)",
  // zIndex: "0",
  // },
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

export default function Header({ appBarStyling, menuIconStyling }) {
  const classes = useStyles();

  const [openModal, setOpenModal] = useState(false);

  return (
    // <Grid component="header" item xs={12}>
    // {/* // grid item xs={12} container */}
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
    // {/* </Grid> */}
  );
}

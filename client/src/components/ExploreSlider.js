import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Zoom from "@material-ui/core/Zoom";
import Fab from "@material-ui/core/Fab";
import { green } from "@material-ui/core/colors";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";
import paths from "../constants/paths";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={5}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `action-tab-${index}`,
    "aria-controls": `action-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    maxWidth: "100%",
    position: "relative",
    minHeight: 200,
  },
  appbar: {
    borderRadius: "1rem",
    background:
      "radial-gradient(circle, white 10%, whitesmoke 25%, silver 85%, grey 100%)",
  },
  fab: {
    position: "absolute",
    top: "5rem",
    right: "1rem",
    background:
      "radial-gradient(circle, white 10%, whitesmoke 25%, silver 85%, grey 100%)",
  },
  fabLink: {
    zIndex: 2,
  },
  fabGreen: {
    color: theme.palette.common.white,
    backgroundColor: green[500],
    "&:hover": {
      backgroundColor: green[600],
    },
    tab: {
      minWidth: "0",
    },
    tabBar: {
      justifyContent: "center",
    },
  },
}));

export default function FloatingActionButtonZoom() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  };

  const fabs = [
    {
      className: classes.fab,
      linkTo: paths.tradingCards,
      icon: (
        <img
          src="assets/images/homepage/icons/card-match.png"
          alt="card match icon"
          style={{ maxWidth: "6vh" }}
        />
      ),
      label: "pokemon cards",
    },
    {
      className: classes.fab,
      linkTo: paths.cardMatch,
      icon: (
        <img
          src="assets/images/homepage/pokemon-card.jpg"
          alt="pokemon card icon"
          style={{ maxWidth: "3.4vh" }}
        />
      ),
      label: "pokemon card",
    },
    {
      className: clsx(classes.fab, classes.fabGreen),
      linkTo: paths.whosThatPokemon,
      icon: (
        <img
          src="assets/images/homepage/icons/outline-icon.png"
          alt="who's that pokemon icon"
          style={{ maxWidth: "6vh" }}
        />
      ),
      label: "who's that pokemon",
    },
    {
      className: classes.fab,
      linkTo: paths.pokedex,
      icon: (
        <img
          src="assets/images/homepage/icons/pokedex-icon.png"
          alt="pokedex icon"
          style={{ maxWidth: "2.8vh" }}
        />
      ),
      label: "pokedex",
    },
    {
      className: classes.fab,
      linkTo: paths.pokemonBattle,
      icon: (
        <img
          src="assets/images/homepage/icons/fight-icon.png"
          alt="fight icon"
          style={{ maxWidth: "3.6vh" }}
        />
      ),
      label: "pokemon fight",
    },
    {
      className: clsx(classes.fab, classes.fabGreen),
      linkTo: paths.pokemonQuest,
      icon: (
        <img
          src="assets/images/homepage/icons/quest-icon.png"
          alt="quest icon"
          style={{ maxWidth: "3.8vh" }}
        />
      ),
      label: "pokemon quest",
    },
  ];

  return (
    <div className={classes.root}>
      <AppBar
        component="div"
        position="static"
        color="default"
        className={classes.appbar}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="on"
          aria-label="action tabs"
        >
          <Tab label="1" {...a11yProps(0)} />
          <Tab label="2" {...a11yProps(1)} />
          <Tab label="3" {...a11yProps(2)} />
          <Tab label="4" {...a11yProps(3)} />
          <Tab label="5" {...a11yProps(4)} />
          <Tab label="6" {...a11yProps(5)} />
        </Tabs>
      </AppBar>
      {fabs.map((fab, index) => (
        <Zoom
          key={index}
          in={value === index}
          timeout={transitionDuration}
          style={{
            transitionDelay: `${
              value === index ? transitionDuration.exit : 0
            }ms`,
          }}
          unmountOnExit
        >
          <Fab
            aria-label={fab.label}
            className={fab.className}
            color={fab.color}
          >
            <Link to={fab.linkTo} className={classes.fabLink}>
              {fab.icon}
            </Link>
          </Fab>
        </Zoom>
      ))}
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
        className={classes.tabBar}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Typography
            color="primary"
            variant="h5"
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "5vh 5vw 0 5vw",
              textDecoration: "underline double rgba(230, 211, 0, 1)",
            }}
          >
            TRADING CARDS
          </Typography>
          <Typography
            color="primary"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "5vh 5vw",
            }}
          >
            View all of the original pokemon cards
          </Typography>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Typography
            color="primary"
            variant="h5"
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "5vh 5vw 0 5vw",
              textDecoration: "underline double rgba(230, 211, 0, 1)",
            }}
          >
            CARD MATCH
          </Typography>
          <Typography
            color="primary"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "5vh 5vw",
            }}
          >
            Find all of the matching pokemon card pairs
          </Typography>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <Typography
            color="primary"
            variant="h5"
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "5vh 5vw 0 5vw",
              textDecoration: "underline double rgba(230, 211, 0, 1)",
            }}
          >
            WHO'S THAT POKEMON?
          </Typography>
          <Typography
            color="primary"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "5vh 5vw",
            }}
          >
            A guessing game where you pick the correct pokemon from a list of
            options
          </Typography>
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          <Typography
            color="primary"
            variant="h5"
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "5vh 5vw 0 5vw",
              textDecoration: "underline double rgba(230, 211, 0, 1)",
            }}
          >
            POKEDEX
          </Typography>
          <Typography
            color="primary"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "5vh 5vw",
            }}
          >
            A mini encyclopedia housing the first generation of pokemon
          </Typography>
        </TabPanel>
        <TabPanel value={value} index={4} dir={theme.direction}>
          <Typography
            color="primary"
            variant="h5"
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "5vh 5vw 0 5vw",
              textDecoration: "underline double rgba(230, 211, 0, 1)",
            }}
          >
            POKEMON BATTLE
          </Typography>
          <Typography
            color="primary"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "5vh 5vw",
            }}
          >
            Choose your pokemon and go up against another trainer to win prizes
          </Typography>
        </TabPanel>
        <TabPanel value={value} index={5} dir={theme.direction}>
          <Typography
            color="primary"
            variant="h5"
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "5vh 5vw 0 5vw",
              textDecoration: "underline double rgba(230, 211, 0, 1)",
            }}
          >
            POKEMON QUEST
          </Typography>
          <Typography
            color="primary"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "5vh 5vw",
            }}
          >
            Become a world class pokemon trainer. Choose your starter pokemon
            and travel through the map to gain the coveted title
          </Typography>
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}

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
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import UpIcon from "@material-ui/icons/KeyboardArrowUp";
import { green } from "@material-ui/core/colors";
import Box from "@material-ui/core/Box";

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

    // maxWidth: "5vw",
    // height: "auto",
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
      color: "yellow",
      className: classes.fab,
      icon: (
        <img
          src="assets/images/homepage/icons/card-match.png"
          style={{ maxWidth: "6vh" }}
        />
      ),
      label: "pokemon cards",
    },
    {
      color: "yellow",
      className: classes.fab,
      icon: (
        <img
          src="assets/images/homepage/pokemon-card.jpg"
          style={{ maxWidth: "3.4vh" }}
        />
      ),
      label: "pokemon card",
    },
    {
      color: "yellow",
      className: clsx(classes.fab, classes.fabGreen),
      icon: (
        <img
          src="assets/images/homepage/icons/outline-icon.png"
          style={{ maxWidth: "6vh" }}
        />
      ),
      label: "who's that pokemon",
    },
    {
      color: "yellow",
      className: classes.fab,
      icon: (
        <img
          src="assets/images/homepage/icons/pokedex-icon.png"
          style={{ maxWidth: "2.8vh" }}
        />
      ),
      label: "pokedex",
    },
    {
      color: "yellow",
      className: classes.fab,
      icon: (
        <img
          src="assets/images/homepage/icons/fight-icon.png"
          style={{ maxWidth: "3.6vh" }}
        />
      ),
      label: "pokemon fight",
    },
    {
      color: "yellow",
      className: clsx(classes.fab, classes.fabGreen),
      icon: (
        <img
          src="assets/images/homepage/icons/quest-icon.png"
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
          centered
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
            {fab.icon}
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
          <h5>TRADING CARDS</h5>
          <p>View all of the original pokemon cards</p>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <h5>CARD MATCH</h5>
          <p>
            Find all of the matching pokemon card pairings before time runs out
          </p>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <h5>WHO'S THAT POKEMON?</h5>
          <p>
            A guessing game where you pick the correct pokemon from a list of
            options
          </p>
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          <h5>POKEDEX</h5>
          <p>A mini encyclopedia housing the first generation of pokemon</p>
        </TabPanel>
        <TabPanel value={value} index={4} dir={theme.direction}>
          <h5>POKEMON BATTLE</h5>
          <p>
            Choose your pokemon and go up against another trainer to win prizes
          </p>
        </TabPanel>
        <TabPanel value={value} index={5} dir={theme.direction}>
          <h5>POKEMON QUEST</h5>
          <p>
            Become a world class pokemon trainer. Choose your starter pokemon
            and travel through the map to gain the coveted title
          </p>
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}

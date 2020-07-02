import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/MenuRounded";
import { Link } from "react-router-dom";
import paths from "../constants/paths";

const useStyles = makeStyles({
  listItem: {
    maxWidth: "5vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // width: 250,
  },
  listItemText: {
    paddingLeft: "1rem",
    fontWeight: "900",
  },
  fullList: {
    width: "auto",
  },
  link: {
    textDecoration: "none",
    color: "whitesmoke",
  },
  divider: {
    backgroundColor: "grey",
  },
  hover: {
    "&:hover": {
      WebkitFilter:
        "drop-shadow(5px 5px 5px #e6bf00) drop-shadow(-5px -5px 5px #e6bf00)",
      filter:
        "drop-shadow(5px 5px 5px #e6bf00) drop-shadow(-5px -5px 5px #e6bf00)",
    },
  },
});

export default function NavMenu() {
  const classes = useStyles();

  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (side, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = (side) => (
    <div
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      {/* <List>
        <Link className={classes.link} to="/">
          <ListItem>
            <ListItemIcon>
              <FavoriteBorderIcon color="primary" />
            </ListItemIcon>
            <ListItemText>HOME</ListItemText>
          </ListItem>
        </Link>
      </List> */}
      <img
        src="/assets/images/homepage/pokemon-logo.png"
        style={{ maxWidth: "15vw", paddingBottom: "1.5rem" }}
      />
      <Divider className={classes.divider} />
      <List>
        <Link className={classes.link} to={paths.explore}>
          <ListItem>
            <ListItemIcon className={classes.listItem}>
              <img
                src="assets/images/homepage/icons/explore-icon.png"
                style={{ maxWidth: "6.5vh" }}
              />
            </ListItemIcon>
            <ListItemText className={classes.listItemText}>
              EXPLORE
            </ListItemText>
          </ListItem>
        </Link>
      </List>
      <Divider className={classes.divider} />
      <List>
        <Link className={classes.link} to={paths.tradingCards}>
          <ListItem>
            <ListItemIcon className={classes.listItem}>
              <img
                src="assets/images/homepage/icons/card-match.png"
                style={{ maxWidth: "6vh" }}
              />
            </ListItemIcon>
            <ListItemText className={classes.listItemText}>
              TRADING CARDS
            </ListItemText>
          </ListItem>
        </Link>
      </List>
      <Divider className={classes.divider} />
      <List>
        <Link className={classes.link} to={paths.cardMatch}>
          <ListItem>
            <ListItemIcon className={classes.listItem}>
              <img
                src="assets/images/homepage/pokemon-card.jpg"
                style={{ maxWidth: "3.4vh" }}
              />
            </ListItemIcon>
            <ListItemText className={classes.listItemText}>
              CARD MATCH
            </ListItemText>
          </ListItem>
        </Link>
      </List>
      <Divider className={classes.divider} />
      <List>
        <Link className={classes.link} to={paths.whosThatPokemon}>
          <ListItem>
            <ListItemIcon className={classes.listItem}>
              <img
                src="assets/images/homepage/icons/outline-icon.png"
                style={{ maxWidth: "6vh" }}
              />
            </ListItemIcon>
            <ListItemText className={classes.listItemText}>
              WHO'S THAT POKÉMON?
            </ListItemText>
          </ListItem>
        </Link>
      </List>
      <Divider className={classes.divider} />
      <List>
        <Link className={classes.link} to={paths.pokedex}>
          <ListItem>
            <ListItemIcon className={classes.listItem}>
              <img
                src="assets/images/homepage/icons/pokedex-icon.png"
                style={{ maxWidth: "2.8vh" }}
              />
            </ListItemIcon>
            <ListItemText className={classes.listItemText}>
              POKÉDEX
            </ListItemText>
          </ListItem>
        </Link>
      </List>
      <Divider className={classes.divider} />
      <List>
        <Link className={classes.link} to={paths.pokemonBattle}>
          <ListItem>
            <ListItemIcon className={classes.listItem}>
              <img
                src="assets/images/homepage/icons/fight-icon.png"
                style={{ maxWidth: "3.6vh" }}
              />
            </ListItemIcon>
            <ListItemText className={classes.listItemText}>
              POKÉMON BATTLE
            </ListItemText>
          </ListItem>
        </Link>
      </List>
      <Divider className={classes.divider} />
      <List>
        <Link className={classes.link} to={paths.pokemonQuest}>
          <ListItem>
            <ListItemIcon className={classes.listItem}>
              <img
                src="assets/images/homepage/icons/quest-icon.png"
                style={{ maxWidth: "3.8vh" }}
              />
            </ListItemIcon>
            <ListItemText className={classes.listItemText}>
              POKÉMON QUEST
            </ListItemText>
          </ListItem>
        </Link>
      </List>
      <Divider className={classes.divider} />
    </div>
  );

  return (
    <div style={{ width: "15vw" }}>
      <IconButton
        onClick={toggleDrawer("left", true)}
        aria-label="menu"
        className={classes.hover}
      >
        <MenuIcon
          style={{
            width: "3rem",
            height: "auto",
            color: "black",
            borderRadius: "1rem",
          }}
          color="primary"
        />
      </IconButton>
      <Drawer open={state.left} onClose={toggleDrawer("left", false)}>
        {sideList("left")}
      </Drawer>
    </div>
  );
}

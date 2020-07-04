import "./aboutButton.css";
import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import { useSpring, animated } from "react-spring/web.cjs"; // web.cjs is required for IE 11 support

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  aboutModalImg: {
    width: "40%",
    padding: "1.5rem 0",
  },
}));

const Fade = React.forwardRef(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element,
  in: PropTypes.bool.isRequired,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
};

export default function AboutModal({ logMeIn }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button className="startBtn" onClick={handleOpen}>
        <img
          className="about"
          src="https://i.imgur.com/I7ihXYa.png"
          alt="about button"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            maxHeight: "100%",
            maxWidth: "100%",
            padding: "0.5rem 0.5rem",
          }}
        />
      </button>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <img
              src="assets/images/leaves.jpg"
              alt="leaves"
              style={{ width: "25%", position: "absolute", top: 0, left: 0 }}
            />
            <img
              src="assets/images/leaves.jpg"
              alt="leaves"
              style={{
                width: "25%",
                position: "absolute",
                top: 0,
                right: 0,
                transform: "scaleX(-1)",
              }}
            />
            <img
              className={classes.aboutModalImg}
              src="https://i.imgur.com/I7ihXYa.png"
              alt="about"
            />
            <p id="spring-modal-description">content tbc.</p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

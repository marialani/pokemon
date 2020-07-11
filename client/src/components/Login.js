import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Button from "@material-ui/core/Button";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import FilledInput from "@material-ui/core/FilledInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import AccountCircle from "@material-ui/icons/AccountCircle";
import IconButton from "@material-ui/core/IconButton";
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
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  loginImg: {
    cursor: "pointer",
    maxWidth: "80%",
    [theme.breakpoints.up("md")]: {
      maxWidth: "60%",
    },
    "&:hover": {
      WebkitFilter: "drop-shadow(5px 5px 5px #e6bf00)",
      filter: "drop-shadow(5px 5px 5px #e6bf00)",
    },
  },
  loginModalImg: {
    width: "40%",
    padding: "1.5rem 0",
  },
  loginButton: {
    backgroundColor: "#3564AD",
    width: "100%",
    color: "whitesmoke",
    margin: "1rem 0 0.3rem 0",
    padding: "0.7rem 0",
  },
  inputsDiv: {
    display: "flex",
    flexDirection: "column",
    // alignItems: "center",
  },
  inputField: {
    marginBottom: "1rem",
    width: "100%",
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

export default function LoginModal({ history }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [values, setValues] = React.useState({
    username: "",
    password: "",
    showPassword: false,
  });

  const dummyLogin = {
    username: "pokemon",
    password: "pokemon",
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      dummyLogin.username === values.username &&
      dummyLogin.password === values.password
    ) {
      this.props.history.push("/explore/");
      // refactor
    } else {
      alert("Please enter the correct login details!");
    }
  };

  const handleChange = (fieldName) => (event) => {
    setValues({ ...values, [fieldName]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div style={{ position: "relative", display: "contents" }}>
      <img
        src="https://i.imgur.com/J2PBxHj.png"
        alt="login"
        className={classes.loginImg}
        onClick={handleOpen}
      />
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
          <div className={classes.paper} style={{ position: "relative" }}>
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
              src="assets/images/team-rocket.png"
              alt="leaves"
              style={{
                width: "15%",
                position: "absolute",
                bottom: 0,
                left: 10,
              }}
            />
            <img
              src="assets/images/ash-misty-brock.png"
              alt="leaves"
              style={{
                width: "15%",
                position: "absolute",
                bottom: 0,
                right: 10,
              }}
            />
            <img
              src="https://i.imgur.com/J2PBxHj.png"
              alt="login"
              className={classes.loginModalImg}
            />
            <div className={classes.inputsDiv}>
              <FormControl className={classes.inputField} variant="filled">
                <InputLabel htmlFor="filled-adornment-username">
                  Username
                </InputLabel>
                <FilledInput
                  id="filled-adornment-username"
                  value={values.username}
                  onChange={handleChange("username")}
                  endAdornment={
                    <InputAdornment position="end">
                      <AccountCircle style={{ color: "rgba(0, 0, 0, 0.54)" }} />
                    </InputAdornment>
                  }
                  aria-describedby="filled-weight-helper-text"
                  inputProps={{
                    "aria-label": "weight",
                  }}
                />
              </FormControl>
              <div className={classes.root}>
                <FormControl className={classes.inputField} variant="filled">
                  <InputLabel htmlFor="filled-adornment-password">
                    Password
                  </InputLabel>
                  <FilledInput
                    id="filled-adornment-password"
                    type={values.showPassword ? "text" : "password"}
                    value={values.password}
                    onChange={handleChange("password")}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {values.showPassword ? (
                            <Visibility />
                          ) : (
                            <VisibilityOff />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </div>
              <Button
                className={classes.loginButton}
                variant="container"
                size="medium"
                onClick={handleSubmit}
              >
                Login
              </Button>
              <Button
                style={{ marginBottom: "2rem" }}
                variant="container"
                size="medium"
                onClick={handleClose}
              >
                Exit
              </Button>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

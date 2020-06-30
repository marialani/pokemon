import React from "react";
import "./enterButton.css";
import { Link as RouterLink } from "react-router-dom";
import paths from "../../constants/paths";

const EnterButton = () => {
  return (
    <RouterLink to={paths.enter}>
      <button className="startBtn2">
        <img
          className="enter"
          src="https://i.imgur.com/QZCngdl.png"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            maxHeight: "80%",
            maxWidth: "100%",
            padding: "0.5rem 0.5rem",
          }}
        />
      </button>
    </RouterLink>
  );
};

export default EnterButton;

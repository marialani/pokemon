import React from "react";

const Loading = ({ image, background, width }) => {
  return (
    <div
      style={{
        backgroundColor: { background },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100%",
      }}
    >
      <img src={image} style={{ width: { width }, height: "auto" }} />
    </div>
  );
};

export default Loading;

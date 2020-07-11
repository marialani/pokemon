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
      <img
        // src="https://i.gifer.com/JO4d.gif"
        src="https://cdn.dribbble.com/users/1771704/screenshots/6124573/attachments/1313609/pokeball.gif"
        style={{ width: { width }, height: "auto" }}
        alt="loading"
      />
    </div>
  );
};

export default Loading;

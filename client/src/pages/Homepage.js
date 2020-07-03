/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import HomeSlider from "../components/HomeSlider";
import Header from "../components/Header";
import AboutModal from "../components/Buttons/AboutModal";
import EnterButton from "../components/Buttons/EnterButton";

export default function Homepage() {
  const home_audio = `${process.env.PUBLIC_URL}/assets/audio/home_audio.mp3`;
  return (
    <>
      <div
        style={{
          position: "absolute",
          top: "0px",
          zIndex: "3",
          width: "100%",
        }}
      >
        <Header />
      </div>

      <div
        style={{
          position: "absolute",
          minHeight: "30vh",
          bottom: "0px",
          left: "25%",
          zIndex: "3",
          width: "50%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <EnterButton />
        <p
          style={{
            maxWidth: "100%",
            color: "white",
            fontSize: "2vw",
            fontWeight: "bold",
            textAlign: "center",
            WebkitTextStroke: "0.75px black",
          }}
        >
          &copy; 2020 All rights reserved
        </p>
      </div>
      <div
        style={{
          position: "absolute",
          top: "30vh",
          left: "10vw",
          width: "80vw",
          zIndex: "3",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        <img
          src={"/assets/images/homepage/Pokemon-logo-gcea.png"}
          alt="logo"
          style={{
            width: "30vw",
            alignSelf: "flex-start",
            filter: "drop-shadow(2px 4px 6px black)",
          }}
        />
        <AboutModal />
      </div>
      <div
        style={{
          maxHeight: "100%",
        }}
      >
        <audio autoPlay loop src={home_audio}></audio>
        <HomeSlider style={{ maxHeight: "100%" }} />
      </div>
    </>
  );
}

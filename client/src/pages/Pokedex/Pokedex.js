import React, { useState } from "react";
import "./pokedex.scss";
import { pokemonList, pokemonListDescription } from "./pokemonData";

const Pokedex = () => {
  const [number, setNumber] = useState(0);
  const [isOn, setIsOn] = useState(false);

  const pokemonTextHeading = isOn ? pokemonList[number] : "";
  const pokemonTextBody = isOn ? pokemonListDescription[number] : "";
  const pokemonScreen = isOn
    ? "assets/images/img/pokedex/pokemon/" + pokemonList[number] + ".jpg"
    : "";

  function handleOnButtonClick() {
    setIsOn(!isOn);
  }

  function handlePlusPokemonClick() {
    if (number === 150) {
      setNumber(0);
    } else {
      setNumber((number) => number + 1);
    }
  }

  function handleMinusPokemonClick() {
    if (number === 0) {
      setNumber(150);
    } else {
      setNumber((number) => number - 1);
    }
  }

  function handleChange(e) {
    setNumber(parseInt(e.target.value) - 1);
  }

  return (
    <div id="body">
      <div id="pokedex">
        <div id="left">
          <div id="top-left"></div>
          <div id="top-left1">
            <div id="glass-button">
              <div id="reflect"></div>
            </div>
            <div id="top-buttons">
              <div id="top-button-red"></div>
              <div id="top-button-yellow"></div>
              <div id="top-button-green"></div>
            </div>
          </div>
          <div id="top-left2"></div>
          <div id="logo">
            <img
              src="assets/images/img/pokedex/logo-pokemon.png"
              alt="logo pokedex"
            />
          </div>
          <div id="border-screen">
            <div id="button-top1"></div>
            <div id="button-top2"></div>
            <div id="button-bottom"></div>
            <p className="selectDisable">&equiv;&equiv;</p>
          </div>
          <div id="screen">
            <img className="selectDisable" src={pokemonScreen} alt="" />
          </div>
          <div id="triangle"></div>
          <div id="blue-button-left" onClick={handleOnButtonClick}></div>
          <div id="green-button-left"></div>
          <div id="orange-button-left"></div>
          <div id="square-button-left">
            <input
              id="nb"
              type="text"
              name="howmuch"
              value={isOn ? number + 1 : ""}
              onChange={handleChange}
            />
          </div>
          <div id="cross">
            <div id="mid-cross">
              <div id="mid-circle"></div>
            </div>
            <div id="top-cross">
              <div id="upC"></div>
            </div>
            <div id="right-cross">
              <div id="rightC"></div>
            </div>
            <div id="bot-cross">
              <div id="downC"></div>
            </div>
            <div id="left-cross">
              <div id="leftC"></div>
            </div>
          </div>
        </div>
        <div id="middle">
          <div id="hinge1"></div>
          <div id="hinge2"></div>
          <div id="hinge3"></div>
        </div>
        <div id="right">
          <div id="info-screen">
            <p id="info-screen-heading">{pokemonTextHeading}</p>
            <p id="info-screen-body">{pokemonTextBody}</p>
          </div>
          <div id="keyboard">
            <div className="key"></div>
            <div className="key"></div>
            <div className="key"></div>
            <div className="key"></div>
            <div className="key"></div>
            <div className="key"></div>
            <div className="key"></div>
            <div className="key"></div>
            <div className="key"></div>
            <div className="key"></div>
          </div>
          <div id="leaf-button-right"></div>
          <div id="yellow-button-right"></div>
          <div id="green-button-right"></div>
          <div id="orange-button-right"></div>
          <div id="left-cross-button" onClick={handleMinusPokemonClick}>
            <div id="leftT"></div>
          </div>
          <div id="right-cross-button" onClick={handlePlusPokemonClick}>
            <div id="rightT"></div>
          </div>
          <div id="cross-button">
            <div id="left-red-cross"></div>
          </div>
          <div id="square-button-right1"></div>
          <div id="square-button-right2"></div>
        </div>
        <div id="top-right1"></div>
        <div id="top-right2"></div>
      </div>
    </div>
  );
};

export default Pokedex;

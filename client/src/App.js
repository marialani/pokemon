import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import Layout from "./Layout";
// import Header from "./components/Header";
import Homepage from "./pages/Homepage";
// import Login from "./components/Login";
import Error404 from "./pages/Error404";
// import FAQ from "./pages/FAQ";
import paths from "./constants/paths";
import theme from "./theme";
// import Footer from "./components/Footer";
import Explore from "./pages/Explore";
import GameBoyIntro from "./pages/GameBoyIntro";

import "./App.css";
import TradingCards from "./pages/TradingCards";
import PokemonBattle from "./pages/PokemonBattle";
import PokemonQuest from "./pages/PokemonQuest";
import Pokedex from "./pages/Pokedex/Pokedex";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route path={paths.home} exact>
            <Homepage />
          </Route>
          <Layout style={{ minHeight: "100%" }}>
            <Route path={paths.explore} exact>
              <Explore />
            </Route>
            <Route path={paths.tradingCards} exact>
              <TradingCards />
            </Route>
            <Route path={paths.enter} exact>
              <GameBoyIntro />
            </Route>
            <Route path={paths.pokemonBattle} exact>
              <PokemonBattle />
            </Route>
            <Route path={paths.pokemonQuest} exact>
              <PokemonQuest />
            </Route>
            <Route path={paths.pokedex} exact>
              <Pokedex />
            </Route>
            <Route path={paths.error404}>
              <Error404 />
            </Route>
            {/* <Redirect to={paths.error404} /> */}
          </Layout>
        </Switch>
        {/* <Footer /> */}
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

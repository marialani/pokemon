// import React from "react";
import React, { lazy, Suspense } from "react";
import Loading from "./components/Loading";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import "./App.css";
import Layout from "./Layout";
// pages
import Homepage from "./pages/Homepage";
import Error404 from "./pages/Error404";
import paths from "./constants/paths";
import theme from "./theme";
import Explore from "./pages/Explore";
import PokemonBattle from "./pages/PokemonBattle";
import PokemonQuest from "./pages/PokemonQuest";
import Pokedex from "./pages/Pokedex/Pokedex";
import CardMatch from "./pages/CardMatch";
import WhosThatPokemon from "./pages/WhosThatPokemon";
const TradingCards = lazy(() => import("./pages/TradingCards"));
const GameBoyIntro = lazy(() => import("./pages/GameBoyIntro"));

// apollo client setup
const client = new ApolloClient({
  uri: "/graphql",
});

// client
//   .query({
//     query: gql`
//       {
//         rates(currency: "USD") {
//           currency
//         }
//       }
//     `,
//   })
//   .then((result) => console.log(result));

function App() {
  return (
    <ApolloProvider client={client}>
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
                <Suspense
                  fallback={
                    <Loading
                      image="assets/images/loading/HomepageLoading.gif"
                      background="black"
                      width="100%"
                    />
                  }
                >
                  <TradingCards />
                </Suspense>
              </Route>
              <Route path={paths.cardMatch} exact>
                <CardMatch />
              </Route>
              <Route path={paths.whosThatPokemon} exact>
                <WhosThatPokemon />
              </Route>
              <Route path={paths.enter} exact>
                <Suspense
                  fallback={
                    <Loading
                      // image="assets/images/loading/HomepageLoading.gif"
                      background="black"
                      width="100%"
                    />
                  }
                >
                  <GameBoyIntro />
                </Suspense>
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
        </BrowserRouter>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;

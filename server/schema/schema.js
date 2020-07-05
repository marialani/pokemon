const graphql = require("graphql");
const PokemonDataEntry = require("../models/pokemonDataEntry");
const EvolutionDataEntry = require("../models/evolutionDataEntry");

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLBoolean,
  GraphQLNonNull,
} = graphql;

// Define types, define relationships, define root queries
const PokemonType = new GraphQLObjectType({
  name: "Pokemon",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    weight: { type: GraphQLString },
    front_image: { type: GraphQLString },
    back_image: { type: GraphQLString },
    moves: { type: GraphQLString },
    type: { type: GraphQLString },
    //ADD FIELDS
    evolution: {
      type: PokemonType,
      resolve(parent, args) {
        _evolution_, { names: names.includes(parent.name) };
      },
    },
  }),
});

const PokemonEvolutionType = new GraphQLObjectType({
  name: "Evolution",
  fields: () => ({
    id: { type: GraphQLID },
    names: { type: GraphQLString },
  }),
});

// Root Queries
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    singlePokemon: {
      type: PokemonType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // code to get data from db
        return args.id; // use this to query db
      },
    },
  },
  allPokemon: {
    type: new GraphQLList(PokemonType),
    resolve(parent, args) {
      return allPokemon;
    },
  },
});

const Mutations = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addPokemon: {
      type: PokemonType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        weight: { type: new GraphQLNonNull(GraphQLString) },
        front_image: { type: new GraphQLNonNull(GraphQLString) },
        back_image: { type: new GraphQLNonNull(GraphQLString) },
        moves: { type: new GraphQLNonNull(GraphQLString) },
        type: { type: new GraphQLNonNull(GraphQLString) },
      },
      // let newPokemon = new PokemonDataEntry({

      // })
    },
    // addScore: {
    // type:
    //   args: {
    //     score: { type: GraphQLString },
    //     result: { type: GraphQLBoolean },
    //   },
    //   resolve(parent, args) {
    //     let author = new singlepokemon({
    //       name: args.name,
    //       age: args.name,
    //     });
    //     author.save();
    //   },
    // },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutations,
});

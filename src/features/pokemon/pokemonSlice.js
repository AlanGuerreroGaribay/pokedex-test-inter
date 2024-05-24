import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPokemonList = createAsyncThunk("pokemon/List", async () => {
  const response = await axios.get(
    "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=150"
  );
  return response.data;
});

export const fetchPokemon = createAsyncThunk("pokemon/ID", async (id) => {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  return response.data;
});

export const fetchPokeBall = createAsyncThunk("pokeball", async () => {
  const response = await axios.get("https://pokeapi.co/api/v2/item/4/");
  return response.data;
});

const initialState = {
  success: null,
  pokemondata: null,
  pokeball: null,
};

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    cleanPokemon: (state) => {
      state.pokemondata = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemonList.fulfilled, (state, action) => {
        state.loading = false;
        state.success = action.payload;
      })
      .addCase(fetchPokemon.fulfilled, (state, action) => {
        state.pokemondata = action.payload;
      })
      .addCase(fetchPokeBall.fulfilled, (state, action) => {
        state.pokeball = action.payload;
      });
  },
});

export const { cleanPokemon } = pokemonSlice.actions;

export default pokemonSlice.reducer;

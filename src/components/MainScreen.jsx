import { useDispatch } from "react-redux";
import { fetchPokemonList } from "../features/pokemon/pokemonSlice";
import { useEffect } from "react";
import PokemonList from "./PokemonList";

const MainScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemonList());
  }, [dispatch]);

  return (
    <>
      <PokemonList />
    </>
  );
};

export default MainScreen;

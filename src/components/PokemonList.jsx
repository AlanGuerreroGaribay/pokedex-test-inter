import {
  fetchPokemon,
  fetchPokemonList,
  fetchPokeBall,
} from "../features/pokemon/pokemonSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const PokemonList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const pokeBall = useSelector((state) => state.pokemon.pokeball);
  const pokemon = useSelector((state) => state.pokemon.pokemondata);
  const pokemonList = useSelector((state) => state.pokemon.success);
  const [image, setImage] = useState("");
  const [currentPage, setCurrentPage] = useState();
  const [selected, setSelected] = useState("");

  const handlePokemonSelectImage = (url) => {
    const dividedString = url.split("/");
    const id = dividedString[dividedString.length - 2];
    dispatch(fetchPokemon(id));
    setSelected(url);
  };

  const handlePaginator = (index) => {
    if (index) {
      setCurrentPage(index);
    } else {
      setCurrentPage(1);
    }
  };

  const handleDoubleClickNavigation = (url) => {
    const dividedString = url.split("/");
    const id = dividedString[dividedString.length - 2];
    navigate(`pokemon-detail/${id}`, { state: { pokemon: pokemon } });
  };

  const handleNavigationNext = (currentIndex) => {
    if (currentIndex >= pokemonList.results.length / 20) {
      return;
    } else {
      setCurrentPage(currentPage + 1);
      navigate(`pokemon-group/${currentPage + 1}`);
    }
  };

  const handleNavigationPrevious = (currentIndex) => {
    if (currentIndex === 1) {
      return;
    }
    if (currentIndex === 2) {
      navigate("/");
      return;
    } else {
      setCurrentPage(currentPage - 1);
      navigate(`pokemon-group/${currentPage - 1}`);
    }
  };

  useEffect(() => {
    if (!pokemonList) {
      dispatch(fetchPokemonList());
      dispatch(fetchPokeBall());
    }
    if (pokemon) {
      setImage(pokemon?.sprites?.front_default);
    } else {
      setImage(pokeBall?.sprites?.default);
    }

    handlePaginator(parseInt(params.group));
  }, [pokemon, pokemonList, pokeBall, params, dispatch]);

  console.log('this nutz', pokemonList?.results?.length);

  return (
    <div className="flex h-full">
      {/* renderiza la imagen del pokemon seleccionado */}
      <div className="w-1/2 flex items-center justify-center">
        <img
          src={image}
          className="m-auto w-[80%] h-[90%] p-4 bg-slate-200 rounded-xl shadow-2xl"
        />
      </div>

      {/* denderiza la lista de pokemones */}
      <div className="w-1/2 flex flex-col justify-center">
        <div className="grid grid-cols-2">
          {pokemonList?.results
            ?.slice((currentPage - 1) * 20, currentPage * 20)
            .map((pokemon, i) => {
              return (
                <div
                  key={`pokemon-data-id-${i}`}
                  onDoubleClick={() => {
                    handleDoubleClickNavigation(pokemon.url);
                  }}
                >
                  <div
                    className={`p-2 w-[80%] ${
                      selected !== pokemon.url
                        ? "bg-white text-black"
                        : "bg-blue-700 text-white"
                    } m-2 rounded-lg text-center active:opacity-35`}
                    onClick={() => handlePokemonSelectImage(pokemon.url)}
                  >
                    {pokemon.name}
                  </div>
                </div>
              );
            })}
        </div>

        {/* contenedor con los botones para navegacion */}
        <div className="flex">
          <button
            disabled={currentPage === 1}
            onClick={() => {
              handleNavigationPrevious(currentPage);
            }}
            className="mr-3 my-9 p-4 bg-slate-600 rounded-lg active:opacity-35 disabled:bg-slate-500 disabled:pointer-events-none select-none"
          >
            Previous
          </button>
          <button
            disabled={currentPage >= pokemonList?.results?.length / 20}
            onClick={() => {
              handleNavigationNext(currentPage);
            }}
            className="mr-3 my-9 p-4 bg-slate-600 rounded-lg active:opacity-35 disabled:bg-slate-500 disabled:pointer-events-none select-none"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default PokemonList;

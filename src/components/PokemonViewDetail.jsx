import { useLocation, useNavigate } from "react-router-dom";
import { cleanPokemon } from "../features/pokemon/pokemonSlice";
import { useDispatch } from "react-redux";

const PokemonViewDetail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const pokemonDataDetail = useLocation();
  const pokemondata = pokemonDataDetail.state.pokemon;
  const pokemonDataImage = pokemondata.sprites.front_default;
  const pokemonDataAbilities = pokemondata.abilities;
  const pokemonDataMoves = pokemondata?.moves.slice(0, 10);

  const handlerBackNavigation = () => {
    dispatch(cleanPokemon());
    navigate(-1);
  };
  console.log(pokemonDataDetail.state.pokemon.moves[0].move.name);
  return (
    <div className="flex h-full">
      <div className="w-1/2 flex items-center justify-center">
        <img
          src={pokemonDataImage}
          className="m-auto w-[80%] h-[90%] p-4 bg-slate-200 rounded-xl shadow-2xl"
        />
      </div>
      <div className="w-1/2 flex flex-col ">
        <label className="text-2xl font-extrabold mt-10">
          Name: {pokemondata.name}
        </label>
        <div className=" flex flex-col mt-5">
          <label className="ml-3">
            Base Experience: {pokemondata.base_experience}
          </label>
          <label className="ml-3">Weight: {pokemondata.weight} lbs</label>
          <label className="ml-3">Height: {pokemondata.height} ft</label>
          <label className="ml-3">
            Type:{" "}
            {pokemondata.types.map((type) => {
              return `${type.type.name} `;
            })}
          </label>
        </div>
        <div className="flex flex-col my-4">
          <div className="text-2xl font-extrabold mt-10">Abilities:</div>
          {pokemonDataAbilities.map((ability, i) => {
            return (
              <>
                <div key={i} className="ml-3">
                  ability {i + 1}: {ability.ability.name}
                </div>
              </>
            );
          })}
        </div>
        <div className="flex flex-col my-4">
          <div className="text-2xl font-extrabold mt-10">Moves:</div>
          {pokemonDataMoves.map((move, i) => {
            return (
              <>
                <div key={i} className="ml-3">
                  ability {i + 1}: {move.move.name}
                </div>
              </>
            );
          })}
        </div>
        <div>
          <button
            className="mr-3 my-9 p-4 bg-slate-600 rounded-lg active:opacity-35"
            onClick={() => {
              handlerBackNavigation();
            }}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default PokemonViewDetail;

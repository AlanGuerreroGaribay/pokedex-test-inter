import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { act, render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import userEvent from "@testing-library/user-event";
import PokemonList from "../PokemonList";
import "@testing-library/jest-dom";
import { click } from "@testing-library/user-event/dist/cjs/convenience/click.js";

// Create a mock store
const mockStore = configureMockStore();
const store = mockStore({
  pokemon: {
    pokemonData: {sprites: {default: 'asdf', front_default: 'asdfkljas'}},
    success: {
      results: [
        {
          name: "bulbasaur",
          url: "https://pokeapi.co/api/v2/pokemon/1/",
        },
        {
          name: "ivysaur",
          url: "https://pokeapi.co/api/v2/pokemon/2/",
        },
        {
          name: "venusaur",
          url: "https://pokeapi.co/api/v2/pokemon/3/",
        },
        {
          name: "charmander",
          url: "https://pokeapi.co/api/v2/pokemon/4/",
        },
        {
          name: "charmeleon",
          url: "https://pokeapi.co/api/v2/pokemon/5/",
        },
        {
          name: "charizard",
          url: "https://pokeapi.co/api/v2/pokemon/6/",
        },
        {
          name: "squirtle",
          url: "https://pokeapi.co/api/v2/pokemon/7/",
        },
        {
          name: "wartortle",
          url: "https://pokeapi.co/api/v2/pokemon/8/",
        },
        {
          name: "blastoise",
          url: "https://pokeapi.co/api/v2/pokemon/9/",
        },
        {
          name: "caterpie",
          url: "https://pokeapi.co/api/v2/pokemon/10/",
        },
        {
          name: "metapod",
          url: "https://pokeapi.co/api/v2/pokemon/11/",
        },
        {
          name: "butterfree",
          url: "https://pokeapi.co/api/v2/pokemon/12/",
        },
        {
          name: "weedle",
          url: "https://pokeapi.co/api/v2/pokemon/13/",
        },
        {
          name: "kakuna",
          url: "https://pokeapi.co/api/v2/pokemon/14/",
        },
        {
          name: "beedrill",
          url: "https://pokeapi.co/api/v2/pokemon/15/",
        },
        {
          name: "pidgey",
          url: "https://pokeapi.co/api/v2/pokemon/16/",
        },
        {
          name: "pidgeotto",
          url: "https://pokeapi.co/api/v2/pokemon/17/",
        },
        {
          name: "pidgeot",
          url: "https://pokeapi.co/api/v2/pokemon/18/",
        },
        {
          name: "rattata",
          url: "https://pokeapi.co/api/v2/pokemon/19/",
        },
        {
          name: "raticate",
          url: "https://pokeapi.co/api/v2/pokemon/20/",
        },
        {
          name: "spearow",
          url: "https://pokeapi.co/api/v2/pokemon/21/",
        },
        {
          name: "fearow",
          url: "https://pokeapi.co/api/v2/pokemon/22/",
        },
        {
          name: "ekans",
          url: "https://pokeapi.co/api/v2/pokemon/23/",
        },
        {
          name: "arbok",
          url: "https://pokeapi.co/api/v2/pokemon/24/",
        },
        {
          name: "pikachu",
          url: "https://pokeapi.co/api/v2/pokemon/25/",
        },
        {
          name: "raichu",
          url: "https://pokeapi.co/api/v2/pokemon/26/",
        },
        {
          name: "sandshrew",
          url: "https://pokeapi.co/api/v2/pokemon/27/",
        },
        {
          name: "sandslash",
          url: "https://pokeapi.co/api/v2/pokemon/28/",
        },
        {
          name: "nidoran-f",
          url: "https://pokeapi.co/api/v2/pokemon/29/",
        },
        {
          name: "nidorina",
          url: "https://pokeapi.co/api/v2/pokemon/30/",
        },
        {
          name: "nidoqueen",
          url: "https://pokeapi.co/api/v2/pokemon/31/",
        },
        {
          name: "nidoran-m",
          url: "https://pokeapi.co/api/v2/pokemon/32/",
        },
        {
          name: "nidorino",
          url: "https://pokeapi.co/api/v2/pokemon/33/",
        },
        {
          name: "nidoking",
          url: "https://pokeapi.co/api/v2/pokemon/34/",
        },
        {
          name: "clefairy",
          url: "https://pokeapi.co/api/v2/pokemon/35/",
        },
        {
          name: "clefable",
          url: "https://pokeapi.co/api/v2/pokemon/36/",
        },
        {
          name: "vulpix",
          url: "https://pokeapi.co/api/v2/pokemon/37/",
        },
        {
          name: "ninetales",
          url: "https://pokeapi.co/api/v2/pokemon/38/",
        },
        {
          name: "jigglypuff",
          url: "https://pokeapi.co/api/v2/pokemon/39/",
        },
        {
          name: "wigglytuff",
          url: "https://pokeapi.co/api/v2/pokemon/40/",
        },
        {
          name: "zubat",
          url: "https://pokeapi.co/api/v2/pokemon/41/",
        },
        {
          name: "golbat",
          url: "https://pokeapi.co/api/v2/pokemon/42/",
        },
        {
          name: "oddish",
          url: "https://pokeapi.co/api/v2/pokemon/43/",
        },
        {
          name: "gloom",
          url: "https://pokeapi.co/api/v2/pokemon/44/",
        },
        {
          name: "vileplume",
          url: "https://pokeapi.co/api/v2/pokemon/45/",
        },
        {
          name: "paras",
          url: "https://pokeapi.co/api/v2/pokemon/46/",
        },
        {
          name: "parasect",
          url: "https://pokeapi.co/api/v2/pokemon/47/",
        },
        {
          name: "venonat",
          url: "https://pokeapi.co/api/v2/pokemon/48/",
        },
        {
          name: "venomoth",
          url: "https://pokeapi.co/api/v2/pokemon/49/",
        },
        {
          name: "diglett",
          url: "https://pokeapi.co/api/v2/pokemon/50/",
        },
        {
          name: "dugtrio",
          url: "https://pokeapi.co/api/v2/pokemon/51/",
        },
        {
          name: "meowth",
          url: "https://pokeapi.co/api/v2/pokemon/52/",
        },
        {
          name: "persian",
          url: "https://pokeapi.co/api/v2/pokemon/53/",
        },
        {
          name: "psyduck",
          url: "https://pokeapi.co/api/v2/pokemon/54/",
        },
        {
          name: "golduck",
          url: "https://pokeapi.co/api/v2/pokemon/55/",
        },
        {
          name: "mankey",
          url: "https://pokeapi.co/api/v2/pokemon/56/",
        },
        {
          name: "primeape",
          url: "https://pokeapi.co/api/v2/pokemon/57/",
        },
        {
          name: "growlithe",
          url: "https://pokeapi.co/api/v2/pokemon/58/",
        },
        {
          name: "arcanine",
          url: "https://pokeapi.co/api/v2/pokemon/59/",
        },
        {
          name: "poliwag",
          url: "https://pokeapi.co/api/v2/pokemon/60/",
        },
        {
          name: "poliwhirl",
          url: "https://pokeapi.co/api/v2/pokemon/61/",
        },
        {
          name: "poliwrath",
          url: "https://pokeapi.co/api/v2/pokemon/62/",
        },
        {
          name: "abra",
          url: "https://pokeapi.co/api/v2/pokemon/63/",
        },
        {
          name: "kadabra",
          url: "https://pokeapi.co/api/v2/pokemon/64/",
        },
        {
          name: "alakazam",
          url: "https://pokeapi.co/api/v2/pokemon/65/",
        },
        {
          name: "machop",
          url: "https://pokeapi.co/api/v2/pokemon/66/",
        },
        {
          name: "machoke",
          url: "https://pokeapi.co/api/v2/pokemon/67/",
        },
        {
          name: "machamp",
          url: "https://pokeapi.co/api/v2/pokemon/68/",
        },
        {
          name: "bellsprout",
          url: "https://pokeapi.co/api/v2/pokemon/69/",
        },
      ],
    },
    pokeball: {
      attributes: [
        {
          name: "countable",
          url: "https://pokeapi.co/api/v2/item-attribute/1/",
        },
      ],
    },
  },
});

describe("test", () => {
  test("test", async () => {
    // Arrange
    const wrapper = render(
      <Provider store={store}>
        <Router>
          <PokemonList />
        </Router>
      </Provider>
    );

    // Assert
    expect(await screen.findByText("bulbasaur")).toBeVisible();

    // Cleanup
    wrapper.unmount();
  });
});

describe("El boton de previous esta desactivado al inicio", () => {
  test("el boton esta desactivado al inicio", async () => {
    // Arrange
    const wrapper = render(
      <Provider store={store}>
        <Router>
          <PokemonList />
        </Router>
      </Provider>
    );

    // Assert
    expect(await screen.findByText("Previous")).toBeDisabled();

    // Cleanup
    wrapper.unmount();
  });
  test("el boton esta activado al inicio", async () => {
    // Arrange
    const wrapper = render(
      <Provider store={store}>
        <Router>
          <PokemonList />
        </Router>
      </Provider>
    );

    // Assert
    expect(await screen.findByText("Next")).toBeEnabled();

    // Cleanup
    wrapper.unmount();
  });
  test("el boton esta desactivado al final", async () => {
    // Arrange
    const wrapper = render(
      <Provider store={store}>
        <Router>
          <PokemonList />
        </Router>
      </Provider>
    );

    const buttonNext = await screen.findByText("Next");
    const imageBulbasaur = await screen.findByText("bulbasaur");

    // Assert
    expect(buttonNext).toBeEnabled();
    expect(await screen.findByRole("img")).toHaveAttribute(
      "src",
      "https://pokeapi.co/api/v2/item/4/"
    );
    userEvent.click(imageBulbasaur);
    expect((await screen.findByRole("img")).getAttribute("src")).toContain(
      "pokemon/1"
    );

    // Cleanup
    wrapper.unmount();
  });
});

//El boton de previous esta desactivado al inicio
//El boton de next esta desactivado al final
//que los botones esten activos al medio
//al clickear sobre un pokemon que muestre la imagen
//al clickear dos veces muestre la info de detalle del pokemon

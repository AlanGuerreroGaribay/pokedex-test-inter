import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainScreen from "./components/MainScreen";
import PokemonList from "./components/PokemonList";
import PokemonViewDetail from "./components/PokemonViewDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainScreen />,
    children: [
      {
        path: "pokemon-group/:group",
        element: <PokemonList />,
      },
    ],
  },
  {
    path: "/pokemon-detail/:id",
    element: <PokemonViewDetail />,
  },
]);

function App() {
  return (
    <RouterProvider router={router}>
      <MainScreen />
    </RouterProvider>
  );
}

export default App;

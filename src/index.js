import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { FiltersProvider } from "./context/FiltersContext.tsx";
import { PokemonProvider } from "./context/PokemonContext.tsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <FiltersProvider>
        <PokemonProvider>
            <App />
        </PokemonProvider>
    </FiltersProvider>
);

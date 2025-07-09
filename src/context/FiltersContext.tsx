import React, { createContext, useState } from 'react';

const emptyFilters = { name: "", type: "", pokedexNumber: "" };

type Filters = { name: string; type: string; pokedexNumber: string; };

type FiltersProps = {
    filters: Filters,
    setFilters: (newFilters: Filters) => void;
}

const FiltersContext = createContext<FiltersProps>({
    filters: emptyFilters,
    setFilters: () => {}
});

const FiltersProvider = ({ children }) => {
    const [filters, setFilters] = useState(emptyFilters);
    return (
        <FiltersContext.Provider value={{ filters, setFilters }}>
            {children}
        </FiltersContext.Provider>
    );
}

export { FiltersContext, FiltersProvider };
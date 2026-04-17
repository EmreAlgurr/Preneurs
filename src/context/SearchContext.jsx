import { createContext, useContext, useState } from 'react';

const SearchContext = createContext(null);

export function SearchProvider({ children }) {
  const [searchParams, setSearchParams] = useState({
    from: '',
    to: '',
    date: '',
  });
  const [searchResults, setSearchResults] = useState(null);

  function updateSearch(params) {
    setSearchParams(params);
  }

  function clearSearch() {
    setSearchParams({ from: '', to: '', date: '' });
    setSearchResults(null);
  }

  return (
    <SearchContext.Provider
      value={{
        searchParams,
        searchResults,
        updateSearch,
        setSearchResults,
        clearSearch,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const ctx = useContext(SearchContext);
  if (!ctx) throw new Error('useSearch must be used within SearchProvider');
  return ctx;
}

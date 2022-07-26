import React, { createContext, useMemo, useState } from 'react';

export const FilmContext = createContext({
  pageNumber: null,
  setPageNumber: null
});

export const FilmContextProvider = ({ children }) => {
  const [pageNumber, setPageNumber] = useState(1);

  const valueProvider = useMemo(
    () => ({
        pageNumber,
        setPageNumber
    }), [pageNumber, setPageNumber]
  );
  return <FilmContext.Provider value={valueProvider}>{children}</FilmContext.Provider>;
};
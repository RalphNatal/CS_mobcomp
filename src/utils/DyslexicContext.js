import React, { createContext, useContext, useState } from 'react';

const DyslexicContext = createContext();

export const DyslexicProvider = ({ children }) => {

  const [dyslexicEnabled, setDyslexicEnabled] = useState(false);

  return (
    <DyslexicContext.Provider value={{ dyslexicEnabled, setDyslexicEnabled }}>
      {children}
    </DyslexicContext.Provider>
  );
};

export const useDyslexic = () => useContext(DyslexicContext);

import React, { createContext, useState, useContext } from 'react';

export const FontSizeContext = createContext();

export const FontSizeProvider = ({ children }) => {
  const [fontSizeMultiplier, setFontSizeMultiplier] = useState(1);
  return (
    <FontSizeContext.Provider value={{ fontSizeMultiplier, setFontSizeMultiplier }}>
      {children}
    </FontSizeContext.Provider>
  );
};

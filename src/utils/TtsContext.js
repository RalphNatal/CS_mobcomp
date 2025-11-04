import React, { createContext, useContext } from 'react';
import * as Speech from 'expo-speech';

const TtsContext = createContext();

export const TtsProvider = ({ children }) => {
 
  const speak = (text) => {
    if (text) {
      Speech.stop(); // Stop 
      Speech.speak(text, {
        language: 'en-US',
        pitch: 1.0,
        rate: 1.0, 
      });
    }
  };

  return (
    <TtsContext.Provider value={{ speak }}>
      {children}
    </TtsContext.Provider>
  );
};

export const useTts = () => useContext(TtsContext);

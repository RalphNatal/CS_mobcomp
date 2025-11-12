import React, { createContext, useContext, useState } from 'react';
import * as Speech from 'expo-speech';

const TtsContext = createContext();

export const TtsProvider = ({ children }) => {
  const [ttsEnabled, setTtsEnabled] = useState(false);

  const speak = (text) => {
    if (ttsEnabled && text) {
      Speech.stop();
      Speech.speak(text, {
        language: 'en-US',
        pitch: 1.0,
        rate: 1.0,
      });
    }
  };

  return (
    <TtsContext.Provider value={{ speak, ttsEnabled, setTtsEnabled }}>
      {children}
    </TtsContext.Provider>
  );
};

export const useTts = () => useContext(TtsContext);

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTts } from '../utils/TtsContext';

export default function SpeakableText({ children, style, ttsEnabled = true }) {  // default true
  const { speak } = useTts();

  const textToSpeak = typeof children === 'string'
    ? children
    : (Array.isArray(children)
      ? children.join(' ')
      : String(children));

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap' }}>
      <Text style={[style, { flexShrink: 1 }]}>{children}</Text>
      {ttsEnabled && (
        <TouchableOpacity
          onPress={() => speak(textToSpeak)}
          accessibilityLabel="Speak text"
          style={{ marginLeft: 8 }}
        >
          <Ionicons name="volume-high" size={18} color="#007AFF" />
        </TouchableOpacity>
      )}
    </View>
  );
}

import React, { useRef } from 'react';
import { View, Text, PanResponder } from 'react-native';
import SpeakableText from './SpeakableText';

export function SimpleSlider({ value, onValueChange, min = 0.8, max = 1.5, step = 0.05, theme }) {
  const width = 190;
  const trackHeight = 10;
  const thumbSize = 26;
  const padding = 14;

  const pan = useRef({
    startX: 0,
    startValue: value,
  });

  const clamp = (v) => Math.max(min, Math.min(max, v));

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderGrant: (_, gesture) => {
      pan.current.startX = gesture.x0;
      pan.current.startValue = value;
    },
    onPanResponderMove: (_, gesture) => {
      let dx = gesture.moveX - pan.current.startX;
      let percent = dx / (width - thumbSize);
      let newValue = clamp(pan.current.startValue + (max - min) * percent);
      newValue = Math.round(newValue / step) * step;
      onValueChange(clamp(newValue));
    },
  });

  // Clamp thumb position to always be inside the track
  let percent = (value - min) / (max - min);
  percent = Math.max(0, Math.min(1, percent));
  let thumbX = percent * (width - thumbSize);

  // Dynamic font sizes for bonus responsiveness
  const baseLabelFontSize = 14;
  const labelScale = 20;
  const labelFontSize = baseLabelFontSize + percent * labelScale;
  const titleFontSize = 16 + percent * 10;
  const currentValueFontSize = 16 + percent * 10;

  return (
    <View style={{
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: theme?.colors?.card ?? "#fff",
      padding: padding,
      borderRadius: 12,
      marginBottom: 10,
      elevation: 2,
      shadowColor: "#000",
      shadowOpacity: 0.05,
      shadowRadius: 4,
    }}>
      <View style={{ flex: 1 }}>
        <SpeakableText style={{
          fontSize: titleFontSize,
          fontWeight: '600',
          color: theme?.colors?.text ?? "#222",
          marginBottom: 12,
        }}>
          Adjust Font Size
        </SpeakableText>
        <View style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between"
        }}>
          <SpeakableText style={{
            fontSize: labelFontSize,
            color: theme?.colors?.text ?? "#222",
            width: 36,
            textAlign: "center"
          }}>
            {min}x
          </SpeakableText>
          <View
            {...panResponder.panHandlers}
            style={{
              width,
              height: trackHeight + thumbSize,
              justifyContent: "center",
              position: "relative",
              alignItems: "center"
            }}>
            <View
              style={{
                width: width,
                height: trackHeight,
                backgroundColor: "#f0f0f0",
                borderRadius: 5,
                position: "absolute",
                top: (thumbSize - trackHeight) / 2,
              }}
            />
            <View
              style={{
                position: 'absolute',
                left: thumbX,
                top: 0,
                width: thumbSize,
                height: thumbSize,
                borderRadius: thumbSize / 2,
                backgroundColor: theme?.colors?.primary ?? "#2196F3",
                borderWidth: 2,
                borderColor: "#fff",
                elevation: 3,
                shadowColor: "#333",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.15,
                shadowRadius: 2,
              }}
            />
          </View>
          <SpeakableText style={{
            fontSize: labelFontSize,
            color: theme?.colors?.text ?? "#222",
            width: 36,
            textAlign: "center"
          }}>
            {max}x
          </SpeakableText>
        </View>
        <Text style={{
          marginTop: 10,
          fontSize: currentValueFontSize,
          color: theme?.colors?.primary ?? "#2196F3",
          fontWeight: "bold",
        }}>
          {value.toFixed(2)}x
        </Text>
      </View>
    </View>
  );
}

// The slider itself is made with AI, there's no slider that is Expo Go supported only in EAS and ReactNative 

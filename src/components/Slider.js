import React, { useRef } from 'react';
import { View, Text, PanResponder } from 'react-native';
import { useDyslexic } from '../utils/DyslexicContext';
import SpeakableText from './SpeakableText';
import { useTts } from '../utils/TtsContext';

// SimpleSlider component for adjusting font size with pan gesture.
export function SimpleSlider({ value, onValueChange, min = 0.8, max = 1.5, step = 0.05, theme }) {
  // Dimensions and UI constants for the slider
  const width = 190;
  const trackHeight = 10;
  const thumbSize = 26;
  const padding = 14;

  // Context hooks for dyslexic font toggle and TTS
  const { dyslexicEnabled } = useDyslexic();
  const { ttsEnabled } = useTts();

  // Ref for tracking gesture start position and initial value
  const pan = useRef({
    startX: 0,
    startValue: value,
  });

  // Clamp value to min and max bounds
  const clamp = (v) => Math.max(min, Math.min(max, v));

  // Setup pan responder to handle dragging of the thumb
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderGrant: (_, gesture) => {
      pan.current.startX = gesture.x0;
      pan.current.startValue = value;
    },
    onPanResponderMove: (_, gesture) => {
      const dx = gesture.moveX - pan.current.startX;
      const percent = dx / (width - thumbSize);
      let newValue = clamp(pan.current.startValue + (max - min) * percent);
      newValue = Math.round(newValue / step) * step; // Ensure snapping to step
      onValueChange(clamp(newValue));
    },
  });

  // Calculate thumb position based on current value
  let percent = (value - min) / (max - min);
  percent = Math.max(0, Math.min(1, percent));
  const thumbX = percent * (width - thumbSize);

  // Font sizes scale dynamically with slider value
  const baseLabelFontSize = 14;
  const labelScale = 20;
  const labelFontSize = baseLabelFontSize + percent * labelScale;
  const titleFontSize = 16 + percent * 10;
  const currentValueFontSize = 16 + percent * 10;

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: theme?.colors?.card ?? '#fff',
        padding: padding,
        borderRadius: 12,
        marginBottom: 10,
        elevation: 2,
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowRadius: 4,
      }}
    >
      <View style={{ flex: 1 }}>
        {/* Title with TTS and dyslexic font support */}
        <SpeakableText
          style={{
            fontSize: titleFontSize,
            fontWeight: '600',
            color: theme?.colors?.text ?? '#222',
            marginBottom: 12,
            fontFamily: dyslexicEnabled ? 'OpenDyslexic' : undefined,
          }}
          ttsEnabled={ttsEnabled}
        >
          Adjust Font Size
        </SpeakableText>

        {/* Labels and slider track */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Minimum font size label */}
          <SpeakableText
            style={{
              fontSize: labelFontSize,
              color: theme?.colors?.text ?? '#222',
              width: 36,
              textAlign: 'center',
              fontFamily: dyslexicEnabled ? 'OpenDyslexic' : undefined,
            }}
            ttsEnabled={ttsEnabled}
          >
            {min}x
          </SpeakableText>

          {/* Slider track and draggable thumb */}
          <View
            {...panResponder.panHandlers}
            style={{
              width,
              height: trackHeight + thumbSize,
              justifyContent: 'center',
              position: 'relative',
              alignItems: 'center',
            }}
          >
            {/* Track background */}
            <View
              style={{
                width: width,
                height: trackHeight,
                backgroundColor: '#f0f0f0',
                borderRadius: 5,
                position: 'absolute',
                top: (thumbSize - trackHeight) / 2,
              }}
            />
            {/* Thumb */}
            <View
              style={{
                position: 'absolute',
                left: thumbX,
                top: 0,
                width: thumbSize,
                height: thumbSize,
                borderRadius: thumbSize / 2,
                backgroundColor: theme?.colors?.primary ?? '#2196F3',
                borderWidth: 2,
                borderColor: '#fff',
                elevation: 3,
                shadowColor: '#333',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.15,
                shadowRadius: 2,
              }}
            />
          </View>

          {/* Maximum font size label */}
          <SpeakableText
            style={{
              fontSize: labelFontSize,
              color: theme?.colors?.text ?? '#222',
              width: 36,
              textAlign: 'center',
              fontFamily: dyslexicEnabled ? 'OpenDyslexic' : undefined,
            }}
            ttsEnabled={ttsEnabled}
          >
            {max}x
          </SpeakableText>
        </View>

        {/* Current value display */}
        <Text
          style={{
            marginTop: 10,
            fontSize: currentValueFontSize,
            color: theme?.colors?.primary ?? '#2196F3',
            fontWeight: 'bold',
            fontFamily: dyslexicEnabled ? 'OpenDyslexic' : undefined,
          }}
        >
          {value.toFixed(2)}x
        </Text>
      </View>
    </View>
  );
}

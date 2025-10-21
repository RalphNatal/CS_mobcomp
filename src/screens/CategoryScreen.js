import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import theme from '../styles/theme';

export default function CategoryScreen({ route, navigation }) {
  const { category } = route.params;

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.background,
        paddingTop: 40,
        paddingHorizontal: 16,
      }}
    >
      {/* Header */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 20,
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={26} color={theme.colors.text} />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '700',
            marginLeft: 10,
            color: theme.colors.text,
          }}
        >
          {category}
        </Text>
      </View>

      {/* Placeholder content */}
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Ionicons name="briefcase-outline" size={60} color={theme.colors.primary} />
        <Text
          style={{
            fontSize: 18,
            fontWeight: '500',
            marginTop: 12,
            color: theme.colors.text,
          }}
        >
          Job listings for {category} coming soon!
        </Text>
      </View>
    </View>
  );
}

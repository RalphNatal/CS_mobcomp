import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import styles from '../../styles/ElectronicsStyles';

const electronicsData = [
  {
    id: '1',
    name: 'TechWorld Electronics',
    description: 'Your one-stop shop for gadgets, accessories, and computers.',
    logo: 'https://via.placeholder.com/80?text=TW',
  },
  {
    id: '2',
    name: 'SmartHub',
    description: 'Quality smartphones and accessories at affordable prices.',
    logo: 'https://via.placeholder.com/80?text=SH',
  },
  {
    id: '3',
    name: 'PowerEdge Supplies',
    description: 'Electronics built for modern innovation.',
    logo: 'https://via.placeholder.com/80?text=PE',
  },
];

export default function ElectronicsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Electronics Companies</Text>
      <FlatList
        data={electronicsData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card}>
            <Image source={{ uri: item.logo }} style={styles.logo} />
            <View style={styles.textContainer}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.desc}>{item.description}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

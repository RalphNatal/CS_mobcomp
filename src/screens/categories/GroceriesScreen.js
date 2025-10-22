import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import styles from '../../styles/GroceriesStyles';

const groceriesData = [
  {
    id: '1',
    name: 'FreshMart',
    description: 'Your daily source of fresh produce and organic goods.',
    logo: 'https://via.placeholder.com/80?text=FM',
  },
  {
    id: '2',
    name: 'GreenBasket',
    description: 'Sustainable groceries delivered to your door.',
    logo: 'https://via.placeholder.com/80?text=GB',
  },
  {
    id: '3',
    name: 'Everyday Essentials',
    description: 'Affordable grocery essentials for your home.',
    logo: 'https://via.placeholder.com/80?text=EE',
  },
];

export default function GroceriesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Grocery Stores</Text>
      <FlatList
        data={groceriesData}
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

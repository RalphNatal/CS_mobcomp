import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import styles from '../../styles/ClothingStyles';

const clothingData = [
  {
    id: '1',
    name: 'UrbanWear Co.',
    description: 'Trendy fashion and streetwear for all occasions.',
    logo: 'https://via.placeholder.com/80?text=UW',
  },
  {
    id: '2',
    name: 'Classic Threads',
    description: 'Modern elegance with timeless style.',
    logo: 'https://via.placeholder.com/80?text=CT',
  },
  {
    id: '3',
    name: 'OutfitLab',
    description: 'Affordable style crafted for comfort.',
    logo: 'https://via.placeholder.com/80?text=OL',
  },
];

export default function ClothingScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Clothing Brands</Text>
      <FlatList
        data={clothingData}
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

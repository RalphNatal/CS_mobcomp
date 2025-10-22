import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import styles from '../../styles/ServicesStyles';

const servicesData = [
  {
    id: '1',
    name: 'QuickFix Services',
    description: 'Professional home repair and maintenance solutions.',
    logo: 'https://via.placeholder.com/80?text=QF',
  },
  {
    id: '2',
    name: 'CleanPlus',
    description: 'Expert cleaning for homes and offices.',
    logo: 'https://via.placeholder.com/80?text=CP',
  },
  {
    id: '3',
    name: 'TechCare Support',
    description: 'IT and computer support for small businesses.',
    logo: 'https://via.placeholder.com/80?text=TC',
  },
];

export default function ServicesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Service Providers</Text>
      <FlatList
        data={servicesData}
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

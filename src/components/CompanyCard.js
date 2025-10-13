import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { companyCardStyles as styles } from '../styles/CompanyCardStyles';

export default function CompanyCard({ company, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View>
        <Text style={styles.name}>{company.name}</Text>
        <Text style={styles.field}>{company.field}</Text>
        <Text style={styles.rating}>⭐ {company.rating}</Text>
      </View>
    </TouchableOpacity>
  );
}

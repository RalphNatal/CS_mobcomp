import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { companyCardStyles as styles } from '../styles/CompanyCardStyles';
import PrimaryButton from './PrimaryButton';

export default function CompanyCard({ company, onPress }) {
  useEffect(() => {
    initializeTts();
  }, []);

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View>
        <Text style={styles.name}>{company.name}</Text>
        <Text style={styles.field}>{company.field}</Text>
        <Text style={styles.rating}>⭐ {company.rating}</Text>
        <PrimaryButton
          title="Speak"
          onPress={() => speakText(`${company.name}, field: ${company.field}, rating: ${company.rating}`)}
          style={{ marginTop: 10 }}
        />
      </View>
    </TouchableOpacity>
  );
}

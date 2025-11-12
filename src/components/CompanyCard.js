import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { companyCardStyles as styles } from '../styles/CompanyCardStyles';
import PrimaryButton from './PrimaryButton';
import { useTts } from '../utils/TtsContext';

export default function CompanyCard({ company, onPress }) {
  const { speak } = useTts();

  const handleSpeak = () => {
    speak(`${company.name}, field: ${company.field}, rating: ${company.rating}`);
  };

  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.85}>
      <View>
        <Text style={styles.name}>{company.name}</Text>
        <Text style={styles.field}>{company.field}</Text>
        <Text style={styles.rating}>⭐ {company.rating}</Text>
        <PrimaryButton
          title="Speak"
          onPress={handleSpeak}
          style={{ marginTop: 10 }}
        />
      </View>
    </TouchableOpacity>
  );
}

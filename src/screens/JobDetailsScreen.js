import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import theme from '../styles/theme';

export default function JobDetailsScreen({ route }) {
  const { company } = route.params || {};

  if (!company) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Company details not available.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{company.name}</Text>
      <Text style={styles.field}>Industry: {company.field}</Text>
      <Text style={styles.rating}>Rating: ⭐ {company.rating}</Text>
      <Text style={styles.desc}>
        {company.name} is a leading company in {company.field}. We value
        skill-based applicants and offer opportunities for TESDA-certified professionals.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: theme.colors.background },
  title: { fontSize: 24, fontWeight: 'bold', color: theme.colors.text, marginBottom: 10 },
  field: { fontSize: 16, color: theme.colors.muted },
  rating: { fontSize: 16, color: theme.colors.primary, marginVertical: 6 },
  desc: { fontSize: 15, lineHeight: 22, color: theme.colors.text, marginTop: 10 },
});

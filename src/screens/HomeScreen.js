
import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import theme from '../styles/theme';

const sampleJobs = [
  { id: '1', title: 'Welding NC II - Trainee', company: 'TESDA Accredited Center', location: 'Manila' },
  { id: '2', title: 'Housekeeping NC II - Job Placement', company: 'Hospitality Firm', location: 'Cebu' },
  { id: '3', title: 'Automotive Servicing NC II - Apprentice', company: 'AutoTech Center', location: 'Davao' },
  { id: '4', title: 'Electrical Installation NC II - Technician', company: 'PowerGrid Co.', location: 'Iloilo' },
];

function JobCard({ item }) {
  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <View style={styles.avatar} />
        <View style={{ flex: 1 }}>
          <Text style={styles.jobTitle}>{item.title}</Text>
          <Text style={styles.meta}>{item.company} • {item.location}</Text>
        </View>
        <TouchableOpacity style={styles.applyBtn}>
          <Text style={styles.applyText}>Apply</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Recommended jobs</Text>

      <View style={styles.searchRow}>
        <TextInput placeholder="Search jobs or skills" style={styles.searchInput} />
      </View>

      <FlatList
        data={sampleJobs}
        keyExtractor={(i) => i.id}
        renderItem={({ item }) => <JobCard item={item} />}
        contentContainerStyle={{ paddingBottom: 60 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.background, padding: 16 },
  header: { fontSize: 20, fontWeight: '700', marginBottom: 12, color: theme.colors.text },
  searchRow: { marginBottom: 12 },
  searchInput: { backgroundColor: theme.colors.card, padding: 12, borderRadius: 12, borderWidth: 1, borderColor: '#E6EEF9' },
  card: { backgroundColor: theme.colors.card, padding: 12, borderRadius: 12, marginBottom: 12, shadowColor: '#000', shadowOpacity: 0.04, shadowRadius: 6, elevation: 2 },
  row: { flexDirection: 'row', alignItems: 'center' },
  avatar: { width: 48, height: 48, borderRadius: 8, backgroundColor: '#E6F4FE', marginRight: 12 },
  jobTitle: { fontWeight: '700', marginBottom: 4 },
  meta: { color: theme.colors.muted, fontSize: 13 },
  applyBtn: { backgroundColor: theme.colors.primary, paddingVertical: 8, paddingHorizontal: 12, borderRadius: 8 },
  applyText: { color: '#fff', fontWeight: '600' },
});

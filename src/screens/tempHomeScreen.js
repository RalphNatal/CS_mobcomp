import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import theme from '../styles/theme';
import { homeStyles as styles } from '../styles/HomeStyles';

export default function HomeScreen({ navigation }) {
  const categories = [
    { name: 'IT & Software', icon: 'laptop' },
    { name: 'Construction', icon: 'engineering' },
    { name: 'Healthcare', icon: 'local-hospital' },
    { name: 'Education', icon: 'school' },
    { name: 'Design', icon: 'brush' },
    { name: 'Marketing', icon: 'campaign' },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.title}>Find a job that suits your skills</Text>
          <Text style={styles.subtitle}>
            Explore certified training and career opportunities.
          </Text>

          <View style={styles.searchContainer}>
            <Ionicons name="search" size={22} color={theme.colors.muted} />
            <TextInput
              placeholder="Search jobs, skills, or companies"
              placeholderTextColor={theme.colors.muted}
              style={styles.searchInput}
            />
            <TouchableOpacity style={styles.searchButton}>
              <Text style={styles.searchButtonText}>Find Job</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Stats Section */}
        <View style={styles.statsContainer}>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>1,245</Text>
            <Text style={styles.statLabel}>Live Jobs</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>812</Text>
            <Text style={styles.statLabel}>Companies</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>4,321</Text>
            <Text style={styles.statLabel}>Applicants</Text>
          </View>
        </View>

        {/* Popular Categories */}
        <Text style={styles.sectionTitle}>Popular Categories</Text>
        <View style={styles.categoriesContainer}>
          {categories.map((cat, index) => (
            <TouchableOpacity
              key={index}
              style={styles.categoryCard}
              activeOpacity={0.8}
              onPress={() => navigation.navigate('CategoryScreen', { category: cat.name })}
            >
              <MaterialIcons
                name={cat.icon}
                size={28}
                color={theme.colors.primary}
              />
              <Text style={styles.categoryName}>{cat.name}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* How Connex Works */}
        <Text style={styles.sectionTitle}>How Connex Works</Text>
        <View style={styles.stepsContainer}>
          {[
            { step: 'Create an Account', icon: 'person-add' },
            { step: 'Upload Your Skills', icon: 'upload-file' },
            { step: 'Find a Job', icon: 'search' },
            { step: 'Apply & Get Hired', icon: 'work' },
          ].map((item, index) => (
            <View key={index} style={styles.stepBox}>
              <MaterialIcons
                name={item.icon}
                size={28}
                color={theme.colors.accent}
              />
              <Text style={styles.stepText}>{item.step}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const localStyles = StyleSheet.create({
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: theme.colors.card,
    elevation: 3,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: theme.colors.text,
  },
});

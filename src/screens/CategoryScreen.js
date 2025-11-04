import React, { useContext } from 'react';
import { View, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { ThemeContext } from '../../App';
import { FontSizeContext } from '../utils/FontSizeContext';
import SpeakableText from '../components/SpeakableText';

const categoryStyles = (theme, fontSizeMultiplier) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    header: {
      padding: 16,
      backgroundColor: theme.colors.card,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.muted,
    },
    backButton: {
      padding: 8,
      marginBottom: 8,
    },
    headerTitle: {
      fontSize: 24 * fontSizeMultiplier,
      fontWeight: 'bold',
      color: theme.colors.text,
    },
    subtitle: {
      fontSize: 14 * fontSizeMultiplier,
      color: theme.colors.muted,
      marginTop: 4,
    },
    companiesList: {
      padding: 16,
    },
    companyCard: {
      flexDirection: 'row',
      padding: 16,
      backgroundColor: theme.colors.card,
      borderRadius: 12,
      marginBottom: 12,
      elevation: 2,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
    },
    companyIcon: {
      width: 48,
      height: 48,
      borderRadius: 24,
      backgroundColor: `${theme.colors.primary}20`,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 12,
    },
    companyInfo: {
      flex: 1,
    },
    companyName: {
      fontSize: 16 * fontSizeMultiplier,
      fontWeight: '600',
      color: theme.colors.text,
      marginBottom: 4,
    },
    companyStats: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    statsText: {
      fontSize: 14 * fontSizeMultiplier,
      color: theme.colors.muted,
    },
    ratingContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 4,
    },
  });

export default function CategoryScreen({ route, navigation }) {
  const { currentTheme } = useContext(ThemeContext);
  const { fontSizeMultiplier } = useContext(FontSizeContext);
  const styles = categoryStyles(currentTheme, fontSizeMultiplier);

  const { category } = route.params || { category: 'Category' };
  const companiesData = {
    'IT & Software': [
      { name: 'TechCorp Solutions', jobs: 12, rating: 4.5 },
      { name: 'Digital Innovations', jobs: 8, rating: 4.2 },
      { name: 'Software Express', jobs: 15, rating: 4.7 },
      { name: 'Cloud Nine Tech', jobs: 20, rating: 4.8 },
      { name: 'Binary Systems', jobs: 10, rating: 4.3 },
      { name: 'CodeCraft Labs', jobs: 17, rating: 4.6 },
      { name: 'Data Dynamics', jobs: 14, rating: 4.4 },
      { name: 'Cyber Solutions', jobs: 9, rating: 4.1 },
      { name: 'AI Ventures', jobs: 22, rating: 4.9 },
      { name: 'Tech Frontier', jobs: 16, rating: 4.5 },
      { name: 'DevOps Pro', jobs: 13, rating: 4.3 },
      { name: 'Smart Systems', jobs: 18, rating: 4.7 },
      { name: 'Future Tech', jobs: 11, rating: 4.4 }
    ],
    'Construction': [
      { name: 'BuildRight Corp', jobs: 6, rating: 4.1 },
      { name: 'Master Builders', jobs: 9, rating: 4.4 },
      { name: 'Construction Pro', jobs: 11, rating: 4.3 },
      { name: 'Urban Developers', jobs: 15, rating: 4.6 },
      { name: 'Steel & Stone', jobs: 8, rating: 4.2 },
      { name: 'Foundation Plus', jobs: 12, rating: 4.5 },
      { name: 'Mega Structures', jobs: 20, rating: 4.8 },
      { name: 'BuildTech Solutions', jobs: 14, rating: 4.4 },
      { name: 'Quality Builders', jobs: 10, rating: 4.3 },
      { name: 'City Developers', jobs: 16, rating: 4.7 },
      { name: 'Modern Construction', jobs: 13, rating: 4.5 },
      { name: 'Premium Builders', jobs: 18, rating: 4.6 },
      { name: 'Elite Constructions', jobs: 7, rating: 4.2 }
    ],
    'Healthcare': [
      { name: 'MediCare Plus', jobs: 14, rating: 4.6 },
      { name: 'Health Solutions', jobs: 7, rating: 4.2 },
      { name: 'Care Network', jobs: 10, rating: 4.4 },
      { name: 'Wellness Group', jobs: 16, rating: 4.7 },
      { name: 'Life Care', jobs: 12, rating: 4.5 },
      { name: 'Medical Express', jobs: 20, rating: 4.8 },
      { name: 'Health Hub', jobs: 15, rating: 4.6 },
      { name: 'Prime Healthcare', jobs: 18, rating: 4.7 },
      { name: 'Vital Services', jobs: 9, rating: 4.3 },
      { name: 'Care Point', jobs: 11, rating: 4.4 },
      { name: 'Health First', jobs: 13, rating: 4.5 },
      { name: 'Med Solutions', jobs: 17, rating: 4.6 },
      { name: 'Total Care', jobs: 8, rating: 4.2 }
    ],
    'Education': [
      { name: 'EduTech Academy', jobs: 5, rating: 4.3 },
      { name: 'Learning Hub', jobs: 8, rating: 4.5 },
      { name: 'Knowledge Center', jobs: 6, rating: 4.2 },
      { name: 'Smart Education', jobs: 12, rating: 4.6 },
      { name: 'Future Learning', jobs: 15, rating: 4.7 },
      { name: 'Education Plus', jobs: 10, rating: 4.4 },
      { name: 'Global Academy', jobs: 14, rating: 4.6 },
      { name: 'Elite School', jobs: 9, rating: 4.3 },
      { name: 'Tech Education', jobs: 16, rating: 4.8 },
      { name: 'Learning Solutions', jobs: 11, rating: 4.5 },
      { name: 'Smart Schools', jobs: 13, rating: 4.6 },
      { name: 'Education Pro', jobs: 7, rating: 4.2 },
      { name: 'Learn & Grow', jobs: 18, rating: 4.7 }
    ],
    'Design': [
      { name: 'Creative Studios', jobs: 9, rating: 4.7 },
      { name: 'Design Masters', jobs: 7, rating: 4.4 },
      { name: 'Art & Co', jobs: 11, rating: 4.6 },
      { name: 'Digital Arts', jobs: 15, rating: 4.8 },
      { name: 'Design Hub', jobs: 12, rating: 4.5 },
      { name: 'Creative Solutions', jobs: 18, rating: 4.9 },
      { name: 'UI/UX Pro', jobs: 14, rating: 4.7 },
      { name: 'Visual Studio', jobs: 10, rating: 4.4 },
      { name: 'Design Plus', jobs: 16, rating: 4.8 },
      { name: 'Creative Mind', jobs: 13, rating: 4.6 },
      { name: 'Design Express', jobs: 8, rating: 4.3 },
      { name: 'Art Studio Pro', jobs: 17, rating: 4.8 },
      { name: 'Creative Force', jobs: 11, rating: 4.5 }
    ],
    'Marketing': [
      { name: 'Marketing Pros', jobs: 13, rating: 4.5 },
      { name: 'Digital Marketing Hub', jobs: 8, rating: 4.3 },
      { name: 'Brand Solutions', jobs: 10, rating: 4.4 },
      { name: 'Marketing Masters', jobs: 15, rating: 4.7 },
      { name: 'Social Media Pro', jobs: 12, rating: 4.5 },
      { name: 'Marketing Plus', jobs: 17, rating: 4.8 },
      { name: 'Digital Solutions', jobs: 14, rating: 4.6 },
      { name: 'Brand Express', jobs: 11, rating: 4.4 },
      { name: 'Marketing Hub', jobs: 16, rating: 4.7 },
      { name: 'Growth Solutions', jobs: 9, rating: 4.3 },
      { name: 'Market Leaders', jobs: 13, rating: 4.5 },
      { name: 'Digital Pro', jobs: 18, rating: 4.8 },
      { name: 'Brand Masters', jobs: 10, rating: 4.4 }
    ],
  };
  
  const companies = companiesData[category] || [];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <MaterialIcons name="arrow-back" size={24 * fontSizeMultiplier} color={currentTheme.colors.text} />
        </TouchableOpacity>
        <SpeakableText style={styles.headerTitle}>{category}</SpeakableText>
        <SpeakableText style={styles.subtitle}>{companies.length} Companies</SpeakableText>
      </View>
      <ScrollView style={styles.companiesList}>
        {companies.map((company, index) => (
          <TouchableOpacity
            key={index}
            style={styles.companyCard}
            onPress={() => navigation.navigate('JobDetails', { company, category })}
          >
            <View style={styles.companyIcon}>
              <MaterialIcons name="business" size={24 * fontSizeMultiplier} color={currentTheme.colors.primary} />
            </View>
            <View style={styles.companyInfo}>
              <SpeakableText style={styles.companyName}>{company.name}</SpeakableText>
              <View style={styles.companyStats}>
                <SpeakableText style={styles.statsText}>{company.jobs} open positions</SpeakableText>
                <View style={styles.ratingContainer}>
                  <MaterialIcons name="star" size={16 * fontSizeMultiplier} color="#FFD700" />
                  <SpeakableText style={styles.statsText}>{company.rating}</SpeakableText>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

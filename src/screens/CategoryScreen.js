import React, { useContext } from 'react';
import { View, ScrollView, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { ThemeContext } from '../../App';
import { FontSizeContext } from '../utils/FontSizeContext';
import { useDyslexic } from '../utils/DyslexicContext';
import SpeakableText from '../components/SpeakableText';
import { useTts } from '../utils/TtsContext';

// Styles with theming, dyslexic font, and font scaling
const categoryStyles = (theme, fontSizeMultiplier = 1, dyslexicEnabled = false) =>
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
      fontSize: 24,
    },
    headerTitle: {
      fontSize: 24 * fontSizeMultiplier,
      fontWeight: 'bold',
      color: theme.colors.text,
      fontFamily: dyslexicEnabled ? 'OpenDyslexic' : theme.fontFamily || 'System',
    },
    subtitle: {
      fontSize: 14 * fontSizeMultiplier,
      color: theme.colors.muted,
      marginTop: 4,
      fontFamily: dyslexicEnabled ? 'OpenDyslexic' : theme.fontFamily || 'System',
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
      fontSize: 28,
    },
    companyInfo: {
      flex: 1,
    },
    companyName: {
      fontSize: 16 * fontSizeMultiplier,
      fontWeight: '600',
      color: theme.colors.text,
      marginBottom: 4,
      fontFamily: dyslexicEnabled ? 'OpenDyslexic' : theme.fontFamily || 'System',
    },
    companyStats: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    statsText: {
      fontSize: 14 * fontSizeMultiplier,
      color: theme.colors.muted,
      fontFamily: dyslexicEnabled ? 'OpenDyslexic' : theme.fontFamily || 'System',
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
  const { dyslexicEnabled } = useDyslexic();
  const { ttsEnabled } = useTts();

  const styles = categoryStyles(currentTheme, fontSizeMultiplier, dyslexicEnabled);
  const { category } = route.params || { category: 'Category' };

  const companiesData = {
    'IT & Software': [
      { id: 1, name: 'TechCorp Solutions', jobs: 2, rating: 4.5, description: 'Leading software development company', icon: '💻' },
      { id: 2, name: 'Digital Innovations', jobs: 8, rating: 4.2, description: 'Digital transformation services', icon: '💻' },
      { id: 3, name: 'Software Express', jobs: 15, rating: 4.7, description: 'Fast-paced software solutions', icon: '💻' },
      { id: 4, name: 'Cloud Nine Tech', jobs: 20, rating: 4.8, description: 'Cloud infrastructure specialist', icon: '☁️' },
      { id: 5, name: 'Binary Systems', jobs: 10, rating: 4.3, description: 'Enterprise software systems', icon: '💻' },
      { id: 6, name: 'CodeCraft Labs', jobs: 17, rating: 4.6, description: 'Custom software development', icon: '💻' },
      { id: 7, name: 'Data Dynamics', jobs: 14, rating: 4.4, description: 'Big data analytics', icon: '📊' },
      { id: 8, name: 'Cyber Solutions', jobs: 9, rating: 4.1, description: 'Cybersecurity services', icon: '🔒' },
      { id: 9, name: 'AI Ventures', jobs: 22, rating: 4.9, description: 'Artificial intelligence solutions', icon: '🤖' },
      { id: 10, name: 'Tech Frontier', jobs: 16, rating: 4.5, description: 'Emerging tech innovations', icon: '💻' },
      { id: 11, name: 'DevOps Pro', jobs: 13, rating: 4.3, description: 'DevOps and cloud deployment', icon: '⚙️' },
      { id: 12, name: 'Smart Systems', jobs: 18, rating: 4.7, description: 'IoT and smart systems', icon: '🔌' },
      { id: 13, name: 'Future Tech', jobs: 11, rating: 4.4, description: 'Next-generation technology', icon: '💻' }
    ],
    'Healthcare': [
      { id: 14, name: 'MediCare Plus', jobs: 14, rating: 4.6, description: 'Leading healthcare provider', icon: '🏥' },
      { id: 15, name: 'Health Solutions', jobs: 7, rating: 4.2, description: 'Healthcare consultancy', icon: '⚕️' },
      { id: 16, name: 'Care Network', jobs: 10, rating: 4.4, description: 'Nationwide care services', icon: '🏥' },
      { id: 17, name: 'Wellness Group', jobs: 16, rating: 4.7, description: 'Wellness and prevention', icon: '💪' },
      { id: 18, name: 'Life Care', jobs: 12, rating: 4.5, description: 'Patient care specialists', icon: '🏥' },
      { id: 19, name: 'Medical Express', jobs: 20, rating: 4.8, description: 'Emergency medical services', icon: '🚑' },
      { id: 20, name: 'Health Hub', jobs: 15, rating: 4.6, description: 'Community health center', icon: '🏥' },
      { id: 21, name: 'Prime Healthcare', jobs: 18, rating: 4.7, description: 'Premium healthcare services', icon: '🏥' },
      { id: 22, name: 'Vital Services', jobs: 9, rating: 4.3, description: 'Critical care services', icon: '⚕️' },
      { id: 23, name: 'Care Point', jobs: 11, rating: 4.4, description: 'Point of care services', icon: '🏥' },
      { id: 24, name: 'Health First', jobs: 13, rating: 4.5, description: 'Primary healthcare', icon: '🏥' },
      { id: 25, name: 'Med Solutions', jobs: 17, rating: 4.6, description: 'Medical technology solutions', icon: '🔬' },
      { id: 26, name: 'Total Care', jobs: 8, rating: 4.2, description: 'Comprehensive care', icon: '🏥' }
    ],
    'Education': [
      { id: 27, name: 'EduTech Academy', jobs: 5, rating: 4.3, description: 'Technology education platform', icon: '📚' },
      { id: 28, name: 'Learning Hub', jobs: 8, rating: 4.5, description: 'Online learning platform', icon: '📖' },
      { id: 29, name: 'Knowledge Center', jobs: 6, rating: 4.2, description: 'Knowledge sharing platform', icon: '📚' },
      { id: 30, name: 'Smart Education', jobs: 12, rating: 4.6, description: 'Smart learning solutions', icon: '🧠' },
      { id: 31, name: 'Future Learning', jobs: 15, rating: 4.7, description: 'Future-focused education', icon: '📚' },
      { id: 32, name: 'Education Plus', jobs: 10, rating: 4.4, description: 'Extended education services', icon: '📖' },
      { id: 33, name: 'Global Academy', jobs: 14, rating: 4.6, description: 'International education', icon: '🌍' },
      { id: 34, name: 'Elite School', jobs: 9, rating: 4.3, description: 'Premium education', icon: '🎓' },
      { id: 35, name: 'Tech Education', jobs: 16, rating: 4.8, description: 'Technology education', icon: '💻' },
      { id: 36, name: 'Learning Solutions', jobs: 11, rating: 4.5, description: 'Education solutions', icon: '📚' },
      { id: 37, name: 'Smart Schools', jobs: 13, rating: 4.6, description: 'Smart school systems', icon: '🏫' },
      { id: 38, name: 'Education Pro', jobs: 7, rating: 4.2, description: 'Professional education', icon: '📚' },
      { id: 39, name: 'Learn & Grow', jobs: 18, rating: 4.7, description: 'Learning and development', icon: '📈' }
    ],
    'Design': [
      { id: 40, name: 'Creative Studios', jobs: 9, rating: 4.7, description: 'Full-service design studio', icon: '🎨' },
      { id: 41, name: 'Design Masters', jobs: 7, rating: 4.4, description: 'Master designers collective', icon: '✏️' },
      { id: 42, name: 'Art & Co', jobs: 11, rating: 4.6, description: 'Artistic design solutions', icon: '🎭' },
      { id: 43, name: 'Digital Arts', jobs: 15, rating: 4.8, description: 'Digital art specialists', icon: '🖼️' },
      { id: 44, name: 'Design Hub', jobs: 12, rating: 4.5, description: 'Design community hub', icon: '🎨' },
      { id: 45, name: 'Creative Solutions', jobs: 18, rating: 4.9, description: 'Creative problem solving', icon: '💡' },
      { id: 46, name: 'UI/UX Pro', jobs: 14, rating: 4.7, description: 'UI/UX design experts', icon: '🖥️' },
      { id: 47, name: 'Visual Studio', jobs: 10, rating: 4.4, description: 'Visual design studio', icon: '🎨' },
      { id: 48, name: 'Design Plus', jobs: 16, rating: 4.8, description: 'Extended design services', icon: '🎨' },
      { id: 49, name: 'Creative Mind', jobs: 13, rating: 4.6, description: 'Creative thinking agency', icon: '🧠' },
      { id: 50, name: 'Design Express', jobs: 8, rating: 4.3, description: 'Fast design delivery', icon: '🎨' },
      { id: 51, name: 'Art Studio Pro', jobs: 17, rating: 4.8, description: 'Professional art studio', icon: '🖌️' },
      { id: 52, name: 'Creative Force', jobs: 11, rating: 4.5, description: 'Creative powerhouse', icon: '💪' }
    ],
    'Marketing': [
      { id: 53, name: 'Marketing Pros', jobs: 13, rating: 4.5, description: 'Professional marketing agency', icon: '📢' },
      { id: 54, name: 'Digital Marketing Hub', jobs: 8, rating: 4.3, description: 'Digital marketing center', icon: '📱' },
      { id: 55, name: 'Brand Solutions', jobs: 10, rating: 4.4, description: 'Brand strategy and design', icon: '🏷️' },
      { id: 56, name: 'Marketing Masters', jobs: 15, rating: 4.7, description: 'Expert marketing team', icon: '📊' },
      { id: 57, name: 'Social Media Pro', jobs: 12, rating: 4.5, description: 'Social media specialists', icon: '📱' },
      { id: 58, name: 'Marketing Plus', jobs: 17, rating: 4.8, description: 'Extended marketing services', icon: '📢' },
      { id: 59, name: 'Digital Solutions', jobs: 14, rating: 4.6, description: 'Digital marketing solutions', icon: '💻' },
      { id: 60, name: 'Brand Express', jobs: 11, rating: 4.4, description: 'Fast brand delivery', icon: '🚀' },
      { id: 61, name: 'Marketing Hub', jobs: 16, rating: 4.7, description: 'Marketing community hub', icon: '📢' },
      { id: 62, name: 'Growth Solutions', jobs: 9, rating: 4.3, description: 'Growth marketing', icon: '📈' },
      { id: 63, name: 'Market Leaders', jobs: 13, rating: 4.5, description: 'Market leadership agency', icon: '👑' },
      { id: 64, name: 'Digital Pro', jobs: 18, rating: 4.8, description: 'Professional digital marketing', icon: '💻' },
      { id: 65, name: 'Brand Masters', jobs: 10, rating: 4.4, description: 'Brand mastery experts', icon: '🎯' }
    ],
  };

  const handleApply = async () => {
  setLoading(true);
  try {
    const currentUser = await getCurrentUser();
    
    if (!currentUser) {
      Alert.alert('Error', 'Please login first');
      return;
    }

    navigation.navigate('ResumeScreen', { company });

  } catch (error) {
    console.error('Error applying:', error);
    Alert.alert('Error', 'Failed to proceed to resume');
  } finally {
    setLoading(false);
  }
};

  const companies = companiesData[category] || [];

  return (
    <View style={styles.container}>
      {/* Header with back button and category metadata */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backButton}>←</Text>
        </TouchableOpacity>

        {/* Category Title */}
        <SpeakableText style={{
          fontSize: 24 * fontSizeMultiplier,
          fontFamily: dyslexicEnabled ? 'OpenDyslexic' : undefined,
          fontWeight: dyslexicEnabled ? 'normal' : 'bold',
          color: currentTheme.colors.text,
        }} ttsEnabled={ttsEnabled}>
          {category}
        </SpeakableText>

        {/* Number of companies subtitle */}
        <SpeakableText style={styles.subtitle} ttsEnabled={ttsEnabled}>
          {companies.length} Companies
        </SpeakableText>
      </View>

      {/* Scrollable companies list */}
      <ScrollView style={styles.companiesList}>
        {companies.map((company, index) => (
          <TouchableOpacity
            key={index}
            style={styles.companyCard}
            onPress={() => navigation.navigate('CompanyDetails', { company, category })}
          >
            {/* Company icon */}
            <View style={styles.companyIcon}>
              <Text style={{ fontSize: 28 }}>{company.icon}</Text>
            </View>

            {/* Company info with name and stats */}
            <View style={styles.companyInfo}>
              <SpeakableText style={styles.companyName} ttsEnabled={ttsEnabled}>
                {company.name}
              </SpeakableText>

              <View style={styles.companyStats}>
                <SpeakableText style={styles.statsText} ttsEnabled={ttsEnabled}>
                  {company.jobs} open positions
                </SpeakableText>

                <View style={styles.ratingContainer}>
                  <Text style={{ fontSize: 14 }}>⭐</Text>
                  <SpeakableText style={styles.statsText} ttsEnabled={ttsEnabled}>
                    {company.rating}
                  </SpeakableText>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
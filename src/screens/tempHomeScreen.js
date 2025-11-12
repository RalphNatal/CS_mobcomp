import React, { useState, useContext } from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { ThemeContext } from '../../App';
import { FontSizeContext } from '../utils/FontSizeContext';
import { useDyslexic } from '../utils/DyslexicContext';
import SpeakableText from '../components/SpeakableText';
import UploadSkillsScreen from './UploadSkillScreen';
import { useTts } from '../utils/TtsContext';
import { homeStyles } from '../styles/HomeStyles';

export default function tempHomeScreen({ navigation }) {
  // Contexts for theming, font sizing, dyslexic font toggle, and text to speech
  const { currentTheme } = useContext(ThemeContext);
  const { fontSizeMultiplier } = useContext(FontSizeContext);
  const { dyslexicEnabled } = useDyslexic();
  const { ttsEnabled } = useTts();
  
  // Styles adjusted for current theme and accessibility settings
  const styles = homeStyles(currentTheme, fontSizeMultiplier, dyslexicEnabled);

  // State to control visibility of Upload Skills modal
  const [skillsModalVisible, setSkillsModalVisible] = useState(false);
  
  // Static list of job categories with icons
  const categories = [
    { name: 'IT & Software', icon: 'laptop' },
    { name: 'Construction', icon: 'engineering' },
    { name: 'Healthcare', icon: 'local-hospital' },
    { name: 'Education', icon: 'school' },
    { name: 'Design', icon: 'brush' },
    { name: 'Marketing', icon: 'campaign' },
  ];
  
  // Handles actions for the app steps triggered by UI interactions
  const handleStepClick = (step) => {
    switch (step) {
      case 'Create an Account':
        navigation.navigate('Signup');
        break;
      case 'Upload Your Skills':
        setSkillsModalVisible(true);
        break;
      case 'Find a Job':
        navigation.navigate('JobSearch');
        break;
      case 'Apply & Get Hired':
        // Implement application logic here
        break;
      default:
        break;
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: currentTheme.colors.background }}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* Hero Section */}
        <View style={styles.header}>
          <SpeakableText style={styles.title} ttsEnabled={ttsEnabled}>
            Find a job that suits your skills
          </SpeakableText>
          <SpeakableText style={styles.subtitle} ttsEnabled={ttsEnabled}>
            Explore certified training and career opportunities.
          </SpeakableText>

          {/* Search area */}
          <View style={styles.searchContainer}>
            <MaterialIcons name="search" size={styles.title.fontSize} color={currentTheme.colors.muted} />
            <TextInput
              placeholder="Search jobs, skills, or companies"
              placeholderTextColor={currentTheme.colors.muted}
              style={styles.searchInput}
            />
            <TouchableOpacity
              style={styles.searchButton}
              onPress={() => navigation.navigate('JobSearch')}
            >
              <SpeakableText style={styles.searchButtonText} ttsEnabled={ttsEnabled}>
                Find Job
              </SpeakableText>
            </TouchableOpacity>
          </View>
        </View>

        {/* Stats Section */}
        <View style={styles.statsContainer}>
          <View style={styles.statBox}>
            <SpeakableText style={styles.statNumber} ttsEnabled={ttsEnabled}>1,245</SpeakableText>
            <SpeakableText style={styles.statLabel} ttsEnabled={ttsEnabled}>Live Jobs</SpeakableText>
          </View>
          <View style={styles.statBox}>
            <SpeakableText style={styles.statNumber} ttsEnabled={ttsEnabled}>812</SpeakableText>
            <SpeakableText style={styles.statLabel} ttsEnabled={ttsEnabled}>Companies</SpeakableText>
          </View>
          <View style={styles.statBox}>
            <SpeakableText style={styles.statNumber} ttsEnabled={ttsEnabled}>4,321</SpeakableText>
            <SpeakableText style={styles.statLabel} ttsEnabled={ttsEnabled}>Applicants</SpeakableText>
          </View>
        </View>

        {/* Popular Categories */}
        <SpeakableText style={styles.sectionTitle} ttsEnabled={ttsEnabled}>
          Popular Categories
        </SpeakableText>
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
                size={28 * fontSizeMultiplier}
                color={currentTheme.colors.primary}
              />
              <SpeakableText style={styles.categoryName} ttsEnabled={ttsEnabled}>
                {cat.name}
              </SpeakableText>
            </TouchableOpacity>
          ))}
        </View>

        {/* How Connex Works */}
        <SpeakableText style={styles.sectionTitle} ttsEnabled={ttsEnabled}>
          How Connex Works
        </SpeakableText>
        <View style={styles.stepsContainer}>
          {[
            { step: 'Create an Account', icon: 'person-add' },
            { step: 'Upload Your Skills', icon: 'upload-file' },
            { step: 'Find a Job', icon: 'search' },
            { step: 'Apply & Get Hired', icon: 'work' },
          ].map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.stepBox}
              onPress={() => handleStepClick(item.step)}
            >
              <MaterialIcons
                name={item.icon}
                size={28 * fontSizeMultiplier}
                color={currentTheme.colors.accent}
              />
              <SpeakableText style={styles.stepText} ttsEnabled={ttsEnabled}>
                {item.step}
              </SpeakableText>
            </TouchableOpacity>
          ))}
        </View>

        {/* Modal for Upload Skills */}
        <UploadSkillsScreen
          visible={skillsModalVisible}
          onClose={() => setSkillsModalVisible(false)}
        />
      </ScrollView>
    </View>
  );
}

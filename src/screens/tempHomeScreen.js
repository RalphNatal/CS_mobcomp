import React, { useState, useContext } from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { ThemeContext } from '../../App';
import { homeStyles } from '../styles/HomeStyles';
import UploadSkillsScreen from './UploadSkillScreen';
import { useTts } from '../utils/TtsContext';
import SpeakableText from '../components/SpeakableText';
import { FontSizeContext } from '../utils/FontSizeContext'; 

export default function tempHomeScreen({ navigation }) {
  const { currentTheme } = useContext(ThemeContext);
  const { fontSizeMultiplier } = useContext(FontSizeContext);
  const styles = homeStyles(currentTheme, fontSizeMultiplier);
  const { speak } = useTts();

  const categories = [
    { name: 'IT & Software', icon: 'laptop' },
    { name: 'Construction', icon: 'engineering' },
    { name: 'Healthcare', icon: 'local-hospital' },
    { name: 'Education', icon: 'school' },
    { name: 'Design', icon: 'brush' },
    { name: 'Marketing', icon: 'campaign' },
  ];

  const [skillsModalVisible, setSkillsModalVisible] = useState(false);

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
        // Handle application process
        break;
    }
  };

  const scaleFontSize = (base) => base * fontSizeMultiplier;

  return (
    <View style={{ flex: 1, backgroundColor: currentTheme.colors.background }}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <SpeakableText style={[styles.title, { fontSize: scaleFontSize(24) }]}>
            Find a job that suits your skills
          </SpeakableText>
          <SpeakableText style={[styles.subtitle, { fontSize: scaleFontSize(16) }]}>
            Explore certified training and career opportunities.
          </SpeakableText>
          <View style={styles.searchContainer}>
            <Ionicons name="search" size={scaleFontSize(22)} color={currentTheme.colors.muted} />
            <TextInput
              placeholder="Search jobs, skills, or companies"
              placeholderTextColor={currentTheme.colors.muted}
              style={[styles.searchInput, { fontSize: scaleFontSize(16) }]}
            />
            <TouchableOpacity
              style={styles.searchButton}
              onPress={() => navigation.navigate('JobSearch')}
            >
              <SpeakableText style={[styles.searchButtonText, { fontSize: scaleFontSize(15) }]}>
                Find Job
              </SpeakableText>
            </TouchableOpacity>
          </View>
        </View>
        
        {/* Stats Section */}
        <View style={styles.statsContainer}>
          <View style={styles.statBox}>
            <SpeakableText style={[styles.statNumber, { fontSize: scaleFontSize(22) }]}>1,245</SpeakableText>
            <SpeakableText style={[styles.statLabel, { fontSize: scaleFontSize(14) }]}>Live Jobs</SpeakableText>
          </View>
          <View style={styles.statBox}>
            <SpeakableText style={[styles.statNumber, { fontSize: scaleFontSize(22) }]}>812</SpeakableText>
            <SpeakableText style={[styles.statLabel, { fontSize: scaleFontSize(14) }]}>Companies</SpeakableText>
          </View>
          <View style={styles.statBox}>
            <SpeakableText style={[styles.statNumber, { fontSize: scaleFontSize(22) }]}>4,321</SpeakableText>
            <SpeakableText style={[styles.statLabel, { fontSize: scaleFontSize(14) }]}>Applicants</SpeakableText>
          </View>
        </View>

        {/* Popular Categories */}
        <SpeakableText style={[styles.sectionTitle, { fontSize: scaleFontSize(18) }]}>
          Popular Categories
        </SpeakableText>
        <View style={styles.categoriesContainer}>
          {categories.map((cat, index) => (
            <TouchableOpacity
              key={index}
              style={styles.categoryCard}
              activeOpacity={0.8}
              onPress={() =>
                navigation.navigate('CategoryScreen', { category: cat.name })
              }
            >
              <MaterialIcons
                name={cat.icon}
                size={scaleFontSize(28)}
                color={currentTheme.colors.primary}
              />
              <SpeakableText style={[styles.categoryName, { fontSize: scaleFontSize(14) }]}>
                {cat.name}
              </SpeakableText>
            </TouchableOpacity>
          ))}
        </View>

        {/* How Connex Works */}
        <SpeakableText style={[styles.sectionTitle, { fontSize: scaleFontSize(18) }]}>
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
                size={scaleFontSize(28)}
                color={currentTheme.colors.accent}
              />
              <SpeakableText style={[styles.stepText, { fontSize: scaleFontSize(15) }]}>
                {item.step}
              </SpeakableText>
            </TouchableOpacity>
          ))}
        </View>
        <UploadSkillsScreen
          visible={skillsModalVisible}
          onClose={() => setSkillsModalVisible(false)}
        />
      </ScrollView>
    </View>
  );
}

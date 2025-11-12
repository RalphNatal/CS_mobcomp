import React, { useContext, useState, useEffect } from 'react';
import { View, ScrollView, TouchableOpacity, StyleSheet, Text, Alert, ActivityIndicator } from 'react-native';
import { ThemeContext } from '../../App';
import { FontSizeContext } from '../utils/FontSizeContext';
import { useDyslexic } from '../utils/DyslexicContext';
import SpeakableText from '../components/SpeakableText';
import { useTts } from '../utils/TtsContext';
import { getCurrentUser, updateUserProfile } from '../utils/UserStorage';

const resumeStyles = (theme, fontSizeMultiplier = 1, dyslexicEnabled = false) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    header: {
      backgroundColor: theme.colors.primary,
      padding: 20,
      paddingTop: 16,
      flexDirection: 'row',
      alignItems: 'center',
    },
    backButton: {
      fontSize: 24,
      marginRight: 12,
      color: '#fff',
    },
    headerTitle: {
      fontSize: 20 * fontSizeMultiplier,
      fontWeight: 'bold',
      color: '#fff',
      fontFamily: dyslexicEnabled ? 'OpenDyslexic' : undefined,
    },
    content: {
      padding: 20,
    },
    section: {
      marginBottom: 24,
      backgroundColor: theme.colors.card,
      padding: 16,
      borderRadius: 12,
    },
    sectionTitle: {
      fontSize: 18 * fontSizeMultiplier,
      fontWeight: '600',
      color: theme.colors.primary,
      marginBottom: 12,
      fontFamily: dyslexicEnabled ? 'OpenDyslexic' : undefined,
      borderBottomWidth: 2,
      borderBottomColor: theme.colors.primary,
      paddingBottom: 8,
    },
    resumeHeader: {
      marginBottom: 20,
      alignItems: 'center',
    },
    resumeName: {
      fontSize: 24 * fontSizeMultiplier,
      fontWeight: 'bold',
      color: theme.colors.text,
      marginBottom: 4,
      fontFamily: dyslexicEnabled ? 'OpenDyslexic' : undefined,
    },
    resumeTitle: {
      fontSize: 16 * fontSizeMultiplier,
      color: theme.colors.primary,
      marginBottom: 8,
      fontFamily: dyslexicEnabled ? 'OpenDyslexic' : undefined,
    },
    contactInfo: {
      fontSize: 13 * fontSizeMultiplier,
      color: theme.colors.muted,
      lineHeight: 20,
      fontFamily: dyslexicEnabled ? 'OpenDyslexic' : undefined,
    },
    sectionContent: {
      marginBottom: 12,
    },
    itemTitle: {
      fontSize: 16 * fontSizeMultiplier,
      fontWeight: '600',
      color: theme.colors.text,
      marginBottom: 4,
      fontFamily: dyslexicEnabled ? 'OpenDyslexic' : undefined,
    },
    itemSubtitle: {
      fontSize: 14 * fontSizeMultiplier,
      color: theme.colors.primary,
      marginBottom: 4,
      fontFamily: dyslexicEnabled ? 'OpenDyslexic' : undefined,
    },
    itemDescription: {
      fontSize: 13 * fontSizeMultiplier,
      color: theme.colors.text,
      lineHeight: 20,
      fontFamily: dyslexicEnabled ? 'OpenDyslexic' : undefined,
    },
    skillBadge: {
      backgroundColor: `${theme.colors.primary}20`,
      paddingHorizontal: 12,
      paddingVertical: 6,
      borderRadius: 16,
      margin: 4,
      marginBottom: 8,
      display: 'inline-block',
    },
    skillText: {
      color: theme.colors.primary,
      fontSize: 13 * fontSizeMultiplier,
      fontFamily: dyslexicEnabled ? 'OpenDyslexic' : undefined,
    },
    skillsContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginHorizontal: -4,
    },
    editButton: {
      backgroundColor: theme.colors.primary,
      padding: 14,
      borderRadius: 12,
      alignItems: 'center',
      marginBottom: 12,
    },
    editButtonText: {
      color: '#fff',
      fontSize: 16 * fontSizeMultiplier,
      fontWeight: '600',
      fontFamily: dyslexicEnabled ? 'OpenDyslexic' : undefined,
    },
    downloadButton: {
      backgroundColor: `${theme.colors.primary}20`,
      padding: 14,
      borderRadius: 12,
      alignItems: 'center',
      marginBottom: 20,
      borderWidth: 1,
      borderColor: theme.colors.primary,
    },
    downloadButtonText: {
      color: theme.colors.primary,
      fontSize: 16 * fontSizeMultiplier,
      fontWeight: '600',
      fontFamily: dyslexicEnabled ? 'OpenDyslexic' : undefined,
    },
    emptyMessage: {
      fontSize: 14 * fontSizeMultiplier,
      color: theme.colors.muted,
      fontStyle: 'italic',
      fontFamily: dyslexicEnabled ? 'OpenDyslexic' : undefined,
    },
  });


export default function ResumeScreen({ route, navigation }) {
  const { currentTheme } = useContext(ThemeContext);
  const { fontSizeMultiplier } = useContext(FontSizeContext);
  const { dyslexicEnabled } = useDyslexic();
  const { ttsEnabled } = useTts();
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  const styles = resumeStyles(currentTheme, fontSizeMultiplier, dyslexicEnabled);
  const { company } = route.params || { company: {} };

  useEffect(() => {
    loadUserProfile();
  }, []);

  const loadUserProfile = async () => {
    try {
      setLoading(true);
      const currentUser = await getCurrentUser();

      if (currentUser) {
        setUserProfile(currentUser);
      } else {
        Alert.alert('Error', 'No user logged in');
        navigation.goBack();
      }
    } catch (error) {
      console.error('Error loading profile:', error);
      Alert.alert('Error', 'Failed to load profile');
    } finally {
      setLoading(false);
    }
  };

    const handleEditResume = () => {
  // Navigate to EditResume screen
  navigation.navigate('EditResume', { user: userProfile });
};

  const handleDownloadResume = () => {
    Alert.alert(
      'Download Resume',
      'Resume download functionality would be implemented here',
      [{ text: 'OK' }]
    );
  };

  const handleApplyWithResume = async () => {
    if (!userProfile) {
      Alert.alert('Error', 'Please complete your profile first');
      return;
    }

    try {
      // Here you would submit the application with the resume
      Alert.alert(
        'Application Submitted',
        `Your resume has been sent to ${company.name}!\n\nWe will review your application shortly.`,
        [
          {
            text: 'OK',
            onPress: () => navigation.navigate('CompanyDetails', { company }),
          },
        ]
      );
    } catch (error) {
      Alert.alert('Error', 'Failed to submit application');
    }
  };

  if (loading) {
    return (
      <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
        <ActivityIndicator size="large" color={currentTheme.colors.primary} />
      </View>
    );
  }

  if (!userProfile) {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.backButton}>←</Text>
          </TouchableOpacity>
          <SpeakableText style={styles.headerTitle} ttsEnabled={ttsEnabled}>
            Your Resume
          </SpeakableText>
        </View>
        <View style={[styles.content, { justifyContent: 'center', alignItems: 'center' }]}>
          <SpeakableText style={styles.emptyMessage} ttsEnabled={ttsEnabled}>
            No profile data available
          </SpeakableText>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>←</Text>
        </TouchableOpacity>
        <SpeakableText style={styles.headerTitle} ttsEnabled={ttsEnabled}>
          Your Resume
        </SpeakableText>
      </View>

      <ScrollView style={styles.content}>
        {/* Action Buttons */}
        <TouchableOpacity style={styles.editButton} onPress={handleEditResume}>
          <SpeakableText style={styles.editButtonText} ttsEnabled={ttsEnabled}>
            ✏️ Edit Resume
          </SpeakableText>
        </TouchableOpacity>

        <TouchableOpacity style={styles.downloadButton} onPress={handleDownloadResume}>
          <SpeakableText style={styles.downloadButtonText} ttsEnabled={ttsEnabled}>
            ⬇️ Download Resume
          </SpeakableText>
        </TouchableOpacity>

        {/* Resume Header */}
        <View style={styles.resumeHeader}>
          <SpeakableText style={styles.resumeName} ttsEnabled={ttsEnabled}>
            {userProfile.name}
          </SpeakableText>
          <SpeakableText style={styles.resumeTitle} ttsEnabled={ttsEnabled}>
            {userProfile.title || 'Job Seeker'}
          </SpeakableText>
          <SpeakableText style={styles.contactInfo} ttsEnabled={ttsEnabled}>
            {userProfile.email}{'\n'}
            {userProfile.phone || 'Phone not provided'}{'\n'}
            {userProfile.location || 'Location not provided'}
          </SpeakableText>
        </View>

        {/* Professional Summary */}
        <View style={styles.section}>
          <SpeakableText style={styles.sectionTitle} ttsEnabled={ttsEnabled}>
            Professional Summary
          </SpeakableText>
          <SpeakableText style={styles.itemDescription} ttsEnabled={ttsEnabled}>
            {userProfile.about || 'No professional summary added'}
          </SpeakableText>
        </View>

        {/* Technical Skills */}
        {userProfile.skills && userProfile.skills.length > 0 && (
          <View style={styles.section}>
            <SpeakableText style={styles.sectionTitle} ttsEnabled={ttsEnabled}>
              Technical Skills
            </SpeakableText>
            <View style={styles.skillsContainer}>
              {userProfile.skills.map((skill, index) => (
                <View key={index} style={styles.skillBadge}>
                  <SpeakableText style={styles.skillText} ttsEnabled={ttsEnabled}>
                    {skill}
                  </SpeakableText>
                </View>
              ))}
            </View>
          </View>
        )}

        {/* Soft Skills */}
        {userProfile.softSkills && (
          <View style={styles.section}>
            <SpeakableText style={styles.sectionTitle} ttsEnabled={ttsEnabled}>
              Soft Skills
            </SpeakableText>
            <SpeakableText style={styles.itemDescription} ttsEnabled={ttsEnabled}>
              {userProfile.softSkills}
            </SpeakableText>
          </View>
        )}

        {/* Languages */}
        {userProfile.languages && (
          <View style={styles.section}>
            <SpeakableText style={styles.sectionTitle} ttsEnabled={ttsEnabled}>
              Languages
            </SpeakableText>
            <SpeakableText style={styles.itemDescription} ttsEnabled={ttsEnabled}>
              {userProfile.languages}
            </SpeakableText>
          </View>
        )}

        {/* Experience */}
        {userProfile.experience && userProfile.experience.length > 0 && (
          <View style={styles.section}>
            <SpeakableText style={styles.sectionTitle} ttsEnabled={ttsEnabled}>
              Work Experience
            </SpeakableText>
            {userProfile.experience.map((exp, index) => (
              <View key={index} style={styles.sectionContent}>
                <SpeakableText style={styles.itemTitle} ttsEnabled={ttsEnabled}>
                  {exp.role}
                </SpeakableText>
                <SpeakableText style={styles.itemSubtitle} ttsEnabled={ttsEnabled}>
                  {exp.company}
                </SpeakableText>
                <SpeakableText style={styles.itemDescription} ttsEnabled={ttsEnabled}>
                  {exp.period}
                </SpeakableText>
                <SpeakableText style={styles.itemDescription} ttsEnabled={ttsEnabled}>
                  {exp.description}
                </SpeakableText>
              </View>
            ))}
          </View>
        )}

        {/* Education */}
        {userProfile.education && userProfile.education.length > 0 && (
          <View style={styles.section}>
            <SpeakableText style={styles.sectionTitle} ttsEnabled={ttsEnabled}>
              Education
            </SpeakableText>
            {userProfile.education.map((edu, index) => (
              <View key={index} style={styles.sectionContent}>
                <SpeakableText style={styles.itemTitle} ttsEnabled={ttsEnabled}>
                  {edu.degree}
                </SpeakableText>
                <SpeakableText style={styles.itemSubtitle} ttsEnabled={ttsEnabled}>
                  {edu.school}
                </SpeakableText>
                <SpeakableText style={styles.itemDescription} ttsEnabled={ttsEnabled}>
                  {edu.year}
                </SpeakableText>
              </View>
            ))}
          </View>
        )}

        {/* Certifications */}
        {userProfile.certifications && (
          <View style={styles.section}>
            <SpeakableText style={styles.sectionTitle} ttsEnabled={ttsEnabled}>
              Certifications
            </SpeakableText>
            <SpeakableText style={styles.itemDescription} ttsEnabled={ttsEnabled}>
              {userProfile.certifications}
            </SpeakableText>
          </View>
        )}

        {/* Apply Button */}
        <TouchableOpacity
          style={[styles.editButton, { marginTop: 12 }]}
          onPress={handleApplyWithResume}
        >
          <SpeakableText style={styles.editButtonText} ttsEnabled={ttsEnabled}>
            ✓ Apply to {company.name || 'Company'}
          </SpeakableText>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
import React, { useContext, useState } from 'react';
import { View, ScrollView, TouchableOpacity, StyleSheet, Text, Alert, ActivityIndicator } from 'react-native';
import { ThemeContext } from '../../App';
import { FontSizeContext } from '../utils/FontSizeContext';
import { useDyslexic } from '../utils/DyslexicContext';
import SpeakableText from '../components/SpeakableText';
import { useTts } from '../utils/TtsContext';
import { getCurrentUser } from '../utils/UserStorage';

const companyDetailsStyles = (theme, fontSizeMultiplier = 1, dyslexicEnabled = false) =>
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
      justifyContent: 'space-between',
    },
    headerContent: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
    },
    backButton: {
      fontSize: 24,
      marginRight: 12,
      color: '#fff',
    },
    companyIconLarge: {
      fontSize: 40,
      marginRight: 12,
    },
    companyNameHeader: {
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
    },
    sectionTitle: {
      fontSize: 18 * fontSizeMultiplier,
      fontWeight: '600',
      color: theme.colors.text,
      marginBottom: 12,
      fontFamily: dyslexicEnabled ? 'OpenDyslexic' : undefined,
    },
    descriptionText: {
      fontSize: 14 * fontSizeMultiplier,
      color: theme.colors.text,
      lineHeight: 22,
      fontFamily: dyslexicEnabled ? 'OpenDyslexic' : undefined,
    },
    statsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      backgroundColor: theme.colors.card,
      padding: 16,
      borderRadius: 12,
      marginBottom: 12,
    },
    statItem: {
      alignItems: 'center',
    },
    statNumber: {
      fontSize: 20 * fontSizeMultiplier,
      fontWeight: 'bold',
      color: theme.colors.primary,
      fontFamily: dyslexicEnabled ? 'OpenDyslexic' : undefined,
    },
    statLabel: {
      fontSize: 12 * fontSizeMultiplier,
      color: theme.colors.muted,
      marginTop: 4,
      fontFamily: dyslexicEnabled ? 'OpenDyslexic' : undefined,
    },
    jobsList: {
      backgroundColor: theme.colors.card,
      padding: 16,
      borderRadius: 12,
      marginBottom: 12,
    },
    jobItem: {
      paddingVertical: 12,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.border,
    },
    jobTitle: {
      fontSize: 14 * fontSizeMultiplier,
      fontWeight: '600',
      color: theme.colors.text,
      fontFamily: dyslexicEnabled ? 'OpenDyslexic' : undefined,
    },
    jobSalary: {
      fontSize: 12 * fontSizeMultiplier,
      color: theme.colors.primary,
      marginTop: 4,
      fontFamily: dyslexicEnabled ? 'OpenDyslexic' : undefined,
    },
    applyButton: {
      backgroundColor: theme.colors.primary,
      padding: 16,
      borderRadius: 12,
      alignItems: 'center',
      marginVertical: 20,
    },
    applyButtonText: {
      color: '#fff',
      fontSize: 16 * fontSizeMultiplier,
      fontWeight: '600',
      fontFamily: dyslexicEnabled ? 'OpenDyslexic' : undefined,
    },
    applicantsList: {
      backgroundColor: theme.colors.card,
      padding: 16,
      borderRadius: 12,
      marginTop: 12,
    },
    applicantItem: {
      paddingVertical: 12,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.border,
    },
    applicantName: {
      fontSize: 14 * fontSizeMultiplier,
      fontWeight: '600',
      color: theme.colors.text,
      fontFamily: dyslexicEnabled ? 'OpenDyslexic' : undefined,
    },
    applicantDate: {
      fontSize: 12 * fontSizeMultiplier,
      color: theme.colors.muted,
      marginTop: 4,
      fontFamily: dyslexicEnabled ? 'OpenDyslexic' : undefined,
    },
  });

export default function CompanyDetailsScreen({ route, navigation }) {
  const { currentTheme } = useContext(ThemeContext);
  const { fontSizeMultiplier } = useContext(FontSizeContext);
  const { dyslexicEnabled } = useDyslexic();
  const { ttsEnabled } = useTts();
  const [loading, setLoading] = useState(false);
  const [applied, setApplied] = useState(false);

  const styles = companyDetailsStyles(currentTheme, fontSizeMultiplier, dyslexicEnabled);
  const { company, category } = route.params || { company: {}, category: 'Category' };

  // Mock job listings for the company
  const jobListings = [
    { id: 1, title: 'Senior Developer', salary: '$80k - $120k', type: 'Full-time' },
    { id: 2, title: 'Junior Developer', salary: '$50k - $70k', type: 'Full-time' },
    { id: 3, title: 'UI/UX Designer', salary: '$60k - $90k', type: 'Full-time' },
    { id: 4, title: 'Project Manager', salary: '$70k - $100k', type: 'Full-time' },
    { id: 5, title: 'QA Engineer', salary: '$55k - $80k', type: 'Full-time' },
  ];

  // Mock applicants list
  const [applicants, setApplicants] = useState([]);

    const handleApply = async () => {
    setLoading(true);
    try {
        const currentUser = await getCurrentUser();
        
        if (!currentUser) {
        Alert.alert('Error', 'Please login first to apply');
        setLoading(false);
        return;
        }

        // Navigate to ResumeScreen - make sure the screen name matches exactly
        navigation.navigate('ResumeScreen', { company });

    } catch (error) {
        console.error('Error applying:', error);
        Alert.alert('Error', 'Failed to proceed to resume');
        setLoading(false);
    }
    };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.backButton}>←</Text>
          </TouchableOpacity>
          <Text style={styles.companyIconLarge}>{company.icon}</Text>
          <SpeakableText style={styles.companyNameHeader} ttsEnabled={ttsEnabled}>
            {company.name}
          </SpeakableText>
        </View>
      </View>

      <ScrollView style={styles.content}>
        {/* Company Description */}
        <View style={styles.section}>
          <SpeakableText style={styles.sectionTitle} ttsEnabled={ttsEnabled}>
            About Company
          </SpeakableText>
          <SpeakableText style={styles.descriptionText} ttsEnabled={ttsEnabled}>
            {company.description}
          </SpeakableText>
        </View>

        {/* Stats */}
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <SpeakableText style={styles.statNumber} ttsEnabled={ttsEnabled}>
              {company.jobs}
            </SpeakableText>
            <SpeakableText style={styles.statLabel} ttsEnabled={ttsEnabled}>
              Open Jobs
            </SpeakableText>
          </View>
          <View style={styles.statItem}>
            <SpeakableText style={styles.statNumber} ttsEnabled={ttsEnabled}>
              ⭐ {company.rating}
            </SpeakableText>
            <SpeakableText style={styles.statLabel} ttsEnabled={ttsEnabled}>
              Rating
            </SpeakableText>
          </View>
          <View style={styles.statItem}>
            <SpeakableText style={styles.statNumber} ttsEnabled={ttsEnabled}>
              {applicants.length}
            </SpeakableText>
            <SpeakableText style={styles.statLabel} ttsEnabled={ttsEnabled}>
              Applicants
            </SpeakableText>
          </View>
        </View>

        {/* Job Listings */}
        <View style={styles.section}>
          <SpeakableText style={styles.sectionTitle} ttsEnabled={ttsEnabled}>
            Job Openings
          </SpeakableText>
          <View style={styles.jobsList}>
            {jobListings.map((job, index) => (
              <View
                key={index}
                style={[
                  styles.jobItem,
                  index === jobListings.length - 1 && { borderBottomWidth: 0 },
                ]}
              >
                <SpeakableText style={styles.jobTitle} ttsEnabled={ttsEnabled}>
                  {job.title}
                </SpeakableText>
                <SpeakableText style={styles.jobSalary} ttsEnabled={ttsEnabled}>
                  💰 {job.salary} • {job.type}
                </SpeakableText>
              </View>
            ))}
          </View>
        </View>

        {/* Apply Button - Navigate to ResumeScreen */}
        <TouchableOpacity
          style={[styles.applyButton, loading && { opacity: 0.6 }]}
          onPress={handleApply}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <SpeakableText style={styles.applyButtonText} ttsEnabled={ttsEnabled}>
              Apply Now
            </SpeakableText>
          )}
        </TouchableOpacity>

        {/* Company Benefits Section */}
        <View style={styles.section}>
          <SpeakableText style={styles.sectionTitle} ttsEnabled={ttsEnabled}>
            Why Join Us?
          </SpeakableText>
          <SpeakableText style={styles.descriptionText} ttsEnabled={ttsEnabled}>
            ✓ Competitive salaries{'\n'}
            ✓ Flexible working hours{'\n'}
            ✓ Professional development{'\n'}
            ✓ Great team culture{'\n'}
            ✓ Career growth opportunities
          </SpeakableText>
        </View>

        {/* Company Contact Section */}
        <View style={styles.section}>
          <SpeakableText style={styles.sectionTitle} ttsEnabled={ttsEnabled}>
            Get in Touch
          </SpeakableText>
          <SpeakableText style={styles.descriptionText} ttsEnabled={ttsEnabled}>
            📧 careers@{company.name?.toLowerCase().replace(/\s+/g, '')}.com{'\n'}
            🌐 www.{company.name?.toLowerCase().replace(/\s+/g, '')}.com{'\n'}
            📍 Head Office: Metro Manila, Philippines
          </SpeakableText>
        </View>

        {/* Applicants List - Shows if there are any */}
        {applicants.length > 0 && (
          <View style={styles.section}>
            <SpeakableText style={styles.sectionTitle} ttsEnabled={ttsEnabled}>
              Your Applications
            </SpeakableText>
            <View style={styles.applicantsList}>
              {applicants.map((applicant, index) => (
                <View
                  key={index}
                  style={[
                    styles.applicantItem,
                    index === applicants.length - 1 && { borderBottomWidth: 0 },
                  ]}
                >
                  <SpeakableText style={styles.applicantName} ttsEnabled={ttsEnabled}>
                    {applicant.userName}
                  </SpeakableText>
                  <SpeakableText style={styles.applicantDate} ttsEnabled={ttsEnabled}>
                    Applied on: {applicant.appliedDate} at {applicant.appliedTime}
                  </SpeakableText>
                </View>
              ))}
            </View>
          </View>
        )}
      </ScrollView>
    </View>
  );
}
import React, { useContext, useState, useEffect } from 'react';
import { View, ScrollView, TouchableOpacity, StyleSheet, Text, Alert, ActivityIndicator, TextInput } from 'react-native';
import { ThemeContext } from '../../App';
import { FontSizeContext } from '../utils/FontSizeContext';
import { useDyslexic } from '../utils/DyslexicContext';
import SpeakableText from '../components/SpeakableText';
import { useTts } from '../utils/TtsContext';
import { getCurrentUser, updateUserProfile } from '../utils/UserStorage';

const editResumeStyles = (theme, fontSizeMultiplier = 1, dyslexicEnabled = false) =>
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
      paddingBottom: 100, // Add extra space for button visibility
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
      marginBottom: 16,
      fontFamily: dyslexicEnabled ? 'OpenDyslexic' : undefined,
      borderBottomWidth: 2,
      borderBottomColor: theme.colors.primary,
      paddingBottom: 8,
    },
    inputGroup: {
      marginBottom: 16,
    },
    label: {
      fontSize: 14 * fontSizeMultiplier,
      fontWeight: '600',
      color: theme.colors.text,
      marginBottom: 8,
      fontFamily: dyslexicEnabled ? 'OpenDyslexic' : undefined,
    },
    requiredLabel: {
      color: '#ff4444',
      marginLeft: 4,
    },
    input: {
      backgroundColor: theme.colors.background,
      borderWidth: 1,
      borderColor: theme.colors.border || theme.colors.muted,
      borderRadius: 8,
      paddingHorizontal: 12,
      paddingVertical: 10,
      fontSize: 14 * fontSizeMultiplier,
      color: theme.colors.text,
      fontFamily: dyslexicEnabled ? 'OpenDyslexic' : undefined,
    },
    inputError: {
      borderColor: '#ff4444',
      borderWidth: 2,
    },
    textArea: {
      minHeight: 100,
      textAlignVertical: 'top',
      paddingTop: 12,
    },
    addButton: {
      backgroundColor: `${theme.colors.primary}30`,
      borderWidth: 2,
      borderColor: theme.colors.primary,
      borderStyle: 'dashed',
      paddingVertical: 12,
      paddingHorizontal: 16,
      borderRadius: 8,
      alignItems: 'center',
      marginTop: 12,
    },
    addButtonText: {
      color: theme.colors.primary,
      fontSize: 14 * fontSizeMultiplier,
      fontWeight: '600',
      fontFamily: dyslexicEnabled ? 'OpenDyslexic' : undefined,
    },
    itemContainer: {
      backgroundColor: theme.colors.background,
      padding: 12,
      borderRadius: 8,
      marginBottom: 12,
      borderLeftWidth: 4,
      borderLeftColor: theme.colors.primary,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    itemText: {
      flex: 1,
      fontSize: 14 * fontSizeMultiplier,
      color: theme.colors.text,
      fontFamily: dyslexicEnabled ? 'OpenDyslexic' : undefined,
    },
    deleteButton: {
      paddingHorizontal: 12,
      paddingVertical: 6,
      backgroundColor: '#ff4444',
      borderRadius: 6,
    },
    deleteButtonText: {
      color: '#fff',
      fontSize: 12,
      fontWeight: '600',
    },
    buttonContainer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: theme.colors.background,
      borderTopWidth: 1,
      borderTopColor: theme.colors.border || theme.colors.muted,
      padding: 16,
      paddingBottom: 30, // Extra padding for home button
    },
    saveButton: {
      backgroundColor: theme.colors.primary,
      padding: 16,
      borderRadius: 12,
      alignItems: 'center',
    },
    saveButtonText: {
      color: '#fff',
      fontSize: 16 * fontSizeMultiplier,
      fontWeight: '600',
      fontFamily: dyslexicEnabled ? 'OpenDyslexic' : undefined,
    },
    skillBadge: {
      backgroundColor: `${theme.colors.primary}20`,
      paddingHorizontal: 12,
      paddingVertical: 6,
      borderRadius: 16,
      marginRight: 8,
      marginBottom: 8,
      flexDirection: 'row',
      alignItems: 'center',
    },
    skillText: {
      color: theme.colors.primary,
      fontSize: 13 * fontSizeMultiplier,
      fontFamily: dyslexicEnabled ? 'OpenDyslexic' : undefined,
    },
    skillRemoveButton: {
      marginLeft: 8,
      paddingHorizontal: 4,
    },
    skillsContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginTop: 8,
    },
    errorText: {
      color: '#ff4444',
      fontSize: 12 * fontSizeMultiplier,
      marginTop: 4,
      fontFamily: dyslexicEnabled ? 'OpenDyslexic' : undefined,
    },
  });

export default function EditResumeScreen({ route, navigation }) {
  const { currentTheme } = useContext(ThemeContext);
  const { fontSizeMultiplier } = useContext(FontSizeContext);
  const { dyslexicEnabled } = useDyslexic();
  const { ttsEnabled } = useTts();
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [errors, setErrors] = useState({});

  // Basic Information
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [title, setTitle] = useState('');
  const [about, setAbout] = useState('');

  // Skills
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState('');

  // Experience
  const [experience, setExperience] = useState([]);
  const [newExp, setNewExp] = useState({ role: '', company: '', period: '', description: '' });

  // Education
  const [education, setEducation] = useState([]);
  const [newEdu, setNewEdu] = useState({ degree: '', school: '', year: '' });

  // Certifications
  const [certifications, setCertifications] = useState('');

  const styles = editResumeStyles(currentTheme, fontSizeMultiplier, dyslexicEnabled);

  useEffect(() => {
    loadUserProfile();
  }, []);

  const loadUserProfile = async () => {
    try {
      setLoading(true);
      const user = await getCurrentUser();

      if (user) {
        setCurrentUser(user);
        setName(user.name || '');
        setEmail(user.email || '');
        setPhone(user.phone || '');
        setLocation(user.location || '');
        setTitle(user.title || '');
        setAbout(user.about || '');
        setSkills(user.skills || []);
        setExperience(user.experience || []);
        setEducation(user.education || []);
        setCertifications(user.certifications || '');
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

  // Validation function
  const validateForm = () => {
    const newErrors = {};

    // Required fields
    if (!name.trim()) newErrors.name = 'Full name is required';
    if (!title.trim()) newErrors.title = 'Job title is required';
    if (!phone.trim()) newErrors.phone = 'Phone number is required';
    if (!location.trim()) newErrors.location = 'Location is required';
    if (!about.trim()) newErrors.about = 'Professional summary is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleAddSkill = () => {
    if (newSkill.trim()) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill('');
    }
  };

  const handleRemoveSkill = (index) => {
    setSkills(skills.filter((_, i) => i !== index));
  };

  const handleAddExperience = () => {
    if (newExp.role && newExp.company) {
      setExperience([...experience, newExp]);
      setNewExp({ role: '', company: '', period: '', description: '' });
    } else {
      Alert.alert('Error', 'Please fill in role and company');
    }
  };

  const handleRemoveExperience = (index) => {
    setExperience(experience.filter((_, i) => i !== index));
  };

  const handleAddEducation = () => {
    if (newEdu.degree && newEdu.school) {
      setEducation([...education, newEdu]);
      setNewEdu({ degree: '', school: '', year: '' });
    } else {
      Alert.alert('Error', 'Please fill in degree and school');
    }
  };

  const handleRemoveEducation = (index) => {
    setEducation(education.filter((_, i) => i !== index));
  };

  const handleSaveResume = async () => {
    if (!validateForm()) {
      Alert.alert('Validation Error', 'Please fill in all required fields');
      return;
    }

    if (!currentUser) {
      Alert.alert('Error', 'No user data found');
      return;
    }

    setSaving(true);
    try {
      const updatedData = {
        name,
        phone,
        location,
        title,
        about,
        skills,
        experience,
        education,
        certifications,
      };

      const result = await updateUserProfile(currentUser.id, updatedData);

      if (result.success) {
        Alert.alert('Success', 'Resume updated successfully!', [
          {
            text: 'OK',
            onPress: () => navigation.goBack(),
          },
        ]);
      } else {
        Alert.alert('Error', result.message || 'Failed to save resume');
      }
    } catch (error) {
      console.error('Error saving resume:', error);
      Alert.alert('Error', 'Failed to save resume');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
        <ActivityIndicator size="large" color={currentTheme.colors.primary} />
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
          Edit Resume
        </SpeakableText>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Basic Information Section */}
        <View style={styles.section}>
          <SpeakableText style={styles.sectionTitle} ttsEnabled={ttsEnabled}>
            Basic Information
          </SpeakableText>

          <View style={styles.inputGroup}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <SpeakableText style={styles.label} ttsEnabled={ttsEnabled}>
                Full Name
              </SpeakableText>
              <Text style={styles.requiredLabel}>*</Text>
            </View>
            <TextInput
              style={[styles.input, errors.name && styles.inputError]}
              placeholder="Enter your full name"
              placeholderTextColor={currentTheme.colors.muted}
              value={name}
              onChangeText={(text) => {
                setName(text);
                if (errors.name) setErrors({ ...errors, name: '' });
              }}
            />
            {errors.name && <SpeakableText style={styles.errorText} ttsEnabled={ttsEnabled}>{errors.name}</SpeakableText>}
          </View>

          <View style={styles.inputGroup}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <SpeakableText style={styles.label} ttsEnabled={ttsEnabled}>
                Job Title
              </SpeakableText>
              <Text style={styles.requiredLabel}>*</Text>
            </View>
            <TextInput
              style={[styles.input, errors.title && styles.inputError]}
              placeholder="e.g., Software Developer"
              placeholderTextColor={currentTheme.colors.muted}
              value={title}
              onChangeText={(text) => {
                setTitle(text);
                if (errors.title) setErrors({ ...errors, title: '' });
              }}
            />
            {errors.title && <SpeakableText style={styles.errorText} ttsEnabled={ttsEnabled}>{errors.title}</SpeakableText>}
          </View>

          <View style={styles.inputGroup}>
            <SpeakableText style={styles.label} ttsEnabled={ttsEnabled}>
              Email
            </SpeakableText>
            <TextInput
              style={styles.input}
              placeholder="Enter your email"
              placeholderTextColor={currentTheme.colors.muted}
              value={email}
              editable={false}
            />
          </View>

          <View style={styles.inputGroup}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <SpeakableText style={styles.label} ttsEnabled={ttsEnabled}>
                Phone
              </SpeakableText>
              <Text style={styles.requiredLabel}>*</Text>
            </View>
            <TextInput
              style={[styles.input, errors.phone && styles.inputError]}
              placeholder="Enter your phone number"
              placeholderTextColor={currentTheme.colors.muted}
              value={phone}
              onChangeText={(text) => {
                setPhone(text);
                if (errors.phone) setErrors({ ...errors, phone: '' });
              }}
            />
            {errors.phone && <SpeakableText style={styles.errorText} ttsEnabled={ttsEnabled}>{errors.phone}</SpeakableText>}
          </View>

          <View style={styles.inputGroup}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <SpeakableText style={styles.label} ttsEnabled={ttsEnabled}>
                Location
              </SpeakableText>
              <Text style={styles.requiredLabel}>*</Text>
            </View>
            <TextInput
              style={[styles.input, errors.location && styles.inputError]}
              placeholder="Enter your location"
              placeholderTextColor={currentTheme.colors.muted}
              value={location}
              onChangeText={(text) => {
                setLocation(text);
                if (errors.location) setErrors({ ...errors, location: '' });
              }}
            />
            {errors.location && <SpeakableText style={styles.errorText} ttsEnabled={ttsEnabled}>{errors.location}</SpeakableText>}
          </View>
        </View>

        {/* Professional Summary */}
        <View style={styles.section}>
          <SpeakableText style={styles.sectionTitle} ttsEnabled={ttsEnabled}>
            Professional Summary
          </SpeakableText>

          <View style={styles.inputGroup}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <SpeakableText style={styles.label} ttsEnabled={ttsEnabled}>
                About You
              </SpeakableText>
              <Text style={styles.requiredLabel}>*</Text>
            </View>
            <TextInput
              style={[styles.input, styles.textArea, errors.about && styles.inputError]}
              placeholder="Tell us about yourself and your career goals"
              placeholderTextColor={currentTheme.colors.muted}
              value={about}
              onChangeText={(text) => {
                setAbout(text);
                if (errors.about) setErrors({ ...errors, about: '' });
              }}
              multiline
            />
            {errors.about && <SpeakableText style={styles.errorText} ttsEnabled={ttsEnabled}>{errors.about}</SpeakableText>}
          </View>
        </View>

        {/* Skills Section */}
        <View style={styles.section}>
          <SpeakableText style={styles.sectionTitle} ttsEnabled={ttsEnabled}>
            Technical Skills
          </SpeakableText>

          {/* Current Skills */}
          {skills.length > 0 && (
            <View style={styles.skillsContainer}>
              {skills.map((skill, index) => (
                <View key={index} style={styles.skillBadge}>
                  <SpeakableText style={styles.skillText} ttsEnabled={ttsEnabled}>
                    {skill}
                  </SpeakableText>
                  <TouchableOpacity
                    style={styles.skillRemoveButton}
                    onPress={() => handleRemoveSkill(index)}
                  >
                    <Text style={{ color: currentTheme.colors.primary, fontWeight: 'bold' }}>
                      ✕
                    </Text>
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          )}

          {/* Add Skill */}
          <View style={styles.inputGroup}>
            <SpeakableText style={styles.label} ttsEnabled={ttsEnabled}>
              Add Skill
            </SpeakableText>
            <View style={{ flexDirection: 'row', gap: 8 }}>
              <TextInput
                style={[styles.input, { flex: 1 }]}
                placeholder="e.g., React Native"
                placeholderTextColor={currentTheme.colors.muted}
                value={newSkill}
                onChangeText={setNewSkill}
              />
              <TouchableOpacity
                style={[styles.addButton, { marginTop: 0, flex: 0.3, justifyContent: 'center' }]}
                onPress={handleAddSkill}
              >
                <SpeakableText style={styles.addButtonText} ttsEnabled={ttsEnabled}>
                  Add
                </SpeakableText>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Experience Section */}
        <View style={styles.section}>
          <SpeakableText style={styles.sectionTitle} ttsEnabled={ttsEnabled}>
            Work Experience
          </SpeakableText>

          {/* Current Experience */}
          {experience.length > 0 && (
            experience.map((exp, index) => (
              <View key={index} style={styles.itemContainer}>
                <View style={{ flex: 1 }}>
                  <SpeakableText style={[styles.itemText, { fontWeight: '600' }]} ttsEnabled={ttsEnabled}>
                    {exp.role} at {exp.company}
                  </SpeakableText>
                  <SpeakableText style={styles.itemText} ttsEnabled={ttsEnabled}>
                    {exp.period}
                  </SpeakableText>
                </View>
                <TouchableOpacity
                  style={styles.deleteButton}
                  onPress={() => handleRemoveExperience(index)}
                >
                  <Text style={styles.deleteButtonText}>Delete</Text>
                </TouchableOpacity>
              </View>
            ))
          )}

          {/* Add Experience */}
          <View style={styles.inputGroup}>
            <SpeakableText style={styles.label} ttsEnabled={ttsEnabled}>
              Job Title
            </SpeakableText>
            <TextInput
              style={styles.input}
              placeholder="e.g., Senior Developer"
              placeholderTextColor={currentTheme.colors.muted}
              value={newExp.role}
              onChangeText={(text) => setNewExp({ ...newExp, role: text })}
            />
          </View>

          <View style={styles.inputGroup}>
            <SpeakableText style={styles.label} ttsEnabled={ttsEnabled}>
              Company
            </SpeakableText>
            <TextInput
              style={styles.input}
              placeholder="e.g., Tech Corp"
              placeholderTextColor={currentTheme.colors.muted}
              value={newExp.company}
              onChangeText={(text) => setNewExp({ ...newExp, company: text })}
            />
          </View>

          <View style={styles.inputGroup}>
            <SpeakableText style={styles.label} ttsEnabled={ttsEnabled}>
              Period
            </SpeakableText>
            <TextInput
              style={styles.input}
              placeholder="e.g., Jan 2020 - Dec 2022"
              placeholderTextColor={currentTheme.colors.muted}
              value={newExp.period}
              onChangeText={(text) => setNewExp({ ...newExp, period: text })}
            />
          </View>

          <View style={styles.inputGroup}>
            <SpeakableText style={styles.label} ttsEnabled={ttsEnabled}>
              Description
            </SpeakableText>
            <TextInput
              style={[styles.input, styles.textArea]}
              placeholder="Describe your responsibilities and achievements"
              placeholderTextColor={currentTheme.colors.muted}
              value={newExp.description}
              onChangeText={(text) => setNewExp({ ...newExp, description: text })}
              multiline
            />
          </View>

          <TouchableOpacity style={styles.addButton} onPress={handleAddExperience}>
            <SpeakableText style={styles.addButtonText} ttsEnabled={ttsEnabled}>
              + Add Experience
            </SpeakableText>
          </TouchableOpacity>
        </View>

        {/* Education Section */}
        <View style={styles.section}>
          <SpeakableText style={styles.sectionTitle} ttsEnabled={ttsEnabled}>
            Education
          </SpeakableText>

          {/* Current Education */}
          {education.length > 0 && (
            education.map((edu, index) => (
              <View key={index} style={styles.itemContainer}>
                <View style={{ flex: 1 }}>
                  <SpeakableText style={[styles.itemText, { fontWeight: '600' }]} ttsEnabled={ttsEnabled}>
                    {edu.degree}
                  </SpeakableText>
                  <SpeakableText style={styles.itemText} ttsEnabled={ttsEnabled}>
                    {edu.school} • {edu.year}
                  </SpeakableText>
                </View>
                <TouchableOpacity
                  style={styles.deleteButton}
                  onPress={() => handleRemoveEducation(index)}
                >
                  <Text style={styles.deleteButtonText}>Delete</Text>
                </TouchableOpacity>
              </View>
            ))
          )}

          {/* Add Education */}
          <View style={styles.inputGroup}>
            <SpeakableText style={styles.label} ttsEnabled={ttsEnabled}>
              Degree
            </SpeakableText>
            <TextInput
              style={styles.input}
              placeholder="e.g., Bachelor of Science"
              placeholderTextColor={currentTheme.colors.muted}
              value={newEdu.degree}
              onChangeText={(text) => setNewEdu({ ...newEdu, degree: text })}
            />
          </View>

          <View style={styles.inputGroup}>
            <SpeakableText style={styles.label} ttsEnabled={ttsEnabled}>
              School/University
            </SpeakableText>
            <TextInput
              style={styles.input}
              placeholder="e.g., University of Manila"
              placeholderTextColor={currentTheme.colors.muted}
              value={newEdu.school}
              onChangeText={(text) => setNewEdu({ ...newEdu, school: text })}
            />
          </View>

          <View style={styles.inputGroup}>
            <SpeakableText style={styles.label} ttsEnabled={ttsEnabled}>
              Year
            </SpeakableText>
            <TextInput
              style={styles.input}
              placeholder="e.g., 2020"
              placeholderTextColor={currentTheme.colors.muted}
              value={newEdu.year}
              onChangeText={(text) => setNewEdu({ ...newEdu, year: text })}
            />
          </View>

          <TouchableOpacity style={styles.addButton} onPress={handleAddEducation}>
            <SpeakableText style={styles.addButtonText} ttsEnabled={ttsEnabled}>
              + Add Education
            </SpeakableText>
          </TouchableOpacity>
        </View>

        {/* Certifications Section */}
        <View style={styles.section}>
          <SpeakableText style={styles.sectionTitle} ttsEnabled={ttsEnabled}>
            Certifications
          </SpeakableText>

          <View style={styles.inputGroup}>
            <TextInput
              style={[styles.input, styles.textArea]}
              placeholder="List your certifications (e.g., AWS Certified, Google Associate)"
              placeholderTextColor={currentTheme.colors.muted}
              value={certifications}
              onChangeText={setCertifications}
              multiline
            />
          </View>
        </View>
      </ScrollView>

      {/* Floating Save Button - Positioned above home button */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.saveButton, saving && { opacity: 0.6 }]}
          onPress={handleSaveResume}
          disabled={saving}
        >
          {saving ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <SpeakableText style={styles.saveButtonText} ttsEnabled={ttsEnabled}>
              💾 Save Resume
            </SpeakableText>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}
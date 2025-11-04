import React, { useState, useContext } from 'react';
import {
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Modal,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { ThemeContext } from '../../App';
import { FontSizeContext } from '../utils/FontSizeContext';
import SpeakableText from '../components/SpeakableText';

export default function UploadSkillsScreen({ visible, onClose }) {
  const { currentTheme } = useContext(ThemeContext);
  const { fontSizeMultiplier } = useContext(FontSizeContext);
  const styles = createStyles(currentTheme, fontSizeMultiplier);

  const [formData, setFormData] = useState({
    skills: '',
    experience: '',
    education: '',
    certifications: '',
    languages: '',
    softSkills: '',
    portfolioLink: '',
    linkedinProfile: '',
  });

  const handleSubmit = () => {
    console.log(formData);
    onClose();
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.modalHeader}>
            <SpeakableText style={styles.modalTitle}>Upload Your Skills</SpeakableText>
            <TouchableOpacity onPress={onClose}>
              <MaterialIcons name="close" size={24 * fontSizeMultiplier} color={currentTheme.colors.text} />
            </TouchableOpacity>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.formContainer}>
              {[
                { label: 'Technical Skills', value: formData.skills, key: 'skills', multiline: true, placeholder: 'e.g., JavaScript, Python, React Native' },
                { label: 'Work Experience', value: formData.experience, key: 'experience', multiline: true, placeholder: 'Years of experience and roles' },
                { label: 'Education', value: formData.education, key: 'education', multiline: true, placeholder: 'Degree, Institution, Year' },
                { label: 'Certifications', value: formData.certifications, key: 'certifications', multiline: true, placeholder: 'Professional certifications' },
                { label: 'Languages', value: formData.languages, key: 'languages', placeholder: 'Languages you speak' },
                { label: 'Soft Skills', value: formData.softSkills, key: 'softSkills', multiline: true, placeholder: 'e.g., Leadership, Communication, Teamwork' },
                { label: 'Portfolio Link', value: formData.portfolioLink, key: 'portfolioLink', placeholder: 'Your portfolio website URL' },
                { label: 'LinkedIn Profile', value: formData.linkedinProfile, key: 'linkedinProfile', placeholder: 'Your LinkedIn profile URL' },
              ].map(({ label, value, key, multiline, placeholder }) => (
                <View style={styles.inputGroup} key={key}>
                  <SpeakableText style={styles.label}>{label}</SpeakableText>
                  <TextInput
                    style={styles.input}
                    placeholder={placeholder}
                    placeholderTextColor={currentTheme.colors.muted}
                    value={value}
                    onChangeText={(text) => setFormData({ ...formData, [key]: text })}
                    multiline={multiline}
                  />
                </View>
              ))}
              <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                <SpeakableText style={styles.submitButtonText}>Submit Skills</SpeakableText>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}

const createStyles = (theme, fontSizeMultiplier) =>
  StyleSheet.create({
    modalContainer: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      justifyContent: 'flex-end',
    },
    modalContent: {
      backgroundColor: theme.colors.background,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      height: '90%',
      padding: 16,
    },
    modalHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 20,
    },
    modalTitle: {
      fontSize: 20 * fontSizeMultiplier,
      fontWeight: 'bold',
      color: theme.colors.text,
    },
    formContainer: {
      paddingBottom: 20,
    },
    inputGroup: {
      marginBottom: 16,
    },
    label: {
      fontSize: 16 * fontSizeMultiplier,
      fontWeight: '600',
      color: theme.colors.text,
      marginBottom: 8,
    },
    input: {
      backgroundColor: theme.colors.card,
      borderRadius: 8,
      padding: 12,
      fontSize: 16 * fontSizeMultiplier,
      color: theme.colors.text,
      minHeight: 48,
    },
    submitButton: {
      backgroundColor: theme.colors.primary,
      padding: 16,
      borderRadius: 8,
      alignItems: 'center',
      marginTop: 20,
    },
    submitButtonText: {
      color: '#fff',
      fontSize: 16 * fontSizeMultiplier,
      fontWeight: '600',
    },
  });

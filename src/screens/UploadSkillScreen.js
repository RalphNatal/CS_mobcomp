import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Modal,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import theme from '../styles/theme';

export default function UploadSkillsScreen({ visible, onClose }) {
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
    // Validate and process form data here
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
            <Text style={styles.modalTitle}>Upload Your Skills</Text>
            <TouchableOpacity onPress={onClose}>
              <MaterialIcons name="close" size={24} color={theme.colors.text} />
            </TouchableOpacity>
          </View>

          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.formContainer}>
              <View style={styles.inputGroup}>
                <Text style={styles.label}>Technical Skills</Text>
                <TextInput
                  style={styles.input}
                  placeholder="e.g., JavaScript, Python, React Native"
                  value={formData.skills}
                  onChangeText={(text) => setFormData({...formData, skills: text})}
                  multiline
                />
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.label}>Work Experience</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Years of experience and roles"
                  value={formData.experience}
                  onChangeText={(text) => setFormData({...formData, experience: text})}
                  multiline
                />
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.label}>Education</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Degree, Institution, Year"
                  value={formData.education}
                  onChangeText={(text) => setFormData({...formData, education: text})}
                  multiline
                />
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.label}>Certifications</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Professional certifications"
                  value={formData.certifications}
                  onChangeText={(text) => setFormData({...formData, certifications: text})}
                  multiline
                />
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.label}>Languages</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Languages you speak"
                  value={formData.languages}
                  onChangeText={(text) => setFormData({...formData, languages: text})}
                />
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.label}>Soft Skills</Text>
                <TextInput
                  style={styles.input}
                  placeholder="e.g., Leadership, Communication, Teamwork"
                  value={formData.softSkills}
                  onChangeText={(text) => setFormData({...formData, softSkills: text})}
                  multiline
                />
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.label}>Portfolio Link</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Your portfolio website URL"
                  value={formData.portfolioLink}
                  onChangeText={(text) => setFormData({...formData, portfolioLink: text})}
                />
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.label}>LinkedIn Profile</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Your LinkedIn profile URL"
                  value={formData.linkedinProfile}
                  onChangeText={(text) => setFormData({...formData, linkedinProfile: text})}
                />
              </View>

              <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                <Text style={styles.submitButtonText}>Submit Skills</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
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
    fontSize: 20,
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
    fontSize: 16,
    fontWeight: '600',
    color: theme.colors.text,
    marginBottom: 8,
  },
  input: {
    backgroundColor: theme.colors.card,
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
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
    fontSize: 16,
    fontWeight: '600',
  },
});
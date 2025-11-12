import React, { useContext } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { ThemeContext } from '../../App';
import { useDyslexic } from '../utils/DyslexicContext';
import { useTts } from '../utils/TtsContext';
import { FontSizeContext } from '../utils/FontSizeContext';
import { styles } from '../styles/ProfileStyles';

export default function ProfileScreen({ navigation }) {
  const { currentTheme } = useContext(ThemeContext);
  const { dyslexicEnabled } = useDyslexic();
  const { ttsEnabled } = useTts();
  const { fontSizeMultiplier } = useContext(FontSizeContext);

  const userProfile = {
    name: 'Juan Dela Cruz',
    title: 'Senior Software Engineer',
    email: 'juan.delacruz@example.com',
    phone: '+63 912 345 6789',
    location: 'Manila, Philippines',
    about: 'Experienced software engineer with 5+ years of expertise in mobile and web development. Passionate about creating user-friendly applications and solving complex problems.',
    skills: ['React Native', 'JavaScript', 'Python', 'Node.js', 'AWS', 'Git'],
    experience: [
      {
        role: 'Senior Software Engineer',
        company: 'Tech Solutions Inc.',
        period: '2020 - Present',
        description: 'Leading mobile app development team, implementing best practices.'
      },
      {
        role: 'Software Developer',
        company: 'Digital Innovations',
        period: '2018 - 2020',
        description: 'Developed and maintained multiple web applications.'
      }
    ],
    education: [
      {
        degree: 'BS Computer Science',
        school: 'University of the Philippines',
        year: '2018'
      }
    ]
  };

  const handleEditProfile = () => {
    Alert.alert('Edit Profile', 'Edit profile functionality coming soon');
  };

  const dynamicStyles = styles(currentTheme, fontSizeMultiplier, dyslexicEnabled);

  return (
    <ScrollView style={dynamicStyles.container}>
      {/* Header Section */}
      <View style={dynamicStyles.header}>
        <Image
          source={{ uri: 'https://via.placeholder.com/80' }}
          style={dynamicStyles.avatar}
        />
        <View style={dynamicStyles.headerInfo}>
          <Text style={dynamicStyles.name}>{userProfile.name}</Text>
          <Text style={dynamicStyles.title}>{userProfile.title}</Text>
          <View style={dynamicStyles.locationContainer}>
            <MaterialIcons name="location-on" size={16} color={currentTheme.colors.muted} />
            <Text style={dynamicStyles.location}>{userProfile.location}</Text>
          </View>
        </View>
      </View>

      {/* Edit Profile Button */}
      <TouchableOpacity style={dynamicStyles.editButton} onPress={handleEditProfile}>
        <MaterialIcons name="edit" size={20} color="#fff" />
        <Text style={dynamicStyles.editButtonText}>Edit Profile</Text>
      </TouchableOpacity>

      {/* Contact Information */}
      <View style={dynamicStyles.section}>
        <Text style={dynamicStyles.sectionTitle}>Contact Information</Text>
        <View style={dynamicStyles.contactItem}>
          <MaterialIcons name="email" size={20} color={currentTheme.colors.primary} />
          <Text style={dynamicStyles.contactText}>{userProfile.email}</Text>
        </View>
        <View style={dynamicStyles.contactItem}>
          <MaterialIcons name="phone" size={20} color={currentTheme.colors.primary} />
          <Text style={dynamicStyles.contactText}>{userProfile.phone}</Text>
        </View>
      </View>

      {/* About Section */}
      <View style={dynamicStyles.section}>
        <Text style={dynamicStyles.sectionTitle}>About</Text>
        <Text style={dynamicStyles.about}>{userProfile.about}</Text>
      </View>

      {/* Skills Section */}
      <View style={dynamicStyles.section}>
        <Text style={dynamicStyles.sectionTitle}>Skills</Text>
        <View style={dynamicStyles.skillsContainer}>
          {userProfile.skills.map((skill, index) => (
            <View key={index} style={dynamicStyles.skillBadge}>
              <Text style={dynamicStyles.skillText}>{skill}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Experience Section */}
      <View style={dynamicStyles.section}>
        <Text style={dynamicStyles.sectionTitle}>Experience</Text>
        {userProfile.experience.map((exp, index) => (
          <View key={index} style={dynamicStyles.experienceItem}>
            <Text style={dynamicStyles.roleText}>{exp.role}</Text>
            <Text style={dynamicStyles.companyText}>{exp.company}</Text>
            <Text style={dynamicStyles.periodText}>{exp.period}</Text>
            <Text style={dynamicStyles.descriptionText}>{exp.description}</Text>
          </View>
        ))}
      </View>

      {/* Education Section */}
      <View style={dynamicStyles.section}>
        <Text style={dynamicStyles.sectionTitle}>Education</Text>
        {userProfile.education.map((edu, index) => (
          <View key={index} style={dynamicStyles.educationItem}>
            <Text style={dynamicStyles.degreeText}>{edu.degree}</Text>
            <Text style={dynamicStyles.schoolText}>{edu.school}</Text>
            <Text style={dynamicStyles.yearText}>{edu.year}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
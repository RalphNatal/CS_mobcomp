import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import theme from '../styles/theme';
import { styles } from '../styles/ProfileStyles';

export default function ProfileScreen() {
  const userProfile = {
    name: 'Juan Dela Cruz',
    title: 'Senior Software Engineer',
    email: 'juan.delacruz@example.com',
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

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../assets/images/profile.png')}
          style={styles.avatar}
        />
        <View style={styles.headerInfo}>
          <Text style={styles.name}>{userProfile.name}</Text>
          <Text style={styles.title}>{userProfile.title}</Text>
          <View style={styles.locationContainer}>
            <MaterialIcons name="location-on" size={16} color={theme.colors.muted} />
            <Text style={styles.location}>{userProfile.location}</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About</Text>
        <Text style={styles.about}>{userProfile.about}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Skills</Text>
        <View style={styles.skillsContainer}>
          {userProfile.skills.map((skill, index) => (
            <View key={index} style={styles.skillBadge}>
              <Text style={styles.skillText}>{skill}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Experience</Text>
        {userProfile.experience.map((exp, index) => (
          <View key={index} style={styles.experienceItem}>
            <Text style={styles.roleText}>{exp.role}</Text>
            <Text style={styles.companyText}>{exp.company}</Text>
            <Text style={styles.periodText}>{exp.period}</Text>
            <Text style={styles.descriptionText}>{exp.description}</Text>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Education</Text>
        {userProfile.education.map((edu, index) => (
          <View key={index} style={styles.educationItem}>
            <Text style={styles.degreeText}>{edu.degree}</Text>
            <Text style={styles.schoolText}>{edu.school}</Text>
            <Text style={styles.yearText}>{edu.year}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
import React, { useContext } from 'react';
import { View, FlatList } from 'react-native';
import CompanyCard from '../components/CompanyCard';
import { jobListStyles } from '../styles/JobListStyles';
import { ThemeContext } from '../../App';

const jobs = [
  { id: '1', name: 'TechWorks Solutions', rating: 4.5, field: 'IT Services' },
  { id: '2', name: 'GreenBuild Construction', rating: 4.2, field: 'Construction' },
  { id: '3', name: 'MedCare Health', rating: 4.8, field: 'Healthcare' },
  { id: '4', name: 'EduLearn Institute', rating: 4.1, field: 'Education' },
];

export default function JobListScreen({ navigation }) {
  const { currentTheme } = useContext(ThemeContext);
  const styles = jobListStyles(currentTheme);

  return (
    <View style={[styles.container, { backgroundColor: currentTheme.colors.background }]}> 
      <FlatList
        data={jobs}
        renderItem={({ item }) => (
          <CompanyCard
            company={item}
            onPress={() => navigation.navigate('JobDetails', { company: item })}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

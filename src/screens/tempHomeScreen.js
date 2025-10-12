import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import theme from '../styles/theme';


const sampleJobs = [
{id:'1', title:'Welding NC II - Trainee', company:'TESDA Accredited Center', location:'Manila'},
{id:'2', title:'Housekeeping NC II - Job Placement', company:'Hospitality Firm', location:'Cebu'},
{id:'3', title:'Automotive Servicing NC II - Apprentice', company:'AutoTech Center', location:'Davao'}
];


function JobCard({item}){
return (
<View style={styles.card}>
<Text style={styles.jobTitle}>{item.title}</Text>
<Text style={styles.meta}>{item.company} • {item.location}</Text>
<TouchableOpacity style={styles.applyBtn}><Text style={{color:'#fff'}}>Apply</Text></TouchableOpacity>
</View>
)
}


export default function HomeScreen(){
return (
<View style={styles.container}>
<Text style={styles.header}>Recommended jobs</Text>
<FlatList data={sampleJobs} keyExtractor={i=>i.id} renderItem={({item})=> <JobCard item={item} />} contentContainerStyle={{paddingBottom:60}} />
</View>
)
}


const styles = StyleSheet.create({
container:{flex:1,backgroundColor:theme.colors.background,padding:16},
header:{fontSize:20,fontWeight:'700',marginBottom:12,color:theme.colors.text},
card:{backgroundColor:theme.colors.card,padding:16,borderRadius:12,marginBottom:12,shadowColor:'#000',shadowOpacity:0.04,shadowRadius:6,elevation:2},
jobTitle:{fontWeight:'700'},
meta:{color:theme.colors.muted,marginTop:6,marginBottom:8},
applyBtn:{backgroundColor:theme.colors.primary,alignSelf:'flex-start',paddingVertical:8,paddingHorizontal:12,borderRadius:8}
});
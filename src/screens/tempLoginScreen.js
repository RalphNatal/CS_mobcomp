import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import InputField from '../components/InputField';
import PrimaryButton from '../components/PrimaryButton';
import theme from '../styles/theme';


export default function LoginScreen({navigation}){
return (
<View style={styles.container}>
<Text style={styles.heading}>Welcome back</Text>
<InputField label="Email" keyboardType="email-address" />
<InputField label="Password" secureTextEntry />


<PrimaryButton title="Sign in" onPress={()=>navigation.replace('Home')} />


<View style={styles.row}>
<Text style={styles.small}>Don't have an account?</Text>
<TouchableOpacity onPress={()=>navigation.navigate('Signup')}>
<Text style={styles.link}> Create one</Text>
</TouchableOpacity>
</View>
</View>
)
}

const styles = StyleSheet.create({
container:{flex:1,padding:20,backgroundColor:theme.colors.background,justifyContent:'center'},
heading:{fontSize:24,fontWeight:'700',marginBottom:20,color:theme.colors.text},
row:{flexDirection:'row',justifyContent:'center',marginTop:16},
small:{color:theme.colors.muted},
link:{color:theme.colors.primary,fontWeight:'600'}
});
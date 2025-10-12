import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import InputField from '../components/InputField';
import PrimaryButton from '../components/PrimaryButton';
import theme from '../styles/theme';


export default function SignupScreen({navigation}){
return (
<View style={styles.container}>
<Text style={styles.heading}>Create your account</Text>


<InputField label="Full name" />
<InputField label="Email" keyboardType="email-address" />
<InputField label="Password" secureTextEntry />


<PrimaryButton title="Create account" onPress={()=>navigation.replace('Home')} />


<Text style={styles.terms}>By creating an account you agree to our Terms & Privacy.</Text>
</View>
)
}


const styles = StyleSheet.create({
container:{flex:1,padding:20,backgroundColor:theme.colors.background,justifyContent:'center'},
heading:{fontSize:22,fontWeight:'700',marginBottom:20,color:theme.colors.text},
terms:{textAlign:'center',marginTop:14,color:theme.colors.muted,fontSize:12}
});
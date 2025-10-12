import React from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import theme from '../styles/theme';


export default function InputField({label, ...props}){
return (
<View style={{marginBottom:16}}>
{label && <Text style={styles.label}>{label}</Text>}
<TextInput style={styles.input} placeholderTextColor={theme.colors.muted} {...props} />
</View>
);
}


const styles = StyleSheet.create({
label: {color: theme.colors.muted, marginBottom:6},
input: {
backgroundColor: theme.colors.card,
padding:12,
borderRadius:10,
borderWidth:1,
borderColor:'#E2E8F0'
}
});
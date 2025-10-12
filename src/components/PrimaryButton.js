import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import theme from '../styles/theme';


export default function PrimaryButton({title, onPress, style}){
return (
<TouchableOpacity onPress={onPress} style={[styles.btn, style]}>
<Text style={styles.txt}>{title}</Text>
</TouchableOpacity>
);
}


const styles = StyleSheet.create({
btn: {
backgroundColor: theme.colors.primary,
paddingVertical: 14,
paddingHorizontal: 20,
borderRadius: 12,
alignItems: 'center',
shadowColor: '#000',
shadowOpacity: 0.08,
shadowRadius: 8,
elevation: 3
},
txt: {
color: '#fff',
fontWeight: '600'
}
});
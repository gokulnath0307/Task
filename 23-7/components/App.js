import React from 'react';
import { Platform, StatusBar, StyleSheet, Text, View } from 'react-native';
import Sampletext from './screen/22-7/sampletext';
import Uptoflex from './screen/uptoflex';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import Apptext from './23-7/components/Apptext'

export default function App() {
  return (
  
    <View style={styles.container}>
      <Apptext name='welcome'></Apptext>
    </View>
    
  );
} 

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
   
  },
 
});

import React from 'react';
import { View,Text,StyleSheet, Platform } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'

const Sampletext = (props) => {
    const{name, phoneno}=props
    return (
       < View style={styles.container} >
         <MaterialCommunityIcons name="account"  color="orange" size="100px" />
         <Text style={styles.text}>{name}--{phoneno}</Text>
          {props.children}
       
       </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'skyblue',
        alignItems:'center',
        justifyContent:'center',
        
    },
    text:{
        fontSize:35,
        color:'white'
    },
})
export default Sampletext;
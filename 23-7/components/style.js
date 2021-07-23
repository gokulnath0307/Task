import { StyleSheet } from "react-native"

 const androidStyles = StyleSheet.create({
    text:{
        color:'blue',
        fontSize:60,
        textAlign:'center'
    
    }
    
})

const iosStyles = StyleSheet.create({
    text:{
        color:'red',
        fontSize:90
    }
})

export default styles={
    android:androidStyles.text,
    ios:iosStyles.text
}
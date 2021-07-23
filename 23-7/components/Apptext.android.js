import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles'
const Apptext = () => {
    return (
        <View>
            <Text style={styles.android}>{props.name}</Text>
        </View>
    );  
}

export default Apptext;
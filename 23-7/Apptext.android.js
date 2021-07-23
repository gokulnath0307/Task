import React from 'react';
import { Text, View } from 'react-native';
const Apptext = () => {
    return (
        <View>
            <Text style={styles.android}>{props.name}</Text>
        </View>
    );  
}

export default Apptext;
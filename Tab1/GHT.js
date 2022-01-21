import React, {Component} from 'react';
import {
    Platform, 
    StyleSheet, 
    Text, 
    View, 
    FlatList
} from 'react-native';
import Talk from 'Talk';

function GHT() {
    return (
        <View
            style={styles.container}>
            <FlatList>
                data
            </FlatList>
            <Text>Hello, world!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
});

export default GHT;
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

function GHT() {
    return (
        <View
            style={styles.container}>
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
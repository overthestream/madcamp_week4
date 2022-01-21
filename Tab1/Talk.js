import React, {Component} from 'react';
//import JHImg from 'JHImg.jpeg';
import {
    Platform, 
    StyleSheet, 
    Text, 
    View,
    Image
} from 'react-native';

function Talk() {
    return (
        <View
            style={styles.container}>
            <Image
                style={styles.profileImg}
                source = {require('./JHImg.jpeg')}>
            </Image>
            <Image
                style={styles.uploadImg}
                source = {require('./NMImg.jpeg')}>
            </Image>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    profileImg: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    uploadImg: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default Talk;
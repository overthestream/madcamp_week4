import React, {Component, useState} from 'react';
import {
    Platform, 
    StyleSheet, 
    Text, 
    View,
    Image
} from 'react-native';

function Talk() {

    const [ULImg, setULImg] = useState(0); // 나중에 수정
    const [PFImg, setPFImg] = useState(0); // 나중에 수정
    const [name, setName] = useState("이제호")
    const [title, setTitle] = useState("\"기훈이 형은 인정이지\"");

    return (
        <View
            style={styles.container}>
            <Image
            style={styles.uploadImg}
            source={require('./NMImg.jpeg')}>
            </Image>
            <View style={styles.Info}>
                <Image
                    style={styles.profileImg}
                    source={require('./JHImg.jpeg')}>
                </Image>
                <Text style={styles.Name}>
                    {name}
                </Text>
                <Text style={styles.Title}>
                    {title}
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 20,
        backgroundColor: '#F1F3F8',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        marginBottom: 10,
        // shadowColor: "#E8E8E8",
        // shadowOpacity: 0.3,
        // shadowOffset: {width: 2, height: 2}
        elevation: 3
    },
    Info: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        borderLeftColor: '#495464',
        borderLeftWidth: 2,  
        marginLeft: 20,
        width: 120
    },
    profileImg: {
        width: 100,
        height: 100,
        borderRadius: 20,
        marginLeft: 6,
        marginTop: 10,
        marginBottom: 10,
    },
    uploadImg: {
        width: 200,
        height: 200,
        marginLeft: 20,
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 20
    },
    Name: {
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: 5,
        marginRight: 5,
        textAlign: 'center'
    },
    Title: {
        fontSize: 15,
        marginTop: 10,
        marginLeft: 5,
        marginRight: 5,
        marginBottom: 10,
        textAlign: 'center'
    }
});

export default Talk;
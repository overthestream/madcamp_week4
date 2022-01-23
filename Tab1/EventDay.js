import React, {useState} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Modal
} from 'react-native';

function EventDay() {

    const initTDname = "이제호";
    const [TDname, setTDName] = useState(initTDname);

    // 놀다와서 모달하기......

    console.log("testestestest")
    return (
        <View
            style={styles.container}>
            <Text style={styles.TDText}>금주의 PICK </Text>
            <TouchableOpacity 
                onPress={() => {}}>
                <Text style={styles.TDnameText}>{TDname}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginLeft: 5,
        marginRight: 5,
        marginTop: 5,
        marginBottom: 5,
    },
    TDText: {
        fontSize: 20
    },
    TDnameText: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    modal: {
        justifyContent: 'center',
    },
    modalContainer: {
        weight: 200,
        height: 200
    }
});
export default EventDay;
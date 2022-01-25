import React, {useState} from 'react';
import {
    View,
    StyleSheet,
    TextInput,
    Text,
    TouchableOpacity
} from 'react-native'
import { NavigationContainer, useNavigation } from '@react-navigation/native';

function Login() {

    const navigation = useNavigation();
    const [userCode, setUserCode] = useState('');

    return (
        <View
            style={styles.container}>
            <TextInput
                style={styles.loginContainer}
                blurOnSubmit={true}
                onKeyPress={(e) => e.key === 'Enter'}
                placeholder='초대 코드를 압력해주세요'
                onChangeText={(text) => {
                    setUserCode(text)
                }}>

            </TextInput>
            <TouchableOpacity
                style={styles.loginBtn}
                onPress={() => {
                    navigation.navigate("main")
                }}>
                <Text>로그인</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        marginBottom: 10,
    },
    loginContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 200,
        height: 50,
        borderRadius: 20,
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        textAlign: 'center'
    },
    loginBtn: {
        width: 200,
        height: 50,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
})
export default Login;
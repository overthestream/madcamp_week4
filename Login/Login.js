import React, {useState} from 'react';
import {
    View,
    StyleSheet,
    TextInput,
    Text,
    TouchableOpacity
} from 'react-native'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

function Login() {

    const navigation = useNavigation();
    const [userCode, setUserCode] = useState('');

    return (
        <View
            style={styles.container}>
            <LinearGradient
                style={styles.linearGradient}
                colors={['#6867AC', '#A267AC']}>
                <Text style={styles.titleContainer}>BS</Text>
                <TextInput
                    style={styles.loginContainer}
                    blurOnSubmit={true}
                    onKeyPress={(e) => e.key === 'Enter'}
                    placeholder='초대 코드를 압력해주세요'
                    placeholderTextColor='white'
                    color='white'
                    onChangeText={(text) => {
                        setUserCode(text)
                    }}>
                </TextInput>
                <TouchableOpacity
                    style={styles.loginBtn}
                    onPress={() => {
                        navigation.navigate("main")
                    }}>
                    <Text style={{color: 'white'}}>로그인</Text>
                </TouchableOpacity>
            </LinearGradient>
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
    linearGradient: {
        alignItems: 'center',
        justifyContent: 'center',
        //borderRadius: 5,
        height: '100%',
        width: '100%',
    },
    titleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 300,
        width: 250,
        textAlign: 'center',
        fontSize: 100,
        color: 'white'
    },
    loginContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 200,
        height: 50,
        borderRadius: 20,
        borderColor: 'white',
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

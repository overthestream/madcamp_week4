import React, {useState} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Modal,
    Keyboard,
    Image
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stac

const GHTModal = (props) => {

    const {setGhtModalVisible, setNewGht} = props

    return (
        <NavigationContainer>
            <Modal
                animationType='slide'
                transparent={true}
                visible={props.isVisible}>
                <View
                    style={styles.container}>
                    <View
                        style={styles.modalContainer}>
                        <View
                            style={styles.selectImgContainer}>
                            <TouchableOpacity
                                >
                                <Text>사진 선택</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </NavigationContainer>
    )
} 
export default GHTModal;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        //flex: 1,
        flexDirection: 'row',
        marginLeft: 5,
        marginRight: 5,
        marginTop: 5,
        marginBottom: 5,
    },
    modalContainer: {
        //flex: 1,
        //justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: 'white',
        width: 300,
        height: 400,
        borderRadius: 20,
        elevation: 3,
    },
    selectImgContainer: {
        width: 270,
        height: 270,
        borderRadius: 20,
        borderColor: 'black',
        borderWidth: 1,
        marginTop: 12,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
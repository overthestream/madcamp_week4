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

const VisitModal = (props) => {

    const {setVisitModalVisible, setNewVisit} = props;
    
    //console.log(props.isVisible)

    return (
        <Modal
            animationType='slide'
            transparent={true}
            visible={props.isVisible}>
            <View
                style={styles.container}>
                <View
                    style={styles.modalContainer}>
                    <View
                        style={{flexDirection: 'row', width: 220,}}>
                        <Text style={styles.ToText}>To. 제호씨</Text>
                        <TouchableOpacity
                            style={styles.iconSend}
                            activeOpacity={0.6}
                            onPress={() => {
                                Keyboard.dismiss()
                                setVisitModalVisible(false)
                            }}>
                            <Image
                                style={{width: 20, height: 20,}}
                                source={require('./image/send.png')}>
                            </Image>
                        </TouchableOpacity>      
                    </View>
                    <TextInput
                        style={styles.modalInputText}
                        scrollEnabled={true}
                        multiline={true}
                        blurOnSubmit={true}
                        onKeyPress={(e) => e.key === 'Enter'}
                        onChangeText={(text) => {
                            setNewVisit(text)
                        }}
                        placeholder='방명록을 남겨주세요'/>
                    <Text style={styles.FromText}>From. 선우</Text>
                </View>
            </View>
        </Modal>
    )
}
export default VisitModal;

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
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        width: 250,
        height: 250,
        borderRadius: 20,
        elevation: 3,
    },
    modalInputText: {
        width: 220,
        height: 180,
        borderRadius: 20,
        borderColor: 'black',
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    ToText: {
        fontSize: 16,
        marginTop: 5,
        marginLeft: 10,
        marginBottom: 5,
        textAlign: 'left',
        width: 190,
    },
    FromText: {
        fontSize: 16,
        margin: 5,
        textAlign: 'right',
        width: 220,
    },
    iconSend: {
        width: 20,
        height: 20, 
        marginTop: 8
    },
})

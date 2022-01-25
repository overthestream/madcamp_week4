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
import DocumentPicker from 'react-native-document-picker';

const GHTModal = (props) => {

    const {setGhtModalVisible, setNewGht} = props
    //const [File, setFile] = useState('');
    const [singleFile, setSingleFile] = useState('');
    //const [resourcePath, setResourcePath] = useState('');

    const selectFile = async () => {

        try {
          const res = await DocumentPicker.pick({
            type: [DocumentPicker.types.images],
          });
          setSingleFile(res);
        } catch (err) {
          setSingleFile(null);
          if (DocumentPicker.isCancel(err)) {
            alert('Canceled');
          } else {
            alert('Unknown Error: ' + JSON.stringify(err));
            throw err;
          }
        }
    };
    
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
                     style={{width: 270, flexDirection: 'row',
                      justifyContent: 'center', alignItems: 'center',}}>
                        <View
                            style={styles.selectImgContainer}>
                            <TouchableOpacity
                                activeOpacity={0.6}
                                onPress={() => {
                                    // click event
                                    Keyboard.dismiss();
                                    selectFile();
                                }}>
                                <Text>사진 선택</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity
                            style={styles.iconSend}
                            activeOpacity={0.6}
                            onPress={() => {
                                Keyboard.dismiss();
                                setSingleFile(null);
                                setGhtModalVisible(false)}}>
                            <Image
                                style={{width: 20, height: 20,}}
                                source={require('./image/send.png')}>
                            </Image>
                        </TouchableOpacity>
                    </View>
                    <View
                        style={styles.imageContainer}>
                        <Image
                            source={{
                                uri: singleFile[0].uri ? singleFile[0].uri : ''
                            }}
                            style={styles.uploadImage}>
                        </Image>
                    </View>
                    <TextInput
                        style={styles.textInputContainer}
                        scrollEnabled={true}
                        multiline={true}
                        blurOnSubmit={true}
                        onKeyPress={(e) => e.key === 'Enter'}
                        onChangeText={(text) => {
                            setNewGht(text) // 텍스트만 저장함, 사진 저장도 해야함
                        }}>
                    </TextInput>
                </View>
            </View>
        </Modal>
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
        width: 200,
        height: 30,
        borderRadius: 20,
        borderColor: 'black',
        borderWidth: 1,
        marginTop: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 270,
        height: 240,
        borderRadius: 20,
        borderColor: 'black',
        borderWidth: 1,
        marginTop: 10
    },
    textInputContainer: {
        width: 270,
        height: 90,
        borderRadius: 20,
        borderColor: 'black',
        borderWidth: 1,
        marginTop: 10,
        padding: 10
    },
    uploadImage: {
        width: 250,
        height: 220,
        borderRadius: 20,
        borderBottom: 5,
        borderTop: 5,
        borderLeft: 5,
        borderRight: 5,
    },
    iconSend: {
        width: 20,
        height: 20, 
        marginTop: 12,
        marginLeft: 10
    },
})
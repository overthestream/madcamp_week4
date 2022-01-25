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

const GHTModal = (props) => {

    const {setGhtModalVisible, setNewGht} = props
    const [singleFile, setSingleFile] = useState('');

    const selectFile = async () => {

        console.log("test")
    
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
    
    const makeImage = (imgUri) => {
        console.log(imgUri)
        return (
            <Image
                style={{width: 250, height: 250}}
                source={{uri: {imgUri}}}>
            </Image>
        )
    }

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
                        style={styles.selectImgContainer}>
                        <TouchableOpacity
                            activeOpacity={0.6}
                            onPress={() => {
                                // click event
                                // console.log("ghtModal")
                                selectFile.bind(this);
                                makeImage(singleFile.uri);
                            }}>
                            <Text>사진 선택</Text>
                        </TouchableOpacity>
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
        width: 270,
        height: 270,
        borderRadius: 20,
        borderColor: 'black',
        borderWidth: 1,
        marginTop: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInputContainer: {
        width: 270,
        height: 90,
        borderRadius: 20,
        borderColor: 'black',
        borderWidth: 1,
        marginTop: 12,
        padding: 10
    }
})
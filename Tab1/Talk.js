import React, {useState} from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    Image,
    TouchableOpacity,
    Alert
} from 'react-native';

function Talk() {

    const initname = "이제호";
    const initTitle = "\"기훈이 형은 인정이지\""
    const [ULImg, setULImg] = useState(0); // 나중에 수정
    const [PFImg, setPFImg] = useState(0); // 나중에 수정
    const [name, setName] = useState(initname);
    const [title, setTitle] = useState(initTitle);

    return (
        <View
            style={styles.container}>
            <Image
                style={styles.uploadImg}
                source={require('./NMImg.jpeg')}>
            </Image>
            <View style={styles.Info}>
                <TouchableOpacity 
                    style={styles.profileImgTouch}
                    onPress={() => Alert.alert('click...')} // click event 로 프로필창? 보이게 
                    activeOpacity={0.6}>
                    <Image
                        style={styles.profileImg}
                        source={require('./JHImg.jpeg')}>
                    </Image>
                </TouchableOpacity>
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
        // borderLeftColor: '#495464',
        // borderLeftWidth: 2,  
        marginLeft: 20,
        width: 120
    },
    profileImg: {
        width: 100,
        height: 100,
        borderRadius: 20,
        // marginLeft: 6,
        // marginRight: 20,
        // marginTop: 10,
        // marginBottom: 10,
    },
    profileImgTouch: {
        width: 100,
        height: 100,
        borderRadius: 20,
        marginLeft: 6,
        marginRight: 20,
        marginTop: 10,
        marginBottom: 10,
        // borderColor: 'black',
        // borderWidth: 2
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
        marginRight: 20,
        textAlign: 'center'
    },
    Title: {
        fontSize: 15,
        marginTop: 10,
        marginLeft: 5,
        marginRight: 20,
        marginBottom: 10,
        textAlign: 'center'
    },

});

export default Talk;
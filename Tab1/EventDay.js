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
import VisitModal from './VisitModal';
import GHTModal from './GHTModal';

function EventDay(props) {

    const initTDname = "이제호";
    const initNewVisit = "행복하자~";
    const initNewGht = "나디나니다니다니다니다닏나ㅣㄷ";
    const [TDname, setTDName] = useState(initTDname);
    const [visitModalVisible, setVisitModalVisible] = useState(false);
    const [newVisit, setNewVisit] = useState(initNewVisit);
    const [ghtModalVisible, setGhtModalVisible] = useState(false);
    const [newGht, setNewGht] = useState(initNewGht);

    return (
        <View
            style={styles.container}>
            <View
                style={{flexDirection: 'row', width: '100%', justifyContent: 'center', alignItems: 'center'}}>
                <View
                    style={{flexDirection: 'row', width: '95%',}}>
                    <Text style={styles.TDText}>금주의 PICK </Text>
                    <TouchableOpacity 
                        onPress={() => {setVisitModalVisible(true)}}>
                        <Text style={styles.TDnameText}>{TDname}</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    onPress={() => {setGhtModalVisible(true)}}>
                    <Image
                        style={styles.uploadIcon}
                        source={require('./image/upload.png')}>
                    </Image>
                </TouchableOpacity> 
            </View>
            <VisitModal isVisible = {visitModalVisible} setVisitModalVisible = {setVisitModalVisible} setNewVisit = {setNewVisit}/>
            <GHTModal isVisible={ghtModalVisible} setGhtModalVisible = {setGhtModalVisible} setNewGht = {setNewGht}/>
        </View>
    )
}

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
    TDText: {
        fontSize: 20,
        marginTop: 3,
        marginLeft: 20
    },
    TDnameText: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    uploadIcon: {
        width: 30,
        height: 30,
        //marginTop: 5,
    }
});
export default EventDay;
import React, {useState} from 'react';
import {
    Platform, 
    StyleSheet, 
    Text, 
    View, 
    ScrollView,
    SafeAreaView,
    TouchableOpacity,
    TextInput,
    Keyboard
} from 'react-native';
import Talk from './Talk';
import { SwipeListView } from 'react-native-swipe-list-view'

function GHT() {

    const LIST_VIEW_DATA = Array(6)
        .fill('')
        .map(() => ({Talk}));

    const LIST_COMMENT = ["밤산은 인정이지", "낭만 미쳤다", "TPS 가야지", "아 진짜 너무 졸리다", "하나 둘 셋 화이팅~!"]
    
    const [memo, setMemo] = useState("다같이 인생네컷 찍었다아아아아아아아아아아아아아");
    const [newComment, setNewComment] = useState('');

    return (
        <SafeAreaView style={styles.container}>
            <SwipeListView
                data={LIST_VIEW_DATA}
                renderItem={() => (
                    <View style={styles.swipeListItem}>
                        <Talk />
                    </View>
                )}
                renderHiddenItem={(data, rowMap) => (
                <View style={styles.swipeHiddenItemContainer}>
                    <TouchableOpacity
                        onPress={() => {}}>
                        <View 
                            style={styles.swipeHiddenLeftItem}>
                            <Text style={styles.swipeHiddenLeftItemText}>{memo}</Text>
                        </View>
                    </TouchableOpacity>
                    {/* <TouchableOpacity
                        onPress={() => {}}>  */}
                        <View
                            style={styles.swipeHiddenRightItem}>
                            <View
                                style={styles.swipeHiddenCommentItem}>
                                <ScrollView>
                                    {LIST_COMMENT.map(comment => {
                                        var a = <Text
                                            style={styles.swipeHiddenCommentItemText}>{comment}</Text>
                                        return a
                                    })}
                                </ScrollView>
                            </View>
                            <View
                                style={styles.swipeHiddenInputItem}>
                                <TextInput
                                    style={styles.swipeHiddenInputTextItem}
                                    value={newComment}
                                    onChangeText={setNewComment}
                                    placeholder='댓글 입력' />
                                <TouchableOpacity
                                    activeOpacity={0.8}
                                    style={styles.swipeHiddenButtonItem}
                                    onPress={() => {Keyboard.dismiss()}}>
                                    <Text
                                        style={{color: '#3D56B2'}}>게시</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    {/* </TouchableOpacity> */}
                </View>
                )}
                leftOpenValue={140}
                rightOpenValue={-230}
            />
        </SafeAreaView>

    );
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
    swipeListItem: {
        alignItems: 'center',
        borderBottomColor: '#fff',
        borderBottomWidth: 1,
        justifyContent: 'center',
        height: 250,
        backgroundColor: '#eee',
    },
    swipeHiddenItemContainer: {
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        flexDirection: 'row',
        borderRadius: 20,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        marginBottom: 10,
        elevation: 3
    },
    swipeHiddenLeftItem: {
        width: 110,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 15,
        marginBottom: 15,
    },
    swipeHiddenRightItem: {
        width: 210,
        height: 200,
        //justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 15,
        marginBottom: 15,
    },
    swipeHiddenLeftItemText: {
        fontSize: 14,
    },
    swipeHiddenRightItemText: {
        fontSize: 10,
    },
    swipeHiddenCommentItem: {
        width: 200,
        height: 120,
        flexDirection: 'row',
        // justifyContent: 'center',
        //alignItems: 'center',
        marginLeft: 5,
        marginRight: 5,
        marginBottom: 5,
        //marginTop: 5,
        padding: 5,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 20,
    },
    swipeHiddenCommentItemText: {
        fontSize: 14,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 5,
    },
    swipeHiddenInputItem: {
        width: 200,
        height: 40,
        flexDirection: 'row',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 20,
        marginTop: 5,
    },
    swipeHiddenInputTextItem: {
        height: 40,
        width: 150,
        //borderWidth: 1,
        //margin: 5,
        padding: 10,
        borderRadius: 20,
    },
    swipeHiddenButtonItem: {
        height: 40,
        width: 60,
        padding: 10,
    }
});

export default GHT;
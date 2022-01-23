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
import EventDay from './EventDay';
import { SwipeListView } from 'react-native-swipe-list-view'

function GHT() {

    const LIST_VIEW_DATA = Array(6)
        .fill('')
        .map(() => ({Talk}));

    const LIST_COMMENT = [
        {
            id: 1,
            comment: "밤산은 인정이지"
        }, 
        {
            id: 2,
            comment: "TPS 가야지"
        }, 
        {
            id: 3,
            comment: "아 진짜 너무 졸리다"
        },
        {
            id: 4,
            comment: "하나 둘 셋 화이팅~!"
        },
    ];
    
    const [memo, setMemo] = useState("다같이 인생네컷 찍었다아아아아아아아아아아아아아");
    const [newComment, setNewComment] = useState('');
    
    // 댓글 관리: 새로운 댓글 -> 서버/db -> 다시 받아서 랜더링

    return (
        <SafeAreaView style={styles.container}>
            <EventDay />
            <SwipeListView
                data={LIST_VIEW_DATA}
                renderItem={() => (
                    <View style={styles.swipeListItem}>
                        <Talk />
                    </View>
                )}
                renderHiddenItem={(data, rowMap) => (
                <View style={styles.swipeHiddenItemContainer}>
                    {/* <TouchableOpacity
                        onPress={() => {}}> */}
                        <View 
                            style={styles.swipeHiddenLeftItem}>
                            <Text style={styles.swipeHiddenLeftItemText}>{memo}</Text>
                        </View>
                    {/* </TouchableOpacity> */}
                        <View
                            style={styles.swipeHiddenRightItem}>
                            <Text
                                style={styles.swipeHiddenTitleItemItem}>
                                낭만 댓글을 달아주세요
                            </Text>
                            <View
                                style={styles.swipeHiddenCommentItem}>
                                <ScrollView>
                                    {LIST_COMMENT.map(e => {
                                        var a = <Text
                                            key = {e.id}
                                            style={styles.swipeHiddenCommentItemText}>{e.comment}</Text>
                                        return a
                                    })}
                                </ScrollView>
                            </View>
                            <View
                                style={styles.swipeHiddenInputItem}>
                                <TextInput
                                    style={styles.swipeHiddenInputTextItem}
                                    value={newComment}
                                    scrollEnabled={true}
                                    blurOnSubmit={true}
                                    onKeyPress={(e) => e.key === 'Enter'}
                                    onChangeText={(text) => {
                                        setNewComment(text)
                                    }}
                                    placeholder='댓글 입력' />
                                <TouchableOpacity
                                    style={styles.swipeHiddenButtonItem}
                                    activeOpacity={0.6}
                                    onPress={() => {Keyboard.dismiss()}}>
                                    <Text
                                        style={{color: '#3D56B2'}}>게시</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
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
    swipeHiddenTitleItemItem: {
        width: 200,
        height: 25,
        //padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        fontSize: 18,
        marginBottom: 5
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
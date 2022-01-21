import React, {useState} from 'react';
import {
    Platform, 
    StyleSheet, 
    Text, 
    View, 
    ScrollView,
    SafeAreaView,
    TouchableOpacity
} from 'react-native';
import Talk from './Talk';
import { SwipeListView } from 'react-native-swipe-list-view'

function GHT() {

    const LIST_VIEW_DATA = Array(5)
        .fill('')
        .map(() => ({Talk}));

    const [text, setText] = useState('Not Pressed');

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
                    onPress={() => setText(`${data.item.text} left is pressed`)}>
                    <View style={[styles.swipeHiddenItem, {backgroundColor: 'pink'}]}>
                        <Text style={styles.swipeHiddenItemText}>left</Text>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={() => setText(`${data.item.text} right is pressed`)}>
                    <View
                        style={[styles.swipeHiddenItem, {backgroundColor: 'skyblue'}]}>
                        <Text style={styles.swipeHiddenItemText}>right</Text>
                    </View>
                    </TouchableOpacity>
                </View>
                )}
                leftOpenValue={70}
                rightOpenValue={-70}
            />
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    textContainer: {
        width: '100%',
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    styledText: {
        color: '#111',
        fontWeight: 'bold',
    },
    swipeListItem: {
        alignItems: 'center',
        borderBottomColor: '#fff',
        borderBottomWidth: 1,
        justifyContent: 'center',
        height: 50,
        backgroundColor: '#eee',
    },
    swipeHiddenItemContainer: {
        flex: 1,
        height: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        flexDirection: 'row',
    },
    swipeHiddenItem: {
        width: 70,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    swipeHiddenItemText: {
        color: 'white',
        fontSize: 14,
    },

});

export default GHT;
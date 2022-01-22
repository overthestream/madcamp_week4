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

    const LIST_VIEW_DATA = Array(6)
        .fill('')
        .map(() => ({Talk}));

    

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
                            <Text style={styles.swipeHiddenLeftItemText}>다같이 인생네컷 찍었다아아아아아아아아아아아아아</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={() => {}}>
                        <View
                            style={styles.swipeHiddenRightItem}>
                            <Text style={styles.swipeHiddenRightItemText}>right</Text>
                        </View>
                    </TouchableOpacity>
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
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 15,
        marginBottom: 15,
    },
    swipeHiddenLeftItemText: {
        fontSize: 14,
    },
    swipeHiddenRightItemText: {
        fontSize: 20,
    },

});

export default GHT;
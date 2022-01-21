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
                            style={styles.swipeHiddenItem}>
                            <Text style={styles.swipeHiddenItemText}>다같이 인생네컷 찍었다</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={() => {}}>
                        <View
                            style={styles.swipeHiddenItem}>
                            <Text style={styles.swipeHiddenItemText}>right</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                )}
                leftOpenValue={120}
                rightOpenValue={-120}
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
    },
    swipeHiddenItem: {
        width: 120,
        height: 300,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        marginBottom: 10,
    },
    swipeHiddenItemText: {
        fontSize: 14,
    },

});

export default GHT;
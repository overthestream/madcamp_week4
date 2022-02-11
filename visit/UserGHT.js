import React, { useEffect, useState } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Keyboard,
  Image,
} from 'react-native';
import Talk from '../tab1/Talk';
import { SwipeListView } from 'react-native-swipe-list-view';

function GHT() {
  const [GHTList, setGHTList] = useState([]);

  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    const url = new URL('http://49.50.160.143:80/GHT/written');
    const query = {
      userName: '이제호',
    };
    Object.keys(query).forEach((key) =>
      url.searchParams.append(key, query[key]),
    );
    fetch(encodeURI(url), {
      method: 'GET',
    })  .then((res) => res.json())
      .then((json) => setGHTList(json))
      .catch((err) => console.log(err));
  }, [refresh]);

  const [commentList, setCommentList] = useState([null]);
  useEffect(() => {
    GHTList.map((item) => {
      const url = new URL('http://192.249.18.173:80/GHT/reply/list');
      const query = {
        GHT_id: item.id,
      };
      Object.keys(query).forEach((key) =>
        url.searchParams.append(key, query[key]),
      );
      fetch(encodeURI(url), {
        method: 'GET',
      })
        .then((res) => res.json())
        .then((json) => {
          setCommentList(commentList.concat(json));
        })
        .catch((err) => console.error(err));
    });
  }, [GHTList]);

  const [memo, setMemo] = useState(
    '다같이 인생네컷 찍었다아아아아아아아아아아아아아',
  );
  const [newComment, setNewComment] = useState('');

  // 댓글 관리: 새로운 댓글 -> 서버/db -> 다시 받아서 랜더링,,?

  return (
    <SafeAreaView style={styles.container}>
      {/* <View> */}
      {/* style={{flexDirection: 'row', width: '100%', 
                borderColor: 'black', borderWidth: 1}}> */}
      {/* </View> */}

      <SwipeListView
        data={GHTList}
        renderItem={(item, index) => (
          <View style={styles.swipeListItem}>
            <Talk
              initName={item.item.writer}
              initTitle={item.item.text}
              GHT_image={item.item.image_url}
              key={index}
            />
          </View>
        )}
        renderHiddenItem={(data, rowMap) => {
          <View style={styles.swipeHiddenItemContainer}>
            <View style={styles.swipeHiddenLeftItem}>
              <Text style={styles.swipeHiddenLeftItemText}>{memo}</Text>
            </View>
            <View style={styles.swipeHiddenRightItem}>
              <Text style={styles.swipeHiddenTitleItemItem}>
                낭만 댓글을 달아주세요
              </Text>
              <View style={styles.swipeHiddenCommentItem}>
                <ScrollView>
                  {commentList.map((e, index) => {
                    if (typeof e === Array || !e || !e.length) return;
                    if (data.item.id === e[0].GHT_id) {
                      e.map((item, index) => {
                        return (
                          <Text
                            key={index}
                            style={styles.swipeHiddenCommentItemText}
                          >
                            {item.text}
                          </Text>
                        );
                      });
                    } else return;
                  })}
                </ScrollView>
              </View>
              <View style={styles.swipeHiddenInputItem}>
                <TextInput
                  style={styles.swipeHiddenInputTextItem}
                  value={newComment}
                  scrollEnabled={true}
                  blurOnSubmit={true}
                  onKeyPress={(e) => e.key === 'Enter'}
                  onChangeText={(text) => {
                    setNewComment(text);
                  }}
                  placeholder="댓글 입력"
                />
                <TouchableOpacity
                  style={styles.swipeHiddenButtonItem}
                  activeOpacity={0.6}
                  onPress={() => {
                    Keyboard.dismiss();
                  }}
                >
                  <Text style={{ color: '#3D56B2' }}>게시</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>;
        }}
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
    elevation: 3,
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
    marginBottom: 5,
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
  },
});

export default GHT;

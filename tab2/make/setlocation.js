import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  FlatList,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import Location from './location';

const styles = StyleSheet.create({
  input: {
    width: '90%',
    backgroundColor: '#cecece',
    borderRadius: 10,
    marginLeft: 10,
    marginRight: 5,
    fontSize: 20,
    // padding: 10,
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  mainView: {
    flexDirection: 'column',
    alignContent: 'center',
    // justifyContent: "center"
    width: '100%',
  },
  button: {
    width: '20px',
    height: '100%',
    borderRadius: '5px',
  },
  commitBtnText: {
    paddingRight: '10px',
  },
});

const MainText = styled.Text`
  font-size: 20px;
  margin-left: 10px;
  margin-top: 10px;
  /* margin-left: 30px; */
`;

const InputContainer = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  /* padding: 5px; */
  margin-left: 10px;
  height: 40px;
  margin-top: 20px;
  margin-right: 10px;
  border-radius: 10px;
  /* background-color: #cecece; */
`;

const TextContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  height: 100%;
`;

const SearchText = styled.Text`
  padding-right: 20px;
`;

const SearchLocation = () => {
  const [searchValue, setSearchValue] = useState([]);
  const [textInput, setTextInput] = useState('');

  const Kakao = axios.create({
    baseURL: 'https://dapi.kakao.com',
    headers: {
      Authorization: 'KakaoAK 505f156e09ef2d3fa5fd8dd6fa3d2d2d',
    },
  });
  useEffect(() => {
    const queryText = textInput.replace(/^\s+|\s+$/g, '').toString();
    const params = {
      query: queryText,
      size: 10,
    };

    Kakao.get('/v2/local/search/keyword', { params })
      .then(function (response) {
        setSearchValue(response.data.documents);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [textInput]);

  return (
    <View style={styles.mainView}>
      <MainText>우리 어디서 만날까?</MainText>
      <InputContainer>
        <TextContainer>
          <TextInput onChangeText={setTextInput} style={styles.input} />
          <TouchableOpacity>
            <SearchText>검색</SearchText>
          </TouchableOpacity>
        </TextContainer>
      </InputContainer>
      <Location props={{ searchValue }} />
    </View>
  );
};

export default SearchLocation;

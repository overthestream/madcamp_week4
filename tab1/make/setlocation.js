import React from "react";
import styled from "styled-components";
import {View, Text, StyleSheet, TextInput} from 'react-native';

const styles = StyleSheet.create({
  input: {
    width: '95%',
    backgroundColor: '#cecece',
    // marginTop: 20,
    fontSize: 25,
    // padding: 10,
    
  },
  mainVeiw: {
    alignContent: 'center',
    justifyContent: "center",
    width: '100%',
  },
});

const MainText = styled.Text`
  font-size: 20px;
  /* margin-left: 30px; */
`;

const InputContainer = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  padding: 5px;
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 20px;
  background-color: #cecece;
`;

class SearchLocation extends React.Component{
  state={
    myTextInput : ''
  }

  onChangeInput = (event) => {
    this.setState(
      {
        myTextInput: event,
      }
    );
    // 여기다가 검색하는 부분을 넣으면 될거같다 효재야
  };

  render(){
    return(
      <View style={styles.mainVeiw}>
        <MainText>우리 어디서 만날까?</MainText>
        <InputContainer>
          <TextInput
            value={this.state.myTextInput}
            onChangeText={this.onChangeInput}
            style={styles.input}
          />
        </InputContainer>
    </View>
    );
  }
} 
export default SearchLocation;
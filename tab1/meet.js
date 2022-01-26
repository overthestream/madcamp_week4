import styled from 'styled-components/native';
import React, { Component } from 'react';
import SwiperComponent from './swipermeet';
// import MeetingCard from './nowmeetingcard';
import { StyleSheet, Text, Alert, Modal, Pressable, View } from 'react-native';
import Meetingcardcontainer from './meetingcardcontainer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import SearchLocation from './make/setlocation';
import WhenToMeet from './make/makemeet';
import { MainStack } from '../App';
const MainText = styled.Text`
  font-size: 20px;
  text-align: center;
  margin: 10px;
  color: #000;
`;
const Container = styled.View`
  flex: 1;
  align-items: center;
  flex-direction: column;
  background-color: #f5fcff;
`;
const MainContainer = styled.View`
  display: flex;
  margin-left: 17px;
  margin-top: 37px;
  font-size: 20px;
  line-height: 23px;
  width: 100%;
  align-items: flex-start;
`;

const SecondContainer = styled.View`
  width: 100%;
  height: 50px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  /* background-color: aqua; */
`;

const SwiperContainer = styled.View`
  height: 170px;
  width: 100%;
  /* background-color: greenyellow; */
`;

const MeetCardWrapper = styled.View`
  width: 100%;
  flex: 1;
  align-items: center;
`;

const SecondText = styled.Text`
  font-size: 20px;
  text-align: center;
  margin-left: 10px;
  /* margin-top: 10px; */
  color: #000;
`;

const MeetingWrapper = styled.View`
  width: 100%;
  /* backgroundColor: aqua; */
`;

const BtnWrapper = styled.View`
  align-items: flex-end;
  justify-content: center;
`;

const MakeBtn = styled.Pressable`
  width: 100px;
  border-radius: 15px;
  background-color: #fe2b54;
  height: 80%;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;
const BtnText = styled.Text`
  color: #fff;
  font-size: 15px;
`;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});



export default MeetMainPage = ({navigation}) => {
    return(
      <Container>
        <MainContainer>
          <MainText>우리 또 만나</MainText>
        </MainContainer>
        <SwiperContainer>
          <SwiperComponent/>
        </SwiperContainer>
        <SecondContainer>
          <SecondText>가고 싶은 약속들</SecondText>
          <BtnWrapper>
            <MakeBtn
              title="약속 만들기"
              onPress={()=>navigation.navigate('Make')}>
              <BtnText>
              약속 만들기
              </BtnText>
            </MakeBtn>
          </BtnWrapper>
        </SecondContainer>
        <Meetingcardcontainer/>
      </Container>
    );
}


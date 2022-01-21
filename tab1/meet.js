import styled from 'styled-components/native';
import React, {Component} from 'react';
import SwiperComponent from './swipermeet';
// import MeetingCard from './nowmeetingcard';
import Meetingcardcontainer from './meetingcardcontainer';
// import { StyleSheet, Text, View } from "react-native";

const MainText = styled.Text`
  font-size: 20px;
  text-align: center;
  margin: 10px;
  color: #000;
`
const Container = styled.View`
  flex: 1;
  align-items: center;
  flex-direction: column;
  background-color: #f5fcff;
`
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
  align-items: flex-start;
  background-color: aqua;
`;

const SwiperContainer = styled.View`
  height: 200px;
  width: 100%;
  background-color: greenyellow;
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
  margin-top: 10px;
  color: #000;
`;

const MeetingWrapper = styled.View`
  width: 100%;
  backgroundColor: aqua;
`;

class App extends React.Component{
  render(){ 
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
        </SecondContainer>
        {/* <MeetCardWrapper>
          <Meetingcardcontainer/>
        </MeetCardWrapper> */}
        <MeetingWrapper>
          <Meetingcardcontainer/>
        </MeetingWrapper>
      </Container>
    );
  }
}

export default App; 
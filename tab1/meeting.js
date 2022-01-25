import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

import styled from 'styled-components';

// // const ContentOuter = styled.View`
//   width: 100%;
//   height: 100%;
// // `;

const Container = styled.View`
  width: 100%;
  flex: 1;
  height: 100%;
  flex-direction: column;
`;

const MeetInfo = styled.View`
  flex: 3;
  /* background-color: azure;
  justify-content: center; */
  flex-direction: row;
`;

const MeetSubAddInfo = styled.View`
  flex: 1;
  color: #000;
  /* background-color: bisque; */
  margin-left: 20px;
  justify-content: flex-end;
`;

const MeetSubDateInfo = styled.View`
  flex: 1;
  justify-content: flex-start;
  color: #000;
  padding-bottom: 10px;
  margin-left: 20px;
`;

const MainDayMeetInfo = styled.View`
  flex: 3;
  font-size: 50px;
  padding-left: 20px;
  justify-content: center;
  letter-spacing: 0.2em;
`;

const MainTitleMeetInfo = styled.View`
  flex: 5;
  align-items: center;
  justify-content: center;
`;

const Title = styled.Text`
  font-weight: 600;
  font-size: 22px;
  color: #000;
  line-height: 26px;
`;

const Day = styled.Text`
  font-size: 50px;
  line-height: 59px;
  color: #000;
`;

const Content = () => {
  return (
    <Container>
      <MeetInfo>
        <MainDayMeetInfo>
          <Day>D - 4</Day>
        </MainDayMeetInfo>
        <MainTitleMeetInfo>
          <Title>선우생일기념파티</Title>
        </MainTitleMeetInfo>
      </MeetInfo>
      <MeetSubAddInfo>
        <Text>광주광역시 북구 오룡동 학사기숙사a동</Text>
      </MeetSubAddInfo>
      <MeetSubDateInfo>
        <Text>2022년 01월 10일</Text>
      </MeetSubDateInfo>
    </Container>
  );
};

export default Content;

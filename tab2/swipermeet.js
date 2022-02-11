import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

import Swiper from 'react-native-swiper';
import styled from 'styled-components';
import Content from './meeting';

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
    // height: '40px'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
    // height: 40px
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
    // height: '40px'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

const Container = styled.View`
  width: 90%;
  margin: 0 auto;
  height: 150px;
  background: #f4f4f4;
  border-radius: 20px;
  display: flex;
  box-shadow: 10px 5px 5px black;
`;
const OuterContainer = styled.View`
  height: 100%;
`;

const MeetData = [  
  {
    id: 5,
    name: '제호 생일 파티',
    year: '2022',
    month: '05',
    day: '19',
    x: 37.5283169,
    y: 126.9294254,
    place_name: '서울역',
    address:
      '광주광역시 북구 오룡동 첨단과기로 123 광주과학기술원 학사기숙사 a동',
  },
  {
    id: 6,
    name: '제호 생일 파티',
    year: '2022',
    month: '03',
    day: '13',
    x: 37.5283169,
    y: 126.9294254,
    place_name: '서울역',
    address:
      '광주광역시 북구 오룡동 첨단과기로 123 광주과학기술원 학사기숙사 a동',
  },
  {
    id: 7,
    name: '제호 생일 파티',
    year: '2022',
    month: '05',
    day: '12',
    x: 37.5283169,
    y: 126.9294254,
    place_name: '서울역',
    address:
      '광주광역시 북구 오룡동 첨단과기로 123 광주과학기술원 학사기숙사 a동',
  },
  {
    id: 8,
    name: '제호 생일 파티',
    year: '2022',
    month: '03',
    day: '17',
    x: 37.5283169,
    y: 126.9294254,
    place_name: '서울역',
    address:
      '광주광역시 북구 오룡동 첨단과기로 123 광주과학기술원 학사기숙사 a동',
  },
];

const SwiperComponent = () => {

  // const MeetingData = JSON.parse(MeetData);

  // for(let i = 0 ; i < MeetData.length ; i++ ){

  // }
  return (
    <OuterContainer>
      <Swiper style={styles.wrapper}>
        <Container>
          <Content props/>
        </Container>
        <Container>
          <Content />
        </Container>
        <Container>
          <Content />
        </Container>
      </Swiper>
    </OuterContainer>
  );
}

export default SwiperComponent;
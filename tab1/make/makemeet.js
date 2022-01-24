import React from "react";
import styled from "styled-components";
import {View,Text} from 'react-native';


//상단 정보 표기란
const MainView = styled.View`
  flex-direction: column;
  justify-content: center;
`;

const MainText = styled.Text`
  font-size: 22px;
  font-weight: 700;
  margin-left: 12px;
  margin-top: 12px;
  color: #000;
`;

const SecondMainText = styled.Text`
  font-size: 16px;
  margin-left: 12px;
  margin-top: 12px;  
`;

const WhereToMeet = styled.Text`
  font-size: 18px;
  color: #000;
  font-weight: 600;
  margin-left: 12px;
  margin-top: 10px;  
  margin-bottom: 12px;
`;

const UpperContentWrapper = styled.View`
  display: flex;
  margin: 10px;
  background-color: rgba(239, 233, 233, 1);
  border-radius: 10px;
`;

//날짜 선택란

export default function WhernToMeet({route}){
  
  const data = route.params.props.item;
  
  //전송할 데이터 목록
  const x = data.x;
  const y = data.y;
  const placeName = data.place_name;
  const address = data.road_address_name;

  return(
    <MainView>
      <MainText>약속 굳히기</MainText>
      <UpperContentWrapper>
        <SecondMainText>우리 여기서 만나기로 했어!</SecondMainText>
        <WhereToMeet>{placeName}</WhereToMeet>
      </UpperContentWrapper>
      <UpperContentWrapper>
        <SecondMainText>근데 언제 만나?</SecondMainText>
        <WhereToMeet>{placeName}</WhereToMeet>
      </UpperContentWrapper>
    </MainView>
  )
}
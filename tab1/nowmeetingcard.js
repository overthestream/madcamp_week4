import styled from 'styled-components/native';
import React, {Component} from 'react';
import {Text,Image} from 'react-native'

const MeetingWrapper = styled.View`
  width: 97%;
  height: 80px;
  border-radius: 10px;
  background-color: #F4F4F4;
  flex: 1;
  margin-left: 5px;
  margin-right: 5px;
  margin-bottom: 7px;
`;

const MeetingInner = styled.View`
  width: 100%;
  height: 100%;
  flex: 1;
  flex-direction: row;
  /* justify-content: space-between; */
  /* flex-direction: column; */
`;

const MeetingInfo = styled.View`
  flex: 8;
  height: 100%;
  margin-left: 15px;
  flex-direction: column;
  
  /* background-color: blueviolet; */
`;

const MeetingIcons = styled.View`
  flex: 2.5;
  height: 100%;
  align-items: center;
  justify-content: center;
  /* background-color: beige; */
`;
const TitleText = styled.Text`
  font-weight: 700; 
  font-size: 20px;
  line-height: 28px;
`;

const DayText = styled.Text`
  font-weight: 500; 
  font-size: 20px;
  line-height: 28px;
`;

const TitleContainer = styled.View`
  justify-content: flex-end;
  /* padding-bottom: 10px; */
  flex: 4;
`;

const DayContainer = styled.View`
  flex: 3;

`;

const MeetingCard = (item) => {
  console.log(item.item.name)
  const title = item.item.name
  // const day = {item.item.year} 
  return(
    <MeetingWrapper>
      <MeetingInner>
        <MeetingInfo>
          <TitleContainer>
            <TitleText>{title}</TitleText>
          </TitleContainer>
          <DayContainer>
            <DayText>{item.item.year}년 {item.item.month}월 {item.item.day}일</DayText>
          </DayContainer>
        </MeetingInfo>
        <MeetingIcons>
          <Image
            source={require('./tabimg/hand.jpg')}
            style={{width:'60%', height:'80%'}}
          />
        </MeetingIcons>
      </MeetingInner>
    </MeetingWrapper>
  );
}

export default MeetingCard;

 

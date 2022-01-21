import styled from 'styled-components/native';
import React, {Component} from 'react';
import Text from 'react-native'

const MeetingWrapper = styled.View`
  width: 90%;
  height: 100px;
  border-radius: 10px;
  color: #cecece;
  flex: 1;
`;

const MeetingInner = styled.View`
  width: 100%;
  height: 100%;
  flex: 1;
  justify-content: space-between;
  flex-direction: column;
`;

const MeetingInfo = styled.View`
  flex: 8;
  height: 100%;
  /* background-color: blueviolet; */
`;

const MeetingIcons = styled.View`
  flex: 1;
  height: 100%;
  background-color: beige;
`;
const TitleText = styled.Text`
  font-weight: 300; 
  font-size: 20px;
  line-height: 23px;
`;

const MeetingCard = (item) => {
  console.log(item.item.name)
  const title = item.item.name
  return(
    <MeetingWrapper>
      <MeetingInner>
        <MeetingInfo>
          <TitleText>{title}</TitleText>
        </MeetingInfo>
        <MeetingIcons/>
      </MeetingInner>
    </MeetingWrapper>
  );
}

export default MeetingCard;

 

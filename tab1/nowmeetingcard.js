import styled from 'styled-components/native';
import React, {Component} from 'react';


const MeetingWrapper = styled.View`
  width: 90%;
  height: 100px;
  border-radius: 10px;
  color: red;
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
  background-color: blueviolet;
`;

const MeetingIcons = styled.View`
  flex: 1;
  height: 100%;
  background-color: beige;
`;

const MeetingCard = (props) => {
  return(
    <MeetingWrapper>
      <MeetingInner>
        <MeetingInfo>
          <Text>
            {props.name}
          </Text>
          <Text>
            {props.year}
          </Text>
        </MeetingInfo>
        <MeetingIcons/>
      </MeetingInner>
    </MeetingWrapper>
  );
}

export default MeetingCard;

 

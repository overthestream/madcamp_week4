import React from "react";
import { FlatList } from "react-native";
import styled from "styled-components";
import MeetingCard from "./nowmeetingcard";

const meetData = [
  {
    'id': 1,
    'name' : '제호 생일 파티',
    'year' : '2022',
    'month' : '01',
    'day' : '10' 
  },
  {
    'id': 2,
    'name' : '제호 생일 파티',
    'year' : '2022',
    'month' : '01',
    'day' : '10' 
  },
  {
    'id': 3,
    'name' : '제호 생일 파티',
    'year' : '2022',
    'month' : '01',
    'day' : '10' 
  },
  {
    'id': 4,
    'name' : '제호 생일 파티',
    'year' : '2022',
    'month' : '01',
    'day' : '10' 
  },
  {
    'id': 5,
    'name' : '제호 생일 파티',
    'year' : '2022',
    'month' : '01',
    'day' : '10' 
  },
  {
    'id': 6,
    'name' : '제호 생일 파티',
    'year' : '2022',
    'month' : '01',
    'day' : '10' 
  },
  {
    'id': 7,
    'name' : '제호 생일 파티',
    'year' : '2022',
    'month' : '01',
    'day' : '10' 
  },
  {
    'id': 8,
    'name' : '제호 생일 파티',
    'year' : '2022',
    'month' : '01',
    'day' : '10' 
  }
]

const MeetCard = (props) => {
  <MeetingCard  props={props}></MeetingCard>
}

const CardContainer = styled.View`
  flex: 1;
  margin-top: 10px;
`

const MeetingCardContainer = () => {
  const renderItem = ({props}) => {
    <MeetCard props={props}/>
  }
  return(
    <CardContainer>
      <FlatList
        data={meetData}
        renderItem={renderItem}
        keyExtractor={meetData => meetData.id}
      />
    </CardContainer>
  );
}

export default MeetingCardContainer;
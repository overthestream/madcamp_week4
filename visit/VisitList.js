import styled from 'styled-components/native';
import React from 'react';
import VisitItem from './VisitItem';
import VisitWriter from './VisitWriter';

const Container = styled.View`
  background-color: blue;
  height: 200px;
  padding: 10px;
  margin: 4%;
  border-radius: 10px;
`;
const Title = styled.Text`
  font-weight: bold;
`;
const VisitListContainer = styled.FlatList`
  margin-top: 7px;
  background-color: black;
`;

const VisitList = () => {
  const HardCodedDataSet = [
    {
      from: '지원',
      message: '제호야 안마셔?',
      when: new Date(),
    },
    {
      from: '지원',
      message: '제호야 안마셔?',
      when: new Date(),
    },
    {
      from: '지원',
      message: '제호야 안마셔?',
      when: new Date(),
    },
    {
      from: '지원',
      message: '제호야 안마셔?',
      when: new Date(),
    },
    {
      from: '지원',
      message: '제호야 안마셔?',
      when: new Date(),
    },
    {
      from: '지원',
      message: '제호야 안마셔?',
      when: new Date(),
    },
    {
      from: '지원',
      message: '제호야 안마셔?',
      when: new Date(),
    },
    {
      from: '지원',
      message: '제호야 안마셔?',
      when: new Date(),
    },
    {
      from: '지원',
      message: '제호야 안마셔?',
      when: new Date(),
    },
  ];
  return (
    <Container>
      <Title>제호에게 한마디</Title>
      <VisitListContainer
        data={HardCodedDataSet}
        renderItem={(item, index) => {
          const { when, from, message } = item.item;
          return (
            <VisitItem when={when} from={from} message={message} key={index} />
          );
        }}
      />
      <VisitWriter />
    </Container>
  );
};

export default VisitList;

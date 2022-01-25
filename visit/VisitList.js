import styled from 'styled-components/native';
import React, { useEffect, useState } from 'react';
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

const VisitList = (props) => {
  const { userName } = props;

  const [visitList, setVisitList] = useState([]);
  useEffect(() => {
    const url = new URL('http://192.249.18.173:80/visit/list');
    const query = {
      name: userName,
    };
    Object.keys(query).forEach((key) =>
      url.searchParams.append(key, query[key]),
    );
    fetch(encodeURI(url), {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((json) => setVisitList(json));
  }, [userName]);

  return (
    <Container>
      <Title>{userName}에게 한마디</Title>
      <VisitListContainer
        data={visitList}
        renderItem={(item, index) => {
          const { send_when, from_who, message_text } = item.item;
          return (
            <VisitItem
              when={send_when}
              from={from_who}
              message={message_text}
              userName={userName}
              key={index}
            />
          );
        }}
      />
      <VisitWriter
        setVisitList={setVisitList}
        visitList={visitList}
        name={userName}
      />
    </Container>
  );
};

export default VisitList;

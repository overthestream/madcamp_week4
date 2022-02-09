import styled from 'styled-components/native';
import React, { useEffect, useState } from 'react';
import VisitItem from './VisitItem';
import VisitWriter from './VisitWriter';
import { SafeAreaView } from 'react-native-safe-area-context';

const Container = styled.View`
  background-color: rgba(234, 234, 234, 1);
  border: rgba(226, 225, 225, 1);
  height: 250px;
  padding: 10px;
  margin: 4%;
  border-radius: 10px;
`;
const Title = styled.Text`
  /* font-weight: bold; */
  /* text-shadow: 0cm; */
  letter-spacing: 0.02px;
`;
const TitleUserName = styled.Text`
  font-weight: 700;
`;

const VisitListContainer = styled.FlatList`
  margin-top: 7px;
  /* background-color: black; */
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
      <Title>
        <TitleUserName>
          {userName}
        </TitleUserName>
        에게 한마디
      </Title>
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

import styled from 'styled-components/native';
import React, { useState } from 'react';
import UserStore from '../UserStore';

const Container = styled.View`
  height: 30px;
  flex-direction: row;
  background-color: red;
  margin-top: 3px;
  border-radius: 5px;
  padding: 0px;
`;
const Input = styled.TextInput`
  margin-left: 2px;
  padding: 0px; ;
`;

const Submit = styled.Button``;

const VisitWriter = ({ name, setVisitList, visitList }) => {
  const [text, setText] = useState();

  return (
    <Container>
      <Input
        placeholder={`${name}에게 한마디 남기기`}
        value={text}
        onChangeText={setText}
      />
      <Submit
        title={'v'}
        onPress={() => {
          if (text) {
            const newMsg = {
              from_who: UserStore.Store.userName,
              to_whom: name,
              message_text: text,
              send_when: new Date().toDateString(),
            };
            setVisitList(visitList.concat(newMsg));
            const url = new URL('http://192.249.18.173:80/visit/add');

            Object.keys(newMsg).forEach((key) =>
              url.searchParams.append(key, newMsg[key]),
            );

            fetch(encodeURI(url), {
              method: 'POST',
            });

            setText(null);
          } else {
            alert(`${name}에게 한마디를 입력해보세요!`);
          }
        }}
      />
    </Container>
  );
};

export default VisitWriter;

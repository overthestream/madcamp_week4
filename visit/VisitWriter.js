import styled from 'styled-components/native';
import React, { useState } from 'react';
import UserStore from '../UserStore';
import { TouchableOpacity, Text } from 'react-native';

const Container = styled.View`
  height: 30px;
  flex-direction: row;
  background-color:  #F4F4F4;
  margin-top: 8px;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  justify-content: space-between;
  padding: 0px;
`;
const Input = styled.TextInput`
  flex: 1;
  margin-left: 2px;
  padding: 0px; ;
  /* background-color: aqua; */
`;

const Submit = styled.TouchableOpacity`
  height: 100%;
  width: 60px;
  background-color: rgba(255, 211, 211, 1);
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

const SubmitText = styled.Text`
  color: white;
`;

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
      >
        <SubmitText>
          보내기
        </SubmitText>
      </Submit>
    </Container>
  );
};

export default VisitWriter;

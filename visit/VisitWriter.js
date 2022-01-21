import styled from 'styled-components/native';
import React, { useState } from 'react';

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

const name = '제호';

const VisitWriter = () => {
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
            console.log(text);
          } else {
            alert(`${name}에게 한마디를 입력해보세요!`);
          }
        }}
      />
    </Container>
  );
};

export default VisitWriter;

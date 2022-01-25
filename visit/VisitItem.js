import styled from 'styled-components/native';
import React from 'react';

const Container = styled.View`
  background-color: white;
  margin-bottom: 3px;
  border-radius: 5px;
`;
const Title = styled.Text`
  font-weight: bold;
`;
const Message = styled.Text``;
const When = styled.Text``;

const userName = '제호';

const VisitItem = ({ from, message, when }) => {
  return (
    <Container>
      <Title>
        from {from} to {userName}
      </Title>
      <Message> {message}</Message>
      <When>{when.toLocaleDateString()}</When>
    </Container>
  );
};

export default VisitItem;

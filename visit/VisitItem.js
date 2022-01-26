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

const VisitItem = ({ userName, from, message, when }) => {
  return (
    <Container>
      <Title>
        from {from} to {userName}
      </Title>
      <Message> {message}</Message>
      <When>{when.slice(0, 10)}</When>
    </Container>
  );
};

export default VisitItem;

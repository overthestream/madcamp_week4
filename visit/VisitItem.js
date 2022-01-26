import styled from 'styled-components/native';
import React from 'react';

const Container = styled.View`
  background-color: white;
  margin-bottom: 3px;
  margin-top: 5px;
  border-radius: 5px;
  /* padding-top: 10px ; */
`;
const Title = styled.Text`
  /* font-weight: bold; */
  margin-left: 10px;
  margin-top: 5px;
`;
const From = styled.Text`
  font-weight: 700;
`;

const TitleContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const Message = styled.Text`
  margin-left: 5px;
  font-size: 17px;
  margin-bottom: 5px;
  margin-top: 5px;
  /* font-weight: ; */

`;
const When = styled.Text`
  margin-right: 5px;
  /* font-size: ; */
  font-weight: 300;
`;

const VisitItem = ({ userName, from, message, when }) => {
  return (
    <Container>
      <TitleContainer>
        <Title>
          from <From>{from}</From> to {userName}
        </Title>
        <When>{when.slice(0, 10)}</When>
      </TitleContainer>
      <Message> {message}</Message>
    </Container>
  );
};

export default VisitItem;

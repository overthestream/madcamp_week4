import styled from 'styled-components/native';
import React from 'react';

const UserItemContainer = styled.View`
  height: 55px;
  margin-left: 3px;
  margin-right: 3px;
`;

const UserItemThumbnail = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 30px;
`;

const UserItem = ({ imgUrl, name }) => {
  return (
    <UserItemContainer>
      <UserItemThumbnail source={require('./test/scarecrowjeho.jpeg')} />
    </UserItemContainer>
  );
};

export default UserItem;

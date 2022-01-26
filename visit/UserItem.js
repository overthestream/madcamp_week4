import styled from 'styled-components/native';
import React from 'react';
import { TouchableOpacity } from 'react-native';

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

const UserItem = ({ imgUrl, func }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        console.log('clicked');
        func();
      }}
    >
      <UserItemContainer>
        <UserItemThumbnail
          source={{
            uri: imgUrl,
            method: 'GET',
          }}
        />
      </UserItemContainer>
    </TouchableOpacity>
  );
};

export default UserItem;

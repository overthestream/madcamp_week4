import styled from 'styled-components/native';
import React, { useState } from 'react';

import UserList from './UserList';
import Profile from './Profile';
import VisitList from './VisitList';

import UserStore from '../UserStore';
import { observer } from 'mobx-react';

const Container = styled.View``;

const UserListContainer = styled.View`
  height: 75px;
  background-color: black;
  border-radius: 14px;
  margin: 4%;
  vertical-align: middle;
  justify-content: center;
`;

const ProfileContainer = styled.View`
  background-color: red;
  margin-left: 4%;
  margin-right: 4%;
  border-radius: 10px;
`;

const GHTContainer = styled.FlatList`
  background-color: red;
  margin-left: 4%;
  margin-right: 4%;
  border-radius: 10px;
  height: 200px;
`;

const VisitTab = observer(() => {
  const userStore = UserStore.Store;

  const [name, setName] = useState(userStore.userName);
  const [userText, setUserText] = useState(userStore.userText);
  const [userLocation, setUserLocation] = useState(userStore.userLocation);
  const [imageUrl, setImageUrl] = useState(userStore.image_url);

  return (
    <Container>
      <UserListContainer>
        <UserList
          props={{ setName, setUserLocation, setUserText, setImageUrl }}
        />
      </UserListContainer>
      <ProfileContainer>
        <Profile
          props={{
            name: name,
            userText: userText,
            userLocation: userLocation,
            image_url: imageUrl,
          }}
        />
      </ProfileContainer>
      <VisitList userName={name} />
      <GHTContainer />
    </Container>
  );
});

export default VisitTab;

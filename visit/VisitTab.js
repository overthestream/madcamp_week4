import styled from 'styled-components/native';
import React from 'react';

import UserList from './UserList';
import Profile from './Profile';
import VisitList from './VisitList';

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

const VisitTab = () => {
  return (
    <Container>
      <UserListContainer>
        <UserList />
      </UserListContainer>
      <ProfileContainer>
        <Profile />
      </ProfileContainer>
      <VisitList />
      <GHTContainer />
    </Container>
  );
};

export default VisitTab;

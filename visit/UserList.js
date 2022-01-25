import styled from 'styled-components/native';
import React, { useEffect, useState } from 'react';
import UserItem from './UserItem';

const UserListContainer = styled.FlatList`
  margin-top: 7px;
  margin-left: 2%;
  margin-right: 2%;
`;

const UserList = ({ props }) => {
  const { setName, setUserLocation, setUserText, setImageUrl } = props;
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    const url = new URL('http://192.249.18.173:80/user/list');
    fetch(encodeURI(url), {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((json) => setUserList(json));
  }, []);
  return (
    <UserListContainer
      data={userList}
      horizontal={true}
      renderItem={(item, index) => {
        return (
          <UserItem
            imgUrl={item.item.image_url}
            func={() => {
              setName(item.item.user_name);
              setUserLocation(item.item.user_location);
              setUserText(item.item.user_text);
              setImageUrl(item.item.image_url);
            }}
            key={index}
          />
        );
      }}
    />
  );
};

export default UserList;

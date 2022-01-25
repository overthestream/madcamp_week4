import styled from 'styled-components/native';
import React from 'react';
import UserItem from './UserItem';

const UserListContainer = styled.FlatList`
  margin-top: 7px;
  margin-left: 2%;
  margin-right: 2%;
`;

const HardCodedDataSet = [
  {
    src: 'visit/test/scarecrowjeho.jpeg',
    name: '이제호',
  },
  {
    src: 'visit/test/scarecrowjeho.jpeg',
    name: '이제호',
  },
  {
    src: 'visit/test/scarecrowjeho.jpeg',
    name: '이제호',
  },
  {
    src: 'visit/test/scarecrowjeho.jpeg',
    name: '이제호',
  },
  {
    src: 'visit/test/scarecrowjeho.jpeg',
    name: '이제호',
  },
  {
    src: 'visit/test/scarecrowjeho.jpeg',
    name: '이제호',
  },
  {
    src: 'visit/test/scarecrowjeho.jpeg',
    name: '이제호',
  },
  {
    src: 'visit/test/scarecrowjeho.jpeg',
    name: '이제호',
  },
  {
    src: 'visit/test/scarecrowjeho.jpeg',
    name: '이제호',
  },
  {
    src: 'visit/test/scarecrowjeho.jpeg',
    name: '이제호',
  },
  {
    src: 'visit/test/scarecrowjeho.jpeg',
    name: '이제호',
  },
  {
    src: 'visit/test/scarecrowjeho.jpeg',
    name: '이제호',
  },
  {
    src: './test/scarecrowjeho.jpeg',
    name: '이제호',
  },
  {
    src: './test/scarecrowjeho.jpeg',
    name: '이제호',
  },
  {
    src: './test/scarecrowjeho.jpeg',
    name: '이제호',
  },
  {
    src: './test/scarecrowjeho.jpeg',
    name: '이제호',
  },
  {
    src: './test/scarecrowjeho.jpeg',
    name: '이제호',
  },
  {
    src: './test/scarecrowjeho.jpeg',
    name: '이제호',
  },
  {
    src: './test/scarecrowjeho.jpeg',
    name: '이제호',
  },
  {
    src: './test/scarecrowjeho.jpeg',
    name: '이제호',
  },
  {
    src: './test/scarecrowjeho.jpeg',
    name: '이제호',
  },
  {
    src: './test/scarecrowjeho.jpeg',
    name: '이제호',
  },
  {
    src: './test/scarecrowjeho.jpeg',
    name: '이제호',
  },
  {
    src: './test/scarecrowjeho.jpeg',
    name: '이제호',
  },
];

const UserList = () => {
  return (
    <UserListContainer
      data={HardCodedDataSet}
      horizontal={true}
      renderItem={(item, index) => {
        return <UserItem imgUrl={item.src} name={item.name} key={index} />;
      }}
    />
  );
};

export default UserList;

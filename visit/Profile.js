import styled from 'styled-components/native';
import React from 'react';

const HardCodedData = {
  name: '제호',
  imgUri: './test/scarecrowjeho.jpeg',
  text: '인생은 소소하게',
  song: 'Bermuda Triangle',
  location: '부산',
};

const Container = styled.View`
  flex-direction: row;
  padding: 10px;
`;
const ImageContainer = styled.View``;
const Title = styled.Text`
  background-color: blue;
  font-weight: bold;
`;
const ProfileImage = styled.Image`
  margin-top: 5px;
  width: 120px;
  height: 120px;
  border-radius: 5px;
`;
const ProfileText = styled.Text``;
const InfoContainer = styled.View`
  margin-top: 23px;
  margin-left: 8px;
  background-color: green;
`;

const Profile = () => {
  const { name, text, song, location } = HardCodedData;
  return (
    <Container>
      <ImageContainer>
        <Title>{`${name}의 근황`}</Title>
        <ProfileImage source={require('./test/scarecrowjeho.jpeg')} />
      </ImageContainer>
      <InfoContainer>
        <Title>{`${name}의 한마디 💬`}</Title>
        <ProfileText>{text}</ProfileText>
        <Title>{`${name}의 노래 🎧`}</Title>
        <ProfileText>{song}</ProfileText>
        <Title>{`${name}의 위치 🗺`}</Title>
        <ProfileText>{location}</ProfileText>
      </InfoContainer>
    </Container>
  );
};

export default Profile;

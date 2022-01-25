import styled from 'styled-components/native';
import React, { useState } from 'react';
import { View } from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import axios from 'axios';
import fetch from 'cross-fetch'

const userName = '제호';

const HardCodedData = {
  name: '제호',
  imgUri: './test/scarecrowjeho.jpeg',
  text: '인생은 소소하게',
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
const ProfileText = styled.Text`
  padding-top: 4px;
  padding-bottom: 4px;
`;
const InfoContainer = styled.View`
  margin-top: 23px;
  margin-left: 8px;
  width: 190px;
  background-color: green;
`;

const ProfileSetting = styled.Image`
  width: 20px;
  height: 20px;
`;

const ProfileButton = styled.TouchableOpacity`
  width: 20px;
  height: 20px;
`;

const ModifyContent = styled.TextInput`
  color: black;
  margin: 0;
  padding: 0;
`;

const ModifyImage = styled.TouchableOpacity``;

const Profile = () => {
  const [name, setName] = useState(HardCodedData.name);
  const [text, setText] = useState(HardCodedData.text);
  const [location, setLocation] = useState(HardCodedData.location);
  const [isSetting, setIsSetting] = useState(false);
  const [singleFile, setSingleFile] = useState(null);

  const selectFile = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
      });
      setSingleFile(res);
    } catch (err) {
      setSingleFile(null);
      if (DocumentPicker.isCancel(err)) {
        alert('Canceled');
      } else {
        alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };

  const uploadImage = async () => {
    if (singleFile != null) {
      const data = new FormData();
      console.log(singleFile);
      data.append('imgFile', singleFile[0]);
      fetch('http://192.249.18.173:80/user/upload', {
        method: 'POST',          headers: {
            'Accept': '*/*',
            'Content-Type': 'multipart/form-data',
          },
        body: data,
      })
    .then(res => console.log(res))
    .catch(err => console.error(err));
    }
  };     

  return (
    <Container>
      <ImageContainer>
        {isSetting ? (
          <View>
            <Title>{'근황 수정하기'}</Title>
            <ModifyImage
              onPress={() => {
                selectFile();
              }}>
              <ProfileImage source={require('./test/scarecrowjeho.jpeg')} />
            </ModifyImage>
          </View>
        ) : (
          <View>
            <Title>{`${name}의 근황`}</Title>
            <ProfileImage source={require('./test/scarecrowjeho.jpeg')} />
          </View>
        )}
      </ImageContainer>
      <InfoContainer>
        <Title>{`${name}의 한마디 💬`}</Title>
        {isSetting ? (
          <ModifyContent value={text} onChangeText={setText} />
        ) : (
          <ProfileText>{text}</ProfileText>
        )}
        <Title>{`${name}의 위치 🗺`}</Title>
        {isSetting ? (
          <ModifyContent value={location} onChangeText={setLocation} />
        ) : (
          <ProfileText>{location}</ProfileText>
        )}
      </InfoContainer>
      {name === userName ? (
        <ProfileButton
          onPress={() => {
            if (isSetting) {
              uploadImage();
            }
            setIsSetting(!isSetting);
          }}>
          <ProfileSetting source={require('./asset/setting.png')} />
        </ProfileButton>
      ) : (
        <View />
      )}
    </Container>
  );
};

export default Profile;

import styled from 'styled-components/native';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import fetch from 'cross-fetch';

import UserStore from '../UserStore';
import { observer } from 'mobx-react';
import axios from 'axios';

const Container = styled.View`
  flex-direction: row;
  padding: 10px;
`;
const ImageContainer = styled.View``;
const Title = styled.Text`
  /* background-color: blue; */
  /* font-weight: bold; */
  font-size:  18px;
  margin-left: 4px;
`;

const Name = styled.Text`
  font-weight: 700;
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
  margin-left: 5px;
`;
const InfoContainer = styled.View`
  margin-top: 23px;
  margin-left: 8px;
  /* align-items: center; */
  justify-content: center;
  width: 190px;
  /* background-color: green; */
`;

const ProfileSetting = styled.Image`
  width: 20px;
  height: 20px;
`;

const ProfileButton = styled.TouchableOpacity`
  width: 20px;
  height: 20px;
`;
const MiddleBorder = styled.View`
  height: 0.4px;
  width: 100%;

  margin-top: 5px;
  border: 0.2px solid #0c0c0c;
  margin-bottom: 5px;
`;

const ModifyContent = styled.TextInput`
  color: black;
  margin: 0;
  margin-left: 5px;
  padding: 0;
`;

const ModifyImage = styled.TouchableOpacity``;

const Profile = observer((props) => {
  const userStore = UserStore.Store;

  const { name, userText, userLocation, image_url } = props.props;
  const [text, setText] = useState(userText);
  const [location, setLocation] = useState(userLocation);
  const [imageUrl, setImageUrl] = useState(image_url);
  const [isSetting, setIsSetting] = useState(false);
  const [singleFile, setSingleFile] = useState(null);

  useEffect(()=>{
    setImageUrl(image_url);
    setText(userText);
    setLocation(userLocation);
  },[image_url, userText, userLocation])

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
      data.append('imgFile', singleFile[0]);
      const url = new URL('http://192.249.18.173:80/user/upload');
      const query = {
        type: 1,
        userName: userStore.userName,
      };
      Object.keys(query).forEach((key) =>
        url.searchParams.append(key, query[key]),
      );

      fetch(encodeURI(url), {
        method: 'POST',
        headers: {
          Accept: '*/*',
          'Content-Type': 'multipart/form-data',
        },
        body: data,
      })
        .then((res) => res.json())
        .then((json) => {
          setImageUrl(json.loc);
          userStore.updateUserImage(json.loc);
        })
        .catch((err) => console.error(err));
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
              }}
            >
              <ProfileImage
                source={{
                  uri: imageUrl,
                  method: 'GET',
                }}
              />
            </ModifyImage>
          </View>
        ) : (
          <View>
            <Title>
              <Name>
              {`${name} `}  
              </Name>
              의 근황
            </Title>
            <ProfileImage
              source={{
                uri: imageUrl,
                method: 'GET',
              }}
            />
          </View>
        )}
      </ImageContainer>
      <InfoContainer>
        <Title>{`${name}의 `}
          <Name>
            한마디 
          </Name>
           💬
        </Title>
        {isSetting ? (
          <ModifyContent
            value={text}
            onChangeText={(e) => {
              setText(e);
              const url = new URL('http://192.249.18.173:80/user/text');
              const query = {
                newText: text,
                userName: userStore.userName,
              };
              Object.keys(query).forEach((key) =>
                url.searchParams.append(key, query[key]),
              );
              axios.put(encodeURI(url));
              userStore.updateUserText(text);
            }}
          />
        ) : (
          <ProfileText>{text}</ProfileText>
        )}
        <MiddleBorder></MiddleBorder> 
        <Title>{`${name}의`}
          <Name> 위치 </Name>🗺
        </Title>
        {isSetting ? (
          <ModifyContent
            value={location}
            onChangeText={(e) => {
              setLocation(e);
              const url = new URL('http://192.249.18.173:80/user/location');
              const query = {
                newLocation: location,
                userName: userStore.userName,
              };
              Object.keys(query).forEach((key) =>
                url.searchParams.append(key, query[key]),
              );
              axios.put(encodeURI(url));
              userStore.updateUserLocation(location);
            }}
          />
        ) : (
          <ProfileText>{location}</ProfileText>
        )}
      </InfoContainer>
      {name === userStore.userName ? (
        <ProfileButton
          onPress={() => {
            if (isSetting) {
              uploadImage();
            }
            setIsSetting(!isSetting);
          }}
        >
          <ProfileSetting source={require('./asset/setting.png')} />
        </ProfileButton>
      ) : (
        <View />
      )}
    </Container>
  );
});

export default Profile;

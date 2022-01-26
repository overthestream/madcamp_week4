import React from "react";
import {View, Text, TouchableOpacity} from 'react-native';
import styled from "styled-components";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { useNavigation } from "@react-navigation/native";


const MainView = styled.View`
  width: 100%;
  align-items: center;
`;
const MainText = styled.Text`
  font-size: 22px;
  margin-top: 25px;
`;

const InfoView = styled.View`
  width: 95%;
  background: rgba(236, 231, 231, 1);
  align-items: center;
  margin-top: 25px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
`;
const MainInfo = styled.Text`
  font-weight: 600;
  font-size: 22px;
  margin-top: 30px;
  margin-bottom: 20px;
  color: #000000;
  line-height: 26px;
`
const MapContainer = styled.View`
  width : 100%;
  height : 250px;
`;

const InfoText = styled.Text`
  padding-top: 20px;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;

  color: #000000;
`;

const InfoMainText = styled.Text`
  padding-top: 15px;
  font-weight: bold;
  font-size: 22px;
  line-height: 26px;
  /* identical to box height */

  color: #000000;
`;
const AddressText = styled.Text`
  font-weight: 300; 
  font-size: 14px;
  line-height: 16px;
  align-items: center;
  color: #999999;
`;

const BottomView = styled.View`
  height: 20px;
  width: 100%;
`;

const GoBtnContainer = styled.View`
  width: 100%;
  height: 100px;
  align-items: center;
  justify-content: center;
`;
const GoBtn = styled.TouchableOpacity`
  background: rgba(0, 133, 255, 0.4);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  height: 40px;
  width : 80%;
`

const TextWrapper = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
  width: 100%;
  height: 100%;;
`;

const GoText = styled.Text`
  font-size: 15px;
  line-height: 18px;
  /* identical to box height */


  color: #FFFFFF;
`;


const MeetingDetail = (props) => {
  const infomation = props.route.params.props.item;
  // console.log(infomation)

  const navigation = useNavigation();
  const BtnClick = () => {
    alert('버튼 누름')
    navigation.reset({routes : [{name:"Default"}]})
  }
  const x = infomation.x;
  const y = infomation.y;
  const myLatLng = { lat: x, lng: y };
  return (
    <MainView>
      <MainText>초대합니다</MainText>
      
      <InfoView>
        <MainInfo>{infomation.name}</MainInfo>

        <MapContainer>
        {/* <MapView 
          style={{ flex: 1 }} 
          provider={PROVIDER_GOOGLE} 
          initialRegion={{ 
            latitude: x, 
            longitude: y, 
            latitudeDelta: 0.0922, 
            longitudeDelta: 0.0421, }} /> */}
            
      </MapContainer>
      <InfoText>어디서?</InfoText>
      <InfoMainText>{infomation.place_name}</InfoMainText>
      <AddressText>{infomation.address}</AddressText>
      <InfoText>언제?</InfoText>
      <InfoMainText>{infomation.year}년 {infomation.month}월 {infomation.day}일</InfoMainText>
      <BottomView/>
      <GoBtnContainer>
        <GoBtn onPress={BtnClick}>
          <TextWrapper>
            <GoText>
              나도 가고싶어!
            </GoText>
          </TextWrapper>
        </GoBtn>
      </GoBtnContainer>
      </InfoView>
    </MainView>
  );
}

export default MeetingDetail;
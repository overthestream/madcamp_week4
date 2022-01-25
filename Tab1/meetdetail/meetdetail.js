import React from "react";
import {View, Text} from 'react-native';
import styled from "styled-components";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";


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
  color: #000000;
  line-height: 26px;
`
const MeetingDetail = (props) => {
  const infomation = props.route.params.props.item;

  return (
    <MainView>
      <MainText>초대합니다</MainText>
      
      <InfoView>
        <MainInfo>{infomation.name}</MainInfo>
      </InfoView>

      <View style={{ flex: 1 }}>
        <MapView 
          // style={{ flex: 1 }} 
          // provider={PROVIDER_GOOGLE} 
          initialRegion={{ 
            latitude: 37.78825, 
            longitude: -122.4324, 
            latitudeDelta: 0.0922, 
            longitudeDelta: 0.0421, }} />
      </View>


    </MainView>
  );
}

export default MeetingDetail;
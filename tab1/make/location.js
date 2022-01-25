import React,{useState, useEffect} from "react";
import styled from "styled-components";
import {View, Text, StyleSheet, StatusBar ,FlatList, TextInput, SafeAreaView, TouchableOpacity} from 'react-native';
import { useNavigation } from "@react-navigation/native";
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';


const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: StatusBar.currentHeight || 0,
  },
})


//안쪽에 들어가는 TEXT 목록
const InnerContainer = styled.View`
  align-items: center;
`;

const PlaceHolder = styled.View`
  width: 95%;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
  background-color: rgba(239, 233, 233, 0.76);
`
const PlaceText = styled.Text`
  font-size: 17px;
  font-weight: 300;
`;
const NameText = styled.Text`
  font-size: 20px;
  font-weight: 700;
  color: #000;
`;

const ItemBox = ({props}) => {
  const navigation = useNavigation();
  const goNextScreen = () => {
     navigation.navigate('WhenToMeet',{props:props});
  }
  return(
  <TouchableOpacity onPress={goNextScreen}>
    <InnerContainer>
    <PlaceHolder>
      <NameText>{props.item.place_name}</NameText>
      <PlaceText>{props.item.road_address_name}</PlaceText>
    </PlaceHolder>
  </InnerContainer>
  </TouchableOpacity>
  );
};

const Location = (searchValue) => {
  const value = searchValue.props.searchValue;
  const renderItem = (props) => {
    return(
      <ItemBox props={props}/>
    );
  }

  return(
  <SafeAreaView style={styles.container}>
    <FlatList
      data={value}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  </SafeAreaView>
  );
}

export default Location;
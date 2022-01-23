import React,{useState, useEffect} from "react";
import styled from "styled-components";
import {View, Text, StyleSheet, StatusBar ,FlatList, TextInput, SafeAreaView, TouchableOpacity} from 'react-native';


const styles = StyleSheet.create({
  container: {
     
    width: '100%',
    marginTop: StatusBar.currentHeight || 0,
  },
})


const PlaceHolder = styled.View`
  width: 100px;
  /* height: 60px; */
  padding: 20px;
  /* height: 120px; */
  background-color: aqua;
`
const PlaceText = styled.Text`
  font-size: 20px;
  color: black;
`;

const Location = (searchValue) => {
  const value = searchValue.props.searchValue; 
  console.log(value )
  // console.log(searchValue.props.searchValue)
  
  const renderItem = (props) => {
    // console.log(props.item.place_name)
    return(
      <PlaceHolder>
      <PlaceText>{props.item.place_name}</PlaceText>
      <PlaceText>{props.item.road_address_name}</PlaceText>
      </PlaceHolder>
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
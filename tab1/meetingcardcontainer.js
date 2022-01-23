import React from "react";
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import styled from "styled-components";
import MeetingCard from "./nowmeetingcard";

const MeetData = [
  {
    'id': 1,
    'name' : '제호 생일 파티',
    'year' : '2022',
    'month' : '01',
    'day' : '10' 
  },
  {
    'id': 2,
    'name' : '제호 생일 파티',
    'year' : '2022',
    'month' : '01',
    'day' : '10' 
  },
  {
    'id': 3,
    'name' : '제호 생일 파티',
    'year' : '2022',
    'month' : '01',
    'day' : '10' 
  },
  {
    'id': 4,
    'name' : '제호 생일 파티',
    'year' : '2022',
    'month' : '01',
    'day' : '10' 
  },
  {
    'id': 5,
    'name' : '제호 생일 파티',
    'year' : '2022',
    'month' : '01',
    'day' : '10' 
  },
  {
    'id': 6,
    'name' : '제호 생일 파티',
    'year' : '2022',
    'month' : '01',
    'day' : '10' 
  },
  {
    'id': 7,
    'name' : '제호 생일 파티',
    'year' : '2022',
    'month' : '01',
    'day' : '10' 
  },
  {
    'id': 8,
    'name' : '제호 생일 파티',
    'year' : '2022',
    'month' : '01',
    'day' : '10' 
  }
]

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',

  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    width: '100%',
    marginVertical: 8,
    marginHorizontal: 16,
  },
  shadow:{
    shadowColor: "#000",
    shadowOffset: {
	    width: 0,
	    height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
  }
});

const MeetCard = (props) => {
  // console.log(props.props);
  // <MeetingCard  props={props}/>
  return(
    <MeetingCard item={props.props}/>
  );
}

const CardContainer = styled.View`
  flex: 1;
  margin-top: 10px;
`

const MeetingCardContainer = () => {
  const renderItem = (props) => {
    // console.log(props.item);
    return(<MeetCard props={props.item}/>);
  };

  return(
    <SafeAreaView style={styles.container}>
      <FlatList
        style={styles.shadow}
        data={MeetData}
        renderItem={renderItem}
        keyExtractor={item  => item.id}
      />
    </SafeAreaView>
  );
}

export default MeetingCardContainer;
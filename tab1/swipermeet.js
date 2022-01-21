import React, {Component} from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";

import Swiper from 'react-native-swiper';
import styled from "styled-components";
import Content from "./meeting";


const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
    // height: '40px'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
    // height: 40px
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
    // height: '40px'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
})

// const styles = StyleSheet.create({
//   textInput: {
//     width: '100%',
//     height: 70,
//     paddingTop: 5,
//     paddingBottom: 5,
//     backgroundColor: "#ffffff",
//     shadowColor: "#000",
//     shadowOffset: {  
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
// });

const Container = styled.View`
  width: 90%;
  margin: 0 auto;
  height: 150px;
  background: #F4F4F4;
  border-radius: 20px;
  display: flex;
  box-shadow: 10px 5px 5px black;

`
const OuterContainer = styled.View`
  height: 100%;
`;

export default class SwiperComponent extends React.Component {
  render() {
    return (
      <OuterContainer>
        <Swiper style={styles.wrapper}>
          <Container> 
            <Content/>
          </Container>
          <Container>
            <Content/>
          </Container>
          <Container>
            <Content/>
          </Container>
        </Swiper>
      </OuterContainer>
    )
  }
}
// AppRegistry.registerComponent('WEEK4', () => SwiperComponent)

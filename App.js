import GHT from './Tab1/GHT';
import Talk from './Tab1/Talk';
import EventDay from './Tab1/EventDay';
import Login from './Login/Login';
//import 방명록
// import 약속
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function App() {
  console.log("main")
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="근황 토크" component={GHT} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
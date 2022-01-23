import GHT from './Tab1/GHT';
import Talk from './Tab1/Talk';
import EventDay from './Tab1/EventDay';
//import 방명록
// import 약속
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

//Stack에서 작동하는 Navigator와 Screen를 위해 함수 추가
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function App() {
  console.log("main")
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={GHT} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
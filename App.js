import GHT from './Tab1/GHT';
// import Talk from './Tab1/Talk';
import Meet from './Tab1/meet';
// import EventDay from './Tab1/EventDay';
import VisitTab from './visit/VisitTab';
import { createStackNavigator } from '@react-navigation/stack';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import MeetMainPage from './Tab1/meet';
import WhenToMeet from './Tab1/make/makemeet';
import React, { useLayoutEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchLocation from './Tab1/make/setlocation';

const Tab = createBottomTabNavigator();

export default function App() {
  console.log('main');
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="근황 토크" component={GHT} />
        <Tab.Screen name="약속 잡기" component={MeetStackScreen} />
        <Tab.Screen name="방명록" component={VisitTab} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator();

function MeetStackScreen() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Default" component={MeetMainPage} />
      <Stack.Screen name="Make" component={SearchLocation} />
      <Stack.Screen name="WhenToMeet" component={WhenToMeet} />
    </Stack.Navigator>
  );
}

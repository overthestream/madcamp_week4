import GHT from './tab1/GHT';
// import Talk from './Tab1/Talk';
import Meet from './tab1/meet';
// import EventDay from './Tab1/EventDay';
import VisitTab from './visit/VisitTab';
import { createStackNavigator } from '@react-navigation/stack';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import MeetMainPage from './tab1/meet';
import WhenToMeet from './tab1/make/makemeet';
import React, { useLayoutEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchLocation from './tab1/make/setlocation';
import Login from './Login/Login'
import MeetingDetail from './tab1/meetdetail/meetdetail';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  console.log('main');
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="main" component={MainStackScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}  

function MainStackScreen() {
  return (
    <Tab.Navigator  screenOptions={{ headerShown: false }}>
      <Tab.Screen name="근황 토크" component={PostStackScreen} />
      <Tab.Screen name="약속 잡기" component={MeetStackScreen} />
      <Tab.Screen name="방명록" component={VisitTab}/>
    </Tab.Navigator>
  )
}

function MeetStackScreen(){

  return(
    <Stack.Navigator
    screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Default" component={MeetMainPage}/>
      <Stack.Screen name="MeetingDetailInfo" component={MeetingDetail}/>
      <Stack.Screen name="Make" component={SearchLocation}/>
      <Stack.Screen name="WhenToMeet" component={WhenToMeet}/>
    </Stack.Navigator>
    
  )
}

function PostStackScreen(){
  return(
    <Stack.Navigator
    screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Original" component={GHT}/>
      <Stack.Screen name="VisitProfile" component={VisitTab}/>
    </Stack.Navigator>
  )
}

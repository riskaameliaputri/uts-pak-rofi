import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../pages/Home';
import Pencarian from '../pages/Pencarian';
import Profil from '../pages/Profil';
import { BottomNavigator } from '../components';
// import { IconHomeActive } from '../assets';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// const IconHomeActive = () => {
//   return (
//     <svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
//       <path d="M22 22.2487V14.4227C22.0001 13.8782 21.889 13.3395 21.6735 12.8394C21.458 12.3394 21.1428 11.8886 20.747 11.5147L13.374 4.54669C13.0027 4.19561 12.511 4 12 4C11.489 4 10.9973 4.19561 10.626 4.54669L3.253 11.5147C2.85722 11.8886 2.54195 12.3394 2.3265 12.8394C2.11104 13.3395 1.99994 13.8782 2 14.4227V22.2487C2 22.7791 2.21071 23.2878 2.58579 23.6629C2.96086 24.038 3.46957 24.2487 4 24.2487H20C20.5304 24.2487 21.0391 24.038 21.4142 23.6629C21.7893 23.2878 22 22.7791 22 22.2487Z" stroke="#676767" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//     </svg>
//   )
// }


const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props}/>}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Pencarian" component={Pencarian} />
        <Tab.Screen name="Profil" component={Profil} />
      </Tab.Navigator>
  )
}


const Router = () => {
  return (
    <Stack.Navigator initialRouteName="MainApp">
        <Stack.Screen name="MainApp" component={MainApp} options={{ headerShown: false }}/>
      </Stack.Navigator>
  )
}

export default Router

const styles = StyleSheet.create({})
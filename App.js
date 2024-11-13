import React from 'react';

import HomeScreen from "./screens/homeScreen";
import ChatScreen from "./screens/chatScreen";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="chat" component={ChatScreen} /> 
    </Stack.Navigator>
  </NavigationContainer>
  );
}



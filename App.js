import 'react-native-gesture-handler';
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
      <Stack.Screen name="chat" component={ChatScreen} options={{
          headerStyle: {
            backgroundColor: '#0098D0', 
            height: 150,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontSize: 30,
            fontWeight: 'bold', 
          },
        }}/> 
    </Stack.Navigator>
  </NavigationContainer>
  );
}



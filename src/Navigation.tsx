import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './Home';
import InputScreen from './InputScreen';
const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{title: 'List'}} />
        <Stack.Screen name="InputScreen" component={InputScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

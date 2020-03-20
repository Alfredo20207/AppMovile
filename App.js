/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
//import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { Container, Content, Card, CardItem, Text, Body, Button, Icon, Item, Label } from 'native-base';
import Login from './screen/Login';
import Registro from './screen/Registro';
import Perfil from './screen/Perfil';
import Principal from './screen/Principal';
import Principal2 from './screen/Principal2';

import Search from './screen/Search';
import 'react-native-gesture-handler';
import * as React from 'react';

const Stack = createStackNavigator();

const App: () => React$Node = () => {


  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen
          name = 'Login'
          component = {Login}
        />

        <Stack.Screen
          name = 'Registro'
          component = {Registro}
        />

        <Stack.Screen
        name='Perfil'
        component = {Perfil}
        />

        <Stack.Screen
        name='Principal'
        component = {Principal}
        />

        <Stack.Screen
        name ='Principal2'
        component ={Principal2}
        />

        
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;


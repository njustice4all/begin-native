import React from 'react';
import { StackNavigator } from 'react-navigation';

import HomeScreen from './navigatorComponents/HomeScreen';
import ChatScreen from './navigatorComponents/ChatScreen';

const NavigationExample = StackNavigator({
  Home: { screen: HomeScreen },
  Lucy: { screen: ChatScreen }
});

export default NavigationExample;

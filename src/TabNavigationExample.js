import React from 'react';
import { TabNavigator } from 'react-navigation';

import RecentChatScreen from './navigatorComponents/RecentChatScreen';
import AllContactsScreen from './navigatorComponents/AllContactsScreen';

const TabNavigationExample = TabNavigator({
  Recent: { screen: RecentChatScreen },
  Contacts: { screen: AllContactsScreen }
});

export default TabNavigationExample;

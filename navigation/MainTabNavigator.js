import React from 'react';
import { Platform, Text, View } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import TradeScreen from '../screens/TradeScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'О приложении',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

HomeStack.path = '';

const TradeStack = createStackNavigator(
  {
    Trade: TradeScreen,
  },
  config
);

TradeStack.navigationOptions = {
  tabBarLabel: 'Котировки',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
};

TradeStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  TradeStack,
},);

tabNavigator.path = '';

export default tabNavigator;

import React from 'react';
import {View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';
import tw from '../libs/tailwind';

import HomeScreen from '../screens/HomeScreen';
import SalesScreen from '../screens/SalesScreen';

const AppTabNavigator = () => {
  const Tab = createBottomTabNavigator();

  const renderTabBarIcon = ({focused, icon, focusedIcon}) => {
    return (
      <View
        style={[
          {top: 20},
          focused
            ? {
                top: 20,
                shadowColor: '#DE64B9',
                shadowOpacity: 0.5,
                shadowRadius: 2,
                shadowOffset: {
                  height: 2,
                  width: 2,
                },
                elevation: 2,
              }
            : null,
        ]}>
        <Ionicons
          name={focused ? focusedIcon : icon}
          color={focused ? '#DE64B9' : '#221F40'}
          size={25}
        />
      </View>
    );
  };

  return (
    <Tab.Navigator
      initialRouteName="sales"
      sceneContainerStyle={tw`bg-transparent`}
      tabBarOptions={{
        showLabel: false,
        style: tw`shadow-md bg-white absolute bottom-12 left-6 right-6 rounded-xl`,
      }}>
      <Tab.Screen
        name={'home'}
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) =>
            renderTabBarIcon({
              focused,
              icon: 'home-outline',
              focusedIcon: 'home',
            }),
        }}
      />
      <Tab.Screen
        name={'sales'}
        component={SalesScreen}
        options={{
          tabBarIcon: ({focused}) =>
            renderTabBarIcon({
              focused,
              icon: 'flash-outline',
              focusedIcon: 'flash',
            }),
        }}
      />
      <Tab.Screen
        name={'notify'}
        component={SalesScreen}
        options={{
          tabBarIcon: ({focused}) =>
            renderTabBarIcon({
              focused,
              icon: 'chatbubble-outline',
              focusedIcon: 'chatbubble',
            }),
        }}
      />
      <Tab.Screen
        name={'profile'}
        component={SalesScreen}
        options={{
          tabBarIcon: ({focused}) =>
            renderTabBarIcon({
              focused,
              icon: 'person-outline',
              focusedIcon: 'person',
            }),
        }}
      />
    </Tab.Navigator>
  );
};
export default AppTabNavigator;

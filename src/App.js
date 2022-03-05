import 'react-native-gesture-handler';
import React from 'react';
import {View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import SalesScreen from './screens/SalesScreen';
import tw from './libs/tailwind';
const App = () => {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          showLabel: false,
          style: [
            tw`shadow-md`,
            {
              backgroundColor: '#FFFFFF',
              position: 'absolute',
              padding: 0,
              bottom: 50,
              left: 20,
              right: 20,
              height: 80,
              borderRadius: 16,
            },
          ],
        }}>
        <Tab.Screen
          name={'home'}
          component={HomeScreen}
          options={{
            tabBarIcon: ({size, focused}) => {
              return focused ? (
                <View
                  style={{
                    top: 20,
                    shadowColor: '#DE64B9',
                    shadowOpacity: 0.5,
                    shadowRadius: 2,
                    shadowOffset: {
                      height: 2,
                      width: 2,
                    },
                    elevation: 2,
                  }}>
                  <Ionicons name="home" color={'#DE64B9'} size={size} />
                </View>
              ) : (
                <View
                  style={{
                    top: 20,
                  }}>
                  <Ionicons name="home-outline" color={'#221F40'} size={size} />
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name={'workbench'}
          component={SalesScreen}
          options={{
            tabBarIcon: ({size, focused}) => {
              return focused ? (
                <View
                  style={{
                    top: 20,
                    shadowColor: '#DE64B9',
                    shadowOpacity: 0.5,
                    shadowRadius: 2,
                    shadowOffset: {
                      height: 2,
                      width: 2,
                    },
                    elevation: 2,
                  }}>
                  <Ionicons name="analytics" color={'#DE64B9'} size={size} />
                </View>
              ) : (
                <View
                  style={{
                    top: 20,
                  }}>
                  <Ionicons
                    name="analytics-outline"
                    color={'#221F40'}
                    size={size}
                  />
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name={'notify'}
          component={SalesScreen}
          options={{
            tabBarIcon: ({size, focused}) => {
              return focused ? (
                <View
                  style={{
                    top: 20,
                    shadowColor: '#DE64B9',
                    shadowOpacity: 0.5,
                    shadowRadius: 2,
                    shadowOffset: {
                      height: 2,
                      width: 2,
                    },
                    elevation: 2,
                  }}>
                  <Ionicons name="chatbubble" color={'#DE64B9'} size={size} />
                </View>
              ) : (
                <View
                  style={{
                    top: 20,
                  }}>
                  <Ionicons
                    name="chatbubble-outline"
                    color={'#221F40'}
                    size={size}
                  />
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name={'profile'}
          component={SalesScreen}
          options={{
            tabBarIcon: ({size, focused}) => {
              return focused ? (
                <View
                  style={{
                    top: 20,
                    shadowColor: '#DE64B9',
                    shadowOpacity: 0.5,
                    shadowRadius: 2,
                    shadowOffset: {
                      height: 2,
                      width: 2,
                    },
                    elevation: 2,
                  }}>
                  <Ionicons name="person" color={'#DE64B9'} size={size} />
                </View>
              ) : (
                <View
                  style={{
                    top: 20,
                  }}>
                  <Ionicons
                    name="person-outline"
                    color={'#221F40'}
                    size={size}
                  />
                </View>
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default App;

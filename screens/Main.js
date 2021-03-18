import React from 'react';
import {View, Text, StatusBar, StyleSheet, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Toast from 'react-native-toast-message';

import AddScreen from './subScreens/AddScreen';
import SearchScreen from './subScreens/SearchScreen';

const Tab = createBottomTabNavigator();

const MainScreen = () => {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Add"
          backBehavior="history"
          lazy={true}
          tabBarOptions={{
            activeTintColor: '#fcfcfc', // tab text color
            inactiveTintColor: '#F5F4F4', // inactive tab text color
            activeBackgroundColor: '#d93316',
            inactiveBackgroundColor: '#bf0a0a',
            tabStyle: {
              paddingTop: 5,
            },
            style: {
              height: 55,
            },
            labelPosition: 'below-icon',
            labelStyle: {
              marginBottom: 6,
            },
          }}>
          <Tab.Screen
            name="Add"
            component={AddScreen}
            options={{
              tabBarIcon: ({color, size}) => (
                <Image
                  source={require('../assets/icons/add.png')}
                  style={{
                    width: 30,
                    height: 30,
                    tintColor: color,
                  }}
                />
              ),
            }}
          />
          <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <Image
                source={require('../assets/icons/search.png')}
                style={{
                  width: 30,
                  height: 30,
                  tintColor: color,
                }}
              />
            ),
          }}
        />
        </Tab.Navigator>
      </NavigationContainer>
      
      <Toast ref={ref => Toast.setRef(ref)} />
    </>
  );
};

export default MainScreen;

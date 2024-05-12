/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {CheckIcon, FavouriteIcon, NativeBaseProvider} from 'native-base';
import React from 'react';
import theme from './theme/index';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './src/pages/home';
import DetailsScreen from './src/pages/details';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Providers from './src/providers';
const Tab = createMaterialBottomTabNavigator();

function App(): React.JSX.Element {
  return (
    <Providers>
      <NavigationContainer>
        <NativeBaseProvider theme={theme}>
          <Tab.Navigator
            activeColor="#fff"
            activeIndicatorStyle={{
              backgroundColor: '#A4A3A0',
            }}
            inactiveColor="#A4A3A0"
            barStyle={{backgroundColor: '#383839'}}>
            <Tab.Screen
              options={{
                tabBarColor: '#fff',
                tabBarIcon: () => <CheckIcon size="5" mt="0.5" color="#fff" />,
              }}
              name="HomeScreen"
              component={HomeScreen}
            />
            <Tab.Screen
              name="DetailsScreen"
              component={DetailsScreen}
              options={{
                tabBarColor: '#fff',
                tabBarIcon: () => (
                  <FavouriteIcon size="5" mt="0.5" color="#fff" />
                ),
              }}
            />
          </Tab.Navigator>
        </NativeBaseProvider>
      </NavigationContainer>
    </Providers>
  );
}

export default App;

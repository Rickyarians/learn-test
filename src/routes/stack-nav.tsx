import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { enableScreens } from 'react-native-screens';
import BottomTabNavigator from './tabs-nav';
import { HomePageScr } from 'app/modules/main-menu';
import { Notif } from 'app/modules/notifications';
import {
  VerifNumber,
  SplashScreen,
  VerifPIN
} from 'app/modules/auth';

import { useSelector } from 'react-redux';
import { AuthState } from 'types';



enableScreens();
function Routes() {
  const PublicStack = createStackNavigator();
  const PrivateStack = createStackNavigator();
  const { user_data }: AuthState = useSelector(({ auth }: any) => auth);
  const screenOptions: any = { ...TransitionPresets.SlideFromRightIOS, headerShown: false };

  if (!user_data.token) {
    return (
      <NavigationContainer>
        <PublicStack.Navigator screenOptions={screenOptions}>
          <PublicStack.Screen name="SplashScreen" component={SplashScreen} />
          <PublicStack.Screen name="VerifNumber" component={VerifNumber} />
          <PublicStack.Screen name="VerifPin" component={VerifPIN} />
        </PublicStack.Navigator>
      </NavigationContainer>
    );
  }
  return (
    <NavigationContainer>
      <PrivateStack.Navigator screenOptions={screenOptions}>
        <PrivateStack.Screen name="Main" component={BottomTabNavigator} />
        <PrivateStack.Screen name="HomePage" component={HomePageScr} />
        <PrivateStack.Screen name="Notif" component={Notif} />
     
      </PrivateStack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;

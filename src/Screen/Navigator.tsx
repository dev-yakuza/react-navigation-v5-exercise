import React, {useContext} from 'react';
import {UserContext} from '~/Context/User';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import SignIn from './SignIn';
import SignUp from './SignUp';
import ResetPassword from './ResetPassword';
import TabFirst from './TabFirst';
import TabSecond from './TabSecond';
import TabThird from './TabThird';
import TabFourth from './TabFourth';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const LoginStackNavi = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerBackTitleVisible: false}}
      />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
    </Stack.Navigator>
  );
};

const MainTabNavi = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="TabFirst" component={TabFirst} />
      <Tab.Screen name="TabSecond" component={TabSecond} />
      <Tab.Screen name="TabThird" component={TabThird} />
      <Tab.Screen name="TabFourth" component={TabFourth} />
    </Tab.Navigator>
  );
};

export default () => {
  const {userInfo} = useContext<IUserContext>(UserContext);

  console.log;
  return (
    <NavigationContainer>
      {userInfo ? <MainTabNavi /> : <LoginStackNavi />}
    </NavigationContainer>
  );
};

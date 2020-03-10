import React, {useContext} from 'react';
import {UserContext} from '~/Context/User';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
  DrawerContentComponentProps,
  DrawerContentOptions,
} from '@react-navigation/drawer';

import SignIn from './SignIn';
import SignUp from './SignUp';
import ResetPassword from './ResetPassword';
import TabFirst from './TabFirst';
import TabSecond from './TabSecond';
import TabThird from './TabThird';
import TabFourth from './TabFourth';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const MaterialTab = createMaterialBottomTabNavigator();
const MaterailTopTab = createMaterialTopTabNavigator();

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

const TabNavi = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="TabFirst" component={TabFirst} />
      <Tab.Screen name="TabSecond" component={TabSecond} />
      <Tab.Screen name="TabThird" component={TabThird} />
      <Tab.Screen name="TabFourth" component={TabFourth} />
    </Tab.Navigator>
  );
};

const MaterailTabNavi = () => {
  return (
    <MaterialTab.Navigator>
      <MaterialTab.Screen name="TabFirst" component={TabFirst} />
      <MaterialTab.Screen name="TabSecond" component={TabSecond} />
      <MaterialTab.Screen name="TabThird" component={TabThird} />
      <MaterialTab.Screen name="TabFourth" component={TabFourth} />
    </MaterialTab.Navigator>
  );
};

const MaterailTopTabNavi = () => {
  return (
    <MaterailTopTab.Navigator>
      <MaterailTopTab.Screen name="TabFirst" component={TabFirst} />
      <MaterailTopTab.Screen name="TabSecond" component={TabSecond} />
      <MaterailTopTab.Screen name="TabThird" component={TabThird} />
      <MaterailTopTab.Screen name="TabFourth" component={TabFourth} />
    </MaterailTopTab.Navigator>
  );
};

const CustomDrawerContent = (
  props: DrawerContentComponentProps<DrawerContentOptions>,
  logout: () => void,
) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="Logout" onPress={() => logout()} />
    </DrawerContentScrollView>
  );
};
const DrawNavi = () => {
  const {logout} = useContext<IUserContext>(UserContext);

  return (
    <Drawer.Navigator
      drawerContent={props => CustomDrawerContent(props, logout)}>
      <Drawer.Screen name="TabNavi" component={TabNavi} />
      <Drawer.Screen name="MaterailTabNavi" component={MaterailTabNavi} />
      <Drawer.Screen name="MaterailTopTabNavi" component={MaterailTopTabNavi} />
    </Drawer.Navigator>
  );
};

export default () => {
  const {userInfo} = useContext<IUserContext>(UserContext);

  console.log(userInfo);
  return (
    <NavigationContainer>
      {userInfo ? <DrawNavi /> : <LoginStackNavi />}
    </NavigationContainer>
  );
};

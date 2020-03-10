import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  StackHeaderLeftButtonProps,
} from '@react-navigation/stack';
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
  DrawerNavigationProp,
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {UserContext} from '~/Context/User';

import IconButton from '~/Component/IconButton';

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

type TabFirstStackNavigationProp = DrawerNavigationProp<
  {
    TabNavi: undefined;
    MaterialTabNavi: undefined;
    MaterialTopTabNavi: undefined;
    Logout: undefined;
  },
  'TabNavi'
>;
interface TabFirstStackNaviProps {
  navigation: TabFirstStackNavigationProp;
}
const TabFirstStackNavi = ({navigation}: TabFirstStackNaviProps) => {
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
        name="TabFirst"
        component={TabFirst}
        options={{
          headerLeft: (props: StackHeaderLeftButtonProps) => (
            <IconButton
              iconName="menu"
              onPress={() => navigation.openDrawer()}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

const TabNavi = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="TabFirstStackNavi" component={TabFirstStackNavi} />
      <Tab.Screen name="TabSecond" component={TabSecond} />
      <Tab.Screen name="TabThird" component={TabThird} />
      <Tab.Screen name="TabFourth" component={TabFourth} />
    </Tab.Navigator>
  );
};

const MaterialTabNavi = () => {
  return (
    <MaterialTab.Navigator>
      <MaterialTab.Screen
        name="TabFirst"
        component={TabFirst}
        options={{
          tabBarColor: '#281b39',
          tabBarLabel: 'Frist',
          tabBarIcon: ({color}) => <Icon name="home" color={color} size={26} />,
        }}
      />
      <MaterialTab.Screen
        name="TabSecond"
        component={TabSecond}
        options={{
          tabBarColor: '#0e141d',
          tabBarLabel: 'Second',
          tabBarIcon: ({color}) => (
            <Icon name="people" color={color} size={26} />
          ),
        }}
      />
      <MaterialTab.Screen
        name="TabThird"
        component={TabThird}
        options={{
          tabBarColor: '#E64A19',
          tabBarLabel: 'Third',
          tabBarIcon: ({color}) => (
            <Icon name="message" color={color} size={26} />
          ),
        }}
      />
      <MaterialTab.Screen
        name="TabFourth"
        component={TabFourth}
        options={{
          tabBarColor: '#524365',
          tabBarLabel: 'Fourth',
          tabBarIcon: ({color}) => (
            <Icon name="settings" color={color} size={26} />
          ),
        }}
      />
    </MaterialTab.Navigator>
  );
};

const MaterialTopTabNavi = () => {
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
      <Drawer.Screen name="MaterialTabNavi" component={MaterialTabNavi} />
      <Drawer.Screen name="MaterialTopTabNavi" component={MaterialTopTabNavi} />
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

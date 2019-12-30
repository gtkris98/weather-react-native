import React from 'react';
import {Icon} from 'react-native-elements';
import {Animated, Easing, Image, View, ShadowPropTypesIOS} from 'react-native';
import Dashboard from '../screens/dashboard';
import Favourites from '../screens/favourites';
import ForgotPassword from '../screens/forgotPassword';
import Loading from '../screens/loading';
import Login from '../screens/login';
import Register from '../screens/register';
import Settings from '../screens/settings';
import WeatherDeatils from '../screens/weatherDeatils';
import {createSwitchNavigator} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import {
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native-gesture-handler';

const FavouritesStack = createStackNavigator(
  {Favourites, WeatherDeatils},
  {defaultNavigationOptions: {title: 'Favourites', }},
);
const HomeStack = createStackNavigator(
  {
    Dashboard: {
      screen: Dashboard,
      navigationOptions: ({navigation}) => ({
        headerLeft: (
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <Image
              style={{
                width: 25,
                height: 25,
                tintColor: 'black',
                marginLeft: 10,
              }}
              source={require('../assets/icons/hamburger.png')}
            />
          </TouchableOpacity>
        ),
      }),
    },
  },
  {
    defaultNavigationOptions: {
      title: 'Weather',
      headerTitleStyle: {padding: 0, margin: 0},
    },
  },
);
const SettingsStack = createStackNavigator({Settings});
const HomeTabs = createMaterialTopTabNavigator(
  {
    Dashboard: {
      screen: HomeStack,
      navigationOptions: {
        tabBarLabel: 'Weather',
        tabBarIcon: ({tintColor}) => {
          return (
            <Image
              style={{width: 20, height: 20, tintColor: tintColor}}
              source={require('../assets/icons/weather.png')}
            />
          );
        },
      },
    },
    FavouritesStack: {
      screen: FavouritesStack,
      navigationOptions: {
        tabBarLabel: 'Favourites',
        tabBarIcon: ({tintColor}) => {
          return (
            <Image
              style={{width: 20, height: 20, tintColor: tintColor}}
              source={require('../assets/icons/favourites.png')}
            />
          );
        },
      },
    },
  },
  {
    swipeEnabled: true,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      showIcon: true,
      activeTintColor: 'deepskyblue',
      inactiveTintColor: 'gray',
      style: {
        backgroundColor: 'white',
      },
    },
  },
);
const MainNavigator = createDrawerNavigator(
  {
    Home: {
      screen: HomeTabs,
    },
  },
  {
    drawerWidth: 300,
    drawerPosition: 'left',
    drawerType: 'slide',
    edgeWidth: 50,
  },
);
const AuthTabs = createBottomTabNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: {
        tabBarLabel: 'Login',
        tabBarIcon: ({tintColor}) => {
          return (
            <Image
              style={{width: 20, height: 20, tintColor: tintColor}}
              source={require('../assets/icons/login.png')}
            />
          );
        },
      },
    },
    Register: {
      screen: Register,
      navigationOptions: {
        tabBarLabel: 'Register',
        tabBarIcon: ({tintColor}) => {
          return (
            <Image
              style={{width: 20, height: 20, tintColor: tintColor}}
              source={require('../assets/icons/register.png')}
            />
          );
        },
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: 'deepskyblue',
      inactiveTintColor: 'gray',
    },
  },
);
const RootSwitch = createSwitchNavigator(
  {Loading, AuthTabs, MainNavigator},
  {initialRouteName: 'AuthTabs'},
);

export default RootSwitch;

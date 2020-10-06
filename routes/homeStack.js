import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../Screens/home';
import ReviewDetails from '../Screens/reviewDetails';
import Header from '../shared/header';
import React from 'react'

const screens = {
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} title="GameZone"/>
      }
    }
  },
  ReviewDetails: {
    screen: ReviewDetails,
  }
}

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: { backgroundColor: '#eee', height: 100 },
    headerTintColor: '#444'
  }
})

export default  HomeStack
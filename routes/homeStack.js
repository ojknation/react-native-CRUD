import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../Screens/home';
import ReviewDetails from '../Screens/reviewDetails';

const screens = {
  Home: {
    screen: Home
  },
  ReviewDetails: {
    screen: ReviewDetails
  }
}

const HomeStack = createStackNavigator(screens)

export default createAppContainer(HomeStack)
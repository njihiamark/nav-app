import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import {Platform} from 'react-native';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealScreen';
import MealDetailScreen from '../screens/MealDetailScreen';

import Colors from '../constants/Colors';

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
      navigationOptions: {
        headerTitle: 'Meal Categories'
      }
    },
    CategoryMeals: {
      screen: CategoryMealsScreen
    },
    MealDetail: MealDetailScreen
  },
  {
    defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: Platform.OS === 'android'? Colors.primaryColor : ''
        },
        headerTintColor: Platform.OS === 'android'? '#ffffff' : Colors.primaryColor
    }
  }
);

export default createAppContainer(MealsNavigator);

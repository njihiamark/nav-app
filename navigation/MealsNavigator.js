import React from 'react';
import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { createBottomTabNavigator } from 'react-navigation-tabs';

import {Platform} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';

import Colors from '../constants/Colors';
import { createDrawerNavigator } from 'react-navigation-drawer';

const defaultStackNavOptions = {
      headerStyle: {
        backgroundColor: Platform.OS === 'android'? Colors.primaryColor : ''
      },
      headerTintColor: Platform.OS === 'android'? '#ffffff' : Colors.primaryColor
}

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
    defaultNavigationOptions: defaultStackNavOptions
  }
);

const FavNavigator = createStackNavigator({
  Favorites: FavoritesScreen,
  MealDetail: MealDetailScreen
},{
  defaultNavigationOptions: defaultStackNavOptions
});

const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator, navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor}/>
      },
      tabBarColor: Colors.primaryColor
    }},
  Favorites: {
    screen: FavNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor}/>
      },
      tabBarColor: Colors.accentColor
    }
  }
};

const MealsFavTabNavigator = 
Platform.OS === 'android' ? createMaterialBottomTabNavigator(tabScreenConfig,
  {
    activeColor: 'white',
    shifting: true
  }) 
: createBottomTabNavigator(tabScreenConfig,{
  tabBarOptions: {
    activeTintColor: Colors.accentColor
  }
});

const FiltersNavigator =  createStackNavigator({
  Filters: FiltersScreen
});

const MainNavigator = createDrawerNavigator({
  MealsFavs: MealsFavTabNavigator,
  Filters: FiltersNavigator
});

export default createAppContainer(MainNavigator);

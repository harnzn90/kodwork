import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Favorites from "./src/pages/Favo/Favorites";
import { JobsScreenNavi } from './customNavigator';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import details from './src/pages/Details/Details';
import WorkProvider from './src/components/context/FavProvider/Provider';

const Stack=createNativeStackNavigator();
const Tab=createBottomTabNavigator();

const Router =()=>{
  return(

    <WorkProvider>

    <NavigationContainer>
     <Tab.Navigator 
       screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'Jobs') {
            return (
              <Icon
                name={"account-group"}
                size={30}
                color={color}
              />
            );
          } else if (route.name === 'Favorites') {
            return (
              <Icon
                name={"star"}
                size={size}
                color={color}
              />
            );
          }
        },
        tabBarInactiveTintColor: 'tomato',
        tabBarActiveTintColor: 'steelblue',
      })}
     >  
        <Tab.Screen name="Jobs" component={JobsScreenNavi}  options={{ headerShown: false }}/>
        <Tab.Screen name="Favorites" component={Favorites}  options={{ headerShown: false }}/>
      </Tab.Navigator>
    </NavigationContainer>
    </WorkProvider>
  )
};

const Details=()=>{
  
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Details" component={details}></Stack.Screen>
    </Stack.Navigator>
    </NavigationContainer>
  
}


export default Router;
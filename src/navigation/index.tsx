import React from "react";
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import Task1 from "../screen/task1";
import DetailPage from "../screen/detailPage";
import { styles } from "./style";
import { colors } from "../assets/theme/color";

const Stack = createStackNavigator();
const BottomTabs = createBottomTabNavigator();

const Drawer = createDrawerNavigator();

const Navigation = () => {
  
  const BottomNavigation = () => {
    return (
      <BottomTabs.Navigator
        initialRouteName="Task1"
        screenOptions={{lazy: false}}>
        <BottomTabs.Screen
          component={Task1}
          name= 'Task1'
          options={{
            headerShown: false,
            tabBarShowLabel: false,

            tabBarIcon: ({focused}) =>
              focused ? (
                <View style={styles.iconView}>
                  
                  <Text style={styles.tabBarActiveLabel}>Task1</Text>
                </View>
              ) : (
                <View style={styles.iconView}>
                  
                  <Text style={styles.tabBarInactiveLabel}>Task1</Text>
                </View>
              ),
            tabBarStyle: {
              backgroundColor: colors.white,
              position: 'absolute',
              height: 70,
              bottom: 15,
              right: 20,
              left: 20,
              borderRadius: 15,
              shadowColor: '#7F5DF0',
              shadowOffset: {width: 0, height: 10},
              shadowOpacity: 0.25,
              shadowRadius: 3.5,
              elevation: 5,
              paddingHorizontal:10,
            },
          }}
        />

        <BottomTabs.Screen
          component={DetailPage}
          name='DetailPage'
          options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: ({focused}) =>
              focused ? (
                <View style={styles.iconView}>
                 
                  <Text style={styles.tabBarActiveLabel}>Task3</Text>
                </View>
              ) : (
                <View style={styles.iconView}>
                  
                  <Text style={styles.tabBarInactiveLabel}>Task3</Text>
                </View>
              ),
            tabBarStyle: {
              backgroundColor: colors.white,
              position: 'absolute',
              height: 70,
              bottom: 15,
              right: 20,
              left: 20,
              borderRadius: 15,
              shadowColor: '#7F5DF0',
              shadowOffset: {width: 0, height: 10},
              shadowOpacity: 0.25,
              shadowRadius: 3.5,
              elevation: 5,
              paddingHorizontal:10,
            },
          }}
        />
      </BottomTabs.Navigator>
    );
  };

  
  return (
    <NavigationContainer >
      <Drawer.Navigator>
        <Drawer.Screen
          name='BottomNavigation'
          component={BottomNavigation} 
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;